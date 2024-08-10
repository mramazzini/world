"use server";

import { PrismaClient } from "@prisma/client";

export const getMessages = async () => {
  const db = new PrismaClient();
  const res = await db.message.findMany({
    //sort by newest first
    orderBy: {
      createdAt: "desc",
    },
    include: {
      User: {
        select: {
          id: true,
          username: true,
          email: true,
        },
      },
    },
  });
  db.$disconnect();
  return res;
};
