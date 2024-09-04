import { Alignment, Prisma } from "@prisma/client";

const CharacterSeed: Prisma.CharacterCreateInput[] = [
  {
    name: "Test Character",
    experience: 1000,
    Background: {
      connect: {
        id: 1,
      },
    },
    Race: {
      connect: {
        id: 1,
      },
    },
    SubClasses: {
      connect: {
        id: 1,
      },
    },
    Classes: {
      connect: {
        id: 1,
      },
    },
    SubRace: {
      connect: {
        id: 1,
      },
    },

    armorClass: 10,
    alignment: Alignment.TRUE_NEUTRAL,
    currentHitPoints: 100,
    maxHitPoints: 100,
    hitDice: 4,
    abilityScores: {},
  },
];

export default CharacterSeed;
