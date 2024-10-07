"use client";
import Info from "@/app/components/UI/Info";
import { AbilityToModifier } from "@/app/components/Utility/characterStateFunctions/calc/AbilityToModifier";
import { memoizeGetItem } from "@/app/components/Utility/globalCache";
import { roll } from "@/app/components/Utility/roll";
import {
  AbilityScores,
  ArmorInfo,
  ItemInfo,
  Log,
  WeaponID,
  WeaponInfo,
} from "@/lib/utils/types/types";
import { Ability } from "@prisma/client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { v4 } from "uuid";

const SingleWeapon = ({
  weapon,
  abilities,
  logPush,
  isVersatile,
  isProficient,
  proficiencyBonus,
  flatDamage,
}: {
  weapon: WeaponInfo;
  abilities: AbilityScores;
  logPush: (newLog: Log) => void;
  isVersatile?: boolean;
  isProficient?: boolean;
  proficiencyBonus?: number;
  flatDamage?: PrismaJson.FlatDamage;
}) => {
  const [selectedAbility, setSelectedAbility] = useState<Ability>(Ability.STR);
  //   find the versatile damage
  let damage = weapon.damage;
  if (isVersatile) {
    const versatileProperty = weapon.properties.find(
      (p) => p.property.name === "Versatile"
    );
    if (versatileProperty && versatileProperty.versatileDamage) {
      damage = [versatileProperty.versatileDamage];
    }
  }
  let profModifier = 0;
  if (isProficient) {
    profModifier = proficiencyBonus || 0;
  }
  return (
    <div className=" join m-2 w-full">
      <span className="join-item border border-primary  p-2 bg-base-100 w-full items-center flex whitespace-nowrap overflow-hidden text-ellipsis">
        <strong>{weapon.name}: </strong>
        {damage.map(
          (damage, index) =>
            damage.numberOfDice > 0 && (
              <span key={index}>
                <span className="badge badge-neutral ml-2">
                  {damage.numberOfDice}d{damage.dice}
                </span>{" "}
                <span>+ {AbilityToModifier(abilities[selectedAbility])} </span>
                <span className="ml-2 badge badge-secondary">
                  {damage.type.toCapitalCase()}{" "}
                </span>
              </span>
            )
        )}
      </span>
      <div
        className={` px-2 join-item flex items-center text-center font-bold ${
          isProficient
            ? "bg-neutral text-neutral-content border-primary border-y "
            : "text-error-content bg-error"
        }`}
      >
        <Info
          tooltip={`You are ${
            isProficient
              ? "proficient in this weapon"
              : "not proficient in this weapon"
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
              plus:
                AbilityToModifier(abilities[selectedAbility]) + profModifier,
              rolls: [
                {
                  rolled: rollRes,
                  diceType: 20,
                },
              ],
              total:
                rollRes +
                AbilityToModifier(abilities[selectedAbility]) +
                profModifier,
            },
            logType: "roll",
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
            for (let i = 0; i < damage.numberOfDice; i++) {
              damageRolls.push({
                rolled: roll(1, damage.dice),
                diceType: damage.dice,
              });
            }
          });
          const totalDamage = damageRolls.reduce(
            (acc, cur) => acc + cur.rolled,
            0
          );
          logPush({
            from: `Damage Roll: ${weapon.name}`,
            roll: {
              plus:
                AbilityToModifier(abilities[selectedAbility]) +
                (flatDamage?.amount || 0),
              rolls: damageRolls,
              total:
                totalDamage +
                AbilityToModifier(abilities[selectedAbility]) +
                (flatDamage?.amount || 0),
            },
            logType: "roll",
          });
        }}
      >
        Damage Roll
      </button>
    </div>
  );
};

interface Props {
  equipped: WeaponID[];
  abilities: AbilityScores;
  logPush: (newLog: Log) => void;
  proficiencyBonus: number;
  weaponProficiencies: WeaponID[];
  customWeaponAttacks: PrismaJson.CustomWeapon[];
}

const WeaponRoller = ({
  equipped,
  abilities,
  logPush,
  proficiencyBonus,
  weaponProficiencies,
  customWeaponAttacks,
}: Props) => {
  const [weapons, setWeapons] = useState<WeaponInfo[]>([]);
  const [shields, setShields] = useState<ArmorInfo[]>([]);
  const [versatile, setVersatile] = useState<boolean>(false);
  useEffect(() => {
    const fetchWeapons = async () => {
      const weaponData = equipped.map((weapon) => memoizeGetItem(weapon));
      const res = (await Promise.all(weaponData)) as ItemInfo[];
      const weaponResults = [];
      const shieldResults = [];
      for (const weapon of res) {
        if (weapon.Weapon) {
          weaponResults.push(weapon.Weapon);
        }
        if (weapon.Armor) {
          shieldResults.push(weapon.Armor);
        }
      }
      if (
        equipped.length === 1 &&
        weaponResults[0] &&
        weaponResults[0].properties.some((p) => p.property.name === "Versatile")
      ) {
        setVersatile(true);
      } else {
        setVersatile(false);
      }
      setWeapons(weaponResults);
      setShields(shieldResults);
    };
    fetchWeapons();
  }, [equipped]);

  return (
    <div className="flex flex-col h-full w-full">
      {/* <p className="">Equipped</p>
      <div className="divider  m-0"></div> */}
      <div className="h-full flex justify-center items-center w-full flex-col  bg-base-300 rounded-xl p-2">
        {weapons.length > 0 || customWeaponAttacks.length > 0 ? (
          <>
            {weapons.map((weapon, index) => (
              <SingleWeapon
                key={index}
                weapon={weapon}
                abilities={abilities}
                logPush={logPush}
                isVersatile={versatile}
                isProficient={weaponProficiencies.includes(weapon.id)}
                proficiencyBonus={proficiencyBonus}
              />
            ))}
            {customWeaponAttacks.map((weapon, index) => (
              <SingleWeapon
                key={index}
                weapon={{
                  name: weapon.name,
                  damage: weapon.damage,
                  properties: [],
                  ammunition: null,
                  ammunitionId: null,
                  id: Math.floor(Math.random() * 100000),
                  isSimple: true,
                }}
                flatDamage={weapon.flatDamage}
                abilities={abilities}
                logPush={logPush}
                isProficient={weapon.isProficient}
                proficiencyBonus={proficiencyBonus}
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
