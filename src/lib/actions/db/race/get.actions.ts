"use server";
import { RaceInfo, QueryParams } from "@/lib/types";
import { generateQueryFields } from "@/lib/utils/generateQueryFields";
import { PrismaClient } from "@prisma/client";

import Fuse from "fuse.js";

export const getRaces = async (): Promise<RaceInfo[]> => {
  const db = new PrismaClient();
  const res = await db.race.findMany({
    include: {
      RacialTraits: true,
      Variants: true,
      User: {
        select: {
          username: true,
        },
      },
    },
  });
  await db.$disconnect();
  return res;
};

export const getRace = async (
  query: string | number
): Promise<RaceInfo | null> => {
  const db = new PrismaClient();
  if (typeof query === "string") {
    const res = await db.race.findFirst({
      where: {
        name: query,
      },
      include: {
        RacialTraits: true,
        Variants: true,
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
    const res = await db.race.findFirst({
      where: {
        id: query,
      },
      include: {
        RacialTraits: true,
        Variants: true,
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

export const getRaceChunk = async (
  queryInfo: QueryParams
): Promise<RaceInfo[] | null> => {
  const db = new PrismaClient();
  const { query, page } = queryInfo;
  if (query === "") {
    const res = await db.race.findMany({
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
      }),
      include: {
        RacialTraits: true,
        Variants: true,
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

  const res: RaceInfo[] = await db.race.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
    }),

    include: {
      RacialTraits: true,
      Variants: true,
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
      { name: "age", weight: 0.5 },
      { name: "alignment", weight: 0.5 },
      { name: "size", weight: 0.5 },
      { name: "speedDescription", weight: 0.5 },
      { name: "languageDescription", weight: 0.5 },
    ],
  });

  const results = fuse.search(query);
  const filtered = results.map((result) => result.item);

  await db.$disconnect();
  return filtered;
};
