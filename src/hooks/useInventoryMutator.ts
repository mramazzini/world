import { useAppDispatch } from '@/store/hooks';
import useCharacterState from './useCharacter/useCharacterState';
import { setCharacterState } from '@/store/sheetSlice';
import { useCallback } from 'react';
import { ItemID } from '@/lib/types/types';
import useLoadout from './useLoadout';

const useInventoryMutator = () => {
  const state = useCharacterState();
  const { canEquip } = useLoadout();
  const dispatch = useAppDispatch();

  const addToInventoryHelper = useCallback(
    (
      itemQuantity: PrismaJson.QuantityItem,
      inventory: PrismaJson.QuantityItem[]
    ) => {
      if (!state) return [];
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
    },
    [state]
  );

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
    [state, dispatch, addToInventoryHelper]
  );

  const bulkAddToInventory = useCallback(
    (items: PrismaJson.QuantityItem[]) => {
      if (!state) return;
      let newInventory = [...state.inventory];
      items.forEach((item) => {
        newInventory = addToInventoryHelper(item, newInventory);
      });
      dispatch(
        setCharacterState({
          ...state,
          inventory: [...newInventory],
        })
      );
    },
    [state, dispatch, addToInventoryHelper]
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

  const unpackEquipment = useCallback((itemId: ItemID) => {}, []);

  const deleteItem = useCallback((itemId: ItemID, amount: number) => {}, []);

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
