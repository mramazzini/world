"use server";
import Fuse, { FuseSearchOptions, IFuseOptions } from "fuse.js";
import {
  ClassInfo,
  CombinedData,
  QueryParams,
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

export const searchEverything = async (
  queryInfo: QueryParams
): Promise<CombinedData[]> => {
  const db = new PrismaClient();
  const { page, query } = queryInfo;

  const spells = await db.spell.findMany({});

  const classes = await db.class.findMany({});
  const subclasses = await db.subClass.findMany({
    include: {
      Class: true,
    },
  });
  const races = await db.race.findMany({});

  const subraces = await db.raceVariant.findMany({
    include: {
      BaseRace: true,
    },
  });

  const tools = await db.tool.findMany({});

  const backgrounds = await db.background.findMany({});

  const combined: CombinedData[] = [
    ...spells.map((spell) => ({
      name: spell.name,
      description: spell.description,
      flavorText: spell.description,
      type: "Spells",
      other: spell.school,
      lastUpdated: spell.updatedAt,
    })),
    ...classes.map((class_) => ({
      name: class_.name,
      description: class_.description,
      flavorText: class_.description,
      type: "Class",
      other: class_.subClassDesc,
      lastUpdated: class_.updatedAt,
    })),
    ...subclasses.map((subclass) => ({
      name: subclass.name,
      description: subclass.description
        ? subclass.description
        : "No description available.",
      flavorText: subclass.description
        ? subclass.description
        : "No description available.",
      type: "Subclass",
      other: subclass.Class?.name || "",
      lastUpdated: subclass.updatedAt,
    })),
    ...races.map((r) => ({
      name: r.name,
      description: r.description,
      flavorText: r.description ? r.description : "No description available",
      type: "Race",
      other: r.size,
      lastUpdated: r.updatedAt,
    })),
    ...subraces.map((r) => ({
      name: r.name,
      description: r.description,
      flavorText: r.description ? r.description : "No description available",
      type: "Subrace",
      other: r.BaseRace.name,
      lastUpdated: r.updatedAt,
    })),
    ...tools.map((tool) => ({
      name: tool.name,
      description: tool.description,
      flavorText: tool.description,
      type: "Tool",
      other: tool.componentsDescription,
      lastUpdated: tool.updatedAt,
    })),
    ...backgrounds.map((background) => ({
      name: background.name,
      description: background.description,
      flavorText: background.description,
      type: "Background",
      other: "",
      lastUpdated: background.updatedAt,
    })),
  ];
  const fuse = new Fuse(combined, {
    keys: [
      { name: "name", weight: 1 },
      { name: "description", weight: 1 },
      { name: "flavorText", weight: 1 },
      { name: "type", weight: 1 },
      { name: "other", weight: 0.75 },
    ],
    includeScore: true,
  });

  const results = fuse.search(query);

  const filtered = results
    .filter((r) => r.score && r.score < 0.5)
    .map((result) => result.item);

  await db.$disconnect();
  return filtered.slice(page * 50, page * QUERY_LIMIT + 50);
};

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
