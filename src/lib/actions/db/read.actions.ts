"use server";
import Fuse from "fuse.js";
import { ClassInfo, SubClassInfo, SubclassSearchResults } from "@/lib/types";
import {
  Class,
  PrismaClient,
  SubClass,
  SubRace,
  Background,
  Feat,
  Spell,
  Race,
  CasterType,
  Weapon,
  WeaponProperty,
} from "@prisma/client";
import { QUERY_LIMIT } from "@/lib/globalVars";

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
      { name: "name", weight: 3 },
      { name: "description", weight: 1 },
      { name: "flavorText", weight: 2 },
      { name: "SubClassFeatures.name", weight: 2 },
      { name: "SubClassFeatures.description", weight: 1 },
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
      { name: "name", weight: 3 },
      { name: "description", weight: 1 },
      { name: "flavorText", weight: 2 },
      { name: "SubClassFeatures.name", weight: 2 },
      { name: "SubClassFeatures.description", weight: 1 },
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
      { name: "name", weight: 3 },
      { name: "description", weight: 1 },
      { name: "flavorText", weight: 2 },
      { name: "Features.name", weight: 2 },
      { name: "Features.description", weight: 1 },
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

export async function getClass(
  query: string | number
): Promise<ClassInfo | null> {
  const db = new PrismaClient();
  if (typeof query === "string") {
    const res = await db.class.findFirst({
      where: {
        name: query,
      },
      //include features
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

export const getDefaultCasterTypes = async (): Promise<CasterType[]> => {
  const db = new PrismaClient();
  const arr: CasterType[] = await db.casterType.findMany({
    where: {
      id: {
        in: [1, 2, 3],
      },
    },
  });
  await db.$disconnect();
  return arr;
};
export async function getClasses(): Promise<Class[]> {
  const db = new PrismaClient();
  const res = await db.class.findMany();
  await db.$disconnect();
  return res;
}
export async function getSubclasses(): Promise<SubClass[]> {
  const db = new PrismaClient();
  const res = await db.subClass.findMany();
  await db.$disconnect();
  return res;
}
export async function getRace(): Promise<Race[]> {
  const db = new PrismaClient();
  const res = await db.race.findMany();
  await db.$disconnect();
  return res;
}

export async function getSubRace(): Promise<SubRace[]> {
  const db = new PrismaClient();
  const res = await db.subRace.findMany();
  await db.$disconnect();
  return res;
}

export async function getBackground(): Promise<Background[]> {
  const db = new PrismaClient();
  const res = await db.background.findMany();
  await db.$disconnect();
  return res;
}

export async function getFeat(): Promise<Feat[]> {
  const db = new PrismaClient();
  const res = await db.feat.findMany();
  await db.$disconnect();
  return res;
}

export async function getSpell(): Promise<Spell[]> {
  const db = new PrismaClient();
  const res = await db.spell.findMany();
  await db.$disconnect();
  return res;
}

export async function getWeapon(): Promise<Weapon[]> {
  const db = new PrismaClient();
  const res = await db.weapon.findMany({
    include: {
      WeaponToProperties: true,
    },
  });
  await db.$disconnect();
  return res;
}
