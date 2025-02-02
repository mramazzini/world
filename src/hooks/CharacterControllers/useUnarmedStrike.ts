// import useCharacterState from './useCharacter/useCharacterState';

import { useAppDispatch } from '@/store/hooks';
import { setUnarmedDamage } from '@/store/sheetSlice';
import { useEffect } from 'react';

const useUnarmedStrike = () => {
  //   const state = useCharacterState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unarmedDamage = '1 + STR';
    dispatch(setUnarmedDamage(unarmedDamage));
  }, [dispatch]);
};

export default useUnarmedStrike;
