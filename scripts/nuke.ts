//clear database

import { cinfo } from "@/lib/utils/chalkLog";
import { PrismaClient } from "@prisma/client";

async function nuke() {
  const db = new PrismaClient();
  cinfo("Clearing database");
  await db.spellListToSpell.deleteMany({});
  await db.spellList.deleteMany({});
  await db.spell.deleteMany({});
  await db.feature.deleteMany({});
  await db.subClassFeature.deleteMany({});
  await db.subClass.deleteMany({});
  await db.class.deleteMany({});
  await db.casterType.deleteMany({});
  await db.weaponToProperty.deleteMany({});
  await db.weapon.deleteMany({});
  await db.weaponProperty.deleteMany({});
  await db.backgroundFeature.deleteMany({});
  await db.background.deleteMany({});

  cinfo("Database cleared");
  await db.$disconnect();
}

nuke();
