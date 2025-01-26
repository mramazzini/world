import { useEffect, useState } from 'react';
import useModifier from '../useModifier';
import { Ability, ArmorType } from '@prisma/client';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setArmorClass } from '@/store/sheetSlice';
import useDiceRoller from '../useDiceRoller';

export const useArmorClass = () => {
  const { getAbilityModifier } = useModifier();
  const { activeEffects, equippedArmor, equippedShield } = useAppSelector(
    (state) => state.sheet
  );
  const { rollFormula } = useDiceRoller();

  const dispatch = useAppDispatch();

  const [calculatedAC, setCalculatedAC] = useState(0);

  useEffect(() => {
    const calcAC = async () => {
      let ac = calculatedAC;
      for (const effect of activeEffects) {
        if (effect.acBonusFormula) {
          ac += (await rollFormula(effect.acBonusFormula)).total;
        }
      }
      console.log(activeEffects);
      dispatch(setArmorClass(ac));
    };
    calcAC();
  }, [activeEffects, calculatedAC, rollFormula, dispatch]);

  useEffect(() => {
    let ac = 0;
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

    setCalculatedAC(ac);
  }, [
    equippedArmor,
    equippedShield,
    getAbilityModifier,
    dispatch,
    activeEffects,
  ]);
};
