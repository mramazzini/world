import { Ability, ArmorTypes, Skill } from "@prisma/client";
import Info from "../../UI/Info";
import Module from "../Module";
//string extensions
import "@/lib/string.extensions";
import React from "react";
import AbilityToText from "@/lib/utils/AbilityToText";
import MultiInput from "../../UI/MultiInput";
interface Props {
  updateData: (
    key: string,
    value:
      | string
      | number
      | boolean
      | Ability[]
      | Skill[]
      | ArmorTypes[]
      | string[]
  ) => void;
  active: boolean;
  savingThrows: Ability[];
  skills: Skill[];
  skillChoiceCount: number;
  weapons: string[];
  armor: ArmorTypes[];
  tools: string[];
  equipment: string[];
}

const Proficiencies = ({
  updateData,
  active,
  savingThrows,
  skills,
  skillChoiceCount,
  weapons,
  armor,
  tools,
  equipment,
}: Props) => {
  return (
    <Module
      name="Proficiencies"
      description="Select the proficiencies for your class."
      active={active}
    >
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Saving throws */}
        <div className="form-control w-full  bg-black/30 p-3 rounded-xl">
          <div className="label">
            <span className="label-text">
              Saving Throws{" "}
              <Info tooltip="Select which skill saving throws this class is proficient in." />
            </span>
          </div>
          {Object.values(Ability).map((ability, index) => (
            <label
              key={index}
              className="label cursor-pointer border-b border-blue-500"
            >
              <span className="label-text">
                <Info tooltip={AbilityToText(ability)} />{" "}
                {AbilityToText(ability)}{" "}
              </span>
              <input
                type="checkbox"
                className="checkbox"
                checked={savingThrows.includes(ability)}
                onChange={(e) => {
                  if (e.target.checked) {
                    updateData("savingThrows", [...savingThrows, ability]);
                  } else {
                    updateData(
                      "savingThrows",
                      savingThrows.filter((a) => a !== ability)
                    );
                  }
                }}
              />
            </label>
          ))}
        </div>
        {/* Skills */}

        <div className="form-control  w-full  bg-black/30 p-3 rounded-xl">
          <div className="label">
            <span className="label-text">
              Skills{" "}
              <Info tooltip="Select the skills this class can be proficient in, and how many it can choose from." />
            </span>
          </div>
          {/* choose blank from the following */}
          <label className="label">
            <label className="label-text">Choose </label>
          </label>
          <select
            className="select select-bordered w-full"
            value={skillChoiceCount}
            onChange={(e) =>
              updateData("skillChoiceCount", parseInt(e.target.value))
            }
          >
            {Array.from({ length: 6 }, (_, i) => i).map((val, index) => (
              <option key={index}>{val}</option>
            ))}
          </select>
          <label className="label">
            <label className="label-text"> skills from the following: </label>
          </label>
          <div className="divider m-0" />
          <div className=" grid gap-4  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
            {Object.values(Skill).map((skill, index) => (
              <React.Fragment key={index}>
                <label className="label cursor-pointer border-b border-blue-500 ">
                  <span className="label-text">
                    <Info tooltip={skill.replaceAll("_", " ")} />{" "}
                    {skill.toCapitalCase().replaceAll("_", " ")}
                  </span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={skills.includes(skill)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        updateData("skills", [...skills, skill]);
                      } else {
                        updateData(
                          "skills",
                          skills.filter((s) => s !== skill)
                        );
                      }
                    }}
                  />
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* Armor */}

        <div className="form-control w-full  bg-black/30 p-3 rounded-xl">
          <div className="label">
            <span className="label-text">
              Armor{" "}
              <Info tooltip="Select the armor proficiencies for this class." />
            </span>
          </div>
          {Object.values(ArmorTypes).map((armorType, index) => (
            <React.Fragment key={index}>
              <label className="label cursor-pointer border-b border-blue-500">
                <span className="label-text">
                  {armorType.toCapitalCase().replaceAll("_", " ")}
                </span>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={armor.includes(armorType)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      updateData("armor", [...armor, armorType]);
                    } else {
                      updateData(
                        "armor",
                        armor.filter((a) => a !== armorType)
                      );
                    }
                  }}
                />
              </label>
            </React.Fragment>
          ))}
        </div>
        {/* Weapons */}
        <MultiInput
          data={weapons}
          label="Weapons"
          tooltip="List the weapon proficiencies for this class."
          placeholder="Ex: Dagger, Longsword, Crossbow"
          updateData={(data) => updateData("weapons", data as string[])}
        />

        {/* Tools */}
        <MultiInput
          data={tools}
          label="Tools"
          tooltip="List the tool proficiencies for this class."
          placeholder="Ex: Smith's Tools, Disguise Kit, Thieves' Tools"
          updateData={(data) => updateData("tools", data as string[])}
        />
        {/* Equipment */}
        <MultiInput
          data={equipment}
          label="Equipment"
          tooltip="List the starting equipment for this class."
          placeholder="Ex: Backpack, Crowbar, Hammer"
          updateData={(data) => updateData("equipment", data as string[])}
        />
      </div>
    </Module>
  );
};

export default Proficiencies;
