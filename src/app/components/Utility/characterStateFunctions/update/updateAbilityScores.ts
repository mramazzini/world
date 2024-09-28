import { AbilityScores, CharacterInfo } from "@/lib/utils/types/types";
import { refreshAC } from "./updateAC";
import { refreshPassivePerception } from "./refreshPassivePerception";
import { refreshHp } from "./refreshHp";

export const updateAbilityScores = async (
  character: CharacterInfo,
  state: PrismaJson.CharacterState,
  scores: AbilityScores
): Promise<PrismaJson.CharacterState> => {
  const updated: PrismaJson.CharacterState = {
    ...state,
    abilityScores: scores,
    abilityScoreReasons: {
      STR: [
        {
          reason: "Base Ability Score",
          effect: scores.STR,
        },
      ],
      DEX: [
        {
          reason: "Base Ability Score",
          effect: scores.DEX,
        },
      ],
      CON: [
        {
          reason: "Base Ability Score",
          effect: scores.CON,
        },
      ],
      INT: [
        {
          reason: "Base Ability Score",
          effect: scores.INT,
        },
      ],
      WIS: [
        {
          reason: "Base Ability Score",
          effect: scores.WIS,
        },
      ],
      CHA: [
        {
          reason: "Base Ability Score",
          effect: scores.CHA,
        },
      ],
    },
  };
  const pp = refreshPassivePerception(updated);
  const hp = refreshHp(character, pp);
  return await refreshAC(hp);
};
