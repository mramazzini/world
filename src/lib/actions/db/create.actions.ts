"use server";
import {
  Class,
  PrismaClient,
  SubClass,
  SubRace,
  Background,
  Feat,
  Spell,
  Item,
  Race,
  Ability,
  Skill,
  ArmorTypes,
  Prisma,
} from "@prisma/client";
import { deleteClasses } from "./destroy.actions";

const db = new PrismaClient();

export const createClass = async (data: Prisma.ClassCreateInput) => {
  const result = await db.class.create({
    data,
  });
  return result;
};

export const createTestClass = async () => {
  await deleteClasses();
  const data: Prisma.ClassCreateInput = {
    name: "Fighter",
    hitDie: 10,
    savingThrows: [Ability.STR, Ability.CON],
    skills: [
      Skill.ACROBATICS,
      Skill.ANIMAL_HANDLING,
      Skill.ATHLETICS,
      Skill.HISTORY,
      Skill.INSIGHT,
      Skill.INTIMIDATION,
      Skill.PERCEPTION,
      Skill.SURVIVAL,
    ],
    skillChoiceCount: 2,
    weapons: ["Simple", "Martial"],
    armor: [
      ArmorTypes.LIGHT,
      ArmorTypes.MEDIUM,
      ArmorTypes.HEAVY,
      ArmorTypes.SHIELDS,
    ],
    tools: [],
    equipment: [
      "Chain Mail or leather armor, longbow, and 20 arrows",
      "A martial weapon and a shield or two martial weapons",
      "A light crossbow and 20 bolts or two handaxes",
      "A dungeoneer's pack or an explorer's pack",
    ],
    ASILevels: [4, 6, 8, 12, 14, 16, 19],
  };

  const features = [
    {
      name: "Fighting Style",
      desc: "Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
      lvl: 1,
    },
    {
      name: "Second Wind",
      desc: "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.",
      lvl: 1,
    },
    {
      name: "Action Surge",
      desc: "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action. Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.",
      lvl: 2,
    },
    {
      name: "Martial Archetype",
      desc: "At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques.  The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.",
      lvl: 3,
    },
    {
      name: "Extra Attack",
      desc: "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
      lvl: 5,
    },
    {
      name: "Indomitable",
      desc: "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.",
      lvl: 9,
    },
    {
      name: "Extra Attack (2)",
      desc: "Beginning at 11th level, you can attack three times, instead of twice, whenever you take the Attack action on your turn.",
      lvl: 11,
    },
    {
      name: "Indomitable (2)",
      desc: "Beginning at 13th level, you can use Indomitable twice between rests.",
      lvl: 13,
    },
    {
      name: "Extra Attack (3)",
      desc: "Beginning at 20th level, you can attack four times, instead of three, whenever you take the Attack action on your turn.",
      lvl: 20,
    },
  ];

  //create class
  const classData = await createClass(data);
  //add classId to features arr
  const classFeatures = features.map((feature: any) => {
    return { ...feature, classId: classData.id };
  });
  //create features
  const result = await db.feature.createMany({
    data: classFeatures,
  });

  return data;
};
