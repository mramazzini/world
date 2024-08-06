"use server";
import { getUserId } from "@/lib/utils/auth";
import { PrismaClient, Prisma } from "@prisma/client";

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

export const clientClassCreator = async (
  classObj: Prisma.ClassCreateInput,
  features: Prisma.FeatureCreateManyInput[],
  casterType: Prisma.CasterTypeCreateManyInput,
  customFields: Prisma.CustomFieldCreateManyInput[]
) => {
  const db = new PrismaClient();
  //create caster type

  const { id, ...casterInput } = casterType;
  const caster = await db.casterType.create({
    data: casterInput,
  });

  //create class
  const classRes = await createClass(classObj);

  const userId = await getUserId();
  const source = "homebrew";
  //link class to user and source
  await db.class.update({
    where: {
      id: classRes.id,
    },
    data: {
      userId,
      source,
    },
  });

  // //create features
  for (const feature of features) {
    feature.id = undefined;
    const res = await db.feature.create({
      data: {
        ...feature,
        classId: classRes.id,
      },
    });
  }

  // //create custom fields
  for (const field of customFields) {
    const res = await db.customField.create({
      data: {
        ...field,
        description: field.description || "",
        classId: classRes.id,
      },
    });
  }

  await db.$disconnect();
  return classRes;
};
