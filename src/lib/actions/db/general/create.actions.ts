"use server";
import {
  Class,
  PrismaClient,
  SubClass,
  SubRace,
  Background,
  Feat,
  Spell,
  Race,
  Ability,
  Skill,
  ArmorTypes,
  Prisma,
  Feature,
  CasterType,
  User,
} from "@prisma/client";

export const createUser = async (
  data: Prisma.UserCreateInput
): Promise<User | null> => {
  try {
    const db = new PrismaClient();
    console.log(data);
    const res = db.user.create({
      data,
    });
    await db.$disconnect();
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};
