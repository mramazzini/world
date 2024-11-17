'use client';
import { memoizeGetItem } from '@/Utility/Indexed/globalCache';
import { Fragment, useEffect, useState } from 'react';
import ItemPage from '@/pages-lib/wiki/official/Item.page';
import Image from 'next/image';
import { ArmorType, ItemTypes } from '@prisma/client';
import {
  refreshAC,
  updateAC,
} from '@/Utility/characterStateFunctions/update/updateAC';
import { unpackEquipment } from '@/Utility/characterStateFunctions/update/unpackEquipment';
import { equipWeapon } from '@/Utility/characterStateFunctions/update/equipWeapon';
import { ItemInfo } from '@/lib/types/modelInfo';
import { useAppSelector } from '@/store/hooks';
import { useDispatch } from 'react-redux';
import { setCharacterState } from '@/store/sheetSlice';
import { SelectedItemInfo } from './InventoryTab';
interface Props {
  setSelectedItem: (item: PrismaJson.QuantityItem | null) => void;
  selectedItemInfo: SelectedItemInfo | null;
}

const ItemPreview = ({ setSelectedItem, selectedItemInfo }: Props) => {
  const [item, setItem] = useState<ItemInfo | null>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteAmount, setDeleteAmount] = useState(1);
  const state = useAppSelector((state) => state.character.state);
  const dispatch = useDispatch();

  const selectedItem = selectedItemInfo?.itemQuantity;
  const fromInventory = !selectedItemInfo?.purchasing;

  useEffect(() => {
    if (!selectedItem) return;
    memoizeGetItem({
      query: selectedItem.item,
      type: 'id',
    }).then((item) => {
      setItem(item);
    });
  }, [selectedItem]);

  return (
    <div className="flex flex-col w-full">
      {item ? (
        <div className="flex flex-col  my-4">
          <div className="flex flex-row justify-between items-center mt-4 mb-2 mx-4">
            <div className="flex  justify-center items-center  join ">
              {fromInventory &&
                item.types.map((type, index) =>
                  type === ItemTypes.ARMOR &&
                  item.Armor?.armorType == ArmorType.SHIELDS ? (
                    <button
                      key={index}
                      className="btn btn-secondary join-item"
                      disabled={
                        selectedItem
                          ? state?.equipped?.hands.items?.includes(
                              selectedItem?.item
                            )
                          : false
                      }
                      onClick={async (e) => {
                        e.preventDefault();
                        if (!state) return;
                        if (!selectedItem?.item) return;
                        const newState = await equipWeapon(
                          state,
                          selectedItem.item,
                          1
                        );
                        const acState = await refreshAC(newState);
                        dispatch(setCharacterState(acState));
                      }}
                    >
                      {selectedItem &&
                      state?.equipped?.hands.items?.includes(selectedItem?.item)
                        ? 'Equipped'
                        : 'Equip Shield'}
                    </button>
                  ) : type === ItemTypes.ARMOR ? (
                    <button
                      key={index}
                      className="btn btn-secondary join-item"
                      disabled={state?.equipped?.armor === selectedItem?.item}
                      onClick={async (e) => {
                        e.preventDefault();
                        if (!state) return;
                        if (!selectedItem?.item) return;
                        const newState = await updateAC(
                          state,
                          selectedItem.item
                        );
                        dispatch(setCharacterState(newState));
                      }}
                    >
                      {state?.equipped?.armor === selectedItem?.item
                        ? 'Equipped'
                        : 'Equip Armor'}
                    </button>
                  ) : type === ItemTypes.WEAPON ? (
                    <Fragment key={index}>
                      {!item.ItemWeaponData?.Weapon.WeaponPropertyInstance.some(
                        (p) => {
                          return p.Property.name === 'Two-Handed';
                        }
                      ) && (
                        <button
                          key={index}
                          className="btn btn-secondary join-item"
                          disabled={
                            state?.equipped?.hands.items &&
                            (selectedItem?.quantity || 0) <=
                              state?.equipped?.hands.items?.filter(
                                (item) => item === selectedItem?.item
                              ).length
                          }
                          onClick={async (e) => {
                            e.preventDefault();
                            if (!state) return;
                            if (!selectedItem?.item) return;
                            const newState = await equipWeapon(
                              state,
                              selectedItem.item,
                              1
                            );
                            const acState = await refreshAC(newState);
                            dispatch(setCharacterState(acState));
                          }}
                        >
                          Equip Weapon
                        </button>
                      )}

                      {item.ItemWeaponData?.Weapon.WeaponPropertyInstance?.some(
                        (p) => {
                          return p.Property.name === 'Two-Handed';
                        }
                      ) && (
                        <button
                          key={index}
                          className="btn btn-secondary join-item"
                          disabled={
                            state?.equipped?.hands.items &&
                            (selectedItem?.quantity || 0) <=
                              state?.equipped?.hands.items?.filter(
                                (item) => item === selectedItem?.item
                              ).length
                          }
                          onClick={async (e) => {
                            e.preventDefault();
                            if (!state) return;
                            if (!selectedItem?.item) return;
                            const newState = await equipWeapon(
                              state,
                              selectedItem.item,
                              2
                            );
                            const acState = await refreshAC(newState);
                            dispatch(setCharacterState(acState));
                          }}
                        >
                          Equip Two-Handed
                        </button>
                      )}
                    </Fragment>
                  ) : type === ItemTypes.DRUIDIC_FOCUS ? (
                    <button key={index} className="btn btn-secondary join-item">
                      Equip Druidic Focus
                    </button>
                  ) : type === ItemTypes.ARCANE_FOCUS ? (
                    <button key={index} className="btn btn-secondary join-item">
                      Equip Arcane Focus
                    </button>
                  ) : type === ItemTypes.TOOL ? null : type ===
                    ItemTypes.EQUIPMENT_PACK ? (
                    <button
                      key={index}
                      className="btn btn-secondary join-item"
                      onClick={async (e) => {
                        e.preventDefault();
                        if (!state) return;
                        if (!selectedItem?.item) return;
                        const newState = await unpackEquipment(
                          state,
                          selectedItem.item
                        );
                        dispatch(setCharacterState(newState));
                        setSelectedItem(null);
                        setItem(null);
                      }}
                    >
                      Unpack Equipment
                    </button>
                  ) : null
                )}

              <button
                className="btn btn-neutral join-item"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedItem(null);
                  setItem(null);
                }}
              >
                Close
              </button>
            </div>
            {fromInventory && (
              <div className="flex  justify-center items-center  join ">
                {selectedItem && selectedItem.quantity > 1 && (
                  <input
                    className="input input-error join-item w-16"
                    onChange={(e) => {
                      setDeleteAmount(parseInt(e.target.value));
                    }}
                    type="number"
                    value={deleteAmount}
                  />
                )}

                <button
                  className="btn btn-error join-item min-w-16"
                  onClick={async (e) => {
                    e.preventDefault();
                    if (confirmDelete) {
                      const newState = { ...state };
                      if (!newState) return;
                      if (!newState.inventory) return;
                      if (!selectedItem) return;
                      //remove items
                      const index = newState.inventory.findIndex(
                        (i) => i.item === selectedItem?.item
                      );
                      if (index === -1) return;
                      const newInventory = [...newState.inventory];

                      if (selectedItem.quantity > deleteAmount) {
                        newInventory[index] = {
                          item: selectedItem.item,
                          quantity: selectedItem.quantity - deleteAmount,
                        };
                      } else {
                        newInventory.splice(index, 1);
                      }

                      dispatch(
                        setCharacterState({
                          ...newState,
                          inventory: newInventory,
                        } as PrismaJson.CharacterState)
                      );
                      setConfirmDelete(false);
                    } else {
                      setConfirmDelete(true);
                      setTimeout(() => {
                        setConfirmDelete(false);
                      }, 2000);
                    }
                  }}
                >
                  {confirmDelete ? (
                    'Confirm Delete'
                  ) : (
                    <Image
                      src="/images/trash.svg"
                      alt="Delete"
                      width={25}
                      height={25}
                    />
                  )}
                </button>
              </div>
            )}
          </div>
          <div className="divider m-0" />
          <ItemPage item={item} />
        </div>
      ) : (
        <div className="flex flex-col w-full my-4">
          <div className="p-4">No item selected</div>
        </div>
      )}
    </div>
  );
};

export default ItemPreview;
