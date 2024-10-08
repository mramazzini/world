"use client";
import { useState } from "react";
import Tooltip from "@/app/components/Utility/Tooltip";
import { CharacterInfo } from "@/lib/utils/types/types";

interface Props {
  character: CharacterInfo;
  setCharacter: (character: CharacterInfo) => void;
}

const HitPointsHandler = ({ character, setCharacter }: Props) => {
  const [hpDeltaValue, setHpDeltaValue] = useState<number>(1);
  return (
    character.state && (
      <>
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
                          {character.state.hp.damageLog.map((reason, index) => (
                            <tr key={index}>
                              <td>{reason.reason}</td>
                              <td>{reason.effect}</td>
                            </tr>
                          ))}
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
            <div className="rounded-t-xl px-2 pt-2 font-bold text-center border-primary text-xs border-t border-x w-full">
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
      </>
    )
  );
};

export default HitPointsHandler;
