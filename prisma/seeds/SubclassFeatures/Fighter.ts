import { Prisma } from "@prisma/client";

const ids = {
  arcaneArcher: 1,
  banneret: 2,
  battleMaster: 3,
  cavalier: 4,
  champion: 5,
  echoKnight: 6,
  eldritchKnight: 7,
  psiWarrior: 8,
  runeKnight: 9,
  samurai: 10,
};

const FighterSubclassFeatures: Prisma.SubClassFeatureCreateManyInput[] = [
  // arcane archer
  {
    subClassId: ids.arcaneArcher,
    name: "Arcane Archer Lore",
    description:
      "At 3rd level, you learn magical theory or some of the secrets of nature – typical for practitioners of the arcane archery. You gain proficiency in Arcana or Nature (your choice), and you choose to learn either the Prestidigitation or Druidcraft cantrip.",
    levels: [3],
  },
  {
    name: "Arcane Shot",
    description:
      "At 3rd level, you learn to unleash special magical effects with some of your shots. When you gain this feature, you learn two Arcane Shot options of your choice. Once per turn when you fire an arrow from a shortbow or longbow as part of the Attack action, you can apply one of your Arcane Shot options to that arrow. You decide to use the option when the arrow hits a creature, unless the option doesn't involve an attack roll. You have two uses of this ability, and you regain all expended uses of it when you finish a short or long rest.",
    subClassId: ids.arcaneArcher,
    options: [
      "**Banishing Arrow:** You use abjuration magic to try to temporarily banish your target to a harmless location in the Feywild. The creature hit by the arrow must also succeed on a Charisma saving throw or be banished. While banished in this way, its speed is 0, and it is incapacitated. At the end of its next turn, the target reappears in the space it vacated or in the nearest unoccupied space if that space is occupied.",
      "**Beguiling Arrow:** Your enchantment magic causes this arrow to temporarily beguile its target. The creature hit by the arrow takes an extra 2d6 psychic damage, and choose one of your allies within 30 feet of the target. The target must succeed on a Wisdom saving throw, or it is charmed by the chosen ally until the start of your next turn. This effect ends early if the chosen ally attacks the charmed target, deals damage to it, or forces it to make a saving throw. The psychic damage increases to 4d6 when you reach 18th level in this class.",
      "**Bursting Arrow.** You imbue your arrow with force energy drawn from the school of evocation. The arrow detonates after your attack. Immediately after the arrow hits the creature, the target and all other creatures within 10 feet of it take 2d6 force damage each. The force damage increases to 4d6 when you reach 18th level in this class.\n",
      "**Enfeebling Arrow.** You weave necromantic magic into your arrow. The creature hit by the arrow takes an extra 2d6 necrotic damage. The target must also succeed on a Constitution saving throw, or the damage dealt by its weapon attacks is halved until the start of your next turn. The necrotic damage increases to 4d6 when you reach 18th level in this class.\n",
      "**Grasping Arrow** When this arrow strikes it's target, conjuration magic creates grasping poisonous brambles, which wrap around the target. The creature hit by the arrow takes extra 2d6 poison damage, it's speed is reduced by 10 feet, and it takes 2d6 slashing damage the first time on each turn it moves 1 foot or more without teleporting. the target or any creature that can reach it can use its action to remove the brambles with a successful Strength (Athletics) check against your Arcane shot save DC. Otherwise, the brambles last for 1 minute or until you use this option again. The poison damage and slashing damage both increase to 4d6 when you reach the 18th level\n",
      "**Piercing Arrow**",
    ],
    levels: [3, 7, 10, 15, 18],
  },
];

export default FighterSubclassFeatures;
