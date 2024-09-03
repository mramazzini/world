import { SpellInfo } from "@/lib/types";
import "@/lib/string.extensions";
import numPlace from "@/lib/utils/numPlace";
import JsonTable from "../Utility/JsonTable";
import P from "../Utility/FormatAndSanitize";
import Link from "next/link";
import React, { Fragment } from "react";
import Tooltip from "../Utility/Tooltip";
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
    <div className="text-xl">
      <div className="flex flex-row justify-between items-center">
        <h1>{spell.name}</h1>
        <Link className="btn btn-ghost border border-gray-500" href={`/spells`}>
          View all Spells -&gt;
        </Link>
      </div>

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
        Spell Lists:{" "}
        {spell.SpellLists.map((spellList, index) => {
          if (index === spell.SpellLists.length - 1) {
            return (
              <Link
                className="text-accent "
                href={`/class/${spellList.name?.toLowerCase()}`}
                key={index}
              >
                {spellList.name && (
                  <Tooltip element={spellList.name} layer={0} format={false}>
                    {`Go to ${spellList.name} class ->`}
                  </Tooltip>
                )}
              </Link>
            );
          }
          return (
            <Fragment key={index}>
              <Link
                className="text-accent "
                href={`/class/${spellList.name?.toLowerCase()}`}
              >
                {spellList.name && (
                  <Tooltip element={spellList.name} layer={0} format={false}>
                    {`Go to ${spellList.name} class ->`}
                  </Tooltip>
                )}
              </Link>
              ,{" "}
            </Fragment>
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

      <p>
        <P>{spell.description.trim()} </P>
      </p>

      {spell.options.length > 0 && (
        <>
          <ul className="list-disc p-2">
            {spell.options.map((option, index) => (
              <li key={index} className="m-4">
                <P>{option.trim()}</P>
              </li>
            ))}
          </ul>
          <br />
        </>
      )}
      <div className="mt-2">
        <JsonTable json={spell.extendedTable} />
      </div>

      {spell.postTableData && <P>{spell.postTableData.trim()}</P>}
      {spell.upcastInfo && (
        <>
          <div className="divider"></div>
          <h3>At Higher Levels</h3>
          <p>
            <P>{spell.upcastInfo}</P>
          </p>
        </>
      )}
    </div>
  );
};

export default SpellDisplay;
