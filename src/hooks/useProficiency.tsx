import { useAppSelector } from '@/store/hooks';
import { Ability, ArmorType, Skill } from '@prisma/client';
import { useCallback, useMemo } from 'react';
import useLevel from './useLevel';

const useProficiency = () => {
  const state = useAppSelector((state) => state.character.state);
  const level = useLevel();

  const getToolProficiency = useCallback(
    (toolID: number) => {
      if (!state) return false;
      return state.proficiencies.tools.includes(toolID);
    },
    [state]
  );

  const getSkillProficiency = useCallback(
    (skill: Skill) => {
      if (!state) return false;
      return state.proficiencies.skills.includes(skill);
    },
    [state]
  );

  const getSavingThrowProficiency = useCallback(
    (ability: Ability) => {
      if (!state) return false;
      return state.proficiencies.savingThrows.includes(ability);
    },
    [state]
  );

  const getSkillProficiencyExpertise = useCallback(
    (skill: Skill) => {
      if (!state) return null;
      if (state.proficiencies.skillExpertise.includes(skill))
        return 'expertise';
      if (state.proficiencies.skills.includes(skill)) return 'proficient';
    },
    [state]
  );

  const getArmorProficiency = useCallback(
    (armorType: ArmorType) => {
      if (!state) return false;
      return state.proficiencies.armor.includes(armorType);
    },
    [state]
  );

  const getWeaponProficiency = useCallback(
    (weaponId: number) => {
      if (!state) return false;
      return state.proficiencies.weapons.includes(weaponId);
    },
    [state]
  );

  const proficiencyBonus = useMemo(() => {
    return Math.ceil((level + 7) / 4);
  }, [level]);

  return {
    proficiencyBonus,
    getToolProficiency,
    getSkillProficiency,
    getSavingThrowProficiency,
    getSkillProficiencyExpertise,
    getArmorProficiency,
    getWeaponProficiency,
  };
};

export default useProficiency;
