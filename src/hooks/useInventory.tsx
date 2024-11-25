import {
  ArmorInfo,
  ItemInfo,
  ItemWeaponDataInfo,
  ToolInfo,
} from '@/lib/types/modelInfo';
import { memoizeGetItem } from '@/Utility/Indexed/globalCache';
import { useEffect, useMemo, useState } from 'react';
import useCharacterState from './useCharacter/useCharacterState';

const useInventory = () => {
  const state = useCharacterState();
  const [items, setItems] = useState<ItemInfo[]>([]);

  const itemsPromises = useMemo(async () => {
    if (!state?.inventory) return [];
    const promises = state.inventory.map(
      (item) =>
        memoizeGetItem({
          query: item.item,
          type: 'id',
        }) as Promise<ItemInfo>
    );
    return await Promise.all(promises);
  }, [state]);

  useEffect(() => {
    itemsPromises.then((items) => setItems(items));
  }, [itemsPromises]);

  const tools = useMemo(() => {
    const tools: ToolInfo[] = [];
    items.forEach((item) => {
      if (item.Tool) {
        tools.push(item.Tool);
      }
    });
    return tools;
  }, [items]);

  const armor = useMemo(() => {
    const armor: ArmorInfo[] = [];
    items.forEach((item) => {
      if (item.Armor) {
        armor.push(item.Armor);
      }
    });
    return armor;
  }, [items]);

  const weapons = useMemo(() => {
    const weapons: ItemWeaponDataInfo[] = [];
    items.forEach((item) => {
      if (item.ItemWeaponData) {
        weapons.push(item.ItemWeaponData);
      }
    });
    return weapons;
  }, [items]);

  const equippedItems = useMemo(() => {
    return (
      items.filter(
        (item) =>
          state?.weaponEquippedIds?.includes(item.id) ||
          state?.armorEquippedId === item.id
      ) || []
    );
  }, [items, state]);

  const equippedWeapons = useMemo(() => {
    return equippedItems
      .filter((item) => item.ItemWeaponData)
      .map((item) => {
        return item.ItemWeaponData;
      })
      .filter((item) => item !== null);
  }, [equippedItems]);

  const equippedShield = useMemo(() => {
    return items.find((item) => state?.shieldEquippedId === item.id);
  }, [items, state]);

  const equippedArmor = useMemo(() => {
    return items.find((item) => state?.armorEquippedId === item.id);
  }, [items, state]);

  const isVersatile = useMemo(
    () =>
      (equippedItems.length === 1 &&
        equippedWeapons[0] &&
        equippedWeapons[0].Weapon.WeaponPropertyInstance.some(
          (p) => p.Property.name === 'Versatile'
        )) ||
      false,
    [equippedWeapons, equippedItems]
  );

  const weight = useMemo(() => {
    return items.reduce((acc, item) => {
      const inventoryItem = state?.inventory?.find((i) => i.item === item.id);
      const weight = item.weight;
      if (!weight) return acc;

      const amount = weight.quantity;
      const unit = weight.unit;
      if (!inventoryItem) return acc;

      if (unit === 'lb') {
        return acc + amount * inventoryItem.quantity;
      } else if (unit === 'oz') {
        return acc + (amount / 16) * inventoryItem.quantity;
      } else {
        return acc;
      }
    }, 0);
  }, [items, state]);

  const itemAmounts = useMemo(() => {
    const itemQuantities: { [key: string]: number } = {};
    items.forEach((item) => {
      const inventoryItem = state?.inventory?.find((i) => i.item === item.id);
      if (!inventoryItem) return;
      itemQuantities[item.id] = inventoryItem.quantity;
    });
    return itemQuantities;
  }, [items, state]);

  return {
    tools,
    weapons,
    items,
    equippedWeapons,
    equippedArmor,
    equippedShield,
    isVersatile,
    weight,
    armor,
    itemAmounts,
  };
};

export default useInventory;
