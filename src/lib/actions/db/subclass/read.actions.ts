'use server';
import { QUERY_LIMIT } from '@/lib/globalVars';
import { QueryParams } from '@/lib/types/types';
import { generateQueryFields } from '@/lib/utils/generateQueryFields';
import { Prisma, PrismaClient } from '@prisma/client';
import Fuse from 'fuse.js';
import { DBMetadata, SingleDataQuery } from '@/lib/types/metadata';
import { SubClassInfo } from '@/lib/types/modelInfo';

export const getSubclassMetadata = async (): Promise<DBMetadata[]> => {
  const db = new PrismaClient();
  const res = await db.subClass.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      slug: true,

      flavorText: true,
    },
  });
  await db.$disconnect();
  return res;
};

export async function getSubclasses({
  homebrew,
}: {
  homebrew: boolean;
}): Promise<SubClassInfo[]> {
  const db = new PrismaClient();
  if (homebrew) {
    const res = await db.subClass.findMany({
      where: {
        userId: {
          not: null,
        },
      },
      include: {
        SpellCastingFeatures: {
          include: {
            SubClassColumnedFeature: true,
          },
        },
        Features: {
          include: {
            SubClassColumnedFeature: true,
          },
        },
        Class: {
          select: {
            slug: true,
            name: true,
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
  const res = await db.subClass.findMany({
    where: {
      userId: {
        equals: null,
      },
    },
    include: {
      SpellCastingFeatures: {
        include: {
          SubClassColumnedFeature: true,
        },
      },
      Features: {
        include: {
          SubClassColumnedFeature: true,
        },
      },
      Class: {
        select: {
          slug: true,
          name: true,
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

export async function getSubclassChunkByClass(
  queryInfo: QueryParams,
  className: string
): Promise<SubClassInfo[] | null> {
  const db = new PrismaClient();
  const { query, page } = queryInfo;
  if (query === '') {
    const res = await db.subClass.findMany({
      take: QUERY_LIMIT,
      skip: page * QUERY_LIMIT,
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
        additionalWhere: {
          Class: {
            name: className,
          },
          userId: {
            equals: null,
          },
        },
      }),
      include: {
        SpellCastingFeatures: {
          include: {
            SubClassColumnedFeature: true,
          },
        },
        Features: {
          include: {
            SubClassColumnedFeature: true,
          },
        },
        Class: {
          select: {
            slug: true,
            name: true,
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
  const res = await db.subClass.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
      additionalWhere: {
        Class: {
          name: className,
        },
        userId: {
          equals: null,
        },
      },
    }),
    include: {
      SpellCastingFeatures: {
        include: {
          SubClassColumnedFeature: true,
        },
      },
      Features: {
        include: {
          SubClassColumnedFeature: true,
        },
      },
      Class: {
        select: {
          slug: true,
          name: true,
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
      { name: 'description', weight: 0.33 },
      { name: 'flavorText', weight: 0.5 },
      { name: 'SubClassFeatures.name', weight: 0.5 },
      { name: 'SubClassFeatures.description', weight: 0.33 },
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

export async function getHomebrewSubclassChunk(
  queryInfo: QueryParams
): Promise<SubClassInfo[]> {
  const db = new PrismaClient();
  const { query, page } = queryInfo;
  if (query === '') {
    const res = await db.subClass.findMany({
      take: QUERY_LIMIT,
      skip: page * QUERY_LIMIT,
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
        additionalWhere: {
          userId: {
            not: null,
          },
        } as Prisma.SubClassWhereInput,
      }),
      include: {
        SpellCastingFeatures: {
          include: {
            SubClassColumnedFeature: true,
          },
        },
        Features: {
          include: {
            SubClassColumnedFeature: true,
          },
        },
        Class: {
          select: {
            slug: true,
            name: true,
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
  const res = await db.subClass.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
      additionalWhere: {
        userId: {
          not: null,
        },
      } as Prisma.SubClassWhereInput,
    }),
    include: {
      SpellCastingFeatures: {
        include: {
          SubClassColumnedFeature: true,
        },
      },
      Features: {
        include: {
          SubClassColumnedFeature: true,
        },
      },
      Class: {
        select: {
          slug: true,
          name: true,
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
      { name: 'description', weight: 0.33 },
      { name: 'flavorText', weight: 0.5 },
      { name: 'SubClassFeatures.name', weight: 0.5 },
      { name: 'SubClassFeatures.description', weight: 0.33 },
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

export async function getSubclass({
  query,
  type,
}: SingleDataQuery): Promise<SubClassInfo | null> {
  const db = new PrismaClient();
  try {
    const res = await db.subClass.findFirst({
      where: {
        [type]: query,
      },
      include: {
        SpellCastingFeatures: {
          include: {
            SubClassColumnedFeature: true,
          },
        },
        Features: {
          include: {
            SubClassColumnedFeature: true,
          },
        },
        Class: {
          select: {
            slug: true,
            name: true,
          },
        },
        User: {
          select: {
            username: true,
          },
        },
      },
    });
    return res;
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    await db.$disconnect();
  }
}

export const getSubclassesByClass = async ({
  query,
  type,
}: SingleDataQuery): Promise<SubClassInfo[]> => {
  const db = new PrismaClient();

  const res = await db.subClass.findMany({
    where: {
      Class: {
        [type]: query,
      },
    },
    include: {
      SpellCastingFeatures: {
        include: {
          SubClassColumnedFeature: true,
        },
      },
      Features: {
        include: {
          SubClassColumnedFeature: true,
        },
      },
      User: {
        select: {
          username: true,
        },
      },
      Class: {
        select: {
          slug: true,
          name: true,
        },
      },
    },
  });
  await db.$disconnect();
  return res;
};

// get top 10 subclasses based on query
export async function getSubclassChunk(
  queryInfo: QueryParams
): Promise<SubClassInfo[] | null> {
  const db = new PrismaClient();
  const { query, page } = queryInfo;
  if (query === '') {
    const res = await db.subClass.findMany({
      where: generateQueryFields({
        fields: queryInfo.searchFields,
        relationalFields: queryInfo.relationalFields,
      }),
      take: QUERY_LIMIT,
      skip: page * QUERY_LIMIT,
      include: {
        SpellCastingFeatures: {
          include: {
            SubClassColumnedFeature: true,
          },
        },
        Features: {
          include: {
            SubClassColumnedFeature: true,
          },
        },
        User: {
          select: {
            username: true,
          },
        },
        Class: {
          select: {
            slug: true,
            name: true,
          },
        },
      },
    });
    await db.$disconnect();
    return res;
  }

  const res = await db.subClass.findMany({
    where: generateQueryFields({
      fields: queryInfo.searchFields,
      relationalFields: queryInfo.relationalFields,
    }),
    include: {
      SpellCastingFeatures: {
        include: {
          SubClassColumnedFeature: true,
        },
      },
      Features: {
        include: {
          SubClassColumnedFeature: true,
        },
      },
      User: {
        select: {
          username: true,
        },
      },
      Class: {
        select: {
          slug: true,
          name: true,
        },
      },
    },
  });
  const fuse = new Fuse(res, {
    keys: [
      { name: 'name', weight: 1 },
      { name: 'description', weight: 0.33 },
      { name: 'flavorText', weight: 0.5 },
      { name: 'SubClassFeatures.name', weight: 0.5 },
      { name: 'SubClassFeatures.description', weight: 0.33 },
    ],
  });
  const results = fuse.search(query);
  await db.$disconnect();

  const resultsCopy: SubClassInfo[] = results.map((item) => item.item);

  return resultsCopy.slice(
    page * QUERY_LIMIT,
    page * QUERY_LIMIT + QUERY_LIMIT
  );
}
