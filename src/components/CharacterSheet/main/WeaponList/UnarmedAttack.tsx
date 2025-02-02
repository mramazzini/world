import useLoadout, { EquippedState } from '@/hooks/useLoadout';
import useLog from '@/hooks/useLog';
import Tooltip from '@/Utility/Tooltip';
import { DamageTypes } from '@prisma/client';
import { useAppSelector } from '@/store/hooks';
import { useMemo } from 'react';

interface UnarmedAttack {
  id: string;
  attack: string;
  damage: string;
  twoHandedDamage: string;
  damageType: DamageTypes;
}

const UnarmedAttack = () => {
  const { equippedState } = useLoadout();
  const { diceLogPush } = useLog();
  const { activeEffects } = useAppSelector((state) => state.sheet);

  const unarmedAttacks: UnarmedAttack[] = useMemo(() => {
    const unarmedatts: UnarmedAttack[] = [];
    let count = 2;
    for (const effect of activeEffects) {
      if (
        effect.unarmedAttack &&
        effect.unarmedDamage &&
        effect.unarmedDamageType
      ) {
        unarmedatts.push({
          id: count.toString(),
          attack: effect.unarmedAttack,
          damage: effect.unarmedDamage,
          twoHandedDamage: effect.twoHandedDamage ?? effect.unarmedDamage,
          damageType: effect.unarmedDamageType,
        });
        count++;
      }
    }

    if (unarmedatts.length === 0) {
      unarmedatts.push({
        id: '1',
        attack: '1d20 + PROF + STR',
        damage: '1 + STR',
        twoHandedDamage: '1 + STR',
        damageType: DamageTypes.BLUDGEONING,
      });
    }

    return unarmedatts;
  }, [activeEffects]);

  switch (equippedState) {
    case EquippedState.Unarmed:
      return unarmedAttacks.map((unarmedAttack, index) => (
        <div
          key={unarmedAttack.id}
          className="flex flex-col items-center border-primary border p-2 rounded-xl h-full w-64"
        >
          <p>Unarmed Attack</p>
          <p className="text-xs">
            <span className="badge-success badge badge-xs font-bold p-2">
              Proficient
            </span>
          </p>
          <div className="divider m-0"></div>

          <div className=" join mb-2 w-full flex flex-row justify-center">
            <Tooltip
              element={
                <span className=" bg-info text-info-content badge-lg badge p-2 flex justify-center items-center  join-item text-xs">
                  i
                </span>
              }
              title="Attack Roll"
            >
              Roll a d20, add your ability modifier. If you are proficient, add
              your proficiency bonus. You must meet or exceed the target&apos;s
              AC to land your attack.
            </Tooltip>
            <span className="join-item px-4 text-xs bg-base-100 text-center font-bold flex items-center justify-center">
              Attack
            </span>
            <button
              className="btn btn-accent btn-xs join-item"
              onClick={(e) => {
                e.preventDefault();
                diceLogPush(
                  unarmedAttack.attack,
                  `Attack Roll: Unarmed Strike`
                );
              }}
            >
              {unarmedAttack.attack}
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
              Once you land an attack, roll the damage dice for the weapon. Add
              your ability modifier to the total.
            </Tooltip>
            <span className="join-item px-4 text-xs bg-base-100 text-center font-bold flex items-center justify-center h-6">
              Damage
            </span>
            <button
              className="btn btn-accent btn-xs mb-2 join-item"
              onClick={(e) => {
                e.preventDefault();
                diceLogPush(
                  `${unarmedAttack.twoHandedDamage}`,
                  `Damage Roll: Unarmed Strike`
                );
              }}
            >
              {unarmedAttack.twoHandedDamage}
            </button>
          </div>
          <p>
            <strong>{unarmedAttack.damageType.toCapitalCase()}</strong> Damage
          </p>
        </div>
      ));
    case EquippedState.OneHanded:
    case EquippedState.ShieldNoWeapon:
      return unarmedAttacks.map((unarmedAttack, index) => (
        <div
          key={unarmedAttack.id}
          className="flex flex-col items-center border-primary border p-2 rounded-xl h-full w-64"
        >
          <p>Unarmed Attack</p>
          <p className="text-xs">
            <span className="badge-success badge badge-xs font-bold p-2">
              Proficient
            </span>
          </p>
          <div className="divider m-0"></div>

          <div className=" join mb-2 w-full flex flex-row justify-center">
            <Tooltip
              element={
                <span className=" bg-info text-info-content badge-lg badge p-2 flex justify-center items-center  join-item text-xs">
                  i
                </span>
              }
              title="Attack Roll"
            >
              Roll a d20, add your ability modifier. If you are proficient, add
              your proficiency bonus. You must meet or exceed the target&apos;s
              AC to land your attack.
            </Tooltip>
            <span className="join-item px-4 text-xs bg-base-100 text-center font-bold flex items-center justify-center">
              Attack
            </span>
            <button
              className="btn btn-accent btn-xs join-item"
              onClick={(e) => {
                e.preventDefault();
                diceLogPush(
                  unarmedAttack.attack,
                  `Attack Roll: Unarmed Strike`
                );
              }}
            >
              {unarmedAttack.attack}
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
              Once you land an attack, roll the damage dice for the weapon. Add
              your ability modifier to the total.
            </Tooltip>
            <span className="join-item px-4 text-xs bg-base-100 text-center font-bold flex items-center justify-center h-6">
              Damage
            </span>
            <button
              className="btn btn-accent btn-xs mb-2 join-item"
              onClick={(e) => {
                e.preventDefault();
                diceLogPush(
                  `${unarmedAttack.damage}`,
                  `Damage Roll: Unarmed Strike`
                );
              }}
            >
              {unarmedAttack.damage}
            </button>
          </div>
          <p>
            <strong>{unarmedAttack.damageType.toCapitalCase()}</strong> Damage
          </p>
        </div>
      ));
    default:
      return null;
  }
};

export default UnarmedAttack;
