import { languages } from '@/lib/globalVars';
import { src } from '@/lib/types/types';
import {
  DamageTypes,
  Language,
  Prisma,
  Skill,
  Ability,
  Size,
} from '@prisma/client';

import { weaponIds } from '../Items/Weapons/Weapons.seed';
import { artisanIds, toolIds } from '../Items/Tools/Tool.seed';
import { speciesIds as ids } from '../Species/Species.seed';

const SubSpeciesSeed: Prisma.SubSpeciesCreateManyInput[] = [
  //dragonborn
  {
    id: '1',
    name: 'Black Dragonborn',
    description:
      'Black Dragonborn have a breath weapon that deals acid damage.',
    speciesId: ids.dragonborn,
    flavorText: 'Black Dragonborn have a breath weapon that deals acid damage.',
    source: src.phb,
    resistanceTo: [DamageTypes.ACID],
  },
  {
    id: '2',
    name: 'Blue Dragonborn',
    description:
      'Blue Dragonborn have a breath weapon that deals lightning damage.',
    speciesId: ids.dragonborn,
    flavorText:
      'Blue Dragonborn have a breath weapon that deals lightning damage.',
    source: src.phb,
    resistanceTo: [DamageTypes.LIGHTNING],
  },
  {
    id: '3',
    name: 'Brass Dragonborn',
    description:
      'Brass Dragonborn have a breath weapon that deals fire damage.',
    speciesId: ids.dragonborn,
    flavorText: 'Brass Dragonborn have a breath weapon that deals fire damage.',
    source: src.phb,
    resistanceTo: [DamageTypes.FIRE],
  },
  {
    id: '4',
    name: 'Bronze Dragonborn',
    description:
      'Bronze Dragonborn have a breath weapon that deals lightning damage.',
    speciesId: ids.dragonborn,
    flavorText:
      'Bronze Dragonborn have a breath weapon that deals lightning damage.',
    source: src.phb,
    resistanceTo: [DamageTypes.LIGHTNING],
  },
  {
    id: '5',
    name: 'Copper Dragonborn',
    description:
      'Copper Dragonborn have a breath weapon that deals acid damage.',
    speciesId: ids.dragonborn,
    flavorText:
      'Copper Dragonborn have a breath weapon that deals acid damage.',
    source: src.phb,
    resistanceTo: [DamageTypes.ACID],
  },
  {
    id: '6',
    name: 'Gold Dragonborn',
    description: 'Gold Dragonborn have a breath weapon that deals fire damage.',
    speciesId: ids.dragonborn,
    flavorText: 'Gold Dragonborn have a breath weapon that deals fire damage.',
    source: src.phb,
    resistanceTo: [DamageTypes.FIRE],
  },
  {
    id: '7',
    name: 'Green Dragonborn',
    description:
      'Green Dragonborn have a breath weapon that deals poison damage.',
    speciesId: ids.dragonborn,
    flavorText:
      'Green Dragonborn have a breath weapon that deals poison damage.',
    source: src.phb,
    resistanceTo: [DamageTypes.POISON],
  },
  {
    id: '8',
    name: 'Red Dragonborn',
    description: 'Red Dragonborn have a breath weapon that deals fire damage.',
    speciesId: ids.dragonborn,
    flavorText: 'Red Dragonborn have a breath weapon that deals fire damage.',
    source: src.phb,
    resistanceTo: [DamageTypes.FIRE],
  },
  {
    id: '9',
    name: 'Silver Dragonborn',
    description:
      'Silver Dragonborn have a breath weapon that deals cold damage.',
    speciesId: ids.dragonborn,
    flavorText:
      'Silver Dragonborn have a breath weapon that deals cold damage.',
    source: src.phb,
    resistanceTo: [DamageTypes.COLD],
  },
  {
    id: '10',
    name: 'White Dragonborn',
    description:
      'White Dragonborn have a breath weapon that deals cold damage.',
    speciesId: ids.dragonborn,
    flavorText: 'White Dragonborn have a breath weapon that deals cold damage.',
    source: src.phb,
    resistanceTo: [DamageTypes.COLD],
  },
  // {
  //   id: '11',
  //   name: "Chomatic Dragonborn",
  //   description:
  //     "Dragonborn with chromatic ancestry claim the raw elemental power of chromatic dragons. The vibrant colors of black, blue, green, red, and white dragons gleam in those dragonborn's scaled skin and in the deadly energy of their breath weapons. Theirs is the raw elemental fury of the volcano, of biting arctic winds, and of raging lightning storms, as well as the subtle whisper of swamp and forest, toxic and corrosive.",
  //   speciesId: ids.dragonborn,
  //   flavorText:
  //     "With the vibrant colors of black, blue, green, red, and white dragons, Chromatic Dragonborn claim the raw elemental power of chromatic dragons.",
  //   source: src.fizban,
  //   abilityScores: {
  //     choices: [
  //       {
  //         abilities: [
  //           Ability.STR,
  //           Ability.DEX,
  //           Ability.CON,
  //           Ability.INT,
  //           Ability.WIS,
  //           Ability.CHA,
  //         ], // All available abilities
  //         options: [
  //           {
  //             numberOfAbilities: 2, // Two different abilities
  //             increases: [2, 1], // One ability gets +2, another gets +1
  //           },
  //           {
  //             numberOfAbilities: 3, // Three different abilities
  //             increases: [1, 1, 1], // Each ability gets +1
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   creatureType: CreatureType.HUMANOID,
  //   size: Size.MEDIUM,
  //   speed: 30,
  //   speedDescription: "Your walking speed is 30 feet.",
  //   originLanguages: {
  //     defaultLanguages: [Language.COMMON],
  //     choices: {
  //       languages: languages.filter((lang) => lang !== Language.COMMON),
  //       numberOfChoices: 1,
  //     },
  //   },
  //   languageDescription:
  //     "You can speak, read, and write Common and one other language that you and your DM agree is appropriate for the character.",
  // },
  // {
  //   id: '12',
  //   name: "Metallic",
  //   description:
  //     "Dragonborn with metallic ancestry lay claim to the tenacity of metallic dragons — brass, bronze, copper, gold, and silver — whose hues glint in their scales. Theirs is the fire of hearth and forge, the cold of high mountain air, the spark of inspiration, and the scouring touch of acid that purifies.",
  //   speciesId: ids.dragonborn,
  //   flavorText:
  //     "Theirs is the fire of hearth and forge, the cold of high mountain air, the spark of inspiration, and the scouring touch of acid that purifies.",
  //   source: src.fizban,
  //   abilityScores: {
  //     choices: [
  //       {
  //         abilities: [
  //           Ability.STR,
  //           Ability.DEX,
  //           Ability.CON,
  //           Ability.INT,
  //           Ability.WIS,
  //           Ability.CHA,
  //         ], // All available abilities
  //         options: [
  //           {
  //             numberOfAbilities: 2, // Two different abilities
  //             increases: [2, 1], // One ability gets +2, another gets +1
  //           },
  //           {
  //             numberOfAbilities: 3, // Three different abilities
  //             increases: [1, 1, 1], // Each ability gets +1
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   creatureType: CreatureType.HUMANOID,
  //   size: Size.MEDIUM,
  //   speed: 30,
  //   speedDescription: "Your walking speed is 30 feet.",
  //   originLanguages: {
  //     defaultLanguages: [Language.COMMON],
  //     choices: {
  //       languages: languages.filter((lang) => lang !== Language.COMMON),
  //       numberOfChoices: 1,
  //     },
  //   },
  // },
  // {
  //   id: '13',
  //   name: "Gem",
  //   description:
  //     "Gem dragonborn partake of the heritage of gem dragons, who claim to be heirs of Sardior, the Ruby Dragon. The colors and mysterious powers of gem dragons — amethyst, crystal, emerald, sapphire, and topaz — gleam in these dragonborn’s scaled skin and course through their veins. Theirs are the wonders of the mind, the force of will, the brilliant light of insight, and the resounding echo of discovery — but also the desiccation of despair.",
  //   speciesId: ids.dragonborn,
  //   flavorText:
  //     "Theirs are the wonders of the mind, the force of will, the brilliant light of insight, and the resounding echo of discovery — but also the desiccation of despair.",
  //   source: src.fizban,
  //   abilityScores: {
  //     choices: [
  //       {
  //         abilities: [
  //           Ability.STR,
  //           Ability.DEX,
  //           Ability.CON,
  //           Ability.INT,
  //           Ability.WIS,
  //           Ability.CHA,
  //         ], // All available abilities
  //         options: [
  //           {
  //             numberOfAbilities: 2, // Two different abilities
  //             increases: [2, 1], // One ability gets +2, another gets +1
  //           },
  //           {
  //             numberOfAbilities: 3, // Three different abilities
  //             increases: [1, 1, 1], // Each ability gets +1
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   creatureType: CreatureType.HUMANOID,
  //   size: Size.MEDIUM,
  //   speed: 30,
  //   speedDescription: "Your walking speed is 30 feet.",
  //   originLanguages: {
  //     defaultLanguages: [Language.COMMON],
  //     choices: {
  //       languages: languages.filter((lang) => lang !== Language.COMMON),
  //       numberOfChoices: 1,
  //     },
  //   },
  // },
  //dwarf

  {
    id: '14',
    name: 'Hill Dwarf',
    description:
      'As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience. The gold dwarves of Faerun in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting.',
    speciesId: ids.dwarf,
    flavorText:
      'As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.',
    source: src.phb,
    abilityScores: {
      default: [
        { ability: Ability.WIS, value: 1 },
        { ability: Ability.CON, value: 2 },
      ],
    },
    abilityScoreDescription:
      'On top of your Constitution increase from being a dwarf, your Wisdom score increases by 1.',
  },
  {
    id: '15',
    name: 'Mountain Dwarf',
    abilityScoreDescription:
      'On top of your Constitution increase from being a dwarf, your Strength score increases by 2.',
    abilityScores: {
      default: [
        { ability: Ability.STR, value: 2 },
        { ability: Ability.CON, value: 2 },
      ],
    },
    description:
      "As a mountain dwarf, you're strong and hardy, accustomed to a difficult life in rugged terrain. You're probably on the tall side (for a dwarf), and tend toward lighter coloration, The shield dwarves of northern Faerun, as well as the ruling Hylar clan and the noble Daewar c1an of Dragonlance, are mountain dwarves.",
    speciesId: ids.dwarf,
    flavorText:
      "As a mountain dwarf, you're strong and hardy, accustomed to a difficult life in rugged terrain.",
    source: src.phb,
  },
  {
    id: '16',
    name: 'Mark of Warding Dwarf',
    description:
      'The Mark of Warding is a dragonmark that bestows powers used to protect people, places, and things from all manner of damage or harm, with a focus on guarding locations and items from would-be thieves.',
    flavorText:
      'The Mark of Warding is a dragonmark that bestows powers used to protect people, places, and things from all manner of damage or harm.',
    speciesId: ids.dwarf,
    source: src.eberron,
    abilityScores: {
      default: [
        { ability: Ability.INT, value: 1 },
        { ability: Ability.CON, value: 2 },
      ],
    },
    abilityScoreDescription:
      'On top of your Constitution increase from being a dwarf, your Intelligence score increases by 1.',
  },
  //elf
  {
    id: '17',
    name: 'Dark Elf',
    description:
      'Descended from an earlier subspecies of dark-skinned elves, the drow were banished from the surface world for following the goddess Lolth down the path to evil and corruption. Now they have built their own civilization in the depths of the Underdark, patterned after the Way of Lolth. Also called dark elves. The drow have black skin that resembles polished obsidian and stark white or pale yellow hair. They commonly have very pale eyes (so pale as to be mistaken for white) in shades of lilac, silver, pink, red, and blue. They lend to be smaller and thinner than most elves.\n\nDrow adventurers are rare, and the species does not exist in all worlds. Check with your Dungeon Master to see if you can play a drow character.',
    speciesId: ids.elf,
    flavorText:
      'Descended from an earlier subspecies of dark-skinned elves, the drow were banished from the surface world for following the goddess Lolth down the path to evil and corruption.',
    source: src.phb,
    abilityScores: {
      default: [
        { ability: Ability.DEX, value: 2 },
        { ability: Ability.CHA, value: 1 },
      ],
    },
    abilityScoreDescription:
      'On top of your Dexterity increase from being an elf, your Charisma score increases by 1.',
    darkvision: 120,
    darkvisionDescription:
      'On top of your Dexterity increase from being an elf, your Charisma score increases by 1.',
    weaponProficiencies: {
      default: [weaponIds.rapier, weaponIds.shortsword, weaponIds.crossbowHand],
    },
    weaponProficiencyDescription:
      'You have proficiency with rapiers, shortswords, and hand crossbows.',
  },
  {
    id: '18',
    name: 'High Elf',
    description:
      'As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many of the worlds of D&D, there are two kinds of high elves. One type (which includes the gray elves and valley elves of Greyhawk, the Silvanesti of Dragonlance, and the sun elves of the Forgotten Realms) is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type (including the high elves of Greyhawk. the Qualinesti of Dragonlance, and the moon elves of the Forgotten Realms) are more common and more friendly, and often encountered among humans and other races.\n\nThe sun elves of Faerun (also called gold elves or sunrise elves) have bronze skin and hair of copper, black, or golden blood. Their eyes are golden, silver, or black. Moon elves (also called silver elves or gray elves) are much paler, with alabaster skin sometimes tinged with blue. They often have hair of silver-while, black, or blue, but various shades of blond, brown, and red are not uncommon. Their eyes are blue or green and flecked with gold.',
    speciesId: ids.elf,
    flavorText:
      'As a high elf, you have a keen mind and a mastery of at least the basics of magic.',
    source: src.phb,
    abilityScores: {
      default: [
        { ability: Ability.DEX, value: 2 },
        { ability: Ability.INT, value: 1 },
      ],
    },
    weaponProficiencies: {
      default: [
        weaponIds.longsword,
        weaponIds.shortsword,
        weaponIds.longbow,
        weaponIds.shortbow,
      ],
    },
    weaponProficiencyDescription:
      'You have proficiency with longswords, shortswords, longbows, and shortbows.',
    originLanguages: {
      default: [Language.COMMON, Language.ELVISH],
      choices: [
        {
          options: languages.filter(
            (lang) => lang !== Language.COMMON && lang !== Language.ELVISH
          ),
          numberOfChoices: 1,
        },
      ],
    },
    languageDescription:
      'On top of being able to speak, read, and write Common and Elvish, you can learn one extra language of your choice.',
    abilityScoreDescription:
      'On top of your Dexterity increase from being an elf, your Intelligence score increases by 1.',
  },
  {
    id: '19',
    name: 'Wood Elf',
    description:
      "As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests. This category includes the wild elves (grugach) of Greyhawk and the Kagonesti of Dragonlance, as well as the races called wood elves in Greyhawk and the Forgotten Realms. In Faerun, wood elves (also called wild elves. green elves, or forest elves) are reclusive and distrusting of non-elves.\n\nWood elves' skin tends to be copperish in hue, sometimes with traces of green. Their hair tends toward browns and blacks, but it is occasionally blond or copper-colored. Their eyes are green, brown, or hazel.",
    speciesId: ids.elf,
    flavorText:
      'As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests.',
    abilityScores: {
      default: [
        { ability: Ability.DEX, value: 2 },
        { ability: Ability.WIS, value: 1 },
      ],
    },
    source: src.phb,
    weaponProficiencies: {
      default: [
        weaponIds.longsword,
        weaponIds.shortsword,
        weaponIds.shortbow,
        weaponIds.longbow,
      ],
    },
    weaponProficiencyDescription:
      'You have proficiency in longswords, shortswords, shortbows, and longbows.',
    speed: 35,
    speedDescription: 'Your base walking speed increases to 35 feet.',
  },
  {
    id: '20',
    name: 'Pallid Elf',
    description:
      "The pallid elves are a mystical and insightful people with skin as pale as the surface of Exandria's largest moon. They emerged from the Pallid Grove this century and wander the world with childlike curiosity.",
    flavorText:
      "The pallid elves are a mystical and insightful people with skin as pale as the surface of Exandria's largest moon.",
    speciesId: ids.elf,
    source: src.wildemount,
    abilityScores: {
      default: [
        { ability: Ability.DEX, value: 2 },
        { ability: Ability.INT, value: 1 },
      ],
    },
    abilityScoreDescription:
      'On top of your Dexterity increase from being an elf, your Intelligence score increases by 1.',
  },
  {
    id: '21',
    name: 'Mark of Shadow Elf',
    description:
      'The Mark of Shadows is a dragonmark that grants various magical benefits that relate to divination and illusions.',
    flavorText:
      'The Mark of Shadows is a dragonmark that grants various magical benefits.',
    speciesId: ids.elf,
    source: src.eberron,
    abilityScores: {
      default: [
        { ability: Ability.DEX, value: 2 },
        { ability: Ability.CHA, value: 1 },
      ],
    },
    abilityScoreDescription:
      'On top of your Dexterity increase from being an elf, your Charisma score increases by 1.',
  },
  {
    id: '22',
    name: 'Bishtahar Elf',
    description:
      'Elves who dwell in the forest and countryside are known as the Bishtahar. Most live in isolated communities away from other races, though they still trade with them. In fact, much of Kaladesh’s food supply is grown by elves. Bishtahar cultivators grow food, decorative flowers, wood for building, and elaborate living sculptures in their meandering gardens and fields. They use the plane’s ubiquitous technology to foster the growth of plants and animals, utilizing automatons as gardeners and herders, and employing elaborate, nearly invisible systems controlling heat, water, and nutrients.',
    flavorText:
      'Elves who dwell in the forest and countryside are known as the Bishtahar.',
    speciesId: ids.elf,
    source: src.kaladesh,
    abilityScores: {
      default: [
        { ability: Ability.DEX, value: 2 },
        { ability: Ability.WIS, value: 1 },
      ],
    },
    abilityScoreDescription:
      'On top of your Dexterity increase from being an elf, your Wisdom score increases by 1.',
    speed: 35,
    speedDescription: 'Your base walking speed increases to 35 feet.',
  },
  {
    id: '23',
    name: 'Vahadar Elf',
    description:
      'The Vahadar are elves who dwell in the cities of Kaladesh. They are comfortable with technology, and work as planners, architects, aether-seers, or inventors. Some of them use the techniques of Bishtahar cultivators to grow food on rooftops, towers, and greenways. The Vahadar are generally integrated into the rest of society on Kaladesh, living in cities dominated by the other races (though, as in Ghirapur, many of them live in specific garden-like neighborhoods) and engaging in trade.',
    flavorText:
      'The Vahadar are elves who dwell in the cities of Kaladesh. They are comfortable with technology, and work as planners, architects, aether-seers, or inventors.',
    speciesId: ids.elf,
    source: src.kaladesh,
    abilityScores: {
      default: [
        { ability: Ability.DEX, value: 2 },
        { ability: Ability.WIS, value: 1 },
      ],
    },
    abilityScoreDescription:
      'On top of your Dexterity increase from being an elf, your Wisdom score increases by 1.',
    originLanguages: {
      default: [Language.COMMON, Language.ELVISH],
      choices: [
        {
          options: languages.filter(
            (lang) => lang !== Language.COMMON && lang !== Language.ELVISH
          ),
          numberOfChoices: 1,
        },
      ],
    },
    languageDescription:
      'On top of being able to speak, read, and write Common and Elvish, you can learn one extra language of your choice.',
    weaponProficiencies: {
      default: [
        weaponIds.longsword,
        weaponIds.shortsword,
        weaponIds.longbow,
        weaponIds.shortbow,
      ],
    },
    weaponProficiencyDescription:
      'You have proficiency with longswords, shortswords, longbows, and shortbows.',
  },
  //gnome
  {
    id: '24',
    name: 'Forest Gnome',
    description:
      'As a forest gnome, you have a natural knack for illusion and inherent quickness and stealth. In the worlds of D&D, forest gnomes are rare and secretive. They gather in hidden communities in sylvan forests, using illusions and trickery to conceal themselves from threats or to mask their escape should they be detected. Forest gnomes tend to be friendly with other good-spirited woodland folk, and they regard elves and good fey as their most important allies. These gnomes also befriend small forest animals and rely on them for information about threats that might prowl their lands.',
    speciesId: ids.gnome,
    flavorText:
      'As a forest gnome, you have a natural knack for illusion and inherent quickness and stealth.',
    source: src.phb,
    abilityScores: {
      default: [
        { ability: Ability.DEX, value: 1 },
        { ability: Ability.INT, value: 2 },
      ],
    },
    abilityScoreDescription:
      'On top of your Intelligence increase from being a gnome, your Dexterity score increases by 1.',
  },
  {
    id: '25',
    name: 'Rock Gnome',
    description:
      'As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. Most gnomes in the worlds of D&D are rock gnomes, including the tinker gnomes of the Dragonlance setting.',
    speciesId: ids.gnome,
    flavorText:
      'As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes.',
    source: src.phb,
    abilityScores: {
      default: [
        { ability: Ability.CON, value: 1 },
        { ability: Ability.INT, value: 2 },
      ],
    },
    abilityScoreDescription:
      'On top of your Intelligence increase from being a gnome, your Constitution score increases by 1.',
  },
  {
    id: '26',
    name: 'Mark of Scribing Gnome',
    description:
      'The Mark of Scribing is a dragonmark that bestows a number of powers related to the written word and communication, often over great distances.',
    toolProficiencies: {
      default: [toolIds.tinkersTools],
    },
    flavorText:
      'The Mark of Scribing is a dragonmark that bestows a number of powers related to the written word and communication.',
    speciesId: ids.gnome,
    source: src.eberron,
    abilityScores: {
      default: [
        { ability: Ability.INT, value: 2 },
        { ability: Ability.CHA, value: 1 },
      ],
    },
    abilityScoreDescription:
      'On top of your Intelligence increase from being a gnome, your Charisma score increases by 1.',
  },
  //half-elf
  {
    id: '27',
    name: 'Elf Descent',
    description: 'You have a general nonspecified elven heritage. ',
    speciesId: ids.halfElf,
    flavorText: 'You have a general nonspecified elven heritage.',
    source: src.phb,
  },
  {
    name: 'High or Wood Elf Descent',
    id: '28',
    description: 'You descend from high elves or wood elves.',
    speciesId: ids.halfElf,
    flavorText: 'You descend from high elves or wood elves.',
    source: src.phb,
  },
  {
    name: 'High Elf Descent',
    id: '29',
    description: 'You descend from high elves.',
    speciesId: ids.halfElf,
    flavorText: 'You descend from high elves.',
    source: src.phb,
  },
  {
    name: 'Wood Elf Descent',
    id: '30',
    description: 'You descend from wood elves.',
    speciesId: ids.halfElf,
    flavorText: 'You descend from wood elves.',
    source: src.phb,
  },
  {
    name: 'Wood Elf Descent (Alternate)',
    id: '1000',
    description: 'You descend from wood elves.',
    speciesId: ids.halfElf,
    flavorText: 'You descend from wood elves.',
    source: src.phb,
  },
  {
    id: '31',
    name: 'Dark Elf Descent',
    description: 'You descend from dark elves.',
    speciesId: ids.halfElf,
    flavorText: 'You descend from dark elves.',
    source: src.phb,
  },
  {
    id: '32',
    name: 'Aquatic Elf Descent',
    description: 'You descend from aquatic elves.',
    speciesId: ids.halfElf,
    flavorText: 'You descend from aquatic elves.',
    source: src.phb,
  },
  {
    name: 'Mark of Detection Half Elf',
    id: '33',
    description:
      'The Mark of Detection is a dragonmark that grants those who bear it powers of detection and the ability to ferret out danger whether from an ambush or a cup of poisoned wine.',
    speciesId: ids.halfElf,
    flavorText:
      'The Mark of Detection is a dragonmark that grants those who bear it powers of detection and the ability to ferret out danger.',
    source: src.eberron,
    abilityScores: {
      default: [{ ability: Ability.WIS, value: 2 }],
      choices: [
        {
          abilities: [
            Ability.STR,
            Ability.DEX,
            Ability.CON,
            Ability.INT,
            Ability.CHA,
          ], // All available abilities
          options: [1],
        },
      ],
    },
    abilityScoreDescription:
      'Your Wisdom score increases by 2, and one other Ability Score of your choice increases by 1.',
  },
  {
    id: '34',
    name: 'Mark of Storm Half Elf',
    description:
      'The Mark of Storm is a dragonmark that bestows powers over the weather, from calm winds to raging rainstorms.',
    speciesId: ids.halfElf,
    flavorText:
      'The Mark of Storm is a dragonmark that bestows powers over the weather.',
    source: src.eberron,
    abilityScores: {
      default: [
        { ability: Ability.DEX, value: 1 },
        { ability: Ability.CHA, value: 2 },
      ],
    },
    abilityScoreDescription:
      'Your Charisma score increases by 2, and your Dexterity score increases by 1.',
    resistanceTo: [DamageTypes.LIGHTNING],
  },
  //half orc
  {
    id: '35',
    name: 'Mark of Finding Ork',
    description:
      'The Mark of Finding is a dragonmark that grants those who bear it abilities related to locating people and objects.',
    speciesId: ids.halfOrc,
    flavorText:
      'The Mark of Finding is a dragonmark that grants those who bear it abilities related to locating people and objects.',
    source: src.eberron,
    abilityScores: {
      default: [
        { ability: Ability.WIS, value: 2 },
        { ability: Ability.CON, value: 1 },
      ],
    },
    abilityScoreDescription:
      'Your Wisdom score increases by 2, and your Constitution score increases by 1.',
    originLanguages: {
      default: [Language.COMMON, Language.GOBLIN],
    },
  },
  //halfling
  {
    id: '36',
    name: 'Lightfoot Halfling',
    description:
      "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You're inclined to be affable and get along well with others. In the Forgotten Realms, lightfoot halflings have spread the farthest and thus are the most common variety.\n\nLightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life. In the world of Grayhawk, these halflings are called hairfeet or tallfellows.",
    speciesId: ids.halfling,
    flavorText:
      'As a lightfoot halfling, you can easily hide from notice, even using other people as cover.',
    source: src.phb,
    abilityScores: {
      default: [
        { ability: Ability.DEX, value: 2 },
        { ability: Ability.CHA, value: 1 },
      ],
    },
    abilityScoreDescription:
      'On top of your Dexterity increase from being a halfling, your Charisma score increases by 1.',
  },
  {
    id: '37',
    name: 'Stout Halfling',
    description:
      "As a stout halfling, you're hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts, and they're most common in the south.",
    speciesId: ids.halfling,
    flavorText:
      "As a stout halfling, you're hardier than average and have some resistance to poison.",
    source: src.phb,
    abilityScores: {
      default: [
        { ability: Ability.DEX, value: 2 },
        { ability: Ability.CON, value: 1 },
      ],
    },
    abilityScoreDescription:
      'On top of your Dexterity increase from being a halfling, your Constitution score increases by 1.',
    resistanceTo: [DamageTypes.POISON],
  },
  {
    id: '38',
    name: 'Ghostwise Halfling',
    description:
      "Ghostwise halflings tspecies their ancestry back to a war among halfling tribes that sent their ancestors into flight from Luiren. Ghostwise halflings are the rarest of the hin, found only in the Chondalwood and a few other isolated forests, clustered in tight-knit clans.\n\nMany ghostwise clans select a natural landmark as the center of their territory, and members carry a piece of that landmark with them at all times. Clan warriors known as nightgliders bond with and ride giant owls as mounts.\n\nBecause these folk are clannish and mistrustful of outsiders, ghostwise halfling adventurers are rare. Ask your DM if you can play a member of this subspecies, which has the halfling traits in the Player's Handbook, plus the subspecies traits below.",
    speciesId: ids.halfling,
    flavorText:
      'Ghostwise halflings tspecies their ancestry back to a war among halfling tribes that sent their ancestors into flight from Luiren.',
    source: src.sword,
    abilityScores: {
      default: [
        { ability: Ability.DEX, value: 2 },
        { ability: Ability.WIS, value: 1 },
      ],
    },
    abilityScoreDescription:
      'On top of your Dexterity increase from being a halfling, your Wisdom score increases by 1.',
  },
  {
    id: '39',
    name: 'Lotusden Halfling',
    description:
      'Long tied to the natural heart of the Lotusden Greenwood, these halflings have adapted to live synergistically with the chaotic laws of the wilds.',
    speciesId: ids.halfling,
    flavorText:
      'Long tied to the natural heart of the Lotusden Greenwood, these halflings have adapted to live synergistically with the chaotic laws of the wilds.',
    source: src.wildemount,
    abilityScores: {
      default: [
        { ability: Ability.DEX, value: 2 },
        { ability: Ability.WIS, value: 1 },
      ],
    },
    abilityScoreDescription:
      'On top of your Dexterity increase from being a halfling, your Wisdom score increases by 1.',
  },
  {
    id: '40',
    name: 'Mark of Hospitality Halfling',
    description:
      'The Mark of Hospitality is a dragonmark that grants those who bear it powers related to food, shelter, and comfort.',
    speciesId: ids.halfling,
    flavorText:
      'The Mark of Hospitality is a dragonmark that grants those who bear it powers related to food, shelter, and comfort.',

    source: src.eberron,
    abilityScores: {
      default: [
        { ability: Ability.DEX, value: 2 },
        { ability: Ability.CHA, value: 1 },
      ],
    },
    abilityScoreDescription:
      'On top of your Dexterity increase from being a halfling, your Charisma score increases by 1.',
  },
  {
    id: '41',
    name: 'Mark of Healing Halfling',
    description:
      'The Mark of Healing is a dragonmark that grants those who bear it powers related to healing and restoration.',
    speciesId: ids.halfling,
    flavorText:
      'The Mark of Healing is a dragonmark that grants those who bear it powers related to healing and restoration.',
    source: src.eberron,
    abilityScores: {
      default: [
        { ability: Ability.DEX, value: 2 },
        { ability: Ability.WIS, value: 1 },
      ],
    },
    abilityScoreDescription:
      'On top of your Dexterity increase from being a halfling, your Wisdom score increases by 1.',
  },
  //human
  {
    id: '42',
    name: 'Mark of Finding Human',
    description:
      'The Mark of Finding is a dragonmark that grants those who bear it abilities related to locating people and objects.',
    speciesId: ids.human,
    flavorText:
      'The Mark of Finding is a dragonmark that grants those who bear it abilities related to locating people and objects.',
    source: src.eberron,
    abilityScores: {
      default: [{ ability: Ability.WIS, value: 2 }],
      choices: [
        {
          abilities: [
            Ability.STR,
            Ability.DEX,
            Ability.CON,
            Ability.INT,
            Ability.CHA,
          ], // All available abilities

          options: [1],
        },
      ],
    },
    darkvision: 60,

    abilityScoreDescription:
      'Your Wisdom score increases by 2, and your Constitution score increases by 1.',
    originLanguages: {
      default: [Language.COMMON, Language.GOBLIN],
    },
  },
  {
    id: '43',
    name: 'Mark of Handling Human',
    description:
      'The Mark of Handling is a dragonmark that grants those who bear it powers related to animals and the natural world.',
    speciesId: ids.human,
    flavorText:
      'The Mark of Handling is a dragonmark that grants those who bear it powers related to animals and the natural world.',
    source: src.eberron,
    abilityScores: {
      default: [{ ability: Ability.WIS, value: 2 }],
      choices: [
        {
          abilities: [
            Ability.STR,
            Ability.DEX,
            Ability.CON,
            Ability.INT,
            Ability.CHA,
          ], // All available abilities

          options: [1],
        },
      ],
    },
    abilityScoreDescription:
      'Your Wisdom score increases by 2, and one other ability of your choice increases by 1.',
  },
  {
    id: '44',
    name: 'Mark of Making Human',
    description:
      'The Mark of Making is a dragonmark that grants those who bear it powers related to crafting and creation.',
    speciesId: ids.human,
    flavorText:
      'The Mark of Making is a dragonmark that grants those who bear it powers related to crafting and creation.',
    source: src.eberron,
    abilityScores: {
      default: [{ ability: Ability.INT, value: 2 }],
      choices: [
        {
          abilities: [
            Ability.STR,
            Ability.DEX,
            Ability.CON,
            Ability.WIS,
            Ability.CHA,
          ], // All available abilities

          options: [1],
        },
      ],
    },
    toolProficiencies: {
      default: Object.values(artisanIds),
    },
    abilityScoreDescription:
      'Your Intelligence score increases by 2, and one other Ability Score of your choice increases by 1.',
  },
  {
    id: '45',
    name: 'Mark of Passage Human',
    description:
      'The Mark of Passage is a dragonmark that grants those who bear it powers related to travel and movement.',
    speciesId: ids.human,
    flavorText:
      'The Mark of Passage is a dragonmark that grants those who bear it powers related to travel and movement.',
    source: src.eberron,
    abilityScores: {
      default: [{ ability: Ability.DEX, value: 2 }],
      choices: [
        {
          abilities: [
            Ability.STR,
            Ability.CON,
            Ability.INT,
            Ability.WIS,
            Ability.CHA,
          ], // All available abilities

          options: [1],
        },
      ],
    },
    abilityScoreDescription:
      'Your Dexterity score increases by 2, and one other Ability Score of your choice increases by 1.',
    speed: 35,
    speedDescription: 'Your base walking speed is 35 feet.',
  },
  {
    id: '46',
    name: 'Mark of Sentinel Human',
    description:
      'The Mark of Sentinel is a dragonmark that grants those who bear it powers related to protection and defense.',
    speciesId: ids.human,
    flavorText:
      'The Mark of Sentinel is a dragonmark that grants those who bear it powers related to protection and defense.',
    source: src.eberron,
    abilityScores: {
      default: [
        { ability: Ability.WIS, value: 1 },
        { ability: Ability.CON, value: 2 },
      ],
    },
    abilityScoreDescription:
      'Your Constitution score increases by 2, and your Wisdom score increases by 1.',
  },
  //tiefling
  {
    id: '47',
    name: 'Asmodeus Tiefling',
    description:
      'The tieflings connected to Nessus command the power of fire and darkness, guided by a keener than normal intellect, as befits those linked to Asmodeus himself.',
    speciesId: ids.tiefling,
    flavorText:
      'Tieflings tied to Asmodeus are known for their cunning and charisma.',
    source: src.phb,
    abilityScores: {
      default: [
        { ability: Ability.INT, value: 1 },
        { ability: Ability.CHA, value: 2 },
      ],
    },
    abilityScoreDescription:
      'On top of your Charisma increase from being a tiefling, your Intelligence score increases by 1.',
  },
  {
    id: '48',
    name: 'Baalzebul Tiefling',
    description:
      'The crumbling realm of Maladomini is ruled by Baalzebul, who excels at corrupting those whose minor sins can be transformed into acts of damnation. Tieflings linked to this archdevil can corrupt others both physically and psychically.',
    speciesId: ids.tiefling,
    flavorText:
      'Tieflings tied to Baalzebul can corrupt others both physically and psychically.',
    source: src.mordenkainenFoes,
    abilityScores: {
      default: [
        { ability: Ability.INT, value: 1 },
        { ability: Ability.CHA, value: 2 },
      ],
    },
    abilityScoreDescription:
      'On top of your Charisma increase from being a tiefling, your Intelligence score increases by 1.',
  },
  {
    id: '49',
    name: 'Dispater Tiefling',
    description:
      "The great city of Dis occupies most of Hell's second layer. It is a place where secrets are uncovered and shared with the highest bidder, making tieflings tied to Dispater excellent spies and infiltrators.",
    speciesId: ids.tiefling,
    flavorText:
      'Tieflings tied to Dispater are excellent spies and infiltrators.',
    source: src.mordenkainenFoes,
    abilityScores: {
      default: [
        { ability: Ability.DEX, value: 1 },
        { ability: Ability.CHA, value: 2 },
      ],
    },
    abilityScoreDescription:
      'On top of your Charisma increase from being a tiefling, your Dexterity score increases by 1.',
  },
  {
    id: '50',
    name: 'Fierna Tiefling',
    description:
      'A master manipulator, Fierna grants tieftings tied to her forceful personalities.',
    speciesId: ids.tiefling,
    flavorText:
      'Tieflings tied to Fierna are known for their loyalty and their ability to manipulate others.',
    source: src.mordenkainenFoes,
    abilityScores: {
      default: [
        { ability: Ability.WIS, value: 1 },
        { ability: Ability.CHA, value: 2 },
      ],
    },
    abilityScoreDescription:
      'On top of your Charisma increase from being a tiefling, your Wisdom score increases by 1.',
  },
  {
    id: '51',
    name: 'Glasya Tiefling',
    description:
      "Glasya, Hell's criminal mastermind, grants her tiefiings magic that is useful for committing heists.",
    speciesId: ids.tiefling,
    flavorText:
      "Glasya, Hell's criminal mastermind, grants her tiefiings magic that is useful for committing heists.",
    source: src.mordenkainenFoes,
    abilityScores: {
      default: [
        { ability: Ability.DEX, value: 1 },
        { ability: Ability.CHA, value: 2 },
      ],
    },
    abilityScoreDescription:
      'On top of your Charisma increase from being a tiefling, your Dexterity score increases by 1.',
  },
  {
    id: '52',
    name: 'Levistus Tiefling',
    description:
      'Frozen Stygia is ruled by Levistus, an archdevil known for offering bargains to those who face an inescapable doom.',
    speciesId: ids.tiefling,
    flavorText:
      'Frozen Stygia is ruled by Levistus, an archdevil known for offering bargains to those who face an inescapable doom.',
    source: src.mordenkainenFoes,
    abilityScores: {
      default: [
        { ability: Ability.CON, value: 1 },
        { ability: Ability.CHA, value: 2 },
      ],
    },
    abilityScoreDescription:
      'On top of your Charisma increase from being a tiefling, your Constitution score increases by 1.',
  },
  {
    id: '53',
    name: 'Mammon Tiefling',
    description:
      'The great miser Mammon loves coins above all else. Tieflings tied to him excel at gathering and safeguarding wealth.',
    speciesId: ids.tiefling,
    flavorText:
      'Tieflings tied to Mammon excel at gathering and safeguarding wealth.',
    source: src.mordenkainenFoes,
    abilityScores: {
      default: [
        { ability: Ability.INT, value: 1 },
        { ability: Ability.CHA, value: 2 },
      ],
    },
    abilityScoreDescription:
      'On top of your Charisma increase from being a tiefling, your Intelligence score increases by 1.',
  },
  {
    id: '54',
    name: 'Mephistopheles Tiefling',
    description:
      'In the frozen realm of Cania, Mephistopheles offers arcane power to those who entreat with him. Tieflings linked to him master some arcane magic.',
    speciesId: ids.tiefling,
    flavorText: 'Tieflings tied to Mephistopheles master some arcane magic.',
    source: src.mordenkainenFoes,
    abilityScores: {
      default: [
        { ability: Ability.INT, value: 1 },
        { ability: Ability.CHA, value: 2 },
      ],
    },
    abilityScoreDescription:
      'On top of your Charisma increase from being a tiefling, your Intelligence score increases by 1.',
  },
  {
    id: '55',
    name: 'Zariel Tiefling',
    description:
      'Tieflings with a blood tie to Zariel are stronger than the typical tiefling and receive magical abilities that aid them in battle.',
    speciesId: ids.tiefling,
    flavorText:
      'Tieflings with a blood tie to Zariel are stronger than the typical tiefling and receive magical abilities that aid them in battle.',
    source: src.mordenkainenFoes,
    abilityScores: {
      default: [
        { ability: Ability.STR, value: 1 },
        { ability: Ability.CHA, value: 2 },
      ],
    },
  },
  {
    id: '56',
    name: 'Tirahar Elf',
    description:
      'Elves who forsake technology entirely are called the Tirahar. Some elves with Tirahar sympathies live within cities or farms, but most simply withdraw to the wilder areas of Kaladesh. No more than one in a hundred elves is counted among the Tirahar, and many members of other races are unaware that these reclusive elves even exist.',
    flavorText: 'Elves who forsake technology entirely are called the Tirahar.',
    speciesId: ids.elf,
    source: src.kaladesh,
    abilityScores: {
      default: [
        { ability: Ability.DEX, value: 2 },
        { ability: Ability.WIS, value: 1 },
      ],
    },
    abilityScoreDescription:
      'On top of your Dexterity increase from being an elf, your Wisdom score increases by 1.',
    speed: 35,
    speedDescription: 'Your base walking speed increases to 35 feet.',
    weaponProficiencies: {
      default: [
        weaponIds.longsword,
        weaponIds.shortsword,
        weaponIds.longbow,
        weaponIds.shortbow,
      ],
    },
    weaponProficiencyDescription:
      'You have proficiency with longswords, shortswords, longbows, and shortbows.',
  },
  {
    id: '57',
    name: 'Variant Human',
    description:
      "If your campaign uses the optional feat rules from chapter 5 of the Player's Handbook, your Dungeon Master might allow these variant traits, all of which replace the human's Ability Score Increase trait.",
    speciesId: ids.human,
    source: src.phb,
    flavorText:
      "If your campaign uses the optional feat rules from chapter 5 of the Player's Handbook, your Dungeon Master might allow these variant traits.",
    abilityScoreDescription:
      'Two different ability scores of your choice increase by 1.',
    abilityScores: {
      choices: [
        {
          abilities: [
            Ability.STR,
            Ability.DEX,
            Ability.CON,
            Ability.INT,
            Ability.WIS,
            Ability.CHA,
          ],

          options: [1, 1],
        },
      ],
    },
    skillProficiencyDescription:
      'You gain proficiency in one skill of your choice.',
    skillProficiencies: {
      choices: [
        {
          options: Object.values(Skill),
          numberOfChoices: 1,
        },
      ],
    },
  },
  {
    id: '101',
    speciesId: ids.aarakocraMMOM,
    name: 'Aaracokkra (EEPC)',
    description:
      'Sequestered in high mountains atop tall trees, the aarakocra evoke fear and wonder. Many of these birdfolk hail from the boundless vistas of the Elemental Plane of Air. They are immigrants, refugees, scouts, and explorers, their outposts functioning as footholds in a world both strange and alien.',

    source: src.eepc,
    flavorText:
      'Sequestered in high mountains atop tall trees, the aarakocra evoke fear and wonder.',
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
      'Your Dexterity score increases by 2, and your Wisdom score increases by 1.',
    age: 'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
    alignment:
      'Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.',
    size: Size.MEDIUM,
    sizeDescription:
      'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
    speed: 25,
    speedDescription: 'Your base walking speed is 25 feet.',
    flightSpeed: 50,
    flightDescription:
      'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.',
    originLanguages: {
      default: [Language.COMMON, Language.AARAKOCRA, Language.AURAN],
    },
    languageDescription:
      'You can speak, read, and write Common, Aarakocra, and Auran.',
    removedTraits: ['Wind Caller', 'Talons'],
  },
  // aasimar Volos guide to monsters
  {
    id: '102',
    name: 'Protector Aasimar',
    description:
      'Protector aasimar are charged by the powers of good to guard the weak, to strike at evil wherever it arises, and to stand vigilant against the darkness. From a young age, a protector aasimar receives advice and directives that urge to stand against evil.',
    flavorText:
      'Protector aasimar are charged by the powers of good to guard the weak, to strike at evil wherever it arises, and to stand vigilant against the darkness.',
    source: src.volo,
    speciesId: ids.aasimarVGM,
    abilityScoreDescription:
      'On top of your +2 Charisma increase for being an Aasimar (VGM), your Wisdom score increases by 1.',
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
  },
  {
    id: '103',
    name: 'Scourge Aasimar',
    description:
      'Scourge aasimar are imbued with a divine energy that blazes intensely within them. It feeds a powerful desire to destroy evil - a desire that is, at its best, unflinching and, at its worst, all-consuming. Many scourge aasimar wear masks to block out the world and focus on containing this power, unmasking themselves only in battle.',
    flavorText:
      'Scourge aasimar are imbued with a divine energy that blazes intensely within them.',
    source: src.volo,
    speciesId: ids.aasimarVGM,

    abilityScoreDescription:
      'On top of your +2 Charisma increase for being an Aasimar (VGM), your Constitution score increases by 1.',
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
  },
  {
    id: '104',
    name: 'Fallen Aasimar',
    description:
      'An aasimar who was touched by dark powers as a youth or who turns to evil in early adulthood can become one of the fallen - a group of aasimar whose inner light has been replaced by shadow.',
    flavorText:
      'An aasimar who was touched by dark powers as a youth or who turns to evil in early adulthood can become one of the fallen.',
    source: src.volo,
    speciesId: ids.aasimarVGM,

    abilityScoreDescription:
      'On top of your +2 Charisma increase for being an Aasimar (VGM), your Strength score increases by 1.',
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
  },
  {
    id: '105',
    name: 'Beasthide Shifter',
    description:
      'Stoic and solid, a beasthide shifter draws strength and stability from the beast within. Beasthide shifters are typically tied to the bear or the boar, but any creature known for its toughness could apply.',
    flavorText:
      'Stoic and solid, a beasthide shifter draws strength and stability from the beast within.',
    source: src.eberron,
    speciesId: ids.shifterERLW,
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
  },
  {
    id: '106',
    name: 'Longtooth Shifter',
    description:
      'Longtooth shifters are fierce and aggressive, but they form deep bonds with their friends. Many longtooth shifters have canine traits that become more pronounced as they shift, but they might instead draw on tigers, hyenas, or other predators.',
    flavorText: 'Longtooth shifters are fierce and aggressive.',
    source: src.eberron,
    abilityScoreDescription:
      'Your Strength score increases by 2, and your Dexterity score increases by 1.',
    speciesId: ids.shifterERLW,
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
  },
  {
    id: '107',
    name: 'Swiftstride Shifter',
    description:
      'Swiftstride shifters are graceful and quick. Typically feline in nature, swiftstride shifters are often aloof and difficult to pin down physically or socially.',
    flavorText: 'Swiftstride shifters are graceful and quick.',
    source: src.eberron,
    speciesId: ids.shifterERLW,
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
  },
  {
    id: '108',
    name: 'Wildhunt Shifter',
    description:
      'Wildhunt shifters are sharp and insightful. Some are constantly alert, ever wary for possible threats. Others focus on their intuition, searching within. Wildhunt shifters are excellent hunters, and they also tend to become the spiritual leaders of shifter communities.',
    flavorText: 'Wildhunt shifters are sharp and insightful.',
    source: src.eberron,
    speciesId: ids.shifterERLW,
    abilityScoreDescription: 'Your Wisdom score increases by 2.',
    abilityScores: {
      default: [
        {
          ability: Ability.WIS,
          value: 2,
        },
      ],
    },
  },
  {
    id: '109',
    name: 'Ibis Headed Aven',
    flavorText:
      'A majority of ibis-headed aven, drawn to the teachings of Kefnet.',
    description:
      'A majority of ibis-headed aven, drawn to the teachings of Kefnet, specialize in spellcasting. They take great pride in all the qualities they share with the god of knowledge—not just their avian heads, but their quick wit, self-confidence, cunning, and spellcasting prowess.',
    source: src.amonkhet,
    speciesId: ids.aven,
    abilityScoreDescription:
      'On top of your +2 to Dexteriy for being an Aven, your Intelligence score increases by 1.',
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
  },
  {
    id: '110',
    name: 'Hawk Headed Aven',
    flavorText:
      'Following the example of Oketra, hawkheaded aven often focus on the techniques of long-range combat.',
    description:
      'Following the example of Oketra, hawkheaded aven often focus on the techniques of long-range combat. Most prefer javelins, but some are skilled with bows, spears, and throwing axes.',
    source: src.amonkhet,
    speciesId: ids.aven,
    abilityScoreDescription:
      'On top of your +2 to Dexteriy for being an Aven, your Wisdom score increases by 2.',
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
  },
  {
    id: '111',
    name: 'Green Merfolk',
    description:
      'Green merfolk generally have yellow chests and pale green faces, shading to dark blues and purples on their backs and limbs. The patterns on their skin suggest the colors of the tree frogs common in the rain forest, as do their eyes of orange, lime green, or sky blue. Their fins are relatively short and thick. They climb trees with ease, move through undergrowth unhindered, and often wield magic to shape vines and branches to their will.',
    flavorText:
      'Green merfolk generally have yellow chests and pale green faces, shading to dark blues and purples on their backs and limbs.',
    source: src.ixalan,
    speciesId: ids.merfolkIxalan,
    abilityScoreDescription:
      'On top of your +1 to Charisma for being a Merfolk, your Wisdom score increases by 2.',
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
  },
  {
    id: '112',
    name: 'Blue Merfolk',
    description:
      'Blue merfolk often have burgundy or magenta on their faces and chests, with lighter shades of blue and purple elsewhere. Their eyes are red, orange, or blue, and their long, thin, and elegant fins resemble scarves or veils of fine fabric. They swim easily, even upstream, and clamber over rocks and through rapids with ease. They prefer to dwell in shallow waters, but spend a fair amount of time on land as well.',
    flavorText:
      'Blue merfolk often have burgundy or magenta on their faces and chests.',
    source: src.ixalan,
    speciesId: ids.merfolkIxalan,
    abilityScoreDescription:
      'On top of your +1 to Charisma for being a Merfolk, your Intelligence score increases by 2.',
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
  },
  {
    id: '113',
    name: 'Emeria Creed Merfolk',
    description:
      'Merfolk who followed Emeria’s creed seek wisdom and truth in the Wind Realm, exploring the mystical forces—rather than natural causes—behind historical events. They are evasive and intentionally enigmatic in their interactions with others, and are often described as manipulative and deceptive.',
    flavorText:
      'Merfolk who followed Emeria’s creed seek wisdom and truth in the Wind Realm.',
    source: src.zendikar,
    speciesId: ids.merfolkZendikar,
    abilityScoreDescription:
      'On top of your +1 to Charisma for being a Merfolk, your Wisdom score increases by 2.',
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
  },
  {
    id: '114',
    name: 'Ula Creed Merfolk',
    description:
      'Ula-creed merfolk emphasize intellectual pursuits, stressing hard evidence and reason over passion. They are analytical scholars, chroniclers, explorers, and navigators who pride themselves on being blunt and straightforward.',
    flavorText: 'Ula-creed merfolk emphasize intellectual pursuits.',
    source: src.zendikar,
    speciesId: ids.merfolkZendikar,
    abilityScoreDescription:
      'On top of your +1 to Charisma for being a Merfolk, your Intelligence score increases by 2.',
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
  },
  {
    id: '115',
    name: 'Cosi Creed Merfolk',
    description:
      'No merfolk will openly admit to following the creed of the trickster, but those who do view Cosi as an ally who can grant them control over the chaotic forces of the world.',
    flavorText:
      'No merfolk will openly admit to following the creed of the trickster.',
    abilityScoreDescription:
      'On top of your +1 to Charisma for being a Merfolk, you get an additional +1 to your Charisma score (total of 2), as well as a +1 to your intelligence score.',
    source: src.zendikar,
    speciesId: ids.merfolkZendikar,
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

const subSpeciesIds = {
  blackDragonborn: '1',
  blueDragonborn: '2',
  brassDragonborn: '3',
  bronzeDragonborn: '4',
  copperDragonborn: '5',
  goldDragonborn: '6',
  greenDragonborn: '7',
  redDragonborn: '8',
  silverDragonborn: '9',
  whiteDragonborn: '10',
  chromaticDragonborn: '11',
  metallicDragonborn: '12',
  gemDragonborn: '13',
  hillDwarf: '14',
  mountainDwarf: '15',
  markOfWarding: '16',
  darkElf: '17',
  highElf: '18',
  woodElf: '19',
  pallidElf: '20',
  markOfShadow: '21',
  bishtahar: '22',
  vahadarElf: '23',
  forestGnome: '24',
  rockGnome: '25',
  markOfScribing: '26',
  generalElvenHeritage: '27',
  highOrWoodElfDescent: '28',
  highElfDescent: '29',
  woodElfDescent: '30',
  woodElfDescentAlternate: '1000',
  darkElfDescent: '31',
  aquaticHeritage: '32',
  markOfDetection: '33',
  markOfStorm: '34',
  markOfFindingOrk: '35',
  lightfootHalfling: '36',
  stoutHalfling: '37',
  ghostwise: '38',
  lotusden: '39',
  markOfHospitality: '40',
  markOfHealing: '41',
  markOfFindingHuman: '42',
  markOfHandling: '43',
  markOfMaking: '44',
  markOfPassage: '45',
  markOfSentinel: '46',
  asmodeus: '47',
  baalzebul: '48',
  dispater: '49',
  fierna: '50',
  glasya: '51',
  levistus: '52',
  mammon: '53',
  mephistopheles: '54',
  zariel: '55',
  tirahar: '56',
  variantHuman: '57',
  aarakocra: '101',
  protectorAasimar: '102',
  scourgeAasimar: '103',
  fallenAasimar: '104',
  beastHideShifter: '105',
  longToothShifter: '106',
  swiftStrideShifter: '107',
  wildHuntShifter: '108',
  ibisHeadedAven: '109',
  hawkHeadedAven: '110',
  greenMerfolk: '111',
  blueMerfolk: '112',
  emeriaCreedMerfolk: '113',
  ulaCreedMerfolk: '114',
  cosiCreedMerfolk: '115',
};

export { SubSpeciesSeed, subSpeciesIds };
