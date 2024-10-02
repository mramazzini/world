import { Prisma } from "@prisma/client";

const ids = {
  dragonborn: 1,
  dwarf: 2,
  elf: 3,
  gnome: 4,
  halfElf: 5,
  halfOrc: 6,
  halfling: 7,
  human: 8,
  tiefling: 9,
};
interface RacialTraits extends PrismaJson.Feature {
  speciesId: number;
}

const Traits: RacialTraits[] = [
  //Dragonborn
  {
    name: "Draconic Ancestry",
    description:
      "You are distantly related to a particular kind of dragon. Your subspecies determines the damage type and shape of the breath weapon you have.",
    speciesId: ids.dragonborn,
  },
  //dwarf

  {
    name: "Dwarven Resilience",
    description:
      "You have advantage on saving throws against poison, and you have resistance against poison damage.",
    speciesId: ids.dwarf,
  },
  {
    name: "Dwarven Combat Training",
    description:
      "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.",
    speciesId: ids.dwarf,
  },
  {
    name: "Tool Proficiency",
    description:
      "You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools.",
    speciesId: ids.dwarf,
  },
  {
    name: "Stonecunning",
    description:
      "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
    speciesId: ids.dwarf,
  },
  //elf
  {
    name: "Fey Ancestry",
    description:
      "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
    speciesId: ids.elf,
  },
  {
    name: "Trance",
    description: `Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is "trance." While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.`,
    speciesId: ids.elf,
  },
  {
    name: "Keen Senses",
    description: "You have proficiency in the Perception skill.",
    speciesId: ids.elf,
  },
  //gnome
  {
    name: "Gnome Cunning",
    description:
      "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
    speciesId: ids.gnome,
  },
  //halfElf
  {
    name: "Fey Ancestry",
    description:
      "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
    speciesId: ids.halfElf,
  },
  //halfOrc
  {
    name: "Menacing",
    description: "You gain proficiency in the Intimidation skill.",
    speciesId: ids.halfOrc,
  },
  {
    name: "Relentless Endurance",
    description:
      "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
    speciesId: ids.halfOrc,
  },
  {
    name: "Savage Attacks",
    description:
      "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
    speciesId: ids.halfOrc,
  },
  //halfling
  {
    name: "Lucky",
    description:
      "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
    speciesId: ids.halfling,
  },
  {
    name: "Brave",
    description:
      "You have advantage on saving throws against being frightened.",
    speciesId: ids.halfling,
  },
  {
    name: "Halfling Nimbleness",
    description:
      "You can move through the space of any creature that is of a size larger than yours.",
    speciesId: ids.halfling,
  },
  //human
  //tiefling
  {
    name: "Hellish Resistance",
    description: "You have resistance to fire damage.",
    speciesId: ids.tiefling,
  },
];

export default Traits;
