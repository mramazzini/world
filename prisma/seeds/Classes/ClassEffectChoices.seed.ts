import {
  generateFreeSpellChoice,
  generateKnownSpellChoice,
} from '@/lib/ChoiceHelpers/ChoiceGenerators/generateSpellChoice';
import { Prisma, Skill } from '@prisma/client';
import { spellListIds } from '../Spells/SpellLists/SpellLists.seed';
import { ClassFeatureEffectIds } from './FeatureEffects.seed';
import { fullCaster } from '@/lib/utils/SpellSlotsUtil';
import { Level } from '@/lib/types/types';
import { SpellLevelsWithCantrip } from '@/lib/types/protocols';
import {
  generateSkillProficiencyChoice,
  generateUpgradeSkillProficiencyToExpertiseChoice,
} from '@/lib/ChoiceHelpers/ChoiceGenerators/generateSkillChoice';
import { generateFeatOrASIChoice } from '@/lib/ChoiceHelpers/ChoiceGenerators/generateFeatOrASIChoice';

const ClassEffectChoices: Prisma.ChoiceCreateInput[] = [
  //fighter ASI
  ...[4, 6, 8, 12, 14, 16, 19].map((level) =>
    generateFeatOrASIChoice(
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`fighterASI${level}`],
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`fighterASI${level}`],
      'effectId',
      `Choose a feat or increase your ability scores.`
    )
  ),
  //wizard ASI
  ...[4, 8, 12, 16, 19].map((level) =>
    generateFeatOrASIChoice(
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`wizardASI${level}`],
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`wizardASI${level}`],
      'effectId',
      `Choose a feat or increase your ability scores`
    )
  ),
  //cleric
  ...[4, 8, 12, 16, 19].map((level) => {
    return generateFeatOrASIChoice(
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`clericASI${level}`],
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`clericASI${level}`],
      'effectId',
      `Choose a feat or increase your ability scores.`
    );
  }),
  //rogue ASI
  ...[4, 8, 10, 12, 16, 19].map((level) => {
    return generateFeatOrASIChoice(
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`rogueASI${level}`],
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`rogueASI${level}`],
      'effectId',
      `Choose a feat or increase your ability scores.`
    );
  }),
  //barbarian asi
  ...[4, 6, 8, 12, 14, 16, 19].map((level) =>
    generateFeatOrASIChoice(
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`barbarianASI${level}`],
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`barbarianASI${level}`],
      'effectId',
      `Choose a feat or increase your ability scores.`
    )
  ),
  //bard asi
  ...[4, 8, 12, 16, 19].map((level) =>
    generateFeatOrASIChoice(
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`bardASI${level}`],
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`bardASI${level}`],
      'effectId',
      `Choose a feat or increase your ability scores.`
    )
  ),
  //druid asi
  ...[4, 8, 12, 16, 19].map((level) => {
    return generateFeatOrASIChoice(
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`druidASI${level}`],
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`druidASI${level}`],
      'effectId',
      `Choose a feat or increase your ability scores.`
    );
  }),
  //monk asi
  ...[4, 8, 12, 16, 19].map((level) => {
    return generateFeatOrASIChoice(
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`monkASI${level}`],
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`monkASI${level}`],
      'effectId',
      `Choose a feat or increase your ability scores.`
    );
  }),
  //paladin asi
  ...[4, 8, 12, 16, 19].map((level) =>
    generateFeatOrASIChoice(
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`paladinASI${level}`],
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`paladinASI${level}`],
      'effectId',
      `Choose a feat or increase your ability scores.`
    )
  ),
  //ranger asi
  ...[4, 8, 12, 16, 19].map((level) =>
    generateFeatOrASIChoice(
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`rangerASI${level}`],
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`rangerASI${level}`],
      'effectId',
      `Choose a feat or increase your ability scores.`
    )
  ),
  //sorcerer asi
  ...[4, 8, 12, 16, 19].map((level) =>
    generateFeatOrASIChoice(
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`sorcererASI${level}`],
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`sorcererASI${level}`],
      'effectId',
      `Choose a feat or increase your ability scores.`
    )
  ),
  //warlock asi
  ...[4, 8, 12, 16, 19].map((level) =>
    generateFeatOrASIChoice(
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`warlockASI${level}`],
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`warlockASI${level}`],
      'effectId',
      `Choose a feat or increase your ability scores.`
    )
  ),
  //artificer asi
  ...[4, 8, 12, 16, 19].map((level) =>
    generateFeatOrASIChoice(
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`artificerASI${level}`],
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`artificerASI${level}`],
      'effectId',
      `Choose a feat or increase your ability scores.`
    )
  ),
  generateFreeSpellChoice(
    ClassFeatureEffectIds.bardCantrips1,
    ClassFeatureEffectIds.bardCantrips1,
    'effectId',
    'Choose 2 cantrips from the Bard spell list',
    {
      fromGroup: {
        spellListIds: [spellListIds.bard],
        levels: [0],
      },
    },
    2
  ),
  generateFreeSpellChoice(
    ClassFeatureEffectIds.bardCantrips4,
    ClassFeatureEffectIds.bardCantrips4,
    'effectId',
    'Choose 1 cantrip from the Bard spell list',
    {
      fromGroup: {
        spellListIds: [spellListIds.bard],
        levels: [0],
      },
    },
    1
  ),
  generateFreeSpellChoice(
    ClassFeatureEffectIds.bardCantrips10,
    ClassFeatureEffectIds.bardCantrips10,
    'effectId',
    'Choose 1 cantrip from the Bard spell list',
    {
      fromGroup: {
        spellListIds: [spellListIds.bard],
        levels: [0],
      },
    },
    1
  ),
  generateKnownSpellChoice(
    ClassFeatureEffectIds.bardSpellsKnown1,
    ClassFeatureEffectIds.bardSpellsKnown1,
    'effectId',
    'Choose 4 spells from the Bard spell list',
    {
      fromGroup: {
        spellListIds: [spellListIds.bard],
        levels: [1],
      },
    },
    4
  ),
  // 2,3,4,5,6,7,8,9,11,13,15,17 grant 1 spell
  // 10, 14, 18 grant 2 spells
  ...[2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 15, 17].map((level) =>
    generateKnownSpellChoice(
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`bardSpellsKnown${level}`],
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`bardSpellsKnown${level}`],
      'effectId',
      `Choose 1 spell from the Bard spell list`,
      {
        fromGroup: {
          spellListIds: [spellListIds.bard],
          levels: Object.keys(fullCaster[level as Level] || {}).map(
            (l) => parseInt(l) as SpellLevelsWithCantrip
          ),
        },
      },
      1
    )
  ),
  ...[10, 14, 18].map((level) =>
    generateKnownSpellChoice(
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`bardSpellsKnown${level}`],
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`bardSpellsKnown${level}`],
      'effectId',
      `Choose 2 spells from the Bard spell list`,
      {
        fromGroup: {
          spellListIds: [spellListIds.bard],
          levels: Object.keys(fullCaster[level as Level] || {}).map(
            (l) => parseInt(l) as SpellLevelsWithCantrip
          ),
        },
      },
      2
    )
  ),
  //expertise choices bard
  generateUpgradeSkillProficiencyToExpertiseChoice(
    ClassFeatureEffectIds.bardExpertise3,
    ClassFeatureEffectIds.bardExpertise3,
    'effectId',
    'Choose 2 skills to gain expertise in',
    2
  ),
  generateUpgradeSkillProficiencyToExpertiseChoice(
    ClassFeatureEffectIds.bardExpertise10,
    ClassFeatureEffectIds.bardExpertise10,
    'effectId',
    'Choose 2 skills to gain expertise in',
    2
  ),
  //cleric
  generateFreeSpellChoice(
    ClassFeatureEffectIds.clericCantrips1,
    ClassFeatureEffectIds.clericCantrips1,
    'effectId',
    'Choose 3 cantrips from the Cleric spell list',
    {
      fromGroup: {
        spellListIds: [spellListIds.cleric],
        levels: [0],
      },
    },
    3
  ),
  generateKnownSpellChoice(
    ClassFeatureEffectIds.clericCantrips4,
    ClassFeatureEffectIds.clericCantrips4,
    'effectId',
    'Choose 1 cantrip from the Cleric spell list',
    {
      fromGroup: {
        spellListIds: [spellListIds.cleric],
        levels: [0],
      },
    },
    1
  ),
  generateKnownSpellChoice(
    ClassFeatureEffectIds.clericCantrips10,
    ClassFeatureEffectIds.clericCantrips10,
    'effectId',
    'Choose 1 cantrip from the Cleric spell list',
    {
      fromGroup: {
        spellListIds: [spellListIds.cleric],
        levels: [0],
      },
    },
    1
  ),
  //ranger
  generateKnownSpellChoice(
    ClassFeatureEffectIds.rangerSpellsKnown2,
    ClassFeatureEffectIds.rangerSpellsKnown2,
    'effectId',
    'Choose 2 spells from the Ranger spell list',
    {
      fromGroup: {
        spellListIds: [spellListIds.ranger],
        levels: [1],
      },
    },
    2
  ),
  ...[3, 5, 7, 9, 11, 13, 15, 17, 19].map((level) =>
    generateKnownSpellChoice(
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`rangerSpellsKnown${level}`],
      // @ts-expect-error level can index
      ClassFeatureEffectIds[`rangerSpellsKnown${level}`],
      'effectId',
      `Choose 1 spell from the Ranger spell list`,
      {
        fromGroup: {
          spellListIds: [spellListIds.ranger],
          levels: Object.keys(
            fullCaster[Math.floor(level / 2) as Level] || {}
          ).map((l) => parseInt(l) as SpellLevelsWithCantrip),
        },
      },
      1
    )
  ),
  // barbarian
  generateSkillProficiencyChoice(
    ClassFeatureEffectIds.barbarianPrimalKnowledge3,
    ClassFeatureEffectIds.barbarianPrimalKnowledge3,
    'effectId',
    'Choose 1 skill proficiency from the barbarian skill list',
    [Skill.ANIMAL_HANDLING, Skill.ATHLETICS, Skill.INTIMIDATION, Skill.NATURE]
  ),
  generateSkillProficiencyChoice(
    ClassFeatureEffectIds.barbarianPrimalKnowledge10,
    ClassFeatureEffectIds.barbarianPrimalKnowledge10,
    'effectId',
    'Choose 1 skill proficiency from the barbarian skill list',
    [Skill.ANIMAL_HANDLING, Skill.ATHLETICS, Skill.INTIMIDATION, Skill.NATURE]
  ),
  //druid
  generateFreeSpellChoice(
    ClassFeatureEffectIds.druidCantrips1,
    ClassFeatureEffectIds.druidCantrips1,
    'effectId',
    'Choose 2 cantrips from the Druid spell list',
    {
      fromGroup: {
        spellListIds: [spellListIds.druid],
        levels: [0],
      },
    },
    2
  ),
  generateFreeSpellChoice(
    ClassFeatureEffectIds.druidCantrips4,
    ClassFeatureEffectIds.druidCantrips4,
    'effectId',
    'Choose 1 cantrip from the Druid spell list',
    {
      fromGroup: {
        spellListIds: [spellListIds.druid],
        levels: [0],
      },
    },
    1
  ),
  generateFreeSpellChoice(
    ClassFeatureEffectIds.druidCantrips10,
    ClassFeatureEffectIds.druidCantrips10,
    'effectId',
    'Choose 1 cantrip from the Druid spell list',
    {
      fromGroup: {
        spellListIds: [spellListIds.druid],
        levels: [0],
      },
    },
    1
  ),
];

export default ClassEffectChoices;
