import { useAppDispatch } from '@/store/hooks';
import useCharacterState from './useCharacter/useCharacterState';
import { setCharacterState } from '@/store/sheetSlice';
import { useCallback } from 'react';
import { ItemID } from '@/lib/types/types';
import useLoadout from './useLoadout';
import { memoizeGetItem } from '@/Utility/Indexed/globalCache';

const useInventoryMutator = () => {
  const state = useCharacterState();
  const { canEquip } = useLoadout();
  const dispatch = useAppDispatch();

  const addToInventoryHelper = (
    itemQuantity: PrismaJson.QuantityItem,
    inventory: PrismaJson.QuantityItem[]
  ) => {
    let newInventory = [...inventory];

    const itemIndex = newInventory.findIndex(
      (i) => i.item === itemQuantity.item
    );

    if (itemIndex === -1) {
      newInventory = [...newInventory, itemQuantity];
    } else {
      newInventory = newInventory.map((i) => {
        if (i.item === itemQuantity.item) {
          return {
            ...i,
            quantity: i.quantity + itemQuantity.quantity,
          };
        }
        return i;
      });
    }
    return newInventory;
  };

  const addToInventory = useCallback(
    (itemQuantity: PrismaJson.QuantityItem) => {
      if (!state) return;
      const newInventory = addToInventoryHelper(itemQuantity, state.inventory);
      dispatch(
        setCharacterState({
          ...state,
          inventory: [...newInventory],
        })
      );
    },
    [state, dispatch]
  );

  const bulkAddToInventory = useCallback(
    (items: PrismaJson.QuantityItem[]) => {
      if (!state) return;
      let newInventory = [...state.inventory];
      for (const item of items) {
        newInventory = addToInventoryHelper(item, newInventory);
      }

      dispatch(
        setCharacterState({
          ...state,
          inventory: [...newInventory],
        })
      );
    },
    [state, dispatch]
  );

  const equipArmor = useCallback(
    (itemId: ItemID) => {
      if (!state) return;
      const armor = state.inventory.find((i) => i.item === itemId);
      if (!armor) return;
      dispatch(
        setCharacterState({
          ...state,
          armorEquippedId: armor.item,
        })
      );
    },
    [state, dispatch]
  );

  const equipWeapon = useCallback(
    (itemId: ItemID) => {
      if (!state) return;
      const item = state.inventory.find((i) => i.item === itemId);
      if (!item) return;
      const canEquipItem = canEquip(item.item);
      if (!canEquipItem) return;
      dispatch(
        setCharacterState({
          ...state,
          weaponEquippedIds: [...state.weaponEquippedIds, item.item],
        })
      );
    },
    [state, dispatch, canEquip]
  );

  const equipShield = useCallback(
    (itemId: ItemID) => {
      if (!state) return;
      const shield = state.inventory.find((i) => i.item === itemId);
      if (!shield) return;
      dispatch(
        setCharacterState({
          ...state,
          shieldEquippedId: shield.item,
        })
      );
    },
    [dispatch, state]
  );

  const deleteItem = useCallback(
    (itemId: ItemID, amount: number) => {
      if (!state) return;
      const itemIndex = state.inventory.findIndex((i) => i.item === itemId);
      if (itemIndex === -1) return;
      const newInventory = [...state.inventory];
      if (newInventory[itemIndex].quantity > amount) {
        newInventory[itemIndex] = {
          ...newInventory[itemIndex],
          quantity: newInventory[itemIndex].quantity - amount,
        };
      } else {
        newInventory.splice(itemIndex, 1);
      }
      dispatch(
        setCharacterState({
          ...state,
          inventory: newInventory,
        })
      );
    },
    [state, dispatch]
  );

  const unpackEquipment = async (itemId: ItemID) => {
    const item = await memoizeGetItem({ type: 'id', query: itemId });
    if (!item || !item.EquipmentPack) {
      console.log('Item is not an equipment pack.');
      return;
    }
    if (!state) return;
    const items = item.EquipmentPack.itemsQuantity;
    let newInventory = [...state.inventory];
    for (const item of items) {
      newInventory = addToInventoryHelper(item, newInventory);
    }

    const packIndex = newInventory.findIndex((i) => i.item === itemId);
    const amount = newInventory[packIndex].quantity;
    newInventory = [
      ...newInventory.slice(0, packIndex),
      ...newInventory.slice(packIndex + 1),
    ];

    if (amount > 1) {
      newInventory = [...newInventory, { item: itemId, quantity: amount - 1 }];
    }

    dispatch(
      setCharacterState({
        ...state,
        inventory: [...newInventory],
      })
    );
  };

  const unequipItem = useCallback(
    (itemId: ItemID) => {
      if (!state) return;
      const weaponIndex = state.weaponEquippedIds.findIndex(
        (i) => i === itemId
      );
      if (weaponIndex !== -1) {
        const newWeaponEquippedIds = [
          ...state.weaponEquippedIds.slice(0, weaponIndex),
          ...state.weaponEquippedIds.slice(weaponIndex + 1),
        ];
        dispatch(
          setCharacterState({
            ...state,
            weaponEquippedIds: newWeaponEquippedIds,
          })
        );
      } else {
        //may be a shield
        if (state.shieldEquippedId === itemId) {
          dispatch(
            setCharacterState({
              ...state,
              shieldEquippedId: null,
            })
          );
        }
      }
    },
    [state, dispatch]
  );

  const unequipArmor = useCallback(() => {
    if (!state) return;
    dispatch(
      setCharacterState({
        ...state,
        armorEquippedId: null,
      })
    );
  }, [state, dispatch]);

  return {
    addToInventory,
    bulkAddToInventory,
    equipArmor,
    equipShield,
    equipWeapon,
    unpackEquipment,
    deleteItem,
    unequipArmor,
    unequipItem,
  };
};

export default useInventoryMutator;
