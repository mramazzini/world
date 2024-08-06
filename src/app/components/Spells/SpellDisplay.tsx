import { SpellInfo } from "@/lib/types";
import "@/lib/string.extensions";
import numPlace from "@/lib/utils/numPlace";
import JsonTable from "../Utility/JsonTable";
import P from "../Utility/FormatAndSanitize";
import Link from "next/link";
import React from "react";
interface Props {
  spell: SpellInfo;
}

const SpellDisplay = ({ spell }: Props) => {
  const generateComponentsString = () => {
    let components = "";
    if (spell.verbal) components += "V";
    if (spell.somatic) {
      if (components.length > 0) components += ", ";
      components += "S";
    }
    if (spell.material) {
      if (components.length > 0) components += ", ";
      components += `M ${spell.materialCost}`;
    }
    return components;
  };
  return (
    <div>
      <h1>{spell.name}</h1>
      <div className="divider m-0"></div>
      {spell.level === 0 ? (
        <h2>{spell.school.toCapitalCase()} cantrip</h2>
      ) : (
        <h2>
          {numPlace(spell.level)}-Level {spell.school.toCapitalCase()} Spell
        </h2>
      )}

      <p>
        Source:{" "}
        <span className="italic">
          {spell.User?.username ? spell.User.username : spell.source}
        </span>
      </p>
      <p>
        {spell.SpellListToSpell.map((item, index) => {
          if (index === spell.SpellListToSpell.length - 1) {
            return (
              <Link
                className="text-accent hover:opacity-70"
                href={`/class/${item.spellList?.name?.toLowerCase()}`}
                key={index}
              >
                {item.spellList?.name}
              </Link>
            );
          }
          return (
            <React.Fragment key={index}>
              <Link
                className="text-accent hover:opacity-70"
                href={`/class/${item.spellList?.name?.toLowerCase()}`}
              >
                {item.spellList?.name}
              </Link>
              ,{" "}
            </React.Fragment>
          );
        })}
      </p>

      <div className="divider"></div>

      <h3>
        Casting Time: <span className="font-normal">{spell.castingTime} </span>
      </h3>
      <h3>
        Range: <span className="font-normal">{spell.range}</span>
      </h3>
      <h3>
        Components:{" "}
        <span className="font-normal">{generateComponentsString()}</span>
      </h3>
      <h3>
        Duration: <span className="font-normal">{spell.duration}</span>
      </h3>
      <div className="divider"></div>
      <P>{spell.description}</P>
      <JsonTable json={spell.extendedTable} />

      {spell.postTableContent && <P>{spell.postTableContent}</P>}
      {spell.upcastInfo && (
        <>
          <div className="divider"></div>
          <h3>At Higher Levels</h3>
          <p>{spell.upcastInfo}</p>
        </>
      )}
    </div>
  );
};

export default SpellDisplay;
