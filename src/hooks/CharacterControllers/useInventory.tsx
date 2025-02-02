import {
  ArmorInfo,
  ItemInfo,
  ItemWeaponDataInfo,
  ToolInfo,
} from '@/lib/types/modelInfo';
import { memoizeGetItem } from '@/Utility/Indexed/globalCache';
import { useEffect, useMemo } from 'react';
import useCharacterState from '../useCharacter/useCharacterState';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setArmorInInventory,
  setEquippedArmor,
  setEquippedShield,
  setEquippedWeapons,
  setIsVersatile,
  setItemAmounts,
  setItemsInInventory,
  setToolsInInventory,
  setWeaponsInInventory,
  setWeightCarried,
} from '@/store/sheetSlice';

const useInventory = () => {
  const state = useCharacterState();
  const dispatch = useAppDispatch();
  const { equippedWeapons, itemsInInventory: items } = useAppSelector(
    (state) => state.sheet
  );

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
    itemsPromises.then((items) => dispatch(setItemsInInventory(items)));
  }, [itemsPromises, dispatch]);

  useEffect(() => {
    const tools: ToolInfo[] = [];
    items.forEach((item) => {
      if (item.Tool) {
        tools.push(item.Tool);
      }
    });
    dispatch(setToolsInInventory(tools));
  }, [items, dispatch]);

  useEffect(() => {
    const armor: ArmorInfo[] = [];
    items.forEach((item) => {
      if (item.Armor) {
        armor.push(item.Armor);
      }
    });
    dispatch(setArmorInInventory(armor));
  }, [items, dispatch]);

  useEffect(() => {
    const weapons: ItemWeaponDataInfo[] = [];
    items.forEach((item) => {
      if (item.ItemWeaponData) {
        weapons.push(item.ItemWeaponData);
      }
    });
    dispatch(setWeaponsInInventory(weapons));
  }, [items, dispatch]);

  const equippedItems = useMemo(() => {
    return (
      items.filter(
        (item) =>
          state?.weaponEquippedIds?.includes(item.id) ||
          state?.armorEquippedId === item.id
      ) || []
    );
  }, [items, state]);

  useEffect(() => {
    const equipped = equippedItems
      .filter((item) => item.ItemWeaponData)
      .map((item) => {
        return item.ItemWeaponData;
      })
      .filter((item) => item !== null);
    dispatch(setEquippedWeapons(equipped));
  }, [equippedItems, dispatch]);

  useEffect(() => {
    const equippedShield =
      items.find((item) => state?.shieldEquippedId === item.id) || null;

    dispatch(setEquippedShield(equippedShield));
  }, [items, state, dispatch]);

  useEffect(() => {
    const equippedArmor = items.find(
      (item) => state?.armorEquippedId === item.id
    ) as ItemInfo | null;
    dispatch(setEquippedArmor(equippedArmor));
  }, [items, state, dispatch]);

  useEffect(() => {
    const isVersatile =
      (equippedItems.length === 1 &&
        equippedWeapons[0] &&
        equippedWeapons[0].Weapon.WeaponPropertyInstance.some(
          (p) => p.Property.name === 'Versatile'
        )) ||
      false;
    dispatch(setIsVersatile(isVersatile));
  }, [equippedWeapons, equippedItems, dispatch]);

  useEffect(() => {
    const weight = items.reduce((acc, item) => {
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
    dispatch(setWeightCarried(weight));
  }, [items, state, dispatch]);

  useEffect(() => {
    const itemQuantities: { [key: string]: number } = {};
    items.forEach((item) => {
      const inventoryItem = state?.inventory?.find((i) => i.item === item.id);
      if (!inventoryItem) return;
      itemQuantities[item.id] = inventoryItem.quantity;
    });
    dispatch(setItemAmounts(itemQuantities));
  }, [items, state, dispatch]);
};

export default useInventory;
