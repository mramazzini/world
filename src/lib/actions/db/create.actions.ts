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
} from "@prisma/client";
import { deleteClasses } from "./destroy.actions";

export const createClassWithFeaturesAndSubClasses = async (
  data: Prisma.ClassCreateManyInput,
  features: Prisma.FeatureCreateManyInput[],
  subClasses: Prisma.SubClassCreateManyInput[]
) => {
  const db = new PrismaClient();
  const result = await db.class.create({
    data: {
      ...data,
      Features: {
        createMany: {
          data: features,
        },
      },
      SubClasses: {
        createMany: {
          data: subClasses,
        },
      },
    },
  });
  await db.$disconnect();
  return result;
};

export const createClass = async (data: Prisma.ClassCreateInput) => {
  const db = new PrismaClient();
  const result = await db.class.create({
    data,
  });
  await db.$disconnect();
  return result;
};

export const createFeature = async (
  classID: number,
  feature: Prisma.FeatureCreateManyInput
) => {
  const db = new PrismaClient();
  const res = await db.feature.create({
    data: {
      ...feature,
      classId: classID,
    },
  });
  await db.$disconnect();
  return res;
};

export const createSubClass = async (
  classID: number,
  subClass: Prisma.SubClassCreateManyInput
) => {
  const db = new PrismaClient();
  const res = await db.subClass.create({
    data: {
      ...subClass,
      classId: classID,
    },
  });
  await db.$disconnect();
  return res;
};
