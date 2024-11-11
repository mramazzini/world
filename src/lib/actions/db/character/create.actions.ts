'use server';

import {
  BackgroundID,
  ClassID,
  SpeciesID,
  SubSpeciesID,
} from '@/lib/types/types';
import { Alignment, PrismaClient } from '@prisma/client';
import { v4 } from 'uuid';

export interface CreateCharacterParams {
  name: string;
  speciesId: SpeciesID;
  classId: ClassID;
  alignment: Alignment;
  backgroundId: BackgroundID;
  userId: string;
  variantId?: SubSpeciesID;
}
export const createCharacter = async (
  params: CreateCharacterParams
): Promise<string> => {
  const db = new PrismaClient();
  const res = await db.character.create({
    data: {
      id: v4(),
      name: params.name,
      alignment: params.alignment,
      Classes: {
        connect: { id: params.classId },
      },
      Background: {
        connect: { id: params.backgroundId },
      },
      User: {
        connect: { id: params.userId },
      },
      Species: {
        connect: { id: params.speciesId },
      },
    },
  });

  // If a variant was selected, connect it to the character

  if (params.variantId) {
    await db.character.update({
      where: { id: res.id },
      data: {
        SubSpecies: {
          connect: { id: params.variantId },
        },
      },
    });
  }

  await db.$disconnect();
  return res.id;
};
