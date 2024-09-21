import { cerr, cinfo, cwarn } from "@/lib/utils/chalkLog";
import { Prisma, PrismaClient } from "@prisma/client";
import { SpellSeed } from "../Spells/spells.seed";

export const createSpells = async (db: PrismaClient) => {
  cinfo("Creating spells");
  for (const Spell of SpellSeed) {
    try {
      cinfo("Creating spell:", Spell.name);
      if (!verifySpell(Spell)) {
        cerr("Error verifying spell:", Spell.name);
        return;
      }
      await db.spell.upsert({
        where: {
          id: Spell.id,
        },
        update: {},
        create: Spell,
      });
      cinfo("Spell created");
    } catch (error) {
      cerr("Error creating spell:", Spell.name, error);
      return;
    }
  }
  cinfo("Spells created");
};

const verifySpell = (spell: Prisma.SpellCreateManyInput) => {
  //since the spells were scraped we need to verify the data is good
  if (!spell.name) {
    cwarn("Spell missing name field:", spell);
    return false;
  }

  if (!spell.school) {
    cwarn("Spell missing school field:", spell);
    return false;
  }
  if (!spell.castingTime) {
    cwarn("Spell missing castingTime field:", spell);
    return false;
  }
  if (!spell.range) {
    cwarn("Spell missing range field:", spell);
    return false;
  }
  if (!spell.duration) {
    cwarn("Spell missing duration field:", spell);
    return false;
  }
  if (!spell.description) {
    cwarn("Spell missing description field:", spell);
    return false;
  }
  if (!spell.source) {
    cwarn("Spell missing source field:", spell);
    return false;
  }
  return true;
};
