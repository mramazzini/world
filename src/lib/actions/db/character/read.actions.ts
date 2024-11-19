'use server';
import { SingleDataQuery } from '@/lib/types/metadata';
import { CharacterInfo } from '@/lib/types/modelInfo';
import { QueryParams } from '@/lib/types/types';
import { generateQueryFields } from '@/lib/utils/generateQueryFields';
import { PrismaClient } from '@prisma/client';
import Fuse from 'fuse.js';

const CharacterInfoTemplate = {
  include: {
    Species: {
      include: {
        Features: true,
        Choices: true,
      },
    },
    Background: {
      include: {
        Features: true,
        Choices: true,
      },
    },
    SubClasses: {
      include: {
        Features: true,
      },
    },
    CharacterToClass: {
      include: {
        Class: {
          include: {
            Features: true,
            SpellcastingFeatures: true,
            SpellList: {
              include: {
                Spells: true,
              },
            },
            Choices: true,
          },
        },
      },
    },
    Feats: {
      include: {
        Features: true,
      },
    },
    SubSpecies: {
      include: {
        Features: true,
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
      species: {
        createdAt: true,
        updatedAt: true,
      },
      subSpecies: {
        createdAt: true,
        updatedAt: true,
      },
      feature: {
        createdAt: true,
        updatedAt: true,
      },
      background: {
        createdAt: true,
        updatedAt: true,
      },
      class: {
        createdAt: true,
        updatedAt: true,
      },
      subClass: {
        createdAt: true,
        updatedAt: true,
      },
      spell: {
        createdAt: true,
        updatedAt: true,
      },
      feat: {
        createdAt: true,
        updatedAt: true,
      },
      spellList: {
        createdAt: true,
        updatedAt: true,
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
  return res.sort((a, b) => {
    const dateA = new Date(a.updatedAtIsoString || 0).getTime().toString();
    const dateB = new Date(b.updatedAtIsoString || 0).getTime().toString();
    return dateB.localeCompare(dateA);
  });
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
