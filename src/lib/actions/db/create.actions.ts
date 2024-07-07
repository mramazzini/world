"use server";
import {
  Class,
  PrismaClient,
  SubClass,
  SubRace,
  Background,
  Feat,
  Spell,
  Item,
  Race,
  Ability,
  Skill,
  ArmorTypes,
  Prisma,
  Feature,
  CasterType,
} from "@prisma/client";
import { deleteClasses } from "./destroy.actions";

const db = new PrismaClient();

export const createClassWithFeaturesAndSubClasses = async (
  data: Prisma.ClassCreateManyInput,
  features: Prisma.FeatureCreateManyInput[],
  subClasses: Prisma.SubClassCreateManyInput[]
) => {
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
  return result;
};

export const createClass = async (data: Prisma.ClassCreateInput) => {
  const result = await db.class.create({
    data,
  });
  return result;
};

export const createFeature = (
  classID: number,
  feature: Prisma.FeatureCreateManyInput
) => {
  return db.feature.create({
    data: {
      ...feature,
      classId: classID,
    },
  });
};

export const createSubClass = (
  classID: number,
  subClass: Prisma.SubClassCreateManyInput
) => {
  return db.subClass.create({
    data: {
      ...subClass,
      classId: classID,
    },
  });
};
