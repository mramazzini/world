import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback, useEffect } from 'react';
import useModifier from '../useModifier';
import { SpellCastingInfo } from '@/lib/types/modelInfo';
import { ClassID, Level, SpellLevel } from '@/lib/types/types';
import SpellCastingToSpellSlots, {
  SpellCastingLevelToSpellSlots,
} from '@/Utility/SpellCastingToSpellSlots';
import { Ability, CasterPower, ChoiceProtocol } from '@prisma/client';
import useCharacterState from '../useCharacter/useCharacterState';
import {
  setActiveSpellCastingClass,
  setCurrentSpellSlots,
  setFreeSpells,
  setIsSpellcaster,
  setPreparedSpells,
  setSpellAttackBonus,
  setSpellCastingAbility,
  setSpellCastingAbilityModifier,
  setSpellcastingClasses,
  setSpellSaveDC,
  setSpellSlots,
} from '@/store/sheetSlice';
import {
  AddFreeSpellOutput,
  AddPreparedSpellOutput,
} from '@/lib/types/protocols';
import useChoicesSelector from '../useChoicesSelector';

const useSpellcaster = () => {
  const dispatch = useAppDispatch();

  const state = useCharacterState();
  const { getAbilityModifier } = useModifier();
  const { fufilledChoices } = useChoicesSelector();

  const {
    rawCharacter: character,
    activeSpellCastingClassId,
    proficiencyBonus,
    levelsByClass,
    spellcastingClasses,
    spellSlots,
    activeSpellCastingClass,
    spellCastingAbility: ability,
    spellCastingAbilityModifier: modifier,
  } = useAppSelector((state) => state.sheet);

  const spellSlotsFromClass = useCallback(
    (classID: ClassID, spellcastingInfo: SpellCastingInfo) => {
      const level = levelsByClass[classID] as Level;
      if (!level) return {};
      const slots = SpellCastingToSpellSlots(spellcastingInfo, level);
      return slots;
    },
    [levelsByClass]
  );

  const addSpellSlots = useCallback(
    (a: PrismaJson.SpellSlots, b: PrismaJson.SpellSlots) => {
      const result: PrismaJson.SpellSlots = a;
      for (const [key, value] of Object.entries(b)) {
        const i = result[Number(key) as SpellLevel];
        if (i) {
          result[Number(key) as SpellLevel] = i + value;
        } else {
          result[Number(key) as SpellLevel] = value;
        }
      }
      return result;
    },
    []
  );

  useEffect(() => {
    if (!character) return;
    const spellcastingClasses = character?.CharacterToClass.filter(
      (c) => c.Class.SpellCasting
    );
    dispatch(setSpellcastingClasses(spellcastingClasses));
  }, [character, dispatch]);

  useEffect(() => {
    let spellSlots: PrismaJson.SpellSlots = {};
    let spellCastingLevel = 0;
    for (const spellcastingClass of spellcastingClasses) {
      if (!spellcastingClass.Class.SpellCasting) continue;
      switch (spellcastingClass.Class.SpellCasting.casterPower) {
        case CasterPower.FULL:
          spellCastingLevel += spellcastingClass.levelsInClass;
          break;
        case CasterPower.HALF_ROUNDED_DOWN:
          spellCastingLevel += Math.floor(spellcastingClass.levelsInClass / 2);
          break;
        case CasterPower.HALF_ROUNDED_UP:
          spellCastingLevel += Math.ceil(spellcastingClass.levelsInClass / 2);
          break;
        case CasterPower.THIRD_ROUNDED_DOWN:
          spellCastingLevel += Math.floor(spellcastingClass.levelsInClass / 3);
          break;
        case CasterPower.THIRD_ROUNDED_UP:
          spellCastingLevel += Math.ceil(spellcastingClass.levelsInClass / 3);
          break;
        case CasterPower.CUSTOM: {
          const spellSlotsFromClassResult = spellSlotsFromClass(
            spellcastingClass.Class.id,
            spellcastingClass.Class.SpellCasting
          );
          spellSlots = addSpellSlots(spellSlots, spellSlotsFromClassResult);
          break;
        }
      }
    }

    const res = SpellCastingLevelToSpellSlots(spellCastingLevel as Level);
    spellSlots = addSpellSlots(spellSlots, res);
    dispatch(setSpellSlots(spellSlots));
  }, [spellSlotsFromClass, addSpellSlots, dispatch, spellcastingClasses]);

  useEffect(() => {
    const slotsUsed = state?.spellSlotsUsedSinceLastRefresh || {};
    const currentSlots = { ...spellSlots };
    for (const [key, value] of Object.entries(slotsUsed)) {
      const i = currentSlots[Number(key) as SpellLevel];
      if (i) {
        currentSlots[Number(key) as SpellLevel] = i - value;
      }
    }
    dispatch(setCurrentSpellSlots(currentSlots));
  }, [state, spellSlots, dispatch]);

  useEffect(() => {
    const activeSpellCastingClass = spellcastingClasses.find(
      (c) => c.Class.id === activeSpellCastingClassId
    );
    if (!activeSpellCastingClass) return;
    dispatch(
      setActiveSpellCastingClass(activeSpellCastingClass.Class.SpellCasting)
    );
  }, [spellcastingClasses, activeSpellCastingClassId, dispatch]);

  useEffect(() => {
    const spellCastingAbility = activeSpellCastingClass?.ability || Ability.INT;
    dispatch(setSpellCastingAbility(spellCastingAbility));
  }, [activeSpellCastingClass, dispatch]);

  useEffect(() => {
    const modifier = getAbilityModifier(ability);
    dispatch(setSpellCastingAbilityModifier(modifier));
  }, [ability, getAbilityModifier, dispatch]);

  useEffect(() => {
    const spellSaveDC = 8 + proficiencyBonus + modifier;
    dispatch(setSpellSaveDC(spellSaveDC));
  }, [modifier, proficiencyBonus, dispatch]);

  useEffect(() => {
    const spellAttackBonus = proficiencyBonus + modifier;
    dispatch(setSpellAttackBonus(spellAttackBonus));
  }, [modifier, proficiencyBonus, dispatch]);

  useEffect(() => {
    const isSpellcaster = spellcastingClasses.length > 0;
    dispatch(setIsSpellcaster(isSpellcaster));
  }, [spellcastingClasses, dispatch]);

  useEffect(() => {
    const preparedSpellChoices = fufilledChoices.filter(
      (c) => c.protocol === ChoiceProtocol.ADD_KNOWN_SPELL
    );
    const preparedSpells = preparedSpellChoices
      .map((c) => c.selections)
      .flat() as AddPreparedSpellOutput;
    dispatch(setPreparedSpells(preparedSpells));
  }, [fufilledChoices, dispatch]);

  useEffect(() => {
    const freeSpellChoices = fufilledChoices.filter(
      (c) => c.protocol === ChoiceProtocol.ADD_FREE_SPELL
    );
    const freeSpells = freeSpellChoices
      .map((c) => c.selections)
      .flat() as AddFreeSpellOutput;
    dispatch(setFreeSpells(freeSpells));
  }, [fufilledChoices, dispatch]);
};

export default useSpellcaster;
