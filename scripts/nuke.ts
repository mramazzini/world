//clear database

import { cinfo } from "@/lib/utils/chalkLog";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function nuke() {
  cinfo("Clearing database");
  await db.feature.deleteMany({});
  await db.subClassFeature.deleteMany({});
  await db.subClass.deleteMany({});
  await db.class.deleteMany({});
  await db.casterType.deleteMany({});
  await db.weaponToProperty.deleteMany({});
  await db.weapon.deleteMany({});
  await db.weaponProperty.deleteMany({});
  await db.user.deleteMany({});
  cinfo("Database cleared");
}

nuke();
