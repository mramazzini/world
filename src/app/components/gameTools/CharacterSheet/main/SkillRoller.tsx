import { calculateLevel } from "@/app/components/Utility/characterStateFunctions/calc/calcLevel";
import { calcProficiency } from "@/app/components/Utility/characterStateFunctions/calc/calcProficiency";
import { calcSkillModifier } from "@/app/components/Utility/characterStateFunctions/calc/calcSkillModifier";
import Tooltip from "@/app/components/Utility/Tooltip";
import { skillAtritbuteMap } from "@/lib/globalVars";
import AbilityToText from "@/lib/utils/AbilityToText";
import { CharacterInfo } from "@/lib/utils/types/types";
import { Skill } from "@prisma/client";
import { Fragment } from "react";

interface Props {
  character: CharacterInfo;
  handleRoll: (modifier: number, reason: string, diceSize: number) => void;
  skills: Skill[];
}

const SkillRoller = ({ character, handleRoll, skills }: Props) => {
  return (
    <>
      <div className="bg-base-300 p-2 rounded-xl border-primary border">
        <div className="flex flex-wrap justify-center items-center h-full">
          {Object.values(skills).map((skill, index) => (
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
                            <td>{AbilityToText(skillAtritbuteMap[skill])}</td>
                            <td>
                              {character.state &&
                              calcSkillModifier(character.state, skill) >= 0
                                ? `+ ${calcSkillModifier(
                                    character.state,
                                    skill
                                  )}`
                                : character.state &&
                                  `- ${Math.abs(
                                    calcSkillModifier(character.state, skill)
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
                                  +{" "}
                                  {calcProficiency(
                                    calculateLevel(character.state) || 1
                                  )}
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
                    .replaceAll("_", " ")} is defined by the following:`}
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
                        Math.abs(calcSkillModifier(character.state, skill))
                      }`}
                </button>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillRoller;
