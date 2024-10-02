"use server";
import { SpeciesInfo, QueryParams } from "@/lib/utils/types/types";
import { generateQueryFields } from "@/lib/utils/generateQueryFields";
import { PrismaClient } from "@prisma/client";

import Fuse from "fuse.js";
import { DBMetadata } from "@/lib/utils/types/metadata";

export const getSpeciesMetadata = async (): Promise<DBMetadata[]> => {
  const db = new PrismaClient();
  const res = await db.species.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      flavorText: true,
      updatedAt: true,
    },
  });
  await db.$disconnect();
  return res;
};

export const getSpecies = async (): Promise<SpeciesInfo[]> => {
  const db = new PrismaClient();
  const res = await db.species.findMany({
    include: {
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

export const getSpecie = async (
  query: string | number
): Promise<SpeciesInfo | null> => {
  const db = new PrismaClient();
  if (typeof query === "string") {
    const res = await db.species.findFirst({
      where: {
        name: query,
      },
      include: {
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
    const res = await db.species.findFirst({
      where: {
        id: query,
      },
      include: {
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

export const getSpeciesChunk = async (
  queryInfo: QueryParams
): Promise<SpeciesInfo[] | null> => {
  const db = new PrismaClient();
  const { query, page } = queryInfo;
  if (query === "") {
    const res = await db.species.findMany({
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
      }),
      include: {
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

  const res: SpeciesInfo[] = await db.species.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
    }),

    include: {
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
