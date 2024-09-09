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
import { toolIds } from "../Items/Tools/tools.seed";

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
      default: [Language.DRACONIC, Language.COMMON],
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
      default: [],
      choices: [
        {
          options: [
            toolIds.smithTools,
            toolIds.brewerSupplies,
            toolIds.masonTools,
          ],
          numberOfChoices: 1,
        },
      ],
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
      default: [Language.DWARVISH, Language.COMMON],
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
      default: [Language.ELVISH, Language.COMMON],
    },
    languageDescription: "You can speak, read, and write Common and Elven.",
    skillProficiencies: {
      default: [Skill.PERCEPTION],
    },
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
      default: [Language.GNOMISH, Language.COMMON],
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
              numberOfChoices: 2,
              options: [1, 1],
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
      default: [Language.ELVISH, Language.COMMON],
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
      default: [Language.ORC, Language.COMMON],
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
      default: [Language.HALFLING, Language.COMMON],
    },
    languageDescription: "You can speak, read, and write Common and Halfling.",
  },
  {
    id: 8,
    name: "Human",
    description:
      "In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that's why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
    abilityScores: {
      fixedIncreases: [
        {
          ability: Ability.STR,
          value: 1,
        },
        {
          ability: Ability.DEX,
          value: 1,
        },
        {
          ability: Ability.CON,
          value: 1,
        },
        {
          ability: Ability.INT,
          value: 1,
        },
        {
          ability: Ability.WIS,
          value: 1,
        },
        {
          ability: Ability.CHA,
          value: 1,
        },
      ],
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
      default: [Language.COMMON],
      choices: [
        {
          options: languages.filter((l) => l !== Language.COMMON),
          numberOfChoices: 1,
        },
      ],
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
      default: [Language.INFERNAL, Language.COMMON],
    },
    languageDescription: "You can speak, read, and write Common and Infernal.",
  },
  //exotic
  //aarakocra
  {
    id: 10,
    name: "Aarakocra (MMOM)",
    flavorText:
      "A winged people who originated on the Elemental Plane of Air, aarakocra soar through the sky wherever they wander.",
    age: "N/A",
    alignment: "N/A",
    description:
      "A winged people who originated on the Elemental Plane of Air, aarakocra soar through the sky wherever they wander. The first aarakocra served the Wind Dukes of Aaqa — mighty beings of air — and were imbued with a measure of their masters’ power over winds. Their descendants still command echoes of that power.\n\nFrom below, aarakocra look like large birds and thus are sometimes called birdfolk. Only when they roost on a branch or walk across the ground is their Humanoid nature clear. Standing upright, aarakocra are typically about 5 feet tall, and they have long, narrow legs that taper to sharp talons. Feathers cover their bodies — usually red, orange, yellow, brown, or gray. Their heads are also avian, often resembling those of parrots or eagles.",
    source: src.mordenkainenMonsters,
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 2,
              options: [1, 2],
            },
          ],
        },
        {
          abilities: [Ability.WIS],
          options: [
            {
              numberOfChoices: 3,
              options: [1, 1, 1],
            },
          ],
        },
      ],
    },
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    speed: 30,
    speedDescription: "Your walking speed is 30 feet.",
    flightSpeed: 30,
    flightDescription:
      "Because of your wings, you have a flying speed equal to your walking speed. You can’t use this flying speed if you’re wearing medium or heavy armor.",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. The Player’s Handbook offers a list of languages to choose from. The DM is free to modify that list for a campaign.",
    features: [
      {
        name: "Talons",
        description:
          "You have talons that you can use to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.",
      },
      {
        name: "Wind Caller",
        description:
          "Starting at 3rd level, you can cast the Gust of Wind spell with this trait, without requiring a material component. Once you cast the spell with this trait, you can’t do so again until you finish a long rest. You can also cast the spell using any spell slots you have of 2nd level or higher. \n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for it when you cast Gust of Wind with this trait (choose when you select this race).",
      },
    ],
  },
  {
    id: 11,
    name: "Aasimar (MMOM)",
    description:
      "Whether descended from a celestial being or infused with heavenly power, aasimar are mortals who carry a spark of the Upper Planes within their souls. They can fan that spark to bring light, ease wounds, and unleash the fury of the heavens.\n\nAasimar can arise among any population of mortals. They resemble their parents, but they live for up to 160 years and often have features that hint at their celestial heritage. These often begin subtle and become more obvious when the aasimar gains the ability to reveal their full celestial nature. The Aasimar Celestial Features table has examples you can choose or use as inspiration to create your own.",
    flavorText:
      "Whether descended from a celestial being or infused with heavenly power, aasimar are mortals who carry a spark of the Upper Planes within their souls.",
    source: src.mordenkainenMonsters,
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 2,
              options: [2, 1],
            },
          ],
        },
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 3,
              options: [1, 1, 1],
            },
          ],
        },
      ],
    },
    age: "N/A",
    alignment: "N/A",
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    sizeDescription:
      "You are Medium or Small. You choose the size when you select this race.",
    speed: 30,
    speedDescription: "Your walking speed is 30 feet.",
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
    resistanceTo: [DamageTypes.RADIANT, DamageTypes.NECROTIC],
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. The Player’s Handbook offers a list of languages to choose from. The DM is free to modify that list for a campaign.",
    features: [
      {
        name: "Celestial Resistance",
        description: "You have resistance to necrotic and radiant damage.",
      },
      {
        name: "Healing Hands",
        description:
          "As an action, you can touch a creature and roll a number of d4s equal to your proficiency bonus. The creature regains a number of hit points equal to the total rolled. Once you use this trait, you can’t use it again until you finish a long rest.",
      },
      {
        name: "Light Bearer",
        description:
          "You know the Light cantrip. Charisma is your spellcasting ability for it.",
      },
      {
        name: "Celestial Revelation",
        description:
          "When you reach 3rd level, choose one of the revelation options below. Thereafter, you can use a bonus action to unleash the celestial energy within yourself, gaining the benefits of that revelation. Your transformation lasts for 1 minute or until you end it as a bonus action. Once you transform using your revelation below, you can’t use it again until you finish a long rest: ",
        extendedTable: [
          {
            "": {
              headers: ["Revelation", "Description"],
              data: [
                {
                  Revelation: "Necrotic Shroud",
                  Description:
                    "Your eyes briefly become pools of darkness, and ghostly, flightless wings sprout from your back temporarily. Creatures other than your allies within 10 feet of you that can see you must succeed on a Charisma saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or become frightened of you until the end of your next turn. Until the transformation ends, once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus.",
                },
                {
                  Revelation: "Radiant Consumption",
                  Description:
                    "Searing light temporarily radiates from your eyes and mouth. For the duration, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, each creature within 10 feet of you takes radiant damage equal to your proficiency bonus. Until the transformation ends, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus.",
                },
                {
                  Revelation: "Radiant Soul",
                  Description:
                    "Two luminous, spectral wings sprout from your back temporarily. Until the transformation ends, you have a flying speed equal to your walking speed, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus.",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 12,
    name: "Aasimar (VGM)",
    description:
      "Aasimar bear within their souls the light of the heavens. They are descended from humans with a touch of the power of Mount Celestia, the divine realm of many lawful good deities. Aasimar are born to serve as champions of the gods, their births hailed as blessed events. They are a people of otherworldly visages, with luminous features that reveal their celestial heritage.\n\nAn aasimar, except for one who has turned to evil, has a link to an angelic being. That being – usually a deva – provides guidance to the aasimar, though this connection functions only in dreams. As such, the guidance is not a direct command or a simple spoken word. Instead, the aasimar receives visions, prophecies, and feelings.",
    flavorText: "Aasimar bear within their souls the light of the heavens.",
    source: src.volo,
    abilityScoreDescription: "Your Charisma score increases by 2.",
    abilityScores: {
      fixedIncreases: [
        {
          ability: Ability.CHA,
          value: 2,
        },
      ],
    },
    age: "Aasimar mature at the same rate as humans, but they can live up to 160 years.",
    alignment:
      "Imbued with celestial power, most aasimar are good. Outcast aasimar are most often neutral or even evil.",
    size: Size.MEDIUM,
    sizeDescription:
      "Aasimar have the same range of height and weight as humans. Your size is Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    darkvision: 60,
    darkvisionDescription:
      "Blessed with a radiant soul, your vision can easily cut through darkness. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    languageDescription: "You can speak, read, and write Common and Celestial.",
    originLanguages: {
      default: [Language.CELESTIAL, Language.COMMON],
    },
    resistanceTo: [DamageTypes.RADIANT, DamageTypes.NECROTIC],
    creatureType: CreatureType.HUMANOID,
    features: [
      {
        name: "Celestial Resistance",
        description: "You have resistance to necrotic and radiant damage.",
      },
      {
        name: "Healing Hands",
        description:
          "As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you can't use it again until you finish a long rest.",
      },
      {
        name: "Light Bearer",
        description:
          "You know the Light cantrip. Charisma is your spellcasting ability for it.",
      },
    ],
  },
  {
    id: 13,
    name: "Changeling (MMOM)",
    description:
      "With ever-changing appearances, changelings reside in many societies undetected. Each changeling can supernaturally adopt any face they like. For some changelings, a new face is only a disguise. For other changelings, a new face may reveal an aspect of their soul.\n\nThe first changelings in the multiverse appeared in the Feywild, and the wondrous, mutable essence of that plane lingers in changelings today — even in those changelings who have never set foot in the fey realm. Each changeling decides how to use their shape-shifting ability, channeling either the peril or the joy of the Feywild. Sometimes they adopt new forms for the sake of mischief or malice, and other times they don a new identity to right wrongs or delight the downtrodden.\n\nIn their true form, changelings appear faded, their features almost devoid of detail. It is rare to see a changeling in that form, for a typical changeling changes their shape the way others might change clothes. A casual shape — one created on the spur of the moment, with no depth or history — is called a mask. A mask can be used to express a mood or to serve a specific purpose and then might never be used again. However, many changelings develop identities that have more depth, crafting whole personas complete with histories and beliefs. A changeling adventurer might have personas for many situations, including negotiation, investigation, and combat.\n\nPersonas can be shared by multiple changelings; a community might be home to three healer changelings, with whoever is on duty adopting the persona of Andrea, the gentle physician. Personas can even be passed down through a family, allowing a younger changeling to take advantage of contacts established by the persona’s previous users.",
    flavorText:
      "With ever-changing appearances, changelings reside in many societies undetected.",
    source: src.mordenkainenMonsters,
    age: "N/A",
    alignment: "N/A",
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 2,
              options: [1, 2],
            },
          ],
        },
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 3,
              options: [1, 1, 1],
            },
          ],
        },
      ],
    },
    creatureType: CreatureType.FEY,
    size: Size.MEDIUM,
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. The Player’s Handbook offers a list of languages to choose from. The DM is free to modify that list for a campaign.",
    skillProficiencies: {
      choices: [
        {
          options: Object.values(Skill),
          numberOfChoices: 2,
        },
      ],
    },
    features: [
      {
        name: "Shapechanger",
        description:
          "As an action, you can change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height and weight and can change your size between Medium and Small. You can make yourself appear as a member of another race, though none of your game statistics change. You can’t duplicate the appearance of an individual you’ve never seen, and you must adopt a form that has the same basic arrangement of limbs that you have. Your clothing and equipment aren’t changed by this trait.\n\nYou stay in the new form until you use an action to revert to your true form or until you die.",
      },
    ],
  },
  {
    id: 14,
    name: "Changeling (Eberron)",
    description:
      "A changeling can shift its face and form with a thought. Many changelings use this gift as a form of artistic and emotional expression, but it’s an invaluable tool for grifters, spies, and others who wish to deceive. This leads many people to treat known changelings with fear and suspicion.",
    flavorText: "A changeling can shift its face and form with a thought.",
    source: src.eberron,
    abilityScoreDescription:
      "Your Charisma score increases by 2. In addition, one other ability score of your choice increases by 1.",
    abilityScores: {
      fixedIncreases: [{ ability: Ability.CHA, value: 2 }],
      choices: [
        {
          abilities: Object.values(Ability).filter((a) => a !== Ability.CHA),
          options: [
            {
              numberOfChoices: 1,
              options: [1],
            },
          ],
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
    age: "Changelings mature slightly faster than humans but share a similar lifespan — typically a century or less. While a changeling can transform to conceal their age, the effects of aging affect them similarly to humans.",
    alignment:
      "Changelings tend toward pragmatic neutrality, and few changelings embrace evil.",
    size: Size.MEDIUM,
    sizeDescription:
      "In their natural forms, changelings average between 5 to 6 feet in height, with a slender build. Your size is Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    languageDescription:
      "You can speak, read, and write Common and two other languages of your choice.",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          numberOfChoices: 2,
          options: languages.filter((l) => l !== Language.COMMON),
        },
      ],
    },
    features: [
      {
        name: "Shapechanger",
        description:
          "As an action, you can change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height and weight, but not so much that your size changes. You can make yourself appear as a member of another race, though none of your game statistics change. You can't duplicate the appearance of a creature you've never seen, and you must adopt a form that has the same basic arrangement of limbs that you have. Your clothing and equipment aren't changed by this trait. ",
      },
      {
        name: "Changeling Instincts",
        description:
          "You gain proficiency in two of the following skills of your choice: Deception, Insight, Intimidation, and Persuasion.",
      },
    ],
  },
  {
    id: 15,
    name: "Deep Gnome (MMOM)",
    description:
      "Deep gnomes, or svirfneblin, are natives of the Underdark and are suffused with that subterranean realm’s magic. They can supernaturally camouflage themselves, and their svirfneblin magic renders them difficult to locate. These abilities have enabled them to survive for generations among the perils of the Underdark.",
    flavorText: "Deep gnomes, or svirfneblin, are natives of the Underdark.",
    age: "Like other gnomes, deep gnomes can live for centuries, up to 500 years.",
    alignment: "N/A",
    source: src.mordenkainenMonsters,
    creatureType: CreatureType.HUMANOID,
    size: Size.SMALL,
    sizeDescription: "You are Small.",
    speed: 30,
    speedDescription: "Your walking speed is 30 feet.",
    darkvision: 120,
    darkvisionDescription:
      "You can see in dim light within 120 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",

    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 2,
              options: [1, 2],
            },
          ],
        },
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 3,
              options: [1, 1, 1],
            },
          ],
        },
      ],
    },
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. The Player’s Handbook offers a list of languages to choose from. The DM is free to modify that list for a campaign.",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    features: [
      {
        name: "Gift of the Svirfneblin",
        description:
          "Starting at 3rd level, you can cast the Disguise Self spell with this trait. Starting at 5th level, you can also cast the Nondetection spell with it, without requiring a material component. Once you cast either of these spells with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. \n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
      },
      {
        name: "Gnomish Magic Resistance",
        description:
          " You have advantage on Intelligence, Wisdom, and Charisma saving throws against spells.",
      },
      {
        name: "Svirfneblin Camouflage",
        description:
          "When you make a Dexterity (Stealth) check, you can make the check with advantage. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
      },
    ],
  },
  {
    id: 16,
    name: "Deep Gnome (EEPC)",
    description:
      "Forest gnomes and rock gnomes are the gnomes most commonly encountered in the lands of the surface world. There is another subrace of gnomes rarely seen by any surface-dweller: deep gnomes, also known as svirfneblin. Guarded, and suspicious of outsiders, svirfneblin are cunning and taciturn, but can be just as kind-hearted, loyal, and compassionate as their surface cousins.",
    flavorText: "Deep gnomes, or svirfneblin, are natives of the Underdark.",
    source: src.eepc,
    creatureType: CreatureType.HUMANOID,
    size: Size.SMALL,
    sizeDescription:
      "Gnomes are between 3 and 4 feet tall and weigh around 40 pounds. Your size is Small.",
    speed: 25,
    speedDescription: "Your base walking speed is 25 feet.",
    age: "Gnomes mature at the same rate as humans, and most are expected to settle into adult life around the age of 40. They can live to 350 years on average, but it's not too uncommon for them to reach 500 years of age.",
    alignment: "N/A",
    abilityScoreDescription:
      "Your Dexterity score increases by 1, and your Intelligence score increases by 2.",
    abilityScores: {
      fixedIncreases: [
        {
          ability: Ability.DEX,
          value: 1,
        },
        {
          ability: Ability.INT,
          value: 2,
        },
      ],
    },
    darkvision: 120,
    darkvisionDescription: "Your darkvision has a radius of 120 feet.",
    languageDescription: "You can read, speak, and write Common and Gnomish.",
    originLanguages: {
      default: [Language.GNOMISH, Language.COMMON],
    },
    features: [
      {
        name: "Superior Darkvision",
        description: "Your darkvision has a radius of 120 feet.",
      },
      {
        name: "Stone Camouflage",
        description:
          "You have advantage on Dexterity (Stealth) checks to hide in rocky terrain.",
      },
      {
        name: "Gnome Cunning",
        description:
          "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
      },
    ],
  },
  {
    id: 17,
    name: "Duergar (MMOM)",
    description:
      "Duergar are dwarves whose ancestors were transformed by centuries living in the deepest places of the Underdark. That chthonic realm is saturated with strange magical energy, and over generations, early duergar absorbed traces of it. They were further altered when mind flayers and other Aberrations invaded and performed horrific experiments on them. Fueled by Underdark magic, those experiments left early duergar with psionic powers, which have been passed down to their descendants. In time, they liberated themselves from their aberrant tyrants and forged a new life for themselves in the Underdark and beyond.",
    flavorText:
      "Duergar are dwarves whose ancestors were transformed by centuries living in the deepest places of the Underdark.",
    age: "Like other dwarves, duergar typically have a life span of 350 years.",
    alignment: "N/A",
    source: src.mordenkainenMonsters,
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    sizeDescription: "You are Medium.",
    speed: 30,
    speedDescription: "Your walking speed is 30 feet.",
    darkvision: 120,
    darkvisionDescription:
      "You can see in dim light within 120 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 2,
              options: [1, 2],
            },
          ],
        },
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 3,
              options: [1, 1, 1],
            },
          ],
        },
      ],
    },
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. The Player’s Handbook offers a list of languages to choose from. The DM is free to modify that list for a campaign.",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    features: [
      {
        name: "Duergar Magic",
        description:
          "Starting at 3rd level, you can cast the Enlarge/Reduce spell with this trait, without requiring a material component. Starting at 5th level, you can also cast the Invisibility spell with it, without requiring a material component. Once you cast either of these spells with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. \n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
      },
      {
        name: "Dwarven Resilience",
        description:
          "You have advantage on saving throws you make to avoid or end the poisoned condition on yourself. You also have resistance to poison damage.",
      },
      {
        name: "Psionic Fortitude",
        description:
          "You have advantage on saving throws you make to avoid or end the charmed or stunned condition on yourself.",
      },
    ],
  },
  {
    id: 18,
    name: "Duergar (SCAG)",
    description:
      "The gray dwarves, or duergar, live deep in the Underdark. After delving deeper than any other dwarves, they were enslaved by mind flayers for eons. Although they eventually won their freedom, these grim, ashen-skinned dwarves now take slaves of their own and are as tyrannical as their former masters.\n\nPhysically similar to other dwarves in some ways, duergar are wiry and lean, with black eyes and bald heads, with the males growing long, unkempt, gray beards.\n\nDuergar value toil above all else. Showing emotions other than grim determination or wrath is frowned on in their culture, but they can sometimes seem joyful when at work. They have the typical dwarven appreciation for order, tradition, and impeccable craftsmanship, but their goods are purely utilitarian, disdaining aesthetic or artistic value.",
    flavorText: "The gray dwarves, or duergar, live deep in the Underdark.",
    source: src.sword,
    abilityScoreDescription:
      "Your Constitution score increases by 2, and your Strength score increases by 1.",
    abilityScores: {
      fixedIncreases: [
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
    alignment: "N/A",
    age: "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
    size: Size.MEDIUM,
    sizeDescription:
      "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
    speed: 25,
    speedDescription:
      "Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.",
    darkvision: 120,
    darkvisionDescription:
      "You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    creatureType: CreatureType.HUMANOID,
    languageDescription:
      "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.",
    originLanguages: {
      default: [Language.DWARVISH, Language.COMMON],
    },
    toolProficiencies: {
      choices: [
        {
          options: [
            toolIds.smithTools,
            toolIds.brewerSupplies,
            toolIds.masonTools,
          ],
          numberOfChoices: 1,
        },
      ],
    },

    features: [
      {
        name: "Dwarven Resilience",
        description:
          "You have advantage on saving throws against poison, and you have resistance against poison damage.",
      },
      {
        name: "Duergar Resilience",
        description:
          "You have advantage on saving throws against illusions and against being charmed or paralyzed.",
      },
      {
        name: "Dwarven Combat Training",
        description:
          "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.",
      },
      {
        name: "Tool Proficiency",
        description:
          "You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools.",
      },
      {
        name: "Duergar Magic",
        description:
          "When you reach 3rd level, you can cast the Enlarge/Reduce spell on yourself once with this trait, using only the spell's enlarge option. When you reach 5th level, you can cast the Invisibility spell on yourself once with this trait. You don't need material components for either spell, and you can't cast them while you're in direct sunlight, although sunlight has no effect on them once cast. You regain the ability to cast these spells with this trait when you finish a long rest.",
      },
      {
        name: "Stonecunning",
        description:
          "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
      },
      {
        name: "Superior Darkvision",
        description:
          "You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      },
      {
        name: "Sunlight Sensitivity",
        description:
          "You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.",
      },
    ],
  },
  {
    id: 19,
    name: "Eladrin (MMOM)",
    description:
      "Eladrin are elves of the Feywild, a realm of perilous beauty and boundless magic. Using that magic, eladrin can step from one place to another in the blink of an eye, and each eladrin resonates with emotions captured in the Feywild in the form of seasons — affinities that affect the eladrin’s mood and appearance. An eladrin’s season can change, though some remain in one season forever. ",
    flavorText:
      "Eladrin are elves of the Feywild, a realm of perilous beauty and boundless magic.",
    age: "Like other elves, eladrin can live to be over 750 years old.",
    source: src.mordenkainenMonsters,
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 2,
              options: [1, 2],
            },
          ],
        },
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 3,
              options: [1, 1, 1],
            },
          ],
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    speed: 30,
    speedDescription: "Your walking speed is 30 feet.",
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. The Player’s Handbook offers a list of languages to choose from. The DM is free to modify that list for a campaign.",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    alignment: "N/A",
    skillProficiencies: {
      default: [Skill.PERCEPTION],
    },
    features: [
      {
        name: "Fey Ancestry",
        description:
          "You have advantage on saving throws you make to avoid or end the charmed condition on yourself.",
      },
      {
        name: "Fey Step",
        description:
          "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n\n When you reach 3rd level, your Fey Step gains an additional effect based on your season; if the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Intelligence, Wisdom, or Charisma modifier (choose when you select this race): ",
        extendedTable: [
          {
            "": {
              headers: ["Season", "Effect"],
              data: [
                {
                  Season: "Autumn",
                  Effect:
                    "Immediately after you use your Fey Step, up to two creatures of your choice that you can see within 10 feet of you must succeed on a Wisdom saving throw or be charmed by you for 1 minute, or until you or your companions deal any damage to the creatures.",
                },
                {
                  Season: "Winter",
                  Effect:
                    "When you use your Fey Step, one creature of your choice that you can see within 5 feet of you before you teleport must succeed on a Wisdom saving throw or be frightened of you until the end of your next turn.",
                },
                {
                  Season: "Spring",
                  Effect:
                    "When you use your Fey Step, you can touch one willing creature within 5 feet of you. That creature then teleports instead of you, appearing in an unoccupied space of your choice that you can see within 30 feet of you.",
                },
                {
                  Season: "Summer",
                  Effect:
                    "Immediately after you use your Fey Step, each creature of your choice that you can see within 5 feet of you takes fire damage equal to your proficiency bonus.",
                },
              ],
            },
          },
        ],
      },
      {
        name: "Keen Senses",
        description: "You have proficiency in the Perception skill.",
      },
      {
        name: "Trance",
        description:
          "You don’t need to sleep, and magic can’t put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness. \n\nWhenever you finish this trance, you can change your season, and you can gain two proficiencies that you don’t have, each one with a weapon or a tool of your choice selected from the Player’s Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest. Choose your season or roll on the Eladrin Seasons table to determine it randomly.",
        extendedTable: [
          {
            "Eladrin Seasons": {
              headers: ["d4", "Season"],
              data: [
                {
                  d4: "1",
                  Season:
                    "**Autumn:** peace and goodwill, when summer's harvest is shared with all",
                },
                {
                  d4: "2",
                  Season:
                    "**Winter:** contemplation and dolor, when the vibrant energy of the world slumbers",
                },
                {
                  d4: "3",
                  Season:
                    "**Spring:** cheerfulness and celebration, marked by merriment and hope as winter's sorrow passes",
                },
                {
                  d4: "4",
                  Season:
                    "**Summer:** boldness and aggression, a time of unfettered energy and calls to action",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 20,
    name: "Eladrin (MToF)",
    description:
      "Eladrin are elves native to the Feywild, a realm of beauty, unpredictable emotion, and boundless magic. An eladrin is associated with one of the four seasons and has coloration reminiscent of that season, which can also affect the eladrin's mood:\n\n- Autumn is the season of peace and goodwill, when summer's harvest is shared with all.\n- Winter is the season of contemplation and dolor, when the vibrant energy of the world slumbers.\n - Spring is the season of cheerfulness and celebration, marked by merriment as winter's sorrow passes.\n- Summer is the season of boldness and aggression, a time of unfettered energy.\n\nSome eladrin remain associated with a particular season for their entire lives, whereas other eladrin transform, adopting characteristics of a new season.\n\nWhen finishing a long rest, any eladrin can change their season. An eladrin might choose the season that is present in the world or perhaps the season that most closely matches the eladrin's current emotional state. For example, an eladrin might shift to autumn if filled with contentment, another eladrin could change to winter if plunged into sorrow, still another might be bursting with joy and become an eladrin of spring, and fury might cause an eladrin to change to summer.",
    flavorText:
      "Eladrin are elves native to the Feywild, a realm of beauty, unpredictable emotion, and boundless magic.",
    source: src.mordenkainenFoes,
    abilityScoreDescription:
      "Your Dexterity score increases by 2, and your Charisma score increases by 1.",
    abilityScores: {
      fixedIncreases: [
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
    age: "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
    size: Size.MEDIUM,
    sizeDescription:
      "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    darkvision: 60,
    darkvisionDescription:
      "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    languageDescription: "You can speak, read, and write Common and Elvish.",
    originLanguages: {
      default: [Language.ELVISH, Language.COMMON],
    },
    skillProficiencies: {
      default: [Skill.PERCEPTION],
    },
    creatureType: CreatureType.HUMANOID,
    alignment: "N/A",
    features: [
      {
        name: "Fey Ancestry",
        description:
          "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
      },
      {
        name: "Trance",
        description: `Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is "trance." While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.`,
      },
      {
        name: "Keen Senses",
        description: "You have proficiency in the Perception skill.",
      },
      {
        name: "Fey Step",
        description:
          "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a short or long rest. When you reach 3rd level, your Fey Step gains an additional effect based on your season; if the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Charisma modifier. The effects are as follows: ",
        extendedTable: [
          {
            "": {
              headers: ["Season", "Effect"],
              data: [
                {
                  Season: "Autumn",
                  Effect:
                    " Immediately after you use your Fey Step, up to two creatures of your choice that you can see within 10 feet of you must succeed on a Wisdom saving throw or be charmed by you for 1 minute, or until you or your companions deal any damage to it.",
                },
                {
                  Season: "Winter",
                  Effect:
                    "When you use your Fey Step, one creature of your choice that you can see within 5 feet of you before you teleport must succeed on a Wisdom saving throw or be frightened of you until the end of your next turn.",
                },
                {
                  Season: "Spring",
                  Effect:
                    "When you use your Fey Step, you can touch one willing creature within 5 feet of you. That creature then teleports instead of you, appearing in an unoccupied space of your choice that you can see within 30 feet of you.",
                },
                {
                  Season: "Summer",
                  Effect:
                    "Immediately after you use your Fey Step, each creature of your choice that you can see within 5 feet of you takes fire damage equal to your Charisma modifier (minimum of 1 damage).",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 21,
    name: "Fairy (MMOM)",
    description:
      "The Feywild is home to many fantastic peoples, including fairies. Fairies are a wee folk, but not nearly as much so as their pixie and sprite friends. The first fairies spoke Elvish, Goblin, or Sylvan, and encounters with human visitors prompted many of them to learn Common as well.",
    flavorText:
      "The Feywild is home to many fantastic peoples, including fairies.",
    source: src.mordenkainenMonsters,
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 2,
              options: [1, 2],
            },
          ],
        },
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 3,
              options: [1, 1, 1],
            },
          ],
        },
      ],
    },
    creatureType: CreatureType.FEY,
    size: Size.SMALL,
    sizeDescription: "You are Small.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    flightDescription:
      "Because of your wings, you have a flying speed equal to your walking speed. You can’t use this flying speed if you’re wearing medium or heavy armor.",
    flightSpeed: 30,
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. The Player’s Handbook offers a list of languages to choose from. The DM is free to modify that list for a campaign.",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    age: "N/A",
    alignment: "N/A",
    features: [
      {
        name: "Fey Characteristics",
        description:
          "Infused with the magic of the Feywild, most fairies look like Small elves with insectile wings, but each fairy has a special physical characteristic that sets the fairy apart. For your fairy, roll on the Fey Characteristics table or choose an option from it. You’re also free to come up with your own characteristic if none of the suggestions below fit your character.",
        extendedTable: [
          {
            "": {
              headers: ["d8", "Characteristic"],
              data: [
                {
                  d8: "1",
                  Characteristic: "Your wings are like those of a bird.",
                },
                {
                  d8: "2",
                  Characteristic: "You have shimmering, multicolored skin.",
                },
                {
                  d8: "3",
                  Characteristic: "You have exceptionally large ears.",
                },
                {
                  d8: "4",
                  Characteristic: "A glittering mist constantly surrounds you.",
                },
                {
                  d8: "5",
                  Characteristic:
                    "You have a small spectral horn on your forehead, like a little unicorn horn.",
                },
                {
                  d8: "6",
                  Characteristic: "Your legs are insectile.",
                },
                {
                  d8: "7",
                  Characteristic: "You smell like fresh brownies.",
                },
                {
                  d8: "8",
                  Characteristic: "A noticeable, harmless chill surrounds you.",
                },
              ],
            },
          },
        ],
      },
      {
        name: "Fairy Magic",
        description:
          "You know the Druidcraft cantrip. \n\nStarting at 3rd level, you can cast the Faerie Fire spell with this trait. Starting at 5th level, you can also cast the Enlarge/Reduce spell with this trait. Once you cast Faerie Fire or Enlarge/Reduce with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
      },
    ],
  },
  {
    id: 22,
    name: "Fairy (TWBtW)",
    description:
      "The Feywild is home to many fantastic peoples, including fairies. Fairies are a wee folk, but not nearly as much so as their pixie and sprite friends. The first fairies spoke Elvish, Goblin, or Sylvan, and encounters with human visitors prompted many of them to learn Common as well.",
    flavorText:
      "The Feywild is home to many fantastic peoples, including fairies.",
    source: src.witchlight,
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 2,
              options: [1, 2],
            },
          ],
        },
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 3,
              options: [1, 1, 1],
            },
          ],
        },
      ],
    },
    creatureType: CreatureType.FEY,
    size: Size.SMALL,
    sizeDescription: "You are Small.",
    speed: 30,
    age: "Fairies have a lifespan of about a century.",
    alignment: "N/A",
    speedDescription: "Your base walking speed is 30 feet.",
    flightDescription:
      "Because of your wings, you have a flying speed equal to your walking speed. You can’t use this flying speed if you’re wearing medium or heavy armor.",
    flightSpeed: 30,
    languageDescription:
      "You can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character.",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    features: [
      {
        name: "Fey Characteristics",
        description:
          "Infused with the magic of the Feywild, most fairies look like Small elves with insectile wings, but each fairy has a special physical characteristic that sets the fairy apart. For your fairy, roll on the Fey Characteristics table or choose an option from it. You're also free to come up with your own characteristic if none of the suggestions below fit your character.",
        extendedTable: [
          {
            "": {
              headers: ["d8", "Characteristic"],
              data: [
                {
                  d8: "1",
                  Characteristic: "Your wings are like those of a bird.",
                },
                {
                  d8: "2",
                  Characteristic: "You have shimmering, multicolored skin.",
                },
                {
                  d8: "3",
                  Characteristic: "You have exceptionally large ears.",
                },
                {
                  d8: "4",
                  Characteristic: "A glittering mist constantly surrounds you.",
                },
                {
                  d8: "5",
                  Characteristic:
                    "You have a small spectral horn on your forehead, like a little unicorn horn.",
                },
                {
                  d8: "6",
                  Characteristic: "Your legs are insectile.",
                },
                {
                  d8: "7",
                  Characteristic: "You smell like fresh brownies.",
                },
                {
                  d8: "8",
                  Characteristic: "A noticeable, harmless chill surrounds you.",
                },
              ],
            },
          },
        ],
      },
      {
        name: "Fairy Magic",
        description:
          "You know the Druidcraft cantrip. Starting at 3rd level, you can cast the Faerie Fire spell with this trait. Starting at 5th level, you can also cast the Enlarge/Reduce spell with this trait. Once you cast Faerie Fire or Enlarge/Reduce with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level. Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
      },
    ],
  },
  {
    id: 23,
    name: "Firbolg (MMOM)",
    description:
      "Distant cousins of giants, the first firbolgs wandered the primeval forests of the multiverse, and the magic of those forests entwined itself with the firbolgs’ souls. Centuries later, that magic still thrums inside a firbolg, even one who has never lived under the boughs of a great forest.\n\nA firbolg’s magic is an obscuring sort, which allowed their ancestors to pass through a forest without disturbing it. So deep is the connection between a firbolg and the wild places of the world that they can communicate with flora and fauna.",
    age: "Firbolgs can live up to 500 years.",
    alignment: "N/A",
    flavorText:
      "Distant cousins of giants, the first firbolgs wandered the primeval forests of the multiverse.",
    source: src.mordenkainenMonsters,
    creatureType: CreatureType.HUMANOID,
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 2,
              options: [1, 2],
            },
          ],
        },
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 3,
              options: [1, 1, 1],
            },
          ],
        },
      ],
    },
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    size: Size.MEDIUM,
    sizeDescription: "You are Medium.",
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. The Player’s Handbook offers a list of languages to choose from. The DM is free to modify that list for a campaign.",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    features: [
      {
        name: "Firbolg Magic",
        description:
          "You can cast the Detect Magic and Disguise Self spells with this trait. When you use this version of Disguise Self, you can seem up to 3 feet shorter or taller. Once you cast either of these spells with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have.\n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
      },
      {
        name: "Hidden Step",
        description:
          "As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
      },
      {
        name: "Powerful Build",
        description:
          "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
      },
      {
        name: "Speech of Beast and Leaf",
        description:
          "You have the ability to communicate in a limited manner with Beasts, Plants, and vegetation. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them.",
      },
    ],
  },
  {
    id: 24,
    name: "Firbolg (VGtM)",
    description:
      "Firbolgs are fey-oriented half-giants. Their tribes cloister in remote forest strongholds, preferring to spend their days in quiet harmony with the woods. When provoked, firbolgs demonstrate formidable skills with weapons and druidic magic.",
    flavorText: "Firbolgs are fey-oriented half-giants.",
    source: src.volo,
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    alignment:
      "As people who follow the rhythm of nature and see themselves as its caretakers, firbolg are typically neutral good. Evil firbolg are rare and are usually the sworn enemies of the rest of their kind.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    sizeDescription:
      "Firbolgs are between 7 and 8 feet tall and weigh between 240 and 300 pounds. Your size is Medium.",
    languageDescription:
      "You can speak, read, and write Common, Elvish, and Giant.",
    originLanguages: {
      default: [Language.COMMON, Language.ELVISH, Language.GIANT],
    },
    abilityScoreDescription:
      "Your Wisdom score increases by 2, and your Strength score increases by 1.",
    abilityScores: {
      fixedIncreases: [
        {
          ability: Ability.WIS,
          value: 2,
        },
        {
          ability: Ability.STR,
          value: 1,
        },
      ],
    },
    age: "As humanoids related to the fey, firbolg have long lifespans. A firbolg reaches adulthood around 30, and the oldest of them can live for 500 years.",
    features: [
      {
        name: "Firbolg Magic",
        description:
          "You can cast Detect Magic and Disguise Self with this trait, using Wisdom as your spellcasting ability for them. Once you cast either spell, you can't cast it again with this trait until you finish a short or long rest. When you use this version of disguise self, you can seem up to 3 feet shorter than normal, allowing you to more easily blend in with humans and elves.",
      },
      {
        name: "Hidden Step",
        description:
          "As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. Once you use this trait, you can't use it again until you finish a short or long rest.",
      },
      {
        name: "Powerful Build",
        description:
          "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
      },
      {
        name: "Speech of Beast and Leaf",
        description:
          "You have the ability to communicate in a limited manner with beasts and plants. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them.",
      },
    ],
  },
  {
    id: 25,
    name: "Air Genasi (MMOM)",
    description:
      "Tracing their ancestry to the genies of the Elemental Planes, each genasi can tap into the power of one of the elements. Air, earth, fire, and water — these are the four pillars of the Material Plane and the four types of genasi. Some genasi are direct descendants of a genie, while others were born to non-genasi parents who lived near a place suffused by a genie’s magic.\n\nAir genasi are descended from djinn, the genies of the Elemental Plane of Air. Embodying many of the airy traits of their otherworldly ancestors, air genasi can draw upon their connection to the winds.\n\nAir genasi’s skin tones include many shades of blue, along with the full range of human skin tones, with bluish or ashen casts. Sometimes their skin is marked by lines that seem like cracks with bluish-white energy spilling out. An air genasi’s hair might blow in a phantom wind or be made entirely of clouds or vapor.",
    flavorText:
      "Air genasi are descended from djinn, the genies of the Elemental Plane of Air.",
    source: src.mordenkainenMonsters,
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 2,
              options: [1, 2],
            },
          ],
        },
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 3,
              options: [1, 1, 1],
            },
          ],
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    speed: 35,
    speedDescription: "Your base walking speed is 35 feet.",
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. The Player’s Handbook offers a list of languages to choose from. The DM is free to modify that list for a campaign.",
    resistanceTo: [DamageTypes.LIGHTNING],
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    age: "A typical genasi has a life span of 120 years",
    alignment: "N/A",
    features: [
      {
        name: "Unending Breath",
        description:
          "You can hold your breath indefinitely while you’re not incapacitated.",
      },
      {
        name: "Lightning Resistance",
        description: "You have resistance to lightning damage.",
      },
      {
        name: "Mingle with the Wind",
        description:
          "You know the Shocking Grasp cantrip. Starting at 3rd level, you can cast the Feather Fall spell with this trait, without requiring a material component. Starting at 5th level, you can also cast the Levitate spell with this trait, without requiring a material component. Once you cast Feather Fall or Levitate with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level. \n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
      },
    ],
  },
  {
    id: 26,
    name: "Air Genasi (EEPC)",
    description:
      "Those who think of other planes at all consider them remote, distant realms, but planar influence can be felt throughout the world. It sometimes manifests in beings who, through an accident of birth, carry the power of the planes in their blood. The genasi are one such people, the offspring of genies and mortals.\n\nAs an air genasi, you are descended from the djinn. As changeable as the weather, your moods shift from calm to wild and violent with little warning, but these storms rarely last long.\n\nAir genasi typically have light blue skin, hair, and eyes. A faint but constant breeze accompanies them, tousling the hair and stirring the clothing. Some air genasi speak with breathy voices, marked by a faint echo. A few display odd patterns in their flesh or grow crystals from their scalps.",
    flavorText: "As an air genasi, you are descended from the djinn.",
    abilityScoreDescription:
      "Your Constitution score increases by 2, and Dexterity score increases by 1.",
    abilityScores: {
      fixedIncreases: [
        {
          ability: Ability.CON,
          value: 2,
        },
        {
          ability: Ability.DEX,
          value: 1,
        },
      ],
    },
    source: src.eepc,
    age: "Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.",
    alignment:
      "Independent and self-reliant, genasi tend toward a neutral alignment.",
    size: Size.MEDIUM,
    sizeDescription:
      "Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall. Your size is Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    languageDescription:
      "You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.",
    resistanceTo: [DamageTypes.LIGHTNING],
    originLanguages: {
      default: [Language.COMMON, Language.PRIMORDIAL],
    },
    creatureType: CreatureType.HUMANOID,
    features: [
      {
        name: "Unending Breath",
        description:
          "You can hold your breath indefinitely while you’re not incapacitated.",
      },
      {
        name: "Mingle with the Wind",
        description:
          "You can cast the Levitate spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell.",
      },
      {
        name: "Lightning Resistance",
        description: "You have resistance to lightning damage.",
      },
    ],
  },
  {
    id: 27,
    name: "Earth Genasi (MMOM)",
    description:
      "Tracing their ancestry to the genies of the Elemental Planes, each genasi can tap into the power of one of the elements. Air, earth, fire, and water — these are the four pillars of the Material Plane and the four types of genasi. Some genasi are direct descendants of a genie, while others were born to non-genasi parents who lived near a place suffused by a genie’s magic.\n\nTracing their ancestry to dao, the genies of the Elemental Plane of Earth, earth genasi inherit dao’s steadfast strength and control over earth.\n\nAn earth genasi’s skin can be the colors of stone and earth or a human skin tone with glittering sparkles like gem dust. Some earth genasi have lines marking their skin like cracks, either showing glimmering gemlike veins or a dim, yellowish glow. Earth genasi hair can appear carved of stone or crystal or resemble strands of spun metal.",
    flavorText:
      "Earth genasi inherit dao’s steadfast strength and control over earth.",
    age: "A typical genasi has a life span of 120 years",
    alignment: "N/A",
    source: src.mordenkainenMonsters,
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 2,
              options: [1, 2],
            },
          ],
        },
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 3,
              options: [1, 1, 1],
            },
          ],
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. The Player’s Handbook offers a list of languages to choose from. The DM is free to modify that list for a campaign.",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
  },
  {
    id: 28,
    name: "Earth Genasi (EEPC)",
    description:
      "Those who think of other planes at all consider them remote, distant realms, but planar influence can be felt throughout the world. It sometimes manifests in beings who, through an accident of birth, carry the power of the planes in their blood. The genasi are one such people, the offspring of genies and mortals.\n\nAs an earth genasi, you are descended from the cruel and greedy dao, though you aren’t necessarily evil. You have inherited some measure of control over earth, reveling in superior strength and solid power. You tend to avoid rash decisions, pausing long enough to consider your options before taking action.\n\nElemental earth manifests differently from one individual to the next. Some earth genasi always have bits of dust falling from their bodies and mud clinging to their clothes, never getting clean no matter how often they bathe. Others are as shiny and polished as gemstones, with skin tones of deep brown or black, eyes sparkling like agates. Earth genasi can also have smooth metallic flesh, dull iron skin spotted with rust, a pebbled and rough hide, or even a coating of tiny embedded crystals. The most arresting have fissures in their flesh, from which faint light shines.",
    age: "Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.",
    alignment:
      "Independent and self-reliant, genasi tend toward a neutral alignment.",
    size: Size.MEDIUM,
    sizeDescription:
      "Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall. Your size is Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    creatureType: CreatureType.HUMANOID,
    flavorText:
      "As an earth genasi, you are descended from the cruel and greedy dao.",
    source: src.eepc,
    abilityScoreDescription:
      "Your Strength score increases by 2, and your Constitution score increases by 1.",
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
    languageDescription:
      "You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.",
    originLanguages: {
      default: [Language.COMMON, Language.PRIMORDIAL],
    },
    features: [
      {
        name: "Earth Walk",
        description:
          "You can move across difficult terrain made of earth or stone without expending extra movement.",
      },
      {
        name: "Merge with Stone",
        description:
          "You can cast the Pass without Trace spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell.",
      },
    ],
  },
  {
    id: 29,
    name: "Fire Genasi (MMOM)",
    description:
      "Tracing their ancestry to the genies of the Elemental Planes, each genasi can tap into the power of one of the elements. Air, earth, fire, and water — these are the four pillars of the Material Plane and the four types of genasi. Some genasi are direct descendants of a genie, while others were born to non-genasi parents who lived near a place suffused by a genie’s magic.\n\nDescended from efreet, the genies of the Elemental Plane of Fire, fire genasi channel the flamboyant and often destructive nature of flame. They show their heritage in their skin tones, which can range from deep charcoal to shades of red and orange. Some bear skin tones common to humanity but with fiery marks, such as slowly swirling lights under their skin that resemble embers or glowing red lines tracing over their bodies like cracks. Fire genasi hair can resemble threads of fire or sooty smoke.",
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 2,
              options: [1, 2],
            },
          ],
        },
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 3,
              options: [1, 1, 1],
            },
          ],
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
    resistanceTo: [DamageTypes.FIRE],
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. The Player’s Handbook offers a list of languages to choose from. The DM is free to modify that list for a campaign.",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    source: src.mordenkainenMonsters,
    flavorText:
      "Descended from efreet, the genies of the Elemental Plane of Fire.",
    age: "A typical genasi has a life span of 120 years",
    alignment: "N/A",
    features: [
      {
        name: "Reach to the Blaze",
        description:
          "You know the Produce Flame cantrip. Starting at 3rd level, you can cast the Burning Hands spell with this trait. Starting at 5th level, you can also cast the Flame Blade spell with this trait, without requiring a material component. Once you cast Burning Hands or Flame Blade with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
      },
      {
        name: "Fire Resistance",
        description: "You have resistance to fire damage.",
      },
    ],
  },
  {
    id: 30,
    name: "Fire Genasi (EEPC)",
    description:
      "Those who think of other planes at all consider them remote, distant realms, but planar influence can be felt throughout the world. It sometimes manifests in beings who, through an accident of birth, carry the power of the planes in their blood. The genasi are one such people, the offspring of genies and mortals.\n\nAs a fire genasi, you have inherited the volatile mood and keen mind of the efreet. You tend toward impatience and making snap judgments. Rather than hide your distinctive appearance, you exult in it.\n\nNearly all fire genasi are feverishly hot as if burning inside, an impression reinforced by flaming red, coal- black, or ash-gray skin tones. The more human-looking have fiery red hair that writhes under extreme emotion, while more exotic specimens sport actual flames dancing on their heads. Fire genasi voices might sound like crackling flames, and their eyes flare when angered. Some are accompanied by the faint scent of brimstone.",
    flavorText:
      "As a fire genasi, you have inherited the volatile mood of the efreet.",
    source: src.eepc,
    abilityScoreDescription:
      "Your Intelligence score increases by 1, and your Constitution score increases by 2.",
    abilityScores: {
      fixedIncreases: [
        {
          ability: Ability.INT,
          value: 1,
        },
        {
          ability: Ability.CON,
          value: 2,
        },
      ],
    },
    resistanceTo: [DamageTypes.FIRE],
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    alignment:
      "Independent and self-reliant, genasi tend toward a neutral alignment.",
    age: "Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.",
    sizeDescription:
      "Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall. Your size is Medium.",
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. Your ties to the Elemental Plane of Fire make your darkvision unusual: everything you see in darkness is in a shade of red.",
    languageDescription:
      "You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.",
    originLanguages: {
      default: [Language.COMMON, Language.PRIMORDIAL],
    },
    features: [
      {
        name: "Fire Resistance",
        description: "You have resistance to fire damage.",
      },
      {
        name: "Reach to the Blaze",
        description:
          "You know the Produce Flame cantrip. Once you reach 3rd level, you can cast the Burning Hands spell once with this trait as a 1st-level spell, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells.",
      },
      {
        name: "Languages",
        description:
          "You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.",
      },
    ],
  },
  {
    id: 31,
    name: "Water Genasi (MMOM)",
    description:
      "Tracing their ancestry to the genies of the Elemental Planes, each genasi can tap into the power of one of the elements. Air, earth, fire, and water — these are the four pillars of the Material Plane and the four types of genasi. Some genasi are direct descendants of a genie, while others were born to non-genasi parents who lived near a place suffused by a genie’s magic.\n\nWater genasi descend from marids, aquatic genies from the Elemental Plane of Water. Water genasi are perfectly suited to life underwater and carry the power of the waves inside themselves.\n\nTheir skin is often shades of blue or green, sometimes a blend of the two. If they have a human skin tone, there is a glistening texture that catches the light, like water droplets or nearly invisible fish scales. Their hair can resemble seaweed, waving as if in a current, or it can even be like water itself.",
    flavorText: "Water genasi descend from marids, aquatic genies.",
    source: src.mordenkainenMonsters,
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 2,
              options: [1, 2],
            },
          ],
        },
        {
          abilities: Object.values(Ability),
          options: [
            {
              numberOfChoices: 3,
              options: [1, 1, 1],
            },
          ],
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    swimSpeed: 30,
    swimDescription: "You have a swimming speed equal to your walking speed.",
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
    resistanceTo: [DamageTypes.ACID],
    sizeDescription:
      "You are Medium or Small. You choose the size when you select this race.",
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. The Player’s Handbook offers a list of languages to choose from. The DM is free to modify that list for a campaign.",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    age: "A typical genasi has a life span of 120 years",
    alignment: "N/A",
    features: [
      {
        name: "Amphibious",
        description: "You can breathe air and water.",
      },
      {
        name: "Acid Resistance",
        description: "You have resistance to acid damage.",
      },
      {
        name: "Call to the Wave",
        description:
          "You know the Acid Splash cantrip. Starting at 3rd level, you can cast the Create or Destroy Water spell with this trait. Starting at 5th level, you can also cast the Water Walk spell with this trait, without requiring a material component. Once you cast Create or Destroy Water or Water Walk with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level. \n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
      },
    ],
  },
  {
    id: 32,
    name: "Water Genasi (EEPC)",
    description:
      "Those who think of other planes at all consider them remote, distant realms, but planar influence can be felt throughout the world. It sometimes manifests in beings who, through an accident of birth, carry the power of the planes in their blood. The genasi are one such people, the offspring of genies and mortals.\n\nThe lapping of waves, the spray of sea foam on the wind, the ocean depths — all of these things call to your heart. You wander freely and take pride in your independence, though others might consider you selfish.\n\nMost water genasi look as if they just finished bathing, with beads of moisture collecting on their skin and hair. They smell of fresh rain and clean water. Blue or green skin is common, and most have somewhat overlarge eyes, blue-black in color. A water genasi’s hair might float freely, swaying and waving as if underwater. Some have voices with undertones reminiscent of whale song or trickling streams.",
    flavorText: "The lapping of waves, the spray of sea foam on the wind.",
    source: src.eepc,
    abilityScoreDescription: "Your Wisdom score increases by 1.",
    abilityScores: {
      fixedIncreases: [
        {
          ability: Ability.WIS,
          value: 1,
        },
      ],
    },
    resistanceTo: [DamageTypes.ACID],
    creatureType: CreatureType.HUMANOID,
    age: "Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.",
    alignment:
      "Independent and self-reliant, genasi tend toward a neutral alignment.",
    size: Size.MEDIUM,
    sizeDescription:
      "Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall. Your size is Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    swimDescription: "You have a swimming speed of 30 feet.",
    swimSpeed: 30,
    languageDescription:
      "You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.",
    originLanguages: {
      default: [Language.COMMON, Language.PRIMORDIAL],
    },
    features: [
      {
        name: "Acid Resistance",
        description: "You have resistance to acid damage.",
      },
      {
        name: "Amphibious",
        description: "You can breathe air and water.",
      },
      {
        name: "Call to the Wave",
        description:
          "You know the Shape Water cantrip. When you reach 3rd level, you can cast the Create or Destroy Water spell as a 2nd-level spell once with this trait, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells.",
      },
    ],
  },
];

export default Species;
