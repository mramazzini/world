import {
  AddToInventoryGroupedParams,
  AddToInventoryParams,
  ChoiceModelId,
} from '@/lib/types/protocols';
import { ChoiceProtocol, Prisma } from '@prisma/client';

export const generateAddToInventoryChoice = (
  id: string,
  modelId: string,
  model: ChoiceModelId,
  description: string,
  items: AddToInventoryParams,
  amount?: number
): Prisma.ChoiceCreateManyInput => {
  return {
    id,
    [model]: modelId,
    description,
    fetchParams: items,
    amountOfOptionToChoose: amount || 1,
    protocol: ChoiceProtocol.ADD_TO_INVENTORY,
  };
};

export const generateAddToInventoryGroupedChoice = (
  id: string,
  modelId: string,
  model: ChoiceModelId,
  description: string,
  items: AddToInventoryGroupedParams,
  amount?: number
): Prisma.ChoiceCreateManyInput => {
  return {
    id,
    [model]: modelId,
    description,
    fetchParams: items,
    amountOfOptionToChoose: amount || 1,
    protocol: ChoiceProtocol.ADD_TO_INVENTORY_GROUPED,
  };
};
