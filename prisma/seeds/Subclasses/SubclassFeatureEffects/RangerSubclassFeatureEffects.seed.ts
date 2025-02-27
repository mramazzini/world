import { Language, Prisma, RefreshEvent } from '@prisma/client';
import { RangerSubclassFeatureIds as fids } from '../SubclassFeatures/Ranger.seed';
import { spellIds } from '../../Spells/spells.seed';
import { CustomResourceIds } from '../../CustomResource/CustomResource.seed';
const RangerSubclassEffectsIds = {
  drakewardenOrigin: 'drakewardenOrigin',
  draconicGift: 'draconicGift',
  drakeCompanion: 'drakeCompanion',
  bondOfFangAndScale: 'bondOfFangAndScale',
  drakesBreath11: 'drakesBreath11',
  drakesBreath15: 'drakesBreath15',
  perfectedBond: 'perfectedBond',
  horizonWalkerMagic: 'horizonWalkerMagic',
  detectPortal: 'detectPortal',
  planerWarrior3: 'planerWarrior3',
  planarWarrior11: 'planarWarrior11',
  etherealStep: 'etherealStep',
  distantStrike: 'distantStrike',
  spectralDefense: 'spectralDefense',
};

export const RangerSubclassFeatureEffects: Prisma.EffectCreateInput[] = [
  {
    id: RangerSubclassEffectsIds.drakewardenOrigin,
    Feature: {
      connect: {
        id: fids.drakewardenOrigin,
      },
    },
    level: 3,
  },
  {
    id: RangerSubclassEffectsIds.draconicGift,
    Feature: {
      connect: {
        id: fids.draconicGift,
      },
    },
    level: 3,
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: RangerSubclassEffectsIds.draconicGift,
            spellId: spellIds.thaumaturgy,
          },
        },
        create: {
          spellId: spellIds.thaumaturgy,
        },
      },
    },
    languageProficiencies: [Language.DRACONIC],
  },
  {
    id: RangerSubclassEffectsIds.drakeCompanion,
    level: 3,
    Feature: {
      connect: {
        id: fids.drakeCompanion,
      },
    },
  },
  {
    id: RangerSubclassEffectsIds.bondOfFangAndScale,
    level: 7,
    Feature: {
      connect: {
        id: fids.bondOfFangAndScale,
      },
    },
  },
  {
    id: RangerSubclassEffectsIds.drakesBreath11,
    level: 11,
    Feature: {
      connect: {
        id: fids.drakesBreath,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: RangerSubclassEffectsIds.drakesBreath11,
            resourceId: CustomResourceIds.drakesBreath,
          },
        },
        create: {
          resourceId: CustomResourceIds.drakesBreath,
          refreshOn: RefreshEvent.LONG_REST,
          scalingFormula: '1',
        },
      },
    },
    rollFormulas: ['8d6'],
  },

  {
    id: RangerSubclassEffectsIds.drakesBreath15,
    level: 15,
    Feature: {
      connect: {
        id: fids.drakesBreath,
      },
    },
    parentEffect: {
      connect: {
        id: RangerSubclassEffectsIds.drakesBreath11,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: RangerSubclassEffectsIds.drakesBreath15,
            resourceId: CustomResourceIds.drakesBreath,
          },
        },
        create: {
          resourceId: CustomResourceIds.drakesBreath,
          refreshOn: RefreshEvent.LONG_REST,
          scalingFormula: '1',
        },
      },
    },
    rollFormulas: ['10d6'],
  },
  {
    id: RangerSubclassEffectsIds.perfectedBond,
    level: 15,
    Feature: {
      connect: {
        id: fids.perfectedBond,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: RangerSubclassEffectsIds.perfectedBond,
            resourceId: CustomResourceIds.reflexiveResistance,
          },
        },
        create: {
          resourceId: CustomResourceIds.reflexiveResistance,
          refreshOn: RefreshEvent.LONG_REST,
          scalingFormula: '1',
        },
      },
    },
  },
  {
    id: RangerSubclassEffectsIds.horizonWalkerMagic,
    level: 3,
    Feature: {
      connect: {
        id: fids.horizonWalkerMagic,
      },
    },
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: RangerSubclassEffectsIds.horizonWalkerMagic,
              spellId: spellIds.protectionFromEvilAndGood,
            },
          },
          create: {
            spellId: spellIds.protectionFromEvilAndGood,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: RangerSubclassEffectsIds.horizonWalkerMagic,
              spellId: spellIds.mistyStep,
            },
          },
          create: {
            spellId: spellIds.mistyStep,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: RangerSubclassEffectsIds.horizonWalkerMagic,
              spellId: spellIds.haste,
            },
          },
          create: {
            spellId: spellIds.haste,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: RangerSubclassEffectsIds.horizonWalkerMagic,
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
              effectId: RangerSubclassEffectsIds.horizonWalkerMagic,
              spellId: spellIds.teleportationCircle,
            },
          },
          create: {
            spellId: spellIds.teleportationCircle,
          },
        },
      ],
    },
  },
  {
    id: RangerSubclassEffectsIds.detectPortal,
    level: 3,
    Feature: {
      connect: {
        id: fids.detectPortal,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: RangerSubclassEffectsIds.detectPortal,
            resourceId: CustomResourceIds.detectPortal,
          },
        },
        create: {
          resourceId: CustomResourceIds.detectPortal,
          refreshOn: RefreshEvent.SHORT_REST,
          scalingFormula: '1',
        },
      },
    },
  },
  {
    id: RangerSubclassEffectsIds.planerWarrior3,
    level: 3,
    Feature: {
      connect: {
        id: fids.planarWarrior,
      },
    },
  },
  {
    id: RangerSubclassEffectsIds.planarWarrior11,
    level: 11,
    Feature: {
      connect: {
        id: fids.planarWarrior,
      },
    },
  },
  {
    id: RangerSubclassEffectsIds.etherealStep,
    level: 11,
    Feature: {
      connect: {
        id: fids.etherealStep,
      },
    },
  },
  {
    id: RangerSubclassEffectsIds.distantStrike,
    level: 15,
    Feature: {
      connect: {
        id: fids.distantStrike,
      },
    },
  },
  {
    id: RangerSubclassEffectsIds.spectralDefense,
    level: 15,
    Feature: {
      connect: {
        id: fids.spectralDefense,
      },
    },
  },
];
