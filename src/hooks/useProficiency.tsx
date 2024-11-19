import { useAppSelector } from '@/store/hooks';
import {
  Ability,
  ArmorType,
  Language,
  Skill,
  ToolGroup,
  WeaponGroup,
} from '@prisma/client';
import { useCallback, useMemo } from 'react';
import useLevel from './useLevel';
import { ToolID, WeaponID } from '@/lib/types/types';
import { calcProficiency } from '@/Utility/characterStateFunctions/calc/calcProficiency';
import {
  memoizeGetTool,
  memoizeGetWeapon,
} from '@/Utility/Indexed/globalCache';

const useProficiency = () => {
  const character = useAppSelector((state) => state.sheet.rawCharacter);
  const level = useLevel();

  const toolIds = useMemo(() => {
    if (!character) return [];
    const toolIds: ToolID[] = [
      ...character.CharacterToClass.reduce<string[]>((acc, cur) => {
        return [...acc, ...cur.Class.freeToolProficiencyIds];
      }, []),
      ...(character.Background?.freeToolProficiencyIds || []),
    ];
    return toolIds;
  }, [character]);

  const toolGroups = useMemo(() => {
    if (!character) return [];
    const toolGroups: ToolGroup[] = [
      ...character.CharacterToClass.reduce<ToolGroup[]>((acc, cur) => {
        return [...acc, ...cur.Class.freeToolProficiencyGroups];
      }, []),
      ...(character.Background?.freeToolProficiencyGroups || []),
    ];
    return toolGroups;
  }, [character]);

  const languages = useMemo(() => {
    if (!character) return [];
    const languages: Language[] = [
      ...(character.Background?.freeLanguageProficiencies || []),
    ];
    return languages;
  }, [character]);

  const skillProficiencies = useMemo(() => {
    if (!character) return [];
    const skills: Skill[] = [
      ...character.CharacterToClass.reduce<Skill[]>((acc, cur) => {
        return [...acc, ...cur.Class.freeSkills];
      }, []),
      ...(character.Background?.freeSkillProficiencies || []),
    ];
    return skills;
  }, [character]);

  const skillExpertises = useMemo(() => {
    return [] as Skill[];
  }, []);

  const savingThrows = useMemo(() => {
    if (!character) return [];
    const savingThrows: Ability[] = [
      ...character.CharacterToClass.reduce<Ability[]>((acc, cur) => {
        return [...acc, ...cur.Class.freeSavingThrowProficiencies];
      }, []),
    ];
    return savingThrows;
  }, [character]);

  const armorTypes = useMemo(() => {
    if (!character) return [];
    const armorTypes: ArmorType[] = [
      ...character.CharacterToClass.reduce<ArmorType[]>((acc, cur) => {
        return [...acc, ...cur.Class.freeArmorProficiencies];
      }, []),
    ];
    return armorTypes;
  }, [character]);

  const weaponIds = useMemo(() => {
    if (!character) return [];
    const weaponIds: WeaponID[] = [
      ...character.CharacterToClass.reduce<WeaponID[]>((acc, cur) => {
        return [...acc, ...cur.Class.freeWeaponProficiencyIds];
      }, []),
    ];
    return weaponIds;
  }, [character]);

  const weaponGroups = useMemo(() => {
    if (!character) return [];
    const weaponGroups: WeaponGroup[] = [
      ...character.CharacterToClass.reduce<WeaponGroup[]>((acc, cur) => {
        return [...acc, ...cur.Class.freeWeaponProficiencyGroups];
      }, []),
    ];
    return weaponGroups;
  }, [character]);

  const isProficientInTool = useCallback(
    async (toolID: ToolID) => {
      if (toolIds.includes(toolID)) return true;

      // Try to find the toolgroup
      const tool = await memoizeGetTool({
        query: toolID,
        type: 'id',
      });

      if (!tool || !tool.ToolGroup) return false;

      if (toolGroups.includes(tool.ToolGroup)) return true;
    },
    [toolGroups, toolIds]
  );

  const isProficientInSkill = useCallback(
    (skill: Skill) => {
      return skillProficiencies.includes(skill);
    },
    [skillProficiencies]
  );

  const isProficientInSavingThrow = useCallback(
    (ability: Ability) => {
      return savingThrows.includes(ability);
    },
    [savingThrows]
  );

  const isExpertInSkill = useCallback(
    (skill: Skill) => {
      return skillExpertises.includes(skill);
    },
    [skillExpertises]
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

  const proficiencyBonus = useMemo(() => {
    return calcProficiency(level);
  }, [level]);

  return {
    proficiencyBonus,
    toolIds,
    toolGroups,
    skillProficiencies,
    skillExpertises,
    savingThrows,
    armorTypes,
    weaponGroups,
    weaponIds,
    languages,
    isProficientInTool,
    isProficientInSkill,
    isProficientInLanguage,
    isProficientInSavingThrow,
    isExpertInSkill,
    isProficientInArmorType,
    isProficientInWeapon,
  };
};

export default useProficiency;
