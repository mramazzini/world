import { WeaponGroup } from '@prisma/client';

export const WeaponGroupToText = (weaponGroup: WeaponGroup): string => {
  switch (weaponGroup) {
    case WeaponGroup.SIMPLE_MELEE:
      return 'Simple Melee Weapons';
    case WeaponGroup.SIMPLE_RANGED:
      return 'Simple Ranged Weapons';
    case WeaponGroup.MARTIAL_MELEE:
      return 'Martial Melee Weapons';
    case WeaponGroup.MARTIAL_RANGED:
      return 'Martial Ranged Weapons';
    case WeaponGroup.ALL_MARTIAL:
      return 'All Martial Weapons';
    case WeaponGroup.ALL_SIMPLE:
      return 'All Simple Weapons';
    case WeaponGroup.ALL_RANGED:
      return 'All Ranged Weapons';
    case WeaponGroup.ALL_MELEE:
      return 'All Melee Weapons';
    case WeaponGroup.ALL_WEAPONS:
      return 'All Weapons';
  }
};
