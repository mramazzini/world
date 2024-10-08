import { AbilityToModifier } from "@/app/components/Utility/characterStateFunctions/calc/AbilityToModifier";
import Tooltip from "@/app/components/Utility/Tooltip";

interface Props {
  character: any;
  handleRoll: (modifier: number, reason: string) => void;
}

const IntiativeRoller = ({ character, handleRoll }: Props) => {
  return (
    <>
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
                ? `+ ${AbilityToModifier(character.state.abilityScores.DEX)}`
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
    </>
  );
};

export default IntiativeRoller;
