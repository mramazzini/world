import P from "@/app/components/Utility/FormatAndSanitize";
import { Prisma } from "@prisma/client";

const ids = {
  BeastMaster: 81,
  feyWanderer: 82,
  gloomStalker: 83,
  horizonWalker: 84,
  hunter: 85,
  monsterSlayer: 86,
  swarmkeeper: 87,
  drakewarden: 88,
};
interface SubclassFeature extends PrismaJson.Feature {
  subClassId: number;
}

const RangerSubclassFeatures: SubclassFeature[] = [
  // Beast Master
  {
    name: "Ranger's Companion",
    description:
      "At 3rd level, you gain a beast companion that accompanies you on your adventures and is trained to fight alongside you. Choose a beast that is no larger than Medium and that has a challenge rating of 1/4 or lower (Player's Handbook Appendix D presents statistics for the hawk, mastiff, and panther as examples). Add your proficiency bonus to the beast’s AC, attack rolls, and damage rolls, as well as to any saving throws and skills it is proficient in. Its hit point maximum equals its normal maximum or four times your ranger level, whichever is higher. Like any creature, the beast can spend Hit Dice during a short rest.\n\nThe beast obeys your commands as best as it can. It takes its turn on your initiative. On your turn, you can verbally command the beast where to move (no action required by you). You can use your action to verbally command it to take the Attack, Dash, Disengage, or Help action. If you don’t issue a command, the beast takes the Dodge action. Once you have the Extra Attack feature, you can make one weapon attack yourself when you command the beast to take the Attack action. While traveling through your favored terrain with only the beast, you can move stealthily at a normal pace.\n\nIf you are incapacitated or absent, the beast acts on its own, focusing on protecting you and itself. The beast never requires your command to use its reaction, such as when making an opportunity attack.\n\nIf the beast dies, you can obtain another one by spending 8 hours magically bonding with another beast that isn’t hostile to you, either the same type of beast as before or a different one.",
    levels: [3],
    subClassId: ids.BeastMaster,
  },
  {
    name: "Primal Companion",
    description:
      "This 3rd-level feature replaces the Ranger's Companion feature.\n\nYou magically summon a primal beast, which draws strength from your bond with nature. The beast is friendly to you and your companions and obeys your commands. Choose its stat block-Beast of the Land, Beast of the Sea, or Beast of the Sky-which uses your proficiency bonus (PB) in several places. You also determine the kind of animal the beast is, choosing a kind appropriate for the stat block. Whatever kind you choose, the beast bears primal markings, indicating its mystical origin.\n\nIn combat, the beast acts during your turn. It can move and use its reaction on its own, but the only action it takes is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. You can also sacrifice one of your attacks when you take the Attack action to command the beast to take the Attack action. If you are incapacitated, the beast can take any action of its choice, not just Dodge.\n\nIf the beast has died within the last hour, you can use your action to touch it and expend a spell slot of 1st level or higher. The beast returns to life after 1 minute with all its hit points restored. When you finish a long rest, you can summon a different primal beast. The new beast appears in an unoccupied space within 5 feet of you, and you choose its stat block and appearance. If you already have a beast from this feature, it vanishes when the new beast appears. The beast also vanishes if you die.",
    levels: [3],
    subClassId: ids.BeastMaster,
    extendedTable: [
      {
        "Beast of the Land": {
          headers: ["STR", "DEX", "CON", "INT", "WIS", "CHA"],
          data: [
            {
              STR: "14 (+2)",
              DEX: "14 (+2)",
              CON: "15 (+2)",
              INT: "8 (-1)",
              WIS: "14 (+2)",
              CHA: "11 (+0)",
            },
          ],
        },
      },
      {
        "": {
          headers: ["Stat", "Value"],
          data: [
            {
              Stat: "Creature type",
              Value: "Medium beast",
            },
            {
              Stat: "Armor Class",
              Value: "13 + proficiency bonus (natural armor)",
            },
            {
              Stat: "Hit Points",
              Value:
                "5 + five times your ranger level (the beast has a number of Hit Dice [d8s] equal to your ranger level)",
            },
            { Stat: "Speed", Value: "40 ft., climb 40ft" },
            {
              Stat: "Senses",
              Value: "Passive Perception 12, Darkvision 60ft.",
            },
            { Stat: "Languages", Value: "understands the languages you speak" },
            { Stat: "Challenge", Value: "-" },
            {
              Stat: "Charge",
              Value:
                "If the beast moves at least 20 feet straight toward a target and then hits it with a maul attack on the same turn, the target takes an extra 1d6 slashing damage. If the target is a creature, it must succeed on a Strength saving throw against your spell save DC or be knocked prone.",
            },
            {
              Stat: "Primal Bond",
              Value:
                "You can add your proficiency bonus to any ability check or saving throw that the beast makes.",
            },
          ],
        },
      },
      {
        "": {
          headers: ["Action", "Description"],
          data: [
            {
              Action: "Maul",
              Description:
                "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d8 + 2 + PB slashing damage.",
            },
          ],
        },
      },
      // Beast of the Sea
      {
        "Beast of the Sea": {
          headers: ["STR", "DEX", "CON", "INT", "WIS", "CHA"],
          data: [
            {
              STR: "14 (+2)",
              DEX: "14 (+2)",
              CON: "15 (+2)",
              INT: "8 (-1)",
              WIS: "14 (+2)",
              CHA: "11 (+0)",
            },
          ],
        },
      },
      {
        "": {
          headers: ["Stat", "Value"],
          data: [
            {
              Stat: "Creature type",
              Value: "Medium beast",
            },
            {
              Stat: "Armor Class",
              Value: "13 + proficiency bonus (natural armor)",
            },
            {
              Stat: "Hit Points",
              Value:
                "5 + five times your ranger level (the beast has a number of Hit Dice [d8s] equal to your ranger level)",
            },
            { Stat: "Speed", Value: "5 ft., swim 60ft." },
            {
              Stat: "Senses",
              Value: "Passive Perception 12, Darkvision 60ft.",
            },
            { Stat: "Languages", Value: "understands the languages you speak" },
            { Stat: "Challenge", Value: "-" },
            {
              Stat: "Amphibious",
              Value: "The beast can breathe both air and water.",
            },
            {
              Stat: "Primal Bond",
              Value:
                "You can add your proficiency bonus to any ability check or saving throw that the beast makes.",
            },
          ],
        },
      },
      {
        "": {
          headers: ["Action", "Description"],
          data: [
            {
              Action: "Binding Strike",
              Description:
                "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d6 + 2 + PB piercing or bludgeoning damage (your choice), and the target is grappled (escape DC equals your spell save DC). Until this grapple ends, the beast can't use this attack on another target.",
            },
          ],
        },
      },
      // Beast of the Sky
      {
        "Beast of the Sky": {
          headers: ["STR", "DEX", "CON", "INT", "WIS", "CHA"],
          data: [
            {
              STR: "6 (-2)",
              DEX: "16 (+3)",
              CON: "13 (+1)",
              INT: "8 (-1)",
              WIS: "14 (+2)",
              CHA: "11 (+0)",
            },
          ],
        },
      },
      {
        "": {
          headers: ["Stat", "Value"],
          data: [
            {
              Stat: "Creature type",
              Value: "Medium beast",
            },
            {
              Stat: "Armor Class",
              Value: "13 + proficiency bonus (natural armor)",
            },
            {
              Stat: "Hit Points",
              Value:
                "5 + five times your ranger level (the beast has a number of Hit Dice [d8s] equal to your ranger level)",
            },
            { Stat: "Speed", Value: "5 ft., fly 60ft." },
            {
              Stat: "Senses",
              Value: "Passive Perception 12, Darkvision 60ft.",
            },
            { Stat: "Languages", Value: "understands the languages you speak" },
            { Stat: "Challenge", Value: "-" },
            {
              Stat: "Flyby",
              Value:
                "The beast doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
            },
            {
              Stat: "Primal Bond",
              Value:
                "You can add your proficiency bonus to any ability check or saving throw that the beast makes.",
            },
          ],
        },
      },
      {
        "": {
          headers: ["Action", "Description"],
          data: [
            {
              Action: "Shred",
              Description:
                "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d4 + 3 + PB slashing damage.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Exceptional Training",
    description:
      "Beginning at 7th level, on any of your turns when your beast companion doesn’t attack, you can use a bonus action to command the beast to take the Dash, Disengage, or Help action on its turn. In addition, the beast’s attacks now count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
    levels: [7],
    subClassId: ids.BeastMaster,
  },
  {
    name: "Bestial Fury",
    description:
      "Starting at 11th level, when you command your beast companion to take the Attack action, the beast can make two attacks, or it can take the Multiattack action if it has that action.",
    levels: [11],
    subClassId: ids.BeastMaster,
  },
  {
    name: "Share Spells",
    description:
      "Beginning at 15th level, when you cast a spell targeting yourself, you can also affect your beast companion with the spell if the beast is within 30 feet of you.",
    levels: [15],
    subClassId: ids.BeastMaster,
  },
  // Fey Wanderer
  {
    name: "Draeadful Strikes",
    description:
      "At 3rd level, you can augment your weapon strikes with mind-scarring magic, drawn from the gloomy hollows of the Feywild. When you hit a creature with a weapon, you can deal an extra 1d4 psychic damage to the target, which can take this extra damage only once per turn.\n\nThe extra damage increases to 1d6 when you reach 11th level in this class.",
    levels: [3],
    subClassId: ids.feyWanderer,
  },
  {
    name: "Fey Wanderer Magic",
    description:
      "Also at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Fey Wanderer Spells table. Each spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
    extendedTable: [
      {
        "Fey Wanderer Spells": {
          headers: ["Ranger Level", "Spell"],
          data: [
            {
              "Ranger Level": "3rd",
              Spell: "Sleep",
            },
            {
              "Ranger Level": "5th",
              Spell: "Misty Step",
            },
            {
              "Ranger Level": "9th",
              Spell: "Dispel Magic",
            },
            {
              "Ranger Level": "13th",
              Spell: "Dimension Door",
            },
            {
              "Ranger Level": "17th",
              Spell: "Mislead",
            },
          ],
        },
      },
    ],
    levels: [3],
    subClassId: ids.feyWanderer,
  },
  {
    name: "Gift of the Feywild",
    description:
      "You possess a preternatural blessing from a fey ally or a place of fey power. Choose your blessing from the Feywild Gifts table or determine it randomly.",
    extendedTable: [
      {
        "Feywild Gifts": {
          headers: ["d6", "Gift"],
          data: [
            {
              d6: "1",
              Gift: "Illusory butterflies flutter around you while you take a short or long rest.",
            },
            {
              d6: "2",
              Gift: "Fresh, seasonal flowers sprout from your hair each dawn.",
            },
            {
              d6: "3",
              Gift: "You faintly smell of cinnamon, lavender, nutmeg, or another comforting herb or spice.",
            },
            {
              d6: "4",
              Gift: "Your shadow dances while no one is looking directly at it.",
            },
            {
              d6: "5",
              Gift: "Horns or antlers sprout from your head.",
            },
            {
              d6: "6",
              Gift: "Your skin and hair change color to match the season at each dawn.",
            },
          ],
        },
      },
    ],
    levels: [3],
    subClassId: ids.feyWanderer,
  },
  {
    name: "Otherworldly Glamour",
    description:
      "Additionally at 3rd level, your fey qualities give you a supernatural charm. As a result, whenever you make a Charisma check, you gain a bonus to the check equal to your Wisdom modifier (minimum of +1).\n\nIn addition, you gain proficiency in one of the following skills of your choice: Deception, Performance, or Persuasion.",
    levels: [3],
    subClassId: ids.feyWanderer,
  },
  {
    name: "Beguiling Twist",
    description:
      "Beginning at 7th level, the magic of the Feywild guards your mind. You have advantage on saving throws against being charmed or frightened.\n\nIn addition, whenever you or a creature you can see within 120 feet of you succeeds on a saving throw against being charmed or frightened, you can use your reaction to force a different creature you can see within 120 feet of you to make a Wisdom saving throw against your spell save DC. If the save fails, the target is charmed or frightened by you (your choice) for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful save.",
    levels: [7],
    subClassId: ids.feyWanderer,
  },
  {
    name: "Fey Reinforcements",
    description:
      "At 11th level, the royal courts of the Feywild have blessed you with the assistance of fey beings: you know the spell Summon Fey. It doesn't count against the number of ranger spells you know, and you can cast it without a material component. You can also cast it once without using a spell slot, and you regain the ability to do so when you finish a long rest.\n\nWhenever you start casting the spell, you can modify it so that it doesn't require concentration. If you do so, the spell's duration becomes 1 minute for that casting.",
    levels: [11],
    subClassId: ids.feyWanderer,
  },
  {
    name: "Misty Wanderer",
    description:
      "When you reach 15th level, you can slip in and out of the Feywild to move in a blink of an eye: you can cast Misty Step without expending a spell slot. You can do so a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a long rest.\n\nIn addition, whenever you cast Misty Step, you can bring along one willing creature you can see within 5 feet of you. That creature teleports to an unoccupied space of your choice within 5 feet of your destination space.",
    levels: [15],
    subClassId: ids.feyWanderer,
  },
  // Gloom Stalker
  {
    name: "Gloom Stalker Magic",
    description:
      "Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Gloom Stalker Spells table. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
    levels: [3],
    subClassId: ids.gloomStalker,
    extendedTable: [
      {
        "Gloom Stalker Spells": {
          headers: ["Ranger Level", "Spell"],
          data: [
            {
              "Ranger Level": "3rd",
              Spell: "Disguise Self",
            },
            {
              "Ranger Level": "5th",
              Spell: "Rope Trick",
            },
            {
              "Ranger Level": "9th",
              Spell: "Fear",
            },
            {
              "Ranger Level": "13th",
              Spell: "Greater Invisibility",
            },
            {
              "Ranger Level": "17th",
              Spell: "Seeming",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Dread Ambusher",
    description:
      "At 3rd level, you master the art of the ambush. You can give yourself a bonus to your initiative rolls equal to your Wisdom modifier.\n\nAt the start of your first turn of each combat, your walking speed increases by 10 feet, which lasts until the end of that turn. If you take the Attack action on that turn, you can make one additional weapon attack as part of that action. If that attack hits, the target takes an extra 1d8 damage of the weapon's damage type.",
    levels: [3],
    subClassId: ids.gloomStalker,
  },
  {
    name: "Umbral Sight",
    description:
      "At 3rd level, you gain darkvision out to a range of 60 feet. If you already have darkvision from your species, its range increases by 30 feet.\n\nYou are also adept at evading creatures that rely on darkvision. While in darkness, you are invisible to any creature that relies on darkvision to see you in that darkness.",
    levels: [3],
    subClassId: ids.gloomStalker,
  },
  {
    name: "Iron Mind",
    description:
      "By 7th level, you have honed your ability to resist the mind-altering powers of your prey. You gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice).",
    levels: [7],
    subClassId: ids.gloomStalker,
  },
  {
    name: "Stalker's Flurry",
    description:
      "At 11th level, you learn to attack with such unexpected speed that you can turn a miss into another strike. Once on each of your turns when you miss with a weapon attack, you can make another weapon attack as part of the same action.",
    levels: [11],
    subClassId: ids.gloomStalker,
  },
  {
    name: "Shadowy Dodge",
    description:
      "Starting at 15th level, you can dodge in unforeseen ways, with wisps of supernatural shadow around you. Whenever a creature makes an attack roll against you and doesn't have advantage on the roll, you can use your reaction to impose disadvantage on it. You must use this feature before you know the outcome of the attack roll.",
    levels: [15],
    subClassId: ids.gloomStalker,
  },
  // Horizon Walker
  {
    name: "Horizon Walker Magic",
    description:
      "Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Horizon Walker Spells table. The spell counts as a ranger spell for you, but it doesn’t count against the number of ranger spells you know.",
    levels: [3],
    subClassId: ids.horizonWalker,
    extendedTable: [
      {
        "Horizon Walker Spells": {
          headers: ["Ranger Level", "Spell"],
          data: [
            {
              "Ranger Level": "3rd",
              Spell: "Protection from Evil and Good",
            },
            {
              "Ranger Level": "5th",
              Spell: "Misty Step",
            },
            {
              "Ranger Level": "9th",
              Spell: "Haste",
            },
            {
              "Ranger Level": "13th",
              Spell: "Banishment",
            },
            {
              "Ranger Level": "17th",
              Spell: "Teleportation Circle",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Detect Portal",
    description: `At 3rd level, you gain the ability to magically sense the presence of a planar portal. As an action, you detect the distance and direction to the closest planar portal within 1 mile of you.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest.\n\nSee the "Planar Travel" section in chapter 2 of the Dungeon Master's Guide for examples of planar portals.`,
    levels: [3],
    subClassId: ids.horizonWalker,
  },
  {
    name: "Planar Warrior",
    description:
      "At 3rd level, you learn to draw on the energy of the multiverse to augment your attacks.\n\nAs a bonus action, choose one creature you can see within 30 feet of you. The next time you hit that creature on this turn with a weapon attack, all damage dealt by the attack becomes force damage, and the creature takes an extra 1d8 force damage from the attack. When you reach 11th level in this class, the extra damage increases to 2d8.",
    levels: [3],
    subClassId: ids.horizonWalker,
  },
  {
    name: "Ethereal Step",
    description:
      "At 7th level, you learn to step through the Ethereal Plane. As a bonus action on your turn, you can cast the Etherealness spell with this feature, without expending a spell slot, but the spell ends at the end of the current turn.\n\nOnce you use this feature, you can’t use it again until you finish a short or long rest.",
    levels: [7],
    subClassId: ids.horizonWalker,
  },
  {
    name: "Distant Strike",
    description:
      "At 11th level, you gain the ability to pass between the planes in a blink of an eye. When you use the Attack action, you can teleport up to 10 feet before each attack to an unoccupied space you can see.\n\nIf you attack at least two different creatures with the action, you can make one additional attack with it against a third creature.",
    levels: [11],
    subClassId: ids.horizonWalker,
  },
  {
    name: "Spectral Defense",
    description:
      "At 15th level, your ability to move between planes enables you to slip through the planar boundaries to lessen the harm done to you during battle. When you take damage from an attack, you can use your reaction to give yourself resistance to all of that attack's damage on this turn.",
    levels: [15],
    subClassId: ids.horizonWalker,
  },
  // hunter
  {
    name: "Hunter's Prey",
    description:
      "At 3rd level, you gain one of the following features of your choice.",
    levels: [3],
    subClassId: ids.hunter,
    extendedTable: [
      {
        "": {
          headers: ["Feature", "Description"],
          data: [
            {
              Feature: "Colossus Slayer",
              Description:
                "Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it’s below its hit point maximum. You can deal this extra damage only once per turn.",
            },
            {
              Feature: "Giant Killer",
              Description:
                "When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature.",
            },
            {
              Feature: "Horde Breaker",
              Description:
                "Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Defensive Tactics",
    description:
      "At 7th level, you gain one of the following features of your choice.",
    levels: [7],
    subClassId: ids.hunter,
    extendedTable: [
      {
        "": {
          headers: ["Feature", "Description"],
          data: [
            {
              Feature: "Escape the Horde",
              Description:
                "Opportunity attacks against you are made with disadvantage.",
            },
            {
              Feature: "Multiattack Defense",
              Description:
                "When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn.",
            },
            {
              Feature: "Steel Will",
              Description:
                "You have advantage on saving throws against being frightened.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Multiattack",
    description:
      "At 11th level, you gain one of the following features of your choice.",
    levels: [11],
    extendedTable: [
      {
        "": {
          headers: ["Feature", "Description"],
          data: [
            {
              Feature: "Volley",
              Description:
                "You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon’s range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target",
            },
            {
              Feature: "Whirlwind Attack",
              Description:
                "You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target.",
            },
          ],
        },
      },
    ],
    subClassId: ids.hunter,
  },
  {
    name: "Superior Hunter's Defense",
    description: `At 15th level, you gain one of the following features of your choice.`,
    levels: [15],
    subClassId: ids.hunter,
    extendedTable: [
      {
        "": {
          headers: ["Feature", "Description"],
          data: [
            {
              Feature: "Evasion",
              Description:
                "When you are subjected to an effect, such as a red dragon’s fiery breath or a lightning bolt spell, that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on a saving throw, and only half damage if you fail",
            },
            {
              Feature: "Stand Against the Tide",
              Description:
                "When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice.",
            },
            {
              Feature: "Uncanny Dodge",
              Description:
                "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you.",
            },
          ],
        },
      },
    ],
  },
  // Monster Slayer
  {
    name: "Monster Slayer Magic",
    description:
      "Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Monster Slayer Spells table. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
    levels: [3],
    subClassId: ids.monsterSlayer,
    extendedTable: [
      {
        "Monster Slayer Spells": {
          headers: ["Ranger Level", "Spell"],
          data: [
            {
              "Ranger Level": "3rd",
              Spell: "Protection from Evil and Good",
            },
            {
              "Ranger Level": "5th",
              Spell: "Zone of Truth",
            },
            {
              "Ranger Level": "9th",
              Spell: "Magic Circle",
            },
            {
              "Ranger Level": "13th",
              Spell: "Banishment",
            },
            {
              "Ranger Level": "17th",
              Spell: "Hold Monster",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Hunter's Sense",
    description:
      "At 3rd level, you gain the ability to peer at a creature and magically discern how best to hurt it. As an action, choose one creature you can see within 60 feet of you. You immediately learn whether the creature has any damage immunities, resistances, or vulnerabilities and what they are. If the creature is hidden from divination magic, you sense that it has no damage immunities, resistances, or vulnerabilities.\n\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses of it when you finish a long rest.",
    levels: [3],
    subClassId: ids.monsterSlayer,
  },
  {
    name: "Slayer's Prey",
    description:
      "Starting at 3rd level, you can focus your ire on one foe, increasing the harm you inflict on it. As a bonus action, you designate one creature you can see within 60 feet of you as the target of this feature. The first time each turn that you hit that target with a weapon attack, it takes an extra 1d6 damage from the weapon.\n\nThis benefit lasts until you finish a short or long rest. It ends early if you designate a different creature.",
    levels: [3],
    subClassId: ids.monsterSlayer,
  },
  {
    name: "Supernatural Defense",
    description:
      "At 7th level, you gain extra resilience against your prey's assaults on your mind and body. Whenever the target of your Slayer's Prey forces you to make a saving throw and whenever you make an ability check to escape that target's grapple, add 1d6 to your roll.",
    levels: [7],
    subClassId: ids.monsterSlayer,
  },
  {
    name: "Magic-User's Nemesis",
    description:
      "At 11th level, you gain the ability to thwart someone else's magic. When you see a creature casting a spell or teleporting within 60 feet of you, you can use your reaction to try to magically foil it. The creature must succeed on a Wisdom saving throw against your spell save DC, or its spell or teleport fails and is wasted.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest.",
    levels: [11],
    subClassId: ids.monsterSlayer,
  },
  {
    name: "Slayer's Counter",
    description:
      "At 15th level, you gain the ability to counterattack when your prey tries to sabotage you. If the target of your Slayer’s Prey forces you to make a saving throw, you can use your reaction to make one weapon attack against the quarry. You make this attack immediately before making the saving throw. If the attack hits, your save automatically succeeds, in addition to the attack’s normal effects.",
    levels: [15],
    subClassId: ids.monsterSlayer,
  },
  // Swarmkeeper
  {
    name: "Gathered Swarm",
    description:
      "At 3rd level, a swarm of intangible nature spirits has bonded itself to you and can assist you in battle. While you’re alive, the swarm remains in your space, crawling on you or flying and skittering around you within your space. You determine its appearance. Some examples include a swarm of insects, fluttering birds, or playful pixies.\n\nOnce on each of your turns, you can cause the swarm to assist you in one of the following ways, immediately after you hit a creature with an attack:",
    options: [
      "The attack's target takes 1d6 piercing damage from the swarm.",
      "The attack's target must succeed on a Strength saving throw against your spell save DC or be moved by the swarm up to 15 feet horizontally in a direction of your choice.",
      "You are moved by the swarm 5 feet horizontally in a direction of your choice.",
    ],
    levels: [3],
    subClassId: ids.swarmkeeper,
  },
  {
    name: "Swarmkeeper Magic",
    description:
      "Also at 3rd level, you learn the Mage Hand cantrip if you don't already know it. When you cast it, the hand takes the form of your swarming nature spirits.\n\nYou also learn an additional spell of 1st level or higher when you reach certain levels in this class, as shown in the Swarmkeeper Spells table. Each spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
    levels: [3],
    subClassId: ids.swarmkeeper,
    extendedTable: [
      {
        "Swarmkeeper Spells": {
          headers: ["Ranger Level", "Spells"],
          data: [
            {
              "Ranger Level": "3rd",
              Spells: "Faerie Fire, Mage Hand",
            },
            {
              "Ranger Level": "5th",
              Spells: "Web",
            },
            {
              "Ranger Level": "9th",
              Spells: "Gaseous Form",
            },
            {
              "Ranger Level": "13th",
              Spells: "Arcane Eye",
            },
            {
              "Ranger Level": "17th",
              Spells: "Insect Plague",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Writhing Tide",
    description:
      "Beginning at 7th level, you can condense part of your swarm into a focused mass that lifts you up. As a bonus action, you gain a flying speed of 10 feet and can hover. This effect lasts for 1 minute or until you are incapacitated.\n\nYou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    levels: [7],
    subClassId: ids.swarmkeeper,
  },
  {
    name: "Mighty Swarm",
    description:
      "At 11th level, your Gathered Swarm grows mightier in the following ways:",
    options: [
      "The damage of Gathered Swarm increases to 1d8.",
      "If a creature fails its saving throw against being moved by the Gathered Swarm, you can also cause the swarm to knock the creature prone.",
      "When you are moved by Gathered Swarm, it gives you half cover until the start of your next turn.",
    ],
    levels: [11],
    subClassId: ids.swarmkeeper,
  },
  {
    name: "Swarming Dispersal",
    description:
      "When you reach 15th level, you can discorporate into your swarm, avoiding danger. When you take damage, you can use your reaction to give yourself resistance to that damage. You vanish into your swarm and then teleport to an unoccupied space that you can see within 30 feet of you, where you reappear with the swarm.\n\nYou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    levels: [15],
    subClassId: ids.swarmkeeper,
  },
  // drakewarden
  {
    name: "Drakwarden Origin",
    description:
      "When you take this subclass at 3rd level, consider the source of the draconic spirit you have bonded with. The Drakewarden Origin table offers examples.",
    levels: [3],
    subClassId: ids.drakewarden,
    extendedTable: [
      {
        "Drakwarden Origin Table": {
          headers: ["d6", "Origin"],
          data: [
            {
              d6: "1",
              Origin:
                "You studied a dragon’s scale or claw, or a trinket from a dragon’s hoard, creating your bond through that token’s lingering draconic magic.",
            },
            {
              d6: "2",
              Origin:
                "A secret order of rangers who collect and guard draconic lore taught you their ways.",
            },
            {
              d6: "3",
              Origin:
                "A dragon gave you a geode or gemstone to care for. To your surprise, the drake hatched from that stone.",
            },
            {
              d6: "4",
              Origin:
                "You ingested a few drops of dragon blood, forever infusing your nature magic with draconic power.",
            },
            {
              d6: "5",
              Origin:
                "An ancient Draconic inscription on a standing stone empowered you when you read it aloud.",
            },
            {
              d6: "6",
              Origin:
                "You had a vivid dream of a mysterious figure accompanied by seven yellow canaries, who warned you of impending doom. When you awoke, your drake was there, watching you.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Draconic Gift",
    description:
      "At 3rd level, the bond you share with your drake creates a connection to dragonkind, granting you understanding and empowering your presence.You gain the following benefits:",
    levels: [3],
    subClassId: ids.drakewarden,
    extendedTable: [
      {
        "": {
          headers: ["Benefit", "Description"],
          data: [
            {
              Benefit: "Thaumaturgy",
              Description:
                "You learn the Thaumaturgy cantrip, which is a ranger spell for you.",
            },
            {
              Benefit: "Tongue of Dragons",
              Description:
                "You learn to speak, read, and write Draconic or one other language of your choice.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Drake Companion",
    description:
      "At 3rd level, as an action, you can magically summon the drake that is bound to you. It appears in an unoccupied space of your choice within 30 feet of you.\n\nThe drake is friendly to you and your companions, and it obeys your commands. See its game statistics in the accompanying Drake Companion stat block, which uses your proficiency bonus (PB) in several places. Whenever you summon the drake, choose a damage type listed in its Draconic Essence trait. You can determine the cosmetic characteristics of the drake, such as its color, its scale texture, or any visible effect of its Draconic Essence; your choice has no effect on its game statistics.\n\nIn combat, the drake shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the drake can take any action of its choice, not just Dodge.\n\nThe drake remains until it is reduced to 0 hit points, until you use this feature to summon the drake again, or until you die. Anything the drake was wearing or carrying is left behind when the drake vanishes.\n\nOnce you summon the drake, you can’t do so again until you finish a long rest, unless you expend a spell slot of 1st level or higher to summon it.",
    levels: [3],
    subClassId: ids.drakewarden,
    extendedTable: [
      {
        "Drake Companion": {
          headers: ["STR", "DEX", "CON", "INT", "WIS", "CHA"],
          data: [
            {
              STR: "16 (+3)",
              DEX: "12 (+1)",
              CON: "15 (+2)",
              INT: "8 (-1)",
              WIS: "14 (+2)",
              CHA: "8 (-1)",
            },
          ],
        },
      },
      {
        "": {
          headers: ["Stat", "Value"],
          data: [
            {
              Stat: "Creature type",
              Value: "Small dragon",
            },
            {
              Stat: "Armor Class",
              Value: "14 + PB (natural armor)",
            },
            {
              Stat: "Hit Points",
              Value:
                "5 + five times your ranger level (the drake has a number of hit dice [d10s] equal to your ranger level)",
            },
            {
              Stat: "Speed",
              Value: "40 ft.",
            },
            {
              Stat: "Saving Throws",
              Value: "Dex +1 plus PB, Wis +2 plus PB",
            },
            {
              Stat: "Damage Immunities",
              Value: "Determined by the drake’s Draconic Essence trait",
            },
            {
              Stat: "Senses",
              Value: "Darkvision 60 ft., passive Perception 12",
            },
            {
              Stat: "Languages",
              Value: "Draconic",
            },
            {
              Stat: "Challenge",
              Value: "Proficiency Bonus (PB) equals your bonus",
            },
            {
              Stat: "Draconic Essence",
              Value:
                "When you summon the drake, choose a damage type: acid, cold, fire, lightning, or poison. The chosen type determines the drake’s damage immunity and the damage of its Infused Strikes trait.",
            },
          ],
        },
      },
      {
        "": {
          headers: ["Action", "Description"],
          data: [
            {
              Action: "Bite",
              Description:
                "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d6 + 3 + PB piercing damage.",
            },
          ],
        },
      },
      {
        "": {
          headers: ["Reaction", "Description"],
          data: [
            {
              Reaction: "Infused Strikes",
              Description:
                "When another creature within 30 feet of the drake that it can see hits a target with a weapon attack, the drake infuses the strike with its essence, causing the target to take an extra 1d6 damage of the type determined by its Draconic Essence.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Bond of Fang and Scale",
    description:
      "At 7th level the bond you share with your drake intensifies, protecting you and stoking the drake’s fury. When you summon your drake, it grows wings on its back and gains a flying speed equal to its walking speed.\n\nIn addition, while your drake is summoned, you and the drake gain the following benefits:",
    levels: [7],
    extendedTable: [
      {
        "": {
          headers: ["Benefit", "Description"],
          data: [
            {
              Benefit: "Drake Mount",
              Description:
                "The drake grows to Medium size. Reflecting your special bond, you can use the drake as a mount if your size is Medium or smaller. While you are riding your drake, it can’t use the flying speed of this feature.",
            },
            {
              Benefit: "Magic Fang",
              Description:
                "The drake’s Bite attack deals an extra 1d6 damage of the type chosen for the drake’s Draconic Essence.",
            },
            {
              Benefit: "Resistance",
              Description:
                "You gain resistance to the damage type chosen for the drake’s Draconic Essence.",
            },
          ],
        },
      },
    ],
    subClassId: ids.drakewarden,
  },
  {
    name: "Drake's Breath",
    description:
      "At 11th level, as an action, you can exhale a 30-foot cone of damaging breath or cause your drake to exhale it. Choose acid, cold, fire, lightning, or poison damage (your choice doesn’t have to match your drake’s Draconic Essence). Each creature in the cone must make a Dexterity saving throw against your spell save DC, taking 8d6 damage on a failed save, or half as much damage on a successful one.\n\nThis damage increases to 10d6 when you reach 15th level in this class\n\nOnce you use this feature, you can’t do so again until you finish a long rest, unless you expend a spell slot of 3rd level or higher to use it again.",
    levels: [11, 15],
    subClassId: ids.drakewarden,
  },
  {
    name: "Perfected Bond",
    description:
      "At 15th level, your bond to your drake reaches the pinnacle of its power. While your drake is summoned, you and the drake gain the following benefits:",
    levels: [15],
    extendedTable: [
      {
        "": {
          headers: ["Benefit", "Description"],
          data: [
            {
              Benefit: "Empowered Bite",
              Description:
                "The drake’s Bite attack deals an extra 1d6 damage of the type chosen for its Draconic Essence (for a total of 2d6 extra damage).",
            },
            {
              Benefit: "Large Drake",
              Description:
                "The drake grows to Large size. When you ride your drake, it is no longer prohibited from using the flying speed of Bond of Fang and Scale.",
            },
            {
              Benefit: "Reflexive Resistance",
              Description:
                "When either you or the drake takes damage while you’re within 30 feet of each other, you can use your reaction to give yourself or the drake resistance to that instance of damage. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
            },
          ],
        },
      },
    ],
    subClassId: ids.drakewarden,
  },
];

export default RangerSubclassFeatures;
