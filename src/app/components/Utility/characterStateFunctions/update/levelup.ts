"use client";
import {
  AbilityScoreValue,
  CharacterInfo,
  ClassID,
  SubClassID,
  Time,
} from "@/lib/types";
import { refreshHp } from "./refreshHp";
import { v4 } from "uuid";
import { refreshAC } from "./updateAC";
import { refreshPassivePerception } from "./refreshPassivePerception";
import { generateSubclassChoice } from "../calc/generateSubclassChoice";

export const levelUp = async (
  character: CharacterInfo,
  state: PrismaJson.CharacterState,
  classID: ClassID
): Promise<PrismaJson.CharacterState> => {
  const newState = { ...state };
  const classes = state.classLevels;
  const classLevel = classes.find((c) => c.classId === classID)?.level;
  if (state.pendingChoices.length > 0) return state; //don't allow level up if there are pending choices
  if (!classLevel) return state; //for now, disallow multiclassing
  if (classLevel >= 20) return state; //max level reached
  let addSubclass = false;
  const classObj = character.Classes?.find((c) => c.id === classID);
  if (classObj?.subClassFeatureLevels[0] === classLevel + 1) {
    addSubclass = true;
  }

  //things to update
  //hit points
  //hit die number

  const ASILevels = character.Classes?.find(
    (c) => c.id === classID
  )?.abilityScoreLevels;

  const hp = refreshHp(character, {
    ...newState,
    classLevels: [
      ...newState.classLevels.filter((c) => c.classId !== classID),
      {
        classId: classID,
        level: classLevel + 1,
      },
    ],
    customResources: [
      ...(newState.customResources?.filter((r) => r.name !== "Hit Dice") || []),
      {
        name: "Hit Dice",
        current: classLevel + 1,
        description:
          "The number of hit dice you have available to spend on healing during a short rest.",
        resetType: { quantity: 1, unit: Time.longRest },
        max: classLevel + 1,
      },
    ],
  });

  if (addSubclass) {
    return {
      ...hp,
      pendingChoices: [
        ...hp.pendingChoices,
        {
          id: v4(),
          choice: await generateSubclassChoice(classID),
          model: "Subclass" as PrismaJson.ChoiceModel,
          from: `${classObj?.subClassName}`,
          description: `Choose your ${classObj?.name.toCapitalCase()} subclass (${
            classObj?.subClassName
          }).`,
          callback: (s, c) => {
            const subClass = c as SubClassID[];
            return {
              ...s,
              pendingLinks: {
                ...s.pendingLinks,
                subClass: [...s.pendingLinks.subClass, ...subClass],
              },
            };
          },
        },
      ],
    };
  }

  if (ASILevels?.includes(classLevel + 1)) {
    return {
      ...hp,
      pendingChoices: [
        ...hp.pendingChoices,

        {
          id: v4(),
          model: "AbilityScore",
          description: "Your class grants you an ability score improvement.",
          choice: {
            choices: [
              {
                abilities: ["STR", "DEX", "CON", "INT", "WIS", "CHA"],
                options: [1, 1],
              },
              {
                abilities: ["STR", "DEX", "CON", "INT", "WIS", "CHA"],
                options: [2],
              },
            ],
          } as PrismaJson.AbilityScoreChoice,
          from: `${character.Classes?.find(
            (c) => c.id === classID
          )?.name.toCapitalCase()}`,
          callback: async (s, c) => {
            const bonuses = c as AbilityScoreValue[];
            const newState = { ...s };
            for (const bonus of bonuses) {
              newState.abilityScores[bonus.ability] += bonus.value;
              newState.abilityScoreReasons[bonus.ability] = [
                ...(newState.abilityScoreReasons[bonus.ability] || []),
                {
                  reason: `${character.Classes?.find(
                    (c) => c.id === classID
                  )?.name.toCapitalCase()} Class ASI`,
                  effect: `+ ${bonus.value}`,
                },
              ];
            }
            const refreshedAC = await refreshAC(newState);
            const refreshedHp = await refreshHp(character, refreshedAC);
            const refreshedPP = await refreshPassivePerception(refreshedHp);

            return {
              ...refreshedPP,
              abilityScores: {
                ...refreshedPP.abilityScores,
              },
              abilityScoreReasons: {
                ...refreshedPP.abilityScoreReasons,
              },
            };
          },
        },
      ],
    };
  }
  return { ...hp };
};
