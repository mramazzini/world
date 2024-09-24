"use client";

import Info from "@/app/components/UI/Info";
import P from "@/app/components/Utility/FormatAndSanitize";
import Tooltip from "@/app/components/Utility/Tooltip";
import { AbilityScoreValue, CallbackOptions, CharacterInfo } from "@/lib/types";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import ManualAbilityScoreChoice from "./AbilityScoreSelectors/ManualAbilityScoreChoice";
import AbilityToText from "@/lib/utils/AbilityToText";
import AbilityScoreChoice from "./AbilityScoreChoice";
interface Props {
  choice: PrismaJson.AbilityScoreChoice;
  character: CharacterInfo;
  callback: (data: CallbackOptions) => void;
}

const AbilityScoreHandler = ({ choice, character, callback }: Props) => {
  const handleSubmit = (selections: AbilityScoreValue[]) => {
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
    const defArr: CallbackOptions = choice.default as CallbackOptions;
    callback(
      choice.default
        ? (arr.concat(defArr) as CallbackOptions)
        : (selections as CallbackOptions)
    );
  };

  const id = uuidv4();
  return (
    character &&
    character.state && (
      <>
        <dialog id={id} className="modal ">
          <div
            className="modal-box  "
            style={{
              height: "",
              maxHeight: "calc(100vh - 5em)",
              overflow: "visible",
            }}
          >
            <form
              className=" overflow-auto "
              style={{
                height: "",
                maxHeight: "calc(80vh - 5em)",
              }}
            >
              <div className="flex bg-base-300 rounded-xl p-4 flex-col my-4 ">
                <p>You gain the following Ability Scores:</p>

                <div className="divider divider-accent  m-0"></div>
                <ul className="list-disc ml-4">
                  {choice.default?.map((abilityChoice, index) => {
                    return (
                      <li key={index} className={"pl-2 "}>
                        {AbilityToText(abilityChoice.ability)}: +{" "}
                        {abilityChoice.value}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {choice.choices && (
                <div className="flex bg-base-300 rounded-xl p-4 flex-col my-4 ">
                  <p>Choose one of the following:</p>
                  <div className="divider divider-accent  m-0"></div>
                </div>
              )}
              {choice.choices?.map((abilityChoice, index) => {
                return (
                  <Fragment key={v4()}>
                    <AbilityScoreChoice
                      choice={abilityChoice}
                      setSelections={
                        // attempt to submit
                        (selections: AbilityScoreValue[]) => {
                          handleSubmit(selections);
                        }
                      }
                    />

                    {index !== (choice.choices?.length || 1) - 1 && (
                      <div className="divider divider-secondary">OR</div>
                    )}
                  </Fragment>
                );
              })}
              <div className="flex justify-end gap-4 mt-4">
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

export default AbilityScoreHandler;
