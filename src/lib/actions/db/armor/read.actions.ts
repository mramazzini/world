'use server';
import { SingleDataQuery } from '@/lib/types/metadata';
import { ArmorInfo } from '@/lib/types/modelInfo';
import { QueryParams } from '@/lib/types/types';
import { generateQueryFields } from '@/lib/utils/generateQueryFields';
import { PrismaClient } from '@prisma/client';
import Fuse from 'fuse.js';
import { FeatureInfoIncludeTemplate } from '../dbIncludeTemplates';

export const getArmors = async (): Promise<ArmorInfo[]> => {
  const db = new PrismaClient();
  const res = await db.armor.findMany({
    include: {
      Features: {
        include: FeatureInfoIncludeTemplate,
      },
    },
  });
  await db.$disconnect();
  return res;
};

export const getArmor = async ({
  query,
  type,
}: SingleDataQuery): Promise<ArmorInfo | null> => {
  const db = new PrismaClient();
  const res = await db.armor.findFirst({
    where: {
      [type]: query,
    },
    include: {
      Features: {
        include: FeatureInfoIncludeTemplate,
      },
    },
  });
  await db.$disconnect();
  return res;
};

export const getArmorChunk = async (
  queryInfo: QueryParams
): Promise<ArmorInfo[] | null> => {
  const db = new PrismaClient();
  const { query } = queryInfo;
  if (query === '') {
    const res = await db.armor.findMany({
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
      }),
      include: {
        Features: {
          include: FeatureInfoIncludeTemplate,
        },
      },
    });
    await db.$disconnect();
    return res;
  }

  const res: ArmorInfo[] = await db.armor.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
    }),
    include: {
      Features: {
        include: FeatureInfoIncludeTemplate,
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
