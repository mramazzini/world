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
  magicalTinkering: 'magicalTinkering',
  infusedItems: 'infusedItems',
  infusionsKnown: 'infusionsKnown',
  flashOfGenius: 'flashOfGenius',
  wildshapeDruid: 'wildshapeDruid',
  rabbitHopHarengon: 'rabbitHopHarengon',
  arcaneJolt: 'arcaneJolt',
  markForDeath: 'markForDeath',
  dreadLord: 'dreadLord',
  wholenessOfBody: 'wholenessOfBody',
  infectiousFury: 'infectiousFury',
  drakesBreath: 'drakesBreath',
  reflexiveResistance: 'reflexiveResistance',
  detectPortal: 'detectPortal',
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
  {
    id: CustomResourceIds.magicalTinkering,
    name: 'Magical Tinkering',
    description:
      'A pool of charges that dictate how many uses of magical tinkering an Artificer has.',
    slug: 'magical-tinkering',
  },
  {
    id: CustomResourceIds.infusedItems,
    name: 'Infused Items',
    description:
      'A pool of charges that dictate how many infused items an Artificer can have at once.',
    slug: 'infused-items',
  },
  {
    id: CustomResourceIds.infusionsKnown,
    name: 'Infusions Known',
    description:
      'A pool of infusions that dictate how many infusions an Artificer can know.',
    slug: 'infusions-known',
  },
  {
    id: CustomResourceIds.flashOfGenius,
    name: 'Flash of Genius',
    description:
      'A pool of charges that dictate how many uses of flash of genius an Artificer has.',
    slug: 'flash-of-genius',
  },
  {
    id: CustomResourceIds.wildshapeDruid,
    name: 'Wild Shape',
    description:
      'A pool of charges that dictate how many uses of wild shape a Druid has.',
    slug: 'wild-shape-druid',
  },
  {
    id: CustomResourceIds.rabbitHopHarengon,
    name: 'Rabbit Hop',
    description:
      'A pool of charges that dictate how many uses of rabbit hop a Harengon has.',
    slug: 'rabbit-hop-harengon',
  },
  {
    id: CustomResourceIds.arcaneJolt,
    name: 'Arcane Jolt',
    description:
      'A pool of charges that dictate how many uses of arcane jolt an Artificer has.',
    slug: 'arcane-jolt',
  },
  {
    id: CustomResourceIds.markForDeath,
    name: 'Mark for Death',
    description:
      'A pool of charges that dictate how many uses of mark for death an Oath of the Gravekeeper Paladin has.',
    slug: 'mark-for-death',
  },
  {
    id: CustomResourceIds.dreadLord,
    name: 'Dread Lord',
    description:
      'A pool of charges that dictate how many uses of dread lord an Oathbreaker paladin has.',
    slug: 'dread-lord',
  },
  {
    id: CustomResourceIds.wholenessOfBody,
    name: 'Wholeness of Body',
    description:
      'A pool of points that dictate how many times a way oh the open hand Monk can restore to themselves using the Wholeness of Body Feature.',
    slug: 'wholeness-of-body',
  },
  {
    id: CustomResourceIds.infectiousFury,
    name: 'Infectious Fury',
    description:
      'A pool of points that dictate how many times a Path of the Beast Barbarian can use the Infectious Fury Feature.',
    slug: 'infectious-fury',
  },
  {
    id: CustomResourceIds.drakesBreath,
    name: "Drake's Breath",
    description:
      'A pool of charges that dictate how many uses of drake breath a drakewarden Ranger has.',
    slug: 'drakes-breath',
  },
  {
    id: CustomResourceIds.reflexiveResistance,
    name: 'Reflexive Resistance',
    description:
      'A pool of charges that dictate how many uses of reflective resistance a drakewarden ranger has has.',
    slug: 'reflective-resistance',
  },
  {
    id: CustomResourceIds.detectPortal,
    name: 'Detect Portal',
    description:
      'A pool of charges that dictate how many uses of detect portal a horizon walker ranger has.',
    slug: 'detect-portal',
  },
];

export default CustomResourceSeed;
