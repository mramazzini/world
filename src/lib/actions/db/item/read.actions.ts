'use server';
import { QueryParams } from '@/lib/types/types';
import { generateQueryFields } from '@/lib/utils/generateQueryFields';
import {
  ItemTypes,
  PrismaClient,
  ToolGroup,
  WeaponGroup,
} from '@prisma/client';
import Fuse from 'fuse.js';
import { DBMetadata, SingleDataQuery } from '@/lib/types/metadata';
import { ItemInfo } from '@/lib/types/modelInfo';

const ItemInfoTemplate = {
  include: {
    ItemWeaponData: {
      include: {
        Weapon: {
          include: {
            ammunition: true,
            SpecialProperties: {
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
    Armor: {
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
    },
    Tool: {
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
};

export const getItemsMetadata = async (): Promise<DBMetadata[]> => {
  const db = new PrismaClient();
  const res = await db.item.findMany({
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

export const getItemsByToolGroup = async (
  group: ToolGroup
): Promise<ItemInfo[]> => {
  const db = new PrismaClient();
  try {
    const res = await db.item.findMany({
      where: {
        Tool: {
          ToolGroup: group,
        },
      },
      ...ItemInfoTemplate,
    });
    return res;
  } catch (error) {
    console.error('Error getting items by tool group', error);
    return [];
  } finally {
    await db.$disconnect();
  }
};

export const getItemsByWeaponGroup = async (
  group: WeaponGroup
): Promise<ItemInfo[]> => {
  const db = new PrismaClient();
  const obj: {
    isSimple?: boolean | undefined;
    isRanged?: boolean | undefined;
  } = {};

  switch (group) {
    case WeaponGroup.ALL_MARTIAL:
      obj.isSimple = false;
      break;
    case WeaponGroup.ALL_SIMPLE:
      obj.isSimple = true;
      break;
    case WeaponGroup.ALL_RANGED:
      obj.isRanged = true;
      break;
    case WeaponGroup.ALL_MELEE:
      obj.isRanged = false;
      break;
    case WeaponGroup.MARTIAL_MELEE:
      obj.isSimple = false;
      obj.isRanged = false;
      break;
    case WeaponGroup.MARTIAL_RANGED:
      obj.isSimple = false;
      obj.isRanged = true;
      break;
    case WeaponGroup.SIMPLE_MELEE:
      obj.isSimple = true;
      obj.isRanged = false;
      break;
    case WeaponGroup.SIMPLE_RANGED:
      obj.isSimple = true;
      obj.isRanged = true;
      break;
    default:
      break;
  }

  try {
    const res = await db.item.findMany({
      ...ItemInfoTemplate,
      where: {
        ItemWeaponData: {
          Weapon: {
            ...obj,
          },
        },
      },
    });

    return res;
  } catch (error) {
    console.error('Error getting items by weapon group', error);
    return [];
  } finally {
    await db.$disconnect();
  }
};

export const getItemsByType = async (type: ItemTypes): Promise<ItemInfo[]> => {
  const db = new PrismaClient();
  try {
    const res = await db.item.findMany({
      where: {
        types: {
          has: type,
        },
      },
      ...ItemInfoTemplate,
    });
    return res;
  } catch (error) {
    console.error('Error getting items by type', error);
    return [];
  } finally {
    await db.$disconnect();
  }
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
              SpecialProperties: {
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
      Armor: {
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
      },
      Tool: {
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

  try {
    const res = await db.item.findFirst({
      where: {
        [type]: query,
      },
      ...ItemInfoTemplate,
    });

    return res;
  } catch (error) {
    console.error('Error getting item', error);
    return null;
  } finally {
    await db.$disconnect();
  }
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
      ...ItemInfoTemplate,
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
              SpecialProperties: {
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
      Armor: {
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
      },
      Tool: {
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
