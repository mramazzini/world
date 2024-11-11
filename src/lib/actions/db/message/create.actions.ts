'use server';

import { PrismaClient } from '@prisma/client';
import { v4 } from 'uuid';

export const createMessage = async (data: {
  message: string;
  userId: string | null;
  email: string | null;
}) => {
  const db = new PrismaClient();
  const res = await db.message.create({
    data: {
      ...data,
      id: v4(),
    },
  });
  db.$disconnect();
  return res;
};
