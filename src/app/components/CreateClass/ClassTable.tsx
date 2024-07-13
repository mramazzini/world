"use client";

import { CasterType, Class, CustomField, Feature } from "@prisma/client";
import numberArray from "@/lib/utils/numberArray";
import numPlace from "@/lib/utils/numPlace";
import { Levels, SpellLevels } from "@/lib/types";
import Link from "next/link";
interface Props {
  classObj: Class;
  features: Feature[];
  casterType: CasterType | null;
  customFields: CustomField[];
}

const ClassTable = ({
  classObj,
  features,
  casterType,
  customFields,
}: Props) => {
  return (
    <>
      <div className="divider" />
      <h2>Class Table </h2>

      <table className="table table-zebra sm:table-xs md:table-sm lg:table-md my-4 table-pin-rows max-w-[1800px]">
        <thead>
          <tr>
            <th>Level</th>
            <th>Proficiency Bonus</th>
            <th>Features</th>
            {customFields.map((field) => (
              <th key={field.id}>{field.name}</th>
            ))}
            {classObj.cantripsKnown.find((c) => c > 0) && (
              <th>Cantrips Known</th>
            )}
            {classObj.spellsKnown.find((c) => c > 0) && <th>Spells Known</th>}

            {casterType &&
              classObj.spellCaster &&
              classObj.displaySpellList &&
              numberArray(1, 9).map((num) => (
                <th
                  style={{
                    padding: "0.5rem",
                    width: "2rem",
                  }}
                  key={num}
                >
                  {numPlace(num)}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {numberArray(1, 20).map((num) => (
            <tr key={num}>
              {/* level */}
              <th>{num}</th>
              {/* proficiency bonus */}
              <td>+{Math.ceil(num / 4) + 1}</td>
              {/* features */}
              <td>
                <ul>
                  {features
                    .filter(
                      (feature) => feature.levels.includes(num) && feature
                    )
                    .map((feature) => {
                      //if the feature is the second level of the same feature type, just do feature (x2)

                      const lvlIndex = feature.levels.findIndex(
                        (lvl) => lvl === num
                      );

                      return (
                        <li
                          className="text-nowrap"
                          key={`feature-${feature.id}-${num}`}
                        >
                          {feature.name}
                          {lvlIndex > 0 ? ` (x${lvlIndex + 1})` : ""}
                        </li>
                      );
                    })}
                  {classObj.subfeatLevels.includes(num) ? (
                    <li>
                      {classObj.subClassName}{" "}
                      {classObj.subfeatLevels.findIndex(
                        (value) => value === num
                      ) > 0 && "Feature"}
                    </li>
                  ) : null}
                  {classObj.abilityScoreLevels.includes(num) ? (
                    <li>Ability Score Improvement</li>
                  ) : null}
                </ul>
              </td>
              {customFields.map((field) => {
                const level = `level${num}` as Levels;
                const value = field[level];
                return <td key={field.id}>{value || "-"}</td>;
              })}
              {classObj.cantripsKnown.find((c) => c > 0) && (
                <td>{classObj.cantripsKnown[num - 1] || 0}</td>
              )}
              {classObj.spellsKnown.find((c) => c > 0) && (
                <td>{classObj.spellsKnown[num - 1] || 0}</td>
              )}
              {casterType &&
                classObj.spellCaster &&
                classObj.displaySpellList &&
                numberArray(0, 8).map((spellSlotLevel) => {
                  //get the key "level1" "level2" etc
                  const key = `level${num}` as SpellLevels;

                  return (
                    <td key={spellSlotLevel}>
                      {casterType[key][spellSlotLevel] > 0
                        ? casterType[key][spellSlotLevel]
                        : "-"}
                    </td>
                  );
                })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ClassTable;
