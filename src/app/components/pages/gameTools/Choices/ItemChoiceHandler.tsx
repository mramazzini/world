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
  return (
    character &&
    character.state && (
      <form onSubmit={handleSubmit}>
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
        <div className="max-h-[600px] overflow-auto">
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
        <div className="flex justify-end mt-2">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    )
  );
};

export default ItemChoiceHandler;
