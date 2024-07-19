import { Prisma } from "@prisma/client";

const ids = {
  creation: 20,
  eloquence: 21,
  glamour: 22,
  lore: 23,
  spirits: 24,
  swords: 25,
  valor: 26,
  whispers: 27,
};

const BardSubclassFeatures: Prisma.SubClassFeatureCreateManyInput[] = [
  //creation
  {
    name: "Mote of Potential",
    description:
      "When you join the College of Creation at 3rd level, whenever you give a creature a Bardic Inspiration die, you can utter a note from the Song of Creation to create a Tiny mote of potential, which orbits within 5 feet of that creature. The mote is intangible and invulnerable, and it lasts until the Bardic Inspiration die is lost. The mote looks like a musical note, a star, a flower, or another symbol of art or life that you choose.\n\nWhen the creature uses the Bardic Inspiration die, the mote provides an additional effect based on whether the die benefits an ability check, an attack roll, or a saving throw, as detailed below:",
    options: [
      "**Ability Check.** When the creature rolls the Bardic Inspiration die to add it to an ability check, the creature can roll the Bardic Inspiration die again and choose which roll to use, as the mote pops and emits colorful, harmless sparks for a moment.",
      "**Attack Roll.** Immediately after the creature rolls the Bardic Inspiration die to add it to an attack roll against a target, the mote thunderously shatters. The target and each creature of your choice that you can see within 5 feet of it must succeed on a Constitution saving throw against your spell save DC or take thunder damage equal to the number rolled on the Bardic Inspiration die.",
      "**Saving Throw.** Immediately after the creature rolls the Bardic Inspiration die and adds it to a saving throw, the mote vanishes with the sound of soft music, causing the creature to gain temporary hit points equal to the number rolled on the Bardic Inspiration die plus your Charisma modifier (minimum of 1 temporary hit point).",
    ],
    subClassId: ids.creation,
    levels: [3],
  },
  {
    name: "Performance of Creation",
    description:
      "Also at 3rd level, as an action, you can channel the magic of the Song of Creation to create one nonmagical item of your choice in an unoccupied space within 10 feet of you. The item must appear on a surface or in a liquid that can support it. The gp value of the item can't be more than 20 times your bard level, and the item must be Medium or smaller. The item glimmers softly, and a creature can faintly hear music when touching it. The created item disappears after a number of hours equal to your proficiency bonus. For examples of items you can create, see the equipment chapter of the Player's Handbook.\n\nOnce you create an item with this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 2nd level or higher to use this feature again. You can have only one item created by this feature at a time; if you use this action and already have an item from this feature, the first one immediately vanishes.\n\nThe size of the item you can create with this feature increases by one size category when you reach 6th level (Large) and 14th level (Huge).",
    subClassId: ids.creation,
    levels: [3],
  },
  {
    name: "Animating Performance",
    description: `By 6th level, as an action, you can animate one Large or smaller nonmagical item within 30 feet of you that isn’t being worn or carried. The animate item uses the Dancing Item stat block, which uses your proficiency bonus (PB), The item is friendly to you and your companions and obeys your commands. It lives for 1 hour, until it is reduced to 0 hit points, or until you die.\n\nIn combat, the item shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the item can take any action of its choice, not just Dodge.\n\nWhen you use your Bardic Inspiration feature, you can command the item as part of the same bonus action you use for Bardic Inspiration.\n\nOnce you animate an item with this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 3rd level or higher to use this feature again. You can have only one item animated by this feature at a time; if you use this action and already have a dancing item from this feature, the first one immediately becomes inanimate.
    
    **Dancing Item**
    *Large or smaller construct*

    **Armor Class:** 16 (natural armor)
    **Hit Points:** equal to 10 + 5 times your bard level
    **Speed:** 30 ft., fly 30 ft. (hover)

    **STR** 14 (+2) **DEX** 18 (+4) **CON** 14 (+2) **INT** 3 (-4) **WIS** 14 (+2) **CHA** 6 (-2)
    
    **Damage Immunities:** poison, psychic
    **Condition Immunities:** charmed, exhaustion, poisoned, frightened
    
    **Senses:** darkvision 60 ft., passive Perception 10
    **Languages:** understands the languages you speak
    **Proficiency Bonus:** equal to your own
    
    **Immutable Form:** The item is immune to any spell or effect that would alter its form.
    **Irrepresable Dance:** When any creature starts its turn within 10 feet of the item, the item can increase or decrease (your choice) the walking speed of that creature by 10 feet until the end of the turn, provided the item isn't incapacitated.
    
    **Actions**
    **Force Empowered Slam:** *Melee Weapon Attack:* your spell attack modifier to hit, reach 5 ft., one target you can see. *Hit:* 1d10 + PB force damage.`,
    extendedTable: [
      {
        "": {
          headers: ["STR", "DEX", "CON", "INT", "WIS", "CHA"],
          data: [
            { STR: "14", DEX: "18", CON: "14", INT: "3", WIS: "14", CHA: "6" },
          ],
        },
      },
      {
        "Dancing Item": {
          headers: ["Stat", "Value"],
          data: [
            { Stat: "Armor Class", Value: "16 (natural armor)" },
            {
              Stat: "Hit Points",
              Value: "equal to 10 + 5 times your bard level",
            },
            { Stat: "Speed", Value: "30 ft., fly 30 ft. (hover)" },
            { Stat: "Damage Immunities", Value: "poison, psychic" },
            {
              Stat: "Condition Immunities",
              Value: "charmed, exhaustion, poisoned, frightened",
            },
            {
              Stat: "Senses",
              Value: "darkvision 60 ft., passive Perception 10",
            },
            { Stat: "Languages", Value: "understands the languages you speak" },
            { Stat: "Proficiency Bonus", Value: "equal to your own" },
            {
              Stat: "Immutable Form",
              Value:
                "The item is immune to any spell or effect that would alter its form.",
            },
            {
              Stat: "Irrepresable Dance",
              Value:
                "When any creature starts its turn within 10 feet of the item, the item can increase or decrease (your choice) the walking speed of that creature by 10 feet until the end of the turn, provided the item isn't incapacitated.",
            },
          ],
        },
      },
      {
        Actions: {
          headers: ["Name", "Description"],
          data: [
            {
              Name: "Force Empowered Slam",
              Description:
                "*Melee Weapon Attack:* your spell attack modifier to hit, reach 5 ft., one target you can see. *Hit:* 1d10 + PB force damage.",
            },
          ],
        },
      },
    ],
    subClassId: ids.creation,
    levels: [6],
  },
  {
    name: "Creative Crescendo",
    description:
      "At 14th level, when you use your Performance of Creation feature, you can create more than one item at once. The number of items equals your Charisma modifier (minimum of two items). If you create an item that would exceed that number, you choose which of the previously created items disappears. Only one of these items can be of the maximum size you can create; the rest must be Small or Tiny.\n\nYou are no longer limited by gp value when creating items with Performance of Creation.",
    subClassId: ids.creation,
    levels: [14],
  },
  {
    name: "Performance of Creation Improvement",
    description:
      "At 14th level, you can create items with your Performance of Creation feature that have a gp value of 50 times your bard level or less, and the items can be Large or smaller. The items disappear after a number of days equal to your proficiency bonus.",
    subClassId: ids.creation,
    levels: [14],
  },
  // eloquence
  {
    name: "Silver-Tongued",
    description:
      "Starting at 3rd level, you are a master at saying the right thing at the right time. When you make a Charisma (Persuasion) or Charisma (Deception) check, you can treat a d20 roll of 9 or lower as a 10.",
    subClassId: ids.eloquence,
    levels: [3],
  },
  {
    name: "Unsettling Words",
    description:
      "Also at 3rd level, you can spin words laced with magic that unsettle a creature and cause it to doubt itself. As a bonus action, you can expend one use of your Bardic Inspiration and choose one creature you can see within 60 feet of you. Roll the Bardic Inspiration die. The creature must subtract the number rolled from the next saving throw it makes before the start of your next turn.",
    subClassId: ids.eloquence,
    levels: [3],
  },
  {
    name: "Unfailing Inspiration",
    description:
      "At 6th level, your inspiring words are so persuasive that others feel driven to succeed. When a creature adds one of your Bardic Inspiration dice to its ability check, attack roll, or saving throw and the roll fails, the creature can keep the Bardic Inspiration die.",
    subClassId: ids.eloquence,
    levels: [6],
  },
  {
    name: "Universal Speech",
    description:
      "Also at 6th level, you have gained the ability to make your speech intelligible to any creature. As an action, choose one or more creatures within 60 feet of you, up to a number equal to your Charisma modifier (minimum of one creature). The chosen creatures can magically understand you, regardless of the language you speak, for 1 hour.\n\nOnce you use this feature, you can't use it again until you finish a long rest, unless you expend a spell slot to use it again.",
    subClassId: ids.eloquence,
    levels: [6],
  },
  {
    name: "Infectious Inspiration",
    description:
      "At 14th level, when you successfully inspire someone, the power of your eloquence can now spread to someone else. When a creature within 60 feet of you adds one of your Bardic Inspiration dice to its ability check, attack roll, or saving throw and the roll succeeds, you can use your reaction to encourage a different creature (other than yourself) that can hear you within 60 feet of you, giving it a Bardic Inspiration die without expending any of your Bardic Inspiration uses.\n\nYou can use this reaction a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a long rest.",
    subClassId: ids.eloquence,
    levels: [14],
  },
  //Glamour
  {
    name: "Mantle of Inspiration",
    description:
      "When you join the College of Glamour at 3rd level, you gain the ability to weave a song of fey magic that imbues your allies with vigor and speed.\n\nAs a bonus action, you can expend one use of your Bardic Inspiration to grant yourself a wondrous appearance. When you do so, choose a number of creatures you can see and who can see you within 60 feet of you, up to a number equal to your Charisma modifier (minimum of one). Each of them gains 5 temporary hit points. When a creature gains these temporary hit points, it can immediately use its reaction to move up to its speed, without provoking opportunity attacks.\n\nThe number of temporary hit points increases when you reach certain levels in this class, increasing to 8 at 5th level, 11 at 10th level, and 14 at 15th level.",
    subClassId: ids.glamour,
    levels: [3],
  },
  {
    name: "Enthralling Performance",
    description:
      "Starting at 3rd level, you can charge your performance with seductive, fey magic.\n\nIf you perform for at least 1 minute, you can attempt to inspire wonder in your audience by singing, reciting a poem, or dancing. At the end of the performance, choose a number of humanoids within 60 feet of you who watched and listened to all of it, up to a number equal to your Charisma modifier (minimum of one). Each target must succeed on a Wisdom saving throw against your spell save DC or be charmed by you. While charmed in this way, the target idolizes you, it speaks glowingly of you to anyone who speaks to it, and it hinders anyone who opposes you, avoiding violence unless it was already inclined to fight on your behalf. This effect ends on a target after 1 hour, if it takes any damage, if you attack it, or if it witnesses you attacking or damaging any of its allies.\n\nIf a target succeeds on its saving throw, the target has no hint that you tried to charm it.\n\nOnce you use this feature, you can’t use it again until you finish a short or long rest.",
    subClassId: ids.glamour,
    levels: [3],
  },
  {
    name: "Mantle of Majesty",
    description:
      "At 6th level, you gain the ability to cloak yourself in a fey magic that makes others want to serve you. As a bonus action, you cast Command, without expending a spell slot, and you take on an appearance of unearthly beauty for 1 minute or until your concentration ends (as if you were concentrating on a spell). During this time, you can cast Command as a bonus action on each of your turns, without expending a spell slot.\n\nAny creature charmed by you automatically fails its saving throw against the Command you cast with this feature.\n\nOnce you use this feature, you can’t use it again until you finish a long rest.",
    subClassId: ids.glamour,
    levels: [6],
  },
  {
    name: "Unbreakable Majesty",
    description:
      "At 14th level, your appearance permanently gains an otherworldly aspect that makes you look more lovely and fierce.\n\nIn addition, as a bonus action, you can assume a magically majestic presence for 1 minute or until you are incapacitated. For the duration, whenever any creature tries to attack you for the first time on a turn, the attacker must make a Charisma saving throw against your spell save DC. On a failed save, it can't attack you on this turn, and it must choose a new target for its attack or the attack is wasted. On a successful save, it can attack you on this turn, but it has disadvantage on any saving throw it makes against your spells on your next turn.\n\nOnce you assume this majestic presence, you can't do so again until you finish a short or long rest.",
    subClassId: ids.glamour,
    levels: [14],
  },
  //lore
  {
    name: "Bonus Proficiencies",
    description:
      "When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice.",
    subClassId: ids.lore,
    levels: [3],
  },
  {
    name: "Cutting Words",
    description:
      "Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll. You can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed.",
    subClassId: ids.lore,
    levels: [3],
  },
  {
    name: "Additional Magical Secrets",
    description:
      "At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don't count against the number of bard spells you know.",
    subClassId: ids.lore,
    levels: [6],
  },
  {
    name: "Peerless Skill",
    description:
      "Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the DM tells you whether you succeed or fail.",
    subClassId: ids.lore,
    levels: [14],
  },
  //spirits
  {
    name: "Guiding Whispers",
    description:
      "At 3rd level, you can reach out to spirits to guide you and others. You learn the Guidance cantrip, which doesn’t count against the number of bard cantrips you know. For you, it has a range of 60 feet when you cast it.",
    subClassId: ids.spirits,
    levels: [3],
  },
  {
    name: "Spiritual Focus",
    description:
      "At 3rd level, you employ tools that aid you in channeling spirits, be they historical figures or fictional archetypes. You can use the following objects as a spellcasting focus for your bard spells: a candle, crystal ball, skull, spirit board, or tarokka deck.\n\nStarting at 6th level, when you cast a bard spell that deals damage or restores hit points through the Spiritual Focus, roll a d6, and you gain a bonus to one damage or healing roll of the spell equal to the number rolled.",
    subClassId: ids.spirits,
    levels: [3],
  },
  {
    name: "Tales from Beyond",
    description:
      "At 3rd level, you reach out to spirits who tell their tales through you. While you are holding your Spiritual Focus, you can use a bonus action to expend one use of your Bardic Inspiration and roll on the options below using your Bardic Inspiration die to determine the tale the spirits direct you to tell. You retain the tale in mind until you bestow the tale’s effect or you finish a short or long rest.\n\nYou can use an action to choose one creature you can see within 30 feet of you (this can be you) to be the target of the tale’s effect. Once you do so, you can’t bestow the tale’s effect again until you roll it again.\n\nYou can retain only one of these tales in mind at a time, and rolling on one of the options below immediately ends the effect of the previous tale.\n\nIf the tale requires a saving throw, the DC equals your spell save DC.",
    subClassId: ids.spirits,
    levels: [3],
    extendedTable: [
      {
        "": {
          headers: ["Roll", "Effect", "Description"],
          data: [
            {
              Roll: "1",
              Effect: "Tale of the Clever Animal",
              Description:
                "For the next 10 minutes, whenever the target makes an Intelligence, a Wisdom, or a Charisma check, the target can roll an extra die immediately after rolling the d20 and add the extra die's number to the check. The extra die is the same type as your Bardic Inspiration die.",
            },
            {
              Roll: "2",
              Effect: "Tale of the Renowned Duelist",
              Description:
                "You make a melee spell attack against the target. On a hit, the target takes force damage equal to two rolls of your Bardic Inspiration die + your Charisma modifier.",
            },
            {
              Roll: "3",
              Effect: "Tale of the Beloved Friends",
              Description:
                "The target and another creature of its choice it can see within 5 feet of it gains temporary hit points equal to a roll of your Bardic Inspiration die + your Charisma modifier",
            },
            {
              Roll: "4",
              Effect: "Tale of the Runaway",
              Description:
                "The target can immediately use its reaction to teleport up to 30 feet to an unoccupied space it can see. When the target teleports, it can choose a number of creatures it can see within 30 feet of it up to your Charisma modifier (minimum of 0) to immediately use the same reaction.",
            },
            {
              Roll: "5",
              Effect: "Tale of the Avenger",
              Description:
                "For 1 minute, any creature that hits the target with a melee attack takes force damage equal to a roll of your Bardic Inspiration die.",
            },
            {
              Roll: "6",
              Effect: "Tale of the Traveler",
              Description:
                "The target gains temporary hit points equal to a roll of your Bardic Inspiration die + your bard level. While it has these temporary hit points, the target’s walking speed increases by 10 feet and it gains a +1 bonus to its AC.",
            },
            {
              Roll: "7",
              Effect: "Tale of the Beguiler",
              Description:
                "The target must succeed on a Wisdom saving throw or take psychic damage equal to two rolls of your Bardic Inspiration die, and the target is incapacitated until the end of its next turn.",
            },
            {
              Roll: "8",
              Effect: "Tale of the Phantom",
              Description:
                "The target becomes invisible until the end of its next turn or until it hits a creature with an attack. If it hits a creature with an attack during this invisibility, the creature it hits takes necrotic damage equal to a roll of your Bardic Inspiration die and is frightened of the target until the end of the frightened creature's next turn.",
            },
            {
              Roll: "9",
              Effect: "Tale of the Brute",
              Description:
                "Each creature of the target’s choice it can see within 30 feet of it must make a Strength saving throw. On a failed save, a creature takes thunder damage equal to three rolls of your Bardic Inspiration die and is knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn’t knocked prone.",
            },
            {
              Roll: "10",
              Effect: "Tale of the Dragon",
              Description:
                "The target spews fire from the mouth in a 30-foot cone. Each creature in that area must make a Dexterity saving throw, taking fire damage equal to four rolls of your Bardic Inspiration die on a failed save, or half as much damage on a successful one.",
            },
            {
              Roll: "11",
              Effect: "Tale of the Angel",
              Description:
                "The target regains hit points equal to two rolls of your Bardic Inspiration die + your Charisma modifier, and you end one condition from the following list affecting the target: blinded, deafened, paralyzed, petrified, or poisoned.",
            },
            {
              Roll: "12",
              Effect: "Tale of the Mind-Bender",
              Description:
                "You envoke an incomprehensible fable from an otherworldly being. The target must succeed on an Intelligence saving throw or take psychic damage equal to three rolls of your Bardic Inspiration die and be stunned until the end of its next turn.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Spirit Session",
    description:
      "At 6th level, spirits provide you with supernatural insights. You can conduct an hour-long ritual channeling spirits (which can be done during a short or long rest) using your Spiritual Focus. You can conduct the ritual with a number of willing creatures equal to your proficiency bonus (including yourself). At the end of the ritual, you temporarily learn one spell of your choice from any class.\n\nThe spell you choose must be of a level equal to the number of creatures that conducted the ritual or less, the spell must of a level you can cast, and it must be in the school of Divination or Necromancy. The chosen spell counts as a bard spell for you but doesn’t count against the number of bard spells you know.\n\nOnce you perform the ritual, you can’t do so again until you start a long rest, and you know the chosen spell until you start a long rest.",
    subClassId: ids.spirits,
    levels: [6],
  },
  {
    name: "Mystical Connection",
    description:
      "At 14th level, you now have the ability to nudge the spirits of Tales from Beyond toward certain tales. Whenever you roll on the Spirit Tales table, you can roll the die twice and choose which of the two effects to bestow. If you roll the same number on both dice, you can ignore the number and choose any effect on the table.",
    subClassId: ids.spirits,
    levels: [14],
  },
  // swords
  {
    name: "Bonus Proficiencies",
    description:
      "When you join the College of Swords at 3rd level, you gain proficiency with medium armor and the scimitar.\n\nIf you’re proficient with a simple or martial melee weapon, you can use it as a spellcasting focus for your bard spells.",
    subClassId: ids.swords,
    levels: [3],
  },
  {
    name: "Fighting Style",
    description:
      "At 3rd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",

    extendedTable: [
      {
        "": {
          headers: ["Fighting Style", "Description"],
          data: [
            {
              "Fighting Style": "Dueling",
              Description:
                "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
            },
            {
              "Fighting Style": "Two-Weapon Fighting",
              Description:
                "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.",
            },
          ],
        },
      },
    ],
    subClassId: ids.swords,
    levels: [3],
  },
  {
    name: "Blade Flourish",
    description:
      "At 3rd level, you learn to conduct impressive displays of martial prowess and speed.\n\nWhenever you take the Attack action on your turn, your walking speed increases by 10 feet until the end of the turn, and if a weapon attack that you make as part of this action hits a creature, you can use one of the following Blade Flourish options of your choice. You can use only one Blade Flourish option per turn.",
    extendedTable: [
      {
        "": {
          headers: ["Flourish Name", "Description"],
          data: [
            {
              "Flourish Name": "Defensive Flourish",
              Description:
                "You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit. The damage equals the number you roll on the Bardic Inspiration die. You also add the number rolled to your AC until the start of your next turn.",
            },
            {
              "Flourish Name": "Slashing Flourish",
              Description:
                "You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit and to any other creature of your choice that you can see within 5 feet of you. The damage equals the number you roll on the Bardic Inspiration die.",
            },
            {
              "Flourish Name": "Mobile Flourish",
              Description:
                "You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit. The damage equals the number you roll on the Bardic Inspiration die. You can also push the target up to 5 feet away from you, plus a number of feet equal to the number you roll on that die. You can then immediately use your reaction to move up to your walking speed to an unoccupied space within 5 feet of the target.",
            },
          ],
        },
      },
    ],
    subClassId: ids.swords,
    levels: [3],
  },
  {
    name: "Extra Attack",
    description:
      "Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
    subClassId: ids.swords,
    levels: [6],
  },
  {
    name: "Master's Flourish",
    description:
      "Starting at 14th level, whenever you use a Blade Flourish option, you can roll a d6 and use it instead of expending a Bardic Inspiration die.",
    subClassId: ids.swords,
    levels: [14],
  },
  //valor
  {
    name: "Bonus Proficiencies",
    description:
      "When you join the College of Valor at 3rd level, you gain proficiency with medium armor, shields, and martial weapons.",
    subClassId: ids.valor,
    levels: [3],
  },
  {
    name: "Combat Inspiration",
    description:
      "Also at 3rd level, you learn to inspire others in battle. A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits or misses.",
    subClassId: ids.valor,
    levels: [3],
  },
  {
    name: "Extra Attack",
    description:
      "Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
    subClassId: ids.valor,
    levels: [6],
  },
  {
    name: "Battle Magic",
    description:
      "At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to cast a bard spell, you can make one weapon attack as a bonus action.",
    subClassId: ids.valor,
    levels: [14],
  },
  // whispers
  {
    name: "Psychic Blades",
    description:
      "When you join the College of Whispers at 3rd level, you gain the ability to make your weapon attacks magically toxic to a creature's mind.\n\nWhen you hit a creature with a weapon attack, you can expend one use of your Bardic Inspiration to deal an additional 2d6 psychic damage to that target. You can do so only once per round on your turn.\n\nThe psychic damage increases when you reach certain levels in this class, increasing to 3d6 at 5th level, 5d6 at 10th level, and 8d6 at 15th level.",
    subClassId: ids.whispers,
    levels: [3, 5, 10, 15],
  },
  {
    name: "Words of Terror",
    description:
      "At 3rd level, you learn to infuse innocent-seeming words with an insidious magic that can inspire terror.\n\nIf you speak to a humanoid alone for at least 1 minute, you can attempt to seed paranoia and fear into its mind. At the end of the conversation, the target must succeed on a Wisdom saving throw against your spell save DC or be frightened of you or another creature of your choice. The target is frightened in this way for 1 hour, until it is attacked or damaged, or until it witnesses its allies being attacked or damaged.\n\nIf the target succeeds on its saving throw, the target has no hint that you tried to frighten it.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest.",
    subClassId: ids.whispers,
    levels: [3],
  },
  {
    name: "Mantle of Whispers",
    description:
      "At 6th level, you gain the ability to adopt a humanoid's persona. When a humanoid dies within 30 feet of you, you can magically capture its shadow using your reaction. You retain this shadow until you use it or you finish a long rest.\n\nYou can use the shadow as an action. When you do so, it vanishes, magically transforming into a disguise that appears on you. You now look like the dead person, but healthy and alive. This disguise lasts for 1 hour or until you end it as a bonus action.\n\nWhile you're in the disguise, you gain access to all information that the humanoid would freely share with a casual acquaintance. Such information includes general details on its background and personal life, but doesn't include secrets. The information is enough that you can pass yourself off as the person by drawing on its memories.\n\nAnother creature can see through this disguise by succeeding on a Wisdom (Insight) check contested by your Charisma (Deception) check. You gain a +5 bonus to your check.\n\nOnce you capture a shadow with this feature, you can't capture another one with it until you finish a short or long rest.",
    subClassId: ids.whispers,
    levels: [6],
  },
  {
    name: "Shadow Lore",
    description:
      "At 14th level, you gain the ability to weave dark magic into your words and tap into a creature’s deepest fears.\n\nAs an action, you magically whisper a phrase that only one creature of your choice within 30 feet of you can hear. The target must make a Wisdom saving throw against your spell save DC. It automatically succeeds if it doesn’t share a language with you or if it can’t hear you. On a successful saving throw, your whisper sounds like unintelligible mumbling and has no effect.\n\nIf the target fails its saving throw, it is charmed by you for the next 8 hours or until you or your allies attack or damage it. It interprets the whispers as a description of its most mortifying secret.\n\nWhile you gain no knowledge of this secret, the target is convinced you know it. While charmed in this way, the creature obeys your commands for fear that you will reveal its secret. It won’t risk its life for you or fight for you, unless it was already inclined to do so. It grants you favors and gifts it would offer to a close friend.\n\nWhen the effect ends, the creature has no understanding of why it held you in such fear.\n\nOnce you use this feature, you can’t use it again until you finish a long rest.",
    subClassId: ids.whispers,
    levels: [14],
  },
];

export default BardSubclassFeatures;
