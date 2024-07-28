import Info from "../../UI/Info";
import Module from "../Module";

interface Props {
  name: string;
  hitDie: number;
  description: string;
  flavorText: string;
  updateData: (key: string, value: string | number) => void;
  active: boolean;
}

const ClassInfo = ({
  name,
  hitDie,
  description,
  flavorText,
  updateData,
  active,
}: Props) => {
  return (
    <Module
      name="Class Info"
      description="Some basic information about your class."
      active={active}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* name, hitDie, description, flavortext */}
        {/* name */}
        <label className="form-control w-full  bg-black/30 p-3 rounded-xl">
          <div className="label">
            <span className="label-text">Class Name</span>
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => updateData("name", e.target.value)}
            placeholder="Ex: Fighter, Wizard"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        {/* Hitdie */}
        <label className="form-control w-full  bg-black/30 p-3 rounded-xl">
          <div className="label">
            <span className="label-text">
              Hit Die <Info tooltip="Hit die" />
            </span>
          </div>
          <select
            className="select select-bordered w-full max-w-xs"
            value={hitDie}
            onChange={(e) => updateData("hitDie", parseInt(e.target.value))}
          >
            <option value={4}>d4</option>
            <option value={6}>d6</option>
            <option value={8}>d8</option>
            <option value={10}>d10</option>
            <option value={12}>d12</option>
          </select>
        </label>
        {/* Description */}
        <label className="form-control w-full  bg-black/30 p-3 rounded-xl">
          <div className="label">
            <span className="label-text">
              Description{" "}
              <Info tooltip="A creative description for what this class does and represents." />
            </span>
          </div>
          <textarea
            value={description}
            onChange={(e) => updateData("description", e.target.value)}
            placeholder="Ex: Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. They are well acquainted with death, both meting it out and staring it defiantly in the face. In addition to their physical training, Fighters are also well-versed in the art of strategy, allowing them to take advantage of their opponents' weaknesses and control the flow of battle."
            className="textarea textarea-bordered w-full  h-48"
          ></textarea>
        </label>
        {/* Flavor Text */}
        <label className="form-control w-full  bg-black/30 p-3 rounded-xl ">
          <div className="label">
            <span className="label-text flex flex-row justify-between items-center w-full">
              <div>
                Flavor Text{" "}
                <Info tooltip="A shorter 1-2 sentence excerpt to entice people to read your class. Max: 200 Characters." />
              </div>
              <div className="text-xs">{flavorText.length}/200</div>
            </span>
          </div>
          <textarea
            value={flavorText}
            onChange={(e) => updateData("flavorText", e.target.value)}
            placeholder="Ex: The Fighter is a master of combat, skilled with a variety of weapons and armor."
            className="textarea textarea-bordered w-full  h-48"
          />
        </label>
      </div>
    </Module>
  );
};

export default ClassInfo;
