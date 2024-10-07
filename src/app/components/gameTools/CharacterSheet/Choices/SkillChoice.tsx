"use client";

import P from "@/app/components/Utility/FormatAndSanitize";
import numberArray from "@/lib/utils/numberArray";
import { Skill } from "@prisma/client";
import { useEffect, useState } from "react";
interface Props {
  modalID: string;
  choice: {
    numberOfChoices: number;
    options: Skill[];
  };
  updateSelections: (SkillList: Skill[]) => void;
}

const SkillChoice = ({ choice, updateSelections, modalID }: Props) => {
  const [selections, setSelections] = useState<number[]>([]);

  useEffect(() => {
    //get skills
    const skillList = selections.map((index) => choice.options[index]);
    //make sure all selected
    updateSelections(skillList);
  }, [selections]);

  return (
    <div className="flex bg-base-300 rounded-xl p-4 flex-col mb-4">
      <p>Choose {choice.numberOfChoices} from:</p>
      <div className="divider divider-accent  m-0"></div>
      <ul className="list-disc ml-4">
        {choice.options.map((skill, index) => {
          return (
            <li
              key={index}
              className={
                selections.some((selection) => selection === index)
                  ? "pl-2 bg-neutral  rounded-xl"
                  : "pl-2 "
              }
            >
              <P modalID={modalID}>
                {skill.toCapitalCase().replaceAll("_", " ")}
                {""}
              </P>
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
            {choice.options.map((skill, index) => (
              <option key={index} value={index}>
                {skill.toCapitalCase().replaceAll("_", " ")}
              </option>
            ))}
          </select>
        );
      })}
    </div>
  );
};

export default SkillChoice;
