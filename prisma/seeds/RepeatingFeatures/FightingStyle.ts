import { ArmorTypes, Distance, WeaponPropertyNames } from "@/lib/types";

const fightingStyles: PrismaJson.Feature[] = [
  {
    name: "Archery",
    description:
      "You gain a +2 bonus to attack rolls you make with ranged weapons.",
    effect: {
      attackRollBonuses: [
        {
          bonus: 2,
          situation:
            "You gain a +2 bonus to attack rolls you make with ranged weapons.",
          rangedOnly: true,
        },
      ],
    },
  },
  {
    name: "Blind Fighting",
    description:
      "You have blindsight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.",
    effect: {
      blindSight: {
        quantity: 10,
        unit: Distance.ft,
      },
    },
  },
  {
    name: "Defense",
    description: "You gain a +1 bonus to AC while wearing armor.",
    effect: {
      ACBonus: 1,
      mustEquip: [
        { armorTypes: [ArmorTypes.LIGHT] },
        { armorTypes: [ArmorTypes.MEDIUM] },
        { armorTypes: [ArmorTypes.HEAVY] },
      ],
    },
  },
  {
    name: "Dueling",
    description:
      "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
    effect: {
      damageRollBonuses: [
        {
          bonus: 2,
          situation:
            "Wielding a melee weapon in one hand and no other weapons.",
        },
      ],
    },
  },
  {
    name: "Great Weapon Fighting",
    description:
      "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.",
    effect: {
      mustEquip: [
        {
          emptyHands: { amount: 1 },
          weapons: {
            meleeOnly: true,
            properties: [WeaponPropertyNames.TwoHanded],
          },
        },
      ],
      reroll: {
        damageDie: {
          onRoll: {
            damage: {
              rolledA: [1, 2],
            },
          },
        },
      },
    },
  },
  {
    name: "Interception",
    description:
      "When a creature you can see hits a target, other than you, within 5 feet of you with an attack, you can use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to a minimum of 0 damage). You must be wielding a shield or a simple or martial weapon to use this reaction.",
    effect: {
      active: {
        cost: {
          combatTime: "Reaction",
        },
      },
      mustEquip: [
        { shield: true },
        { weapons: { simpleOnly: true } },
        { weapons: { martialOnly: true } },
      ],
    },
  },
  {
    name: "Protection",
    description:
      "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.",
    effect: {
      active: {
        cost: {
          combatTime: "Reaction",
        },
      },
      mustEquip: [{ shield: true }],
    },
  },
  {
    name: "Superior Technique",
    description:
      "You learn one maneuver of your choice from among those available to the Battle Master archetype. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice.) \n\nYou gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest.",
    effect: {},
  },
];

const fightingStyleMap = {
  Archery: fightingStyles[0],
  "Blind Fighting": fightingStyles[1],
  Defense: fightingStyles[2],
  Dueling: fightingStyles[3],
  "Great Weapon Fighting": fightingStyles[4],
  Interception: fightingStyles[5],
  Protection: fightingStyles[6],
  "Superior Technique": fightingStyles[7],
};

export { fightingStyles, fightingStyleMap };
