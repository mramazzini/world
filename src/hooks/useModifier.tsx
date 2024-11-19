import { skillAtritbuteMap } from '@/lib/globalVars';
import { useAppSelector } from '@/store/hooks';
import { Ability, Skill } from '@prisma/client';
import { useCallback } from 'react';
import useProficiency from './useProficiency';
import { ToolID, WeaponID } from '@/lib/types/types';
import useAbility from './useAbilityScore';

const useModifier = () => {
  const character = useAppSelector((state) => state.sheet.rawCharacter);

  const abilityScores = useAbility();

  const {
    proficiencyBonus,
    isProficientInSkill,
    isExpertInSkill,
    isProficientInTool,
    isProficientInWeapon,
    isProficientInSavingThrow,
  } = useProficiency();

  const getModifier = useCallback((score: number) => {
    return Math.floor((score - 10) / 2);
  }, []);

  const getAbilityModifier = useCallback(
    (ability: Ability) => {
      switch (ability) {
        case Ability.STR:
          return getModifier(abilityScores[Ability.STR]);
        case Ability.DEX:
          return getModifier(abilityScores[Ability.DEX]);
        case Ability.CON:
          return getModifier(abilityScores[Ability.CON]);
        case Ability.INT:
          return getModifier(abilityScores[Ability.INT]);
        case Ability.WIS:
          return getModifier(abilityScores[Ability.WIS]);
        case Ability.CHA:
          return getModifier(abilityScores[Ability.CHA]);
      }
    },
    [getModifier, abilityScores]
  );

  const getSkillModifier = useCallback(
    (skill: Skill) => {
      if (!character) return 0;
      const ability = skillAtritbuteMap[skill];
      const abilityScore = abilityScores[ability];
      const modifier = getModifier(abilityScore);
      const isProficient = isProficientInSkill(skill);
      const isExpertise = isExpertInSkill(skill);
      return (
        modifier +
        (isProficient ? proficiencyBonus : 0) +
        (isExpertise ? proficiencyBonus * 2 : 0)
      );
    },
    [
      character,
      abilityScores,
      proficiencyBonus,
      getModifier,
      isProficientInSkill,
      isExpertInSkill,
    ]
  );

  const getSavingThrowModifier = useCallback(
    (ability: Ability) => {
      const modifier = getAbilityModifier(ability);
      const isProficient = isProficientInSavingThrow(ability);
      return modifier + (isProficient ? proficiencyBonus : 0);
    },
    [proficiencyBonus, getAbilityModifier, isProficientInSavingThrow]
  );

  const getToolModifier = useCallback(
    async (toolId: ToolID, ability?: Ability) => {
      const isProficient = await isProficientInTool(toolId);

      return (
        (ability ? getAbilityModifier(ability) : 0) +
        (isProficient ? proficiencyBonus : 0)
      );
    },
    [proficiencyBonus, getAbilityModifier, isProficientInTool]
  );

  const getWeaponAttackModifier = useCallback(
    async (ability: Ability, weaponId: WeaponID) => {
      const modifier = getAbilityModifier(ability);
      const isProficient = await isProficientInWeapon(weaponId);
      return modifier + (isProficient ? proficiencyBonus : 0);
    },
    [getAbilityModifier, isProficientInWeapon, proficiencyBonus]
  );

  return {
    getAbilityModifier,
    getSkillModifier,
    getSavingThrowModifier,
    getToolModifier,
    getWeaponAttackModifier,
  };
};

export default useModifier;
