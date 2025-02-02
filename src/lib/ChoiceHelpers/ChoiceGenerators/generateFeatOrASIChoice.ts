import { ChoiceModelId } from '@/lib/types/protocols';
import { ChoiceProtocol, Prisma } from '@prisma/client';

export const generateFeatOrASIChoice = (
  id: string,
  modelId: string,
  model: ChoiceModelId,
  description: string
): Prisma.ChoiceCreateManyInput => {
  return {
    id,
    [model]: modelId,
    description,
    fetchParams: {},
    amountOfOptionToChoose: 1,
    protocol: ChoiceProtocol.SET_FEAT_OR_ASI,
  };
};
