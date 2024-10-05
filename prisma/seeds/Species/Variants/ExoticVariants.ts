import { languages } from "@/lib/globalVars";
import { src } from "@/lib/utils/types/types";
import {
  CreatureType,
  DamageTypes,
  Language,
  Prisma,
  Size,
  Ability,
} from "@prisma/client";
import { weaponIds } from "../../Items/Weapons/Weapons.seed";
import { artisanIds, toolIds } from "../../Items/Tools/tools.seed";
import { speciesIds } from "../Species.seed";
const ids = {
  aaracokkra: 10,
  aasimar: 11,
  aasimarVGM: 12,
  changeling: 13,
};

const ExoticVariants: Prisma.SubSpeciesCreateManyInput[] = [
  {
    id: 101,
    speciesId: ids.aaracokkra,
    name: "Aaracokkra (EEPC)",
    description:
      "Sequestered in high mountains atop tall trees, the aarakocra evoke fear and wonder. Many of these birdfolk hail from the boundless vistas of the Elemental Plane of Air. They are immigrants, refugees, scouts, and explorers, their outposts functioning as footholds in a world both strange and alien.",

    source: src.eepc,
    flavorText:
      "Sequestered in high mountains atop tall trees, the aarakocra evoke fear and wonder.",
    abilityScores: {
      default: [
        {
          ability: Ability.WIS,
          value: 1,
        },
        {
          ability: Ability.DEX,
          value: 2,
        },
      ],
    },
    abilityScoreDescription:
      "Your Dexterity score increases by 2, and your Wisdom score increases by 1.",
    age: "Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.",
    alignment:
      "Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.",
    size: Size.MEDIUM,
    sizeDescription:
      "Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.",
    speed: 25,
    speedDescription: "Your base walking speed is 25 feet.",
    flightSpeed: 50,
    flightDescription:
      "You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.",
    originLanguages: {
      default: [Language.COMMON, Language.AARAKOCRA, Language.AURAN],
    },
    languageDescription:
      "You can speak, read, and write Common, Aarakocra, and Auran.",
    features: [
      {
        name: "Talons (EEPC)",
        description:
          "You are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit.",
      },
    ],
    removedTraits: ["Wind Caller", "Talons"],
  },
  // aasimar Volos guide to monsters
  {
    id: 102,
    name: "Protector Aasimar",
    description:
      "Protector aasimar are charged by the powers of good to guard the weak, to strike at evil wherever it arises, and to stand vigilant against the darkness. From a young age, a protector aasimar receives advice and directives that urge to stand against evil.",
    flavorText:
      "Protector aasimar are charged by the powers of good to guard the weak, to strike at evil wherever it arises, and to stand vigilant against the darkness.",
    source: src.volo,
    speciesId: ids.aasimarVGM,
    abilityScoreDescription:
      "On top of your +2 Charisma increase for being an Aasimar (VGM), your Wisdom score increases by 1.",
    abilityScores: {
      default: [
        {
          ability: Ability.WIS,
          value: 1,
        },
        {
          ability: Ability.CHA,
          value: 2,
        },
      ],
    },
    features: [
      {
        name: "Radiant Soul",
        description:
          "Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to glimmer and two luminous, incorporeal wings to sprout from your back. \n\nYour transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level.\n\nOnce you use this trait, you can't use it again until you finish a long rest.",
      },
    ],
  },
  {
    id: 103,
    name: "Scourge Aasimar",
    description:
      "Scourge aasimar are imbued with a divine energy that blazes intensely within them. It feeds a powerful desire to destroy evil - a desire that is, at its best, unflinching and, at its worst, all-consuming. Many scourge aasimar wear masks to block out the world and focus on containing this power, unmasking themselves only in battle.",
    flavorText:
      "Scourge aasimar are imbued with a divine energy that blazes intensely within them.",
    source: src.volo,
    speciesId: ids.aasimarVGM,
    abilityScoreDescription:
      "On top of your +2 Charisma increase for being an Aasimar (VGM), your Constitution score increases by 1.",
    abilityScores: {
      default: [
        {
          ability: Ability.CON,
          value: 1,
        },
        {
          ability: Ability.CHA,
          value: 2,
        },
      ],
    },
    features: [
      {
        name: "Radiant Consumption",
        description:
          "Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing a searing light to radiate from you, pour out of your eyes and mouth, and threaten to char you. \n\nYour transformation lasts for 1 minute or until you end it as a bonus action. During it, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, you and each creature within 10 feet of you take radiant damage equal to half your level (rounded up). In addition, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level.\n\nOnce you use this trait, you can't use it again until you finish a long rest.",
      },
    ],
  },
  {
    id: 104,
    name: "Fallen Aasimar",
    description:
      "An aasimar who was touched by dark powers as a youth or who turns to evil in early adulthood can become one of the fallen - a group of aasimar whose inner light has been replaced by shadow.",
    flavorText:
      "An aasimar who was touched by dark powers as a youth or who turns to evil in early adulthood can become one of the fallen.",
    source: src.volo,
    speciesId: ids.aasimarVGM,
    abilityScoreDescription:
      "On top of your +2 Charisma increase for being an Aasimar (VGM), your Strength score increases by 1.",
    abilityScores: {
      default: [
        {
          ability: Ability.STR,
          value: 1,
        },
        {
          ability: Ability.CHA,
          value: 2,
        },
      ],
    },
    features: [
      {
        name: "Necrotic Shroud",
        description:
          "Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to turn into pools of darkness and two skeletal, ghostly, flightless wings to sprout from your back. The instant you transform, other creatures within 10 feet of you that can see you must each succeed on a Charisma saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or become frightened of you until the end of your next turn.\n\nYour transformation lasts for 1 minute or until you end it as a bonus action. During it, once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra necrotic damage equals your level.\n\nOnce you use this trait, you can't use it again until you finish a long rest.",
      },
    ],
  },
  {
    id: 105,
    name: "Beasthide Shifter",
    description:
      "Stoic and solid, a beasthide shifter draws strength and stability from the beast within. Beasthide shifters are typically tied to the bear or the boar, but any creature known for its toughness could apply.",
    flavorText:
      "Stoic and solid, a beasthide shifter draws strength and stability from the beast within.",
    source: src.eberron,
    speciesId: speciesIds.shifterERLW,
    abilityScoreDescription:
      "Your Constitution score increases by 2, and your Strength score increases by 1.",
    abilityScores: {
      default: [
        {
          ability: Ability.CON,
          value: 2,
        },
        {
          ability: Ability.STR,
          value: 1,
        },
      ],
    },
    features: [
      {
        name: "Shifting Feature",
        description:
          "Whenever you shift, you gain 1d6 additional temporary hit points, and while shifted, you have a +1 bonus to your Armor Class.",
      },
      {
        name: "Natural Athlete",
        description: "You have proficiency in the Athletics skill.",
      },
    ],
  },
  {
    id: 106,
    name: "Longtooth Shifter",
    description:
      "Longtooth shifters are fierce and aggressive, but they form deep bonds with their friends. Many longtooth shifters have canine traits that become more pronounced as they shift, but they might instead draw on tigers, hyenas, or other predators.",
    flavorText: "Longtooth shifters are fierce and aggressive.",
    source: src.eberron,
    abilityScoreDescription:
      "Your Strength score increases by 2, and your Dexterity score increases by 1.",
    speciesId: speciesIds.shifterERLW,
    abilityScores: {
      default: [
        {
          ability: Ability.STR,
          value: 2,
        },
        {
          ability: Ability.DEX,
          value: 1,
        },
      ],
    },
    features: [
      {
        name: "Shifting Feature",
        description:
          "While shifted, you can use your elongated fangs to make an unarmed strike as a bonus action. If you hit with your fangs, you can deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
      },
      {
        name: "Fierce",
        description: "You have proficiency in the Intimidation skill.",
      },
    ],
  },
  {
    id: 107,
    name: "Swiftstride Shifter",
    description:
      "Swiftstride shifters are graceful and quick. Typically feline in nature, swiftstride shifters are often aloof and difficult to pin down physically or socially.",
    flavorText: "Swiftstride shifters are graceful and quick.",
    source: src.eberron,
    speciesId: speciesIds.shifterERLW,
    abilityScoreDescription:
      "Your Dexterity score increases by 2, and your Charisma score increases by 1.",
    abilityScores: {
      default: [
        {
          ability: Ability.DEX,
          value: 2,
        },
        {
          ability: Ability.CHA,
          value: 1,
        },
      ],
    },
    features: [
      {
        name: "Graceful",
        description: "You have proficiency in the Acrobatics skill.",
      },
      {
        name: "Shifting Feature",
        description:
          "While shifted, your walking speed increases by 10 feet. Additionally, you can move up to 10 feet as a reaction when an enemy ends its turn within 5 feet of you. This reactive movement doesn’t provoke opportunity attacks.",
      },
    ],
  },
  {
    id: 108,
    name: "Wildhunt Shifter",
    description:
      "Wildhunt shifters are sharp and insightful. Some are constantly alert, ever wary for possible threats. Others focus on their intuition, searching within. Wildhunt shifters are excellent hunters, and they also tend to become the spiritual leaders of shifter communities.",
    flavorText: "Wildhunt shifters are sharp and insightful.",
    source: src.eberron,
    speciesId: speciesIds.shifterERLW,
    abilityScoreDescription: "Your Wisdom score increases by 2.",
    abilityScores: {
      default: [
        {
          ability: Ability.WIS,
          value: 2,
        },
      ],
    },
    features: [
      {
        name: "Shifting Feature",
        description: "While shifted, you have advantage on Wisdom checks.",
      },
      {
        name: "Mark the Scent",
        description:
          "As a bonus action, you can mark one creature you can see within 10 feet of you. Until the end of your next long rest, your proficiency bonus is doubled for any ability check you make to find the marked creature, and you always know the location of that creature if it is within 60 feet of you. You can’t use this trait again until you finish a short or long rest.",
      },
      {
        name: "Natural Tracker",
        description: "You have proficiency in the Survival skill.",
      },
    ],
  },
  {
    id: 109,
    name: "Ibis Headed Aven",
    flavorText:
      "A majority of ibis-headed aven, drawn to the teachings of Kefnet.",
    description:
      "A majority of ibis-headed aven, drawn to the teachings of Kefnet, specialize in spellcasting. They take great pride in all the qualities they share with the god of knowledge—not just their avian heads, but their quick wit, self-confidence, cunning, and spellcasting prowess.",
    source: src.amonkhet,
    speciesId: speciesIds.aven,
    abilityScoreDescription:
      "On top of your +2 to Dexteriy for being an Aven, your Intelligence score increases by 1.",
    abilityScores: {
      default: [
        {
          ability: Ability.INT,
          value: 1,
        },
        {
          ability: Ability.DEX,
          value: 2,
        },
      ],
    },
    features: [
      {
        name: "Kefnet's Blessing",
        description:
          "You can add half your proficiency bonus, rounded down, to any Intelligence check you make that doesn’t already include your proficiency bonus.",
      },
    ],
  },
  {
    id: 110,
    name: "Hawk Headed Aven",
    flavorText:
      "Following the example of Oketra, hawkheaded aven often focus on the techniques of long-range combat.",
    description:
      "Following the example of Oketra, hawkheaded aven often focus on the techniques of long-range combat. Most prefer javelins, but some are skilled with bows, spears, and throwing axes.",
    source: src.amonkhet,
    speciesId: speciesIds.aven,
    abilityScoreDescription:
      "On top of your +2 to Dexteriy for being an Aven, your Wisdom score increases by 2.",
    abilityScores: {
      default: [
        {
          ability: Ability.WIS,
          value: 2,
        },
        {
          ability: Ability.DEX,
          value: 2,
        },
      ],
    },
    features: [
      {
        name: "Hawkeyed",
        description:
          "You have proficiency in the Perception skill. In addition, attacking at long range doesn’t impose disadvantage on your ranged weapon attack rolls.",
      },
    ],
  },
  {
    id: 111,
    name: "Green Merfolk",
    description:
      "Green merfolk generally have yellow chests and pale green faces, shading to dark blues and purples on their backs and limbs. The patterns on their skin suggest the colors of the tree frogs common in the rain forest, as do their eyes of orange, lime green, or sky blue. Their fins are relatively short and thick. They climb trees with ease, move through undergrowth unhindered, and often wield magic to shape vines and branches to their will.",
    flavorText:
      "Green merfolk generally have yellow chests and pale green faces, shading to dark blues and purples on their backs and limbs.",
    source: src.ixalan,
    speciesId: speciesIds.merfolkIxalan,
    abilityScoreDescription:
      "On top of your +1 to Charisma for being a Merfolk, your Wisdom score increases by 2.",
    abilityScores: {
      default: [
        {
          ability: Ability.WIS,
          value: 2,
        },
        {
          ability: Ability.CHA,
          value: 1,
        },
      ],
    },
    features: [
      {
        name: "Mask of the Wild",
        description:
          "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
      },
      {
        name: "Cantrip",
        description:
          "You know one cantrip of your choice from the Druid spell list. Wisdom is your spellcasting ability for it.",
      },
    ],
  },
  {
    id: 112,
    name: "Blue Merfolk",
    description:
      "Blue merfolk often have burgundy or magenta on their faces and chests, with lighter shades of blue and purple elsewhere. Their eyes are red, orange, or blue, and their long, thin, and elegant fins resemble scarves or veils of fine fabric. They swim easily, even upstream, and clamber over rocks and through rapids with ease. They prefer to dwell in shallow waters, but spend a fair amount of time on land as well.",
    flavorText:
      "Blue merfolk often have burgundy or magenta on their faces and chests.",
    source: src.ixalan,
    speciesId: speciesIds.merfolkIxalan,
    abilityScoreDescription:
      "On top of your +1 to Charisma for being a Merfolk, your Intelligence score increases by 2.",
    abilityScores: {
      default: [
        {
          ability: Ability.INT,
          value: 2,
        },
        {
          ability: Ability.CHA,
          value: 1,
        },
      ],
    },
    features: [
      {
        name: "Lore of the Waters",
        description: "You gain proficiency in History and Nature.",
      },
      {
        name: "Cantrip",
        description:
          "You know one cantrip of your choice from the Wizard spell list. Intelligence is your spellcasting ability for it.",
      },
    ],
  },
  {
    id: 113,
    name: "Emeria Creed Merfolk",
    description:
      "Merfolk who followed Emeria’s creed seek wisdom and truth in the Wind Realm, exploring the mystical forces—rather than natural causes—behind historical events. They are evasive and intentionally enigmatic in their interactions with others, and are often described as manipulative and deceptive.",
    flavorText:
      "Merfolk who followed Emeria’s creed seek wisdom and truth in the Wind Realm.",
    source: src.zendikar,
    speciesId: speciesIds.merfolkZendikar,
    abilityScoreDescription:
      "On top of your +1 to Charisma for being a Merfolk, your Wisdom score increases by 2.",
    abilityScores: {
      default: [
        {
          ability: Ability.WIS,
          value: 2,
        },
        {
          ability: Ability.CHA,
          value: 1,
        },
      ],
    },
    features: [
      {
        name: "Wind Creed Manipulation",
        description:
          "You have proficiency in the Deception and Persuasion skills.",
      },
      {
        name: "Cantrip",
        description:
          "You know one cantrip of your choice from the Druid spell list. Wisdom is your spellcasting ability for it.",
      },
    ],
  },
  {
    id: 114,
    name: "Ula Creed Merfolk",
    description:
      "Ula-creed merfolk emphasize intellectual pursuits, stressing hard evidence and reason over passion. They are analytical scholars, chroniclers, explorers, and navigators who pride themselves on being blunt and straightforward.",
    flavorText: "Ula-creed merfolk emphasize intellectual pursuits.",
    source: src.zendikar,
    speciesId: speciesIds.merfolkZendikar,
    abilityScoreDescription:
      "On top of your +1 to Charisma for being a Merfolk, your Intelligence score increases by 2.",
    abilityScores: {
      default: [
        {
          ability: Ability.INT,
          value: 2,
        },
        {
          ability: Ability.CHA,
          value: 1,
        },
      ],
    },
    features: [
      {
        name: "Water Creed Navigation",
        description:
          "You have proficiency with navigator’s tools and in the Survival skill.",
      },
      {
        name: "Cantrip",
        description:
          "You know one cantrip of your choice from the Wizard spell list. Intelligence is your spellcasting ability for it.",
      },
    ],
  },
  {
    id: 115,
    name: "Cosi Creed Merfolk",
    description:
      "No merfolk will openly admit to following the creed of the trickster, but those who do view Cosi as an ally who can grant them control over the chaotic forces of the world.",
    flavorText:
      "No merfolk will openly admit to following the creed of the trickster.",
    abilityScoreDescription:
      "On top of your +1 to Charisma for being a Merfolk, you get an additional +1 to your Charisma score (total of 2), as well as a +1 to your intelligence score.",
    source: src.zendikar,
    speciesId: speciesIds.merfolkZendikar,
    abilityScores: {
      default: [
        {
          ability: Ability.CHA,
          value: 2,
        },
        {
          ability: Ability.INT,
          value: 1,
        },
      ],
    },
    features: [
      {
        name: "Creed of the Trickster",
        description:
          "You have proficiency in the Sleight of Hand and Stealth skills.",
      },
      {
        name: "Cantrip",
        description:
          "You know one cantrip of your choice from the Bard spell list. Charisma is your spellcasting ability for it.",
      },
    ],
  },
];

export default ExoticVariants;
