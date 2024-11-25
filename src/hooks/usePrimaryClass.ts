import { useAppSelector } from '@/store/hooks';
import { useMemo } from 'react';

const usePrimaryClass = () => {
  const classes = useAppSelector(
    (state) => state.sheet.rawCharacter?.CharacterToClass
  );
  const primaryClass = useMemo(() => {
    if (!classes) return null;
    const _class = classes.find((c) => c.primaryClass);
    if (!_class) return null;
    return _class;
  }, [classes]);
  return primaryClass;
};

export default usePrimaryClass;
