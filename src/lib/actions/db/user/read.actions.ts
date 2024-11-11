'use server';
import { PrismaClient, User } from '@prisma/client';

export const getUser = async (id: string): Promise<User | null> => {
  const db = new PrismaClient();
  const res = await db.user.findFirst({
    where: {
      id,
    },
  });
  await db.$disconnect();

  return res;
};
