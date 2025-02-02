import { Prisma } from '@prisma/client';
import { FeatFeatureIds } from './FeatFeatures.seed';

const FeatFeatureEffectIds = {
  mobile: 'mobile',
  resilient: 'resilient',
  speedingRage: 'speedingRage',
  crossbowExpert: 'crossbowExpert',
};

const FeatFeatureEffectSeed: Prisma.EffectCreateInput[] = [
  {
    level: 1,
    id: FeatFeatureEffectIds.mobile,
    Feature: {
      connect: {
        id: FeatFeatureIds.mobile,
      },
    },
    speedBonusFormula: '10',
  },
  {
    id: FeatFeatureEffectIds.resilient,
    level: 1,
    Feature: {
      connect: {
        id: FeatFeatureIds.resilient,
      },
    },
  },
  {
    id: FeatFeatureEffectIds.speedingRage,
    level: 5,
    Feature: {
      connect: {
        id: FeatFeatureIds.speedingRage,
      },
    },
    speedBonusFormula: '5 * PROF',
  },
  {
    id: FeatFeatureEffectIds.crossbowExpert,
    level: 1,
    Feature: {
      connect: {
        id: FeatFeatureIds.crossbowExpert,
      },
    },
  },
];

export default FeatFeatureEffectSeed;
