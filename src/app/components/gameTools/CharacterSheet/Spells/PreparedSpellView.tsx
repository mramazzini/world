import { Log, SpellLevel } from "@/lib/utils/types/types";
import { toSpellLevel } from "@/lib/utils/toSpellLevel";
import { DamageTypes, Rarity } from "@prisma/client";
import { Fragment, useEffect, useState } from "react";
import { roll } from "@/app/components/Utility/roll";
import numberArray from "@/lib/utils/numberArray";
const SpellRollMaker = ({
  spellRoll,
  setSpellRoll,
}: {
  spellRoll: PrismaJson.SpellRoll;
  setSpellRoll: (spellRoll: PrismaJson.SpellRoll) => void;
}) => {
  return (
    <div className="flex flex-row w-full bg-base-100 rounded-xl p-2">
      <label className="form-control w-1/4 px-1">
        <div className="label">
          <span className="label-text">Amount</span>
        </div>
        <input
          type="number"
          className="input input-bordered "
          onChange={(e) => {
            const val = parseInt(e.target.value);
            setSpellRoll({
              ...spellRoll,
              numberOfDice: val,
            });
          }}
        />
      </label>
      <label className="form-control w-1/4 px-1">
        <div className="label">
          <span className="label-text  ">Dice Type:</span>
        </div>
        <select
          className="select select-bordered  "
          onChange={(e) =>
            setSpellRoll({
              ...spellRoll,
              dice: parseInt(e.target.value) as 4 | 6 | 8 | 10 | 12 | 20 | 100,
            })
          }
        >
          {[4, 6, 8, 10, 12, 20, 100].map((type) => (
            <option key={type} value={type}>
              d{type}
            </option>
          ))}
        </select>
      </label>
      <label className="form-control w-1/2 px-1">
        <div className="label">
          <span className="label-text">Roll Type</span>
        </div>
        <select
          className="select select-bordered  "
          onChange={(e) =>
            setSpellRoll({
              ...spellRoll,
              type: e.target.value as DamageTypes | "healing",
            })
          }
          defaultValue={DamageTypes.NONE}
        >
          {Object.values(DamageTypes)
            .filter((f) => f !== DamageTypes.NULL)
            .map((type) => (
              <option key={type} value={type}>
                {type.toCapitalCase()}
              </option>
            ))}
          <option value="healing">Healing</option>
        </select>
      </label>
      {}
    </div>
  );
};

const PreparedSpellView = ({
  spellInput,
  spellSlotsAvailable,
  setAvailableSlots,
  updateSpell,
  index,
  showEditor,
  logPush,
}: {
  spellInput: PrismaJson.SheetSpell;
  updateSpell: (spell: PrismaJson.SheetSpell) => void;
  spellSlotsAvailable?: PrismaJson.SpellSlots;
  setAvailableSlots?: (slots: PrismaJson.SpellSlots) => void;
  index: number;
  showEditor: boolean;
  logPush?: (log: Log) => void;
}) => {
  const [spell, setSpell] = useState<PrismaJson.SheetSpell>(spellInput);
  const [rollSpellLevel, setRollSpellLevel] = useState<number>(0);
  if (!spell.spellRoll) {
    spell.spellRoll = [];
  }
  if (!spell.upcastBonus) {
    spell.upcastBonus = {
      dice: 4,
      numberOfDice: 0,
      type: DamageTypes.NONE,
    };
  }

  return (
    <>
      <div className="flex flex-row items-center join justify-between w-full">
        <div className="bg-base-200 p-4  w-full rounded-xl flex flex-row items-center join-item h-full">
          <div className="flex flex-col w-full">
            <div className=" flex flex-row w-full">
              <p className="bg-neutral flex items-center justify-center px-4 text-neutral-content h-8 gap-2 rounded-l-lg">
                {spellInput.name}{" "}
                {spellInput.prepared ? (
                  <span className="badge">Prepared</span>
                ) : (
                  <span className="badge badge-error">Not Prepared</span>
                )}
                {spellInput.ritual && (
                  <span className="badge badge-secondary">Ritual</span>
                )}
                {spellInput.concentration && (
                  <span className="badge badge-primary">Concentration</span>
                )}
              </p>
              <p className="bg-neutral flex items-center justify-center px-4 text-neutral-content h-8 gap-2">
                {spellInput.range && <>Range: {spellInput.range} - </>}
                {spellInput.radius && <>Radius: {spellInput.radius} - </>}
                {spellInput.castingTime && <>{spellInput.castingTime} - </>}
                {spellInput.components}
              </p>
              <div
                className="badge badge-secondary h-8  "
                style={{
                  borderRadius: `0px ${
                    spellInput.upcastBonus?.numberOfDice ? 0 : 0.75
                  }rem ${
                    spellInput.upcastBonus?.numberOfDice ? 0 : 0.75
                  }rem 0px`,
                }}
              >
                {spellInput.spellRoll &&
                  spellInput.spellRoll.map((roll, index) => {
                    if (!spellInput.spellRoll) return null;
                    if (roll.numberOfDice < 1) return null;
                    if (index == spellInput.spellRoll.length - 1) {
                      return (
                        <span key={index} className="mx-1 badge badge-neutral">
                          {roll.numberOfDice}d{roll.dice}{" "}
                          {roll.type.toCapitalCase() === "None"
                            ? ""
                            : roll.type.toCapitalCase()}
                        </span>
                      );
                    }
                    return (
                      <Fragment key={index}>
                        <span className="mx-1 badge badge-neutral">
                          {roll.numberOfDice}d{roll.dice}{" "}
                          {roll.type.toCapitalCase() === "None"
                            ? ""
                            : roll.type.toCapitalCase()}{" "}
                        </span>
                        +
                      </Fragment>
                    );
                  })}
              </div>{" "}
              {spellInput.upcastBonus &&
                spellInput.upcastBonus.numberOfDice > 0 && (
                  <div
                    className="badge badge-error h-8  rounded-r-lg "
                    style={{
                      borderTopLeftRadius: "0px",
                      borderBottomLeftRadius: "0px",
                    }}
                  >
                    +{" "}
                    <span className="mx-1 badge badge-neutral">
                      {spellInput.upcastBonus.numberOfDice}d
                      {spellInput.upcastBonus.dice}{" "}
                      {spellInput.upcastBonus.type.toCapitalCase() === "None"
                        ? ""
                        : spellInput.upcastBonus.type.toCapitalCase()}{" "}
                      per spell level above {toSpellLevel(spellInput.baseLevel)}
                    </span>
                  </div>
                )}
            </div>
            {spellInput.notes.length > 0 && (
              <p className="text-sm p-4 bg-neutral text-neutral-content rounded-xl mt-4">
                {spellInput.notes}
              </p>
            )}
          </div>
        </div>
        {showEditor && (
          <button
            onClick={() => {
              setSpell(spellInput);
              const modal = document.getElementById(
                `spell-editor-modal-${index}`
              ) as HTMLDialogElement;
              modal.showModal();
            }}
            className="btn btn-warning join-item h-full"
          >
            Edit
          </button>
        )}{" "}
        {logPush &&
          (spellInput.prepared ? (
            <div className=" h-full join-item join join-vertical">
              <select
                className="select select-bordered join-item h-1/2"
                onChange={(e) => {
                  setRollSpellLevel(parseInt(e.target.value));
                }}
              >
                {/* select spell level */}
                <option value={0} disabled={spellInput.baseLevel === 0}>
                  Select Spell Level
                </option>
                {numberArray(spellInput.baseLevel, 9).map((level) => (
                  <option key={level} value={level}>
                    {toSpellLevel(level)}
                  </option>
                ))}
              </select>
              <button
                className="btn btn-accent join-item h-1/2"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("casting spell as a" + rollSpellLevel + " spell");
                  const rollResults = spellInput.spellRoll?.map((r) => {
                    const rollRes = numberArray(1, r.numberOfDice).map(() =>
                      roll(1, r.dice)
                    );
                    return rollRes;
                  });
                  console.log(rollResults);
                  if (!rollResults) return;
                  const logList = [];
                  logList.push({
                    logType: "spell",
                    from: spellInput.name,
                    spellLevel: rollSpellLevel,
                  } as Log);

                  for (let i = 0; i < rollResults.length; i++) {
                    if (!rollResults[i]) return;
                    if (!spellInput.spellRoll) return;
                    const rolledArr = rollResults[i]
                      .map((r) => {
                        if (!spellInput.spellRoll) return;
                        return {
                          rolled: r,
                          diceType: spellInput.spellRoll[i].dice,
                        };
                      })
                      .filter((f) => f) as {
                      rolled: number;
                      diceType: number;
                    }[];

                    const log: Log = {
                      logType: "roll",
                      from: `${spellInput.name} - ${spellInput.spellRoll[
                        i
                      ].type.toCapitalCase()} Damage`,
                      roll: {
                        rolls: rolledArr,
                        plus: 0,
                        total: rolledArr.reduce((a, b) => a + b.rolled, 0),
                      },
                    };
                    logList.push(log);
                  }
                  // upcast damage in one log
                  if (
                    spellInput.upcastBonus &&
                    spellInput.upcastBonus.numberOfDice > 0
                  ) {
                    const upcastRoll = numberArray(
                      1,
                      spellInput.upcastBonus.numberOfDice * rollSpellLevel
                    ).map(() =>
                      // @ts-ignore
                      roll(1, spellInput.upcastBonus.dice)
                    );
                    const upcastLog: Log = {
                      logType: "roll",
                      from: `${
                        spellInput.name
                      } - ${spellInput.upcastBonus.type.toCapitalCase()} Damage`,
                      roll: {
                        rolls: upcastRoll.map((r) => ({
                          rolled: r,
                          // @ts-ignore
                          diceType: spellInput.upcastBonus.dice,
                        })) as { rolled: number; diceType: number }[],
                        plus: 0,
                        total: upcastRoll.reduce((a, b) => a + b, 0),
                      },
                    };
                    logList.push(upcastLog);
                  }

                  logList.forEach((log) => {
                    console.log(log);
                    logPush(log);
                  });
                }}
              >
                Cast
              </button>
            </div>
          ) : (
            <div className="bg-info font-bold text-info-content flex items-center justify-center text-center  join-item h-full">
              Prepare this spell to be able to cast it.
            </div>
          ))}
      </div>
      {showEditor && (
        <dialog id={`spell-editor-modal-${index}`} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Edit Spell</h3>
            <div className="divider m-0"></div>
            <form className="flex items-center flex-col">
              <div className="flex flex-col w-full bg-base-300 rounded-xl p-4 items-center">
                <p className="text-lg font-bold">Spell Info</p>
                <div className="divider m-0" />
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Spell name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Ex. Fireball"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) =>
                      setSpell({ ...spell, name: e.target.value })
                    }
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Level</span>
                  </div>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    onChange={(e) =>
                      setSpell({
                        ...spell,
                        baseLevel: parseInt(e.target.value) as
                          | 0
                          | 1
                          | 2
                          | 3
                          | 4
                          | 5
                          | 6
                          | 7
                          | 8
                          | 9,
                      })
                    }
                    defaultValue={spell.baseLevel}
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => (
                      <option key={level} value={level}>
                        {toSpellLevel(level)}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Notes</span>
                  </div>
                  <textarea
                    onChange={(e) =>
                      setSpell({ ...spell, notes: e.target.value })
                    }
                    placeholder="Ex. This spell is a fireball that explodes in a 20ft radius."
                    className="textarea h-24 textarea-bordered w-full max-w-xs"
                  ></textarea>
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Range</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Ex. 120ft, self, etc."
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) =>
                      setSpell({ ...spell, range: e.target.value })
                    }
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Casting Time</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Ex. 1 action"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) =>
                      setSpell({ ...spell, castingTime: e.target.value })
                    }
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Components</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Ex. M, V, S"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) =>
                      setSpell({ ...spell, components: e.target.value })
                    }
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Radius</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Ex. 20ft, Single Target, etc."
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) =>
                      setSpell({ ...spell, radius: e.target.value })
                    }
                  />
                </label>
                <div className="divider mb-0" />
                <div className="grid grid-cols-3 justify-center items-center mt-2 mb-4 whitespace-nowrap overflow-hidden text-ellipsis">
                  <label className="form-control w-full max-w-xs items-center col-span-1">
                    <div className="label">
                      <span className="label-text font-bold">Prepared</span>
                    </div>
                    <input
                      type="checkbox"
                      className="toggle toggle-primary"
                      onChange={(e) =>
                        setSpell({ ...spell, prepared: e.target.checked })
                      }
                    />
                  </label>
                  <label className="form-control w-full max-w-xs  col-span-1  items-center">
                    <div className="label">
                      <span className="label-text font-bold">
                        Concentration
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      className="toggle toggle-primary"
                      onChange={(e) =>
                        setSpell({ ...spell, concentration: e.target.checked })
                      }
                    />
                  </label>
                  <label className="form-control w-full max-w-xs  col-span-1  items-center">
                    <div className="label">
                      <span className="label-text font-bold">Ritual</span>
                    </div>
                    <input
                      type="checkbox"
                      className="toggle toggle-primary"
                      onChange={(e) =>
                        setSpell({ ...spell, ritual: e.target.checked })
                      }
                    />
                  </label>
                </div>
                <div className="divider m-0" />
              </div>
              <div className="divider m-0" />
              <div className="flex flex-col w-full bg-base-300 rounded-xl p-4 items-center">
                <p className="text-lg font-bold">Prepare Roll</p>
                <p className="italic text-sm text-center px-4">
                  Set up the dice roll for this spell. Ex. 3d6 Fire, 1d8
                  Healing, 2d6 radiant + 4d6 thunder, etc. You will be able to
                  roll this on the main sheet.
                </p>
                {/* 3 should be enough */}
                <div className="divider m-0" />
                <SpellRollMaker
                  spellRoll={spell.spellRoll[0]}
                  setSpellRoll={(r) => {
                    const newSpellRoll = [...(spell.spellRoll || [])];
                    newSpellRoll[0] = {
                      type: r.type || DamageTypes.NONE,
                      dice: r.dice || 4,
                      numberOfDice: r.numberOfDice || 0,
                    };
                    setSpell({ ...spell, spellRoll: newSpellRoll });
                  }}
                />
                <div className="divider  text-2xl">+</div>
                <SpellRollMaker
                  spellRoll={spell.spellRoll[1]}
                  setSpellRoll={(r) => {
                    const newSpellRoll = [...(spell.spellRoll || [])];
                    newSpellRoll[1] = {
                      type: r.type || DamageTypes.NONE,
                      dice: r.dice || 4,
                      numberOfDice: r.numberOfDice || 0,
                    };
                    setSpell({ ...spell, spellRoll: newSpellRoll });
                  }}
                />
                <div className="divider  text-2xl">+</div>
                <SpellRollMaker
                  spellRoll={spell.spellRoll[2]}
                  setSpellRoll={(r) => {
                    const newSpellRoll = [...(spell.spellRoll || [])];
                    newSpellRoll[2] = {
                      type: r.type || DamageTypes.NONE,
                      dice: r.dice || 4,
                      numberOfDice: r.numberOfDice || 0,
                    };
                    setSpell({ ...spell, spellRoll: newSpellRoll });
                  }}
                />
                <div className="divider m-0" />
                <p className="text-lg font-bold text-center p-4">Upcast Roll</p>
                <p className="italic text-sm text-center px-4">
                  Add the additional dice rolls for upcasting this spell. Ex.
                  1d6 fire damage per level.
                </p>
                <div className="divider m-0" />
                <SpellRollMaker
                  spellRoll={spell.upcastBonus}
                  setSpellRoll={(r) => {
                    setSpell({ ...spell, upcastBonus: r });
                  }}
                />
              </div>
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button
                  className="btn"
                  onClick={() => {
                    updateSpell(spell);
                    const modal = document.getElementById(
                      `spell-editor-modal-${index}`
                    ) as HTMLDialogElement;
                    modal.close();
                    console.log(spell);
                  }}
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default PreparedSpellView;
