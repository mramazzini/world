import { Prisma } from "@prisma/client";

const ids = {
  arcaneArcher: 1,
  banneret: 2,
  battleMaster: 3,
  cavalier: 4,
  champion: 5,
  echoKnight: 6,
  eldritchKnight: 7,
  psiWarrior: 8,
  runeKnight: 9,
  samurai: 10,
};

const FighterSubclassFeatures: Prisma.SubClassFeatureCreateManyInput[] = [
  // arcane archer
  {
    subClassId: ids.arcaneArcher,
    name: "Arcane Archer Lore",
    description:
      "At 3rd level, you learn magical theory or some of the secrets of nature – typical for practitioners of the arcane archery. You gain proficiency in Arcana or Nature (your choice), and you choose to learn either the Prestidigitation or Druidcraft cantrip.",
    levels: [3],
  },
  {
    name: "Arcane Shot",
    description:
      "At 3rd level, you learn to unleash special magical effects with some of your shots. When you gain this feature, you learn two Arcane Shot options of your choice (see 'Arcane Shot Options' below).\n\nOnce per turn when you fire an arrow from a shortbow or longbow as part of the Attack action, you can apply one of your Arcane Shot options to that arrow. You decide to use the option when the arrow hits, unless the option doesn’t involve an attack roll. You have two uses of this ability, and you regain all expended uses of it when you finish a short or long rest.\n\nYou gain an additional Arcane Shot option of your choice when you reach certain levels in this class: 7th, 10th, 15th, and 18th level. Each option also improves when you become an 18th-level fighter.",
    subClassId: ids.arcaneArcher,

    extendedTable: [
      {
        "Arcane Shot Options": {
          headers: ["Arrow Type", "Effect"],
          data: [
            {
              "Arrow Type": "Banishing Arrow",
              Effect:
                "You use abjuration magic to try to temporarily banish your target to a harmless location in the Feywild. The creature hit by the arrow must also succeed on a Charisma saving throw or be banished. While banished in this way, its speed is 0, and it is incapacitated. At the end of its next turn, the target reappears in the space it vacated or in the nearest unoccupied space if that space is occupied.\n\nAfter you reach 18th level in this class, a target also takes 2d6 force damage when the arrow hits it",
            },
            {
              "Arrow Type": "Beguiling Arrow",
              Effect:
                "Your enchantment magic causes this arrow to temporarily beguile its target. The creature hit by the arrow takes an extra 2d6 psychic damage, and choose one of your allies within 30 feet of the target. The target must succeed on a Wisdom saving throw, or it is charmed by the chosen ally until the start of your next turn. This effect ends early if the chosen ally attacks the charmed target, deals damage to it, or forces it to make a saving throw. \n\nThe psychic damage increases to 4d6 when you reach 18th level in this class.",
            },
            {
              "Arrow Type": "Bursting Arrow",
              Effect:
                "You imbue your arrow with force energy drawn from the school of evocation. The arrow detonates after your attack. Immediately after the arrow hits the creature, the target and all other creatures within 10 feet of it take 2d6 force damage each.\n\n The force damage increases to 4d6 when you reach 18th level in this class.",
            },
            {
              "Arrow Type": "Enfeebling Arrow",
              Effect:
                "You weave necromantic magic into your arrow. The creature hit by the arrow takes an extra 2d6 necrotic damage. The target must also succeed on a Constitution saving throw, or the damage dealt by its weapon attacks is halved until the start of your next turn.\n\n The necrotic damage increases to 4d6 when you reach 18th level in this class.",
            },
            {
              "Arrow Type": "Grasping Arrow",
              Effect:
                "When this arrow strikes it's target, conjuration magic creates grasping poisonous brambles, which wrap around the target. The creature hit by the arrow takes extra 2d6 poison damage, it's speed is reduced by 10 feet, and it takes 2d6 slashing damage the first time on each turn it moves 1 foot or more without teleporting. the target or any creature that can reach it can use its action to remove the brambles with a successful Strength (Athletics) check against your Arcane shot save DC. Otherwise, the brambles last for 1 minute or until you use this option again.\n\n The poison damage and slashing damage both increase to 4d6 when you reach the 18th level",
            },
            {
              "Arrow Type": "Piercing Arrow",
              Effect:
                "You use transmutation magic to give your arrow an ethereal quality. When you use this option, you don’t make an attack roll for the attack. Instead, the arrow fires forward in a line, which is 1 foot wide and 30 feet long, before disappearing. The arrow passes harmlessly through objects, ignoring cover. Each creature in that line must make a Dexterity saving throw. On a failed save, a creature takes damage as if it were hit by the arrow, plus an extra 1d6 piercing damage. On a successful save, a target takes half as much damage.\n\n The piercing damage increases to 2d6 when you reach 18th level in this class.",
            },
            {
              "Arrow Type": "Seeking Arrow",
              Effect:
                "Using divination magic, you grant your arrow the ability to seek out your target, allowing the arrow to curve and twist its path in search of its prey. When you use this option, you don’t make an attack roll for the attack. Instead, choose one creature you have seen in the past minute. The arrow flies toward that creature, moving around corners if necessary and ignoring three-quarters cover and half cover. If the target is within the weapon’s range and there is a path large enough for the arrow to travel to the target, the target must make a Dexterity saving throw. On a failed save, it takes damage as if it were hit by the arrow, plus an extra 1d6 force damage, and you learn the target’s current location. On a successful save, the target takes half as much damage, and you don’t learn its location.\n\n The force damage increases to 2d6 when you reach 18th level in this class.",
            },
            {
              "Arrow Type": "Shadow Arrow",
              Effect:
                "You weave illusion magic into your arrow, causing it to occlude your foe’s vision with shadows. The creature hit by the arrow takes an extra 2d6 psychic damage, and it must succeed on a Wisdom saving throw or be unable to see anything farther than 5 feet away until the start of your next turn.\n\n The psychic damage increases to 4d6 when you reach 18th level in this class.",
            },
          ],
        },
      },
    ],
    levels: [3, 7, 10, 15, 18],
  },
  {
    name: "Magic Arrow",
    description:
      "At 7th level, you gain the ability to infuse arrows with magic. Whenever you fire a nonmagical arrow from a shortbow or longbow, you can make it magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage. The magic fades from the arrow immediately after it hits or misses its target.",
    subClassId: ids.arcaneArcher,
    levels: [7],
  },
  {
    name: "Curving Shot",
    description:
      "At 7th level, you learn how to direct an errant arrow toward a new target. When you make an attack roll with a magic arrow and miss, you can use a bonus action to reroll the attack roll against a different target within 60 feet of the original target.",
    subClassId: ids.arcaneArcher,
    levels: [7],
  },
  {
    name: "Ever-Ready Shot",
    description:
      "Starting at 15th level, your magical archery is available whenever battle starts. If you roll initiative and have no uses of Arcane Shot remaining, you regain one use of it.",
    subClassId: ids.arcaneArcher,
    levels: [15],
  },
  {
    subClassId: ids.banneret,
    name: "Banneret Lore",
    description:
      "At 3rd level, you learn magical theory or some of the secrets of nature – typical for practitioners of the arcane archery. You gain proficiency in Arcana or Nature (your choice), and you choose to learn either the Prestidigitation or Druidcraft cantrip.",
    levels: [3],
  },
  {
    name: "Rallying Cry",
    description:
      "When you choose this archetype at 3rd level, you learn how to inspire your allies to fight on past their injuries.\n\nWhen you use your Second Wind feature, you can choose up to three creatures within 60 feet of you that are allied with you. Each one regains hit points equal to your fighter level, provided that the creature can see or hear you.",
    subClassId: ids.banneret,
    levels: [3],
  },
  {
    name: "Royal Envoy",
    description:
      "Knights of high standing are expected to conduct themselves with grace.\n\nAt 7th level, you gain proficiency in the Persuasion skill. If you are already proficient in it, you gain proficiency in one of the following skills of your choice: Animal Handling, Insight, Intimidation, or Performance.\n\nYour proficiency bonus is doubled for any ability check you make that uses Persuasion. You receive this benefit regardless of the skill proficiency you gain from this feature.",
    subClassId: ids.banneret,
    levels: [7],
  },
  {
    name: "Inspiring Surge",
    description:
      "Starting at 10th level, when you use your Action Surge feature, you can choose one creature within 60 feet of you that is allied with you. That creature can make one melee or ranged weapon attack with its reaction, provided that it can see or hear you.\n\nStarting at 18th level, you can choose two allies within 60 feet of you, rather than one.",
    subClassId: ids.banneret,
    levels: [10, 18],
  },
  {
    name: "Bulwark",
    description:
      "Beginning at 15th level, you can extend the benefit of your Indomitable feature to an ally. When you decide to use Indomitable to reroll an Intelligence, a Wisdom, or a Charisma saving throw and you aren't incapacitated, you can choose one ally within 60 feet of you that also failed its saving throw against the same effect. If that creature can see or hear you, it can reroll its saving throw and must use the new roll.",
    subClassId: ids.banneret,
    levels: [15],
  },
  // battle master
  {
    name: "Combat Superiority",
    description:
      "At 3rd level, you learn maneuvers that are fueled by special dice called superiority dice.\n\n**Maneuvers.** You learn three maneuvers of your choice, listed in the Battle Master Maneuvers table below. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack. You learn two additional maneuvers of your choice at 7th, 10th, and 15th level. Each time you learn new maneuvers, you can also replace one maneuver you know with a different one.\n\n**Superiority Dice.** You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest. You gain another superiority die at 7th level and one more at 15th level.\n\n**Saving Throws.** Some of your maneuvers require your target to make a saving throw to resist the maneuver's effects. The saving throw DC is calculated as follows:\n\n**Maneuver save DC** = 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice)",
    subClassId: ids.battleMaster,
    levels: [3],
    extendedTable: [
      {
        "Battle Master Maneuvers": {
          headers: ["Maneuver", "Description"],
          data: [
            {
              Maneuver: "Ambush",
              Description:
                "When you make a Dexterity (Stealth) check or an initiative roll, you can expend one superiority die and add the die to the roll, provided you aren't incapacitated.",
            },
            {
              Maneuver: "Bait and Switch",
              Description:
                "When you're within 5 feet of a creature on your turn, you can expend one superiority die and switch places with that creature, provided you spend at least 5 feet of movement and the creature is willing and isn't incapacitated. This movement doesn't provoke opportunity attacks.\n\nRoll the superiority die. Until the start of your next turn, you or the other creature (your choice) gains a bonus to AC equal to the number rolled.",
            },
            {
              Maneuver: "Brace",
              Description:
                "When a creature you can see moves into the reach you have with the melee weapon you're wielding, you can use your reaction to expend one superiority die and make one attack against the creature, using that weapon. If the attack hits, add the superiority die to the weapon's damage roll.",
            },
            {
              Maneuver: "Commander's Strike",
              Description:
                "When you take the Attack action on your turn, you can forgo one of your attacks and use a bonus action to direct one of your companions to strike. When you do so, choose a friendly creature who can see or hear you and expend one superiority die. That creature can immediately use its reaction to make one weapon attack, adding the superiority die to the attack's damage roll.",
            },
            {
              Maneuver: "Commanding Presence",
              Description:
                "When you make a Charisma (Intimidation), a Charisma (Performance), or a Charisma (Persuasion) check, you can expend one superiority die and add the superiority die to the ability check.",
            },
            {
              Maneuver: "Disarming Attack",
              Description:
                "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to disarm the target, forcing it to drop one item of your choice that it's holding. You add the superiority die to the attack's damage roll, and the target must make a Strength saving throw. On a failed save, it drops the object you choose. The object lands at its feet.",
            },
            {
              Maneuver: "Distracting Strike",
              Description:
                "When you hit a creature with a weapon attack, you can expend one superiority die to distract the creature, giving your allies an opening. You add the superiority die to the attack's damage roll. The next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn.",
            },
            {
              Maneuver: "Evasive Footwork",
              Description:
                "When you move, you can expend one superiority die, rolling the die and adding the number rolled to your AC until you stop moving.",
            },
            {
              Maneuver: "Feinting Attack",
              Description:
                "You can expend one superiority die and use a bonus action on your turn to feint, choosing one creature within 5 feet of you as your target. You have advantage on your next attack roll against that creature this turn. If that attack hits, add the superiority die to the attack's damage roll.",
            },
            {
              Maneuver: "Goading Attack",
              Description:
                "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to goad the target into attacking you. You add the superiority die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, the target has disadvantage on all attack rolls against targets other than you until the end of your next turn.",
            },
            {
              Maneuver: "Grappling Strike",
              Description:
                "Immediately after you hit a creature with a melee attack on your turn, you can expend one superiority die and then try to grapple the target as a bonus action (see the Player's Handbook for rules on grappling). Add the superiority die to your Strength (Athletics) check.",
            },
            {
              Maneuver: "Lunging Attack",
              Description:
                "When you make a melee weapon attack on your turn, you can expend one superiority die to increase your reach for that attack by 5 feet. If you hit, you add the superiority die to the attack's damage roll.",
            },
            {
              Maneuver: "Maneuvering Attack",
              Description:
                "When you hit a creature with a weapon attack, you can expend one superiority die to maneuver one of your comrades into a more advantageous position. You add the superiority die to the attack's damage roll, and you choose a friendly creature who can see or hear you. That creature can use its reaction to move up to half its speed without provoking opportunity attacks from the target of your attack.",
            },
            {
              Maneuver: "Menacing Attack",
              Description:
                "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to frighten the target. You add the superiority die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, it is frightened of you until the end of your next turn.",
            },
            {
              Maneuver: "Parry",
              Description:
                "When another creature damages you with a melee attack, you can use your reaction and expend one superiority die to reduce the damage by the number you roll on your superiority die + your Dexterity modifier.",
            },
            {
              Maneuver: "Precision Attack",
              Description:
                "When you make a weapon attack roll against a creature, you can expend one superiority die to add it to the roll. You can use this maneuver before or after making the attack roll, but before any effects of the attack are applied.",
            },
            {
              Maneuver: "Pushing Attack",
              Description:
                "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to drive the target back. You add the superiority die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you push the target up to 15 feet away from you.",
            },
            {
              Maneuver: "Quick Toss",
              Description:
                "As a bonus action, you can expend one superiority die and make a ranged attack with a weapon that has the thrown property. You can draw the weapon as part of making this attack. If you hit, add the superiority die to the weapon's damage roll.",
            },
            {
              Maneuver: "Rally",
              Description:
                "On your turn, you can use a bonus action and expend one superiority die to bolster the resolve of one of your companions. When you do so, choose a friendly creature who can see or hear you. That creature gains temporary hit points equal to the superiority die roll + your Charisma modifier.",
            },
            {
              Maneuver: "Riposte",
              Description:
                "When a creature misses you with a melee attack, you can use your reaction and expend one superiority die to make a melee weapon attack against the creature. If you hit, you add the superiority die to the attack's damage roll.",
            },
            {
              Maneuver: "Sweeping Attack",
              Description:
                "When you hit a creature with a melee weapon attack, you can expend one superiority die to attempt to damage another creature with the same attack. Choose another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the number you roll on your superiority die. The damage is of the same type dealt by the original attack.",
            },
            {
              Maneuver: "Tactical Assessment",
              Description:
                "When you make an Intelligence (Investigation), an Intelligence (History), or a Wisdom (Insight) check, you can expend one superiority die and add the superiority die to the ability check.",
            },
            {
              Maneuver: "Trip Attack",
              Description:
                "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to knock the target down. You add the superiority die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you knock the target prone.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Student of War",
    description:
      "At 3rd level, you gain proficiency with one type of artisan's tools of your choice.",
    subClassId: ids.battleMaster,
    levels: [3],
  },
  {
    name: "Know Your Enemy",
    description:
      "Starting at 7th level, if you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:",
    options: [
      "Strength score",
      "Dexterity score",
      "Constitution score",
      "Armor Class",
      "Current hit points",
      "Total class levels (if any)",
      "Fighter class levels (if any)",
    ],
    subClassId: ids.battleMaster,
    levels: [7],
  },
  {
    name: "Improved Combat Superiority",
    description:
      "At 10th level, your superiority dice turn into d10s. At 18th level, they turn into d12s.",
    subClassId: ids.battleMaster,
    levels: [10, 18],
  },
  {
    name: "Relentless",
    description:
      "Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die.",
    subClassId: ids.battleMaster,
    levels: [15],
  },
  // cavalier
  {
    name: "Bonus Proficiency",
    description:
      "When you choose this archetype at 3rd level, you gain proficiency in one of the following skills of your choice: Animal Handling, History, Insight, Performance, or Persuasion. Alternatively, you learn one language of your choice.",
    subClassId: ids.cavalier,
    levels: [3],
  },
  {
    name: "Born to the Saddle",
    description:
      "Starting at 3rd level, your mastery as a rider becomes apparent. You have advantage on saving throws made to avoid falling off your mount. If you fall off your mount and descend no more than 10 feet, you can land on your feet if you’re not incapacitated.\n\nFinally, mounting or dismounting a creature costs you only 5 feet of movement, rather than half your speed.",
    subClassId: ids.cavalier,
    levels: [3],
  },
  {
    name: "Unwavering Mark",
    description:
      "Starting at 3rd level, you can menace your foes, foiling their attacks and punishing them for harming others. When you hit a creature with a melee weapon attack, you can mark the creature until the end of your next turn. This effect ends early if you are incapacitated or you die, or if someone else marks the creature.\n\nWhile it is within 5 feet of you, a creature marked by you has disadvantage on any attack roll that doesn't target you.\n\nIn addition, if a creature marked by you deals damage to anyone other than you, you can make a special melee weapon attack against the marked creature as a bonus action on your next turn. You have advantage on the attack roll, and if it hits, the attack's weapon deals extra damage to the target equal to half your fighter level.\n\nRegardless of the number of creatures you mark, you can make this special attack a number of times equal to your Strength modifier (a minimum of once), and you regain all expended uses of it when you finish a long rest.",
    subClassId: ids.cavalier,
    levels: [3],
  },
  {
    name: "Warding Maneuver",
    description:
      "At 7th level, you learn to fend off strikes directed at you, your mount, or other creatures nearby. If you or a creature you can see within 5 feet of you is hit by an attack, you can roll 1d8 as a reaction if you're wielding a melee weapon or a shield. Roll the die, and add the number rolled to the target's AC against that attack. If the attack still hits, the target has resistance against the attack's damage.\n\nYou can use this feature a number of times equal to your Constitution modifier (a minimum of once), and you regain all expended uses of it when you finish a long rest.",
    subClassId: ids.cavalier,
    levels: [7],
  },
  {
    name: "Hold the Line",
    description:
      "At 10th level, you become a master of locking down your enemies. Creatures provoke an opportunity attack from you when they move 5 feet or more while within your reach, and if you hit a creature with an opportunity attack, the target's speed is reduced to 0 until the end of the current turn.",
    subClassId: ids.cavalier,
    levels: [10],
  },
  {
    name: "Ferocious Charger",
    description:
      "Starting at 15th level, you can run down your foes, whether you're mounted or not. If you move at least 10 feet in a straight line right before attacking a creature and you hit it with the attack, that target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone. You can use this feature only once on each of your turns.",
    subClassId: ids.cavalier,
    levels: [15],
  },
  {
    name: "Vigilant Defender",
    description:
      "Starting at 18th level, you respond to danger with extraordinary vigilance. In combat, you get a special reaction that you can take once on every creature's turn, except your turn. You can use this special reaction only to make an opportunity attack, and you can't use it on the same turn that you take your normal reaction.",
    subClassId: ids.cavalier,
    levels: [18],
  },

  // champion
  {
    name: "Improved Critical",
    description:
      "Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20.",
    subClassId: ids.champion,
    levels: [3],
  },
  {
    name: "Remarkable Athlete",
    description:
      "Starting at 7th level, you can add half your proficiency bonus (rounded up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus.\n\nIn addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier.",
    subClassId: ids.champion,
    levels: [7],
  },
  {
    name: "Additional Fighting Style",
    description:
      "At 10th level, you can choose a second option from the Fighting Style class feature.",
    subClassId: ids.champion,
    levels: [10],
  },
  {
    name: "Superior Critical",
    description:
      "Starting at 15th level, your weapon attacks score a critical hit on a roll of 18–20.",
    subClassId: ids.champion,
    levels: [15],
  },
  {
    name: "Survivor",
    description:
      "At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don't gain this benefit if you have 0 hit points.",
    subClassId: ids.champion,
    levels: [18],
  },
  // echo knight
  {
    name: "Manifest Echo",
    description:
      "At 3rd level, you can use a bonus action to magically manifest an echo of yourself in an unoccupied space you can see within 15 feet of you. This echo is a magical, translucent, gray image of you that lasts until it is destroyed, until you dismiss it as a bonus action, until you manifest another echo, or until you're incapacitated.\n\nYour echo has AC 14 + your proficiency bonus, 1 hit point, and immunity to all conditions. If it has to make a saving throw, it uses your saving throw bonus for the roll. It is the same size as you, and it occupies its space. On your turn, you can mentally command the echo to move up to 30 feet in any direction (no action required). If your echo is ever more than 30 feet from you at the end of your turn, it is destroyed.\n\n",
    subClassId: ids.echoKnight,
    levels: [3],
    options: [
      "As a bonus action, you can teleport, magically swapping places with your echo at a cost of 15 feet of your movement, regardless of the distance between the two of you.",
      "When you take the Attack action on your turn, any attack you make with that action can originate from your space or the echo's space. You make this choice for each attack.",
      "When a creature that you can see within 5 feet of your echo moves at least 5 feet away from it, you can use your reaction to make an opportunity attack against that creature as if you were in the echo's space.",
    ],
  },
  {
    name: "Unleash Incarnation",
    description:
      "At 3rd level, you can heighten your echo's fury. Whenever you take the Attack action, you can make one additional melee attack from the echo's position.\n\nYou can use this feature a number of times equal to your Constitution modifier (a minimum of once). You regain all expended uses when you finish a long rest.",
    subClassId: ids.echoKnight,
    levels: [3],
  },
  {
    name: "Echo Avatar",
    description:
      "Starting at 7th level, you can temporarily transfer your consciousness to your echo. As an action, you can see through your echo's eyes and hear through its ears. During this time, you are deafened and blinded. You can sustain this effect for up to 10 minutes, and you can end it at any time (requires no action). While your echo is being used in this way, it can be up to 1,000 feet away from you without being destroyed.",
    subClassId: ids.echoKnight,
    levels: [7],
  },
  {
    name: "Shadow Martyr",
    description:
      "Starting at 10th level, you can make your echo throw itself in front of an attack directed at another creature that you can see. Before the attack roll is made, you can use your reaction to teleport the echo to an unoccupied space within 5 feet of the targeted creature. The attack roll that triggered the reaction is instead made against your echo.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest.",
    subClassId: ids.echoKnight,
    levels: [10],
  },
  {
    name: "Reclaim Potential",
    description:
      "By 15th level, you've learned to absorb the fleeting magic of your echo. When an echo of yours is destroyed by taking damage, you can gain a number of temporary hit points equal to 2d6 + your Constitution modifier, provided you don't already have temporary hit points.\n\nYou can use this feature a number of times equal to your Constitution modifier (a minimum of once). You regain all expended uses when you finish a long rest.",
    subClassId: ids.echoKnight,
    levels: [15],
  },
  {
    name: "Legion of One",
    description:
      "At 18th level, you can use a bonus action to create two echos with your Manifest Echo feature, and these echoes can co-exist. If you try to create a third echo, the previous two echoes are destroyed. Anything you can do from one echo's position can be done from the other's instead.\n\nIn addition, when you roll initiative and have no uses of your Unleash Incarnation feature left, you regain one use of that feature.",
    subClassId: ids.echoKnight,
    levels: [18],
  },
  //Eldritch Knight
  {
    name: "Weapon Bond",
    description:
      "At 3rd level, you learn a ritual that creates a magical bond between yourself and one weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. The weapon must be within your reach throughout the ritual, at the conclusion of which you touch the weapon and forge the bond.\n\nOnce you have bonded a weapon to yourself, you can't be disarmed of that weapon unless you are incapacitated. If it is on the same plane of existence, you can summon that weapon as a bonus action on your turn, causing it to teleport instantly to your hand.\n\nYou can have up to two bonded weapons, but can summon only one at a time with your bonus action. If you attempt to bond with a third weapon, you must break the bond with one of the other two.",
    subClassId: ids.eldritchKnight,
    levels: [3],
  },
  {
    name: "War Magic",
    description:
      "Beginning at 7th level, when you use your action to cast a cantrip, you can make one weapon attack as a bonus action.",
    subClassId: ids.eldritchKnight,
    levels: [7],
  },
  {
    name: "Eldritch Strike",
    description:
      "At 10th level, you learn how to make your weapon strikes undercut a creature's resistance to your spells. When you hit a creature with a weapon attack, that creature has disadvantage on the next saving throw it makes against a spell you cast before the end of your next turn.",
    subClassId: ids.eldritchKnight,
    levels: [10],
  },
  {
    name: "Arcane Charge",
    description:
      "At 15th level, you gain the ability to teleport up to 30 feet to an unoccupied space you can see when you use your Action Surge. You can teleport before or after the additional action.",
    subClassId: ids.eldritchKnight,
    levels: [15],
  },
  {
    name: "Improved War Magic",
    description:
      "Starting at 18th level, when you use your action to cast a spell, you can make one weapon attack as a bonus action.",
    subClassId: ids.eldritchKnight,
    levels: [18],
  },
  //psi warrior
  {
    name: "Psionic Power",
    description:
      "At 3rd level, you harbor a wellspring of psionic energy within yourself. This energy is represented by your Psionic Energy dice, which are each a d6. You have a number of these dice equal to twice your proficiency bonus, and they fuel various psionic powers you have, which are detailed below.\n\nSome of your powers expend the Psionic Energy die they use, as specified in a power's description, and you can't use a power if it requires you to use a die when your dice are all expended. You regain all your expended Psionic Energy dice when you finish a long rest. In addition, as a bonus action, you can regain one expended Psionic Energy die, but you can't do so again until you finish a short or long rest.\n\nWhen you reach certain levels in this class, the size of your Psionic Energy dice increases: at 5th level (d8), 11th level (d10), and 17th level (d12).\n\nThe powers below use your Psionic Energy dice.",
    subClassId: ids.psiWarrior,
    levels: [3],
    extendedTable: [
      {
        "Psionic Die Options": {
          headers: ["Power", "Description"],
          data: [
            {
              Power: "Telekinetic Movement",
              Description:
                "You can move an object or a creature with your mind. As an action, you target one loose object that is Large or smaller or one willing creature, other than yourself. If you can see the target and it is within 30 feet of you, you can move it up to 30 feet to an unoccupied space you can see. Alternatively, if it is a Tiny object, you can move it to or from your hand. Either way, you can move the target horizontally, vertically, or both. Once you take this action, you can't do so again until you finish a short or long rest, unless you expend a Psionic Energy die to take it again.",
            },
            {
              Power: "Psionic Strike",
              Description:
                "You can propel your weapons with psionic force. Once on each of your turns, immediately after you hit a target within 30 feet of you with an attack and deal damage to it with a weapon, you can expend one Psionic Energy die, rolling it and dealing force damage to the target equal to the number rolled plus your Intelligence modifier.",
            },
            {
              Power: "Protective Field",
              Description:
                "When you or another creature you can see within 30 feet of you takes damage, you can use your reaction to expend one Psionic Energy die, roll the die, and reduce the damage taken by the number rolled plus your Intelligence modifier (minimum reduction of 1), as you create a momentary shield of telekinetic force.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Telekinetic Adept",
    description:
      "By the 7th level, You have mastered new ways to use your telekinetic abilities, detailed below.",
    subClassId: ids.psiWarrior,
    levels: [7],
    extendedTable: [
      {
        "Telekinetic Adept": {
          headers: ["Power", "Description"],
          data: [
            {
              Power: "Telekinetic Thrust",
              Description:
                "When you deal damage to a target with your Psionic Strike, you can force the target to make a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Intelligence modifier. If the save fails, you can knock the target prone or move it up to 10 feet in any direction horizontally.",
            },
            {
              Power: "Psi-Powered Leap",
              Description:
                "As a bonus action, you can propel your body with your mind. You gain a flying speed equal to twice your walking speed until the end of the current turn. Once you take this bonus action, you can't do so again until you finish a short or long rest, unless you expend a Psionic Energy die to take it again.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Guarded Mind",
    description:
      "Starting at 10th level, the psionic energy flowing through you has bolstered your mind. You have resistance to psychic damage. Moreover, if you start your turn charmed or frightened, you can expend a Psionic Energy die and end every effect on yourself subjecting you to those conditions.",
    subClassId: ids.psiWarrior,
    levels: [10],
  },
  {
    name: "Bulwark of Force",
    description:
      "At 15th level, you can shield yourself and others with telekinetic force. As a bonus action, you can choose creatures, which can include you, that you can see within 30 feet of you, up to a number of creatures equal to your Intelligence modifier (minimum of one creature). Each of the chosen creatures is protected by half cover for 1 minute or until you're incapacitated.\n\nOnce you take this bonus action, you can't do so again until you finish a long rest, unless you expend a Psionic Energy die to take it again.",
    subClassId: ids.psiWarrior,
    levels: [15],
  },
  {
    name: "Telekinetic Master",
    description:
      "By 18th level, your ability to move creatures and objects with your mind is matched by few. You can cast the Telekinesis spell, requiring no components, and your spellcasting ability for the spell is Intelligence. On each of your turns while you concentrate on the spell, including the turn when you cast it, you can make one attack with a weapon as a bonus action.\n\nOnce you cast the spell with this feature, you can't do so again until you finish a long rest, unless you expend a Psionic Energy die to cast it again.",
    subClassId: ids.psiWarrior,
    levels: [18],
  },
  // rune knight
  {
    name: "Bonus Proficiencies",
    description:
      "When you choose this archetype at 3rd level, you gain proficiency with smith’s tools, and you learn to speak, read, and write Giant.",
    subClassId: ids.runeKnight,
    levels: [3],
  },
  {
    name: "Rune Carver",
    description:
      "Starting at 3rd level, you can use magic runes to enhance your gear. You learn two runes of your choice, from among the runes described in the Rune Choices table, and each time you gain a level in this class, you can replace one rune you know with a different one from this feature. When you reach certain levels in this class, you learn additional runes, as shown in the Runes Known table.\n\nWhenever you finish a long rest, you can touch a number of objects equal to the number of runes you know, and you inscribe a different rune onto each of the objects. To be eligible, an object must be a weapon, a suit of armor, a shield, a piece of jewelry, or something else you can wear or hold in a hand. Your rune remains on an object until you finish a long rest, and an object can bear only one of your runes at a time.\n\nIf a rune has a level requirement, you must be at least that level in this class to learn the rune. If a rune requires a saving throw, your Rune Magic save DC equals 8 + your proficiency bonus + your Constitution modifier.",
    subClassId: ids.runeKnight,
    levels: [3],
    extendedTable: [
      {
        "Runes Known": {
          headers: ["Level", "Runes Known"],
          data: [
            { Level: "3rd", "Runes Known": "2" },
            { Level: "7th", "Runes Known": "3" },
            { Level: "10th", "Runes Known": "4" },
            { Level: "15th", "Runes Known": "5" },
          ],
        },
      },
      {
        "Rune Choices": {
          headers: ["Rune", "Description"],
          data: [
            {
              Rune: "Cloud",
              Description:
                "This rune emulates the deceptive magic used by some cloud giants. While wearing or carrying an object inscribed with this rune, you have advantage on Dexterity (Sleight of Hand) checks and Charisma (Deception) checks. \nIn addition, when you or a creature you can see within 30 feet of you is hit by an attack roll, you can use your reaction to invoke the rune and choose a different creature within 30 feet of you, other than the attacker. The chosen creature becomes the target of the attack, using the same roll. This magic can transfer the attack's effects regardless of the attack's range. Once you invoke this rune, you can't do so again until you finish a short or long rest.",
            },
            {
              Rune: "Fire",
              Description:
                "This rune's magic channels the masterful craftsmanship of great smiths. While wearing or carrying an object inscribed with this rune, your proficiency bonus is doubled for any ability check you make that uses your proficiency with a tool. \nIn addition, when you hit a creature with an attack using a weapon, you can invoke the rune to summon fiery shackles: the target takes an extra 2d6 fire damage, and it must succeed on a Strength saving throw or be restrained for 1 minute. While restrained by the shackles, the target takes 2d6 fire damage at the start of each of its turns. The target can repeat the saving throw at the end of each of its turns, banishing the shackles on a success. Once you invoke this rune, you can't do so again until you finish a short or long rest.",
            },
            {
              Rune: "Frost",
              Description:
                "This rune's magic evokes the might of those who survive in the wintry wilderness, such as frost giants. While wearing or carrying an object inscribed with this rune, you have advantage on Wisdom (Animal Handling) checks and Charisma (Intimidation) checks. \nIn addition, you can invoke the rune as a bonus action to increase your sturdiness. For 10 minutes, you gain a +2 bonus to all ability checks and saving throws that use Strength or Constitution. Once you invoke this rune, you can't do so again until you finish a short or long rest.",
            },
            {
              Rune: "Stone",
              Description:
                "This rune's magic channels the judiciousness associated with stone giants. While wearing or carrying an object inscribed with this rune, you have advantage on Wisdom (Insight) checks, and you have darkvision out to a range of 120 feet. \nIn addition, when a creature you can see ends its turn within 30 feet of you, you can use your reaction to invoke the rune and force the creature to make a Wisdom saving throw. Unless the save succeeds, the creature is charmed by you for 1 minute. While charmed in this way, the creature has a speed of 0 and is incapacitated, descending into a dreamy stupor. The creature repeats the saving throw at the end of each of its turns, ending the effect on a success. Once you invoke this rune, you can't do so again until you finish a short or long rest.",
            },
            {
              Rune: "Hill (7th Level or Higher)",
              Description:
                "This rune's magic bestows a resilience reminiscent of a hill giant. While wearing or carrying an object that bears this rune, you have advantage on saving throws against being poisoned, and you have resistance against poison damage. \nIn addition, you can invoke the rune as a bonus action, gaining resistance to bludgeoning, piercing, and slashing damage for 1 minute. Once you invoke this rune, you can't do so again until you finish a short or long rest.",
            },
            {
              Rune: "Storm (7th Level or Higher)",
              Description:
                "Using this rune, you can glimpse the future like a storm giant seer. While wearing or carrying an object inscribed with this rune, you have advantage on Intelligence (Arcana) checks, and you can't be surprised as long as you aren't incapacitated. \nIn addition, you can invoke the rune as a bonus action to enter a prophetic state for 1 minute or until you're incapacitated. Until the state ends, when you or another creature you can see within 60 feet of you makes an attack roll, a saving throw, or an ability check, you can use your reaction to cause the roll to have advantage or disadvantage. Once you invoke this rune, you can't do so again until you finish a short or long rest.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Giant's Might",
    description:
      "At 3rd level, you have learned how to imbue yourself with the might of giants. As a bonus action, you magically gain the benefits listed below, which last for 1 minute.\n\nYou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest.",
    subClassId: ids.runeKnight,
    levels: [3],
    options: [
      "If you are smaller than Large, you become Large, along with anything you are wearing. If you lack the room to become Large, your size doesn't change.",
      "You have advantage on Strength checks and Strength saving throws.",
      "Once on each of your turns, one of your attacks with a weapon or an unarmed strike can deal an extra 1d6 damage to a target on a hit.",
    ],
  },
  {
    name: "Runic Shield",
    description:
      "At 7th level, you learn to invoke your rune magic to protect your allies. When another creature you can see within 60 feet of you is hit by an attack roll, you can use your reaction to force the attacker to reroll the d20 and use the new roll.\n\nYou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    subClassId: ids.runeKnight,
    levels: [7],
  },
  {
    name: "Great Stature",
    description:
      "By 10th level, the magic of your runes permanently alters you. When you gain this feature, roll 3d4. You grow a number of inches in height equal to the roll.\n\nMoreover, the extra damage of your Giant's Might feature increases to 1d8.",
    subClassId: ids.runeKnight,
    levels: [10],
  },
  {
    name: "Master of Runes",
    description:
      "At 15th level, you can invoke each rune you know from your Rune Carver feature twice, rather than once, and you regain all expended uses when you finish a short or long rest.",
    subClassId: ids.runeKnight,
    levels: [15],
  },
  {
    name: "Runic Juggernaut",
    description:
      "At 18th level, you learn how to amplify your rune-powered transformation. As a result, the extra damage you deal with the Giant's Might feature increases to 1d10. Moreover, when you use that feature, your size can increase to Huge, and while you are that size, your reach increases by 5 feet.",
    subClassId: ids.runeKnight,
    levels: [18],
  },
  //samurai
  {
    name: "Bonus Proficiency",
    description:
      "When you choose this archetype at 3rd level, you gain proficiency in one of the following skills of your choice: History, Insight, Performance, or Persuasion. Alternatively, you learn one language of your choice.",
    subClassId: ids.samurai,
    levels: [3],
  },
  {
    name: "Fighting Spirit",
    description:
      "Starting at 3rd level, your intensity in battle can shield you and help you strike true. As a bonus action on your turn, you can give yourself advantage on all weapon attack rolls until the end of the current turn. When you do so, you also gain 5 temporary hit points. The number of hit points increases when you reach certain levels in this class, increasing to 10 at 10th level and 15 at 15th level.\n\nYou can use this feature three times. You regain all expended uses of it when you finish a long rest.",
    subClassId: ids.samurai,
    levels: [3],
  },
  {
    name: "Elegant Courtier",
    description:
      "Starting at 7th level, your discipline and attention to detail allow you to excel in social situations. Whenever you make a Charisma (Persuasion) check, you gain a bonus to the check equal to your Wisdom modifier.\n\nYour self-control also causes you to gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice).",
    subClassId: ids.samurai,
    levels: [7],
  },
  {
    name: "Tireless Spirit",
    description:
      "Starting at 10th level, when you roll initiative and have no uses of Fighting Spirit remaining, you regain one use.",
    subClassId: ids.samurai,
    levels: [10],
  },
  {
    name: "Rapid Strike",
    description:
      "Starting at 15th level, you learn to trade accuracy for swift strikes. If you take the Attack action on your turn and have advantage on an attack roll against against one of the targets, you can forgo the advantage for that roll to make an additional weapon attack against that target, as part of the same action. You can do so no more than once per turn.",
    subClassId: ids.samurai,
    levels: [15],
  },
  {
    name: "Strength Before Death",
    description:
      "Starting at 18th level, your fighting spirit can delay the grasp of death. If you take damage that reduces you to 0 hit points, you can use your reaction to delay falling unconscious, and you can immediately take an extra turn. While you have 0 hit points during that extra turn, taking damage causes death saving throw failures as normal, and three death saving throw failures can still kill you. When the extra turn ends, you fall unconscious if you still have 0 hit points.\n\nOnce you use this feature, you can’t use it again until you finish a long rest.",
    subClassId: ids.samurai,
    levels: [18],
  },
];

export default FighterSubclassFeatures;
