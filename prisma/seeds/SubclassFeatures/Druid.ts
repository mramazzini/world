import { Prisma } from "@prisma/client";

const ids = {
  dreams: 55,
  land: 56,
  moon: 57,
  shepherd: 58,
  spores: 59,
  stars: 60,
  wildfire: 61,
};

const druidSubclassFeatures: Prisma.SubClassFeatureCreateManyInput[] = [
  //dreams
  {
    name: "Balm of the Summer Court",
    description:
      "At 2nd level, you become imbued with the blessings of the Summer Court. You are a font of energy that offers respite from injuries. You have a pool of fey energy represented by a number of d6s equal to your druid level.\n\nAs a bonus action, you can choose an ally you can see within 120 feet of you and spend a number of those dice equal to half your druid level or less. Roll the spent dice and add them together. The target regains a number of hit points equal to the total. The target also gains 1 temporary hit point per die spent.\n\nYou regain the expended dice when you finish a long rest.",
    subClassId: ids.dreams,
    levels: [2],
  },
  {
    name: "Hearth of Moonlight and Shadow",
    description:
      "At 6th level, home can be wherever you are. During a short or long rest, you can invoke the shadowy power of the Gloaming Court to help guard your respite. At the start of the rest, you touch a point in space, and an invisible, 30-foot-radius sphere of magic appears, centered on that point. Total cover blocks the sphere.\n\nWhile within the sphere, you and your allies gain a +5 bonus to Dexterity (Stealth) and Wisdom (Perception) checks, and any light from open flames in the sphere (a campfire, torches, or the like) isn't visible outside it.\n\nThe sphere vanishes at the end of the rest or when you leave the sphere.",
    subClassId: ids.dreams,
    levels: [6],
  },
  {
    name: "Hidden Paths",
    description:
      "Starting at 10th level, you can use the hidden, magical pathways that some fey use to traverse space in a blink of an eye. As a bonus action on your turn, you can teleport up to 60 feet to an unoccupied space you can see. Alternatively, you can use your action to teleport one willing creature you touch up to 30 feet to an unoccupied space you can see.\n\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.",
    subClassId: ids.dreams,
    levels: [10],
  },
  {
    name: "Walker in Dreams",
    description:
      "At 14th level, the magic of the Feywild grants you the ability to travel mentally or physically through dreamlands.\n\nWhen you finish a short rest, you can cast one of the following spells, without expending a spell slot or requiring material components: Dream (with you as the messenger), Scrying, or Teleportation Circle.\n\nThis use of Teleportation Circle is special. Rather than opening a portal to a permanent teleportation circle, it opens a portal to the last location where you finished a long rest on your current plane of existence. If you haven't taken a long rest on your current plane, the spell fails but isn't wasted.\n\nOnce you use this feature, you can't use it again until you finish a long rest.",
    subClassId: ids.dreams,
    levels: [14],
  },
  //land
  {
    name: "Circle of the Land",
    description:
      "When you choose this circle at 2nd level, you learn one additional druid cantrip of your choice. This cantrip doesn’t count against the number of druid cantrips you know.",
    subClassId: ids.land,
    levels: [2],
  },
  {
    name: "Natural Recovery",
    description:
      "Starting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can't use this feature again until you finish a long rest.\n\nFor example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots.",
    subClassId: ids.land,
    levels: [2],
  },
  {
    name: "Circle Spells",
    description:
      "Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid. Choose that land – arctic, coast, desert, forest, grassland, mountain, swamp, or Underdark – and consult the associated list of spells.\n\nOnce you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.",
    subClassId: ids.land,
    levels: [3, 5, 7, 9],

    extendedTable: [
      {
        Arctic: {
          headers: ["Druid Level", "Circle Spells"],
          data: [
            {
              "Druid Level": "3rd",
              "Circle Spells": "Hold Person, Spike Growth",
            },
            {
              "Druid Level": "5th",
              "Circle Spells": "Sleet Storm, Slow",
            },
            {
              "Druid Level": "7th",
              "Circle Spells": "Freedom of Movement, Ice Storm",
            },
            {
              "Druid Level": "9th",
              "Circle Spells": "Commune with Nature, Cone of Cold",
            },
          ],
        },
      },
      {
        Coast: {
          headers: ["Druid Level", "Circle Spells"],
          data: [
            {
              "Druid Level": "3rd",
              "Circle Spells": "Mirror Image, Misty Step",
            },
            {
              "Druid Level": "5th",
              "Circle Spells": "Water Breathing, Water Walk",
            },
            {
              "Druid Level": "7th",
              "Circle Spells": "Control Water, Freedom of Movement",
            },
            {
              "Druid Level": "9th",
              "Circle Spells": "Conjure Elemental, Scrying",
            },
          ],
        },
      },
      {
        Desert: {
          headers: ["Druid Level", "Circle Spells"],
          data: [
            {
              "Druid Level": "3rd",
              "Circle Spells": "Blur, Silence",
            },
            {
              "Druid Level": "5th",
              "Circle Spells": "Create Food and Water, Protection from Energy",
            },
            {
              "Druid Level": "7th",
              "Circle Spells": "Blight, Hallucinatory Terrain",
            },
            {
              "Druid Level": "9th",
              "Circle Spells": "Insect Plague, Wall of Stone",
            },
          ],
        },
      },
      {
        Forest: {
          headers: ["Druid Level", "Circle Spells"],
          data: [
            {
              "Druid Level": "3rd",
              "Circle Spells": "Barkskin, Spider Climb",
            },
            {
              "Druid Level": "5th",
              "Circle Spells": "Call Lightning, Plant Growth",
            },
            {
              "Druid Level": "7th",
              "Circle Spells": "Divination, Freedom of Movement",
            },
            {
              "Druid Level": "9th",
              "Circle Spells": "Commune with Nature, Tree Stride",
            },
          ],
        },
      },
      {
        Grassland: {
          headers: ["Druid Level", "Circle Spells"],
          data: [
            {
              "Druid Level": "3rd",
              "Circle Spells": "Invisibility, Pass without Trace",
            },
            {
              "Druid Level": "5th",
              "Circle Spells": "Daylight, Haste",
            },
            {
              "Druid Level": "7th",
              "Circle Spells": "Divination, Freedom of Movement",
            },
            {
              "Druid Level": "9th",
              "Circle Spells": "Dream, Insect Plague",
            },
          ],
        },
      },
      {
        Mountain: {
          headers: ["Druid Level", "Circle Spells"],
          data: [
            {
              "Druid Level": "3rd",
              "Circle Spells": "Spider Climb, Spike Growth",
            },
            {
              "Druid Level": "5th",
              "Circle Spells": "Lightning Bolt, Meld into Stone",
            },
            {
              "Druid Level": "7th",
              "Circle Spells": "Stone Shape, Stoneskin",
            },
            {
              "Druid Level": "9th",
              "Circle Spells": "Passwall, Wall of Stone",
            },
          ],
        },
      },
      {
        Swamp: {
          headers: ["Druid Level", "Circle Spells"],
          data: [
            {
              "Druid Level": "3rd",
              "Circle Spells": "Darkness, Melf's Acid Arrow",
            },
            {
              "Druid Level": "5th",
              "Circle Spells": "Water Walk, Stinking Cloud",
            },
            {
              "Druid Level": "7th",
              "Circle Spells": "Freedom of Movement, Locate Creature",
            },
            {
              "Druid Level": "9th",
              "Circle Spells": "Insect Plague, Scrying",
            },
          ],
        },
      },
      {
        Underdark: {
          headers: ["Druid Level", "Circle Spells"],
          data: [
            {
              "Druid Level": "3rd",
              "Circle Spells": "Spider Climb, Web",
            },
            {
              "Druid Level": "5th",
              "Circle Spells": "Gaseous Form, Stinking Cloud",
            },
            {
              "Druid Level": "7th",
              "Circle Spells": "Greater Invisibility, Stone Shape",
            },
            {
              "Druid Level": "9th",
              "Circle Spells": "Cloudkill, Insect Plague",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Land's Stride",
    description:
      "Starting at 6th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.\n\nIn addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such as those created by the Entangle spell.",
    subClassId: ids.land,
    levels: [6],
  },
  {
    name: "Nature's Ward",
    description:
      "When you reach 10th level, you can't be charmed or frightened by elementals or fey, and you are immune to poison and disease.",
    subClassId: ids.land,
    levels: [10],
  },
  {
    name: "Nature's Sanctuary",
    description:
      "When you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours.\n\nThe creature is aware of this effect before it makes its attack against you.",
    subClassId: ids.land,
    levels: [14],
  },
];

export default druidSubclassFeatures;
