import { ClassID } from '@/lib/types/types';
import { useAppSelector } from '@/store/hooks';
import { useMemo } from 'react';

const useLevelByClass = () => {
  const characterClasses = useAppSelector(
    (state) => state.sheet.rawCharacter?.CharacterToClass
  );
  const levelsByClass = useMemo(() => {
    if (!characterClasses) return {};
    const res = {} as Record<ClassID, number>;
    characterClasses.forEach((c) => {
      res[c.classId] = c.levelsInClass;
    });
    return res;
  }, [characterClasses]);

  return levelsByClass;
};

export default useLevelByClass;
