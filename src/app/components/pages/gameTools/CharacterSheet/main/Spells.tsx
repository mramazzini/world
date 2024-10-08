"use client";
import { CharacterInfo, Log, SpellLevel } from "@/lib/utils/types/types";
import Image from "next/image";
import PreparedSpellView from "../Spells/PreparedSpellView";
import numberArray from "@/lib/utils/numberArray";
import { useEffect, useState } from "react";

interface Props {
  character: CharacterInfo;
  logPush: (newLog: Log) => void;
}

const Spells = ({ character, logPush }: Props) => {
  const prepared = character.state?.userSubmittedSpells;
  const [spellSlotsState, setSpellSlotsState] = useState<PrismaJson.SpellSlots>(
    character.state?.spellSlots || {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    }
  );

  useEffect(() => {
    if (!character.state) return;
    if (!character.state.spellSlots) return;
    setSpellSlotsState(character.state.spellSlots);
  }, [character.state?.spellSlots]);

  const handleRest = () => {
    if (!character.state) return;
    if (!character.state.spellSlots) return;

    setSpellSlotsState(character.state.spellSlots);
  };

  return (
    <div className="h-full flex flex-col">
      {/* <p>Tools</p>
      <div className="divider m-0"></div> */}

      <div className="flex flex-row bg-base-300 rounded-xl p-4 h-full items-center justify-center">
        {prepared && prepared.length > 0 ? (
          <>
            <div className="grid gap-4 w-full">
              <div className="join flex flex-row items-center justify-center">
                <div className="flex flex-wrap w-full items-center justify-center bg-neutral text-neutral-content rounded-xl p-4 gap-4 join-item">
                  {numberArray(1, 9).map((level) => {
                    if (!character.state) return null;
                    const maxSlots = character.state.spellSlots;
                    if (!maxSlots) return null;
                    const levelMaxSlots = maxSlots[level as SpellLevel];
                    if (!levelMaxSlots) return null;
                    return (
                      <div
                        key={level}
                        className="flex flex-col items-center justify-center "
                      >
                        <h4>Level {level} Spells</h4>
                        <div className="join flex flex-row items-center justify-center join rounded-xl">
                          <input
                            type="number"
                            className="input input-neutral text-neutral-content h-8 join-item w-12 "
                            value={spellSlotsState[level as SpellLevel]}
                            onChange={(e) => {
                              const newSlots = { ...spellSlotsState };
                              newSlots[level as SpellLevel] = parseInt(
                                e.target.value
                              );
                              setSpellSlotsState(newSlots);
                            }}
                          />

                          <div className="h-8 join-item flex items-center p-2 badge bg-base-300 text-base-content ">
                            Max: {levelMaxSlots}
                          </div>
                        </div>
                      </div>
                    );
                  })}{" "}
                </div>{" "}
                <button
                  onClick={handleRest}
                  className="btn btn-secondary join-item h-full"
                >
                  <Image
                    src="/images/refresh.svg"
                    alt="Rest"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              {prepared.map((spell, index) => {
                return (
                  <PreparedSpellView
                    handleRemoveSpell={(index) => {}}
                    key={index}
                    index={index}
                    showEditor={false}
                    spellInput={spell}
                    updateSpell={(newSpell) => {
                      if (!character.state) return;
                      const newSpells = [
                        ...character.state.userSubmittedSpells,
                      ];
                      newSpells[index] = newSpell;
                    }}
                    logPush={logPush}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center flex-col">
            <p className="font-bold m-2">No Spells Found..</p>
            <Image
              src="/images/fireball.svg"
              alt="Empty"
              width={80}
              height={80}
              className="opacity-40 m-2"
            />
            <p className="m-2">
              Prepare spells to use them in combat. Prepared spells will be
              shown here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Spells;
