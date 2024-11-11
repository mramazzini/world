'use server';
import { getUserId } from '@/lib/utils/auth';
import { PrismaClient } from '@prisma/client';

export const createWorkshopItem = async (
  workshopItem: PrismaJson.WorkshopItemData
) => {
  const db = await new PrismaClient();
  const userId = await getUserId();

  if (userId === null) {
    console.error('User not logged in');
    return;
  }
  await db.workshopItem.create({
    data: {
      id: workshopItem.id,
      data: workshopItem,
      userId: userId,
    },
  });

  await db.$disconnect();

  return;
};

export const syncWorkshopItem = async (
  workshopItem: PrismaJson.WorkshopItemData,
  featureItems: PrismaJson.WorkshopItemData[]
) => {
  const db = await new PrismaClient();
  const userId = await getUserId();
  const status: {
    id: string;
    status: 'success' | 'failed';
  }[] = [];

  if (userId === null) {
    console.error('User not logged in');
    return;
  }

  try {
    // Main workshop item upsert
    try {
      await db.workshopItem.upsert({
        where: { id: workshopItem.id },
        update: { data: workshopItem },
        create: { id: workshopItem.id, data: workshopItem, userId: userId },
      });
      status.push({ id: workshopItem.id, status: 'success' });
    } catch (error) {
      console.error(error);

      status.push({
        id: workshopItem.id,
        status: 'failed',
      });
    }

    // Feature items upserts
    for (const featureItem of featureItems) {
      try {
        await db.workshopItem.upsert({
          where: { id: featureItem.id },
          update: { data: featureItem },
          create: { id: featureItem.id, data: featureItem, userId: userId },
        });
        status.push({ id: featureItem.id, status: 'success' });
      } catch (error) {
        console.error(error);
        status.push({
          id: featureItem.id,
          status: 'failed',
        });
      }
    }
  } finally {
    await db.$disconnect();
  }

  return status;
};
