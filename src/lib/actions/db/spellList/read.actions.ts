"use server";
import { QUERY_LIMIT } from "@/lib/globalVars";
import { SpellListInfo, QueryParams } from "@/lib/types";
import { generateQueryFields } from "@/lib/utils/generateQueryFields";
import { PrismaClient } from "@prisma/client";
import Fuse from "fuse.js";

export const getSpellLists = async (): Promise<SpellListInfo[]> => {
  const db = new PrismaClient();
  const res = await db.spellList.findMany({
    include: {
      Spells: true,
    },
  });
  await db.$disconnect();
  return res;
};

export const getSpellList = async (
  query: string | number
): Promise<SpellListInfo | null> => {
  const db = new PrismaClient();
  if (typeof query === "string") {
    const res = await db.spellList.findFirst({
      where: {
        name: query,
      },
      include: {
        Spells: true,
      },
    });
    await db.$disconnect();
    return res;
  } else {
    const res = await db.spellList.findFirst({
      where: {
        id: query,
      },
      include: {
        Spells: true,
      },
    });
    await db.$disconnect();
    return res;
  }
};

export const getSpellListChunk = async (
  queryInfo: QueryParams
): Promise<SpellListInfo[] | null> => {
  const db = new PrismaClient();
  const { query } = queryInfo;
  if (query === "") {
    const res = await db.spellList.findMany({
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
      }),
      include: {
        Spells: true,
      },
    });
    await db.$disconnect();
    return res;
  }

  const res: SpellListInfo[] = await db.spellList.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
    }),

    include: {
      Spells: true,
    },
  });

  const fuse = new Fuse(res, {
    keys: [
      { name: "name", weight: 1 },
      { name: "description", weight: 1 },
      { name: "Features.name", weight: 0.5 },
      { name: "Features.description", weight: 0.5 },
    ],
  });

  const results = fuse.search(query);
  const filtered = results.map((result) => result.item);

  await db.$disconnect();
  return filtered;
};
