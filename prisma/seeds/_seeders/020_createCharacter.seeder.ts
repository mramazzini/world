import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
import CharacterSeed from '../Character/Character.seed';
import { createCharacter as createChar } from '@/lib/actions/db/character/create.actions';
export const createCharacter = async (db: PrismaClient) => {
  //create test character
  cinfo('Creating test character');
  for (const Character of CharacterSeed) {
    try {
      cinfo('Creating character:', Character);
      await createChar(Character);
      cinfo('Character created');
    } catch (error) {
      cerr('Error creating character:', Character, error);
      throw new Error('Error creating character');
    }
  }
};
