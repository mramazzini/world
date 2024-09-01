import numberArray from "@/lib/utils/numberArray";
import { itemIds } from "../Items/ItemIds";
import {
  cantripIds,
  generateSpellLink,
  getSpellIdsEqualToOrLessThanLevel,
  getSpellIdsOfLevel,
  ritualIds,
  spellIds,
} from "../Spells/spells.seed";
import { Time } from "@/lib/types";

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
  artificer: 13,
};
interface ClassFeature extends PrismaJson.Feature {
  classId: number;
  spellCasting?: boolean;
}
const Features: ClassFeature[] = [
  // Fighter
  {
    name: "Action Surge",
    description:
      "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action.\n\nOnce you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.",
    levels: [2, 17],
    classId: ids.fighter,
  },
  {
    name: "Extra Attack",
    description:
      "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.\n\n The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.",
    levels: [5, 11, 20],
    classId: ids.fighter,
  },
  {
    classId: ids.fighter,
    name: "Fighting Style",
    levels: [1],
    description: `You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.`,
    choices: {
      numberOfChoices: 1,
      options: [],
    },
    extendedTable: [
      {
        "": {
          headers: ["Style", "Description"],
          data: [
            {
              Style: "Archery",
              Description:
                "You gain a +2 bonus to attack rolls you make with ranged weapons.",
            },
            {
              Style: "Blind Fighting",
              Description:
                "You have blindsight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.",
            },
            {
              Style: "Defense",
              Description:
                "While you are wearing armor, you gain a +1 bonus to AC.",
            },
            {
              Style: "Dueling",
              Description:
                "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
            },
            {
              Style: "Great Weapon Fighting",
              Description:
                "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.",
            },
            {
              Style: "Protection",
              Description: `When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a ^${itemIds.shield}{shield}^.`,
            },
            {
              Style: "Interception",
              Description: `When a creature you can see hits a target, other than you, within 5 feet of you with an attack, you can use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to a minimum of 0 damage). You must be wielding a ^${itemIds.shield}{shield}^ or a simple or martial weapon to use this reaction.`,
            },
            {
              Style: "Superior Technique",
              Description:
                "You learn one maneuver of your choice from among those available to the Battle Master archetype. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).\n\n You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest.",
            },
            {
              Style: "Thrown-Weapon Fighting",
              Description:
                "You can draw a weapon that has the thrown property as part of the attack you make with the weapon. In addition, when you hit with a ranged attack using a thrown weapon, you gain a +2 bonus to the damage roll.",
            },
            {
              Style: "Two-Weapon Fighting",
              Description:
                "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.",
            },
            {
              Style: "Unarmed Fighting",
              Description:
                "Your unarmed strikes can deal bludgeoning damage equal to 1d6 + your Strength modifier. If you strike with two free hands, the d6 becomes a d8.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Second Wind",
    levels: [1],
    description:
      "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.\n\n Once you use this feature, you must finish a short or long rest before you can use it again.",
    classId: ids.fighter,
  },
  {
    name: "Martial Versatility",
    description: `Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can do one of the following, as you shift the focus of your martial practice:`,
    options: [
      "Replace a fighting style you know with another fighting style available to fighters.",
      "If you know a maneuver from the Battle Master archetype, you can replace it with another maneuver from that archetype.",
    ],

    levels: [4, 6, 8, 12, 14, 16, 19],
    classId: ids.fighter,
  },
  {
    name: "Indomitable",
    description:
      "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest. \n\nYou can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.",
    levels: [9, 13, 17],
    classId: ids.fighter,
  },
  // Wizard
  {
    classId: ids.wizard,
    spellCasting: true,
    name: "Cantrips",
    levels: [1, 4, 10],
    description:
      "At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.",

    leveledFeatures: {
      1: {
        preparedSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 3,
                spellIds: Object.values(cantripIds),
              },
            ],
          },
        },
      },
      4: {
        preparedSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 1,
                spellIds: Object.values(cantripIds),
              },
            ],
          },
        },
      },
      10: {
        preparedSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 1,
                spellIds: Object.values(cantripIds),
              },
            ],
          },
        },
      },
    },
  },
  ...numberArray(1, 6).map((level) => {
    const spellSlot = {} as { [key: number]: number };
    spellSlot[level] = 1;
    return {
      classId: ids.wizard,
      name: `Recover ${level} Level Spell`,
      description: `Use Arcane Recovery to recover a ${level} level spell.`,
      hideInSheet: true,
      effect: {
        spellSlotRegained: spellSlot,
        active: {
          cost: {
            customResource: {
              resource: "Arcane Recovery",
              quantity: level,
            },
            time: { quantity: 1, unit: Time.shortRest },
          },
        },
      },
    };
  }),
  {
    classId: ids.wizard,
    levels: [20],
    name: "Signature Spells",
    description: `When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your ^${itemIds.spellBook}{spellbook}^ as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest.\n\nIf you want to cast either spell at a higher level, you must expend a spell slot as normal.`,
    leveledFeatures: {
      20: {
        customSpells: [
          {
            spells: {
              defaultSpells: getSpellIdsOfLevel(3),
            },
            noSpellSlot: true,
          },
          {
            spells: {
              defaultSpells: getSpellIdsOfLevel(3),
            },
            noSpellSlot: true,
          },
        ],
        active: {
          cost: {
            time: {
              quantity: 1,
              unit: Time.rest,
            },
          },
        },
      },
    },
  },
  {
    name: "Spell Mastery",
    description: `At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your ^${itemIds.spellBook}{spellbook}^. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.\n\nBy spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels.`,
    levels: [18],
    classId: ids.wizard,
    leveledFeatures: {
      18: {
        active: {
          cost: {
            time: {
              quantity: 8,
              unit: Time.hour,
            },
          },
        },
        customSpells: [
          {
            spells: {
              defaultSpells: getSpellIdsOfLevel(1),
            },
            noSpellSlot: true,
          },
          {
            spells: {
              defaultSpells: getSpellIdsOfLevel(2),
            },
            noSpellSlot: true,
          },
        ],
      },
    },
  },
  {
    levels: [3],
    classId: ids.wizard,
    name: "Cantrip Formulas",
    description: `At 3rd level, you have scribed a set of arcane formulas in your ^${itemIds.spellBook}{spellbook}^ that you can use to formulate a cantrip in your mind. Whenever you finish a long rest and consult those formulas in your ^${itemIds.spellBook}{spellbook}^, you can replace one wizard cantrip you know with another cantrip from the wizard spell list.`,
    leveledFeatures: {
      3: {
        preparedSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 1,
                spellIds: Object.values(cantripIds),
              },
            ],
          },
          lose: {
            choices: [
              {
                numberOfSpells: 1,
                spellIds: Object.values(cantripIds),
              },
            ],
          },
        },
        active: {
          cost: {
            time: {
              quantity: 1,
              unit: Time.longRest,
            },
          },
        },
      },
    },
  },
  {
    classId: ids.wizard,
    levels: [1],
    name: "Arcane Recovery",
    description: `You have learned to regain some of your magical energy by studying your ^${itemIds.spellBook}{spellbook}^. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.\n\nFor example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.`,
    leveledFeatures: {
      ...numberArray(1, 20).reduce((acc, level) => {
        const res: PrismaJson.FeatureEffect = {
          resourceAmountIncrease: [
            {
              resourceName: "Arcane Recovery",
              amount: Math.ceil(level / 2),
            },
          ],
          active: {
            cost: {
              time: {
                quantity: 1,
                unit: Time.day,
              },
            },
          },
        };
        acc[level] = res; // Assign the result to the corresponding level key
        return acc;
      }, {} as { [key: number]: PrismaJson.FeatureEffect }), // Type the accumulator as an object with numeric keys
    },
  },
  {
    classId: ids.wizard,
    spellCasting: true,
    name: "Spellbook",

    description: `As a wizard, you have a ^${itemIds.spellBook}{spellbook}^ containing six 1st-level wizard spells of your choice. Your ^${itemIds.spellBook}{spellbook}^ is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.\n\nThe spells that you add to your ^${itemIds.spellBook}{spellbook}^ as you gain levels reflect the arcane research you conduct on your own, as well as intellectual breakthroughs you have had about the nature of the multiverse. You might find other spells during your adventures. You could discover a spell recorded on a scroll in an evil wizard's chest, for example, or in a dusty tome in an ancient library.\n\nYour ^${itemIds.spellBook}{spellbook}^ is a unique compilation of spells, with its own decorative flourishes and margin notes. It might be a plain, functional leather volume that you received as a gift from your master, a finely bound gilt-edged tome you found in an ancient library or even a loose collection of notes scrounged together after you lost your previous ^${itemIds.spellBook}{spellbook}^ in a mishap.`,
  },
  {
    classId: ids.wizard,
    spellCasting: true,
    name: "Copying a Spell into the Spellbook",
    description: `When you find a wizard spell of 1st level or higher, you can add it to your ^${itemIds.spellBook}{spellbook}^ if it is of a spell level you can prepare and if you can spare the time to decipher and copy it.\n\nCopying a spell into your ^${itemIds.spellBook}{spellbook}^ involves reproducing the basic form of the spell, then deciphering the unique system of notation used by the wizard who wrote it. You must practice the spell until you understand the sounds or gestures required, then transcribe it into your ^${itemIds.spellBook}{spellbook}^ using your own notation.\n\nFor each level of the spell, the process takes 2 hours and costs 50 ^${itemIds.goldPiece}{gp}^. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine ^${itemIds.ink}{inks}^ you need to record it. Once you have spent this time and money, you can prepare the spell just like your other spells.`,
  },
  ...numberArray(1, 9).map((level) => {
    return {
      classId: ids.wizard,
      spellCasting: true,
      name: `Copy Level ${level} Spell`,
      description: `Copy a level ${level} spell into a spellbook.`,
      hideInSheet: true,
      effect: {
        active: {
          cost: {
            items: {
              defaultItems: [{ item: itemIds.goldPiece, quantity: 50 * level }],
            },
            time: {
              quantity: 2 * level,
              unit: Time.hour,
            },
          },
        },
      },
    };
  }),
  {
    spellCasting: true,
    classId: ids.wizard,
    name: "Replacing the Spellbook",
    description: `You can copy a spell from your own ^${itemIds.spellBook}{spellbook}^ into another book-for example, if you want to make a backup copy of your ^${itemIds.spellBook}{spellbook}^. This is just like copying a new spell into your ^${itemIds.spellBook}{spellbook}^, but faster and easier, since you understand your own notation and already know how to cast the spell. You need spend only 1 hour and 10 ^${itemIds.goldPiece}{gp}^ for each level of the copied spell.\n\nIf you lose your ^${itemIds.spellBook}{spellbook}^, you can use the same procedure to transcribe the spells that you have prepared into a new ^${itemIds.spellBook}{spellbook}^. Filling out the remainder of your ^${itemIds.spellBook}{spellbook}^ requires you to find new spells to do so, as normal. For this reason, many wizards keep backup ^${itemIds.spellBook}{spellbooks}^ in a safe place.`,
  },
  {
    classId: ids.wizard,
    spellCasting: true,
    name: "Ritual Casting",
    description: `You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your ^${itemIds.spellBook}{spellbook}^. You don't need to have the spell prepared.`,
    effect: {
      ritualCasting: {
        spellPrepared: true,
        fromSpellList: true,
      },
    },
  },
  {
    classId: ids.wizard,
    spellCasting: true,
    name: "Learning Spells of 1st Level and Higher",
    description: `Each time you gain a wizard level, you can add two wizard spells of your choice to your ^${itemIds.spellBook}{spellbook}^ for free. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard table. On your adventures, you might find other spells that you can add to your ^${itemIds.spellBook}{spellbook}^.`,
    leveledFeatures: {
      1: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(1),
              },
            ],
          },
        },
      },
      2: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(1),
              },
            ],
          },
        },
      },
      3: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(1),
              },
            ],
          },
        },
      },
      4: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(2),
              },
            ],
          },
        },
      },
      5: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(3),
              },
            ],
          },
        },
      },
      6: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(3),
              },
            ],
          },
        },
      },
      7: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(4),
              },
            ],
          },
        },
      },
      8: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(4),
              },
            ],
          },
        },
      },
      9: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(5),
              },
            ],
          },
        },
      },
      10: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(5),
              },
            ],
          },
        },
      },
      11: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(6),
              },
            ],
          },
        },
      },
      12: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(6),
              },
            ],
          },
        },
      },
      13: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(7),
              },
            ],
          },
        },
      },
      14: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(7),
              },
            ],
          },
        },
      },
      15: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(8),
              },
            ],
          },
        },
      },
      16: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(8),
              },
            ],
          },
        },
      },
      17: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(9),
              },
            ],
          },
        },
      },

      18: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(9),
              },
            ],
          },
        },
      },
      19: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(9),
              },
            ],
          },
        },
      },
      20: {
        availableSpellChoices: {
          gain: {
            choices: [
              {
                numberOfSpells: 2,
                spellIds: getSpellIdsEqualToOrLessThanLevel(9),
              },
            ],
          },
        },
      },
    },
  },

  // Bard
  {
    name: "Cantrips",
    description:
      "You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table.",
    spellCasting: true,

    classId: ids.bard,
    tableColumns: [
      {
        title: "Cantrips Known",
        col: {
          1: 2,
          2: 2,
          3: 2,
          4: 3,
          5: 3,
          6: 3,
          7: 3,
          8: 3,
          9: 3,
          10: 4,
          11: 4,
          12: 4,
          13: 4,
          14: 4,
          15: 4,
          16: 4,
          17: 4,
          18: 4,
          19: 4,
          20: 4,
        },
      },
    ],
  },
  {
    name: "Spells Known",
    description:
      "You know four 1st-level spells of your choice from the bard spell list.\n\nThe Spells Known column of the Bard table shows when you learn more bard spells of your choice. Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.\n\nAdditionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.",
    spellCasting: true,
    classId: ids.bard,
    tableColumns: [
      {
        title: "Spells Known",
        col: {
          1: 4,
          2: 5,
          3: 6,
          4: 7,
          5: 8,
          6: 9,
          7: 10,
          8: 11,
          9: 12,
          10: 14,
          11: 15,
          12: 15,
          13: 16,
          14: 18,
          15: 19,
          16: 19,
          17: 20,
          18: 22,
          19: 22,
          20: 22,
        },
      },
    ],
  },
  {
    name: "Ritual Casting",
    description: `You can cast any bard spell you know as a ritual if that spell has the ritual tag.`,
    spellCasting: true,
    classId: ids.bard,
    effect: {
      ritualCasting: {
        spellPrepared: true,
        fromSpellList: true,
      },
    },
  },
  {
    name: "Bardic Inspiration",
    description: `You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.\n\nOnce within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. \n\nYou can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.\n\nYour Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.`,
    levels: [1, 5, 10, 15],
    classId: ids.bard,
  },
  {
    name: "Jack of All Trades",
    description:
      "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus.",
    levels: [2],
    classId: ids.bard,
  },
  {
    name: "Song of Rest",
    description: `Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.\n\nThe extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.`,
    levels: [2, 9, 13, 17],
    classId: ids.bard,
  },
  {
    name: "Magical Inspiration",
    description:
      "At 2nd level, if a creature has a Bardic Inspiration die from you and casts a spell that restores hit points or deals damage, the creature can roll that die and choose a target affected by the spell. Add the number rolled as a bonus to the hit points regained or the damage dealt. The Bardic Inspiration die is then lost.",
    levels: [2],
    classId: ids.bard,
  },
  {
    name: "Expertise",
    description: `At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.\n\nAt 10th level, you can choose another two skill proficiencies to gain this benefit.`,
    levels: [3, 10],
    classId: ids.bard,
  },
  {
    name: "Bardic Versatility",
    description:
      "Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can do one of the following, representing a change in focus as you use your skills and magic:",
    options: [
      "Replace one cantrip you learned from this Spellcasting feature with another cantrip from the bard spell list.",
      "Replace one of the skills you chose for the Expertise feature with one of your other skill proficiencies that isn't benefiting from Expertise.",
    ],

    levels: [4, 8, 12, 16, 19],
    classId: ids.bard,
  },
  {
    name: "Font of Inspiration",
    description:
      "Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.",
    levels: [5],
    classId: ids.bard,
  },
  {
    name: "Countercharm",
    description:
      "At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).",
    levels: [6],
    classId: ids.bard,
  },
  {
    name: "Magical Secrets",
    description:
      "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.\n\n The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.\n\n You learn two additional spells from any classes at 14th level and again at 18th level. ",
    levels: [10, 14, 18],
    classId: ids.bard,
  },
  {
    name: "Superior Inspiration",
    description:
      "At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.",
    levels: [20],
    classId: ids.bard,
  },
  // Cleric
  {
    name: "Channel Divinity",
    description: `At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.\n\nWhen you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.\n\nSome Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.\n\nBeginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.`,
    levels: [2, 6, 18],
    classId: ids.cleric,
  },
  {
    name: "Turn Undead",
    description: `As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.\n\nA turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.`,
    levels: [2],
    classId: ids.cleric,
  },
  {
    name: "Harness Divine Power ",
    description:
      "At 2nd level, you can expend a use of your Channel Divinity to fuel your spells. As a bonus action, you touch your holy symbol, utter a prayer, and regain one expended spell slot, the level of which can be no higher than half your proficiency bonus (rounded up). The number of times you can use this feature is based on the level you've reached in this class: 2nd level, once; 6th level, twice; and 18th level, thrice. You regain all expended uses when you finish a long rest.",
    levels: [2, 6, 18],
    classId: ids.cleric,
  },
  {
    name: "Cantrip Versatility",
    description:
      "Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can replace one cantrip you learned from this class's Spellcasting feature with another cantrip from the cleric spell list.",
    levels: [4, 8, 12, 16, 19],
    classId: ids.cleric,
  },
  {
    name: "Destroy Undead",
    description:
      "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below (CR 1/2). This increases to CR 1 at 8th level, CR 2 at 11th level, CR 3 at 14th level, and CR 4 at 17th level.",
    levels: [5, 8, 11, 14, 17],
    classId: ids.cleric,
  },
  {
    name: "Blessed Strikes ",
    description: `*Replaces the Divine Strike or Potent Spellcasting feature that you may recieve from your Divine Domain.*\n\nWhen you reach 8th level, you are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn.`,
    levels: [8],
    classId: ids.cleric,
  },
  {
    name: "Divine Intervention",
    description: `Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.\n\nImploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate. If your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest. \n\nAt 20th level, your call for intervention succeeds automatically, no roll required.`,
    levels: [10, 20],
    classId: ids.cleric,
  },
  {
    name: "Cantrips",
    description:
      "At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.",
    levels: [1, 4, 10],
    classId: ids.cleric,
    spellCasting: true,
  },
  {
    name: "Ritual Casting",
    description: `You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.`,
    classId: ids.cleric,
    spellCasting: true,
    effect: {
      ritualCasting: {
        spellPrepared: true,
        fromSpellList: true,
      },
    },
  },
  // Rogue
  {
    name: "Expertise",
    description: `At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with ^${itemIds.thievesTools}{thieves' tools}^. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.\n\n At 6th level, you can choose two more of your proficiencies (in skills or with ^${itemIds.thievesTools}{thieves' tools}^) to gain this benefit.`,
    levels: [1, 6],
    classId: ids.rogue,
  },
  {
    name: "Sneak Attack",
    description:
      "Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.\n\n You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll. \n\nThe amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.",
    classId: ids.rogue,
    levels: [1],
    tableColumns: [
      {
        title: "Sneak Attack",
        col: {
          1: "1d6",
          2: "1d6",
          3: "2d6",
          4: "2d6",
          5: "3d6",
          6: "3d6",
          7: "4d6",
          8: "4d6",
          9: "5d6",
          10: "5d6",
          11: "6d6",
          12: "6d6",
          13: "7d6",
          14: "7d6",
          15: "8d6",
          16: "8d6",
          17: "9d6",
          18: "9d6",
          19: "10d6",
          20: "10d6",
        },
      },
    ],
  },
  {
    name: "Thieves' Cant",
    description:
      "During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.\n\n In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.",
    levels: [1],
    classId: ids.rogue,
  },
  {
    name: "Cunning Action",
    description:
      "Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.",
    levels: [2],
    classId: ids.rogue,
  },
  {
    name: "Steady Aim ",
    description:
      "Starting at 3rd level, you can use your bonus action to carefully aim your ranged weapon. Your next attack with a ranged weapon before the end of your turn ignores half cover and three-quarters cover.",
    levels: [3],
    classId: ids.rogue,
  },
  {
    name: "Uncanny Dodge",
    description:
      "Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.",
    levels: [5],
    classId: ids.rogue,
  },
  {
    name: "Evasion",
    description: `Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an %${spellIds.iceStorm}{ice storm}% spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.`,
    levels: [7],
    classId: ids.rogue,
  },
  {
    name: "Reliable Talent",
    description:
      "By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.",
    levels: [11],
    classId: ids.rogue,
  },
  {
    name: "Blindsense",
    description:
      "Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.",
    levels: [14],
    classId: ids.rogue,
  },
  {
    name: "Slippery Mind",
    description:
      "By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws.",
    levels: [15],
    classId: ids.rogue,
  },
  {
    name: "Elusive",
    description:
      "Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated.",
    levels: [18],
    classId: ids.rogue,
  },
  {
    name: "Stroke of Luck",
    description:
      "At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.",
    levels: [20],
    classId: ids.rogue,
  },
  // Barbarian
  {
    name: "Rage",
    description:
      "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. \n\nIf you are able to cast spells, you can't cast them or concentrate on them while raging.\n\n Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.\n\nOnce you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.\n\n While raging, you have the following benefits if you aren't wearing heavy armor: ",
    levels: [1],
    classId: ids.barbarian,
    options: [
      "You have advantage on Strength checks and Strength saving throws.",
      "When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.",
      "You have resistance to bludgeoning, piercing, and slashing damage.",
    ],
    tableColumns: [
      {
        title: "Rages",
        col: {
          1: 2,
          2: 2,
          3: 3,
          4: 3,
          5: 3,
          6: 4,
          7: 4,
          8: 4,
          9: 4,
          10: 4,
          11: 4,
          12: 5,
          13: 5,
          14: 5,
          15: 5,
          16: 5,
          17: 6,
          18: 6,
          19: 6,
          20: "Unlimited",
        },
      },
      {
        title: "Rage Damage",
        col: {
          1: "+2",
          2: "+2",
          3: "+2",
          4: "+2",
          5: "+2",
          6: "+2",
          7: "+2",
          8: "+2",
          9: "+3",
          10: "+3",
          11: "+3",
          12: "+3",
          13: "+3",
          14: "+3",
          15: "+3",
          16: "+4",
          17: "+4",
          18: "+4",
          19: "+4",
          20: "+4",
        },
      },
    ],
  },
  {
    name: "Unarmored Defense",
    description: `While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a ^${itemIds.shield}{shield}^ and still gain this benefit.`,
    levels: [1],
    classId: ids.barbarian,
  },
  {
    name: "Reckless Attack",
    description:
      "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.",
    levels: [2],
    classId: ids.barbarian,
  },
  {
    name: "Danger Sense",
    description:
      "At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.",
    levels: [2],
    classId: ids.barbarian,
  },
  {
    name: "Primal Knowledge",
    description:
      "When you reach 3rd level and again at 10th level, you gain proficiency in one skill of your choice from the list of skills available to barbarians at 1st level.",
    levels: [3, 10],
    classId: ids.barbarian,
  },
  {
    name: "Fast Movement",
    description:
      "Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor.",
    levels: [5],
    classId: ids.barbarian,
  },
  {
    name: "Feral Instinct",
    description:
      "By 7th level, your instincts are so honed that you have advantage on initiative rolls.\n\nAdditionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.",
    levels: [7],
    classId: ids.barbarian,
  },
  {
    name: "Instinctive Pounce",
    description:
      "At 7th level, as part of the bonus action you take to enter your rage, you can move up to half your speed.",
    levels: [7],
    classId: ids.barbarian,
  },
  {
    name: "Brutal Critical",
    description:
      "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.\n\n This increases to two additional dice at 13th level and three additional dice at 17th level. ",
    levels: [9, 13, 17],
    classId: ids.barbarian,
  },
  {
    name: "Relentless Rage",
    description:
      "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.\n\n Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.",
    levels: [11],
    classId: ids.barbarian,
  },
  {
    name: "Persistent Rage",
    description:
      "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.",
    levels: [15],
    classId: ids.barbarian,
  },
  {
    name: "Indomitable Might",
    description:
      "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.",
    levels: [18],
    classId: ids.barbarian,
  },
  {
    name: "Primal Champion",
    description:
      "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.",
    levels: [20],
    classId: ids.barbarian,
  },
  // Druid
  {
    name: "Cantrips",
    description:
      "At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.",
    spellCasting: true,
    classId: ids.druid,
    tableColumns: [
      {
        title: "Cantrips Known",
        col: {
          1: 2,
          2: 2,
          3: 2,
          4: 3,
          5: 3,
          6: 3,
          7: 3,
          8: 3,
          9: 3,
          10: 4,
          11: 4,
          12: 4,
          13: 4,
          14: 4,
          15: 4,
          16: 4,
          17: 4,
          18: 4,
          19: 4,
          20: 4,
        },
      },
    ],
  },
  {
    name: "Druidic",
    description:
      "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic.",
    levels: [1],
    classId: ids.druid,
  },
  {
    name: "Ritual Casting",
    description: `You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.`,
    spellCasting: true,
    classId: ids.druid,
    effect: {
      ritualCasting: {
        spellPrepared: true,
        fromSpellList: true,
      },
    },
  },
  {
    name: "Wild Shape",
    description:
      "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.\n\nYour druid level determines the beasts you can transform into according to the Beast Shapes Table.\n\n You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die. \n\nWhile you are transformed, the following rules apply:",
    options: [
      "Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
      "When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form, For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
      "You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as Call Lightning, that you've already cast.",
      "You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
      "You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form.",
    ],
    levels: [2, 4, 8],
    classId: ids.druid,
    extendedTable: [
      {
        "Beast Shapes": {
          headers: ["Level", "Max CR", "Limitations", "Example"],
          data: [
            {
              Level: "2nd",
              "Max CR": "1/4",
              Limitations: "No flying or swimming speed",
              Example: "Wolf",
            },
            {
              Level: "4th",
              "Max CR": "1/2",
              Limitations: "No flying speed",
              Example: "Crocodile",
            },
            {
              Level: "8th",
              "Max CR": "1",
              Limitations: "",
              Example: "Giant Eagle",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Wild Companion",
    description:
      "At 2nd level, you gain the ability to summon a spirit that assumes an animal form: as an action, you can expend a use of your Wild Shape feature to cast the Find Familiar spell, without material components.\n\n When you cast the spell in this way, the familiar is a fey instead of a beast, and the familiar disappears after a number of hours equal to half your druid level.",
    levels: [2],
    classId: ids.druid,
  },
  {
    name: "Cantrip Versatility",
    description:
      "Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can replace one cantrip you learned from this class's Spellcasting feature with another cantrip from the druid spell list.",
    levels: [4, 8, 12, 16, 19],
    classId: ids.druid,
  },

  {
    name: "Timeless Body",
    description:
      "Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.",
    levels: [18],
    classId: ids.druid,
  },
  {
    name: "Beast Spells",
    description:
      "Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components.",
    levels: [18],
    classId: ids.druid,
  },
  {
    name: "Archdruid",
    description:
      "At 20th level, you can use your Wild Shape an unlimited number of times.\n\n Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape.",
    levels: [20],
    classId: ids.druid,
  },
  // Monk
  {
    name: "Unarmored Defense",
    description: `Beginning at 1st level, while you are wearing no armor and not wielding a ^${itemIds.shield}{shield}^, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.`,
    levels: [1],
    classId: ids.monk,
  },
  {
    name: "Martial Arts",
    description: `At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are ^${itemIds.shortsword}{shortswords}^ and any simple melee weapons that don't have the two-handed or heavy property.\n\nCertain monasteries use specialized forms of the monk weapons. For example, you might use a ^${itemIds.club}{club}^ that is two lengths of wood connected by a short chain (called a nunchaku) or a ^${itemIds.sickle}{sickle}^ with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon on the Weapons page.\n\nYou gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a ^${itemIds.shield}{shield}^:`,
    options: [
      "You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.",
      "You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.",
      "When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.",
    ],
    levels: [1],
    classId: ids.monk,
    tableColumns: [
      {
        title: "Martial Arts",
        col: {
          1: "1d4",
          2: "1d4",
          3: "1d4",
          4: "1d4",
          5: "1d6",
          6: "1d6",
          7: "1d6",
          8: "1d6",
          9: "1d8",
          10: "1d8",
          11: "1d8",
          12: "1d8",
          13: "1d8",
          14: "1d8",
          15: "1d8",
          16: "1d8",
          17: "1d10",
          18: "1d10",
          19: "1d10",
          20: "1d10",
        },
      },
    ],
  },
  {
    name: "Ki",
    description:
      "Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.\n\nYou can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.\n\nWhen you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.\n\nSome of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:\n\n**Ki save DC** = 8 + your proficiency bonus + your Wisdom modifier.",
    options: [
      "**Flurry of Blows.** Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.",
      "**Patient Defense.** You can spend 1 ki point to take the Dodge action as a bonus action on your turn.",
      "**Step of the Wind.** You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.",
    ],
    levels: [2],
    classId: ids.monk,
    tableColumns: [
      {
        title: "Ki Points",
        col: {
          1: "-",
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          10: 10,
          11: 11,
          12: 12,
          13: 13,
          14: 14,
          15: 15,
          16: 16,
          17: 17,
          18: 18,
          19: 19,
          20: 20,
        },
      },
    ],
  },
  {
    name: "Unarmored Movement",
    description: `Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a ^${itemIds.shield}{shield}^. This bonus increases when you reach certain monk levels, as shown in the Monk table.\n\n At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.`,
    levels: [2, 9],
    classId: ids.monk,
    tableColumns: [
      {
        title: "Unarmored Movement",
        col: {
          1: "-",
          2: "+10 ft.",
          3: "+10 ft.",
          4: "+10 ft.",
          5: "+10 ft.",
          6: "+15 ft.",
          7: "+15 ft.",
          8: "+15 ft.",
          9: "+15 ft.",
          10: "+20 ft.",
          11: "+20 ft.",
          12: "+20 ft.",
          13: "+20 ft.",
          14: "+25 ft.",
          15: "+25 ft.",
          16: "+25 ft.",
          17: "+25 ft.",
          18: "+30 ft.",
          19: "+30 ft.",
          20: "+30 ft.",
        },
      },
    ],
  },
  {
    name: "Dedicated Weapon",
    description:
      "Also at 2nd level, you train yourself to use a variety of weapons as monk weapons, not just simple melee weapons and shortswords. Whenever you finish a short or long rest, you can touch one weapon, focus your ki on it, and then count that weapon as a monk weapon until you use this feature again.\n\n The chosen must meet these three criteria: ",
    options: [
      "The weapon must be a simple or martial weapon.",
      "The weapon must lack the heavy and special properties.",
      "You must be proficient with the weapon.",
    ],
    levels: [2],
    classId: ids.monk,
  },
  {
    name: "Deflect Missiles",
    description:
      "Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.\n\n If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with a range of 20/60 using the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack.",
    levels: [3],
    classId: ids.monk,
  },
  {
    name: "Ki-Fueled Attack",
    description:
      "Also at 3rd level, if you spend 1 ki point or more as part of your action on your turn, you can make one attack with an unarmed strike or a monk weapon as a bonus action before the end of the turn.",
    levels: [3],
    classId: ids.monk,
  },
  {
    name: "Slow Fall",
    description:
      "Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.",
    levels: [4],
    classId: ids.monk,
  },
  {
    name: "Quickened Healing",
    description:
      "At 4th level, you can use your action to spend 2 ki points to touch a creature and restore a number of hit points equal to a roll of your Martial Arts die + your Wisdom modifier.",
    levels: [4],
    classId: ids.monk,
  },
  {
    name: "Extra Attack",
    description:
      "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
    levels: [5],
    classId: ids.monk,
  },
  {
    name: "Stunning Strike",
    description:
      "Starting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.",
    levels: [5],
    classId: ids.monk,
  },
  {
    name: "Focused Aim",
    description:
      "Also at 5th level, when you miss with an attack roll, you can spend 1 to 3 ki points to increase your attack roll by 2 for each of these ki points you spend, potentially turning the miss into a hit.",
    levels: [5],
    classId: ids.monk,
  },
  {
    name: "Ki-Empowered Strikes",
    description:
      "Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
    levels: [6],
    classId: ids.monk,
  },
  {
    name: "Evasion",
    description: `At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a %${spellIds.fireball}{fireball}% spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.`,
    levels: [7],
    classId: ids.monk,
  },
  {
    name: "Stillness of Mind",
    description:
      "Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened.",
    levels: [7],
    classId: ids.monk,
  },
  {
    name: "Purity of Body",
    description:
      "At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.",
    levels: [10],
    classId: ids.monk,
  },
  {
    name: "Tongue of the Sun and Moon",
    description:
      "Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.",
    levels: [13],
    classId: ids.monk,
  },
  {
    name: "Diamond Soul",
    description:
      "Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.\n\n Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.",
    levels: [14],
    classId: ids.monk,
  },
  {
    name: "Timeless Body",
    description:
      "At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water.",
    levels: [15],
    classId: ids.monk,
  },
  {
    name: "Empty Body",
    description:
      "Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.\n\n Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can't take any other creatures with you.",
    levels: [18],
    classId: ids.monk,
  },
  {
    name: "Perfect Self",
    description:
      "At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points.",
    levels: [20],
    classId: ids.monk,
  },
  // Paladin
  {
    name: "Divine Sense",
    description:
      "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, within a 60ft radius, you get the benefits listed below. You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.",
    options: [
      "You know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover.",
      "You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity.",
      "You also detect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell.",
    ],
    levels: [1],
    classId: ids.paladin,
  },
  {
    name: "Lay on Hands",
    description:
      "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.\n\nAs an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.\n\nAlternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.\n\nThis feature has no effect on undead and constructs.",
    levels: [1],
    classId: ids.paladin,
  },
  {
    name: "Fighting Style",
    description:
      "At 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
    extendedTable: [
      {
        "Fighting Styles": {
          headers: ["Fighting Style", "Description"],
          data: [
            {
              "Fighting Style": "Blessed Warrior",
              Description:
                "You learn two cantrips of your choice from the cleric spell list. They count as paladin spells for you, and Charisma is your spellcasting ability for them. Whenever you gain a level in this class, you can replace one of these cantrips with another cantrip from the cleric spell list.",
            },
            {
              "Fighting Style": "Blind Fighting",
              Description:
                "You have blindsight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.",
            },
            {
              "Fighting Style": "Defense",
              Description:
                "While you are wearing armor, you gain a +1 bonus to AC.",
            },
            {
              "Fighting Style": "Dueling",
              Description:
                "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
            },
            {
              "Fighting Style": "Great Weapon Fighting",
              Description:
                "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.",
            },
            {
              "Fighting Style": "Interception",
              Description:
                "When a creature you can see hits a target, other than you, within 5 feet of you with an attack, you can use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to a minimum of 0 damage). You must be wielding a shield or a simple or martial weapon to use this reaction.",
            },
            {
              "Fighting Style": "Protection",
              Description:
                "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.",
            },
            {
              "Fighting Style": "Close Quarters Shooter (UA)",
              Description:
                "When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks.",
            },
            {
              "Fighting Style": "Mariner (UA)",
              Description:
                "As long as you are not wearing heavy armor or using a shield, you have a swimming speed and a climbing speed equal to your normal speed, and you gain a +1 bonus to armor class.",
            },
            {
              "Fighting Style": "Thrown-Weapon Fighting (UA)",
              Description:
                "You can draw a weapon that has the thrown property as part of the attack you make with the weapon. In addition, when you hit with a ranged attack using a thrown weapon, you gain a +1 bonus to the damage roll.",
            },
            {
              "Fighting Style": "Tunnel Fighter (UA)",
              Description:
                "As a bonus action, you can enter a defensive stance that lasts until the start of your next turn. While in your defensive stance, you can make opportunity attacks without using your reaction, and you can use your reaction to make a melee attack against a creature that moves more than 5 feet while within your reach.",
            },
            {
              "Fighting Style": "Unarmed Fighting",
              Description:
                "Your unarmed strikes can deal bludgeoning damage equal to 1d6 + your Strength modifier. If you strike with two free hands, the d6 becomes a d8. When you successfully start a grapple, you can deal 1d4 bludgeoning damage to the grappled creature. Until the grapple ends, you can also deal this damage to the creature whenever you hit it with a melee attack.",
            },
          ],
        },
      },
    ],
    levels: [2],
    classId: ids.paladin,
  },
  {
    name: "Divine Smite",
    description:
      "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend.",
    levels: [2],
    classId: ids.paladin,
  },
  {
    name: "Divine Health",
    description:
      "By 3rd level, the divine magic flowing through you makes you immune to disease.",
    levels: [3],
    classId: ids.paladin,
  },
  {
    name: "Harness Divine Power",
    description:
      "Also at 3rd level, you can expend a use of your Channel Divinity to fuel your spells. As a bonus action, you touch your holy symbol, utter a prayer, and regain one expended spell slot, the level of which can be no higher than half your proficiency bonus (rounded up). The number of times you can use this feature is based on the level you've reached in this class: 3rd level, once; 7th level, twice; and 15th level, thrice. You regain all expended uses when you finish a long rest.",
    levels: [3, 7, 15],
    classId: ids.paladin,
  },
  {
    name: "Extra Attack",
    description:
      "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
    levels: [5],
    classId: ids.paladin,
  },
  {
    name: "Aura of Protection",
    description:
      "Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus. At 18th level, the range of this aura increases to 30 feet.",
    levels: [6, 18],
    classId: ids.paladin,
  },
  {
    name: "Aura of Courage",
    description:
      "Starting at 10th level, you and friendly creatures within 10 feet of you can't be frightened while you are conscious. At 18th level, the range of this aura increases to 30 feet.",
    levels: [10, 18],
    classId: ids.paladin,
  },
  {
    name: "Improved Divine Smite",
    description:
      "By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage.",
    levels: [11],
    classId: ids.paladin,
  },
  {
    name: "Cleansing Touch",
    description:
      "Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest.",
    levels: [14],
    classId: ids.paladin,
  },
  // Sorcerer
  {
    name: "Cantrips",
    description:
      "At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table.",
    spellCasting: true,
    classId: ids.sorcerer,
    effect: {
      ritualCasting: {
        spellPrepared: true,
        fromSpellList: true,
      },
    },
    tableColumns: [
      {
        title: "Cantrips Known",
        col: {
          1: 4,
          2: 4,
          3: 4,
          4: 5,
          5: 5,
          6: 5,
          7: 5,
          8: 5,
          9: 5,
          10: 6,
          11: 6,
          12: 6,
          13: 6,
          14: 6,
          15: 6,
          16: 6,
          17: 6,
          18: 6,
          19: 6,
          20: 6,
        },
      },
    ],
  },
  {
    name: "Spells Known",
    description:
      "You know two 1st-level spells of your choice from the sorcerer spell list.\n\nThe Spells Known column of the Sorcerer table shows when you learn more sorcerer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.\n\nAdditionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.",
    spellCasting: true,
    classId: ids.sorcerer,
    tableColumns: [
      {
        title: "Spells Known",
        col: {
          1: 2,
          2: 3,
          3: 4,
          4: 5,
          5: 6,
          6: 7,
          7: 8,
          8: 9,
          9: 10,
          10: 11,
          11: 12,
          12: 12,
          13: 13,
          14: 13,
          15: 14,
          16: 14,
          17: 15,
          18: 15,
          19: 15,
          20: 15,
        },
      },
    ],
  },
  {
    name: "Font of Magic",
    description:
      "At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.",
    options: [
      "**Sorcery Points.** You have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest.",
      "**Create Spell Slots.** You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th. Any spell slot you create with this feature vanishes when you finish a long rest.",
      "**Converting Spell Slots to Sorcery points.** As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level.",
    ],
    levels: [2],
    classId: ids.sorcerer,
    extendedTable: [
      {
        "Creating Spell Slots": {
          headersLength: [50, 50],
          headers: ["Spell Slot Level", "Sorcery Point Cost"],
          data: [
            {
              "Spell Slot Level": "1st",
              "Sorcery Point Cost": "2",
            },
            {
              "Spell Slot Level": "2nd",
              "Sorcery Point Cost": "3",
            },
            {
              "Spell Slot Level": "3rd",
              "Sorcery Point Cost": "5",
            },
            {
              "Spell Slot Level": "4th",
              "Sorcery Point Cost": "6",
            },
            {
              "Spell Slot Level": "5th",
              "Sorcery Point Cost": "7",
            },
          ],
        },
      },
    ],
    tableColumns: [
      {
        title: "Sorcery Points",
        col: {
          1: "-",
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          10: 10,
          11: 11,
          12: 12,
          13: 13,
          14: 14,
          15: 15,
          16: 16,
          17: 17,
          18: 18,
          19: 19,
          20: 20,
        },
      },
    ],
  },
  {
    name: "Metamagic",
    description:
      "At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.",
    extendedTable: [
      {
        "": {
          headers: ["Metamagic", "Description"],
          data: [
            {
              Metamagic: "Careful Spell",
              Description:
                "When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell.",
            },
            {
              Metamagic: "Distant Spell",
              Description:
                "When you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell. When you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet.",
            },
            {
              Metamagic: "Empowered Spell",
              Description:
                "When you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls. You can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell.",
            },
            {
              Metamagic: "Extended Spell",
              Description:
                "When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours.",
            },
            {
              Metamagic: "Heightened Spell",
              Description:
                "When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell.",
            },
            {
              Metamagic: "Quickened Spell",
              Description:
                "When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting.",
            },
            {
              Metamagic: "Seeking Spell",
              Description:
                "If you make an attack roll for a spell and miss, you can spend 2 sorcerer points to reroll the d20, and you must use the new roll. You can use Seeking Spell even if you have already used a different Metamagic option during the casting of the spell.",
            },
            {
              Metamagic: "Seeking Spell (UA)",
              Description:
                "When you cast a spell that requires you to make a spell attack roll or that forces a target to make a Dexterity saving throw, you can spend 1 sorcery point to ignore the effects of half- and three-quarters cover against targets of the spell.",
            },
            {
              Metamagic: "Subtle Spell",
              Description:
                "When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components.",
            },
            {
              Metamagic: "Transmuted Spell",
              Description:
                "When you cast a spell that deals a type of damage from the following list, you can spend 1 sorcery point to change that damage type to one of the other listed types: acid, cold, fire, lightning, poison, thunder.",
            },
            {
              Metamagic: "Twinned Spell",
              Description:
                "When you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip). To be eligible, a spell must be incapable of targeting more than one creature at the spell's current level. ",
            },
          ],
        },
      },
    ],
    levels: [3, 10, 17],
    classId: ids.sorcerer,
  },
  {
    name: "Sorcerous Versatility (Optional)",
    description:
      "When you reach a level in this class that grants the Ability Score Improvement feature, you can do one of the following, representing the magic within you flowing in new ways:",
    options: [
      "Replace one of the options you chose for the Metamagic feature with a different Metamagic option available to you.",
      "Replace one cantrip you learned from this class' spellcasting feature with another cantrip from the sorcerer spell list.",
    ],
    levels: [4, 8, 12, 16, 19],
    classId: ids.sorcerer,
  },
  {
    name: "Magical Guidance (Optional)",
    description:
      "When you reach 5th level, you can tap into your inner wellspring of magic to try and conjure success from failure. When you make an ability check that fails, you can spend 1 sorcery point to reroll the d20, and you must use the new roll, potentially turning the failure into a success.",
    levels: [5],
    classId: ids.sorcerer,
  },
  {
    name: "Sorcerous Restoration",
    description:
      "At 20th level, you regain 4 expended sorcery points whenever you finish a short rest.",
    levels: [20],
    classId: ids.sorcerer,
  },
  // Warlock
  {
    name: "Cantrips",
    description:
      "You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.",
    spellCasting: true,
    classId: ids.warlock,
    tableColumns: [
      {
        title: "Cantrips Known",
        col: {
          1: 2,
          2: 2,
          3: 2,
          4: 3,
          5: 3,
          6: 3,
          7: 3,
          8: 3,
          9: 3,
          10: 4,
          11: 4,
          12: 4,
          13: 4,
          14: 4,
          15: 4,
          16: 4,
          17: 4,
          18: 4,
          19: 4,
          20: 4,
        },
      },
    ],
  },
  {
    name: "Spells Known",
    description:
      "At 1st level, you know two 1st-level spells of your choice from the warlock spell list.\n\nThe Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level or higher. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.\n\nAdditionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.",
    spellCasting: true,
    classId: ids.warlock,
    tableColumns: [
      {
        title: "Spells Known",
        col: {
          1: 2,
          2: 3,
          3: 4,
          4: 5,
          5: 6,
          6: 7,
          7: 8,
          8: 9,
          9: 10,
          10: 10,
          11: 11,
          12: 11,
          13: 12,
          14: 12,
          15: 13,
          16: 13,
          17: 14,
          18: 14,
          19: 15,
          20: 15,
        },
      },
      {
        title: "Slot Level",
        col: {
          1: "1st",
          2: "1st",
          3: "2nd",
          4: "2nd",
          5: "3rd",
          6: "3rd",
          7: "4th",
          8: "4th",
          9: "5th",
          10: "5th",
          11: "5th",
          12: "5th",
          13: "5th",
          14: "5th",
          15: "5th",
          16: "5th",
          17: "5th",
          18: "5th",
          19: "5th",
          20: "5th",
        },
      },
    ],
  },
  {
    name: "Eldritch Invocations",
    description:
      "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability. At 2nd level, you gain two eldritch invocations of your choice. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table. A level prerequisite refers to your level in this class. Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level.",
    levels: [2],
    classId: ids.warlock,
    tableColumns: [
      {
        title: "Invocations Known",
        col: {
          1: "-",
          2: 2,
          3: 2,
          4: 2,
          5: 3,
          6: 3,
          7: 4,
          8: 4,
          9: 5,
          10: 5,
          11: 5,
          12: 6,
          13: 6,
          14: 6,
          15: 7,
          16: 7,
          17: 7,
          18: 8,
          19: 8,
          20: 8,
        },
      },
    ],
  },
  {
    name: "Pact Boon",
    description:
      "At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice.",
    levels: [3],
    classId: ids.warlock,
  },
  {
    name: "Eldritch Versatility",
    description:
      "When you reach a level in this class that grants the Ability Score Improvement feature, you can do one of the following, representing the magic within you flowing in new ways: Replace one cantrip you learned from this class's Pact Magic feature with another cantrip from the warlock spell list OR Replace the option you chose for the Pact Boon feature with one of that feature's other options OR If you're 12th level or higher, replace one spell from your Mystic Arcanum feature with another warlock spell of the same level. If this change makes you ineligible for any of your Eldritch Invocations, you must also replace them now, choosing invocations for which you qualify.",
    levels: [4, 8, 12, 16, 19],
    classId: ids.warlock,
  },
  {
    name: "Mystic Arcanum",
    description:
      "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum. You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again. At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th-level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest.",
    levels: [11, 13, 15, 17],
    classId: ids.warlock,
  },
  {
    name: "Eldritch Master",
    description:
      "At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again.",
    levels: [20],
    classId: ids.warlock,
  },
  //Ranger
  {
    name: "Spells Known",
    description:
      "You know two 1st-level spells of your choice from the ranger spell list.\n\nThe Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.\n\nAdditionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots.",
    classId: ids.ranger,
    spellCasting: true,
    tableColumns: [
      {
        title: "Spells Known",
        col: {
          1: "-",
          2: 2,
          3: 3,
          4: 4,
          5: 4,
          6: 4,
          7: 5,
          8: 5,
          9: 6,
          10: 6,
          11: 7,
          12: 7,
          13: 8,
          14: 8,
          15: 9,
          16: 9,
          17: 10,
          18: 10,
          19: 11,
          20: 11,
        },
      },
    ],
  },
  {
    name: "Favored Enemy",
    description:
      "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.\n\nChoose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.\n\nYou have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.\n\nWhen you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.\n\nYou choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.",
    levels: [1, 6, 14],
    classId: ids.ranger,
  },
  {
    name: "Favored Foe",
    description:
      "This 1st-level feature replaces the Favored Enemy feature and works with the Foe Slayer feature. You gain no benefit from the replaced feature and don't qualify for anything in the game that requires it.\n\n When you hit a creature with an attack roll, you can call on your mystical bond with nature to mark the target as your favored enemy for 1 minute or until you lose your concentration (as if you were concentrating on a spell). \n\nThe first time on each of your turns that you hit the favored enemy and deal damage to it, including when you mark it, you increase that damage by 1d4.\n\n You can use this feature to mark a favored enemy a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n\n This feature's extra damage increases when you reach certain levels in this class: to 1d6 at 6th level and to 1d8 at 14th level.",
    levels: [1, 6, 14],
    classId: ids.ranger,
  },
  {
    name: "Natural Explorer",
    description:
      "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.\n\n While traveling for an hour or more in your favored terrain, you gain the benefits listed below.\n\nYou choose additional favored terrain types at 6th and 10th level.",
    options: [
      "Difficult terrain doesn't slow your group's travel.",
      "Your group can't become lost except by magical means.",
      "Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
      "If you are traveling alone, you can move stealthily at a normal pace.",
      "When you forage, you find twice as much food as you normally would.",
      "While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.",
    ],

    levels: [1, 6, 10],
    classId: ids.ranger,
  },
  {
    name: "Deft Explorer (Optional)",
    description:
      "This 1st-level feature replaces the Natural Explorer feature. You gain no benefit from the replaced feature and don't qualify for anything in the game that requires it.\n\nIf you take the Deft Explorer Feature, you gain the following benefits at the specified levels:",
    extendedTable: [
      {
        "": {
          headers: ["Level", "Deft Explorer Feature", "Description"],
          headersLength: [10, 10, 80],
          data: [
            {
              Level: "1",
              "Deft Explorer Feature": "Canny",
              Description:
                "Choose one of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make using the chosen skill.\n\nYou can also speak, read, and write 2 additional languages of your choice.",
            },
            {
              Level: "6",
              "Deft Explorer Feature": "Roving",
              Description:
                "Your walking speed increases by 5 feet, and you gain a climbing speed and a swimming speed equal to your walking speed.",
            },
            {
              Level: "10",
              "Deft Explorer Feature": "Tireless",
              Description:
                "As an action, you can give yourself a number of temporary hit points equal to 1d8 + your Wisdom modifier (minimum of 1 temporary hit point). You can use this action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n\nIn addition, whenever you finish a short rest, your exhaustion level, if any, is decreased by 1.",
            },
          ],
        },
      },
    ],
    levels: [1, 6, 10],
    classId: ids.ranger,
  },
  {
    name: "Fighting Style",
    description:
      "At 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
    levels: [2],
    classId: ids.ranger,
    extendedTable: [
      {
        "Fighting Styles": {
          headers: ["Fighting Style", "Description"],
          data: [
            {
              "Fighting Style": "Archery",
              Description:
                "You gain a +2 bonus to attack rolls you make with ranged weapons.",
            },
            {
              "Fighting Style": "Blind Fighting",
              Description:
                "You have blind sight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.",
            },
            {
              "Fighting Style": "Defense",
              Description:
                "While you are wearing armor, you gain a +1 bonus to AC.",
            },
            {
              "Fighting Style": "Druidic Warrior",
              Description:
                "You learn two cantrips of your choice from the Druid spell list. They count as ranger spells for you, and Wisdom is your spellcasting ability for them. Whenever you gain a level in this class, you can replace one of these cantrips with another cantrip from the Druid spell list.",
            },
            {
              "Fighting Style": "Dueling",
              Description:
                "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
            },
            {
              "Fighting Style": "Thrown Weapon Fighting",
              Description:
                "You can draw a weapon that has the thrown property as part of the attack you make with the weapon. In addition, when you hit with a ranged attack using a thrown weapon, you gain a +2 bonus to the damage roll.",
            },
            {
              "Fighting Style": "Two-Weapon Fighting",
              Description:
                "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.",
            },
            {
              "Fighting Style": "Close Quarters Shooter (UA)",
              Description:
                "When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks.",
            },
            {
              "Fighting Style": "Interception (UA)",
              Description: `When a creature you can see hits a target that is within 5 feet of you with an attack, you can use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to a minimum of 0 damage). You must be wielding a ^${itemIds.shield}{shield}^ or a simple or martial weapon to use this reaction.`,
            },
            {
              "Fighting Style": "Mariner (UA)",
              Description: `As long as you are not wearing heavy armor or using a ^${itemIds.shield}{shield}^, you have a swimming speed and a climbing speed equal to your normal speed, and you gain a +1 bonus to armor class.`,
            },
            {
              "Fighting Style": "Tunnel Fighter (UA)",
              Description:
                "As a bonus action, you can enter a defensive stance that lasts until the start of your next turn. While in your defensive stance, you can make opportunity attacks without using your reaction, and you can use your reaction to make a melee attack against a creature that moves more than 5 feet while within your reach.",
            },
            {
              "Fighting Style": "Unarmed Fighting",
              Description:
                "Your unarmed strikes can deal bludgeoning damage equal to 1d6 + your Strength modifier. If you strike with two free hands, the d6 becomes a d8. \n\n When you successfully start a grapple, you can deal 1d4 bludgeoning damage to the grappled creature. Until the grapple ends, you can also deal this damage to the creature whenever you hit it with a melee attack.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Primeval Awareness",
    description:
      "Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn’t reveal the creatures’ location or number.",
    levels: [3],
    classId: ids.ranger,
  },
  {
    name: "Primal Awareness",
    description:
      "This 3rd-level feature replaces the Primeval Awareness feature. You gain no benefit from the replaced feature and don't qualify for anything in the game that requires it.\n\n You can focus your awareness through the interconnections of nature: you learn additional spells when you reach certain levels in this class if you don't already know them, as shown in the Primal Awareness Spells table. These spells don't count against the number of ranger spells you know. \n\nYou can cast each of these spells once without expending a spell slot. Once you cast a spell in this way, you can't do so again until you finish a long rest.",
    extendedTable: [
      {
        "Primal Awareness Spells": {
          headers: ["Ranger Level", "Spell"],
          links: [
            spellIds.speakWithAnimals,
            spellIds.beastSense,
            spellIds.speakWithPlants,
            spellIds.locateCreature,
            spellIds.communeWithNature,
          ].map((id) => generateSpellLink(id)),
          data: [
            {
              "Ranger Level": "3rd",
              Spell: `%${spellIds.speakWithAnimals}{Speak With Animals}%`,
            },
            {
              "Ranger Level": "5th",
              Spell: `%${spellIds.beastSense}{Beast Sense}%`,
            },
            {
              "Ranger Level": "9th",
              Spell: `%${spellIds.speakWithPlants}{Speak With Plants}%`,
            },
            {
              "Ranger Level": "13th",
              Spell: `%${spellIds.locateCreature}{Locate Creature}%`,
            },
            {
              "Ranger Level": "17th",
              Spell: `%${spellIds.communeWithNature}{Commune With Nature}%`,
            },
          ],
        },
      },
    ],
    levels: [3],
    classId: ids.ranger,
  },
  {
    name: "Martial Versatility",
    description:
      "Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can replace a fighting style you know with another fighting style available to rangers. This replacement represents a shift of focus in your martial practice.",
    levels: [4, 8, 12, 16, 19],
    classId: ids.ranger,
  },
  {
    name: "Extra Attack",
    description:
      "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
    levels: [5],
    classId: ids.ranger,
  },
  {
    name: "Land's Stride",
    description: `Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.\n\n In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such as those created by the %${spellIds.entangle}{Entangle}% spell.`,
    levels: [8],
    classId: ids.ranger,
  },
  {
    name: "Hide in Plain Sight",
    description:
      "Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.\n\n Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.",
    levels: [10],
    classId: ids.ranger,
  },
  {
    name: "Nature's Veil",
    description:
      "This 10th-level feature replaces the Hide in Plain Sight feature. You gain no benefit from the replaced feature and don't qualify for anything in the game that requires it. \n\nYou draw on the powers of nature to hide yourself from view briefly. As a bonus action, you can magically become invisible, along with any equipment you are wearing or carrying, until the start of your next turn.\n\n You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    levels: [10],
    classId: ids.ranger,
  },
  {
    name: "Vanish",
    description:
      "Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail.",
    levels: [14],
    classId: ids.ranger,
  },
  {
    name: "Feral Senses",
    description:
      "At 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it. \n\nYou are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't blinded or deafened.",
    levels: [18],
    classId: ids.ranger,
  },
  {
    name: "Foe Slayer",
    description:
      "At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.",
    levels: [20],
    classId: ids.ranger,
  },
  //Artificer
  {
    classId: ids.artificer,
    name: "Cantrips",
    description:
      "At 1st level, you know two cantrips of your choice from the artificer spell list. At higher levels, you learn additional artificer cantrips of your choice, as shown in the Cantrips Known column of the Artificer table.\n\nWhen you gain a level in this class, you can replace one of the artificer cantrips you know with another cantrip from the artificer spell list.",
    spellCasting: true,
    tableColumns: [
      {
        title: "Cantrips Known",
        col: {
          1: 2,
          2: 2,
          3: 2,
          4: 2,
          5: 2,
          6: 2,
          7: 2,
          8: 2,
          9: 2,
          10: 3,
          11: 3,
          12: 3,
          13: 3,
          14: 4,
          15: 4,
          16: 4,
          17: 4,
          18: 4,
          19: 4,
          20: 4,
        },
      },
    ],
  },
  {
    classId: ids.artificer,
    name: "Ritual Casting",
    description:
      "You can cast an artificer spell as a ritual if that spell has the ritual tag and you have the spell prepared.",
    levels: [1],
    spellCasting: true,
    effect: {
      ritualCasting: {
        spellPrepared: true,
        fromSpellList: true,
      },
    },
  },
  {
    classId: ids.artificer,
    name: "Magical Tinkering",
    levels: [1],
    description: `At 1st level, you've learned how to invest a spark of magic into mundane objects. To use this ability, you must have ^${itemIds.thievesTools}{thieves' tools}^ or artisan's tools in hand. You then touch a Tiny nonmagical object as an action and give it a property from the *Tinkering Options Table* below.\n\nThe chosen property lasts indefinitely. As an action, you can touch the object and end the property early.\n\nYou can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies.`,
    extendedTable: [
      {
        "Tinkering Options": {
          headers: ["Description"],
          data: [
            {
              Description:
                "The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.",
            },
            {
              Description:
                "Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long.",
            },
            {
              Description:
                "A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like.",
            },
          ],
        },
      },
    ],
  },
  {
    classId: ids.artificer,
    levels: [2],
    name: "Infuse Item",
    description:
      "At 2nd level, you've gained the ability to imbue mundane items with certain magical infusions, turning those objects into magic items.\n\n**Infusions Known**\n\nWhen you gain this feature, pick four artificer infusions to learn, chosen from the table below. You learn additional infusions of your choice when you reach certain levels in this class, as shown in the Infusions Known column of the Artificer table.\n\nWhenever you gain a level in this class, you can replace one of the artificer infusions you learned with a new one.\n\n**Infusing an Item**\n\nWhenever you finish a long rest, you can touch a nonmagical object and imbue it with one of your artificer infusions, turning it into a magic item. An infusion works on only certain kinds of objects, as specified in the infusion's description. If the item requires attunement, you can attune yourself to it the instant you infuse the item. If you decide to attune to the item later, you must do so using the normal process for attunement (see the attunement rules in the Dungeon Master's Guide).\n\nYour infusion remains in an item indefinitely, but when you die, the infusion vanishes after a number of days equal to your Intelligence modifier (minimum of 1 day). The infusion also vanishes if you replace your knowledge of the infusion.\n\nYou can infuse more than one nonmagical object at the end of a long rest; the maximum number of objects appears in the Infused Items column of the Artificer table. You must touch each of the objects, and each of your infusions can be in only one object at a time. Moreover, no object can bear more than one of your infusions at a time. If you try to exceed your maximum number of infusions, the oldest infusion ends, and then the new infusion applies.\n\nIf an infusion ends on an item that contains other things, like a bag of holding, its contents harmlessly appear in and around its space.",
    tableColumns: [
      {
        title: "Infusions Known",
        col: {
          1: "-",
          2: 4,
          3: 4,
          4: 4,
          5: 4,
          6: 6,
          7: 6,
          8: 6,
          9: 6,
          10: 8,
          11: 8,
          12: 8,
          13: 8,
          14: 10,
          15: 10,
          16: 10,
          17: 10,
          18: 12,
          19: 12,
          20: 12,
        },
      },
      {
        title: "Infused Items",
        col: {
          1: "-",
          2: 2,
          3: 2,
          4: 2,
          5: 2,
          6: 3,
          7: 3,
          8: 3,
          9: 3,
          10: 4,
          11: 4,
          12: 4,
          13: 4,
          14: 5,
          15: 5,
          16: 5,
          17: 5,
          18: 6,
          19: 6,
          20: 6,
        },
      },
    ],
    extendedTable: [
      {
        "Artificer Infusions": {
          headers: ["Infusion", "Description", "Item", "Prerequisites"],
          headersLength: [15, 60, 15, 10],
          data: [
            {
              Infusion: "Arcane Propulsion Armor",
              Description:
                "The wearer of this armor gets the following benefits.\n\n (1) The wearer's walking speed increases by 5 feet.\n\n (2) The armor includes gauntlets, each of which is a magic melee weapon that can be wielded only when the hand is holding nothing. The wearer is proficient with the gauntlets, and each one deals 1d8 force damage on a hit and has the thrown property, with a normal range of 20 feet and a long range of 60 feet. When thrown, the gauntlet detaches and flies at the attack's target, then immediately returns to the wearer and reattaches.\n\n (3) The armor can't be removed against the wearer's will. \n\n(4) If the wearer is missing any limbs, the armor replaces those limbs - hands, arms, feet, legs, or similar appendages. The replacements function identically to the body parts they replace.",
              Item: "A suit of armor (requires attunement)",
              Prerequisites: "14th level artificer",
            },
            {
              Infusion: "Armor of Magical Strength",
              Description:
                "This armor has 6 charges. The wearer can expend the armor's charges in the following ways: (1) When the wearer makes a Strength check or a Strength saving throw, it can expend 1 charge to add a bonus to the roll equal to its Intelligence modifier or (2) If the creature would be knocked prone, it can use its reaction to expend 1 charge to avoid being knocked prone.\n\nThe armor regains 1d6 expended charges daily at dawn.",
              Item: "A suit of armor (requires attunement)",
              Prerequisites: "-",
            },

            {
              Infusion: "Boots of the Winding Path",
              Description:
                "While wearing these boots, a creature can teleport up to 15 feet as a bonus action to an unoccupied space the creature can see. The creature must have occupied that space at some point during the current turn.",
              Item: "A pair of boots (requires attunement)",
              Prerequisites: "6th level artificer",
            },
            {
              Infusion: "Enhanced Arcane Focus",
              Description:
                "While holding this item, a creature gains +1 bonus to spell attack rolls. In addition, the creature ignores half cover when making a spell attack. The bonus increases to +2 when you reach 10th level in this class.",
              Item: "A rod, staff, or wand (requires attunement)",
              Prerequisites: "-",
            },
            {
              Infusion: "Enhanced Defense",
              Description:
                "A creature gains a +1 bonus to Armor Class while wearing (armor) or wielding (shield) the infused item.\n\nThe bonus increases to +2 when you reach 10th level in this class.",
              Item: "A suit of armor or a shield ",
              Prerequisites: "-",
            },
            {
              Infusion: "Enhanced Weapon",
              Description:
                "This magic weapon grants a +1 bonus to attack and damage rolls made with it.\n\nThe bonus increases to +2 when you reach 10th level in this class.",
              Item: "A simple or martial weapon",
              Prerequisites: "-",
            },
            {
              Infusion: "Helm of Awareness",
              Description:
                "While wearing this helmet, a creature has advantage on initiative rolls. In addition, the wearer can’t be surprised, provided it isn’t incapacitated.",
              Item: "A helmet (requires attunement)",
              Prerequisites: "10th level artificer",
            },
            {
              Infusion: "Mind Sharpener",
              Description:
                "The infused item can send a jolt to the wearer to refocus their mind. The item has 4 charges. When the wearer fails a Constitution saving throw to maintain concentration on a spell, the wearer can use its reaction to expend 1 of the item's charges to succeed instead. The item regains 1d4 expended charges daily at dawn.",
              Item: "A suit of armor or robes",
              Prerequisites: "-",
            },
            {
              Infusion: "Radiant Weapon",
              Description:
                "This magic weapon grants a +1 bonus to attack and damage rolls made with it. While holding it, the wielder can take a bonus action to cause it to shed bright light in a 30-foot radius and dim light for an additional 30 feet. The wielder can extinguish the light as a bonus action.\n\nThe weapon has 4 charges. As a reaction immediately after being hit by an attack, the wielder can expend 1 charge and cause the attacker to be blinded until the end of the attacker's next turn, unless the attacker succeeds on a Constitution saving throw against your spell save DC. The weapon regains 1d4 expended charges daily at dawn.",
              Item: "A simple or martial weapon (requires attunement)",
              Prerequisites: "6th level artificer",
            },
            {
              Infusion: "Repeating Shot",
              Description:
                "This magic weapon grants a +1 bonus to attack and damage rolls made with it when it's used to make a ranged attack, and it ignores the loading property if it has it.\n\nIf the weapon lacks ammunition, it produces its own, automatically creating one piece of magic ammunition when the wielder makes a ranged attack with it. The ammunition created by the weapon vanishes the instant after it hits or misses a target.",
              Item: "A simple or martial weapon with the ammunition property (requires attunement)",
              Prerequisites: "-",
            },
            {
              Infusion: "Repulsion Shield",
              Description:
                "A creature gains a +1 bonus to Armor Class while wielding this shield.\n\nThe shield has 4 charges. While holding it, the wielder can use a reaction immediately after being hit by a melee attack to expend 1 of the shield's charges and push the attacker up to 15 feet away. The shield regains 1d4 expended charges daily at dawn.",
              Item: "A shield (requires attunement)",
              Prerequisites: "6th level artificer",
            },
            {
              Infusion: "Resistant Armor",
              Description:
                "While wearing this armor, a creature has resistance to one of the following damage types, which you choose when you infuse the item: acid, cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder.",
              Item: "A suit of armor (requires attunement)",
              Prerequisites: "6th level artificer",
            },
            {
              Infusion: "Returning Weapon",
              Description:
                "This magic weapon grants a +1 bonus to attack and damage rolls made with it, and it returns to the wielder’s hand immediately after it is used to make a ranged attack.",
              Item: "A simple or martial weapon with the thrown property",
              Prerequisites: "-",
            },
            {
              Infusion: "Spell-Refueling Ring",
              Description:
                "While wearing this ring, the creature can recover one expended spell slot as an action. The recovered slot can be of 3rd level or lower. Once used, the ring can't be used again until the next dawn.",
              Item: "A ring (requires attunement)",
              Prerequisites: "6th level artificer",
            },
            {
              Infusion: "Homunculus Servant",
              Description:
                "You learn intricate methods for magically creating a special homunculus that serves you. The item you infuse serves as the creature's heart, around which the creature's body instantly forms.\n\nYou determine the homunculus's appearance. Some artificers prefer mechanical-looking birds, whereas some like winged vials or miniature, animate cauldrons.\n\nThe homunculus is friendly to you and your companions, and it obeys your commands. See this creature's game statistics in the Homunculus Servant stat block (located at the bottom of this page, under Additonal Infusions), which uses your proficiency bonus (PB) in several places.\n\nIn combat, the homunculus shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the homunculus can take any action of its choice, not just Dodge.\n\nThe homunculus regains 2d6 hit points if the mending spell is cast on it. If you or the homunculus dies, it vanishes, leaving its heart in its space.",
              Item: "A gem or crystal worth at least 100 gp",
              Prerequisites: "10th level artificer",
            },
            {
              Infusion: "Replicate Magic Item",
              Description:
                "Using this infusion, you replicate a particular magic item. You can learn this infusion multiple times; each time you do so, choose a magic item that you can make with it, picking from the Replicable Items tables  (located at the bottom of this page, under Additonal Infusions). A table's title tells you the level you must be in the class to choose an item from the table. Alternatively, you can choose the magic item from among the common magic items in the game, not including potions or scrolls.\n\nIn the tables, an item's entry tells you whether the item requires attunement. See the item's description in the Dungeon Master's Guide for more information about it, including the type of object required for its making.\n\nIf you have Xanathar's Guide to Everything, you can choose from among the common magic items in that book when you pick a magic item you can replicate with this infusion.",
              Item: "A nonmagical version of the item",
              Prerequisites: "-",
            },
          ],
        },
      },
    ],
  },
  {
    name: "The Right Tool for the Job",
    description: `At 3rd level, you've learned how to produce exactly the tool you need: with ^${itemIds.thievesTools}{thieves' tools}^ or artisan's tools in hand, you can magically create one set of artisan's tools in an unoccupied space within 5 feet of you. This creation requires 1 hour of uninterrupted work, which can coincide with a short or long rest. Though the product of magic, the tools are nonmagical, and they vanish when you use this feature again.`,
    levels: [3],
    classId: ids.artificer,
  },
  {
    name: "Tool Expertise",
    description:
      "At 6th level, your proficiency bonus is now doubled for any ability check you make that uses your proficiency with a tool.",
    levels: [6],
    classId: ids.artificer,
  },
  {
    name: "Flash of Genius",
    description:
      "At 7th level, you've gained the ability to come up with solutions under pressure. When you or another creature you can see within 30 feet of you makes an ability check or a saving throw, you can use your reaction to add your Intelligence modifier to the roll.\n\nYou can use this feature a number of times equal to your Intelligence modifier (minimum of once). You regain all expended uses when you finish a long rest.",
    levels: [7],
    classId: ids.artificer,
  },
  {
    classId: ids.artificer,
    name: "Magic Item Adept",
    description:
      "When you reach 10th level, you achieve a profound understanding of how to use and make magic items:",
    options: [
      "You can attune to up to four magic items at once.",
      "If you craft a magic item with a rarity of common or uncommon, it takes you a quarter of the normal time, and it costs you half as much of the usual gold.",
    ],
    levels: [10],
  },
  {
    name: "Spell-Storing Item",
    description:
      "At 11th level, you can now store a spell in an object. Whenever you finish a long rest, you can touch one simple or martial weapon or one item that you can use as a spellcasting focus, and you store a spell in it, choosing a 1st- or 2nd-level spell from the artificer spell list that requires 1 action to cast (you needn't have it prepared).",
    levels: [11],
    classId: ids.artificer,
  },
  {
    name: "Magic Item Savant",
    description: "At 14th level, your skill with magic items deepens more:",
    options: [
      "You can attune to up to five magic items at once.",
      "You ignore all class, race, spell and level requirements on attuning to or using a magic item.",
    ],
    levels: [14],
    classId: ids.artificer,
  },
  {
    name: "Magic Item Master",
    description:
      "Starting at 18th level, you can attune up to six magic items at once.",
    levels: [18],
    classId: ids.artificer,
  },
  {
    classId: ids.artificer,
    name: "Soul of Artifice",
    levels: [20],
    description:
      "At 20th level, you develop a mystical connection to your magic items, which you can draw on for protection:",
    options: [
      "You gain a +1 bonus to all saving throws per magic item you are currently attuned to.",
      "If you're reduced to 0 hit points but not killed out-right, you can use your reaction to end one of your artificer infusions, causing you to drop to 1 hit point instead of 0.",
    ],
  },
  {
    classId: ids.artificer,
    levels: [],
    name: "Additional Infusions",
    description:
      "Below is some extra information on some of the infusions listed above.",
  },
  {
    name: "Homunculus Servant Infusion",
    description:
      "Below is the stat block for the Homunculus Servant that you can create with the Homunculus Servant infusion.",
    levels: [],
    classId: ids.artificer,
    extendedTable: [
      {
        "Homunculus Servant": {
          headers: ["STR", "DEX", "CON", "INT", "WIS", "CHA"],
          data: [
            {
              STR: "4 (-3)",
              DEX: "15 (+2)",
              CON: "12 (+1)",
              INT: "10 (+0)",
              WIS: "10 (+0)",
              CHA: "7 (-2)",
            },
          ],
        },
      },
      {
        "": {
          headers: ["Stat", "Value"],
          data: [
            {
              Stat: "Creature Type",
              Value: "Tiny Construct",
            },
            {
              Stat: "Armor Class",
              Value: "13 (natural armor)",
            },
            {
              Stat: "Hit Points",
              Value:
                "1 + your Intelligence modifier + your artificer level (the homunculus has a number of Hit Dice [d4s] equal to your artificer level)",
            },
            {
              Stat: "Speed",
              Value: "20 ft., fly 30 ft.",
            },
            {
              Stat: "Saving Throws",
              Value: "Dex +2 plus PB",
            },
            {
              Stat: "Skills",
              Value: "Perception +0 plus PB x 2, Stealth +2 plus PB",
            },
            {
              Stat: "Damage Immunities",
              Value: "Poison",
            },
            {
              Stat: "Condition Immunities",
              Value: "Exhaustion, Poisoned",
            },
            {
              Stat: "Senses",
              Value: "darkvision 60 ft., passive Perception 10 + (PB x 2)",
            },
            {
              Stat: "Languages",
              Value: "understands the languages you speak",
            },
            {
              Stat: "Proficiency Bonus (PB)",
              Value: "equals your bonus",
            },
            {
              Stat: "Evasion",
              Value:
                "If the homunculus is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails. It can't use this trait if it's incapacitated.",
            },
          ],
        },
      },
      {
        "": {
          headers: ["Action", "Description"],
          data: [
            {
              Action: "Force Strike",
              Description:
                "Ranged Weapon Attack: your spell attack modifier to hit, range 30 ft., one target you can see. Hit: 1d4 + PB force damage.",
            },
          ],
        },
      },
      {
        "": {
          headers: ["Reaction", "Description"],
          data: [
            {
              Reaction: "Channel Magic",
              Description:
                "The homunculus delivers a spell you cast that has a range of touch. The homunculus must be within 120 feet of you.",
            },
          ],
        },
      },
    ],
  },

  {
    name: "Replicable Items Infusion",
    description:
      "Below is a list of items that you can replicate with the Replicate Magic Item infusion.",
    levels: [],
    classId: ids.artificer,
    extendedTable: [
      {
        "Replicable Magic Items (2nd-Level Artificer)": {
          headers: ["Magic Item", "Attunement"],
          data: [
            {
              "Magic Item": "Alchemy Jug",
              Attunement: "No",
            },
            {
              "Magic Item": "Bag of Holding",
              Attunement: "No",
            },
            {
              "Magic Item": "Cap of Water Breathing",
              Attunement: "No",
            },
            {
              "Magic Item": "Goggles of Night",
              Attunement: "No",
            },
            {
              "Magic Item": "Rope of Climbing",
              Attunement: "No",
            },
            {
              "Magic Item": "Sending Stones",
              Attunement: "No",
            },
            {
              "Magic Item": "Wand of Magic Detection",
              Attunement: "No",
            },
            {
              "Magic Item": "Wand of Secrets",
              Attunement: "No",
            },
          ],
        },
      },
      {
        "Replicable Magic Items (6th-Level Artificer)": {
          headers: ["Magic Item", "Attunement"],
          data: [
            {
              "Magic Item": "Boots of Elvenkind",
              Attunement: "No",
            },
            {
              "Magic Item": "Cloak of Elvenkind",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Cloak of the Manta Ray",
              Attunement: "No",
            },
            {
              "Magic Item": "Eyes of Charming",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Gloves of Thievery",
              Attunement: "No",
            },
            {
              "Magic Item": "Lantern of Revealing",
              Attunement: "No",
            },
            {
              "Magic Item": "Pipes of Haunting",
              Attunement: "No",
            },
            {
              "Magic Item": "Ring of Water Walking",
              Attunement: "No",
            },
          ],
        },
      },
      {
        "Replicable Magic Items (10th-level artificer)": {
          headers: ["Magic Item", "Attunement"],
          data: [
            {
              "Magic Item": "Boots of Striding and Springing",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Boots of the Winterlands",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Bracers of Archery",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Brooch of Shielding",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Cloak of Protection",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Eyes of the Eagle",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Gauntlets of Ogre Power",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Gloves of Missile Snaring",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Gloves of Swimming and Climbing",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Hat of Disguise",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Headband of Intellect",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Helm of Telepathy",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Medallion of Thoughts",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Necklace of Adaptation",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Periapt of Wound Closure",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Pipes of the Sewers",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Quiver of Ehlonna",
              Attunement: "No",
            },
            {
              "Magic Item": "Ring of Jumping",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Ring of Mind Shielding",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Slippers of Spider Climbing",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Ventilating Lungs",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Winged Boots",
              Attunement: "Yes",
            },
          ],
        },
      },
      {
        "Replicable Magic Items (14th-level artificer)": {
          headers: ["Magic Item", "Attunement"],
          data: [
            {
              "Magic Item": "Amulet of Health",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Arcane Propulsion Arm",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Belt of Hill Giant Strength",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Boots of Levitation",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Boots of Speed",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Bracers of Defense",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Cloak of the Bat",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Dimensional Shackles",
              Attunement: "No",
            },
            {
              "Magic Item": "Gem of Seeing",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Horn of Blasting",
              Attunement: "No",
            },
            {
              "Magic Item": "Ring of Free Action",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Ring of Protection",
              Attunement: "Yes",
            },
            {
              "Magic Item": "Ring of the Ram",
              Attunement: "Yes",
            },
          ],
        },
      },
    ],
  },
];

export default Features;
