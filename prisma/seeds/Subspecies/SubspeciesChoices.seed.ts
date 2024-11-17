import { generateLanguageProficiencyChoice } from '@/lib/protocols/ChoiceFetch/generateLanguageProficiencyChoice';
import { Ability, Language, Prisma } from '@prisma/client';
import { subSpeciesIds as ids } from './Subspecies.seed';
import { generateAbilityScoreImprovementChoice } from '@/lib/protocols/ChoiceFetch/generateAbilityScoreChoice';
const SubSpeciesChoicesSeed: Prisma.ChoiceCreateManyInput[] = [
  //high elf
  generateLanguageProficiencyChoice(
    'high-elf-language',
    ids.highElf,
    'subSpeciesId',
    'What languages do you speak?',
    Object.values(Language).filter(
      (language) => language !== Language.COMMON && language !== Language.ELVISH
    )
  ),
  //variant human
  generateAbilityScoreImprovementChoice(
    'variant-human-asi',
    ids.variantHuman,
    'subSpeciesId',
    'Increase your ability scores',
    [
      {
        abilitiesToIncrease: Object.values(Ability),
        increaseValues: [1, 1],
      },
    ]
  ),
];

export default SubSpeciesChoicesSeed;
