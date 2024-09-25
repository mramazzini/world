"use client";
import { AbilityToModifier } from "@/app/components/Utility/characterStateFunctions/calc/AbilityToModifier";
import { calcProficiency } from "@/app/components/Utility/characterStateFunctions/calc/calcProficiency";
import {
  numberColor,
  numberColorBefore,
} from "@/app/components/Utility/colorBefore";
import P from "@/app/components/Utility/FormatAndSanitize";
import JsonTable from "@/app/components/Utility/JsonTable";
import { roll } from "@/app/components/Utility/roll";
import Tooltip from "@/app/components/Utility/Tooltip";
import useLog from "@/app/components/Utility/useDicelog";
import { skillAtritbuteMap, skills } from "@/lib/globalVars";
import { ArmorInfo, CharacterInfo, WeaponID } from "@/lib/types";
import AbilityToText from "@/lib/utils/AbilityToText";
import { Skill, Ability } from "@prisma/client";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import RenderLog from "./Log";
import WeaponRoller from "./WeaponRoller";
import Resources from "./Resources";
import Tools from "./Tools";
import { calculateLevel } from "@/app/components/Utility/characterStateFunctions/calc/calcLevel";
import { calcSkillModifier } from "@/app/components/Utility/characterStateFunctions/calc/calcSkillModifier";
import { alignmentToText } from "@/app/components/Utility/alignmentToText";
import Spells from "./Spells";
import { levelUp } from "@/app/components/Utility/characterStateFunctions/update/levelup";
import LevelUp from "./LevelUp";
import Save from "./Save";
import { saveState } from "@/lib/actions/db/character/update.actions";
interface Props {
  character: CharacterInfo;
  setCharacter: (character: CharacterInfo) => void;
  regenerateCharacter: () => void;
}

const MainSheet = ({ character, setCharacter, regenerateCharacter }: Props) => {
  useEffect(() => {
    if (character) {
      console.log(character);
    }
  }, [character]);

  const { log, logPush } = useLog();

  const [hpDeltaValue, setHpDeltaValue] = useState<number>(1);

  const handleRoll = (modifier: number, from: string, dice: number = 20) => {
    const result = roll(1, dice, modifier);
    logPush({
      logType: "roll",
      roll: {
        rolls: [{ diceType: 20, rolled: result - modifier }],
        total: result,
        plus: modifier,
      },
      from,
    });
  };
  const levelUpCharacter = async () => {
    if (!character.Classes) return;
    if (!character.state) return;
    const newState = await levelUp(
      character,
      character.state,
      character.Classes[0].id
    );
    setCharacter({
      ...character,
      state: {
        ...newState,
      },
    });
  };
  const calcLevel = (character.state && calculateLevel(character.state)) || 1;

  return (
    character &&
    character.state &&
    character.Classes && (
      <div className="xl:grid flex gap-4 flex-col md:grid-flow-row grid-cols-1 md:grid-cols-12  ">
        <section className="flex flex-row bg-base-200 rounded-xl p-4 row-span-1 2xl:row-span-2 md:col-span-4 items-center ">
          <Image
            src={character.imageURL || "/images/hero.jpg"}
            width={200}
            height={200}
            className="rounded-lg w-[100px] h-[100px] object-cover object-center mr-4"
            alt="Fighter"
          />
          <div className="flex flex-col justify-">
            <h2>
              {character.name}
              <div className="divider m-0 divider-primary"></div>
            </h2>

            <p className="italic">
              Level {calcLevel},{" "}
              {character.SubRace ? (
                <a
                  href={`/subrace/${character.SubRace?.name.replaceAll(
                    " ",
                    "-"
                  )}`}
                  className="hover:link"
                >
                  {character.SubRace?.name}
                </a>
              ) : (
                <a
                  href={`/race/${character.Race?.name.replaceAll(" ", "-")}`}
                  className="hover:link"
                >
                  {character.Race?.name}
                </a>
              )}
              ,{" "}
              {character.Classes?.map((c) => (
                <Fragment key={c.name}>
                  <a
                    href={`/class/${c.name.replaceAll(" ", "-")}`}
                    className="hover:link"
                  >
                    {c.name.toCapitalCase()}
                  </a>
                </Fragment>
              ))}
              ,{" "}
              <a
                href={`/background/${character.Background?.name.replaceAll(
                  " ",
                  "-"
                )}`}
                className="hover:link"
              >
                {character.Background?.name}
              </a>{" "}
            </p>
            <p className="italic font-bold">
              {alignmentToText(character.alignment)}
            </p>
          </div>
        </section>
        <section className="flex flex-row bg-base-200 rounded-xl p-4 md:col-span-5 row-span-2">
          <div className="flex flex-wrap gap-4 justify-center items-center w-full">
            {Object.entries(character.state.abilityScores).map(
              ([key, value]) => (
                <div className="indicator " key={key}>
                  <Tooltip
                    element={
                      <span className="indicator-item badge badge-info badge-sm p-2 flex justify-center items-center z-[1] ">
                        i
                      </span>
                    }
                    title={AbilityToText(key)}
                    additionalContent={
                      <div className="bg-base-200 text-base-content">
                        <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                          <thead>
                            <tr className="bg-black/30">
                              <th>Reason</th>
                              <th>Effect</th>
                            </tr>
                          </thead>
                          <tbody>
                            {character.state?.abilityScoreReasons[
                              key as Ability
                            ]?.map((reason, index) => (
                              <tr key={index}>
                                <td>{reason.reason}</td>
                                <td>{reason.effect}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    }
                  >
                    {`Your ${AbilityToText(key)} is defined by the following:`}
                  </Tooltip>
                  <div key={key} className="flex flex-col justify-center">
                    <div className="rounded-t-xl px-2 pt-2 font-bold text-center border-primary text-xs border-t border-x w-24">
                      {AbilityToText(key)}
                    </div>
                    <div className="divider px-2 m-0 border-x border-primary"></div>
                    <div className="px-2 text-center border-x text-xl font-bold border-primary flex items-center justify-center">
                      <button
                        className="btn btn-xs btn-accent"
                        onClick={() =>
                          handleRoll(
                            AbilityToModifier(value),
                            ` ${AbilityToText(key)} Check`
                          )
                        }
                      >
                        {AbilityToModifier(value) >= 0
                          ? `+ ${AbilityToModifier(value)}`
                          : AbilityToModifier(value)}
                      </button>
                    </div>
                    <div className="divider px-2 m-0 border-x border-primary"></div>
                    <div className="rounded-b-xl px-2 pb-2 text-center border-primary text-xs border-b border-x font-bold">
                      {value}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
        <section className="flex flex-row  rounded-xl  md:col-span-3 bg-base-200 p-4 justify-center items-center 2xl:col-span-2 row-span-2">
          <div className="indicator">
            <Tooltip
              element={
                <span className="indicator-item badge badge-info badge-sm p-2 flex justify-center items-center z-[1] indicator-top indicator-start">
                  i
                </span>
              }
              title={"Hit Points"}
              additionalContent={
                <div>
                  <div className="divider m-0" />
                  <p className="text-center font-bold">Max HP</p>
                  <div className="bg-base-200 text-base-content">
                    <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                      <thead>
                        <tr className="bg-black/30">
                          <th>Reason</th>
                          <th>Effect</th>
                        </tr>
                      </thead>
                      <tbody>
                        {character.state.hp.maxReasons.map((reason, index) => (
                          <tr key={index}>
                            <td>{reason.reason}</td>
                            <td>{reason.effect}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {character.state.hp.current != character.state.hp.max && (
                    <>
                      {" "}
                      <div className="divider m-0" />
                      <p className="text-center font-bold">Current HP</p>
                      <div className="bg-base-200 text-base-content">
                        <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                          <thead>
                            <tr className="bg-black/30">
                              <th>Reason</th>
                              <th>Effect</th>
                            </tr>
                          </thead>
                          <tbody>
                            {character.state.hp.damageLog.map(
                              (reason, index) => (
                                <tr key={index}>
                                  <td>{reason.reason}</td>
                                  <td>{reason.effect}</td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}

                  {character.state.hp.temporary > 0 && (
                    <>
                      <div className="divider m-0" />
                      <p className="text-center font-bold">Temporary HP</p>
                      <div className="bg-base-200 text-base-content">
                        <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                          <thead>
                            <tr className="bg-black/30">
                              <th>Reason</th>
                              <th>Effect</th>
                            </tr>
                          </thead>
                          <tbody>
                            {character.state.hp.temporary > 0 && (
                              <tr>
                                <td>Temporary HP</td>
                                <td>{character.state.hp.temporary}</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}
                </div>
              }
            >
              {`Your hitpoints are defined by the following:`}
            </Tooltip>
            <div className="flex flex-col w-full">
              <div className="rounded-t-xl px-2 pt-2 font-bold text-center border-primary text-xs border-t border-x w-48">
                Hit Points
              </div>
              <div className="divider px-2 m-0 border-x border-primary"></div>
              <div className="px-2 text-center border-x text-xl font-bold border-primary flex items-center justify-center">
                {character.state.hp.current} / {character.state.hp.max}{" "}
                {character.state.hp.temporary > 0 && (
                  <span className="ml-1 text-success">
                    + {character.state.hp.temporary}
                  </span>
                )}
              </div>
              <div className="divider px-2 m-0 border-x border-primary"></div>
              <div className="rounded-b-xl px-2 pb-2 text-center border-primary text-xs border-b border-x font-bold ">
                <div className="join w-full flex items-center justify-center">
                  <button
                    className="btn btn-error btn-xs w-12  join-item"
                    onClick={() => {
                      const newChar = { ...character };
                      if (!newChar.state) return;
                      if (newChar.state.hp.current - hpDeltaValue < 0) {
                        return;
                      }
                      newChar.state.hp.damageLog.push({
                        reason: "Damage",
                        effect: `- ${Math.abs(hpDeltaValue)}`,
                      });
                      newChar.state.hp.current -= hpDeltaValue;
                      setCharacter(newChar);
                    }}
                  >
                    -{" "}
                  </button>
                  <input
                    type="number"
                    className="input input-xs w-12 join-item  border-y-neutral border-2 text-center"
                    value={hpDeltaValue}
                    onChange={(e) => setHpDeltaValue(parseInt(e.target.value))}
                  />

                  <button
                    className="btn btn-success btn-xs w-12 join-item"
                    onClick={() => {
                      const newChar = { ...character };
                      if (!newChar.state) return;
                      if (
                        newChar.state.hp.current + hpDeltaValue >
                        newChar.state.hp.max
                      ) {
                        return;
                      }
                      newChar.state.hp.damageLog.push({
                        reason: "Healing",
                        effect: `+ ${hpDeltaValue}`,
                      });
                      newChar.state.hp.current += hpDeltaValue;
                      setCharacter(newChar);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-row bg-base-200 rounded-xl p-4 col-span-1 2xl:col-span-1 2xl:row-span-2 md:col-span-4   justify-center items-center">
          <Save
            id={character.id}
            state={character.state}
            regenerateCharacter={regenerateCharacter}
          />
        </section>

        {/* Skills 1*/}
        <section className="flex flex-row bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2  row-span-2 justify-center">
          <div className="bg-base-300 p-2 rounded-xl border-primary border">
            <div className="flex flex-wrap justify-center items-center h-full">
              {Object.values(skills).map(
                (skill, index) =>
                  index % 2 == 0 && (
                    <Fragment key={index}>
                      <div className="  col-span-4 flex flex-row items-center join m-1 ">
                        <Tooltip
                          element={
                            <span className=" bg-info text-info-content badge-lg badge p-2 flex justify-center items-center  join-item text-xs">
                              i
                            </span>
                          }
                          title={skill.toCapitalCase().replaceAll("_", " ")}
                          additionalContent={
                            <div className="bg-base-200 text-base-content">
                              <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                                <thead>
                                  <tr className="bg-black/30">
                                    <th>Reason</th>
                                    <th>Effect</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {/* Three things - modifier - proficiency - expertise */}
                                  <tr>
                                    <td>
                                      {AbilityToText(skillAtritbuteMap[skill])}
                                    </td>
                                    <td>
                                      {character.state &&
                                      calcSkillModifier(
                                        character.state,
                                        skill
                                      ) >= 0
                                        ? `+ ${calcSkillModifier(
                                            character.state,
                                            skill
                                          )}`
                                        : character.state &&
                                          `- ${Math.abs(
                                            calcSkillModifier(
                                              character.state,
                                              skill
                                            )
                                          )}`}
                                    </td>
                                  </tr>
                                  {character.state &&
                                    character.state.proficiencies.skills.includes(
                                      skill
                                    ) && (
                                      <tr>
                                        <td>Proficient</td>
                                        <td>
                                          + {calcProficiency(calcLevel || 1)}
                                        </td>
                                      </tr>
                                    )}
                                </tbody>
                              </table>
                            </div>
                          }
                        >
                          {`Your ${skill
                            .toCapitalCase()
                            .replaceAll(
                              "_",
                              " "
                            )} is defined by the following:`}
                        </Tooltip>
                        <p className="join-item bg-base-100 badge font-bold badge-lg w-32 text-xs whitespace-nowrap text-ellipsis">
                          {skill.toCapitalCase().replaceAll("_", " ")}
                        </p>
                        <button
                          className="flex items-center justify-center join-item btn btn-accent btn-xs font-bold w-10"
                          onClick={() =>
                            character.state &&
                            handleRoll(
                              calcSkillModifier(character.state, skill),
                              skill.toCapitalCase().replaceAll("_", " "),
                              20
                            )
                          }
                        >
                          {character.state &&
                          calcSkillModifier(character.state, skill) >= 0
                            ? `+ ${calcSkillModifier(character.state, skill)}`
                            : `- ${
                                character.state &&
                                Math.abs(
                                  calcSkillModifier(character.state, skill)
                                )
                              }`}
                        </button>
                      </div>
                    </Fragment>
                  )
              )}
            </div>
          </div>
        </section>
        <section className="flex flex-row bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2  row-span-2 justify-center">
          <div className="bg-base-300 p-2 rounded-xl border-primary border">
            <div className="flex flex-wrap justify-center items-center h-full">
              {Object.values(skills).map(
                (skill, index) =>
                  index % 2 == 1 && (
                    <Fragment key={index}>
                      <div
                        key={index}
                        className="  col-span-4 flex flex-row items-center join m-1 "
                      >
                        <Tooltip
                          element={
                            <span className=" bg-info text-info-content badge-lg badge p-2 flex justify-center items-center  join-item text-xs">
                              i
                            </span>
                          }
                          title={skill.toCapitalCase().replaceAll("_", " ")}
                          additionalContent={
                            <div className="bg-base-200 text-base-content">
                              <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                                <thead>
                                  <tr className="bg-black/30">
                                    <th>Reason</th>
                                    <th>Effect</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {/* Three things - modifier - proficiency - expertise */}
                                  <tr>
                                    <td>
                                      {AbilityToText(skillAtritbuteMap[skill])}
                                    </td>
                                    <td>
                                      {character.state &&
                                      AbilityToModifier(
                                        character.state.abilityScores[
                                          skillAtritbuteMap[skill] as Ability
                                        ]
                                      ) >= 0
                                        ? `+ ${AbilityToModifier(
                                            character.state.abilityScores[
                                              skillAtritbuteMap[
                                                skill
                                              ] as Ability
                                            ]
                                          )}`
                                        : character.state &&
                                          `- ${Math.abs(
                                            AbilityToModifier(
                                              character.state.abilityScores[
                                                skillAtritbuteMap[
                                                  skill
                                                ] as Ability
                                              ]
                                            )
                                          )}`}
                                    </td>
                                  </tr>
                                  {character.state &&
                                    character.state.proficiencies.skills.includes(
                                      skill
                                    ) && (
                                      <tr>
                                        <td>Proficiency</td>
                                        <td>+ {calcProficiency(calcLevel)}</td>
                                      </tr>
                                    )}

                                  {character.state &&
                                    character.state.proficiencies.skillExpertise.includes(
                                      skill
                                    ) && (
                                      <tr>
                                        <td>Expertise</td>
                                        <td>+ {calcProficiency(calcLevel)}</td>
                                      </tr>
                                    )}
                                </tbody>
                              </table>
                            </div>
                          }
                        >
                          {`Your ${skill
                            .toCapitalCase()
                            .replaceAll(
                              "_",
                              " "
                            )} is defined by the following:`}
                        </Tooltip>
                        <p className="join-item bg-base-100 badge font-bold badge-lg w-32 text-xs whitespace-nowrap  text-ellipsis">
                          {skill.toCapitalCase().replaceAll("_", " ")}
                        </p>
                        <button
                          className="flex items-center justify-center join-item btn btn-accent btn-xs font-bold w-10"
                          onClick={() => {
                            if (!character.state) return;
                            handleRoll(
                              calcSkillModifier(character.state, skill),
                              skill.toCapitalCase().replaceAll("_", " "),
                              20
                            );
                          }}
                        >
                          {character.state &&
                          calcSkillModifier(character.state, skill) >= 0
                            ? `+ ${calcSkillModifier(character.state, skill)}`
                            : character.state &&
                              `- ${Math.abs(
                                calcSkillModifier(character.state, skill)
                              )}`}
                        </button>
                      </div>
                    </Fragment>
                  )
              )}
            </div>
          </div>
        </section>

        {/* AC, speed, proficiency bonus */}
        <section className="bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2 whitespace-nowrap   text-ellipsis row-span-2">
          <div className="flex flex-col justify-center h-full">
            <div className="flex flex-row items-center justify-between">
              <h2 className="pb-0 px-4 text-sm flex flex-row items-center">
                Armor Class{" "}
              </h2>
              <div className="flex flex-row items-center join">
                <Tooltip
                  title="Armor Class"
                  additionalContent={
                    <div className="bg-base-200 text-base-content">
                      <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                        <thead>
                          <tr className="bg-black/30">
                            <th>Reason</th>
                            <th>Effect</th>
                          </tr>
                        </thead>
                        <tbody>
                          {character.state.armorClassReasons.map(
                            (reason, index) => (
                              <tr key={index}>
                                <td>{reason.reason}</td>
                                <td>{reason.effect}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  }
                  element={
                    <span className="badge badge-info p-2 flex justify-center items-center z-[1] join-item">
                      i
                    </span>
                  }
                >
                  Your Armor Class is defined by the following:
                </Tooltip>
                <p className="badge badge-secondary join-item font-bold w-14">
                  {character.state.armorClass} AC
                </p>
              </div>
            </div>
            <div className="divider m-0"></div>
            {/* passive perception */}
            <div className="flex flex-row items-center justify-between">
              <h2 className="pb-0 px-4 text-sm flex flex-row items-center">
                PP
              </h2>
              <div className="flex flex-row items-center join">
                <Tooltip
                  title="Passive Perception"
                  additionalContent={
                    <div className="bg-base-200 text-base-content">
                      <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                        <thead>
                          <tr className="bg-black/30">
                            <th>Reason</th>
                            <th>Effect</th>
                          </tr>
                        </thead>
                        <tbody>
                          {character.state.passivePerceptionReasons?.map(
                            (reason, index) => (
                              <tr key={index}>
                                <td>{reason.reason}</td>
                                <td>{reason.effect}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  }
                  element={
                    <span className="badge badge-info p-2 flex justify-center items-center z-[1] join-item">
                      i
                    </span>
                  }
                >
                  Your Passive Perception is defined by the following:
                </Tooltip>
                <p className="badge badge-secondary font-bold join-item w-14">
                  DC {character.state.passivePerception}
                </p>
              </div>
            </div>
            <div className="divider m-0"></div>
            <div className="flex flex-row items-center justify-between">
              <h2 className="pb-0 px-4 text-sm flex flex-row items-center">
                Speed{" "}
              </h2>
              <div className="flex flex-row items-center join">
                <Tooltip
                  title="Speed"
                  additionalContent={
                    <div className="bg-base-200 text-base-content">
                      <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                        <thead>
                          <tr className="bg-black/30">
                            <th>Reason</th>
                            <th>Effect</th>
                          </tr>
                        </thead>
                        <tbody>
                          {character.state.speed.bonuses.map(
                            (reason, index) => (
                              <tr key={index}>
                                <td>{reason.reason}</td>
                                <td>{reason.effect}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  }
                  element={
                    <span className="badge badge-info p-2 flex join-item justify-center items-center z-[1]  ">
                      i
                    </span>
                  }
                >
                  Your Walking Speed is defined by the following:
                </Tooltip>
                <p className="badge badge-secondary font-bold join-item w-14">
                  {character.state.speed.base} ft
                </p>
              </div>
            </div>
            <div className="divider m-0"></div>
            <div className="flex flex-row items-center justify-between">
              <h2 className="pb-0 px-4 text-sm flex flex-row items-center">
                Running
              </h2>
              <div className="flex flex-row items-center join">
                <Tooltip
                  title="Running Speed"
                  additionalContent={
                    <div className="bg-base-200 text-base-content">
                      <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                        <thead>
                          <tr className="bg-black/30">
                            <th>Reason</th>
                            <th>Effect</th>
                          </tr>
                        </thead>
                        <tbody>
                          {character.state.speed.runningReasons.map(
                            (reason, index) => (
                              <tr key={index}>
                                <td>{reason.reason}</td>
                                <td>{reason.effect}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  }
                  element={
                    <span className="badge badge-info p-2 flex justify-center items-center z-[1] join-item">
                      i
                    </span>
                  }
                >
                  Your Running Speed is defined by the following:
                </Tooltip>
                <p className="badge badge-secondary font-bold join-item w-14">
                  {character.state.speed.running} ft
                </p>
              </div>
            </div>
            <div className="divider m-0" />
            <div className="flex flex-row items-center justify-between">
              <h2 className="pb-0 px-4 text-sm flex flex-row items-center">
                Swimming
              </h2>
              <div className="flex flex-row items-center join">
                <Tooltip
                  title="Swimming Speed"
                  additionalContent={
                    <div className="bg-base-200 text-base-content">
                      <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                        <thead>
                          <tr className="bg-black/30">
                            <th>Reason</th>
                            <th>Effect</th>
                          </tr>
                        </thead>
                        <tbody>
                          {character.state.speed.swimmingReasons.map(
                            (reason, index) => (
                              <tr key={index}>
                                <td>{reason.reason}</td>
                                <td>{reason.effect}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  }
                  element={
                    <span className="badge badge-info p-2 flex justify-center items-center z-[1] join-item">
                      i
                    </span>
                  }
                >
                  Your Swimming Speed is defined by the following:
                </Tooltip>
                <p className="badge badge-secondary  font-bold join-item w-14">
                  {character.state.speed.swimming} ft
                </p>
              </div>
            </div>
            <div className="divider m-0"></div>
            <div className="flex flex-row items-center justify-between">
              <h2 className="pb-0 px-4 text-sm flex flex-row items-center ">
                <span>Climbing </span>
              </h2>
              <div className="flex flex-row items-center join">
                <Tooltip
                  title="Climbing Speed"
                  additionalContent={
                    <div className="bg-base-200 text-base-content">
                      <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                        <thead>
                          <tr className="bg-black/30">
                            <th>Reason</th>
                            <th>Effect</th>
                          </tr>
                        </thead>
                        <tbody>
                          {character.state.speed.climbingReasons.map(
                            (reason, index) => (
                              <tr key={index}>
                                <td>{reason.reason}</td>
                                <td>{reason.effect}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  }
                  element={
                    <span className="badge badge-info p-2 flex justify-center items-center z-[1]  join-item">
                      i
                    </span>
                  }
                >
                  Your Climbing Speed is defined by the following:
                </Tooltip>
                <p className="badge badge-secondary font-bold join-item w-14">
                  {character.state.speed.climbing} ft
                </p>
              </div>
            </div>
            <div className="divider m-0"></div>
            <div className="flex flex-row items-center justify-between">
              <h2 className="pb-0 px-4 text-sm flex flex-row items-center">
                Flying
              </h2>
              <div className="flex flex-row items-center join">
                <Tooltip
                  title="Flying Speed"
                  additionalContent={
                    <div className="bg-base-200 text-base-content">
                      <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                        <thead>
                          <tr className="bg-black/30">
                            <th>Reason</th>
                            <th>Effect</th>
                          </tr>
                        </thead>
                        <tbody>
                          {character.state.speed.flyingReasons.map(
                            (reason, index) => (
                              <tr key={index}>
                                <td>{reason.reason}</td>
                                <td>{reason.effect}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  }
                  element={
                    <span className="badge badge-info join-item p-2 flex justify-center items-center z-[1] ">
                      i
                    </span>
                  }
                >
                  Your Flying Speed is defined by the following:
                </Tooltip>
                <p className="badge badge-secondary font-bold join-item w-14">
                  {character.state.speed.flying} ft
                </p>
              </div>
            </div>
            <div className="divider m-0"></div>
          </div>
        </section>
        {/* Resources (ki, rages, hitdie) */}
        <section className="bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2 row-span-2">
          <Resources character={character} setCharacter={setCharacter} />
        </section>

        {/* Spellcasting */}
        <section className="bg-base-200 rounded-xl p-4 col-span-4 2xl:col-span-2 row-span-2 2xl:row-span-1">
          <div className="flex flex-col   rounded-xl border-secondary border bg-base-300 h-full">
            <h2 className="pb-0 px-4 text-sm text-center">Spellcasting</h2>
            <div className="divider m-0"></div>
            {character.Classes[0].spellCastingInfo ? (
              <div className="flex flex-wrap justify-center flex-col px-4 pb-4">
                {/* spellcasting ability, spell save, spell attack roll */}
                <div className="flex flex-row items-center justify-between w-full">
                  <h3 className="p-0 text-base">Ability</h3>
                  <div className="flex flex-row items-center">
                    <p className="badge badge-secondary  font-bold">
                      {character.Classes[0].spellCastingInfo?.ability}
                    </p>
                  </div>
                </div>
                <div className="divider m-0"></div>
                <div className="flex flex-row items-center justify-between w-full">
                  <h3 className="p-0 text-base">Save DC</h3>
                  <div className="flex flex-row items-center join">
                    <Tooltip
                      title="Spell Save DC"
                      additionalContent={
                        <div className="bg-base-200 text-base-content">
                          <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                            <thead>
                              <tr className="bg-black/30">
                                <th>Reason</th>
                                <th>Effect</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Base Spell Save DC</td>
                                <td>8</td>
                              </tr>
                              <tr>
                                <td>Proficiency</td>
                                <td>+ {calcProficiency(calcLevel)}</td>
                              </tr>
                              <tr>
                                <td>
                                  {AbilityToText(
                                    character.Classes[0].spellCastingInfo
                                      ?.ability as Ability
                                  )}{" "}
                                  Modifier
                                </td>
                                <td>
                                  {AbilityToModifier(
                                    character.state.abilityScores[
                                      character.Classes[0].spellCastingInfo
                                        ?.ability as Ability
                                    ]
                                  ) > 0
                                    ? `+ ${AbilityToModifier(
                                        character.state.abilityScores[
                                          character.Classes[0].spellCastingInfo
                                            ?.ability as Ability
                                        ]
                                      )}`
                                    : AbilityToModifier(
                                        character.state.abilityScores[
                                          character.Classes[0].spellCastingInfo
                                            ?.ability as Ability
                                        ]
                                      )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      }
                      element={
                        <span className="badge badge-info  p-2 flex justify-center items-center z-[1] join-item text-xs">
                          i
                        </span>
                      }
                    />
                    <p className="badge badge-secondary  font-bold join-item">
                      {8 +
                        calcProficiency(calcLevel) +
                        AbilityToModifier(
                          character.state.abilityScores[
                            character.Classes[0].spellCastingInfo
                              ?.ability as Ability
                          ]
                        )}
                    </p>
                  </div>
                </div>
                <div className="divider m-0"></div>
                <div className="flex flex-row items-center justify-between w-full">
                  <h3 className="p-0 text-base">Attack</h3>
                  <div className="flex flex-row items-center join">
                    <Tooltip
                      title="Spell Attack Roll"
                      additionalContent={
                        <div className="bg-base-200 text-base-content">
                          <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                            <thead>
                              <tr className="bg-black/30">
                                <th>Reason</th>
                                <th>Effect</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Proficiency</td>
                                <td>+ {calcProficiency(calcLevel)}</td>
                              </tr>
                              <tr>
                                <td>
                                  {AbilityToText(
                                    character.Classes[0].spellCastingInfo
                                      ?.ability as Ability
                                  )}{" "}
                                  Modifier
                                </td>
                                <td>
                                  {AbilityToModifier(
                                    character.state.abilityScores[
                                      character.Classes[0].spellCastingInfo
                                        ?.ability as Ability
                                    ]
                                  ) > 0
                                    ? `+ ${AbilityToModifier(
                                        character.state.abilityScores[
                                          character.Classes[0].spellCastingInfo
                                            ?.ability as Ability
                                        ]
                                      )}`
                                    : AbilityToModifier(
                                        character.state.abilityScores[
                                          character.Classes[0].spellCastingInfo
                                            ?.ability as Ability
                                        ]
                                      )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      }
                      element={
                        <span className="badge badge-info badge-lg p-2 flex justify-center items-center z-[1] join-item text-xs">
                          i
                        </span>
                      }
                    />
                    <button
                      className="btn btn-accent btn-xs font-bold join-item"
                      onClick={() => {
                        character.state &&
                          character.Classes &&
                          handleRoll(
                            calcProficiency(calcLevel) +
                              AbilityToModifier(
                                character.state.abilityScores[
                                  character.Classes[0].spellCastingInfo
                                    ?.ability as Ability
                                ]
                              ),
                            "Spell Attack Roll",
                            20
                          );
                      }}
                    >
                      +{" "}
                      {calcProficiency(calcLevel) +
                        AbilityToModifier(
                          character.state.abilityScores[
                            character.Classes[0].spellCastingInfo
                              ?.ability as Ability
                          ]
                        )}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-base-300 rounded-xl p-4  mt-2 py-0 flex flex-col items-center">
                <p className="italic font-bold p-2 text-center">
                  {character.name} is many things, but a spellcaster they are
                  not!
                </p>
                <Image
                  className="rounded-lg w-[100px] h-[100px] object-cover object-top m-4"
                  src={"/images/Magic-ball.png"}
                  width={100}
                  height={100}
                  alt="Magic Ball"
                />
              </div>
            )}
          </div>
        </section>

        {/* saving throw */}

        <section className="bg-base-200 rounded-xl p-4 col-span-4 2xl:col-span-2 row-span-2 2xl:row-span-1 ">
          <div className="border border-primary rounded-xl bg-base-300 flex flex-col items-center p-2 h-full">
            <h2 className=" text-center badge badge-neutral mb-1 ">
              Saving Throws
            </h2>
            <div className="flex flex-wrap justify-center items-center h-full">
              {Object.values(Ability).map((ability, index) => (
                <div
                  key={index}
                  className="col-span-4 flex flex-row items-center join m-1"
                >
                  <Tooltip
                    element={
                      <span className=" bg-info text-info-content badge-lg badge p-2 flex justify-center items-center  join-item text-xs">
                        i
                      </span>
                    }
                    title={AbilityToText(ability)}
                    additionalContent={
                      <div className="bg-base-200 text-base-content">
                        <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                          <thead>
                            <tr className="bg-black/30">
                              <th>Reason</th>
                              <th>Effect</th>
                            </tr>
                          </thead>
                          {/* ability modifier */}
                          <tbody>
                            <tr>
                              <td>{AbilityToText(ability)}</td>
                              <td>
                                {character.state &&
                                AbilityToModifier(
                                  character.state.abilityScores[ability]
                                ) >= 0
                                  ? `+ ${AbilityToModifier(
                                      character.state.abilityScores[ability]
                                    )}`
                                  : `- ${
                                      character.state &&
                                      Math.abs(
                                        AbilityToModifier(
                                          character.state.abilityScores[ability]
                                        )
                                      )
                                    }`}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    }
                  >
                    {`Your ${AbilityToText(
                      ability
                    )} saving throws are defined by the following:`}
                  </Tooltip>
                  <p className="join-item bg-base-100 badge font-bold badge-lg w-32 text-xs">
                    {AbilityToText(ability)}
                  </p>
                  <button
                    className="flex items-center justify-center join-item btn btn-accent btn-xs font-bold w-10"
                    onClick={() =>
                      character.state &&
                      handleRoll(
                        AbilityToModifier(
                          character.state.abilityScores[ability]
                        ),
                        ` ${AbilityToText(ability)} Saving Throw`
                      )
                    }
                  >
                    {character.state &&
                    AbilityToModifier(character.state.abilityScores[ability]) >=
                      0
                      ? `+ ${AbilityToModifier(
                          character.state.abilityScores[ability]
                        )}`
                      : `- ${
                          character.state &&
                          Math.abs(
                            AbilityToModifier(
                              character.state.abilityScores[ability]
                            )
                          )
                        }`}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Initiative */}
        <section className="bg-base-200 rounded-xl p-4 col-span-4 2xl:col-span-2 row-span-1 ">
          <div className="border border-primary rounded-xl bg-base-300 flex flex-col items-center p-2 h-full">
            <div className="flex flex-wrap justify-center items-center h-full">
              <div className="col-span-4 flex flex-row items-center join m-1">
                <Tooltip
                  element={
                    <span className=" bg-info text-info-content badge-lg badge p-2 flex justify-center items-center  join-item text-xs">
                      i
                    </span>
                  }
                  title="Initiative"
                  additionalContent={
                    <div className="bg-base-200 text-base-content">
                      <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                        <thead>
                          <tr className="bg-black/30">
                            <th>Reason</th>
                            <th>Effect</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Dexterity</td>
                            <td>
                              {character.state &&
                              AbilityToModifier(
                                character.state.abilityScores.DEX
                              ) >= 0
                                ? `+ ${AbilityToModifier(
                                    character.state.abilityScores.DEX
                                  )}`
                                : `- ${
                                    character.state &&
                                    Math.abs(
                                      AbilityToModifier(
                                        character.state.abilityScores.DEX
                                      )
                                    )
                                  }`}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  }
                >
                  Your Initiative is defined by the following:
                </Tooltip>
                <p className="join-item bg-base-100 badge font-bold badge-lg w-32 text-xs">
                  Initiative
                </p>
                <button
                  className="flex items-center justify-center join-item btn btn-accent btn-xs font-bold w-10"
                  onClick={() =>
                    character.state &&
                    handleRoll(
                      AbilityToModifier(character.state.abilityScores.DEX),
                      "Initiative"
                    )
                  }
                >
                  {character.state &&
                  AbilityToModifier(character.state.abilityScores.DEX) >= 0
                    ? `+ ${AbilityToModifier(
                        character.state.abilityScores.DEX
                      )}`
                    : `- ${
                        character.state &&
                        Math.abs(
                          AbilityToModifier(character.state.abilityScores.DEX)
                        )
                      }`}
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-row bg-base-200 rounded-xl p-4 col-span-4 2xl:col-span-2 items-center justify-center ">
          <LevelUp
            levelUpCharacter={levelUpCharacter}
            hasPendingChoices={character.state.pendingChoices.length > 0}
          />
        </section>
        {/* Log */}
        <section className="bg-base-200 rounded-xl p-4 col-span-6 2xl:col-span-5 row-span-2">
          <RenderLog log={log} pushLog={logPush} />
        </section>

        <section className="bg-base-200 rounded-xl p-4 col-span-6 2xl:col-span-7 2xl:row-span-1 row-span-2">
          <Tools character={character} pushLog={logPush} />
        </section>
        <section className="bg-base-200 rounded-xl p-4 col-span-12 2xl:col-span-7 row-span-1 ">
          <WeaponRoller
            equipped={character.state.equipped.hands.items || []}
            abilities={character.state.abilityScores}
            logPush={logPush}
            proficiencyBonus={calcProficiency(calcLevel)}
            weaponProficiencies={character.state.proficiencies.weapons}
          />
        </section>
        <section className="bg-base-200 rounded-xl p-4 col-span-12 2xl:col-span-12 row-span-1">
          <Spells character={character} logPush={logPush} />
        </section>

        {/* features */}
        <section className=" bg-base-200 rounded-xl p-4 col-span-12">
          <h2 className="pb-0 px-4">Features</h2>
          <div className="divider m-0" />
          {character.state.features
            .sort((a, b) => {
              if (a.feature.levels === undefined) return -1; // Put a first if its levels are undefined
              if (b.feature.levels === undefined) return 1; // Put b first if its levels are undefined

              const minA = Math.min(...a.feature.levels);
              const minB = Math.min(...b.feature.levels);

              return minA - minB;
            })
            .filter(
              (f) =>
                f.feature.levels?.some((level) => level <= calcLevel) ||
                !f.feature.levels
            )
            .map((featureInfo, index) => (
              <div
                key={index}
                tabIndex={0}
                className="bg-base-300 rounded-xl p-4 collapse collapse-arrow mt-2 collapse-sm py-0"
              >
                <input type="checkbox" />
                <div className="collapse-title p-0 flex flex-row items-center justify-between pl-4 pr-8">
                  <div className="flex flex-row items-center">
                    <h3 className="p-0">{featureInfo.feature.name}</h3>
                    <span className="badge badge-secondary mx-4 font-bold">
                      {featureInfo.source}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center">
                    {featureInfo.feature.levels &&
                    featureInfo.feature.levels.length == 20 ? (
                      <span className="badge badge-accent font-bold rounded-full">
                        All Levels
                      </span>
                    ) : (
                      featureInfo.feature.levels?.map((level, index) => {
                        return (
                          <div
                            className={`bg-neutral rounded-full w-8 h-8 flex justify-center items-center text-neutral-content font-bold ${numberColor(
                              level
                            )} border border-4 mx-1 before:absolute  before:rounded-full before:border-4 z-[1] before:w-8 before:h-8 ${
                              numberColorBefore[level].bg
                            } ${numberColorBefore[level].opacity}`}
                            key={index}
                          >
                            {level}
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
                <div className="collapse-content">
                  <p className="mb-4">
                    <P>{featureInfo.feature.description}</P>
                  </p>
                  {featureInfo.feature.extendedTable && (
                    <JsonTable json={featureInfo.feature.extendedTable} />
                  )}
                  {featureInfo.feature.postTableData && (
                    <>
                      <div className="bg-base-100">
                        {featureInfo.feature.postTableData}
                      </div>
                      <div className="divider m-0"></div>
                    </>
                  )}
                </div>
              </div>
            ))}

          {/* locked features */}
          <div className="divider m-1"></div>
          <h2 className="py-0 px-4">Locked Features</h2>
          <p className="italic px-4">Level up to unlock these features</p>
          <div className="divider m-1" />
          {character.state.features
            .filter(
              (f) =>
                !(
                  f.feature.levels?.some((level) => level <= calcLevel) ||
                  !f.feature.levels
                )
            )
            .map((featureInfo, index) => (
              <div
                key={`${featureInfo.feature.name}-${featureInfo.source}`}
                tabIndex={0}
                className="bg-base-300 rounded-xl p-4 collapse collapse-arrow mt-2 collapse-sm py-0"
              >
                <input type="checkbox" />
                <div className="collapse-title p-0 flex flex-row items-center justify-between pl-4 pr-8">
                  <div className="flex flex-row items-center">
                    <h3 className="p-0">{featureInfo.feature.name}</h3>
                    <span className="badge badge-secondary mx-4 font-bold">
                      {featureInfo.source}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center">
                    {featureInfo.feature.levels &&
                    featureInfo.feature.levels.length == 20 ? (
                      <span className="badge badge-accent font-bold rounded-full">
                        All Levels
                      </span>
                    ) : (
                      featureInfo.feature.levels?.map((level, index) => {
                        return (
                          <div
                            className={`bg-neutral rounded-full w-8 h-8 flex justify-center items-center text-neutral-content font-bold ${numberColor(
                              level
                            )} border border-4 mx-1 before:absolute  before:rounded-full before:border-4 z-[1] before:w-8 before:h-8 ${
                              numberColorBefore[level].bg
                            } ${numberColorBefore[level].opacity}`}
                            key={index}
                          >
                            {level}
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
                <div className="collapse-content">
                  <p>
                    <P>{featureInfo.feature.description}</P>
                  </p>
                  <div className="divider m-0"></div>
                  {featureInfo.feature.options && (
                    <>
                      <ul className="list-disc ">
                        {featureInfo.feature.options.map((option, index) => (
                          <Fragment key={index}>
                            <li className="ml-4">
                              <P>{option}</P>
                            </li>
                            <div className="divider m-0"></div>
                          </Fragment>
                        ))}
                      </ul>
                    </>
                  )}
                  {featureInfo.feature.extendedTable && (
                    <>
                      <div className="bg-base-100">
                        <JsonTable json={featureInfo.feature.extendedTable} />
                      </div>
                      <div className="divider m-0"></div>
                    </>
                  )}
                  {featureInfo.feature.postTableData && (
                    <>
                      <div className="bg-base-100">
                        {featureInfo.feature.postTableData}
                      </div>
                      <div className="divider m-0"></div>
                    </>
                  )}
                </div>
              </div>
            ))}
        </section>
      </div>
    )
  );
};

export default MainSheet;
