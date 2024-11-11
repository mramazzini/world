'use server';
import { getUserId } from '@/lib/utils/auth';
import { PrismaClient } from '@prisma/client';

export const deleteWorkshopItem = async (workshopItemId: string) => {
  const db = await new PrismaClient();
  const userId = await getUserId();

  if (userId === null) {
    console.error('User not logged in');
    return;
  }

  const exists = await db.workshopItem.findFirst({
    where: {
      id: workshopItemId,
    },
  });

  if (!exists) {
    console.log('Workshop item not found');
    return;
  }

  await db.workshopItem.delete({
    where: {
      id: workshopItemId,
    },
  });

  await db.$disconnect();

  return;
};

export const bulkDeleteWorkshopItems = async (workshopItemIds: string[]) => {
  const db = await new PrismaClient();
  const userId = await getUserId();

  if (userId === null) {
    console.error('User not logged in');
    return;
  }
  try {
    await db.workshopItem.deleteMany({
      where: {
        id: {
          in: workshopItemIds,
        },
      },
    });
  } catch (error) {
    console.error('Error deleting workshop items:', error);
  }

  await db.$disconnect();

  return;
};
