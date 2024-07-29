import {
  Ability,
  ArmorTypes,
  CasterType,
  Class,
  Prisma,
  Skill,
} from "@prisma/client";

const Classes: Prisma.ClassCreateManyInput[] = [
  {
    id: 1,
    name: "fighter",
    hitDie: 10,
    description:
      "Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. They are well acquainted with death, both meting it out and staring it defiantly in the face.",
    multiclassing:
      "You must have a Dexterity or Strength score of 13 or higher in order to multiclass in or out of this class.",
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
    abilityScoreLevels: [4, 6, 8, 12, 14, 16, 19],
    subClassName: "Martial Archetype",
    subClassDesc:
      "you choose an archetype that you strive to emulate in your combat styles and techniques. ",
    subfeatLevels: [3, 7, 10, 15, 18],
    spellCaster: false,
    flavorText:
      "Fighters are the warriors of the realm. They are the masters of weapons and armor, and they are well acquainted with death, both meting it out and staring it defiantly in the face.",
  },

  {
    id: 2,
    name: "wizard",
    description:
      "Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute force mind control. Their magic conjures monsters from other planes of existence, glimpses the future, or turns slain foes into zombies. Their mightiest spells change one substance into another, call meteors down from the sky, or open portals to other worlds.",
    multiclassing:
      "You must have an Intelligence score of 13 or higher in order to multiclass in or out of this class.",
    hitDie: 6,
    savingThrows: [Ability.INT, Ability.WIS],
    skills: [
      Skill.ARCANA,
      Skill.HISTORY,
      Skill.INSIGHT,
      Skill.INVESTIGATION,
      Skill.MEDICINE,
      Skill.RELIGION,
    ],
    skillChoiceCount: 2,
    weapons: ["Daggers", "Darts", "Slings", "Quarterstaffs", "Light Crossbows"],
    armor: [],
    tools: [],
    equipment: [
      "A quarterstaff or a dagger",
      "A component pouch or an arcane focus",
      "A scholar's pack or an explorer's pack",
      "A spellbook",
    ],
    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: "Arcane Tradition",
    subClassDesc: "you choose an arcane tradition that you specialize in. ",
    subfeatLevels: [2, 6, 10, 14],
    spellCaster: true,
    spellCastingAbility: Ability.INT,
    spellCastingInfo:
      "The Wizard table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
    prepareSpellInfo:
      "You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots. You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.",
    ritualCaster: true,
    ritualSpellPrepared: false,
    spellFocus: "arcane focus",
    cantripsKnown: [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], // lvl 1-20
    casterTypeId: 1,
    flavorText:
      "Wizards are the supreme magic-users, defined and united as a class by the spells they cast, using the subtle weave of magic that permeates the cosmos.",
  },
  {
    id: 3,
    name: "cleric",
    hitDie: 8,
    description:
      "Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.",
    multiclassing:
      "You must have a Wisdom score of 13 or higher in order to multiclass in or out of this class.",
    savingThrows: [Ability.WIS, Ability.CHA],
    skills: [
      Skill.HISTORY,
      Skill.INSIGHT,
      Skill.MEDICINE,
      Skill.PERSUASION,
      Skill.RELIGION,
    ],
    skillChoiceCount: 2,
    weapons: ["All Simple Weapons"],
    armor: [ArmorTypes.LIGHT, ArmorTypes.MEDIUM, ArmorTypes.SHIELDS],
    tools: [],
    equipment: [
      "A mace or a warhammer",
      "Scale mail, chain mail, or leather armor",
      "A light crossbow and 20 bolts or any simple weapon",
      "A priest's pack or an explorer's pack",
      "A shield and a holy symbol",
    ],
    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: "Divine Domain",
    subClassDesc: "you choose a divine domain that you dedicate yourself to.",
    subfeatLevels: [1, 2, 6, 8, 17],
    spellCaster: true,
    spellCastingAbility: Ability.WIS,
    spellFocus: "holy symbol",
    ritualCaster: true,
    subClassSpellDescription:
      "**Domain Spells:** Each domain has a list of its domain spells that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you.",
    prepareSpellInfo:
      "You prepare the list of cleric spells that are available for you to cast. To do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots. \n\nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.",
    spellCastingInfo:
      "The Cleric table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
    cantripsKnown: [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    casterTypeId: 1,
    flavorText:
      "Clerics are intermediaries between the mortal world and the distant planes of the gods, using their divine magic to heal the wounded, bless the righteous, and smite the wicked.",
  },
  {
    id: 4,
    name: "rogue",
    hitDie: 8,
    description:
      "Rogues rely on skill, stealth, and their foes' vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.",
    multiclassing:
      "You must have a Dexterity score of 13 or higher in order to multiclass in or out of this class.",
    savingThrows: [Ability.DEX, Ability.INT],
    skills: [
      Skill.ACROBATICS,
      Skill.ATHLETICS,
      Skill.DECEPTION,
      Skill.INSIGHT,
      Skill.INTIMIDATION,
      Skill.INVESTIGATION,
      Skill.PERCEPTION,
      Skill.PERFORMANCE,
      Skill.PERSUASION,
      Skill.SLEIGHT_OF_HAND,
      Skill.STEALTH,
    ],
    skillChoiceCount: 4,
    weapons: [
      "Simple",
      "Hand Crossbows",
      "Longswords",
      "Rapiers",
      "Shortswords",
    ],
    armor: [ArmorTypes.LIGHT],
    tools: [],
    equipment: [
      "A rapier or a shortsword",
      "A shortbow and a quiver of 20 arrows or a shortsword",
      "A burglar's pack, a dungeoneer's pack, or an explorer's pack",
      "Leather armor, two daggers, and thieves' tools",
    ],
    abilityScoreLevels: [4, 8, 10, 12, 16, 19],
    subClassName: "Roguish Archetype",
    subClassDesc:
      "you choose a roguish archetype that you emulate in your adventuring career. ",
    subfeatLevels: [3, 9, 13, 17],
    spellCaster: false,
    flavorText:
      "Rogues are cunning and elusive adversaries. Using their wits and agility, they excel in stealth and deception.",
  },
  {
    id: 5,
    name: "barbarian",
    description:
      "For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.",
    multiclassing:
      "You must have a Strength score of 13 or higher in order to multiclass in or out of this class.",
    hitDie: 12,
    savingThrows: [Ability.STR, Ability.CON],
    skills: [
      Skill.ANIMAL_HANDLING,
      Skill.ATHLETICS,
      Skill.INTIMIDATION,
      Skill.NATURE,
      Skill.PERCEPTION,
      Skill.SURVIVAL,
    ],
    skillChoiceCount: 2,
    weapons: ["Simple", "Martial"],
    armor: [ArmorTypes.LIGHT, ArmorTypes.MEDIUM, ArmorTypes.SHIELDS],
    tools: [],
    equipment: [
      "A greataxe or any martial melee weapon",
      "Two handaxes or any simple weapon",
      "An explorer's pack or a dungeoneer's pack",
      "Four javelins",
    ],
    abilityScoreLevels: [4, 6, 8, 12, 14, 16, 19],
    subClassName: "Primal Path",
    subClassDesc: "you choose a path that shapes the nature of your rage. ",
    subfeatLevels: [3, 6, 10, 14],
    spellCaster: false,
    flavorText:
      "Barbarians are fierce warriors who draw their power from a primal connection to the spirits of nature and the world around them to fuel an unquenchable rage.",
  },
  {
    id: 6,
    name: "bard",
    hitDie: 8,
    description:
      "Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds. The bard is a master of song, speech, and the magic they contain.",
    multiclassing:
      "You must have a Charisma score of 13 or higher in order to multiclass in or out of this class.",
    savingThrows: [Ability.DEX, Ability.CHA],
    skills: [
      Skill.ACROBATICS,
      Skill.ANIMAL_HANDLING,
      Skill.ARCANA,
      Skill.ATHLETICS,
      Skill.DECEPTION,
      Skill.HISTORY,
      Skill.INSIGHT,
      Skill.INTIMIDATION,
      Skill.INVESTIGATION,
      Skill.MEDICINE,
      Skill.NATURE,
      Skill.PERCEPTION,
      Skill.PERFORMANCE,
      Skill.PERSUASION,
      Skill.RELIGION,
      Skill.SLEIGHT_OF_HAND,
      Skill.STEALTH,
      Skill.SURVIVAL,
    ],
    skillChoiceCount: 3,
    weapons: [
      "Simple",
      "Hand Crossbows",
      "Longswords",
      "Rapiers",
      "Shortswords",
    ],
    armor: [ArmorTypes.LIGHT],
    tools: ["Three musical instruments of your choice"],
    equipment: [
      "A rapier, a longsword, or any simple weapon",
      "A diplomat's pack or an entertainer's pack",
      "A lute or any other musical instrument",
      "Leather armor and a dagger",
    ],
    abilityScoreLevels: [4, 8, 12, 16, 19],
    subfeatLevels: [3, 6, 14],
    subClassName: "Bardic College",
    subClassDesc: "you choose a college that you dedicate yourself to. ",
    spellCaster: true,
    spellCastingAbility: Ability.CHA,
    spellFocus: "musical instrument",
    prepareSpellInfo: `You know four 1st-level spells of your choice from the bard spell list.\n\nThe Spells Known column of the Bard table shows when you learn more bard spells of your choice. Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.\n\nAdditionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.`,
    spellCastingInfo:
      "The Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
    ritualCaster: true,
    cantripsKnown: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // lvl 1-20
    spellsKnown: [
      4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 15, 16, 18, 19, 19, 20, 22, 22, 22,
    ], // lvl 1-20
    casterTypeId: 1,
    flavorText:
      "Bards are the masters of song, speech, and the magic they contain. They use their talents to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds.",
  },
  {
    id: 7,
    name: "druid",
    hitDie: 8,
    description:
      "Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment of nature's resilience, cunning, and fury. They claim no mastery over nature, but see themselves as extensions of nature's indomitable will.",
    multiclassing:
      "You must have a Wisdom score of 13 or higher in order to multiclass in or out of this class.",
    savingThrows: [Ability.INT, Ability.WIS],
    skills: [
      Skill.ARCANA,
      Skill.ANIMAL_HANDLING,
      Skill.INSIGHT,
      Skill.MEDICINE,
      Skill.NATURE,
      Skill.PERCEPTION,
      Skill.RELIGION,
      Skill.SURVIVAL,
    ],
    skillChoiceCount: 2,
    weapons: [
      "Clubs",
      "Daggers",
      "Darts",
      "Javelins",
      "Maces",
      "Quarterstaffs",
      "Scimitars",
      "Sickles",
      "Slings",
      "Spears",
    ],
    armor: [ArmorTypes.LIGHT, ArmorTypes.MEDIUM, ArmorTypes.SHIELDS],
    tools: ["Herbalism Kit"],
    equipment: [
      "A wooden shield or any simple weapon",
      "A scimitar or any simple melee weapon",
      "Leather armor, an explorer's pack, and a druidic focus",
    ],
    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: "Druidic Circle",
    subClassDesc: "you choose a circle that you dedicate yourself to. ",
    subfeatLevels: [2, 6, 10, 14],
    spellCaster: true,
    spellCastingAbility: Ability.WIS,
    spellFocus: "druidic focus",
    prepareSpellInfo:
      "You prepare the list of druid spells that are available for you to cast. To do so, choose a number of druid spells from your spellbook equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.\n\n You can change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.",
    spellCastingInfo:
      "The Druid table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
    ritualCaster: true,
    cantripsKnown: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // lvl 1-20\
    casterTypeId: 1,
    flavorText:
      "Druids are the embodiment of nature's resilience, cunning, and fury. They claim no mastery over nature, but see themselves as extensions of nature's indomitable will.",
  },
  {
    id: 8,
    name: "monk",
    hitDie: 8,
    description:
      "Monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.",
    multiclassing:
      "You must have a Dexterity or Strength score of 13 or higher in order to multiclass in or out of this class.",
    savingThrows: [Ability.STR, Ability.DEX],
    skills: [
      Skill.ACROBATICS,
      Skill.ATHLETICS,
      Skill.HISTORY,
      Skill.INSIGHT,
      Skill.RELIGION,
      Skill.STEALTH,
    ],
    skillChoiceCount: 2,
    weapons: ["Simple", "Shortswords"],
    armor: [],
    tools: ["Choose one type of artisan's tools or one musical instrument"],
    equipment: [
      "A shortsword or any simple weapon",
      "A dungeoneer's pack or an explorer's pack",
      "10 darts",
    ],
    abilityScoreLevels: [4, 6, 8, 10, 12, 14, 16, 19],
    subClassName: "Monastic Tradition",
    subClassDesc:
      "you choose a monastic tradition that you dedicate yourself to. ",
    subfeatLevels: [3, 6, 11, 17],
    spellCaster: false,
    flavorText:
      "Monks are martial artists who use ki to perform amazing feats. They are masters of unarmed combat, and they are known for their ability to catch arrows, dodge blows, and move with extraordinary speed.",
  },
  {
    id: 9,
    name: "paladin",
    hitDie: 10,
    description:
      "Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond.",
    multiclassing:
      "You must have a Strength and Charisma score of 13 or higher in order to multiclass in or out of this class",
    savingThrows: [Ability.WIS, Ability.CHA],
    skills: [
      Skill.ATHLETICS,
      Skill.INSIGHT,
      Skill.INTIMIDATION,
      Skill.MEDICINE,
      Skill.PERSUASION,
      Skill.RELIGION,
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
      "A martial weapon and a shield or two martial weapons",
      "Five javelins or any simple melee weapon",
      "Chain mail or leather armor, a longbow, and 20 arrows",
      "A priest's pack or an explorer's pack",
      "A holy symbol",
    ],
    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: "Sacred Oath",
    subClassDesc: "you choose a sacred oath that you dedicate yourself to. ",
    subfeatLevels: [3, 7, 15, 20],
    spellCaster: true,
    spellCastingInfo:
      "The Paladin table shows how many spell slots you have to cast your spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
    prepareSpellInfo:
      "You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.\n\n You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.",
    spellCastingAbility: Ability.CHA,
    spellFocus: "holy symbol",
    casterTypeId: 2,
    flavorText:
      "Paladins are holy warriors bound to a sacred oath, using their divine magic to heal the wounded, bless the righteous, and smite the wicked.",
  },
  {
    id: 10,
    name: "ranger",
    hitDie: 10,
    description:
      "Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.",
    multiclassing:
      "You must have a Dexterity and Wisdom score of 13 or higher in order to multiclass in or out of this class.",
    savingThrows: [Ability.STR, Ability.DEX],
    skills: [
      Skill.ANIMAL_HANDLING,
      Skill.ATHLETICS,
      Skill.INSIGHT,
      Skill.INVESTIGATION,
      Skill.NATURE,
      Skill.PERCEPTION,
      Skill.STEALTH,
      Skill.SURVIVAL,
    ],
    skillChoiceCount: 3,
    weapons: ["Simple", "Martial"],
    armor: [ArmorTypes.LIGHT, ArmorTypes.MEDIUM, ArmorTypes.SHIELDS],
    tools: [],
    equipment: [
      "Scale mail or leather armor",
      "Two shortswords or two simple melee weapons",
      "A dungeoneer's pack or an explorer's pack",
      "A longbow and a quiver of 20 arrows",
    ],
    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: "Ranger Conclave",
    subClassDesc:
      "you choose to emulate the ideals and training of a ranger conclave.",
    subfeatLevels: [3, 7, 11, 15, 18],
    spellCaster: true,
    spellCastingAbility: Ability.WIS,
    spellFocus: "druidic focus",
    spellCastingInfo: `The Ranger table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. \n\nYou regain all expended spell slots when you finish a long rest.`,
    prepareSpellInfo: `You know a number of spells from the ranger spell list equal to your Wisdom modifier + half your ranger level, rounded down (minimum of one spell). These spells must be of a level for which you have spell slots. \n\nAdditionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots.`,

    spellsKnown: [
      0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11,
    ], // lvl 1-20
    casterTypeId: 2,
    flavorText:
      "Rangers are hunters and wilderness warriors who use their knowledge of the land and their fighting skills to protect the wild places of the world.",
  },
  {
    id: 11,
    name: "sorcerer",
    description:
      "Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. No one chooses sorcery; the power chooses the sorcerer.",
    multiclassing:
      "You must have a Charisma score of 13 or higher in order to multiclass in or out of this class.",
    hitDie: 6,
    savingThrows: [Ability.CON, Ability.CHA],
    skills: [
      Skill.ARCANA,
      Skill.DECEPTION,
      Skill.INSIGHT,
      Skill.INTIMIDATION,
      Skill.PERSUASION,
      Skill.RELIGION,
    ],
    skillChoiceCount: 2,
    weapons: ["Daggers", "Darts", "Slings", "Quarterstaffs", "Light Crossbows"],
    armor: [],
    tools: [],
    equipment: [
      "A light crossbow and 20 bolts or any simple weapon",
      "A component pouch or an arcane focus",
      "A dungeoneer's pack or an explorer's pack",
      "Two daggers",
    ],
    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: "Sorcerous Origin",
    subClassDesc:
      "you choose a sorcerous origin that you dedicate yourself to. ",
    subfeatLevels: [1, 6, 14, 18],
    spellCaster: true,
    spellCastingAbility: Ability.CHA,
    spellCastingInfo: `The Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.`,
    prepareSpellInfo:
      "You can cast any sorcerer spell you know without preparing it ahead of time. When you cast a spell, you expend a slot of that spell's level or higher, unless you are casting a cantrip. You regain all expended spell slots when you finish a long rest. Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.",
    spellFocus: "arcane focus",

    spellsKnown: [
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15,
    ], // lvl 1-20
    cantripsKnown: [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], // lvl 1-20
    casterTypeId: 1,
    flavorText:
      "Sorcerers are spellcasters who draw on innate magic. They are the masters of the arcane, using their knowledge and power to cast spells that can change the world around them.",
  },
  {
    id: 12,
    name: "warlock",
    hitDie: 8,
    description:
      "Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular.",
    multiclassing:
      "You must have a Charisma score of 13 or higher in order to multiclass in or out of this class.",
    savingThrows: [Ability.WIS, Ability.CHA],
    skills: [
      Skill.ARCANA,
      Skill.DECEPTION,
      Skill.HISTORY,
      Skill.INTIMIDATION,
      Skill.INVESTIGATION,
      Skill.NATURE,
      Skill.RELIGION,
    ],
    skillChoiceCount: 2,
    weapons: ["Simple"],
    armor: [],
    tools: [],
    equipment: [
      "A light crossbow and 20 bolts or any simple weapon",
      "A component pouch or an arcane focus",
      "Leather armor, any simple weapon, and two daggers",
      "A scholar's pack or a dungeoneer's pack",
    ],
    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: "Otherworldly Patron",
    subClassDesc:
      "you struck a bargain with an otherworldly being of your choice. ",
    subfeatLevels: [1, 6, 10, 14],
    spellCaster: true,
    spellCastingAbility: Ability.CHA,
    spellCastingInfo:
      "The Warlock table shows how many spell slots you have to cast your warlock spells of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.",
    prepareSpellInfo:
      "The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level or higher. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level. Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.",

    spellFocus: "arcane focus",
    cantripsKnown: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // lvl 1-20
    displaySpellList: false,

    casterTypeId: 5,
    flavorText:
      "Warlocks are wielders of magic who have forged a pact with an otherworldly being. Whether it's a demon, a devil, a fey, or some other powerful entity, warlocks draw their power from their patron.",
  },
  //artificer
  {
    id: 13,
    name: "artificer",
    source: "Wayfinder’s Guide to Eberron",
    flavorText:
      "Masters of invention, artificers use ingenuity and magic to unlock extraordinary capabilities in objects.",
    description:
      "Masters of invention, artificers use ingenuity and magic to unlock extraordinary capabilities in objects. They see magic as a complex system waiting to be decoded and then harnessed in their spells and inventions. You can find everything you need to play one of these inventors in the next few sections.Artificers use a variety of tools to channel their arcane power. To cast a spell, an artificer might use alchemist's supplies to create a potent elixir, calligrapher's supplies to inscribe a sigil of power, or tinker's tools to craft a temporary charm. The magic of artificers is tied to their tools and their talents, and few other characters can produce the right tool for a job as well as an artificer.",
    multiclassing:
      "You must have an Intelligence score of 13 or higher in order to multiclass in or out of this class.",
    hitDie: 8,
    armor: [ArmorTypes.LIGHT, ArmorTypes.MEDIUM, ArmorTypes.SHIELDS],
    savingThrows: [Ability.CON, Ability.INT],
    tools: [
      "Thieves' Tools",
      "Tinker's Tools",
      "One type of artisan's tools of your choice",
    ],
    skills: [
      Skill.ARCANA,
      Skill.HISTORY,
      Skill.INVESTIGATION,
      Skill.MEDICINE,
      Skill.NATURE,
      Skill.PERCEPTION,
      Skill.SLEIGHT_OF_HAND,
      Skill.INSIGHT,
    ],
    skillChoiceCount: 2,
    weapons: ["Simple weapons, firearms (if allowed in your campaign)"],
    equipment: [
      "Any two simple weapons",
      "A light crossbow and 20 bolts",
      "(a) Studded leather armor or (b) scale mail",
      "Thieves’ tools and a dungeoneer’s pack",
      "Alternatively, you can forgo the above equipment and start with 5d4 x 10 gp to buy your own.",
    ],
    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: "Artficer Specialist",
    subClassDesc: "you choose the type of specialist you are.",
    subfeatLevels: [3, 5, 9, 15],
    spellCaster: true,
    spellCastingAbility: Ability.INT,
    spellFocus:
      "thieves' tools or some kind of artisan's tool that you are proficient in.",
    spellCastingInfo:
      "You've studied the workings of magic and how to cast spells, channeling the magic through objects. To observers, you don't appear to be casting spells in a conventional way; you appear to produce wonders from mundane items and outlandish inventions.\n\nThe Artificer table shows how many spell slots you have to cast your artificer spells. To cast one of your artificer spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
    prepareSpellInfo:
      "You can change your list of prepared spells when you finish a long rest. Preparing a new list of artificer spells requires time spent tinkering with your spellcasting focuses: at least 1 minute per spell level for each spell on your list.\n\nYou prepare the list of artificer spells that are available for you to cast, choosing from the artificer spell list. When you do so, choose a number of artificer spells equal to your Intelligence modifier + half your artificer level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.\n\n**Tools**\n\nYou produce your artificer spell effects through your tools. You must have a spellcasting focus - specifically thieves' tools or some kind of artisan's tool - in hand when you cast any spell with this Spellcasting feature (meaning the spell has an 'M' component when you cast it). You must be proficient with the tool to use it in this way. See the equipment chapter in the Player's Handbook for descriptions of these tools.\n\nAfter you gain the Infuse Item feature at 2nd level, you can also use any item bearing one of your infusions as a spellcasting focus.\n\n**Cantrips**\n\nAt 1st level, you know two cantrips of your choice from the artificer spell list. At higher levels, you learn additional artificer cantrips of your choice, as shown in the Cantrips Known column of the Artificer table.\n\nWhen you gain a level in this class, you can replace one of the artificer cantrips you know with another cantrip from the artificer spell list.",
    ritualCaster: true,
    ritualSpellPrepared: true,
    casterTypeId: 4,
  },
];
export default Classes;
