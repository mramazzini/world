import { DamageTypes, Prisma, WeaponGroup } from '@prisma/client';
import { FeaturesFromFeatureGroupIds as ids } from './FeatureGroup.seed';
import { EquippedState } from '@/hooks/useLoadout';
const FeatureGroupEffectsSeed: Prisma.EffectCreateInput[] = [
  {
    id: ids.archeryFightingStyle,
    level: 1,
    Feature: {
      connect: {
        id: ids.archeryFightingStyle,
      },
    },
    weaponGroupRef: WeaponGroup.ALL_RANGED,
    attackModifier: '+ 2',
  },
  {
    id: ids.blindFightingFightingStyle,
    level: 1,
    Feature: {
      connect: {
        id: ids.blindFightingFightingStyle,
      },
    },
    blindsight: 10,
  },
  {
    id: ids.defenseFightingStyle,
    level: 1,
    Feature: {
      connect: {
        id: ids.defenseFightingStyle,
      },
    },
    acBonusFormula: '1',
    preRequisite: {
      protocol: 'AND',
      data: [{ isWearingArmor: true }],
    },
  },
  {
    id: ids.duelingFightingStyle,
    level: 1,
    Feature: {
      connect: {
        id: ids.duelingFightingStyle,
      },
    },
    preRequisite: {
      protocol: 'AND',
      data: [{ equippedState: EquippedState.OneHanded }],
    },
    weaponGroupRef: WeaponGroup.ALL_MELEE,
    damageModifier: '+ 2',
  },
  {
    id: ids.greatWeaponFightingFightingStyle,
    level: 1,
    Feature: {
      connect: {
        id: ids.greatWeaponFightingFightingStyle,
      },
    },
  },
  {
    id: ids.interceptionFightingStyle,
    level: 1,
    Feature: {
      connect: {
        id: ids.interceptionFightingStyle,
      },
    },
    rollFormulas: ['1d10 + PROF'],
    preRequisite: {
      protocol: 'OR',
      data: [
        { isHoldingShield: true },
        { isWieldingWeaponGroup: WeaponGroup.ALL_WEAPONS },
      ],
    },
  },
  {
    id: ids.protectionFightingStyle,
    level: 1,
    Feature: {
      connect: {
        id: ids.protectionFightingStyle,
      },
    },
    preRequisite: {
      protocol: 'AND',
      data: [{ isHoldingShield: true }],
    },
  },
  {
    id: ids.superiorTechniqueFightingStyle,
    level: 1,
    Feature: {
      connect: {
        id: ids.superiorTechniqueFightingStyle,
      },
    },
  },
  {
    id: ids.thrownWeaponFightingStyle,
    level: 1,
    Feature: {
      connect: {
        id: ids.thrownWeaponFightingStyle,
      },
    },
  },
  {
    id: ids.twoWeaponFightingFightingStyle,
    level: 1,
    Feature: {
      connect: {
        id: ids.twoWeaponFightingFightingStyle,
      },
    },
  },
  {
    id: ids.unarmedFightingFightingStyle,
    level: 1,
    Feature: {
      connect: {
        id: ids.unarmedFightingFightingStyle,
      },
    },
    preRequisite: {
      protocol: 'OR',
      data: [
        { equippedState: EquippedState.Unarmed },
        { equippedState: EquippedState.OneHanded },
        { equippedState: EquippedState.ShieldNoWeapon },
      ],
    },
    unarmedAttack: '1d20 + STR + PROF',
    unarmedDamage: '1d6 + STR',
    twoHandedDamage: '1d8 + STR',
    unarmedDamageType: DamageTypes.BLUDGEONING,
  },
  {
    id: ids.druidicWarriorFightingStyle,
    level: 1,
    Feature: {
      connect: {
        id: ids.druidicWarriorFightingStyle,
      },
    },
  },
  {
    id: ids.blessedWarriorFightingStyle,
    level: 1,
    Feature: {
      connect: {
        id: ids.blessedWarriorFightingStyle,
      },
    },
  },
];

export default FeatureGroupEffectsSeed;
