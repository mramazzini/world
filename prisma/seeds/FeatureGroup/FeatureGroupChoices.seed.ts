import { generateFreeSpellChoice } from '@/lib/ChoiceHelpers/ChoiceGenerators/generateSpellChoice';
import { Prisma } from '@prisma/client';
import { FeaturesFromFeatureGroupIds as ids } from './FeatureGroup.seed';
import { spellListIds } from '../Spells/SpellLists/SpellLists.seed';

const FeatureGroupChoicesSeed: Prisma.ChoiceCreateManyInput[] = [
  generateFreeSpellChoice(
    'druidicWarriorFightingStyleCantrips',
    ids.druidicWarriorFightingStyle,
    'effectId',
    'Pick two cantrips from the Druid spell list.',
    {
      fromGroup: {
        spellListIds: [spellListIds.druid],
        levels: [0],
      },
    },
    2
  ),
  generateFreeSpellChoice(
    'blessedwarriorFightingStyleCantrips',
    ids.blessedWarriorFightingStyle,
    'effectId',
    'Pick two cantrips from the Cleric spell list.',
    {
      fromGroup: {
        spellListIds: [spellListIds.cleric],
        levels: [0],
      },
    },
    2
  ),
];

export default FeatureGroupChoicesSeed;
