import { Ability, ChoiceProtocol } from '@prisma/client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setAbilityScores } from '@/store/sheetSlice';
import useCharacterState from '../useCharacter/useCharacterState';
import useChoicesSelector from '../useChoicesSelector';
import {
  FeatOrASIOutput,
  ImproveAbilityScoreOutput,
} from '@/lib/types/protocols';

const useAbilityScore = () => {
  const state = useCharacterState();
  const dispatch = useAppDispatch();
  const activeEffects = useAppSelector((state) => state.sheet.activeEffects);
  const { fufilledChoices } = useChoicesSelector();
  const combinedSpecies = useAppSelector(
    (state) => state.sheet.combinedSpecies
  );
  useEffect(() => {
    const abilityScores = {
      [Ability.STR]: state?.baseSTR || 10,
      [Ability.DEX]: state?.baseDEX || 10,
      [Ability.CON]: state?.baseCON || 10,
      [Ability.INT]: state?.baseINT || 10,
      [Ability.WIS]: state?.baseWIS || 10,
      [Ability.CHA]: state?.baseCHA || 10,
    };
    activeEffects.forEach((effect) => {
      if (effect.abilityScoreImprovements) {
        effect.abilityScoreImprovements.forEach((improvement) => {
          const abilityScore = abilityScores[improvement.ability];
          abilityScores[improvement.ability] = abilityScore + improvement.value;
        });
      }
    });
    fufilledChoices.forEach((choice) => {
      switch (choice.protocol) {
        case ChoiceProtocol.IMPROVE_ABILITY_SCORE: {
          const abilityImprovements =
            choice.selections as ImproveAbilityScoreOutput;
          for (const ability of abilityImprovements) {
            abilityScores[ability.ability] += ability.value;
          }
          break;
        }
        case ChoiceProtocol.SET_FEAT_OR_ASI: {
          const featOrASI = choice.selections as FeatOrASIOutput;
          if (featOrASI.featOrASI === 'asi') {
            const abilityImprovements = featOrASI.abilityScoreValues || [];
            for (const ability of abilityImprovements) {
              abilityScores[ability.ability] += ability.value;
            }
          }
          break;
        }
      }
    });

    const asi = combinedSpecies?.freeAbilityScoreImprovements || [];
    for (const ability of asi) {
      abilityScores[ability.ability] += ability.value;
    }
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
    fufilledChoices,
  ]);
};

export default useAbilityScore;
