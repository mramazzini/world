"use client";
import { CallbackOptions, CharacterInfo } from "@/lib/types";
import P from "@/app/components/Utility/FormatAndSanitize";
import { useEffect, useState } from "react";
import ItemChoice from "./ItemChoice";
interface Props {
  character: CharacterInfo;
  choice: PrismaJson.ItemChoice;
  callback: (data: CallbackOptions) => void;
}
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
const ItemChoiceHandler = ({ choice, callback, character }: Props) => {
  const [selections, setSelections] = useState<PrismaJson.QuantityItem[][]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //make sure that all selections are made
    console.log("selections", selections);
    let allSelectionsMade = true;
    selections.forEach((selection) => {
      if (!selection || selection.length === 0) {
        allSelectionsMade = false;
      }
    });
    if (!allSelectionsMade) {
      return;
    }
    //callback
    callback(choice.default ? [...selections, choice.default] : selections);
  };
  const id = uuidv4();
  return (
    character &&
    character.state && (
      <>
        <dialog id={id} className="modal ">
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
              className=" overflow-auto"
              style={{
                height: "",

                maxHeight: "calc(80vh - 5em)",
              }}
            >
              <div className="flex bg-base-300 rounded-xl p-4 flex-col my-4 ">
                <p>You gain the following items:</p>
                <div className="divider divider-accent  m-0"></div>
                <ul className="list-disc ml-4">
                  {choice.default?.map((itemData, index) => (
                    <li key={index}>
                      <P>{`${itemData.quantity} ^${itemData.item}{}^`}</P>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                {choice.choices?.map((choice, index) => (
                  <ItemChoice
                    key={index}
                    choice={choice}
                    updateSelections={(itemList) => {
                      setSelections((prev) => {
                        const newSelections = [...prev];
                        newSelections[index] = itemList;
                        return newSelections;
                      });
                    }}
                  />
                ))}
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
        <button
          className="btn p-4 h-auto m-4 flex items-center join-item justify-between flex-col btn-ghost border border-gray-500"
          onClick={() => {
            const modal = document.getElementById(id) as HTMLDialogElement;
            modal.showModal();
          }}
        >
          <Image
            src={"/images/backpack.svg"}
            width={200}
            height={200}
            className="opacity-50"
            alt="Choose a subclass"
          />
          <p className="divider">Choose your Items</p>
        </button>
      </>
    )
  );
};

export default ItemChoiceHandler;
