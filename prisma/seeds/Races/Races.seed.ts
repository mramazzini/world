import { languages } from "@/lib/globalVars";
import { src } from "@/lib/types";
import { Ability } from "@/lib/types";
import {
  Prisma,
  Size,
  CreatureType,
  Language,
  Skill,
  DamageTypes,
} from "@prisma/client";
import { weaponIds } from "../Items/Weapons/Weapons.seed";

const Species: Prisma.RaceCreateManyInput[] = [
  {
    id: 1,
    name: "Dragonborn",
    description:
      "Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life.",
    abilityScoreDescription:
      "Your Strength score increases by 2, and your Charisma score increases by 1.",
    abilityScores: {
      fixedIncreases: [
        {
          ability: Ability.STR,
          value: 2,
        },
        {
          ability: Ability.CHA,
          value: 1,
        },
      ],
    },
    age: "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
    alignment:
      "Dragonborn tend towards extremes, making a conscious choice for one side or the other between Good and Evil (represented by Bahamut and Tiamat, respectively). More side with Bahamut than Tiamat (whose non-dragon followers are mostly kobolds), but villainous dragonborn can be quite terrible indeed. Some rare few choose to devote themselves to lesser dragon deities, such as Chronepsis (Neutral), and fewer still choose to worship Io, the Ninefold Dragon, who is all alignments at once.",
    size: Size.MEDIUM,
    sizeDescription:
      "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    creatureType: CreatureType.HUMANOID,
    flavorText:
      "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.",
    source: src.phb,
    originLanguages: {
      defaultLanguages: [Language.DRACONIC, Language.COMMON],
    },
    languageDescription: "You can read, speak, and write Common and Draconic.",
  },
  {
    id: 2,
    name: "Dwarf",
    description:
      "Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs – these common threads unite all dwarves.",
    abilityScoreDescription: "Your Constitution score increases by 2.",
    abilityScores: {
      fixedIncreases: [
        {
          ability: Ability.CON,
          value: 2,
        },
      ],
    },
    resistanceTo: [DamageTypes.POISON],
    weaponProficiencies: [
      weaponIds.battleaxe,
      weaponIds.handaxe,
      weaponIds.lightHammer,
      weaponIds.warhammer,
    ],
    toolProficiencies: {
      defaultTools: [],
      choices: {
        tools: ["Smith's tools", "Brewer's supplies", "Mason's tools"],
        numberOfTools: 1,
      },
    },
    darkvision: 60,
    darkvisionDescription:
      "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    age: "Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.",
    alignment:
      "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
    size: Size.MEDIUM,
    sizeDescription:
      "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
    speed: 25,
    speedDescription: "Your base walking speed is 25 feet.",
    originLanguages: {
      defaultLanguages: [Language.DWARVISH, Language.COMMON],
    },
    languageDescription:
      "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.",
    creatureType: CreatureType.HUMANOID,
    flavorText:
      "Dwarves are solid and enduring like the mountains they love, weathering the passage of centuries with stoic endurance and little change.",
    source: src.phb,
  },
  {
    id: 3,
    name: "Elf",
    description:
      "Elves are a magical people of otherworldly grace, living in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry.",
    abilityScores: {
      fixedIncreases: [
        {
          ability: Ability.DEX,
          value: 2,
        },
      ],
    },
    abilityScoreDescription: "Your Dexterity score increases by 2.",
    age: "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
    alignment:
      "Elves love freedom, variety, and self-expression, so they lean strongly towards the gentler aspects of chaos. They value and protect others' freedom as well as their own, and are good more often than not. Drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.",
    size: Size.MEDIUM,
    darkvision: 60,
    darkvisionDescription:
      "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    sizeDescription:
      "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    originLanguages: {
      defaultLanguages: [Language.ELVISH, Language.COMMON],
    },
    languageDescription: "You can speak, read, and write Common and Elven.",
    skillProficiencies: [Skill.PERCEPTION],
    creatureType: CreatureType.HUMANOID,
    flavorText:
      "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.",
    source: src.phb,
  },
  {
    id: 4,
    name: "Gnome",
    description:
      "A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.",
    abilityScores: {
      fixedIncreases: [
        {
          ability: Ability.INT,
          value: 2,
        },
      ],
    },
    abilityScoreDescription: "Your Intelligence score increases by 2.",
    age: "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",
    darkvision: 60,
    darkvisionDescription:
      "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    alignment:
      " Gnomes are generally Good. Those who tend towards Law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend towards Chaos are often minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are light-hearted, and even the tricksters amongst them favor harmless pranks over vicious schemes.",
    size: Size.SMALL,
    sizeDescription:
      "Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.",
    speed: 25,
    speedDescription: "Your base walking speed is 25 feet.",
    originLanguages: {
      defaultLanguages: [Language.GNOMISH, Language.COMMON],
    },
    languageDescription: "You can read, speak, and write Common and Gnomish.",
    creatureType: CreatureType.HUMANOID,
    flavorText:
      "Gnomes are inquisitive and inventive, always looking for new ways to do things.",
    source: src.phb,
  },
  {
    id: 5,
    name: "Half Elf",
    description:
      "Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves.",
    abilityScores: {
      fixedIncreases: [
        {
          ability: Ability.CHA,
          value: 2,
        },
      ],
      choices: [
        {
          abilities: [
            Ability.STR,
            Ability.DEX,
            Ability.CON,
            Ability.INT,
            Ability.WIS,
          ],
          options: [
            {
              numberOfAbilities: 2,
              increases: [1, 1],
            },
          ],
        },
      ],
    },
    abilityScoreDescription:
      "Your Charisma score increases by 2, and two other ability scores of your choice increase by 1.",
    darkvision: 60,
    darkvisionDescription:
      "Thanks to your elven heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    age: "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",
    alignment:
      "Half-elves share the chaotic bent of their elven heritage. They both value personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable. They are good and evil in equal numbers, a trait they share with their human parents.",
    size: Size.MEDIUM,
    sizeDescription:
      "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    originLanguages: {
      defaultLanguages: [Language.ELVISH, Language.COMMON],
    },
    languageDescription:
      "You can read, speak, and write Common, Elven, and one language of your choice.",
    creatureType: CreatureType.HUMANOID,
    flavorText:
      "Half-elves combine what some say are the best qualities of their elf and human parents.",
    source: src.phb,
  },
  {
    id: 6,
    name: "Half Orc",
    description:
      "When alliances between humans and orcs are sealed by marriages, half-orcs are born. Some half-orcs rise to become proud chiefs of orc tribes, their human blood giving them an edge over their full-blooded orc rivals. Some venture into the world to prove their worth among humans and other more civilized races. Many of these become adventurers, achieving greatness for their mighty deeds and notoriety for their barbaric customs and savage fury.",
    abilityScores: {
      fixedIncreases: [
        {
          ability: Ability.STR,
          value: 2,
        },
        {
          ability: Ability.CON,
          value: 1,
        },
      ],
    },
    abilityScoreDescription:
      "Your Strength score increases by 2, and your Constitution score increases by 1.",
    darkvision: 60,
    darkvisionDescription:
      "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    age: "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",
    alignment:
      "Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.",
    size: Size.MEDIUM,
    sizeDescription:
      "Half-orcs are somewhat larger and bulkier than humans and they range from 5 to well over 6 feet tall. Your size is Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    creatureType: CreatureType.HUMANOID,
    flavorText:
      "Half-orcs are not evil by nature, but evil does lurk within them, whether they embrace it or rebel against it.",
    source: src.phb,
    originLanguages: {
      defaultLanguages: [Language.ORC, Language.COMMON],
    },
    languageDescription:
      "You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.",
  },
  {
    id: 7,
    name: "Halfling",
    description:
      "The comforts of home are the goals of most halflings' lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies. Others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. Halflings work readily with others, and they are loyal to their friends, whether halfling or otherwise. They can display remarkable ferocity when their friends, families, or communities are threatened.",
    abilityScores: {
      fixedIncreases: [
        {
          ability: Ability.DEX,
          value: 2,
        },
      ],
    },
    abilityScoreDescription: "Your Dexterity score increases by 2.",
    age: "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
    alignment:
      "Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of the old ways.",
    size: Size.SMALL,
    sizeDescription:
      "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",
    speed: 25,
    speedDescription: "Your base walking speed is 25 feet.",
    creatureType: CreatureType.HUMANOID,
    flavorText:
      "Halflings are an unobtrusive but lively bunch. Curious and adventurous, they see opportunity in everything.",
    source: src.phb,
    originLanguages: {
      defaultLanguages: [Language.HALFLING, Language.COMMON],
    },
    languageDescription: "You can speak, read, and write Common and Halfling.",
  },
  {
    id: 8,
    name: "Human",
    description:
      "In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that's why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
    abilityScores: {
      universalIncrease: 1,
    },
    abilityScoreDescription: "Your ability scores each increase by 1.",
    age: "Humans reach adulthood in their late teens and live less than a century.",
    alignment:
      "Humans tend toward no particular alignment. The best and the worst are found among them.",
    size: Size.MEDIUM,
    sizeDescription:
      "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    creatureType: CreatureType.HUMANOID,
    flavorText:
      "Humans are the most adaptable and ambitious people among the common races of the worlds.",
    source: src.phb,
    originLanguages: {
      defaultLanguages: [Language.COMMON],
      choices: {
        languages: languages.filter((l) => l !== Language.COMMON),
        numberOfLanguages: 1,
      },
    },
    languageDescription:
      "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.",
  },
  {
    id: 9,
    name: "Tiefling",
    description:
      "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus, overlord of the Nine Hells (and many of the other powerful devils serving under him) into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children's children will always be held accountable.",
    abilityScores: {
      fixedIncreases: [
        {
          ability: Ability.CHA,
          value: 2,
        },
      ],
    },
    abilityScoreDescription: "Your Charisma score increases by 2.",
    darkvision: 60,
    resistanceTo: [DamageTypes.FIRE],
    darkvisionDescription:
      "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
    age: "Tieflings mature at the same rate as humans but live a few years longer.",
    alignment:
      "Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.",
    size: Size.MEDIUM,
    sizeDescription:
      "Tieflings are about the same size and build as humans. Your size is Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    creatureType: CreatureType.HUMANOID,
    flavorText:
      "Tieflings are derived from human bloodlines, and in the broadest possible sense, they still look human. However, their infernal heritage has left a clear imprint on their appearance.",
    source: src.phb,
    originLanguages: {
      defaultLanguages: [Language.INFERNAL, Language.COMMON],
    },
    languageDescription: "You can speak, read, and write Common and Infernal.",
  },
];

export default Species;
