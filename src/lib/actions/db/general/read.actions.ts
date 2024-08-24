"use server";
import Fuse from "fuse.js";
import {
  ClassInfo,
  src,
  SubClassInfo,
  SubclassSearchResults,
} from "@/lib/types";
import {
  Class,
  PrismaClient,
  SubClass,
  Background,
  Feat,
  Spell,
  Race,
  CasterType,
  Weapon,
  WeaponProperty,
} from "@prisma/client";
import { QUERY_LIMIT } from "@/lib/globalVars";

export const getDefaultCasterTypes = async (): Promise<CasterType[]> => {
  const db = new PrismaClient();
  const arr: CasterType[] = await db.casterType.findMany({
    where: {
      id: {
        in: [1, 2, 3],
      },
    },
  });
  await db.$disconnect();
  return arr;
};

export async function getBackground(): Promise<Background[]> {
  const db = new PrismaClient();
  const res = await db.background.findMany();
  await db.$disconnect();
  return res;
}

export async function getFeat(): Promise<Feat[]> {
  const db = new PrismaClient();
  const res = await db.feat.findMany();
  await db.$disconnect();
  return res;
}

export async function getWeapon(): Promise<Weapon[]> {
  const db = new PrismaClient();
  const res = await db.weapon.findMany({
    include: {
      WeaponToProperties: true,
    },
  });
  await db.$disconnect();
  return res;
}
