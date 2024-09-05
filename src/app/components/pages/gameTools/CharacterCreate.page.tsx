"use client";

import { getCharacter } from "@/lib/actions/db/character/read.actions";
import { Ability, CharacterInfo } from "@/lib/types";
import { useEffect, useState } from "react";
import { generateCharacter } from "../../Utility/generateCharacter";
import Image from "next/image";
import AbilityToText from "@/lib/utils/AbilityToText";
import { AbilityToModifier } from "../../Utility/AbilityToModifier";
import Tooltip from "../../Utility/Tooltip";
import P from "../../Utility/FormatAndSanitize";
import JsonTable from "../../Utility/JsonTable";
import { numberColor, numberColorBefore } from "../../Utility/colorBefore";
import "@/lib/string.extensions";
import { skillAtritbuteMap, skills } from "@/lib/globalVars";
const CharacterCreate = () => {
  const [character, setCharacter] = useState<CharacterInfo | null>(null);
  useEffect(() => {
    getCharacter("Larry").then((res) => {
      if (!res) return;
      const char: CharacterInfo = {
        ...res,
        state: generateCharacter(res, {
          STR: 10,
          DEX: 10,
          CON: 10,
          INT: 10,
          WIS: 10,
          CHA: 10,
        }),
      };
      setCharacter(char);
      console.log(char);
    });
  }, []);
  const calcLevel = () => {
    return character?.state?.classLevels.reduce(
      (acc, cur) => acc + cur.level,
      0
    );
  };
  return (
    <main className="p-4 md:p-8">
      {character && character.state && (
        <>
          <div className="bg-base-300 p-4 rounded-xl">
            <div className="xl:grid md:gap-4 md:grid-flow-row grid-cols-1 md:grid-cols-12  ">
              <section className="flex flex-row bg-base-200 rounded-xl p-4  md:col-span-4 items-center ">
                <Image
                  src={"/fighter.jpg"}
                  width={200}
                  height={200}
                  className="rounded-lg w-[100px] h-[100px] object-cover object-top mr-4"
                  alt="Fighter"
                />
                <div className="flex flex-col justify-">
                  <h2>
                    {character.name}
                    <div className="divider m-0 divider-primary"></div>
                  </h2>

                  <p className="italic">
                    Level {calcLevel()} {character.Race?.name}{" "}
                    {character.Classes.map((c) => c.name.toCapitalCase()).join(
                      "/"
                    )}
                  </p>
                </div>
              </section>
              <section className="flex flex-row bg-base-200 rounded-xl p-4 md:col-span-5">
                <div className="flex flex-wrap gap-4 justify-center">
                  {Object.entries(character.state.abilityScores).map(
                    ([key, value]) => (
                      <div className="indicator" key={key}>
                        <Tooltip
                          element={
                            <span className="indicator-item badge badge-info badge-sm p-2 flex justify-center items-center z-[1]">
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
                          {`Your ${AbilityToText(
                            key
                          )} is defined by the following:`}
                        </Tooltip>
                        <div key={key} className="flex flex-col justify-center">
                          <div className="rounded-t-xl px-2 pt-2 font-bold text-center border-primary text-xs border-t border-x w-24">
                            {AbilityToText(key)}
                          </div>
                          <div className="divider px-2 m-0 border-x border-primary"></div>
                          <div className="px-2 text-center border-x text-xl font-bold border-primary flex items-center justify-center">
                            <button className="btn btn-xs btn-accent">
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
              <section className="flex flex-row  rounded-xl  md:col-span-3 bg-base-200 p-4 justify-center">
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
                              {character.state.hp.maxReasons.map(
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
                        {character.state.hp.current !=
                          character.state.hp.max && (
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
                                    <th className="hidden md:table-cell">
                                      Date
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {character.state.hp.damageLog.map(
                                    (reason, index) => (
                                      <tr key={index}>
                                        <td>{reason.reason}</td>
                                        <td>{reason.effect}</td>
                                        <td className="hidden md:table-cell">
                                          {
                                            reason.date
                                              .toISOString()
                                              .split("T")[0]
                                          }
                                        </td>
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
                            <p className="text-center font-bold">
                              Temporary HP
                            </p>
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
                        <button className="btn btn-error btn-xs w-12  join-item">
                          -{" "}
                        </button>
                        <input
                          type="number"
                          className="input input-xs w-12 join-item  border-y-neutral border-2 text-center"
                        />

                        <button className="btn btn-success btn-xs w-12 join-item">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Skills 1*/}
              <section className="flex flex-row bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2 justify-center">
                <div className="bg-base-300 p-2 rounded-xl border-primary border">
                  <div className="flex flex-wrap justify-center">
                    {Object.values(skills).map(
                      (skill, index) =>
                        index % 2 == 0 && (
                          <>
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
                                title={skill
                                  .toCapitalCase()
                                  .replaceAll("_", " ")}
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
                                            {AbilityToText(
                                              skillAtritbuteMap[skill]
                                            )}
                                          </td>
                                          <td>
                                            {character.state &&
                                            AbilityToModifier(
                                              character.state.abilityScores[
                                                skillAtritbuteMap[
                                                  skill
                                                ] as Ability
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
                                                AbilityToModifier(
                                                  character.state.abilityScores[
                                                    skillAtritbuteMap[
                                                      skill
                                                    ] as Ability
                                                  ]
                                                )}
                                          </td>
                                        </tr>
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
                              <p className="join-item bg-base-100 badge font-bold badge-lg w-32 text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                                {skill.toCapitalCase().replaceAll("_", " ")}
                              </p>
                              <p className="flex items-center justify-center join-item btn btn-accent btn-xs font-bold">
                                {character.state &&
                                AbilityToModifier(
                                  character.state.abilityScores[
                                    skillAtritbuteMap[skill] as Ability
                                  ]
                                ) >= 0
                                  ? `+ ${AbilityToModifier(
                                      character.state.abilityScores[
                                        skillAtritbuteMap[skill] as Ability
                                      ]
                                    )}`
                                  : character.state &&
                                    AbilityToModifier(
                                      character.state.abilityScores[
                                        skillAtritbuteMap[skill] as Ability
                                      ]
                                    )}
                              </p>
                            </div>
                          </>
                        )
                    )}
                  </div>
                </div>
              </section>
              <section className="flex flex-row bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2 justify-center">
                <div className="bg-base-300 p-2 rounded-xl border-primary border">
                  <div className="flex flex-wrap justify-center">
                    {Object.values(skills).map(
                      (skill, index) =>
                        index % 2 == 1 && (
                          <>
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
                                title={skill
                                  .toCapitalCase()
                                  .replaceAll("_", " ")}
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
                                            {AbilityToText(
                                              skillAtritbuteMap[skill]
                                            )}
                                          </td>
                                          <td>
                                            {character.state &&
                                            AbilityToModifier(
                                              character.state.abilityScores[
                                                skillAtritbuteMap[
                                                  skill
                                                ] as Ability
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
                                                AbilityToModifier(
                                                  character.state.abilityScores[
                                                    skillAtritbuteMap[
                                                      skill
                                                    ] as Ability
                                                  ]
                                                )}
                                          </td>
                                        </tr>
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
                              <p className="join-item bg-base-100 badge font-bold badge-lg w-32 text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                                {skill.toCapitalCase().replaceAll("_", " ")}
                              </p>
                              <p className="flex items-center justify-center join-item btn btn-accent btn-xs font-bold">
                                {character.state &&
                                AbilityToModifier(
                                  character.state.abilityScores[
                                    skillAtritbuteMap[skill] as Ability
                                  ]
                                ) >= 0
                                  ? `+ ${AbilityToModifier(
                                      character.state.abilityScores[
                                        skillAtritbuteMap[skill] as Ability
                                      ]
                                    )}`
                                  : character.state &&
                                    AbilityToModifier(
                                      character.state.abilityScores[
                                        skillAtritbuteMap[skill] as Ability
                                      ]
                                    )}
                              </p>
                            </div>
                          </>
                        )
                    )}
                  </div>
                </div>
              </section>
              {/* saving throw */}
              <section className="bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2">
                <div className="border border-primary rounded-xl bg-base-300 h-full">
                  <h2 className="pb-0 px-4 text-sm text-center">
                    Saving Throws
                  </h2>
                  <div className="divider m-0"></div>
                  <div className="flex flex-wrap justify-center ">
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
                                            character.state.abilityScores[
                                              ability
                                            ]
                                          )}`
                                        : character.state &&
                                          AbilityToModifier(
                                            character.state.abilityScores[
                                              ability
                                            ]
                                          )}
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
                        <p className="flex items-center justify-center join-item btn btn-accent btn-xs font-bold">
                          {character.state &&
                          AbilityToModifier(
                            character.state.abilityScores[ability]
                          ) >= 0
                            ? `+ ${AbilityToModifier(
                                character.state.abilityScores[ability]
                              )}`
                            : character.state &&
                              AbilityToModifier(
                                character.state.abilityScores[ability]
                              )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              {/* AC, speed, proficiency bonus */}
              <section className="bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2 whitespace-nowrap overflow-hidden text-ellipsis">
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
                      Passive Perception
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
                        {character.state.passivePerception} ft
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
                      Running Speed
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
                      Swimming Speed
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
                      <span>Climbing Speed</span>
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
                      Flying Speed
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
              <section className="bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2">
                TODO: Resources
              </section>
              <section className="bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2">
                <h2 className="pb-0 px-4">Spellcasting</h2>
                <div className="divider m-0"></div>
                <div className="flex flex-wrap justify-center ">
                  {character.Classes[0].spellCastingInfo ? (
                    <div className="bg-base-300 rounded-xl p-4 collapse collapse-arrow mt-2 collapse-sm py-0">
                      <input type="checkbox" />
                      <div className="collapse-title p-0 flex flex-row items-center justify-between pl-4 pr-8">
                        <div className="flex flex-row items-center">
                          <h3 className="p-0">
                            {character.Classes[0].spellCastingInfo.ability}
                          </h3>
                          <span className="badge badge-secondary mx-4 font-bold">
                            {character.Classes[0].name}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center">
                          <span className="badge badge-accent font-bold rounded-full">
                            All Levels
                          </span>
                        </div>
                      </div>
                      <div className="collapse-content">
                        <p>
                          <P>
                            {character.Classes[0].spellCastingInfo.description}
                          </P>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-base-300 rounded-xl p-4  mt-2 py-0 flex flex-col items-center">
                      <p className="italic font-bold p-2 text-center">
                        {character.name} is many things, but a spellcaster they
                        are not!
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
              {/* features */}
              <section className=" bg-base-200 rounded-xl p-4 col-span-12">
                <h2 className="pb-0 px-4">Features</h2>
                <div className="divider m-0"></div>
                {character.state.features
                  .sort((a, b) => {
                    if (a.feature.levels === undefined) return -1; // Put a first if its levels are undefined
                    if (b.feature.levels === undefined) return 1; // Put b first if its levels are undefined

                    const minA = Math.min(...a.feature.levels);
                    const minB = Math.min(...b.feature.levels);

                    return minA - minB;
                  })
                  .filter(
                    (f) => f.feature.levels?.includes(1) || !f.feature.levels
                  )
                  .map((featureInfo, index) => (
                    <div
                      key={index}
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
                    (f) => !(f.feature.levels?.includes(1) || !f.feature.levels)
                  )
                  .map((featureInfo, index) => (
                    <div
                      key={index}
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
                              {featureInfo.feature.options.map(
                                (option, index) => (
                                  <>
                                    <li key={index} className="ml-4">
                                      <P>{option}</P>
                                    </li>
                                    <div className="divider m-0"></div>
                                  </>
                                )
                              )}
                            </ul>
                          </>
                        )}
                        {featureInfo.feature.extendedTable && (
                          <>
                            <div className="bg-base-100">
                              <JsonTable
                                json={featureInfo.feature.extendedTable}
                              />
                            </div>
                            <div className="divider m-0"></div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
              </section>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default CharacterCreate;
