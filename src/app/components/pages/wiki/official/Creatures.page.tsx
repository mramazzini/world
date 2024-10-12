"use client";
import Info from "@/app/components/UI/Info";
import { AbilityToModifier } from "@/app/components/Utility/characterStateFunctions/calc/AbilityToModifier";
import { combatRatingToProficiency } from "@/app/components/Utility/combatRatingToProficiency";
import P from "@/app/components/Utility/FormatAndSanitize";
import NewLineParse from "@/app/components/Utility/NewLineParse";
import Tooltip from "@/app/components/Utility/Tooltip";
import { skillAtritbuteMap, WeaponProperties } from "@/lib/globalVars";
import {
  ArmorInfo,
  CreatureInfo,
  ItemInfo,
  Level,
  SpellLevel,
  WeaponInfo,
  WeaponPropertyNames,
} from "@/lib/utils/types/types";
import {
  Ability,
  ArmorClassProtocol,
  ArmorType,
  AssociatedModel,
  Skill,
} from "@prisma/client";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import "@/lib/string.extensions";
import { getArmor } from "@/lib/actions/db/armor/read.actions";
import { sizeToHitDie } from "@/app/components/Utility/sizeToHitdie";
import FeatureList from "@/app/components/UI/FeatureList";
import CommentSection from "@/app/components/CommentSection/CommentSection";
import WeaponDescription from "@/app/components/Utility/WeaponDescription";
import ModelLink from "@/app/components/Utility/ModelLink";
import numPlace from "@/lib/utils/numPlace";
import AbilityToText from "@/lib/utils/AbilityToText";
import numberArray from "@/lib/utils/numberArray";
import { fullCaster } from "../../../../../../prisma/seeds/Classes/SpellSlotsUtil";
interface Props {
  creature: CreatureInfo;
}
const CreaturePage = ({ creature }: Props) => {
  console.log(creature);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const rollFromFormula = (formula: string) => {
    console.log(formula);
    const data = formula
      .replaceAll(" - ", " + -")
      .split("+")
      .map((d) => d.trim())
      .map((d) => {
        if (d.includes("d")) {
          const [num, sides] = d.split("d").map((d) => parseInt(d));
          let total = 0;
          for (let i = 0; i < num; i++) {
            total += Math.floor(Math.random() * sides) + 1;
          }
          return total;
        } else {
          return parseInt(d);
        }
      });
    return data.reduce((a, b) => a + b);
  };
  const attCalc = (att: number) => {
    return AbilityToModifier(att) >= 0
      ? `+${AbilityToModifier(att)}`
      : AbilityToModifier(att);
  };
  const calcAC = (creature: CreatureInfo) => {
    const equipped = creature.armorEquipped;
    const shield = creature.shieldEquipped;
    const dex = AbilityToModifier(creature.DEX);
    const naturalArmor = creature.naturalArmorBonus;

    function getACFromItem(item: ItemInfo | null) {
      if (!item) return 10 + dex;
      const armor = item.Armor;
      if (!armor) return 10 + dex;
      if (armor.armorType === ArmorType.LIGHT) {
        return dex + armor.armorClass;
      }
      if (armor.armorType === ArmorType.MEDIUM) {
        return Math.min(2, dex) + armor.armorClass;
      }
      if (armor.armorType === ArmorType.HEAVY) {
        return armor.armorClass;
      }

      return 10 + dex;
    }

    if (creature.armorClassProtocol == ArmorClassProtocol.NATURAL_ARMOR) {
      if (!naturalArmor) return 10 + dex;
      if (shield) {
        if (!shield.Armor) return 10 + dex + naturalArmor;
        return dex + naturalArmor + shield.Armor?.armorClass;
      }
      return 10 + dex + naturalArmor;
    } else {
      //normal calc
      const baseAC = getACFromItem(equipped);
      if (shield) {
        if (!shield.Armor) return baseAC;
        return baseAC + shield.Armor.armorClass;
      }
      return baseAC;
    }
  };

  const calcHP = (creature: CreatureInfo) => {
    // hitdieAmount * (hitdie/2 + 0.5) + con * hitdieAmount

    const hitDie = sizeToHitDie[creature.size];
    return (
      Math.floor(creature.hitDiceAmount * (hitDie / 2 + 0.5)) + //average hit points
      AbilityToModifier(creature.CON) * creature.hitDiceAmount
    );
  };

  const calcPP = (creature: CreatureInfo) => {
    const skill = Skill.PERCEPTION;
    const multiplier = creature.skillExpertise.includes(skill as Skill)
      ? 2
      : creature.skillProficiencies.includes(skill as Skill)
      ? 1
      : 0;

    const ability = skillAtritbuteMap[skill as Skill] as Ability;
    const modifier = AbilityToModifier(creature[ability]);
    const total =
      modifier +
      multiplier * combatRatingToProficiency(creature.challengeRating);
    return total + 10;
  };

  return (
    <main className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:w-4/5">
          <h1>{creature.name}</h1>
          <p className="italic pr-4">
            <NewLineParse>{creature.description}</NewLineParse>
          </p>
          <p className="pt-4">
            Source:
            <span className="font-bold italic">
              {" "}
              Systems Reference Document
            </span>
          </p>
        </div>
        <div className="flex justify-start items-start md:items-end my-2 flex-col ">
          {/* go back */}
          <Link
            className={"btn btn-ghost border border-gray-500 w-full"}
            href={`/creature`}
          >
            View all Creatures -&gt;
          </Link>
        </div>
      </div>
      <div className="divider"></div>

      <div className="flex flex-col gap-4  items-center">
        {/* attributes */}
        <div className="bg-base-300 rounded-xl p-4 w-full">
          <h2 className="divider">Attributes</h2>

          <div className="flex flex-wrap gap-4  items-center justify-around   w-full">
            <div className="flex flex-col gap-2 items-center">
              <p className="text-lg font-bold badge badge-neutral text-white">
                STR
              </p>
              <div className="join ">
                <div className="bg-neutral text-neutral-content h-8 flex items-center justify-center px-2 join-item rounded-xl">
                  <span className="badge font-bold">
                    {creature.STR} ({attCalc(creature.STR)})
                  </span>
                </div>
                <button
                  className="btn btn-accent btn-sm join-item"
                  onClick={() => {
                    console.log(
                      rollFromFormula(
                        `1d20 + ${AbilityToModifier(creature.STR)}`
                      )
                    );
                  }}
                >
                  Roll
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-lg font-bold badge badge-neutral text-white">
                DEX
              </p>
              <div className="join ">
                <div className=" bg-neutral rounded-xl text-neutral-content h-8 flex items-center justify-center px-2 join-item">
                  <span className="badge font-bold">
                    {creature.DEX} ({attCalc(creature.DEX)})
                  </span>
                </div>
                <button
                  className="btn btn-accent btn-sm join-item"
                  onClick={() => {
                    console.log(
                      rollFromFormula(
                        `1d20 + ${AbilityToModifier(creature.DEX)}`
                      )
                    );
                  }}
                >
                  Roll
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-lg font-bold badge badge-neutral text-white">
                CON
              </p>
              <div className="join ">
                <div className="bg-neutral rounded-xl text-neutral-content h-8 flex items-center justify-center px-2 join-item">
                  <span className="badge font-bold">
                    {" "}
                    {creature.CON} ({attCalc(creature.CON)})
                  </span>
                </div>
                <button
                  className="btn btn-accent btn-sm join-item"
                  onClick={() => {
                    console.log(
                      rollFromFormula(
                        `1d20 + ${AbilityToModifier(creature.CON)}`
                      )
                    );
                  }}
                >
                  Roll
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-lg font-bold badge badge-neutral text-white">
                INT
              </p>
              <div className="join ">
                <div className=" bg-neutral rounded-xl text-neutral-content h-8 flex items-center justify-center px-2 join-item">
                  <span className="badge font-bold">
                    {" "}
                    {creature.INT} ({attCalc(creature.INT)})
                  </span>
                </div>
                <button
                  className="btn btn-accent btn-sm join-item"
                  onClick={() => {
                    console.log(
                      rollFromFormula(
                        `1d20 + ${AbilityToModifier(creature.INT)}`
                      )
                    );
                  }}
                >
                  Roll
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-lg font-bold badge badge-neutral text-white">
                WIS
              </p>
              <div className="join ">
                <div className=" rounded-xl bg-neutral text-neutral-content h-8 flex items-center justify-center px-2 join-item">
                  <span className="badge font-bold">
                    {creature.WIS} ({attCalc(creature.WIS)})
                  </span>
                </div>
                <button
                  className="btn btn-accent btn-sm join-item"
                  onClick={() => {
                    console.log(
                      rollFromFormula(
                        `1d20 + ${AbilityToModifier(creature.WIS)}`
                      )
                    );
                  }}
                >
                  Roll
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-lg font-bold badge badge-neutral text-white">
                CHA
              </p>
              <div className="join ">
                <div className=" rounded-xl bg-neutral text-neutral-content h-8 flex items-center justify-center px-2 join-item">
                  <span className="badge font-bold">
                    {creature.CHA} ({attCalc(creature.CHA)})
                  </span>
                </div>
                <button
                  className="btn btn-accent btn-sm join-item"
                  onClick={() => {
                    console.log(
                      rollFromFormula(
                        `1d20 + ${AbilityToModifier(creature.CHA)}`
                      )
                    );
                  }}
                >
                  Roll
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* stats */}
        <div className="flex flex-col gap-4  items-center justify-around  bg-base-300 rounded-xl p-4 w-full rounded-xl">
          <table className="table w-full table-zebra bg-base-100">
            <thead>
              <tr>
                <th>Stat</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Creature Type</td>
                <td>
                  <em className=" font-bold">
                    {creature.size.toCapitalCase()}{" "}
                    {creature.creatureType.toCapitalCase().replaceAll("_", " ")}
                  </em>
                </td>
              </tr>
              <tr>
                <td>Alignment</td>
                <td>
                  <span className="font-bold">
                    {creature.alignment?.toCapitalCase().replaceAll("_", " ") ||
                      "Unaligned"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Armor Class</td>
                <td>
                  <span className="font-bold">
                    {calcAC(creature)} (
                    <em>{creature.armorClassDescription}</em>)
                  </span>
                </td>
              </tr>
              <tr>
                <td>Hit Points</td>
                <td>
                  <span className=" font-bold">
                    {calcHP(creature)} ({creature.hitDiceAmount}d
                    {sizeToHitDie[creature.size]} +{" "}
                    {AbilityToModifier(creature.CON) * creature.hitDiceAmount})
                  </span>
                </td>
              </tr>
              <tr>
                <td>Combat Rating</td>
                <td>
                  <span className=" font-bold">
                    {creature.challengeRating} CR
                  </span>
                </td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>
                  <span className="font-bold">
                    {creature.speed} ft{" "}
                    {creature.flyingSpeed && `(${creature.flyingSpeed} ft)`}{" "}
                    {creature.swimmingSpeed && `(${creature.swimmingSpeed} ft)`}{" "}
                    {creature.climbingSpeed && `(${creature.climbingSpeed} ft)`}{" "}
                    {creature.burrowingSpeed &&
                      `(${creature.burrowingSpeed} ft)`}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Senses</td>
                <td>
                  <span className=" font-bold">
                    Passive Perception {calcPP(creature)}{" "}
                    {creature.darkvision &&
                      `Darkvision ${creature.darkvision} ft`}{" "}
                    {creature.blindsight &&
                      `Blindsight ${creature.blindsight} ft`}{" "}
                    {/* {creature.tremorsense &&
                      `Tremorsense ${creature.tremorsense} ft`}{" "}
                    {creature.truesight && `Truesight ${creature.truesight} ft`} */}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Languages</td>
                <td>
                  <span className=" font-bold">
                    {creature.languageDescription || "None"}
                  </span>
                </td>
              </tr>
              {creature.damageResistances.length > 0 && (
                <tr>
                  <td>Damage Resistances</td>
                  <td>
                    <span className=" font-bold capitalize">
                      {creature.damageResistances
                        .join(", ")
                        .replaceAll("_", " ")
                        .toLowerCase()}
                    </span>
                  </td>
                </tr>
              )}
              {creature.damageImmunities.length > 0 && (
                <tr>
                  <td>Damage Immunities</td>
                  <td>
                    <span className=" font-bold capitalize">
                      {creature.damageImmunities
                        .join(", ")
                        .replaceAll("_", " ")
                        .toLowerCase()}
                    </span>
                  </td>
                </tr>
              )}
              {creature.conditionImmunities.length > 0 && (
                <tr>
                  <td>Condition Immunities</td>
                  <td>
                    <span className=" font-bold capitalize">
                      {creature.conditionImmunities
                        .join(", ")
                        .replaceAll("_", " ")
                        .toLowerCase()}
                    </span>
                  </td>
                </tr>
              )}
              {creature.damageVulnerabilities.length > 0 && (
                <tr>
                  <td>Damage Vulnerabilities</td>
                  <td>
                    <span className=" font-bold capitalize">
                      {creature.damageVulnerabilities
                        .join(", ")
                        .replaceAll("_", " ")
                        .toLowerCase()}
                    </span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* skills */}
        <div className="flex flex-col gap-4  items-center justify-around  bg-base-300 rounded-xl p-4 w-full">
          <h2 className="divider">Skills</h2>
          {creature.skillProficiencies.length > 0 && (
            <p className="text-lg">
              <span className="font-bold">Proficiencies: </span>
              <P>
                {creature.skillProficiencies
                  .map((s) => s.toCapitalCase())
                  .join(", ")
                  .replaceAll("_", " ") || "None"}{" "}
              </P>
            </p>
          )}
          {creature.skillExpertise.length > 0 && (
            <p className="text-lg">
              <span className="font-bold">Expertise: </span>
              <P>
                {creature.skillExpertise
                  .map((s) => s.toCapitalCase())
                  .join(", ")
                  .replaceAll("_", " ") || "None"}{" "}
              </P>
            </p>
          )}
          <label>Show All Skills</label>
          <input
            type="checkbox"
            className="toggle"
            onChange={() => setShowAllSkills(!showAllSkills)}
          />
          <ul className="flex flex-wrap gap-4 items-center justify-center">
            {Object.keys(Skill).map((skill, index) => {
              const multiplier = creature.skillExpertise.includes(
                skill as Skill
              )
                ? 2
                : creature.skillProficiencies.includes(skill as Skill)
                ? 1
                : 0;
              if (multiplier === 0 && !showAllSkills) return null;
              const ability = skillAtritbuteMap[skill as Skill] as Ability;
              const modifier = AbilityToModifier(creature[ability]);
              const total =
                modifier +
                multiplier *
                  combatRatingToProficiency(creature.challengeRating);
              const display = total >= 0 ? `+${total}` : total;

              return (
                <Fragment key={skill}>
                  <li className="bg-base-200 rounded-xl p-0 md:p-4">
                    <div className="flex flex-row join items-center w-64 ">
                      <p className="join-item bg-neutral font-bold text-md text-neutral-content p-1 pl-2 grow">
                        <P>{skill.toCapitalCase().replaceAll("_", " ")}</P>
                      </p>

                      <p className="bg-neutral text-neutral-content join-item h-auto p-1 px-2">
                        <span className="badge font-bold"> {display}</span>
                      </p>
                      <button
                        key={index}
                        className="btn btn-accent btn-sm join-item"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(rollFromFormula(`1d20 + ${total}`));
                        }}
                      >
                        Roll
                      </button>
                    </div>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-4 bg-base-300 rounded-xl p-4 w-full">
          <h2 className="divider">Abilities</h2>
          <FeatureList features={creature.features} />
        </div>
        {creature.actions.length > 0 && (
          <div className="flex flex-col gap-4 bg-base-300 rounded-xl p-4 w-full">
            <h2 className="divider">Actions</h2>
            <ul className="flex flex-col gap-4">
              {creature.actions.map((action, index) => (
                <li key={index} className="bg-base-200 rounded-xl p-4">
                  <h3>
                    {action.name} :{" "}
                    <em className="capitalize">{action.actionType}</em>
                  </h3>
                  <p>
                    <P>{action.description}</P>
                  </p>
                  {action.rolls && (
                    <div className="flex flex-row gap-2 items-center">
                      <h4>Rolls:</h4>
                      {action.rolls.map((roll, index) => (
                        <div
                          className="flex flex-row join items-center"
                          key={index}
                        >
                          <p className="bg-neutral text-neutral-content join-item h-auto p-1 px-2">
                            {roll.name}:{" "}
                            <span className="badge">{roll.formula}</span>
                          </p>
                          <button
                            key={index}
                            className="btn btn-accent btn-sm join-item"
                            onClick={(e) => {
                              e.preventDefault();
                              console.log(rollFromFormula(roll.formula));
                            }}
                          >
                            Roll
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        {(creature.wieldingItems.length > 0 ||
          creature.armorEquipped ||
          creature.shieldEquipped) && (
          <>
            <div className="flex flex-col gap-4 bg-base-300 rounded-xl p-4 w-full">
              <h2 className="divider">Items </h2>
              {(creature.armorEquipped || creature.shieldEquipped) && (
                <div className="bg-base-200 rounded-xl p-4">
                  {creature.armorEquipped && (
                    <div className="flex flex-row gap-4 items-center">
                      <h4>Armor:</h4>
                      <p className="bg-neutral text-neutral-content join-item h-auto p-1 px-2">
                        <P>{`^${creature.armorEquippedId}{${creature.armorEquipped.name}}^`}</P>{" "}
                        - AC {creature.armorEquipped.Armor?.armorClass}
                      </p>
                    </div>
                  )}
                  {creature.shieldEquipped && (
                    <div className="flex flex-row gap-4 items-center">
                      <h4>Shield:</h4>
                      <p className="bg-neutral text-neutral-content join-item h-auto p-1 px-2">
                        <P>{`^${creature.shieldEquippedId}{${creature.shieldEquipped.name}}^`}</P>{" "}
                        - AC +{creature.shieldEquipped.Armor?.armorClass}
                      </p>
                    </div>
                  )}
                </div>
              )}
              {creature.wieldingItems.length > 0 && (
                <ul className="flex flex-col gap-4">
                  {creature.wieldingItems.map(
                    (item, index) =>
                      item.Weapon && (
                        <li key={index} className="bg-base-200 rounded-xl p-4">
                          <h4 className="text-xl p-0 mb-2">
                            <P>{`^${item.id}{${item.name}}^`}</P>
                          </h4>
                          <div>
                            {WeaponDescription(
                              item.Weapon,
                              creature.STR,
                              creature.DEX,
                              combatRatingToProficiency(
                                creature.challengeRating
                              )
                            ).map((attack, index) => (
                              <Fragment key={index}>
                                <div>
                                  <h5 className="font-bold">{attack.name}</h5>
                                  <p>{attack.description}</p>
                                  <div className="flex flex-row gap-2 items-center">
                                    <h4>Rolls:</h4>
                                    {attack.attackDiceFormula && (
                                      <div className="flex flex-row join items-center">
                                        <p className="bg-neutral text-neutral-content join-item h-auto p-1 px-2">
                                          Attack:{" "}
                                          <span className="badge">
                                            {attack.attackDiceFormula}
                                          </span>
                                        </p>
                                        <button
                                          className="btn btn-accent btn-sm join-item"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            console.log(
                                              rollFromFormula(
                                                attack.attackDiceFormula
                                              )
                                            );
                                          }}
                                        >
                                          Roll
                                        </button>
                                      </div>
                                    )}
                                    {attack.damageDiceFormula && (
                                      <div className="flex flex-row join items-center">
                                        <p className="bg-neutral text-neutral-content join-item h-auto p-1 px-2">
                                          Damage:{" "}
                                          <span className="badge">
                                            {attack.damageDiceFormula}
                                          </span>
                                        </p>
                                        <button
                                          className="btn btn-accent btn-sm join-item"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            console.log(
                                              rollFromFormula(
                                                attack.damageDiceFormula
                                              )
                                            );
                                          }}
                                        >
                                          Roll
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div className="divider my-2" />
                              </Fragment>
                            ))}
                          </div>
                        </li>
                      )
                  )}
                </ul>
              )}
            </div>
            {creature.casterLevel &&
              creature.spellcastingAbility &&
              creature.spellSaveDC &&
              creature.spellAttackBonus && (
                <div className="flex flex-col gap-4 bg-base-300 rounded-xl p-4 w-full">
                  <h2 className="divider">Spells </h2>
                  <p>
                    The {creature.name} is a(n) {numPlace(creature.casterLevel)}{" "}
                    level spellcaster. Its spellcasting ability is{" "}
                    <span className="font-bold badge">
                      {AbilityToText(creature.spellcastingAbility)}
                    </span>
                    . It has a spell save DC of{" "}
                    <span className="font-bold badge">
                      {creature.spellSaveDC}
                    </span>{" "}
                    and a spell attack bonus of{" "}
                    <span className="font-bold badge">
                      +{creature.spellAttackBonus}
                    </span>
                    .
                  </p>

                  <div className="bg-base-200 rounded-xl p-4 grid gap-4 grid-cols-1 lg:grid-cols-3">
                    {/* at will */}
                    {creature.freeSpells.length > 0 && (
                      <div className="bg-base-100 rounded-xl p-4">
                        <h3 className="p-0">Free Spells and Cantrips</h3>
                        <div className="divider m-0" />
                        <ul>
                          {creature.freeSpells.map((spell, index) => (
                            <li key={index} className="list-disc ml-4">
                              <p>
                                <P>{`%${spell.id}{${spell.name}}%`}</P> (at
                                will)
                              </p>
                            </li>
                          ))}
                          {creature.spellsPrepared.length > 0 && (
                            <>
                              {creature.spellsPrepared
                                .filter((spell) => spell.level === 0)
                                .map((spell, index) => (
                                  <li key={index} className="list-disc ml-4">
                                    <p>
                                      <P>{`%${spell.id}{${spell.name}}%`}</P>
                                    </p>
                                  </li>
                                ))}
                            </>
                          )}
                        </ul>
                      </div>
                    )}
                    {creature.spellsPrepared.length > 0 && (
                      <>
                        {numberArray(1, 9).map((level) => {
                          const levelData =
                            fullCaster[creature.casterLevel as Level];
                          if (!levelData) return null;
                          const spellLevelData = levelData[level as SpellLevel];
                          return (
                            <div
                              key={level}
                              className="bg-base-100 rounded-xl p-4"
                            >
                              <h3 className="p-0">
                                {numPlace(level)} Level ({spellLevelData} Slots)
                              </h3>
                              <div className="divider m-0" />

                              <ul>
                                {creature.spellsPrepared
                                  .filter((spell) => spell.level === level)
                                  .map((spell, index) => (
                                    <li key={index} className="list-disc ml-4">
                                      <p>
                                        <P>{`%${spell.id}{${spell.name}}%`}</P>
                                      </p>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                </div>
              )}
          </>
        )}
      </div>
      <CommentSection model={AssociatedModel.CREATURE} id={creature.id} />
    </main>
  );
};
export default CreaturePage;
