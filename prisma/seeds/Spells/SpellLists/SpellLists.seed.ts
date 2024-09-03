import { Prisma } from "@prisma/client";

const SpellLists: Prisma.SpellListCreateManyInput[] = [
  {
    id: 1,
    name: "Bard Spell List",
    flavorText: "The bard spell list is a mix of arcane and divine magic.",
    description: "The bard spell list is a mix of arcane and divine magic.",
  },
  {
    id: 2,
    name: "Cleric Spell List",
    flavorText: "The cleric spell list is a list of divine magic.",
    description: "The cleric spell list is a list of divine magic.",
  },
  {
    id: 3,
    name: "Druid Spell List",
    flavorText: "The druid spell list is a list of nature magic.",
    description: "The druid spell list is a list of nature magic.",
  },
  {
    id: 4,
    name: "Paladin Spell List",
    flavorText: "The paladin spell list is a list of divine magic.",
    description: "The paladin spell list is a list of divine magic.",
  },
  {
    id: 5,
    name: "Ranger Spell List",
    flavorText: "The ranger spell list is a list of nature magic.",
    description: "The ranger spell list is a list of nature magic.",
  },
  {
    id: 6,
    name: "Sorcerer Spell List",
    flavorText: "The sorcerer spell list is a list of arcane magic.",
    description: "The sorcerer spell list is a list of arcane magic.",
  },
  {
    id: 7,
    name: "Warlock Spell List",
    flavorText: "The warlock spell list is a list of arcane magic.",
    description: "The warlock spell list is a list of arcane magic.",
  },
  {
    id: 8,
    name: "Wizard Spell List",
    flavorText: "The wizard spell list is a list of arcane magic.",
    description: "The wizard spell list is a list of arcane magic.",
  },
  {
    id: 9,
    name: "Artificer Spell List",
    flavorText: "The artificer spell list is a list of arcane magic.",
    description: "The artificer spell list is a list of arcane magic.",
  },
];

const spellListIds = {
  bard: 1,
  cleric: 2,
  druid: 3,
  paladin: 4,
  ranger: 5,
  sorcerer: 6,
  warlock: 7,
  wizard: 8,
  artificer: 9,
};
export { SpellLists, spellListIds };
