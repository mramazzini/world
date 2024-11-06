import { AbilityScoreValue } from '@/lib/types/types';
import { refreshAC } from '../characterStateFunctions/update/updateAC';
import { refreshHp } from '../characterStateFunctions/update/refreshHp';
import { refreshPassivePerception } from '../characterStateFunctions/update/refreshPassivePerception';

export const abilityScoreIncrease: PrismaJson.StateCallback = async (
  character,
  c,
  from
) => {
  const bonuses = c as AbilityScoreValue[];
  const s = character.state as PrismaJson.CharacterState;

  // Copy the current ability scores and reasons to avoid modifying the original state
  const updatedAbilityScores = { ...s.abilityScores };
  const updatedAbilityScoreReasons = { ...s.abilityScoreReasons };

  for (const bonus of bonuses) {
    updatedAbilityScores[bonus.ability] =
      (updatedAbilityScores[bonus.ability] || 0) + bonus.value;
    updatedAbilityScoreReasons[bonus.ability] = [
      ...(updatedAbilityScoreReasons[bonus.ability] || []),
      {
        reason: from,
        effect: `+ ${bonus.value}`,
      },
    ];
  }

  // Construct a new state object without modifying the original state directly
  const newState = {
    ...s,
    abilityScores: updatedAbilityScores,
    abilityScoreReasons: updatedAbilityScoreReasons,
  };

  const refreshedAC = await refreshAC(newState);
  const refreshedHp = await refreshHp(character, refreshedAC);
  const refreshedPP = await refreshPassivePerception(refreshedHp);

  return {
    ...refreshedPP,
    abilityScores: {
      ...refreshedPP.abilityScores,
    },
    abilityScoreReasons: {
      ...refreshedPP.abilityScoreReasons,
    },
  };
};
