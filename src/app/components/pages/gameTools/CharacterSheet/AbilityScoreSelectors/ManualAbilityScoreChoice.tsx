"use client";

import P from "@/app/components/Utility/FormatAndSanitize";
import { AbilityScoreValue } from "@/lib/types";
import AbilityToText from "@/lib/utils/AbilityToText";
import numberArray from "@/lib/utils/numberArray";
import { Ability, Skill } from "@prisma/client";
import { useEffect, useState } from "react";
interface Props {
  updateSelections: (values: AbilityScoreValue[]) => void;
}
// allows user to manually select ability scores
const ManualAbilityScoreChoice = ({ updateSelections }: Props) => {
  const [selections, setSelections] = useState<AbilityScoreValue[]>([]);

  useEffect(() => {
    //make sure every ability score has a value
    let abilitiesComplete: {
      [key in Ability]: boolean;
    } = {
      STR: false,
      DEX: false,
      CON: false,
      INT: false,
      WIS: false,
      CHA: false,
    };
    selections.forEach((ability) => {
      abilitiesComplete[ability.ability] = true;
    });
    let allAbilitiesComplete = true;
    for (const key in abilitiesComplete) {
      if (!abilitiesComplete[key as Ability]) {
        allAbilitiesComplete = false;
      }
    }
    if (allAbilitiesComplete) {
      updateSelections(selections);
    }
  }, [selections]);

  return (
    <>
      <div className="flex bg-base-300 rounded-xl p-4 flex-col mb-4">
        <h3>Manual Ability Score Selection</h3>
        <p>
          Talk with your DM on how you want to calculate your Ability Scores.
          Input those values here.
        </p>
        <div className="divider divider-accent  m-0"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.values(Ability).map((ability, index) => {
            return (
              <div
                className="form-control bg-neutral rounded-xl p-2"
                key={ability}
              >
                <div className="flex justify-center ">
                  <strong className="text-xl">{AbilityToText(ability)}</strong>
                </div>

                <div className="divider divider-accent m-0"></div>

                <label className="label h-full ">
                  <span className="label-text text-center w-full">
                    {ability === "STR" ? (
                      <>
                        <strong>Strength</strong> is a measure of your
                        athleticism and physical power.
                      </>
                    ) : ability === "DEX" ? (
                      <>
                        <strong>Dexterity</strong> is a measure of your speed
                        and agility.
                      </>
                    ) : ability === "CON" ? (
                      <>
                        <strong>Constitution</strong> is a measure of your
                        health.
                      </>
                    ) : ability === "INT" ? (
                      <>
                        <strong>Intelligence</strong> is a measure of your
                        reasoning and memory.
                      </>
                    ) : ability === "WIS" ? (
                      <>
                        <strong>Wisdom</strong> is a measure of your perception
                        and insight.
                      </>
                    ) : ability === "CHA" ? (
                      <>
                        <strong>Charisma</strong> is a measure of your force of
                        personality.
                      </>
                    ) : (
                      ""
                    )}
                  </span>
                </label>
                <div className="divider divider-accent  m-0 mb-2"></div>
                <select
                  required
                  defaultValue={"Pick One"}
                  className={`select select-bordered w-full mt-auto
                  ${
                    selections.find((s) => s.ability === ability)
                      ? "select-secondary"
                      : ""
                  }
                    `}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    const newSelections = [...selections];
                    const newAbility: AbilityScoreValue = {
                      ability: ability as Ability,
                      value,
                    };
                    const index = newSelections.findIndex(
                      (ability) => ability.ability === newAbility.ability
                    );
                    if (index !== -1) {
                      newSelections[index] = newAbility;
                    } else {
                      newSelections.push(newAbility);
                    }
                    setSelections(newSelections);
                  }}
                >
                  <option disabled>Pick One</option>
                  {numberArray(3, 18).map((num, index) => {
                    return (
                      <option key={index} value={num}>
                        {num}
                      </option>
                    );
                  })}
                </select>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ManualAbilityScoreChoice;
