"use client";
import { getDefaultCasterTypes } from "@/lib/actions/db/general/read.actions";
import { Levels } from "@/lib/types";
import numberArray from "@/lib/utils/numberArray";
import { CasterType } from "@prisma/client";
import { useEffect, useState } from "react";
import Info from "../UI/Info";
import numPlace from "@/lib/utils/numPlace";

interface Props {
  updateCasterType: (value: CasterType) => void;
  casterType: CasterType;
}
const colors: string[] = [
  "gray", // index 0
  "#6CA0DC",
  "#4F7EBE",
  "#335F99",
  "#1E3A5F",
  "#14264A",
  "#0A1A35",
];
const SpellTableEditor = ({ casterType, updateCasterType }: Props) => {
  const [defaultCasterTypes, setDefaultCasterTypes] = useState<
    CasterType[] | null
  >(null);

  useEffect(() => {
    getDefaultCasterTypes().then((types) => setDefaultCasterTypes(types));
  }, []);

  const getColor = (level: number) => {
    if (level <= 0) return colors[0];
    if (level >= 6) return colors[6];
    return colors[level];
  };
  return (
    <label className="form-control w-full  bg-black/30 p-3 rounded-xl">
      {/* Spell Slots */}
      <div className="label">
        <span className="label-text">
          Spell Slots{" "}
          <Info tooltip="Fill the table below to dictate how many spell slots this class gets at each level. You can choose from presets to fill up the table for you" />
        </span>
      </div>
      {defaultCasterTypes && (
        <>
          <div className="divider my-0" />
          <label className=" label-text mb-1">Select a preset...</label>
          <label className="max-w-xs m-1">
            <select
              className="select select-bordered w-full"
              onChange={(e) => {
                let res = defaultCasterTypes.find(
                  (type) => type.name === e.target.value
                ) as CasterType;
                if (!res)
                  res = {
                    level1: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    level2: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    level3: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    level4: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    level5: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    level6: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    level7: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    level8: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    level9: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    level10: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    level11: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    level12: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    level13: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    level14: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    level15: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    level16: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    level17: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    level18: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    level19: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    level20: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  } as CasterType;

                updateCasterType(res);
                console.log(casterType);
              }}
            >
              <option value="None">None</option>
              {defaultCasterTypes.map((type, index) => (
                <option key={index} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          </label>{" "}
          <label className=" label-text mt-1">...and edit it below!</label>
          <div className="divider my-0" />
        </>
      )}
      <h2 className="">Spell Slots Table</h2>
      <p className="mb-2">
        Fill in the table below to dictate how many spell slots this class gets
        at each level.
      </p>
      <table className="table table-zebra table-xs">
        <thead>
          <tr>
            <th>Spell Level -&gt;</th>
            {numberArray(1, 9).map((num) => (
              <th key={num} className="w-[10%] text-center">
                {numPlace(num)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {numberArray(1, 20).map((num) => (
            <tr key={num}>
              <td>Class level {num}</td>
              {numberArray(1, 9).map((level) => (
                <td key={level} className="w-[10%]">
                  <input
                    className="w-full input p-0 text-center h-auto"
                    style={{
                      backgroundColor: getColor(
                        casterType[`level${num}` as Levels][level - 1]
                      ),
                    }}
                    type="number"
                    value={casterType[`level${num}` as Levels][level - 1]}
                    onChange={(e) => {
                      updateCasterType({
                        ...casterType,
                        [`level${num}` as Levels]: [
                          ...casterType[`level${num}` as Levels].slice(
                            0,
                            level - 1
                          ),
                          parseInt(e.target.value),
                          ...casterType[`level${num}` as Levels].slice(level),
                        ],
                      });
                    }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </label>
  );
};

export default SpellTableEditor;
