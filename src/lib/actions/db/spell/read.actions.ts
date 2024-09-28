"use server";
import { QUERY_LIMIT } from "@/lib/globalVars";
import { QueryParams, SpellInfo } from "@/lib/utils/types/types";
import { cerr } from "@/lib/utils/chalkLog";
import { generateQueryFields } from "@/lib/utils/generateQueryFields";
import { PrismaClient, Spell } from "@prisma/client";
import Fuse from "fuse.js";
import { DBMetadata } from "@/lib/utils/types/metadata";

export const getSpells = async (): Promise<SpellInfo[]> => {
  const db = await new PrismaClient();
  const spells = await db.spell.findMany({
    include: {
      SpellLists: true,

      User: {
        select: {
          username: true,
        },
      },
    },
  });
  db.$disconnect();
  return spells;
};

export const getSpell = async (
  query: string | number
): Promise<SpellInfo | null> => {
  const db = new PrismaClient();
  if (typeof query === "string") {
    const res = await db.spell.findFirst({
      where: {
        name: query,
      },
      include: {
        SpellLists: true,
        User: {
          select: {
            username: true,
          },
        },
      },
    });
    await db.$disconnect();
    return res;
  } else {
    const res = await db.spell.findFirst({
      where: {
        id: query,
      },
      include: {
        SpellLists: true,

        User: {
          select: {
            username: true,
          },
        },
      },
    });
    await db.$disconnect();
    return res;
  }
};

export const getSpellChunk = async (
  queryInfo: QueryParams
): Promise<SpellInfo[]> => {
  const db = new PrismaClient();
  const { query, page } = queryInfo;
  if (query === "") {
    const res = await db.spell.findMany({
      skip: page * QUERY_LIMIT,
      take: QUERY_LIMIT,
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
      }),
      include: {
        SpellLists: true,
        User: {
          select: {
            username: true,
          },
        },
      },
    });
    await db.$disconnect();
    return res;
  }

  const res: SpellInfo[] = await db.spell.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
    }),

    include: {
      SpellLists: true,

      User: {
        select: {
          username: true,
        },
      },
    },
  });

  const fuse = new Fuse(res, {
    keys: [
      { name: "name", weight: 1 },
      { name: "description", weight: 1 },
      { name: "postTableData", weight: 1 },
      { name: "upcastInfo", weight: 1 },
      { name: "duration", weight: 0.2 },
      { name: "range", weight: 0.2 },
      { name: "damageType", weight: 0.2 },
      { name: "castingTime", weight: 0.2 },
    ],
  });

  const results = fuse.search(query);
  const filtered = results.map((result) => result.item);

  await db.$disconnect();
  return filtered.slice(page * QUERY_LIMIT, page * QUERY_LIMIT + QUERY_LIMIT);
};
