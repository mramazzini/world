import { Prisma } from "@prisma/client";

const ids = {
  archfey: 110,
  celestial: 111,
  fathomless: 112,
  fiend: 113,
  genie: 114,
  greatOldOne: 115,
  hexblade: 116,
  undead: 117,
  undying: 118,
};

const warlockSubclassFeatures: Prisma.SubClassFeatureCreateManyInput[] = [
  //archfey
  {
    name: "Expanded Spell List",
    levels: [1],
    description:
      "The Archfey lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
    subClassId: ids.archfey,
    extendedTable: [
      {
        "Archfey Spells": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Faerie Fire, Sleep",
            },
            {
              "Spell Level": "2nd",
              Spells: "Calm Emotions, Phantasmal Force",
            },
            {
              "Spell Level": "3rd",
              Spells: "Blink, Plant Growth",
            },
            {
              "Spell Level": "4th",
              Spells: "Dominate Beast, Greater Invisibility",
            },
            {
              "Spell Level": "5th",
              Spells: "Dominate Person, Seeming",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Fey Presence",
    description:
      "Starting at 1st level, your patron bestows upon you the ability to project the beguiling and fearsome presence of the fey. As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest.",
    levels: [1],
    subClassId: ids.archfey,
  },
  {
    name: "Misty Escape",
    description:
      "Starting at 6th level, you can vanish in a puff of mist in response to harm. When you take damage, you can use your reaction to turn invisible and teleport up to 60 feet to an unoccupied space you can see. You remain invisible until the start of your next turn or until you attack or cast a spell.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest.",
    levels: [6],
    subClassId: ids.archfey,
  },
  {
    name: "Beguiling Defenses",
    description:
      "Beginning at 10th level, your patron teaches you how to turn the mind-affecting magic of your enemies against them. You are immune to being charmed, and when another creature attempts to charm you, you can use your reaction to attempt to turn the charm back on that creature. The creature must succeed on a Wisdom saving throw against your warlock spell save DC or be charmed by you for 1 minute or until the creature takes any damage.",
    levels: [10],
    subClassId: ids.archfey,
  },
  {
    name: "Dark Delirium",
    description:
      "Starting at 14th level, you can plunge a creature into an illusory realm. As an action, choose a creature that you can see within 60 feet of you. It must make a Wisdom saving throw against your warlock spell save DC. On a failed save, it is charmed or frightened by you (your choice) for 1 minute or until your concentration is broken (as if you are concentrating on a spell). This effect ends early if the creature takes any damage.\n\nUntil this illusion ends, the creature thinks it is lost in a misty realm, the appearance of which you choose. The creature can see and hear only itself, you, and the illusion.\n\nYou must finish a short or long rest before you can use this feature again.",
    levels: [14],
    subClassId: ids.archfey,
  },
  //Celestial
  {
    name: "Expanded Spell List",
    description:
      "The Celestial lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
    levels: [1],
    subClassId: ids.celestial,
    extendedTable: [
      {
        "Celestial Spells": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: " 	Cure Wounds, Guiding Bolt",
            },
            {
              "Spell Level": "2nd",
              Spells: "Flaming Sphere, Lesser Restoration",
            },
            {
              "Spell Level": "3rd",
              Spells: "Daylight, Revivify",
            },
            {
              "Spell Level": "4th",
              Spells: "Guardian of Faith, Wall of Fire",
            },
            {
              "Spell Level": "5th",
              Spells: "Flame Strike, Greater Restoration",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Bonus Cantrips",
    description:
      "At 1st level, you learn the Light and Sacred Flame cantrips. They count as warlock cantrips for you, but they don’t count against your number of cantrips known.",
    levels: [1],
    subClassId: ids.celestial,
  },
  {
    name: "Healing Light",
    description:
      "At 1st level, you gain the ability to channel celestial energy to heal wounds. You have a pool of d6s that you spend to fuel this healing. The number of dice in the pool equals 1 + your warlock level.\n\nAs a bonus action, you can heal one creature you can see within 60 feet of you, spending dice from the pool. The maximum number of dice you can spend at once equals your Charisma modifier (minimum of one die). Roll the dice you spend, add them together, and restore a number of hit points equal to the total.\n\nYour pool regains all expended dice when you finish a long rest.",
    levels: [1],
    subClassId: ids.celestial,
  },
  {
    name: "Radiant Soul",
    description:
      "Starting at 6th level, your link to the Celestial allows you to serve as a conduit for radiant energy. You have resistance to radiant damage, and when you cast a spell that deals radiant or fire damage, you add your Charisma modifier to one radiant or fire damage roll of that spell against one of its targets.",
    levels: [6],
    subClassId: ids.celestial,
  },
  {
    name: "Celestial Resilience",
    description:
      "Starting at 10th level, you gain temporary hit points whenever you finish a short or long rest. These temporary hit points equal your warlock level + your Charisma modifier. Additionally, choose up to five creatures you can see at the end of the rest. Those creatures each gain temporary hit points equal to half your warlock level + your Charisma modifier.",
    levels: [10],
    subClassId: ids.celestial,
  },
  {
    name: "Searing Vengeance",
    description:
      "Starting at 14th level, the radiant energy you channel allows you to resist death. When you have to make a death saving throw at the start of your turn, you can instead spring back to your feet with a burst of radiant energy. You regain hit points equal to half your hit point maximum, and then you stand up if you so choose. Each creature of your choice that is within 30 feet of you takes radiant damage equal to 2d8 + your Charisma modifier, and is blinded until the end of the current turn.\n\nOnce you use this feature, you can’t use it again until you finish a long rest.",
    levels: [14],
    subClassId: ids.celestial,
  },
  //fathomless
  {
    name: "Expanded Spell List",
    description:
      "The Fathomless lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
    levels: [1],
    subClassId: ids.fathomless,
    extendedTable: [
      {
        "Fathomless Spells": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Create or Destroy Water, Thunderwave",
            },
            {
              "Spell Level": "2nd",
              Spells: "Gust of Wind, Silence",
            },
            {
              "Spell Level": "3rd",
              Spells: "Lightning Bolt, Sleet Storm",
            },
            {
              "Spell Level": "4th",
              Spells: "Control Water, Summon Elemental (Water only)",
            },
            {
              "Spell Level": "5th",
              Spells: "Bigby's Hand (appears as a tentacle), Cone of Cold",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Tentacle of the Deep",
    description:
      "At 1st level, you can magically summon a spectral tentacle that strikes at your foes. As a bonus action, you create a 10-foot-long tentacle at a point you can see within 60 feet of you. The tentacle lasts for 1 minute or until you use this feature to create another tentacle.\n\nWhen you create the tentacle, you can make a melee spell attack against one creature within 10 feet of it. On a hit, the target takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn. When you reach 10th level in this class, the damage increases to 2d8.\n\nAs a bonus action on your turn, you can move the tentacle up to 30 feet and repeat the attack.\n\nYou can summon the tentacle a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    levels: [1],
    subClassId: ids.fathomless,
  },
  {
    name: "Gift of the Sea",
    description:
      "Starting at 1st level, you gain a swimming speed of 40 feet, and you can breathe underwater.",
    levels: [1],
    subClassId: ids.fathomless,
  },
  {
    name: "Oceanic Soul",
    description:
      "At 6th level, you are now even more at home in the depths. You gain resistance to cold damage. In addition, when you are fully submerged, any creature that is also fully submerged can understand your speech, and you can understand theirs.",
    levels: [6],
    subClassId: ids.fathomless,
  },
  {
    name: "Guardian Coil",
    description:
      "At 6th level, your Tentacle of the Deeps can defend you and others, interposing itself between them and harm. When you or a creature you can see takes damage while within 10 feet of the tentacle, you can use your reaction to choose one of those creatures and reduce the damage to that creature by 1d8. When you reach 10th level in this class, the damage reduced by the tentacle increases to 2d8.",
    levels: [6],
    subClassId: ids.fathomless,
  },
  {
    name: "Grasping Tentacles",
    description:
      "Starting at 10th level, you learn the spell Evard's Black Tentacles. It counts as a warlock spell for you, but it doesn't count against the number of spells you know. You can also cast it once without using a spell slot, and you regain the ability to do so when you finish a long rest.\n\nWhenever you cast this spell, your patron's magic bolsters you, granting you a number of temporary hit points equal to your warlock level. Moreover, damage can't break your concentration on this spell.",
    levels: [10],
    subClassId: ids.fathomless,
  },
  {
    name: "Fathomless Plunge",
    description:
      "When you reach 14th level, you can magically open temporary conduits to watery destinations. As an action, you can teleport yourself and up to five other willing creatures that you can see within 30 feet of you. Amid a whirl of tentacles, you all vanish and then reappear up to 1 mile away in a body of water you've seen (pond size or larger) or within 30 feet of it, each of you appearing in an unoccupied space within 30 feet of the others.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest.",
    levels: [14],
    subClassId: ids.fathomless,
  },
  // fiend
  {
    name: "Expanded Spell List",
    description:
      "The Fiend lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
    levels: [1],
    extendedTable: [
      {
        "Fiend Spells": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Burning Hands, Command",
            },
            {
              "Spell Level": "2nd",
              Spells: "Blindness/Deafness, Scorching Ray",
            },
            {
              "Spell Level": "3rd",
              Spells: "Fireball, Stinking Cloud",
            },
            {
              "Spell Level": "4th",
              Spells: "Fire Shield, Wall of Fire",
            },
            {
              "Spell Level": "5th",
              Spells: "Flame Strike, Hallow",
            },
          ],
        },
      },
    ],
    subClassId: ids.fiend,
  },
  {
    name: "Dark One's Blessing",
    description:
      "Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1).",
    levels: [1],
    subClassId: ids.fiend,
  },
  {
    name: "Dark One's Own Luck",
    description:
      "Starting at 6th level, you can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a d10 to your roll. You can do so after seeing the initial roll but before any of the roll's effects occur.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest.",
    levels: [6],
    subClassId: ids.fiend,
  },
  {
    name: "Fiendish Resilience",
    description:
      "Starting at 10th level, you can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance.",
    levels: [10],
    subClassId: ids.fiend,
  },
  {
    name: "Hurl Through Hell",
    description:
      "Starting at 14th level, when you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes. The creature disappears and hurtles through a nightmare landscape.\n\nAt the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d10 psychic damage as it reels from its horrific experience.\n\nOnce you use this feature, you can't use it again until you finish a long rest.",
    levels: [14],
    subClassId: ids.fiend,
  },
  // genie
  {
    name: "Select a Genie Patron",
    description:
      "You choose your patron's kind or determine it randomly, using the Genie Kind table.",
    levels: [1],
    subClassId: ids.genie,
    extendedTable: [
      {
        "Genie Kind": {
          headers: ["d4", "Kind", "Element"],
          data: [
            {
              d4: "1",
              Kind: "Dao",
              Element: "Earth",
            },
            {
              d4: "2",
              Kind: "Djinni",
              Element: "Air",
            },
            {
              d4: "3",
              Kind: "Efreeti",
              Element: "Fire",
            },
            {
              d4: "4",
              Kind: "Marid",
              Element: "Water",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Expanded Spell List",
    description:
      "At 1st level, the Genie lets you choose from an expanded list of spells when you learn a warlock spell. The Genie Expanded Spells table shows the genie spells that are added to the warlock spell list for you, along with the spells associated in the table with your patron's kind: dao, djinni, efreeti, or marid.",
    levels: [1],
    subClassId: ids.genie,
    extendedTable: [
      {
        "Genie Expanded Spells (All Genies)": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Detect Evil and Good",
            },
            {
              "Spell Level": "2nd",
              Spells: "Phantasmal Force",
            },
            {
              "Spell Level": "3rd",
              Spells: "Create Food and Water",
            },
            {
              "Spell Level": "4th",
              Spells: "Phantasmal Killer",
            },
            {
              "Spell Level": "5th",
              Spells: "Creation",
            },
            {
              "Spell Level": "9th",
              Spells: "Wish",
            },
          ],
        },
      },
      {
        "Genie Expanded Spells (Dao)": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Sanctuary",
            },
            {
              "Spell Level": "2nd",
              Spells: "Spike Growth",
            },
            {
              "Spell Level": "3rd",
              Spells: "Meld into Stone",
            },
            {
              "Spell Level": "4th",
              Spells: "Stone Shape",
            },
            {
              "Spell Level": "5th",
              Spells: "Wall of Stone",
            },
          ],
        },
      },
      {
        "Genie Expanded Spells (Djinni)": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Thunderwave",
            },
            {
              "Spell Level": "2nd",
              Spells: "Gust of Wind",
            },
            {
              "Spell Level": "3rd",
              Spells: "Wind Wall",
            },
            {
              "Spell Level": "4th",
              Spells: "Greater Invisibility",
            },
            {
              "Spell Level": "5th",
              Spells: "Seeming",
            },
          ],
        },
      },
      {
        "Genie Expanded Spells (Efreeti)": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Burning Hands",
            },
            {
              "Spell Level": "2nd",
              Spells: "Scorching Ray",
            },
            {
              "Spell Level": "3rd",
              Spells: "Fireball",
            },
            {
              "Spell Level": "4th",
              Spells: "Fire Shield",
            },
            {
              "Spell Level": "5th",
              Spells: "Flame Strike",
            },
          ],
        },
      },
      {
        "Genie Expanded Spells (Marid)": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Fog Cloud",
            },
            {
              "Spell Level": "2nd",
              Spells: "Blur",
            },
            {
              "Spell Level": "3rd",
              Spells: "Sleet Storm",
            },
            {
              "Spell Level": "4th",
              Spells: "Control Water",
            },
            {
              "Spell Level": "5th",
              Spells: "Cone of Cold",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Genie's Vessel",
    description:
      "Also at 1st level, your patron gifts you a magical vessel that grants you a measure of the genie's power. The vessel is a Tiny object, and you can use it as a spellcasting focus for your warlock spells. The object can be an Urn, Oil lamp, a Ring, or any other Tiny object that might fit the theme of your patron.\n\nThe vessel's AC equals your spell save DC. Its hit points equal your warlock level plus your proficiency bonus, and it is immune to poison and psychic damage.\n\nIf the vessel is destroyed or you lose it, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and the previous vessel is destroyed if it still exists. The vessel vanishes in a flare of elemental power when you die.\n\nWhile you are touching the vessel, you can use it in the following ways:",
    levels: [1],
    subClassId: ids.genie,
    extendedTable: [
      {
        "": {
          headers: ["Vessel Use", "Effect"],
          data: [
            {
              "Vessel Use": "Bottled Respite",
              Effect:
                "As an action, you can magically vanish and enter your vessel, which remains in the space you left. The interior of the vessel is an extradimensional space in the shape of a 20-foot-radius cylinder, 20 feet high, and resembles your vessel. The interior is appointed with cushions and low tables and is a comfortable temperature. While inside, you can hear the area around your vessel as if you were in its space. You can remain inside the vessel up to a number of hours equal to twice your proficiency bonus.\n\n You exit the vessel early if you use a bonus action to leave, if you die, or if the vessel is destroyed. When you exit the vessel, you appear in the unoccupied space closest to it. Any objects left in the vessel remain there until carried out, and if the vessel is destroyed, every object stored there harmlessly appears in the unoccupied spaces closest to the vessel's former space.\n\n Once you enter the vessel, you can't enter again until you finish a long rest.",
            },
            {
              "Vessel Use": "Genie's Wrath",
              Effect:
                "Once during each of your turns when you hit with an attack roll, you can deal extra damage to the target equal to your proficiency bonus. The type of this damage is determined by your patron: bludgeoning (dao), thunder (djinni), fire (efreeti), or cold (marid).",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Elemental Gift",
    description:
      "At 6th level, you begin to take on characteristics of your patron's kind. You now have resistance to a damage type determined by your patron's kind: bludgeoning (dao), thunder (djinni), fire (efreeti), or cold (marid).\n\nIn addition, as a bonus action, you can give yourself a flying speed of 30 feet that lasts for 10 minutes, during which you can hover. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    levels: [6],
    subClassId: ids.genie,
  },
  {
    name: "Sanctuary Vessel",
    description:
      "At 10th level, when you enter your Genie's Vessel via the Bottled Respite feature, you can now choose up to five willing creatures that you can see within 30 feet of you, and the chosen creatures are drawn into the vessel with you.\n\nAs a bonus action, you can eject any number of creatures from the vessel, and everyone is ejected if you leave or die or if the vessel is destroyed.\n\nIn addition, anyone (including you) who remains within the vessel for at least 10 minutes gains the benefit of finishing a short rest, and anyone can add your proficiency bonus to the number of hit points they regain if they spend any Hit Dice as part of a short rest there.",
    levels: [10],
    subClassId: ids.genie,
  },
  {
    name: "Limited Wish",
    description:
      "At 14th level, you entreat your patron to grant you a small wish. As an action, you can speak your desire to your Genie's Vessel, requesting the effect of one spell that is 6th level or lower and has a casting time of 1 action. The spell can be from any class's spell list, and you don't need to meet the requirements in that spell, including costly components: the spell simply takes effect as part of this action.\n\nOnce you use this feature, you can't use it again until you finish 1d4 long rests.",
    levels: [14],
    subClassId: ids.genie,
  },
  //great old one
  {
    name: "Expanded Spell List",
    description:
      "The Great Old One lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
    levels: [1],
    subClassId: ids.greatOldOne,
    extendedTable: [
      {
        "Great Old One Spells": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Dissonant Whispers, Tasha's Hideous Laughter",
            },
            {
              "Spell Level": "2nd",
              Spells: "Detect Thoughts, Phantasmal Force",
            },
            {
              "Spell Level": "3rd",
              Spells: "Clairvoyance, Sending",
            },
            {
              "Spell Level": "4th",
              Spells: "Dominate Beast, Evard's Black Tentacles",
            },
            {
              "Spell Level": "5th",
              Spells: "Dominate Person, Telekinesis",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Awakened Mind",
    description:
      "Starting at 1st level, your alien knowledge gives you the ability to touch the minds of other creatures. You can telepathically speak to any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language.",
    levels: [1],
    subClassId: ids.greatOldOne,
  },
  {
    name: "Entropic Ward",
    description:
      "At 6th level, you learn to magically ward yourself against attack and to turn an enemy's failed strike into good luck for yourself. When a creature makes an attack roll against you, you can use your reaction to impose disadvantage on that roll. If the attack misses you, your next attack roll against the creature has advantage if you make it before the end of your next turn.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest.",
    levels: [6],
    subClassId: ids.greatOldOne,
  },
  {
    name: "Thought Shield",
    description:
      "Starting at 10th level, your thoughts can't be read by telepathy or other means unless you allow it. You also have resistance to psychic damage, and whenever a creature deals psychic damage to you, that creature takes the same amount of damage that you do.",
    levels: [10],
    subClassId: ids.greatOldOne,
  },
  {
    name: "Create Thrall",
    description:
      "At 14th level, you gain the ability to infect a humanoid's mind with the alien magic of your patron. You can use your action to touch an incapacitated humanoid. That creature is then charmed by you until a Remove Curse spell is cast on it, the charmed condition is removed from it, or you use this feature again.\n\nYou can communicate telepathically with the charmed creature as long as the two of you are on the same plane of existence.",
    levels: [14],
    subClassId: ids.greatOldOne,
  },
  //hexblade
  {
    name: "Expanded Spell List",
    description:
      "The Hexblade lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
    levels: [1],
    subClassId: ids.hexblade,
    extendedTable: [
      {
        "Hexblade Spells": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Shield, Wrathful Smite",
            },
            {
              "Spell Level": "2nd",
              Spells: "Blur, Branding Smite",
            },
            {
              "Spell Level": "3rd",
              Spells: "Blink, Elemental Weapon",
            },
            {
              "Spell Level": "4th",
              Spells: "Phantasmal Killer, Staggering Smite",
            },
            {
              "Spell Level": "5th",
              Spells: "Banishing Smite, Cone of Cold",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Hexblade's Curse",
    description:
      "Starting at 1st level, you gain the ability to place a baleful curse on someone. As a bonus action, choose one creature you can see within 30 feet of you. The target is cursed for 1 minute. The curse ends early if the target dies, you die, or you are incapacitated.\n\nYou can';t use this feeature again until you finish a short or long rest.\n\n Until the curse ends, you gain the following benefits:",
    levels: [1],
    subClassId: ids.hexblade,
    options: [
      "You gain a bonus to damage rolls against the cursed target. The bonus equals your proficiency bonus.",
      "Any attack roll you make against the cursed target is a critical hit on a roll of 19 or 20 on the d20.",
      "If the cursed target dies, you regain hit points equal to your warlock level + your Charisma modifier (minimum of 1 hit point).",
    ],
  },
  {
    name: "Hex Warrior",
    description:
      "At 1st level, you acquire the training necessary to effectively arm yourself for battle. You gain proficiency with medium armor, shields, and martial weapons.\n\nThe influence of your patron also allows you to mystically channel your will through a particular weapon. Whenever you finish a long rest, you can touch one weapon that you are proficient with and that lacks the two-handed property. When you attack with that weapon, you can use your Charisma modifier, instead of Strength or Dexterity, for the attack and damage rolls. This benefit lasts until you finish a long rest. If you later gain the Pact of the Blade feature, this benefit extends to every pact weapon you conjure with that feature, no matter the weapon's type.",
    levels: [1],
    subClassId: ids.hexblade,
  },
  {
    name: "Accursed Specter",
    description:
      "Starting at 6th level, you can curse the soul of a person you slay, temporarily binding it in your service. When you slay a humanoid, you can cause its spirit to rise from its corpse as a specter. When the specter appears, it gains temporary hit points equal to half your warlock level. Roll initiative for the specter, which has its own turns. It obeys your verbal commands, and it gains a special bonus to its attack rolls equal to your Charisma modifier (minimum of +0).\n\nThe specter remains in your service until the end of your next long rest, at which point it vanishes to the afterlife.\n\nOnce you bind a specter with this feature, you can't use the feature again until you finish a long rest.",
    levels: [6],
    subClassId: ids.hexblade,
  },
  {
    name: "Armor of Hexes",
    description:
      "At 10th level, your hex grows more powerful. If the target cursed by your Hexblade’s Curse hits you with an attack roll, you can use your reaction to roll a d6. On a 4 or higher, the attack instead misses you, regardless of its roll.",
    levels: [10],
    subClassId: ids.hexblade,
  },
  {
    name: "Master of Hexes",
    description:
      "Starting at 14th level, you can spread your Hexblade's Curse from a slain creature to another creature. When the creature cursed by your Hexblade's Curse dies, you can apply the curse to a different creature you can see within 30 feet of you, provided you aren't incapacitated. When you apply the curse in this way, you don't regain hit points from the death of the previously cursed creature.",
    levels: [14],
    subClassId: ids.hexblade,
  },
  // undead
  {
    name: "Expanded Spell List",
    description:
      "At 1st level, the Undead lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
    levels: [1],
    subClassId: ids.undead,
    extendedTable: [
      {
        "Undead Spells": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Bane, False Life",
            },
            {
              "Spell Level": "2nd",
              Spells: "Blindness/Deafness, Phantasmal Force",
            },
            {
              "Spell Level": "3rd",
              Spells: "Phantom Steed, Speak with Dead",
            },
            {
              "Spell Level": "4th",
              Spells: " 	Death Ward, Greater Invisibility",
            },
            {
              "Spell Level": "5th",
              Spells: "Antilife Shell, Cloudkill",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Form of Dread",
    description:
      "At 1st level, you manifest an aspect of your patron’s dreadful power. As a bonus action, you transform for 1 minute. While transformed, you gain the benefits in the table below.\n\nYou can transform a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n\nThe appearance of your Form of Dread reflects some aspect of your patron. For example, your form could be a shroud of shadows forming the crown and robes of your lich patron, or your body might glow with glyphs from ancient funerary rites and be surrounded by desert winds, suggesting your mummy patron.",
    levels: [1],
    subClassId: ids.undead,
    extendedTable: [
      {
        "Form of Dread Benefits": {
          headers: ["Benefit"],
          data: [
            {
              Benefit:
                "You gain temporary hit points equal to 1d10 + your warlock level.",
            },
            {
              Benefit:
                "Once during each of your turns, when you hit a creature with an attack, you can force it to make a Wisdom saving throw, and if the saving throw fails, the target is frightened of you until the end of your next turn.",
            },
            {
              Benefit: "You are immune to the frightened condition.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Grave Touched",
    description:
      "At 6th level, your patron’s powers have a profound effect on your body and magic. You don’t need to eat, drink, or breathe.\n\nIn addition, once during each of your turns, when you hit a creature with an attack and roll damage against the creature, you can replace the damage type with necrotic damage. While you are using your Form of Dread, you can roll one additional damage die when determining the necrotic damage the target takes.",
    levels: [6],
    subClassId: ids.undead,
  },
  {
    name: "Necrotic Husk",
    description:
      "At 10th level, Your connection to undeath and necrotic energy now saturates your body. You have resistance to necrotic damage. If you are transformed using your Form of Dread, you instead become immune to necrotic damage.\n\nIn addition, when you are reduced to 0 hit points, you can use your reaction to drop to 1 hit point instead and cause your body to erupt with deathly energy. Each creature of your choice that is within 30 feet of you takes necrotic damage equal to 2d10 + your warlock level. You then gain 1 level of exhaustion. Once you use this reaction, you can’t do so again until you finish 1d4 long rests.",
    levels: [10],
    subClassId: ids.undead,
  },
  {
    name: "Spirit Projection",
    description:
      "At 14th level, your spirit can become untethered from your physical form. As an action, you can project your spirit from your body. The body you leave behind is unconscious and in a state of suspended animation.\n\nYour spirit resembles your mortal form in almost every way, replicating game statistics but not your possessions. Any damage or other effects that apply to your spirit or physical body affects the other. Your spirit can remain outside your body for up to 1 hour or until your concentration is broken (as if concentrating on a spell). When your projection ends, your spirit returns to your body or your body magically teleports to your spirit’s space (your choice).\n\nOnce you use this feature, you can’t do so again until you finish a long rest.\n\nWhile projecting your spirit, you gain the following benefits:",
    options: [
      "Your spirit and body gain resistance to bludgeoning, piercing, and slashing damage.",
      "When you cast a spell of the conjuration or necromancy school, the spell doesn’t require verbal or somatic components or material components that lack a gold cost.",
      "You have a flying speed equal to your walking speed and can hover. You can move through creatures and objects as if they were difficult terrain, but you take 1d10 force damage if you end your turn inside a creature or an object.",
      "While you are using your Form of Dread, once during each of your turns when you deal necrotic damage to a creature, you regain hit points equal to half the amount of necrotic damage dealt.",
    ],
    levels: [14],
    subClassId: ids.undead,
  },
];

export default warlockSubclassFeatures;
