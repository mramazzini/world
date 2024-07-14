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
      "**Banishing Arrow.** You use abjuration magic to try to temporarily banish your target to a harmless location in the Feywild. The creature hit by the arrow must also succeed on a Charisma saving throw or be banished. While banished in this way, its speed is 0, and it is incapacitated. At the end of its next turn, the target reappears in the space it vacated or in the nearest unoccupied space if that space is occupied.",
      "**Beguiling Arrow.** Your enchantment magic causes this arrow to temporarily beguile its target. The creature hit by the arrow takes an extra 2d6 psychic damage, and choose one of your allies within 30 feet of the target. The target must succeed on a Wisdom saving throw, or it is charmed by the chosen ally until the start of your next turn. This effect ends early if the chosen ally attacks the charmed target, deals damage to it, or forces it to make a saving throw.\n",
    ],
    levels: [3, 7, 10, 15, 18],
  },
];

export default FighterSubclassFeatures;
