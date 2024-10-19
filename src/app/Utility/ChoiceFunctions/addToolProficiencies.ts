import { CharacterInfo, ToolID } from "@/lib/utils/types/types";

export const addToolProficiencies: PrismaJson.StateCallback = (
  char,
  c,
  from
) => {
  const state = char.state as PrismaJson.CharacterState;
  const tools = c as ToolID[];
  return {
    ...state,
    proficiencies: {
      ...state.proficiencies,
      tools: [...state.proficiencies.tools, ...tools],
      toolReasons: tools.map((tool) => ({
        reason: from,
        effect: "Proficient",
      })),
    },
  };
};
