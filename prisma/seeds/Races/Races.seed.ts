import { languages } from "@/lib/globalVars";
import { src } from "@/lib/types";
import {
  Prisma,
  Size,
  CreatureType,
  Language,
  Skill,
  Ability,
  DamageTypes,
} from "@prisma/client";
import { weaponIds } from "../Items/Weapons/Weapons.seed";
import { instrumentIds, toolIds } from "../Items/Tools/tools.seed";

const Species: Prisma.RaceCreateManyInput[] = [
  {
    id: 1,
    name: "Dragonborn",
    description:
      "Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life.",
    abilityScoreDescription:
      "Your Strength score increases by 2, and your Charisma score increases by 1.",
    abilityScores: {
      default: [
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
      default: [
        {
          ability: Ability.CON,
          value: 2,
        },
      ],
    },
    resistanceTo: [DamageTypes.POISON],
    weaponProficiencies: {
      default: [
        weaponIds.battleaxe,
        weaponIds.handaxe,
        weaponIds.lightHammer,
        weaponIds.warhammer,
      ],
    },
    weaponProficiencyDescription:
      "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.",
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
      default: [
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
      default: [
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
      default: [
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

          options: [1, 1],
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
      default: [
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
      default: [
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
      default: [
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
      default: [
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

          options: [1, 2],
        },
        {
          abilities: [Ability.WIS],

          options: [1, 1, 1],
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
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character.",
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

          options: [2, 1],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
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
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ",
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
      default: [
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

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
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
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ",
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
      default: [{ ability: Ability.CHA, value: 2 }],
      choices: [
        {
          abilities: Object.values(Ability).filter((a) => a !== Ability.CHA),

          options: [1],
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

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
        },
      ],
    },
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ",
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
      default: [
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

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
        },
      ],
    },
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ",
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

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
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
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ",
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

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
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
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ",
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

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
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

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
        },
      ],
    },
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    size: Size.MEDIUM,
    sizeDescription: "You are Medium.",
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ",
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
      default: [
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

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
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
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ",
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
      default: [
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

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
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
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ",
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
      default: [
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

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
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
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ",
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
      default: [
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

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
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
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ",
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
      default: [
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
  {
    id: 33,
    name: "Githyanki (MMOM)",
    description:
      "Once members of a people who escaped servitude to mind flayers, githyanki split from their cousins, githzerai, and fled to the Astral Plane. In that timeless, silvery realm, githyanki honed their psionic powers and built a great city called Tu’narath. They have since spread throughout the multiverse, starting in outposts outside the Astral Plane, called creches, where time passes and their children can reach adulthood.\n\nA lanky people with skin tones of yellows, greens, and browns, githyanki complement their physical prowess with psionic might, instilled in them by mind flayers and cultivated over eons in the Astral Plane. Now all githyanki can use their psychic bond with that plane to access splinters of knowledge left behind by beings who travel, live, and die among the silver astral clouds.",
    age: "Githyanki who reside in the Astral Plane can live indefinitely.",
    flavorText:
      "Once members of a people who escaped servitude to mind flayers.",
    alignment: "N/A",
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    source: src.mordenkainenMonsters,
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    sizeDescription: "You are Medium.",
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character.",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
        },
      ],
    },
    features: [
      {
        name: "Githyanki Psionics",
        description:
          "You know the Mage Hand cantrip, and the hand is invisible when you cast the cantrip with this trait. \n\nStarting at 3rd level, you can cast the Jump spell with this trait. Starting at 5th level, you can also cast the Misty Step spell with it. Once you cast Jump or Misty Step with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race). None of these spells require spell components when you cast them with this trait.",
      },
      {
        name: "Psychic Resilience",
        description: "You have resistance to psychic damage.",
      },
      {
        name: "Astral Knowledge",
        description:
          "You can mystically access a reservoir of experiences of entities connected to the Astral Plane. Whenever you finish a long rest, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the Player’s Handbook, as you momentarily project your consciousness into the Astral Plane. These proficiencies last until the end of your next long rest.",
      },
    ],
    resistanceTo: [DamageTypes.PSYCHIC],
  },
  {
    id: 34,
    name: "Githyanki (MToF)",
    description:
      "The warlike githyanki and the contemplative githzerai are a sundered people – two cultures that utterly despise one another. The brutal githyanki are trained from birth as warriors, while the githzerai hone their minds to a razor’s edge in their fortresses within Limbo. But before there were githyanki or githzerai, these creatures were a single race enslaved by the illithids.\n\nAlthough they attempted to overthrow their masters many times, their rebellions were repeatedly crushed until a great leader named Gith arose. After much bloodshed, Gith and her followers threw off the yoke of their illithid masters, but another leader named Zerthimon emerged in the aftermath of battle. Zerthimon challenged Gith's motives, claiming that her strict martial leadership and desire for vengeance amounted to little more than another form of slavery for her people. A rift erupted between followers of each leader, and they eventually became the two races whose enmity endures to this day: the Githyanki in the way of Gith, and the Githzerai in the way of Zerthimon.\n\nThe githyanki plunder countless worlds from the decks of their astral vessels and the backs of red dragons. Feathers, beads, gems, and precious metals decorate their armor and weapons – the legendary silver swords with which they cut through their foes. Since winning their freedom from the illithids, the githyanki have become ruthless conquerors under the rulership of their dread lich-queen, Vlaakith.",
    flavorText:
      "The warlike githyanki and the contemplative githzerai are a sundered people.",
    source: src.mordenkainenFoes,
    abilityScoreDescription:
      "Your Strength score increases by 2, and your Intelligence score increases by 1.",
    abilityScores: {
      default: [
        {
          ability: Ability.STR,
          value: 2,
        },
        {
          ability: Ability.INT,
          value: 1,
        },
      ],
    },
    age: "Gith reach adulthood in their late teens and live for about a century.",
    size: Size.MEDIUM,
    sizeDescription:
      "Gith are taller and leaner than humans, with most a slender 6 feet in height. Your size is Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    alignment:
      "Githyanki tend toward lawful evil. They are aggressive and arrogant, and they remain the faithful servants of their lich-queen, Vlaakith. Renegade githyanki tend toward chaos.",
    languageDescription: "You can speak, read, and write Common and Gith.",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: [Language.GITH],
          numberOfChoices: 1,
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: 35,
    name: "Githzerai (MMoM)",
    description:
      "Githzerai migrated to the Everchanging Chaos of Limbo after the ancient schism that split their ancestors from their cousins, githyanki. Limbo is a roiling maelstrom of matter and energy, collapsing and reforming without purpose or direction, until a creature exerts deliberate will to stabilize it. Through their potent psionic power, githzerai carved a home for themselves amid the chaos. As the ages passed, githzerai explorers ranged out to other planes and worlds of the multiverse.\n\nGithzerai are generally slender, with speckled skin in shades of yellow, green, or brown. Eons of cultivating their mental powers within the endless chaos of Limbo have imbued githzerai with the ability to shape psionic energy to protect themselves and probe minds.",
    flavorText: "Githzerai migrated to the Everchanging Chaos of Limbo.",
    source: src.mordenkainenMonsters,
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    sizeDescription: "You are Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character.",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    resistanceTo: [DamageTypes.PSYCHIC],
    age: "N/A",
    alignment: "N/A",
    features: [
      {
        name: "Githzerai Psionics",
        description:
          "You know the Mage Hand cantrip, and the hand is invisible when you cast the cantrip with this trait.\n\nStarting at 3rd level, you can cast the Shield spell with this trait. Starting at 5th level, you can also cast the Detect Thoughts spell with it. Once you cast Shield or Detect Thoughts with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race). None of these spells require spell components when you cast them with this trait.",
      },
      {
        name: "Psychic Resilience",
        description: "You have resistance to psychic damage.",
      },
      {
        name: "Mental Discipline",
        description:
          "Your innate psychic defenses grant you advantage on saving throws you make to avoid or end the charmed and frightened conditions on yourself.",
      },
    ],
  },
  {
    id: 36,
    name: "Githzerai (MToF)",
    description:
      "The warlike githyanki and the contemplative githzerai are a sundered people – two cultures that utterly despise one another. The brutal githyanki are trained from birth as warriors, while the githzerai hone their minds to a razor’s edge in their fortresses within Limbo. But before there were githyanki or githzerai, these creatures were a single race enslaved by the illithids.\n\nAlthough they attempted to overthrow their masters many times, their rebellions were repeatedly crushed until a great leader named Gith arose. After much bloodshed, Gith and her followers threw off the yoke of their illithid masters, but another leader named Zerthimon emerged in the aftermath of battle. Zerthimon challenged Gith's motives, claiming that her strict martial leadership and desire for vengeance amounted to little more than another form of slavery for her people. A rift erupted between followers of each leader, and they eventually became the two races whose enmity endures to this day: the Githyanki in the way of Gith, and the Githzerai in the way of Zerthimon.\n\nWhether these tall, gaunt creatures were peaceful or savage, cultured or primitive before the illithids enslaved and changed them, none can say. Not even the original name of their race remains from that distant time.\n\nFocused philosophers and austere ascetics, the githzerai pursue lives of rigid order. Lean and muscular, they wear unadorned clothing free of ornamentation, keeping their own counsel and trusting few creatures outside of their own kind. Having turned their backs on their warlike githyanki kin, the githzerai maintain a strict monastic lifestyle, dwelling on islands of order in the vast sea of chaos that is the plane of Limbo.",
    flavorText: "Focused philosophers and austere ascetics.",
    source: src.mordenkainenFoes,
    abilityScoreDescription:
      "Your Wisdom score increases by 2, and your Intelligence score increases by 1.",
    abilityScores: {
      default: [
        {
          ability: Ability.WIS,
          value: 2,
        },
        {
          ability: Ability.INT,
          value: 1,
        },
      ],
    },
    age: "Githzerai reach adulthood in their late teens and live for about a century.",
    size: Size.MEDIUM,
    sizeDescription:
      "Githzerai are taller and leaner than humans, with most a slender 6 feet in height. Your size is Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    alignment:
      "Githzerai tend toward lawful neutral. Their rigorous training in psychic abilities requires an implacable mental discipline.",
    languageDescription: "You can speak, read, and write Common and Gith.",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: [Language.GITH],
          numberOfChoices: 1,
        },
      ],
    },
    features: [
      {
        name: "Mental Discipline",
        description:
          "You have advantage on saving throws against the charmed and frightened conditions. Under the tutelage of monastic masters, githzerai learn to govern their own minds.",
      },
      {
        name: "Githzerai Psionics",
        description:
          "You know the Mage Hand cantrip, and the hand is invisible when you cast the cantrip with this trait. \n\nWhen you reach 3rd level, you can cast the Shield spell once with this trait, and you regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the Detect Thoughts spell once with this trait, and you regain the ability to do so when you finish a long rest.\n\nWisdom is your spellcasting ability for these spells. When you cast them with this trait, they don't require components.",
      },
    ],
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: 37,
    name: "Goliath (MMOM)",
    description:
      "The first goliaths lived on the highest mountain peaks — far above the tree line, where the air is thin and frigid winds howl. Distantly related to giants and infused with the supernatural essence of their ancestors’ mountainous home, goliaths stand between 7 and 8 feet tall and have a wide array of skin tones resembling different types of stone.",
    flavorText:
      "Distantly related to giants and infused with the supernatural essence.",
    source: src.mordenkainenMonsters,
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    age: "Goliaths have lifespans comparable to humans. They enter adulthood in their late teens and usually live less than a century.",
    alignment: "N/A",
    skillProficiencyDescription: "You have proficiency in the Athletics skill.",
    skillProficiencies: {
      default: [Skill.ATHLETICS],
    },
    resistanceTo: [DamageTypes.COLD],
    features: [
      {
        name: "Little Giant",
        description:
          "You have proficiency in the Athletics skill, and you count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
      },
      {
        name: "Mountain Born",
        description:
          "You have resistance to cold damage. You also naturally acclimate to high altitudes, even if you’ve never been to one. This includes elevations above 20,000 feet.",
      },
      {
        name: "Stone's Endurance",
        description:
          "You can supernaturally draw on unyielding stone to shrug off harm. When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled and reduce the damage by that total. \n\nYou can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
      },
    ],
  },
  {
    id: 38,
    name: "Goliath (EEPC)",
    description:
      "At the highest mountain peaks dwell the reclusive goliaths, wandering a bleak realm of rock, wind, and cold. Their bodies look as if they are carved from mountain stone and give them great physical power. Their hearts are infused with the cold regard of their frigid realm, leaving each goliath with the responsibility to earn a place in the tribe or die trying.",
    flavorText: "At the highest mountain peaks dwell the reclusive goliaths.",
    source: src.eepc,
    abilityScoreDescription:
      "Your Strength score increases by 2, and your Constitution score increases by 1.",
    abilityScores: {
      default: [
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
    age: "Goliaths have lifespans comparable to humans. They enter adulthood in their late teens and usually live less than a century.",
    alignment:
      "Goliath society, with its clear roles and tasks, has a strong lawful bent. The goliath sense of fairness, balanced with an emphasis on self-sufficiency and personal accountability, pushes them toward neutrality.",
    sizeDescription:
      "Goliaths are between 7 and 8 feet tall and weigh between 280 and 340 pounds. Your size is Medium.",
    size: Size.MEDIUM,
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    skillProficiencyDescription: "You have proficiency in the Athletics skill.",
    skillProficiencies: {
      default: [Skill.ATHLETICS],
    },
    resistanceTo: [DamageTypes.COLD],
    creatureType: CreatureType.HUMANOID,
    languageDescription: "You can speak, read, and write Common and Giant.",
    originLanguages: {
      default: [Language.COMMON, Language.GIANT],
    },
    features: [
      {
        name: "Natural Athlete",
        description: "You have proficiency in the Athletics skill.",
      },
      {
        name: "Stone's Endurance",
        description:
          "You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled, and reduce the damage by that total. After you use this trait, you can’t use it again until you finish a short or long rest.",
      },
      {
        name: "Powerful Build",
        description:
          "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.",
      },
      {
        name: "Mountain Born",
        description:
          "You have resistance to cold damage. You’re also acclimated to high altitude, including elevations above 20,000 feet.",
      },
    ],
  },
  {
    id: 39,
    name: "Harengon (MMOM)",
    description:
      "Harengons originated in the Feywild, where they spoke Sylvan and embodied the spirit of freedom and travel. In time, these rabbitfolk hopped into other worlds, bringing the fey realm’s exuberance with them and learning new languages as they went.\n\nHarengons are bipedal, with the characteristic long feet of the rabbits they resemble and fur in a variety of colors. They share the keen senses and powerful legs of leporine creatures and are full of energy, like a wound-up spring. Harengons are blessed with a little fey luck, and they often find themselves a few fortunate feet away from dangers during adventures.",
    flavorText: "Harengons originated in the Feywild, where they spoke Sylvan.",
    source: src.mordenkainenMonsters,
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    speed: 30,
    sizeDescription: "You are Medium or Small.",
    speedDescription: "Your base walking speed is 30 feet.",
    languageDescription:
      " Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    skillProficiencyDescription:
      "You have proficiency in the Perception skill.",
    skillProficiencies: {
      default: [Skill.PERCEPTION],
    },
    alignment: "N/A",
    age: "N/A",
    features: [
      {
        name: "Lucky Footwork",
        description:
          "When you fail a Dexterity saving throw, you can use your reaction to roll a d4 and add it to the save, potentially turning the failure into a success. You can't use this reaction if you're prone or your speed is 0.",
      },
      {
        name: "Rabbit Hop",
        description:
          "As a bonus action, you can jump a number of feet equal to five times your proficiency bonus, without provoking opportunity attacks. You can use this trait only if your speed is greater than 0. You can use it a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
      },
      {
        name: "Hare Trigger",
        description:
          "You can add your proficiency bonus to your initiative rolls.",
      },
      {
        name: "Leoprine Senses",
        description: "You have proficiency in the Perception skill.",
      },
    ],
  },
  {
    id: 40,
    name: "Harengon (TWBtW)",
    description:
      "Harengons originated in the Feywild, where they spoke Sylvan and embodied the spirit of freedom and travel. In time, these rabbitfolk hopped into other worlds, bringing the fey realm's exuberance with them and learning new languages as they went.\n\nHarengons are bipedal, with the characteristic long feet of the rabbits they resemble and fur in a variety of colors. They share the keen senses and powerful legs of leporine creatures and are full of energy, like a wound-up spring. Harengons are blessed with a little fey luck, and they often find themselves a few fortunate feet away from dangers during adventures.",
    flavorText: "Harengons originated in the Feywild, where they spoke Sylvan.",
    source: src.witchlight,
    abilityScoreDescription:
      "Increase one ability score by 2, and increase a different one by 1, or increase three different scores by 1.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    sizeDescription: "You are Medium or Small.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character.",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    skillProficiencyDescription:
      "You have proficiency in the Perception skill.",
    skillProficiencies: {
      default: [Skill.PERCEPTION],
    },

    alignment: "N/A",
    age: "N/A",
    features: [
      {
        name: "Lucky Footwork",
        description:
          "When you fail a Dexterity saving throw, you can use your reaction to roll a d4 and add it to the save, potentially turning the failure into a success. You can't use this reaction if you're prone or your speed is 0.",
      },
      {
        name: "Rabbit Hop",
        description:
          "As a bonus action, you can jump a number of feet equal to five times your proficiency bonus, without provoking opportunity attacks. You can use this trait only if your speed is greater than 0. You can use it a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
      },
      {
        name: "Hare Trigger",
        description:
          "You can add your proficiency bonus to your initiative rolls.",
      },
      {
        name: "Leoprine Senses",
        description: "You have proficiency in the Perception skill.",
      },
    ],
  },
  {
    id: 41,
    name: "Kenku (MMOM)",
    description:
      "Feathered folk who resemble ravens, kenku are blessed with keen observation and supernaturally accurate memories. None of them can remember the origin of the first kenku, however, and they often joke that there are as many kenku origin stories as there are kenku. Some of them paint their genesis as a curse, being a flightless bird people doomed to mimic other people’s creations. Other kenku recite cryptic but beautiful poems about their advent being a blessed event in which they were sent into the multiverse to observe and catalog its many wonders.\n\nWhatever their true origin, kenku are most often found in the Shadowfell and the Material Plane, and they tend to have the coloration typical of ravens.",
    flavorText: "Feathered folk who resemble ravens.",
    source: src.mordenkainenMonsters,
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    sizeDescription: "You are Medium or Small.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character.",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    skillProficiencyDescription:
      "Thanks to your supernaturally good memory, you have proficiency in two skills of your choice. ",
    skillProficiencies: {
      choices: [
        {
          options: Object.values(Skill),
          numberOfChoices: 2,
        },
      ],
    },
    alignment: "N/A",
    age: "N/A",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
        },
      ],
    },
    features: [
      {
        name: "Expert Duplication",
        description:
          "When you copy writing or craftwork produced by yourself or someone else, you have advantage on any ability checks you make to produce an exact duplicate.",
      },
      {
        name: "Kenku Recall",
        description:
          "Thanks to your supernaturally good memory, you have proficiency in two skills of your choice. \n\nMoreover, when you make an ability check using any skill in which you have proficiency, you can give yourself advantage on the check before rolling the d20. You can give yourself advantage in this way a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
      },
      {
        name: "Mimicry",
        description:
          "You can accurately mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations only with a successful Wisdom (Insight) check against a DC of 8 + your proficiency bonus + your Charisma modifier.",
      },
    ],
  },
  {
    id: 42,
    name: "Kenku (VGM)",
    description:
      "Haunted by an ancient crime that robbed them of their wings, the flightless kenku wander the world as vagabonds and burglars who live at the edge of human society. Kenku suffer from a sinister reputation that is not wholly unearned, but they can prove to be valuable allies.",
    flavorText: "Haunted by an ancient crime that robbed them of their wings.",
    source: src.volo,
    abilityScoreDescription:
      "Your Dexterity score increases by 2, and your Wisdom score increases by 1.",
    abilityScores: {
      default: [
        {
          ability: Ability.DEX,
          value: 2,
        },
        {
          ability: Ability.WIS,
          value: 1,
        },
      ],
    },
    age: "Kenku have shorter lifespans than humans. They reach maturity at about 12 years old and can live to 60.",
    alignment:
      "Kenku are chaotic creatures, rarely making enduring commitments, and they care mostly for preserving their own hides. They are generally chaotic neutral in outlook.",
    size: Size.MEDIUM,
    sizeDescription:
      "Kenku are around 5 feet tall and weigh between 90 and 120 pounds. Your size is Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    skillProficiencyDescription:
      "You are proficient in your choice of two of the following skills: Acrobatics, Deception, Stealth, and Sleight of Hand.",
    skillProficiencies: {
      choices: [
        {
          options: [
            Skill.ACROBATICS,
            Skill.DECEPTION,
            Skill.STEALTH,
            Skill.SLEIGHT_OF_HAND,
          ],
          numberOfChoices: 2,
        },
      ],
    },
    languageDescription:
      "You can read and write Common and Auran, but you can speak only by using your Mimicry trait.",
    originLanguages: {
      default: [Language.COMMON, Language.AURAN],
    },
    creatureType: CreatureType.HUMANOID,
    features: [
      {
        name: "Expert Forgery",
        description:
          "You can duplicate other creatures' handwriting and craftwork. You have advantage on all checks made to produce forgeries or duplicates of existing objects.",
      },
      {
        name: "Kenku Training",
        description:
          "You are proficient in your choice of two of the following skills: Acrobatics, Deception, Stealth, and Sleight of Hand.",
      },
      {
        name: "Mimicry",
        description:
          "You can mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations with a successful Wisdom (Insight) check opposed by your Charisma (Deception) check.",
      },
    ],
  },
  {
    id: 43,
    name: "Locathah",
    description:
      "These resilient and proud fish-folk have endured war, slavery, and mistreatment at the hands of other aquatic creatures. They dwell in submerged tribal communities along seacoasts, and hunt both above and below the water.",
    flavorText:
      "These resilient and proud fish-folk have endured war, slavery, and mistreatment.",
    source: src.locathah,
    abilityScoreDescription:
      "Your Strength score increases by 2 and your Dexterity score increases by 1.",
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
    age: "Locathah reach maturity at 10 years and live up to 80 years.",
    alignment:
      "Most locathah are true neutral or have some aspect of neutrality in their alignment. They tend toward good, coming from a culture where compassion for the downtrodden is a commonality.",
    size: Size.MEDIUM,
    sizeDescription:
      " Locathah stand between 5 and 6 feet tall and average about 150 pounds. Your size is Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    skillProficiencyDescription:
      "You have proficiency in the Athletics and Perception skills.",
    skillProficiencies: {
      default: [Skill.ATHLETICS, Skill.PERCEPTION],
    },
    languageDescription: "You can speak, read, and write Aquan and Common.",
    originLanguages: {
      default: [Language.COMMON, Language.AQUAN],
    },
    creatureType: CreatureType.HUMANOID,
    features: [
      {
        name: "Natural Armor",
        description:
          "You have tough, scaly skin. When you aren’t wearing armor, your AC is 12 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield’s benefits apply as normal while you use your natural armor.",
      },
      {
        name: "Observant and Athletic",
        description:
          "You have proficiency in the Athletics and Perception skills.",
      },
      {
        name: "Leviathan Will",
        description:
          "You have advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep.",
      },
      {
        name: "Limited Amphibiousness",
        description:
          "You can breathe air and water, but you need to be submerged at least once every 4 hours to avoid suffocating.",
      },
    ],
  },
  {
    id: 44,
    name: "Owlin",
    description:
      "Distant kin of giant owls from the Feywild, owlin come in many shapes and sizes, from petite and fluffy to wide-winged and majestic. Owlin have arms and legs like other Humanoids, as well as wings that extend from their back and shoulders. Like owls, owlin are graced with feathers that make no sound when they move or fly, making it easy for them to sneak up on you in the library.\n\nYour owlin character might be nocturnal. Or perhaps your character is simply prone to rise later, embodying the common nickname of night owl.",
    flavorText: "Distant kin of giant owls from the Feywild.",
    source: src.strixhaven,
    abilityScoreDescription:
      "Increase one ability score by 2, and increase a different one by 1.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1],
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
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
    skillProficiencies: { default: [Skill.STEALTH] },
    skillProficiencyDescription: "You have proficiency in the Stealth skill.",
    darkvisionDescription:
      "You can see in dim light within 120 feet of yourself as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
    darkvision: 120,
    flightSpeed: 30,
    flightDescription:
      "Thanks to your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.",
    features: [
      {
        name: "Flight",
        description:
          "Thanks to your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.",
      },
      {
        name: "Silent Feathers",
        description: "You have proficiency in the Stealth skill.",
      },
    ],
    age: "N/A",
    alignment: "N/A",
  },
  {
    id: 45,
    name: "Satyr",
    description:
      "Originating in the Feywild — a realm of pure emotion-satyrs thrive on the energy of merriment. They resemble elves but have goatlike legs, cloven hooves, and ram or goat horns. The magic of the fey realm has given them an innate ability to perform, to delight, and to resist magical intrusion. While they’re usually found in the Feywild, satyrs do wander to other planes of existence, most often to the Material Plane. There they seek to bring a bit of their home plane’s splendor to other worlds.",
    flavorText:
      "Originating in the Feywild, satyrs thrive on the energy of merriment.",
    source: src.mordenkainenMonsters,
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    creatureType: CreatureType.FEY,
    size: Size.MEDIUM,
    sizeDescription: "You are Medium.",
    speed: 35,
    speedDescription: "Your base walking speed is 35 feet.",
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: instrumentIds,
        },
      ],
    },
    skillProficiencyDescription:
      "You have proficiency in the Performance and Persuasion skill.",
    skillProficiencies: {
      default: [Skill.PERFORMANCE, Skill.PERSUASION],
    },
    alignment: "N/A",
    age: "N/A",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
        },
      ],
    },
    features: [
      {
        name: "Ram",
        description:
          "You can use your head and horns to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier bludgeoning damage, instead of the bludgeoning damage normal for an unarmed strike.",
      },
      {
        name: "Magic Resistance",
        description: "You have advantage on saving throws against spells.",
      },
      {
        name: "Mirthful Leaps",
        description:
          "Whenever you make a long jump or a high jump, you can roll a d8 and add the number rolled to the number of feet you cover, even when making a standing jump. This extra distance costs movement as normal.",
      },
      {
        name: "Reveler",
        description:
          "As an embodiment of revelry, you have proficiency in the Performance and Persuasion skills, and you have proficiency with one musical instrument of your choice.",
      },
    ],
  },
  {
    id: 46,
    name: "Satyr (MOoT)",
    description:
      "Satyrs have a well-earned reputation for their good spirits, gregarious personalities, and love of revels. Most satyrs are driven by simple desires, to see the world and to sample its every pleasure. While their spontaneity and whimsy sometimes put them at odds with more stoic peoples, satyrs rarely let the moodiness of others hinder their own happiness. Life is a blessing from the gods, after all, and the proper response to such a gift, as far as most satyrs are concerned, is to accept it with relish.",
    flavorText: "Satyrs have a well-earned reputation for their good spirits.",
    source: src.theros,
    abilityScoreDescription:
      "Your Charisma score increases by 2, and your Dexterity score increases by 1.",
    abilityScores: {
      default: [
        {
          ability: Ability.CHA,
          value: 2,
        },
        {
          ability: Ability.DEX,
          value: 1,
        },
      ],
    },
    age: "Satyrs mature and age at about the same rate as humans.",
    alignment:
      "Satyrs delight in living a life free of the mantle of law. They gravitate toward being good, but some have devious streaks and enjoy causing dismay.",
    size: Size.MEDIUM,
    sizeDescription:
      "Satyrs range from just under 5 feet to about 6 feet in height, with generally slender builds. Your size is medium.",
    speed: 35,
    speedDescription: "Your base walking speed is 35 feet.",
    languageDescription: "You can speak, read, and write Common and Sylvan.",
    originLanguages: {
      default: [Language.COMMON, Language.SYLVAN],
    },
    skillProficiencyDescription:
      "You have proficiency in the Performance and Stealth skills.",
    skillProficiencies: {
      default: [Skill.PERFORMANCE, Skill.STEALTH],
    },
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: instrumentIds,
        },
      ],
    },

    creatureType: CreatureType.FEY,
    features: [
      {
        name: "Magic Resistance",
        description: "You have advantage on saving throws against spells.",
      },
      {
        name: "Mirthful Leaps",
        description:
          "Whenever you make a long or high jump, you can roll a d8 and add the number to the number of feet you cover, even when making a standing jump. This extra distance costs movement as normal.",
      },
      {
        name: "Revelry",
        description:
          "You have proficiency in the Performance and Persuasion skills, and you have proficiency with one musical instrument of your choice.",
      },
    ],
  },
  {
    id: 47,
    name: "Sea Elf (MMOM)",
    description:
      "Sea elves fell in love with the wild beauty of the ocean in the earliest days of the multiverse. While other elves traveled from realm to realm, sea elves navigated the currents and explored the waters of many worlds. Today these elves can be found wherever oceans exist, as well as in the Elemental Plane of Water.",
    flavorText: "Sea elves fell in love with the wild beauty of the ocean.",
    source: src.mordenkainenMonsters,
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    speed: 30,
    swimSpeed: 30,
    speedDescription:
      "Your walking speed is 30 feet, and you have a swimming speed equal to your walking speed.",
    resistanceTo: [DamageTypes.COLD],
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    skillProficiencies: {
      default: [Skill.PERCEPTION],
    },
    skillProficiencyDescription:
      "You have proficiency in the Perception skill.",
    alignment: "N/A",
    age: "Like other elves, sea elves can live to be over 750 years old.",
    features: [
      {
        name: "Child of the Sea",
        description:
          "You can breathe air and water, and you have resistance to cold damage.",
      },

      {
        name: "Superior Darkvision",
        description:
          "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
      },
      {
        name: "Friend of the Sea",
        description:
          "    Aquatic animals have an extraordinary affinity with your people. You can communicate simple ideas to any Beast that has a swimming speed. It can understand your words, though you have no special ability to understand it in return.",
      },
      {
        name: "Keen Senses",
        description: "You have proficiency in the Perception skill.",
      },
      {
        name: "Trance",
        description:
          "You don’t need to sleep, and magic can’t put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness. \n\nWhenever you finish this trance, you can gain two proficiencies that you don’t have, each one with a weapon or a tool of your choice selected from the Player’s Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest.",
      },
    ],
  },
  {
    id: 48,
    name: "Sea Elf (MToF)",
    description:
      "Sea elves fell in love with the wild beauty of the ocean in the earliest days of the multiverse. While other elves traveled from realm to realm, the sea elves navigated the deepest currents and explored the waters across a hundred worlds. Today, they live in small, hidden communities in the ocean shallows and on the Elemental Plane of Water.",
    flavorText: "Sea elves fell in love with the wild beauty of the ocean.",
    source: src.mordenkainenFoes,
    abilityScoreDescription:
      "Your Dexterity score increases by 2, and your Constitution score increases by 1.",
    abilityScores: {
      default: [
        {
          ability: Ability.DEX,
          value: 2,
        },
        {
          ability: Ability.CON,
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
    skillProficiencies: {
      default: [Skill.PERCEPTION],
    },
    swimSpeed: 30,
    languageDescription:
      "You can speak, read, and write Common, Elven, and Aquan.",
    originLanguages: {
      default: [Language.COMMON, Language.ELVISH, Language.AQUAN],
    },
    alignment: "N/A",
    weaponProficiencies: {
      default: [
        weaponIds.spear,
        weaponIds.trident,
        weaponIds.crossbowLight,
        weaponIds.net,
      ],
    },
    weaponProficiencyDescription:
      "You have proficiency with the spear, trident, light crossbow, and net.",
    creatureType: CreatureType.HUMANOID,
    features: [
      {
        name: "Child of the Sea",
        description:
          "You can breathe air and water, and you have a swimming speed of 30 feet.",
      },
      {
        name: "Friend of the Sea",
        description:
          "Using gestures and sounds, you can communicate simple ideas with any beast that has an innate swimming speed.",
      },
      {
        name: "Sea Elf Training",
        description:
          "You have proficiency with the spear, trident, light crossbow, and net.",
      },
      {
        name: "Keen Senses",
        description: "You have proficiency in the Perception skill.",
      },
      {
        name: "Trance",
        description: `Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is "trance." While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.`,
      },
      {
        name: "Fey Ancestry",
        description:
          "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
      },
    ],
  },
  {
    id: 49,
    name: "Shadar Kai (MMOM)",
    description:
      "Shadar-kai are the elves of the Shadowfell, originally drawn to that dread realm by the Raven Queen. Over the centuries, some of them have continued to serve her, while others have ventured into the Material Plane to forge their own destinies.\n\nOnce shadar-kai were Fey like the rest of their elven kin; now they exist in a state between life and death, thanks to being transformed by the Shadowfell’s grim energy.\n\nShadar-kai have ashen skin tones, and while they’re in the Shadowfell, they also become wizened, reflecting the somber nature of that gloomy plane.",
    age: "Like other elves, shadar-kai can live to be over 750 years old.",
    source: src.mordenkainenMonsters,
    flavorText: "Shadar-kai are the elves of the Shadowfell.",
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
    skillProficiencies: {
      default: [Skill.PERCEPTION],
    },
    skillProficiencyDescription:
      "You have proficiency in the Perception skill.",
    resistanceTo: [DamageTypes.NECROTIC],
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character.",
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
    features: [
      {
        name: "Blessing of the Raven Queen",
        description:
          "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest. \n\nStarting at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent.",
      },
      {
        name: "Necrotic Resistance",
        description: "You have resistance to necrotic damage.",
      },
      {
        name: "Trance",
        description:
          "You don’t need to sleep, and magic can’t put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness. \n\nWhenever you finish this trance, you can gain two proficiencies that you don’t have, each one with a weapon or a tool of your choice selected from the Player’s Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest.",
      },
      {
        name: "Fey Ancestry",
        description:
          "You have advantage on saving throws you make to avoid or end the charmed condition on yourself.",
      },
    ],
  },
  {
    id: 50,
    name: "Shadar Kai (MToF)",
    description:
      "Sworn to the Raven Queen's service, the mysterious shadar-kai venture into the Material Plane from the Shadowfell to advance her will. Once they were fey like the rest of their elven kin, and now they exist in a strange state between life and death. Eladrin and shadar-kai are like reflections of each other: one bursting with emotion, the other nearly devoid of it.",
    flavorText:
      "Sworn to the Raven Queen's service, the mysterious shadar-kai.",
    source: src.mordenkainenFoes,
    size: Size.MEDIUM,
    sizeDescription:
      "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
    speed: 30,
    age: " Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
    abilityScoreDescription:
      "Your Dexterity score increases by 2, and your Constitution score increases by 1.",
    abilityScores: {
      default: [
        {
          ability: Ability.DEX,
          value: 2,
        },
        {
          ability: Ability.CON,
          value: 1,
        },
      ],
    },
    darkvision: 60,
    darkvisionDescription:
      "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    skillProficiencies: {
      default: [Skill.PERCEPTION],
    },
    skillProficiencyDescription:
      "You have proficiency in the Perception skill.",
    languageDescription: "You can speak, read, and write Common and Elvish.",
    originLanguages: {
      default: [Language.COMMON, Language.ELVISH],
    },
    alignment: "N/A",
    creatureType: CreatureType.HUMANOID,
    speedDescription: "Your base walking speed is 30 feet.",
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
        name: "Blessing of the Raven Queen",
        description:
          "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a long rest. Starting at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent.",
      },
      {
        name: "Keen Senses",
        description: "You have proficiency in the Perception skill.",
      },
    ],
  },
  {
    id: 51,
    name: "Tabaxi (MMOM)",
    description:
      "Created by the Cat Lord—a divine being of the Upper Planes—to blend the qualities of humanoids and cats, tabaxi are a varied people in both attitude and appearance. In some lands, tabaxi live like the cats they resemble, naturally curious and at home in playful environments. In other places, tabaxi live as other folk do, not exhibiting the feline behavior the Cat Lord intended.\n\nTabaxi’s appearance is as varied as their attitudes. Some tabaxi have features or patterning in their fur like tigers, jaguars, or other big cats, while others have appearances more like a house cat. Still others have unique patterns or might style their fur to their preferences — or might even be hairless!",
    flavorText: "Created by the Cat Lord, tabaxi are a varied people.",
    source: src.mordenkainenMonsters,
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    sizeDescription:
      "You are Medium or Small. You choose the size when you select this race.",
    speed: 30,
    speedDescription: "Your walking speed is 30 feet.",
    climbDescription: "You have a climbing speed equal to your walking speed.",
    climbSpeed: 30,
    darkvision: 60,
    darkvisionDescription: "You can see in dim light within 60 feet of you.",
    age: "N/A",
    alignment: "N/A",

    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
        },
      ],
    },
    skillProficiencies: {
      default: [Skill.PERCEPTION, Skill.STEALTH],
    },
    skillProficiencyDescription:
      "You have proficiency in the Perception and Stealth skills.",
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
        name: "Cat's Claws",
        description:
          "You can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.",
      },
      {
        name: "Cat's Talent",
        description:
          "You have proficiency in the Perception and Stealth skills.",
      },
      {
        name: "Feline Agility",
        description:
          "Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can’t use it again until you move 0 feet on one of your turns.",
      },
    ],
  },
  {
    id: 52,
    name: "Tabaxi (VGM)",
    description:
      "Hailing from a strange and distant land, wandering tabaxi are catlike humanoids driven by curiosity to collect interesting artifacts, gather tales and stories, and lay eyes on all the world's wonders. Ultimate travelers, the inquisitive tabaxi rarely stay in one place for long. Their innate nature pushes them to leave no secrets uncovered, no treasures or legends lost.",
    flavorText: "Hailing from a strange and distant land, wandering tabaxi.",
    source: src.volo,
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
    age: "Tabaxi have lifespans equivalent to humans.",
    alignment:
      "Tabaxi tend toward chaotic alignments, as they let impulse and fancy guide their decisions. They are rarely evil, with most of them driven by curiosity rather than greed or other dark impulses.",
    size: Size.MEDIUM,
    sizeDescription:
      "Tabaxi are taller on average than humans and relatively slender. Your size is Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    darkvision: 60,
    darkvisionDescription:
      "You have a cat's keen senses, especially in the dark. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    languageDescription:
      "You can speak, read, and write Common and one other language of your choice.",
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
    features: [
      {
        name: "Cat's Claws",
        description:
          "Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
      },
      {
        name: "Cat's Talent",
        description:
          "You have proficiency in the Perception and Stealth skills.",
      },
      {
        name: "Feline Agility",
        description:
          "Your reflexes and agility allow you to move with a burst of speed. When you move on your tum in combat, you can double your speed until the end of the tum. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.",
      },
    ],
  },
  {
    id: 53,
    name: "Tortle (MMOM)",
    description:
      "Tortles have a saying: “We wear our homes on our backs.” These turtle folk live on many worlds, most often journeying up and down coasts, along waterways, and across the sea. Tortles don’t have a unified story of how they were created, but they all have a sense of being mystically connected to the natural world. Carrying their shelter on their backs gives tortles a special feeling of security wherever they go, for even if they visit a far, unknown country, they have a place to lay their heads\n\nTortles exhibit the same range of coloration and patterns found among turtles, and many tortles enjoy adorning their shells in distinctive ways.",
    flavorText: "Tortles have a saying: “We wear our homes on our backs.",
    source: src.mordenkainenMonsters,
    age: "N/A",
    alignment: "N/A",
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    sizeDescription:
      "You are Medium or Small. You choose the size when you select this race.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    skillProficiencyDescription:
      "You gain proficiency with one of the following skills of your choice: Animal Handling, Medicine, Nature, Perception, Stealth, or Survival.",
    skillProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [
            Skill.ANIMAL_HANDLING,
            Skill.MEDICINE,
            Skill.NATURE,
            Skill.PERCEPTION,
            Skill.STEALTH,
            Skill.SURVIVAL,
          ],
        },
      ],
    },
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character.",
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
        name: "Claws",
        description:
          "You have claws that you can use to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.",
      },
      {
        name: "Hold Breath",
        description: "You can hold your breath for up to 1 hour.",
      },
      {
        name: "Natural Armor",
        description:
          "Your shell provides you a base AC of 17 (your Dexterity modifier doesn’t affect this number). You can’t wear light, medium, or heavy armor, but if you are using a shield, you can apply the shield’s bonus as normal.",
      },
      {
        name: "Nature's Intuition",
        description:
          "Thanks to your mystical connection to nature, you gain proficiency with one of the following skills of your choice: Animal Handling, Medicine, Nature, Perception, Stealth, or Survival.",
      },
      {
        name: "Shell Defense",
        description:
          "You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to your AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are prone, your speed is 0 and can’t increase, you have disadvantage on Dexterity saving throws, you can’t take reactions, and the only action you can take is a bonus action to emerge from your shell.",
      },
    ],
  },
  {
    id: 54,
    name: "Tortle (TP)",
    description:
      "What many tortles consider a simple life, others might call a life of adventure. Tortles are born near sandy coastlines, but as soon as they're able to walk on two legs, they become nomad survivalists eager to explore the wilderness, experience its many wonders, put their skills to the test, and make new acquaintances.",
    flavorText: "Tortles are born near sandy coastlines.",
    abilityScoreDescription:
      "Your Strength score increases by 2, and your Wisdom score increases by 1.",
    abilityScores: {
      default: [
        {
          ability: Ability.STR,
          value: 2,
        },
        {
          ability: Ability.WIS,
          value: 1,
        },
      ],
    },
    age: "Young tortles crawl for a few weeks after birth before learning to walk on two legs. They reach adulthood by the age of 15 and live an average of 50 years.",
    alignment:
      "Tortles tend to lead orderly, ritualistic lives. They develop customs and routines, becoming more set in their ways as they age. Most are lawful good. A few can be selfish and greedy, tending more toward evil, but it's unusual for a tortle to shuck off order in favor of chaos.",
    size: Size.MEDIUM,
    sizeDescription:
      "Tortle adults stand 5 to 6 feet tall and average 450 pounds. Their shells account for roughly one-third of their weight. Your size is Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    skillProficiencyDescription: "You have proficiency in the Survival skill.",
    skillProficiencies: {
      default: [Skill.SURVIVAL],
    },
    languageDescription: "You can speak, read, and write Common and Aquan.",
    originLanguages: {
      default: [Language.COMMON, Language.AQUAN],
    },
    source: src.tortle,
    creatureType: CreatureType.HUMANOID,
    features: [
      {
        name: "Claws",
        description:
          "Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
      },
      {
        name: "Hold Breath",
        description:
          "You can hold your breath for up to 1 hour at a time. Tortles aren't natural swimmers, but they can remain underwater for some time before needing to come up for air.",
      },
      {
        name: "Natural Armor",
        description:
          "Due to your shell and the shape of your body, you are ill-suited to wearing armor. Your shell provides ample protection, however; it gives you a base AC of 17 (your Dexterity modifier doesn't affect this number). You gain no benefit from wearing armor, but if you are using a shield, you can apply the shield's bonus as normal.",
      },
      {
        name: "Shell Defense",
        description:
          "You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are prone, your speed is 0 and can't increase, you have disadvantage on Dexterity saving throws, you can't take reactions, and the only action you can take is a bonus action to emerge from your shell.",
      },
      {
        name: "Survival Instinct",
        description:
          "You gain proficiency in the Survival skill. Tortles have finely honed survival instincts.",
      },
    ],
  },
  {
    id: 55,
    name: "Triton (MMOM)",
    description:
      "Originally from the Elemental Plane of Water, many tritons entered the Material Plane centuries ago in response to the growing threat of evil elementals. Those tritons spread across the worlds’ oceans, protecting the surface from terrors in the deep. Over time, triton have extended their stewardship over the sea floor to the ocean’s surface.\n\nTritons have webbed hands and feet, small fins on their calves, and coloration that favors blues and greens.",
    flavorText: "Originally from the Elemental Plane of Water, many tritons.",
    source: src.mordenkainenMonsters,
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    abilityScores: {
      choices: [
        {
          abilities: Object.values(Ability),

          options: [1, 2],
        },
        {
          abilities: Object.values(Ability),

          options: [1, 1, 1],
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    sizeDescription: "You are Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    swimDescription: "You have a swimming speed equal to your walking speed.",
    swimSpeed: 30,
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
    resistanceTo: [DamageTypes.COLD],
    languageDescription:
      "Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ",
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
        name: "Control Air and Water",
        description:
          "You can cast Fog Cloud with this trait. Starting at 3rd level, you can cast the Gust of Wind spell with this trait. Starting at 5th level, you can also cast the Water Walk spell with it. Once you cast any of these spells with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have of the appropriate level. \n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).",
      },
      {
        name: "Amphibious",
        description: "You can breathe air and water.",
      },
      {
        name: "Emissary of the Sea",
        description:
          "You can communicate simple ideas to any Beast, Elemental, or Monstrosity that has a swimming speed. It can understand your words, though you have no special ability to understand it in return.",
      },
      {
        name: "Guardians of the Depths",
        description:
          "Adapted to the frigid ocean depths, you have resistance to cold damage.",
      },
    ],
    age: "N/A",
    alignment: "N/A",
  },
  {
    id: 56,
    name: "Triton (VGM)",
    description:
      "Tritons guard the ocean depths, building small settlements beside deep trenches, portals to the elemental planes, and other dangerous spots far from the eyes of land-bound folk. Long-established guardians of the deep ocean floor, the noble tritons have gradually become increasingly active in the world above.",
    source: src.volo,
    abilityScoreDescription:
      "Your Strength, Constitution, and Charisma scores each increase by 1.",
    abilityScores: {
      default: [
        {
          ability: Ability.STR,
          value: 1,
        },
        {
          ability: Ability.CON,
          value: 1,
        },
        {
          ability: Ability.CHA,
          value: 1,
        },
      ],
    },
    age: "Tritons reach maturity at the age of 15 and can live up to 200 years.",
    alignment:
      "Tritons tend toward lawful good. As guardians of the darkest reaches of the sea, their culture pushes them toward order and benevolence.",
    size: Size.MEDIUM,
    sizeDescription:
      "Tritons are slightly shorter than humans, averaging about 5 feet tall. Your size is Medium.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    swimDescription: "You have a swimming speed of 30 feet.",
    swimSpeed: 30,
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
    languageDescription:
      "You can speak, read, and write Common and Primordial.",
    originLanguages: {
      default: [Language.COMMON, Language.PRIMORDIAL],
    },
    creatureType: CreatureType.HUMANOID,
    flavorText: "Tritons guard the ocean depths.",
    features: [
      {
        name: "Amphibious",
        description: "You can breathe air and water.",
      },
      {
        name: "Control Air and Water",
        description:
          "A child of the sea, you can call on the magic of elemental air and water. You can cast Fog Cloud with this trait. Starting at 3rd level, you can cast Gust of Wind with it, and starting at 5th level, you can also cast Wall of Water with it. Once you cast a spell with this trait, you can’t cast that spell with it again until you finish a long rest. Charisma is your spellcasting ability for these spells.",
      },
      {
        name: "Emissary of the Sea",
        description:
          "Aquatic beasts have an extraordinary affinity with your people. You can communicate simple ideas with beasts that can breathe water. They can understand the meaning of your words, though you have no special ability to understand them in return.",
      },
      {
        name: "Guardians of the Depths",
        description:
          "Adapted to even the most extreme ocean depths, you have resistance to cold damage.",
      },
    ],
  },
  {
    id: 57,
    name: "Verdan",
    description:
      "Verdan owe their existence to chaos. Descendants of goblins and hobgoblins, transformed by the shadow of That-Which-Endures. They are THE newest race of Faerûn.",
    flavorText: "Verdan owe their existence to chaos.",
    source: src.aquisitions,
    abilityScoreDescription:
      "Your Charisma score increases by 2, and your Constitution score increases by 1.",
    abilityScores: {
      default: [
        {
          ability: Ability.CHA,
          value: 2,
        },
        {
          ability: Ability.CON,
          value: 1,
        },
      ],
    },
    age: "Verdan reach adulthood at age 24 and live up to 200 years. Saying this, none have yet to reach old age, so the top age is is just speculation.",
    alignment:
      "Verdans are usually good aligned. Saying this, because of how new they are, there is not much of a framework of how they should align.",
    size: Size.SMALL,
    sizeDescription:
      "Verdans are between 3 and 4 feet tall at the start. Your size is Small until you reach 5th level where you get a 2 foot growth spurt and become a Medium creature.",
    speed: 30,
    speedDescription: "Your base walking speed is 30 feet.",
    skillProficiencies: {
      default: [Skill.PERSUASION],
    },
    skillProficiencyDescription:
      "You have proficiency in the Persuasion skill.",
    creatureType: CreatureType.HUMANOID,
    languageDescription:
      "You can speak, read, and write Common, Goblin, and one additional language.",
    originLanguages: {
      default: [Language.COMMON, Language.GOBLIN],
      choices: [
        {
          options: Object.values(Language).filter(
            (f) => f != Language.COMMON && f != Language.GOBLIN
          ),
          numberOfChoices: 1,
        },
      ],
    },
    features: [
      {
        name: "Black Blood Healing",
        description:
          "When you roll either 1 or 2 on any Hit Die, you can instantly re-roll the die and take the new roll.",
      },
      {
        name: "Limited Telepathy",
        description:
          "You can telepathically speak to any creature within 30 feet. You do not have to share a language to speak, however, they must be able to speak a language. You can only communicate simple ideas.",
      },
      {
        name: "Persuasive",
        description:
          "Your people's lack of history makes you trustworthy and humble. You have proficiency in the Persuasion skill.",
      },
      {
        name: "Telepathic Insight",
        description:
          "You have advantage on all Wisdom and Charisma saving throws.",
      },
    ],
  },
];

export default Species;
