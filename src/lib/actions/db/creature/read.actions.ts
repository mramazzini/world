'use server';
import { CreatureInfo, QueryParams } from '@/lib/utils/types/types';
import { generateQueryFields } from '@/lib/utils/generateQueryFields';
import { PrismaClient } from '@prisma/client';
import Fuse from 'fuse.js';
import { DBMetadata } from '@/lib/utils/types/metadata';

export const getCreaturesMetadata = async (): Promise<DBMetadata[]> => {
  const db = new PrismaClient();
  const res = await db.creature.findMany({
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

export const getCreatures = async (): Promise<CreatureInfo[]> => {
  const db = new PrismaClient();
  const res = await db.creature.findMany({
    include: {
      User: {
        select: {
          username: true,
        },
      },
      wieldingItems: {
        include: {
          Weapon: {
            include: {
              ammunition: true,
            },
          },
          Spell: true,
          Armor: true,
          Tool: true,
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
      },
      armorEquipped: {
        include: {
          Weapon: {
            include: {
              ammunition: true,
            },
          },
          Spell: true,
          Armor: true,
          Tool: true,
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
      },
      spellsPrepared: true,
      freeSpells: true,
      CreatureLimitedSpells: {
        include: {
          Spell: true,
        },
      },
      shieldEquipped: {
        include: {
          Weapon: {
            include: {
              ammunition: true,
            },
          },
          Spell: true,
          Armor: true,
          Tool: true,
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
      },
    },
  });
  await db.$disconnect();
  return res;
};

export const getCreature = async (
  query: string | number
): Promise<CreatureInfo | null> => {
  const db = new PrismaClient();
  if (typeof query === 'string') {
    const res = await db.creature.findFirst({
      where: {
        name: query,
      },
      include: {
        User: {
          select: {
            username: true,
          },
        },
        wieldingItems: {
          include: {
            Weapon: {
              include: {
                ammunition: true,
              },
            },
            Spell: true,
            Armor: true,
            Tool: true,
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
        },
        armorEquipped: {
          include: {
            Weapon: {
              include: {
                ammunition: true,
              },
            },
            Spell: true,
            Armor: true,
            Tool: true,
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
        },
        spellsPrepared: true,
        freeSpells: true,
        CreatureLimitedSpells: {
          include: {
            Spell: true,
          },
        },
        shieldEquipped: {
          include: {
            Weapon: {
              include: {
                ammunition: true,
              },
            },
            Spell: true,
            Armor: true,
            Tool: true,
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
        },
      },
    });
    await db.$disconnect();
    return res;
  } else {
    const res = await db.creature.findFirst({
      where: {
        id: query,
      },
      include: {
        User: {
          select: {
            username: true,
          },
        },
        wieldingItems: {
          include: {
            Weapon: {
              include: {
                ammunition: true,
              },
            },
            Spell: true,
            Armor: true,
            Tool: true,
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
        },
        armorEquipped: {
          include: {
            Weapon: {
              include: {
                ammunition: true,
              },
            },
            Spell: true,
            Armor: true,
            Tool: true,
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
        },
        spellsPrepared: true,
        CreatureLimitedSpells: {
          include: {
            Spell: true,
          },
        },
        freeSpells: true,
        shieldEquipped: {
          include: {
            Weapon: {
              include: {
                ammunition: true,
              },
            },
            Spell: true,
            Armor: true,
            Tool: true,
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
        },
      },
    });
    await db.$disconnect();
    return res;
  }
};

export const getCreatureChunk = async (
  queryInfo: QueryParams
): Promise<CreatureInfo[] | null> => {
  const db = new PrismaClient();
  const { query } = queryInfo;
  if (query === '') {
    const res = await db.creature.findMany({
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
      }),
      include: {
        User: {
          select: {
            username: true,
          },
        },
        wieldingItems: {
          include: {
            Weapon: {
              include: {
                ammunition: true,
              },
            },
            Spell: true,
            Armor: true,
            Tool: true,
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
        },
        armorEquipped: {
          include: {
            Weapon: {
              include: {
                ammunition: true,
              },
            },
            Spell: true,
            Armor: true,
            Tool: true,
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
        },
        spellsPrepared: true,
        freeSpells: true,
        CreatureLimitedSpells: {
          include: {
            Spell: true,
          },
        },
        shieldEquipped: {
          include: {
            Weapon: {
              include: {
                ammunition: true,
              },
            },
            Spell: true,
            Armor: true,
            Tool: true,
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
        },
      },
    });
    await db.$disconnect();
    return res;
  }

  const res: CreatureInfo[] = await db.creature.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
    }),

    include: {
      User: {
        select: {
          username: true,
        },
      },
      wieldingItems: {
        include: {
          Weapon: {
            include: {
              ammunition: true,
            },
          },
          Spell: true,
          Armor: true,
          Tool: true,
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
      },
      armorEquipped: {
        include: {
          Weapon: {
            include: {
              ammunition: true,
            },
          },
          Spell: true,
          Armor: true,
          Tool: true,
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
      },
      spellsPrepared: true,
      freeSpells: true,
      CreatureLimitedSpells: {
        include: {
          Spell: true,
        },
      },
      shieldEquipped: {
        include: {
          Weapon: {
            include: {
              ammunition: true,
            },
          },
          Spell: true,
          Armor: true,
          Tool: true,
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
      },
    },
  });

  const fuse = new Fuse(res, {
    keys: [
      { name: 'name', weight: 1 },
      { name: 'description', weight: 1 },
      { name: 'creatureType', weight: 0.5 },
      { name: 'size', weight: 0.5 },
      { name: 'flavorText', weight: 1 },
    ],
  });

  const results = fuse.search(query);
  const filtered = results.map((result) => result.item);

  await db.$disconnect();
  return filtered;
};
