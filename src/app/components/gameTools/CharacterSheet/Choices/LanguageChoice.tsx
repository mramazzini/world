"use client";

import numberArray from "@/lib/utils/numberArray";
import { Language } from "@prisma/client";
import { useEffect, useState } from "react";
interface Props {
  choice: {
    numberOfChoices: number;
    options: Language[];
  };
  updateSelections: (languageList: Language[]) => void;
}

const LanguageChoice = ({ choice, updateSelections }: Props) => {
  const [selections, setSelections] = useState<Language[]>([]);

  useEffect(() => {
    //get language types
    updateSelections(selections);
  }, [selections]);

  return (
    <div className="flex bg-base-300 rounded-xl p-4 flex-col mb-4">
      <p>Choose {choice.numberOfChoices} from:</p>
      <div className="divider divider-accent  m-0"></div>
      <ul className="list-disc ml-4">
        {choice.options.map((language, index) => {
          return (
            <li
              key={index}
              className={
                selections.some((selection) => selection === language)
                  ? "pl-2 bg-neutral  rounded-xl"
                  : "pl-2 "
              }
            >
              {language.toCapitalCase().replaceAll("_", " ")}
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
              const index = e.target.value;
              const newSelections = [...selections];
              if (newSelections.length >= choice.numberOfChoices) {
                newSelections.shift();
              }
              newSelections.push(Language[index as Language]);
              setSelections(newSelections);
            }}
          >
            <option disabled>Pick One</option>
            {Object.keys(Language).map((key, index) => (
              <option key={index} value={Language[key as Language]}>
                {Language[key as Language].toCapitalCase().replaceAll("_", " ")}
              </option>
            ))}
          </select>
        );
      })}
    </div>
  );
};

export default LanguageChoice;
