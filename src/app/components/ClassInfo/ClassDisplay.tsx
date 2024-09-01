import numPlace from "@/lib/utils/numPlace";
//takes a class object and returns a formatted display of the class
import numberArray from "@/lib/utils/numberArray";
import "@/lib/string.extensions";
import AbilityToText from "@/lib/utils/AbilityToText";
import SpellCastingInfo from "./SpellCastingInfo";
import ClassTable from "./ClassTable";
import P from "../Utility/FormatAndSanitize";
import Info from "../UI/Info";
import Link from "next/link";
import Levels from "../UI/Levels";

import JsonTable from "../Utility/JsonTable";
import NewLineParse from "../Utility/NewLineParse";
import { Fragment } from "react";
import { ClassInfo } from "@/lib/types";
interface Props {
  classObj: ClassInfo;
}

function ClassDisplay({ classObj }: Props) {
  const subClassTableJson: PrismaJson.Table[] = [];
  const subClasses = classObj.SubClasses;
  subClassTableJson.push({
    Subclasses: {
      headers: ["Name", "Description"],
      data: subClasses.map((sub) => {
        return {
          Name: sub.name,
          Description: sub.flavorText,
        };
      }),
    },
  });
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:w-4/5">
          <h1>{classObj.name.toCapitalCase() || "Class Name"}</h1>
          <p className="italic pr-4">
            <NewLineParse>
              {classObj.description || "Your Class Description will go here."}
            </NewLineParse>
          </p>
          <p className="pt-4">
            Source:<span className="font-bold italic"> {classObj.source}</span>
          </p>
          <Link
            target="_blank"
            className="text-primary inline text-sm font-bold"
            href={`/class/${classObj.name}/pdf`}
          >
            View this class as a PDF here -&gt;
          </Link>{" "}
        </div>
        <div className="flex justify-center items-start md:items-end my-2 flex-col ">
          <Link
            className={"btn btn-ghost border border-gray-500 mb-2 w-full"}
            href={`/class/${classObj.name
              .replaceAll(" ", "-")
              .toLowerCase()}/subclass`}
          >
            View All {classObj.name.toCapitalCase()} Subclasses -&gt;
          </Link>
          {/* go back */}
          <Link
            className={"btn btn-ghost border border-gray-500 w-full"}
            href={`/class`}
          >
            View all Classes -&gt;
          </Link>
        </div>
      </div>
      <div className="divider"></div>
      <p>
        <P>
          {classObj.multiclassingDescription ||
            "Your Multiclassing information will go here"}
        </P>
      </p>
      <div className="divider" />
      <h2>Class Table </h2>

      <div className="overflow-x-auto">
        {/* <ClassTable
          classObj={classObj}
          features={features}
          casterType={casterType}
          customFields={customFields}
        /> */}
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
          {classObj.armorDescription}
        </p>
        <p>
          <span className="font-bold">
            <P>Weapons: </P>
          </span>
          {classObj.weaponDescription}
        </p>
        <p>
          <span className="font-bold">
            <P>Tools: </P>
          </span>
          {classObj.toolsDescription}
        </p>
        <p>
          <span className="font-bold">
            <P>Saving Throws: </P>
          </span>
          <P>{"asd"}</P>
        </p>
      </div>
      {/* {classObj.equipment.length > 0 && (
        <>
          <h2>
            Equipment <Info tooltip="Equipment" />
          </h2>
          <div className="p-4">
            <p>
              <P>
                You start with the following equipment, in addition to the
                equipment granted by your background:
              </P>
            </p>
            <ul className="list-disc p-4">
              {classObj.equipment.map((item, i) => (
                <Fragment key={i}>
                  {item && (
                    <li>
                      {" "}
                      <P>{item} </P>
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>
          </div>
        </>
      )} */}
      {/* {classObj.skills.length > 0 || classObj.skillChoiceCount == 0 ? (
        <>
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
        </>
      ) : (
        <>
          <h2>
            Skills <Info tooltip="skills" />
          </h2>
          <div className="p-4">
            <p>
              <P>You are not granted any skill proficiencies by your class.</P>
            </p>
          </div>
        </>
      )} */}

      {/* {classObj.spellCaster && casterType && (
        <SpellCastingInfo classObj={classObj} casterType={casterType} />
      )} */}
      <div className="divider"></div>
      <h2>
        Class Features <Info tooltip="class features" />
      </h2>
      <div className="divider"></div>
    </>
  );
}

export default ClassDisplay;
