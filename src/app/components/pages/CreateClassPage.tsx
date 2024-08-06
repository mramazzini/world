"use client";

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
import React, { useEffect, useState } from "react";

import ClassDisplay from "../ClassInfo/ClassDisplay";
import ClassInfo from "../CreateClass/modules/ClassInfo";
import Proficiencies from "../CreateClass/modules/Proficiencies";
import SpellCasting from "../CreateClass/modules/SpellCasting";
import CustomFieldsEditor from "../CreateClass/modules/CustomFieldsEditor";
import SubclassInfo from "../CreateClass/modules/SubclassInfo";
import FeatureCreator from "../CreateClass/modules/FeatureCreator";
import SaveClass from "../modals/SaveClass";
import useErrorModal from "../modals/ErrorModal";
import { Levels } from "@/lib/types";
import verifyTableIntegrity from "@/lib/utils/verifyTableIntegrity";
import { clientClassCreator } from "@/lib/actions/db/class/create.actions";

const CreateClassPage = () => {
  const [activeModule, setActiveModule] = useState<number>(0);
  const { ErrorModal, openModal: openErrorModal } = useErrorModal();
  const [data, setData] = useState<Prisma.ClassCreateManyInput>({
    name: "",
    hitDie: 8,
    description: "",
    flavorText: "",
    multiclassing: "",
    savingThrows: [],
    skills: [],
    skillChoiceCount: 2,
    subfeatLevels: [4],
    weapons: [""],
    armor: [],
    tools: [""],
    equipment: [""],
    source: "",
    subClassName: "",
    subClassDesc: "",
    abilityScoreLevels: [4, 8, 12, 16, 19],
    spellCastingInfo: "",
    subClassSpellDescription: "",
    spellFocus: "",
    displaySpellList: true,
    prepareSpellInfo: "",
    ritualCaster: false,
    ritualSpellPrepared: false,
    spellCaster: false,
    spellCastingAbility: Ability.WIS,
  });
  const [features, setFeatures] = useState<Prisma.FeatureCreateManyInput[]>([]);
  const [subClasses, setSubClasses] = useState<
    Prisma.SubClassCreateManyInput[]
  >([]);

  const [casterType, setCasterType] =
    useState<Prisma.CasterTypeCreateManyInput>({
      name: "",
      description: "",
      level1: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      level2: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      level3: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      level4: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      level5: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      level6: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      level7: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      level8: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      level9: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      level10: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      level11: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      level12: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      level13: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      level14: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      level15: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      level16: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      level17: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      level18: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      level19: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      level20: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    });

  const [customFields, setCustomFields] = useState<
    Prisma.CustomFieldCreateManyInput[]
  >([]);

  //alert the user if they try to leave the page with unsaved data
  // useEffect(() => {
  //   function alertUser(e: BeforeUnloadEvent) {
  //     var confirmationMessage =
  //       "You have unsaved changes. Are you sure you want to leave this page?";
  //     (e || window.event).returnValue = confirmationMessage; // Standard way to set the message
  //     return confirmationMessage; // For old browsers
  //   }
  //   window.addEventListener("beforeunload", alertUser);
  //   return () => {
  //     window.removeEventListener("beforeunload", alertUser);
  //   };
  // }, [data, features, subClasses]);
  const { openModal, modal } = SaveClass({
    features: features as Feature[],
    classObj: data as Class,
    customFields: customFields as CustomField[],
    casterType: casterType as CasterType,
    setClass: setData,
    setCustomFields: setCustomFields,
    setCasterType: setCasterType,
    setFeatures: setFeatures,
    modalID: "save-class",
  });

  const modulesData: {
    module: React.ReactNode;
    name: string;
  }[] = [
    {
      name: "Class Info",
      module: (
        <ClassInfo
          name={data.name}
          hitDie={data.hitDie}
          description={data.description}
          flavorText={data.flavorText}
          updateData={(key, value) => setData({ ...data, [key]: value })}
          active={activeModule === 0}
        />
      ),
      //name, hitDie, description, flavortext
    },
    {
      name: "Proficiencies",
      // Saving throw, skills, skill choice count, weapons, armor, tools, equipment
      module: (
        <Proficiencies
          updateData={(key, value) => setData({ ...data, [key]: value })}
          active={activeModule === 1}
          savingThrows={data.savingThrows as Ability[]}
          skills={data.skills as Skill[]}
          skillChoiceCount={data.skillChoiceCount}
          weapons={data.weapons as string[]}
          armor={data.armor as ArmorTypes[]}
          tools={data.tools as string[]}
          equipment={data.equipment as string[]}
        />
      ),
    },
    //Custom fields
    {
      name: "Class Table",
      module: (
        <CustomFieldsEditor
          customFields={customFields as CustomField[]}
          updateCustomFields={(value) => setCustomFields(value)}
          active={activeModule === 2}
          casterType={casterType as CasterType}
          classObj={data as Class}
          features={features as Feature[]}
        />
      ),
    },
    {
      name: "Spellcasting",
      // Spellcaster, spellcasting ability, cantrips known, spells known, caster type, ritual caster, ritual spell prepared, spell focus, display spell list, prepare spell info
      module: (
        <SpellCasting
          spellCaster={data.spellCaster as boolean}
          spellCastingAbility={data.spellCastingAbility as Ability}
          casterType={casterType as CasterType}
          ritualCaster={data.ritualCaster as boolean}
          ritualSpellPrepared={data.ritualSpellPrepared as boolean}
          spellFocus={data.spellFocus as string}
          displaySpellList={data.displaySpellList as boolean}
          prepareSpellInfo={data.prepareSpellInfo as string}
          active={activeModule === 3}
          spellCastingInfo={data.spellCastingInfo as string}
          updateData={(key, value) => setData({ ...data, [key]: value })}
          updateCasterType={(value) => setCasterType(value)}
        />
      ),
    },
    {
      name: "Subclass Info",
      // Subclass name, subclass description
      module: (
        <SubclassInfo
          active={activeModule === 4}
          classObj={data as Class}
          updateClass={(value) => setData(value)}
        />
      ),
    },
    {
      name: "Features",
      // Features, custom fields
      module: (
        <FeatureCreator
          features={features as Feature[]}
          classObj={data as Class}
          setFeatures={setFeatures}
          active={activeModule === 5}
        />
      ),
    },
  ];

  const publishClass = async () => {
    if (!verifyData()) return;
    const res = await clientClassCreator(
      data,
      features,
      casterType,
      customFields
    );
    console.log(res);
  };

  const verifyData = () => {
    if (!data.name) {
      openErrorModal("Name is required.");
      setActiveModule(0);
      return false;
    }
    if (!data.description) {
      openErrorModal("Description is required.");
      setActiveModule(0);
      return false;
    }
    if (!data.flavorText) {
      openErrorModal("Flavor Text is required.");
      setActiveModule(0);
      return false;
    }
    if (data.flavorText.length > 200) {
      openErrorModal("Flavor Text must be less than 200 characters.");
      setActiveModule(0);
      return false;
    }
    if (!data.hitDie) {
      openErrorModal("Hit Die is required.");
      setActiveModule(0);
      return false;
    }
    const skills = data.skills as Skill[];
    if (skills && skills.length < data.skillChoiceCount) {
      openErrorModal(
        "Skill choice count must be greater than the number of skills chosen."
      );
      setActiveModule(1);
      return false;
    }
    //spellcasting
    if (data.spellCaster) {
      if (!data.spellFocus) {
        openErrorModal("Spellcasting Focus is required.");
        setActiveModule(3);
        return false;
      }

      if (!data.prepareSpellInfo) {
        openErrorModal("Preparing and Casting Spells Info is required.");
        setActiveModule(3);
        return false;
      }
      if (!data.spellCastingInfo) {
        openErrorModal("Spellcasting Resource is required.");
        setActiveModule(3);
        return false;
      }
      console.log(casterType);
      if (data.displaySpellList) {
        //get sum of levels in castertype, if its 0, that means spellslots table is empty.
        let total = 0;
        for (const key in casterType) {
          if (key.includes("level")) {
            const level = casterType[key as Levels] as number[];
            if (level) {
              total += level.reduce((a, b) => a + b, 0);
            }
          }
        }
        if (total === 0) {
          openErrorModal(
            "Make sure to fill in the spell slots table. If you don't want to display the spell list, uncheck the box."
          );
          setActiveModule(3);
          return false;
        }
      }
    }
    //subclass
    if (!data.subClassName) {
      openErrorModal("Subclass Name is required.");
      setActiveModule(4);
      return false;
    }
    if (!data.subClassDesc) {
      openErrorModal("Subclass Description is required.");
      setActiveModule(4);
      return false;
    }
    const sublevels = data.subfeatLevels as number[];
    if (sublevels && sublevels.length === 0) {
      openErrorModal("Subclass Feature Levels are required.");
      setActiveModule(4);
      return false;
    }

    //features
    if (features.length === 0) {
      openErrorModal("At least one feature is required.");
      setActiveModule(5);
      return false;
    }

    for (const feature of features) {
      //feature name
      if (!feature.name) {
        openErrorModal("Feature Name is required.");
        setActiveModule(5);
        return false;
      }
      //feature description
      if (!feature.description) {
        openErrorModal("Feature Description is required.");
        setActiveModule(5);
        return false;
      }
      //feature level
      const featureLevels = feature.levels as number[];
      if (featureLevels.length === 0) {
        openErrorModal(
          "Each feature must have at least one level at which it is gained/upgraded."
        );
        setActiveModule(5);
        return false;
      }
      //verify tables
      if (feature.extendedTable) {
        const table = feature.extendedTable as PrismaJson.Table[];
        if (verifyTableIntegrity(table) === false) {
          openErrorModal(
            "Feature Table Integrity Failed, something went wrong :/."
          );
          setActiveModule(5);
          return false;
        }
      }
    }

    console.log("Data Verified");
  };

  return (
    <>
      {ErrorModal}
      <main className="flex flex-col w-full h-full justify-between p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col md:w-4/5">
            <h1>Create a Class</h1>
            <p className="italic">
              Classes are your characters profession. They are the backbone of
              your character and determine what abilities you have access to. As
              you level up, you will gain new abilities and features through
              your class.
            </p>
          </div>
          <div className="flex justify-center items-start md:items-end my-2 flex-col ">
            <button
              onClick={openModal}
              className={"btn btn-ghost border border-gray-500 w-full"}
            >
              Save/Upload Class -&gt;
            </button>
            {modal}
            <button
              className={"btn btn-primary w-full mt-2"}
              onClick={publishClass}
            >
              Publish Class -&gt;
            </button>
          </div>
        </div>
        <div className="divider" />
        <div role="tablist" className="tabs tabs-boxed">
          {modulesData.map((module, index) => (
            <button
              key={index}
              role="tab"
              className={`tab tab-lifted ${
                activeModule === index ? "tab-active" : ""
              }`}
              onClick={() => setActiveModule(index)}
            >
              {module.name}
            </button>
          ))}
          <button
            className={`tab tab-lifted ${
              activeModule === -1 ? "tab-active" : ""
            }`}
            onClick={() => setActiveModule(-1)}
          >
            Preview Class
          </button>
        </div>
        <div className="divider" />
        <div className="flex flex-col">
          {modulesData.map((moduleData, index) => (
            <React.Fragment key={index}>{moduleData.module}</React.Fragment>
          ))}
          {
            // Preview Class
            activeModule === -1 && (
              <>
                <h1>Preview Class</h1>
                <p className="italic">
                  This is how your class will be displayed when you post it. Use
                  this to make sure everything looks good before you submit it.
                  Don&apos;t worry, you can always come back and edit it later.
                </p>
                <div className="divider" />
                <ClassDisplay
                  classObj={data as Class}
                  features={features as Feature[]}
                  subClasses={subClasses as SubClass[]}
                  casterType={casterType as CasterType}
                  customFields={customFields as CustomField[]}
                />
              </>
            )
          }
        </div>
      </main>
    </>
  );
};

export default CreateClassPage;
