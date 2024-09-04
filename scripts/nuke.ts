//clear database

import { cinfo } from "@/lib/utils/chalkLog";
import { PrismaClient } from "@prisma/client";

async function nuke() {
  const db = new PrismaClient();
  cinfo("Clearing database");
  await db.character.deleteMany({});
  await db.spellList.deleteMany({});
  await db.spell.deleteMany({});

  await db.subClass.deleteMany({});
  await db.class.deleteMany({});

  await db.background.deleteMany({});
  await db.racialTraits.deleteMany({});
  await db.raceVariant.deleteMany({});
  await db.race.deleteMany({});

  await db.armor.deleteMany({});
  await db.equipmentPack.deleteMany({});
  await db.item.deleteMany({});
  await db.tool.deleteMany({});
  await db.weapon.deleteMany({});

  cinfo("Database cleared");
  await db.$disconnect();
}

nuke();
