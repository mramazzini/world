import { CharacterInfo } from "@/lib/utils/types/types";
import { Ability } from "@prisma/client";

export const addSavingThrowProficiencies: PrismaJson.StateCallback = (
  char,
  c,
  from
) => {
  const state = char.state as PrismaJson.CharacterState;
  const savingThrows = c as Ability[];
  return {
    ...state,
    proficiencies: {
      ...state.proficiencies,
      savingThrows: savingThrows,
      savingThrowsReasons: savingThrows.map((ability) => ({
        reason: from,
        effect: "Proficient",
      })),
    },
  };
};
