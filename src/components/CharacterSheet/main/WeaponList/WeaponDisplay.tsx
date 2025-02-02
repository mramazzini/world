import useLoadout from '@/hooks/useLoadout';
import useLog from '@/hooks/useLog';
import { WeaponInfo } from '@/lib/types/modelInfo';
import AbilityToText from '@/lib/utils/toText/AbilityToText';
import Tooltip from '@/Utility/Tooltip';
import { Ability } from '@prisma/client';
import { useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '@/store/hooks';
import useProficiencySelector from '@/hooks/useProficiencySelector';
import { weaponInWeaponGroup } from '@/lib/utils/weaponGroups';

const WeaponDisplay = ({ weaponData }: { weaponData: WeaponInfo }) => {
  const [selectedAbility, setSelectedAbility] = useState<Ability>(Ability.STR);
  const { equippedState } = useLoadout();
  const { isVersatile, activeEffects } = useAppSelector((state) => state.sheet);
  const { isProficientInWeapon } = useProficiencySelector();
  const { diceLogPush } = useLog();
  const [isProficient, setIsProficient] = useState(false);

  useEffect(() => {
    isProficientInWeapon(weaponData.id).then((res) => {
      setIsProficient(res);
    });
  }, [weaponData.id, isProficientInWeapon]);

  const weapon = weaponData;

  const attack = useMemo(() => {
    let attackRoll = '1d20';

    if (isProficient) {
      attackRoll += ` + PROF`;
    }

    attackRoll += ` + ${selectedAbility}`;

    //add effects
    activeEffects.forEach((effect) => {
      if (effect.attackModifier && effect.weaponGroupRef) {
        if (weaponInWeaponGroup(weapon, effect.weaponGroupRef)) {
          attackRoll += ` ${effect.attackModifier}`;
        }
      }
    });

    return attackRoll;
  }, [isProficient, activeEffects, selectedAbility, weapon]);

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
        damage = versatileProperty.versatileDamage;
      }
    }

    damage = `${damage} + ${selectedAbility}`;

    //add effects
    activeEffects.forEach((effect) => {
      if (effect.damageModifier && effect.weaponGroupRef) {
        if (weaponInWeaponGroup(weapon, effect.weaponGroupRef)) {
          damage += ` ${effect.damageModifier}`;
        }
      }
    });

    return damage;
  }, [isVersatile, equippedState, selectedAbility, activeEffects, weapon]);

  return (
    <div className="flex flex-col items-center border-primary border p-2 rounded-xl h-full w-64">
      <p>{weapon.name}</p>
      <p className="text-xs">
        {isProficient ? (
          <span className="badge-success badge badge-xs font-bold p-2">
            Proficient
          </span>
        ) : (
          <span className="badge-error badge badge-xs font-bold p-2">
            Not Proficient
          </span>
        )}
      </p>
      <div className="divider m-0"></div>
      <div className="join mx-2 mt-1">
        <Tooltip
          element={
            <span className=" bg-info text-info-content badge-lg badge p-2 flex justify-center items-center  join-item text-xs">
              i
            </span>
          }
        >
          Make an ability check with this tool. Select the ability score your GM
          tells you to roll with.
        </Tooltip>
        <select
          className="mb-2 join-item w-32 select text-xs select-xs text-center font-bold"
          onChange={(e) => {
            setSelectedAbility(e.target.value as Ability);
          }}
        >
          {Object.values(Ability).map((ability, index) => (
            <option key={index} value={ability}>
              {AbilityToText(ability)}
            </option>
          ))}
        </select>
      </div>
      <div className=" join mb-2 w-full flex flex-row justify-center">
        <Tooltip
          element={
            <span className=" bg-info text-info-content badge-lg badge p-2 flex justify-center items-center  join-item text-xs">
              i
            </span>
          }
          title="Attack Roll"
        >
          Roll a d20, add your ability modifier. If you are proficient, add your
          proficiency bonus. You must meet or exceed the target&apos;s AC to
          land your attack.
        </Tooltip>
        <span className="join-item px-4 text-xs bg-base-100 text-center font-bold flex items-center justify-center">
          Attack
        </span>
        <button
          className="btn btn-accent btn-xs join-item"
          onClick={(e) => {
            e.preventDefault();
            diceLogPush(attack, `Attack Roll: ${weapon.name}`);
          }}
        >
          {attack}
        </button>
      </div>
      <div className=" join mb-2 w-full flex flex-row justify-center">
        <Tooltip
          element={
            <span className=" bg-info text-info-content badge-lg badge p-2 flex justify-center items-center  join-item text-xs">
              i
            </span>
          }
          title="Damage Roll"
        >
          Once you land an attack, roll the damage dice for the weapon. Add your
          ability modifier to the total.
        </Tooltip>
        <span className="join-item px-4 text-xs bg-base-100 text-center font-bold flex items-center justify-center h-6">
          Damage
        </span>
        <button
          className="btn btn-accent btn-xs mb-2 join-item"
          onClick={(e) => {
            e.preventDefault();
            diceLogPush(damage, `Damage Roll: ${weapon.name}`);
          }}
        >
          {damage}
        </button>
      </div>
      <p>
        <strong>{weapon.damageType.toCapitalCase()}</strong> Damage
      </p>
    </div>
  );
};

export default WeaponDisplay;
