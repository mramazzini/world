import { src } from "@/lib/types";
import { DamageTypes, Prisma, SpellSchool } from "@prisma/client";

const Spells: Prisma.SpellCreateManyInput[] = [
  {
    name: "Acid Splash",
    level: 0,
    school: SpellSchool.CONJURATION,
    castingTime: "1 action",
    range: "60 feet",
    verbal: true,
    somatic: true,
    source: src.phb,
    duration: "Instantaneous",
    description:
      "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.",
    upcastInfo:
      "This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
    tags: ["damage", "acid"],
    aoe: true,
    saveRequired: true,
    damageType: DamageTypes.ACID,
  },
  {
    name: "Blade Ward",
    level: 0,
    school: SpellSchool.ABJURATION,
    castingTime: "1 action",
    range: "Self",
    verbal: true,
    somatic: true,
    source: src.phb,
    duration: "1 round",
    description:
      "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.",
    tags: ["defense"],
    saveRequired: false,
    aoe: false,
  },
];
