import { Prisma } from "@prisma/client";

const SpellLists: Prisma.SpellListCreateManyInput[] = [
  {
    id: 1,
    name: "Bard",
  },
  {
    id: 2,
    name: "Cleric",
  },
  {
    id: 3,
    name: "Druid",
  },
  {
    id: 4,
    name: "Paladin",
  },
  {
    id: 5,
    name: "Ranger",
  },
  {
    id: 6,
    name: "Sorcerer",
  },
  {
    id: 7,
    name: "Warlock",
  },
  {
    id: 8,
    name: "Wizard",
  },
];

export default SpellLists;
