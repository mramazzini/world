"use client";

import P from "@/app/components/Utility/FormatAndSanitize";
import { AbilityScoreValue } from "@/lib/utils/types/types";
import AbilityToText from "@/lib/utils/AbilityToText";
import numberArray from "@/lib/utils/numberArray";
import { Ability } from "@prisma/client";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
interface Props {
  choice: {
    abilities: Ability[]; // Array of abilities that can be chosen
    options: number[]; // Array of numbers that can be chosen
  };
  setSelections: (data: AbilityScoreValue[]) => void;
}
interface Remaining {
  [key: number]: number;
}
const AbilityScoreChoice = ({ choice, setSelections }: Props) => {
  const [localSelections, setLocalSelections] = useState<AbilityScoreValue[]>(
    []
  );
  const [remaining, setRemaining] = useState<Remaining>({});
  const resetRemaining = () => {
    const newRemaining = {} as Remaining;
    choice.options.forEach((option) => {
      newRemaining[option as number]
        ? newRemaining[option]++
        : (newRemaining[option] = 1);
    });
    setRemaining(newRemaining);
  };
  useEffect(() => {
    resetRemaining();
  }, [choice.options]);

  const handleSelection = (ability: Ability, value: number) => {
    const newSelections = localSelections.filter((s) => s.ability !== ability);
    setLocalSelections([...newSelections, { ability, value }]);
    const newRemaining = { ...remaining };
    newRemaining[value]--;
    setRemaining(newRemaining);
  };

  return (
    <div className="bg-base-300 rounded-xl p-4">
      <div className="grid grid-cols-3 gap-4">
        {choice.abilities.map((ability) => (
          <div
            key={v4()}
            className="flex flex-col items-center bg-base-100 p-2 rounded-xl"
          >
            <label htmlFor={ability} className="text-center">
              {ability}
            </label>
            <div className="flex flex-row  basis-8">
              {Array.from(
                new Set(
                  choice.options.filter((option) => remaining[option] !== 0)
                )
              ).map((option) => (
                <button
                  key={v4()}
                  disabled={remaining[option] === 0}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelection(ability, option);
                  }}
                  className={`${
                    localSelections.some((s) => s.ability === ability)
                      ? "hidden"
                      : "btn btn-accent btn-sm mx-1"
                  } p-2 rounded-lg`}
                >
                  + {option}
                </button>
              ))}
              {Array.from(
                new Set(
                  choice.options.filter((option) =>
                    localSelections.some((s) => s.ability === ability)
                  )
                )
              ).map((option) => (
                <button
                  key={v4()}
                  onClick={(e) => {
                    e.preventDefault();
                    // remove selection
                    const newSelections = localSelections.filter(
                      (s) => s.ability !== ability
                    );
                    setLocalSelections(newSelections);
                    const newRemaining = { ...remaining };
                    newRemaining[option]++;
                    setRemaining(newRemaining);
                  }}
                  className={`${
                    localSelections.find(
                      (s) => s.ability === ability && s.value === option
                    )
                      ? "btn  btn-error btn-sm mx-1"
                      : "hidden"
                  } p-2 rounded-lg`}
                >
                  - {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="divider divider-secondary"></div>
      <div className="flex flex-row gap-4 ">
        <ul className="list-disc ml-4 h-8">
          {localSelections.map((selection) => (
            <li key={v4()} className={"pl-2 "}>
              {AbilityToText(selection.ability)}: + {selection.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end gap-4">
        <button
          className="btn btn-neutral"
          onClick={(e) => {
            e.preventDefault();
            setLocalSelections([]);
            resetRemaining();
          }}
        >
          Reset
        </button>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            setSelections(localSelections);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AbilityScoreChoice;
