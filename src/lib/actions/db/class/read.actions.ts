'use server';
import { QUERY_LIMIT } from '@/lib/globalVars';
import { QueryParams } from '@/lib/types/types';
import { generateQueryFields } from '@/lib/utils/generateQueryFields';
import { PrismaClient } from '@prisma/client';
import Fuse from 'fuse.js';
import { DBMetadata, SingleDataQuery } from '@/lib/types/metadata';
import { ClassInfo } from '@/lib/types/modelInfo';

const ClassInfoTemplate = {
  include: {
    SubClasses: true,
    SpellCasting: {
      include: {
        SpellList: true,
      },
    },
    Features: {
      include: {
        columnedFeatures: true,
      },
    },
    Choices: true,
    SpellcastingFeatures: {
      include: {
        columnedFeatures: true,
      },
    },
    MultiClassing: {
      include: {
        Choices: true,
      },
    },
    User: {
      select: {
        username: true,
      },
    },
  },
};

export async function getClassMetadata(): Promise<DBMetadata[]> {
  const db = new PrismaClient();
  const res = await db.class.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      flavorText: true,
      slug: true,
      updatedAt: true,
    },
  });
  await db.$disconnect();
  return res;
}

export async function getClasses(): Promise<ClassInfo[]> {
  const db = new PrismaClient();

  const res = await db.class.findMany(ClassInfoTemplate);
  await db.$disconnect();
  return res;
}

export async function getClass({
  query,
  type,
}: SingleDataQuery): Promise<ClassInfo | null> {
  const db = new PrismaClient();

  const res = await db.class.findFirst({
    where: {
      [type]: query,
    },
    ...ClassInfoTemplate,
  });
  await db.$disconnect();

  return res;
}

export async function getClassChunk(
  page: number,
  query: string
): Promise<ClassInfo[]> {
  const db = new PrismaClient();
  if (query === '') {
    const res = await db.class.findMany({
      take: QUERY_LIMIT,
      skip: page * QUERY_LIMIT,
      ...ClassInfoTemplate,
    });
    await db.$disconnect();
    return res;
  }
  const res: ClassInfo[] = await db.class.findMany(ClassInfoTemplate);
  const fuse = new Fuse(res, {
    keys: [
      { name: 'name', weight: 1 },
      { name: 'description', weight: 0.33 },
      { name: 'flavorText', weight: 0.5 },
      { name: 'Features.name', weight: 0.5 },
      { name: 'Features.description', weight: 0.33 },
    ],
  });
  const results = fuse.search(query);
  const resultsCopy = results.map((item) => item.item);
  await db.$disconnect();

  return resultsCopy.slice(
    page * QUERY_LIMIT,
    page * QUERY_LIMIT + QUERY_LIMIT
  );
}

export const getHomebrewClassChunk = async (
  queryInfo: QueryParams
): Promise<ClassInfo[]> => {
  const db = new PrismaClient();
  const { query, page } = queryInfo;
  if (query === '') {
    const res = await db.class.findMany({
      take: QUERY_LIMIT,
      skip: page * QUERY_LIMIT,
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
        additionalWhere: {
          userId: {
            not: null,
          },
        },
      }),
      ...ClassInfoTemplate,
    });
    await db.$disconnect();
    return res;
  }
  const res: ClassInfo[] = await db.class.findMany(ClassInfoTemplate);
  const fuse = new Fuse(res, {
    keys: [
      { name: 'name', weight: 1 },
      { name: 'description', weight: 0.33 },
      { name: 'flavorText', weight: 0.5 },
      { name: 'Features.name', weight: 0.5 },
      { name: 'Features.description', weight: 0.33 },
    ],
  });
  const results = fuse.search(query);
  const resultsCopy = results.map((item) => item.item);
  await db.$disconnect();

  return resultsCopy.slice(
    page * QUERY_LIMIT,
    page * QUERY_LIMIT + QUERY_LIMIT
  );
};
