"use server";
import { ItemInfo } from "@/lib/types";
import { PrismaClient } from "@prisma/client";

export const getItem = async (
  query: string | number
): Promise<ItemInfo | null> => {
  const db = new PrismaClient();
  if (typeof query === "string") {
    const res = await db.item.findFirst({
      where: {
        name: query,
      },
      include: {
        User: {
          select: {
            username: true,
          },
        },
      },
    });
    await db.$disconnect();
    return res;
  } else {
    const res = await db.item.findFirst({
      where: {
        id: query,
      },
      include: {
        User: {
          select: {
            username: true,
          },
        },
      },
    });
    await db.$disconnect();
    return res;
  }
};
