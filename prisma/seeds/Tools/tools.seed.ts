import { Prisma, Skill } from "@prisma/client";

const ToolSeed: Prisma.ToolCreateManyInput[] = [
  {
    name: "Alchemist's Supplies",
    description:
      "Alchemist's supplies allow you to produce useful concoctions, such as acid or alchemist's fire.",
    weight: { quantity: 8, unit: "lbs" },
    flavorText:
      "Alchemist's supplies allow you to produce useful concoctions, such as acid or alchemist's fire.",
    cost: { quantity: 50, unit: "gp" },
    components: [
      "Two glass beakers",
      "A metal frame to hold a beaker in place over an open flame",
      "A glass stirring rod",
      "A small mortar and pestle",
      "A pouch of common alchemical ingredients, including salt, powdered iron, and purified water.",
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
    features: [
      {
        name: "Alchemical Crafting",
        description:
          "You can use this tool proficiency to create alchemical items. A character can spend money to collect raw materials, which weigh 1 pound for every 50 gp spent. The DM can allow a character to make a check using the indicated skill with advantage. As part of a long rest, you can use alchemist's supplies to make one dose of acid, alchemist's fire, antitoxin, oil, perfume, or soap. Subtract half the value of the created item from the total gp worth of raw materials you are carrying.",
      },
    ],
  },
  {
    name: "Brewer's Supplies",
    description:
      "Brewing is the art of producing beer. Not only does beer serve as an alcoholic beverage, but the process of brewing purifies water. Crafting beer takes weeks of fermentation, but only a few hours of work.",
    weight: { quantity: 9, unit: "lbs" },
    flavorText:
      "Brewer's supplies allow you to create a variety of alcoholic beverages.",
    cost: { quantity: 20, unit: "gp" },
    components: [
      "A large glass jug",
      "A quantity of hops",
      "A siphon",
      "Several feet of tubing",
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
          "This tool proficiency grants additional insight when you treat anyone suffering from alcohol poisoning or when you can use alcohol to dull pain.",
      },
      {
        skill: Skill.PERSUASION,
        description:
          "A stiff drink can help soften the hardest heart. Your proficiency with brewer's supplies can help you ply someone with drink, giving them just enough alcohol to mellow their mood.",
      },
    ],
    features: [
      {
        name: "Brewing",
        description:
          "Your knowledge of brewing enables you to purify water that would otherwise be undrinkable. As part of a long rest, you can purify up to 6 gallons of water, or 1 gallon as part of a short rest.",
      },
    ],
  },
  {
    name: "Calligrapher's Supplies",
    description:
      "Calligraphy treats writing as a delicate, beautiful art. Calligraphers produce text that is pleasing to the eye, using a style that is difficult to forge. Their supplies also give them some ability to examine scripts and determine if they are legitimate, since a calligrapher's training involves long hours of studying writing and attempting to replicate its style and design.",
    weight: { quantity: 5, unit: "lbs" },
    components: [
      "A set of inks",
      "A dozen sheets of parchment",
      "Three quills",
    ],
    componentsDescription:
      "Calligrapher's supplies include a set of inks, a dozen sheets of parchment, and three quills.",
    flavorText:
      "Calligrapher's supplies allow you to create beautiful, ornate writing.",
    cost: { quantity: 10, unit: "gp" },
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "This tool proficiency can augment the benefit of successful checks made to analyze or investigate ancient writings, scrolls, or other texts, including runes etched in stone or messages in frescoes or other displays.",
      },
      {
        skill: Skill.ARCANA,
        description:
          "Although calligraphy is of little help in deciphering the content of magical writings, proficiency with these supplies can aid in identifying who wrote a script of a magical nature.",
      },
    ],
    features: [
      {
        name: "Decipher Treasure Map",
        description:
          "This tool proficiency grants you expertise in examining maps. You can make an Intelligence check to determine a map's age, whether a map includes any hidden messages, or similar facts.",
      },
    ],
  },
  {
    name: "Carpenter's Tools",
    description:
      "Carpenter's tools allow you to craft wooden items, including furniture and weapons. They also allow you to repair wooden structures.",
    weight: { quantity: 6, unit: "lbs" },
    components: [
      "A Saw",
      "A Hammer",
      "A Square",
      "A Chisel",
      "A Plane",
      "A Ruler",
      "An adze",
    ],
    componentsDescription:
      "Carpenter's tools include a saw, a hammer, a square, a chisel, a plane, a ruler, and an adze.",
    flavorText:
      "Carpenter's tools allow you to craft wooden items, including furniture and weapons.",
    cost: { quantity: 8, unit: "gp" },
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "This tool proficiency aids you in identifying the use and the origin of wooden buildings and other large wooden objects.",
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          "You gain additional insight when inspecting areas within wooden structures, because you know tricks of construction that can conceal areas from discovery.",
      },
      {
        skill: Skill.PERCEPTION,
        description:
          "You can spot irregularities in wooden walls or floors, making it easier to find trap doors and secret passages.",
      },
      {
        skill: Skill.STEALTH,
        description:
          "You can quickly assess the weak spots in a wooden floor, making it easier to avoid the places that creak and groan when they're stepped on.",
      },
    ],
    features: [
      {
        name: "Fortify",
        description:
          "With 1 minute of work and raw materials, you can make a door or window harder to force open. Increase the DC needed to open it by 5.",
      },
      {
        name: "Temporary Shelter",
        description:
          "As part of a long rest, you can construct a lean-to or a similar shelter to keep your group dry and in the shade for the duration of the rest. Because it was fashioned quickly from whatever wood was available, the shelter collapses 1d3 days after being assembled.",
      },
    ],
  },
  {
    name: "Cartographer's Tools",
    description:
      "Using cartographer's tools, you can create accurate maps to make travel easier for yourself and those who come after you. These maps can range from large-scale depictions of mountain ranges to diagrams that show the layout of a dungeon level.",
    weight: { quantity: 6, unit: "lbs" },
    components: [
      "A Quill",
      "Ink",
      "Some parchment",
      "A pair of compasses",
      "Calipers",
      "A ruler",
    ],
    componentsDescription:
      "Cartographer's tools include a compass, a ruler, a protractor, and a set of calligrapher's supplies.",
    flavorText:
      "Cartographer's tools allow you to create accurate maps to make travel easier for yourself and those who come after you.",
    cost: { quantity: 15, unit: "gp" },
    skills: [
      {
        skill: Skill.NATURE,
        description:
          "Your familiarity with physical geography makes it easier for you to answer questions or solve issues relating to the terrain around you.",
      },
      {
        skill: Skill.SURVIVAL,
        description:
          "Your understanding of geography makes it easier to find paths to civilization, to predict areas where villages or towns might be found, and to avoid becoming lost. You have studied so many maps that common patterns, such as how trade routes evolve and where settlements a rise in relation to geographic locations, are familiar to you.",
      },
      {
        skill: Skill.ARCANA,
        description:
          "You can use your knowledge of maps and locations to unearth more detailed information when you use these skills. For instance, you might spot hidden messages in a map, identify when the map was made to determine if geographical features have changed since then, and so forth.",
      },
      {
        skill: Skill.HISTORY,
        description:
          "You can use your knowledge of maps and locations to unearth more detailed information when you use these skills. For instance, you might spot hidden messages in a map, identify when the map was made to determine if geographical features have changed since then, and so forth.",
      },
      {
        skill: Skill.ARCANA,
        description:
          "You can use your knowledge of maps and locations to unearth more detailed information when you use these skills. For instance, you might spot hidden messages in a map, identify when the map was made to determine if geographical features have changed since then, and so forth.",
      },
    ],
    features: [
      {
        name: "Craft a Map",
        description:
          "While traveling, you can draw a map as you go in addition to engaging in other activity.",
      },
    ],
  },
  {
    name: "Cobbler's Tools",
    description:
      "Although the cobbler's trade might seem too humble for an adventurer, a good pair of boots will see a character across rugged wilderness and through deadly dungeons.",
    weight: { quantity: 5, unit: "lbs" },
    cost: { quantity: 5, unit: "gp" },
    components: [
      "A Hammer",
      "An Awl",
      "A Knife",
      "A Shoe Stand",
      "A Cutter",
      "Spare Leather",
      "Thread",
    ],
    componentsDescription:
      "Cobbler's tools consist of a hammer, an awl, a knife, a shoe stand, a cutter, spare leather, and thread.",
    flavorText: "Cobbler's tools allow you to repair and create footwear.",
    skills: [
      {
        skill: Skill.ARCANA,
        description:
          "Your knowledge of shoes aids you in identifying the magical properties of enchanted boots or the history of such items.",
      },
      {
        skill: Skill.HISTORY,
        description:
          "Your knowledge of shoes aids you in identifying the magical properties of enchanted boots or the history of such items.",
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          "Footwear holds a surprising number of secrets. You can learn where someone has recently visited by examining the wear and the dirt that has accumulate",
      },
    ],
    features: [
      {
        name: "Maintain Shoes",
        description:
          "As part of a long rest, you can repair your companions' shoes. For the next 24 hours, up to six creatures of your choice who wear shoes you worked on can travel up to 10 hours a day without making saving throws to avoid exhaustion.",
      },
      {
        name: "Craft Hidden Compartment",
        description:
          "With 8 hours of work, you can add a hidden compartment to a pair of shoes. The compartment can hold an object up to 3 inches long and 1 inch wide and deep. You make an Intelligence check using your tool proficiency to determine the Intelligence (Investigation) check DC needed to find the compartment.",
      },
    ],
  },
  {
    name: "Cook's Utensils",
    description:
      "Adventuring is a hard life. With a cook along on the journey, your meals will be much better than the typical mix of hardtack and dried fruit.",
    weight: { quantity: 8, unit: "lbs" },
    cost: { quantity: 1, unit: "gp" },
    componentsDescription:
      "Cook's utensils include a metal pot, knives, forks, a stirring spoon, and a ladle.",
    components: [
      "A Metal Pot",
      "Knives",
      "Forks",
      "A Stirring Spoon",
      "A Ladle",
    ],
    flavorText: "Cook's utensils allow you to prepare and cook food.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your knowledge of cooking techniques allows you to assess the social patterns involved in a culture's eating habits.",
      },
      {
        skill: Skill.MEDICINE,
        description:
          "When administering treatment, you can transform medicine that is bitter or sour into a pleasing concoction.",
      },
      {
        skill: Skill.SURVIVAL,
        description:
          "When foraging for food, you can make do with ingredients you scavenge that others would be unable to transform into nourishing meals.",
      },
    ],
    features: [
      {
        name: "Prepare a Meal",
        description:
          "As part of a short rest, you can prepare a tasty meal that helps your companions regain their strength. You and up to five creatures of your choice regain 1 extra hit point per Hit Die spent during a short rest, provided you have access to your cook's utensils and sufficient food.",
      },
    ],
  },
  {
    name: "Disguise Kit",
    description:
      "The perfect tool for anyone who wants to engage in trickery, a disguise kit enables its owner to adopt a false identity.",
    weight: { quantity: 3, unit: "lbs" },
    cost: { quantity: 25, unit: "gp" },
    componentsDescription:
      "A disguise kit includes cosmetics, hair dye, small props, and a few pieces of clothing.",
    components: [
      "Cosmetics",
      "Hair Dye",
      "Small Props",
      "A Few Pieces of Clothing",
    ],
    flavorText: "A disguise kit allows you to create a new identity.",
    skills: [
      {
        skill: Skill.DECEPTION,
        description:
          "In certain cases, a disguise can improve your ability to weave convincing lies.",
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          "A cunning disguise can enhance an audience's enjoyment of a performance, provided the disguise is properly designed to evoke the desired reaction.",
      },
      {
        skill: Skill.INTIMIDATION,
        description:
          "The right disguise can make you look more fearsome, whether you want to scare someone away by posing as a plague victim or intimidate a gang of thugs by taking the appearance of a bully.",
      },
      {
        skill: Skill.PERSUASION,
        description:
          "Folk tend to trust a person in uniform. If you disguise yourself as an authority figure, your efforts to persuade others are often more effective.",
      },
    ],
    features: [
      {
        name: "Create a Disguise",
        description:
          "As part of a long rest, you can create a disguise. It takes you 1 minute to don such a disguise once you have created it. You can carry only one such disguise on you at a time without drawing undue attention, unless you have a Bag of Holding or a similar method to keep them hidden. Each disguise weighs 1 pound.\n\nAt other times, it takes 10 minutes to craft a disguise that involves moderate changes to your appearance, and 30 minutes for one that requires more extensive changes.",
      },
    ],
  },
  {
    name: "Forgery Kit",
    description:
      "A forgery kit is designed to duplicate documents and to make it easier to copy a person's seal or signature.",
    weight: { quantity: 5, unit: "lbs" },
    cost: { quantity: 15, unit: "gp" },
    componentsDescription:
      "A forgery kit includes a variety of parchments, inks, pens, and seals.",
    components: ["Parchments", "Inks", "Pens", "Seals"],
    flavorText: "A forgery kit allows you to create false documents.",
    skills: [
      {
        skill: Skill.DECEPTION,
        description:
          "A well-crafted forgery, such as papers proclaiming you to be a noble or a writ that grants you safe passage, can lend credence to a lie.",
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          "When you examine objects, proficiency with a forgery kit is useful for determining how an object was made and whether it is genuine.",
      },
      {
        skill: Skill.ARCANA,
        description:
          "A forgery kit can be used in conjunction with the Arcana skill to determine if a magic item is real or fake.",
      },
      {
        skill: Skill.HISTORY,
        description:
          "A forgery kit combined with your knowledge of history improves your ability to create fake historical documents or to tell if an old document is authentic.",
      },
    ],
    features: [
      {
        name: "Quick Fake",
        description:
          "As part of a short rest, you can produce a forged document no more than one page in length. As part of a long rest, you can produce a document that is up to four pages long. Your Intelligence check using a forgery kit determines the DC for someone else's Intelligence (Investigation) check to spot the fake.",
      },
      {
        name: "Other Tools",
        description:
          "Knowledge of other tools makes your forgeries that much more believable. For example, you could combine proficiency with a forgery kit and proficiency with cartographer's tools to make a fake map.",
      },
    ],
  },
  {
    name: "Gaming Kit",
    description:
      "A gaming set represents a collection of game pieces and the rules for playing a game of skill or chance.",
    componentsDescription:
      "A gaming set has all the pieces needed to play a specific game or type of game, such as a complete deck of cards or a board and tokens.",
    weight: { quantity: 5, unit: "lbs" },
    cost: { quantity: 5, unit: "gp" },
    components: ["All pieces needed to play a specific game or type of game"],
    flavorText: "A gaming set allows you to play a specific game.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your mastery of a game includes knowledge of its history, as well as of important events it was connected to or prominent historical figures involved with it.",
      },
      {
        skill: Skill.INSIGHT,
        description:
          "Playing games with someone is a good way to gain understanding of their personality, granting you a better ability to discern their lies from their truths and read their mood.",
      },
      {
        skill: Skill.SLEIGHT_OF_HAND,
        description:
          "Sleight of Hand is a useful skill for cheating at a game, as it allows you to swap pieces, palm cards, or alter a die roll. Alternatively, engrossing a target in a game by manipulating the components with dexterous movements is a great distraction for a pickpocketing attempt.",
      },
    ],
  },
  {
    name: "Glassblower's Tools",
    description:
      "Someone who is proficient with glassblower's tools has not only the ability to shape glass, but also specialized knowledge of the methods used to produce glass objects.",
    weight: { quantity: 5, unit: "lbs" },
    cost: { quantity: 30, unit: "gp" },
    componentsDescription:
      "The tools include a blowpipe, a small marver, blocks, and tweezers. You need a source of heat to work glass.",
    components: [
      "Blowpipe",
      "Small Marver",
      "Blocks",
      "Tweezers",
      "Source of Heat",
    ],
    flavorText: "Glassblower's tools allow you to shape glass.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your knowledge of glassmaking techniques a ids you when you examine glass objects, such as potion bottles or glass items found in a treasure hoard. For instance, you can study how a glass potion bottle has been changed by its contents to help determine a potion's effects. (A potion might leave behind a residue, deform the glass, or stain it.)",
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          "When you study an area, your knowledge can aid you if the clues include broken glass or glass objects.",
      },
      {
        skill: Skill.ARCANA,
        description:
          "Your knowledge of glassmaking techniques a ids you when you examine glass objects, such as potion bottles or glass items found in a treasure hoard. For instance, you can study how a glass potion bottle has been changed by its contents to help determine a potion's effects. (A potion might leave behind a residue, deform the glass, or stain it.)",
      },
    ],
    features: [
      {
        name: "Identify Weakness",
        description:
          "With 1 minute of study, you can identify the weak points in a glass object. Any damage dealt to the object by striking a weak spot is doubled.",
      },
    ],
  },
  {
    name: "Herbalism Kit",
    description:
      "Proficiency with an herbalism kit allows you to identify plants and safely collect their useful elements.",
    weight: { quantity: 3, unit: "lbs" },
    cost: { quantity: 5, unit: "gp" },
    componentsDescription:
      "An herbalism kit includes pouches to store herbs, clippers and leather gloves for collecting plants, a mortar and pestle, and several glass jars.",
    components: [
      "Pouches",
      "Clippers",
      "Leather Gloves",
      "Mortar and Pestle",
      "Glass Jars",
    ],
    flavorText: "An herbalism kit allows you to create potions and salves.",
    skills: [
      {
        skill: Skill.INVESTIGATION,
        description:
          "When you inspect an area overgrown with plants, your proficiency can help you pick out details and clues that others might miss.",
      },
      {
        skill: Skill.MEDICINE,
        description:
          "Your mastery of herbalism improves your ability to treat illnesses and wounds by augmenting your methods of care with medicinal plants.",
      },
      {
        skill: Skill.SURVIVAL,
        description:
          "When you travel in the wild, your skill in herbalism makes it easier to identify plants and spot sources of food that others might overlook.",
      },
      {
        skill: Skill.NATURE,
        description:
          "When you travel in the wild, your skill in herbalism makes it easier to identify plants and spot sources of food that others might overlook.",
      },
      {
        skill: Skill.ARCANA,
        description:
          "Your knowledge of the nature and uses of herbs can add insight to your magical studies that deal with plants and your attempts to identify potions.",
      },
    ],
    features: [
      {
        name: "Identify Plants",
        description:
          "You can identify most plants with a quick inspection of their appearance and smell.",
      },
    ],
  },
  {
    name: "Jeweler's Tools",
    description:
      "Training with jeweler's tools includes the basic techniques needed to beautify gems. It also gives you expertise in identifying precious stones.",
    weight: { quantity: 2, unit: "lbs" },
    cost: { quantity: 25, unit: "gp" },
    componentsDescription:
      "Jeweler's tools consist of a small saw and hammer, files, pliers, and tweezers.",
    components: ["Small Saw", "Hammer", "Files", "Pliers", "Tweezers"],
    flavorText: "Jeweler's tools allow you to create and repair jewelry.",
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
    features: [
      {
        name: "Identify Gem",
        description:
          "You can identify gems and determine their value at a glance.",
      },
    ],
  },
  {
    name: "Land and Water Vehicles",
    description:
      "Proficiency with land vehicles covers a wide range of options, from chariots and howdahs to wagons and carts. Proficiency with water vehicles covers anything that navigates waterways. Proficiency with vehicles grants the knowledge needed to handle vehicles of that type, along with knowledge of how to repair and maintain them.",
    weight: { quantity: 0, unit: "lbs" },
    cost: { quantity: 0, unit: "gp" },
    flavorText: "Land and water vehicles allow you to travel.",
    skills: [
      {
        skill: Skill.ARCANA,
        description:
          "When you study a magic vehicle, this tool proficiency aids you in uncovering lore or determining how the vehicle operates.",
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          "When you inspect a vehicle for clues or hidden information, your proficiency aids you in noticing things that others might miss.",
      },
      {
        skill: Skill.PERCEPTION,
        description:
          "When you inspect a vehicle for clues or hidden information, your proficiency aids you in noticing things that others might miss.",
      },
      {
        skill: Skill.SURVIVAL,
        description:
          "Your knowledge of vehicles aids you in identifying the origin and use of vehicles you encounter.",
      },
    ],
    features: [
      {
        name: "Vehicle Handling",
        description:
          "When piloting a vehicle, you can apply your proficiency bonus to the vehicle's AC and saving throws.",
      },
    ],
  },
  {
    name: "Leatherworker's Tools",
    description:
      "Knowledge of leatherworking extends to lore concerning animal hides and their properties. It also confers knowledge of leather armor and similar goods.",
    weight: { quantity: 5, unit: "lbs" },
    cost: { quantity: 5, unit: "gp" },
    componentsDescription:
      "Leatherworker's tools include a knife, a small mallet, an edger, a hole punch, thread, and leather scraps.",
    components: [
      "Knife",
      "Small Mallet",
      "Edger",
      "Hole Punch",
      "Thread",
      "Leather Scraps",
    ],
    flavorText:
      "Leatherworker's tools allow you to create and repair leather goods.",
    skills: [
      {
        skill: Skill.ARCANA,
        description:
          "Your expertise in working with leather grants you added insight when you inspect magic items crafted from leather, such as boots and some cloaks.",
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          "You gain added insight when studying leather items or clues related to them, as you draw on your knowledge of leather to pick out details that others would overlook.",
      },
    ],
    features: [
      {
        name: "Identify Hides",
        description:
          "When looking at a hide or a leather item, you can determine the source of the leather and any special techniques used to treat it. For example, you can spot the difference between leather crafted using dwarven methods and leather crafted using halfling methods.",
      },
    ],
  },
  {
    name: "Mason's Tools",
    description:
      "Mason's tools allow you to craft stone structures, including walls and buildings crafted from brick.",
    weight: { quantity: 8, unit: "lbs" },
    cost: { quantity: 10, unit: "gp" },
    componentsDescription:
      "Mason's tools consist of a trowel, a hammer, a chisel, brushes, and a square.",
    components: ["Trowel", "Hammer", "Chisel", "Brushes", "Square"],
    flavorText: "Mason's tools allow you to craft stone structures.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your expertise aids you in identifying a stone building's date of construction and purpose, along with insight into who might have built it.",
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          "You gain additional insight when inspecting areas within stone structures.",
      },
      {
        skill: Skill.PERCEPTION,
        description:
          "You can spot irregularities in stone walls or floors, making it easier to find trap doors and secret passages.",
      },
    ],
    features: [
      {
        name: "Demolition",
        description:
          "Your knowledge of masonry allows you to spot weak points in brick walls. You deal double damage to such structures with your weapon attacks.",
      },
    ],
  },
  {
    name: "Musical Instrument",
    description:
      "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument.",
    weight: { quantity: 0, unit: "lbs" },
    cost: { quantity: 0, unit: "gp" },
    flavorText: "Musical instruments allow you to create music.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your expertise aids you in recalling lore related to your instrument.",
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          "Your ability to put on a good show is improved when you incorporate an instrument into your act.",
      },
    ],
    features: [
      {
        name: "Compose a Tune",
        description:
          "As part of a long rest, you can compose a new tune and write down the notes. You can perform the tune at any time, and it can be used to inspire others.",
      },
    ],
  },
  {
    name: "Navigator's Tools",
    description:
      "Proficiency with navigator's tools helps you determine a true course based on observing the stars. It also grants you insight into charts and maps while developing your sense of direction.",
    weight: { quantity: 2, unit: "lbs" },
    cost: { quantity: 25, unit: "gp" },
    componentsDescription:
      "Navigator's tools include a sextant, a compass, calipers, a ruler, parchment, ink, and a quill.",
    components: [
      "Sextant",
      "Compass",
      "Calipers",
      "Ruler",
      "Parchment",
      "Ink",
      "Quill",
    ],
    flavorText: "Navigator's tools allow you to determine your location.",
    skills: [
      {
        skill: Skill.SURVIVAL,
        description:
          "Knowledge of navigator's tools helps you avoid becoming lost and also grants you insight into the most likely location for roads and settlements.",
      },
    ],
    features: [
      {
        name: "Sighting",
        description:
          "By taking careful measurements, you can determine your position on a nautical chart and the time of day.",
      },
    ],
  },
  {
    name: "Painter's Supplies",
    description:
      "Proficiency with painter's supplies represents your ability to paint and draw. You also acquire an understanding of art history, which can aid you in examining works of art.",
    weight: { quantity: 5, unit: "lbs" },
    cost: { quantity: 10, unit: "gp" },
    componentsDescription:
      "Painter's supplies include an easel, canvas, paints, brushes, charcoal sticks, and a palette.",
    components: ["Easel", "Canvas", "Paints", "Brushes", "Charcoal Sticks"],
    flavorText: "Painter's supplies allow you to create art.",
    skills: [
      {
        skill: Skill.ARCANA,
        description:
          "Your expertise aids you in uncovering lore of any sort that is attached to a work of art, such as the magical properties of a painting or the origins of a strange mural found in a dungeon.",
      },
      {
        skill: Skill.HISTORY,
        description:
          "Your expertise aids you in uncovering lore of any sort that is attached to a work of art, such as the magical properties of a painting or the origins of a strange mural found in a dungeon.",
      },
      {
        skill: Skill.RELIGION,
        description:
          "Your expertise aids you in uncovering lore of any sort that is attached to a work of art, such as the magical properties of a painting or the origins of a strange mural found in a dungeon.",
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          "When you inspect a painting or a similar work of visual art, your knowledge of the practices behind creating it can grant you additional insight.",
      },
      {
        skill: Skill.PERCEPTION,
        description:
          "When you inspect a painting or a similar work of visual art, your knowledge of the practices behind creating it can grant you additional insight.",
      },
    ],
    features: [
      {
        name: "Painting and Drawing",
        description:
          "As part of a short or long rest, you can produce a simple work of art. Although your work might lack precision, you can capture an image or a scene, or make a quick copy of a piece of art you saw.",
      },
    ],
  },
  {
    name: "Poisoner's Kit",
    description:
      "A poisoner's kit is a favored resource for thieves, assassins, and others who engage in skulduggery. It allows you to apply poisons and create them from various materials. Your knowledge of poisons also helps you treat them.",
    weight: { quantity: 2, unit: "lbs" },
    cost: { quantity: 50, unit: "gp" },
    componentsDescription:
      "A poisoner's kit includes glass vials, a mortar and pestle, chemicals, and a glass stirring rod.",
    components: [
      "Glass Vials",
      "Mortar and Pestle",
      "Chemicals",
      "Glass Stirring Rod",
    ],
    flavorText: "A poisoner's kit allows you to create and apply poisons.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your training with poisons can help you when you try to recall facts about infamous poisonings.",
      },
      {
        skill: Skill.PERCEPTION,
        description:
          "Your knowledge of poisons has taught you to handle those substances carefully, giving you an edge when you inspect poisoned objects or try to extract clues from events that involve poison.",
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          "Your knowledge of poisons has taught you to handle those substances carefully, giving you an edge when you inspect poisoned objects or try to extract clues from events that involve poison.",
      },
      {
        skill: Skill.MEDICINE,
        description:
          "When you treat the victim of a poison, your knowledge grants you added insight into how to provide the best care to your patient.",
      },
      {
        skill: Skill.NATURE,
        description:
          "Working with poisons enables you to acquire lore about which plants and animals are poisonous.",
      },
      {
        skill: Skill.SURVIVAL,
        description:
          "Working with poisons enables you to acquire lore about which plants and animals are poisonous.",
      },
    ],
    features: [
      {
        name: "Handle Poison",
        description:
          "Your proficiency allows you to handle and apply a poison without risk of exposing yourself to its effects.",
      },
    ],
  },
  {
    name: "Potter's Tools",
    description:
      "Potter's tools are used to create a variety of ceramic objects, most typically pots and similar vessels.",
    weight: { quantity: 3, unit: "lbs" },
    cost: { quantity: 10, unit: "gp" },
    componentsDescription:
      " Potter's tools include potter's needles, ribs, scrapers, a knife, and calipers.",
    components: ["Potter's Needles", "Ribs", "Scrapers", "Knife", "Calipers"],
    flavorText: "Potter's tools allow you to create ceramic objects.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your expertise aids you in identifying ceramic objects, including when they were created and their likely place or culture of origin.",
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          "You gain additional insight when inspecting ceramics, uncovering clues others would overlook by spotting minor irregularities.",
      },
      {
        skill: Skill.PERCEPTION,
        description:
          "You gain additional insight when inspecting ceramics, uncovering clues others would overlook by spotting minor irregularities.",
      },
    ],
    features: [
      {
        name: "Reconstruction",
        description:
          "By examining pottery shards, you can determine an object's original, intact form and its likely purpose.",
      },
    ],
  },
  {
    name: "Smith's Tools",
    description:
      "Smith's tools allow you to work metal, beating it to alter its shape, repair damage, or work raw ingots into useful items.",
    weight: { quantity: 8, unit: "lbs" },
    cost: { quantity: 20, unit: "gp" },
    componentsDescription:
      "Smith's tools include hammers, tongs, charcoal, rags, and a whetstone.",
    components: ["Hammers", "Tongs", "Charcoal", "Rags", "Whetstone"],
    flavorText: "Smith's tools allow you to work metal.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your expertise lends you additional insight when examining metal objects, such as weapons.",
      },
      {
        skill: Skill.ARCANA,
        description:
          "Your expertise lends you additional insight when examining metal objects, such as weapons.",
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          "You can spot clues and make deductions that others might overlook when an investigation involves armor, weapons, or other metalwork.",
      },
    ],
    features: [
      {
        name: "Repair",
        description:
          "With access to your tools and an open flame hot enough to make metal pliable, you can restore 10 hit points to a damaged metal object for each hour of work.",
      },
    ],
  },
  {
    name: "Thieves' Tools",
    description:
      "Perhaps the most common tools used by adventurers, thieves' tools are designed for picking locks and foiling traps. Proficiency with the tools also grants you a general knowledge of traps and locks.",
    weight: { quantity: 1, unit: "lbs" },
    cost: { quantity: 25, unit: "gp" },
    componentsDescription:
      "Thieves' tools include a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers.",
    components: [
      "Small File",
      "Set of Lock Picks",
      "Small Mirror Mounted on a Metal Handle",
      "Set of Narrow-Bladed Scissors",
      "Pair of Pliers",
    ],
    flavorText: "Thieves' tools allow you to pick locks and disarm traps.",
    skills: [
      {
        skill: Skill.INVESTIGATION,
        description:
          "You gain additional insight when looking for traps, because you have learned a variety of common signs that betray their presence.",
      },
      {
        skill: Skill.PERCEPTION,
        description:
          "You gain additional insight when looking for traps, because you have learned a variety of common signs that betray their presence.",
      },
      {
        skill: Skill.HISTORY,
        description:
          "You gain additional insight when looking for traps, because you have learned a variety of common signs that betray their presence.",
      },
    ],
    features: [
      {
        name: "Set a Trap",
        description:
          "Just as you can disable traps, you can also set them. As part of a short rest, you can create a trap using items you have on hand. The total of your check becomes the DC for someone else's attempt to discover or disable the trap. The trap deals damage appropriate to the materials used in crafting it (such as poison or a weapon) or damage equal to half the total of your check, whichever the DM deems appropriate.",
      },
    ],
  },
  {
    name: "Tinker's Tools",
    description:
      "A set of tinker's tools is designed to enable you to repair many mundane objects. Though you can't manufacture much with tinker's tools, you can mend torn clothes, sharpen a worn sword, and patch a tattered suit of chain mail.",
    weight: { quantity: 10, unit: "lbs" },
    cost: { quantity: 50, unit: "gp" },
    componentsDescription:
      "Tinker's tools include a variety of hand tools, thread, needles, a whetstone, scraps of cloth and leather, and a small pot of glue.",
    components: [
      "Hand Tools",
      "Thread",
      "Needles",
      "Whetstone",
      "Scraps of Cloth and Leather",
      "Small Pot of Glue",
    ],
    flavorText: "Tinker's tools allow you to repair objects.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "You can determine the age and origin of objects, even if you have only a few pieces remaining from the original.",
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          "When you inspect a damaged object, you gain knowledge of how it was damaged and how long ago.",
      },
    ],
    features: [
      {
        name: "Repair",
        description:
          "As part of a long rest, you can repair a single object. The object can be no larger than 3 feet in any dimension, and the object must be within reach throughout the process. The object returns to its original, undamaged state.",
      },
    ],
  },
  {
    name: "Weaver's Tools",
    description:
      "Weaver's tools allow you to create cloth and tailor it into articles of clothing.",
    weight: { quantity: 5, unit: "lbs" },
    cost: { quantity: 1, unit: "gp" },
    componentsDescription:
      "Weaver's tools include thread, needles, and scraps of cloth. You know how to work a loom, but such equipment is too large to transport.",
    components: ["Thread", "Needles", "Scraps of Cloth"],
    flavorText: "Weaver's tools allow you to create and repair clothing.",
    skills: [
      {
        skill: Skill.ARCANA,
        description:
          "Your expertise lends you additional insight when examining cloth objects, including cloaks and robes.",
      },
      {
        skill: Skill.HISTORY,
        description:
          "our expertise lends you additional insight when examining cloth objects, including cloaks and robes.",
      },
      {
        skill: Skill.INVESTIGATION,
        description:
          "Using your knowledge of the process of creating cloth objects, you can spot clues and make deductions that others would overlook when you examine tapestries, upholstery, clothing, and other woven items.",
      },
    ],
    features: [
      {
        name: "Repair",
        description:
          "As part of a short rest, you can repair a single damaged cloth object.",
      },
      {
        name: "Craft Clothing",
        description:
          "Assuming you have access to sufficient cloth and thread, you can create an outfit for a creature as part of a long rest.",
      },
    ],
  },
  {
    name: "Woodcarver's Tools",
    description:
      "Woodcarver's tools allow you to craft intricate objects from wood, such as wooden tokens or arrows.",
    weight: { quantity: 5, unit: "lbs" },
    cost: { quantity: 1, unit: "gp" },
    componentsDescription:
      "Woodcarver's tools consist of a knife, a gouge, and a small saw.",
    components: ["Knife", "Gouge", "Small Saw"],
    flavorText: "Woodcarver's tools allow you to create wooden objects.",
    skills: [
      {
        skill: Skill.ARCANA,
        description:
          " Your expertise lends you additional insight when you examine wooden objects, such as figurines or arrows.",
      },
      {
        skill: Skill.HISTORY,
        description:
          " Your expertise lends you additional insight when you examine wooden objects, such as figurines or arrows.",
      },
      {
        skill: Skill.NATURE,
        description:
          "Your knowledge of wooden objects gives you some added insight when you examine trees.",
      },
    ],
    features: [
      {
        name: "Repair",
        description:
          "As part of a short rest, you can repair a single damaged wooden object.",
      },
      {
        name: "Craft Arrows",
        description:
          "As part of a short rest, you can craft up to five arrows. As part of a long rest, you can craft up to twenty. You must have enough wood on hand to produce them.",
      },
    ],
  },
  //gaming sets
  {
    name: "Dice Set",
    description:
      "A dice set is a collection of dice used to play a variety of games.",
    componentsDescription: "A collection of dice",
    weight: { quantity: 0, unit: "lbs" },
    cost: { quantity: 1, unit: "sp" },
    components: ["Dice"],
    flavorText: "A dice set allows you to play games that require dice.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your mastery of a game includes knowledge of its history, as well as of important events it was connected to or prominent historical figures involved with it.",
      },
      {
        skill: Skill.INSIGHT,
        description:
          "Playing games with someone is a good way to gain understanding of their personality, granting you a better ability to discern their lies from their truths and read their mood.",
      },
      {
        skill: Skill.SLEIGHT_OF_HAND,
        description:
          "Sleight of Hand is a useful skill for cheating at a game, as it allows you to swap pieces, palm cards, or alter a die roll. Alternatively, engrossing a target in a game by manipulating the components with dexterous movements is a great distraction for a pickpocketing attempt.",
      },
    ],
  },
  {
    name: "Dragonchess Set",
    description:
      "Dragonchess is a game of strategy and cunning that pits two players against each other in a battle of wits.",
    componentsDescription: "A dragonchess set includes a board and pieces.",
    weight: { quantity: 0.5, unit: "lbs" },
    cost: { quantity: 1, unit: "gp" },
    components: ["Board", "Pieces"],
    flavorText: "A dragonchess set allows you to play dragonchess.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your mastery of a game includes knowledge of its history, as well as of important events it was connected to or prominent historical figures involved with it.",
      },
      {
        skill: Skill.INSIGHT,
        description:
          "Playing games with someone is a good way to gain understanding of their personality, granting you a better ability to discern their lies from their truths and read their mood.",
      },
      {
        skill: Skill.SLEIGHT_OF_HAND,
        description:
          "Sleight of Hand is a useful skill for cheating at a game, as it allows you to swap pieces, palm cards, or alter a die roll. Alternatively, engrossing a target in a game by manipulating the components with dexterous movements is a great distraction for a pickpocketing attempt.",
      },
    ],
  },
  {
    name: "Playing Card Set",
    description:
      "A playing card set is a collection of cards used to play a variety of games.",
    componentsDescription: "A collection of cards",
    weight: { quantity: 0, unit: "lbs" },
    cost: { quantity: 5, unit: "sp" },
    components: ["Cards"],
    flavorText:
      "A playing card set allows you to play games that require cards.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your mastery of a game includes knowledge of its history, as well as of important events it was connected to or prominent historical figures involved with it.",
      },
      {
        skill: Skill.INSIGHT,
        description:
          "Playing games with someone is a good way to gain understanding of their personality, granting you a better ability to discern their lies from their truths and read their mood.",
      },
      {
        skill: Skill.SLEIGHT_OF_HAND,
        description:
          "Sleight of Hand is a useful skill for cheating at a game, as it allows you to swap pieces, palm cards, or alter a die roll. Alternatively, engrossing a target in a game by manipulating the components with dexterous movements is a great distraction for a pickpocketing attempt.",
      },
    ],
  },
  {
    name: "Three-Dragon Ante Set",
    description:
      "Three-Dragon Ante is a game of chance and skill that pits two or more players against each other in a battle of wits.",
    componentsDescription: "A Three-Dragon Ante set includes a deck of cards.",
    weight: { quantity: 0, unit: "lbs" },
    cost: { quantity: 1, unit: "gp" },
    components: ["Deck of Cards"],
    flavorText: "A Three-Dragon Ante set allows you to play Three-Dragon Ante.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your mastery of a game includes knowledge of its history, as well as of important events it was connected to or prominent historical figures involved with it.",
      },
      {
        skill: Skill.INSIGHT,
        description:
          "Playing games with someone is a good way to gain understanding of their personality, granting you a better ability to discern their lies from their truths and read their mood.",
      },
      {
        skill: Skill.SLEIGHT_OF_HAND,
        description:
          "Sleight of Hand is a useful skill for cheating at a game, as it allows you to swap pieces, palm cards, or alter a die roll. Alternatively, engrossing a target in a game by manipulating the components with dexterous movements is a great distraction for a pickpocketing attempt.",
      },
    ],
  },
  //instruments
  {
    name: "Bagpipes",
    description:
      "Bagpipes are a musical instrument that consists of a bag, a chanter, and one or more drones.",
    weight: { quantity: 6, unit: "lbs" },
    cost: { quantity: 30, unit: "gp" },

    components: ["Bagpipes"],
    flavorText: "Bagpipes allow you to create music.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your expertise aids you in recalling lore related to your instrument.",
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          "Your ability to put on a good show is improved when you incorporate an instrument into your act.",
      },
    ],
  },
  {
    name: "Drum",
    description:
      "A drum is a musical instrument that produces sound by being struck with a stick or the hand.",
    weight: { quantity: 3, unit: "lbs" },
    cost: { quantity: 6, unit: "gp" },

    components: ["Drum"],
    flavorText: "A drum allows you to create music.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your expertise aids you in recalling lore related to your instrument.",
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          "Your ability to put on a good show is improved when you incorporate an instrument into your act.",
      },
    ],
  },
  {
    name: "Dulcimer",
    description:
      "A dulcimer is a musical instrument that produces sound by being struck with hammers.",
    weight: { quantity: 10, unit: "lbs" },
    cost: { quantity: 25, unit: "gp" },

    components: ["Dulcimer"],
    flavorText: "A dulcimer allows you to create music.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your expertise aids you in recalling lore related to your instrument.",
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          "Your ability to put on a good show is improved when you incorporate an instrument into your act.",
      },
    ],
  },
  {
    name: "Flute",
    description:
      "A flute is a musical instrument that produces sound by blowing air across an opening.",
    weight: { quantity: 1, unit: "lbs" },
    cost: { quantity: 2, unit: "gp" },

    components: ["Flute"],
    flavorText: "A flute allows you to create music.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your expertise aids you in recalling lore related to your instrument.",
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          "Your ability to put on a good show is improved when you incorporate an instrument into your act.",
      },
    ],
  },
  {
    name: "Lute",
    description:
      "A lute is a musical instrument that produces sound by plucking strings.",
    weight: { quantity: 2, unit: "lbs" },
    cost: { quantity: 35, unit: "gp" },

    components: ["Lute"],
    flavorText: "A lute allows you to create music.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your expertise aids you in recalling lore related to your instrument.",
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          "Your ability to put on a good show is improved when you incorporate an instrument into your act.",
      },
    ],
  },
  {
    name: "Lyre",
    description:
      "A lyre is a musical instrument that produces sound by plucking strings.",
    weight: { quantity: 2, unit: "lbs" },
    cost: { quantity: 30, unit: "gp" },

    components: ["Lyre"],
    flavorText: "A lyre allows you to create music.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your expertise aids you in recalling lore related to your instrument.",
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          "Your ability to put on a good show is improved when you incorporate an instrument into your act.",
      },
    ],
  },
  {
    name: "Horn",
    description:
      "A horn is a musical instrument that produces sound by being blown into.",
    weight: { quantity: 2, unit: "lbs" },
    cost: { quantity: 3, unit: "gp" },

    components: ["Horn"],
    flavorText: "A horn allows you to create music.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your expertise aids you in recalling lore related to your instrument.",
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          "Your ability to put on a good show is improved when you incorporate an instrument into your act.",
      },
    ],
  },
  {
    name: "Pan Flute",
    description:
      "A pan flute is a musical instrument that produces sound by blowing air across an opening.",
    weight: { quantity: 2, unit: "lbs" },
    cost: { quantity: 12, unit: "gp" },

    components: ["Pan Flute"],
    flavorText: "A pan flute allows you to create music.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your expertise aids you in recalling lore related to your instrument.",
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          "Your ability to put on a good show is improved when you incorporate an instrument into your act.",
      },
    ],
  },
  {
    name: "Shawm",
    description:
      "A shawm is a musical instrument that produces sound by being blown into.",
    weight: { quantity: 1, unit: "lbs" },
    cost: { quantity: 2, unit: "gp" },

    components: ["Shawm"],
    flavorText: "A shawm allows you to create music.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your expertise aids you in recalling lore related to your instrument.",
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          "Your ability to put on a good show is improved when you incorporate an instrument into your act.",
      },
    ],
  },
  {
    name: "Viol",
    description:
      "A viol is a musical instrument that produces sound by being bowed or plucked.",
    weight: { quantity: 1, unit: "lbs" },
    cost: { quantity: 30, unit: "gp" },

    components: ["Viol"],
    flavorText: "A viol allows you to create music.",
    skills: [
      {
        skill: Skill.HISTORY,
        description:
          "Your expertise aids you in recalling lore related to your instrument.",
      },
      {
        skill: Skill.PERFORMANCE,
        description:
          "Your ability to put on a good show is improved when you incorporate an instrument into your act.",
      },
    ],
  },
];

export default ToolSeed;
