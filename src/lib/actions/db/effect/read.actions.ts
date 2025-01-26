'use server';

import { EffectInfo } from '@/lib/types/modelInfo';
import { PrismaClient } from '@prisma/client';

const effectIncludeTemplate = {
  include: {
    Choices: true,
    EffectToSpell: {
      include: {
        Spell: true,
      },
    },
    EffectToResource: {
      include: {
        Resource: true,
      },
    },

    EffectGrantsGroup: {
      include: {
        FeatureGroup: {
          include: {
            FeaturesInGroup: {
              include: {
                Effects: {
                  include: {
                    Choices: true,
                    EffectToSpell: {
                      include: {
                        Spell: true,
                      },
                    },
                    EffectToResource: {
                      include: {
                        Resource: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export const getCharacterChildEffects = async (effectIds: string[]) => {
  const db = new PrismaClient();

  const pendingEffects: EffectInfo[] = [];
  const processedEffects: EffectInfo[] = [];

  const pushEffectToPending = async (effectId: string) => {
    const effect = await db.effect.findUnique({
      where: {
        id: effectId,
      },
      ...effectIncludeTemplate,
    });
    if (!effect) return;
    pendingEffects.push(effect);
  };

  const processEffects = async () => {
    const effect = pendingEffects.pop();
    if (!effect) return;

    if (effect.childChainType === 'NONE') {
      processedEffects.push(effect);
    } else {
      processedEffects.push(effect);
      if (!effect.chainedEffectId) {
        console.error('Effect has no chained effect');
        return;
      }

      await pushEffectToPending(effect.chainedEffectId);
      processEffects();
    }
  };

  for (const effectId of effectIds) {
    await pushEffectToPending(effectId);
  }

  while (pendingEffects.length > 0) {
    await processEffects();
  }

  await db.$disconnect();
  return processedEffects;
};
