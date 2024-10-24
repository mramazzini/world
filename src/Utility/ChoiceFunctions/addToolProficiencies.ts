import { ToolID } from '@/lib/types/types';

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
      toolReasons: tools.map(() => ({
        reason: from,
        effect: 'Proficient',
      })),
    },
  };
};
