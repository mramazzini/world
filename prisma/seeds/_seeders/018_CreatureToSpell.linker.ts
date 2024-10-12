import { PrismaClient } from "@prisma/client";
import CreatureToSpellSeed from "../Creatures/CreatureToSpell.seed";
import { cerr, cinfo } from "@/lib/utils/chalkLog";

export const linkCreatureToSpells = async (db: PrismaClient) => {
  cinfo("Linking creatures to spells");
  for (const CreatureToSpell of CreatureToSpellSeed) {
    try {
      if (CreatureToSpell.free) {
        cinfo(
          "Creature with id: ",
          CreatureToSpell.creatureId,
          " has a free spell with id: ",
          CreatureToSpell.spellId
        );
        await db.creature.update({
          where: {
            id: CreatureToSpell.creatureId,
          },
          data: {
            freeSpells: {
              connect: {
                id: CreatureToSpell.spellId,
              },
            },
          },
        });
        continue;
      }
      cinfo(
        "Creature with id: ",
        CreatureToSpell.creatureId,
        " has a spell with id: ",
        CreatureToSpell.spellId
      );
      await db.creature.update({
        where: {
          id: CreatureToSpell.creatureId,
        },
        data: {
          spellsPrepared: {
            connect: {
              id: CreatureToSpell.spellId,
            },
          },
        },
      });
    } catch (error) {
      cerr("Error linking creature to spell", error);
    }
  }
};
