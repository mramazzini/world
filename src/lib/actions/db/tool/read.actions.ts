'use server';
import { SingleDataQuery } from '@/lib/types/metadata';
import { ToolInfo } from '@/lib/types/modelInfo';
import { QueryParams } from '@/lib/types/types';
import { generateQueryFields } from '@/lib/utils/generateQueryFields';
import { PrismaClient, ToolGroup } from '@prisma/client';
import Fuse from 'fuse.js';
import { FeatureInfoIncludeTemplate } from '../dbIncludeTemplates';

export const getTools = async (): Promise<ToolInfo[]> => {
  const db = new PrismaClient();
  const res = await db.tool.findMany({
    include: {
      Features: {
        include: {
          Effects: {
            include: {
              Choices: true,
              EffectToSpell: {
                include: {
                  Spell: true,
                },
              },
              EffectToResource: {
                include: {
                  Resource: true,
                },
              },
              EffectGrantsGroup: {
                include: {
                  FeatureGroup: {
                    include: {
                      FeaturesInGroup: {
                        include: {
                          Effects: {
                            include: {
                              Choices: true,
                              EffectToSpell: {
                                include: {
                                  Spell: true,
                                },
                              },
                              EffectToResource: {
                                include: {
                                  Resource: true,
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
  await db.$disconnect();
  return res;
};

export const getTool = async ({
  query,
  type,
}: SingleDataQuery): Promise<ToolInfo | null> => {
  const db = new PrismaClient();

  const res = await db.tool.findFirst({
    where: {
      [type]: query,
    },
    include: {
      Features: {
        include: {
          Effects: {
            include: {
              Choices: true,
              EffectToSpell: {
                include: {
                  Spell: true,
                },
              },
              EffectToResource: {
                include: {
                  Resource: true,
                },
              },
              EffectGrantsGroup: {
                include: {
                  FeatureGroup: {
                    include: {
                      FeaturesInGroup: {
                        include: {
                          Effects: {
                            include: {
                              Choices: true,
                              EffectToSpell: {
                                include: {
                                  Spell: true,
                                },
                              },
                              EffectToResource: {
                                include: {
                                  Resource: true,
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
  await db.$disconnect();
  return res;
};

export const getToolsByGroup = async (group: ToolGroup) => {
  const db = new PrismaClient();
  try {
    const res = await db.tool.findMany({
      where: {
        ToolGroup: group,
      },
      include: {
        Features: {
          include: {
            Effects: {
              include: {
                Choices: true,
                EffectToSpell: {
                  include: {
                    Spell: true,
                  },
                },
                EffectToResource: {
                  include: {
                    Resource: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    console.log(res.map((r) => r.name));
    return res;
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    await db.$disconnect();
  }
};

export const getToolChunk = async (
  queryInfo: QueryParams
): Promise<ToolInfo[] | null> => {
  const db = new PrismaClient();
  const { query } = queryInfo;
  if (query === '') {
    const res = await db.tool.findMany({
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

  const res: ToolInfo[] = await db.tool.findMany({
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
