"use server";
import { ClassInfo, DBmetaData, SubClassInfo } from "@/lib/types";
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

export async function getClassMeta(): Promise<DBmetaData[]> {
  const db = new PrismaClient();
  let res: DBmetaData[] = [];
  const data = await db.class.findMany({
    orderBy: {
      name: "asc",
    },
    //only name and id
    select: {
      name: true,
      id: true,
      description: true,
      updatedAt: true,
      subClassName: true,
      source: true,
      userId: true,
    },
  });

  const ids = data.map((item) => item.userId).filter((id) => id !== null);

  const users = await db.user.findMany({
    where: {
      id: {
        in: ids,
      },
    },
  });

  res = data.map((item) => {
    const user = users.find((user) => user.id === item.userId);
    return {
      ...item,
      userName: user?.username || null,
    };
  });
  await db.$disconnect();
  return res;
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

export const getSubClassMeta = async (
  className: string
): Promise<DBmetaData[] | null> => {
  const db = new PrismaClient();
  const classObj = await db.class.findFirst({
    where: {
      name: className,
    },
  });
  const data = await db.subClass.findMany({
    where: {
      classId: classObj?.id,
    },
    select: {
      name: true,
      id: true,
      description: true,
      updatedAt: true,
      source: true,
      userId: true,
    },
  });
  let res: DBmetaData[] = [];
  const ids = data.map((item) => item.userId).filter((id) => id !== null);

  const users = await db.user.findMany({
    where: {
      id: {
        in: ids,
      },
    },
  });

  res = data.map((item) => {
    const user = users.find((user) => user.id === item.userId);
    return {
      ...item,
      userName: user?.username || null,
    };
  });
  await db.$disconnect();
  return res;
};

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
        in: [1, 2, 3, 4],
      },
    },
  });
  await db.$disconnect();
  return arr;
};

// export async function getRace(): Promise<Race[]> {
//   return await db.race.findMany();
// }

// export async function getSubRace(): Promise<SubRace[]> {
//   return await db.subRace.findMany();
// }

// export async function getBackground(): Promise<Background[]> {
//   return await db.background.findMany();
// }

// export async function getFeat(): Promise<Feat[]> {
//   return await db.feat.findMany();
// }

// export async function getSpell(): Promise<Spell[]> {
//   return await db.spell.findMany();
// }

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
