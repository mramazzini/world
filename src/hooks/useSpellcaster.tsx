import { useAppSelector } from '@/store/hooks';
import { useCallback, useMemo } from 'react';
import useModifier from './useModifier';
import useProficiency from './useProficiency';
import { SpellCastingInfo } from '@/lib/types/modelInfo';
import useLevelByClass from './useLevelByClass';
import { ClassID, Level, SpellLevel } from '@/lib/types/types';
import SpellCastingToSpellSlots from '@/Utility/SpellCastingToSpellSlots';
import { Ability } from '@prisma/client';

const useSpellcaster = () => {
  const character = useAppSelector((state) => state.sheet.rawCharacter);
  const activeSpellCastingClassId = useAppSelector(
    (state) => state.sheet.activeSpellCastingClassId
  );
  const { proficiencyBonus } = useProficiency();
  const { getAbilityModifier } = useModifier();

  const levelsByClass = useLevelByClass();

  const spellcastingClasses = useMemo(() => {
    if (!character) return [];
    return character?.CharacterToClass.filter((c) => c.Class.SpellCasting);
  }, [character]);

  const spellSlotsFromClass = useCallback(
    (classID: ClassID, spellcastingInfo: SpellCastingInfo) => {
      const level = levelsByClass[classID] as Level;
      if (!level) return {};
      return SpellCastingToSpellSlots(spellcastingInfo, level);
    },
    [levelsByClass]
  );

  const addSpellSlots = useCallback(
    (a: PrismaJson.SpellSlots, b: PrismaJson.SpellSlots) => {
      const result: PrismaJson.SpellSlots = {};
      for (const [key, value] of Object.entries(a)) {
        result[Number(key) as SpellLevel] = value;
      }
      for (const [key, value] of Object.entries(b)) {
        const i = result[Number(key) as SpellLevel];
        if (i) {
          result[Number(key) as SpellLevel] = i + value;
        }
      }
      return result;
    },
    []
  );

  const spellSlots = useMemo(() => {
    let spellSlots: PrismaJson.SpellSlots = {};
    for (const spellcastingClass of spellcastingClasses) {
      if (!spellcastingClass.Class.SpellCasting) continue;
      spellSlots = addSpellSlots(
        spellSlots,
        spellSlotsFromClass(
          spellcastingClass.Class.id,
          spellcastingClass.Class.SpellCasting
        )
      );
    }

    return spellSlots;
  }, [spellcastingClasses, spellSlotsFromClass, addSpellSlots]);

  const activeSpellCastingClass = useMemo(() => {
    const res = spellcastingClasses.find(
      (c) => c.Class.id === activeSpellCastingClassId
    );
    if (!res) return null;
    console.log(res);
    return res.Class.SpellCasting;
  }, [spellcastingClasses, activeSpellCastingClassId]);

  const ability = useMemo(() => {
    return activeSpellCastingClass?.ability || Ability.INT;
  }, [activeSpellCastingClass]);

  const modifier = useMemo(() => {
    return getAbilityModifier(ability);
  }, [ability, getAbilityModifier]);

  const spellSaveDC = useMemo(() => {
    return 8 + proficiencyBonus + modifier;
  }, [modifier, proficiencyBonus]);

  const spellAttackBonus = useMemo(() => {
    return proficiencyBonus + modifier;
  }, [modifier, proficiencyBonus]);

  const isSpellcaster = useMemo(() => {
    return spellcastingClasses.length > 0;
  }, [spellcastingClasses]);

  return {
    spellSlots,
    ability,
    modifier,
    spellSaveDC,
    spellAttackBonus,
    isSpellcaster,
    spellcastingClasses,
  };
};

export default useSpellcaster;
