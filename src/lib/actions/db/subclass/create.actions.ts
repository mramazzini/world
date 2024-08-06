"use server";
import { Prisma, PrismaClient } from "@prisma/client";

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
