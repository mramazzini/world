import { Prisma } from '@prisma/client';
import { backgroundFeatureIds as fids } from './BackgroundFeatures.seed';
import { FeatIds } from '../Feats/Feats.seed';

const eids = {
  shelterOfTheFaithful: 'shelterOfTheFaithful',
  culturalChameleon: 'culturalChameleon',
  adeptLinguist: 'adeptLinguist',
  watchersEyeInvestigator: 'watchersEyeInvestigator',
  harrowingEvent: 'harrowingEvent',
  heartOfDarkness: 'heartOfDarkness',
  lifeOfSeclusion: 'lifeOfSeclusion',
  discovery: 'discovery',
  watchersEyeCityWatch: 'watchersEyeCityWatch',
  knightlyRegard: 'knightlyRegard',
  knightlyOrdersOfFaerun: 'knightlyOrdersOfFaerun',
  mercenariesOfTheNorth: 'mercenariesOfTheNorth',
  mercenaryLife: 'mercenaryLife',
  origin: 'origin',
  wanderer: 'wanderer',
  runeStyles: 'runeStyles',
  runeCarver: 'runeCarver',
  shipsPassage: 'shipsPassage',
  illPatchIt: 'illPatchIt',
  lifeAtSea: 'lifeAtSea',
  specialty: 'specialty',
  militaryRank: 'militaryRank',
  neverTellMeTheOdds: 'neverTellMeTheOdds',
  insideInformant: 'insideInformant',
};

const BackgroundFeatureEffectSeed: Prisma.EffectCreateInput[] = [
  {
    id: eids.shelterOfTheFaithful,
    level: 1,
    Feature: {
      connect: {
        id: fids.shelterOfTheFaithful,
      },
    },
  },
  {
    id: eids.culturalChameleon,
    level: 1,
    Feature: {
      connect: {
        id: fids.culturalChameleon,
      },
    },
  },
  {
    id: eids.adeptLinguist,
    level: 1,
    Feature: {
      connect: {
        id: fids.adeptLinguist,
      },
    },
  },
  {
    id: eids.watchersEyeCityWatch,
    level: 1,
    Feature: {
      connect: {
        id: fids.watchersEyeCityWatch,
      },
    },
  },
  {
    id: eids.heartOfDarkness,
    level: 1,
    Feature: {
      connect: {
        id: fids.heartOfDarkness,
      },
    },
  },
  {
    id: eids.lifeOfSeclusion,
    level: 1,
    Feature: {
      connect: {
        id: fids.lifeOfSeclusion,
      },
    },
  },
  {
    id: eids.discovery,
    level: 1,
    Feature: {
      connect: {
        id: fids.discovery,
      },
    },
  },
  {
    id: eids.knightlyOrdersOfFaerun,
    level: 1,
    Feature: {
      connect: {
        id: fids.knightlyOrdersOfFaerun,
      },
    },
  },
  {
    id: eids.knightlyRegard,
    level: 1,
    Feature: {
      connect: {
        id: fids.knightlyRegard,
      },
    },
  },
  {
    id: eids.mercenariesOfTheNorth,
    level: 1,
    Feature: {
      connect: {
        id: fids.mercenariesOfTheNorth,
      },
    },
  },
  {
    id: eids.mercenaryLife,
    level: 1,
    Feature: {
      connect: {
        id: fids.mercenaryLife,
      },
    },
  },
  {
    id: eids.origin,
    level: 1,
    Feature: {
      connect: {
        id: fids.origin,
      },
    },
  },
  {
    id: eids.wanderer,
    level: 1,
    Feature: {
      connect: {
        id: fids.wanderer,
      },
    },
  },
  {
    id: eids.runeStyles,
    level: 1,
    Feature: {
      connect: {
        id: fids.runeStyles,
      },
    },
  },
  {
    id: eids.runeCarver,
    level: 1,
    Feature: {
      connect: {
        id: fids.runeCarver,
      },
    },
    EffectGrantsFeat: {
      connectOrCreate: {
        where: {
          effectId_featId: {
            effectId: eids.runeCarver,
            featId: FeatIds.runeShaper,
          },
        },
        create: {
          featId: FeatIds.runeShaper,
        },
      },
    },
  },
  {
    id: eids.shipsPassage,
    level: 1,
    Feature: {
      connect: {
        id: fids.shipsPassage,
      },
    },
  },
  {
    id: eids.illPatchIt,
    level: 1,
    Feature: {
      connect: {
        id: fids.illPatchIt,
      },
    },
    rollFormulas: ['PROF * 5'],
  },
  {
    id: eids.lifeAtSea,
    level: 1,
    Feature: {
      connect: {
        id: fids.lifeAtSea,
      },
    },
  },
  {
    id: eids.specialty,
    level: 1,
    Feature: {
      connect: {
        id: fids.specialty,
      },
    },
  },
  {
    id: eids.militaryRank,
    level: 1,
    Feature: {
      connect: {
        id: fids.militaryRank,
      },
    },
  },
  {
    id: eids.neverTellMeTheOdds,
    level: 1,
    Feature: {
      connect: {
        id: fids.neverTellMeTheOdds,
      },
    },
  },
  {
    id: eids.insideInformant,
    level: 1,
    Feature: {
      connect: {
        id: fids.insideInformant,
      },
    },
  },
];

export default BackgroundFeatureEffectSeed;
