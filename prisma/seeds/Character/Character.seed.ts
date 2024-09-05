import { Alignment, Prisma } from "@prisma/client";

const CharacterSeed: Prisma.CharacterCreateInput[] = [
  {
    name: "Larry",
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

    alignment: Alignment.TRUE_NEUTRAL,
  },
];

export default CharacterSeed;
