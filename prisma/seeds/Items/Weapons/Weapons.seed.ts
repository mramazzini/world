import { DamageTypes, Prisma } from '@prisma/client';
import { itemIds } from '../ItemIds';
import generateId from '../../_helpers/generateId';

const { BLUDGEONING, PIERCING, SLASHING } = DamageTypes;

//helper functions
const d = (damage: number, type: DamageTypes): PrismaJson.Damage[] => [
  { formula: `1d${damage}`, type },
];

const Weapons: Prisma.WeaponCreateManyInput[] = [
  {
    id: 1,
    name: 'Club',
    damage: d(4, BLUDGEONING),
    isSimple: true,
    isRanged: false,
  },
  {
    id: 2,
    name: 'Dagger',
    damage: d(4, PIERCING),
    isSimple: true,
    isRanged: false,
  },
  {
    id: 3,
    name: 'Greatclub',
    damage: d(8, BLUDGEONING),
    isSimple: true,
    isRanged: false,
  },
  {
    id: 4,
    name: 'Handaxe',
    damage: d(6, SLASHING),
    isSimple: true,
    isRanged: false,
  },
  {
    id: 5,
    name: 'Javelin',
    isSimple: true,
    damage: d(6, PIERCING),
    isRanged: false,
  },
  {
    isSimple: true,
    id: 6,
    name: 'Light Hammer',
    isRanged: false,
    damage: d(4, BLUDGEONING),
  },
  {
    id: 7,
    name: 'Mace',
    isRanged: false,
    isSimple: true,
    damage: d(6, BLUDGEONING),
  },
  {
    id: 8,
    name: 'Quarterstaff',
    damage: d(6, BLUDGEONING),
    isSimple: true,
  },
  {
    id: 9,
    isSimple: true,
    name: 'Sickle',
    isRanged: false,
    damage: d(4, SLASHING),
  },
  {
    id: 10,
    name: 'Spear',
    isSimple: true,
    damage: d(6, PIERCING),
  },
  {
    id: 11,
    name: 'Crossbow, Light',
    isRanged: true,
    isSimple: true,
    damage: d(8, PIERCING),

    ammunitionId: itemIds.crossbowBolt,
  },
  {
    id: 12,
    name: 'Dart',
    isRanged: true,
    isSimple: true,
    damage: d(4, PIERCING),
  },
  {
    id: 13,
    isSimple: true,
    isRanged: true,
    name: 'Shortbow',
    damage: d(6, PIERCING),

    ammunitionId: itemIds.arrow,
  },
  {
    id: 14,
    isSimple: true,
    isRanged: true,
    name: 'Sling',
    damage: d(4, BLUDGEONING),

    ammunitionId: itemIds.slingBullet,
  },
  {
    id: 15,
    name: 'Battleaxe',
    isRanged: false,
    isSimple: false,
    damage: d(8, SLASHING),
  },
  {
    id: 16,
    isSimple: false,
    isRanged: false,
    name: 'Flail',
    damage: d(8, BLUDGEONING),
  },
  {
    id: 17,
    isSimple: false,
    isRanged: false,
    name: 'Glaive',
    damage: d(10, SLASHING),
  },
  {
    id: 18,
    isRanged: false,
    isSimple: false,
    name: 'Greataxe',
    damage: d(12, SLASHING),
  },
  {
    id: 19,
    isSimple: false,
    name: 'Greatsword',
    damage: [{ formula: '2d6', type: SLASHING }],
  },
  {
    id: 20,
    isSimple: false,
    isRanged: false,
    name: 'Halberd',
    damage: d(10, SLASHING),
  },
  {
    id: 21,
    isSimple: false,
    name: 'Lance',
    isRanged: false,
    damage: d(12, PIERCING),
  },
  {
    id: 22,
    isSimple: false,
    isRanged: false,
    name: 'Longsword',
    damage: d(8, SLASHING),
  },
  {
    id: 23,
    isRanged: false,
    isSimple: false,
    name: 'Maul',
    damage: [{ formula: '2d6', type: BLUDGEONING }],
  },
  {
    id: 24,
    name: 'Morningstar',
    isRanged: false,
    isSimple: false,
    damage: d(8, PIERCING),
  },
  {
    id: 25,
    isRanged: false,
    isSimple: false,
    name: 'Pike',
    damage: d(10, PIERCING),
  },
  {
    id: 26,
    isRanged: false,
    name: 'Rapier',
    isSimple: false,
    damage: d(8, PIERCING),
  },
  {
    id: 27,
    name: 'Scimitar',
    isRanged: false,
    isSimple: false,
    damage: d(6, SLASHING),
  },
  {
    id: 28,
    isSimple: false,
    isRanged: false,
    name: 'Shortsword',
    damage: d(6, PIERCING),
  },
  {
    id: 29,
    isSimple: false,
    isRanged: false,
    name: 'Trident',
    damage: d(6, PIERCING),
  },
  {
    id: 30,
    name: 'War Pick',
    isRanged: false,
    isSimple: false,
    damage: d(8, PIERCING),
  },
  {
    id: 31,
    name: 'Warhammer',
    isRanged: false,
    isSimple: false,
    damage: d(8, BLUDGEONING),
  },
  {
    id: 32,
    name: 'Whip',
    isRanged: false,
    isSimple: false,
    damage: d(4, SLASHING),
  },
  {
    id: 33,
    name: 'Blowgun',
    isRanged: true,
    isSimple: false,
    damage: d(1, PIERCING),

    ammunitionId: itemIds.blowgunNeedle,
  },
  {
    id: 34,
    name: 'Crossbow, Hand',
    isRanged: true,
    isSimple: false,
    damage: d(6, PIERCING),

    ammunitionId: itemIds.crossbowBolt,
  },
  {
    id: 35,
    name: 'Crossbow, Heavy',
    isRanged: true,
    isSimple: false,
    damage: d(10, PIERCING),

    ammunitionId: itemIds.crossbowBolt,
  },
  {
    id: 36,
    name: 'Longbow',
    isRanged: true,
    isSimple: false,
    damage: d(8, PIERCING),

    ammunitionId: itemIds.arrow,
  },
  {
    id: 37,
    isRanged: true,
    name: 'Net',
    isSimple: false,
    damage: [],
  },
  {
    id: 38,
    name: 'Hoopak',
    isSimple: false,
    damage: d(6, PIERCING),
  },
];

const weaponIds = {
  club: 1,
  dagger: 2,
  greatclub: 3,
  handaxe: 4,
  javelin: 5,
  lightHammer: 6,
  mace: 7,
  quarterstaff: 8,
  sickle: 9,
  spear: 10,
  crossbowLight: 11,
  dart: 12,
  shortbow: 13,
  sling: 14,
  battleaxe: 15,
  flail: 16,
  glaive: 17,
  greataxe: 18,
  greatsword: 19,
  halberd: 20,
  lance: 21,
  longsword: 22,
  maul: 23,
  morningstar: 24,
  pike: 25,
  rapier: 26,
  scimitar: 27,
  shortsword: 28,
  trident: 29,
  warPick: 30,
  warhammer: 31,
  whip: 32,
  blowgun: 33,
  crossbowHand: 34,
  crossbowHeavy: 35,
  longbow: 36,
  net: 37,
  hoopak: 38,
};

let count = 1;

const WeaponSpecialFeatures: Prisma.FeatureCreateManyInput[] = [
  {
    weaponId: weaponIds.lance,
    name: 'Reach',
    description:
      'This weapon adds 5 feet to your reach when you attack with it, as well as when determining your reach for opportunity attacks with it.',
  },
  {
    weaponId: weaponIds.net,
    name: 'Use Net',
    description:
      'A Large or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net. When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make.',
  },
].map((feature, index, arr) => {
  const featureParent = Weapons.find(
    (weapon) => weapon.id === feature.weaponId
  );
  if (!featureParent?.name) throw new Error('Feature must have a name');
  const id = generateId('weapon', feature.name, featureParent.name, count);
  count++;
  const nextWeaponFeature = arr[index + 1];
  if (!nextWeaponFeature) return { ...feature, id };
  if (nextWeaponFeature.weaponId !== feature.weaponId) {
    count = 1;
  }
  return { ...feature, id };
});

const martialIds = Weapons.filter((w) => !w.isSimple).map(
  (w) => w.id
) as number[];
const martialMeleeIds = Weapons.filter((w) => {
  const isMelee = !w.isRanged;
  const isMartial = !w.isSimple;
  return isMelee && isMartial;
}).map((w) => w.id) as number[];

const martialRangedIds = Weapons.filter((w) => {
  const isRanged = w.isRanged;
  const isMartial = !w.isSimple;
  return isRanged && isMartial;
}).map((w) => w.id) as number[];

const simpleMeleeIds = Weapons.filter((w) => {
  const isMelee = !w.isRanged;
  const isSimple = w.isSimple;
  return isMelee && isSimple;
}).map((w) => w.id) as number[];

const simpleRangedIds = Weapons.filter((w) => {
  const isRanged = w.isRanged;
  const isSimple = w.isSimple;
  return isRanged && isSimple;
}).map((w) => w.id) as number[];

const simpleIds = Weapons.filter((w) => w.isSimple)
  .map((w) => w.id)
  .filter((id) => id) as number[];

export {
  weaponIds,
  Weapons,
  simpleIds,
  martialIds,
  martialMeleeIds,
  martialRangedIds,
  simpleMeleeIds,
  simpleRangedIds,
  WeaponSpecialFeatures,
};
