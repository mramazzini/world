"use client";
import { memoizeGetSubclass } from "@/app/components/Utility/globalCache";
import ModelDisplay from "@/app/components/Utility/ModelDisplay";
import ModelLink from "@/app/components/Utility/ModelLink";
import { SubClassID, SubClassInfo } from "@/lib/utils/types/types";
import numberArray from "@/lib/utils/numberArray";
import { useEffect, useState } from "react";

interface Props {
  choice: {
    numberOfChoices: number;
    options: SubClassID[];
  };
  updateSelections: (subClassList: SubClassID[]) => void;
}

const SubclassChoice = ({ choice, updateSelections }: Props) => {
  const [selections, setSelections] = useState<number[]>([]);
  const [subclasses, setSubclasses] = useState<SubClassInfo[]>([]);

  useEffect(() => {
    choice.options.forEach((subClass) => {
      memoizeGetSubclass(subClass).then((subClass) => {
        setSubclasses((prev) => [...prev, subClass]);
      });
    });
  }, [selections]);

  useEffect(() => {
    //get subclasss
    const subclassList = selections.map((index) => choice.options[index]);
    //make sure all selected
    updateSelections(subclassList);
  }, [selections]);

  return (
    <div className="flex bg-base-300 rounded-xl p-4 flex-col mb-4 w-full">
      <h3 className="text-lg font-bold text-center ">Subclass Choice</h3>
      <div className="divider divider-accent  m-0"></div>
      <p>Choose {choice.numberOfChoices} from:</p>
      <div className="divider divider-accent  m-0"></div>
      <ul className="list-disc ml-4">
        {choice.options.map((subclass, index) => {
          return (
            <li
              key={index}
              className={
                selections.some((selection) => selection === index)
                  ? "pl-2 bg-neutral  rounded-xl"
                  : "pl-2 "
              }
            >
              <ModelLink potential={subclasses} linkBase="subclass">
                {subclass.toString()}
                {`{${subclasses[index]?.name}}`}
              </ModelLink>
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
            {choice.options.map((subclass, index) => (
              <option key={index} value={index}>
                <ModelDisplay model="Subclass" id={subclass as SubClassID} />
              </option>
            ))}
          </select>
        );
      })}
    </div>
  );
};

export default SubclassChoice;
