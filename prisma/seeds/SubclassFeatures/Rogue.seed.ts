import { Prisma } from "@prisma/client";

const ids = {
  arcane: 89,
  assassin: 90,
  inquisitive: 91,
  mastermind: 92,
  phantom: 93,
  scout: 94,
  soulknife: 95,
  swashbuckler: 96,
  thief: 97,
};
interface SubclassFeature extends PrismaJson.Feature {
  subClassId: number;
}

const RogueSubclassFeatures: SubclassFeature[] = [
  // Arcane Trickster
  {
    name: "Mage Hand Legerdemain",
    levels: [3],
    subClassId: ids.arcane,
    description:
      "Starting at 3rd level, when you cast Mage Hand, you can make the spectral hand invisible, furthermore, you gain the benefits in the table below.\n\n You can perform one of these tasks without being noticed by a creature if you succeed on a Dexterity (Sleight of Hand) check contested by the creature's Wisdom (Perception) check.\n\nIn addition, you can use the bonus action granted by your Cunning Action to control the hand.",
    extendedTable: [
      {
        Benefits: {
          headers: ["Task"],
          data: [
            {
              Task: "You can stow one object the hand is holding in a container worn or carried by another creature.",
            },
            {
              Task: "You can retrieve an object in a container worn or carried by another creature.",
            },
            {
              Task: "You can use thieves' tools to pick locks and disarm traps at range.",
            },
          ],
        },
      },
    ],
  },

  {
    name: "Magical Ambush",
    description:
      "Starting at 9th level, if you are hidden from a creature when you cast a spell on it, the creature has disadvantage on any saving throw it makes against the spell this turn.",
    levels: [9],
    subClassId: ids.arcane,
  },
  {
    name: "Versatile Trickster",
    description:
      "At 13th level, you gain the ability to distract targets with your Mage Hand. As a bonus action on your turn, you can designate a creature within 5 feet of the spectral hand created by the spell. Doing so gives you advantage on attack rolls against that creature until the end of the turn.",
    levels: [13],
    subClassId: ids.arcane,
  },
  {
    name: "Spell Thief",
    description:
      "At 17th level, you gain the ability to magically steal the knowledge of how to cast a spell from another spellcaster.\n\nImmediately after a creature casts a spell that targets you or includes you in its area of effect, you can use your reaction to force the creature to make a saving throw with its spellcasting ability modifier. The DC equals your spell save DC. On a failed save, you negate the spell's effect against you, and you steal the knowledge of the spell if it is at least 1st level and of a level you can cast (it doesn't need to be a wizard spell). For the next 8 hours, you know the spell and can cast it using your spell slots. The creature can't cast that spell until the 8 hours have passed.\n\nOnce you use this feature, you can't use it again until you finish a long rest.",
    levels: [17],
    subClassId: ids.arcane,
  },
  //assassin
  {
    name: "Bonus Proficiencies",
    description:
      "When you choose this archetype at 3rd level, you gain proficiency with disguise kits and poisoner's kits.",
    levels: [3],
    subClassId: ids.assassin,
  },
  {
    name: "Assassinate",
    description:
      "Starting at 3rd level, you are at your deadliest when you get the drop on your enemies. You have advantage on attack rolls against any creature that hasn't taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit.",
    levels: [3],
    subClassId: ids.assassin,
  },
  {
    name: "Infiltration Expertise",
    description:
      "Starting at 9th level, you can unfailingly create false identities for yourself. You must spend seven days and 25 gp to establish the history, profession, and affiliations for an identity. You can't establish an identity that belongs to someone else. For example, you might acquire appropriate clothing, letters of introduction, and official- looking certification to establish yourself as a member of a trading house from a remote city so you can insinuate yourself into the company of other wealthy merchants.\n\nThereafter, if you adopt the new identity for at least 30 days, you can gain advantage on any Charisma (Deception) check you make to avoid detection.",
    levels: [9],
    subClassId: ids.assassin,
  },
  {
    name: "Imposter",
    description:
      "At 13th level, you gain the ability to unerringly mimic another person's speech, writing, and behavior. You must spend at least three hours studying these three components of the person's behavior, listening to speech, examining handwriting, and observing mannerisms.\n\nYour ruse is indiscernible to the casual observer. If a wary creature suspects something is amiss, you have advantage on any Charisma (Deception) check you make to avoid detection.",
    levels: [13],
    subClassId: ids.assassin,
  },
  {
    name: "Death Strike",
    description:
      "Starting at 17th level, you become a master of instant death. When you attack and hit a creature that is surprised, it must make a Constitution saving throw (DC 8 + your Dexterity modifier + your proficiency bonus). On a failed save, double the damage of your attack against the creature.",
    levels: [17],
    subClassId: ids.assassin,
  },
  // Inquisitive
  {
    name: "Ear for Deceit",
    description:
      "When you choose this archetype at 3rd level, you develop a keen ear for picking out lies. Whenever you make a Wisdom (Insight) check to determine whether a creature is lying, treat a roll of 7 or lower on the d20 as an 8.",
    levels: [3],
    subClassId: ids.inquisitive,
  },
  {
    name: "Eye for Detail",
    description:
      "Starting at 3rd level, you can use a bonus action to make a Wisdom (Perception) check to spot a hidden creature or object or to make an Intelligence (Investigation) check to uncover or decipher clues.",
    levels: [3],
    subClassId: ids.inquisitive,
  },
  {
    name: "Insightful Fighting",
    description:
      "At 3rd level, you gain the ability to decipher an opponent's tactics and develop a counter to them. As a bonus action, you make a Wisdom (Insight) check against a creature you can see that isn't incapacitated, contested by the target's Charisma (Deception) check. If you succeed, you can use your Sneak Attack against that target even if you don't have advantage on the attack roll, but not if you have disadvantage on it.\n\nThis benefit lasts for 1 minute or until you successfully use this feature against a different target.",
    levels: [3],
    subClassId: ids.inquisitive,
  },
  {
    name: "Steady Eye",
    description:
      "At 9th level, you gain advantage on any Wisdom (Perception) or Intelligence (Investigation) check if you move no more than half your speed on the same turn.",
    levels: [9],
    subClassId: ids.inquisitive,
  },
  {
    name: "Unerring Eye",
    description:
      "At 13th level, your senses are almost impossible to foil. As an action, you sense the presence of illusions, shapechangers not in their original form, and other magic designed to deceive the senses within 30 feet of you, provided you aren't blinded or deafened. You sense that an effect is attempting to trick you, but you gain no insight into what is hidden or into its true nature.\n\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.",
    levels: [13],
    subClassId: ids.inquisitive,
  },
  {
    name: "Eye for Weakness",
    description:
      "At 17th level, you learn to exploit a creature's weaknesses by carefully studying its tactics and movement. While your Insightful Fighting feature applies to a creature, your Sneak Attack damage against that creature increases by 3d6.",
    levels: [17],
    subClassId: ids.inquisitive,
  },
  // Mastermind
  {
    name: "Master of Intrigue",
    description:
      "When you choose this archetype at 3rd level, you gain proficiency with the disguise kit, the forgery kit, and one gaming set of your choice. You also learn two languages of your choice.\n\nAdditionally, you can unerringly mimic the speech patterns and accent of a creature that you hear speak for at least 1 minute, enabling you to pass yourself off as a native speaker of a particular land, provided that you know the language.",
    levels: [3],
    subClassId: ids.mastermind,
  },
  {
    name: "Master of Tactics",
    description:
      "Starting at 3rd level, you can use the Help action as a bonus action. Additionally, when you use the Help action to aid an ally in attacking a creature, the target of that attack can be within 30 feet of you, rather than 5 feet of you, if the target can see or hear you.",
    levels: [3],
    subClassId: ids.mastermind,
  },
  {
    name: "Insightful Manipulator",
    description:
      "Starting at 9th level, if you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. At the DM's discretion, you realize you know a piece of the creature's history or one of its personality traits, if it has any. Additionally, the DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:",
    levels: [9],
    subClassId: ids.mastermind,
    options: [
      "Intelligence score",
      "Wisdom score",
      "Charisma score",
      "Class levels (if any)",
    ],
  },
  {
    name: "Misdirection",
    description:
      "Beginning at 13th level, you can sometimes cause another creature to suffer an attack meant for you. When you are targeted by an attack while a creature within 5 feet of you is granting you cover against that attack, you can use your reaction to have the attack target that creature instead of you.",
    levels: [13],
    subClassId: ids.mastermind,
  },
  {
    name: "Soul of Deceit",
    description:
      "Starting at 17th level, your thoughts can't be read by telepathy or other means, unless you allow it. You can present false thoughts by making a Charisma (Deception) check contested by the mind reader's Wisdom (Insight) check.\n\nAdditionally, no matter what you say, magic that would determine if you are telling the truth indicates you are being truthful if you so choose, and you can't be compelled to tell the truth by magic.",
    levels: [17],
    subClassId: ids.mastermind,
  },
  //phantom
  {
    name: "Whispers of the Dead",
    description:
      "When you choose this archetype at 3rd level, echoes of those who have died cling to you. Whenever you finish a short or long rest, you can gain one skill or tool proficiency of your choice, as a ghostly presence shares its knowledge with you. You lose this proficiency when you use this feature to choose a different proficiency that you lack.",
    levels: [3],
    subClassId: ids.phantom,
  },
  {
    name: "Wails from the Grave",
    description:
      "At 3rd level, as you nudge someone closer to the grave, you can channel the power of death to harm someone else as well. Immediately after you deal your Sneak Attack damage to a creature on your turn, you can target a second creature that you can see within 30 feet of the first creature. Roll half the number of Sneak Attack dice for your level (round up), and the second creature takes necrotic damage equal to the roll's total, as wails of the dead sound around them for a moment.\n\nYou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    levels: [3],
    subClassId: ids.phantom,
  },
  {
    name: "Tokens of the Departed",
    description:
      "At 9th level, when a life ends in your presence, you're able to snatch a token from the departing soul, a sliver of its life essence that takes physical form: as a reaction when a creature you can see dies within 30 feet of you, you can open your free hand and cause a Tiny trinket to appear there, a soul trinket. The DM determines the trinket's form or has you roll on the Trinkets table in the Player's Handbook to generate it.\n\nYou can have a maximum number of soul trinkets equal to your proficiency bonus, and you can't create one while at your maximum.\n\nYou can use soul trinkets in the following ways:",
    extendedTable: [
      {
        "": {
          headers: ["Soul Trinket"],
          data: [
            {
              "Soul Trinket":
                "While a soul trinket is on your person, you have advantage on death saving throws and Constitution saving throws, for your vitality is enhanced by the life essence within the object.",
            },
            {
              "Soul Trinket":
                "When you deal Sneak Attack damage on your turn, you can destroy one of your soul trinkets that's on your person and then immediately use Wails from the Grave, without expending a use of that feature.",
            },
            {
              "Soul Trinket":
                "As an action, you can destroy one of your soul trinkets, no matter where it's located. When you do so, you can ask the spirit associated with the trinket one question. The spirit appears to you and answers in a language it knew in life. It's under no obligation to be truthful, and it answers as concisely as possible, eager to be free. The spirit knows only what it knew in life, as determined by the DM.",
            },
          ],
        },
      },
    ],
    levels: [9],
    subClassId: ids.phantom,
  },
  {
    name: "Ghost Walk",
    description:
      "At 13th level, you can phase partially into the realm of the dead, becoming like a ghost. As a bonus action, you assume a spectral form. While in this form, you have a flying speed of 10 feet, you can hover, and attack rolls have disadvantage against you. You can also move through creatures and objects as if they were difficult terrain, but you take 1d10 force damage if you end your turn inside a creature or an object.\n\nYou stay in this form for 10 minutes or until you end it as a bonus action. To use this feature again, you must finish a long rest or destroy one of your soul trinkets as part of the bonus action you use to activate Ghost Walk.",
    levels: [13],
    subClassId: ids.phantom,
  },
  {
    name: "Death's Friend",
    description:
      "At 17th level, your association with death has become so close that you gain the following benefits:",
    levels: [17],
    subClassId: ids.phantom,
    extendedTable: [
      {
        "": {
          headers: ["Benefit"],
          data: [
            {
              Benefit:
                "When you use your Wails from the Grave, you can now deal the necrotic damage to both the first and the second creature.",
            },
            {
              Benefit:
                "At the end of a long rest, a soul trinket appears in your hand if you don't have any soul trinkets, as the spirits of the dead are drawn to you.",
            },
          ],
        },
      },
    ],
  },
  //scout
  {
    name: "Skirmisher",
    description:
      "Starting at 3rd level, you are difficult to pin down during a fight. You can move up to half your speed as a reaction when an enemy ends its turn within 5 feet of you. This movement doesn’t provoke opportunity attacks.",
    levels: [3],
    subClassId: ids.scout,
  },
  {
    name: "Survivalist",
    description:
      "At 3rd level, you gain proficiency in the Nature and Survival skills if you don't already have it. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies.",
    levels: [3],
    subClassId: ids.scout,
  },
  {
    name: "Superior Mobility",
    description:
      "At 9th level, your walking speed increases by 10 feet. If you have a climbing or swimming speed, this increase applies to that speed as well.",
    levels: [9],
    subClassId: ids.scout,
  },
  {
    name: "Ambush Master",
    description:
      "Starting at 13th level, you excel at leading ambushes and acting first in a fight.\n\nYou have advantage on initiative rolls. In addition, the first creature you hit during the first round of a combat becomes easier for you and others to strike; attack rolls against that target have advantage until the start of your next turn.",
    levels: [13],
    subClassId: ids.scout,
  },
  {
    name: "Sudden Strike",
    description:
      "Starting at 17th level, you can strike with deadly speed. If you take the Attack action on your turn, you can make one additional attack as a bonus action. This attack can benefit from your Sneak Attack even if you have already used it this turn, but you can't use your Sneak Attack against the same target more than once in a turn.",
    levels: [17],
    subClassId: ids.scout,
  },
  //soulknife
  {
    name: "Psionic Power",
    description:
      "Starting at 3rd level, you harbor a wellspring of psionic energy within yourself. This energy is represented by your Psionic Energy dice, which are each a d6. You have a number of these dice equal to twice your proficiency bonus, and they fuel various psionic powers you have, which are detailed below.\n\nSome of your powers expend the Psionic Energy die they use, as specified in a power's description, and you can't use a power if it requires you to use a die when your dice are all expended. You regain all your expended Psionic Energy dice when you finish a long rest. In addition, as a bonus action, you can regain one expended Psionic Energy die, but you can't do so again until you finish a short or long rest.\n\nWhen you reach certain levels in this class, the size of your Psionic Energy dice increases: at 5th level (d8), 11th level (d10), and 17th level (d12).\n\nThe first time you use this power after each long rest, you don't expend the Psionic Energy die. All other times you use the power, you expend the die.\n\nThe powers are detailed below.",
    extendedTable: [
      {
        "": {
          headers: ["Power", "Description"],
          data: [
            {
              Power: "Psychic Whispers",
              Description:
                "You can establish telepathic communication between yourself and others — perfect for quiet infiltration. As an action, choose one or more creatures you can see, up to a number of creatures equal to your proficiency bonus, and then roll one Psionic Energy die. For a number of hours equal to the number rolled, the chosen creatures can speak telepathically with you, and you can speak telepathically with them. To send or receive a message (no action required), you and the other creature must be within 1 mile of each other. A creature can't use this telepathy if it can't speak any languages, and a creature can end the telepathic connection at any time (no action required). You and the creature don't need to speak a common language to understand each other.\n\nThe first time you use this power after each long rest, you don't expend the Psionic Energy die. All other times you use the power, you expend the die.",
            },
            {
              Power: "Psi-Bolstered Knack",
              Description:
                "When your nonpsionic training fails you, your psionic power can help: if you fail an ability check using a skill or tool with which you have proficiency, you can roll one Psionic Energy die and add the number rolled to the check, potentially turning failure into success. You expend the die only if the roll succeeds.",
            },
          ],
        },
      },
    ],
    levels: [3],
    subClassId: ids.soulknife,
  },
  {
    name: "Psychic Blades",
    description:
      "Also at 3rd level, You can manifest your psionic power as shimmering blades of psychic energy. Whenever you take the Attack action, you can manifest a psychic blade from your free hand and make the attack with that blade. This magic blade is a simple melee weapon with the finesse and thrown properties. It has a normal range of 60 feet and no long range, and on a hit, it deals psychic damage equal to 1d6 plus the ability modifier you used for the attack roll. The blade vanishes immediately after it hits or misses its target, and it leaves no mark on its target if it deals damage.\n\nAfter you attack with the blade, you can make a melee or ranged weapon attack with a second psychic blade as a bonus action on the same turn, provided your other hand is free to create it. The damage die of this bonus attack is 1d4, instead of 1d6.",
    levels: [3],
    subClassId: ids.soulknife,
  },
  {
    name: "Soul Blades",
    description:
      "Starting at 9th level, your Psychic Blades are now an expression of your psi-suffused soul, giving you these powers that use your Psionic Energy dice:",
    levels: [9],
    subClassId: ids.soulknife,
    extendedTable: [
      {
        "": {
          headers: ["Power", "Description"],
          data: [
            {
              Power: "Homing Strikes",
              Description:
                "If you make an attack roll with your Psychic Blades and miss the target, you can roll one Psionic Energy die and add the number rolled to the attack roll. If this causes the attack to hit, you expend the Psionic Energy die.",
            },
            {
              Power: "Psychic Teleportation",
              Description:
                "As a bonus action, you manifest one of your Psychic Blades, expend one Psionic Energy die and roll it, and throw the blade at an unoccupied space you can see, up to a number of feet away equal to 10 times the number rolled. You then teleport to that space, and the blade vanishes.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Psychic Veil",
    description:
      "At 13th level, you can weave a veil of psychic static to mask yourself. As an action, you can magically become invisible, along with anything you are wearing or carrying, for 1 hour or until you dismiss this effect (no action required). This invisibility ends early immediately after you deal damage to a creature, or you force a creature to make a saving throw.\n\nOnce you use this feature, you can't do so again until you finish a long rest, unless you expend a Psionic Energy die to use this feature again.",
    levels: [13],
    subClassId: ids.soulknife,
  },
  {
    name: "Rend Mind",
    description:
      "When you reach 17th level, you can sweep your Psychic Blade directly through a creature's mind. When you use your Psychic Blades to deal Sneak Attack damage to a creature, you can force that target to make a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Dexterity modifier). If the save fails, the target is stunned for 1 minute. The stunned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\nOnce you use this feature, you can't do so again until you finish a long rest, unless you expend three Psionic Energy dice to use it again.",
    levels: [17],
    subClassId: ids.soulknife,
  },
  //swashbuckler
  {
    name: "Fancy Footwork",
    description:
      "When you choose this archetype at 3rd level, you learn how to land a strike and then slip away without reprisal. During your turn, if you make a melee attack against a creature, that creature can't make opportunity attacks against you for the rest of your turn.",
    levels: [3],
    subClassId: ids.swashbuckler,
  },
  {
    name: "Rakish Audacity",
    description:
      "Starting at 3rd level, your confidence propels you into battle. You can give yourself a bonus to your initiative rolls equal to your Charisma modifier.\n\nYou also gain an additional way to use your Sneak Attack; you don't need advantage on the attack roll to use your Sneak Attack against a creature if you are within 5 feet of it, no other creatures are within 5 feet of you, and you don't have disadvantage on the attack roll. All the other rules for Sneak Attack still apply to you.",

    levels: [3],
    subClassId: ids.swashbuckler,
  },
  {
    name: "Panache",
    description:
      "At 9th level, your charm becomes extraordinarily beguiling. As an action, you can make a Charisma (Persuasion) check contested by a creature's Wisdom (Insight) check. The creature must be able to hear you, and the two of you must share a language.\n\nIf you succeed on the check and the creature is hostile to you, it has disadvantage on attack rolls against targets other than you and can't make opportunity attacks against targets other than you. This effect lasts for 1 minute, until one of your companions attacks the target or affects it with a spell, or until you and the target are more than 60 feet apart.\n\nIf you succeed on the check and the creature isn't hostile to you, it is charmed by you for 1 minute. While charmed, it regards you as a friendly acquaintance. This effect ends immediately if you or your companions do anything harmful to it.",
    levels: [9],
    subClassId: ids.swashbuckler,
  },
  {
    name: "Elegant Maneuver",
    description:
      "Starting at 13th level, you can use a bonus action on your turn to gain advantage on the next Dexterity (Acrobatics) or Strength (Athletics) check you make during the same turn.",
    levels: [13],
    subClassId: ids.swashbuckler,
  },
  {
    name: "Master Duelist",
    description:
      "Beginning at 17th level, your mastery of the blade lets you turn failure into success in combat. If you miss with an attack roll, you can roll it again with advantage. Once you do so, you can't use this feature again until you finish a short or long rest.",
    levels: [17],
    subClassId: ids.swashbuckler,
  },
  //thief
  {
    name: "Fast Hands",
    description:
      "Starting at 3rd level, you can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action.",
    levels: [3],
    subClassId: ids.thief,
  },
  {
    name: "Second-Story Work",
    description:
      "When you choose this archetype at 3rd level, you gain the ability to climb faster than normal; climbing no longer costs you extra movement.\n\nIn addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier.",
    levels: [3],
    subClassId: ids.thief,
  },
  {
    name: "Supreme Sneak",
    description:
      "Starting at 9th level, you have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn.",
    levels: [9],
    subClassId: ids.thief,
  },
  {
    name: "Use Magic Device",
    description:
      "By 13th level, you have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items.",
    levels: [13],
    subClassId: ids.thief,
  },
  {
    name: "Thief's Reflexes",
    description:
      "When you reach 17th level, you have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised.",
    levels: [17],
    subClassId: ids.thief,
  },
];

export default RogueSubclassFeatures;
