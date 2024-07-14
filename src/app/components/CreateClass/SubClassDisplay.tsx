"use client";

import { SubClassInfo } from "@/lib/types";
import { usePathname } from "next/navigation";
import "@/lib/string.extensions";
import numberArray from "@/lib/utils/numberArray";
import Levels from "../UI/Levels";
import P from "../Utility/FormatAndSanitize";
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
      <h1>
        {className.toCapitalCase()}: {subClass.name}
      </h1>
      <p className="italic">{subClass.description}</p>
      {subClass.spells.length > 0 && (
        <div className="overflow-x-auto p-4">
          <table className="table-zebra table-md">
            <thead>
              <tr>
                <th>{subClass.name.toCapitalCase()} Spells</th>
              </tr>
              <tr>
                <th>Levels</th>
                <th>Spells</th>
              </tr>
            </thead>
            <tbody>
              {subClass.spells.map((spell, index) => {
                const res = processSpellsString(spell);
                return (
                  <tr key={index}>
                    <td>{res.lvl}</td>
                    <td>{res.spells.join(", ")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <div className="divider"></div>
      <h2>Features</h2>

      {numberArray(1, 20).map((num) => {
        //grab features for the current level
        const feat = subClass.SubClassFeatures.filter((feature) =>
          feature.levels.find((lvl) => lvl === num)
        );
        if (feat.length == 0) return;
        if (feat.find((f) => f.levels[0] === num))
          return (
            <ul>
              {feat.map((feature) => {
                const lvlIndex = feature.levels.findIndex((lvl) => lvl === num);
                if (lvlIndex === -1 || lvlIndex > 0) return;
                return (
                  <>
                    <li className="px-4" key={`${num}-${feature.id}`}>
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
                    <div className="divider"></div>
                  </>
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
