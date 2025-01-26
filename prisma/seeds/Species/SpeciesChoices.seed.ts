import { Ability, Language, Prisma } from '@prisma/client';
import { speciesIds as ids } from './Species.seed';
import { generateAbilityScoreImprovementChoice } from '@/lib/ChoiceHelpers/ChoiceGenerators/generateAbilityScoreChoice';
import { generateLanguageProficiencyChoice } from '@/lib/ChoiceHelpers/ChoiceGenerators/generateLanguageProficiencyChoice';
const SpeciesChoicesSeed: Prisma.ChoiceCreateManyInput[] = [
  //half elf
  generateAbilityScoreImprovementChoice(
    'half-elf-asi',
    ids.halfElf,
    'speciesId',
    'Increase your ability scores',
    [
      {
        abilitiesToIncrease: [
          Ability.STR,
          Ability.DEX,
          Ability.CON,
          Ability.INT,
          Ability.WIS,
        ],
        increaseValues: [1, 1],
      },
    ]
  ),
  //human
  generateLanguageProficiencyChoice(
    'human-language',
    ids.halfElf,
    'speciesId',

    'What languages do you speak?',
    Object.values(Language).filter((language) => language !== Language.COMMON)
  ),
  //aasimar MMOM
  generateAbilityScoreImprovementChoice(
    'aasimar-asi',
    ids.aasimarMMOM,
    'speciesId',
    'Increase your ability scores',
    [
      {
        abilitiesToIncrease: Object.values(Ability),
        increaseValues: [1, 2],
      },
      {
        abilitiesToIncrease: Object.values(Ability),

        increaseValues: [1, 1, 1],
      },
    ]
  ),
  generateLanguageProficiencyChoice(
    'aasimar-language',
    ids.aasimarMMOM,
    'speciesId',
    'What languages do you speak?',
    Object.values(Language).filter((language) => language !== Language.COMMON)
  ),
  //Air Genasi EEVP

  generateLanguageProficiencyChoice(
    'air-genasi-EEVP-language',
    ids.airGenasiMMOM,
    'speciesId',
    'What languages do you speak?',
    Object.values(Language).filter((language) => language !== Language.COMMON)
  ),
  // Water genasi MMOM
  generateAbilityScoreImprovementChoice(
    'water-genasi-asi',
    ids.waterGenasiMMOM,
    'speciesId',
    'Increase your ability scores',
    [
      {
        abilitiesToIncrease: Object.values(Ability),
        increaseValues: [2, 1],
      },
      {
        abilitiesToIncrease: Object.values(Ability),
        increaseValues: [1, 1, 1],
      },
    ]
  ),
  // Harengon MMOM
  generateAbilityScoreImprovementChoice(
    'harengon-asi',
    ids.harengonMMOM,
    'speciesId',
    'Increase your ability scores',
    [
      {
        abilitiesToIncrease: Object.values(Ability),
        increaseValues: [2, 1],
      },
      {
        abilitiesToIncrease: Object.values(Ability),
        increaseValues: [1, 1, 1],
      },
    ]
  ),
  generateLanguageProficiencyChoice(
    'harengon-language',
    ids.harengonMMOM,
    'speciesId',
    'What languages do you speak?',
    Object.values(Language).filter((language) => language !== Language.COMMON)
  ),
  //warforged
  generateAbilityScoreImprovementChoice(
    'warforged-asi',
    ids.warforged,
    'speciesId',
    'Increase your ability scores',
    [
      {
        abilitiesToIncrease: Object.values(Ability),
        increaseValues: [1],
      },
    ]
  ),
  generateLanguageProficiencyChoice(
    'warforged-language',
    ids.warforged,
    'speciesId',
    'What languages do you speak?',
    Object.values(Language).filter((language) => language !== Language.COMMON)
  ),
  //Air genasi MMOM
  generateAbilityScoreImprovementChoice(
    'air-genasi-asi-MMOM',
    ids.airGenasiMMOM,
    'speciesId',
    'Increase your ability scores',
    [
      {
        abilitiesToIncrease: Object.values(Ability),
        increaseValues: [2, 1],
      },
      {
        abilitiesToIncrease: Object.values(Ability),
        increaseValues: [1, 1, 1],
      },
    ]
  ),
];

export default SpeciesChoicesSeed;
