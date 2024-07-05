import { Ability, ArmorTypes, Class, Prisma, Skill } from "@prisma/client";

const ids = {
  fighter: 1,
  wizard: 2,
  cleric: 3,
  rogue: 4,
  barbarian: 5,
  bard: 6,
  druid: 7,
  monk: 8,
  paladin: 9,
  ranger: 10,
  sorcerer: 11,
  warlock: 12,
};

const Features: Prisma.FeatureCreateManyInput[] = [
  // Fighter
  {
    name: "Action Surge",
    description:
      "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action.",
    levels: [2],
    classId: ids.fighter,
  },
  {
    name: "Extra Attack",
    description:
      "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.",
    levels: [5, 11, 20],
    classId: ids.fighter,
  },
  {
    name: "Fighting Style",
    description:
      "You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
    levels: [1],
    classId: ids.fighter,
  },
  {
    name: "Second Wind",
    description:
      "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.",
    levels: [1],
    classId: ids.fighter,
  },
  {
    name: "Martial Versatility",
    description: `Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can do one of the following, as you shift the focus of your martial practice:

    Replace a fighting style you know with another fighting style available to fighters.

    If you know any maneuvers from the Battle Master archetype, you can replace one maneuver you know with a different maneuver.
`,
    levels: [1],
    classId: ids.fighter,
  },
  {
    name: "Indomitable",
    description:
      "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.",
    levels: [9, 13, 17],
    classId: ids.fighter,
  },
  // Wizard
  {
    name: "Arcane Recovery",
    description:
      "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher. For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.",
    levels: [1],
    classId: ids.wizard,
  },
  {
    name: "Cantrip Formulas",
    description:
      "At 3rd level, you have scribed a set of arcane formulas in your spellbook that you can use to formulate a cantrip in your mind. Whenever you finish a long rest and consult those formulas in your spellbook, you can replace one wizard cantrip you know with another cantrip from the wizard spell list.",
    levels: [3],
    classId: ids.wizard,
  },
  {
    name: "Spell Mastery",
    description:
      "At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.",
    levels: [18],
    classId: ids.wizard,
  },
  {
    name: "Signature Spells",
    description:
      "When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest.",
    levels: [20],
    classId: ids.wizard,
  },
  // Cleric
];

export default Features;
