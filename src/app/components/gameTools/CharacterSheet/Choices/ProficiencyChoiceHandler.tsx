"use client";
import {
  AbilityScoreValue,
  ArmorID,
  CallbackOptions,
  CharacterInfo,
  SubClassID,
  ToolID,
  WeaponID,
} from "@/lib/utils/types/types";
import P from "@/app/components/Utility/FormatAndSanitize";
import { use, useEffect, useState } from "react";
import { Ability, ArmorType, Language, Skill } from "@prisma/client";
import ArmorChoice from "./ArmorChoice";
import SkillChoice from "./SkillChoice";
import ModelDisplay from "@/app/components/Utility/ModelDisplay";
import AbilityToText from "@/lib/utils/AbilityToText";
import ToolChoice from "./ToolChoice";
import WeaponChoice from "./WeaponChoice";
import LanguageChoice from "./LanguageChoice";

import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import AbilityScoreChoice from "./AbilityScoreChoice";
type ProficiencyType =
  | ArmorID
  | WeaponID
  | Language
  | Skill
  | Ability
  | ToolID
  | ArmorType;

interface Props {
  proficiency:
    | "armor"
    | "weapon"
    | "language"
    | "skill"
    | "saving"
    | "tool"
    | "ability";
  character: CharacterInfo;
  choice: PrismaJson.ChoiceType;
  callback: (data: CallbackOptions) => void;
}
let latest = 0;

const ProficiencyChoiceHandler = <T extends ProficiencyType>({
  choice,
  callback,
  character,
  proficiency,
}: Props) => {
  const [selections, setSelections] = useState<T[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
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
  const id = uuidv4();
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
        return (
          <P modalID={id}>
            {(item as Skill).toCapitalCase().replaceAll("_", " ")}
          </P>
        );
      case "saving":
        return <P modalID={id}>{AbilityToText(item as Ability)}</P>;
      case "tool":
        return <ModelDisplay model="Tool" id={item as ToolID} />;

      default:
        return "asd";
    }
  };

  return (
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
            className=" overflow-auto "
            style={{
              height: "",
              maxHeight: "calc(80vh - 5em)",
            }}
          >
            <div className="flex bg-base-300 rounded-xl p-4 flex-col my-4">
              <p>You gain the following proficiencies:</p>
              <div className="divider divider-accent  m-0"></div>
              <ul className="list-disc ml-4">
                {choice.default?.map((data, index) => (
                  <li key={index}>{parseChoiceItem(data as T)}</li>
                ))}
              </ul>
            </div>
            <div className="">
              {proficiency == "armor" &&
                choice.choices?.map((c, index) => {
                  if (index > 3) return;
                  if (index == 3)
                    return (
                      <p key={index}>... +{choice.choices?.length} more</p>
                    );
                  return (
                    <ArmorChoice
                      key={index}
                      choice={
                        c as { numberOfChoices: number; options: ArmorType[] }
                      }
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
                    return (
                      <p key={index}>... +{choice.choices?.length} more</p>
                    );
                  return (
                    <SkillChoice
                      modalID={id}
                      key={index}
                      choice={
                        c as { numberOfChoices: number; options: Skill[] }
                      }
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
                    return (
                      <p key={index}>... +{choice.choices?.length} more</p>
                    );
                  return (
                    <ToolChoice
                      key={index}
                      choice={
                        c as { numberOfChoices: number; options: ToolID[] }
                      }
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
                    return (
                      <p key={index}>... +{choice.choices?.length} more</p>
                    );
                  return (
                    <WeaponChoice
                      key={index}
                      choice={
                        c as { numberOfChoices: number; options: WeaponID[] }
                      }
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
                    return (
                      <p key={index}>... +{choice.choices?.length} more</p>
                    );
                  return (
                    <LanguageChoice
                      key={index}
                      choice={
                        c as { numberOfChoices: number; options: Language[] }
                      }
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
        className="btn p-4 h-auto flex items-center justify-between flex-col btn-ghost border border-gray-500 join-item"
        onClick={() => {
          const modal = document.getElementById(id) as HTMLDialogElement;
          modal.showModal();
        }}
      >
        <Image
          src={
            proficiency == "armor"
              ? "/armor.svg"
              : proficiency == "weapon"
              ? "/sword.svg"
              : proficiency == "language"
              ? "/images/globe.svg"
              : proficiency == "skill"
              ? "/images/hand.svg"
              : proficiency == "saving"
              ? "/images/skull.svg"
              : proficiency == "tool"
              ? "/images/alchemy.svg"
              : proficiency == "ability"
              ? "/images/strength.svg"
              : "/images/sparkles2.svg"
          }
          width={200}
          height={200}
          className="opacity-50"
          alt={`Choose your ${
            proficiency == "armor"
              ? "armor"
              : proficiency == "weapon"
              ? "weapons"
              : proficiency == "language"
              ? "languages"
              : proficiency == "skill"
              ? "skills"
              : proficiency == "saving"
              ? "saving throws"
              : proficiency == "tool"
              ? "tools"
              : proficiency == "ability"
              ? "abilities"
              : proficiency == "abilityScore"
              ? "ability scores"
              : "proficiencies"
          }`}
        />
        <p className="divider">
          Choose your{" "}
          {proficiency == "armor"
            ? "armor"
            : proficiency == "weapon"
            ? "weapons"
            : proficiency == "language"
            ? "languages"
            : proficiency == "skill"
            ? "skills"
            : proficiency == "saving"
            ? "saving throws"
            : proficiency == "tool"
            ? "tools"
            : proficiency == "ability"
            ? "abilities"
            : proficiency == "abilityScore"
            ? "ability scores"
            : "proficiencies"}
        </p>
      </button>
    </>
  );
};

export default ProficiencyChoiceHandler;
