import { AbilityScoreValue } from "@/lib/utils/types/types";
import { refreshAC } from "../characterStateFunctions/update/updateAC";
import { refreshHp } from "../characterStateFunctions/update/refreshHp";
import { refreshPassivePerception } from "../characterStateFunctions/update/refreshPassivePerception";

export const abilityScoreIncrease: PrismaJson.StateCallback = async (
  character,
  c,
  from
) => {
  const bonuses = c as AbilityScoreValue[];
  const s = character.state as PrismaJson.CharacterState;
  const newState = { ...s };
  const classID = character.Classes?.[0].id;
  for (const bonus of bonuses) {
    newState.abilityScores[bonus.ability] += bonus.value;
    newState.abilityScoreReasons[bonus.ability] = [
      ...(newState.abilityScoreReasons[bonus.ability] || []),
      {
        reason: `${character.Classes?.find(
          (c) => c.id === classID
        )?.name.toCapitalCase()} Class ASI`,
        effect: `+ ${bonus.value}`,
      },
    ];
  }
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
