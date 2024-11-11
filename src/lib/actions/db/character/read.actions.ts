'use server';
import { SingleDataQuery } from '@/lib/types/metadata';
import { CharacterInfo } from '@/lib/types/modelInfo';
import { QueryParams } from '@/lib/types/types';
import { generateQueryFields } from '@/lib/utils/generateQueryFields';
import { PrismaClient } from '@prisma/client';
import Fuse from 'fuse.js';

export const getCharacters = async (): Promise<CharacterInfo[]> => {
  const db = new PrismaClient({
    omit: {
      character: {
        createdAt: true,
        updatedAt: true,
      },
    },
  });
  const res = await db.character.findMany({
    include: {
      Species: {
        include: {
          Features: true,
        },
      },
      Background: {
        include: {
          Features: true,
        },
      },
      SubClasses: {
        include: {
          Features: true,
        },
      },
      Classes: {
        include: {
          Features: true,
          SpellcastingFeatures: true,
          SpellList: {
            include: {
              Spells: true,
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
        },
      },

      User: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });
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
        updatedAt: true,
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
  const res = await db.character.findFirst({
    where: {
      [type]: query,
    },
    include: {
      Species: {
        include: {
          Features: true,
        },
      },
      Background: {
        include: {
          Features: true,
        },
      },
      SubClasses: {
        include: {
          Features: true,
        },
      },
      Classes: {
        include: {
          Features: true,
          SpellcastingFeatures: true,
          SpellList: {
            include: {
              Spells: true,
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
        },
      },
      User: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });
  await db.$disconnect();
  return res as CharacterInfo;
};

export const getCharactersByUser = async (
  userID: string
): Promise<CharacterInfo[]> => {
  const db = new PrismaClient({
    omit: {
      character: {
        createdAt: true,
        updatedAt: true,
      },
    },
  });
  const res = await db.character.findMany({
    orderBy: {
      updatedAt: 'desc',
    },
    where: {
      userId: userID,
    },
    include: {
      Species: {
        include: {
          Features: true,
        },
      },
      Background: {
        include: {
          Features: true,
        },
      },
      SubClasses: {
        include: {
          Features: true,
        },
      },
      Classes: {
        include: {
          Features: true,
          SpellcastingFeatures: true,
          SpellList: {
            include: {
              Spells: true,
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
        },
      },
      User: {
        select: {
          id: true,
          username: true,
        },
      },
    },
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
        updatedAt: true,
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
      include: {
        Species: {
          include: {
            Features: true,
          },
        },
        Background: {
          include: {
            Features: true,
          },
        },
        SubClasses: {
          include: {
            Features: true,
          },
        },
        Classes: {
          include: {
            Features: true,
            SpellcastingFeatures: true,
            SpellList: {
              include: {
                Spells: true,
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
          },
        },
        User: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });
    await db.$disconnect();
    return res;
  }

  const res: CharacterInfo[] = await db.character.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
    }),

    include: {
      Species: {
        include: {
          Features: true,
        },
      },
      Background: {
        include: {
          Features: true,
        },
      },
      SubClasses: {
        include: {
          Features: true,
        },
      },
      Classes: {
        include: {
          Features: true,
          SpellcastingFeatures: true,
          SpellList: {
            include: {
              Spells: true,
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
        },
      },
      User: {
        select: {
          id: true,
          username: true,
        },
      },
    },
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
