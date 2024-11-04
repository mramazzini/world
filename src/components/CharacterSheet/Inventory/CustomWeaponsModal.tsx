'use client';
import Modal from '@/components/UI/Modal/Modal';
import ModalBox from '@/components/UI/Modal/ModalBox';
import ModalButton from '@/components/UI/Modal/ModalButton';
import useModal from '@/hooks/useModal';
import { DamageTypes } from '@prisma/client';
import { useState } from 'react';

const WeaponDisplay = ({
  name,
  damage,
  remove,
  isProficient,
  update,
}: {
  name: string;
  damage: PrismaJson.Damage[];
  remove: () => void;
  isProficient: boolean;
  update: (
    name: string,
    damage: PrismaJson.Damage[],
    isProficient: boolean
  ) => void;
}) => {
  return (
    <div className=" join m-2 w-full">
      <span className="join-item border border-primary  p-2 bg-base-100 w-full items-center flex  ">
        <input
          type="text"
          className="input input-bordered"
          placeholder="Name of the attack"
          value={name}
          onChange={(e) => update(e.target.value, damage, isProficient)}
        />
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3  gap-2">
          {damage.map((dmg, index) => (
            <span
              key={index}
              className="col-span-1 flex flex-row justify-center items-center"
            >
              <span className="bg-base-300 p-1 rounded-xl flex flex-row gap-2 items-center mx-2 w-full">
                <input
                  type="text"
                  className="input input-sm w-12"
                  value={dmg.formula}
                  onChange={(e) => {
                    const newDamage = [...damage];
                    newDamage[index].formula = e.target.value;
                    update(name, newDamage, isProficient);
                  }}
                />
                <select
                  value={dmg.type}
                  className="select select-sm"
                  onChange={(e) => {
                    const newDamage = [...damage];
                    newDamage[index].type = e.target.value as DamageTypes;
                    update(name, newDamage, isProficient);
                  }}
                >
                  {Object.values(DamageTypes).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </span>{' '}
              <span className="ml-2">+</span>
            </span>
          ))}
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
  const { id, closeModal } = useModal();
  const [weapons, setWeapons] =
    useState<PrismaJson.CustomWeapon[]>(initialWeapons);
  return (
    <>
      <ModalButton
        modaltype="open"
        modalid={id}
        className="btn btn-sm rounded-t-none btn-primary w-full"
      >
        Edit Custom Attacks
      </ModalButton>

      <Modal id={id}>
        <ModalBox className="max-w-full">
          <h3 className="font-bold text-lg">Custom Weapon Attacks</h3>
          <p className="text-sm text-neutral-content">
            Use this form to add custom attacks to your character that
            aren&apos;t in the system.
          </p>
          <div className="divider m-0"></div>
          <div className="modal-body">
            <div className="flex flex-col">
              {weapons.map((weapon, index) => (
                <WeaponDisplay
                  remove={() => {
                    const newWeapons = [...weapons];
                    newWeapons.splice(index, 1);
                    setWeapons(newWeapons);
                  }}
                  update={(name, damage, isProficient) => {
                    const newWeapons = [...weapons];
                    newWeapons[index] = {
                      name,
                      damage,
                      isProficient,
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
                    name: 'New Attack',
                    damage: [
                      {
                        formula: '1d4',
                        type: DamageTypes.BLUDGEONING,
                      },
                      {
                        formula: '1d6',
                        type: DamageTypes.BLUDGEONING,
                      },
                    ],

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
              closeModal();
            }}
          >
            <div className="flex justify-end gap-4">
              <ModalButton
                modalid={id}
                className="btn btn-error"
                modaltype="close"
              >
                Cancel
              </ModalButton>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </ModalBox>
      </Modal>
    </>
  );
};

export default CustomWeaponsModal;
