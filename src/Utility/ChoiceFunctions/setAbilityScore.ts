import { AbilityScores, AbilityScoreValue } from '@/lib/utils/types/types';

import { v4 } from 'uuid';
import { updateAbilityScores } from '../characterStateFunctions/update/updateAbilityScores';
import { refreshAC } from '../characterStateFunctions/update/updateAC';
import { refreshHp } from '../characterStateFunctions/update/refreshHp';
import { refreshPassivePerception } from '../characterStateFunctions/update/refreshPassivePerception';

export const setAbilityScore: PrismaJson.StateCallback = async (
  char,
  c,
  from
) => {
  const { Species: species, SubSpecies: subSpecies } = char;

  const scores = c as AbilityScoreValue[];
  const abilityScoresFromChoice: AbilityScores = {
    STR: scores.find((a) => a.ability === 'STR')?.value || 10,
    DEX: scores.find((a) => a.ability === 'DEX')?.value || 10,
    CON: scores.find((a) => a.ability === 'CON')?.value || 10,
    INT: scores.find((a) => a.ability === 'INT')?.value || 10,
    WIS: scores.find((a) => a.ability === 'WIS')?.value || 10,
    CHA: scores.find((a) => a.ability === 'CHA')?.value || 10,
  };
  const res = await updateAbilityScores(char, abilityScoresFromChoice, from);
  let base = { ...res };
  if (subSpecies?.abilityScores) {
    base = {
      ...res,
      pendingChoices: [
        ...res.pendingChoices,
        {
          id: v4(),
          choice: subSpecies.abilityScores,
          model: 'AbilityScore' as PrismaJson.ChoiceModel,
          from: subSpecies.name,
          description: "Choose your character's ability score bonuses.",
          callbackProtocol: 'SpeciesAbilityScoreIncrease',
        },
      ],
    };
  } else if (species?.abilityScores) {
    base = {
      ...res,
      pendingChoices: [
        ...res.pendingChoices,
        {
          id: v4(),
          choice: species.abilityScores,
          model: 'AbilityScore' as PrismaJson.ChoiceModel,
          from: species.name,
          description: "Choose your character's ability score bonuses.",
          callbackProtocol: 'SpeciesAbilityScoreIncrease',
        },
      ],
    };
  }

  const refreshedAC = await refreshAC(base);
  const refreshedHp = await refreshHp(char, refreshedAC);
  const refreshedPP = await refreshPassivePerception(refreshedHp);
  return { ...refreshedPP };
};
