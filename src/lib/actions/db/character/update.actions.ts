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
    },
  });

  try {
    await db.character.update({
      where: { id },
      data: {
        SubClasses: {
          connect: {
            id: subClassId,
          },
        },
      },
    });
  } catch (e) {
    console.error(e);
  } finally {
    await db.$disconnect();
  }
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
    },
  });

  try {
    await db.character.update({
      where: { id },
      data: {
        Feats: {
          connect: {
            id: featId,
          },
        },
      },
    });
  } catch (e) {
    console.error(e);
  } finally {
    await db.$disconnect();
  }
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
