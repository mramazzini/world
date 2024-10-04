"use client";
import { AbilityToModifier } from "@/app/components/Utility/characterStateFunctions/calc/AbilityToModifier";
import { WeaponInfo } from "@/lib/utils/types/types";
import { DamageTypes } from "@prisma/client";
import { useState } from "react";
import { v4 } from "uuid";

const WeaponDisplay = ({
  name,
  damage,
  remove,
  isProficient,
  flatDamage,
  update,
}: {
  name: string;
  damage: PrismaJson.Damage[];
  flatDamage?: PrismaJson.FlatDamage;
  remove: () => void;
  isProficient: boolean;
  update: (
    name: string,
    damage: PrismaJson.Damage[],
    isProficient: boolean,
    flat: PrismaJson.FlatDamage
  ) => void;
}) => {
  if (!flatDamage) {
    return <></>;
  }
  return (
    <div className=" join m-2 w-full">
      <span className="join-item border border-primary  p-2 bg-base-100 w-full items-center flex  ">
        <input
          type="text"
          className="input input-bordered"
          placeholder="Name of the attack"
          value={name}
          onChange={(e) =>
            update(e.target.value, damage, isProficient, flatDamage)
          }
        />
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3  gap-2">
          {damage.map((dmg, index) => (
            <span className="col-span-1 flex flex-row justify-center items-center">
              <span
                key={index}
                className="bg-base-300 p-1 rounded-xl flex flex-row gap-2 items-center mx-2 w-full"
              >
                <select
                  value={dmg.numberOfDice}
                  className="select select-sm"
                  onChange={(e) => {
                    const newDamage = [...damage];
                    newDamage[index].numberOfDice = parseInt(e.target.value);
                    update(name, newDamage, isProficient, flatDamage);
                  }}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                d
                <select
                  value={dmg.dice}
                  className="select select-sm"
                  onChange={(e) => {
                    const newDamage = [...damage];
                    newDamage[index].dice = parseInt(e.target.value);
                    update(name, newDamage, isProficient, flatDamage);
                  }}
                >
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                  <option value="12">12</option>
                  <option value="20">20</option>
                </select>
                <select
                  value={dmg.type}
                  className="select select-sm"
                  onChange={(e) => {
                    const newDamage = [...damage];
                    newDamage[index].type = e.target.value as DamageTypes;
                    update(name, newDamage, isProficient, flatDamage);
                  }}
                >
                  {Object.values(DamageTypes).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </span>{" "}
              <span className="ml-2">+</span>
            </span>
          ))}
          <span className="col-span-1 flex flex-row justify-start items-center">
            <span className="bg-base-300 p-1 rounded-xl flex flex-row gap-2 items-center mx-2 ">
              <input
                type="number"
                className="input input-sm w-12"
                value={flatDamage.amount}
                onChange={(e) => {
                  const newFlat = { ...flatDamage };
                  newFlat.amount = parseInt(e.target.value);
                  update(name, damage, isProficient, newFlat);
                }}
              />
              <select
                value={flatDamage.type}
                className="select select-sm"
                onChange={(e) => {
                  const newFlat = { ...flatDamage };
                  newFlat.type = e.target.value as DamageTypes;
                  update(name, damage, isProficient, newFlat);
                }}
              >
                {Object.values(DamageTypes).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </span>
          </span>
        </div>
      </span>
      <button
        className="btn btn-error join-item h-auto"
        onClick={() => {
          remove();
        }}
      >
        Remove
      </button>
    </div>
  );
};

interface Props {
  initialWeapons: PrismaJson.CustomWeapon[];
  setWeaponState: (weapons: PrismaJson.CustomWeapon[]) => void;
}

const CustomWeaponsModal = ({ initialWeapons, setWeaponState }: Props) => {
  const id = v4();
  const [weapons, setWeapons] =
    useState<PrismaJson.CustomWeapon[]>(initialWeapons);
  return (
    <>
      <button
        className="btn btn-sm rounded-t-none btn-primary w-full"
        onClick={() => {
          const modal = document.getElementById(id) as HTMLDialogElement;
          modal.showModal();
        }}
      >
        Edit Custom Attacks
      </button>

      <dialog className="modal" id={id}>
        <div className="modal-box max-w-full">
          <h3 className="font-bold text-lg">Custom Weapon Attacks</h3>
          <p className="text-sm text-neutral-content">
            Use this form to add custom attacks to your character that aren't in
            the system.
          </p>
          <div className="divider m-0"></div>
          <div className="modal-body">
            <div className="flex flex-col">
              {weapons.map((weapon, index) => (
                <WeaponDisplay
                  flatDamage={weapon.flatDamage}
                  remove={() => {
                    const newWeapons = [...weapons];
                    newWeapons.splice(index, 1);
                    setWeapons(newWeapons);
                  }}
                  update={(name, damage, isProficient, flat) => {
                    const newWeapons = [...weapons];
                    newWeapons[index] = {
                      name,
                      damage,
                      isProficient,
                      flatDamage: flat,
                    };
                    setWeapons(newWeapons);
                  }}
                  key={index}
                  name={weapon.name}
                  damage={weapon.damage}
                  isProficient={weapon.isProficient}
                />
              ))}
            </div>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => {
                setWeapons([
                  ...weapons,
                  {
                    name: "New Attack",
                    damage: [
                      {
                        numberOfDice: 1,
                        dice: 4,
                        type: DamageTypes.BLUDGEONING,
                      },
                      {
                        numberOfDice: 0,
                        dice: 4,
                        type: DamageTypes.BLUDGEONING,
                      },
                    ],
                    flatDamage: {
                      amount: 1,
                      type: DamageTypes.BLUDGEONING,
                    },
                    isProficient: false,
                  },
                ]);
              }}
            >
              Add New Attack
            </button>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setWeaponState(weapons);
              const modal = document.getElementById(id) as HTMLDialogElement;
              modal.close();
            }}
          >
            <div className="flex justify-end gap-4">
              <button
                className="btn btn-error"
                onClick={(e) => {
                  e.preventDefault();
                  const modal = document.getElementById(
                    id
                  ) as HTMLDialogElement;
                  modal.close();
                }}
              >
                Cancel
              </button>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default CustomWeaponsModal;
