'use server';
import { ClassID } from '@/lib/types/types';
import { Prisma, PrismaClient } from '@prisma/client';

export const createSubClass = async (
  classID: ClassID,
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
