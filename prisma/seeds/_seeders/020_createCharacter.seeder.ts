import { cerr, cinfo } from "@/lib/utils/chalkLog";
import { PrismaClient } from "@prisma/client";
import CharacterSeed from "../Character/Character.seed";
export const createCharacter = async (db: PrismaClient) => {
  //create test character
  cinfo("Creating test character");
  for (const Character of CharacterSeed) {
    try {
      cinfo("Creating character:", Character.name);
      await db.character.create({
        data: Character,
      });
      cinfo("Character created");
    } catch (error) {
      cerr("Error creating character:", Character.name, error);
      return;
    }
  }
};
