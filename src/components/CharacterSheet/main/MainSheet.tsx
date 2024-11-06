'use client';
import { roll } from '@/Utility/roll';
import useLog from '@/Utility/useDicelog';
import { Skill } from '@prisma/client';
import RenderLog from './Log';
import WeaponRoller from './WeaponRoller';
import Resources from './Resources';
import Tools from './Tools';

import Spells from './Spells';
import LevelUp from './LevelUp';
import Save from './Save';

import CharacterIntro from './CharacterIntro';
import AbilityScoreRoller from './AbilityScoreRoller';
import HitPointsHandler from './HitpointsHandler';
import SkillRoller from './SkillRoller';
import CharacterStats from './CharacterStats';
import SpellcastingStats from './SpellcastingStats';
import SavingThrowsRoller from './SavingThrowsRoller';
import IntiativeRoller from './InitiativeRoller';
import CharacterSheetFeatureDisplay from './CharacterSheetFeatureDisplay';
import { useAppSelector } from '@/store/hooks';

const MainSheet = () => {
  const character = useAppSelector((state) => state.character);

  const { log, logPush } = useLog();

  const handleRoll = (modifier: number, from: string, dice: number = 20) => {
    const result = roll(1, dice, modifier);
    logPush({
      logType: 'roll',
      roll: {
        rolls: [{ diceType: 20, rolled: result - modifier }],
        total: result,
        plus: modifier,
      },
      from,
    });
  };

  return (
    <div className="xl:grid flex gap-4 flex-col md:grid-flow-row grid-cols-1 md:grid-cols-12  ">
      <section className="flex flex-row bg-base-200 rounded-xl p-4 row-span-1 2xl:row-span-2 md:col-span-4 items-center ">
        <CharacterIntro />
      </section>
      <section className="flex flex-row bg-base-200 rounded-xl p-4 md:col-span-5 row-span-2">
        <AbilityScoreRoller handleRoll={handleRoll} />
      </section>
      <section className="flex flex-row  rounded-xl  md:col-span-3 bg-base-200 p-4 justify-center items-center 2xl:col-span-2 row-span-2">
        <HitPointsHandler />
      </section>
      <section className="flex flex-row bg-base-200 rounded-xl p-4 col-span-1 2xl:col-span-1 2xl:row-span-2 md:col-span-4   justify-center items-center">
        <Save />
      </section>

      {/* Skills 1*/}
      <section className="flex flex-row bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2  row-span-2 justify-center">
        <SkillRoller
          handleRoll={handleRoll}
          skills={Object.values(Skill).filter((f, i) => i % 2 == 0) as Skill[]}
        />
      </section>
      <section className="flex flex-row bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2  row-span-2 justify-center">
        <SkillRoller
          handleRoll={handleRoll}
          skills={Object.values(Skill).filter((f, i) => i % 2 != 0) as Skill[]}
        />
      </section>

      {/* AC, speed, proficiency bonus */}
      <section className="bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2 whitespace-nowrap   text-ellipsis row-span-2">
        <CharacterStats />
      </section>
      {/* Resources (ki, rages, hitdie) */}
      <section className="bg-base-200 rounded-xl p-4 col-span-3 2xl:col-span-2 row-span-2">
        <Resources />
      </section>

      {/* Spellcasting */}
      <section className="bg-base-200 rounded-xl p-4 col-span-4 2xl:col-span-2 row-span-2 2xl:row-span-1">
        <SpellcastingStats handleRoll={handleRoll} />
      </section>

      {/* saving throw */}

      <section className="bg-base-200 rounded-xl p-4 col-span-4 2xl:col-span-2 row-span-2 2xl:row-span-1 ">
        <SavingThrowsRoller handleRoll={handleRoll} />
      </section>

      {/* Initiative */}
      <section className="bg-base-200 rounded-xl p-4 col-span-4 2xl:col-span-2 row-span-1 ">
        <IntiativeRoller handleRoll={handleRoll} />
      </section>
      {/* Level up */}
      <section className="flex flex-row bg-base-200 rounded-xl p-4 col-span-4 2xl:col-span-2 items-center justify-center ">
        <LevelUp
          hasPendingChoices={
            character.state ? character.state.pendingChoices.length > 0 : false
          }
        />
      </section>

      {/* Log */}
      <section className="bg-base-200 rounded-xl p-4 col-span-6 2xl:col-span-5 row-span-2">
        <RenderLog log={log} pushLog={logPush} />
      </section>

      <section className="bg-base-200 rounded-xl p-4 col-span-6 2xl:col-span-7 2xl:row-span-1 row-span-2">
        <Tools pushLog={logPush} />
      </section>
      <section className="bg-base-200 rounded-xl p-4 col-span-12 2xl:col-span-7 row-span-1 ">
        <WeaponRoller logPush={logPush} />
      </section>
      <section className="bg-base-200 rounded-xl p-4 col-span-12 2xl:col-span-12 row-span-1">
        <Spells logPush={logPush} />
      </section>

      {/* features */}
      <section className=" bg-base-200 rounded-xl p-4 col-span-12">
        <CharacterSheetFeatureDisplay />
      </section>
    </div>
  );
};

export default MainSheet;
