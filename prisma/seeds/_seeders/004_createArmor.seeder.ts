import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
import { ArmorSeed } from '../Items/Armor/Armor.seed';
import ArmorFeaturesSeed from '../Items/Armor/ArmorFeatures.seed';
import createFeature from '../_helpers/createFeature';

//Upsert Armor
//Upsert Features
//link Features to armor

export const createArmor = async (db: PrismaClient) => {
  //Create Armor
  cinfo('Creating armor');
  for (const Armor of ArmorSeed) {
    try {
      cinfo('Creating armor:', Armor.name);
      if (!Armor.id) throw new Error('Armor missing id');

      await db.armor.upsert({
        where: {
          id: Armor.id,
        },
        update: Armor,
        create: Armor,
      });
      cinfo('Armor created');
    } catch (error) {
      cerr('Error creating armor:', Armor.name, error);
      throw new Error('Error creating armor');
    }
  }
  cinfo('Armor created');

  cinfo('Creating armor features');
  for (const ArmorFeature of ArmorFeaturesSeed) {
    cinfo('Creating armor feature:', ArmorFeature.name);
    if (!ArmorFeature.id) throw new Error('Armor Feature missing id');

    await createFeature(db, ArmorFeature);
  }
  cinfo('Armor features created');
};
