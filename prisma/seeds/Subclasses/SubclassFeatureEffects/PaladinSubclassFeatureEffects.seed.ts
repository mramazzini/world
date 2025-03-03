import { Prisma, RefreshEvent } from '@prisma/client';
import { PaladinSubclassFeatureIds as fids } from '../SubclassFeatures/Paladin.seed';
import { spellIds } from '../../Spells/SpellSeed';
import { CustomResourceIds } from '../../CustomResource/CustomResource.seed';

const paladinSubclassEffectIds = {
  tenetsOfTheCrown: 'tenetsOfTheCrown',
  crownOathSpells3: 'crownOathSpells3',
  crownOathSpells5: 'crownOathSpells5',
  crownOathSpells9: 'crownOathSpells9',
  crownOathSpells13: 'crownOathSpells13',
  crownOathSpells17: 'crownOathSpells17',
  championChallenge: 'championChallenge',
  turnTheTide: 'turnTheTide',
  divineAllegiance: 'divineAllegiance',
  exaltedChampion: 'exaltedChampion',
  unyieldingSpirit: 'unyieldingSpirit',
  oathBreakerSpells3: 'oathBreakerSpells3',
  oathBreakerSpells5: 'oathBreakerSpells5',
  oathBreakerSpells9: 'oathBreakerSpells9',
  oathBreakerSpells13: 'oathBreakerSpells13',
  oathBreakerSpells17: 'oathBreakerSpells17',
  controlUndead: 'controlUndead',
  dreadfulAspect: 'dreadfulAspect',
  auraOfHate7: 'auraOfHate7',
  auraOfHate18: 'auraOfHate18',
  superNaturalResistance: 'superNaturalResistance',
  dreadLord: 'dreadLord',
};

export const PaladinSubclassFeatureEffects: Prisma.EffectCreateInput[] = [
  {
    id: paladinSubclassEffectIds.tenetsOfTheCrown,
    Feature: {
      connect: {
        id: fids.tenetsOfTheCrown,
      },
    },
    level: 3,
  },
  {
    id: paladinSubclassEffectIds.crownOathSpells3,
    Feature: {
      connect: {
        id: fids.crownOathSpells,
      },
    },
    level: 3,
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              spellId: spellIds.compelledDuel,
              effectId: paladinSubclassEffectIds.crownOathSpells3,
            },
          },
          create: {
            spellId: spellIds.compelledDuel,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: paladinSubclassEffectIds.crownOathSpells3,
              spellId: spellIds.command,
            },
          },
          create: {
            spellId: spellIds.command,
          },
        },
      ],
    },
  },
  {
    id: paladinSubclassEffectIds.crownOathSpells5,
    Feature: {
      connect: {
        id: fids.crownOathSpells,
      },
    },
    parentEffect: {
      connect: {
        id: paladinSubclassEffectIds.crownOathSpells3,
      },
    },
    level: 5,
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: paladinSubclassEffectIds.crownOathSpells5,
              spellId: spellIds.wardingBond,
            },
          },
          create: {
            spellId: spellIds.wardingBond,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: paladinSubclassEffectIds.crownOathSpells5,
              spellId: spellIds.zoneOfTruth,
            },
          },
          create: {
            spellId: spellIds.zoneOfTruth,
          },
        },
      ],
    },
  },
  {
    id: paladinSubclassEffectIds.crownOathSpells9,
    Feature: {
      connect: {
        id: fids.crownOathSpells,
      },
    },
    parentEffect: {
      connect: {
        id: paladinSubclassEffectIds.crownOathSpells5,
      },
    },
    level: 9,
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: paladinSubclassEffectIds.crownOathSpells9,
              spellId: spellIds.auraOfVitality,
            },
          },
          create: {
            spellId: spellIds.auraOfVitality,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: paladinSubclassEffectIds.crownOathSpells9,
              spellId: spellIds.spiritGuardians,
            },
          },
          create: {
            spellId: spellIds.spiritGuardians,
          },
        },
      ],
    },
  },
  {
    id: paladinSubclassEffectIds.crownOathSpells13,
    Feature: {
      connect: {
        id: fids.crownOathSpells,
      },
    },
    parentEffect: {
      connect: {
        id: paladinSubclassEffectIds.crownOathSpells9,
      },
    },
    level: 13,
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: paladinSubclassEffectIds.crownOathSpells13,
              spellId: spellIds.banishment,
            },
          },
          create: {
            spellId: spellIds.banishment,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: paladinSubclassEffectIds.crownOathSpells13,
              spellId: spellIds.guardianOfFaith,
            },
          },
          create: {
            spellId: spellIds.guardianOfFaith,
          },
        },
      ],
    },
  },
  {
    id: paladinSubclassEffectIds.crownOathSpells17,
    Feature: {
      connect: {
        id: fids.crownOathSpells,
      },
    },
    parentEffect: {
      connect: {
        id: paladinSubclassEffectIds.crownOathSpells13,
      },
    },
    level: 17,
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: paladinSubclassEffectIds.crownOathSpells17,
              spellId: spellIds.circleOfPower,
            },
          },
          create: {
            spellId: spellIds.circleOfPower,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: paladinSubclassEffectIds.crownOathSpells17,
              spellId: spellIds.geas,
            },
          },
          create: {
            spellId: spellIds.geas,
          },
        },
      ],
    },
  },
  {
    id: paladinSubclassEffectIds.championChallenge,
    Feature: {
      connect: {
        id: fids.championChallenge,
      },
    },
    level: 3,
  },
  {
    id: paladinSubclassEffectIds.turnTheTide,
    Feature: {
      connect: {
        id: fids.turnTheTide,
      },
    },
    rollFormulas: ['1d6 + CHA'],
    level: 3,
  },
  {
    id: paladinSubclassEffectIds.divineAllegiance,
    Feature: {
      connect: {
        id: fids.divineAllegiance,
      },
    },
    level: 7,
  },

  {
    id: paladinSubclassEffectIds.unyieldingSpirit,
    Feature: {
      connect: {
        id: fids.unyieldingSpirit,
      },
    },
    level: 15,
  },
  {
    id: paladinSubclassEffectIds.exaltedChampion,
    Feature: {
      connect: {
        id: fids.exaltedChampion,
      },
    },
    level: 20,
  },
  {
    id: paladinSubclassEffectIds.oathBreakerSpells3,
    Feature: {
      connect: {
        id: fids.oathBreakerSpells,
      },
    },
    level: 3,
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: paladinSubclassEffectIds.oathBreakerSpells3,
              spellId: spellIds.hellishRebuke,
            },
          },
          create: {
            spellId: spellIds.hellishRebuke,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: paladinSubclassEffectIds.oathBreakerSpells3,
              spellId: spellIds.inflictWounds,
            },
          },
          create: {
            spellId: spellIds.inflictWounds,
          },
        },
      ],
    },
  },
  {
    id: paladinSubclassEffectIds.oathBreakerSpells5,
    Feature: {
      connect: {
        id: fids.oathBreakerSpells,
      },
    },
    parentEffect: {
      connect: {
        id: paladinSubclassEffectIds.oathBreakerSpells3,
      },
    },
    level: 5,
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: paladinSubclassEffectIds.oathBreakerSpells5,
              spellId: spellIds.crownOfMadness,
            },
          },
          create: {
            spellId: spellIds.crownOfMadness,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: paladinSubclassEffectIds.oathBreakerSpells5,
              spellId: spellIds.darkness,
            },
          },
          create: {
            spellId: spellIds.darkness,
          },
        },
      ],
    },
  },
  {
    id: paladinSubclassEffectIds.oathBreakerSpells9,
    Feature: {
      connect: {
        id: fids.oathBreakerSpells,
      },
    },
    parentEffect: {
      connect: {
        id: paladinSubclassEffectIds.oathBreakerSpells5,
      },
    },
    level: 9,
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: paladinSubclassEffectIds.oathBreakerSpells9,
              spellId: spellIds.bestowCurse,
            },
          },
          create: {
            spellId: spellIds.bestowCurse,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: paladinSubclassEffectIds.oathBreakerSpells9,
              spellId: spellIds.animateDead,
            },
          },
          create: {
            spellId: spellIds.animateDead,
          },
        },
      ],
    },
  },
  {
    id: paladinSubclassEffectIds.oathBreakerSpells13,
    Feature: {
      connect: {
        id: fids.oathBreakerSpells,
      },
    },
    parentEffect: {
      connect: {
        id: paladinSubclassEffectIds.oathBreakerSpells9,
      },
    },
    level: 13,
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: paladinSubclassEffectIds.oathBreakerSpells13,
              spellId: spellIds.blight,
            },
          },
          create: {
            spellId: spellIds.blight,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: paladinSubclassEffectIds.oathBreakerSpells13,
              spellId: spellIds.confusion,
            },
          },
          create: {
            spellId: spellIds.confusion,
          },
        },
      ],
    },
  },
  {
    id: paladinSubclassEffectIds.oathBreakerSpells17,
    Feature: {
      connect: {
        id: fids.oathBreakerSpells,
      },
    },
    parentEffect: {
      connect: {
        id: paladinSubclassEffectIds.oathBreakerSpells13,
      },
    },
    level: 17,
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: paladinSubclassEffectIds.oathBreakerSpells17,
              spellId: spellIds.dominatePerson,
            },
          },
          create: {
            spellId: spellIds.dominatePerson,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: paladinSubclassEffectIds.oathBreakerSpells17,
              spellId: spellIds.contagion,
            },
          },
          create: {
            spellId: spellIds.contagion,
          },
        },
      ],
    },
  },
  {
    id: paladinSubclassEffectIds.controlUndead,
    Feature: {
      connect: {
        id: fids.controlUndead,
      },
    },
    level: 3,
  },
  {
    id: paladinSubclassEffectIds.dreadfulAspect,
    Feature: {
      connect: {
        id: fids.dreadfulAspect,
      },
    },
    level: 3,
  },
  {
    id: paladinSubclassEffectIds.auraOfHate7,
    Feature: {
      connect: {
        id: fids.auraOfHate,
      },
    },
    level: 7,
  },
  {
    id: paladinSubclassEffectIds.auraOfHate18,
    Feature: {
      connect: {
        id: fids.auraOfHate,
      },
    },
    level: 18,
  },
  {
    id: paladinSubclassEffectIds.superNaturalResistance,
    Feature: {
      connect: {
        id: fids.supernaturalConstitution,
      },
    },
    level: 15,
  },
  {
    id: paladinSubclassEffectIds.dreadLord,
    Feature: {
      connect: {
        id: fids.dreadLord,
      },
    },
    level: 20,
    rollFormulas: ['4d10', '3d10 + CHA'],
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: paladinSubclassEffectIds.dreadLord,
            resourceId: CustomResourceIds.dreadLord,
          },
        },
        create: {
          resourceId: CustomResourceIds.dreadLord,
          refreshOn: RefreshEvent.LONG_REST,
          scalingFormula: '1',
        },
      },
    },
  },
];
