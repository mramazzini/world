import { Alignment, Prisma } from "@prisma/client";

const CharacterSeed: Prisma.CharacterCreateInput[] = [
  {
    name: "Constantine Wayfinder",
    imageURL: "/images/constantine.jpeg",
    Background: {
      connect: {
        id: 37, //runecarver
      },
    },
    Classes: {
      connect: {
        id: 9, //paladin
      },
    },
    // SubClasses: {
    //   connect: {
    //     id: 1, // Oath of the gravekeeper TODO
    //   },
    // },
    Race: {
      connect: {
        id: 3, //elf
      },
    },
    SubRace: {
      connect: {
        id: 21, //Mark of shadow
      },
    },
    alignment: Alignment.NEUTRAL_GOOD,
  },
  {
    name: "Orion Lysander",
    imageURL: "/images/orion.png",
    Background: {
      connect: {
        id: 42, //soldier
      },
    },
    Race: {
      connect: {
        id: 12, //Aasimar (VGM)
      },
    },
    SubRace: {
      connect: {
        id: 102, //protector
      },
    },
    Classes: {
      connect: {
        id: 3, //cleric
      },
    },
    SubClasses: {
      connect: {
        id: 46, //life domain
      },
    },
    alignment: Alignment.CHAOTIC_GOOD,
  },
  {
    name: "Boon",
    Background: {
      connect: {
        id: 33, //outlander
      },
    },
    Classes: {
      connect: {
        id: 7, //druid
      },
    },
    alignment: Alignment.NEUTRAL_GOOD,
    Race: {
      connect: {
        id: 37, //Goliath (MMOM)
      },
    },
  },
  {
    name: "Ranis Drakan",
    imageURL: "/images/ranis.png",
    Background: {
      connect: {
        id: 6, //city watch
      },
    },
    Race: {
      connect: {
        id: 3, //elf
      },
    },
    // SubClasses: {
    //   connect: {
    //     id: 1, // arcane salvager TODO
    //   },
    // },
    Classes: {
      connect: {
        id: 13, //artificer
      },
    },
    SubRace: {
      connect: {
        id: 20, // pallid elf
      },
    },

    alignment: Alignment.TRUE_NEUTRAL,
  },
];

export default CharacterSeed;
