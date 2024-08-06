"use server";
import { QUERY_LIMIT } from "@/lib/globalVars";
import { SubClassInfo, SubclassSearchResults } from "@/lib/types";
import { Prisma, PrismaClient, SubClass } from "@prisma/client";
import Fuse from "fuse.js";

// get top 10 subclasses based on query
export async function getSubclassChunk(
  index: number,
  query: string
): Promise<SubclassSearchResults[] | null> {
  const db = new PrismaClient();

  if (query === "") {
    const res = await db.subClass.findMany({
      take: QUERY_LIMIT,
      skip: index * QUERY_LIMIT,
      include: {
        Class: {
          select: {
            name: true,
          },
        },
      },
    });
    await db.$disconnect();
    return res;
  }

  const res = await db.subClass.findMany({
    include: {
      SubClassFeatures: {
        select: {
          name: true,
          description: true,
        },
      },
      Class: {
        select: {
          name: true,
        },
      },
    },
  });
  const fuse = new Fuse(res, {
    keys: [
      { name: "name", weight: 1 },
      { name: "description", weight: 0.33 },
      { name: "flavorText", weight: 0.5 },
      { name: "SubClassFeatures.name", weight: 0.5 },
      { name: "SubClassFeatures.description", weight: 0.33 },
    ],
  });
  const results = fuse.search(query);
  await db.$disconnect();
  //remove SubClassFeatures from results
  const resultsCopy: SubclassSearchResults[] = results.map((item) => {
    const { SubClassFeatures, ...rest } = item.item;
    return rest;
  });

  return resultsCopy.slice(
    index * QUERY_LIMIT,
    index * QUERY_LIMIT + QUERY_LIMIT
  );
}

export async function getSubclassChunkByClass(
  index: number,
  query: string,
  className: string
): Promise<SubClassInfo[] | null> {
  const db = new PrismaClient();
  if (query === "") {
    const res = await db.subClass.findMany({
      take: QUERY_LIMIT,
      skip: index * QUERY_LIMIT,
      where: {
        Class: {
          name: className,
        },
      },
      include: {
        SubClassFeatures: true,
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
  const res = await db.subClass.findMany({
    where: {
      Class: {
        name: className,
      },
    },
    include: {
      SubClassFeatures: true,
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
      { name: "SubClassFeatures.name", weight: 0.5 },
      { name: "SubClassFeatures.description", weight: 0.33 },
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

export async function getHomebrewSubclassChunk(
  index: number,
  query: string
): Promise<SubClassInfo[]> {
  const db = new PrismaClient();
  if (query === "") {
    const res = await db.subClass.findMany({
      take: QUERY_LIMIT,
      skip: index * QUERY_LIMIT,
      where: {
        userId: {
          not: null,
        },
      },
      include: {
        SubClassFeatures: true,
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
  const res = await db.subClass.findMany({
    where: {
      userId: {
        not: null,
      },
    },
    include: {
      SubClassFeatures: true,
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
      { name: "SubClassFeatures.name", weight: 0.5 },
      { name: "SubClassFeatures.description", weight: 0.33 },
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

export async function getSubclass(
  query: string | number
): Promise<SubClassInfo | null> {
  const db = new PrismaClient();
  try {
    if (typeof query === "string") {
      const res = await db.subClass.findFirst({
        where: {
          name: query,
        },
        include: {
          SubClassFeatures: true,
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
    } else {
      const res = await db.subClass.findFirst({
        where: {
          id: query,
        },
        include: {
          SubClassFeatures: true,
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
  } catch (error) {
    console.error(error);
  }
  await db.$disconnect();
  return null;
}

export const getSubclassFromClassName = async (
  className: string
): Promise<SubClass[]> => {
  const db = new PrismaClient();
  //find the class
  const classObj = await db.class.findFirst({
    where: {
      name: className,
    },
  });
  //find the subclasses
  const res = await db.subClass.findMany({
    where: {
      classId: classObj?.id,
    },
  });
  await db.$disconnect();
  return res;
};
