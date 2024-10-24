import SearchPageComponent from '../SearchPage';

import { CreatureInfo } from '@/lib/utils/types/types';
import { CreatureType, Size } from '@prisma/client';
import { getCreatureChunk } from '@/lib/actions/db/creature/read.actions';
interface Props {
  creatures: CreatureInfo[];
}
const CreatureSearchPage = ({ creatures }: Props) => {
  return (
    <SearchPageComponent<CreatureInfo>
      title="Creatures"
      description="Creatures are statblocks that represent Non-player characters. Use these to have an easy reference for creatures for your characters to interact/fight with."
      createText="Create a Creature ->"
      homebrewOfficialText="View Homebrew Creatures ->"
      searchPlaceholder="Search Creature..."
      routeName="creature"
      handleSearch={getCreatureChunk}
      staticInput={creatures}
      table={[
        {
          headerWidth: 10,
          header: 'Name',
          dbHeader: 'name',
          modifiers: ['Bold', 'Button'],
          index: 0,
          priority: 'all',
        },
        {
          headerWidth: 100,
          header: 'Description',
          dbHeader: 'flavorText',
          modifiers: ['Italic'],
          index: 1,
          priority: 'xl',
        },
        {
          headerWidth: 10,
          header: 'CR',
          dbHeader: 'challengeRating',
          searchFields: [
            0, 0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
          ],
          index: 2,
          priority: 'all',
        },
        {
          headerWidth: 10,
          dbHeader: 'size',
          header: 'Size',
          searchFields: Object.values(Size),
          modifiers: [],
          index: 3,
          enum: true,
          priority: 'md',
        },
        {
          headerWidth: 10,
          dbHeader: 'creatureType',
          header: 'Type',
          modifiers: [],
          index: 4,
          priority: 'md',
          enum: true,
          searchFields: Object.values(CreatureType),
        },
        {
          headerWidth: 10,
          dbHeader: 'hitDiceAmount',
          header: 'Hit Dice',
          modifiers: [],
          index: 5,
          priority: 'md',
        },

        {
          headerWidth: 10,
          header: 'Last Updated',
          dbHeader: 'updatedAt',
          modifiers: ['Date'],
          index: 6,
          priority: 'md',
        },
      ]}
      homebrew={false}
    />
  );
};

export default CreatureSearchPage;
