import Info from '@/components/UI/Info';
import useInventory from '@/hooks/useInventory';
import useLoadout from '@/hooks/useLoadout';
import useLog from '@/hooks/useLog';
import useModifier from '@/hooks/useModifier';
import useProficiency from '@/hooks/useProficiency';
import { WeaponInfo } from '@/lib/types/modelInfo';
import { Ability } from '@prisma/client';
import { useEffect, useMemo, useState } from 'react';

const WeaponDisplay = ({ weaponData }: { weaponData: WeaponInfo }) => {
  const [selectedAbility, setSelectedAbility] = useState<Ability>(Ability.STR);
  const { isVersatile } = useInventory();
  const { equippedState } = useLoadout();
  const { isProficientInWeapon, proficiencyBonus } = useProficiency();
  const { getAbilityModifier } = useModifier();
  const { diceLogPush } = useLog();
  const [isProficient, setIsProficient] = useState(false);

  useEffect(() => {
    isProficientInWeapon(weaponData.id).then((res) => {
      setIsProficient(res);
    });
  }, [weaponData.id, isProficientInWeapon]);

  const weapon = weaponData;

  const damage = useMemo(() => {
    let damage = weapon.damage;

    if (isVersatile) {
      const versatileProperty = weapon.WeaponPropertyInstance.find(
        (p) => p.Property.name === 'Versatile'
      );
      if (
        versatileProperty &&
        versatileProperty.versatileDamage &&
        equippedState === 'One Handed'
      ) {
        damage = [versatileProperty.versatileDamage];
      }
    }

    return damage;
  }, [
    isVersatile,
    weapon.damage,
    weapon.WeaponPropertyInstance,
    equippedState,
  ]);

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
        onClick={(e) => {
          e.preventDefault();
          diceLogPush(
            `1d20 + ${getAbilityModifier(selectedAbility)} ${
              isProficient ? `+ ${proficiencyBonus}` : ''
            }`,
            `Attack Roll: ${weapon.name}`
          );
        }}
      >
        Attack Roll
      </button>
      <button
        className="btn btn-accent join-item"
        onClick={(e) => {
          e.preventDefault();
          for (const damage of weapon.damage) {
            diceLogPush(
              `${damage.formula} + ${getAbilityModifier(selectedAbility)}`,
              `Damage Roll: ${weapon.name}`
            );
          }
        }}
      >
        Damage Roll
      </button>
    </div>
  );
};

export default WeaponDisplay;
