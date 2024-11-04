import { AbilityScores } from '@/lib/types/types';
import { refreshAC } from './updateAC';
import { refreshPassivePerception } from './refreshPassivePerception';
import { refreshHp } from './refreshHp';
import { CharacterInfo } from '@/lib/types/modelInfo';

export const updateAbilityScores = async (
  character: CharacterInfo,
  scores: AbilityScores,
  from: string
): Promise<PrismaJson.CharacterState> => {
  const state = character.state as PrismaJson.CharacterState;
  console.log(from);
  const updated: PrismaJson.CharacterState = {
    ...state,
    abilityScores: scores,
    abilityScoreReasons: {
      STR: [
        {
          reason: 'Base Ability Score',
          effect: scores.STR,
        },
      ],
      DEX: [
        {
          reason: 'Base Ability Score',
          effect: scores.DEX,
        },
      ],
      CON: [
        {
          reason: 'Base Ability Score',
          effect: scores.CON,
        },
      ],
      INT: [
        {
          reason: 'Base Ability Score',
          effect: scores.INT,
        },
      ],
      WIS: [
        {
          reason: 'Base Ability Score',
          effect: scores.WIS,
        },
      ],
      CHA: [
        {
          reason: 'Base Ability Score',
          effect: scores.CHA,
        },
      ],
    },
  };
  const pp = refreshPassivePerception(updated);
  const hp = refreshHp(character, pp);
  return await refreshAC(hp);
};
