import { ItemTypes, Language, Prisma, Skill, ToolGroup } from '@prisma/client';
import { backgroundIds } from './BackgroundIds';
import { generateLanguageProficiencyChoice } from '@/lib/protocols/ChoiceFetch/generateLanguageProficiencyChoice';
import {
  generateAddToInventoryChoice,
  generateAddToInventoryGroupedChoice,
} from '@/lib/protocols/ChoiceFetch/generateItemChoice';
import { itemIds } from '../Items/ItemIds';
import { generateSkillProficiencyChoice } from '@/lib/protocols/ChoiceFetch/generateSkillChoice';
import { generateToolProficiencyGroupedChoice } from '@/lib/protocols/ChoiceFetch/generateToolChoice';

const BackgroundChoicesSeed: Prisma.ChoiceCreateManyInput[] = [
  generateLanguageProficiencyChoice(
    'background-acolyte-languages',
    backgroundIds.acolyte,
    'backgroundId',
    'Choose two languages',
    Object.values(Language) as Language[],
    2
  ),
  generateAddToInventoryGroupedChoice(
    'background-acolyte-holy-symbol',
    backgroundIds.acolyte,
    'backgroundId',
    'Pick your holy symbol',
    [
      {
        itemType: {
          type: ItemTypes.HOLY_SYMBOL,
          quantity: 1,
        },
      },
    ]
  ),
  generateAddToInventoryChoice(
    'background-acolyte-prayer-book',
    backgroundIds.acolyte,
    'backgroundId',
    'Choose between a prayer book or prayer wheel.',
    [
      [{ item: itemIds.prayerBook, quantity: 1 }],
      [{ item: itemIds.prayerWheel, quantity: 1 }],
    ]
  ),
  //antropologist
  generateLanguageProficiencyChoice(
    'background-anthropologist-languages',
    backgroundIds.anthropologist,
    'backgroundId',
    'Choose two languages',
    Object.values(Language) as Language[],
    2
  ),
  //haunted one
  generateSkillProficiencyChoice(
    'background-haunted-one-skills',
    backgroundIds.hauntedOne,
    'backgroundId',
    'Choose two skills',
    [Skill.ARCANA, Skill.INVESTIGATION, Skill.RELIGION, Skill.SURVIVAL],
    2
  ),
  generateLanguageProficiencyChoice(
    'background-haunted-one-languages',
    backgroundIds.hauntedOne,
    'backgroundId',
    'Choose one language',
    Object.values(Language) as Language[],
    2
  ),
  generateLanguageProficiencyChoice(
    'background-haunted-one-exotic-language',
    backgroundIds.hauntedOne,
    'backgroundId',
    'Choose one exotic language',
    [
      Language.ABYSSAL,
      Language.CELESTIAL,
      Language.DEEP_SPEECH,
      Language.DRACONIC,
      Language.INFERNAL,
      Language.PRIMORDIAL,
      Language.SYLVAN,
      Language.UNDERCOMMON,
    ],
    1
  ),
  //hermit
  generateLanguageProficiencyChoice(
    'background-hermit-languages',
    backgroundIds.hermit,
    'backgroundId',
    'Choose one language',
    Object.values(Language) as Language[],
    1
  ),
  //investigator
  generateLanguageProficiencyChoice(
    'background-investigator-languages',
    backgroundIds.investigatorSCAG,
    'backgroundId',
    'Choose two languages',
    Object.values(Language) as Language[],
    2
  ),
  //knight of the order
  generateSkillProficiencyChoice(
    'background-knight-of-the-order-skills',
    backgroundIds.knightOfTheOrder,
    'backgroundId',
    'Choose a skill proficiency',
    [Skill.ARCANA, Skill.HISTORY, Skill.NATURE, Skill.RELIGION],
    1
  ),
  generateToolProficiencyGroupedChoice(
    'background-knight-of-the-order-gaming-set',
    backgroundIds.knightOfTheOrder,
    'backgroundId',
    'Choose a gaming set or instrument',
    [
      {
        type: 'group',
        group: ToolGroup.GAMING_SETS,
      },
      {
        type: 'group',
        group: ToolGroup.INSTRUMENTS,
      },
    ],
    1
  ),
  generateLanguageProficiencyChoice(
    'background-knight-of-the-order-languages',
    backgroundIds.knightOfTheOrder,
    'backgroundId',
    'Choose one language',
    Object.values(Language) as Language[],
    1
  ),
  //mercenery veteran
  generateToolProficiencyGroupedChoice(
    'background-mercenary-veteran-gaming-set',
    backgroundIds.mercenaryVeteran,
    'backgroundId',
    'Choose a gaming set.',
    [
      {
        type: 'group',
        group: ToolGroup.GAMING_SETS,
      },
    ],
    1
  ),
  generateAddToInventoryGroupedChoice(
    'background-mercenary-veteran-insignia',
    backgroundIds.mercenaryVeteran,
    'backgroundId',
    'Choose a gaming set.',
    [
      {
        toolGroup: {
          group: ToolGroup.GAMING_SETS,
          quantity: 1,
        },
      },
    ]
  ),
  //rune carver
  generateToolProficiencyGroupedChoice(
    'background-rune-carver-artisan',
    backgroundIds.runeCarver,
    'backgroundId',
    'Choose an artisan tool proficiency.',
    [
      {
        type: 'group',
        group: ToolGroup.ARTISANS_TOOLS,
      },
    ],
    1
  ),
  generateAddToInventoryGroupedChoice(
    'background-rune-carver-runes',
    backgroundIds.runeCarver,
    'backgroundId',
    'Choose an artisan tool to start with.',
    [
      {
        toolGroup: {
          group: ToolGroup.ARTISANS_TOOLS,
          quantity: 1,
        },
      },
    ]
  ),
  //soldier
  generateToolProficiencyGroupedChoice(
    'background-soldier-gaming-set',
    backgroundIds.soldier,
    'backgroundId',
    'Choose a gaming set.',
    [
      {
        type: 'group',
        group: ToolGroup.GAMING_SETS,
      },
    ],
    1
  ),
  generateAddToInventoryChoice(
    'background-soldier-insignia',
    backgroundIds.soldier,
    'backgroundId',
    'Choose game to start with.',
    [
      [{ item: itemIds.playingCardSet, quantity: 1 }],
      [{ item: itemIds.diceSet, quantity: 1 }],
    ]
  ),
  //rival intern
  generateToolProficiencyGroupedChoice(
    'background-rival-intern-tools',
    backgroundIds.rivalIntern,
    'backgroundId',
    'Choose a tool proficiency.',
    [
      {
        type: 'group',
        group: ToolGroup.ARTISANS_TOOLS,
      },
    ],
    1
  ),
  generateLanguageProficiencyChoice(
    'background-rival-intern-languages',
    backgroundIds.rivalIntern,
    'backgroundId',
    'Choose one language',
    Object.values(Language) as Language[],
    1
  ),
  generateAddToInventoryGroupedChoice(
    'background-rival-intern-tools',
    backgroundIds.rivalIntern,
    'backgroundId',
    'Choose a tool to start with.',
    [
      {
        toolGroup: {
          group: ToolGroup.ARTISANS_TOOLS,
          quantity: 1,
        },
      },
    ]
  ),
  //city watch
  generateLanguageProficiencyChoice(
    'background-city-watch-languages',
    backgroundIds.cityWatch,
    'backgroundId',
    'Choose two languages',
    Object.values(Language) as Language[],
    2
  ),
];

export default BackgroundChoicesSeed;
