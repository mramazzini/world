"use server";
import { QUERY_LIMIT } from "@/lib/globalVars";
import { ArmorInfo, QueryParams } from "@/lib/types";
import { generateQueryFields } from "@/lib/utils/generateQueryFields";
import { PrismaClient } from "@prisma/client";
import Fuse from "fuse.js";

export const getArmors = async (): Promise<ArmorInfo[]> => {
  const db = new PrismaClient();
  const res = await db.armor.findMany({});
  await db.$disconnect();
  return res;
};

export const getArmor = async (
  query: string | number
): Promise<ArmorInfo | null> => {
  const db = new PrismaClient();
  if (typeof query === "string") {
    const res = await db.armor.findFirst({
      where: {
        name: query,
      },
    });
    await db.$disconnect();
    return res;
  } else {
    const res = await db.armor.findFirst({
      where: {
        id: query,
      },
    });
    await db.$disconnect();
    return res;
  }
};

export const getArmorChunk = async (
  queryInfo: QueryParams
): Promise<ArmorInfo[] | null> => {
  const db = new PrismaClient();
  const { query } = queryInfo;
  if (query === "") {
    const res = await db.armor.findMany({
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
      }),
    });
    await db.$disconnect();
    return res;
  }

  const res: ArmorInfo[] = await db.armor.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
    }),
  });

  const fuse = new Fuse(res, {
    keys: [{ name: "name", weight: 1 }],
  });

  const results = fuse.search(query);
  const filtered = results.map((result) => result.item);

  await db.$disconnect();
  return filtered;
};
