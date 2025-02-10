import { Language, Prisma } from '@prisma/client';
import { DruidSubclassFeatureIds as fids } from '../SubclassFeatures/Druid.seed';
import { spellIds } from '../../Spells/spells.seed';
const DruidSubclassEffectIds = {
  combatWildShape: 'combatWildShape',
  circleForms2: 'circleForms2',
  circleForms6: 'circleForms6',
  primalStrike: 'primalStrike',
  elementalWildShape: 'elementalWildShape',
  thousandForms: 'thousandForms',
  speechOfTheWoods: 'speechOfTheWoods',
  spiritTotem: 'spiritTotem',
  mightySummoner: 'mightySummoner',
  guardianSpirit: 'guardianSpirit',
  faithfulSummons: 'faithfulSummons',
};

export const DruidSubclassFeatureEffects: Prisma.EffectCreateInput[] = [
  {
    id: DruidSubclassEffectIds.combatWildShape,
    Feature: {
      connect: {
        id: fids.combatWildShape,
      },
    },
    level: 2,
    rollFormulas: ['1d8'],
  },
  {
    id: DruidSubclassEffectIds.circleForms2,
    Feature: {
      connect: {
        id: fids.circleForms,
      },
    },
    level: 2,
  },
  {
    id: DruidSubclassEffectIds.circleForms6,
    Feature: {
      connect: {
        id: fids.circleForms,
      },
    },
    level: 6,
    parentEffect: {
      connect: {
        id: DruidSubclassEffectIds.circleForms2,
      },
    },
  },
  {
    id: DruidSubclassEffectIds.primalStrike,
    Feature: {
      connect: {
        id: fids.primalStrike,
      },
    },
    level: 6,
  },
  {
    id: DruidSubclassEffectIds.elementalWildShape,
    Feature: {
      connect: {
        id: fids.elementalWildShape,
      },
    },
    level: 10,
  },
  {
    id: DruidSubclassEffectIds.thousandForms,
    Feature: {
      connect: {
        id: fids.thousandForms,
      },
    },
    level: 14,
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: DruidSubclassEffectIds.thousandForms,
            spellId: spellIds.alterSelf,
          },
        },
        create: {
          spellId: spellIds.alterSelf,
        },
      },
    },
  },
  {
    id: DruidSubclassEffectIds.speechOfTheWoods,
    Feature: {
      connect: {
        id: fids.speechOfTheWoods,
      },
    },
    languageProficiencies: [Language.SYLVAN],
    level: 2,
  },
  {
    id: DruidSubclassEffectIds.spiritTotem,
    Feature: {
      connect: {
        id: fids.spiritTotem,
      },
    },
    level: 6,
  },
  {
    id: DruidSubclassEffectIds.mightySummoner,
    Feature: {
      connect: {
        id: fids.mightySummoner,
      },
    },
    level: 10,
  },
  {
    id: DruidSubclassEffectIds.guardianSpirit,
    Feature: {
      connect: {
        id: fids.guardianSpirit,
      },
    },
    level: 14,
  },
  {
    id: DruidSubclassEffectIds.faithfulSummons,
    Feature: {
      connect: {
        id: fids.faithfulSummons,
      },
    },
    level: 14,
  },
];
