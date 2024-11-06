import { AbilityScoreValue } from '@/lib/types/types';
import { refreshAC } from '../characterStateFunctions/update/updateAC';
import { refreshHp } from '../characterStateFunctions/update/refreshHp';
import { refreshPassivePerception } from '../characterStateFunctions/update/refreshPassivePerception';

export const SpeciesAbilityScoreIncrease: PrismaJson.StateCallback = async (
  char,
  c,
  from
) => {
  const bonuses = c as AbilityScoreValue[];
  const species = char.subSpeciesId ? char.SubSpecies : char.Species;

  let newState = { ...(char.state as PrismaJson.CharacterState) };
  if (!species) {
    return newState;
  }
  for (const bonus of bonuses) {
    newState = {
      ...newState,
      abilityScores: {
        ...newState.abilityScores,
        [bonus.ability]: newState.abilityScores[bonus.ability] + bonus.value,
      },
      abilityScoreReasons: {
        ...newState.abilityScoreReasons,
        [bonus.ability]: [
          ...(newState.abilityScoreReasons[bonus.ability] || []),
          {
            reason: from,
            effect: `+ ${bonus.value}`,
          },
        ],
      },
    };
  }
  const refreshedAC = await refreshAC(newState);
  const refreshedHp = await refreshHp(char, refreshedAC);
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
