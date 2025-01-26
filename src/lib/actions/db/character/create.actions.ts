'use server';

import {
  BackgroundID,
  ClassID,
  SpeciesID,
  SubSpeciesID,
} from '@/lib/types/types';
import { Alignment, PrismaClient } from '@prisma/client';
import { v4 } from 'uuid';

export interface CreateCharacterParams {
  name: string;
  speciesId: SpeciesID;
  classId: ClassID;
  alignment: Alignment;
  backgroundId: BackgroundID;
  userId: string;
  variantId?: SubSpeciesID;
}
export const createCharacter = async (
  params: CreateCharacterParams
): Promise<{
  id: string;
  result: 'success' | 'error';
}> => {
  const db = new PrismaClient();

  const _class = await db.class.findUnique({
    where: { id: params.classId },
  });

  const background = await db.background.findUnique({
    where: { id: params.backgroundId },
  });

  if (!_class) {
    console.error('Class not found');
    return {
      id: '',
      result: 'error',
    };
  }

  if (!background) {
    console.error('Background not found');
    return {
      id: '',
      result: 'error',
    };
  }

  try {
    const res = await db.character.create({
      data: {
        id: v4(),
        CharacterToClass: {
          create: {
            Class: {
              connect: { id: params.classId },
            },
            primaryClass: true,
            levelsInClass: 1,
          },
        },
        Background: {
          connect: { id: params.backgroundId },
        },
        User: {
          connect: { id: params.userId },
        },
        Species: {
          connect: { id: params.speciesId },
        },
      },
    });
    // If a variant was selected, connect it to the character

    if (params.variantId) {
      await db.character.update({
        where: { id: res.id },
        data: {
          SubSpecies: {
            connect: { id: params.variantId },
          },
        },
      });
    }
    //initialize the character's state
    await db.characterState.create({
      data: {
        id: res.id,
        alignment: params.alignment,
        name: params.name,
        currentHp: _class.hitDie,
        tempHp: 0,
        inspirationRolls: 0,
        deathSavesFail: 0,
        deathSavesSuccess: 0,
        hitDieUsedSinceLastRest: [],
        inventory: [..._class.freeItemIds, ...background.freeEquipment],
        resourcesUsed: {},
        spellSlotsUsedSinceLastRefresh: {},
        pendingLinks: [],
        preparedSpellsIds: [],
        exhaustion: 0,
        weaponEquippedIds: [],
        lastSavedIsoString: new Date().toISOString(),
        notes: [],

        biography: '',
        baseCHA: 10,
        baseCON: 10,
        baseDEX: 10,
        baseINT: 10,
        baseSTR: 10,
        baseWIS: 10,
        conditions: [],
      },
    });
    return {
      id: res.id,
      result: 'success',
    };
  } catch (error) {
    console.error(error);
    return {
      id: '',
      result: 'error',
    };
  } finally {
    await db.$disconnect();
  }
};
