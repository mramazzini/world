'use server';
import { DBMetadata } from '@/lib/types/metadata';
import { FeatInfo } from '@/lib/types/modelInfo';
import { QueryParams } from '@/lib/types/types';
import { generateQueryFields } from '@/lib/utils/generateQueryFields';
import { PrismaClient } from '@prisma/client';

import Fuse from 'fuse.js';

export const getFeatsMetadata = async (): Promise<DBMetadata[]> => {
  const db = new PrismaClient();
  const res = await db.feat.findMany({
    select: {
      id: true,
      name: true,
      updatedAt: true,
      flavorText: true,
    },
  });
  await db.$disconnect();
  return res.map((feat) => ({
    ...feat,
    description: feat.flavorText,
  }));
};

export const getFeats = async (): Promise<FeatInfo[]> => {
  const db = new PrismaClient();
  const res = await db.feat.findMany({
    include: {
      Features: true,
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

export const getFeat = async (
  query: string | number
): Promise<FeatInfo | null> => {
  const db = new PrismaClient();
  if (typeof query === 'string') {
    const res = await db.feat.findFirst({
      where: {
        name: query,
      },
      include: {
        Features: true,
        User: {
          select: {
            username: true,
          },
        },
      },
    });
    await db.$disconnect();
    return res;
  } else {
    const res = await db.feat.findFirst({
      where: {
        id: query,
      },
      include: {
        Features: true,
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
};

export const getFeatChunk = async (
  queryInfo: QueryParams
): Promise<FeatInfo[] | null> => {
  const db = new PrismaClient();
  const { query } = queryInfo;
  if (query === '') {
    const res = await db.feat.findMany({
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
      }),
      include: {
        Features: true,
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

  const res: FeatInfo[] = await db.feat.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
    }),

    include: {
      Features: true,
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
    ],
  });

  const results = fuse.search(query);
  const filtered = results.map((result) => result.item);

  await db.$disconnect();
  return filtered;
};
