import { Ability } from '@prisma/client';
import { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { setAbilityScores } from '@/store/sheetSlice';
import useCharacterState from '../useCharacter/useCharacterState';

const useAbilityScore = () => {
  const state = useCharacterState();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const abilityScores = {
      [Ability.STR]: state?.baseSTR || 10,
      [Ability.DEX]: state?.baseDEX || 10,
      [Ability.CON]: state?.baseCON || 10,
      [Ability.INT]: state?.baseINT || 10,
      [Ability.WIS]: state?.baseWIS || 10,
      [Ability.CHA]: state?.baseCHA || 10,
    };
    dispatch(setAbilityScores(abilityScores));
  }, [
    state?.baseCHA,
    state?.baseCON,
    state?.baseDEX,
    state?.baseINT,
    state?.baseSTR,
    state?.baseWIS,
    dispatch,
  ]);
};

export default useAbilityScore;
