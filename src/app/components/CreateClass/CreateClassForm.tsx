"use client";
import {
  Ability,
  ArmorTypes,
  Class,
  Feature,
  Prisma,
  Skill,
} from "@prisma/client";
import List from "../UI/List";
import Input from "../UI/Input";
import { useState } from "react";
import TextEditor from "../UI/TextEditor";

const CreateClassForm = ({
  data,
  setData,
}: {
  data: Prisma.ClassCreateInput;
  setData: (data: Prisma.ClassCreateInput) => void;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <form>
      <Input<string>
        data={data.name as string}
        name="Name"
        description="The name of the class."
        placeholder="Insert class name"
        setData={(name) => setData({ ...data, name })}
      />
      <TextEditor
        data={data.description as string}
        setData={(description) => setData({ ...data, description })}
        title="Description"
        description="A brief description of the class."
        placeholder="Example: The fighter is a master of combat, skilled with a variety of weapons and armor."
      />
      <TextEditor
        data={data.multiclassing}
        setData={(multiclassing) => setData({ ...data, multiclassing })}
        title="Multiclassing"
        description="The requirements for multiclassing in or out of this class."
        placeholder="Example: You must have a Dexterity or Strength score of 13 or higher in order to multiclass in or out of this class."
      />
      <div className="divider"></div>
      <Input<number>
        data={data.hitDie as number}
        name="Hit Die"
        description="The type of hit die this class uses. This determines the amount of hit points gained per level."
        setData={(hitDie) => setData({ ...data, hitDie })}
        isNumeric
        options={[4, 6, 8, 10, 12, 20]}
      />
      <div className="divider"></div>
      <List<ArmorTypes>
        data={data.armor as ArmorTypes[]}
        setData={(armor) => setData({ ...data, armor })}
        name="Armor"
        description="List the types of armor this class is proficient with."
        options={Object.values(ArmorTypes)}
      />
      <div className="divider"></div>
      <List<string>
        data={data.weapons as string[]}
        setData={(weapons) => setData({ ...data, weapons })}
        name="Weapons"
        description="List the types of weapons this class is proficient with."
      />
      <div className="divider"></div>
      <List<string>
        data={data.tools as string[]}
        setData={(tools) => setData({ ...data, tools })}
        name="Tools"
        description="List the types of tools this class is proficient with."
      />
      <div className="divider"></div>
      <List<Ability>
        data={data.savingThrows as Ability[]}
        setData={(savingThrows) => setData({ ...data, savingThrows })}
        name="Saving Throws"
        description="List the ability scores this class is proficient in saving throws with."
        options={Object.values(Ability)}
      />
      <div className="divider"></div>
      <List<string>
        data={data.equipment as string[]}
        setData={(equipment) => setData({ ...data, equipment })}
        name="Equipment"
        description="List the starting equipment options for this class."
      />
      <div className="divider"></div>
      <Input<number>
        data={data.skillChoiceCount as number}
        name="Skill Choice Count"
        description="The amount of skills this class can choose to be proficient in. (Usually 2)"
        setData={(skillChoiceCount) => setData({ ...data, skillChoiceCount })}
        isNumeric
        options={[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        ]}
      />
      <div className="divider"></div>
      <List<Skill>
        data={data.skills as Skill[]}
        setData={(skills) => setData({ ...data, skills })}
        name="Skills"
        description="Select the skills this class can be proficient with."
        options={Object.values(Skill)}
      />
      <div className="divider"></div>
      <List<number>
        data={data.ASILevels as number[]}
        setData={(ASILevels) => setData({ ...data, ASILevels })}
        name="Ability score improvement levels"
        description="List the levels at which this class gains an ability score improvement. (Most classes give them at lvl 4, 8, 12, 16, and 19)"
        options={[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ]}
        isNumeric
      />
      <div className="divider"></div>
      <List<number>
        data={data.subfeatLevels as number[]}
        setData={(subfeatLevels) => setData({ ...data, subfeatLevels })}
        name="Subclass feature levels"
        description="List the levels at which this class gains subclass features. The first level you select will be where the class chooses a subclass."
        options={[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ]}
        isNumeric
      />

      {loading && <span className="loading loading-spinner loading-lg"></span>}
    </form>
  );
};

export default CreateClassForm;
