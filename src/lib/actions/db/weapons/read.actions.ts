'use server';
import { SingleDataQuery } from '@/lib/types/metadata';
import { WeaponInfo } from '@/lib/types/modelInfo';
import { QueryParams } from '@/lib/types/types';
import { generateQueryFields } from '@/lib/utils/generateQueryFields';
import { PrismaClient } from '@prisma/client';
import Fuse from 'fuse.js';
import { FeatureInfoIncludeTemplate } from '../dbIncludeTemplates';

export const getWeapons = async (): Promise<WeaponInfo[]> => {
  const db = new PrismaClient();
  const res = await db.weapon.findMany({
    include: {
      ammunition: true,
      SpecialProperties: {
        include: FeatureInfoIncludeTemplate,
      },
      WeaponPropertyInstance: {
        include: {
          Property: true,
        },
      },
    },
  });
  await db.$disconnect();
  return res;
};

export const getWeapon = async ({
  query,
  type,
}: SingleDataQuery): Promise<WeaponInfo | null> => {
  const db = new PrismaClient();
  try {
    const res = await db.weapon.findFirst({
      where: {
        [type]: query,
      },
      include: {
        SpecialProperties: {
          include: FeatureInfoIncludeTemplate,
        },
        ammunition: true,
        WeaponPropertyInstance: {
          include: {
            Property: true,
          },
        },
      },
    });
    return res;
  } catch (error) {
    console.error('Error getting weapon', error);
    return null;
  } finally {
    await db.$disconnect();
  }
};

export const getWeaponChunk = async (
  queryInfo: QueryParams
): Promise<WeaponInfo[] | null> => {
  const db = new PrismaClient();
  const { query } = queryInfo;
  if (query === '') {
    const res = await db.weapon.findMany({
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
      }),
      include: {
        SpecialProperties: {
          include: FeatureInfoIncludeTemplate,
        },
        ammunition: true,
        WeaponPropertyInstance: {
          include: {
            Property: true,
          },
        },
      },
    });
    await db.$disconnect();
    return res;
  }

  const res: WeaponInfo[] = await db.weapon.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
    }),
    include: {
      SpecialProperties: {
        include: FeatureInfoIncludeTemplate,
      },
      ammunition: true,
      WeaponPropertyInstance: {
        include: {
          Property: true,
        },
      },
    },
  });

  const fuse = new Fuse(res, {
    keys: [{ name: 'name', weight: 1 }],
  });

  const results = fuse.search(query);
  const filtered = results.map((result) => result.item);

  await db.$disconnect();
  return filtered;
};
