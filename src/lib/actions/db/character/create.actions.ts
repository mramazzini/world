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

  try {
    const res = await db.character.create({
      data: {
        id: v4(),
        name: params.name,
        alignment: params.alignment,
        CharacterToClass: {
          create: {
            Class: {
              connect: { id: params.classId },
            },
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
        biography: '',
        inspirationRolls: 0,
        baseSTR: 10,
        baseDEX: 10,
        baseCON: 10,
        baseINT: 10,
        baseWIS: 10,
        baseCHA: 10,
        deathSavesFail: 0,
        deathSavesSuccess: 0,
        exhaustion: 0,

        maxHp: 0,
        currentHp: 0,
        tempHp: 0,
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

    console.log(res);
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
