"use client";
// /class/create
// create a new class
import { useState } from "react";
import {
  createClass,
  createClassWithFeaturesAndSubClasses,
} from "@/lib/actions/db/create.actions";
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
  const [data, setData] = useState<Prisma.ClassCreateManyInput>({
    name: "",
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
  const [features, setFeatures] = useState<Prisma.FeatureCreateManyInput[]>([
    {
      name: "Action Surge",
      desc: "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action.",
      levels: [2],
    },
    {
      name: "Extra Attack",
      desc: "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.",
      levels: [5, 11, 20],
    },
  ]);
  const [subClasses, setSubClasses] = useState<
    Prisma.SubClassCreateManyInput[]
  >([]);

  return (
    <main className="flex flex-row w-full h-screen justify-between">
      <div className=" p-4 fixed top-5 right-5">
        <button
          className="bg-black text-white btn"
          onClick={() => setToggle(!toggle)}
        >
          Toggle Preview
        </button>
        <button
          className="bg-black text-white btn btn-primary mx-2"
          onClick={async (e) => {
            e.preventDefault();
            const result = await createClassWithFeaturesAndSubClasses(
              data,
              features,
              subClasses
            );
            alert(result);
          }}
        >
          Save
        </button>
      </div>

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
