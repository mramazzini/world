"use server";
import Fuse, { FuseSearchOptions, IFuseOptions } from "fuse.js";
import {
  ClassInfo,
  CombinedData,
  QueryParams,
  src,
  SubClassInfo,
  SubclassSearchResults,
} from "@/lib/utils/types/types";
import {
  Class,
  PrismaClient,
  SubClass,
  Background,
  Feat,
  Spell,
  Species,
  Weapon,
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
  const species = await db.species.findMany({});

  const subspecies = await db.subSpecies.findMany({
    include: {
      species: true,
    },
  });

  const items = await db.item.findMany({});

  const backgrounds = await db.background.findMany({});
  const spellLists = await db.spellList.findMany({});

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
      other: class_.subClassDescription,
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
    ...items.map((item) => ({
      name: item.name,
      description: item.description,
      flavorText: item.flavorText,
      type: "Item",
      other: item.types.join(", "),
      lastUpdated: item.updatedAt,
    })),
    ...species.map((r) => ({
      name: r.name,
      description: r.description,
      flavorText: r.description ? r.description : "No description available",
      type: "Species",
      other: r.size,
      lastUpdated: r.updatedAt,
    })),
    ...subspecies.map((r) => ({
      name: r.name,
      description: r.description,
      flavorText: r.description ? r.description : "No description available",
      type: "Subspecies",
      other: r.species.name,
      lastUpdated: r.updatedAt,
    })),

    ...backgrounds.map((background) => ({
      name: background.name,
      description: background.description,
      flavorText: background.description,
      type: "Background",
      other: "",
      lastUpdated: background.updatedAt,
    })),
    ...spellLists.map((spellList) => ({
      name: spellList.name,
      description: spellList.description,
      flavorText: spellList.description,
      type: "Spell-List",
      other: "",
      lastUpdated: spellList.updatedAt,
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

export async function getBackground(): Promise<Background[]> {
  const db = new PrismaClient();
  const res = await db.background.findMany();
  await db.$disconnect();
  return res;
}
