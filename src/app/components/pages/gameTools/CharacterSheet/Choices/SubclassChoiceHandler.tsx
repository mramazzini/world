"use client";

import {
  CallbackOptions,
  CharacterInfo,
  SubClassID,
} from "@/lib/utils/types/types";
import { useEffect, useState } from "react";
import SubclassChoice from "./SubclassChoice";
import Image from "next/image";
import { v4 } from "uuid";

interface Props {
  choice: PrismaJson.SubclassChoice;
  character: CharacterInfo;
  callback: (data: CallbackOptions) => void;
}

const SubclassChoiceHandler = ({ callback, choice, character }: Props) => {
  const [selections, setSelections] = useState<SubClassID[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
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
    const defArr: CallbackOptions = choice.default as CallbackOptions;
    callback(
      choice.default
        ? (arr.concat(defArr) as CallbackOptions)
        : (selections as CallbackOptions)
    );
  };
  const id = v4();
  return (
    <>
      <button
        className="btn p-4 h-auto m-4 flex items-center justify-between flex-col btn-ghost border border-gray-500"
        onClick={() => {
          const modal = document.getElementById(id) as HTMLDialogElement;
          modal.showModal();
        }}
      >
        <Image
          src={"/images/silhouette.svg"}
          width={200}
          height={200}
          className="opacity-50"
          alt="Choose a subclass"
        />
        <p className="divider">Choose a subclass</p>
      </button>
      <dialog className="modal " id={id}>
        <div
          className="modal-box "
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
            <div>
              {choice.choices?.map((choice, index) => {
                return (
                  <SubclassChoice
                    modalID={id}
                    key={index}
                    choice={choice}
                    updateSelections={(subClassList) => {
                      setSelections((prev) => {
                        const newSelections = subClassList;
                        return newSelections as SubClassID[];
                      });
                    }}
                  />
                );
              })}
            </div>
            <div className="flex justify-end gap-4">
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
    </>
  );
};

export default SubclassChoiceHandler;
