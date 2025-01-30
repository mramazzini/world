import { Ability } from '@prisma/client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setAbilityScores } from '@/store/sheetSlice';
import useCharacterState from '../useCharacter/useCharacterState';

const useAbilityScore = () => {
  const state = useCharacterState();
  const dispatch = useAppDispatch();
  const activeEffects = useAppSelector((state) => state.sheet.activeEffects);

  useEffect(() => {
    const abilityScores = {
      [Ability.STR]: state?.baseSTR || 10,
      [Ability.DEX]: state?.baseDEX || 10,
      [Ability.CON]: state?.baseCON || 10,
      [Ability.INT]: state?.baseINT || 10,
      [Ability.WIS]: state?.baseWIS || 10,
      [Ability.CHA]: state?.baseCHA || 10,
    };
    console.log(activeEffects);
    activeEffects.forEach((effect) => {
      if (effect.abilityScoreImprovements) {
        effect.abilityScoreImprovements.forEach((improvement) => {
          const abilityScore = abilityScores[improvement.ability];
          abilityScores[improvement.ability] = abilityScore + improvement.value;
        });
      }
    });

    dispatch(setAbilityScores(abilityScores));
  }, [
    activeEffects,
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
