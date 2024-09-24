import { languages } from "@/lib/globalVars";
import { src } from "@/lib/types";
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
const ids = {
  aaracokkra: 10,
  aasimar: 11,
  aasimarVGM: 12,
  changeling: 13,
};

const ExoticVariants: Prisma.RaceVariantCreateManyInput[] = [
  {
    id: 101,
    baseRaceId: ids.aaracokkra,
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
    baseRaceId: ids.aasimarVGM,
    abilityScoreDescription:
      "On top of your Charisma increase for being an Aasimar (VGM), your Wisdom score increases by 1.",
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
    baseRaceId: ids.aasimarVGM,
    abilityScoreDescription:
      "On top of your Charisma increase for being an Aasimar (VGM), your Constitution score increases by 1.",
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
    baseRaceId: ids.aasimarVGM,
    abilityScoreDescription:
      "On top of your Charisma increase for being an Aasimar (VGM), your Strength score increases by 1.",
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
];

export default ExoticVariants;
