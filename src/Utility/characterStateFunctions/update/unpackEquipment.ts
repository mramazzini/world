'use client';
import { ItemID } from '@/lib/types/types';
import { memoizeGetItem } from '../../Indexed/globalCache';
import { ItemInfo } from '@/lib/types/modelInfo';

export const unpackEquipment = async (
  state: PrismaJson.CharacterState,
  equipmentPackItemId: ItemID
): Promise<PrismaJson.CharacterState> => {
  const newState = { ...state };
  const equipmentPack = (await memoizeGetItem({
    query: equipmentPackItemId,
    type: 'id',
  })) as ItemInfo;
  const equipmentPackData = equipmentPack.EquipmentPack;
  if (!equipmentPackData) return state;
  const equipment = equipmentPackData.itemsQuantity;
  const items = state.inventory;
  //look for pack in inventory
  const packIndex = items.findIndex((i) => i.item === equipmentPackItemId);
  if (packIndex === -1) return state;
  //remove pack from inventory
  items.splice(packIndex, 1);
  // add equipment to inventory
  for (const eq of equipment) {
    const itemIndex = items.findIndex((i) => i.item === eq.item);
    if (itemIndex === -1) {
      items.push(eq);
    } else {
      items[itemIndex].quantity += eq.quantity;
    }
  }
  newState.inventory = items;
  return newState;
};
