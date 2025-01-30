import { ChoiceModelId, ChooseSubclassParams } from '@/lib/types/protocols';
import { ChoiceProtocol, Prisma } from '@prisma/client';

export const generateSubclassChoice = (
  id: string,
  modelId: string,
  model: ChoiceModelId,
  description: string,
  _classId: ChooseSubclassParams
): Prisma.ChoiceCreateManyInput => {
  return {
    id,
    [model]: modelId,
    description,
    fetchParams: _classId,
    amountOfOptionToChoose: 1,
    protocol: ChoiceProtocol.CHOOSE_SUBCLASS,
  };
};
