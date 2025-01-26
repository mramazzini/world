import useModifier from '../useModifier';
import { useEffect } from 'react';
import { Ability } from '@prisma/client';
import { useAppDispatch } from '@/store/hooks';
import { setInitiative } from '@/store/sheetSlice';

export const useInitiative = () => {
  const { getAbilityModifier } = useModifier();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const initiative = getAbilityModifier(Ability.DEX);

    dispatch(setInitiative(initiative));
  }, [getAbilityModifier, dispatch]);
};

export default useInitiative;
