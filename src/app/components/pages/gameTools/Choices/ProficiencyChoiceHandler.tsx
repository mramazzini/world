"use client";
import {
  Ability,
  ArmorID,
  CallbackOptions,
  CharacterInfo,
  ToolID,
  WeaponID,
} from "@/lib/types";
import P from "@/app/components/Utility/FormatAndSanitize";
import { useEffect, useState } from "react";
import { ArmorType, Language, Skill } from "@prisma/client";
import ArmorChoice from "./ArmorChoice";
import SkillChoice from "./SkillChoice";
import ModelLink from "@/app/components/Utility/ModelLink";
import ModelDisplay from "@/app/components/Utility/ModelDisplay";
import AbilityToText from "@/lib/utils/AbilityToText";
type ProficiencyType =
  | ArmorID
  | WeaponID
  | Language
  | Skill
  | Ability
  | ToolID
  | ArmorType;

interface Props {
  proficiency: "armor" | "weapon" | "language" | "skill" | "saving" | "tool";
  character: CharacterInfo;
  choice: PrismaJson.ChoiceType;
  callback: (data: CallbackOptions) => void;
}

const ProficiencyChoiceHandler = <T extends ProficiencyType>({
  choice,
  callback,
  character,
  proficiency,
}: Props) => {
  const [selections, setSelections] = useState<T[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //make sure that all selections are made
    console.log("selections", selections);
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
  const parseChoiceItem = (item: T) => {
    switch (proficiency) {
      case "armor":
        return (item as ArmorType).toCapitalCase().replaceAll("_", " ");

      case "weapon":
        return <ModelDisplay model="Weapon" id={item as WeaponID} />;
      case "language":
        return item as Language;
      case "skill":
        return item as Skill;
      case "saving":
        return AbilityToText(item as Ability);
      case "tool":
        return item as ToolID;
      default:
        return "asd";
    }
  };
  return character && character.state && (choice.choices || choice.default) ? (
    <form onSubmit={handleSubmit}>
      <div className="flex bg-base-300 rounded-xl p-4 flex-col my-4">
        <p>You gain the following proficiencies:</p>
        <div className="divider divider-accent  m-0"></div>
        <ul className="list-disc ml-4">
          {choice.default?.map((data, index) => (
            <li key={index}>{parseChoiceItem(data as T)}</li>
          ))}
        </ul>
      </div>
      <div className="max-h-[600px] overflow-auto">
        {proficiency == "armor" &&
          choice.choices?.map((c, index) => {
            if (index > 3) return;
            if (index == 3)
              return <p key={index}>... +{choice.choices?.length} more</p>;
            return (
              <ArmorChoice
                key={index}
                choice={c as { numberOfChoices: number; options: ArmorType[] }}
                updateSelections={(armor) => {
                  setSelections((prev) => {
                    const newSelections = armor;
                    return newSelections as T[];
                  });
                }}
              />
            );
          })}
        {proficiency == "skill" &&
          choice.choices?.map((c, index) => {
            if (index > 3) return;
            if (index == 3)
              return <p key={index}>... +{choice.choices?.length} more</p>;
            return (
              <SkillChoice
                key={index}
                choice={c as { numberOfChoices: number; options: Skill[] }}
                updateSelections={(skills) => {
                  setSelections((prev) => {
                    const newSelections = skills;
                    return newSelections as T[];
                  });
                }}
              />
            );
          })}
      </div>
      <div className="flex justify-end">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  ) : (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex bg-base-300 rounded-xl p-4 flex-col my-4">
          <p>No options available!</p>
          <div className="divider divider-accent  m-0"></div>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ProficiencyChoiceHandler;
