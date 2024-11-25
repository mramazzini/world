'use client';
import { Skill } from '@prisma/client';

import LevelUp from './LevelUp';

import CharacterIntro from './CharacterIntro';
import AbilityScoreRoller from './AbilityScoreRoller';
import HitPointsHandler from './HitpointsHandler';
import SkillRoller from './SkillRoller';
import CharacterStats from './CharacterStats';
import SpellcastingStats from './SpellcastingStats';
import SavingThrowsRoller from './SavingThrowsRoller';
import IntiativeRoller from './InitiativeRoller';
import CharacterSheetFeatureDisplay from './CharacterSheetFeatureDisplay';
import DiceLog from './DiceLog/DiceLog';
import ToolList from './ToolList/ToolList';
import WeaponList from './WeaponList/WeaponList';
import Spells from './Spells';

const MainSheet = () => {
  return (
    <div
      className="xl:grid flex gap-4 flex-col md:grid-flow-row grid-cols-1 md:grid-cols-12"
      style={{
        maxWidth: 'calc(100vw - 6rem)',
      }}
    >
      <section className="flex flex-row bg-base-200 rounded-xl p-4 row-span-1 2xl:row-span-1 md:col-span-4 items-center ">
        <CharacterIntro />
      </section>
      <section className="flex flex-row bg-base-200 rounded-xl p-4 md:col-span-5 row-span-1">
        <AbilityScoreRoller />
      </section>
      <section className="flex flex-row  rounded-xl  md:col-span-3 bg-base-200 p-4 justify-center items-center 2xl:col-span-3 row-span-1">
        <HitPointsHandler />
      </section>

      {/* Skills 1*/}
      <section className="flex flex-row bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2  row-span-2 justify-center">
        <SkillRoller
          skills={Object.values(Skill).filter((f, i) => i % 2 == 0) as Skill[]}
        />
      </section>
      <section className="flex flex-row bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2  row-span-2 justify-center">
        <SkillRoller
          skills={Object.values(Skill).filter((f, i) => i % 2 != 0) as Skill[]}
        />
      </section>

      {/* AC, speed, proficiency bonus */}
      <section className="bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2 whitespace-nowrap   text-ellipsis row-span-2">
        <CharacterStats />
      </section>
      {/* Resources (ki, rages, hitdie) */}
      <section className="bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2 row-span-2">
        {/* <Resources /> */}
      </section>

      {/* Spellcasting */}
      <section className="bg-base-200 rounded-xl p-4 col-span-4 2xl:col-span-2 row-span-2 2xl:row-span-1">
        <SpellcastingStats />
      </section>

      {/* saving throw */}
      <section className="bg-base-200 rounded-xl p-4 col-span-4 2xl:col-span-2 row-span-2 2xl:row-span-1 ">
        <SavingThrowsRoller />
      </section>

      {/* Initiative */}
      <section className="bg-base-200 rounded-xl p-4 col-span-4 2xl:col-span-2 row-span-1 ">
        <IntiativeRoller />
      </section>
      {/* Level up */}
      <section className="flex flex-row bg-base-200 rounded-xl p-4 col-span-4 2xl:col-span-2 items-center justify-center ">
        <LevelUp />
      </section>

      {/* Log */}
      <section className="bg-base-200 rounded-xl p-4 col-span-6 2xl:col-span-5 row-span-2">
        <DiceLog />
      </section>
      <section className="bg-base-200 rounded-xl p-4 col-span-6 2xl:col-span-7 2xl:row-span-1 row-span-2">
        <ToolList />
      </section>
      <section className="bg-base-200 rounded-xl p-4 col-span-12 2xl:col-span-7 row-span-1 ">
        <WeaponList />
      </section>
      <section className="bg-base-200 rounded-xl p-4 col-span-12 2xl:col-span-12 row-span-1">
        <Spells />
      </section>

      {/* features */}
      <section className=" bg-base-200 rounded-xl p-4 col-span-12">
        <CharacterSheetFeatureDisplay />
      </section>
    </div>
  );
};

export default MainSheet;
