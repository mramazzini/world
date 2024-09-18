"use client";

import { Unit } from "@/lib/types";
import { memoizeGetItem } from "../../globalCache";

export const calcWeight = async (state: PrismaJson.CharacterState) => {
  let weight: PrismaJson.QuantityUnit = { unit: Unit.lb, quantity: 0 };
  for (const item of state.inventory) {
    const i = await memoizeGetItem(item.item);
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
