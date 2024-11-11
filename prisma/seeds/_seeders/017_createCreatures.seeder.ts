import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { ArmorClassProtocol, PrismaClient } from '@prisma/client';
import CreatureSeed from '../Creatures/Creature.seed';
import CreatureFeaturesSeed from '../Creatures/CreatureFeatures.seed';
import createFeature from '../_helpers/createFeature';
export const createCreatures = async (db: PrismaClient) => {
  //create creatures
  cinfo('Creating creatures');
  for (const Creature of CreatureSeed) {
    //ensure that if the creature is using natural armor, it specifies the protocol and the natural armor bonus
    if (
      !(
        (Creature.naturalArmorBonus &&
          Creature.armorClassProtocol === ArmorClassProtocol.NATURAL_ARMOR) ||
        Creature.armorClassProtocol == undefined
      )
    ) {
      cerr(
        'Creature is using natural armor but does not have a natural armor bonus'
      );
      throw new Error(
        'Creature is using natural armor but does not have a natural armor bonus'
      );
    }

    //check hp formula
    const sizeToHitDie = {
      TINY: 4,
      SMALL: 6,
      MEDIUM: 8,
      LARGE: 10,
      HUGE: 12,
      GARGANTUAN: 20,
    };
    const hitDie = sizeToHitDie[Creature.size];
    if (!hitDie) {
      cerr('Invalid size for creature');
      throw new Error('Invalid size for creature');
    }

    try {
      await db.creature.upsert({
        where: {
          id: Creature.id,
        },
        update: Creature,
        create: Creature,
      });
    } catch (error) {
      cerr('Error creating creature', error);
      throw new Error('Error creating creature');
    }
  }

  //create creature features
  cinfo('Creatures created');
  cinfo('Creating Creature features');
  for (const CreatureFeature of CreatureFeaturesSeed) {
    try {
      cinfo('Creating creature features:', CreatureFeature.name);
      if (!CreatureFeature.creatureId) {
        cerr('Creature missing creatureId field:', CreatureFeature.name);
        throw new Error('Creature missing creatureId field');
      }
      await createFeature(db, CreatureFeature);
      cinfo('Creature Feature created');
    } catch (error) {
      cerr('Error creating creature feature:', CreatureFeature.name, error);
      throw new Error('Error creating creature feature');
    }
  }
};
