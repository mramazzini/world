"use server";
import { QUERY_LIMIT } from "@/lib/globalVars";
import { CharacterInfo, QueryParams } from "@/lib/types";
import { generateQueryFields } from "@/lib/utils/generateQueryFields";
import { PrismaClient } from "@prisma/client";
import Fuse from "fuse.js";

export const getCharacters = async (): Promise<CharacterInfo[]> => {
  const db = new PrismaClient();
  const res = await db.character.findMany({
    include: {
      Race: true,
      Background: true,
      SubClasses: true,
      Classes: {
        include: {
          SpellList: {
            include: {
              Spells: true,
            },
          },
        },
      },
      SubRace: true,

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

export const getCharacter = async (
  query: string | number
): Promise<CharacterInfo | null> => {
  const db = new PrismaClient();
  if (typeof query === "string") {
    const res = await db.character.findFirst({
      where: {
        name: query,
      },
      include: {
        Race: true,
        Background: true,
        SubClasses: true,
        Classes: {
          include: {
            SpellList: {
              include: {
                Spells: true,
              },
            },
          },
        },
        SubRace: true,
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
    const res = await db.character.findFirst({
      where: {
        id: query,
      },
      include: {
        Race: true,
        Background: true,
        SubClasses: true,
        Classes: {
          include: {
            SpellList: {
              include: {
                Spells: true,
              },
            },
          },
        },
        SubRace: true,
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

export const getCharactersByUser = async (
  userID: number
): Promise<CharacterInfo[]> => {
  const db = new PrismaClient();
  const res = await db.character.findMany({
    where: {
      userId: userID,
    },
    include: {
      Race: true,
      Background: true,
      SubClasses: true,
      Classes: {
        include: {
          SpellList: {
            include: {
              Spells: true,
            },
          },
        },
      },
      SubRace: true,
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

export const getCharacterChunk = async (
  queryInfo: QueryParams
): Promise<CharacterInfo[] | null> => {
  const db = new PrismaClient();
  const { query } = queryInfo;
  if (query === "") {
    const res = await db.character.findMany({
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
      }),
      include: {
        Race: true,
        Background: true,
        SubClasses: true,
        Classes: {
          include: {
            SpellList: {
              include: {
                Spells: true,
              },
            },
          },
        },
        SubRace: true,
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

  const res: CharacterInfo[] = await db.character.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
    }),

    include: {
      Race: true,
      Background: true,
      SubClasses: true,
      Classes: {
        include: {
          SpellList: {
            include: {
              Spells: true,
            },
          },
        },
      },
      SubRace: true,
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
