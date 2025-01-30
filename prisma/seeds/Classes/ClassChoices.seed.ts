import {
  ItemTypes,
  Prisma,
  Skill,
  ToolGroup,
  WeaponGroup,
} from '@prisma/client';
import { classIds as ids } from './ClassIds';
import { itemIds } from '../Items/ItemIds';
import { generateSkillProficiencyChoice } from '@/lib/ChoiceHelpers/ChoiceGenerators/generateSkillChoice';
import {
  generateAddToInventoryChoice,
  generateAddToInventoryGroupedChoice,
} from '@/lib/ChoiceHelpers/ChoiceGenerators/generateItemChoice';
import { generateToolProficiencyGroupedChoice } from '@/lib/ChoiceHelpers/ChoiceGenerators/generateToolChoice';
import { generateSubclassChoice } from '@/lib/ChoiceHelpers/ChoiceGenerators/generateSubclassChoice';

const ClassChoicesSeed: Prisma.ChoiceCreateManyInput[] = [
  //subclasses

  ...Object.values(ids).map((id) =>
    generateSubclassChoice(
      `${id}-subclass-1`,
      id,
      'classId',
      'Choose your subclass.',
      id
    )
  ),

  //fighter

  generateSkillProficiencyChoice(
    'fighter-skill-1',
    ids.fighter,
    'classId',
    'Choose your skill proficiencies.',
    [
      Skill.ACROBATICS,
      Skill.ANIMAL_HANDLING,
      Skill.ATHLETICS,
      Skill.HISTORY,
      Skill.INSIGHT,
      Skill.INTIMIDATION,
      Skill.PERCEPTION,
      Skill.SURVIVAL,
    ],
    2
  ),
  generateAddToInventoryChoice(
    'fighter-item-1',
    ids.fighter,
    'classId',
    `Choose between Chain Mail or Leather Armor, a Longbow and 20 Arrows.`,
    [
      [{ item: itemIds.chainMail, quantity: 1 }],
      [
        { item: itemIds.leatherArmor, quantity: 1 },
        { item: itemIds.longbow, quantity: 1 },
        { item: itemIds.arrow, quantity: 20 },
      ],
    ]
  ),
  generateAddToInventoryGroupedChoice(
    'fighter-item-2',
    ids.fighter,
    'classId',
    `Choose your 2 main weapon(s). You may also forgo one of these weapons for a shield.`,
    [
      {
        items: [
          {
            item: itemIds.shield,
            quantity: 1,
          },
        ],
        weaponGroup: {
          group: WeaponGroup.ALL_MARTIAL,
          quantity: 1,
        },
      },
      {
        weaponGroup: {
          group: WeaponGroup.ALL_MARTIAL,
          quantity: 2,
        },
      },
    ],
    1
  ),
  generateAddToInventoryChoice(
    'fighter-item-3',
    ids.fighter,
    'classId',
    `Choose a ranged weapon.`,
    [
      [
        { item: itemIds.crossbowLight, quantity: 1 },
        { item: itemIds.crossbowBolt, quantity: 20 },
      ],
      [{ item: itemIds.handaxe, quantity: 2 }],
    ],
    1
  ),
  generateAddToInventoryChoice(
    'fighter-item-4',
    ids.fighter,
    'classId',
    `Choose an equipment pack to start with.`,
    [
      [{ item: itemIds.dungeoneersPack, quantity: 1 }],
      [{ item: itemIds.explorersPack, quantity: 1 }],
    ]
  ),
  //wizard
  generateSkillProficiencyChoice(
    'wizard-skill-1',
    ids.wizard,
    'classId',
    'Choose two skills.',
    [
      Skill.ARCANA,
      Skill.HISTORY,
      Skill.INSIGHT,
      Skill.INVESTIGATION,
      Skill.MEDICINE,
      Skill.RELIGION,
    ],
    2
  ),
  generateAddToInventoryChoice(
    'wizard-item-1',
    ids.wizard,
    'classId',
    `Choose a weapon`,
    [
      [{ item: itemIds.quarterstaff, quantity: 1 }],
      [{ item: itemIds.dagger, quantity: 1 }],
    ]
  ),
  generateAddToInventoryGroupedChoice(
    'wizard-item-2',
    ids.wizard,
    'classId',
    `Choose your spellcasting focus.`,
    [
      {
        items: [{ item: itemIds.componentPouch, quantity: 1 }],
      },
      {
        itemType: { type: ItemTypes.ARCANE_FOCUS, quantity: 1 },
      },
    ]
  ),
  generateAddToInventoryChoice(
    'wizard-item-3',
    ids.wizard,
    'classId',
    `Choose an equipment pack to begin with.`,
    [
      [{ item: itemIds.explorersPack, quantity: 1 }],
      [{ item: itemIds.scholarsPack, quantity: 1 }],
    ]
  ),
  //cleric
  generateSkillProficiencyChoice(
    'cleric-skill-1',
    ids.cleric,
    'classId',
    'Choose two skills.',
    [
      Skill.HISTORY,
      Skill.INSIGHT,
      Skill.MEDICINE,
      Skill.PERSUASION,
      Skill.RELIGION,
    ],
    2
  ),
  generateAddToInventoryGroupedChoice(
    'cleric-item-1',
    ids.cleric,
    'classId',
    `Choose your Holy Symbol.`,
    [
      {
        itemType: { type: ItemTypes.HOLY_SYMBOL, quantity: 1 },
      },
    ]
  ),
  generateAddToInventoryChoice(
    'cleric-item-2',
    ids.cleric,
    'classId',
    `Choose your starting armor.`,
    [
      [{ item: itemIds.scaleMail, quantity: 1 }],
      [{ item: itemIds.leatherArmor, quantity: 1 }],
      [{ item: itemIds.chainMail, quantity: 1 }],
    ]
  ),
  generateAddToInventoryChoice(
    'cleric-item-3',
    ids.cleric,
    'classId',
    `Choose a weapon.`,
    [
      [{ item: itemIds.mace, quantity: 1 }],
      [{ item: itemIds.warhammer, quantity: 1 }],
    ]
  ),
  generateAddToInventoryGroupedChoice(
    'cleric-item-4',
    ids.cleric,
    'classId',
    `Choose a weapon`,
    [
      {
        items: [
          { item: itemIds.crossbowLight, quantity: 1 },
          { item: itemIds.crossbowBolt, quantity: 20 },
        ],
        weaponGroup: {
          group: WeaponGroup.ALL_SIMPLE,
          quantity: 1,
        },
      },
    ]
  ),
  generateAddToInventoryChoice(
    'cleric-item-5',
    ids.cleric,
    'classId',
    `Choose an equipment pack to begin with.`,
    [
      [{ item: itemIds.priestsPack, quantity: 1 }],
      [{ item: itemIds.explorersPack, quantity: 1 }],
    ]
  ),
  //Rogue
  generateSkillProficiencyChoice(
    'rogue-skill-1',
    ids.rogue,
    'classId',
    'Choose your skill proficiencies.',
    [
      Skill.ACROBATICS,
      Skill.ATHLETICS,
      Skill.DECEPTION,
      Skill.INSIGHT,
      Skill.INTIMIDATION,
      Skill.INVESTIGATION,
      Skill.PERCEPTION,
      Skill.PERFORMANCE,
      Skill.PERSUASION,
      Skill.SLEIGHT_OF_HAND,
      Skill.STEALTH,
    ],
    4
  ),
  generateAddToInventoryChoice(
    'rogue-item-1',
    ids.rogue,
    'classId',
    `Choose a weapon.`,
    [
      [{ item: itemIds.rapier, quantity: 1 }],
      [{ item: itemIds.shortsword, quantity: 1 }],
    ]
  ),
  generateAddToInventoryChoice(
    'rogue-item-2',
    ids.rogue,
    'classId',
    `Choose an equipment pack.`,
    [
      [{ item: itemIds.burglarsPack, quantity: 1 }],
      [{ item: itemIds.dungeoneersPack, quantity: 1 }],
      [{ item: itemIds.explorersPack, quantity: 1 }],
    ]
  ),
  generateAddToInventoryChoice(
    'rogue-item-3',
    ids.rogue,
    'classId',
    `Choose a weapon.`,
    [
      [
        { item: itemIds.shortbow, quantity: 1 },
        { item: itemIds.arrow, quantity: 20 },
      ],
      [{ item: itemIds.shortsword, quantity: 1 }],
    ]
  ),
  //barbarian
  generateSkillProficiencyChoice(
    'barbarian-skill-1',
    ids.barbarian,
    'classId',
    'Choose your skill proficiencies.',
    [
      Skill.ANIMAL_HANDLING,
      Skill.ATHLETICS,
      Skill.INTIMIDATION,
      Skill.NATURE,
      Skill.PERCEPTION,
      Skill.SURVIVAL,
    ],
    2
  ),
  generateAddToInventoryGroupedChoice(
    'barbarian-item-1',
    ids.barbarian,
    'classId',
    `Choose a weapon.`,
    [
      {
        weaponGroup: {
          group: WeaponGroup.MARTIAL_MELEE,
          quantity: 1,
        },
      },
    ]
  ),
  generateAddToInventoryGroupedChoice(
    'barbarian-item-2',
    ids.barbarian,
    'classId',
    `Choose a weapon.`,
    [
      {
        weaponGroup: {
          group: WeaponGroup.ALL_SIMPLE,
          quantity: 1,
        },
      },
      {
        items: [{ item: itemIds.handaxe, quantity: 2 }],
      },
    ]
  ),
  //bard
  generateSkillProficiencyChoice(
    'bard-skill-1',
    ids.bard,
    'classId',
    'Choose your skill proficiencies.',
    Object.values(Skill),
    3
  ),
  generateToolProficiencyGroupedChoice(
    'bard-tool-1',
    ids.bard,
    'classId',
    'Choose 3 musical instruments to be proficient in.',
    [{ type: 'group', group: ToolGroup.INSTRUMENTS }],
    3
  ),
  generateAddToInventoryGroupedChoice(
    'bard-item-1',
    ids.bard,
    'classId',
    `Choose a weapon.`,
    [
      {
        weaponGroup: {
          group: WeaponGroup.ALL_SIMPLE,
          quantity: 1,
        },
      },
      {
        items: [{ item: itemIds.longsword, quantity: 1 }],
      },
      {
        items: [{ item: itemIds.rapier, quantity: 1 }],
      },
    ]
  ),
  generateAddToInventoryChoice(
    'bard-item-2',
    ids.bard,
    'classId',
    `Choose an equipment pack.`,
    [
      [{ item: itemIds.diplomatsPack, quantity: 1 }],
      [{ item: itemIds.entertainersPack, quantity: 1 }],
    ]
  ),
  generateAddToInventoryGroupedChoice(
    'bard-item-3',
    ids.bard,
    'classId',
    `Choose a musical instrument.`,
    [
      {
        toolGroup: {
          group: ToolGroup.INSTRUMENTS,
          quantity: 1,
        },
      },
    ],
    1
  ),
  //druid
  generateSkillProficiencyChoice(
    'druid-skill-1',
    ids.druid,
    'classId',
    'Choose your skill proficiencies.',
    [
      Skill.ARCANA,
      Skill.ANIMAL_HANDLING,
      Skill.INSIGHT,
      Skill.MEDICINE,
      Skill.NATURE,
      Skill.PERCEPTION,
      Skill.RELIGION,
      Skill.SURVIVAL,
    ],
    2
  ),
  generateAddToInventoryGroupedChoice(
    'druid-item-1',
    ids.druid,
    'classId',
    `Choose a weapon.`,
    [
      {
        weaponGroup: {
          group: WeaponGroup.ALL_SIMPLE,
          quantity: 1,
        },
      },
      {
        items: [{ item: itemIds.scimitar, quantity: 1 }],
      },
    ]
  ),
  generateAddToInventoryGroupedChoice(
    'druid-item-2',
    ids.druid,
    'classId',
    `Choose your druidic focus.`,
    [
      {
        itemType: { type: ItemTypes.DRUIDIC_FOCUS, quantity: 1 },
      },
    ]
  ),
  generateAddToInventoryGroupedChoice(
    'druid-item-3',
    ids.druid,
    'classId',
    `Choose between a shield or another weapon.`,
    [
      {
        items: [{ item: itemIds.shield, quantity: 1 }],
      },
      {
        weaponGroup: {
          group: WeaponGroup.ALL_SIMPLE,
          quantity: 1,
        },
      },
    ]
  ),
  //monk
  generateSkillProficiencyChoice(
    'monk-skill-1',
    ids.monk,
    'classId',
    'Choose your skill proficiencies.',
    [
      Skill.ACROBATICS,
      Skill.ATHLETICS,
      Skill.HISTORY,
      Skill.INSIGHT,
      Skill.RELIGION,
      Skill.STEALTH,
    ],
    2
  ),
  generateToolProficiencyGroupedChoice(
    'monk-tool-1',
    ids.monk,
    'classId',
    'Choose an artisan tool or musical instrument.',
    [
      { type: 'group', group: ToolGroup.ARTISANS_TOOLS },
      { type: 'group', group: ToolGroup.INSTRUMENTS },
    ],
    1
  ),
  generateAddToInventoryGroupedChoice(
    'monk-item-1',
    ids.monk,
    'classId',
    `Choose a weapon.`,
    [
      {
        weaponGroup: {
          group: WeaponGroup.ALL_SIMPLE,
          quantity: 1,
        },
      },
      {
        items: [{ item: itemIds.shortsword, quantity: 1 }],
      },
    ]
  ),
  generateAddToInventoryChoice(
    'monk-item-2',
    ids.monk,
    'classId',
    `Choose an equipment pack.`,
    [
      [{ item: itemIds.dungeoneersPack, quantity: 1 }],
      [{ item: itemIds.explorersPack, quantity: 1 }],
    ]
  ),
  //paladin
  generateSkillProficiencyChoice(
    'paladin-skill-1',
    ids.paladin,
    'classId',
    'Choose a skill proficiency.',
    [
      Skill.ATHLETICS,
      Skill.INSIGHT,
      Skill.INTIMIDATION,
      Skill.MEDICINE,
      Skill.PERSUASION,
      Skill.RELIGION,
    ],
    2
  ),
  generateAddToInventoryGroupedChoice(
    'paladin-item-1',
    ids.paladin,
    'classId',
    `Choose your starting equipment.`,
    [
      {
        weaponGroup: {
          group: WeaponGroup.ALL_MARTIAL,
          quantity: 2,
        },
      },
      {
        weaponGroup: {
          group: WeaponGroup.ALL_MARTIAL,
          quantity: 1,
        },
        items: [{ item: itemIds.shield, quantity: 1 }],
      },
    ]
  ),
  generateAddToInventoryGroupedChoice(
    'paladin-item-2',
    ids.paladin,
    'classId',
    `Choose a weapon.`,
    [
      {
        items: [{ item: itemIds.javelin, quantity: 5 }],
      },
      {
        weaponGroup: {
          group: WeaponGroup.SIMPLE_MELEE,
          quantity: 1,
        },
      },
    ]
  ),
  generateAddToInventoryChoice(
    'paladin-item-3',
    ids.paladin,
    'classId',
    `Choose an equipment pack.`,
    [
      [{ item: itemIds.explorersPack, quantity: 1 }],
      [{ item: itemIds.priestsPack, quantity: 1 }],
    ]
  ),
  generateAddToInventoryGroupedChoice(
    'paladin-item-4',
    ids.paladin,
    'classId',
    `Choose a holy symbol.`,
    [
      {
        itemType: { type: ItemTypes.HOLY_SYMBOL, quantity: 1 },
      },
    ]
  ),
  //ranger
  generateSkillProficiencyChoice(
    'ranger-skill-1',
    ids.ranger,
    'classId',
    'Choose your skill proficiencies.',
    [
      Skill.ANIMAL_HANDLING,
      Skill.ATHLETICS,
      Skill.INSIGHT,
      Skill.INVESTIGATION,
      Skill.NATURE,
      Skill.PERCEPTION,
      Skill.STEALTH,
      Skill.SURVIVAL,
    ],
    3
  ),
  generateAddToInventoryChoice(
    'ranger-item-1',
    ids.ranger,
    'classId',
    `Choose your armor.`,
    [
      [{ item: itemIds.scaleMail, quantity: 1 }],
      [{ item: itemIds.leatherArmor, quantity: 1 }],
    ]
  ),
  generateAddToInventoryGroupedChoice(
    'ranger-item-2',
    ids.ranger,
    'classId',
    `Choose a weapon.`,
    [
      {
        weaponGroup: {
          group: WeaponGroup.SIMPLE_MELEE,
          quantity: 2,
        },
      },
      {
        items: [{ item: itemIds.shortsword, quantity: 2 }],
      },
    ]
  ),
  generateAddToInventoryChoice(
    'ranger-item-3',
    ids.ranger,
    'classId',
    `Choose an equipment pack.`,
    [
      [{ item: itemIds.dungeoneersPack, quantity: 1 }],
      [{ item: itemIds.explorersPack, quantity: 1 }],
    ]
  ),
  //sorcerer
  generateSkillProficiencyChoice(
    'sorcerer-skill-1',
    ids.sorcerer,
    'classId',
    'Choose your skill proficiencies.',
    [
      Skill.ARCANA,
      Skill.DECEPTION,
      Skill.INSIGHT,
      Skill.INTIMIDATION,
      Skill.PERSUASION,
      Skill.RELIGION,
    ],
    2
  ),
  generateAddToInventoryGroupedChoice(
    'sorcerer-item-1',
    ids.sorcerer,
    'classId',
    `Choose a weapon.`,
    [
      {
        weaponGroup: {
          group: WeaponGroup.ALL_SIMPLE,
          quantity: 1,
        },
      },
      {
        items: [
          { item: itemIds.crossbowLight, quantity: 1 },
          { item: itemIds.crossbowBolt, quantity: 20 },
        ],
      },
    ]
  ),
  generateAddToInventoryChoice(
    'sorcerer-item-2',
    ids.sorcerer,
    'classId',
    `Choose an equipment pack.`,
    [
      [{ item: itemIds.dungeoneersPack, quantity: 1 }],
      [{ item: itemIds.explorersPack, quantity: 1 }],
    ]
  ),
  generateAddToInventoryGroupedChoice(
    'sorcerer-item-3',
    ids.sorcerer,
    'classId',
    `Choose an arcane focus.`,
    [
      {
        itemType: { type: ItemTypes.ARCANE_FOCUS, quantity: 1 },
      },
    ]
  ),
  //warlock
  generateSkillProficiencyChoice(
    'warlock-skill-1',
    ids.warlock,
    'classId',
    'Choose your skill proficiencies.',
    [
      Skill.ARCANA,
      Skill.DECEPTION,
      Skill.HISTORY,
      Skill.INTIMIDATION,
      Skill.INVESTIGATION,
      Skill.NATURE,
      Skill.RELIGION,
    ],
    2
  ),
  generateAddToInventoryGroupedChoice(
    'warlock-item-1',
    ids.warlock,
    'classId',
    `Choose a weapon.`,
    [
      {
        weaponGroup: {
          group: WeaponGroup.ALL_SIMPLE,
          quantity: 1,
        },
      },
      {
        items: [
          { item: itemIds.crossbowLight, quantity: 1 },
          { item: itemIds.crossbowBolt, quantity: 20 },
        ],
      },
    ]
  ),
  generateAddToInventoryGroupedChoice(
    'warlock-item-2',
    ids.warlock,
    'classId',
    `Choose an arcane focus.`,
    [
      {
        itemType: { type: ItemTypes.ARCANE_FOCUS, quantity: 1 },
      },
    ]
  ),
  generateAddToInventoryChoice(
    'warlock-item-3',
    ids.warlock,
    'classId',
    `Choose an equipment pack.`,
    [
      [{ item: itemIds.dungeoneersPack, quantity: 1 }],
      [{ item: itemIds.explorersPack, quantity: 1 }],
    ]
  ),
  generateAddToInventoryGroupedChoice(
    'warlock-item-4',
    ids.warlock,
    'classId',
    `Choose a weapon.`,
    [
      {
        weaponGroup: {
          group: WeaponGroup.ALL_SIMPLE,
          quantity: 1,
        },
      },
    ]
  ),
  //artificer
  generateSkillProficiencyChoice(
    'artificer-skill-1',
    ids.artificer,
    'classId',
    'Choose your skill proficiencies.',
    [
      Skill.ARCANA,
      Skill.HISTORY,
      Skill.INVESTIGATION,
      Skill.MEDICINE,
      Skill.NATURE,
      Skill.PERCEPTION,
      Skill.SLEIGHT_OF_HAND,
      Skill.INSIGHT,
    ],
    2
  ),
  generateToolProficiencyGroupedChoice(
    'artificer-tool-1',
    ids.artificer,
    'classId',
    'Choose your artisan tool proficiency.',
    [{ type: 'group', group: ToolGroup.ARTISANS_TOOLS }],
    1
  ),
  generateAddToInventoryChoice(
    'artificer-item-1',
    ids.artificer,
    'classId',
    `Choose your armor.`,
    [
      [{ item: itemIds.scaleMail, quantity: 1 }],
      [{ item: itemIds.studdedLeatherArmor, quantity: 1 }],
    ]
  ),
  generateAddToInventoryGroupedChoice(
    'artificer-item-2',
    ids.artificer,
    'classId',
    `Choose a weapon.`,
    [
      {
        weaponGroup: {
          group: WeaponGroup.ALL_SIMPLE,
          quantity: 1,
        },
      },
    ]
  ),
];

export default ClassChoicesSeed;
