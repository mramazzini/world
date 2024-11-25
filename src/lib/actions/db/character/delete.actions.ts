'use server';

import { PrismaClient } from '@prisma/client';

export const deleteCharacter = async (id: string) => {
  const prisma = new PrismaClient();
  try {
    await prisma.characterToClass.deleteMany({
      where: {
        characterId: id,
      },
    });

    await prisma.characterChoiceStatus.deleteMany({
      where: {
        characterId: id,
      },
    });

    await prisma.characterState.deleteMany({
      where: {
        id,
      },
    });

    await prisma.character.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error('Error deleting character:', error);
  } finally {
    await prisma.$disconnect();
  }
};
