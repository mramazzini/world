"use server";
import { RaceInfo, QueryParams, SubRaceInfo } from "@/lib/types";
import { generateQueryFields } from "@/lib/utils/generateQueryFields";
import { PrismaClient } from "@prisma/client";

import Fuse from "fuse.js";

export const getSubRaces = async (): Promise<SubRaceInfo[]> => {
  const db = new PrismaClient();
  const res = await db.raceVariant.findMany({
    include: {
      RacialTraits: true,
      BaseRace: {
        include: {
          RacialTraits: true,
        },
      },
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

export const getSubRace = async (
  query: string | number
): Promise<SubRaceInfo | null> => {
  const db = new PrismaClient();
  if (typeof query === "string") {
    const res = await db.raceVariant.findFirst({
      where: {
        name: query,
      },
      include: {
        RacialTraits: true,
        BaseRace: {
          include: {
            RacialTraits: true,
          },
        },
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
    const res = await db.raceVariant.findFirst({
      where: {
        id: query,
      },
      include: {
        RacialTraits: true,
        BaseRace: {
          include: {
            RacialTraits: true,
          },
        },
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

export const getSubRaceChunk = async (
  queryInfo: QueryParams
): Promise<SubRaceInfo[] | null> => {
  const db = new PrismaClient();
  const { query, page } = queryInfo;
  if (query === "") {
    const res = await db.raceVariant.findMany({
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
      }),
      include: {
        RacialTraits: true,
        BaseRace: {
          include: {
            RacialTraits: true,
          },
        },
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

  const res: SubRaceInfo[] = await db.raceVariant.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
    }),

    include: {
      RacialTraits: true,
      BaseRace: {
        include: {
          RacialTraits: true,
        },
      },
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
