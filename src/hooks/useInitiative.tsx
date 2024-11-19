import useModifier from './useModifier';
import { useMemo } from 'react';
import { Ability } from '@prisma/client';

export const useInitiative = () => {
  const { getAbilityModifier } = useModifier();
  const initiative = useMemo(() => {
    return getAbilityModifier(Ability.DEX);
  }, [getAbilityModifier]);

  return initiative;
};

export default useInitiative;
