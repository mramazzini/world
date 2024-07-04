import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export const deleteClasses = async () => {
  await db.class.deleteMany();
  await db.$disconnect();
  return;
};
