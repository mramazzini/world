'use server';
import { SingleDataQuery } from '@/lib/types/metadata';
import { WeaponInfo } from '@/lib/types/modelInfo';
import { QueryParams } from '@/lib/types/types';
import { generateQueryFields } from '@/lib/utils/generateQueryFields';
import { PrismaClient } from '@prisma/client';
import Fuse from 'fuse.js';

export const getWeapons = async (): Promise<WeaponInfo[]> => {
  const db = new PrismaClient();
  const res = await db.weapon.findMany({
    include: {
      ammunition: true,
      SpecialProperties: true,
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

  const res = await db.weapon.findFirst({
    where: {
      [type]: query,
    },
    include: {
      SpecialProperties: true,
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
        SpecialProperties: true,
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
      SpecialProperties: true,
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
