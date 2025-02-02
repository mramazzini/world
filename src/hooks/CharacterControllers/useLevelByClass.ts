import { ClassID } from '@/lib/types/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setLevelsByClass } from '@/store/sheetSlice';
import { useEffect } from 'react';

const useLevelByClass = () => {
  const characterClasses = useAppSelector(
    (state) => state.sheet.rawCharacter?.CharacterToClass
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!characterClasses) return;
    const res = {} as Record<ClassID, number>;
    characterClasses.forEach((c) => {
      res[c.classId] = c.levelsInClass;
    });
    dispatch(setLevelsByClass(res));
  }, [characterClasses, dispatch]);
};

export default useLevelByClass;
