'use server';

import { ClassID, FeatID, SubClassID } from '@/lib/types/types';
import { PrismaClient } from '@prisma/client';

export const linkCharacterToSubClass = async (
  id: string,
  subClassId: SubClassID
): Promise<void> => {
  const db = new PrismaClient({
    omit: {
      character: {
        createdAt: true,
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

  await db.$disconnect();
};

export const linkCharacterToFeat = async (
  id: string,
  featId: FeatID
): Promise<void> => {
  const db = new PrismaClient({
    omit: {
      character: {
        createdAt: true,
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

  await db.$disconnect();
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
    },
  });
  await db.$disconnect();
  return;
};

export const levelUpCharacter = async (id: string, classId: ClassID) => {
  const db = new PrismaClient();

  //find the character to class, if it exists, increment the level, else create a new one
  const characterToClass = await db.characterToClass.findFirst({
    where: {
      characterId: id,
      classId,
    },
  });

  if (characterToClass) {
    await db.characterToClass.update({
      where: {
        characterId_classId: {
          characterId: id,
          classId,
        },
      },
      data: {
        levelsInClass: {
          increment: 1,
        },
      },
    });
  } else {
    await db.characterToClass.create({
      data: {
        characterId: id,
        classId,
        levelsInClass: 1,
      },
    });
  }
  await db.$disconnect();
  return;
};
