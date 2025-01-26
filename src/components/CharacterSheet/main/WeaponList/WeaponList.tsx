'use client';
import Image from 'next/image';
import SingleWeapon from './WeaponDisplay';
import UnarmedAttack from './UnarmedAttack';
import { useState } from 'react';
import { useAppSelector } from '@/store/hooks';

const WeaponList = () => {
  const { equippedWeapons } = useAppSelector((state) => state.sheet);
  const [showUnarmed, setShowUnarmed] = useState(false);

  return (
    <div className="h-full flex flex-col w-full ">
      <div className="flex flex-row bg-base-300 rounded-xl p-4 h-full items-center justify-start gap-4 overflow-auto ">
        {showUnarmed || equippedWeapons.length > 0 ? (
          <>
            {equippedWeapons.map((weapon, index) => (
              <SingleWeapon key={index} weaponData={weapon.Weapon} />
            ))}
            <UnarmedAttack />
          </>
        ) : (
          <div className="flex items-center justify-center flex-col w-full">
            <p className="font-bold m-2">No Weapons Equipped...</p>
            <Image
              src="/sword.svg"
              alt="Empty"
              width={80}
              height={80}
              className="opacity-40 m-2"
            />
            <p className="m-2">
              Equip items in your inventory to see them here.
            </p>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => setShowUnarmed(true)}
            >
              Show Unarmed Attack
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeaponList;
