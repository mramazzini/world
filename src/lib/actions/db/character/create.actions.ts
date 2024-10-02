"use server";

import {
  BackgroundID,
  ClassID,
  SpeciesID,
  SubSpeciesID,
} from "@/lib/utils/types/types";
import { Alignment, PrismaClient } from "@prisma/client";

export interface CreateCharacterParams {
  name: string;
  speciesId: SpeciesID;
  classId: ClassID;
  alignment: Alignment;
  backgroundId: BackgroundID;
  userId: number;
  variantId?: SubSpeciesID;
}
export const createCharacter = async (
  params: CreateCharacterParams
): Promise<number> => {
  const db = new PrismaClient();
  const res = await db.character.create({
    data: {
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
