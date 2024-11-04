import { cerr, cinfo } from '@/lib/utils/chalkLog';
import { PrismaClient } from '@prisma/client';
import { Weapons, WeaponSpecialFeatures } from '../Items/Weapons/Weapons.seed';
import WeaponPropertySeed from '../Items/Weapons/Properties/WeaponProperty.seed';
import WeaponToPropertySeed from '../Items/Weapons/Properties/WeaponToProperty.seed';

export const createWeapons = async (db: PrismaClient) => {
  // Create weapons
  cinfo('Creating weapons');

  for (const Weapon of Weapons) {
    try {
      cinfo('Creating weapon:', Weapon.name);
      Weapon.ammunitionId = undefined;
      await db.weapon.upsert({
        where: {
          id: Weapon.id,
        },
        update: Weapon,
        create: {
          ...Weapon,
        },
      });
      cinfo('Weapon created');
    } catch (error) {
      cerr('Error creating weapon:', Weapon.name, error);
      return;
    }
  }
  cinfo('Weapons created');

  // Create weapon properties
  for (const WeaponProperty of WeaponPropertySeed) {
    try {
      cinfo('Creating weapon property:', WeaponProperty.name);
      await db.weaponProperty.upsert({
        where: {
          id: WeaponProperty.id,
        },
        update: WeaponProperty,
        create: {
          ...WeaponProperty,
        },
      });
      cinfo('Weapon property created');
    } catch (error) {
      cerr('Error creating weapon property:', WeaponProperty.name, error);
      return;
    }
  }

  // Create weapon to property relationships
  cinfo('Creating weapon to property relationships');
  for (const WeaponPropertyInstance of WeaponToPropertySeed) {
    try {
      cinfo(
        'Creating weapon to property relationship:',
        WeaponPropertyInstance.weaponId
      );
      await db.weaponPropertyInstance.upsert({
        where: {
          weaponId_propertyId: {
            weaponId: WeaponPropertyInstance.weaponId,
            propertyId: WeaponPropertyInstance.propertyId,
          },
        },
        update: WeaponPropertyInstance,
        create: {
          ...WeaponPropertyInstance,
        },
      });
      cinfo('Weapon to property relationship created');
    } catch (error) {
      cerr(
        'Error creating weapon to property relationship:',
        WeaponPropertyInstance.weaponId,
        error
      );
      return;
    }
  }
  cinfo('Weapon to property relationships created');
  //create specaial features
  cinfo('Creating weapon special features');
  for (const WeaponSpecialFeature of WeaponSpecialFeatures) {
    try {
      cinfo('Creating weapon special feature:', WeaponSpecialFeature.name);
      await db.feature.upsert({
        where: {
          id: WeaponSpecialFeature.id,
        },
        update: WeaponSpecialFeature,
        create: {
          ...WeaponSpecialFeature,
        },
      });
      cinfo('Weapon special feature created');
    } catch (error) {
      cerr(
        'Error creating weapon special feature:',
        WeaponSpecialFeature.name,
        error
      );
      return;
    }
  }
};
