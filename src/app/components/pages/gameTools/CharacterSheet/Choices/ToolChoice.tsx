"use client";

import P from "@/app/components/Utility/FormatAndSanitize";
import ModelDisplay from "@/app/components/Utility/ModelDisplay";
import { ToolID } from "@/lib/types";
import numberArray from "@/lib/utils/numberArray";
import { useEffect, useState } from "react";
interface Props {
  choice: {
    numberOfChoices: number;
    options: ToolID[];
  };
  updateSelections: (ToolList: ToolID[]) => void;
}

const ToolChoice = ({ choice, updateSelections }: Props) => {
  const [selections, setSelections] = useState<number[]>([]);

  useEffect(() => {
    //get tools
    const toolList = selections.map((index) => choice.options[index]);
    //make sure all selected
    updateSelections(toolList);
  }, [selections]);

  return (
    <div className="flex bg-base-300 rounded-xl p-4 flex-col mb-4">
      <p>Choose {choice.numberOfChoices} from:</p>
      <div className="divider divider-accent  m-0"></div>
      <ul className="list-disc ml-4">
        {choice.options.map((tool, index) => {
          return (
            <li
              key={index}
              className={
                selections.some((selection) => selection === index)
                  ? "pl-2 bg-neutral  rounded-xl"
                  : "pl-2 "
              }
            >
              <ModelDisplay model="Tool" id={tool as ToolID} />
            </li>
          );
        })}
      </ul>
      {numberArray(1, choice.numberOfChoices).map((_, index) => {
        return (
          <select
            key={index}
            defaultValue={"Pick One"}
            className={`select select-bordered   w-full max-w-xs mt-2
            ${
              selections.length >= choice.numberOfChoices
                ? "select-secondary"
                : ""
            }`}
            onChange={(e) => {
              const index = parseInt(e.target.value);
              const newSelections = [...selections];
              if (newSelections.length >= choice.numberOfChoices) {
                newSelections.shift();
              }
              newSelections.push(index);
              setSelections(newSelections);
            }}
          >
            <option disabled>Pick One</option>
            {choice.options.map((tool, index) => (
              <option key={index} value={index}>
                <ModelDisplay model="Tool" id={tool as ToolID} />
              </option>
            ))}
          </select>
        );
      })}
    </div>
  );
};

export default ToolChoice;
