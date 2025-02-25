import { Prisma, RefreshEvent } from '@prisma/client';
import { BarbarianSubclassFeatureIds as fids } from '../SubclassFeatures/Barbarian.seed';
import { CustomResourceIds } from '../../CustomResource/CustomResource.seed';

const BarbarianSubclassEffectIds = {
  formofthebeast: 'formofthebeast',
  bestialSoul: 'bestialSoul',
  infectiousFury: 'infectiousFury',
  callTheHunter: 'callTheHunter',
  stormAura: 'stormAura',
  stormSoul: 'stormSoul',
  shieldingStorm: 'shieldingStorm',
  ragingStorm: 'ragingStorm',
};

const BarbarianSubclassFeatureEffectsSeed: Prisma.EffectCreateInput[] = [
  {
    id: BarbarianSubclassEffectIds.formofthebeast,
    Feature: {
      connect: {
        id: fids.formOfTheBeast,
      },
    },
    level: 3,
  },
  {
    id: BarbarianSubclassEffectIds.bestialSoul,
    Feature: {
      connect: {
        id: fids.bestialSoul,
      },
    },
    level: 6,
  },
  {
    id: BarbarianSubclassEffectIds.infectiousFury,
    Feature: {
      connect: {
        id: fids.infectiousFury,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: BarbarianSubclassEffectIds.infectiousFury,
            resourceId: CustomResourceIds.infectiousFury,
          },
        },
        create: {
          resourceId: CustomResourceIds.infectiousFury,
          refreshOn: RefreshEvent.LONG_REST,
          scalingFormula: 'PROF',
        },
      },
    },
    rollFormulas: ['8 + PROF + CON'],
    level: 10,
  },
  {
    id: BarbarianSubclassEffectIds.callTheHunter,
    Feature: {
      connect: {
        id: fids.callTheHunt,
      },
    },
    level: 14,
  },
  {
    id: BarbarianSubclassEffectIds.stormAura,
    Feature: {
      connect: {
        id: fids.stormAura,
      },
    },
    level: 3,
    rollFormulas: ['8 + PROF + CON'],
  },
  {
    id: BarbarianSubclassEffectIds.stormSoul,
    Feature: {
      connect: {
        id: fids.stormSoul,
      },
    },
    level: 6,
  },
  {
    id: BarbarianSubclassEffectIds.shieldingStorm,
    Feature: {
      connect: {
        id: fids.shieldingStorm,
      },
    },
    level: 10,
  },
  {
    id: BarbarianSubclassEffectIds.ragingStorm,
    Feature: {
      connect: {
        id: fids.ragingStorm,
      },
    },
    level: 14,
  },
];

export default BarbarianSubclassFeatureEffectsSeed;
