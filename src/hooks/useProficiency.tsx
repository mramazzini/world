import { useAppSelector } from '@/store/hooks';
import {
  Ability,
  ArmorType,
  ChoiceProtocol,
  Language,
  Skill,
  ToolGroup,
  WeaponGroup,
} from '@prisma/client';
import { useCallback, useMemo } from 'react';
import useLevel from './useLevel';
import { ToolID, WeaponID } from '@/lib/types/types';
import {
  memoizeGetTool,
  memoizeGetWeapon,
} from '@/Utility/Indexed/globalCache';
import useCharacterChoices from './useCharacterChoices';
import { makeArrayUnique } from '@/Utility/makeArrayUnique';
import usePrimaryClass from './usePrimaryClass';
import useMulticlass from './useMulticlass';

const useProficiency = () => {
  const level = useLevel();
  const primaryClass = usePrimaryClass();
  const multiclasses = useMulticlass();
  const character = useAppSelector((state) => state.sheet.rawCharacter);
  const { fufilledChoices } = useCharacterChoices();

  const toolIds = useMemo(() => {
    const toolIds: ToolID[] = [
      ...multiclasses.reduce<string[]>((acc, cur) => {
        return [
          ...acc,
          ...(cur.Class.MultiClassing?.freeToolIdProficiencies || []),
        ];
      }, []),
      ...(primaryClass?.Class.freeToolProficiencyIds || []),
      ...(character?.Background?.freeToolProficiencyIds || []),
    ];
    return makeArrayUnique(toolIds);
  }, [character, multiclasses, primaryClass]);

  const toolGroups = useMemo(() => {
    const toolGroups: ToolGroup[] = [
      ...(multiclasses.reduce<ToolGroup[]>((acc, cur) => {
        return [
          ...acc,
          ...(cur.Class.MultiClassing?.freeToolGroupProficiencies || []),
        ];
      }, []) || []),
      ...(primaryClass?.Class.freeToolProficiencyGroups || []),
      ...(character?.Background?.freeToolProficiencyGroups || []),
    ];
    //use set to make unique
    return makeArrayUnique(toolGroups);
  }, [character, multiclasses, primaryClass]);

  const languages = useMemo(() => {
    if (!character) return [];
    const languages: Language[] = [
      ...(character.Background?.freeLanguageProficiencies || []),
      ...fufilledChoices
        .map((choice) => {
          if (choice.protocol === ChoiceProtocol.SET_LANGUAGE_PROFICIENCY) {
            return choice.selections as Language[];
          }
        })
        .filter((x) => x !== undefined)
        .flat(),
    ];
    return makeArrayUnique(languages);
  }, [character, fufilledChoices]);

  const skillProficiencies = useMemo(() => {
    const skills: Skill[] = [
      ...multiclasses.reduce<Skill[]>((acc, cur) => {
        return [
          ...acc,
          ...(cur.Class.MultiClassing?.freeSkillProficiencies || []),
        ];
      }, []),
      ...(primaryClass?.Class.freeSkills || []),
      ...(character?.Background?.freeSkillProficiencies || []),
      ...fufilledChoices
        .map((choice) => {
          if (choice.protocol === ChoiceProtocol.SET_SKILL_PROFICIENCY) {
            return choice.selections as Skill[];
          }
        })
        .filter((x) => x !== undefined)
        .flat(),
    ];
    return makeArrayUnique(skills);
  }, [character, fufilledChoices, multiclasses, primaryClass]);

  const skillExpertises = useMemo(() => {
    return [] as Skill[];
  }, []);

  const savingThrows = useMemo(() => {
    const savingThrows: Ability[] = [
      ...(primaryClass?.Class.freeSavingThrowProficiencies || []),
      ...multiclasses.reduce<Ability[]>((acc, cur) => {
        return [
          ...acc,
          ...(cur.Class.MultiClassing?.freeSavingThrowProficiencies || []),
        ];
      }, []),
    ];
    return makeArrayUnique(savingThrows);
  }, [primaryClass, multiclasses]);

  const armorTypes = useMemo(() => {
    if (!primaryClass) return [];
    const armorTypes: ArmorType[] = [
      ...(primaryClass?.Class.freeArmorProficiencies || []),
      ...multiclasses.reduce<ArmorType[]>((acc, cur) => {
        return [
          ...acc,
          ...(cur.Class.MultiClassing?.freeArmorProficiencies || []),
        ];
      }, []),
    ];
    return makeArrayUnique(armorTypes);
  }, [multiclasses, primaryClass]);

  const weaponIds = useMemo(() => {
    const weaponIds: WeaponID[] = [
      ...(primaryClass?.Class.freeWeaponProficiencyIds || []),
      ...multiclasses.reduce<string[]>((acc, cur) => {
        return [
          ...acc,
          ...(cur.Class.MultiClassing?.freeWeaponIdProficiencies || []),
        ];
      }, []),
    ];
    return makeArrayUnique(weaponIds);
  }, [multiclasses, primaryClass]);

  const weaponGroups = useMemo(() => {
    const weaponGroups: WeaponGroup[] = [
      ...(primaryClass?.Class.freeWeaponProficiencyGroups || []),
      ...multiclasses.reduce<WeaponGroup[]>((acc, cur) => {
        return [
          ...acc,
          ...(cur.Class.MultiClassing?.freeWeaponGroupProficiencies || []),
        ];
      }, []),
    ];
    return makeArrayUnique(weaponGroups);
  }, [multiclasses, primaryClass]);

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

      return false;
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
    return Math.ceil(level / 4) + 1;
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
