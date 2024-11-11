'use server';

import { CharacterInfo } from '@/lib/types/modelInfo';
import { FeatID, SubClassID } from '@/lib/types/types';
import { PrismaClient } from '@prisma/client';

export const saveState = async (
  id: string,
  state: PrismaJson.CharacterState
) => {
  const db = new PrismaClient();
  const res = await db.character.update({
    where: { id },
    data: { state },
  });
  await db.$disconnect();
  if (!res) return null;
  return Date.now();
};

export const saveImage = async (id: string, image: string) => {
  const db = new PrismaClient();
  const res = await db.character.update({
    where: { id },
    data: { imageURL: image },
  });
  await db.$disconnect();
  if (!res) return null;
  return Date.now();
};

export const linkCharacterToSubClass = async (
  id: string,
  subClassId: SubClassID
): Promise<CharacterInfo | null> => {
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
  const res = await db.character.update({
    where: { id },
    data: {
      SubClasses: {
        connect: {
          id: subClassId,
        },
      },
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
  if (!res) return null;
  return res;
};

export const linkCharacterToFeat = async (
  id: string,
  featId: FeatID
): Promise<CharacterInfo | null> => {
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
  const res = await db.character.update({
    where: { id },
    data: {
      Feats: {
        connect: {
          id: featId,
        },
      },
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
  if (!res) return null;
  return res;
};
export const resetCharacter = async (id: string) => {
  const db = new PrismaClient();
  await db.character.update({
    where: { id },
    data: {
      SubClasses: {
        set: [],
      },
      Feats: {
        set: [],
      },
      state: undefined,
    },
  });
  await db.$disconnect();
  return;
};
