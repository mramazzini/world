import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setPrimaryClass } from '@/store/sheetSlice';
import { useEffect } from 'react';

const usePrimaryClass = () => {
  const classes = useAppSelector(
    (state) => state.sheet.rawCharacter?.CharacterToClass
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!classes) return;
    const _class = classes.find((c) => c.primaryClass);
    if (!_class) return;
    dispatch(setPrimaryClass(_class));
  }, [classes, dispatch]);
};

export default usePrimaryClass;
