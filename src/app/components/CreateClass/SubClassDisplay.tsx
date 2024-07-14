"use client";

import { SubClassInfo } from "@/lib/types";
import { usePathname } from "next/navigation";
import "@/lib/string.extensions";
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
      <h2>Features</h2>

      <ul>
        {subClass.SubClassFeatures.map((feature) => (
          <li key={feature.id}>{feature.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubClassDisplay;
