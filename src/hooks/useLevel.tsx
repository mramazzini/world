import { useAppSelector } from '@/store/hooks';
import { useMemo } from 'react';

const useLevel = () => {
  const character = useAppSelector((state) => state.character);

  const level = useMemo(() => {
    if (!character) return 1;
    if (!character.state) return 1;
    return character.state.classLevels.reduce((acc, cur) => acc + cur.level, 0);
  }, [character]);

  return level;
};

export default useLevel;
