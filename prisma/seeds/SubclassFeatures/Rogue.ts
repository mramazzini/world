import { Prisma } from "@prisma/client";

const ids = {
  arcane: 89,
  assassin: 90,
  inquisitive: 91,
  mastermind: 92,
  phantom: 93,
  scout: 94,
  soulknife: 95,
  swashbuckler: 96,
  thief: 97,
};

const RogueSubclassFeatures: Prisma.SubClassFeatureCreateManyInput[] = [
  // Arcane Trickster
  {
    name: "Mage Hand Legerdemain",
    levels: [3],
    subClassId: ids.arcane,
    description:
      "Starting at 3rd level, when you cast Mage Hand, you can make the spectral hand invisible, furthermore, you gain the benefits in the table below.\n\n You can perform one of these tasks without being noticed by a creature if you succeed on a Dexterity (Sleight of Hand) check contested by the creature's Wisdom (Perception) check.\n\nIn addition, you can use the bonus action granted by your Cunning Action to control the hand.",
    extendedTable: [
      {
        Benefits: {
          headers: ["Task"],
          data: [
            {
              Task: "You can stow one object the hand is holding in a container worn or carried by another creature.",
            },
            {
              Task: "You can retrieve an object in a container worn or carried by another creature.",
            },
            {
              Task: "You can use thieves' tools to pick locks and disarm traps at range.",
            },
          ],
        },
      },
    ],
  },

  {
    name: "Magical Ambush",
    description:
      "Starting at 9th level, if you are hidden from a creature when you cast a spell on it, the creature has disadvantage on any saving throw it makes against the spell this turn.",
    levels: [9],
    subClassId: ids.arcane,
  },
  {
    name: "Versatile Trickster",
    description:
      "At 13th level, you gain the ability to distract targets with your Mage Hand. As a bonus action on your turn, you can designate a creature within 5 feet of the spectral hand created by the spell. Doing so gives you advantage on attack rolls against that creature until the end of the turn.",
    levels: [13],
    subClassId: ids.arcane,
  },
  {
    name: "Spell Thief",
    description:
      "At 17th level, you gain the ability to magically steal the knowledge of how to cast a spell from another spellcaster.\n\nImmediately after a creature casts a spell that targets you or includes you in its area of effect, you can use your reaction to force the creature to make a saving throw with its spellcasting ability modifier. The DC equals your spell save DC. On a failed save, you negate the spell's effect against you, and you steal the knowledge of the spell if it is at least 1st level and of a level you can cast (it doesn't need to be a wizard spell). For the next 8 hours, you know the spell and can cast it using your spell slots. The creature can't cast that spell until the 8 hours have passed.\n\nOnce you use this feature, you can't use it again until you finish a long rest.",
    levels: [17],
    subClassId: ids.arcane,
  },
];

export default RogueSubclassFeatures;
