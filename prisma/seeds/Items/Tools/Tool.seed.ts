import { Prisma, Skill } from '@prisma/client';

const ToolSeed: Prisma.ToolCreateManyInput[] = [
  {
    id: 1,
    name: "Alchemist's Supplies",

    components: [
      'Two glass beakers',
      'A metal frame to hold a beaker in place over an open flame',
      'A glass stirring rod',
      'A small mortar and pestle',
      'A pouch of common alchemical ingredients, including salt, powdered iron, and purified water.',
    ],
    componentsDescription:
      "Alchemist's supplies include two glass beakers, a metal frame to hold a beaker in place over an open flame, a glass stirring rod, a small mortar and pestle, and a pouch of common alchemical ingredients, including salt, powdered iron, and purified water.",
    skills: [
      {
        skill: Skill.ARCANA,
        description:
          "Proficiency with alchemist's supplies allows you to unlock more information on Arcana checks involving potions and similar materials.",
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          "When you inspect an area for clues, proficiency with alchemist's supplies grants additional insight into any chemicals or other substances that might have been used in the area.",
      },
    ],
  },
  {
    id: 2,
    name: "Brewer's Supplies",

    components: [
      'A large glass jug',
      'A quantity of hops',
      'A siphon',
      'Several feet of tubing',
    ],
    componentsDescription:
      "Brewer's supplies include a large glass jug, a quantity of hops, a siphon, and several feet of tubing.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Proficiency with brewer's supplies gives you additional insight on Intelligence (History) checks concerning events that involve alcohol as a significant element.",
      },
      {
        skill: Skill.MEDICINE,
        description:
          'This tool proficiency grants additional insight when you treat anyone suffering from alcohol poisoning or when you can use alcohol to dull pain.',
      },
      {
        skill: Skill.PERSUASION,
        description:
          "A stiff drink can help soften the hardest heart. Your proficiency with brewer's supplies can help you ply someone with drink, giving them just enough alcohol to mellow their mood.",
      },
    ],
  },
  {
    id: 3,
    name: "Calligrapher's Supplies",

    components: [
      'A set of inks',
      'A dozen sheets of parchment',
      'Three quills',
    ],
    componentsDescription:
      "Calligrapher's supplies include a set of inks, a dozen sheets of parchment, and three quills.",

    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'This tool proficiency can augment the benefit of successful checks made to analyze or investigate ancient writings, scrolls, or other texts, including runes etched in stone or messages in frescoes or other displays.',
      },
      {
        skill: Skill.ARCANA,
        description:
          'Although calligraphy is of little help in deciphering the content of magical writings, proficiency with these supplies can aid in identifying who wrote a script of a magical nature.',
      },
    ],
  },
  {
    id: 4,
    name: "Carpenter's Tools",

    components: [
      'A Saw',
      'A Hammer',
      'A Square',
      'A Chisel',
      'A Plane',
      'A Ruler',
      'An adze',
    ],
    componentsDescription:
      "Carpenter's tools include a saw, a hammer, a square, a chisel, a plane, a ruler, and an adze.",

    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'This tool proficiency aids you in identifying the use and the origin of wooden buildings and other large wooden objects.',
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          'You gain additional insight when inspecting areas within wooden structures, because you know tricks of construction that can conceal areas from discovery.',
      },
      {
        skill: Skill.PERCEPTION,
        description:
          'You can spot irregularities in wooden walls or floors, making it easier to find trap doors and secret passages.',
      },
      {
        skill: Skill.STEALTH,
        description:
          "You can quickly assess the weak spots in a wooden floor, making it easier to avoid the places that creak and groan when they're stepped on.",
      },
    ],
  },
  {
    id: 5,
    name: "Cartographer's Tools",

    components: [
      'A Quill',
      'Ink',
      'Some parchment',
      'A pair of compasses',
      'Calipers',
      'A ruler',
    ],
    componentsDescription:
      "Cartographer's tools include a compass, a ruler, a protractor, and a set of calligrapher's supplies.",

    skills: [
      {
        skill: Skill.NATURE,
        description:
          'Your familiarity with physical geography makes it easier for you to answer questions or solve issues relating to the terrain around you.',
      },
      {
        skill: Skill.SURVIVAL,
        description:
          'Your understanding of geography makes it easier to find paths to civilization, to predict areas where villages or towns might be found, and to avoid becoming lost. You have studied so many maps that common patterns, such as how trade routes evolve and where settlements a rise in relation to geographic locations, are familiar to you.',
      },
      {
        skill: Skill.ARCANA,
        description:
          'You can use your knowledge of maps and locations to unearth more detailed information when you use these skills. For instance, you might spot hidden messages in a map, identify when the map was made to determine if geographical features have changed since then, and so forth.',
      },
      {
        skill: Skill.HISTORY,
        description:
          'You can use your knowledge of maps and locations to unearth more detailed information when you use these skills. For instance, you might spot hidden messages in a map, identify when the map was made to determine if geographical features have changed since then, and so forth.',
      },
      {
        skill: Skill.ARCANA,
        description:
          'You can use your knowledge of maps and locations to unearth more detailed information when you use these skills. For instance, you might spot hidden messages in a map, identify when the map was made to determine if geographical features have changed since then, and so forth.',
      },
    ],
  },
  {
    id: 6,
    name: "Cobbler's Tools",

    components: [
      'A Hammer',
      'An Awl',
      'A Knife',
      'A Shoe Stand',
      'A Cutter',
      'Spare Leather',
      'Thread',
    ],
    componentsDescription:
      "Cobbler's tools consist of a hammer, an awl, a knife, a shoe stand, a cutter, spare leather, and thread.",
    skills: [
      {
        skill: Skill.ARCANA,
        description:
          'Your knowledge of shoes aids you in identifying the magical properties of enchanted boots or the history of such items.',
      },
      {
        skill: Skill.HISTORY,
        description:
          'Your knowledge of shoes aids you in identifying the magical properties of enchanted boots or the history of such items.',
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          'Footwear holds a surprising number of secrets. You can learn where someone has recently visited by examining the wear and the dirt that has accumulate',
      },
    ],
  },
  {
    id: 7,
    name: "Cook's Utensils",

    componentsDescription:
      "Cook's utensils include a metal pot, knives, forks, a stirring spoon, and a ladle.",
    components: [
      'A Metal Pot',
      'Knives',
      'Forks',
      'A Stirring Spoon',
      'A Ladle',
    ],
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your knowledge of cooking techniques allows you to assess the social patterns involved in a culture's eating habits.",
      },
      {
        skill: Skill.MEDICINE,
        description:
          'When administering treatment, you can transform medicine that is bitter or sour into a pleasing concoction.',
      },
      {
        skill: Skill.SURVIVAL,
        description:
          'When foraging for food, you can make do with ingredients you scavenge that others would be unable to transform into nourishing meals.',
      },
    ],
  },
  {
    id: 8,
    name: 'Disguise Kit',

    componentsDescription:
      'A disguise kit includes cosmetics, hair dye, small props, and a few pieces of clothing.',
    components: [
      'Cosmetics',
      'Hair Dye',
      'Small Props',
      'A Few Pieces of Clothing',
    ],
    skills: [
      {
        skill: Skill.DECEPTION,
        description:
          'In certain cases, a disguise can improve your ability to weave convincing lies.',
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          "A cunning disguise can enhance an audience's enjoyment of a performance, provided the disguise is properly designed to evoke the desired reaction.",
      },
      {
        skill: Skill.INTIMIDATION,
        description:
          'The right disguise can make you look more fearsome, whether you want to scare someone away by posing as a plague victim or intimidate a gang of thugs by taking the appearance of a bully.',
      },
      {
        skill: Skill.PERSUASION,
        description:
          'Folk tend to trust a person in uniform. If you disguise yourself as an authority figure, your efforts to persuade others are often more effective.',
      },
    ],
  },
  {
    id: 9,
    name: 'Forgery Kit',

    componentsDescription:
      'A forgery kit includes a variety of parchments, inks, pens, and seals.',
    components: ['Parchments', 'Inks', 'Pens', 'Seals'],
    skills: [
      {
        skill: Skill.DECEPTION,
        description:
          'A well-crafted forgery, such as papers proclaiming you to be a noble or a writ that grants you safe passage, can lend credence to a lie.',
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          'When you examine objects, proficiency with a forgery kit is useful for determining how an object was made and whether it is genuine.',
      },
      {
        skill: Skill.ARCANA,
        description:
          'A forgery kit can be used in conjunction with the Arcana skill to determine if a magic item is real or fake.',
      },
      {
        skill: Skill.HISTORY,
        description:
          'A forgery kit combined with your knowledge of history improves your ability to create fake historical documents or to tell if an old document is authentic.',
      },
    ],
  },
  {
    id: 10,
    name: 'Gaming Kit',

    componentsDescription:
      'A gaming set has all the pieces needed to play a specific game or type of game, such as a complete deck of cards or a board and tokens.',

    components: ['All pieces needed to play a specific game or type of game'],

    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'Your mastery of a game includes knowledge of its history, as well as of important events it was connected to or prominent historical figures involved with it.',
      },
      {
        skill: Skill.INSIGHT,
        description:
          'Playing games with someone is a good way to gain understanding of their personality, granting you a better ability to discern their lies from their truths and read their mood.',
      },
      {
        skill: Skill.SLEIGHT_OF_HAND,
        description:
          'Sleight of Hand is a useful skill for cheating at a game, as it allows you to swap pieces, palm cards, or alter a die roll. Alternatively, engrossing a target in a game by manipulating the components with dexterous movements is a great distraction for a pickpocketing attempt.',
      },
    ],
  },
  {
    id: 11,
    name: "Glassblower's Tools",

    componentsDescription:
      'The tools include a blowpipe, a small marver, blocks, and tweezers. You need a source of heat to work glass.',
    components: [
      'Blowpipe',
      'Small Marver',
      'Blocks',
      'Tweezers',
      'Source of Heat',
    ],

    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your knowledge of glassmaking techniques a ids you when you examine glass objects, such as potion bottles or glass items found in a treasure hoard. For instance, you can study how a glass potion bottle has been changed by its contents to help determine a potion's effects. (A potion might leave behind a residue, deform the glass, or stain it.)",
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          'When you study an area, your knowledge can aid you if the clues include broken glass or glass objects.',
      },
      {
        skill: Skill.ARCANA,
        description:
          "Your knowledge of glassmaking techniques a ids you when you examine glass objects, such as potion bottles or glass items found in a treasure hoard. For instance, you can study how a glass potion bottle has been changed by its contents to help determine a potion's effects. (A potion might leave behind a residue, deform the glass, or stain it.)",
      },
    ],
  },
  {
    id: 12,
    name: 'Herbalism Kit',

    componentsDescription:
      'An herbalism kit includes pouches to store herbs, clippers and leather gloves for collecting plants, a mortar and pestle, and several glass jars.',
    components: [
      'Pouches',
      'Clippers',
      'Leather Gloves',
      'Mortar and Pestle',
      'Glass Jars',
    ],
    skills: [
      {
        skill: Skill.INVESTIGATION,
        description:
          'When you inspect an area overgrown with plants, your proficiency can help you pick out details and clues that others might miss.',
      },
      {
        skill: Skill.MEDICINE,
        description:
          'Your mastery of herbalism improves your ability to treat illnesses and wounds by augmenting your methods of care with medicinal plants.',
      },
      {
        skill: Skill.SURVIVAL,
        description:
          'When you travel in the wild, your skill in herbalism makes it easier to identify plants and spot sources of food that others might overlook.',
      },
      {
        skill: Skill.NATURE,
        description:
          'When you travel in the wild, your skill in herbalism makes it easier to identify plants and spot sources of food that others might overlook.',
      },
      {
        skill: Skill.ARCANA,
        description:
          'Your knowledge of the nature and uses of herbs can add insight to your magical studies that deal with plants and your attempts to identify potions.',
      },
    ],
  },
  {
    id: 13,
    name: "Jeweler's Tools",

    componentsDescription:
      "Jeweler's tools consist of a small saw and hammer, files, pliers, and tweezers.",
    components: ['Small Saw', 'Hammer', 'Files', 'Pliers', 'Tweezers'],
    skills: [
      {
        skill: Skill.INVESTIGATION,
        description:
          "When you inspect jeweled objects, your proficiency with jeweler's tools aids you in picking out clues they might hold.",
      },
      {
        skill: Skill.ARCANA,
        description:
          "Proficiency with jeweler's tools grants you knowledge about the reputed mystical uses of gems. This insight proves handy when you make Arcana checks related to gems or gem-encrusted items.",
      },
    ],
  },
  {
    id: 14,
    name: 'Land Vehicles',

    skills: [
      {
        skill: Skill.ARCANA,
        description:
          'When you study a magic vehicle, this tool proficiency aids you in uncovering lore or determining how the vehicle operates.',
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          'When you inspect a vehicle for clues or hidden information, your proficiency aids you in noticing things that others might miss.',
      },
      {
        skill: Skill.PERCEPTION,
        description:
          'When you inspect a vehicle for clues or hidden information, your proficiency aids you in noticing things that others might miss.',
      },
      {
        skill: Skill.SURVIVAL,
        description:
          'Your knowledge of vehicles aids you in identifying the origin and use of vehicles you encounter.',
      },
    ],
  },
  {
    id: 15,
    name: "Leatherworker's Tools",

    componentsDescription:
      "Leatherworker's tools include a knife, a small mallet, an edger, a hole punch, thread, and leather scraps.",
    components: [
      'Knife',
      'Small Mallet',
      'Edger',
      'Hole Punch',
      'Thread',
      'Leather Scraps',
    ],

    skills: [
      {
        skill: Skill.ARCANA,
        description:
          'Your expertise in working with leather grants you added insight when you inspect magic items crafted from leather, such as boots and some cloaks.',
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          'You gain added insight when studying leather items or clues related to them, as you draw on your knowledge of leather to pick out details that others would overlook.',
      },
    ],
  },
  {
    id: 16,
    name: "Mason's Tools",

    componentsDescription:
      "Mason's tools consist of a trowel, a hammer, a chisel, brushes, and a square.",
    components: ['Trowel', 'Hammer', 'Chisel', 'Brushes', 'Square'],

    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your expertise aids you in identifying a stone building's date of construction and purpose, along with insight into who might have built it.",
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          'You gain additional insight when inspecting areas within stone structures.',
      },
      {
        skill: Skill.PERCEPTION,
        description:
          'You can spot irregularities in stone walls or floors, making it easier to find trap doors and secret passages.',
      },
    ],
  },
  {
    id: 17,
    name: 'Musical Instrument',

    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'Your expertise aids you in recalling lore related to your instrument.',
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          'Your ability to put on a good show is improved when you incorporate an instrument into your act.',
      },
    ],
  },
  {
    id: 18,
    name: "Navigator's Tools",

    componentsDescription:
      "Navigator's tools include a sextant, a compass, calipers, a ruler, parchment, ink, and a quill.",
    components: [
      'Sextant',
      'Compass',
      'Calipers',
      'Ruler',
      'Parchment',
      'Ink',
      'Quill',
    ],
    skills: [
      {
        skill: Skill.SURVIVAL,
        description:
          "Knowledge of navigator's tools helps you avoid becoming lost and also grants you insight into the most likely location for roads and settlements.",
      },
    ],
  },
  {
    id: 19,
    name: "Painter's Supplies",

    componentsDescription:
      "Painter's supplies include an easel, canvas, paints, brushes, charcoal sticks, and a palette.",
    components: ['Easel', 'Canvas', 'Paints', 'Brushes', 'Charcoal Sticks'],
    skills: [
      {
        skill: Skill.ARCANA,
        description:
          'Your expertise aids you in uncovering lore of any sort that is attached to a work of art, such as the magical properties of a painting or the origins of a strange mural found in a dungeon.',
      },
      {
        skill: Skill.HISTORY,
        description:
          'Your expertise aids you in uncovering lore of any sort that is attached to a work of art, such as the magical properties of a painting or the origins of a strange mural found in a dungeon.',
      },
      {
        skill: Skill.RELIGION,
        description:
          'Your expertise aids you in uncovering lore of any sort that is attached to a work of art, such as the magical properties of a painting or the origins of a strange mural found in a dungeon.',
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          'When you inspect a painting or a similar work of visual art, your knowledge of the practices behind creating it can grant you additional insight.',
      },
      {
        skill: Skill.PERCEPTION,
        description:
          'When you inspect a painting or a similar work of visual art, your knowledge of the practices behind creating it can grant you additional insight.',
      },
    ],
  },
  {
    id: 20,
    name: "Poisoner's Kit",

    componentsDescription:
      "A poisoner's kit includes glass vials, a mortar and pestle, chemicals, and a glass stirring rod.",
    components: [
      'Glass Vials',
      'Mortar and Pestle',
      'Chemicals',
      'Glass Stirring Rod',
    ],
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'Your training with poisons can help you when you try to recall facts about infamous poisonings.',
      },
      {
        skill: Skill.PERCEPTION,
        description:
          'Your knowledge of poisons has taught you to handle those substances carefully, giving you an edge when you inspect poisoned objects or try to extract clues from events that involve poison.',
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          'Your knowledge of poisons has taught you to handle those substances carefully, giving you an edge when you inspect poisoned objects or try to extract clues from events that involve poison.',
      },
      {
        skill: Skill.MEDICINE,
        description:
          'When you treat the victim of a poison, your knowledge grants you added insight into how to provide the best care to your patient.',
      },
      {
        skill: Skill.NATURE,
        description:
          'Working with poisons enables you to acquire lore about which plants and animals are poisonous.',
      },
      {
        skill: Skill.SURVIVAL,
        description:
          'Working with poisons enables you to acquire lore about which plants and animals are poisonous.',
      },
    ],
  },
  {
    id: 21,
    name: "Potter's Tools",

    componentsDescription:
      " Potter's tools include potter's needles, ribs, scrapers, a knife, and calipers.",
    components: ["Potter's Needles", 'Ribs', 'Scrapers', 'Knife', 'Calipers'],
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'Your expertise aids you in identifying ceramic objects, including when they were created and their likely place or culture of origin.',
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          'You gain additional insight when inspecting ceramics, uncovering clues others would overlook by spotting minor irregularities.',
      },
      {
        skill: Skill.PERCEPTION,
        description:
          'You gain additional insight when inspecting ceramics, uncovering clues others would overlook by spotting minor irregularities.',
      },
    ],
  },
  {
    id: 22,
    name: "Smith's Tools",

    componentsDescription:
      "Smith's tools include hammers, tongs, charcoal, rags, and a whetstone.",
    components: ['Hammers', 'Tongs', 'Charcoal', 'Rags', 'Whetstone'],
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'Your expertise lends you additional insight when examining metal objects, such as weapons.',
      },
      {
        skill: Skill.ARCANA,
        description:
          'Your expertise lends you additional insight when examining metal objects, such as weapons.',
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          'You can spot clues and make deductions that others might overlook when an investigation involves armor, weapons, or other metalwork.',
      },
    ],
  },
  {
    id: 23,
    name: "Thieves' Tools",

    componentsDescription:
      "Thieves' tools include a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers.",
    components: [
      'Small File',
      'Set of Lock Picks',
      'Small Mirror Mounted on a Metal Handle',
      'Set of Narrow-Bladed Scissors',
      'Pair of Pliers',
    ],
    skills: [
      {
        skill: Skill.INVESTIGATION,
        description:
          'You gain additional insight when looking for traps, because you have learned a variety of common signs that betray their presence.',
      },
      {
        skill: Skill.PERCEPTION,
        description:
          'You gain additional insight when looking for traps, because you have learned a variety of common signs that betray their presence.',
      },
      {
        skill: Skill.HISTORY,
        description:
          'You gain additional insight when looking for traps, because you have learned a variety of common signs that betray their presence.',
      },
    ],
  },
  {
    id: 24,
    name: "Tinker's Tools",

    componentsDescription:
      "Tinker's tools include a variety of hand tools, thread, needles, a whetstone, scraps of cloth and leather, and a small pot of glue.",
    components: [
      'Hand Tools',
      'Thread',
      'Needles',
      'Whetstone',
      'Scraps of Cloth and Leather',
      'Small Pot of Glue',
    ],

    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'You can determine the age and origin of objects, even if you have only a few pieces remaining from the original.',
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          'When you inspect a damaged object, you gain knowledge of how it was damaged and how long ago.',
      },
    ],
  },
  {
    id: 25,
    name: "Weaver's Tools",

    componentsDescription:
      "Weaver's tools include thread, needles, and scraps of cloth. You know how to work a loom, but such equipment is too large to transport.",
    components: ['Thread', 'Needles', 'Scraps of Cloth'],
    skills: [
      {
        skill: Skill.ARCANA,
        description:
          'Your expertise lends you additional insight when examining cloth objects, including cloaks and robes.',
      },
      {
        skill: Skill.HISTORY,
        description:
          'our expertise lends you additional insight when examining cloth objects, including cloaks and robes.',
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          'Using your knowledge of the process of creating cloth objects, you can spot clues and make deductions that others would overlook when you examine tapestries, upholstery, clothing, and other woven items.',
      },
    ],
  },
  {
    id: 26,
    name: "Woodcarver's Tools",

    componentsDescription:
      "Woodcarver's tools consist of a knife, a gouge, and a small saw.",
    components: ['Knife', 'Gouge', 'Small Saw'],
    skills: [
      {
        skill: Skill.ARCANA,
        description:
          ' Your expertise lends you additional insight when you examine wooden objects, such as figurines or arrows.',
      },
      {
        skill: Skill.HISTORY,
        description:
          ' Your expertise lends you additional insight when you examine wooden objects, such as figurines or arrows.',
      },
      {
        skill: Skill.NATURE,
        description:
          'Your knowledge of wooden objects gives you some added insight when you examine trees.',
      },
    ],
  },
  //gaming sets
  {
    id: 27,
    name: 'Dice Set',

    componentsDescription: 'A collection of dice',

    components: ['Dice'],
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'Your mastery of a game includes knowledge of its history, as well as of important events it was connected to or prominent historical figures involved with it.',
      },
      {
        skill: Skill.INSIGHT,
        description:
          'Playing games with someone is a good way to gain understanding of their personality, granting you a better ability to discern their lies from their truths and read their mood.',
      },
      {
        skill: Skill.SLEIGHT_OF_HAND,
        description:
          'Sleight of Hand is a useful skill for cheating at a game, as it allows you to swap pieces, palm cards, or alter a die roll. Alternatively, engrossing a target in a game by manipulating the components with dexterous movements is a great distraction for a pickpocketing attempt.',
      },
    ],
  },
  {
    id: 28,
    name: 'Dragonchess Set',

    componentsDescription: 'A dragonchess set includes a board and pieces.',

    components: ['Board', 'Pieces'],
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'Your mastery of a game includes knowledge of its history, as well as of important events it was connected to or prominent historical figures involved with it.',
      },
      {
        skill: Skill.INSIGHT,
        description:
          'Playing games with someone is a good way to gain understanding of their personality, granting you a better ability to discern their lies from their truths and read their mood.',
      },
      {
        skill: Skill.SLEIGHT_OF_HAND,
        description:
          'Sleight of Hand is a useful skill for cheating at a game, as it allows you to swap pieces, palm cards, or alter a die roll. Alternatively, engrossing a target in a game by manipulating the components with dexterous movements is a great distraction for a pickpocketing attempt.',
      },
    ],
  },
  {
    id: 29,
    name: 'Playing Card Set',

    componentsDescription: 'A collection of cards',

    components: ['Cards'],

    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'Your mastery of a game includes knowledge of its history, as well as of important events it was connected to or prominent historical figures involved with it.',
      },
      {
        skill: Skill.INSIGHT,
        description:
          'Playing games with someone is a good way to gain understanding of their personality, granting you a better ability to discern their lies from their truths and read their mood.',
      },
      {
        skill: Skill.SLEIGHT_OF_HAND,
        description:
          'Sleight of Hand is a useful skill for cheating at a game, as it allows you to swap pieces, palm cards, or alter a die roll. Alternatively, engrossing a target in a game by manipulating the components with dexterous movements is a great distraction for a pickpocketing attempt.',
      },
    ],
  },
  {
    id: 30,
    name: 'Three-Dragon Ante Set',

    componentsDescription: 'A Three-Dragon Ante set includes a deck of cards.',

    components: ['Deck of Cards'],
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'Your mastery of a game includes knowledge of its history, as well as of important events it was connected to or prominent historical figures involved with it.',
      },
      {
        skill: Skill.INSIGHT,
        description:
          'Playing games with someone is a good way to gain understanding of their personality, granting you a better ability to discern their lies from their truths and read their mood.',
      },
      {
        skill: Skill.SLEIGHT_OF_HAND,
        description:
          'Sleight of Hand is a useful skill for cheating at a game, as it allows you to swap pieces, palm cards, or alter a die roll. Alternatively, engrossing a target in a game by manipulating the components with dexterous movements is a great distraction for a pickpocketing attempt.',
      },
    ],
  },
  //instruments
  {
    id: 31,
    name: 'Bagpipes',

    components: ['Bagpipes'],
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'Your expertise aids you in recalling lore related to your instrument.',
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          'Your ability to put on a good show is improved when you incorporate an instrument into your act.',
      },
    ],
  },
  {
    id: 32,
    name: 'Drum',

    components: ['Drum'],
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'Your expertise aids you in recalling lore related to your instrument.',
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          'Your ability to put on a good show is improved when you incorporate an instrument into your act.',
      },
    ],
  },
  {
    id: 33,
    name: 'Dulcimer',
    components: ['Dulcimer'],
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'Your expertise aids you in recalling lore related to your instrument.',
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          'Your ability to put on a good show is improved when you incorporate an instrument into your act.',
      },
    ],
  },
  {
    id: 34,
    name: 'Flute',

    components: ['Flute'],
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'Your expertise aids you in recalling lore related to your instrument.',
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          'Your ability to put on a good show is improved when you incorporate an instrument into your act.',
      },
    ],
  },
  {
    id: 35,
    name: 'Lute',

    components: ['Lute'],
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'Your expertise aids you in recalling lore related to your instrument.',
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          'Your ability to put on a good show is improved when you incorporate an instrument into your act.',
      },
    ],
  },
  {
    id: 36,
    name: 'Lyre',

    components: ['Lyre'],
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'Your expertise aids you in recalling lore related to your instrument.',
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          'Your ability to put on a good show is improved when you incorporate an instrument into your act.',
      },
    ],
  },
  {
    id: 37,
    name: 'Horn',

    components: ['Horn'],
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'Your expertise aids you in recalling lore related to your instrument.',
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          'Your ability to put on a good show is improved when you incorporate an instrument into your act.',
      },
    ],
  },
  {
    id: 38,
    name: 'Pan Flute',

    components: ['Pan Flute'],
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'Your expertise aids you in recalling lore related to your instrument.',
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          'Your ability to put on a good show is improved when you incorporate an instrument into your act.',
      },
    ],
  },
  {
    id: 39,
    name: 'Shawm',

    components: ['Shawm'],
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'Your expertise aids you in recalling lore related to your instrument.',
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          'Your ability to put on a good show is improved when you incorporate an instrument into your act.',
      },
    ],
  },
  {
    id: 40,
    name: 'Viol',

    components: ['Viol'],
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          'Your expertise aids you in recalling lore related to your instrument.',
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          'Your ability to put on a good show is improved when you incorporate an instrument into your act.',
      },
    ],
  },
  {
    id: 41,
    name: 'Water Vehicles',

    skills: [
      {
        skill: Skill.ARCANA,
        description:
          'When you study a magic vehicle, this tool proficiency aids you in uncovering lore or determining how the vehicle operates.',
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          'When you inspect a vehicle for clues or hidden information, your proficiency aids you in noticing things that others might miss.',
      },
      {
        skill: Skill.PERCEPTION,
        description:
          'When you inspect a vehicle for clues or hidden information, your proficiency aids you in noticing things that others might miss.',
      },
      {
        skill: Skill.SURVIVAL,
        description:
          'Your knowledge of vehicles aids you in identifying the origin and use of vehicles you encounter.',
      },
    ],
  },
];

const toolIds = {
  alchemistSupplies: 1,
  brewerSupplies: 2,
  calligrapherSupplies: 3,
  carpenterTools: 4,
  cartographerTools: 5,
  cobblerTools: 6,
  cookUtensils: 7,
  disguiseKit: 8,
  forgeryKit: 9,
  gamingKit: 10,
  glassblowerTools: 11,
  herbalismKit: 12,
  jewelerTools: 13,
  landVehicles: 14,
  leatherworkerTools: 15,
  masonTools: 16,
  musicalInstrument: 17,
  navigatorsTools: 18,
  paintersSupplies: 19,
  poisonersKit: 20,
  pottersTools: 21,
  smithTools: 22,
  thievesTools: 23,
  tinkersTools: 24,
  weaversTools: 25,
  woodcarversTools: 26,
  diceSet: 27,
  dragonchessSet: 28,
  playingCardSet: 29,
  threeDragonAnteSet: 30,
  bagpipes: 31,
  drum: 32,
  dulcimer: 33,
  flute: 34,
  lute: 35,
  lyre: 36,
  horn: 37,
  panFlute: 38,
  shawm: 39,
  viol: 40,
  waterVehicle: 41,
};

const instrumentIds = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
const artisanIds = [
  1, 2, 3, 4, 5, 6, 7, 11, 13, 15, 16, 19, 21, 22, 24, 25, 26,
];
const gamingKitIds = [27, 28, 29, 30];

export { ToolSeed, toolIds, instrumentIds, artisanIds, gamingKitIds };
