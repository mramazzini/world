import {
  AddToInventoryGroupedParams,
  AddToInventoryParams,
} from '@/lib/types/protocols';
import { ChoiceProtocol, Prisma } from '@prisma/client';

export const generateAddToInventoryChoice = (
  id: string,
  classId: string,
  description: string,
  items: AddToInventoryParams,
  amount?: number
): Prisma.ChoiceCreateManyInput => {
  return {
    id,
    classId,
    description,
    fetchParams: items,
    amountOfOptionToChoose: amount || 1,
    protocol: ChoiceProtocol.ADD_TO_INVENTORY,
  };
};

export const generateAddToInventoryGroupedChoice = (
  id: string,
  classId: string,
  description: string,
  items: AddToInventoryGroupedParams,
  amount?: number
): Prisma.ChoiceCreateManyInput => {
  return {
    id,
    classId,
    description,
    fetchParams: items,
    amountOfOptionToChoose: amount || 1,
    protocol: ChoiceProtocol.ADD_TO_INVENTORY_GROUPED,
  };
};
