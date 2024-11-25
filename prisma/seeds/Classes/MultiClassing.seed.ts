import { Ability, ArmorType, Prisma, WeaponGroup } from '@prisma/client';
import { classIds as ids } from './ClassIds';
import { toolIds } from '../Items/Tools/Tool.seed';
import { weaponIds } from '../Items/Weapons/Weapons.seed';

const MulticlassingSeed: Prisma.MultiClassingInfoCreateManyInput[] = [
  {
    classId: ids.fighter,
    multiclassingDescription:
      'You must have a Dexterity or Strength score of 13 or higher in order to multiclass in or out of this class.',
    prerequisite: {
      protocol: 'OR',
      data: [
        {
          minAbilityScore: {
            ability: Ability.DEX,
            value: 13,
          },
        },
        {
          minAbilityScore: {
            ability: Ability.STR,
            value: 13,
          },
        },
      ],
    },
    freeArmorProficiencies: [
      ArmorType.LIGHT,
      ArmorType.MEDIUM,
      ArmorType.SHIELDS,
    ],
    freeWeaponGroupProficiencies: [WeaponGroup.ALL_WEAPONS],
  },
  {
    classId: ids.wizard,
    multiclassingDescription:
      'You must have an Intelligence score of 13 or higher in order to multiclass in or out of this class.',
    prerequisite: {
      protocol: 'AND',
      data: [
        {
          minAbilityScore: {
            ability: Ability.INT,
            value: 13,
          },
        },
      ],
    },
  },
  {
    classId: ids.cleric,
    multiclassingDescription:
      'You must have a Wisdom score of 13 or higher in order to multiclass in or out of this class.',
    prerequisite: {
      protocol: 'AND',
      data: [
        {
          minAbilityScore: {
            ability: Ability.WIS,
            value: 13,
          },
        },
      ],
    },
    freeArmorProficiencies: [
      ArmorType.LIGHT,
      ArmorType.MEDIUM,
      ArmorType.SHIELDS,
    ],
  },
  {
    classId: ids.rogue,
    multiclassingDescription:
      'You must have a Dexterity score of 13 or higher in order to multiclass in or out of this class.',
    prerequisite: {
      protocol: 'AND',
      data: [
        {
          minAbilityScore: {
            ability: Ability.DEX,
            value: 13,
          },
        },
      ],
    },
    freeArmorProficiencies: [ArmorType.LIGHT],
    freeToolIdProficiencies: [toolIds.thievesTools],
  },
  {
    classId: ids.barbarian,
    multiclassingDescription:
      'You must have a Strength score of 13 or higher in order to multiclass in or out of this class.',
    prerequisite: {
      protocol: 'AND',
      data: [
        {
          minAbilityScore: {
            ability: Ability.STR,
            value: 13,
          },
        },
      ],
    },
    freeArmorProficiencies: [ArmorType.SHIELDS],
    freeWeaponGroupProficiencies: [WeaponGroup.ALL_WEAPONS],
  },
  {
    classId: ids.bard,
    multiclassingDescription:
      'You must have a Charisma score of 13 or higher in order to multiclass in or out of this class.',
    prerequisite: {
      protocol: 'AND',
      data: [
        {
          minAbilityScore: {
            ability: Ability.CHA,
            value: 13,
          },
        },
      ],
    },
    freeArmorProficiencies: [ArmorType.LIGHT],
  },
  {
    classId: ids.druid,
    multiclassingDescription:
      'You must have a Wisdom score of 13 or higher in order to multiclass in or out of this class.',
    prerequisite: {
      protocol: 'AND',
      data: [
        {
          minAbilityScore: {
            ability: Ability.WIS,
            value: 13,
          },
        },
      ],
    },
    freeArmorProficiencies: [
      ArmorType.LIGHT,
      ArmorType.MEDIUM,
      ArmorType.SHIELDS,
    ],
  },
  {
    classId: ids.monk,
    multiclassingDescription:
      'You must have a Dexterity and Wisdom score of 13 or higher in order to multiclass in or out of this class.',
    prerequisite: {
      protocol: 'AND',
      data: [
        {
          minAbilityScore: {
            ability: Ability.DEX,
            value: 13,
          },
        },
        {
          minAbilityScore: {
            ability: Ability.WIS,
            value: 13,
          },
        },
      ],
    },
    freeWeaponGroupProficiencies: [WeaponGroup.ALL_SIMPLE],
    freeWeaponIdProficiencies: [weaponIds.shortsword],
  },
  {
    classId: ids.paladin,
    multiclassingDescription:
      'You must have a Strength and Charisma score of 13 or higher in order to multiclass in or out of this class.',
    prerequisite: {
      protocol: 'AND',
      data: [
        {
          minAbilityScore: {
            ability: Ability.STR,
            value: 13,
          },
        },
        {
          minAbilityScore: {
            ability: Ability.CHA,
            value: 13,
          },
        },
      ],
    },
    freeArmorProficiencies: [
      ArmorType.LIGHT,
      ArmorType.MEDIUM,
      ArmorType.SHIELDS,
    ],
    freeWeaponGroupProficiencies: [WeaponGroup.ALL_WEAPONS],
  },
  {
    classId: ids.ranger,
    multiclassingDescription:
      'You must have a Dexterity and Wisdom score of 13 or higher in order to multiclass in or out of this class.',
    prerequisite: {
      protocol: 'AND',
      data: [
        {
          minAbilityScore: {
            ability: Ability.DEX,
            value: 13,
          },
        },
        {
          minAbilityScore: {
            ability: Ability.WIS,
            value: 13,
          },
        },
      ],
    },
    freeArmorProficiencies: [
      ArmorType.LIGHT,
      ArmorType.MEDIUM,
      ArmorType.SHIELDS,
    ],
    freeWeaponGroupProficiencies: [WeaponGroup.ALL_WEAPONS],
  },
  {
    classId: ids.sorcerer,
    multiclassingDescription:
      'You must have a Charisma score of 13 or higher in order to multiclass in or out of this class.',
    prerequisite: {
      protocol: 'AND',
      data: [
        {
          minAbilityScore: {
            ability: Ability.CHA,
            value: 13,
          },
        },
      ],
    },
  },
  {
    classId: ids.warlock,
    multiclassingDescription:
      'You must have a Charisma score of 13 or higher in order to multiclass in or out of this class.',
    prerequisite: {
      protocol: 'AND',
      data: [
        {
          minAbilityScore: {
            ability: Ability.CHA,
            value: 13,
          },
        },
      ],
    },
    freeArmorProficiencies: [ArmorType.LIGHT],
    freeWeaponGroupProficiencies: [WeaponGroup.ALL_SIMPLE],
  },
  {
    classId: ids.artificer,
    multiclassingDescription:
      'You must have an Intelligence score of 13 or higher in order to multiclass in or out of this class.',
    prerequisite: {
      protocol: 'AND',
      data: [
        {
          minAbilityScore: {
            ability: Ability.INT,
            value: 13,
          },
        },
      ],
    },
  },
];

export default MulticlassingSeed;
