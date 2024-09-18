"use client";
import {
  Ability,
  AbilityScoreValue,
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
import ToolChoice from "./ToolChoice";
import WeaponChoice from "./WeaponChoice";
import LanguageChoice from "./LanguageChoice";
type ProficiencyType =
  | ArmorID
  | WeaponID
  | Language
  | Skill
  | Ability
  | ToolID
  | ArmorType
  | AbilityScoreValue;

interface Props {
  proficiency:
    | "armor"
    | "weapon"
    | "language"
    | "skill"
    | "saving"
    | "tool"
    | "ability"
    | "abilityScore";
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
      case "ability":
        return AbilityToText(item as Ability);
      case "weapon":
        return <ModelDisplay model="Weapon" id={item as WeaponID} />;
      case "language":
        return (item as Language).toCapitalCase().replaceAll("_", " ");
      case "skill":
        return <P>{(item as Skill).toCapitalCase().replaceAll("_", " ")}</P>;
      case "saving":
        return <P>{AbilityToText(item as Ability)}</P>;
      case "tool":
        return <ModelDisplay model="Tool" id={item as ToolID} />;
      case "abilityScore":
        return (item as AbilityScoreValue).ability
          .toCapitalCase()
          .replaceAll("_", " ");
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
        {proficiency == "tool" &&
          choice.choices?.map((c, index) => {
            if (index > 3) return;
            if (index == 3)
              return <p key={index}>... +{choice.choices?.length} more</p>;
            return (
              <ToolChoice
                key={index}
                choice={c as { numberOfChoices: number; options: ToolID[] }}
                updateSelections={(skills) => {
                  setSelections((prev) => {
                    const newSelections = skills;
                    return newSelections as T[];
                  });
                }}
              />
            );
          })}
        {proficiency == "weapon" &&
          choice.choices?.map((c, index) => {
            if (index > 3) return;
            if (index == 3)
              return <p key={index}>... +{choice.choices?.length} more</p>;
            return (
              <WeaponChoice
                key={index}
                choice={c as { numberOfChoices: number; options: WeaponID[] }}
                updateSelections={(skills) => {
                  setSelections((prev) => {
                    const newSelections = skills;
                    return newSelections as T[];
                  });
                }}
              />
            );
          })}
        {proficiency == "language" &&
          choice.choices?.map((c, index) => {
            if (index > 3) return;
            if (index == 3)
              return <p key={index}>... +{choice.choices?.length} more</p>;
            return (
              <LanguageChoice
                key={index}
                choice={c as { numberOfChoices: number; options: Language[] }}
                updateSelections={(skills) => {
                  setSelections((prev) => {
                    const newSelections = skills;
                    return newSelections as T[];
                  });
                }}
              />
            );
          })}
        {proficiency == "abilityScore" &&
          choice.choices?.map((c, index) => {
            if (index > 3) return;
            if (index == 3)
              return <p key={index}>... +{choice.choices?.length} more</p>;
            return (
              <div key={index}>
                <p>{c.options[0].toString()}</p>
                <div className="divider divider-accent  m-0"></div>
              </div>
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
