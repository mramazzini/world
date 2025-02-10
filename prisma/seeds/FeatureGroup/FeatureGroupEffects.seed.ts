import { DamageTypes, Prisma, WeaponGroup } from '@prisma/client';
import { FeaturesFromFeatureGroupIds as ids } from './FeatureGroup.seed';
import { EquippedState } from '@/hooks/useLoadout';
import { spellIds } from '../Spells/spells.seed';
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
  {
    id: ids.breathOfWinterDiscipleElements,
    level: 17,
    Feature: {
      connect: {
        id: ids.breathOfWinterDiscipleElements,
      },
    },
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: ids.breathOfWinterDiscipleElements,
            spellId: spellIds.coneOfCold,
          },
        },
        create: {
          spellId: spellIds.coneOfCold,
        },
      },
    },
  },
  {
    id: ids.clenchOfNorthWindDiscipleElements,
    level: 6,
    Feature: {
      connect: {
        id: ids.clenchOfNorthWindDiscipleElements,
      },
    },
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: ids.clenchOfNorthWindDiscipleElements,
            spellId: spellIds.holdPerson,
          },
        },
        create: {
          spellId: spellIds.holdPerson,
        },
      },
    },
  },
  {
    id: ids.elementalAtunementDiscipleElements,
    level: 3,
    Feature: {
      connect: {
        id: ids.elementalAtunementDiscipleElements,
      },
    },
  },
  {
    id: ids.eternalMountainDefenseDiscipleElements,
    level: 17,
    Feature: {
      connect: {
        id: ids.eternalMountainDefenseDiscipleElements,
      },
    },
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: ids.eternalMountainDefenseDiscipleElements,
            spellId: spellIds.stoneSkin,
          },
        },
        create: {
          spellId: spellIds.stoneSkin,
        },
      },
    },
  },
  {
    id: ids.fangsOfTheFireSnakeDiscipleElements,
    level: 3,
    Feature: {
      connect: {
        id: ids.fangsOfTheFireSnakeDiscipleElements,
      },
    },
  },
  {
    id: ids.fistOfFourThundersDiscipleElements,
    level: 3,
    Feature: {
      connect: {
        id: ids.fistOfFourThundersDiscipleElements,
      },
    },
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: ids.fistOfFourThundersDiscipleElements,
            spellId: spellIds.thunderwave,
          },
        },
        create: {
          spellId: spellIds.thunderwave,
        },
      },
    },
  },
  {
    id: ids.rideTheWindDiscipleElements,
    level: 6,
    Feature: {
      connect: {
        id: ids.rideTheWindDiscipleElements,
      },
    },
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: ids.rideTheWindDiscipleElements,
            spellId: spellIds.fly,
          },
        },
        create: {
          spellId: spellIds.fly,
        },
      },
    },
  },
  {
    id: ids.firstOfUnbrokenAirDiscipleElements,
    level: 3,
    Feature: {
      connect: {
        id: ids.firstOfUnbrokenAirDiscipleElements,
      },
    },
  },
  {
    id: ids.flamesOfThePheonixDiscipleElements,
    level: 11,
    Feature: {
      connect: {
        id: ids.flamesOfThePheonixDiscipleElements,
      },
    },
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: ids.flamesOfThePheonixDiscipleElements,
            spellId: spellIds.fireball,
          },
        },
        create: {
          spellId: spellIds.fireball,
        },
      },
    },
  },
  {
    id: ids.gongOfTheSummitDiscipleElements,
    level: 6,
    Feature: {
      connect: {
        id: ids.gongOfTheSummitDiscipleElements,
      },
    },
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: ids.gongOfTheSummitDiscipleElements,
            spellId: spellIds.shatter,
          },
        },
        create: {
          spellId: spellIds.shatter,
        },
      },
    },
  },
  {
    id: ids.mistStanceDiscipleElements,
    level: 11,
    Feature: {
      connect: {
        id: ids.mistStanceDiscipleElements,
      },
    },
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: ids.mistStanceDiscipleElements,
            spellId: spellIds.gaseousForm,
          },
        },
        create: {
          spellId: spellIds.gaseousForm,
        },
      },
    },
  },
  {
    id: ids.riverOfHungryFlameDiscipleElements,
    level: 17,
    Feature: {
      connect: {
        id: ids.riverOfHungryFlameDiscipleElements,
      },
    },
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: ids.riverOfHungryFlameDiscipleElements,
            spellId: spellIds.wallOfFire,
          },
        },
        create: {
          spellId: spellIds.wallOfFire,
        },
      },
    },
  },
  {
    id: ids.rushOfTheGaleSpiritsDiscipleElements,
    level: 3,
    Feature: {
      connect: {
        id: ids.rushOfTheGaleSpiritsDiscipleElements,
      },
    },
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: ids.rushOfTheGaleSpiritsDiscipleElements,
            spellId: spellIds.gustOfWind,
          },
        },
        create: {
          spellId: spellIds.gustOfWind,
        },
      },
    },
  },
  {
    id: ids.shapeOfTheFlowingRiverDiscipleElements,
    level: 3,
    Feature: {
      connect: {
        id: ids.shapeOfTheFlowingRiverDiscipleElements,
      },
    },
  },
  {
    id: ids.sweepingCinderStrikeDiscipleElements,
    level: 3,
    Feature: {
      connect: {
        id: ids.sweepingCinderStrikeDiscipleElements,
      },
    },
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: ids.sweepingCinderStrikeDiscipleElements,
            spellId: spellIds.burningHands,
          },
        },
        create: {
          spellId: spellIds.burningHands,
        },
      },
    },
  },
  {
    id: ids.waterWhipDiscipleElements,
    level: 3,
    Feature: {
      connect: {
        id: ids.waterWhipDiscipleElements,
      },
    },
  },
  {
    id: ids.waveOfRollingEarthDiscipleElements,
    level: 17,
    Feature: {
      connect: {
        id: ids.waveOfRollingEarthDiscipleElements,
      },
    },
  },
];

export default FeatureGroupEffectsSeed;
