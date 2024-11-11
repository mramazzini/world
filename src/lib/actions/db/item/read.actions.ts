'use server';
import { QueryParams } from '@/lib/types/types';
import { generateQueryFields } from '@/lib/utils/generateQueryFields';
import { PrismaClient } from '@prisma/client';
import Fuse from 'fuse.js';
import { DBMetadata, SingleDataQuery } from '@/lib/types/metadata';
import { ItemInfo } from '@/lib/types/modelInfo';

export const getItemsMetadata = async (): Promise<DBMetadata[]> => {
  const db = new PrismaClient();
  const res = await db.item.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      flavorText: true,
      updatedAt: true,
    },
  });
  await db.$disconnect();
  return res;
};

export const getItems = async (): Promise<ItemInfo[]> => {
  const db = new PrismaClient();
  const res = await db.item.findMany({
    include: {
      ItemWeaponData: {
        include: {
          Weapon: {
            include: {
              ammunition: true,
              SpecialProperties: true,
              WeaponPropertyInstance: {
                include: {
                  Property: true,
                },
              },
            },
          },
        },
      },
      Spell: true,
      Features: true,
      Armor: {
        include: {
          Features: true,
        },
      },
      Tool: {
        include: {
          Features: true,
        },
      },
      AmmunitionFor: true,

      EquipmentPack: {
        include: {
          items: true,
        },
      },
      User: {
        select: {
          username: true,
        },
      },
    },
  });
  await db.$disconnect();
  return res;
};

export const getItem = async ({
  query,
  type,
}: SingleDataQuery): Promise<ItemInfo | null> => {
  const db = new PrismaClient();

  const res = await db.item.findFirst({
    where: {
      [type]: query,
    },
    include: {
      ItemWeaponData: {
        include: {
          Weapon: {
            include: {
              ammunition: true,
              SpecialProperties: true,
              WeaponPropertyInstance: {
                include: {
                  Property: true,
                },
              },
            },
          },
        },
      },
      Spell: true,
      Features: true,
      Armor: {
        include: {
          Features: true,
        },
      },
      Tool: {
        include: {
          Features: true,
        },
      },
      AmmunitionFor: true,

      EquipmentPack: {
        include: {
          items: true,
        },
      },
      User: {
        select: {
          username: true,
        },
      },
    },
  });
  await db.$disconnect();
  return res;
};

export const getItemChunk = async (
  queryInfo: QueryParams
): Promise<ItemInfo[] | null> => {
  const db = new PrismaClient();
  const { query } = queryInfo;
  if (query === '') {
    const res = await db.item.findMany({
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
      }),
      include: {
        ItemWeaponData: {
          include: {
            Weapon: {
              include: {
                ammunition: true,
                SpecialProperties: true,
                WeaponPropertyInstance: {
                  include: {
                    Property: true,
                  },
                },
              },
            },
          },
        },
        Spell: true,
        Features: true,
        Armor: {
          include: {
            Features: true,
          },
        },
        Tool: {
          include: {
            Features: true,
          },
        },
        AmmunitionFor: true,

        EquipmentPack: {
          include: {
            items: true,
          },
        },
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

  const res: ItemInfo[] = await db.item.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
    }),

    include: {
      ItemWeaponData: {
        include: {
          Weapon: {
            include: {
              ammunition: true,
              SpecialProperties: true,
              WeaponPropertyInstance: {
                include: {
                  Property: true,
                },
              },
            },
          },
        },
      },
      Spell: true,
      Features: true,
      Armor: {
        include: {
          Features: true,
        },
      },
      Tool: {
        include: {
          Features: true,
        },
      },
      AmmunitionFor: true,

      EquipmentPack: {
        include: {
          items: true,
        },
      },
      User: {
        select: {
          username: true,
        },
      },
    },
  });

  const fuse = new Fuse(res, {
    keys: [
      { name: 'name', weight: 1 },
      { name: 'description', weight: 1 },
      { name: 'type', weight: 1 },
    ],
  });

  const results = fuse.search(query);
  const filtered = results.map((result) => result.item);

  await db.$disconnect();
  return filtered;
};
