import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
import { ItemsSeed } from '../Items/Items.seed';
import ItemFeatureSeed from '../Items/ItemFeatures.seed';
import createFeature from '../_helpers/createFeature';
import ItemToWeaponSeed from '../Items/Weapons/ItemToWeapon.seed';
import { Weapons } from '../Items/Weapons/Weapons.seed';

export const createItems = async (db: PrismaClient) => {
  //Create Items
  cinfo('Creating items');
  for (const Item of ItemsSeed) {
    try {
      cinfo('Creating item:', Item.name);

      await db.item.upsert({
        where: {
          id: Item.id,
        },
        update: Item,
        create: {
          ...Item,
        },
      });
      cinfo('Item created');
    } catch (error) {
      cerr('Error creating item:', Item.name, error);
      console.error(error);
      return;
    }
  }
  cinfo('Items created');

  //create item features
  for (const ItemFeature of ItemFeatureSeed) {
    cinfo('Creating item feature:', ItemFeature.name);
    if (!ItemFeature.id) throw new Error('Item Feature missing id');

    await createFeature(db, ItemFeature);
  }

  cinfo('Item features created');

  //Link Items to Weapons
  for (const ItemToWeapon of ItemToWeaponSeed) {
    try {
      cinfo(
        `Linking item with id ${ItemToWeapon.itemId} to weapon ${ItemToWeapon.weaponId}`
      );
      await db.itemWeaponData.upsert({
        where: {
          itemId_weaponId: {
            itemId: ItemToWeapon.itemId,
            weaponId: ItemToWeapon.weaponId,
          },
        },
        update: ItemToWeapon,
        create: ItemToWeapon,
      });
    } catch (error) {
      cerr('Error linking item to weapon:', error);
      console.error(error);
      return;
    }
  }

  cinfo('Linking ammunition to weapons');
  for (const Weapon of Weapons) {
    if (Weapon.ammunitionId) {
      try {
        cinfo('Linking ammunition to weapon:', Weapon.name);
        await db.weapon.update({
          where: {
            id: Weapon.id,
          },
          data: {
            ammunition: {
              connect: {
                id: Weapon.ammunitionId,
              },
            },
          },
        });
        cinfo('Ammunition linked to weapon');
      } catch (error) {
        cerr('Error linking ammunition to weapon:', Weapon.name, error);
        return;
      }
    }
  }
  cinfo('Ammunition linked to weapons');
};
