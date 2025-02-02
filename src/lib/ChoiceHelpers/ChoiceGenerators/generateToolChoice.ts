import {
  ChoiceModelId,
  SetToolProficiencyGroupedParams,
  SetToolProficiencyParams,
} from '@/lib/types/protocols';
import { ChoiceProtocol, Prisma } from '@prisma/client';

export const generateToolProficiencyChoice = (
  id: string,
  modelId: string,
  model: ChoiceModelId,
  description: string,
  tools: SetToolProficiencyParams,
  amount?: number
): Prisma.ChoiceCreateManyInput => {
  return {
    id,
    [model]: modelId,
    description,
    fetchParams: tools,
    amountOfOptionToChoose: amount || 1,
    protocol: ChoiceProtocol.SET_TOOL_PROFICIENCY,
  };
};

export const generateToolProficiencyGroupedChoice = (
  id: string,
  modelId: string,
  model: ChoiceModelId,
  description: string,
  tools: SetToolProficiencyGroupedParams,
  amount?: number
): Prisma.ChoiceCreateManyInput => {
  return {
    id,
    [model]: modelId,
    description,
    fetchParams: tools,
    amountOfOptionToChoose: amount || 1,
    protocol: ChoiceProtocol.SET_TOOL_PROFICIENCY_GROUPED,
  };
};
