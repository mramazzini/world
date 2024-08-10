"use server";
import { PrismaClient, User } from "@prisma/client";

export const getUser = async (id: number): Promise<User | null> => {
  const db = new PrismaClient();
  const res = await db.user.findFirst({
    where: {
      id,
    },
  });
  db.$disconnect();
  return res;
};
