"use state";
import { useState } from "react";
import { Levels, SpellLevels } from "@/lib/types";
import numberArray from "@/lib/utils/numberArray";
import numPlace from "@/lib/utils/numPlace";
import { CasterType, Class, CustomField, Feature } from "@prisma/client";

interface Props {
  customFields: CustomField[];
  updateCustomFields: (value: CustomField[]) => void;
  casterType: CasterType | null;
  classObj: Class;
  features: Feature[];
}

const ClassTableEditor = ({
  classObj,
  customFields,
  casterType,
  features,
  updateCustomFields,
}: Props) => {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* List Custom fields */}
      <div className="flex flex-wrap mb-4">
        {customFields.map((field, index) => (
          <div key={index} className="flex items-center m-2">
            <input
              className="form-control w-full  bg-black/30 p-2 rounded-l-xl"
              type="text"
              name={field.name}
              value={field.name}
              onChange={(e) => {
                const newFields = [...customFields];
                newFields[index].name = e.target.value;
                updateCustomFields(newFields);
              }}
            />
            <button
              onClick={() => {
                const newFields = [...customFields];
                newFields.splice(index, 1);
                updateCustomFields(newFields);
              }}
              className="text-white bg-red-500  p-2 rounded-r-xl mr-2"
            >
              X
            </button>
          </div>
        ))}
        {/* Create Custom Field */}
        <button
          onClick={() => {
            updateCustomFields([
              ...customFields,
              {
                name: `New Column ${count}`,
                description: "description",
              } as CustomField,
            ]);
          }}
          className=" text-white bg-primary p-2 rounded-lg m-2"
        >
          {customFields.length === 0 ? "Add Column" : "+"}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra sm:table-xs md:table-sm lg:table-md table-pin-rows max-w-[1800px] w-full">
          <thead>
            <tr>
              <th className="text-left bg-black/20 w-[5%]">Level</th>
              <th className="text-left bg-black/20 ">Proficiency Bonus</th>
              <th className="text-left bg-black/20">Features</th>

              {customFields.map((field, index) => (
                <th className="text-left bg-black/20 " key={index}>
                  {field.name}
                </th>
              ))}
              {classObj.cantripsKnown && (
                <th className="text-left bg-black/20 ">Cantrips Known</th>
              )}
              {classObj.spellsKnown && (
                <th className="text-left bg-black/20 ">Spells Known</th>
              )}

              {casterType &&
                classObj.spellCaster &&
                classObj.displaySpellList &&
                numberArray(1, 9).map((num) => (
                  <th
                    className="text-left bg-black/20 "
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
                      .map((feature, index) => {
                        //if the feature is the second level of the same feature type, just do feature (x2)

                        const lvlIndex = feature.levels.findIndex(
                          (lvl) => lvl === num
                        );

                        return (
                          <li className="text-nowrap" key={index}>
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
                {customFields.map((field, index) => {
                  const level = `level${num}` as Levels;
                  const value = field[level];
                  return (
                    <td key={index}>
                      <input
                        className="bg-black/30 p-1 w-[50px] rounded-xl text-center"
                        type="text"
                        value={value || ""}
                        onChange={(e) => {
                          const newFields = [...customFields];
                          newFields.find((f) => f.name == field.name)![level] =
                            e.target.value;
                          updateCustomFields(newFields);
                        }}
                      />
                    </td>
                  );
                })}
                {casterType &&
                  classObj.spellCaster &&
                  classObj.displaySpellList &&
                  numberArray(0, 8).map((spellSlotLevel, index) => {
                    //get the key "level1" "level2" etc
                    const key = `level${num}` as SpellLevels;

                    return (
                      <td key={index}>
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
      </div>
    </>
  );
};

export default ClassTableEditor;
