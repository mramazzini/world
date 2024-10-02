"use server";
import {
  SpeciesInfo,
  QueryParams,
  SubSpeciesInfo,
} from "@/lib/utils/types/types";
import { generateQueryFields } from "@/lib/utils/generateQueryFields";
import { PrismaClient } from "@prisma/client";

import Fuse from "fuse.js";
import { DBMetadata } from "@/lib/utils/types/metadata";

export const getVariantMetadata = async (): Promise<DBMetadata[]> => {
  const db = new PrismaClient();
  const res = await db.subSpecies.findMany({
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

export const getVariantMetadataBySpecies = async (
  speciesId: number
): Promise<DBMetadata[]> => {
  const db = new PrismaClient();
  const res = await db.subSpecies.findMany({
    where: {
      speciesId: speciesId,
    },
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

export const getSubSpecies = async (): Promise<SubSpeciesInfo[]> => {
  const db = new PrismaClient();
  const res = await db.subSpecies.findMany({
    include: {
      species: true,
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

export const getSubSpecie = async (
  query: string | number
): Promise<SubSpeciesInfo | null> => {
  const db = new PrismaClient();
  if (typeof query === "string") {
    const res = await db.subSpecies.findFirst({
      where: {
        name: query,
      },
      include: {
        species: true,
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
    const res = await db.subSpecies.findFirst({
      where: {
        id: query,
      },
      include: {
        species: true,
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

export const getSubSpeciesChunk = async (
  queryInfo: QueryParams
): Promise<SubSpeciesInfo[] | null> => {
  const db = new PrismaClient();
  const { query, page } = queryInfo;
  if (query === "") {
    const res = await db.subSpecies.findMany({
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
      }),
      include: {
        species: true,
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

  const res: SubSpeciesInfo[] = await db.subSpecies.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
    }),

    include: {
      species: true,
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
