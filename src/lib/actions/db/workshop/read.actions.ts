'use server';
import { getUserId } from '@/lib/utils/auth';
import { PrismaClient } from '@prisma/client';

export const getWorkshopItems = async (): Promise<
  PrismaJson.WorkshopItemData[]
> => {
  const db = await new PrismaClient({
    omit: {
      workshopItem: {
        createdAt: true,
      },
    },
  });
  const userId = await getUserId();
  if (userId === null) return [];

  const items = await db.workshopItem.findMany({
    where: {
      userId: userId,
    },
  });

  await db.$disconnect();

  return items.map((item) => item.data);
};
