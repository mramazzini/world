import { skillAtritbuteMap } from '@/lib/globalVars';
import { useAppSelector } from '@/store/hooks';
import { Ability, Skill } from '@prisma/client';
import { useCallback } from 'react';
import useProficiency from './useProficiency';
import { ToolID } from '@/lib/types/types';

const useModifier = () => {
  const state = useAppSelector((state) => state.sheet.rawCharacter);
  const { proficiencyBonus } = useProficiency();

  const getModifier = useCallback((score: number) => {
    return Math.floor((score - 10) / 2);
  }, []);

  const getAbilityModifier = useCallback(
    (ability: Ability) => {
      return getModifier(state?.abilityScores[ability] || 10);
    },
    [state, getModifier]
  );

  const getSkillModifier = useCallback(
    (skill: Skill) => {
      if (!state) return 0;
      const ability = skillAtritbuteMap[skill];
      const abilityScore = state.abilityScores[ability];
      const modifier = getModifier(abilityScore);
      const isProficient = state.proficiencies.skills.includes(skill);
      const isExpertise = state.proficiencies.skillExpertise.includes(skill);
      return (
        modifier +
        (isProficient ? proficiencyBonus : 0) +
        (isExpertise ? proficiencyBonus * 2 : 0)
      );
    },
    [state, proficiencyBonus, getModifier]
  );

  const getSavingThrowModifier = useCallback(
    (ability: Ability) => {
      if (!state) return 0;
      const modifier = getAbilityModifier(ability);
      const isProficient = state.proficiencies.savingThrows.includes(ability);
      return modifier + (isProficient ? proficiencyBonus : 0);
    },
    [state, proficiencyBonus, getAbilityModifier]
  );

  const getToolModifier = useCallback(
    (toolId: ToolID, ability?: Ability) => {
      if (!state) return 0;
      const isProficient = state.proficiencies.tools.includes(toolId);

      return (
        (ability ? getAbilityModifier(ability) : 0) +
        (isProficient ? proficiencyBonus : 0)
      );
    },
    [state, proficiencyBonus, getAbilityModifier]
  );

  return {
    getAbilityModifier,
    getSkillModifier,
    getSavingThrowModifier,
    getToolModifier,
  };
};

export default useModifier;
