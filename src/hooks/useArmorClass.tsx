import { useMemo } from 'react';
import useInventory from './useInventory';
import useModifier from './useModifier';
import { Ability, ArmorType } from '@prisma/client';

export const useArmorClass = () => {
  const { getAbilityModifier } = useModifier();
  const { equippedArmor, equippedShield } = useInventory();

  const armorClass = useMemo(() => {
    let ac = 0;
    console.log(equippedArmor, getAbilityModifier(Ability.DEX), equippedShield);
    const ArmorData = equippedArmor?.Armor;
    const ShieldData = equippedShield?.Armor;
    // four Cases:
    // 1. No Armor: 10 + DEX + Shield
    // 2. Light Armor: DEX + Armor + shield
    // 3. Medium Armor: Min(2,DEX) + Armor + shield
    // 4. Heavy Armor: Armor + shield
    if (ArmorData) {
      if (ArmorData.armorType === ArmorType.LIGHT) {
        ac += getAbilityModifier(Ability.DEX);
      } else if (ArmorData.armorType === ArmorType.MEDIUM) {
        ac += Math.min(2, getAbilityModifier(Ability.DEX));
      }
      ac += ArmorData.armorClass;
    } else {
      ac += 10 + getAbilityModifier(Ability.DEX);
    }

    if (ShieldData) {
      ac += ShieldData.armorClass;
    }

    return ac;
  }, [equippedArmor, equippedShield, getAbilityModifier]);

  return armorClass;
};
