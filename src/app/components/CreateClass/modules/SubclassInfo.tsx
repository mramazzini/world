import { Class } from "@prisma/client";
import Module from "../Module";
import Info from "../../UI/Info";
import MultiInput from "../../UI/MultiInput";
import MultiOptions from "../../UI/MultiOptions";
import numPlace from "@/lib/utils/numPlace";
import { useState } from "react";
interface Props {
  classObj: Class;
  updateClass: (value: Class) => void;
  active: boolean;
}

const SubclassInfo = ({ classObj, updateClass, active }: Props) => {
  const [subClassSpells, setSubClassSpells] = useState<boolean>(false);
  return (
    <Module
      name="Subclass Info"
      description={"Fill in your subclass details."}
      active={active}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Subclass name */}
        <div className="form-control w-full  bg-black/30 p-3 rounded-xl">
          <div className="label">
            <span className="label-text">Subclass Name</span>
          </div>
          <input
            type="text"
            value={classObj.subClassName}
            onChange={(e) =>
              updateClass({ ...classObj, subClassName: e.target.value })
            }
            placeholder="Ex: Fighter Archetype, Druidic Circle"
            className="input input-bordered w-full max-w-xs"
          />
          {/* Subclass spell description? */}

          <>
            <div className="label">
              <span className="label-text">
                {classObj.spellCaster
                  ? "Will subclasses provide spells? Ex: Cleric, Paladin"
                  : "Enable spellcasting in the spellcasting tab to enable subclass spells."}
              </span>
            </div>
            <input
              disabled={!classObj.spellCaster}
              type="checkbox"
              checked={subClassSpells}
              onChange={(e) => setSubClassSpells(e.target.checked)}
              className="toggle toggle-bordered "
            />
          </>
        </div>
        {/* Sub class levels */}
        <MultiOptions<number>
          data={classObj.subfeatLevels}
          tooltip="Enter the levels at which you gain subclass features."
          isNumeric
          setData={(value) => {
            updateClass({
              ...classObj,
              subfeatLevels: value,
            });
          }}
          name="Subclass Feature Levels"
          description="Enter the levels at which you gain subclass features."
          options={Array.from({ length: 20 }, (_, i) => i + 1)}
        />

        {/* Subclass description */}
        <label className="form-control w-full  bg-black/30 p-3 rounded-xl">
          <div className="label">
            <span className="label-text">
              Finish the sentence: When you reach{" "}
              {classObj.subfeatLevels[0]
                ? numPlace(classObj.subfeatLevels[0])
                : 1}{" "}
              level...{" "}
            </span>
          </div>
          <textarea
            value={classObj.subClassDesc}
            onChange={(e) => {
              updateClass({ ...classObj, subClassDesc: e.target.value });
            }}
            placeholder="Ex: you choose your druidic circle that you dedicate your life to."
            className="textarea textarea-bordered w-full"
          />
          <div className="label">
            <span className="label-text">
              Your subclass choice grants you features at{" "}
              {classObj.subfeatLevels[0]
                ? numPlace(classObj.subfeatLevels[0])
                : 1}{" "}
              level{" "}
              {classObj.subfeatLevels.length > 1 && (
                <>
                  and again at{" "}
                  {classObj.subfeatLevels
                    .filter(
                      (i, index) =>
                        index !== 0 &&
                        index !== classObj.subfeatLevels.length - 1
                    )
                    .map((i) => numPlace(i))
                    .join(", ")}{" "}
                  {classObj.subfeatLevels.length > 2 ? "and" : ""}{" "}
                  {numPlace(
                    classObj.subfeatLevels[classObj.subfeatLevels.length - 1]
                  )}{" "}
                  level.
                </>
              )}
            </span>
          </div>
        </label>
        {/* Sub class spell casting description */}
        {subClassSpells && classObj.spellCaster && (
          <label className="form-control w-full  bg-black/30 p-3 rounded-xl">
            <div className="label">
              <span className="label-text">
                Subclass Spell Casting Info{" "}
                <Info tooltip="If the subclasses for this class can grant spells, describe how." />
              </span>
            </div>
            <textarea
              value={classObj.subClassSpellDescription || ""}
              onChange={(e) => {
                updateClass({
                  ...classObj,
                  subClassSpellDescription: e.target.value,
                });
              }}
              placeholder={`Ex: You learn additional spells when you reach certain levels in this class. The spells count as wizard spells for you.`}
              className="textarea textarea-bordered w-full"
            />
          </label>
        )}
      </div>
    </Module>
  );
};

export default SubclassInfo;
