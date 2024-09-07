"use client";

import { Armor, ArmorType } from "@prisma/client";
import { useEffect, useState } from "react";
interface Props {
  choice: {
    numberOfChoices: number;
    options: ArmorType[];
  };
  updateSelections: (armorList: ArmorType[]) => void;
}

const ArmorChoice = ({ choice, updateSelections }: Props) => {
  const [selections, setSelections] = useState<ArmorType[]>([]);

  useEffect(() => {
    //get armor types
    updateSelections(selections);
  }, [selections]);

  return (
    <div className="flex bg-base-300 rounded-xl p-4 flex-col mb-4">
      <p>Choose {choice.numberOfChoices} from:</p>
      <div className="divider divider-accent  m-0"></div>
      <ul className="list-disc ml-4">
        {choice.options.map((armor, index) => {
          return (
            <li
              key={index}
              className={
                selections.some((selection) => selection === armor)
                  ? "pl-2 bg-neutral  rounded-xl"
                  : "pl-2 "
              }
            >
              {armor}
            </li>
          );
        })}
      </ul>
      <select
        defaultValue={"Pick One"}
        className="select select-bordered   w-full max-w-xs mt-2"
        onChange={(e) => {
          const index = e.target.value;
          const newSelections = [...selections];
          if (newSelections.length >= choice.numberOfChoices) {
            newSelections.shift();
          }
          newSelections.push(ArmorType[index as ArmorType]);
          setSelections(newSelections);
        }}
      >
        <option disabled>Pick One</option>
        {Object.keys(ArmorType).map((key, index) => (
          <option key={index} value={ArmorType[key as ArmorType]}>
            {ArmorType[key as ArmorType]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ArmorChoice;
