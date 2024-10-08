import { AbilityToModifier } from "@/app/components/Utility/characterStateFunctions/calc/AbilityToModifier";
import { calculateLevel } from "@/app/components/Utility/characterStateFunctions/calc/calcLevel";
import { calcProficiency } from "@/app/components/Utility/characterStateFunctions/calc/calcProficiency";
import Tooltip from "@/app/components/Utility/Tooltip";
import AbilityToText from "@/lib/utils/AbilityToText";
import { CharacterInfo } from "@/lib/utils/types/types";
import { Ability } from "@prisma/client";
import Image from "next/image";

interface Props {
  character: CharacterInfo;
  handleRoll: (modifier: number, reason: string, die: number) => void;
}

const SpellcastingStats = ({ character, handleRoll }: Props) => {
  return (
    character.state &&
    character.Classes && (
      <>
        {" "}
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
                              <td>
                                +{" "}
                                {calcProficiency(
                                  calculateLevel(character.state)
                                )}
                              </td>
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
                      calcProficiency(calculateLevel(character.state)) +
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
                              <td>
                                +{" "}
                                {calcProficiency(
                                  calculateLevel(character.state)
                                )}
                              </td>
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
                          calcProficiency(calculateLevel(character.state)) +
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
                    {calcProficiency(calculateLevel(character.state)) +
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
                {character.name} is many things, but a spellcaster they are not!
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
      </>
    )
  );
};

export default SpellcastingStats;
