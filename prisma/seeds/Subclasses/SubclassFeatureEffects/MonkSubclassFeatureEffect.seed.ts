import { Prisma, RefreshEvent } from '@prisma/client';
import { FeatureGroupIds } from '../../FeatureGroup/FeatureGroup.seed';
import { monkSubclassFeatureIds as fids } from '../SubclassFeatures/Monk.seed';
import { CustomResourceIds } from '../../CustomResource/CustomResource.seed';
import { spellIds } from '../../Spells/spells.seed';
const MonkFeatureEffectIds = {
  discipleOfTheElements3: 'discipleOfTheElements3',
  discipleOfTheElements6: 'discipleOfTheElements6',
  discipleOfTheElements11: 'discipleOfTheElements11',
  discipleOfTheElements17: 'discipleOfTheElements17',
  castingElementalSpells: 'castingElementalSpells',
  openHandTechnique: 'openHandTechnique',
  wholenessOfBody: 'wholenessOfBody',
  tranquility: 'tranquility',
  quiveringPalm: 'quiveringPalm',
};

export const MonkSubclassFeatureEffects: Prisma.EffectCreateInput[] = [
  {
    id: MonkFeatureEffectIds.discipleOfTheElements3,
    Feature: {
      connect: {
        id: fids.discipleOfTheElements,
      },
    },
    level: 3,
    EffectGrantsGroup: {
      connectOrCreate: {
        where: {
          effectId_groupId: {
            effectId: MonkFeatureEffectIds.discipleOfTheElements3,
            groupId: FeatureGroupIds.elementalDisciplines,
          },
        },
        create: {
          groupId: FeatureGroupIds.elementalDisciplines,
          amount: 1,
        },
      },
    },
  },
  {
    id: MonkFeatureEffectIds.discipleOfTheElements6,
    Feature: {
      connect: {
        id: fids.discipleOfTheElements,
      },
    },
    level: 6,
    parentEffect: {
      connect: {
        id: MonkFeatureEffectIds.discipleOfTheElements3,
      },
    },
    EffectGrantsGroup: {
      connectOrCreate: {
        where: {
          effectId_groupId: {
            effectId: MonkFeatureEffectIds.discipleOfTheElements6,
            groupId: FeatureGroupIds.elementalDisciplines,
          },
        },
        create: {
          groupId: FeatureGroupIds.elementalDisciplines,
          amount: 2,
        },
      },
    },
  },
  {
    id: MonkFeatureEffectIds.discipleOfTheElements11,
    level: 11,
    Feature: {
      connect: {
        id: fids.discipleOfTheElements,
      },
    },
    parentEffect: {
      connect: {
        id: MonkFeatureEffectIds.discipleOfTheElements6,
      },
    },
    EffectGrantsGroup: {
      connectOrCreate: {
        where: {
          effectId_groupId: {
            effectId: MonkFeatureEffectIds.discipleOfTheElements11,
            groupId: FeatureGroupIds.elementalDisciplines,
          },
        },
        create: {
          groupId: FeatureGroupIds.elementalDisciplines,
          amount: 3,
        },
      },
    },
  },
  {
    id: MonkFeatureEffectIds.discipleOfTheElements17,
    level: 17,
    Feature: {
      connect: {
        id: fids.discipleOfTheElements,
      },
    },
    parentEffect: {
      connect: {
        id: MonkFeatureEffectIds.discipleOfTheElements11,
      },
    },
    EffectGrantsGroup: {
      connectOrCreate: {
        where: {
          effectId_groupId: {
            effectId: MonkFeatureEffectIds.discipleOfTheElements17,
            groupId: FeatureGroupIds.elementalDisciplines,
          },
        },
        create: {
          groupId: FeatureGroupIds.elementalDisciplines,
          amount: 4,
        },
      },
    },
  },
  {
    id: MonkFeatureEffectIds.castingElementalSpells,
    Feature: {
      connect: {
        id: fids.castingElementalSpells,
      },
    },
    level: 3,
  },
  {
    id: MonkFeatureEffectIds.openHandTechnique,
    Feature: {
      connect: {
        id: MonkFeatureEffectIds.openHandTechnique,
      },
    },
    level: 3,
  },
  {
    id: MonkFeatureEffectIds.wholenessOfBody,
    Feature: {
      connect: {
        id: MonkFeatureEffectIds.wholenessOfBody,
      },
    },
    level: 6,
    rollFormulas: ['3 * LEVEL'],
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: MonkFeatureEffectIds.wholenessOfBody,
            resourceId: CustomResourceIds.wholenessOfBody,
          },
        },
        create: {
          resourceId: CustomResourceIds.wholenessOfBody,
          scalingFormula: '1',
          refreshOn: RefreshEvent.LONG_REST,
        },
      },
    },
  },
  {
    id: MonkFeatureEffectIds.tranquility,
    Feature: {
      connect: {
        id: MonkFeatureEffectIds.tranquility,
      },
    },
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: MonkFeatureEffectIds.tranquility,
            spellId: spellIds.sanctuary,
          },
        },
        create: {
          spellId: spellIds.sanctuary,
        },
      },
    },
    rollFormulas: ['8 + PROF + WIS'],
    level: 11,
  },
  {
    id: MonkFeatureEffectIds.quiveringPalm,
    Feature: {
      connect: {
        id: MonkFeatureEffectIds.quiveringPalm,
      },
    },
    rollFormulas: ['10d10', '8 + PROF + WIS'],
    level: 17,
  },
];
