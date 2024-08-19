"use server";
import { QUERY_LIMIT } from "@/lib/globalVars";
import { ClassInfo, QueryParams } from "@/lib/types";
import { generateQueryFields } from "@/lib/utils/generateQueryFields";
import { Class, PrismaClient } from "@prisma/client";
import Fuse from "fuse.js";
import { isAdministrator } from "@/lib/utils/auth";
export async function getClasses(): Promise<ClassInfo[]> {
  const db = new PrismaClient();
  const res = await db.class.findMany({
    include: {
      Features: true,
      SubClasses: true,
      casterType: true,
      customFields: true,
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

export async function getClass(
  query: string | number
): Promise<ClassInfo | null> {
  const db = new PrismaClient();
  const isAdmin = await isAdministrator();

  if (typeof query === "string") {
    const res = await db.class.findFirst({
      where: {
        name: query,
      },

      include: {
        Features: true,
        SubClasses: true,
        casterType: true,
        customFields: true,
        User: {
          select: {
            username: true,
          },
        },
      },
    });
    await db.$disconnect();
    // console.log(!isAdmin, res?.srd === false, !res?.userId);
    // if (res?.srd === false && !res?.userId && !isAdmin) return null;
    return res;
  } else {
    const res = await db.class.findFirst({
      where: {
        id: query,
      },
      include: {
        Features: true,
        SubClasses: true,
        casterType: true,
        customFields: true,
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
}

export async function getClassChunk(
  index: number,
  query: string
): Promise<ClassInfo[]> {
  const db = new PrismaClient();
  if (query === "") {
    const res = await db.class.findMany({
      take: QUERY_LIMIT,
      skip: index * QUERY_LIMIT,
      include: {
        Features: true,
        SubClasses: true,
        casterType: true,
        customFields: true,
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
  const res: ClassInfo[] = await db.class.findMany({
    include: {
      Features: true,
      SubClasses: true,
      casterType: true,
      customFields: true,
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
      { name: "description", weight: 0.33 },
      { name: "flavorText", weight: 0.5 },
      { name: "Features.name", weight: 0.5 },
      { name: "Features.description", weight: 0.33 },
    ],
  });
  const results = fuse.search(query);
  const resultsCopy = results.map((item) => item.item);
  await db.$disconnect();

  return resultsCopy.slice(
    index * QUERY_LIMIT,
    index * QUERY_LIMIT + QUERY_LIMIT
  );
}

export const getHomebrewClassChunk = async (
  queryInfo: QueryParams
): Promise<ClassInfo[]> => {
  const db = new PrismaClient();
  const { query, index } = queryInfo;
  if (query === "") {
    const res = await db.class.findMany({
      take: QUERY_LIMIT,
      skip: index * QUERY_LIMIT,
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
        additionalWhere: {
          userId: {
            not: null,
          },
        },
      }),
      include: {
        Features: true,
        SubClasses: true,
        casterType: true,
        customFields: true,
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
  const res: ClassInfo[] = await db.class.findMany({
    where: {
      userId: {
        not: null,
      },
    },
    include: {
      Features: true,
      SubClasses: true,
      casterType: true,
      customFields: true,
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
      { name: "description", weight: 0.33 },
      { name: "flavorText", weight: 0.5 },
      { name: "Features.name", weight: 0.5 },
      { name: "Features.description", weight: 0.33 },
    ],
  });
  const results = fuse.search(query);
  const resultsCopy = results.map((item) => item.item);
  await db.$disconnect();

  return resultsCopy.slice(
    index * QUERY_LIMIT,
    index * QUERY_LIMIT + QUERY_LIMIT
  );
};
