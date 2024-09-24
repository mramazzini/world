"use client";
import { CharacterInfo, ItemID, ItemInfo } from "@/lib/types";
import { memoizeGetItem } from "../../globalCache";
import { AbilityToModifier } from "../calc/AbilityToModifier";
import { ArmorType } from "@prisma/client";
import { equipWeapon } from "./equipWeapon";

const baseArmorCalc = async (
  state: PrismaJson.CharacterState
): Promise<{
  newAC: number;
  reasons: PrismaJson.Reason[];
}> => {
  //if light add dex
  //if medium add dex to 2
  //if heavy add nothing

  const armorItem = (await memoizeGetItem(state.equipped.armor)) as ItemInfo;
  if (!armorItem)
    return {
      newAC: 10 + AbilityToModifier(state.abilityScores.DEX),
      reasons: [
        {
          reason: "Base AC",
          effect: 10,
        },
        {
          reason: "Dex Modifier",
          effect:
            AbilityToModifier(state.abilityScores.DEX) >= 0
              ? `+ ${AbilityToModifier(state.abilityScores.DEX)}`
              : `- ${Math.abs(AbilityToModifier(state.abilityScores.DEX))}`,
        },
      ],
    };
  const armorData = armorItem.Armor;
  const armorType = armorData?.armorType;
  const baseAC = armorData?.armorClass;
  const abilityScores = state.abilityScores;

  if (!armorType || !baseAC)
    return {
      newAC: 10 + AbilityToModifier(state.abilityScores.DEX),
      reasons: [
        {
          reason: "Base AC",
          effect: 10,
        },
        {
          reason: "Dex Modifier",
          effect:
            AbilityToModifier(state.abilityScores.DEX) >= 0
              ? `+ ${AbilityToModifier(state.abilityScores.DEX)}`
              : `- ${Math.abs(AbilityToModifier(state.abilityScores.DEX))}`,
        },
      ],
    };

  if (armorType === ArmorType.LIGHT) {
    return {
      newAC: baseAC + AbilityToModifier(abilityScores.DEX),
      reasons: [
        {
          reason: armorItem.name,
          effect: baseAC,
        },
        {
          reason: "Dex Modifier",
          effect:
            AbilityToModifier(abilityScores.DEX) >= 0
              ? `+ ${AbilityToModifier(abilityScores.DEX)}`
              : `- ${Math.abs(AbilityToModifier(abilityScores.DEX))}`,
        },
      ],
    };
  }
  if (armorType === ArmorType.MEDIUM) {
    return {
      newAC: baseAC + Math.min(AbilityToModifier(abilityScores.DEX), 2),
      reasons: [
        {
          reason: armorItem.name,
          effect: baseAC,
        },
        {
          reason: "Dex Modifier",
          effect:
            Math.min(AbilityToModifier(abilityScores.DEX), 2) >= 0
              ? `+ ${Math.min(AbilityToModifier(abilityScores.DEX), 2)}`
              : `- ${Math.abs(
                  Math.min(AbilityToModifier(abilityScores.DEX), 2)
                )}`,
        },
      ],
    };
  }
  if (armorType === ArmorType.HEAVY) {
    return {
      newAC: baseAC,
      reasons: [
        {
          reason: armorItem.name,
          effect: baseAC,
        },
      ],
    };
  }
  return {
    newAC: 10 + AbilityToModifier(state.abilityScores.DEX),
    reasons: [
      {
        reason: "Base AC",
        effect: 10,
      },
      {
        reason: "Dex Modifier",
        effect:
          AbilityToModifier(state.abilityScores.DEX) >= 0
            ? `+ ${AbilityToModifier(state.abilityScores.DEX)}`
            : `- ${Math.abs(AbilityToModifier(state.abilityScores.DEX))}`,
      },
    ],
  };
};

export const refreshAC = async (state: PrismaJson.CharacterState) => {
  //go through equipped items and check for shields
  const equippedItems = state.equipped.hands.items;
  const base = await baseArmorCalc(state);

  if (equippedItems) {
    const equippedData = equippedItems.map((i) => memoizeGetItem(i));
    const equippedRes = (await Promise.all(equippedData)) as ItemInfo[];
    if (!equippedRes) return state;
    const shield = equippedRes.find(
      (i) => i?.Armor?.armorType === ArmorType.SHIELDS
    );
    if (!shield)
      return {
        ...state,
        armorClass: base.newAC,
        armorClassReasons: [...base.reasons],
      };
    const shieldData = shield.Armor;
    const shieldAC = shieldData?.armorClass;
    if (!shieldAC) return state;
    return {
      ...state,

      armorClass: base.newAC + shieldAC,
      armorClassReasons: [
        ...base.reasons,
        {
          reason: shield.name,
          effect: "+" + shieldAC,
        },
      ],
    };
  }

  return {
    ...state,

    armorClass: base.newAC,
    armorClassReasons: [...base.reasons],
  };
};

export const updateAC = async (
  state: PrismaJson.CharacterState,
  itemId: ItemID
) => {
  let newState = { ...state };

  newState.equipped.armor = itemId;
  const res = await refreshAC(newState);
  return {
    ...res,
  };
};
