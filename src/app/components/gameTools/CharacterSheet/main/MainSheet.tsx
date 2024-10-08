"use client";
import { AbilityToModifier } from "@/app/components/Utility/characterStateFunctions/calc/AbilityToModifier";
import { calcProficiency } from "@/app/components/Utility/characterStateFunctions/calc/calcProficiency";
import {
  numberColor,
  numberColorBefore,
} from "@/app/components/Utility/colorBefore";
import P from "@/app/components/Utility/FormatAndSanitize";
import JsonTable from "@/app/components/Utility/JsonTable";
import { roll } from "@/app/components/Utility/roll";
import Tooltip from "@/app/components/Utility/Tooltip";
import useLog from "@/app/components/Utility/useDicelog";
import { skillAtritbuteMap, skills } from "@/lib/globalVars";
import { ArmorInfo, CharacterInfo, WeaponID } from "@/lib/utils/types/types";
import AbilityToText from "@/lib/utils/AbilityToText";
import { Skill, Ability } from "@prisma/client";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import RenderLog from "./Log";
import WeaponRoller from "./WeaponRoller";
import Resources from "./Resources";
import Tools from "./Tools";
import { calculateLevel } from "@/app/components/Utility/characterStateFunctions/calc/calcLevel";
import { calcSkillModifier } from "@/app/components/Utility/characterStateFunctions/calc/calcSkillModifier";
import { alignmentToText } from "@/app/components/Utility/alignmentToText";
import Spells from "./Spells";
import { levelUp } from "@/app/components/Utility/characterStateFunctions/update/levelup";
import LevelUp from "./LevelUp";
import Save from "./Save";
import { saveState } from "@/lib/actions/db/character/update.actions";
import CharacterIntro from "./CharacterIntro";
import AbilityScoreRoller from "./AbilityScoreRoller";
import HitPointsHandler from "./HitpointsHandler";
import SkillRoller from "./SkillRoller";
import CharacterStats from "./CharacterStats";
import SpellcastingStats from "./SpellcastingStats";
import SavingThrowsRoller from "./SavingThrowsRoller";
import IntiativeRoller from "./InitiativeRoller";
import CharacterSheetFeatureDisplay from "./CharacterSheetFeatureDisplay";
import {
  saveCharacterToDB,
  saveImageToCharacter,
} from "@/app/components/Utility/saveCharacterToDB";
interface Props {
  character: CharacterInfo;
  setCharacter: (character: CharacterInfo) => void;
  regenerateCharacter: () => void;
}

const MainSheet = ({ character, setCharacter, regenerateCharacter }: Props) => {
  // useEffect(() => {
  //   if (character) {
  //     console.log(character);
  //   }
  // }, [character]);

  const { log, logPush } = useLog();

  const handleRoll = (modifier: number, from: string, dice: number = 20) => {
    const result = roll(1, dice, modifier);
    logPush({
      logType: "roll",
      roll: {
        rolls: [{ diceType: 20, rolled: result - modifier }],
        total: result,
        plus: modifier,
      },
      from,
    });
  };
  const levelUpCharacter = async () => {
    if (!character.Classes) return;
    if (!character.state) return;
    const newState = await levelUp(
      character,
      character.state,
      character.Classes[0].id
    );
    setCharacter({
      ...character,
      state: {
        ...newState,
      },
    });
  };
  const calcLevel = (character.state && calculateLevel(character.state)) || 1;

  return (
    character &&
    character.state &&
    character.Classes && (
      <div className="xl:grid flex gap-4 flex-col md:grid-flow-row grid-cols-1 md:grid-cols-12  ">
        <section className="flex flex-row bg-base-200 rounded-xl p-4 row-span-1 2xl:row-span-2 md:col-span-4 items-center ">
          <CharacterIntro
            character={character}
            calcLevel={calcLevel}
            setImage={(image: string) => {
              setCharacter({
                ...character,
                imageURL: image,
              });
              saveImageToCharacter(character.id, image);
            }}
          />
        </section>
        <section className="flex flex-row bg-base-200 rounded-xl p-4 md:col-span-5 row-span-2">
          <AbilityScoreRoller character={character} handleRoll={handleRoll} />
        </section>
        <section className="flex flex-row  rounded-xl  md:col-span-3 bg-base-200 p-4 justify-center items-center 2xl:col-span-2 row-span-2">
          <HitPointsHandler character={character} setCharacter={setCharacter} />
        </section>
        <section className="flex flex-row bg-base-200 rounded-xl p-4 col-span-1 2xl:col-span-1 2xl:row-span-2 md:col-span-4   justify-center items-center">
          <Save
            id={character.id}
            state={character.state}
            regenerateCharacter={regenerateCharacter}
          />
        </section>

        {/* Skills 1*/}
        <section className="flex flex-row bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2  row-span-2 justify-center">
          <SkillRoller
            character={character}
            handleRoll={handleRoll}
            skills={
              Object.values(Skill).filter((f, i) => i % 2 == 0) as Skill[]
            }
          />
        </section>
        <section className="flex flex-row bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2  row-span-2 justify-center">
          <SkillRoller
            character={character}
            handleRoll={handleRoll}
            skills={
              Object.values(Skill).filter((f, i) => i % 2 != 0) as Skill[]
            }
          />
        </section>

        {/* AC, speed, proficiency bonus */}
        <section className="bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2 whitespace-nowrap   text-ellipsis row-span-2">
          <CharacterStats character={character} />
        </section>
        {/* Resources (ki, rages, hitdie) */}
        <section className="bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2 row-span-2">
          <Resources character={character} setCharacter={setCharacter} />
        </section>

        {/* Spellcasting */}
        <section className="bg-base-200 rounded-xl p-4 col-span-4 2xl:col-span-2 row-span-2 2xl:row-span-1">
          <SpellcastingStats character={character} handleRoll={handleRoll} />
        </section>

        {/* saving throw */}

        <section className="bg-base-200 rounded-xl p-4 col-span-4 2xl:col-span-2 row-span-2 2xl:row-span-1 ">
          <SavingThrowsRoller character={character} handleRoll={handleRoll} />
        </section>

        {/* Initiative */}
        <section className="bg-base-200 rounded-xl p-4 col-span-4 2xl:col-span-2 row-span-1 ">
          <IntiativeRoller character={character} handleRoll={handleRoll} />
        </section>
        {/* Level up */}
        <section className="flex flex-row bg-base-200 rounded-xl p-4 col-span-4 2xl:col-span-2 items-center justify-center ">
          <LevelUp
            levelUpCharacter={levelUpCharacter}
            hasPendingChoices={character.state.pendingChoices.length > 0}
          />
        </section>

        {/* Log */}
        <section className="bg-base-200 rounded-xl p-4 col-span-6 2xl:col-span-5 row-span-2">
          <RenderLog log={log} pushLog={logPush} />
        </section>

        <section className="bg-base-200 rounded-xl p-4 col-span-6 2xl:col-span-7 2xl:row-span-1 row-span-2">
          <Tools character={character} pushLog={logPush} />
        </section>
        <section className="bg-base-200 rounded-xl p-4 col-span-12 2xl:col-span-7 row-span-1 ">
          <WeaponRoller
            equipped={character.state.equipped.hands.items || []}
            abilities={character.state.abilityScores}
            logPush={logPush}
            customWeaponAttacks={character.state.customAttacks || []}
            proficiencyBonus={calcProficiency(calcLevel)}
            weaponProficiencies={character.state.proficiencies.weapons}
          />
        </section>
        <section className="bg-base-200 rounded-xl p-4 col-span-12 2xl:col-span-12 row-span-1">
          <Spells character={character} logPush={logPush} />
        </section>

        {/* features */}
        <section className=" bg-base-200 rounded-xl p-4 col-span-12">
          <CharacterSheetFeatureDisplay character={character} />
        </section>
      </div>
    )
  );
};

export default MainSheet;
