import { AddFreeSpellParams, ChoiceModelId } from '@/lib/types/protocols';
import { ChoiceProtocol, Prisma } from '@prisma/client';

export const generateFreeSpellChoice = (
  id: string,
  modelId: string,
  model: ChoiceModelId,
  description: string,
  spells: AddFreeSpellParams,
  amount?: number
): Prisma.ChoiceCreateManyInput => {
  return {
    id,
    [model]: modelId,
    description,
    fetchParams: spells,
    amountOfOptionToChoose: amount || 1,
    protocol: ChoiceProtocol.ADD_FREE_SPELL,
  };
};

export const generateKnownSpellChoice = (
  id: string,
  modelId: string,
  model: ChoiceModelId,
  description: string,
  spells: AddFreeSpellParams,
  amount?: number
): Prisma.ChoiceCreateManyInput => {
  return {
    id,
    [model]: modelId,
    description,
    fetchParams: spells,
    amountOfOptionToChoose: amount || 1,
    protocol: ChoiceProtocol.ADD_KNOWN_SPELL,
  };
};
