import { bulkAddToInventory } from './Inventory';

export const ItemToInventory: PrismaJson.StateCallback = (char, selections) => {
  const state = char.state as PrismaJson.CharacterState;
  const items = selections as PrismaJson.QuantityItem[][];
  return bulkAddToInventory(state, items);
};
