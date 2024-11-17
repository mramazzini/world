import { useAppSelector } from '@/store/hooks';
import { useMemo } from 'react';

const useLevel = () => {
  const character = useAppSelector((state) => state.sheet.rawCharacter);

  const level = useMemo(() => {
    if (!character) return 1;
    return character.CharacterToClass.reduce(
      (acc, cur) => acc + cur.levelsInClass,
      0
    );
  }, [character]);

  return level;
};

export default useLevel;
