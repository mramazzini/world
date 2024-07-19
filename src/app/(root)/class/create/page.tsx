"use client";
// /class/create
// create a new class
import { useState, useEffect } from "react";
import {
  createClass,
  createClassWithFeaturesAndSubClasses,
} from "@/lib/actions/db/create.actions";
import {
  Ability,
  ArmorTypes,
  CasterType,
  Class,
  CustomField,
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
    description: "",
    multiclassing: "",
    savingThrows: [],
    skills: [Skill.ACROBATICS, Skill.ANIMAL_HANDLING, Skill.ATHLETICS],
    skillChoiceCount: 2,
    subfeatLevels: [3, 7, 10, 15, 18],
    weapons: [],
    armor: [],
    tools: [],
    equipment: [
      "Dungeoneer's Pack or Explorer's Pack",
      "Leather Armor or Chain Shirt",
      "Shortsword or any simple weapon",
    ],
    subClassName: "",
    subClassDesc: "",
    abilityScoreLevels: [4, 8, 12, 16, 19],
    spellCaster: false,
    spellCastingAbility: Ability.WIS,

    spellsKnown: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 20 levels
    cantripsKnown: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 20 levels
    flavorText: "",
  });
  const [features, setFeatures] = useState<Prisma.FeatureCreateManyInput[]>([
    {
      name: "Action Surge",
      description:
        "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action.",
      levels: [2],
    },
    {
      name: "Extra Attack",
      description:
        "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.",
      levels: [5, 11, 20],
    },
  ]);
  const [subClasses, setSubClasses] = useState<
    Prisma.SubClassCreateManyInput[]
  >([]);

  const [casterType, setCasterType] =
    useState<Prisma.CasterTypeCreateManyInput>({
      name: "",
      description: "",
    });

  const [customFields, setCustomFields] = useState<
    Prisma.CustomFieldCreateManyInput[]
  >([]);

  //alert the user if they try to leave the page with unsaved data
  useEffect(() => {
    function alertUser(e: BeforeUnloadEvent) {
      var confirmationMessage =
        "You have unsaved changes. Are you sure you want to leave this page?";
      (e || window.event).returnValue = confirmationMessage; // Standard way to set the message
      return confirmationMessage; // For old browsers
    }
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, [data, features, subClasses]);

  return (
    <main className="flex flex-row w-full h-full justify-between">
      <div className="p-4 fixed top-5 right-5">
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

      <div className="overflow-y-scroll w-full h-full ">
        <CreateClassForm data={data} setData={setData} />
        <CreateFeatureForm features={features} setFeatures={setFeatures} />
      </div>
      <div
        className={`overflow-y-scroll h-full w-full  bg-black ${
          !toggle && "hidden"
        }`}
      >
        <ClassDisplay
          classObj={data as Class}
          features={features as Feature[]}
          subClasses={subClasses as SubClass[]}
          casterType={casterType as CasterType}
          customFields={customFields as CustomField[]}
        />
      </div>
    </main>
  );
};

export default Page;
