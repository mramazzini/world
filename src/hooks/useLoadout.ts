import { ItemID, WeaponID, WeaponPropertyNames } from '@/lib/types/types';
import { useCallback, useMemo } from 'react';
import useCharacterState from './useCharacter/useCharacterState';
import useInventory from './useInventory';

enum EquippedState {
  TwoHanded = 'Two Handed',
  OneHanded = 'One Handed',
  DualWield = 'Dual Wielding',
  ShieldNoWeapon = 'Shield',
  ShieldWithWeapon = 'Shield with Weapon',
  Unarmed = 'Unarmed',
}

const useLoadout = () => {
  const state = useCharacterState();
  const { items, itemAmounts, weapons } = useInventory();

  const findItem = useCallback(
    (itemID: string) => {
      return items.find((i) => i.id === itemID);
    },
    [items]
  );

  const findWeapon = useCallback(
    (weaponID: WeaponID) => {
      const weapon = weapons.find((w) => w.weaponId === weaponID);

      return weapon;
    },
    [weapons]
  );

  const handsUsed = useMemo(() => {
    if (!state) return 0;

    let hands = 0;
    if (state.shieldEquippedId) hands++;
    hands += state.weaponEquippedIds.length;

    //check two handed weapon
    if (state.weaponEquippedIds.length === 1) {
      const item = findItem(state.weaponEquippedIds[0]);
      const weapon = item?.ItemWeaponData?.Weapon;

      if (
        weapon &&
        weapon.WeaponPropertyInstance.some(
          (p) => p.Property.name === WeaponPropertyNames.TwoHanded
        )
      ) {
        hands = 2;
      }
    }
    return hands;
  }, [state, findItem]);

  const hasProperty = useCallback(
    (weaponID: WeaponID, property: WeaponPropertyNames) => {
      const weapon = findWeapon(weaponID);
      if (!weapon) return false;
      return weapon.Weapon.WeaponPropertyInstance.some(
        (p) => p.Property.name === property
      );
    },
    [findWeapon]
  );

  const equippedState: EquippedState = useMemo(() => {
    if (!state) return EquippedState.Unarmed;

    //Unarmed or with shield if no weapons
    if (state.weaponEquippedIds.length === 0) {
      if (state.shieldEquippedId) {
        return EquippedState.ShieldNoWeapon;
      }
      return EquippedState.Unarmed;
    }

    const weapons = state.weaponEquippedIds
      .map(findItem)
      .filter((w) => w !== undefined);

    //Dual Wield
    if (weapons.length === 2) {
      return EquippedState.DualWield;
    }

    //One Handed
    if (weapons.length === 1) {
      if (
        weapons[0].ItemWeaponData?.weaponId &&
        hasProperty(
          weapons[0].ItemWeaponData?.weaponId,
          WeaponPropertyNames.TwoHanded
        )
      ) {
        return EquippedState.TwoHanded;
      }
      if (state.shieldEquippedId) {
        return EquippedState.ShieldWithWeapon;
      }
      return EquippedState.OneHanded;
    }

    return EquippedState.Unarmed;
  }, [state, findItem, hasProperty]);

  const canEquip = useCallback(
    (itemId: ItemID) => {
      if (!state) return false;

      //Check if the item is in the inventory
      const item = findItem(itemId);
      if (!item) return false;

      //check how many items in inventroy
      const itemAmount = itemAmounts[itemId];
      if (itemAmount && itemAmount <= 0) return false;

      if (itemAmount === 1) {
        if (item.Armor) {
          return state.armorEquippedId !== item.id;
        }
        return !state.weaponEquippedIds.includes(item.id);
      }

      if (item.Armor) {
        if (item.Armor.armorType === 'SHIELDS') {
          return (
            equippedState === EquippedState.Unarmed ||
            equippedState === EquippedState.OneHanded
          );
        }
        return true;
      }

      const weapon = item.ItemWeaponData;
      if (!weapon) return false;

      switch (equippedState) {
        case EquippedState.Unarmed:
          return true;

        case EquippedState.OneHanded:
          return !hasProperty(weapon.Weapon.id, WeaponPropertyNames.TwoHanded);
        case EquippedState.ShieldNoWeapon:
          return !hasProperty(weapon.Weapon.id, WeaponPropertyNames.TwoHanded);
        case EquippedState.TwoHanded:
        case EquippedState.DualWield:
        case EquippedState.ShieldWithWeapon:
          return false;
      }
    },
    [state, hasProperty, equippedState, findItem]
  );

  return { hasProperty, canEquip, equippedState, handsUsed };
};

export default useLoadout;
