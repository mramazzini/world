import { CharacterInfo } from "@/lib/utils/types/types";
import { bulkAddToInventory } from "../../ChoiceFunctions/Inventory";

export const ItemToInventory: PrismaJson.StateCallback = (char, selections) => {
  const state = char.state as PrismaJson.CharacterState;
  const items = selections as PrismaJson.QuantityItem[][];
  return bulkAddToInventory(state, items);
};
