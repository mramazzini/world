'use server';

import { PrismaClient } from '@prisma/client';

export const createMessage = async (data: {
  message: string;
  userId: number | null;
  email: string | null;
}) => {
  const db = new PrismaClient();
  const res = await db.message.create({
    data,
  });
  db.$disconnect();
  return res;
};
