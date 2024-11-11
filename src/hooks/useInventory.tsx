import { ItemInfo, ItemWeaponDataInfo, ToolInfo } from '@/lib/types/modelInfo';
import { useAppSelector } from '@/store/hooks';
import { memoizeGetItem } from '@/Utility/Indexed/globalCache';
import { useEffect, useMemo, useState } from 'react';

const useInventory = () => {
  const state = useAppSelector((state) => state.character.state);
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
      items.filter((item) => state?.equipped.hands.items?.includes(item.id)) ||
      []
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

  const equippedArmor = useMemo(() => {
    return items.filter((item) => state?.equipped.armor === item.id);
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

  return { tools, weapons, items, equippedWeapons, equippedArmor, isVersatile };
};

export default useInventory;
