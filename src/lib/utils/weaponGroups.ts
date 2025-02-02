import { Weapon, WeaponGroup } from '@prisma/client';
import { WeaponInfo } from '../types/modelInfo';

export const weaponToWeaponGroup = (
  weapon: WeaponInfo | Weapon
): WeaponGroup => {
  const isSimple = weapon.isSimple;
  const isRanged = weapon.isRanged;

  if (isSimple && isRanged) {
    return WeaponGroup.SIMPLE_RANGED;
  }
  if (isSimple && !isRanged) {
    return WeaponGroup.SIMPLE_MELEE;
  }
  if (!isSimple && isRanged) {
    return WeaponGroup.MARTIAL_RANGED;
  }
  if (!isSimple && !isRanged) {
    return WeaponGroup.MARTIAL_MELEE;
  }
  return WeaponGroup.MARTIAL_MELEE;
};

export const weaponInWeaponGroup = (
  weapon: WeaponInfo | Weapon,
  group: WeaponGroup
): boolean => {
  const weaponGroup = weaponToWeaponGroup(weapon);
  return weaponGroupInWeaponGroup(weaponGroup, group);
};

export const weaponGroupInWeaponGroup = (
  weaponGroup: WeaponGroup,
  parentWeaponGroup: WeaponGroup
): boolean => {
  if (
    parentWeaponGroup === WeaponGroup.ALL_WEAPONS ||
    parentWeaponGroup === weaponGroup
  ) {
    return true;
  }

  switch (parentWeaponGroup) {
    case WeaponGroup.ALL_MELEE:
      return (
        weaponGroup === WeaponGroup.SIMPLE_MELEE ||
        weaponGroup === WeaponGroup.MARTIAL_MELEE
      );
    case WeaponGroup.ALL_RANGED:
      return (
        weaponGroup === WeaponGroup.SIMPLE_RANGED ||
        weaponGroup === WeaponGroup.MARTIAL_RANGED
      );
    case WeaponGroup.ALL_MARTIAL:
      return (
        weaponGroup === WeaponGroup.MARTIAL_MELEE ||
        weaponGroup === WeaponGroup.MARTIAL_RANGED
      );
    case WeaponGroup.ALL_SIMPLE:
      return (
        weaponGroup === WeaponGroup.SIMPLE_MELEE ||
        weaponGroup === WeaponGroup.SIMPLE_RANGED
      );
    default:
      return false;
  }
};
