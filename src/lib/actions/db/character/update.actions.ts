"use server";

import { PrismaClient } from "@prisma/client";

export const saveState = async (
  id: number,
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

export const saveImage = async (id: number, image: string) => {
  const db = new PrismaClient();
  const res = await db.character.update({
    where: { id },
    data: { imageURL: image },
  });
  await db.$disconnect();
  if (!res) return null;
  return Date.now();
};
