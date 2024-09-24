import { WeaponProperties } from "@/lib/globalVars";
import { Property, WeaponPropertyNames } from "@/lib/types";
import { DamageTypes, Prisma, Ability } from "@prisma/client";
import { itemIds } from "../ItemIds";

const { BLUDGEONING, PIERCING, SLASHING } = DamageTypes;

//helper functions
const d = (damage: number, type: DamageTypes): PrismaJson.Damage[] => [
  { dice: damage, numberOfDice: 1, type },
];
const p = (property: string[]): PrismaJson.WeaponProperty[] => {
  const res = property.map((prop) => {
    if (
      !Object.values(WeaponPropertyNames).includes(prop as WeaponPropertyNames)
    ) {
      throw new Error(`Property ${prop} is not a valid weapon property`);
    }
    return {
      property: WeaponProperties[prop as WeaponPropertyNames],
    };
  });
  return res;
};
const Weapons: Prisma.WeaponCreateManyInput[] = [
  {
    id: 1,
    name: "Club",
    damage: d(4, BLUDGEONING),
    isSimple: true,
    properties: p(["Light"]),
  },
  {
    id: 2,
    name: "Dagger",
    damage: d(4, PIERCING),
    isSimple: true,

    properties: p(["Finesse", "Light"]).concat([
      {
        property: WeaponProperties.Thrown,
        range: 20,
        maxRange: 60,
      },
    ]),
  },
  {
    id: 3,
    name: "Greatclub",
    damage: d(8, BLUDGEONING),
    isSimple: true,

    properties: p(["Two-Handed"]),
  },
  {
    id: 4,
    name: "Handaxe",
    damage: d(6, SLASHING),
    isSimple: true,

    properties: p(["Light"]).concat([
      {
        property: WeaponProperties.Thrown,
        range: 20,
        maxRange: 60,
      },
    ]),
  },
  {
    id: 5,
    name: "Javelin",
    isSimple: true,
    damage: d(6, PIERCING),
    properties: [
      {
        property: WeaponProperties.Thrown,
        range: 30,
        maxRange: 120,
      },
    ],
  },
  {
    isSimple: true,
    id: 6,
    name: "Light Hammer",
    damage: d(4, BLUDGEONING),
    properties: p(["Light"]).concat([
      {
        property: WeaponProperties.Thrown,
        range: 20,
        maxRange: 60,
      },
    ]),
  },
  {
    id: 7,
    name: "Mace",
    isSimple: true,
    damage: d(6, BLUDGEONING),
  },
  {
    id: 8,
    name: "Quarterstaff",
    damage: d(6, BLUDGEONING),
    isSimple: true,
    properties: [
      {
        property: WeaponProperties.Versatile,
        versatileDamage: {
          type: DamageTypes.BLUDGEONING,
          dice: 8,
          numberOfDice: 1,
        },
      },
    ],
  },
  {
    id: 9,
    isSimple: true,
    name: "Sickle",
    damage: d(4, SLASHING),
    properties: p(["Light"]),
  },
  {
    id: 10,
    name: "Spear",
    isSimple: true,
    damage: d(6, PIERCING),
    properties: [
      {
        property: WeaponProperties.Thrown,
        range: 20,
        maxRange: 60,
      },
      {
        property: WeaponProperties.Versatile,
        versatileDamage: {
          type: DamageTypes.PIERCING,
          dice: 8,
          numberOfDice: 1,
        },
      },
    ],
  },
  {
    id: 11,
    name: "Crossbow, Light",
    isSimple: true,
    damage: d(8, PIERCING),
    properties: p(["Ammunition", "Loading", "Two-Handed"]).concat([
      {
        property: WeaponProperties.Range,
        range: 80,
        maxRange: 320,
      },
    ]),
    ammunitionId: itemIds.crossbowBolt,
  },
  {
    id: 12,
    name: "Dart",
    isSimple: true,
    damage: d(4, PIERCING),
    properties: [
      {
        property: WeaponProperties.Finesse,
      },
      {
        property: WeaponProperties.Thrown,
        range: 20,
        maxRange: 60,
      },
    ],
  },
  {
    id: 13,
    isSimple: true,
    name: "Shortbow",
    damage: d(6, PIERCING),
    properties: p(["Ammunition", "Two-Handed"]).concat([
      {
        property: WeaponProperties.Range,
        range: 80,
        maxRange: 320,
      },
    ]),
    ammunitionId: itemIds.arrow,
  },
  {
    id: 14,
    isSimple: true,
    name: "Sling",
    damage: d(4, BLUDGEONING),
    properties: [
      {
        property: WeaponProperties.Ammunition,
      },
      {
        property: WeaponProperties.Range,
        range: 30,
        maxRange: 120,
      },
    ],
    ammunitionId: itemIds.slingBullet,
  },
  {
    id: 15,
    name: "Battleaxe",
    isSimple: false,
    damage: d(8, SLASHING),
    properties: [
      {
        property: WeaponProperties.Versatile,
        versatileDamage: {
          type: DamageTypes.SLASHING,
          dice: 10,
          numberOfDice: 1,
        },
      },
    ],
  },
  {
    id: 16,
    isSimple: false,
    name: "Flail",
    damage: d(8, BLUDGEONING),
  },
  {
    id: 17,
    isSimple: false,
    name: "Glaive",
    damage: d(10, SLASHING),
    properties: p(["Heavy", "Reach", "Two-Handed"]),
  },
  {
    id: 18,
    isSimple: false,
    name: "Greataxe",
    damage: d(12, SLASHING),
    properties: p(["Heavy", "Two-Handed"]),
  },
  {
    id: 19,
    isSimple: false,
    name: "Greatsword",
    damage: [{ dice: 6, numberOfDice: 2, type: SLASHING }],
    properties: p(["Heavy", "Two-Handed"]),
  },
  {
    id: 20,
    isSimple: false,
    name: "Halberd",
    damage: d(10, SLASHING),
    properties: p(["Heavy", "Reach", "Two-Handed"]),
  },
  {
    id: 21,
    isSimple: false,
    name: "Lance",
    damage: d(12, PIERCING),
    properties: p(["Reach"]).concat([
      {
        property: WeaponProperties.Special,
        special: [
          {
            name: "Lance Disadvantage",
            description:
              "You have disadvantage when you use a lance to attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren’t mounted.",
            effect: {
              attackRollAdvantages: [
                {
                  situation: "Attacking with a lance while 5ft from target",
                  disadvantage: true,
                },
              ],
            },
          },
        ],
      },
    ]),
  },
  {
    id: 22,
    isSimple: false,
    name: "Longsword",
    damage: d(8, SLASHING),
    properties: [
      {
        property: WeaponProperties.Versatile,
        versatileDamage: {
          type: DamageTypes.SLASHING,
          dice: 10,
          numberOfDice: 1,
        },
      },
    ],
  },
  {
    id: 23,
    isSimple: false,
    name: "Maul",
    damage: [{ dice: 6, numberOfDice: 2, type: BLUDGEONING }],
    properties: p(["Heavy", "Two-Handed"]),
  },
  {
    id: 24,
    name: "Morningstar",
    isSimple: false,
    damage: d(8, PIERCING),
  },
  {
    id: 25,
    isSimple: false,
    name: "Pike",
    damage: d(10, PIERCING),
    properties: p(["Heavy", "Reach", "Two-Handed"]),
  },
  {
    id: 26,
    name: "Rapier",
    isSimple: false,
    damage: d(8, PIERCING),
    properties: p(["Finesse"]),
  },
  {
    id: 27,
    name: "Scimitar",
    isSimple: false,
    damage: d(6, SLASHING),
    properties: p(["Finesse", "Light"]),
  },
  {
    id: 28,
    isSimple: false,
    name: "Shortsword",
    damage: d(6, PIERCING),
    properties: p(["Finesse", "Light"]),
  },
  {
    id: 29,
    isSimple: false,
    name: "Trident",
    damage: d(6, PIERCING),
    properties: [
      {
        property: WeaponProperties.Thrown,
        range: 20,
        maxRange: 60,
      },
      {
        property: WeaponProperties.Versatile,
        versatileDamage: {
          type: DamageTypes.PIERCING,
          dice: 8,
          numberOfDice: 1,
        },
      },
    ],
  },
  {
    id: 30,
    name: "War Pick",
    isSimple: false,
    damage: d(8, PIERCING),
  },
  {
    id: 31,
    name: "Warhammer",
    isSimple: false,
    damage: d(8, BLUDGEONING),
    properties: [
      {
        property: WeaponProperties.Versatile,
        versatileDamage: {
          type: DamageTypes.BLUDGEONING,
          dice: 10,
          numberOfDice: 1,
        },
      },
    ],
  },
  {
    id: 32,
    name: "Whip",
    isSimple: false,
    damage: d(4, SLASHING),
    properties: p(["Finesse", "Reach"]),
  },
  {
    id: 33,
    name: "Blowgun",
    isSimple: false,
    damage: d(1, PIERCING),
    properties: [
      {
        property: WeaponProperties.Ammunition,
      },
      {
        property: WeaponProperties.Loading,
      },
      {
        property: WeaponProperties.Range,
        range: 25,
        maxRange: 100,
      },
    ],
    ammunitionId: itemIds.blowgunNeedle,
  },
  {
    id: 34,
    name: "Crossbow, Hand",
    isSimple: false,
    damage: d(6, PIERCING),
    properties: p(["Ammunition", "Light", "Loading"]).concat([
      {
        property: WeaponProperties.Range,
        range: 30,
        maxRange: 120,
      },
    ]),
    ammunitionId: itemIds.crossbowBolt,
  },
  {
    id: 35,
    name: "Crossbow, Heavy",
    isSimple: false,
    damage: d(10, PIERCING),
    properties: p(["Two-Handed", "Ammunition", "Heavy", "Loading"]).concat([
      {
        property: WeaponProperties.Range,
        range: 100,
        maxRange: 400,
      },
    ]),
    ammunitionId: itemIds.crossbowBolt,
  },
  {
    id: 36,
    name: "Longbow",
    isSimple: false,
    damage: d(8, PIERCING),
    properties: p(["Ammunition", "Heavy", "Two-Handed"]).concat([
      {
        property: WeaponProperties.Range,
        range: 150,
        maxRange: 600,
      },
    ]),
    ammunitionId: itemIds.arrow,
  },
  {
    id: 37,
    name: "Net",
    isSimple: false,
    damage: [],
    properties: [
      {
        property: WeaponProperties.Special,
        special: [
          {
            name: "Net",
            description:
              "A Large or smaller creature hit by a net is restrained until it is freed.\n\nA creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net. When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make.\n\nA net has no effect on creatures that are formless, or creatures that are Huge or larger.",
          },
        ],
      },
      {
        property: WeaponProperties.Thrown,
        range: 5,
        maxRange: 15,
      },
    ],
  },
  {
    id: 38,
    name: "Hoopak",
    isSimple: false,
    damage: d(6, PIERCING),
    properties: [
      {
        property: WeaponProperties.Ammunition,
      },
      {
        property: WeaponProperties.Finesse,
      },
      {
        property: WeaponProperties.Special,
        special: [
          {
            name: "Hoopak Melee",
            description:
              "When you make a melee attack with a hoopak, you ignore its ammunition property.",
          },
          {
            name: "Hoopak Ranged",
            description:
              "You can use the hoopak as a martial ranged weapon. If you do, it uses the ammunition property, uses sling bullets, and deals 1d4 bludgeoning damage on a hit.",
          },
        ],
      },
      {
        property: WeaponProperties["Two-Handed"],
      },
      {
        property: WeaponProperties.Range,
        range: 40,
        maxRange: 160,
      },
    ],
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

const martialIds = Weapons.filter((w) => !w.isSimple)
  .map((w) => w.id)
  .filter((id) => id) as number[];
const martialMeleeIds = Weapons.filter((w) => {
  const { properties } = w;
  const pr = properties as PrismaJson.WeaponProperty[];
  return pr && pr.some((p) => p.property === WeaponProperties.Finesse);
})
  .map((w) => w.id)
  .filter((id) => id) as number[];

const martialRangedIds = Weapons.filter((w) => {
  const { properties } = w;
  const pr = properties as PrismaJson.WeaponProperty[];
  return pr && pr.some((p) => p.property === WeaponProperties.Range);
});

const simpleMeleeIds = Weapons.filter((w) => {
  const { properties } = w;
  const pr = properties as PrismaJson.WeaponProperty[];
  return pr && pr.some((p) => p.property === WeaponProperties.Finesse);
})
  .map((w) => w.id)
  .filter((id) => id) as number[];

const simpleRangedIds = Weapons.filter((w) => {
  const { properties } = w;
  const pr = properties as PrismaJson.WeaponProperty[];
  return pr && pr.some((p) => p.property === WeaponProperties.Range);
})
  .map((w) => w.id)
  .filter((id) => id) as number[];

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
};
