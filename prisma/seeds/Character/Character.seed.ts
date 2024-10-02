import { Alignment, Prisma } from "@prisma/client";

const CharacterSeed: Prisma.CharacterCreateInput[] = [
  // {
  //   name: "Constantine Wayfinder",
  //   imageURL: "/images/constantine.jpeg",
  //   Background: {
  //     connect: {
  //       id: 6, //city watch
  //     },
  //   },
  //   Classes: {
  //     connect: {
  //       id: 9, //paladin
  //     },
  //   },
  //   // SubClasses: {
  //   //   connect: {
  //   //     id: 1, // Oath of the gravekeeper TODO
  //   //   },
  //   // },
  //   Species: {
  //     connect: {
  //       id: 3, //elf
  //     },
  //   },
  //   SubSpecies: {
  //     connect: {
  //       id: 21, //Mark of shadow
  //     },
  //   },
  //   alignment: Alignment.NEUTRAL_GOOD,
  // },
  // {
  //   name: "Orion Lysander",
  //   imageURL: "/images/orion.png",
  //   Background: {
  //     connect: {
  //       id: 42, //soldier
  //     },
  //   },
  //   Species: {
  //     connect: {
  //       id: 12, //Aasimar (VGM)
  //     },
  //   },
  //   SubSpecies: {
  //     connect: {
  //       id: 102, //protector
  //     },
  //   },
  //   Classes: {
  //     connect: {
  //       id: 3, //cleric
  //     },
  //   },

  //   alignment: Alignment.CHAOTIC_GOOD,
  // },
  // {
  //   name: "Boon",
  //   imageURL: "/images/boon.jpg",
  //   Background: {
  //     connect: {
  //       id: 33, //outlander
  //     },
  //   },
  //   Classes: {
  //     connect: {
  //       id: 7, //druid
  //     },
  //   },
  //   alignment: Alignment.NEUTRAL_GOOD,
  //   Species: {
  //     connect: {
  //       id: 37, //Goliath (MMOM)
  //     },
  //   },
  // },
  // {
  //   name: "Ranis Drakan",
  //   imageURL: "/images/ranis.png",
  //   Background: {
  //     connect: {
  //       id: 37, //runecarver
  //     },
  //   },
  //   Species: {
  //     connect: {
  //       id: 3, //elf
  //     },
  //   },
  //   // SubClasses: {
  //   //   connect: {
  //   //     id: 1, // arcane salvager TODO
  //   //   },
  //   // },
  //   Classes: {
  //     connect: {
  //       id: 13, //artificer
  //     },
  //   },
  //   SubSpecies: {
  //     connect: {
  //       id: 20, // pallid elf
  //     },
  //   },

  //   alignment: Alignment.TRUE_NEUTRAL,
  // },
  // {
  //   name: "Jay Walker",
  //   alignment: Alignment.CHAOTIC_NEUTRAL,
  //   imageURL: "https://c.tenor.com/LJWHrVzT0-EAAAAd/tenor.gif",
  //   Background: {
  //     connect: {
  //       id: 51, //gambler
  //     },
  //   },
  //   Classes: {
  //     connect: {
  //       id: 10, //ranger
  //     },
  //   },
  //   Species: {
  //     connect: {
  //       id: 39, //harengon
  //     },
  //   },
  // },
  // {
  //   name: "Oliver Shorthand",
  //   imageURL: "https://c.tenor.com/b5p8rjSmfDsAAAAd/tenor.gif",
  //   alignment: Alignment.LAWFUL_GOOD,
  //   Background: {
  //     connect: {
  //       id: 38, //sage
  //     },
  //   },
  //   Classes: {
  //     connect: {
  //       id: 2, //wizard
  //     },
  //   },
  //   Species: {
  //     connect: {
  //       id: 8, //human
  //     },
  //   },
  //   SubSpecies: {
  //     connect: {
  //       id: 57, //variant
  //     },
  //   },
  // },
  {
    name: "Littlefoot",
    alignment: Alignment.CHAOTIC_GOOD,
    User: {
      connect: {
        id: 1,
      },
    },
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

    Species: {
      connect: {
        id: 4, //gnome
      },
    },

    SubSpecies: {
      connect: {
        id: 24, //forest
      },
    },
  },
];

export default CharacterSeed;
