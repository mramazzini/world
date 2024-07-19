import { Prisma } from "@prisma/client";

const ids = {
  arcana: 41,
  death: 42,
  forge: 43,
  grave: 44,
  knowledge: 45,
  life: 46,
  light: 47,
  nature: 48,
  order: 49,
  peace: 50,
  tempest: 51,
  trickery: 52,
  twilight: 53,
  war: 54,
};

const ClericSubclassFeatures: Prisma.SubClassFeatureCreateManyInput[] = [
  // Arcana
  {
    name: "Arcane Initiate",
    description:
      "When you choose this domain at 1st level, you gain proficiency in the Arcana skill, and you gain two cantrips of your choice from the wizard spell list. For you, these cantrips count as cleric cantrips.",
    subClassId: ids.arcana,
    levels: [1],
  },
  {
    name: "Channel Divinity: Arcane Abjuration",
    description:
      "Starting at 2nd level, you can use your Channel Divinity to abjure otherworldly creatures.\n\nAs an action, you present your holy symbol, and one celestial, elemental, fey, or fiend of your choice that is within 30 feet of you must make a Wisdom saving throw, provided that the creature can see or hear you. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.\n\nA turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly end its move in a space within 30 feet of you. It also can't take reactions. For its action, it can only use the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.\n\nAfter you reach 5th level, when a creature fails its saving throw against your Arcane Abjuration feature, the creature is banished for 1 minute (as in the Banishment spell, no concentration required) if it isn't on its plane of origin and its challenge rating is at or below a certain threshold, as shown on the Arcane Banishment table.",
    subClassId: ids.arcana,
    levels: [2, 5, 8, 11, 14, 17],
    extendedTable: [
      {
        "Arcane Banishment": {
          headers: ["Cleric Level", "Creature CR"],
          data: [
            {
              "Cleric Level": "5th",
              "Creature CR": "1/2",
            },
            {
              "Cleric Level": "8th",
              "Creature CR": "1",
            },
            {
              "Cleric Level": "11th",
              "Creature CR": "2",
            },
            {
              "Cleric Level": "14th",
              "Creature CR": "3",
            },
            {
              "Cleric Level": "17th",
              "Creature CR": "4",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Spell Breaker",
    description:
      "Starting at 6th level, when you restore hit points to an ally with a spell of 1st level or higher, you can also end one spell of your choice on that creature. The level of the spell you end must be equal to or lower than the level of the spell slot you use to cast the healing spell.",
    subClassId: ids.arcana,
    levels: [6],
  },
  {
    name: "Potent Spellcasting",
    description:
      "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.",
    subClassId: ids.arcana,
    levels: [8],
  },
  {
    name: "Arcane Mastery",
    description:
      "At 17th level, you choose four spells from the wizard spell list, one from each of the following levels: 6th, 7th, 8th, and 9th. You add them to your list of domain spells. Like your other domain spells, they are always prepared and count as cleric spells for you.",
    subClassId: ids.arcana,
    levels: [17],
  },
  // Death
  {
    name: "Bonus Proficiency",
    description:
      "When you choose this domain at 1st level, you gain proficiency with martial weapons.",
    subClassId: ids.death,
    levels: [1],
  },
  {
    name: "Reaper",
    description:
      "At 1st level, you learn one necromancy cantrip of your choice from any spell list. When you cast a necromancy cantrip that normally targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other.",
    subClassId: ids.death,
    levels: [1],
  },
  {
    name: "Channel Divinity: Touch of Death",
    description:
      "Starting at 2nd level, you can use Channel Divinity to destroy another creature's life force by touch. When you hit a creature with a melee attack, you can use Channel Divinity to deal extra necrotic damage to the target. The damage equals 5 + twice your cleric level.",
    subClassId: ids.death,
    levels: [2],
  },
  {
    name: "Inescapable Destruction",
    description:
      "Starting at 6th level, your ability to channel negative energy becomes more potent. Necrotic damage dealt by your cleric spells and Channel Divinity options ignores resistance to necrotic damage.",
    subClassId: ids.death,
    levels: [6],
  },
  {
    name: "Divine Strike",
    description:
      "At 8th level, you gain the ability to infuse your weapon strikes with necrotic energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an a 1d8 necrotic damage to the target. When you reach 14th level, the extra damage increases to 2d8.",
    subClassId: ids.death,
    levels: [8, 14],
  },
  {
    name: "Improved Reaper",
    description:
      "Starting at 17th level, when you cast a necromancy spell of 1st through 5th level that targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other. If the spell consumes its material components, you must provide them for each target.",
    subClassId: ids.death,
    levels: [17],
  },
  // Forge
  {
    name: "Bonus Proficiencies",
    description:
      "When you choose this domain at 1st level, you gain proficiency with heavy armor and smith's tools.",
    subClassId: ids.forge,
    levels: [1],
  },
  {
    name: "Blessing of the Forge",
    description:
      "At 1st level, you gain the ability to imbue magic into a weapon or armor. At the end of a long rest, you can touch one nonmagical object that is a suit of armor or a simple or martial weapon. Until the end of your next long rest or until you die, the object becomes a magic item, granting a +1 bonus to AC if it's armor or a +1 bonus to attack and damage rolls if it's a weapon.\n\nOnce you use this feature, you can't use it again until you finish a long rest.",
    subClassId: ids.forge,
    levels: [1],
  },
  {
    name: "Channel Divinity: Artisan's Blessing",
    description:
      "Starting at 2nd level, you can use your Channel Divinity to create simple items.\n\nYou conduct an hour-long ritual that crafts a nonmagical item that must include some metal: a simple or martial weapon, a suit of armor, ten pieces of ammunition, a set of tools, or another metal object. The creation is completed at the end of the hour, coalescing in an unoccupied space of your choice on a surface within 5 feet of you.\n\nThe thing you create can be something that is worth no more than 100 gp. As part of this ritual, you must lay out metal, which can include coins, with a value equal to the creation. The metal irretrievably coalesces and transforms into the creation at the ritual's end, magically forming even nonmetal parts of the creation.\n\nThe ritual can create a duplicate of a nonmagical item that contains metal, such as a key, if you possess the original during the ritual.",
    subClassId: ids.forge,
    levels: [2],
  },
  {
    name: "Soul of the Forge",
    description:
      "At 6th level, your mastery of the forge grants you special abilities:",
    subClassId: ids.forge,
    levels: [6],
    options: [
      "You gain resistance to fire damage.",
      "While wearing heavy armor, you gain a +1 bonus to AC.",
    ],
  },
  {
    name: "Divine Strike",
    description:
      "At 8th level, you gain the ability to infuse your weapon strikes with the fiery power of the forge. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 fire damage to the target. When you reach 14th level, the extra damage increases to 2d8.",
    subClassId: ids.forge,
    levels: [8, 14],
  },
  {
    name: "Saint of Forge and Fire",
    description:
      "At 17th level, your affinity with fire and metal becomes more powerful. You gain the following benefits:",
    subClassId: ids.forge,
    levels: [17],
    options: [
      "You gain immunity to fire damage.",
      "While wearing heavy armor, you have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.",
    ],
  },
  // Grave
  {
    name: "Circle of Mortality",
    description:
      "At 1st level, you gain the ability to manipulate the line between life and death. When you would normally roll one or more dice to restore hit points with a spell to a creature at 0 hit points, you instead use the highest number possible for each die.\n\nIn addition, you learn the Spare the Dying cantrip, which doesn't count against the number of cleric cantrips you know. For you, it has a range of 30 feet, and you can cast it as a bonus action.",
    subClassId: ids.grave,
    levels: [1],
  },
  {
    name: "Eyes of the Grave",
    description:
      "At 1st level, you gain the ability to occasionally sense the presence of the undead, whose existence is an insult to the natural cycle of life. As an action, you can open your awareness to magically detect undead. Until the end of your next turn, you know the location of any undead within 60 feet of you that isn't behind total cover and that isn't protected from divination magic. This sense doesn't tell you anything about a creature's capabilities or identity.\n\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest.",
    subClassId: ids.grave,
    levels: [1],
  },
  {
    name: "Channel Divinity: Path to the Grave",
    description:
      "Starting at 2nd level, you can use your Channel Divinity to mark another creature’s life force for termination.\n\nAs an action, you choose one creature you can see within 30 feet of you, cursing it until the end of your next turn. The next time you or an ally of yours hits the cursed creature with an attack, the creature has vulnerability to all of that attack's damage, and then the curse ends.",
    subClassId: ids.grave,
    levels: [2],
  },
  {
    name: "Sentinel at Death's Door",
    description:
      "At 6th level, you gain the ability to impede death’s progress. As a reaction when you or an ally that you can see within 30 feet of you suffers a critical hit, you can turn that attack into a normal hit. Any effects triggered by a critical hit are canceled.\n\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest.",
    subClassId: ids.grave,
    levels: [6],
  },
  {
    name: "Potent Spellcasting",
    description:
      "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.",
    subClassId: ids.grave,
    levels: [8],
  },
  {
    name: "Keeper of Souls",
    description:
      "At 17th level, you can seize a trace of vitality from a parting soul and use it to heal the living. When an enemy you can see dies within 30 feet of you, you or one ally of your choice that is within 30 feet of you regains hit points equal to the enemy’s number of Hit Dice. You can use this feature only if you aren't incapacitated. Once you use it, you can't do so again until the start of your next turn.",
    subClassId: ids.grave,
    levels: [17],
  },
  // knowledge
  {
    name: "Blessing of Knowledge",
    description:
      "At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion. Your proficiency bonus is doubled for any ability check you make that uses either of those skills.",
    subClassId: ids.knowledge,
    levels: [1],
  },
  {
    name: "Channel Divinity: Knowledge of the Ages",
    description:
      "Starting at 2nd level, you can use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool.",
    subClassId: ids.knowledge,
    levels: [2],
  },
  {
    name: "Channel Divinity: Read Thoughts",
    description:
      "At 6th level, you can use your Channel Divinity to read a creature's thoughts. You can then use your access to the creature's mind to command it.\n\nAs an action, choose one creature that you can see within 60 feet of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you can't use this feature on it again until you finish a long rest.\n\nIf the creature fails its save, you can read its surface thoughts (those foremost in its mind, reflecting its current emotions and what it is actively thinking about) when it is within 60 feet of you. This effect lasts for 1 minute.\n\nDuring that time, you can use your action to end this effect and cast the Suggestion spell on the creature without expending a spell slot. The target automatically fails its saving throw against the spell.",
    subClassId: ids.knowledge,
    levels: [6],
  },
  {
    name: "Potent Spellcasting",
    description:
      "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.",
    subClassId: ids.knowledge,
    levels: [8],
  },
  {
    name: "Visions of the Past",
    description:
      "Starting at 17th level, you can call up visions of the past that relate to an object you hold or your immediate surroundings. You spend at least 1 minute in meditation and prayer, then receive dreamlike, shadowy glimpses of recent events. You can meditate in this way for a number of minutes equal to your Wisdom score and must maintain concentration during that time, as if you were casting a spell.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest.",
    subClassId: ids.knowledge,
    levels: [17],
    options: [
      "**Object Reading.** Holding an object as you meditate, you can see visions of the object's previous owner. After meditating for 1 minute, you learn how the owner acquired and lost the object, as well as the most recent significant event involving the object and that owner. If the object was owned by another creature in the recent past (within a number of days equal to your Wisdom score), you can spend 1 additional minute for each owner to learn the same information about that creature.",
      "**Area Reading.** As you meditate, you see visions of recent events in your immediate vicinity (a room, street, tunnel, clearing, or the like, up to a 50-foot cube), going back a number of days equal to your Wisdom score. For each minute you meditate, you learn about one significant event, beginning with the most recent. Significant events typically involve powerful emotions, such as battles and betrayals, marriages and murders, births and funerals. However, they might also include more mundane events that are nevertheless important in your current situation.",
    ],
  },
  //life
  {
    name: "Bonus Proficiency",
    description:
      "When you choose this domain at 1st level, you gain proficiency with heavy armor.",
    subClassId: ids.life,
    levels: [1],
  },
  {
    name: "Disciple of Life",
    description:
      "Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell’s level.",
    subClassId: ids.life,
    levels: [1],
  },
  {
    name: "Channel Divinity: Preserve Life",
    description:
      "Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.\n\nAs an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct.",
    subClassId: ids.life,
    levels: [2],
  },
  {
    name: "Blessed Healer",
    description:
      "Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level.",
    subClassId: ids.life,
    levels: [6],
  },
  {
    name: "Divine Strike",
    description:
      "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.",
    subClassId: ids.life,
    levels: [8, 14],
  },
  {
    name: "Supreme Healing",
    description:
      "Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12.",
    subClassId: ids.life,
    levels: [17],
  },
  //light
  {
    name: "Bonus Cantrip",
    description:
      "When you choose this domain at 1st level, you gain the Light cantrip if you don't already know it. This cantrip doesn’t count against the number of cleric cantrips you know.",
    subClassId: ids.light,
    levels: [1],
  },
  {
    name: "Warding Flare",
    description:
      "Also at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be blinded is immune to this feature.\n\nYou can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.",
    subClassId: ids.light,
    levels: [1],
  },
  {
    name: "Channel Divinity: Radiance of the Dawn",
    description:
      "Starting at 2nd level, you can use your Channel Divinity to harness sunlight, banishing darkness and dealing radiant damage to your foes.\n\nAs an action, you present your holy symbol, and any magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within 30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal to 2d10 + your cleric level on a failed saving throw, and half as much damage on a successful one. A creature that has total cover from you is not affected.",
    subClassId: ids.light,
    levels: [2],
  },
  {
    name: "Improved Flare",
    description:
      "At 6th level, you can use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you.",
    subClassId: ids.light,
    levels: [6],
  },
  {
    name: "Potent Spellcasting",
    description:
      "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.",
    subClassId: ids.light,
    levels: [8],
  },
  {
    name: "Corona of Light",
    description:
      "Starting at 17th level, you can use your action to activate an aura of sunlight that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60-foot radius and dim light 30 feet beyond that. Your enemies in the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage.",
    subClassId: ids.light,
    levels: [17],
  },
  //nature
  {
    name: "Acolyte of Nature",
    description:
      "At 1st level, you learn one cantrip of your choice from the druid spell list. This cantrip counts as a cleric cantrip for you, but it doesn’t count against the number of cleric cantrips you know. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival.",
    subClassId: ids.nature,
    levels: [1],
  },
  {
    name: "Bonus Proficiency",
    description:
      "Starting at 2nd level, you can use your Channel Divinity to charm animals and plants.\n\nAs an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage. While it is charmed by you, it is friendly to you and other creatures you designate.",
    subClassId: ids.nature,
    levels: [2],
  },
  {
    name: "Channel Divinity: Charm Animals and Plants",
    description:
      "Starting at 2nd level, you can use your Channel Divinity to charm animals and plants.\n\nAs an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage. While it is charmed by you, it is friendly to you and other creatures you designate.",
    subClassId: ids.nature,
    levels: [2],
  },
  {
    name: "Dampen Elements",
    description:
      "Starting at 6th level, when you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage.",
    subClassId: ids.nature,
    levels: [6],
  },
  {
    name: "Divine Strike",
    description:
      " At 8th level, you gain the ability to infuse your weapon strikes with poison—a gift from your deity. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 poison damage to the target. When you reach 14th level, the extra damage increases to 2d8.",
    subClassId: ids.nature,
    levels: [8, 14],
  },
  {
    name: "Master of Nature",
    description:
      "At 17th level, you gain the ability to command animals and plant creatures. While creatures are charmed by your Charm Animals and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn.",
    subClassId: ids.nature,
    levels: [17],
  },
  //order
  {
    name: "Bonus Proficiencies",
    description:
      "When you choose this domain at 1st level, you gain proficiency with heavy armor. You also gain proficiency in the Intimidation or Persuasion skill (your choice).",
    subClassId: ids.order,
    levels: [1],
  },
  {
    name: "Voice of Authority",
    description:
      "Starting at 1st level, you can invoke the power of law to embolden an ally to attack. If you cast a spell with a spell slot of 1st level or higher and target an ally with the spell, that ally can use their reaction immediately after the spell to make one weapon attack against a creature of your choice that you can see.\n\nIf the spell targets more than one ally, you choose the ally who can make the attack.",
    subClassId: ids.order,
    levels: [1],
  },
  {
    name: "Channel Divinity: Order's Demand",
    description:
      "Starting at 2nd level, you can use your Channel Divinity to exert an intimidating presence over others.\n\nAs an action, you present your holy symbol, and each creature of your choice that can see or hear you within 30 feet of you must succeed on a Wisdom saving throw or be charmed by you until the end of your next turn or until the charmed creature takes any damage. You can also cause any of the charmed creatures to drop what they are holding when they fail the saving throw.",
    subClassId: ids.order,
    levels: [2],
  },
  {
    name: "Embodiment of the Law",
    description:
      "At 6th level, you become remarkably adept at channeling magical energy to compel others.\n\nIf you cast a spell of the enchantment school using a spell slot of 1st level or higher, you can change the spell's casting time to 1 bonus action for this casting, provided the spell's casting time is normally 1 action.\n\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.",
    subClassId: ids.order,
    levels: [6],
  },
  {
    name: "Divine Strike",
    description:
      "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 psychic damage to the target. When you reach 14th level, the extra damage increases to 2d8.",
    subClassId: ids.order,
    levels: [8, 14],
  },
  {
    name: "Order's Wrath",
    description:
      "Starting at 17th level, enemies you designate for destruction wilt under the combined efforts of you and your allies. If you deal your Divine Strike damage to a creature on your turn, you can curse that creature until the start of your next turn. The next time one of your allies hits the cursed creature with an attack, the target also takes 2d8 psychic damage, and the curse ends. You can curse a creature in this way only once per turn.",
    subClassId: ids.order,
    levels: [17],
  },
  //Peace
  {
    name: "Implement of Peace",
    description:
      "When you choose this domain at 1st level, you gain proficiency in the Insight, Performance, or Persuasion skill (your choice).",
    subClassId: ids.peace,
    levels: [1],
  },
  {
    name: "Emboldening Bond",
    description:
      "Starting at 1st level, you can forge an empowering bond among people who are at peace with one another. As an action, you choose a number of willing creatures within 30 feet of you (this can include yourself) equal to your proficiency bonus. You create a magical bond among them for 10 minutes or until you use this feature again. While any bonded creature is within 30 feet of another, the creature can roll a d4 and add the number rolled to an attack roll, an ability check, or a saving throw it makes. Each creature can add the d4 no more than once per turn.\n\nYou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    subClassId: ids.peace,
    levels: [1],
  },
  {
    name: "Channel Divinity: Balm of Peace",
    description:
      "Starting at 2nd level, you can use your Channel Divinity to make your very presence a soothing balm. As an action, you can move up to your speed, without provoking opportunity attacks, and when you move within 5 feet of any other creature during this action, you can restore a number of hit points to that creature equal to 2d6 + your Wisdom modifier (minimum of 1 hit point). A creature can receive this healing only once whenever you take this action.",
    subClassId: ids.peace,
    levels: [2],
  },
  {
    name: "Protective Bond",
    description:
      "Beginning at 6th level, the bond you forge between people helps them protect each other. When a creature affected by your Emboldening Bond feature is about to take damage, a second bonded creature within 30 feet of the first can use its reaction to teleport to an unoccupied space within 5 feet of the first creature. The second creature then takes all the damage instead.",
    subClassId: ids.peace,
    levels: [6],
  },
  {
    name: "Potent Spellcasting",
    description:
      "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.",
    subClassId: ids.peace,
    levels: [8],
  },
  {
    name: "Expansive Bond",
    description:
      "At 17th level, the benefits of your Emboldening Bond and Protective Bond features now work when the creatures are within 60 feet of each other. Moreover, when a creature uses Protective Bond to take someone else's damage, the creature has resistance to that damage.",
    subClassId: ids.peace,
    levels: [17],
  },
  //Tempest
  {
    name: "Bonus Proficiencies",
    description:
      "At 1st level, you gain proficiency with martial weapons and heavy armor.",
    subClassId: ids.tempest,
    levels: [1],
  },
  {
    name: "Wrath of the Storm",
    description:
      "Also at 1st level, you can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one.\n\nYou can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.",
    subClassId: ids.tempest,
    levels: [1],
  },
  {
    name: "Channel Divinity: Destructive Wrath",
    description:
      "Starting at 2nd level, you can use your Channel Divinity to wield the power of the storm with unchecked ferocity.When you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage, instead of rolling.",
    subClassId: ids.tempest,
    levels: [2],
  },
  {
    name: "Thunderous Strike",
    description:
      "At 6th level, when you deal lightning damage to a Large or smaller creature, you can also push it up to 10 feet away from you.",
    subClassId: ids.tempest,
    levels: [6],
  },
  {
    name: "Divine Strike",
    description:
      "At 8th level, you gain the ability to infuse your weapon strikes with the divine energy of the storm. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 thunder damage to the target. When you reach 14th level, the extra damage increases to 2d8.",
    subClassId: ids.tempest,
    levels: [8, 14],
  },
  {
    name: "Stormborn",
    description:
      "At 17th level, you have a flying speed equal to your current walking speed whenever you are not underground or indoors.",
    subClassId: ids.tempest,
    levels: [17],
  },
  //trickery
  {
    name: "Blessing of the Trickster",
    description:
      "Starting when you choose this domain at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again.",
    subClassId: ids.trickery,
    levels: [1],
  },
  {
    name: "Channel Divinity: Invoke Duplicity",
    description:
      "Starting at 2nd level, you can use your Channel Divinity to create an illusory duplicate of yourself.\n\nAs an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your concentration (as if you were concentrating on a spell). The illusion appears in an unoccupied space that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you.\n\nFor the duration, you can cast spells as though you were in the illusion's space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target.",
    subClassId: ids.trickery,
    levels: [2],
  },
  {
    name: "Channel Divinity: Cloak of Shadows",
    description:
      "Starting at 6th level, you can use your Channel Divinity to vanish.\n\nAs an action, you become invisible until the end of your next turn. You become visible if you attack or cast a spell.",
    subClassId: ids.trickery,
    levels: [6],
  },
  {
    name: "Divine Strike",
    description:
      "At 8th level, you gain the ability to infuse your weapon strikes with poison—a gift from your deity. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 poison damage to the target. When you reach 14th level, the extra damage increases to 2d8.",
    subClassId: ids.trickery,
    levels: [8, 14],
  },
  {
    name: "Improved Duplicity",
    description:
      "At 17th level, you can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet.",
    subClassId: ids.trickery,
    levels: [17],
  },
  //twilight
  {
    name: "Bonus Proficiencies",
    description:
      "When you choose this domain at 1st level, you gain proficiency with martial weapons and heavy armor.",
    subClassId: ids.twilight,
    levels: [1],
  },
  {
    name: "Eyes of Night",
    description:
      "Starting at 1st level, you can see through the deepest gloom. You have darkvision out to a range of 300 feet. In that radius, you can see in dim light as if it were bright light and in darkness as if it were dim light.\n\nAs an action, you can magically share the darkvision of this feature with willing creatures you can see within 10 feet of you, up to a number of creatures equal to your Wisdom modifier (minimum of one creature). The shared darkvision lasts for 1 hour. Once you share it, you can't do so again until you finish a long rest, unless you expend a spell slot of any level to share it again.",
    subClassId: ids.twilight,
    levels: [1],
  },
  {
    name: "Vigilant Blessing",
    description:
      "At 1st level, the night has taught you to be vigilant. As an action, you give one creature you touch (including possibly yourself) advantage on the next initiative roll the creature makes. This benefit ends immediately after the roll or if you use this feature again.",
    subClassId: ids.twilight,
    levels: [1],
  },
  {
    name: "Channel Divinity: Twilight Sanctuary",
    description:
      "At 2nd level, you can use your Channel Divinity to refresh your allies with soothing twilight.\n\nAs an action, you present your holy symbol, and a sphere of twilight emanates from you. The sphere is centered on you, has a 30-foot radius, and is filled with dim light. The sphere moves with you, and it lasts for 1 minute or until you are incapacitated or die. Whenever a creature (including you) ends its turn in the sphere, you can grant that creature one of these benefits:",
    subClassId: ids.twilight,
    levels: [2],
    options: [
      "You grant it temporary hit points equal to 1d6 plus your cleric level.",
      "You end one effect on it causing it to be charmed or frightened.",
    ],
  },
  {
    name: "Steps of Night",
    description:
      "Starting at 6th level, you can draw on the mystical power of night to rise into the air. As a bonus action when you are in dim light or darkness, you can magically give yourself a flying speed equal to your walking speed for 1 minute. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    subClassId: ids.twilight,
    levels: [6],
  },
  {
    name: "Divine Strike",
    description:
      "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 necrotic damage to the target. When you reach 14th level, the extra damage increases to 2d8.",
    subClassId: ids.twilight,
    levels: [8, 14],
  },
  {
    name: "Twilight Shroud",
    description:
      "At 17th level, the twilight that you summon offers a protective embrace: you and your allies have half cover while in the sphere created by your Twilight Sanctuary.",
    subClassId: ids.twilight,
    levels: [17],
  },
  //war
  {
    name: "Bonus Proficiencies",
    description:
      "At 1st level, you gain proficiency with martial weapons and heavy armor.",
    subClassId: ids.war,
    levels: [1],
  },
  {
    name: "War Priest",
    description:
      "From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action.\n\nYou can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.",
    subClassId: ids.war,
    levels: [1],
  },
  {
    name: "Channel Divinity: Guided Strike",
    description:
      "Starting at 2nd level, you can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.",
    subClassId: ids.war,
    levels: [2],
  },
  {
    name: "Channel Divinity: War God's Blessing",
    description:
      "At 6th level, when a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.",
    subClassId: ids.war,
    levels: [6],
  },
  {
    name: "Divine Strike",
    description:
      "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to 2d8.",
    subClassId: ids.war,
    levels: [8, 14],
  },
  {
    name: "Avatar of Battle",
    description:
      "At 17th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.",
    subClassId: ids.war,
    levels: [17],
  },
];

export default ClericSubclassFeatures;
