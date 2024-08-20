"use server";
import { QUERY_LIMIT } from "@/lib/globalVars";
import { QueryParams, SubClassInfo } from "@/lib/types";
import { generateQueryFields } from "@/lib/utils/generateQueryFields";
import { PrismaClient } from "@prisma/client";
import Fuse from "fuse.js";

// get top 10 subclasses based on query
export async function getSubclassChunk(
  queryInfo: QueryParams
): Promise<SubClassInfo[] | null> {
  const db = new PrismaClient();
  const { query, page } = queryInfo;
  if (query === "") {
    const res = await db.subClass.findMany({
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
      }),
      take: QUERY_LIMIT,
      skip: page * QUERY_LIMIT,
      include: {
        SubClassFeatures: true,
        casterType: true,
        customFields: true,
        User: {
          select: {
            username: true,
          },
        },
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
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
    }),
    include: {
      SubClassFeatures: true,
      casterType: true,
      customFields: true,
      User: {
        select: {
          username: true,
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

  const resultsCopy: SubClassInfo[] = results.map((item) => item.item);

  return resultsCopy.slice(
    page * QUERY_LIMIT,
    page * QUERY_LIMIT + QUERY_LIMIT
  );
}
