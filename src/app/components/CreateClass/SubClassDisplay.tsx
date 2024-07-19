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
interface Props {
  subClass: SubClassInfo;
}

interface SpellLevel {
  lvl: number;
  spells: string[];
}
// lvl:spell, spell, spell
const processSpellsString = (spells: string): SpellLevel => {
  const spellList = spells.split(", ");
  const level = spellList[0].split(":")[0];

  spellList[0] = spellList[0].split(":")[1];
  return { lvl: parseInt(level), spells: spellList };
};

const SubClassDisplay = ({ subClass }: Props) => {
  const router = usePathname();
  const className = router.split("/")[2];

  return (
    <div className="p-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-4/5">
          <h1 className="px-4">
            {className.toCapitalCase()}: {subClass.name}
          </h1>
          <p className="px-4 italic">{subClass.description}</p>

          <p className="px-4 pt-4">
            Source: <span className="font-bold italic">{subClass.source}</span>
          </p>
        </div>
        <div className="flex justify-center flex-col ">
          <Link
            className="btn  mb-2 btn-ghost border border-gray-400"
            href={`/class/${className}/subclass`}
          >
            View All {className.toCapitalCase()} Subclasses -&gt;
          </Link>
          {/* go back */}
          <Link
            className="btn btn-ghost border border-gray-400"
            href={`/class/${className.replaceAll(" ", "-").toLowerCase()}`}
          >
            View {className.toCapitalCase()} Class -&gt;
          </Link>
        </div>
      </div>
      <div className="divider"></div>
      {subClass.spells.length > 0 && (
        <>
          <br />
          <h3 className="px-4">
            You gain the following spells from this subclass:
          </h3>
          <div className="overflow-x-auto p-4">
            <table className="table-zebra table-md w-full">
              <thead>
                <tr>
                  <th className="text-left bg-black/20">Levels</th>
                  <th className="text-left bg-black/20">Spells</th>
                </tr>
              </thead>
              <tbody>
                {subClass.spells.map((spell, index) => {
                  const res = processSpellsString(spell);
                  return (
                    <tr key={index}>
                      <td>{numPlace(res.lvl)}</td>
                      <td>{res.spells.join(", ")}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="divider"></div>
        </>
      )}

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
                const lvlIndex = feature.levels.findIndex((lvl) => lvl === num);
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
      <ul></ul>
    </div>
  );
};

export default SubClassDisplay;
