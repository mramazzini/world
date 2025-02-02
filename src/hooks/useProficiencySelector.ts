import { ToolID, WeaponID } from '@/lib/types/types';
import { useAppSelector } from '@/store/hooks';
import {
  memoizeGetTool,
  memoizeGetWeapon,
} from '@/Utility/Indexed/globalCache';
import {
  Ability,
  ArmorType,
  Language,
  Skill,
  WeaponGroup,
} from '@prisma/client';
import { useCallback } from 'react';

const useProficiencySelector = () => {
  const {
    proficientToolGroups,
    skillProficiencies,
    skillExpertises,
    skillHalfProficiencies,
    savingThrowProficiencies,
    proficientToolIds: toolIds,
    proficientArmorTypes: armorTypes,
    proficientWeaponIds: weaponIds,
    proficientLanguages: languages,
    proficientWeaponGroups: weaponGroups,
  } = useAppSelector((state) => state.sheet);
  const isProficientInTool = useCallback(
    async (toolID: ToolID) => {
      if (toolIds.includes(toolID)) return true;

      // Try to find the toolgroup
      const tool = await memoizeGetTool({
        query: toolID,
        type: 'id',
      });

      if (!tool || !tool.ToolGroup) return false;

      if (proficientToolGroups.includes(tool.ToolGroup)) return true;

      return false;
    },
    [proficientToolGroups, toolIds]
  );

  const isProficientInSkill = useCallback(
    (skill: Skill) => {
      return skillProficiencies.includes(skill);
    },
    [skillProficiencies]
  );

  const isProficientInSavingThrow = useCallback(
    (ability: Ability) => {
      return savingThrowProficiencies.includes(ability);
    },
    [savingThrowProficiencies]
  );

  const isExpertInSkill = useCallback(
    (skill: Skill) => {
      return skillExpertises.includes(skill);
    },
    [skillExpertises]
  );

  const isHalfProficientInSkill = useCallback(
    (skill: Skill) => {
      return skillHalfProficiencies.includes(skill);
    },
    [skillHalfProficiencies]
  );

  const isProficientInArmorType = useCallback(
    (armorType: ArmorType) => {
      return armorTypes.includes(armorType);
    },
    [armorTypes]
  );

  const isProficientInLanguage = useCallback(
    (language: Language) => {
      return languages.includes(language);
    },
    [languages]
  );

  const isProficientInWeapon = useCallback(
    async (weaponId: WeaponID) => {
      if (weaponIds.includes(weaponId)) return true;

      // Try to find the weaponGroup
      const weapon = await memoizeGetWeapon({
        query: weaponId,
        type: 'id',
      });

      if (!weapon) return false;

      if (weaponGroups.includes(WeaponGroup.ALL_WEAPONS)) return true;

      //THIS is bad and I dont like it but it is unlikely that there will be more weapon groups in the future.

      //identify weapon group
      const isSimple = weapon.isSimple;
      const isRanged = weapon.isRanged || false;
      const isMelee = !weapon.isRanged;

      if (
        (isSimple && weaponGroups.includes(WeaponGroup.ALL_SIMPLE)) ||
        (isRanged && weaponGroups.includes(WeaponGroup.ALL_RANGED)) ||
        (isMelee && weaponGroups.includes(WeaponGroup.ALL_MELEE)) ||
        (!isSimple && weaponGroups.includes(WeaponGroup.ALL_MARTIAL)) ||
        (isRanged &&
          !isSimple &&
          weaponGroups.includes(WeaponGroup.MARTIAL_RANGED)) ||
        (isMelee &&
          !isSimple &&
          weaponGroups.includes(WeaponGroup.MARTIAL_MELEE)) ||
        (isSimple &&
          isRanged &&
          weaponGroups.includes(WeaponGroup.SIMPLE_RANGED)) ||
        (isSimple && isMelee && weaponGroups.includes(WeaponGroup.SIMPLE_MELEE))
      ) {
        return true;
      }

      return false;
    },
    [weaponGroups, weaponIds]
  );

  return {
    isProficientInTool,
    isProficientInSkill,
    isProficientInLanguage,
    isProficientInSavingThrow,
    isExpertInSkill,
    isHalfProficientInSkill,
    isProficientInArmorType,
    isProficientInWeapon,
  };
};

export default useProficiencySelector;
