import { Prisma } from '@prisma/client';

export const CustomResourceIds = {
  bardicInspiration: 'bardicInspiration',
  channelDivinity: 'channelDivinity',
  harnessDivinePowerCleric: 'harnessDivinePowerCleric',
  harnessDivinePowerPaladin: 'harnessDivinePowerPaladin',
  paladinDivineSense: 'paladinDivineSense',
  layOnHands: 'layOnHands',
  cleansingTouch: 'cleansingTouch',
  kiPoints: 'kiPoints',
  rage: 'rage',
};

const CustomResourceSeed: Prisma.CustomResourceCreateManyInput[] = [
  {
    id: CustomResourceIds.bardicInspiration,
    name: 'Bardic Inspiration',
    description:
      'A pool of dice that can be used to inspire others, used by the Bard class.',
    slug: 'bardic-inspiration',
  },
  {
    id: CustomResourceIds.channelDivinity,
    name: 'Channel Divinity',
    description:
      'A pool of divine energy that can be used to fuel special abilities, shared by the Cleric and Paladin class.',
    slug: 'channel-divinity',
  },
  {
    id: CustomResourceIds.harnessDivinePowerCleric,
    name: 'Harness Divine Power',
    description:
      'Charges that dictate how many uses of harness divine power a Cleric has. Note that this does not include the cost of a Channel Divinity charge that must also be expended when using this ability.',
    slug: 'harness-divine-power-cleric',
  },
  {
    id: CustomResourceIds.paladinDivineSense,
    name: 'Divine Sense',
    description:
      'A pool of charges that dictate how many uses of divine sense a Paladin has.',
    slug: 'paladin-divine-sense',
  },
  {
    id: CustomResourceIds.layOnHands,
    name: 'Lay on Hands',
    description:
      'A pool of points that dictate how many hit points a Paladin can restore to others using the Lay On Hands Feature.',
    slug: 'lay-on-hands',
  },
  {
    id: CustomResourceIds.harnessDivinePowerPaladin,
    name: 'Harness Divine Power',
    description:
      'Charges that dictate how many uses of harness divine power a Paladin has. Note that this does not include the cost of a Channel Divinity charge that must also be expended when using this ability.',
    slug: 'harness-divine-power-paladin',
  },
  {
    id: CustomResourceIds.cleansingTouch,
    name: 'Cleansing Touch',
    description:
      'A pool of charges that dictate how many uses of cleansing touch a Paladin has.',
    slug: 'cleansing-touch',
  },
  {
    id: CustomResourceIds.kiPoints,
    name: 'Ki Points',
    description:
      'A pool of points that dictate how many uses of ki abilities a Monk has.',
    slug: 'ki-points',
  },
  {
    id: CustomResourceIds.rage,
    name: 'Rage',
    description:
      'A pool of points that dictate how many uses of rage a Barbarian has.',
    slug: 'rage',
  },
];

export default CustomResourceSeed;
