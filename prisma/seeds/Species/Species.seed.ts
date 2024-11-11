import { languages } from '@/lib/globalVars';
import { src } from '@/lib/types/types';
import {
  Prisma,
  Size,
  CreatureType,
  Language,
  Skill,
  Ability,
  DamageTypes,
} from '@prisma/client';
import { weaponIds } from '../Items/Weapons/Weapons.seed';
import { instrumentIds, toolIds } from '../Items/Tools/Tool.seed';

const Species: Prisma.SpeciesCreateManyInput[] = [
  {
    id: '1',
    name: 'Dragonborn',
    description:
      'Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique species, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life.',
    abilityScoreDescription:
      'Your Strength score increases by 2, and your Charisma score increases by 1.',
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
    age: 'Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.',
    alignment:
      'Dragonborn tend towards extremes, making a conscious choice for one side or the other between Good and Evil (represented by Bahamut and Tiamat, respectively). More side with Bahamut than Tiamat (whose non-dragon followers are mostly kobolds), but villainous dragonborn can be quite terrible indeed. Some rare few choose to devote themselves to lesser dragon deities, such as Chronepsis (Neutral), and fewer still choose to worship Io, the Ninefold Dragon, who is all alignments at once.',
    size: Size.MEDIUM,
    sizeDescription:
      'Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    creatureType: CreatureType.HUMANOID,
    flavorText:
      'Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.',
    source: src.phb,
    originLanguages: {
      default: [Language.DRACONIC, Language.COMMON],
    },
    languageDescription: 'You can read, speak, and write Common and Draconic.',
  },
  {
    id: '2',
    name: 'Dwarf',
    description:
      'Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs – these common threads unite all dwarves.',
    abilityScoreDescription: 'Your Constitution score increases by 2.',
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
      'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.',
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
    age: 'Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.',
    alignment:
      'Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.',
    size: Size.MEDIUM,
    sizeDescription:
      'Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.',
    speed: 25,
    speedDescription: 'Your base walking speed is 25 feet.',
    originLanguages: {
      default: [Language.DWARVISH, Language.COMMON],
    },
    languageDescription:
      'You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.',
    creatureType: CreatureType.HUMANOID,
    flavorText:
      'Dwarves are solid and enduring like the mountains they love, weathering the passage of centuries with stoic endurance and little change.',
    source: src.phb,
  },
  {
    id: '3',
    name: 'Elf',
    description:
      'Elves are a magical people of otherworldly gspecies, living in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry.',
    abilityScores: {
      default: [
        {
          ability: Ability.DEX,
          value: 2,
        },
      ],
    },
    abilityScoreDescription: 'Your Dexterity score increases by 2.',
    age: 'Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.',
    alignment:
      "Elves love freedom, variety, and self-expression, so they lean strongly towards the gentler aspects of chaos. They value and protect others' freedom as well as their own, and are good more often than not. Drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.",
    size: Size.MEDIUM,
    darkvision: 60,
    darkvisionDescription:
      "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    sizeDescription:
      'Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    originLanguages: {
      default: [Language.ELVISH, Language.COMMON],
    },
    languageDescription: 'You can speak, read, and write Common and Elven.',
    skillProficiencies: {
      default: [Skill.PERCEPTION],
    },
    creatureType: CreatureType.HUMANOID,
    flavorText:
      'Elves are a magical people of otherworldly gspecies, living in the world but not entirely part of it.',
    source: src.phb,
  },
  {
    id: '4',
    name: 'Gnome',
    description:
      'A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.',
    abilityScores: {
      default: [
        {
          ability: Ability.INT,
          value: 2,
        },
      ],
    },
    abilityScoreDescription: 'Your Intelligence score increases by 2.',
    age: 'Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.',
    darkvision: 60,
    darkvisionDescription:
      "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    alignment:
      ' Gnomes are generally Good. Those who tend towards Law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend towards Chaos are often minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are light-hearted, and even the tricksters amongst them favor harmless pranks over vicious schemes.',
    size: Size.SMALL,
    sizeDescription:
      'Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.',
    speed: 25,
    speedDescription: 'Your base walking speed is 25 feet.',
    originLanguages: {
      default: [Language.GNOMISH, Language.COMMON],
    },
    languageDescription: 'You can read, speak, and write Common and Gnomish.',
    creatureType: CreatureType.HUMANOID,
    flavorText:
      'Gnomes are inquisitive and inventive, always looking for new ways to do things.',
    source: src.phb,
  },
  {
    id: '5',
    name: 'Half Elf',
    description:
      'Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves.',
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
      'Your Charisma score increases by 2, and two other ability scores of your choice increase by 1.',
    darkvision: 60,
    darkvisionDescription:
      "Thanks to your elven heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    age: 'Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.',
    alignment:
      "Half-elves share the chaotic bent of their elven heritage. They both value personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable. They are good and evil in equal numbers, a trait they share with their human parents.",
    size: Size.MEDIUM,
    sizeDescription:
      'Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    originLanguages: {
      default: [Language.ELVISH, Language.COMMON],
    },
    languageDescription:
      'You can read, speak, and write Common, Elven, and one language of your choice.',
    creatureType: CreatureType.HUMANOID,
    flavorText:
      'Half-elves combine what some say are the best qualities of their elf and human parents.',
    source: src.phb,
  },
  {
    id: '6',
    name: 'Half Orc',
    description:
      'When alliances between humans and orcs are sealed by marriages, half-orcs are born. Some half-orcs rise to become proud chiefs of orc tribes, their human blood giving them an edge over their full-blooded orc rivals. Some venture into the world to prove their worth among humans and other more civilized races. Many of these become adventurers, achieving greatness for their mighty deeds and notoriety for their barbaric customs and savage fury.',
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
      'Your Strength score increases by 2, and your Constitution score increases by 1.',
    darkvision: 60,
    darkvisionDescription:
      "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    age: 'Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.',
    alignment:
      'Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.',
    size: Size.MEDIUM,
    sizeDescription:
      'Half-orcs are somewhat larger and bulkier than humans and they range from 5 to well over 6 feet tall. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    creatureType: CreatureType.HUMANOID,
    flavorText:
      'Half-orcs are not evil by nature, but evil does lurk within them, whether they embspecies it or rebel against it.',
    source: src.phb,
    originLanguages: {
      default: [Language.ORC, Language.COMMON],
    },
    languageDescription:
      'You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.',
  },
  {
    id: '7',
    name: 'Halfling',
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
    abilityScoreDescription: 'Your Dexterity score increases by 2.',
    age: 'A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.',
    alignment:
      'Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of the old ways.',
    size: Size.SMALL,
    sizeDescription:
      'Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.',
    speed: 25,
    speedDescription: 'Your base walking speed is 25 feet.',
    creatureType: CreatureType.HUMANOID,
    flavorText:
      'Halflings are an unobtrusive but lively bunch. Curious and adventurous, they see opportunity in everything.',
    source: src.phb,
    originLanguages: {
      default: [Language.HALFLING, Language.COMMON],
    },
    languageDescription: 'You can speak, read, and write Common and Halfling.',
  },
  {
    id: '8',
    name: 'Human',
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
    abilityScoreDescription: 'Your ability scores each increase by 1.',
    age: 'Humans reach adulthood in their late teens and live less than a century.',
    alignment:
      'Humans tend toward no particular alignment. The best and the worst are found among them.',
    size: Size.MEDIUM,
    sizeDescription:
      'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    creatureType: CreatureType.HUMANOID,
    flavorText:
      'Humans are the most adaptable and ambitious people among the common races of the worlds.',
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
      'You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.',
  },
  {
    id: '9',
    name: 'Tiefling',
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
    abilityScoreDescription: 'Your Charisma score increases by 2.',
    darkvision: 60,
    resistanceTo: [DamageTypes.FIRE],
    darkvisionDescription:
      'Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
    age: 'Tieflings mature at the same rate as humans but live a few years longer.',
    alignment:
      'Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.',
    size: Size.MEDIUM,
    sizeDescription:
      'Tieflings are about the same size and build as humans. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    creatureType: CreatureType.HUMANOID,
    flavorText:
      'Tieflings are derived from human bloodlines, and in the broadest possible sense, they still look human. However, their infernal heritage has left a clear imprint on their appearance.',
    source: src.phb,
    originLanguages: {
      default: [Language.INFERNAL, Language.COMMON],
    },
    languageDescription: 'You can speak, read, and write Common and Infernal.',
  },
  //exotic
  //aarakocra
  {
    id: '10',
    name: 'Aarakocra (MMOM)',
    flavorText:
      'A winged people who originated on the Elemental Plane of Air, aarakocra soar through the sky wherever they wander.',
    age: 'N/A',
    alignment: 'N/A',
    description:
      'A winged people who originated on the Elemental Plane of Air, aarakocra soar through the sky wherever they wander. The first aarakocra served the Wind Dukes of Aaqa — mighty beings of air — and were imbued with a measure of their masters’ power over winds. Their descendants still command echoes of that power.\n\nFrom below, aarakocra look like large birds and thus are sometimes called birdfolk. Only when they roost on a branch or walk across the ground is their Humanoid nature clear. Standing upright, aarakocra are typically about 5 feet tall, and they have long, narrow legs that taper to sharp talons. Feathers cover their bodies — usually red, orange, yellow, brown, or gray. Their heads are also avian, often resembling those of parrots or eagles.',
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
    speedDescription: 'Your walking speed is 30 feet.',
    flightSpeed: 30,
    flightDescription:
      'Because of your wings, you have a flying speed equal to your walking speed. You can’t use this flying speed if you’re wearing medium or heavy armor.',
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
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character.',
  },
  {
    id: '11',
    name: 'Aasimar (MMOM)',
    description:
      'Whether descended from a celestial being or infused with heavenly power, aasimar are mortals who carry a spark of the Upper Planes within their souls. They can fan that spark to bring light, ease wounds, and unleash the fury of the heavens.\n\nAasimar can arise among any population of mortals. They resemble their parents, but they live for up to 160 years and often have features that hint at their celestial heritage. These often begin subtle and become more obvious when the aasimar gains the ability to reveal their full celestial nature. The Aasimar Celestial Features table has examples you can choose or use as inspiration to create your own.',
    flavorText:
      'Whether descended from a celestial being or infused with heavenly power, aasimar are mortals who carry a spark of the Upper Planes within their souls.',
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
    age: 'N/A',
    alignment: 'N/A',
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    sizeDescription:
      'You are Medium or Small. You choose the size when you select this species.',
    speed: 30,
    speedDescription: 'Your walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      'You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
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
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ',
  },
  {
    id: '12',
    name: 'Aasimar (VGM)',
    description:
      'Aasimar bear within their souls the light of the heavens. They are descended from humans with a touch of the power of Mount Celestia, the divine realm of many lawful good deities. Aasimar are born to serve as champions of the gods, their births hailed as blessed events. They are a people of otherworldly visages, with luminous features that reveal their celestial heritage.\n\nAn aasimar, except for one who has turned to evil, has a link to an angelic being. That being – usually a deva – provides guidance to the aasimar, though this connection functions only in dreams. As such, the guidance is not a direct command or a simple spoken word. Instead, the aasimar receives visions, prophecies, and feelings.',
    flavorText: 'Aasimar bear within their souls the light of the heavens.',
    source: src.volo,
    abilityScoreDescription: 'Your Charisma score increases by 2.',
    abilityScores: {
      default: [
        {
          ability: Ability.CHA,
          value: 2,
        },
      ],
    },
    age: 'Aasimar mature at the same rate as humans, but they can live up to 160 years.',
    alignment:
      'Imbued with celestial power, most aasimar are good. Outcast aasimar are most often neutral or even evil.',
    size: Size.MEDIUM,
    sizeDescription:
      'Aasimar have the same range of height and weight as humans. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      "Blessed with a radiant soul, your vision can easily cut through darkness. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    languageDescription: 'You can speak, read, and write Common and Celestial.',
    originLanguages: {
      default: [Language.CELESTIAL, Language.COMMON],
    },
    resistanceTo: [DamageTypes.RADIANT, DamageTypes.NECROTIC],
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '13',
    name: 'Changeling (MMOM)',
    description:
      'With ever-changing appearances, changelings reside in many societies undetected. Each changeling can supernaturally adopt any face they like. For some changelings, a new face is only a disguise. For other changelings, a new face may reveal an aspect of their soul.\n\nThe first changelings in the multiverse appeared in the Feywild, and the wondrous, mutable essence of that plane lingers in changelings today — even in those changelings who have never set foot in the fey realm. Each changeling decides how to use their shape-shifting ability, channeling either the peril or the joy of the Feywild. Sometimes they adopt new forms for the sake of mischief or malice, and other times they don a new identity to right wrongs or delight the downtrodden.\n\nIn their true form, changelings appear faded, their features almost devoid of detail. It is rare to see a changeling in that form, for a typical changeling changes their shape the way others might change clothes. A casual shape — one created on the spur of the moment, with no depth or history — is called a mask. A mask can be used to express a mood or to serve a specific purpose and then might never be used again. However, many changelings develop identities that have more depth, crafting whole personas complete with histories and beliefs. A changeling adventurer might have personas for many situations, including negotiation, investigation, and combat.\n\nPersonas can be shared by multiple changelings; a community might be home to three healer changelings, with whoever is on duty adopting the persona of Andrea, the gentle physician. Personas can even be passed down through a family, allowing a younger changeling to take advantage of contacts established by the persona’s previous users.',
    flavorText:
      'With ever-changing appearances, changelings reside in many societies undetected.',
    source: src.mordenkainenMonsters,
    age: 'N/A',
    alignment: 'N/A',
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
    speedDescription: 'Your base walking speed is 30 feet.',
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
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ',
    skillProficiencies: {
      choices: [
        {
          options: Object.values(Skill),
          numberOfChoices: 2,
        },
      ],
    },
  },
  {
    id: '14',
    name: 'Changeling (Eberron)',
    description:
      'A changeling can shift its face and form with a thought. Many changelings use this gift as a form of artistic and emotional expression, but it’s an invaluable tool for grifters, spies, and others who wish to deceive. This leads many people to treat known changelings with fear and suspicion.',
    flavorText: 'A changeling can shift its face and form with a thought.',
    source: src.eberron,
    abilityScoreDescription:
      'Your Charisma score increases by 2. In addition, one other ability score of your choice increases by 1.',
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
    age: 'Changelings mature slightly faster than humans but share a similar lifespan — typically a century or less. While a changeling can transform to conceal their age, the effects of aging affect them similarly to humans.',
    alignment:
      'Changelings tend toward pragmatic neutrality, and few changelings embspecies evil.',
    size: Size.MEDIUM,
    sizeDescription:
      'In their natural forms, changelings average between 5 to 6 feet in height, with a slender build. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    languageDescription:
      'You can speak, read, and write Common and two other languages of your choice.',
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          numberOfChoices: 2,
          options: languages.filter((l) => l !== Language.COMMON),
        },
      ],
    },
  },
  {
    id: '15',
    name: 'Deep Gnome (MMOM)',
    description:
      'Deep gnomes, or svirfneblin, are natives of the Underdark and are suffused with that subterranean realm’s magic. They can supernaturally camouflage themselves, and their svirfneblin magic renders them difficult to locate. These abilities have enabled them to survive for generations among the perils of the Underdark.',
    flavorText: 'Deep gnomes, or svirfneblin, are natives of the Underdark.',
    age: 'Like other gnomes, deep gnomes can live for centuries, up to 500 years.',
    alignment: 'N/A',
    source: src.mordenkainenMonsters,
    creatureType: CreatureType.HUMANOID,
    size: Size.SMALL,
    sizeDescription: 'You are Small.',
    speed: 30,
    speedDescription: 'Your walking speed is 30 feet.',
    darkvision: 120,
    darkvisionDescription:
      'You can see in dim light within 120 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',

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
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ',
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
    id: '16',
    name: 'Deep Gnome (EEPC)',
    description:
      'Forest gnomes and rock gnomes are the gnomes most commonly encountered in the lands of the surface world. There is another subspecies of gnomes rarely seen by any surface-dweller: deep gnomes, also known as svirfneblin. Guarded, and suspicious of outsiders, svirfneblin are cunning and taciturn, but can be just as kind-hearted, loyal, and compassionate as their surface cousins.',
    flavorText: 'Deep gnomes, or svirfneblin, are natives of the Underdark.',
    source: src.eepc,
    creatureType: CreatureType.HUMANOID,
    size: Size.SMALL,
    sizeDescription:
      'Gnomes are between 3 and 4 feet tall and weigh around 40 pounds. Your size is Small.',
    speed: 25,
    speedDescription: 'Your base walking speed is 25 feet.',
    age: "Gnomes mature at the same rate as humans, and most are expected to settle into adult life around the age of 40. They can live to 350 years on average, but it's not too uncommon for them to reach 500 years of age.",
    alignment: 'N/A',
    abilityScoreDescription:
      'Your Dexterity score increases by 1, and your Intelligence score increases by 2.',
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
    darkvisionDescription: 'Your darkvision has a radius of 120 feet.',
    languageDescription: 'You can read, speak, and write Common and Gnomish.',
    originLanguages: {
      default: [Language.GNOMISH, Language.COMMON],
    },
  },
  {
    id: '17',
    name: 'Duergar (MMOM)',
    description:
      'Duergar are dwarves whose ancestors were transformed by centuries living in the deepest places of the Underdark. That chthonic realm is saturated with strange magical energy, and over generations, early duergar absorbed traces of it. They were further altered when mind flayers and other Aberrations invaded and performed horrific experiments on them. Fueled by Underdark magic, those experiments left early duergar with psionic powers, which have been passed down to their descendants. In time, they liberated themselves from their aberrant tyrants and forged a new life for themselves in the Underdark and beyond.',
    flavorText:
      'Duergar are dwarves whose ancestors were transformed by centuries living in the deepest places of the Underdark.',
    age: 'Like other dwarves, duergar typically have a life span of 350 years.',
    alignment: 'N/A',
    source: src.mordenkainenMonsters,
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    sizeDescription: 'You are Medium.',
    speed: 30,
    speedDescription: 'Your walking speed is 30 feet.',
    darkvision: 120,
    darkvisionDescription:
      'You can see in dim light within 120 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
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
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ',
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
    id: '18',
    name: 'Duergar (SCAG)',
    description:
      'The gray dwarves, or duergar, live deep in the Underdark. After delving deeper than any other dwarves, they were enslaved by mind flayers for eons. Although they eventually won their freedom, these grim, ashen-skinned dwarves now take slaves of their own and are as tyrannical as their former masters.\n\nPhysically similar to other dwarves in some ways, duergar are wiry and lean, with black eyes and bald heads, with the males growing long, unkempt, gray beards.\n\nDuergar value toil above all else. Showing emotions other than grim determination or wrath is frowned on in their culture, but they can sometimes seem joyful when at work. They have the typical dwarven appreciation for order, tradition, and impeccable craftsmanship, but their goods are purely utilitarian, disdaining aesthetic or artistic value.',
    flavorText: 'The gray dwarves, or duergar, live deep in the Underdark.',
    source: src.sword,
    abilityScoreDescription:
      'Your Constitution score increases by 2, and your Strength score increases by 1.',
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
    alignment: 'N/A',
    age: "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
    size: Size.MEDIUM,
    sizeDescription:
      'Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.',
    speed: 25,
    speedDescription:
      'Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.',
    darkvision: 120,
    darkvisionDescription:
      "You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    creatureType: CreatureType.HUMANOID,
    languageDescription:
      'You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.',
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
  },
  {
    id: '19',
    name: 'Eladrin (MMOM)',
    description:
      'Eladrin are elves of the Feywild, a realm of perilous beauty and boundless magic. Using that magic, eladrin can step from one place to another in the blink of an eye, and each eladrin resonates with emotions captured in the Feywild in the form of seasons — affinities that affect the eladrin’s mood and appearance. An eladrin’s season can change, though some remain in one season forever. ',
    flavorText:
      'Eladrin are elves of the Feywild, a realm of perilous beauty and boundless magic.',
    age: 'Like other elves, eladrin can live to be over 750 years old.',
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
    speedDescription: 'Your walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      'You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
    languageDescription:
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ',
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    alignment: 'N/A',
    skillProficiencies: {
      default: [Skill.PERCEPTION],
    },
  },
  {
    id: '20',
    name: 'Eladrin (MToF)',
    description:
      "Eladrin are elves native to the Feywild, a realm of beauty, unpredictable emotion, and boundless magic. An eladrin is associated with one of the four seasons and has coloration reminiscent of that season, which can also affect the eladrin's mood:\n\n- Autumn is the season of peace and goodwill, when summer's harvest is shared with all.\n- Winter is the season of contemplation and dolor, when the vibrant energy of the world slumbers.\n - Spring is the season of cheerfulness and celebration, marked by merriment as winter's sorrow passes.\n- Summer is the season of boldness and aggression, a time of unfettered energy.\n\nSome eladrin remain associated with a particular season for their entire lives, whereas other eladrin transform, adopting characteristics of a new season.\n\nWhen finishing a long rest, any eladrin can change their season. An eladrin might choose the season that is present in the world or perhaps the season that most closely matches the eladrin's current emotional state. For example, an eladrin might shift to autumn if filled with contentment, another eladrin could change to winter if plunged into sorrow, still another might be bursting with joy and become an eladrin of spring, and fury might cause an eladrin to change to summer.",
    flavorText:
      'Eladrin are elves native to the Feywild, a realm of beauty, unpredictable emotion, and boundless magic.',
    source: src.mordenkainenFoes,
    abilityScoreDescription:
      'Your Dexterity score increases by 2, and your Charisma score increases by 1.',
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
    age: 'Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.',
    size: Size.MEDIUM,
    sizeDescription:
      'Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    languageDescription: 'You can speak, read, and write Common and Elvish.',
    originLanguages: {
      default: [Language.ELVISH, Language.COMMON],
    },
    skillProficiencies: {
      default: [Skill.PERCEPTION],
    },
    creatureType: CreatureType.HUMANOID,
    alignment: 'N/A',
  },
  {
    id: '21',
    name: 'Fairy (MMOM)',
    description:
      'The Feywild is home to many fantastic peoples, including fairies. Fairies are a wee folk, but not nearly as much so as their pixie and sprite friends. The first fairies spoke Elvish, Goblin, or Sylvan, and encounters with human visitors prompted many of them to learn Common as well.',
    flavorText:
      'The Feywild is home to many fantastic peoples, including fairies.',
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
    sizeDescription: 'You are Small.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    flightDescription:
      'Because of your wings, you have a flying speed equal to your walking speed. You can’t use this flying speed if you’re wearing medium or heavy armor.',
    flightSpeed: 30,
    languageDescription:
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ',
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    age: 'N/A',
    alignment: 'N/A',
  },
  {
    id: '22',
    name: 'Fairy (TWBtW)',
    description:
      'The Feywild is home to many fantastic peoples, including fairies. Fairies are a wee folk, but not nearly as much so as their pixie and sprite friends. The first fairies spoke Elvish, Goblin, or Sylvan, and encounters with human visitors prompted many of them to learn Common as well.',
    flavorText:
      'The Feywild is home to many fantastic peoples, including fairies.',
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
    sizeDescription: 'You are Small.',
    speed: 30,
    age: 'Fairies have a lifespan of about a century.',
    alignment: 'N/A',
    speedDescription: 'Your base walking speed is 30 feet.',
    flightDescription:
      'Because of your wings, you have a flying speed equal to your walking speed. You can’t use this flying speed if you’re wearing medium or heavy armor.',
    flightSpeed: 30,
    languageDescription:
      'You can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character.',
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
    id: '23',
    name: 'Firbolg (MMOM)',
    description:
      'Distant cousins of giants, the first firbolgs wandered the primeval forests of the multiverse, and the magic of those forests entwined itself with the firbolgs’ souls. Centuries later, that magic still thrums inside a firbolg, even one who has never lived under the boughs of a great forest.\n\nA firbolg’s magic is an obscuring sort, which allowed their ancestors to pass through a forest without disturbing it. So deep is the connection between a firbolg and the wild places of the world that they can communicate with flora and fauna.',
    age: 'Firbolgs can live up to 500 years.',
    alignment: 'N/A',
    flavorText:
      'Distant cousins of giants, the first firbolgs wandered the primeval forests of the multiverse.',
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
    speedDescription: 'Your base walking speed is 30 feet.',
    size: Size.MEDIUM,
    sizeDescription: 'You are Medium.',
    languageDescription:
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ',
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
    id: '24',
    name: 'Firbolg (VGtM)',
    description:
      'Firbolgs are fey-oriented half-giants. Their tribes cloister in remote forest strongholds, preferring to spend their days in quiet harmony with the woods. When provoked, firbolgs demonstrate formidable skills with weapons and druidic magic.',
    flavorText: 'Firbolgs are fey-oriented half-giants.',
    source: src.volo,
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    alignment:
      'As people who follow the rhythm of nature and see themselves as its caretakers, firbolg are typically neutral good. Evil firbolg are rare and are usually the sworn enemies of the rest of their kind.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    sizeDescription:
      'Firbolgs are between 7 and 8 feet tall and weigh between 240 and 300 pounds. Your size is Medium.',
    languageDescription:
      'You can speak, read, and write Common, Elvish, and Giant.',
    originLanguages: {
      default: [Language.COMMON, Language.ELVISH, Language.GIANT],
    },
    abilityScoreDescription:
      'Your Wisdom score increases by 2, and your Strength score increases by 1.',
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
    age: 'As humanoids related to the fey, firbolg have long lifespans. A firbolg reaches adulthood around 30, and the oldest of them can live for 500 years.',
  },
  {
    id: '25',
    name: 'Air Genasi (MMOM)',
    description:
      'Tracing their ancestry to the genies of the Elemental Planes, each genasi can tap into the power of one of the elements. Air, earth, fire, and water — these are the four pillars of the Material Plane and the four types of genasi. Some genasi are direct descendants of a genie, while others were born to non-genasi parents who lived near a place suffused by a genie’s magic.\n\nAir genasi are descended from djinn, the genies of the Elemental Plane of Air. Embodying many of the airy traits of their otherworldly ancestors, air genasi can draw upon their connection to the winds.\n\nAir genasi’s skin tones include many shades of blue, along with the full range of human skin tones, with bluish or ashen casts. Sometimes their skin is marked by lines that seem like cracks with bluish-white energy spilling out. An air genasi’s hair might blow in a phantom wind or be made entirely of clouds or vapor.',
    flavorText:
      'Air genasi are descended from djinn, the genies of the Elemental Plane of Air.',
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
    speedDescription: 'Your base walking speed is 35 feet.',
    darkvision: 60,
    darkvisionDescription:
      'You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
    languageDescription:
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ',
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
    age: 'A typical genasi has a life span of 120 years',
    alignment: 'N/A',
  },
  {
    id: '26',
    name: 'Air Genasi (EEPC)',
    description:
      'Those who think of other planes at all consider them remote, distant realms, but planar influence can be felt throughout the world. It sometimes manifests in beings who, through an accident of birth, carry the power of the planes in their blood. The genasi are one such people, the offspring of genies and mortals.\n\nAs an air genasi, you are descended from the djinn. As changeable as the weather, your moods shift from calm to wild and violent with little warning, but these storms rarely last long.\n\nAir genasi typically have light blue skin, hair, and eyes. A faint but constant breeze accompanies them, tousling the hair and stirring the clothing. Some air genasi speak with breathy voices, marked by a faint echo. A few display odd patterns in their flesh or grow crystals from their scalps.',
    flavorText: 'As an air genasi, you are descended from the djinn.',
    abilityScoreDescription:
      'Your Constitution score increases by 2, and Dexterity score increases by 1.',
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
    age: 'Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.',
    alignment:
      'Independent and self-reliant, genasi tend toward a neutral alignment.',
    size: Size.MEDIUM,
    sizeDescription:
      'Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    languageDescription:
      'You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.',
    resistanceTo: [DamageTypes.LIGHTNING],
    originLanguages: {
      default: [Language.COMMON, Language.PRIMORDIAL],
    },
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '27',
    name: 'Earth Genasi (MMOM)',
    description:
      'Tracing their ancestry to the genies of the Elemental Planes, each genasi can tap into the power of one of the elements. Air, earth, fire, and water — these are the four pillars of the Material Plane and the four types of genasi. Some genasi are direct descendants of a genie, while others were born to non-genasi parents who lived near a place suffused by a genie’s magic.\n\nTracing their ancestry to dao, the genies of the Elemental Plane of Earth, earth genasi inherit dao’s steadfast strength and control over earth.\n\nAn earth genasi’s skin can be the colors of stone and earth or a human skin tone with glittering sparkles like gem dust. Some earth genasi have lines marking their skin like cracks, either showing glimmering gemlike veins or a dim, yellowish glow. Earth genasi hair can appear carved of stone or crystal or resemble strands of spun metal.',
    flavorText:
      'Earth genasi inherit dao’s steadfast strength and control over earth.',
    age: 'A typical genasi has a life span of 120 years',
    alignment: 'N/A',
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
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      'You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
    languageDescription:
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ',
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
    id: '28',
    name: 'Earth Genasi (EEPC)',
    description:
      'Those who think of other planes at all consider them remote, distant realms, but planar influence can be felt throughout the world. It sometimes manifests in beings who, through an accident of birth, carry the power of the planes in their blood. The genasi are one such people, the offspring of genies and mortals.\n\nAs an earth genasi, you are descended from the cruel and greedy dao, though you aren’t necessarily evil. You have inherited some measure of control over earth, reveling in superior strength and solid power. You tend to avoid rash decisions, pausing long enough to consider your options before taking action.\n\nElemental earth manifests differently from one individual to the next. Some earth genasi always have bits of dust falling from their bodies and mud clinging to their clothes, never getting clean no matter how often they bathe. Others are as shiny and polished as gemstones, with skin tones of deep brown or black, eyes sparkling like agates. Earth genasi can also have smooth metallic flesh, dull iron skin spotted with rust, a pebbled and rough hide, or even a coating of tiny embedded crystals. The most arresting have fissures in their flesh, from which faint light shines.',
    age: 'Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.',
    alignment:
      'Independent and self-reliant, genasi tend toward a neutral alignment.',
    size: Size.MEDIUM,
    sizeDescription:
      'Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    creatureType: CreatureType.HUMANOID,
    flavorText:
      'As an earth genasi, you are descended from the cruel and greedy dao.',
    source: src.eepc,
    abilityScoreDescription:
      'Your Strength score increases by 2, and your Constitution score increases by 1.',
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
      'You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.',
    originLanguages: {
      default: [Language.COMMON, Language.PRIMORDIAL],
    },
  },
  {
    id: '29',
    name: 'Fire Genasi (MMOM)',
    description:
      'Tracing their ancestry to the genies of the Elemental Planes, each genasi can tap into the power of one of the elements. Air, earth, fire, and water — these are the four pillars of the Material Plane and the four types of genasi. Some genasi are direct descendants of a genie, while others were born to non-genasi parents who lived near a place suffused by a genie’s magic.\n\nDescended from efreet, the genies of the Elemental Plane of Fire, fire genasi channel the flamboyant and often destructive nature of flame. They show their heritage in their skin tones, which can range from deep charcoal to shades of red and orange. Some bear skin tones common to humanity but with fiery marks, such as slowly swirling lights under their skin that resemble embers or glowing red lines tracing over their bodies like cracks. Fire genasi hair can resemble threads of fire or sooty smoke.',
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
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      'You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
    resistanceTo: [DamageTypes.FIRE],
    languageDescription:
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ',
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
      'Descended from efreet, the genies of the Elemental Plane of Fire.',
    age: 'A typical genasi has a life span of 120 years',
    alignment: 'N/A',
  },
  {
    id: '30',
    name: 'Fire Genasi (EEPC)',
    description:
      'Those who think of other planes at all consider them remote, distant realms, but planar influence can be felt throughout the world. It sometimes manifests in beings who, through an accident of birth, carry the power of the planes in their blood. The genasi are one such people, the offspring of genies and mortals.\n\nAs a fire genasi, you have inherited the volatile mood and keen mind of the efreet. You tend toward impatience and making snap judgments. Rather than hide your distinctive appearance, you exult in it.\n\nNearly all fire genasi are feverishly hot as if burning inside, an impression reinforced by flaming red, coal- black, or ash-gray skin tones. The more human-looking have fiery red hair that writhes under extreme emotion, while more exotic specimens sport actual flames dancing on their heads. Fire genasi voices might sound like crackling flames, and their eyes flare when angered. Some are accompanied by the faint scent of brimstone.',
    flavorText:
      'As a fire genasi, you have inherited the volatile mood of the efreet.',
    source: src.eepc,
    abilityScoreDescription:
      'Your Intelligence score increases by 1, and your Constitution score increases by 2.',
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
    speedDescription: 'Your base walking speed is 30 feet.',
    alignment:
      'Independent and self-reliant, genasi tend toward a neutral alignment.',
    age: 'Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.',
    sizeDescription:
      'Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall. Your size is Medium.',
    darkvision: 60,
    darkvisionDescription:
      'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. Your ties to the Elemental Plane of Fire make your darkvision unusual: everything you see in darkness is in a shade of red.',
    languageDescription:
      'You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.',
    originLanguages: {
      default: [Language.COMMON, Language.PRIMORDIAL],
    },
  },
  {
    id: '31',
    name: 'Water Genasi (MMOM)',
    description:
      'Tracing their ancestry to the genies of the Elemental Planes, each genasi can tap into the power of one of the elements. Air, earth, fire, and water — these are the four pillars of the Material Plane and the four types of genasi. Some genasi are direct descendants of a genie, while others were born to non-genasi parents who lived near a place suffused by a genie’s magic.\n\nWater genasi descend from marids, aquatic genies from the Elemental Plane of Water. Water genasi are perfectly suited to life underwater and carry the power of the waves inside themselves.\n\nTheir skin is often shades of blue or green, sometimes a blend of the two. If they have a human skin tone, there is a glistening texture that catches the light, like water droplets or nearly invisible fish scales. Their hair can resemble seaweed, waving as if in a current, or it can even be like water itself.',
    flavorText: 'Water genasi descend from marids, aquatic genies.',
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
    speedDescription: 'Your base walking speed is 30 feet.',
    swimSpeed: 30,
    swimDescription: 'You have a swimming speed equal to your walking speed.',
    darkvision: 60,
    darkvisionDescription:
      'You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
    resistanceTo: [DamageTypes.ACID],
    sizeDescription:
      'You are Medium or Small. You choose the size when you select this species.',
    languageDescription:
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ',
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    age: 'A typical genasi has a life span of 120 years',
    alignment: 'N/A',
  },
  {
    id: '32',
    name: 'Water Genasi (EEPC)',
    description:
      'Those who think of other planes at all consider them remote, distant realms, but planar influence can be felt throughout the world. It sometimes manifests in beings who, through an accident of birth, carry the power of the planes in their blood. The genasi are one such people, the offspring of genies and mortals.\n\nThe lapping of waves, the spray of sea foam on the wind, the ocean depths — all of these things call to your heart. You wander freely and take pride in your independence, though others might consider you selfish.\n\nMost water genasi look as if they just finished bathing, with beads of moisture collecting on their skin and hair. They smell of fresh rain and clean water. Blue or green skin is common, and most have somewhat overlarge eyes, blue-black in color. A water genasi’s hair might float freely, swaying and waving as if underwater. Some have voices with undertones reminiscent of whale song or trickling streams.',
    flavorText: 'The lapping of waves, the spray of sea foam on the wind.',
    source: src.eepc,
    abilityScoreDescription: 'Your Wisdom score increases by 1.',
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
    age: 'Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.',
    alignment:
      'Independent and self-reliant, genasi tend toward a neutral alignment.',
    size: Size.MEDIUM,
    sizeDescription:
      'Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    swimDescription: 'You have a swimming speed of 30 feet.',
    swimSpeed: 30,
    languageDescription:
      'You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.',
    originLanguages: {
      default: [Language.COMMON, Language.PRIMORDIAL],
    },
  },
  {
    id: '33',
    name: 'Githyanki (MMOM)',
    description:
      'Once members of a people who escaped servitude to mind flayers, githyanki split from their cousins, githzerai, and fled to the Astral Plane. In that timeless, silvery realm, githyanki honed their psionic powers and built a great city called Tu’narath. They have since spread throughout the multiverse, starting in outposts outside the Astral Plane, called creches, where time passes and their children can reach adulthood.\n\nA lanky people with skin tones of yellows, greens, and browns, githyanki complement their physical prowess with psionic might, instilled in them by mind flayers and cultivated over eons in the Astral Plane. Now all githyanki can use their psychic bond with that plane to access splinters of knowledge left behind by beings who travel, live, and die among the silver astral clouds.',
    age: 'Githyanki who reside in the Astral Plane can live indefinitely.',
    flavorText:
      'Once members of a people who escaped servitude to mind flayers.',
    alignment: 'N/A',
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    source: src.mordenkainenMonsters,
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    sizeDescription: 'You are Medium.',
    languageDescription:
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character.',
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
    resistanceTo: [DamageTypes.PSYCHIC],
  },
  {
    id: '34',
    name: 'Githyanki (MToF)',
    description:
      "The warlike githyanki and the contemplative githzerai are a sundered people – two cultures that utterly despise one another. The brutal githyanki are trained from birth as warriors, while the githzerai hone their minds to a razor’s edge in their fortresses within Limbo. But before there were githyanki or githzerai, these creatures were a single species enslaved by the illithids.\n\nAlthough they attempted to overthrow their masters many times, their rebellions were repeatedly crushed until a great leader named Gith arose. After much bloodshed, Gith and her followers threw off the yoke of their illithid masters, but another leader named Zerthimon emerged in the aftermath of battle. Zerthimon challenged Gith's motives, claiming that her strict martial leadership and desire for vengeance amounted to little more than another form of slavery for her people. A rift erupted between followers of each leader, and they eventually became the two races whose enmity endures to this day: the Githyanki in the way of Gith, and the Githzerai in the way of Zerthimon.\n\nThe githyanki plunder countless worlds from the decks of their astral vessels and the backs of red dragons. Feathers, beads, gems, and precious metals decorate their armor and weapons – the legendary silver swords with which they cut through their foes. Since winning their freedom from the illithids, the githyanki have become ruthless conquerors under the rulership of their dread lich-queen, Vlaakith.",
    flavorText:
      'The warlike githyanki and the contemplative githzerai are a sundered people.',
    source: src.mordenkainenFoes,
    abilityScoreDescription:
      'Your Strength score increases by 2, and your Intelligence score increases by 1.',
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
    age: 'Gith reach adulthood in their late teens and live for about a century.',
    size: Size.MEDIUM,
    sizeDescription:
      'Gith are taller and leaner than humans, with most a slender 6 feet in height. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    alignment:
      'Githyanki tend toward lawful evil. They are aggressive and arrogant, and they remain the faithful servants of their lich-queen, Vlaakith. Renegade githyanki tend toward chaos.',
    languageDescription: 'You can speak, read, and write Common and Gith.',
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
    id: '35',
    name: 'Githzerai (MMoM)',
    description:
      'Githzerai migrated to the Everchanging Chaos of Limbo after the ancient schism that split their ancestors from their cousins, githyanki. Limbo is a roiling maelstrom of matter and energy, collapsing and reforming without purpose or direction, until a creature exerts deliberate will to stabilize it. Through their potent psionic power, githzerai carved a home for themselves amid the chaos. As the ages passed, githzerai explorers ranged out to other planes and worlds of the multiverse.\n\nGithzerai are generally slender, with speckled skin in shades of yellow, green, or brown. Eons of cultivating their mental powers within the endless chaos of Limbo have imbued githzerai with the ability to shape psionic energy to protect themselves and probe minds.',
    flavorText: 'Githzerai migrated to the Everchanging Chaos of Limbo.',
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
    sizeDescription: 'You are Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    languageDescription:
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character.',
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
    age: 'N/A',
    alignment: 'N/A',
  },
  {
    id: '36',
    name: 'Githzerai (MToF)',
    description:
      "The warlike githyanki and the contemplative githzerai are a sundered people – two cultures that utterly despise one another. The brutal githyanki are trained from birth as warriors, while the githzerai hone their minds to a razor’s edge in their fortresses within Limbo. But before there were githyanki or githzerai, these creatures were a single species enslaved by the illithids.\n\nAlthough they attempted to overthrow their masters many times, their rebellions were repeatedly crushed until a great leader named Gith arose. After much bloodshed, Gith and her followers threw off the yoke of their illithid masters, but another leader named Zerthimon emerged in the aftermath of battle. Zerthimon challenged Gith's motives, claiming that her strict martial leadership and desire for vengeance amounted to little more than another form of slavery for her people. A rift erupted between followers of each leader, and they eventually became the two races whose enmity endures to this day: the Githyanki in the way of Gith, and the Githzerai in the way of Zerthimon.\n\nWhether these tall, gaunt creatures were peaceful or savage, cultured or primitive before the illithids enslaved and changed them, none can say. Not even the original name of their species remains from that distant time.\n\nFocused philosophers and austere ascetics, the githzerai pursue lives of rigid order. Lean and muscular, they wear unadorned clothing free of ornamentation, keeping their own counsel and trusting few creatures outside of their own kind. Having turned their backs on their warlike githyanki kin, the githzerai maintain a strict monastic lifestyle, dwelling on islands of order in the vast sea of chaos that is the plane of Limbo.",
    flavorText: 'Focused philosophers and austere ascetics.',
    source: src.mordenkainenFoes,
    abilityScoreDescription:
      'Your Wisdom score increases by 2, and your Intelligence score increases by 1.',
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
    age: 'Githzerai reach adulthood in their late teens and live for about a century.',
    size: Size.MEDIUM,
    sizeDescription:
      'Githzerai are taller and leaner than humans, with most a slender 6 feet in height. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    alignment:
      'Githzerai tend toward lawful neutral. Their rigorous training in psychic abilities requires an implacable mental discipline.',
    languageDescription: 'You can speak, read, and write Common and Gith.',
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
    id: '37',
    name: 'Goliath (MMOM)',
    description:
      'The first goliaths lived on the highest mountain peaks — far above the tree line, where the air is thin and frigid winds howl. Distantly related to giants and infused with the supernatural essence of their ancestors’ mountainous home, goliaths stand between 7 and 8 feet tall and have a wide array of skin tones resembling different types of stone.',
    flavorText:
      'Distantly related to giants and infused with the supernatural essence.',
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
    speedDescription: 'Your base walking speed is 30 feet.',
    languageDescription:
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ',
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    age: 'Goliaths have lifespans comparable to humans. They enter adulthood in their late teens and usually live less than a century.',
    alignment: 'N/A',
    skillProficiencyDescription: 'You have proficiency in the Athletics skill.',
    skillProficiencies: {
      default: [Skill.ATHLETICS],
    },
    resistanceTo: [DamageTypes.COLD],
  },
  {
    id: '38',
    name: 'Goliath (EEPC)',
    description:
      'At the highest mountain peaks dwell the reclusive goliaths, wandering a bleak realm of rock, wind, and cold. Their bodies look as if they are carved from mountain stone and give them great physical power. Their hearts are infused with the cold regard of their frigid realm, leaving each goliath with the responsibility to earn a place in the tribe or die trying.',
    flavorText: 'At the highest mountain peaks dwell the reclusive goliaths.',
    source: src.eepc,
    abilityScoreDescription:
      'Your Strength score increases by 2, and your Constitution score increases by 1.',
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
    age: 'Goliaths have lifespans comparable to humans. They enter adulthood in their late teens and usually live less than a century.',
    alignment:
      'Goliath society, with its clear roles and tasks, has a strong lawful bent. The goliath sense of fairness, balanced with an emphasis on self-sufficiency and personal accountability, pushes them toward neutrality.',
    sizeDescription:
      'Goliaths are between 7 and 8 feet tall and weigh between 280 and 340 pounds. Your size is Medium.',
    size: Size.MEDIUM,
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    skillProficiencyDescription: 'You have proficiency in the Athletics skill.',
    skillProficiencies: {
      default: [Skill.ATHLETICS],
    },
    resistanceTo: [DamageTypes.COLD],
    creatureType: CreatureType.HUMANOID,
    languageDescription: 'You can speak, read, and write Common and Giant.',
    originLanguages: {
      default: [Language.COMMON, Language.GIANT],
    },
  },
  {
    id: '39',
    name: 'Harengon (MMOM)',
    description:
      'Harengons originated in the Feywild, where they spoke Sylvan and embodied the spirit of freedom and travel. In time, these rabbitfolk hopped into other worlds, bringing the fey realm’s exuberance with them and learning new languages as they went.\n\nHarengons are bipedal, with the characteristic long feet of the rabbits they resemble and fur in a variety of colors. They share the keen senses and powerful legs of leporine creatures and are full of energy, like a wound-up spring. Harengons are blessed with a little fey luck, and they often find themselves a few fortunate feet away from dangers during adventures.',
    flavorText: 'Harengons originated in the Feywild, where they spoke Sylvan.',
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
    sizeDescription: 'You are Medium or Small.',
    speedDescription: 'Your base walking speed is 30 feet.',
    languageDescription:
      ' Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ',
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
      'You have proficiency in the Perception skill.',
    skillProficiencies: {
      default: [Skill.PERCEPTION],
    },
    alignment: 'N/A',
    age: 'N/A',
  },
  {
    id: '40',
    name: 'Harengon (TWBtW)',
    description:
      "Harengons originated in the Feywild, where they spoke Sylvan and embodied the spirit of freedom and travel. In time, these rabbitfolk hopped into other worlds, bringing the fey realm's exuberance with them and learning new languages as they went.\n\nHarengons are bipedal, with the characteristic long feet of the rabbits they resemble and fur in a variety of colors. They share the keen senses and powerful legs of leporine creatures and are full of energy, like a wound-up spring. Harengons are blessed with a little fey luck, and they often find themselves a few fortunate feet away from dangers during adventures.",
    flavorText: 'Harengons originated in the Feywild, where they spoke Sylvan.',
    source: src.witchlight,
    abilityScoreDescription:
      'Increase one ability score by 2, and increase a different one by 1, or increase three different scores by 1.',
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
    sizeDescription: 'You are Medium or Small.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    languageDescription:
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character.',
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
      'You have proficiency in the Perception skill.',
    skillProficiencies: {
      default: [Skill.PERCEPTION],
    },

    alignment: 'N/A',
    age: 'N/A',
  },
  {
    id: '41',
    name: 'Kenku (MMOM)',
    description:
      'Feathered folk who resemble ravens, kenku are blessed with keen observation and supernaturally accurate memories. None of them can remember the origin of the first kenku, however, and they often joke that there are as many kenku origin stories as there are kenku. Some of them paint their genesis as a curse, being a flightless bird people doomed to mimic other people’s creations. Other kenku recite cryptic but beautiful poems about their advent being a blessed event in which they were sent into the multiverse to observe and catalog its many wonders.\n\nWhatever their true origin, kenku are most often found in the Shadowfell and the Material Plane, and they tend to have the coloration typical of ravens.',
    flavorText: 'Feathered folk who resemble ravens.',
    source: src.mordenkainenMonsters,
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    sizeDescription: 'You are Medium or Small.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    languageDescription:
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character.',
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
      'Thanks to your supernaturally good memory, you have proficiency in two skills of your choice. ',
    skillProficiencies: {
      choices: [
        {
          options: Object.values(Skill),
          numberOfChoices: 2,
        },
      ],
    },
    alignment: 'N/A',
    age: 'N/A',
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
  },
  {
    id: '42',
    name: 'Kenku (VGM)',
    description:
      'Haunted by an ancient crime that robbed them of their wings, the flightless kenku wander the world as vagabonds and burglars who live at the edge of human society. Kenku suffer from a sinister reputation that is not wholly unearned, but they can prove to be valuable allies.',
    flavorText: 'Haunted by an ancient crime that robbed them of their wings.',
    source: src.volo,
    abilityScoreDescription:
      'Your Dexterity score increases by 2, and your Wisdom score increases by 1.',
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
    age: 'Kenku have shorter lifespans than humans. They reach maturity at about 12 years old and can live to 60.',
    alignment:
      'Kenku are chaotic creatures, rarely making enduring commitments, and they care mostly for preserving their own hides. They are generally chaotic neutral in outlook.',
    size: Size.MEDIUM,
    sizeDescription:
      'Kenku are around 5 feet tall and weigh between 90 and 120 pounds. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    skillProficiencyDescription:
      'You are proficient in your choice of two of the following skills: Acrobatics, Deception, Stealth, and Sleight of Hand.',
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
      'You can read and write Common and Auran, but you can speak only by using your Mimicry trait.',
    originLanguages: {
      default: [Language.COMMON, Language.AURAN],
    },
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '43',
    name: 'Locathah',
    description:
      'These resilient and proud fish-folk have endured war, slavery, and mistreatment at the hands of other aquatic creatures. They dwell in submerged tribal communities along seacoasts, and hunt both above and below the water.',
    flavorText:
      'These resilient and proud fish-folk have endured war, slavery, and mistreatment.',
    source: src.locathah,
    abilityScoreDescription:
      'Your Strength score increases by 2 and your Dexterity score increases by 1.',
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
    age: 'Locathah reach maturity at 10 years and live up to 80 years.',
    alignment:
      'Most locathah are true neutral or have some aspect of neutrality in their alignment. They tend toward good, coming from a culture where compassion for the downtrodden is a commonality.',
    size: Size.MEDIUM,
    sizeDescription:
      ' Locathah stand between 5 and 6 feet tall and average about 150 pounds. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    skillProficiencyDescription:
      'You have proficiency in the Athletics and Perception skills.',
    skillProficiencies: {
      default: [Skill.ATHLETICS, Skill.PERCEPTION],
    },
    languageDescription: 'You can speak, read, and write Aquan and Common.',
    originLanguages: {
      default: [Language.COMMON, Language.AQUAN],
    },
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '44',
    name: 'Owlin',
    description:
      'Distant kin of giant owls from the Feywild, owlin come in many shapes and sizes, from petite and fluffy to wide-winged and majestic. Owlin have arms and legs like other Humanoids, as well as wings that extend from their back and shoulders. Like owls, owlin are gspeciesd with feathers that make no sound when they move or fly, making it easy for them to sneak up on you in the library.\n\nYour owlin character might be nocturnal. Or perhaps your character is simply prone to rise later, embodying the common nickname of night owl.',
    flavorText: 'Distant kin of giant owls from the Feywild.',
    source: src.strixhaven,
    abilityScoreDescription:
      'Increase one ability score by 2, and increase a different one by 1.',
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
    speedDescription: 'Your base walking speed is 30 feet.',
    languageDescription:
      'You can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character.',
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
    skillProficiencyDescription: 'You have proficiency in the Stealth skill.',
    darkvisionDescription:
      'You can see in dim light within 120 feet of yourself as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
    darkvision: 120,
    flightSpeed: 30,
    flightDescription:
      "Thanks to your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.",
    age: 'N/A',
    alignment: 'N/A',
  },
  {
    id: '45',
    name: 'Satyr',
    description:
      'Originating in the Feywild — a realm of pure emotion-satyrs thrive on the energy of merriment. They resemble elves but have goatlike legs, cloven hooves, and ram or goat horns. The magic of the fey realm has given them an innate ability to perform, to delight, and to resist magical intrusion. While they’re usually found in the Feywild, satyrs do wander to other planes of existence, most often to the Material Plane. There they seek to bring a bit of their home plane’s splendor to other worlds.',
    flavorText:
      'Originating in the Feywild, satyrs thrive on the energy of merriment.',
    source: src.mordenkainenMonsters,
    abilityScoreDescription:
      "When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1. You can't raise any of your scores above 20.",
    creatureType: CreatureType.FEY,
    size: Size.MEDIUM,
    sizeDescription: 'You are Medium.',
    speed: 35,
    speedDescription: 'Your base walking speed is 35 feet.',
    languageDescription:
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ',
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
      'You have proficiency in the Performance and Persuasion skill.',
    skillProficiencies: {
      default: [Skill.PERFORMANCE, Skill.PERSUASION],
    },
    alignment: 'N/A',
    age: 'N/A',
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
  },
  {
    id: '46',
    name: 'Satyr (MOoT)',
    description:
      'Satyrs have a well-earned reputation for their good spirits, gregarious personalities, and love of revels. Most satyrs are driven by simple desires, to see the world and to sample its every pleasure. While their spontaneity and whimsy sometimes put them at odds with more stoic peoples, satyrs rarely let the moodiness of others hinder their own happiness. Life is a blessing from the gods, after all, and the proper response to such a gift, as far as most satyrs are concerned, is to accept it with relish.',
    flavorText: 'Satyrs have a well-earned reputation for their good spirits.',
    source: src.theros,
    abilityScoreDescription:
      'Your Charisma score increases by 2, and your Dexterity score increases by 1.',
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
    age: 'Satyrs mature and age at about the same rate as humans.',
    alignment:
      'Satyrs delight in living a life free of the mantle of law. They gravitate toward being good, but some have devious streaks and enjoy causing dismay.',
    size: Size.MEDIUM,
    sizeDescription:
      'Satyrs range from just under 5 feet to about 6 feet in height, with generally slender builds. Your size is medium.',
    speed: 35,
    speedDescription: 'Your base walking speed is 35 feet.',
    languageDescription: 'You can speak, read, and write Common and Sylvan.',
    originLanguages: {
      default: [Language.COMMON, Language.SYLVAN],
    },
    skillProficiencyDescription:
      'You have proficiency in the Performance and Stealth skills.',
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
  },
  {
    id: '47',
    name: 'Sea Elf (MMOM)',
    description:
      'Sea elves fell in love with the wild beauty of the ocean in the earliest days of the multiverse. While other elves traveled from realm to realm, sea elves navigated the currents and explored the waters of many worlds. Today these elves can be found wherever oceans exist, as well as in the Elemental Plane of Water.',
    flavorText: 'Sea elves fell in love with the wild beauty of the ocean.',
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
      'Your walking speed is 30 feet, and you have a swimming speed equal to your walking speed.',
    resistanceTo: [DamageTypes.COLD],
    darkvision: 60,
    darkvisionDescription:
      'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
    languageDescription:
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ',
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
      'You have proficiency in the Perception skill.',
    alignment: 'N/A',
    age: 'Like other elves, sea elves can live to be over 750 years old.',
  },
  {
    id: '48',
    name: 'Sea Elf (MToF)',
    description:
      'Sea elves fell in love with the wild beauty of the ocean in the earliest days of the multiverse. While other elves traveled from realm to realm, the sea elves navigated the deepest currents and explored the waters across a hundred worlds. Today, they live in small, hidden communities in the ocean shallows and on the Elemental Plane of Water.',
    flavorText: 'Sea elves fell in love with the wild beauty of the ocean.',
    source: src.mordenkainenFoes,
    abilityScoreDescription:
      'Your Dexterity score increases by 2, and your Constitution score increases by 1.',
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
    age: 'Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.',
    size: Size.MEDIUM,
    sizeDescription:
      'Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    skillProficiencies: {
      default: [Skill.PERCEPTION],
    },
    swimSpeed: 30,
    languageDescription:
      'You can speak, read, and write Common, Elven, and Aquan.',
    originLanguages: {
      default: [Language.COMMON, Language.ELVISH, Language.AQUAN],
    },
    alignment: 'N/A',
    weaponProficiencies: {
      default: [
        weaponIds.spear,
        weaponIds.trident,
        weaponIds.crossbowLight,
        weaponIds.net,
      ],
    },
    weaponProficiencyDescription:
      'You have proficiency with the spear, trident, light crossbow, and net.',
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '49',
    name: 'Shadar Kai (MMOM)',
    description:
      'Shadar-kai are the elves of the Shadowfell, originally drawn to that dread realm by the Raven Queen. Over the centuries, some of them have continued to serve her, while others have ventured into the Material Plane to forge their own destinies.\n\nOnce shadar-kai were Fey like the rest of their elven kin; now they exist in a state between life and death, thanks to being transformed by the Shadowfell’s grim energy.\n\nShadar-kai have ashen skin tones, and while they’re in the Shadowfell, they also become wizened, reflecting the somber nature of that gloomy plane.',
    age: 'Like other elves, shadar-kai can live to be over 750 years old.',
    source: src.mordenkainenMonsters,
    flavorText: 'Shadar-kai are the elves of the Shadowfell.',
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
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
    skillProficiencies: {
      default: [Skill.PERCEPTION],
    },
    skillProficiencyDescription:
      'You have proficiency in the Perception skill.',
    resistanceTo: [DamageTypes.NECROTIC],
    languageDescription:
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character.',
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    alignment: 'N/A',
  },
  {
    id: '50',
    name: 'Shadar Kai (MToF)',
    description:
      "Sworn to the Raven Queen's service, the mysterious shadar-kai venture into the Material Plane from the Shadowfell to advance her will. Once they were fey like the rest of their elven kin, and now they exist in a strange state between life and death. Eladrin and shadar-kai are like reflections of each other: one bursting with emotion, the other nearly devoid of it.",
    flavorText:
      "Sworn to the Raven Queen's service, the mysterious shadar-kai.",
    source: src.mordenkainenFoes,
    size: Size.MEDIUM,
    sizeDescription:
      'Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.',
    speed: 30,
    age: ' Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.',
    abilityScoreDescription:
      'Your Dexterity score increases by 2, and your Constitution score increases by 1.',
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
      'You have proficiency in the Perception skill.',
    languageDescription: 'You can speak, read, and write Common and Elvish.',
    originLanguages: {
      default: [Language.COMMON, Language.ELVISH],
    },
    alignment: 'N/A',
    creatureType: CreatureType.HUMANOID,
    speedDescription: 'Your base walking speed is 30 feet.',
  },
  {
    id: '51',
    name: 'Tabaxi (MMOM)',
    description:
      'Created by the Cat Lord—a divine being of the Upper Planes—to blend the qualities of humanoids and cats, tabaxi are a varied people in both attitude and appearance. In some lands, tabaxi live like the cats they resemble, naturally curious and at home in playful environments. In other places, tabaxi live as other folk do, not exhibiting the feline behavior the Cat Lord intended.\n\nTabaxi’s appearance is as varied as their attitudes. Some tabaxi have features or patterning in their fur like tigers, jaguars, or other big cats, while others have appearances more like a house cat. Still others have unique patterns or might style their fur to their preferences — or might even be hairless!',
    flavorText: 'Created by the Cat Lord, tabaxi are a varied people.',
    source: src.mordenkainenMonsters,
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    sizeDescription:
      'You are Medium or Small. You choose the size when you select this species.',
    speed: 30,
    speedDescription: 'Your walking speed is 30 feet.',
    climbDescription: 'You have a climbing speed equal to your walking speed.',
    climbSpeed: 30,
    darkvision: 60,
    darkvisionDescription: 'You can see in dim light within 60 feet of you.',
    age: 'N/A',
    alignment: 'N/A',

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
      'You have proficiency in the Perception and Stealth skills.',
    languageDescription:
      'You can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character.',
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
    id: '52',
    name: 'Tabaxi (VGM)',
    description:
      "Hailing from a strange and distant land, wandering tabaxi are catlike humanoids driven by curiosity to collect interesting artifacts, gather tales and stories, and lay eyes on all the world's wonders. Ultimate travelers, the inquisitive tabaxi rarely stay in one place for long. Their innate nature pushes them to leave no secrets uncovered, no treasures or legends lost.",
    flavorText: 'Hailing from a strange and distant land, wandering tabaxi.',
    source: src.volo,
    abilityScoreDescription:
      'Your Dexterity score increases by 2, and your Charisma score increases by 1.',
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
    age: 'Tabaxi have lifespans equivalent to humans.',
    alignment:
      'Tabaxi tend toward chaotic alignments, as they let impulse and fancy guide their decisions. They are rarely evil, with most of them driven by curiosity rather than greed or other dark impulses.',
    size: Size.MEDIUM,
    sizeDescription:
      'Tabaxi are taller on average than humans and relatively slender. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      "You have a cat's keen senses, especially in the dark. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    languageDescription:
      'You can speak, read, and write Common and one other language of your choice.',
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
  },
  {
    id: '53',
    name: 'Tortle (MMOM)',
    description:
      'Tortles have a saying: “We wear our homes on our backs.” These turtle folk live on many worlds, most often journeying up and down coasts, along waterways, and across the sea. Tortles don’t have a unified story of how they were created, but they all have a sense of being mystically connected to the natural world. Carrying their shelter on their backs gives tortles a special feeling of security wherever they go, for even if they visit a far, unknown country, they have a place to lay their heads\n\nTortles exhibit the same range of coloration and patterns found among turtles, and many tortles enjoy adorning their shells in distinctive ways.',
    flavorText: 'Tortles have a saying: “We wear our homes on our backs.',
    source: src.mordenkainenMonsters,
    age: 'N/A',
    alignment: 'N/A',
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
      'You are Medium or Small. You choose the size when you select this species.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    skillProficiencyDescription:
      'You gain proficiency with one of the following skills of your choice: Animal Handling, Medicine, Nature, Perception, Stealth, or Survival.',
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
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character.',
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
    id: '54',
    name: 'Tortle (TP)',
    description:
      "What many tortles consider a simple life, others might call a life of adventure. Tortles are born near sandy coastlines, but as soon as they're able to walk on two legs, they become nomad survivalists eager to explore the wilderness, experience its many wonders, put their skills to the test, and make new acquaintances.",
    flavorText: 'Tortles are born near sandy coastlines.',
    abilityScoreDescription:
      'Your Strength score increases by 2, and your Wisdom score increases by 1.',
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
    age: 'Young tortles crawl for a few weeks after birth before learning to walk on two legs. They reach adulthood by the age of 15 and live an average of 50 years.',
    alignment:
      "Tortles tend to lead orderly, ritualistic lives. They develop customs and routines, becoming more set in their ways as they age. Most are lawful good. A few can be selfish and greedy, tending more toward evil, but it's unusual for a tortle to shuck off order in favor of chaos.",
    size: Size.MEDIUM,
    sizeDescription:
      'Tortle adults stand 5 to 6 feet tall and average 450 pounds. Their shells account for roughly one-third of their weight. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    skillProficiencyDescription: 'You have proficiency in the Survival skill.',
    skillProficiencies: {
      default: [Skill.SURVIVAL],
    },
    languageDescription: 'You can speak, read, and write Common and Aquan.',
    originLanguages: {
      default: [Language.COMMON, Language.AQUAN],
    },
    source: src.tortle,
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '55',
    name: 'Triton (MMOM)',
    description:
      'Originally from the Elemental Plane of Water, many tritons entered the Material Plane centuries ago in response to the growing threat of evil elementals. Those tritons spread across the worlds’ oceans, protecting the surface from terrors in the deep. Over time, triton have extended their stewardship over the sea floor to the ocean’s surface.\n\nTritons have webbed hands and feet, small fins on their calves, and coloration that favors blues and greens.',
    flavorText: 'Originally from the Elemental Plane of Water, many tritons.',
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
    sizeDescription: 'You are Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    swimDescription: 'You have a swimming speed equal to your walking speed.',
    swimSpeed: 30,
    darkvision: 60,
    darkvisionDescription:
      'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
    resistanceTo: [DamageTypes.COLD],
    languageDescription:
      'Your character can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character. ',
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    age: 'N/A',
    alignment: 'N/A',
  },
  {
    id: '56',
    name: 'Triton (VGM)',
    description:
      'Tritons guard the ocean depths, building small settlements beside deep trenches, portals to the elemental planes, and other dangerous spots far from the eyes of land-bound folk. Long-established guardians of the deep ocean floor, the noble tritons have gradually become increasingly active in the world above.',
    source: src.volo,
    abilityScoreDescription:
      'Your Strength, Constitution, and Charisma scores each increase by 1.',
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
    age: 'Tritons reach maturity at the age of 15 and can live up to 200 years.',
    alignment:
      'Tritons tend toward lawful good. As guardians of the darkest reaches of the sea, their culture pushes them toward order and benevolence.',
    size: Size.MEDIUM,
    sizeDescription:
      'Tritons are slightly shorter than humans, averaging about 5 feet tall. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    swimDescription: 'You have a swimming speed of 30 feet.',
    swimSpeed: 30,
    darkvision: 60,
    darkvisionDescription:
      'You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
    languageDescription:
      'You can speak, read, and write Common and Primordial.',
    originLanguages: {
      default: [Language.COMMON, Language.PRIMORDIAL],
    },
    creatureType: CreatureType.HUMANOID,
    flavorText: 'Tritons guard the ocean depths.',
  },
  {
    id: '57',
    name: 'Verdan',
    description:
      'Verdan owe their existence to chaos. Descendants of goblins and hobgoblins, transformed by the shadow of That-Which-Endures. They are THE newest species of Faerûn.',
    flavorText: 'Verdan owe their existence to chaos.',
    source: src.aquisitions,
    abilityScoreDescription:
      'Your Charisma score increases by 2, and your Constitution score increases by 1.',
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
    age: 'Verdan reach adulthood at age 24 and live up to 200 years. Saying this, none have yet to reach old age, so the top age is is just speculation.',
    alignment:
      'Verdans are usually good aligned. Saying this, because of how new they are, there is not much of a framework of how they should align.',
    size: Size.SMALL,
    sizeDescription:
      'Verdans are between 3 and 4 feet tall at the start. Your size is Small until you reach 5th level where you get a 2 foot growth spurt and become a Medium creature.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    skillProficiencies: {
      default: [Skill.PERSUASION],
    },
    skillProficiencyDescription:
      'You have proficiency in the Persuasion skill.',
    creatureType: CreatureType.HUMANOID,
    languageDescription:
      'You can speak, read, and write Common, Goblin, and one additional language.',
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
  },
  {
    id: '58',
    name: 'Kender',
    description:
      'During the mythical origins of Krynn, Reorx, god of craft, indulged in an age of unfettered creation. Many peoples sprang from his divine forge, but not all among them remained as the god created them. Altered by unbridled magic, a group of gnomes were transformed and given almost supernatural curiosity and fearlessness. These were the first kender.\n\nOriginating on the world of Krynn, kender are diminutive Humanoids who look like humans with pointed ears and diverse appearances. Kender have a supernatural curiosity that drives them to adventure. Due to this inquisitiveness, many kender find themselves falling through portals to other planes and worlds.\n\nKender sometimes amass impressive collections of curiosities. Some might collect mundane knickknacks or relics from magical sites, while others might become professional thieves.',
    flavorText:
      'Kender have a supernatural curiosity that drives them to adventure.',
    source: src.dragonQueen,
    abilityScoreDescription:
      'Increase one ability score by 2, and increase a different one by 1, or increase three different scores by 1.',
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

    size: Size.SMALL,
    sizeDescription: 'You are Small.',

    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    languageDescription:
      'You can speak, read, and write Common and One other language.',
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    alignment: 'N/A',
    age: 'N/A',
  },
  {
    id: '59',
    name: 'Kalashtar',
    description:
      'The kalashtar are a compound species created from the union of humanity and renegade spirits from the plane of dreams – spirits called quori. Kalashtar are often seen as wise, spiritual people with great compassion for others. But there is an unmistakable alien quality to the kalashtar, as they are haunted by the conflicts of their otherworldly spirits.',
    flavorText:
      'The kalashtar are a compound species created from the union of humanity and renegade spirits from the plane of dreams',
    source: src.eberron,
    abilityScoreDescription:
      'Your Wisdom score increases by 2, and your Charisma score increases by 1.',
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
    age: 'Kalashtar develop physically at the same rate as humans do and have similar lifespans.',
    alignment:
      'The noble spirit tied to a kalashtar drives it toward lawful and good behavior. Most kalashtar combine strong self-discipline with compassion for all sentient beings, but some kalashtar resist the virtuous influence of their spirit.',
    size: Size.MEDIUM,
    sizeDescription:
      'Kalashtar are similar in build to humans, though they are typically a few inches taller. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    languageDescription:
      'You can speak, read, and write Common, Quori and one other language of your choice.',
    originLanguages: {
      default: [Language.COMMON, Language.QUORI],
      choices: [
        {
          options: Object.values(Language).filter(
            (f) => f != Language.COMMON && f != Language.QUORI
          ),
          numberOfChoices: 1,
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '60',
    name: 'Warforged',
    description:
      'The warforged were built to fight in the Last War. The first warforged were mindless automatons, but House Cannith devoted vast resources to improving these steel soldiers. An unexpected breakthrough produced fully sentient soldiers, blending organic and inorganic materials. Warforged are made from wood and metal, but they can feel pain and emotion. Built as weapons, they must now find a purpose beyond the war. A warforged can be a steadfast ally, a cold-hearted killing machine, or a visionary in search of purpose and meaning.',
    flavorText: 'The warforged were built to fight in the Last War.',
    source: src.eberron,
    abilityScoreDescription:
      'Your Constitution score increases by 2, and one other ability score of your choice increases by 1.',
    abilityScores: {
      default: [
        {
          ability: Ability.CON,
          value: 2,
        },
      ],
      choices: [
        {
          abilities: Object.values(Ability),

          options: [1],
        },
      ],
    },
    age: 'A typical warforged is between two and thirty years old. The maximum lifespan of the warforged remains a mystery; so far, warforged have shown no signs of deterioration due to age. You are immune to magical aging effects.',
    alignment:
      'Most warforged take comfort in order and discipline, tending toward law and neutrality. But some have absorbed the morality – or lack thereof – of the beings with which they served.',
    size: Size.MEDIUM,
    sizeDescription: 'Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    languageDescription:
      'You can speak, read, and write Common and one other language.',
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
  },
  {
    id: '61',
    name: 'Bugbear (MMOM)',
    description:
      'Neither bugs nor bears, bugbears are the hulking cousins of goblins and hobgoblins. With roots in the Feywild, early bugbears resided in hidden places, in hard-to-reach and shadowed spaces. Long ago and from out of the corner of your eye, they came to the Material Plane, urged to spread throughout the multiverse by the conquering god Maglubiyet. Centuries later, they still bear a fey gift for lurking just out of sight, and many of them have sneaked away from that god’s influence.\n\nThey are long of limb and covered in coarse hair, with wedge-shaped ears and pointed teeth. Despite their formidable build, bugbears are quiet skulkers, thanks to a fey magic that allows them to hide in spaces seemingly too small for them.',
    flavorText:
      'Neither bugs nor bears, bugbears are the hulking cousins of goblins and hobgoblins.',
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
    sizeDescription: 'You are Medium.',
    speedDescription: 'Your base walking speed is 30 feet.',
    speed: 30,
    darkvision: 60,
    darkvisionDescription:
      'You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
    age: 'N/A',
    alignment: 'N/A',
    languageDescription:
      'You can speak, read, and write Common and one other language.',
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
    id: '62',
    name: 'Bugbear (VGM)',
    description:
      "Bugbears rely on stealth and strength to attack, preferring to operate at night. When they're not in battle, bugbears spend much of their time resting or dozing, and bully weaker creatures into doing their bidding. From the viewpoint of the rest of the world, their aggression and savagery are thankfully offset by their rarity and lethargy.",
    abilityScoreDescription:
      'Your Strength score increases by 2, and your Dexterity score increases by 1.',
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
    age: 'Bugbears reach adulthood at age 16 and can live up to 80 years.',
    alignment:
      'Bugbears endure a harsh existence that demands each of them to remain self-sufficient, even at the expense of their fellows. They tend to be chaotic evil.',

    size: Size.MEDIUM,
    sizeDescription:
      'Bugbears are between 6 and 8 feet tall and weigh between 250 and 350 pounds. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    languageDescription: 'You can speak, read, and write Common and Goblin.',
    originLanguages: {
      default: [Language.COMMON, Language.GOBLIN],
    },
    creatureType: CreatureType.HUMANOID,
    flavorText: 'Bugbears rely on stealth and strength to attack.',
    source: src.volo,
  },
  {
    id: '63',
    name: 'Centaur (MMOM)',
    description:
      'Centaurs gallop throughout the multiverse and trace their origins to many different realms. The centaurs presented here hail from the Feywild and mystically resonate with the natural world. From the waist up, they resemble elves, displaying all the elf varieties of skin tone. From the waist down, they have the bodies of horses.',
    flavorText: 'Centaurs gallop throughout the multiverse.',
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
    age: 'N/A',
    alignment: 'N/A',
    creatureType: CreatureType.FEY,
    size: Size.MEDIUM,
    sizeDescription: 'You are Medium.',
    speed: 40,
    speedDescription: 'Your base walking speed is 40 feet.',
    languageDescription:
      'You can speak, read, and write Common and one other language.',
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
    id: '64',
    name: 'Centaur (GGR)',
    description: `In the sprawling city of Ravnica, where "open road" seems like a contradiction and "open plain" is sheer nonsense, centaurs nevertheless retain a love of wide spaces and the freedom to travel. As much as they can, centaurs run-in wide plazas, spacious parks, and expanses of rubble and ruin. They race the wind, hooves thundering and tails streaming behind them, until the next wall looms in their path and brings them to a stop.\n\nCentaurs have the upper bodies, down to the waist, of muscular humans, displaying all the human variety of skin tones and features. Their ears are slightly pointed, but their faces are wider and squarer than those of elves. Below the waist, they have the bodies of small horses, with a similar range of coloration - from various s hades of chestnut or bay to dappled or even zebra like striped patterns. Most centaurs style their hair and their tails in a similar way. Selesnya centaurs favor long, flowing hair. Gruul centaurs cut their hair in rough. spiky styles.The upper bodies of centaurs are comparable to human torsos in size, and their lower equine bodies average about 4 feet tall al the withers. Though they are smaller than a human rider mounted on a horse, they fill similar roles as cavalry warriors. messengers, outriders, and scouts.`,
    flavorText:
      "In the sprawling city of Ravnica, where 'open road' seems like a contradiction and 'open plain' is sheer nonsense, centaurs nevertheless retain a love of wide spaces and the freedom to travel.",
    source: src.ravnica,
    abilityScoreDescription:
      'Your Strength score increases by 2, and your Wisdom score increases by 1.',
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
    age: 'Mature and age at about the same rate as humans.',
    alignment:
      'Centaurs are inclined toward neutrality. Those who join the Selesnya are more often neutral good, while those who join the Gruul are typically chaotic neutral.',
    size: Size.MEDIUM,
    sizeDescription:
      'Centaurs stand between 6 and 7 feet tall, with their equine bodies reaching about 4 feet at the withers. Your size is Medium.',
    speedDescription: 'Your base walking speed is 40 feet.',
    speed: 40,
    creatureType: CreatureType.FEY,
    languageDescription:
      'You can speak, read, and write Common and Sylvan. Sylvan is widely spoken in the Selesnya Conclave, for it is rich in vocabulary to describe natural phenomena and spiritual forces.',
    originLanguages: {
      default: [Language.COMMON, Language.SYLVAN],
    },
  },
  {
    id: '65',
    name: 'Centaur (MOoT)',
    description:
      "Powerful and curious, quick to act and knowledgeable of the wider world, centaurs seek to experience life's boundless bounty. The centaurs of Theros are divided into two groups: members of the far-traveling Lagonna band and the proud raiders of the Pheres band. These bands occupy territories situated between the three major human poleis, making them common sights to those who travel human lands. Not ones to settle in permanent homes, though, centaurs might be found wherever there are wonders to be witnessed and adventures to be had.\n\nThough centaurs share the same basic physiology, the centaur bands are commonly associated with their own distinct traits.\n\nLagonna band centaurs tend to be sleek and muscular, with powerful legs built for endurance rather than speed. They usually have coats of a single color, often with a shine that can look metallic in bright light.\n\nPheres band centaurs typically have long, nimble legs and lean bodies, and are often marked with natural color patterns on their hide. Pheres centaurs sometimes paint or tattoo their upper bodies to match the patterns on their lower half. Occasionally, a Pheres centaur is born with vertical stripes on their hooves, foretelling an exciting and adventurous life.",
    flavorText:
      "Powerful and curious, quick to act and knowledgeable of the wider world, centaurs seek to experience life's boundless bounty.",
    source: src.theros,
    abilityScoreDescription:
      'Your Strength score increases by 2, and your Wisdom score increases by 1.',
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
    age: 'Centaurs mature and age at about the same rate as humans.',
    size: Size.MEDIUM,
    sizeDescription:
      'Centaurs stand between 6 and 7 feet tall, with their equine bodies reaching about 4 feet at the withers. Pheres centaurs tend to be slightly larger than Lagonna centaurs. Your size is Medium.',
    speed: 40,
    alignment:
      'Centaurs are inclined toward neutrality. Lagonna centaurs tend to be more lawful, while Pheres centaurs are more often chaotic.',
    creatureType: CreatureType.FEY,
    languageDescription: 'You can speak, read, and write Common and Sylvan.',
    originLanguages: {
      default: [Language.COMMON, Language.SYLVAN],
    },

    speedDescription: 'Your base walking speed is 40 feet.',
  },
  {
    id: '66',
    name: 'Goblin (MMOM)',
    description:
      'A subterranean folk, goblins can be found in every corner of the multiverse, often beside their bugbear and hobgoblin kin. Long before the god Maglubiyet conquered them, early goblins served in the court of the Queen of Air and Darkness, one of the Feywild’s archfey. Goblins thrived in her dangerous domain thanks to a special boon from her—a supernatural knack for finding the weak spots in foes larger than themselves and for getting out of trouble. Goblins brought this fey boon with them to worlds across the Material Plane, even if they don’t remember the fey realm they inhabited before Maglubiyet’s rise. Now many goblins pursue their own destinies, escaping the plots of both archfey and gods.',
    flavorText:
      'A subterranean folk, goblins can be found in every corner of the multiverse.',
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
    size: Size.SMALL,
    sizeDescription: 'You are Small.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      'You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
    languageDescription:
      'Your character can speak, read, and write Common and one other language.',
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    age: 'N/A',
    alignment: 'N/A',
  },
  {
    id: '67',
    name: 'Goblin (VGM)',
    description:
      'Goblins occupy an uneasy place in a dangerous world, and they react by lashing out at any creatures they believe they can bully. Cunning in battle and cruel in victory, goblins are fawning and servile in defeat.',
    abilityScoreDescription:
      'Your Dexterity score increases by 2, and your Constitution score increases by 1.',
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
    creatureType: CreatureType.HUMANOID,
    size: Size.SMALL,
    sizeDescription:
      'Goblins are between 3 and 4 feet tall and weigh between 40 and 80 pounds. Your size is Small.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    languageDescription: 'You can speak, read, and write Common and Goblin.',
    originLanguages: {
      default: [Language.COMMON, Language.GOBLIN],
    },
    flavorText: 'Goblins occupy an uneasy place in a dangerous world.',
    source: src.volo,
    age: 'Goblins reach adulthood at age 8 and live up to 60 years.',
    alignment:
      'Goblins are typically neutral evil, as they care only for their own needs. A few goblins might tend toward good or neutrality, but only rarely.',
  },
  {
    id: '68',
    name: 'Goblin (AwMD)',
    description:
      'Dankwood goblins are much like any other run-of-the-mill goblin but they are much more gentle and artistic than the savage and uncouth goblins of the world.\n\nThey are inquisitive and have a magical bond with the small forest creatures with which they are often friends. They are fast and numble and love to explore. Because of this they make great adventurers and guides.',
    flavorText:
      'Dankwood goblins are much like any other run-of-the-mill goblin but they are much more gentle and artistic than the savage and uncouth goblins of the world.',
    source: src.awMD,
    abilityScoreDescription:
      'Your Dexterity score increases by 2, and your Wisdom score increases by 1.',
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
    creatureType: CreatureType.HUMANOID,
    age: 'Dankwood goblins reach adulthood at age 8 and live up to 60 years.',
    alignment:
      'Dankwood goblins are typically neutral or neutral good, though some mischievous dankwood goblins are chaotic neutral.',
    size: Size.SMALL,
    sizeDescription:
      'Dankwood goblins are between 3 and 4 feet tall and weigh between 40 and 80 pounds. Your size is Small.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    languageDescription: 'You can speak, read, and write Common and Goblin.',
    originLanguages: {
      default: [Language.COMMON, Language.GOBLIN],
    },
  },
  {
    id: '69',
    name: 'Goblin (PSI)',
    description:
      "Goblins are native to Ixalan, and their eager curiosity drew them to the ships of the Brazen Coalition where the pirates first made landfall on the Sun Empire's shores. Though they still thrive in remote jungle colonies, goblins are most commonly seen swinging on the ropes of sleek pirate ships.\n\nGoblins stand about three feet tall, though they rarely stand upright. They prefer a crouched posture that lets them scramble quickly on all fours, aided by their long prehensile tails. Their hearing and eyesight make them excellent lookouts, and their agility serves them well as crew members on pirate ships. They climb, swing, and jump easily among a ship's ropes, and can get into tight spaces that humans can't. For better or worse, many goblins are also incorrigible pranksters, and they often have a hard time determining when a prank is inappropriate, is poorly timed, or has gone too far.",
    abilityScoreDescription: 'Your Dexteriy score increases by 2.',
    age: 'Goblins mature faster than humans, reaching adulthood around age 12. They age noticeably faster, and though few goblins live to old age, the most cautious rarely live longer than 50 years.',
    alignment:
      'Most goblins are wildly chaotic, with no particular inclination toward good or evil but a strong tendency toward mischief.',
    flavorText:
      'Goblins are native to Ixalan, and their eager curiosity drew them to the ships of the Brazen Coalition.',
    source: src.ixalan,
    abilityScores: {
      default: [
        {
          ability: Ability.DEX,
          value: 2,
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
    size: Size.SMALL,
    sizeDescription:
      'Goblins are between 3 and 4 feet tall and weigh about 40 pounds. Your size is Small.',
    speed: 25,
    speedDescription: 'Your base walking speed is 25 feet.',
    darkvision: 60,
    darkvisionDescription:
      "Accustomed to life in the jungle night, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    languageDescription: 'You can speak, read, and write Common and Goblin.',
    originLanguages: {
      default: [Language.COMMON, Language.GOBLIN],
    },
  },
  {
    id: '70',
    name: 'Goblin (PSZ)',
    description:
      "Goblins are an inquisitive and adaptable race hampered by their small size, their natural cowardice, and a severe shortage of common sense. They eagerly explore areas that others hesitate to enter, and obsessively fiddle with magic that more sensible folk would take careful precautions with. They prize ancient artifacts not for their inherent value, but primarily as a mark of status—for a precious trophy proves that its owner survived a delve into a deep and dangerous ruin.\n\nA typical goblin stands between three-and-a-half and five feet tall, with a slender, elongated build. Goblins' arms are unusually long and spindly, making them adept at climbing cliffs and trees. Their skin has a stony texture, ranging in color from red-brown to moss green or gray. Their ears are large and swept back, their eyes are intensely red, and many sport heavy bone protrusions on their spines or elbows. Males have similar growths jutting from their chins, while females have heavier growths on their foreheads.",
    flavorText:
      'Goblins are an inquisitive and adaptable race hampered by their small size.',
    source: src.zendikar,
    abilityScoreDescription: 'Your Constitution score increases by 2.',
    abilityScores: {
      default: [
        {
          ability: Ability.CON,
          value: 2,
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
    size: Size.SMALL,
    sizeDescription:
      'Goblins are between 3 and 4 feet tall and weigh about 40 pounds. Your size is Small.',
    speed: 25,
    speedDescription: 'Your base walking speed is 25 feet.',
    darkvision: 60,
    darkvisionDescription:
      "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    languageDescription: 'You can speak, read, and write Common and Goblin.',
    originLanguages: {
      default: [Language.COMMON, Language.GOBLIN],
    },
    age: 'Goblins mature faster than humans, reaching adulthood around age 12. They age noticeably faster, and though few goblins live to old age, the most cautious rarely live longer than 50 years.',
    alignment:
      'Most goblins are wildly chaotic, with no particular inclination toward good or evil but a strong tendency toward mischief.',
  },
  {
    id: '71',
    name: 'Grung',
    description:
      'Grungs are aggressive froglike humanoids found in rain forests and tropical jungles. They are fiercely territorial and see themselves as superior to most other creatures.\n\nGrung society is a caste system. Each caste lays eggs in a separate hatching pool, and juvenile grungs join their caste upon emergence from the hatchery. All grungs are a dull greenish gray when they are born, but each individual takes on the color of its caste as it grows to adulthood. From lowest to highest caste, grungs can be green, blue, purple, red, orange, or gold.\n\nAll grungs secrete a substance that is harmless to them but poisonous to other creatures. A grung also uses venom to poison its weapons. Grungs are always on the lookout for creatures they can capture and enslave. Grungs use slaves for all manner of menial tasks, but mostly they just like bossing them around. Slaves are fed mildly poisoned food to keep them lethargic and compliant. A creature afflicted in this way over a long period of time becomes a shell of its former self and can be restored to normalcy only by magic. Being amphibious, grungs require water to live; any grung that fails to immerse itself in water for at least 1 hour during a day becomes quite exhausted.',
    flavorText:
      'Grungs are aggressive froglike humanoids found in rain forests and tropical jungles.',
    source: src.grung,
    abilityScoreDescription:
      'Your Dexterity score increases by 2, and your Constitution score increases by 1.',
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
    age: 'Grungs mature to adulthood in a single year, but have been known to live up to 50 years.',
    alignment:
      'Most grungs are lawful, having been raised in a strict caste system. They tend toward evil as well, coming from a culture where social advancement occurs rarely, and most often because another member of your army has died and there is no one else of that caste to fill the vacancy.',
    size: Size.SMALL,
    sizeDescription:
      ' rungs stand between 2 ½ and 3 ½ feet tall and average about 30 pounds. Your size is Small.',
    speed: 25,
    speedDescription:
      'You have a walking speed of 25 feet. Your sticky finger and toe pads give you a climb speed of 25 feet.',
    languageDescription: 'You can speak, read, and write Grung.',
    originLanguages: {
      default: [Language.GRUNG],
    },
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '72',
    name: 'Hobgoblin (MMOM)',
    description:
      'Hobgoblins trace their origins to the ancient courts of the Feywild, where they first appeared with their goblin and bugbear kin. Many of them were driven from the Feywild by the conquering god Maglubiyet, who marshaled them as soldiers, but the fey realm left its mark; wherever they are in the multiverse, they continue to channel an aspect of the Feywild’s rule of reciprocity, which creates a mystical bond between the giver and the receiver of a gift.Hobgoblins are generally taller than their goblin cousins but not quite as big as bugbears. They have curved, pointed ears and noses that turn bright red or blue during displays of emotion.',
    flavorText:
      'Hobgoblins trace their origins to the ancient courts of the Feywild.',
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
    sizeDescription:
      'Hobgoblins stand between 5 and 6 feet tall and weigh between 150 and 200 pounds. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      'You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
    languageDescription:
      'You can speak, read, and write Common and one other language.',
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    age: 'N/A',
    alignment: 'N/A',
  },
  {
    id: '73',
    name: 'Hobgoblin (VGM)',
    description:
      "War is the lifeblood of hobgoblins. Its glories are the dreams that inspire them. Its horrors don't feature in their nightmares. Cowardice is more terrible to hobgoblins than dying, for they carry their living acts into the afterlife. A hero in death becomes a hero eternal.",
    flavorText: 'War is the lifeblood of hobgoblins.',
    source: src.volo,
    abilityScoreDescription:
      'Your Constitution score increases by 2, and your Intelligence score increases by 1.',
    abilityScores: {
      default: [
        {
          ability: Ability.CON,
          value: 2,
        },
        {
          ability: Ability.INT,
          value: 1,
        },
      ],
    },
    age: 'Hobgoblins mature at the same rate as humans and have lifespans similar in length to theirs.',
    alignment:
      'Hobgoblin society is built on fidelity to a rigid, unforgiving code of conduct. As such, they tend toward lawful evil.',
    size: Size.MEDIUM,
    sizeDescription:
      'Hobgoblins are between 5 and 6 feet tall and weigh between 150 and 200 pounds. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    languageDescription: 'You can speak, read, and write Common and Goblin.',
    originLanguages: {
      default: [Language.COMMON, Language.GOBLIN],
    },
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '74',
    name: 'Kobold (MMOM)',
    description:
      'Some of the smallest draconic creatures in the multiverse, kobolds display their draconic ancestry in the glint of their scales and in their roars. Legends tell of the first kobolds emerging from the Underdark near the lairs of the earliest dragons. In some lands, kobolds serve chromatic or metallic dragons — even worshiping them as divine beings. In other places, kobolds know too well how dangerous those dragons can be and help others defend against draconic destruction.\n\nWhatever their relationship to dragons, kobold scales tend to be rust colored, although the occasional kobold sports a scale color more akin to that of a chromatic or a metallic dragon. A kobold’s cry can express a range of emotion: anger, resolve, elation, fear, and more. Regardless of the emotion expressed, their cry resonates with draconic power.',
    flavorText: 'Some of the smallest draconic creatures in the multiverse.',
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
    size: Size.SMALL,
    sizeDescription: 'You are Small.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      'You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
    languageDescription:
      'You can speak, read, and write Common and one other Language.',
    age: 'N/A',
    alignment: 'N/A',
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
    id: '75',
    name: 'Kobold (VGM)',
    description:
      'Kobolds are often dismissed as cowardly, foolish, and weak, but these little reptilian creatures actually have a strong social structure that stresses devotion to the tribe, are clever with their hands, and viciously work together in order to overcome their physical limitations.',
    abilityScoreDescription: 'Your Dexterity score increases by 2.',
    abilityScores: {
      default: [
        {
          ability: Ability.DEX,
          value: 2,
        },
      ],
    },
    age: 'Kobolds reach adulthood at age 6 and can live up to 120 years.',
    alignment:
      'Kobolds are fundamentally selfish, making them evil, but their reliance on group structure and strength means they tend toward law.',
    size: Size.SMALL,
    sizeDescription:
      'Kobolds are between 2 and 3 feet tall and weigh about 35 pounds. Your size is Small.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    languageDescription: 'You can speak, read, and write Common and Draconic.',
    originLanguages: {
      default: [Language.COMMON, Language.DRACONIC],
    },
    flavorText: 'Kobolds are often dismissed as cowardly, foolish, and weak.',
    source: src.volo,
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '76',
    name: 'Lizardfolk (MMOM)',
    description:
      'The saurian lizardfolk are thought by some sages to be distant cousins of dragonborn and kobolds. Despite their resemblance to those other scaled folk, however, lizardfolk are their own people and have lived on the worlds of the Material Plane since the worlds’ creation. Gifted by the gods with remarkable physical defenses and a mystical connection to the natural world, lizardfolk can survive with just their wits in situations that would be deadly for other folk. Because of that fact, many lizardfolk myths state that their people were placed by the gods in the Material Plane to guard its natural wonders.\n\nLizardfolk have colorful scales and exhibit a wide array of scale patterns. Their individual facial features are as varied as those of lizards.',
    flavorText:
      'The saurian lizardfolk are thought by some sages to be distant cousins of dragonborn and kobolds.',
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
    speedDescription: 'Your base walking speed is 30 feet.',
    swimDescription: 'You have a swimming speed equal to your walking speed.',
    darkvision: 60,
    darkvisionDescription:
      'You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
    languageDescription:
      'You can speak, read, and write Common and one other Language of your choice.',
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    age: 'N/A',
    alignment: 'N/A',
  },
  {
    id: '77',
    name: 'Lizardfolk (VGM)',
    description:
      'Lizardfolk possess an alien and inscrutable mindset, their desires and thoughts driven by a different set of basic principles than those of warm-blooded creatures. Their dismal swamp homes might lie hundreds of miles from the nearest human settlement, but the gap between their way of thinking and that of the smooth-skins is far greater.',
    flavorText: 'Lizardfolk possess an alien and inscrutable mindset.',
    source: src.volo,
    abilityScoreDescription:
      'Your Constitution score increases by 2, and your Wisdom score increases by 1.',
    abilityScores: {
      default: [
        {
          ability: Ability.CON,
          value: 2,
        },
        {
          ability: Ability.WIS,
          value: 1,
        },
      ],
    },
    age: 'Lizardfolk reach maturity around age 14 and can live to be about 60.',
    alignment:
      'Most lizardfolk are neutral. They see the world as a place of predators and prey, where life and death are natural processes. They wish only to survive, and prefer to leave other creatures to their own devices.',
    size: Size.MEDIUM,
    sizeDescription:
      'Lizardfolk are a little bulkier and taller than humans, and their colorful frills make them appear even larger. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    swimSpeed: 30,
    swimDescription: 'You have a swimming speed equal to your walking speed.',
    darkvision: 60,
    languageDescription: 'You can speak, read, and write Draconic and Common.',
    originLanguages: {
      default: [Language.DRACONIC, Language.COMMON],
    },
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '78',
    name: 'Minotaur (MMOM)',
    description:
      'Minotaurs are barrel-chested humanoids with heads resembling those of bulls. Blessed with a supernaturally strong sense of direction, minotaurs make great navigators. Some sages believe minotaurs were first created by the Lady of Pain to patrol the magical mazes that she uses to trap her foes.\n\nMinotaur horns range in size from about 1 foot long to easily three times that length. Minotaurs often carve their horns to sharpen their edges, etch symbols of power into them, or sheathe them in bronze to prevent them from shattering during battle.\n\nThick hair extends down minotaurs’ necks and powerful backs, and some have long patches of hair on their chins and cheeks. Their legs end in heavy, cloven hooves, and they have long, tufted tails.',
    flavorText:
      'Minotaurs are barrel-chested humanoids with heads resembling those of bulls.',
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
    sizeDescription: 'You are Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    languageDescription:
      'Your character can speak, read, and write Common and one other language',
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    age: 'N/A',
    alignment: 'N/A',
  },
  {
    id: '79',
    name: 'Minotaur (GGtR)',
    description:
      "The minotaurs of Ravnica are strong in body. dedication, and courage. They are at home on the battlefield, willing to fight for their various causes. They combine a burning fury in battle with keen tactics that make them excellent commanders as well as valuable shock troops.\n\nMinotaurs are barrel-chested humanoids with heads resembling those of bulls. Their horns range in size from about 1 foot long to great, curling weapons easily three times that length. They often ornament their horns with metal rings or sheathe them in metal to protect them from damage.\n\nManes of shaggy fur extend down minotaurs' necks and powerful backs, and males have long tufts of hair on their chins and cheeks. Their legs end in heavy, cloven hooves. Minotaurs are born with long, tufted tails, but minotaurs of the Ordruun clan (and some others) have their tails docked as part of a coming-of-age ceremony; they find the heavy armor of the Boros legion much more comfortable without a long tail in the way.",
    flavorText:
      'The minotaurs of Ravnica are strong in body, dedication, and courage.',
    source: src.ravnica,
    abilityScoreDescription:
      'Your Strength score increases by 2, and your Constitution score increases by 1.',
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
    alignment:
      'Most minotaurs who join the Boros Legion lean toward lawful alignments, while those associated with the Cult of Rakdos or the Gruul Clans tend toward chaotic alignments.',
    age: 'Minotaurs mature at about the same rate as humans and live for about as long.',
    size: Size.MEDIUM,
    sizeDescription:
      'Minotaurs average over 6 feet in height, and they have stocky builds. Your size is Medium.',
    speedDescription: 'Your base walking speed is 30 feet.',
    speed: 30,
    languageDescription: 'You can speak, read, and write Common and Minotaur.',
    originLanguages: {
      default: [Language.COMMON, Language.MINOTAUR],
    },
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '80',
    name: 'Minotaur (MOoT)',
    description:
      "The minotaurs who dwell in the badlands of Phoberos and the remote polis of Skophos are caught between two worlds. Some follow the dark god Mogis, who has tyrannized them for ages untold and shown them a trail of slaughter that is all many minotaurs have ever known. Others, though, have emerged from this bloody path and found a world that welcomes those who pursue their own destinies and heroic callings.\n\nMinotaurs are barrel-chested humanoids with heads resembling those of bulls. Their horns range in size from about 1 foot long to great, curling weapons easily three times that length. Theros minotaurs often carve their horns to sharpen their edges, etch symbols of power into them, or sheathe them in bronze to prevent them from shattering during battle.\n\nThick hair extends down minotaurs' necks and powerful backs, and some have long patches of hair on their chins and cheeks. Their legs end in heavy, cloven hooves, and they have long, tufted tails. Minotaur priests often adorn themselves with sacred items, be they trophies from fallen foes, keepsakes from their homeland, or naturally occurring marks of their god's favor.",
    flavorText:
      'The minotaurs who dwell in the badlands of Phoberos and the remote polis of Skophos are caught between two worlds.',
    source: src.theros,
    creatureType: CreatureType.HUMANOID,
    abilityScoreDescription:
      'Your Strength score increases by 2, and your Constitution score increases by 1.',
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
    age: 'Minotaurs mature at about the same rate as humans and live for about as long.',
    alignment:
      'Minotaurs who leave the walls of Skophos have the opportunity to be free of its culture and pursue chaotic alignments, while those who remain within the polis and its tyrannical regime tend toward lawful alignments.',
    size: Size.MEDIUM,
    sizeDescription:
      'Minotaurs average over 6 feet in height, and they have stocky builds. Your size is Medium.',
    speedDescription: 'Your base walking speed is 30 feet',
    speed: 30,
    languageDescription: 'You can speak, read, and write Common and Minotaur.',
    originLanguages: {
      default: [Language.COMMON, Language.MINOTAUR],
    },
  },
  {
    id: '81',
    name: 'Minotaur (PSA)',
    description:
      'Minotaurs are powerfully built, barrel-chested humanoids with heads resembling rams. Their horns curl tightly against the sides of their heads to encircle their ears, and manes of shaggy fur — shorter in females — fall over their broad shoulders. As their appearance suggests, they combine physical strength with stubbornness, bravado, and reckless bravery. They revel in combat, especially when the odds against them seem overwhelming.\n\nMinotaurs are rowdy, boisterous, and direct to the point of rudeness. They have no qualms about declaring what they want and defying others to keep it from them. In combat, they bellow loud challenges in defiance of their foes, and roar with laughter as they triumph.\n\nMinotaurs believe they hold a unique place among the races of Amonkhet. The khenra can look to Hazoret, the naga to Rhonas, and the aven to Kefnet to see themselves represented among the gods. Humans have no single god to look to, which explains why they demonstrate such variety. But only one god bears a pair of curving horns: the God-Pharaoh himself, who holds a special place for many of the minotaurs of Amonkhet.',
    flavorText:
      'Minotaurs are powerfully built, barrel-chested humanoids with heads resembling rams.',
    abilityScoreDescription:
      'Your Strength score increases by 2, and your Constitution score increases by 1.',
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
    age: 'Minotaurs develop more slowly than humans, reaching full maturity around the age of 20. They typically become acolytes at around 8 or 9 years old, making them among the older members of their crops. Once they reach maturity, though, minotaurs age quickly, rushing headlong through the trials (as they do all aspects of life) to complete them before they pass their peak. A minotaur allowed to die of old age would rarely live beyond 40.',
    alignment:
      'Most minotaurs lean toward chaotic alignments, and they have a slight inclination toward evil.',
    size: Size.MEDIUM,
    sizeDescription:
      'Minotaurs average over 6 feet in height, and they have stocky builds. Your size is Medium.',
    speedDescription: 'Your base walking speed is 30 feet.',
    speed: 30,
    languageDescription: 'You can speak, read, and write Common and Minotaur.',
    originLanguages: {
      default: [Language.COMMON, Language.MINOTAUR],
    },
    source: src.amonkhet,
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '82',
    name: 'Orc (MMOM)',
    description:
      'Orcs trace their creation to the one-eyed god Gruumsh, an unstoppable warrior and powerful leader. The divine qualities of Gruumsh resonate within orcs, granting them a reflection of his toughness and tenacity that can’t be matched, and the god equipped his children to be able to live above or below ground.\n\nOn some worlds, such as Eberron, orcs were among the first defenders of the natural order from the encroachments of Fiends and other extraplanar threats. Gruumsh’s blessings have made orcs tireless guardians and mighty allies wherever they are found, even when they turn their devotion to other gods.',
    flavorText: 'Orcs trace their creation to the one-eyed god Gruumsh.',
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
    sizeDescription: 'You are Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      'You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
    languageDescription:
      'Your character can speak, read, and write Common and one other language',
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    age: 'N/A',
    alignment: 'N/A',
  },
  {
    id: '83',
    name: 'Orc (VGM)',
    description:
      'Savage and fearless, orc tribes are ever in search of elves, dwarves, and humans to destroy. Motivated by their hatred of the civilized races of the world and their need to satisfy the demands of their deities, the orcs know that if they fight well and bring glory to their tribe, Gruumsh will call them home.',
    flavorText:
      'Savage and fearless, orc tribes are ever in search of elves, dwarves, and humans to destroy.',
    source: src.volo,
    abilityScoreDescription:
      'Your Strength score increases by 2, and your Constitution score increases by 1.',
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
    age: 'Orcs reach adulthood at age 12 and live up to 50 years.',
    alignment:
      'Orcs are vicious raiders, who believe that the world should be theirs. They also respect strength above all else and believe the strong must bully the weak to ensure that weakness does not spread like a disease. They are usually chaotic evil.',
    size: Size.MEDIUM,
    sizeDescription:
      'Orcs are between 5 and 6 feet tall and weigh between 230 and 280 pounds. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    languageDescription: 'You can speak, read, and write Common and Orc.',
    originLanguages: {
      default: [Language.COMMON, Language.ORC],
    },
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '84',
    name: 'Orc (ERLW)',
    description:
      "Thousands of years before humans came to Khorvaire, the land was dominated by wild orcs and goblinoids of the Dhakaani Empire. The goblin empire scattered the orc tribes and forced them into harsh and unwanted lands: the swamps of the Shadow Marches, the Demon Wastes, and the depths of the Ironroot Mountains. But in the Shadow Marches, the orcs learned the secrets of druidic magic from the dragon Vvaraak, becoming the first of the Gatekeepers. With the invasion of the alien daelkyr from Xoriat, the Gatekeepers put the dragon's teaching to the test, creating magical seals that bound the daelkyr in the depths of Khyber and protected Eberron against further incursion from the plane of madness.",
    flavorText:
      'Thousands of years before humans came to Khorvaire, the land was dominated by wild orcs and goblinoids of the Dhakaani Empire.',
    source: src.eberron,
    abilityScoreDescription:
      'Your Strength score increases by 2, and your Constitution score increases by 1.',
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
    age: 'Orcs reach adulthood at age 12 and live up to 50 years.',
    alignment:
      'The orcs of Eberron are a passionate people, given to powerful emotion and deep faith. They are generally chaotic, but can be any alignment.',
    size: Size.MEDIUM,
    sizeDescription:
      'Orcs are usually over 6 feet tall and weigh between 230 and 280 pounds. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    languageDescription: 'You can speak, read, and write Common and Orc.',
    originLanguages: {
      default: [Language.COMMON, Language.ORC],
    },
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '85',
    name: 'Orc (EGtW)',
    description:
      "Orcs are one of Exandria's youngest races, and are said to have been born from elves seared by the blood of Gruumsh, the Ruiner, when Corellon pierced the orc god's eye on the field of battle. For long years, orcs were feared as mindless abominations, drawn to slaughter like moths to flame.\n\nStories tell of how the blood of the Ruiner flows in the veins of all orcs, driving them to commit acts of terrible violence and anger. Orcs call this fury hgar'Gruum, or the curse of ruin, and use it to refer to everything from battle rage to a bad temper. Half-orcs are said to have inherited the blood of the Ruiner, and to carry the same bloodlust and fury that orcs do.\n\nOrcs and half-orcs do feel a certain pull toward violence and anger. But the simple truth is that there is no curse of ruin. No supernatural power drives orcs to kill. Rather, they are simply victims of the same selfish, violent impulses that corrupt all mortal beings.",
    flavorText:
      "Orcs are one of Exandria's youngest races and are said to have been born from elves seared by the blood of Gruumsh.",
    source: src.wildemount,
    abilityScoreDescription:
      'Your Strength score increases by 2, and your Constitution score increases by 1.',
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
    age: 'Orcs reach adulthood at age 16 and live up to 80 years.',
    alignment:
      'Orcs fear the curse of ruin that is said to plague their race, and tend strongly toward either chaos (accepting their fate), or toward law (rejecting it).',
    size: Size.MEDIUM,
    sizeDescription:
      'Orcs stand easily 8 feet tall and corded with powerful muscles, weighing up to 280 pounds. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    languageDescription: 'You can speak, read, and write Common and Orc.',
    originLanguages: {
      default: [Language.COMMON, Language.ORC],
    },
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '86',
    name: 'Orc (PSI)',
    description:
      'Orcs originally came from the same mountainous region where the kingdom of Torrezon was born, and they have been enemies of the Legion of Dusk since it was originally formed. The entire race has been declared anathema by the Church of Torrezon, and after centuries of fighting the Legion, the orcs have dwindled to only a few hundred in number. Some still live on remote islands near Torrezon, but many have joined the Brazen Coalition to serve on pirate ships — taking on any role that calls for an abundance of sheer muscle.\n\nOrcs are tall, standing head and shoulders above most humans, and are generally twice as broad. They often accentuate their bulging muscles by wearing tight-fitting bands and accessories around the thickest parts of their arms and necks. Their skin color ranges from light brown through gray to almost jet-black.',
    flavorText:
      'Orcs originally came from the same mountainous region where the kingdom of Torrezon was born.',
    source: src.ixalan,
    abilityScoreDescription:
      'Your Strength score increases by 2, and your Constitution score increases by 1.',
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
    age: 'Orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.',
    alignment:
      'Most orcs lean toward chaotic alignments, and many serve on pirate ships that encourage an inclination toward evil.',
    size: Size.MEDIUM,
    sizeDescription:
      'Orcs average over 6 feet in height, and they have strong, stocky builds. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      'You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
    languageDescription: 'You can speak, read, and write Common and Orc.',
    originLanguages: {
      default: [Language.COMMON, Language.ORC],
    },
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '87',
    name: 'Shifter MMOM',
    description:
      'Shifters are sometimes called weretouched, as they are descendants of people who contracted full or partial lycanthropy. Humanoids with a bestial aspect, shifters can’t fully change shape, but they can temporarily enhance their animalistic features by entering a state they call shifting.\n\nShifters are similar to humans in height and build but are typically more lithe and flexible. Their facial features have a bestial cast, often with large eyes and pointed ears; most shifters also have prominent canine teeth. They grow fur-like hair on nearly every part of their bodies. While a shifter’s appearance might remind an onlooker of an animal, they remain clearly identifiable as shifters even when at their most feral.',
    flavorText:
      'Shifters are sometimes called weretouched, as they are descendants of people who contracted full or partial lycanthropy.',
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
    age: 'N/A',
    alignment: 'N/A',
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    sizeDescription: 'You are Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
    languageDescription:
      'Your character can speak, read, and write Common and one other language',
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
    id: '88',
    name: 'Shifter (ERLW)',
    description:
      'Shifters are sometimes called the weretouched, as many believe that they are the descendants of humans and lycanthropes. They are humanoids with a bestial aspect; while they cannot fully change shape they can temporarily enhance their animalistic features – a state they call shifting. Whatever their origins, shifters have evolved into a unique race. A shifter walks on the knife’s edge between the wilds and the world around them. Do they embrace their primal instincts or the path of civilization?',
    flavorText: 'Shifters are sometimes called the weretouched.',
    abilityScoreDescription:
      'Your ability scores are determined by your subspecies',
    abilityScores: {
      default: [],
    },
    source: src.eberron,

    age: 'Shifters are quick to mature both physically and emotionally, reaching young adulthood at age 10. They rarely live to be more than 70 years old.',
    alignment:
      'Shifters tend toward neutrality, being more focused on survival than concepts of good and evil. A love of personal freedom can drive shifters toward chaotic alignments.',
    size: Size.MEDIUM,
    sizeDescription:
      'Shifters range from 5 to almost 7 feet tall, depending on their subrace. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      'You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
    languageDescription: 'You can read and write Common.',
    originLanguages: {
      default: [Language.COMMON],
    },
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '89',
    name: 'Yuan Ti (MMOM)',
    description:
      'Yuan-ti were originally humans who transformed themselves into serpent folk through ancient rituals. Most yuan-ti were corrupted into monsters by those rites, but some yuan-ti instead became a new people who mix characteristics of humans and snakes.\n\nBlessed with resistance to magical and poisonous effects by the rituals that created them, each of these yuan-ti manifests their serpentine heritage in a variety of ways: a forked tongue, snake eyes, a snakelike nose, or some other ophidian characteristic. However a yuan-ti looks, they have the power to pursue great good or evil in the multiverse.',
    flavorText:
      'Yuan-ti were originally humans who transformed themselves into serpent folk through ancient rituals.',
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
    sizeDescription: 'You are Medium or Small.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      'You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
    languageDescription:
      'Your character can speak, read, and write Common and one other language',
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 1,
        },
      ],
    },
    age: 'N/A',
    alignment: 'N/A',
  },
  {
    id: '90',
    name: 'Yuan Ti (VGM)',
    description:
      'The serpent creatures known as yuan-ti are all that remains of an ancient, decadent human empire. Ages ago their dark gods taught them profane, cannibalistic rituals to mix their flesh with that of snakes, producing a caste-based society of hybrids in which the most snakelike are the leaders and the most humanlike are spies and agents in foreign lands.',
    flavorText:
      'The serpent creatures known as yuan-ti are all that remains of an ancient, decadent human empire.',
    source: src.volo,
    abilityScoreDescription:
      'Your Charisma score increases by 2, and your Intelligence score increases by 1.',
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
    age: 'Purebloods mature at the same rate as humans and have lifespans similar in length to theirs.',
    alignment:
      'Purebloods are devoid of emotion and see others as tools to manipulate. They care little for law or chaos and are typically neutral evil.',
    size: Size.MEDIUM,
    sizeDescription:
      'Purebloods match humans in average size and weight. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    languageDescription:
      'You can speak, read, and write Common, Abyssal, and Draconic.',
    originLanguages: {
      default: [Language.COMMON, Language.ABYSSAL, Language.DRACONIC],
    },
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '91',
    name: 'Aetherborn',
    description:
      'Aetherborn come into being spontaneously as part of the aether refinement process. Their bodies and minds are apparently formed out of some interaction between the volatile elements of aether that are removed during refinement and the psychic impressions created by the people involved in the process. But each aetherborn is a unique individual, not a mere copy of some other person’s mind and shape. This race is little understood, and few aetherborn are willing to waste any of their short lives allowing vedalken scholars to study their biological and psychological characteristics.\n\nAetherborn are a strange living by-product of the process of aether refinement, cast in humanoid form but lacking any of the biological qualities of other races. They don’t eat or sleep, and they don’t reproduce—nor do they have any physical sexual characteristics. Language that categorizes people into male or female categories thus breaks down when it comes to aetherborn. Most aetherborn prefer that others use the pronoun “they” to refer to them, since it doesn’t attribute a gender that they don’t possess. Only a relative few prefer “he” or “she,” having chosen to adopt a gender.',
    flavorText:
      'Aetherborn come into being spontaneously as part of the aether refinement process.',
    abilityScoreDescription:
      'Your Charisma score increases by 2, and two other ability scores of your choice increase by 1.',
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
    source: src.kaladesh,
    age: 'Aetherborn come into being as adults and live no more than a few years.',
    alignment:
      'As a rule, aetherborn are driven by hedonism and self-interest, making them neutral at best and thoroughly evil at worst. Neutral aetherborn might devote much of their time (and wealth) to parties and social activity, while evil aetherborn are usually involved in the criminal underworld.',
    size: Size.MEDIUM,
    sizeDescription:
      'Aetherborn are about the same size as humans, ranging from 5 to 6 feet tall. They are quite light—only about 100 pounds—and their weight diminishes as they age and more and more of their substance returns to the aethersphere. Your size is Medium.',
    speedDescription: ' Your base walking speed is 30 feet.',
    speed: 30,
    darkvision: 60,
    darkvisionDescription:
      'Accustomed to the night, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
    languageDescription:
      'You can speak, read, and write Common and two other languages of your choice.',
    originLanguages: {
      default: [Language.COMMON],
      choices: [
        {
          options: Object.values(Language).filter((f) => f != Language.COMMON),
          numberOfChoices: 2,
        },
      ],
    },
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '92',
    name: 'Aven',
    description:
      'Aven have humanlike bodies, arms, and legs, along with birdlike wings and heads. Two distinct varieties of aven are found in Naktamun. One has the head of a hawk or similar bird of prey, with short wings allowing fast flight. The other variety has the head of an ibis atop a long neck, with wide, angular wings better suited to soaring. All aven have lean bodies with feathers extending from their heads down to their shoulders.\n\nAven delight in flying above their foes, using their superior mobility to confound and outpace their opponents. They love soaring through the sky as well, though the Hekma limits their altitude. Like all people of Naktamun, they are grateful for the Hekma’s protective magic, of course. But they keenly anticipate the hour when the God-Pharaoh will return and dissolve the veil, letting them fly without limit in the afterlife.',
    flavorText:
      'Aven have humanlike bodies, arms, and legs, along with birdlike wings and heads.',
    source: src.amonkhet,
    abilityScoreDescription: 'Your Dexterity score increases by 2.',
    abilityScores: {
      default: [
        {
          ability: Ability.DEX,
          value: 2,
        },
      ],
    },
    age: 'Like humans, aven reach adulthood in their late teens and can theoretically live into their 80s. Of course, most find a glorious (or inglorious) death long before that point.',
    alignment:
      'Most aven lean toward some form of neutrality. Ibis-headed aven, focused more on knowledge than any other virtue, are usually neutral. Hawk-headed aven are inclined toward lawful neutral.',
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    sizeDescription:
      'Aven stand from 5 to 6 feet tall, but their bodies are slender and their bones are partially hollow to facilitate their flight. Your size is Medium.',
    speed: 25,
    speedDescription:
      'Your base walking speed is 25 feet. You have a flying speed of 30 feet. You can’t use your flying speed while you wear medium or heavy armor. (If your campaign uses the variant rule for encumbrance, you can’t use your flying speed if you are encumbered.)',
    languageDescription: 'You can speak, read, and write Common and Aven.',
    originLanguages: {
      default: [Language.COMMON, Language.AVEN],
    },
  },
  {
    id: '93',
    name: 'Khenra',
    description:
      'The khenra of Amonkhet are tall and lean, with graceful bodies and heads that strongly resemble jackals. Their snouts are long and sharp, and their angular ears rise straight above their heads. Their bodies are covered in dark, sleek hair that ranges from the brown of the desert sands to ebony black. Despite their sharp teeth, they consider biting to be an uncouth and unworthy combat tactic.\n\nNearly every khenra is born a fraternal or identical twin, and a pair of khenra twins forms an extremely close emotional bond unknown to most other residents of Amonkhet. The death of one twin in training or the trials causes a tremendous shock to the survivor, who typically grows more aggressive and foolhardy in battle. The rare khenra who are born without twins are believed to have killed their siblings in the womb, and are thus viewed as natural-born initiates, sure to achieve a glorified death in the Trial of Zeal.',
    flavorText:
      'The khenra of Amonkhet are tall and lean, with graceful bodies and heads that strongly resemble jackals.',
    source: src.amonkhet,
    abilityScoreDescription:
      'Your Dexterity score increases by 2, and your Strength score increases by 1.',
    abilityScores: {
      default: [
        {
          ability: Ability.DEX,
          value: 2,
        },
        {
          ability: Ability.STR,
          value: 1,
        },
      ],
    },
    age: 'Khenra mature quickly, reaching adulthood in their early teens. Khenra initiates are usually the youngest in a crop, completing the trials by their late teens. Even without a violent death, they rarely live past 60.',
    alignment:
      'Most khenra lean toward chaotic alignments. They have no particular inclination toward good or evil.',
    size: Size.MEDIUM,
    sizeDescription:
      'Khenra have similar builds to humans. Your size is Medium.',
    speed: 35,
    speedDescription: 'Your base walking speed is 35 feet.',
    languageDescription: 'You can speak, read, and write Common and Khenra.',
    originLanguages: {
      default: [Language.COMMON, Language.KHENRA],
    },
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '94',
    name: 'Kor',
    description:
      'Deeply reverent of the land and its sacred sites, the nomadic kor live a spare existence defined by their constant travels. Masters of ropes and hooks, they scale sheer cliffs and cross yawning chasms with such skill and agility that they sometimes seem almost to take flight.\n\nKor are tall, slender humanoids with light hair and gray, blue-gray, or ivory skin. All kor have slightly pointed ears, and males have short, fleshy barbels on their chins. They paint softly glowing geometric patterns on their faces and bodies, suggestive of the shapes and design of the hedrons that appear across Zendikar. Their clothing tends to leave their arms and shoulders free to facilitate climbing, and they keep most of their gear in pouches and slings at their waists.\n\nThe kor have a nonverbal language of hand signs and gestures that allows communication despite significant distance (particularly when augmented with whirling ropes) or howling winds. They also use this sign language among themselves when they wish to avoid being overheard, giving rise to misguided rumors that they are incapable of speech. When they do speak, they typically use as few words as possible to convey their meaning.',
    flavorText:
      'Deeply reverent of the land and its sacred sites, the nomadic kor live a spare existence defined by their constant travels.',
    source: src.zendikar,
    abilityScoreDescription:
      'Your Dexterity score increases by 2, and your Wisdom score increases by 1.',
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
    age: 'Kor mature at the same rate as humans and live about as long.',
    alignment:
      'Most kor are lawful good, with a strong dedication to community and the traditions of their ancestors.',
    size: Size.MEDIUM,
    sizeDescription:
      'Kor average nearly 6 feet tall, but are much lighter and more slender than humans. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    climbDescription:
      'You have a climbing speed of 30 feet as long as you are not encumbered or wearing heavy armor.',
    climbSpeed: 30,
    creatureType: CreatureType.HUMANOID,
    languageDescription:
      'You can speak, read, and write Common, and communicate in the silent speech of the kor.',
    originLanguages: {
      default: [Language.COMMON, Language.KOR],
    },
  },
  {
    id: '95',
    name: 'Merfolk (PSI)',
    description:
      'The River Heralds are merfolk—a race of amphibious humanoids at home throughout the oceans, rivers, and rain forests of Ixalan. They stand between seven and eight feet tall, with skin that ranges from deep burgundy through many shades of violet and blue, to green, bright orange, and yellow. They are humanlike in shape, but have long fins extending from their shoulders, forearms, middle backs, and calves. Frills of fins also protrude from the backs of their heads. All merfolk can breathe air or filter oxygen from the water, and they can walk on land or swim with equal ease.',
    abilityScoreDescription: 'Your Charisma score increases by 1.',
    abilityScores: {
      default: [
        {
          ability: Ability.CHA,
          value: 1,
        },
      ],
    },
    flavorText:
      'The River Heralds are merfolk—a race of amphibious humanoids at home throughout the oceans, rivers, and rain forests of Ixalan.',
    source: src.ixalan,
    age: 'Merfolk mature at the same rate humans do and reach adulthood around the age of 20. They live considerably longer than humans, though, often reaching well over 100 years.',
    alignment: 'Most merfolk are neutral, living in close harmony with nature.',
    size: Size.MEDIUM,
    sizeDescription:
      'Merfolk are significantly taller than most humans, standing between seven and eight feet tall and averaging about 300 pounds. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    swimSpeed: 30,
    swimDescription: 'You have a swimming speed of 30 feet.',
    creatureType: CreatureType.HUMANOID,
    languageDescription:
      'You can speak, read, and write Common (if it exists in your campaign), Merfolk and one additional language of your choice.',
    originLanguages: {
      default: [Language.COMMON, Language.MERFOLK],
      choices: [
        {
          options: Object.values(Language).filter(
            (f) => f != Language.COMMON && f != Language.MERFOLK
          ),
          numberOfChoices: 1,
        },
      ],
    },
  },
  {
    id: '96',
    name: 'Merfolk (PSZ)',
    description:
      'Curious, thoughtful, and analytical, the merfolk of Zendikar are natural scholars and explorers. In the past, merfolk society was organized around their belief in three deities. But in the wake of the reappearance of the Eldrazi, the merfolk have realized that their faith was a web of lies, built on a corrupted memory of the Eldrazi titans handed down from generation to generation. In peaceful times, the merfolk might have fought over the ultimate meaning of this revelation. But faced with the danger presented by the Eldrazi broods, the merfolk have largely set aside their differences and joined together in a united force. Old grudges still linger, but the well-being of the merfolk race—and the world—far outweigh any ancient conflicts between creeds.\n\nMerfolk are associated with knowledge, logic, and strategy, though the traditional merfolk creeds express this connection in different ways.',
    flavorText:
      'Curious, thoughtful, and analytical, the merfolk of Zendikar are natural scholars and explorers.',
    source: src.zendikar,
    abilityScoreDescription: 'Your Charisma score increases by 1.',
    abilityScores: {
      default: [
        {
          ability: Ability.CHA,
          value: 1,
        },
      ],
    },
    age: 'Merfolk mature at the same rate humans do and reach adulthood around the age of 20. They live considerably longer than humans, though, often reaching well over 100 years.',
    alignment:
      'Most merfolk are neutral, though merfolk of the Emeria and Cosi creeds have chaotic leanings.',
    size: Size.MEDIUM,
    sizeDescription:
      'Merfolk are about the same size as humans. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    swimSpeed: 30,
    swimDescription: 'You have a swimming speed of 30 feet.',
    creatureType: CreatureType.HUMANOID,
    languageDescription:
      'You can speak, read, and write Common, Merfolk, and one other language of your choice.',
    originLanguages: {
      default: [Language.COMMON, Language.MERFOLK],
      choices: [
        {
          options: Object.values(Language).filter(
            (f) => f != Language.COMMON && f != Language.MERFOLK
          ),
          numberOfChoices: 1,
        },
      ],
    },
  },
  {
    id: '116',
    name: 'Naga',
    description:
      'Naga resemble enormous snakes with shoulders, arms, and a torso that resembles a humanoid form. They typically hold their heads and torsos off the ground while moving, but they can increase their speed by lowering their bodies and using their hands for extra propulsion. They adorn their torsos with armor, jewelry, and a vague nod toward the clothing worn by other races. Male naga have broad hoods, wider than their shoulders, while females have narrower hoods and longer faces.',
    flavorText:
      'Naga resemble enormous snakes with shoulders, arms, and a torso that resembles a humanoid form.',
    source: src.amonkhet,
    abilityScoreDescription:
      'Your Constitution score increases by 2, and your Intelligence score increases by 1.',
    abilityScores: {
      default: [
        {
          ability: Ability.CON,
          value: 2,
        },
        {
          ability: Ability.INT,
          value: 1,
        },
      ],
    },
    age: 'Like humans, naga reach adulthood in their late teens. They show no signs of aging beyond that point except for growing larger, so in theory, a naga could live well over a century.',
    alignment: 'Most naga are either neutral or neutral evil in alignment.',
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    sizeDescription:
      'Naga stand about 5 feet tall when upright, but the total length of their bodies, head to tail, ranges from 10 to as much as 20 feet. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    languageDescription: 'You can speak, read, and write Common and Naga.',
    originLanguages: {
      default: [Language.COMMON, Language.NAGA],
    },
  },
  {
    id: '117',
    name: 'Siren',
    description:
      'Sirens are at home along the waters of the Stormwreck Sea. They settle on rocky coasts and remote islands, and even on floating piles of kelp. Sirens are mercurial creatures who can turn in an instant from lonely to repulsed, from desirous to hateful, from welcoming to irritated, from loving to murderous—and then back again. They are fascinated with ships, and enjoy toying with them. One siren might call out to a passing crew for company, only to capriciously draw the ship into an entangling mass of kelp. Another might lure a vessel onto jagged rocks so as to study the wreckage and learn more about the strange contraption. But as the number of Brazen Coalition ships passing through siren-controlled waters has increased over the years, a growing number of sirens have decided to satisfy their curiosity by taking positions on ship crews—including, in at least one case, the position of captain.\n\nSirens are humanoid creatures with birdlike features. Their long, slender arms extend into powerful wings that easily carry their light frames into the air. Their fingers bear sharp claws but are nimble enough to wield weapons and perform fine manipulation. Crests of feathery plumage start between their eyes and cover the backs of their heads.',
    flavorText: 'Sirens are at home along the waters of the Stormwreck Sea.',
    abilityScoreDescription: 'Your Charisma score increases by 2.',
    abilityScores: {
      default: [
        {
          ability: Ability.CHA,
          value: 2,
        },
      ],
    },
    source: src.ixalan,
    age: 'N/A',
    alignment:
      'Most sirens lean toward chaotic alignment, cherishing the freedom and independence that comes from joining a pirate crew.',
    size: Size.MEDIUM,
    sizeDescription:
      'Sirens stand about 5 to 6 feet tall, but their bodies are slender and their bones partially hollow to facilitate their flight. Your size is Medium.',
    speedDescription: 'Your base walking speed is 25 feet.',
    speed: 25,
    flightSpeed: 30,
    flightDescription:
      'You have a flying speed of 30 feet. You can’t use your flying speed while you wear medium or heavy armor. (If your campaign uses the variant rule for encumbrance, you can’t use your flying speed if you are encumbered.)',
    creatureType: CreatureType.HUMANOID,
    languageDescription: 'You can speak, read, and write Common and Siren.',
    originLanguages: {
      default: [Language.COMMON, Language.SIREN],
    },
  },
  {
    id: '118',
    name: 'Vampire (PSI)',
    description:
      'Vampires are associated with necromancy. Their existence is predicated on draining the life from others to fuel their own existence, and on putting their own lives ahead of all other concerns. Philosophically, they do not constrain themselves with artificial rules of morality, but believe that the strong can and should take what they need from the weak.',
    flavorText: 'Vampires are associated with necromancy.',
    source: src.ixalan,
    abilityScoreDescription:
      'Your Charisma score increases by 2, and your Intelligence score increases by 1.',
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
    age: 'Vampires don’t mature and age in the same way that other races do.',
    alignment:
      'Vampires might not have an innate tendency toward evil, but many of them end up there. Evil or not, their strict hierarchies incline them toward a lawful alignment.',
    size: Size.MEDIUM,
    sizeDescription:
      'Vampires are about the same size and build as humans. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      'Thanks to your heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
    languageDescription: 'You can speak, read, and write Common and Vampire.',
    originLanguages: {
      default: [Language.COMMON, Language.VAMPIRE],
    },
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: '119',
    name: 'Vampire (PSZ)',
    description:
      'Vampires are associated with necromancy. Their existence is predicated on draining the life from others to fuel their own existence, and on putting their own lives ahead of all other concerns. Philosophically, they do not constrain themselves with artificial rules of morality, but believe that the strong can and should take what they need from the weak.',
    flavorText: 'Vampires are associated with necromancy.',
    source: src.zendikar,
    abilityScoreDescription:
      'Your Charisma score increases by 2, and your Intelligence score increases by 1.',
    age: "Vampires don’t mature and age in the same way that other races do. Every living vampire is either a bloodchief, infected by the Eldrazi's influence in the distant reaches of history, or was spawned by a bloodchief from a living human. Most vampires are thus very old, but few have any memory of their earliest years.",
    alignment:
      'Vampires have no innate tendency toward evil, but consuming the life energy of other creatures often pushes them to that end. Regardless of their moral bent, the strict hierarchies of their bloodchiefs inclines them toward a lawful alignment.',
    size: Size.MEDIUM,
    sizeDescription:
      'Vampires are about the same size and build as humans. Your size is Medium.',
    speed: 30,
    speedDescription: 'Your base walking speed is 30 feet.',
    darkvision: 60,
    darkvisionDescription:
      'Thanks to your heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
    languageDescription: 'You can speak, read, and write Common and Vampire.',
    originLanguages: {
      default: [Language.COMMON, Language.VAMPIRE],
    },
    creatureType: CreatureType.HUMANOID,

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
  },
];

export const speciesIds = {
  dragonborn: '1',
  dwarf: '2',
  elf: '3',
  gnome: '4',
  halfElf: '5',
  halfOrc: '6',
  halfling: '7',
  human: '8',
  tiefling: '9',
  aarakocraMMOM: '10',
  aasimarMMOM: '11',
  aasimarVGM: '12',
  changelingMMOM: '13',
  changelingEberron: '14',
  deepGnomeMMOM: '15',
  deepGnomeEEPC: '16',
  duergarMMOM: '17',
  duergarSCAG: '18',
  eladrinMMOM: '19',
  edladrinMTOF: '20',
  fairyMMOM: '21',
  fairyTWBTW: '22',
  firbolgMMOM: '23',
  firbolgVGTM: '24',
  airGenasiMMOM: '25',
  airGenasiEEPC: '26',
  earthGenasiMMOM: '27',
  earthGenasiEEPC: '28',
  fireGenasiMMOM: '29',
  fireGenasiEEPC: '30',
  waterGenasiMMOM: '31',
  waterGenasiEEPC: '32',
  githyankiMMOM: '33',
  githyankiMTOF: '34',
  githzeraiMMOM: '35',
  githzeraiMTOF: '36',
  goliathMMOM: '37',
  goliathEEPC: '38',
  harengonMMOM: '39',
  harengonTWBTW: '40',
  kenkuMMOM: '41',
  kenkuVGM: '42',
  locathah: '43',
  owlin: '44',
  satyr: '45',
  satyrMOOT: '46',
  seaElfMMOM: '47',
  seaElfMTOF: '48',
  shadarKai: '49',
  shadarKaiMTOF: '50',
  tabaxiMMOM: '51',
  tabaxiVGTM: '52',
  tortleMMOM: '53',
  tortleTP: '54',
  tritonMMOM: '55',
  tritonVGTM: '56',
  verdan: '57',
  kender: '58',
  kalashtar: '59',
  warforged: '60',
  bugbearMMOM: '61',
  bugbearVGTM: '62',
  centaurMMOM: '63',
  centaurGGR: '64',
  centaurMOOT: '65',
  golbinMMOM: '66',
  goblinVGM: '67',
  golbinAwMD: '68',
  golbinPSI: '69',
  golbinPSZ: '70',
  grung: '71',
  hobgoblinMMOM: '72',
  hobgoblinVGTM: '73',
  koboldMMOM: '74',
  koboldVGTM: '75',
  lizardfolkMMOM: '76',
  lizardfolkVGTM: '77',
  minotaurMMOM: '78',
  minotaurGGTR: '79',
  minotaurMOOT: '80',
  minotaurPSA: '81',
  orcMMOM: '82',
  orcVGTM: '83',
  orcERLW: '84',
  orcEGTW: '85',
  orcPSI: '86',
  shifterMMOM: '87',
  shifterERLW: '88',
  yuanTiMMOM: '89',
  yuanTiVGTM: '90',
  aetherborn: '91',
  aven: '92',
  khenra: '93',
  kor: '94',
  merfolkIxalan: '95',
  merfolkZendikar: '96',
  naga: '116',
  siren: '117',
  vampireIxalan: '118',
  vampirePSZ: '119',
};

export default Species;
