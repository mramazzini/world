import { Prisma } from "@prisma/client";

const subClassId = {
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
    name: "Arcane Shot",
    description:
      "At 3rd level, you learn to unleash special magical effects with some of your shots. When you gain this feature, you learn two Arcane Shot options of your choice. Once per turn when you fire an arrow from a shortbow or longbow as part of the Attack action, you can apply one of your Arcane Shot options to that arrow. You decide to use the option when the arrow hits a creature, unless the option doesn't involve an attack roll. You have two uses of this ability, and you regain all expended uses of it when you finish a short or long rest.",
    subClassId: subClassId.arcaneArcher,
    options: [
      "**Banishing Arrow.** You use abjuration magic to try to temporarily banish your target to a harmless location in the Feywild. The creature hit by the arrow must also succeed on a Charisma saving throw or be banished. While banished in this way, its speed is 0, and it is incapacitated. At the end of its next turn, the target reappears in the space it vacated or in the nearest unoccupied space if that space is occupied.",
    ],
    levels: [3, 7, 10, 15, 18],
  },
];
