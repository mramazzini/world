"use server";

import {
  BackgroundID,
  ClassID,
  RaceID,
  RaceVariantID,
} from "@/lib/utils/types/types";
import { Alignment, PrismaClient } from "@prisma/client";

export interface CreateCharacterParams {
  name: string;
  raceId: RaceID;
  classId: ClassID;
  alignment: Alignment;
  backgroundId: BackgroundID;
  userId: number;
  variantId?: RaceVariantID;
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
      Race: {
        connect: { id: params.raceId },
      },
    },
  });

  // If a variant was selected, connect it to the character

  if (params.variantId) {
    await db.character.update({
      where: { id: res.id },
      data: {
        SubRace: {
          connect: { id: params.variantId },
        },
      },
    });
  }

  await db.$disconnect();
  return res.id;
};
