'use server';
import { SingleDataQuery } from '@/lib/types/metadata';
import { CharacterInfo } from '@/lib/types/modelInfo';
import { QueryParams } from '@/lib/types/types';
import { generateQueryFields } from '@/lib/utils/generateQueryFields';
import { PrismaClient } from '@prisma/client';
import Fuse from 'fuse.js';
import { FeatureInfoIncludeTemplate } from '../dbIncludeTemplates';

const CharacterInfoTemplate = {
  include: {
    CharacterState: true,
    Species: {
      include: {
        Features: {
          include: FeatureInfoIncludeTemplate,
        },

        Choices: true,
      },
    },
    Background: {
      include: {
        Features: {
          include: FeatureInfoIncludeTemplate,
        },
        Choices: true,
      },
    },
    SubClasses: {
      include: {
        Features: {
          include: FeatureInfoIncludeTemplate,
        },
      },
    },
    CharacterChoiceStatus: true,
    CharacterToClass: {
      include: {
        Class: {
          include: {
            Features: {
              include: FeatureInfoIncludeTemplate,
            },
            SpellcastingFeatures: {
              include: FeatureInfoIncludeTemplate,
            },
            MultiClassing: {
              include: {
                Choices: true,
              },
            },
            SpellCasting: {
              include: {
                SpellList: true,
              },
            },
            Choices: true,
          },
        },
      },
    },
    Feats: {
      include: {
        Features: {
          include: FeatureInfoIncludeTemplate,
        },
      },
    },
    SubSpecies: {
      include: {
        Features: {
          include: FeatureInfoIncludeTemplate,
        },

        Choices: true,
      },
    },

    User: {
      select: {
        id: true,
        username: true,
      },
    },
  },
};

export const getCharacters = async (): Promise<CharacterInfo[]> => {
  const db = new PrismaClient({
    omit: {
      character: {
        createdAt: true,
      },
    },
  });
  const res = await db.character.findMany(CharacterInfoTemplate);
  await db.$disconnect();
  return res as CharacterInfo[];
};

export const getCharacter = async ({
  query,
  type,
}: SingleDataQuery): Promise<CharacterInfo | null> => {
  const db = new PrismaClient({
    omit: {
      character: {
        createdAt: true,
      },
    },
  });
  try {
    const res = await db.character.findFirst({
      where: {
        [type]: query,
      },
      ...CharacterInfoTemplate,
    });
    return res;
  } catch (error) {
    console.error('Error getting character', error);
    return null;
  } finally {
    await db.$disconnect();
  }
};

export const getCharactersByUser = async (
  userID: string
): Promise<CharacterInfo[]> => {
  const db = new PrismaClient({
    omit: {
      character: {
        createdAt: true,
      },
    },
  });
  const res = await db.character.findMany({
    where: {
      userId: userID,
    },
    ...CharacterInfoTemplate,
  });
  await db.$disconnect();
  return res;
};

export const getCharacterChunk = async (
  queryInfo: QueryParams
): Promise<CharacterInfo[] | null> => {
  const db = new PrismaClient({
    omit: {
      character: {
        createdAt: true,
      },
    },
  });
  const { query } = queryInfo;
  if (query === '') {
    const res = await db.character.findMany({
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
      }),
      ...CharacterInfoTemplate,
    });
    await db.$disconnect();
    return res;
  }

  const res: CharacterInfo[] = await db.character.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
    }),
    ...CharacterInfoTemplate,
  });

  const fuse = new Fuse(res, {
    keys: [
      { name: 'name', weight: 1 },
      { name: 'description', weight: 1 },
      { name: 'Features.name', weight: 0.5 },
      { name: 'Features.description', weight: 0.5 },
    ],
  });

  const results = fuse.search(query);
  const filtered = results.map((result) => result.item);

  await db.$disconnect();
  return filtered;
};
