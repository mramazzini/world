import useModifier from './useModifier';
import { Ability } from '@prisma/client';

export const useArmorClass = () => {
  const { getAbilityModifier } = useModifier();

  return 10 + getAbilityModifier(Ability.DEX);
};
