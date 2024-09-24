import { cerr, cinfo, cwarn } from "@/lib/utils/chalkLog";
import { SpellLists } from "../Spells/SpellLists/SpellLists.seed";
import { PrismaClient } from "@prisma/client";

export const createSpellList = async (db: PrismaClient) => {
  //create spell lists
  cinfo("Creating spell lists");
  for (const SpellList of SpellLists) {
    try {
      cinfo("Creating spell list:", SpellList.name);
      await db.spellList.upsert({
        where: {
          id: SpellList.id,
        },
        update: SpellList,
        create: SpellList,
      });
      cinfo("Spell list created");
    } catch (error) {
      cerr("Error creating spell list:", SpellList.name, error);
      return;
    }
  }
  cinfo("Spell lists created");
};
