"use client";
import { ItemID, ItemInfo } from "@/lib/types";
import { memoizeGetItem } from "../../globalCache";
import { ArmorType } from "@prisma/client";

export const equipWeapon = async (
  state: PrismaJson.CharacterState,
  weaponItemId: ItemID,
  numHands: 1 | 2 //number of hands that the weapon uses
): Promise<PrismaJson.CharacterState> => {
  //check to see if in inventory
  const weapon = state.inventory.find((i) => i.item === weaponItemId);
  if (!weapon) return state;
  // get item data
  const itemData = (await memoizeGetItem(weapon.item)) as ItemInfo;
  if (!itemData) return state;

  if (!state.equipped.hands.items) {
    // no weapon equipped
    return {
      ...state,

      equipped: {
        ...state.equipped,
        hands: { ...state.equipped.hands, items: [weaponItemId] },
      },
    };
  }

  //if the requested weapon is two-handed, we just equip it
  const twoHandedWeapon = itemData.Weapon?.properties.some(
    (p) => p.property.name === "Two-Handed"
  );
  if (twoHandedWeapon) {
    return {
      ...state,

      equipped: {
        ...state.equipped,
        hands: { ...state.equipped.hands, items: [weaponItemId] },
      },
    };
  }

  const equippedData = state.equipped.hands.items.map((i) => memoizeGetItem(i));
  const equippedRes = (await Promise.all(equippedData)) as ItemInfo[];
  if (!equippedRes) return state;
  const equippedTwoHandedWeapon = equippedRes.find((i) =>
    i?.Weapon?.properties.some((p) => p.property.name === "Two-Handed")
  );
  //if a two handed weapon equipped, we just equip the new weapon
  if (equippedTwoHandedWeapon) {
    return {
      ...state,

      equipped: {
        ...state.equipped,
        hands: { ...state.equipped.hands, items: [weaponItemId] },
      },
    };
  }

  if (numHands === 2) {
    // unequip current weapon/s
    return {
      ...state,

      equipped: {
        ...state.equipped,
        hands: { ...state.equipped.hands, items: [weaponItemId] },
      },
    };
  }
  if (numHands === 1) {
    // check to see if a one handed weapon is equipped
    if (state.equipped.hands.items.length === 1) {
      // one weapon equipped
      return {
        ...state,
        equipped: {
          ...state.equipped,
          hands: {
            ...state.equipped.hands,
            items: [...state.equipped.hands.items, weaponItemId],
          },
        },
      };
    } else {
      // both hands full, two check see if two handed or one handed

      if (twoHandedWeapon) {
        // two handed weapon equipped
        return {
          ...state,

          equipped: {
            ...state.equipped,
            hands: { ...state.equipped.hands, items: [weaponItemId] },
          },
        };
      } else {
        return {
          ...state,

          equipped: {
            ...state.equipped,
            hands: {
              ...state.equipped.hands,
              items: [...state.equipped.hands.items.slice(1), weaponItemId],
            },
          },
        };
      }
    }
  }
  console.warn("Something went wrong in equipWeapon");
  return state;
};
