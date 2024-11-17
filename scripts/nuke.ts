//clear database

import { cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';

async function nuke() {
  const db = new PrismaClient();
  cinfo('Clearing database');
  await db.choice.deleteMany({});
  await db.character.deleteMany({});
  await db.subClassColumnedFeature.deleteMany({});
  await db.columnedFeature.deleteMany({});
  await db.feature.deleteMany({});
  await db.creatureLimitedSpell.deleteMany({});
  await db.spellList.deleteMany({});
  await db.spell.deleteMany({});

  await db.subClass.deleteMany({});
  await db.class.deleteMany({});

  await db.background.deleteMany({});
  await db.subSpecies.deleteMany({});
  await db.species.deleteMany({});

  await db.armor.deleteMany({});
  await db.equipmentPack.deleteMany({});
  await db.tool.deleteMany({});
  await db.weaponPropertyInstance.deleteMany({});
  await db.weaponProperty.deleteMany({});
  await db.itemWeaponData.deleteMany({});
  await db.weapon.deleteMany({});
  await db.creature.deleteMany({});
  await db.item.deleteMany({});

  cinfo('Database cleared');
  await db.$disconnect();
}

nuke();
