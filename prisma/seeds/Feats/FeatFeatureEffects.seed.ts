import { Prisma } from '@prisma/client';
import { FeatFeatureIds } from './FeatFeatures.seed';
import { FeatIds } from './Feats.seed';

const FeatFeatureEffectSeed: Prisma.EffectCreateInput[] = [
  {
    level: 1,
    id: FeatFeatureIds.mobile,
    Feature: {
      connect: {
        id: FeatIds.mobile,
      },
    },
    speedBonusFormula: '10',
  },
  {
    id: FeatFeatureIds.resilient,
    level: 1,
    Feature: {
      connect: {
        id: FeatIds.resilient,
      },
    },
  },
  {
    id: FeatFeatureIds.speedingRage,
    level: 5,
    Feature: {
      connect: {
        id: FeatIds.speedingRage,
      },
    },
    speedBonusFormula: '5 * PROF',
  },
];

export default FeatFeatureEffectSeed;
