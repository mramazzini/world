"use server";
import { QUERY_LIMIT } from "@/lib/globalVars";
import { BackgroundInfo, QueryParams } from "@/lib/utils/types/types";
import { generateQueryFields } from "@/lib/utils/generateQueryFields";
import { PrismaClient } from "@prisma/client";
import Fuse from "fuse.js";
import { DBMetadata } from "@/lib/utils/types/metadata";

export const getBackgroundsMetadata = async (): Promise<DBMetadata[]> => {
  const db = new PrismaClient();
  const res = await db.background.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      updatedAt: true,
      flavorText: true,
    },
  });
  await db.$disconnect();
  return res;
};

export const getBackgrounds = async (): Promise<BackgroundInfo[]> => {
  const db = new PrismaClient();
  const res = await db.background.findMany({
    include: {
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

export const getBackground = async (
  query: string | number
): Promise<BackgroundInfo | null> => {
  const db = new PrismaClient();
  if (typeof query === "string") {
    const res = await db.background.findFirst({
      where: {
        name: query,
      },
      include: {
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
    const res = await db.background.findFirst({
      where: {
        id: query,
      },
      include: {
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

export const getBackgroundChunk = async (
  queryInfo: QueryParams
): Promise<BackgroundInfo[] | null> => {
  const db = new PrismaClient();
  const { query } = queryInfo;
  if (query === "") {
    const res = await db.background.findMany({
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
      }),
      include: {
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

  const res: BackgroundInfo[] = await db.background.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
    }),

    include: {
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
      { name: "Features.name", weight: 0.5 },
      { name: "Features.description", weight: 0.5 },
    ],
  });

  const results = fuse.search(query);
  const filtered = results.map((result) => result.item);

  await db.$disconnect();
  return filtered;
};
