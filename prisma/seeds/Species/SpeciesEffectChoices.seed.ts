import { generateSkillProficiencyChoice } from '@/lib/ChoiceHelpers/ChoiceGenerators/generateSkillChoice';
import { Prisma, Skill, ToolGroup } from '@prisma/client';
import { speciesEffectIds } from './SpeciesFeatureEffects.seed';
import { generateToolProficiencyGroupedChoice } from '@/lib/ChoiceHelpers/ChoiceGenerators/generateToolChoice';

const SpeciesEffectChoicesSeed: Prisma.ChoiceCreateManyInput[] = [
  generateSkillProficiencyChoice(
    'specializedDesignWarforgedMMOM-skill',
    speciesEffectIds.specializedDesignWarforgedMMOM,
    'effectId',
    'Choose one skill to be proficient in',
    Object.values(Skill)
  ),
  generateToolProficiencyGroupedChoice(
    'specializedDesignWarforgedMMOM-tool',
    speciesEffectIds.specializedDesignWarforgedMMOM,
    'effectId',
    'Choose one tool to be proficient in',
    [
      {
        type: 'group',
        group: ToolGroup.ARTISANS_TOOLS,
      },
    ]
  ),
];

export default SpeciesEffectChoicesSeed;
