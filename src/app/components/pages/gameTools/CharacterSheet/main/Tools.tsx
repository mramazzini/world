"use client";
import {
  AbilityScores,
  CharacterInfo,
  ItemInfo,
  Log,
  ToolInfo,
} from "@/lib/types";
import { useEffect, useState } from "react";
import { memoizeGetItem } from "@/app/components/Utility/globalCache";
import Tooltip from "@/app/components/Utility/Tooltip";
import { Ability } from "@prisma/client";
import AbilityToText from "@/lib/utils/AbilityToText";
import { roll } from "@/app/components/Utility/roll";
import { calcProficiency } from "@/app/components/Utility/characterStateFunctions/calc/calcProficiency";
import { calculateLevel } from "@/app/components/Utility/characterStateFunctions/calc/calcLevel";
import { AbilityToModifier } from "@/app/components/Utility/characterStateFunctions/calc/AbilityToModifier";
import P from "@/app/components/Utility/FormatAndSanitize";
import { calcSkillModifier } from "@/app/components/Utility/characterStateFunctions/calc/calcSkillModifier";
import Image from "next/image";
interface Props {
  character: CharacterInfo;
  pushLog: (log: Log) => void;
}

const Tool = ({
  isProficient,
  tool,
  pushLog,
  abilities,
  state,
  proficiencyBonus,
}: {
  isProficient: boolean;
  tool: ToolInfo;
  state: PrismaJson.CharacterState;
  pushLog: (log: Log) => void;
  abilities: AbilityScores;
  proficiencyBonus: number;
}) => {
  const [selectedAbility, setSelectedAbility] = useState<Ability>(Ability.STR);
  return (
    <div className="flex flex-col items-center border-primary border p-2 rounded-xl ">
      <p>{tool.name}</p>
      <p className="text-xs">
        {isProficient ? (
          <span className="badge-success badge badge-xs">Proficient</span>
        ) : (
          <span className="badge-error badge badge-xs">Not Proficient</span>
        )}
      </p>
      <div className="divider m-0"></div>
      <div className="join mx-2 mt-1 ">
        <Tooltip
          element={
            <span className=" bg-info text-info-content badge-lg badge p-2 flex justify-center items-center  join-item text-xs">
              i
            </span>
          }
        >
          Make a generalized ability check with this tool. Select the ability
          score your DM tells you to roll with.
        </Tooltip>
        <select
          className="join-item w-32 select text-xs select-xs text-center font-bold"
          onChange={(e) =>
            setSelectedAbility(Ability[e.target.value as keyof typeof Ability])
          }
        >
          {Object.values(Ability).map((ability, index) => (
            <option key={index} value={ability}>
              {AbilityToText(ability)}
            </option>
          ))}
        </select>
        <button
          className="btn btn-xs btn-accent join-item w-10"
          onClick={() => {
            const rollRes = roll(1, 20);
            pushLog({
              logType: "roll",
              from: `${tool.name}: ${selectedAbility} check`,
              roll: {
                rolls: [
                  {
                    rolled: rollRes,
                    diceType: 20,
                  },
                ],
                plus:
                  AbilityToModifier(abilities[selectedAbility]) +
                  (isProficient ? proficiencyBonus : 0),
                total:
                  rollRes +
                  AbilityToModifier(abilities[selectedAbility]) +
                  (isProficient ? proficiencyBonus : 0),
              },
            });
          }}
        >
          {AbilityToModifier(abilities[selectedAbility]) +
            (isProficient ? proficiencyBonus : 0) >=
          0 ? (
            <span>
              +{" "}
              {AbilityToModifier(abilities[selectedAbility]) +
                (isProficient ? proficiencyBonus : 0)}
            </span>
          ) : (
            <span>
              -{" "}
              {Math.abs(
                AbilityToModifier(abilities[selectedAbility]) +
                  (isProficient ? proficiencyBonus : 0)
              )}
            </span>
          )}
        </button>
      </div>
      {isProficient &&
        tool.skills.map((skill, index) => (
          <div className="join mx-2 mt-1" key={index}>
            <Tooltip
              title={skill.skill.toCapitalCase().replaceAll("_", " ")}
              element={
                <span className=" bg-info text-info-content badge-lg badge p-2 flex justify-center items-center  join-item text-xs">
                  i
                </span>
              }
              additionalContent={
                <p>
                  <br />
                  {skill.description}
                </p>
              }
            >
              {`Because you are proficient in ${
                tool.name
              }, the following situation grants you advantage on ${skill.skill
                .toCapitalCase()
                .replaceAll("_", " ")} checks.`}
            </Tooltip>
            <p
              className="badge join-item w-32 badge-lg text-xs font-bold whitespace-nowrap overflow-hidden text-ellipsis"
              key={index}
            >
              {skill.skill.toCapitalCase()} (Adv)
            </p>
            <button
              className="btn btn-xs btn-accent join-item w-10"
              onClick={() => {
                const rollRes1 = roll(1, 20);
                const rollRes2 = roll(1, 20);
                pushLog({
                  logType: "roll",
                  from: `${tool.name}: ${skill.skill
                    .toCapitalCase()
                    .replaceAll("_", " ")} check`,
                  roll: {
                    rolls: [
                      {
                        rolled: rollRes1,
                        diceType: 20,
                      },
                      {
                        rolled: rollRes2,
                        diceType: 20,
                      },
                    ],
                    plus: calcSkillModifier(state, skill.skill),
                    total:
                      Math.max(rollRes1, rollRes2) +
                      calcSkillModifier(state, skill.skill),
                  },
                });
              }}
            >
              {calcSkillModifier(state, skill.skill) >= 0
                ? `+ ${calcSkillModifier(state, skill.skill)}`
                : `- ${Math.abs(calcSkillModifier(state, skill.skill))}`}
            </button>
          </div>
        ))}
    </div>
  );
};

const Tools = ({ character, pushLog }: Props) => {
  const [tools, setTools] = useState<ToolInfo[]>([]);
  useEffect(() => {
    if (!character.state?.inventory) return;
    const promises = character.state.inventory.map(
      (item) => memoizeGetItem(item.item) as Promise<ItemInfo>
    );
    Promise.all(promises).then((items) => {
      const tools: ToolInfo[] = [];
      items.forEach((item) => {
        if (item.Tool) {
          tools.push(item.Tool);
        }
      });
      setTools(tools);
    });
  }, [character.state?.inventory]);
  return (
    <div className="h-full flex flex-col">
      {/* <p>Tools</p>
      <div className="divider m-0"></div> */}
      <div className="flex flex-row bg-base-300 rounded-xl p-4 h-full items-center justify-center">
        {tools.length > 0 ? (
          tools.map((tool, index) => {
            const isProficient =
              character.state?.proficiencies?.tools?.includes(tool.id) || false;
            return (
              character.state && (
                <Tool
                  key={index}
                  isProficient={isProficient}
                  tool={tool}
                  state={character.state}
                  pushLog={pushLog}
                  abilities={character.state.abilityScores}
                  proficiencyBonus={calcProficiency(
                    calculateLevel(character.state)
                  )}
                />
              )
            );
          })
        ) : (
          <div className="flex items-center justify-center flex-col">
            <p className="font-bold m-2">No Tools Found..</p>
            <Image
              src="/images/alchemy.svg"
              alt="Empty"
              width={80}
              height={80}
              className="opacity-40 m-2"
            />
            <p className="m-2">
              Get some tools in your inventory to use them here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tools;
