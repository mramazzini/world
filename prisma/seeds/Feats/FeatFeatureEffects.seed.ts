import { Prisma, RefreshEvent } from '@prisma/client';
import { FeatFeatureIds } from './FeatFeatures.seed';
import { spellIds } from '../Spells/SpellSeed';

const FeatFeatureEffectIds = {
  mobile: 'mobile',
  resilient: 'resilient',
  speedingRage: 'speedingRage',
  crossbowExpert: 'crossbowExpert',
  runeShaperComprehendLanguages: 'runeShaperComprehendLanguages',
  runeShapeRuneMagic: 'runeShapeRuneMagic',
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
  {
    id: FeatFeatureEffectIds.runeShaperComprehendLanguages,
    level: 1,
    Feature: {
      connect: {
        id: FeatFeatureIds.runeShaperComprehendLanguages,
      },
    },
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: FeatFeatureEffectIds.runeShaperComprehendLanguages,
            spellId: spellIds.comprehendLanguages,
          },
        },
        create: {
          requireSpellSlot: false,
          amountBeforeRest: 1,
          restType: RefreshEvent.LONG_REST,
          spellId: spellIds.comprehendLanguages,
        },
      },
    },
  },
];

export default FeatFeatureEffectSeed;
