'use client';

import { Unit } from '@/lib/types/types';
import { memoizeGetItem } from '../../Indexed/globalCache';

export const calcWeight = async (state: PrismaJson.CharacterState) => {
  const weight: PrismaJson.QuantityUnit = { unit: Unit.lb, quantity: 0 };
  for (const item of state.inventory) {
    const i = await memoizeGetItem({ query: item.item, type: 'id' });
    if (i?.weight) {
      if (i.weight.unit === Unit.oz) {
        weight.quantity += i.weight.quantity / 16;
      }
      if (i.weight.unit === Unit.lb) {
        weight.quantity += i.weight.quantity;
      }
      //for now we are ignoring other units
    }
  }

  return weight;
};
