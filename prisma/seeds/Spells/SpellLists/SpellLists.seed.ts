import { Prisma } from '@prisma/client';

const SpellLists: Prisma.SpellListCreateManyInput[] = [
  {
    id: '1',
    name: 'Bard Spells',
    flavorText: 'The bard spell list is a mix of arcane and divine magic.',
    description: 'The bard spell list is a mix of arcane and divine magic.',
    slug: 'bard-spell-list',
  },
  {
    id: '2',
    name: 'Cleric Spells',
    flavorText: 'The cleric spell list is a list of divine magic.',
    description: 'The cleric spell list is a list of divine magic.',
    slug: 'cleric-spell-list',
  },
  {
    id: '3',
    name: 'Druid Spells',
    flavorText: 'The druid spell list is a list of nature magic.',
    description: 'The druid spell list is a list of nature magic.',
    slug: 'druid-spell-list',
  },
  {
    id: '4',
    name: 'Paladin Spells',
    flavorText: 'The paladin spell list is a list of divine magic.',
    description: 'The paladin spell list is a list of divine magic.',
    slug: 'paladin-spell-list',
  },
  {
    id: '5',
    name: 'Ranger Spell List',
    flavorText: 'The ranger spell list is a list of nature magic.',
    description: 'The ranger spell list is a list of nature magic.',
    slug: 'ranger-spell-list',
  },
  {
    id: '6',
    name: 'Sorcerer Spells',
    flavorText: 'The sorcerer spell list is a list of arcane magic.',
    description: 'The sorcerer spell list is a list of arcane magic.',
    slug: 'sorcerer-spell-list',
  },
  {
    id: '7',
    name: 'Warlock Spells',
    flavorText: 'The warlock spell list is a list of arcane magic.',
    description: 'The warlock spell list is a list of arcane magic.',
    slug: 'warlock-spell-list',
  },
  {
    id: '8',
    name: 'Wizard Spells',
    flavorText: 'The wizard spell list is a list of arcane magic.',
    description: 'The wizard spell list is a list of arcane magic.',
    slug: 'wizard-spell-list',
  },
  {
    id: '9',
    name: 'Artificer Spells',
    flavorText: 'The artificer spell list is a list of arcane magic.',
    description: 'The artificer spell list is a list of arcane magic.',
    slug: 'artificer-spell-list',
  },
];

const spellListIds = {
  bard: '1',
  cleric: '2',
  druid: '3',
  paladin: '4',
  ranger: '5',
  sorcerer: '6',
  warlock: '7',
  wizard: '8',
  artificer: '9',
};
export { SpellLists, spellListIds };
