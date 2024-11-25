import { Ability } from '@prisma/client';
import { useMemo } from 'react';
import useCharacterState from './useCharacter/useCharacterState';

const useAbility = () => {
  const state = useCharacterState();
  const abilityScores = useMemo(() => {
    return {
      [Ability.STR]: state?.baseSTR || 10,
      [Ability.DEX]: state?.baseDEX || 10,
      [Ability.CON]: state?.baseCON || 10,
      [Ability.INT]: state?.baseINT || 10,
      [Ability.WIS]: state?.baseWIS || 10,
      [Ability.CHA]: state?.baseCHA || 10,
    };
  }, [
    state?.baseCHA,
    state?.baseCON,
    state?.baseDEX,
    state?.baseINT,
    state?.baseSTR,
    state?.baseWIS,
  ]);

  return abilityScores;
};

export default useAbility;
