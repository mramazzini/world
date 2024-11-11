import { PrismaClient } from '@prisma/client';
import CreatureToItemsSeed from '../Creatures/CreatureToItems.seed';
import { cerr, cinfo } from '@/lib/utils/chalkLog';

export const linkCreatureToItems = async (db: PrismaClient) => {
  cinfo('Linking creatures to items');
  for (const CreatureToItem of CreatureToItemsSeed) {
    cinfo(
      'Creature with id: ',
      CreatureToItem.creatureID,
      ' has an item with id: ',
      CreatureToItem.itemID
    );
    try {
      await db.creature.update({
        where: {
          id: CreatureToItem.creatureID,
        },
        data: {
          wieldingItems: {
            connect: {
              id: CreatureToItem.itemID,
            },
          },
        },
      });
    } catch (error) {
      cerr('Error linking creature to item', error);
      throw new Error('Error linking creature to item');
    }
  }
};
