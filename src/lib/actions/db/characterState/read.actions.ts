'use server';
import { CharacterState, PrismaClient } from '@prisma/client';

export const getCharacterState = async (
  characterId: string
): Promise<CharacterState | null> => {
  const db = new PrismaClient();
  try {
    const characterState = await db.characterState.findUnique({
      where: {
        id: characterId,
      },
    });
    return characterState;
  } catch (error) {
    console.error('Error getting character state', error);
    return null;
  } finally {
    await db.$disconnect();
  }
};
