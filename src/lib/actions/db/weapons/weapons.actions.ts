"use server";

import { PrismaClient, Weapon } from "@prisma/client";
import Fuse from "fuse.js";

export const getWeapons = async (): Promise<Weapon[]> => {
  const db = new PrismaClient();
  const res = await db.weapon.findMany();
  await db.$disconnect();
  return res;
};
