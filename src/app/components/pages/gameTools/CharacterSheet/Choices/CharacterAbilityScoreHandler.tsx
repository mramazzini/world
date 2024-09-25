"use client";

import Info from "@/app/components/UI/Info";
import P from "@/app/components/Utility/FormatAndSanitize";
import Tooltip from "@/app/components/Utility/Tooltip";
import { AbilityScoreValue, CallbackOptions, CharacterInfo } from "@/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ManualAbilityScoreChoice from "../AbilityScoreSelectors/ManualAbilityScoreChoice";
interface Props {
  choice: PrismaJson.AbilityScoreChoice;
  character: CharacterInfo;
  callback: (data: CallbackOptions) => void;
}

const CharacterAbilityScoreHandler = ({
  choice,
  character,
  callback,
}: Props) => {
  const [selections, setSelections] = useState<AbilityScoreValue[]>([]);
  const [scoreCalculator, setScoreCalculator] = useState<
    "roll" | "manual" | "pointBuy" | null
  >(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //make sure that all selections are made
    let allSelectionsMade = true;
    if (!selections || selections.length === 0) {
      allSelectionsMade = false;
    }
    if (!choice.choices) {
      allSelectionsMade = true;
    }
    if (!allSelectionsMade) {
      return;
    }
    //callback
    const arr: CallbackOptions = selections as CallbackOptions;
    callback(selections as CallbackOptions);
  };
  const id = uuidv4();
  return (
    character &&
    character.state && (
      <>
        <dialog id={id} className="modal ">
          <div
            className="modal-box w-[1800px] max-w-[80vw] "
            style={{
              height: "",
              maxHeight: "calc(100vh - 5em)",
              overflow: "visible",
            }}
          >
            <form
              onSubmit={handleSubmit}
              className=" overflow-auto "
              style={{
                height: "",
                maxHeight: "calc(80vh - 5em)",
              }}
            >
              <div className="flex bg-base-300 rounded-xl p-4 flex-col my-4 ">
                <p>Select your Ability Scores:</p>
                <Tooltip
                  element={<p>Note on Racial Ability Scores.</p>}
                  additionalContent={
                    <p className="bg-base-300 text-base rounded-xl p-2 text-sm mt-2">
                      <strong>
                        {character.SubRace?.abilityScoreDescription
                          ? character.SubRace?.name
                          : character.Race?.name}
                        :{" "}
                      </strong>
                      {character.SubRace?.abilityScoreDescription
                        ? character.SubRace?.abilityScoreDescription
                        : character.Race?.abilityScoreDescription || ""}
                    </p>
                  }
                >
                  Your racial ability scores are applied after you select your
                  ability scores. For reference, your race describes your
                  ability score increase as follows:
                </Tooltip>
                <div className="divider divider-accent  m-0"></div>
              </div>
              {/* 3 tabs, roll for stats, manually fill in, point buy. */}
              {scoreCalculator === "roll" ? (
                <></>
              ) : scoreCalculator === "manual" ? (
                <ManualAbilityScoreChoice
                  updateSelections={(abilityScores) => {
                    setSelections(abilityScores);
                  }}
                />
              ) : scoreCalculator === "pointBuy" ? (
                <></>
              ) : (
                <>
                  <div className="grid lg:grid-cols-3 gap-4 m-4 ">
                    <button
                      className="flex flex-col  rounded-xl p-4 btn h-auto border-gray-500 indicator w-auto"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      disabled
                    >
                      <span className="indicator-item indicator-center badge badge-warning">
                        Coming soon
                      </span>
                      <h2>🎲 Roll for Stats 🎲</h2>
                      <div className="divider divider-accent  m-0"></div>
                      <p>
                        Roll 4d6 and drop the lowest die. Do this 6 times and
                        assign the results to your ability scores.
                      </p>
                    </button>

                    <button
                      className=" rounded-xl p-4 btn h-auto border-gray-500 flex flex-col indicator w-auto"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      disabled
                    >
                      <span className="indicator-item indicator-center badge badge-primary">
                        Coming Soon
                      </span>
                      <h2>🛒 Point Buy 🛒</h2>
                      <div className="divider divider-accent  m-0"></div>
                      <p>
                        Using the point buy system, increase your ability scores
                        as you see fit.
                      </p>
                    </button>
                    <button
                      className="flex flex-col rounded-xl p-4 btn h-auto border-gray-500 indicator w-auto"
                      onClick={(e) => {
                        e.preventDefault();
                        setScoreCalculator("manual");
                      }}
                    >
                      <span className="indicator-item indicator-center badge badge-success">
                        Boring
                      </span>
                      <h2>💤 Manual 💤</h2>
                      <div className="divider divider-accent  m-0"></div>
                      <p>Manually assign your ability scores.</p>
                    </button>
                  </div>
                </>
              )}

              <div className="flex justify-end gap-4">
                {scoreCalculator !== null && (
                  <button
                    className="btn btn-neutral"
                    type="reset"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelections([]);
                      setScoreCalculator(null);
                    }}
                  >
                    Restart
                  </button>
                )}
                <button
                  className="btn btn-error"
                  onClick={(e) => {
                    e.preventDefault();
                    const modal = document.getElementById(
                      id
                    ) as HTMLDialogElement;
                    modal.close();
                  }}
                >
                  Cancel
                </button>
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </dialog>
        <button
          className="btn p-4 h-auto flex items-center justify-between flex-col btn-ghost border border-gray-500 join-item"
          onClick={() => {
            const modal = document.getElementById(id) as HTMLDialogElement;

            modal.showModal();
          }}
        >
          <Image
            src={"/images/sparkles2.svg"}
            width={200}
            height={200}
            className="opacity-50"
            alt="Choose a subclass"
          />
          <p className="divider">Choose Ability Scores</p>
        </button>
      </>
    )
  );
};

export default CharacterAbilityScoreHandler;
