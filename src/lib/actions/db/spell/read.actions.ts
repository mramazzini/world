"use server";
import { QUERY_LIMIT } from "@/lib/globalVars";
import { SpellInfo } from "@/lib/types";
import { PrismaClient, Spell } from "@prisma/client";
import Fuse from "fuse.js";

export const getSpells = async () => {
  const db = await new PrismaClient();
  const spells = await db.spell.findMany({});
  db.$disconnect();
  return spells;
};

export const getSpellChunk = async (
  index: number,
  query: string
): Promise<SpellInfo[]> => {
  const db = new PrismaClient();
  if (query === "") {
    const res = await db.spell.findMany({
      skip: index * QUERY_LIMIT,
      take: QUERY_LIMIT,
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

  const res: SpellInfo[] = await db.spell.findMany({
    skip: index,
    take: QUERY_LIMIT,
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
      { name: "name", weight: 0.7 },
      { name: "description", weight: 0.3 },
      { name: "tags", weight: 0.5 },
      { name: "User.username", weight: 0.5 },
    ],
  });

  const results = fuse.search(query);
  await db.$disconnect();
  return results
    .map((result) => result.item)
    .slice(index * QUERY_LIMIT, index * QUERY_LIMIT + QUERY_LIMIT);
};
