import { useAppSelector } from '@/store/hooks';
import { useMemo } from 'react';

const useMulticlass = () => {
  const Classes = useAppSelector(
    (state) => state.sheet.rawCharacter?.CharacterToClass
  );

  const multiclasses = useMemo(() => {
    if (!Classes) return [];
    const classes = Classes.filter((c) => !c.primaryClass);
    return classes;
  }, [Classes]);

  return multiclasses;
};

export default useMulticlass;
