'use server';
import { src } from '@/lib/types/types';
import { FeatEditorData, FeatureEditorData } from '@/lib/types/workshop';
import { getUserId } from '@/lib/utils/auth';
import { PrismaClient, Prisma, User, WorkshopProtocol } from '@prisma/client';

export const createUser = async (
  data: Prisma.UserCreateInput
): Promise<User | null> => {
  try {
    const db = new PrismaClient();
    const res = db.user.create({
      data,
    });
    await db.$disconnect();
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const publishWorkshopItem = async (
  workshopItem: PrismaJson.WorkshopItemData,
  features: PrismaJson.WorkshopItemData[]
) => {
  const db = await new PrismaClient();

  const userId = await getUserId();

  if (userId === null) {
    console.error('User not logged in');
    await db.$disconnect();

    return;
  }

  try {
    switch (workshopItem.protocol) {
      case WorkshopProtocol.FEAT:
        await createWorkshopFeat(
          workshopItem as PrismaJson.WorkshopItemData<FeatEditorData>,
          userId,
          db,
          features as PrismaJson.WorkshopItemData<FeatureEditorData>[]
        );
        break;
      default:
        console.error('Protocol not found');
        break;
    }
    return true;
  } catch (error) {
    console.error('Error publishing workshop item:', error);
    return false;
  } finally {
    await db.$disconnect();
  }
};

const createWorkshopFeat = async (
  feat: PrismaJson.WorkshopItemData<FeatEditorData>,
  userId: string,
  db: PrismaClient,
  features: PrismaJson.WorkshopItemData<FeatureEditorData>[]
) => {
  const input: Prisma.FeatCreateInput = {
    id: feat.id,
    WorkshopItem: {
      connect: {
        id: feat.id,
      },
    },
    name: feat.name,
    flavorText: feat.data?.flavorText || 'No flavor text provided',
    source: src.homebrew,
    prereqDescription: feat.data?.prereqDescription || '',
    User: {
      connect: {
        id: userId,
      },
    },
  };
  await db.feat.upsert({
    where: {
      workshopId: feat.id,
    },
    create: input,
    update: input,
  });

  for (const feature of features) {
    await createWorkshopFeature(feature, db, feat.id, WorkshopProtocol.FEAT);
  }
  return;
};

const createWorkshopFeature = async (
  feature: PrismaJson.WorkshopItemData<FeatureEditorData>,
  db: PrismaClient,
  parentId: string,
  protocol: WorkshopProtocol
) => {
  let connect = '';
  switch (protocol) {
    case WorkshopProtocol.FEAT:
      connect = 'Feat';
      break;
    default:
      console.error('Protocol not found');
      return;
  }

  const input: Prisma.FeatureCreateInput = {
    id: feature.id,
    WorkshopItem: {
      connect: {
        id: feature.id,
      },
    },
    [connect]: {
      connect: {
        workshopId: parentId,
      },
    },

    name: feature.name,
    description: feature.data?.description || 'No description provided',
    levels: feature.data?.levels || [],
  };
  await db.feature.upsert({
    where: {
      workshopId: feature.id,
    },
    create: input,
    update: input,
  });

  return;
};
