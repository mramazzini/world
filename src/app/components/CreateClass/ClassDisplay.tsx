"use client";

import numPlace from "@/lib/utils/numPlace";
//takes a class object and returns a formatted display of the class
import numberArray from "@/lib/utils/numberArray";
import {
  CasterType,
  Class,
  CustomField,
  Feature,
  SubClass,
} from "@prisma/client";
import "@/lib/string.extensions";
import AbilityToText from "@/lib/utils/AbilityToText";
import SpellCastingInfo from "./SpellCastingInfo";
import ClassTable from "./ClassTable";
import P from "../Utility/FormatAndSanitize";
import Info from "../UI/Info";

interface Props {
  classObj: Class;
  features: Feature[];
  subClasses: SubClass[];
  casterType: CasterType | null;
  customFields: CustomField[];
}

function ClassDisplay({
  classObj,
  features,
  subClasses,
  casterType,
  customFields,
}: Props) {
  return (
    <div className="p-4">
      <h1>{classObj.name.toCapitalCase() || "Class Name"}</h1>

      <p className="italic">
        {classObj.description || "Your Class Description will go here."}
      </p>
      <div className="divider"></div>
      <p>
        <P>
          {classObj.multiclassing ||
            "Your Multiclassing information will go here"}
        </P>
      </p>
      <div className="overflow-x-auto">
        <ClassTable
          classObj={classObj}
          features={features}
          casterType={casterType}
          customFields={customFields}
        />
      </div>
      <h2>
        Hitpoints <Info tooltip="Hitpoints" />
      </h2>
      <div className="p-4">
        <p>
          <span className="font-bold">
            <P>Hit Die: </P>
          </span>
          <P>
            1d{classObj.hitDie.toString()} per {classObj.name} level
          </P>
        </p>

        <p>
          <span className="font-bold">
            <P>Hitpoints at first level: </P>
          </span>
          <P>{classObj.hitDie.toString()} + your Constitution modifier</P>
        </p>
        <p>
          <span className="font-bold">
            <P>Hitpoints at Higher Levels: </P>
          </span>
          <P>
            1d{classObj.hitDie.toString()} (or{" "}
            {(Math.floor(classObj.hitDie / 2) + 1).toString()}) + your
            Constitution modifier per {classObj.name} level after 1st
          </P>
        </p>
      </div>
      <h2>
        Proficiencies <Info tooltip="Proficient" />
      </h2>
      <div className="p-4">
        <p>
          <span className="font-bold">
            <P>Armor:</P>{" "}
          </span>
          {classObj.armor.map((s) => s.toCapitalCase()).join(", ") || "None"}
        </p>
        <p>
          <span className="font-bold">
            <P>Weapons: </P>
          </span>
          {classObj.weapons.map((s) => s.toCapitalCase()).join(", ") || "None"}
        </p>
        <p>
          <span className="font-bold">
            <P>Tools: </P>
          </span>
          {classObj.tools.map((s) => s.toCapitalCase()).join(", ") || "None"}
        </p>
        <p>
          <span className="font-bold">
            <P>Saving Throws: </P>
          </span>
          <P>
            {classObj.savingThrows.map((s) => AbilityToText(s)).join(", ") ||
              "None"}
          </P>
        </p>
      </div>
      <h2>
        Equipment <Info tooltip="Equipment" />
      </h2>
      <div className="p-4">
        <p>
          <P>
            You start with the following equipment, in addition to the equipment
            granted by your background:
          </P>
        </p>
        <ul className="list-disc p-4">
          {classObj.equipment.map((item, i) => (
            <li key={i}>
              {" "}
              <P>{item} </P>
            </li>
          ))}
        </ul>
      </div>
      <h2>
        Skills <Info tooltip="skills" />
      </h2>
      <div className="p-4">
        <p>
          <P>
            Choose {classObj.skillChoiceCount.toString()} from the following
            list of skills:
          </P>
        </p>
        <ul className="list-disc p-4">
          {classObj.skills.map((skill, i) => (
            <li key={i}>
              <P>{skill.toCapitalCase().replaceAll("_", " ")} </P>
            </li>
          ))}
        </ul>
      </div>
      {classObj.spellCaster && casterType && (
        <SpellCastingInfo classObj={classObj} casterType={casterType} />
      )}

      <div className="divider"></div>
      <h2>
        Class Features <Info tooltip="class features" />
      </h2>
      <div className="divider"></div>
      <ul>
        {numberArray(1, 20).map((num) => {
          //grab features for the current level
          const feat = features.filter((feature) =>
            feature.levels.find((lvl) => lvl === num)
          );
          if (
            feat.length == 0 &&
            classObj.subfeatLevels[0] != num &&
            classObj.abilityScoreLevels[0] != num
          )
            return;

          //need to render each feature, but when the level hits abilityScoreLevels[0], print the ASI feature
          // when the level hits subfeatLevels[0], print the subclass feature
          if (
            classObj.subfeatLevels[0] === num ||
            classObj.abilityScoreLevels[0] === num ||
            feat.find((f) => f.levels[0] === num)
          )
            return (
              <li key={num}>
                <h3>Level {num}</h3>
                {classObj.subfeatLevels[0] === num && (
                  <div className="p-4">
                    <h3>{classObj.subClassName}</h3>
                    <p>
                      <P>
                        When you reach {numPlace(classObj.subfeatLevels[0])}{" "}
                        level, {classObj.subClassDesc}
                      </P>
                    </p>
                    <p>
                      <P>
                        {" "}
                        Your choice grants you features at {numPlace(num)} level
                        and again at{" "}
                      </P>
                      {[...classObj.subfeatLevels] // make copy since we dont want to mutate the original
                        .slice(1) //remove the first element since its referenced above
                        .map((lvl, index) => {
                          if (index == classObj.subfeatLevels.length - 2)
                            // 2 because we removed the first element
                            // last element needs to be "and"
                            return (
                              <span key={index}>
                                <P>and {numPlace(lvl)} </P>
                              </span>
                            );
                          return (
                            <span key={index}>
                              <P>{numPlace(lvl)}, </P>
                            </span>
                          );
                        })}
                      <P>level.</P>
                    </p>
                  </div>
                )}
                {classObj.abilityScoreLevels[0] === num && (
                  <div className="p-4">
                    <h3>Ability Score Improvement</h3>
                    <p>
                      <P>
                        When you reach{" "}
                        {numPlace(classObj.abilityScoreLevels[0])} level, and
                        again at{" "}
                      </P>
                      {[...classObj.abilityScoreLevels] // make copy since we dont want to mutate the original
                        .map((lvl, index) => {
                          if (index == 0) return; //remove the first element since its referenced above
                          if (index == classObj.abilityScoreLevels.length - 1)
                            // last element needs to be "and"
                            return (
                              <span key={index}>and {numPlace(lvl)} </span>
                            );
                          return <span key={index}>{numPlace(lvl)}, </span>;
                        })}
                      <P>
                        level, you can increase one ability score of your choice
                        by 2, or you can increase two ability scores of your
                        choice by 1.
                      </P>
                      <br />
                      <br />
                      <P>
                        As normal, you can&apos;t increase an ability score
                        above 20 using this feature.
                      </P>
                    </p>
                  </div>
                )}

                <ul>
                  {feat.map((feature) => {
                    const lvlIndex = feature.levels.findIndex(
                      (lvl) => lvl === num
                    );
                    if (lvlIndex === -1 || lvlIndex > 0) return;
                    return (
                      <li className="p-4" key={`${num}-${feature.id}`}>
                        <h3>{lvlIndex === 0 && feature.name}</h3>

                        {lvlIndex === 0 && (
                          <>
                            <P>{feature.description}</P>
                            {feature.options && feature.options.length > 0 && (
                              <ul className="list-disc p-4">
                                {feature.options.map((option, index) => (
                                  <div key={index}>
                                    <li>
                                      <P>{option}</P>
                                    </li>
                                    <br />
                                  </div>
                                ))}
                              </ul>
                            )}
                          </>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <div className="divider"></div>
              </li>
            );
        })}
      </ul>
    </div>
  );
}

export default ClassDisplay;
