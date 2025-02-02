/* eslint-disable no-constant-condition */
'use server';
import { src } from '@/lib/types/types';
import {
  FeatEditorData,
  FeatureEditorData,
  ItemEditorData,
  SubclassEditorData,
} from '@/lib/types/workshop';
import { getUserId } from '@/lib/utils/auth';
import {
  PrismaClient,
  Prisma,
  User,
  WorkshopProtocol,
  ItemTypes,
} from '@prisma/client';

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
      case WorkshopProtocol.ITEM:
        await createWorkshopItem(
          workshopItem as PrismaJson.WorkshopItemData<ItemEditorData>,
          userId,
          db,
          features as PrismaJson.WorkshopItemData<FeatureEditorData>[]
        );
        break;
      case WorkshopProtocol.SUBCLASS:
        await createWorkshopSubclass(
          workshopItem as PrismaJson.WorkshopItemData<SubclassEditorData>,
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
    case WorkshopProtocol.ITEM:
      connect = 'Item';
      break;
    case WorkshopProtocol.SUBCLASS:
      connect = 'SubClass';
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
    // levels: feature.data?.levels || [],
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

const createWorkshopFeat = async (
  feat: PrismaJson.WorkshopItemData<FeatEditorData>,
  userId: string,
  db: PrismaClient,
  features: PrismaJson.WorkshopItemData<FeatureEditorData>[]
) => {
  let slug = await generateSlugBase(feat.name, db);

  if (!slug) {
    console.error('Error generating slug base');
    return;
  }

  let index = 1;

  while (true) {
    const existing = await db.feat.findFirst({
      where: {
        slug,
      },
    });

    if (existing === null) {
      break;
    }

    if (existing.id === feat.id) {
      break;
    }

    slug = `${slug}-${index}`;
    index++;
  }

  const input: Prisma.FeatCreateInput = {
    id: feat.id,
    WorkshopItem: {
      connect: {
        id: feat.id,
      },
    },
    slug,
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

const createWorkshopItem = async (
  item: PrismaJson.WorkshopItemData<ItemEditorData>,
  userId: string,
  db: PrismaClient,
  features: PrismaJson.WorkshopItemData<FeatureEditorData>[]
) => {
  //delete old ItemWeaponData
  await db.itemWeaponData.deleteMany({
    where: {
      itemId: item.id,
    },
  });

  let slug = await generateSlugBase(item.name, db);

  if (!slug) {
    console.error('Error generating slug base');
    return;
  }
  let index = 1;

  while (true) {
    const existing = await db.item.findFirst({
      where: {
        slug,
      },
    });

    if (existing === null) {
      break;
    }

    if (existing.id === item.id) {
      break;
    }

    slug = `${slug}-${index}`;
    index++;
  }

  let input: Prisma.ItemCreateInput = {
    id: item.id,
    WorkshopItem: {
      connect: {
        id: item.id,
      },
    },
    name: item.name,
    description: item.data?.description || 'No description provided',
    flavorText: item.data?.flavorText || 'No flavor text provided',
    requiresAttunement: item.data?.requiresAttunement || false,
    rarity: item.data?.rarity || 'COMMON',
    cost: item.data?.cost || { quantity: 0, unit: 'gp' },
    types: [...(item.data?.types || []), ItemTypes.WORKSHOP],
    slug,

    User: {
      connect: {
        id: userId,
      },
    },
  };

  if (item.data?.weaponData.weaponId) {
    input = {
      ...input,
      ItemWeaponData: {
        create: {
          silvered: item.data?.weaponData?.silvered || false,
          magical: item.data?.weaponData?.magical || false,
          Weapon: {
            connect: {
              id: item.data?.weaponData?.weaponId,
            },
          },
        },
      },
    };
  }

  if (item.data?.armorData.armorId) {
    input = {
      ...input,

      Armor: {
        connect: {
          id: item.data?.armorData?.armorId,
        },
      },
    };
  }

  if (item.data?.toolData.toolId) {
    input = {
      ...input,
      Tool: {
        connect: {
          id: item.data?.toolData?.toolId,
        },
      },
    };
  }

  await db.item.upsert({
    where: {
      workshopId: item.id,
    },
    create: input,
    update: input,
  });

  for (const feature of features) {
    await createWorkshopFeature(feature, db, item.id, WorkshopProtocol.ITEM);
  }

  return;
};

const createWorkshopSubclass = async (
  subclass: PrismaJson.WorkshopItemData<SubclassEditorData>,
  userId: string,
  db: PrismaClient,
  features: PrismaJson.WorkshopItemData<FeatureEditorData>[]
) => {
  let slug = await generateSlugBase(subclass.name, db);

  if (!slug) {
    console.error('Error generating slug base');
    return;
  }

  let index = 1;

  while (true) {
    const existing = await db.subClass.findFirst({
      where: {
        slug,
      },
    });

    if (existing === null) {
      break;
    }

    if (existing.id === subclass.id) {
      break;
    }

    slug = `${slug}-${index}`;
    index++;
  }

  const input: Prisma.SubClassCreateInput = {
    id: subclass.id,
    WorkshopItem: {
      connect: {
        id: subclass.id,
      },
    },
    slug,
    name: subclass.name,
    description: subclass.data?.description || 'No description provided',
    flavorText: subclass.data?.flavorText || 'No flavor text provided',
    source: src.homebrew,
    User: {
      connect: {
        id: userId,
      },
    },
    Class: {
      connect: {
        id: subclass.data?.classData?.id,
      },
    },
  };
  await db.subClass.upsert({
    where: {
      workshopId: subclass.id,
    },
    create: input,
    update: input,
  });

  for (const feature of features) {
    await createWorkshopFeature(
      feature,
      db,
      subclass.id,
      WorkshopProtocol.SUBCLASS
    );
  }
  return;
};

const generateSlugBase = async (name: string, db: PrismaClient) => {
  const userId = await getUserId();
  if (userId === null) {
    console.error('User not logged in');
    return;
  }
  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (user === null) {
    console.error('User not found');
    return;
  }

  return `${sanitize(user.username)}:${sanitize(name)}`;
};

const sanitize = (str: string) =>
  str
    .toLowerCase() // Convert to lowercase
    .trim() // Trim whitespace from both ends
    .replace(/[\s_]+/g, '-') // Replace spaces or underscores with dashes
    .replace(/[^\w-]+/g, '') // Remove non-word characters except dashes
    .replace(/--+/g, '-') // Replace multiple dashes with a single dash
    .replace(/^-+|-+$/g, '');
