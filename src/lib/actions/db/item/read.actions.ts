"use server";
import { QUERY_LIMIT } from "@/lib/globalVars";
import { ItemInfo, QueryParams } from "@/lib/types";
import { generateQueryFields } from "@/lib/utils/generateQueryFields";
import { PrismaClient } from "@prisma/client";
import Fuse from "fuse.js";

export const getItems = async (): Promise<ItemInfo[]> => {
  const db = new PrismaClient();
  const res = await db.item.findMany({
    include: {
      Weapon: {
        include: {
          ammunition: true,
        },
      },
      Spell: true,
      Armor: true,
      Tool: true,
      AmmunitionFor: true,

      EquipmentPack: {
        include: {
          items: true,
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

export const getItem = async (
  query: string | number
): Promise<ItemInfo | null> => {
  const db = new PrismaClient();
  if (typeof query === "string") {
    const res = await db.item.findFirst({
      where: {
        name: query,
      },
      include: {
        Weapon: {
          include: {
            ammunition: true,
          },
        },
        Spell: true,
        Armor: true,
        Tool: true,
        AmmunitionFor: true,

        EquipmentPack: {
          include: {
            items: true,
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
    const res = await db.item.findFirst({
      where: {
        id: query,
      },
      include: {
        Weapon: {
          include: {
            ammunition: true,
          },
        },
        Spell: true,
        Armor: true,
        Tool: true,
        AmmunitionFor: true,

        EquipmentPack: {
          include: {
            items: true,
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

export const getItemChunk = async (
  queryInfo: QueryParams
): Promise<ItemInfo[] | null> => {
  const db = new PrismaClient();
  const { query } = queryInfo;
  if (query === "") {
    const res = await db.item.findMany({
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
      }),
      include: {
        Weapon: {
          include: {
            ammunition: true,
          },
        },
        Spell: true,
        Armor: true,
        Tool: true,
        AmmunitionFor: true,

        EquipmentPack: {
          include: {
            items: true,
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

  const res: ItemInfo[] = await db.item.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
    }),

    include: {
      Weapon: {
        include: {
          ammunition: true,
        },
      },
      Spell: true,
      Armor: true,
      Tool: true,
      AmmunitionFor: true,

      EquipmentPack: {
        include: {
          items: true,
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
      { name: "type", weight: 1 },
    ],
  });

  const results = fuse.search(query);
  const filtered = results.map((result) => result.item);

  await db.$disconnect();
  return filtered;
};
