'use server';
import { QueryParams } from '@/lib/types/types';
// import { generateQueryFields } from '@/lib/utils/generateQueryFields';
import { PrismaClient } from '@prisma/client';
import Fuse from 'fuse.js';
import { DBMetadata, SingleDataQuery } from '@/lib/types/metadata';
import { CreatureInfo } from '@/lib/types/modelInfo';
import { FeatureInfoIncludeTemplate } from '../dbIncludeTemplates';
import { ItemInfoTemplate } from '../dbIncludeTemplates';

export const getCreaturesMetadata = async (): Promise<DBMetadata[]> => {
  const db = new PrismaClient();
  const res = await db.creature.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      flavorText: true,
      slug: true,
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
      wieldingItems: ItemInfoTemplate,
      armorEquipped: ItemInfoTemplate,
      spellsPrepared: true,
      freeSpells: true,
      CreatureLimitedSpells: {
        include: {
          Spell: true,
        },
      },
      Features: {
        include: FeatureInfoIncludeTemplate,
      },
      shieldEquipped: ItemInfoTemplate,
    },
  });
  await db.$disconnect();
  return res;
};

export const getCreature = async ({
  query,
  type,
}: SingleDataQuery): Promise<CreatureInfo | null> => {
  const db = new PrismaClient();

  const res = await db.creature.findFirst({
    include: {
      User: {
        select: {
          username: true,
        },
      },
      wieldingItems: ItemInfoTemplate,
      armorEquipped: ItemInfoTemplate,
      spellsPrepared: true,
      freeSpells: true,
      CreatureLimitedSpells: {
        include: {
          Spell: true,
        },
      },
      Features: {
        include: FeatureInfoIncludeTemplate,
      },
      shieldEquipped: ItemInfoTemplate,
    },
  });
  await db.$disconnect();
  return res;
};

export const getCreatureChunk = async (
  queryInfo: QueryParams
): Promise<CreatureInfo[] | null> => {
  const db = new PrismaClient();
  const { query } = queryInfo;
  if (query === '') {
    const res = await db.creature.findMany({
      include: {
        User: {
          select: {
            username: true,
          },
        },
        wieldingItems: ItemInfoTemplate,
        armorEquipped: ItemInfoTemplate,
        spellsPrepared: true,
        freeSpells: true,
        CreatureLimitedSpells: {
          include: {
            Spell: true,
          },
        },
        Features: {
          include: FeatureInfoIncludeTemplate,
        },
        shieldEquipped: ItemInfoTemplate,
      },
    });
    await db.$disconnect();
    return res;
  }

  const res: CreatureInfo[] = await db.creature.findMany({
    include: {
      User: {
        select: {
          username: true,
        },
      },
      wieldingItems: ItemInfoTemplate,
      armorEquipped: ItemInfoTemplate,
      spellsPrepared: true,
      freeSpells: true,
      CreatureLimitedSpells: {
        include: {
          Spell: true,
        },
      },
      Features: {
        include: FeatureInfoIncludeTemplate,
      },
      shieldEquipped: ItemInfoTemplate,
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
