import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setMultiClasses } from '@/store/sheetSlice';
import { useEffect } from 'react';

const useMulticlass = () => {
  const Classes = useAppSelector(
    (state) => state.sheet.rawCharacter?.CharacterToClass
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!Classes) return;
    const classes = Classes.filter((c) => !c.primaryClass);

    dispatch(setMultiClasses(classes));
  }, [Classes, dispatch]);
};

export default useMulticlass;
