'use server';
import { ResolverFunction } from '@/lib/types/protocols';
import { PrismaClient } from '@prisma/client';

export const resolveChoice: ResolverFunction = async ({
  characterId,
  choiceId,
  selections,
}) => {
  const db = new PrismaClient();

  try {
    await db.characterChoiceStatus.create({
      data: {
        characterId,
        choiceId,
        fufilled: true,
        values: selections,
      },
    });

    return 'success';
  } catch (error) {
    console.error(error);
    return 'failure';
  } finally {
    await db.$disconnect();
  }
};
