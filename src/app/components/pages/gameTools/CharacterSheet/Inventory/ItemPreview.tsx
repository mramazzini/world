"use client";
import { CharacterInfo, ItemInfo, WeaponPropertyNames } from "@/lib/types";
import { memoizeGetItem } from "@/app/components/Utility/globalCache";
import { Fragment, useEffect, useState } from "react";
import ItemPage from "../../../wiki/official/Item.page";
import Image from "next/image";
import { ArmorType, ItemTypes } from "@prisma/client";
import {
  refreshAC,
  updateAC,
} from "@/app/components/Utility/characterStateFunctions/update/updateAC";
import { unpackEquipment } from "@/app/components/Utility/characterStateFunctions/update/unpackEquipment";
import { WeaponProperties } from "@/lib/globalVars";
import { equipWeapon } from "@/app/components/Utility/characterStateFunctions/update/equipWeapon";
interface Props {
  character: CharacterInfo;
  updateState: (state: PrismaJson.CharacterState) => void;
  setSelectedItem: (item: PrismaJson.QuantityItem | null) => void;
  selectedItem: PrismaJson.QuantityItem | null;
}

const ItemPreview = ({
  character,
  updateState,
  setSelectedItem,
  selectedItem,
}: Props) => {
  const [item, setItem] = useState<ItemInfo | null>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteAmount, setDeleteAmount] = useState(1);
  useEffect(() => {
    if (!selectedItem) return;
    memoizeGetItem(selectedItem.item).then((item) => {
      setItem(item);
    });
  }, [selectedItem]);

  useEffect(() => {
    if (!character.state) return;
    refreshAC(character.state).then((res) =>
      updateState(res as PrismaJson.CharacterState)
    );
  }, [
    character.state?.equipped?.armor,
    character.state?.equipped?.hands.items,
  ]);

  return (
    <div className="flex flex-col w-full col-span-2">
      {item ? (
        <div className="flex flex-col bg-base-100 rounded-xl border border-primary w-full my-4">
          <div className="flex flex-row justify-between items-center mt-4 mb-2 mx-4">
            <div className="flex  justify-center items-center  join ">
              {item.types.map((type, index) =>
                type === ItemTypes.ARMOR &&
                item.Armor?.armorType == ArmorType.SHIELDS ? (
                  <button
                    key={index}
                    className="btn btn-secondary join-item"
                    disabled={character.state?.equipped?.hands.items?.includes(
                      selectedItem?.item || -1
                    )}
                    onClick={async (e) => {
                      e.preventDefault();
                      if (!character.state) return;
                      if (!selectedItem?.item) return;
                      console.log(selectedItem.item);
                      const newState = await equipWeapon(
                        character.state,
                        selectedItem.item,
                        1
                      );
                      updateState(newState as PrismaJson.CharacterState);
                    }}
                  >
                    {character.state?.equipped?.hands.items?.includes(
                      selectedItem?.item || -1
                    )
                      ? "Equipped"
                      : "Equip Shield"}
                  </button>
                ) : type === ItemTypes.ARMOR ? (
                  <button
                    key={index}
                    className="btn btn-secondary join-item"
                    disabled={
                      character.state?.equipped?.armor === selectedItem?.item
                    }
                    onClick={async (e) => {
                      e.preventDefault();
                      if (!character.state) return;
                      if (!selectedItem?.item) return;
                      const newState = await updateAC(
                        character.state,
                        selectedItem.item
                      );
                      console.log(newState);
                      updateState(newState as PrismaJson.CharacterState);
                    }}
                  >
                    {character.state?.equipped?.armor === selectedItem?.item
                      ? "Equipped"
                      : "Equip Armor"}
                  </button>
                ) : type === ItemTypes.WEAPON ? (
                  <Fragment key={index}>
                    {!item.Weapon?.properties.some((p) => {
                      return (
                        p.property.name === WeaponProperties["Two-Handed"].name
                      );
                    }) && (
                      <button
                        key={index}
                        className="btn btn-secondary join-item"
                        disabled={
                          character.state?.equipped?.hands.items &&
                          (selectedItem?.quantity || 0) <=
                            character.state?.equipped?.hands.items?.filter(
                              (item) => item === selectedItem?.item
                            ).length
                        }
                        onClick={async (e) => {
                          e.preventDefault();
                          if (!character.state) return;
                          if (!selectedItem?.item) return;
                          const newState = await equipWeapon(
                            character.state,
                            selectedItem.item,
                            1
                          );
                          updateState(newState as PrismaJson.CharacterState);
                        }}
                      >
                        Equip Weapon
                      </button>
                    )}

                    {item.Weapon?.properties.some((p) => {
                      return (
                        p.property.name === WeaponProperties["Two-Handed"].name
                      );
                    }) && (
                      <button
                        key={index}
                        className="btn btn-secondary join-item"
                        disabled={
                          character.state?.equipped?.hands.items &&
                          (selectedItem?.quantity || 0) <=
                            character.state?.equipped?.hands.items?.filter(
                              (item) => item === selectedItem?.item
                            ).length
                        }
                        onClick={async (e) => {
                          e.preventDefault();
                          if (!character.state) return;
                          if (!selectedItem?.item) return;
                          const newState = await equipWeapon(
                            character.state,
                            selectedItem.item,
                            2
                          );
                          updateState(newState as PrismaJson.CharacterState);
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
                      if (!character.state) return;
                      if (!selectedItem?.item) return;
                      const newState = await unpackEquipment(
                        character.state,
                        selectedItem.item
                      );
                      updateState(newState as PrismaJson.CharacterState);
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
                    const newState = { ...character.state };
                    if (!newState) return;
                    if (!newState.inventory) return;
                    //remove items
                    const index = newState.inventory.findIndex(
                      (i) => i.item === selectedItem?.item
                    );
                    if (index === -1) return;
                    if (selectedItem?.quantity || 0 > deleteAmount) {
                      newState.inventory[index].quantity -= deleteAmount;
                    }
                    if (newState.inventory[index].quantity <= 0) {
                      newState.inventory.splice(index, 1);
                    }

                    updateState(newState as PrismaJson.CharacterState);

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
                  "Confirm Delete"
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
          </div>
          <div className="divider m-0" />
          <ItemPage item={item} />
        </div>
      ) : (
        <div className="flex flex-col bg-base-300 rounded-xl border border-primary w-full my-4">
          <div className="p-4">No item selected</div>
        </div>
      )}
    </div>
  );
};

export default ItemPreview;
