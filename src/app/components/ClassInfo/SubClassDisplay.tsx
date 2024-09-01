import { SubClassInfo } from "@/lib/types";

import "@/lib/string.extensions";

import P from "../Utility/FormatAndSanitize";

import Link from "next/link";
import JsonTable from "../Utility/JsonTable";
import SubClassTable from "./SubClassTable";
import Info from "../UI/Info";

import Loading from "../UI/Loading";
import NewLineParse from "../Utility/NewLineParse";
import { numberColor, numberColorBefore } from "../Utility/colorBefore";
import Feature from "../UI/Feature";
interface Props {
  subClass: SubClassInfo;
}

const SubClassDisplay = ({ subClass }: Props) => {
  const className = subClass.Class?.name;
  if (!className) return <Loading />;
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:w-4/5">
          <h1 className="px-4">
            {className.toCapitalCase()} - {subClass.name}
          </h1>
          <p className="px-4 italic">
            <NewLineParse>{subClass.description}</NewLineParse>
          </p>

          <p className="px-4 pt-4">
            Source: <span className="font-bold italic">{subClass.source}</span>
          </p>
        </div>
        <div className="flex justify-center items-start md:items-end my-2 flex-col ">
          <Link
            className={"btn btn-ghost border border-gray-500 mb-2 w-full"}
            href={`/class/${className}/subclass`}
          >
            View All {className.toCapitalCase()} Subclasses -&gt;
          </Link>
          {/* go back */}
          <Link
            className={"btn btn-ghost border border-gray-500 w-full"}
            href={`/class/${className.replaceAll(" ", "-")}`}
          >
            View {className.toCapitalCase()} Class -&gt;
          </Link>
        </div>
      </div>
      <div className="divider"></div>
      <div className="px-4">
        {/* Subclass table only required if they are a spellcaster */}
        {subClass.spellCastingInfo && (
          <>
            <div className="bg-base-300 p-4 rounded-xl ">
              <h2>{subClass.name} Spellcasting </h2>
              <div className="divider m-0"></div>
              <SubClassTable subClass={subClass} />
            </div>

            <div className="divider"></div>
          </>
        )}

        <h2 className="px-4">
          Subclass Features{" "}
          <Info tooltip="Subclasses provide additional features that make your character more powerful as they level up." />
        </h2>
        <div className="divider"></div>
        <div className="grid grid-cols-1 gap-4">
          {subClass.features.map((feature, index) => (
            <Feature key={index} feature={feature} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SubClassDisplay;
