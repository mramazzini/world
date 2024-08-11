"use client";

import { SubClassInfo } from "@/lib/types";
import { usePathname } from "next/navigation";
import "@/lib/string.extensions";
import numberArray from "@/lib/utils/numberArray";
import Levels from "../UI/Levels";
import P from "../Utility/FormatAndSanitize";
import numPlace from "@/lib/utils/numPlace";
import Link from "next/link";
import JsonTable from "../Utility/JsonTable";
import SpellCastingInfo from "./SpellCastingInfo";
import { CasterType, CustomField } from "@prisma/client";
import SubClassTable from "./SubClassTable";
import Info from "../UI/Info";
import { getClass } from "@/lib/actions/db/class/read.actions";
import { useEffect, useState } from "react";
import Loading from "../UI/Loading";
interface Props {
  subClass: SubClassInfo;
  casterType: CasterType;
  customFields: CustomField[];
}

const SubClassDisplay = ({ subClass, casterType, customFields }: Props) => {
  const [className, setClassName] = useState<string>("");
  useEffect(() => {
    if (!subClass.classId) return;
    getClass(subClass.classId).then((res) => {
      if (!res) return;
      setClassName(res.name);
    });
  }, [subClass.classId]);

  if (!className) return <Loading />;
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:w-4/5">
          <h1 className="px-4">
            {className.toCapitalCase()} - {subClass.name}
          </h1>
          <p className="px-4 italic">{subClass.description}</p>

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

        {/* spellcasting */}
        {subClass.spellCaster && casterType && (
          <>
            <h2>Subclass Table</h2>
            <SubClassTable
              subClass={subClass}
              casterType={casterType}
              customFields={customFields}
              subClassLevel={subClass.SubClassFeatures[0].levels[0]}
            />
            <SpellCastingInfo classObj={subClass} casterType={casterType} />
            <div className="divider"></div>
            {/* features */}
          </>
        )}
        <h2 className="px-4">
          Subclass Features{" "}
          <Info tooltip="Subclasses provide additional features that make your character more powerful as they level up." />
        </h2>
        <div className="divider"></div>

        {numberArray(1, 20).map((num) => {
          //grab features for the current level
          const feat = subClass.SubClassFeatures.filter((feature) =>
            feature.levels.find((lvl) => lvl === num)
          );
          if (feat.length == 0) return;
          if (feat.find((f) => f.levels[0] === num))
            return (
              <ul key={num}>
                {feat.map((feature) => {
                  const lvlIndex = feature.levels.findIndex(
                    (lvl) => lvl === num
                  );
                  if (lvlIndex === -1 || lvlIndex > 0) return;
                  return (
                    <div key={`${num}-${feature.id}`}>
                      <li className="px-4">
                        <h3 className="flex flex-row justify-between">
                          {lvlIndex === 0 && feature.name}{" "}
                          <Levels levels={feature.levels} />
                        </h3>

                        {lvlIndex === 0 && (
                          <>
                            <P>{feature.description}</P>
                            {feature.options && feature.options.length > 0 && (
                              <ul className="list-disc px-4">
                                <br />
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
                      {feature.extendedTable && (
                        <div className="px-4">
                          <JsonTable json={feature.extendedTable} />
                        </div>
                      )}
                      <div className="divider"></div>
                    </div>
                  );
                })}
              </ul>
            );
        })}
      </div>
    </>
  );
};

export default SubClassDisplay;
