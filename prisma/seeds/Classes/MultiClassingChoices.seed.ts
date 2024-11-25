import { Prisma, Skill, ToolGroup } from '@prisma/client';

import { classIds as ids } from './ClassIds';
import { generateSkillProficiencyChoice } from '@/lib/ChoiceHelpers/ChoiceGenerators/generateSkillChoice';
import { generateToolProficiencyGroupedChoice } from '@/lib/ChoiceHelpers/ChoiceGenerators/generateToolChoice';

const MulticlassingChoicesSeed: Prisma.ChoiceCreateManyInput[] = [
  generateSkillProficiencyChoice(
    'rogue-multiclass-skill',
    ids.rogue,
    'multiClassId',
    'Choose a skill from the Rogue skill list.',
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
    ]
  ),
  generateSkillProficiencyChoice(
    'bard-multiclass-skill',
    ids.bard,
    'multiClassId',
    'Choose a skill from the Bard skill list.',
    [
      Skill.ACROBATICS,
      Skill.ANIMAL_HANDLING,
      Skill.ARCANA,
      Skill.ATHLETICS,
      Skill.DECEPTION,
      Skill.HISTORY,
      Skill.INSIGHT,
      Skill.INTIMIDATION,
      Skill.INVESTIGATION,
      Skill.MEDICINE,
      Skill.NATURE,
      Skill.PERCEPTION,
      Skill.PERFORMANCE,
      Skill.PERSUASION,
      Skill.RELIGION,
      Skill.SLEIGHT_OF_HAND,
      Skill.STEALTH,
      Skill.SURVIVAL,
    ]
  ),
  generateToolProficiencyGroupedChoice(
    'bard-multiclass-tool',
    ids.bard,
    'multiClassId',
    'Choose a musical instruments from the Bard tool list to be proficient in.',
    [{ type: 'group', group: ToolGroup.INSTRUMENTS }]
  ),
  generateSkillProficiencyChoice(
    'ranger-multiclass-skill',
    ids.ranger,
    'multiClassId',
    'Choose a skill from the Ranger skill list.',
    [
      Skill.ANIMAL_HANDLING,
      Skill.ATHLETICS,
      Skill.INSIGHT,
      Skill.INVESTIGATION,
      Skill.NATURE,
      Skill.PERCEPTION,
      Skill.STEALTH,
      Skill.SURVIVAL,
    ]
  ),
];

export default MulticlassingChoicesSeed;
