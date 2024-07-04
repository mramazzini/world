"use client";
// /class/create
// create a new class
import { useState } from "react";
import { createClass } from "@/lib/actions/db/create.actions";
import {
  Ability,
  ArmorTypes,
  Class,
  Feature,
  Prisma,
  Skill,
  SubClass,
} from "@prisma/client";
import CreateClassForm from "@/app/components/CreateClass/CreateClassForm";
import ClassDisplay from "@/app/components/CreateClass/ClassDisplay";
import CreateFeatureForm from "@/app/components/CreateClass/CreateFeatureForm";
const Page = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [data, setData] = useState<Prisma.ClassCreateInput>({
    name: "Class Name",
    hitDie: 8,
    savingThrows: [Ability.STR],
    skills: [Skill.ACROBATICS, Skill.ANIMAL_HANDLING, Skill.ATHLETICS],
    skillChoiceCount: 2,
    subfeatLevels: [3, 7, 10, 15, 18],
    weapons: ["Martial"],
    armor: [ArmorTypes.LIGHT],
    tools: ["Artisan's Tools"],
    equipment: [
      "Dungeoneer's Pack or Explorer's Pack",
      "Leather Armor or Chain Shirt",
      "Shortsword or any simple weapon",
    ],
    subClassName: "Martial Archetype",
    subClassDesc:
      "you choose an archetype that you strive to emulate in your combat styles and techniques. ",
    ASILevels: [4, 8, 12, 16, 19],
  });
  const [features, setFeatures] = useState<Prisma.FeatureCreateInput[]>([
    {
      name: "Action Surge",
      desc: "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action.",
      levels: [2],
    },
  ]);
  const [subClasses, setSubClasses] = useState<Prisma.SubClassCreateInput[]>(
    []
  );

  return (
    <main className="flex flex-row w-full h-screen justify-between">
      <button
        className="bg-black text-white p-4 fixed btn top-5 right-5"
        onClick={() => setToggle(!toggle)}
      >
        Toggle Preview
      </button>
      <div className="overflow-y-scroll w-full ">
        <CreateClassForm data={data} setData={setData} />
        <CreateFeatureForm features={features} setFeatures={setFeatures} />
      </div>
      <div
        className={` overflow-y-scroll h-screen w-full  bg-black ${
          toggle && "hidden"
        }`}
      >
        <ClassDisplay
          classObj={data as Class}
          features={features as Feature[]}
          subClasses={subClasses as SubClass[]}
        />
      </div>
    </main>
  );
};

export default Page;
