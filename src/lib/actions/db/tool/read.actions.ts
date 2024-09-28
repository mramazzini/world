"use server";
import { QUERY_LIMIT } from "@/lib/globalVars";
import { ToolInfo, QueryParams } from "@/lib/utils/types/types";
import { generateQueryFields } from "@/lib/utils/generateQueryFields";
import { PrismaClient } from "@prisma/client";
import Fuse from "fuse.js";

export const getTools = async (): Promise<ToolInfo[]> => {
  const db = new PrismaClient();
  const res = await db.tool.findMany({});
  await db.$disconnect();
  return res;
};

export const getTool = async (
  query: string | number
): Promise<ToolInfo | null> => {
  const db = new PrismaClient();
  if (typeof query === "string") {
    const res = await db.tool.findFirst({
      where: {
        name: query,
      },
    });
    await db.$disconnect();
    return res;
  } else {
    const res = await db.tool.findFirst({
      where: {
        id: query,
      },
    });
    await db.$disconnect();
    return res;
  }
};

export const getToolChunk = async (
  queryInfo: QueryParams
): Promise<ToolInfo[] | null> => {
  const db = new PrismaClient();
  const { query } = queryInfo;
  if (query === "") {
    const res = await db.tool.findMany({
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
      }),
    });
    await db.$disconnect();
    return res;
  }

  const res: ToolInfo[] = await db.tool.findMany({
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
