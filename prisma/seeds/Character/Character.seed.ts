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
  //   Race: {
  //     connect: {
  //       id: 3, //elf
  //     },
  //   },
  //   SubRace: {
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
  //   Race: {
  //     connect: {
  //       id: 12, //Aasimar (VGM)
  //     },
  //   },
  //   SubRace: {
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
  //   Race: {
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
  //   Race: {
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
  //   SubRace: {
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
  //   Race: {
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
  //   Race: {
  //     connect: {
  //       id: 8, //human
  //     },
  //   },
  //   SubRace: {
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

    Race: {
      connect: {
        id: 4, //gnome
      },
    },

    SubRace: {
      connect: {
        id: 24, //forest
      },
    },
  },
];

export default CharacterSeed;
