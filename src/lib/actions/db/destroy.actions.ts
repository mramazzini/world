import { PrismaClient } from "@prisma/client";

export const deleteClasses = async () => {
  const db = new PrismaClient();
  await db.class.deleteMany();
  await db.$disconnect();
  return;
};
