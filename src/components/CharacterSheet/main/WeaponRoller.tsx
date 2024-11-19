'use client';
import Info from '@/components/UI/Info';
import { roll, rollFromFormula } from '@/Utility/roll';
import { Log } from '@/lib/types/types';
import { Ability } from '@prisma/client';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { WeaponInfo } from '@/lib/types/modelInfo';
import useInventory from '@/hooks/useInventory';
import { useAppSelector } from '@/store/hooks';
import useModifier from '@/hooks/useModifier';
import useProficiency from '@/hooks/useProficiency';
import { v4 } from 'uuid';

const SingleWeapon = ({
  weaponData,
  logPush,
}: {
  weaponData: WeaponInfo;
  logPush: (newLog: Log) => void;
}) => {
  const [selectedAbility, setSelectedAbility] = useState<Ability>(Ability.STR);
  const { isVersatile } = useInventory();
  const { isProficientInWeapon, proficiencyBonus } = useProficiency();
  const { getAbilityModifier } = useModifier();

  const isProficient = isProficientInWeapon(weaponData.id);

  const weapon = weaponData;
  let damage = weapon.damage;

  if (isVersatile) {
    const versatileProperty = weapon.WeaponPropertyInstance.find(
      (p) => p.Property.name === 'Versatile'
    );
    if (versatileProperty && versatileProperty.versatileDamage) {
      damage = [versatileProperty.versatileDamage];
    }
  }

  return (
    <div className=" join m-2 w-full">
      <span className="join-item border border-primary  p-2 bg-base-100 w-full items-center flex whitespace-nowrap overflow-hidden text-ellipsis">
        <strong>{weapon.name}: </strong>
        {damage.map(
          (damage, index) =>
            damage.formula && (
              <span key={index}>
                <span className="badge badge-neutral ml-2">
                  {damage.formula}
                </span>{' '}
                <span>+ {getAbilityModifier(selectedAbility)} </span>
                <span className="ml-2 badge badge-secondary">
                  {damage.type.toCapitalCase()}{' '}
                </span>
              </span>
            )
        )}
      </span>
      <div
        className={` px-2 join-item flex items-center text-center font-bold ${
          isProficient
            ? 'bg-neutral text-neutral-content border-primary border-y '
            : 'text-error-content bg-error'
        }`}
      >
        <Info
          tooltip={`You are ${
            isProficient
              ? 'proficient in this weapon'
              : 'not proficient in this weapon'
          }. Proficiency in a weapon allows you to add your proficiency bonus to the attack roll.`}
        />
      </div>
      <select
        className="join-item select select-bordered select-neutral"
        onChange={(e) => {
          setSelectedAbility(e.target.value as Ability);
        }}
      >
        {Object.values(Ability).map((ability, index) => (
          <option key={index} value={ability}>
            {ability.toCapitalCase()}
          </option>
        ))}
      </select>
      <button
        className="btn btn-accent join-item"
        onClick={() => {
          const rollRes = roll(1, 20);
          logPush({
            from: `Attack Roll: ${weapon.name}`,
            roll: {
              plus: getAbilityModifier(selectedAbility) + proficiencyBonus,
              rolls: [
                {
                  rolled: rollRes,
                  diceType: 20,
                },
              ],
              total:
                rollRes +
                getAbilityModifier(selectedAbility) +
                proficiencyBonus,
            },
            logType: 'roll',
          });
        }}
      >
        Attack Roll
      </button>
      <button
        className="btn btn-accent join-item"
        onClick={() => {
          const damageRolls: {
            rolled: number;
            diceType: number;
          }[] = [];
          weapon.damage.forEach((damage) => {
            const rollRes = rollFromFormula(damage.formula);
            rollRes.rolls.forEach((r) => {
              damageRolls.push({
                rolled: r.rolled.reduce((acc, cur) => acc + cur, 0),
                diceType: r.diceType,
              });
            });
          });
          const totalDamage = damageRolls.reduce(
            (acc, cur) => acc + cur.rolled,
            0
          );
          logPush({
            from: `Damage Roll: ${weapon.name}`,
            roll: {
              rolls: damageRolls,
              total: totalDamage,
              plus: 0,
            },
            logType: 'roll',
          });
        }}
      >
        Damage Roll
      </button>
    </div>
  );
};

interface Props {
  logPush: (newLog: Log) => void;
}

const WeaponRoller = ({ logPush }: Props) => {
  const { equippedWeapons } = useInventory();
  const weaponAttacks = useAppSelector(
    (state) => state.character.state?.customAttacks
  );

  const customWeaponAttacks = useMemo(() => {
    return weaponAttacks || [];
  }, [weaponAttacks]);
  return (
    <div className="flex flex-col h-full w-full">
      <div className="h-full flex justify-center items-center w-full flex-col  bg-base-300 rounded-xl p-2">
        {equippedWeapons.length > 0 || customWeaponAttacks.length > 0 ? (
          <>
            {equippedWeapons.map((weapon, index) => (
              <SingleWeapon
                key={index}
                weaponData={weapon.Weapon}
                logPush={logPush}
              />
            ))}
            {customWeaponAttacks.map((weapon, index) => (
              <SingleWeapon
                key={index}
                weaponData={{
                  name: weapon.name,
                  damage: weapon.damage,
                  SpecialProperties: [],
                  WeaponPropertyInstance: [],
                  ammunition: null,
                  ammunitionId: null,
                  id: v4(),
                  isRanged: false,
                  isSimple: true,
                }}
                logPush={logPush}
              />
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

export default WeaponRoller;
