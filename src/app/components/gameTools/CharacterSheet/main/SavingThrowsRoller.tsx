import { AbilityToModifier } from "@/app/components/Utility/characterStateFunctions/calc/AbilityToModifier";
import Tooltip from "@/app/components/Utility/Tooltip";
import AbilityToText from "@/lib/utils/AbilityToText";
import { Ability } from "@prisma/client";

interface Props {
  character: any;
  handleRoll: (modifier: number, reason: string) => void;
}

const SavingThrowsRoller = ({ character, handleRoll }: Props) => {
  return (
    <>
      {" "}
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
                    AbilityToModifier(character.state.abilityScores[ability]),
                    ` ${AbilityToText(ability)} Saving Throw`
                  )
                }
              >
                {character.state &&
                AbilityToModifier(character.state.abilityScores[ability]) >= 0
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
    </>
  );
};

export default SavingThrowsRoller;
