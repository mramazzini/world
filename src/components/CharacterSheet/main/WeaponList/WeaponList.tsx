'use client';
import Image from 'next/image';
import useInventory from '@/hooks/useInventory';
import SingleWeapon from './WeaponDisplay';
// import useUnarmedStrike from '@/hooks/useUnarmedStrike';

const WeaponList = () => {
  const { equippedWeapons } = useInventory();
  // const unarmedDamage = useUnarmedStrike();

  return (
    <div className="flex flex-col h-full w-full">
      Implement unarmed
      <div className="h-full flex justify-center items-center w-full flex-col  bg-base-300 rounded-xl p-2">
        {equippedWeapons.length > 0 ? (
          <>
            {equippedWeapons.map((weapon, index) => (
              <SingleWeapon key={index} weaponData={weapon.Weapon} />
            ))}
          </>
        ) : (
          <div className="flex items-center justify-center flex-col">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default WeaponList;
