"use server";
import { ClassInfo } from "@/lib/types";
import {
  Class,
  PrismaClient,
  SubClass,
  SubRace,
  Background,
  Feat,
  Spell,
  Item,
  Race,
} from "@prisma/client";

const db = new PrismaClient();

export async function getClasses(): Promise<
  Array<{ id: number; name: string }>
> {
  return await db.class.findMany({
    orderBy: {
      name: "asc",
    },
    //only name and id
    select: {
      name: true,
      id: true,
    },
  });
}

export async function getClass(
  query: string | number
): Promise<ClassInfo | null> {
  if (typeof query === "string") {
    return await db.class.findFirst({
      where: {
        name: query,
      },
      //include features
      include: {
        Features: true,
        SubClasses: true,
      },
    });
  } else {
    return await db.class.findFirst({
      where: {
        id: query,
      },
      include: {
        Features: true,
        SubClasses: true,
      },
    });
  }
}

export async function getSubClass(): Promise<SubClass[]> {
  return await db.subClass.findMany();
}

export async function getRace(): Promise<Race[]> {
  return await db.race.findMany();
}

export async function getSubRace(): Promise<SubRace[]> {
  return await db.subRace.findMany();
}

export async function getBackground(): Promise<Background[]> {
  return await db.background.findMany();
}

export async function getFeat(): Promise<Feat[]> {
  return await db.feat.findMany();
}

export async function getSpell(): Promise<Spell[]> {
  return await db.spell.findMany();
}

export async function getItem(): Promise<Item[]> {
  return await db.item.findMany();
}
