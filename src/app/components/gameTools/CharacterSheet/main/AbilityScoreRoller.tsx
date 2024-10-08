import { AbilityToModifier } from "@/app/components/Utility/characterStateFunctions/calc/AbilityToModifier";
import Tooltip from "@/app/components/Utility/Tooltip";
import AbilityToText from "@/lib/utils/AbilityToText";
import { CharacterInfo } from "@/lib/utils/types/types";
import { Ability } from "@prisma/client";

interface Props {
  character: CharacterInfo;
  handleRoll: (modifier: number, reason: string) => void;
}

const AbilityScoreRoller = ({ character, handleRoll }: Props) => {
  return (
    character.state && (
      <>
        <div className="flex flex-wrap gap-4 justify-center items-center w-full">
          {Object.entries(character.state.abilityScores).map(([key, value]) => (
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
          ))}
        </div>
      </>
    )
  );
};

export default AbilityScoreRoller;
