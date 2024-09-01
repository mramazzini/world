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
interface SubclassFeature extends PrismaJson.Feature {
  subClassId: number;
}

const druidSubclassFeatures: SubclassFeature[] = [
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
  //moon
  {
    name: "Combat Wild Shape",
    description:
      "When you choose this circle at 2nd level, you gain the ability to use Wild Shape on your turn as a bonus action, rather than as an action.\n\nAdditionally, while you are transformed by Wild Shape, you can use a bonus action to expend one spell slot to regain 1d8 hit points per level of the spell slot expended.",
    subClassId: ids.moon,
    levels: [2],
  },
  {
    name: "Circle Forms",
    description:
      "The rites of your circle grant you the ability to transform into more dangerous animal forms. Starting at 2nd level, you can use your Wild Shape to transform into a beast with a challenge rating as high as 1. You ignore the Max. CR column of the Beast Shapes table, but must abide by the other limitations there.\n\nStarting at 6th level, you can transform into a beast with a challenge rating as high as your druid level divided by 3, rounded down.",
    subClassId: ids.moon,
    levels: [2, 6],
  },
  {
    name: "Primal Strike",
    description:
      "Starting at 6th level, your attacks in beast form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
    subClassId: ids.moon,
    levels: [6],
  },
  {
    name: "Elemental Wild Shape",
    description:
      "At 10th level, you can expend two uses of Wild Shape at the same time to transform into an air elemental, an earth elemental, a fire elemental, or a water elemental.",
    subClassId: ids.moon,
    levels: [10],
  },
  {
    name: "Thousand Forms",
    description:
      "By 14th level, you have learned to use magic to alter your physical form in more subtle ways. You can cast the Alter Self spell at will.",
    subClassId: ids.moon,
    levels: [14],
  },
  //sheperd
  {
    name: "Speech of the Woods",
    description:
      "At 2nd level, you gain the ability to converse with beasts and many fey.\n\nYou learn to speak, read, and write Sylvan. In addition, beasts can understand your speech, and you gain the ability to decipher their noises and motions. Most beasts lack the intelligence to convey or understand sophisticated concepts, but a friendly beast could relay what it has seen or heard in the recent past. This ability doesn’t grant you any special friendship with beasts, though you can combine this ability with gifts to curry favor with them as you would with any nonplayer character.",
    subClassId: ids.shepherd,
    levels: [2],
  },
  {
    name: "Spirit Totem",
    description:
      "Starting at 2nd level, you gain the ability to call forth nature spirits and use them to influence the world around you.\n\nAs a bonus action, you can magically summon an incorporeal spirit to a point you can see within 60 feet of you. The spirit creates an aura in a 30-foot radius around that point. It counts as neither a creature nor an object, though it has the spectral appearance of the creature it represents. As a bonus action, you can move the spirit up to 60 feet to a point you can see.\n\nThe spirit persists for 1 minute. Once you use this feature, you can’t use it again until you finish a short or long rest.\n\nThe effect of the spirit’s aura depends on the type of spirit you summon from the options below.",
    subClassId: ids.shepherd,
    levels: [2],
    extendedTable: [
      {
        "": {
          headers: ["Spirit", "Effect"],
          data: [
            {
              Spirit: "Bear",
              Effect:
                "The bear spirit grants you and your allies its might and endurance. Each creature of your choice in the aura when the spirit appears gains temporary hit points equal to 5 + your druid level. In addition, you and your allies gain advantage on Strength checks and Strength saving throws while in the aura.",
            },
            {
              Spirit: "Hawk",
              Effect:
                "The hawk spirit is a consummate hunter, aiding you and your allies with its keen sight. When a creature makes an attack roll against a target in the spirit’s aura, you can use your reaction to grant advantage to that attack roll. In addition, you and your allies have advantage on Wisdom (Perception) checks while in the aura.",
            },
            {
              Spirit: "Unicorn",
              Effect:
                "The unicorn spirit lends its protection to those nearby. You and your allies gain advantage on all ability checks made to detect creatures in the spirit’s aura. In addition, if you cast a spell using a spell slot that restores hit points to any creature inside or outside the aura, each creature of your choice in the aura also regains hit points equal to your druid level.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Mighty Summoner",
    description:
      "At 6th level, beasts and fey that you conjure are more resilient than normal. Any beast or fey summoned or created by a spell that you cast gains two benefits:",
    options: [
      "The creature appears with more hit points than normal: 2 extra hit points per Hit Die it has.",
      "The damage from its natural weapons is considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks and damage.",
    ],
    subClassId: ids.shepherd,
    levels: [6],
  },
  {
    name: "Guardian Spirit",
    description:
      "Beginning at 10th level, your Spirit Totem safeguards the beasts and fey that you call forth with your magic. When a beast or fey that you summoned or created with a spell ends its turn in your Spirit Totem aura, that creature regains a number of hit points equal to half your druid level.",
    subClassId: ids.shepherd,
    levels: [10],
  },
  {
    name: "Faithful Summons",
    description:
      "Starting at 14th level, the nature spirits you commune with protect you when you are the most defenseless. If you are reduced to 0 hit points or are incapacitated against your will, you can immediately gain the benefits of Conjure Animals as if it were cast with a 9th-level spell slot. It summons four beasts of your choice that are challenge rating 2 or lower. The conjured beasts appear within 20 feet of you. If they receive no commands from you, they protect you from harm and attack your foes. The spell lasts for 1 hour, requiring no concentration, or until you dismiss it (no action required).\n\nOnce you use this feature, you can’t use it again until you finish a long rest.",
    subClassId: ids.shepherd,
    levels: [14],
  },
  //spores
  {
    name: "Circle Spells",
    description:
      "Your symbiotic link to fungi and your ability to tap into the cycle of life and death grants you access to certain spells. You gain access to the circle spells at the levels specified in the circle description. Once you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.",
    levels: [2, 3, 5, 7, 9],
    subClassId: ids.spores,
    extendedTable: [
      {
        "": {
          headers: ["Druid Level", "Circle Spells"],
          data: [
            {
              "Druid Level": "2nd",
              "Circle Spells": "Chill Touch",
            },
            {
              "Druid Level": "3rd",
              "Circle Spells": "Blindness/Deafness, Gentle Repose",
            },
            {
              "Druid Level": "5th",
              "Circle Spells": "Animate Dead, Gaseous Form",
            },
            {
              "Druid Level": "7th",
              "Circle Spells": "Blight, Confusion",
            },
            {
              "Druid Level": "9th",
              "Circle Spells": "Cloudkill, Contagion",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Halo of Spores",
    description:
      "Starting at 2nd level, you are surrounded by invisible, necrotic spores that are harmless until you unleash them on a creature nearby. When a creature you can see moves into a space within 10 feet of you or starts its turn there, you can use your reaction to deal 1d4 necrotic damage to that creature unless it succeeds on a Constitution saving throw against your spell save DC. The necrotic damage increases to 1d6 at 6th level, 1d8 at 10th level, and 1d10 at 14th level.",
    subClassId: ids.spores,
    levels: [2],
  },
  {
    name: "Symbiotic Entity",
    description:
      "Also at 2nd level, you gain the ability to channel magic into your spores. As an action, you can expend a use of your Wild Shape feature to awaken those spores, rather than transforming into a beast form, and you gain 4 temporary hit points for each level you have in this class. While this feature is active, you gain the benfits listed below.\n\n These Benefits last for 10 minutes, until you lose all these temporary hitpoints, or until you use your Wild Shape again.",
    options: [
      "When you deal your Halo of Spores damage, roll the damage die a second time and add it to the total.",
      "Your melee weapon attacks deal an extra 1d6 poison damage to any target they hit.",
    ],
    subClassId: ids.spores,
    levels: [2],
  },
  {
    name: "Fungal Infestation",
    description:
      "At 6th level, your spores gain the ability to infest a corpse and animate it. If a beast or a humanoid that is Small or Medium dies within 10 feet of you, you can use your reaction to animate it, causing it to stand up immediately with 1 hit point. The creature uses the Zombie stat block in the Monster Manual. It remains animate for 1 hour, after which time it collapses and dies.\n\nIn combat, the zombie's turn comes immediately after yours. It obeys your mental commands, and the only action it can take is the Attack action, making one melee attack.\n\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.",
    subClassId: ids.spores,
    levels: [6],
  },
  {
    name: "Spreading Spores",
    description:
      "At 10th level, you gain the ability to seed an area with deadly spores. As a bonus action while your Symbiotic Entity feature is active, you can hurl spores up to 30 feet away, where they swirl in a 10-foot cube for 1 minute. The spores disappear early if you use this feature again, if you dismiss them as a bonus action, or if your Symbiotic Entity feature is no longer active.\n\nWhenever a creature moves into the cube or starts its turn there, that creature takes your Halo of Spores damage, unless the creature succeeds on a Constitution saving throw against your spell save DC. A creature can take this damage no more than once per turn.\n\nWhile the cube of spores persists, you can't use your Halo of Spores reaction.",
    subClassId: ids.spores,
    levels: [10],
  },
  {
    name: "Fungal Body",
    description:
      "At 14th level, the fungal spores in your body alter you: you can't be blinded, deafened, frightened, or poisoned, and any critical hit against you counts as a normal hit instead, unless you're incapacitated.",
    subClassId: ids.spores,
    levels: [14],
  },
  //stars
  {
    name: "Star Map",
    description:
      "At 2nd level, you've created a star chart as part of your heavenly studies. It is a Tiny object and can serve as a spellcasting focus for your druid spells. You determine its form by rolling on the Star Map table or by choosing one.\n\nIf you lose the map, you can perform a 1-hour ceremony to magically create a replacement. This ceremony can be performed during a short or long rest, and it destroys the previous map.\n\nWhile holding this map, you have the following benefits:",
    options: [
      "You know the Guidance cantrip.",
      "You have the Guiding Bolt spell prepared. It counts as a druid spell for you, and it doesn't count against the number of spells you can have prepared.",
      "You can cast Guiding Bolt without expending a spell slot. You can do so a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    ],
    extendedTable: [
      {
        "": {
          headers: ["d6", "Star Map Form"],
          data: [
            {
              d6: "1",
              "Star Map Form":
                "A scroll covered with depictions of constellations",
            },
            {
              d6: "2",
              "Star Map Form":
                "A stone tablet with fine holes drilled through it",
            },
            {
              d6: "3",
              "Star Map Form":
                "A speckled owlbear hide, tooled with raised marks",
            },
            {
              d6: "4",
              "Star Map Form": "A collection of maps bound in an ebony cover",
            },
            {
              d6: "5",
              "Star Map Form":
                "A crystal that projects starry patterns when placed before a light",
            },
            {
              d6: "6",
              "Star Map Form": "Glass disks that depict constellations",
            },
          ],
        },
      },
    ],
    subClassId: ids.stars,
    levels: [2],
  },
  {
    name: "Starry Form",
    description:
      "At 2nd level, you gain the ability to harness constellations' power to alter your form. As a bonus action, you can expend a use of your Wild Shape feature to take on a starry form, rather than transforming into a beast.\n\nWhile in your starry form, you retain your game statistics, but your body becomes luminous; your joints glimmer like stars, and glowing lines connect them as on a star chart. This form sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The form lasts for 10 minutes. It ends early if you dismiss it (no action required), are incapacitated, die, or use this feature again.\n\nWhenever you assume your starry form, choose which of the following constellations glimmers on your body; your choice gives you certain benefits while in the form:",
    extendedTable: [
      {
        "": {
          headers: ["Constellation", "Benefit"],
          data: [
            {
              Constellation: "Archer",
              Benefit:
                "A constellation of an archer appears on you. When you activate this form, and as a bonus action on your subsequent turns while it lasts, you can make a ranged spell attack, hurling a luminous arrow that targets one creature within 60 feet of you. On a hit, the attack deals radiant damage equal to 1d8 + your Wisdom modifier.",
            },
            {
              Constellation: "Chalice",
              Benefit:
                "A constellation of a life-giving goblet appears on you. Whenever you cast a spell using a spell slot that restores hit points to a creature, you or another creature within 30 feet of you can regain hit points equal to 1d8 + your Wisdom modifier.",
            },
            {
              Constellation: "Dragon",
              Benefit:
                "A constellation of a wise dragon appears on you. When you make an Intelligence or a Wisdom check or a Constitution saving throw to maintain concentration on a spell, you can treat a roll of 9 or lower on the d20 as a 10.",
            },
          ],
        },
      },
    ],
    subClassId: ids.stars,
    levels: [2],
  },
  {
    name: "Cosmic Omen",
    description:
      "When you reach 6th level, you learn to use your star map to divine the will of the cosmos. Whenever you finish a long rest, you can consult your Star Map for omens. When you do so, roll a die. Until you finish your next long rest, you gain access to a special reaction based on whether you rolled an even or an odd number on the die as shown below.\n\nYou can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    extendedTable: [
      {
        "": {
          headers: ["d6", "Cosmic Omen"],
          data: [
            {
              d6: "Even",
              "Cosmic Omen":
                "When a creature you can see within 30 feet of you is about to make an attack roll, a saving throw, or an ability check, you can use your reaction to roll a d6 and add the number rolled to the total.",
            },
            {
              d6: "Odd",
              "Cosmic Omen":
                "When a creature you can see within 30 feet of you is about to make an attack roll, a saving throw, or an ability check, you can use your reaction to roll a d6 and subtract the number rolled from the total.",
            },
          ],
        },
      },
    ],
    subClassId: ids.stars,
    levels: [6],
  },
  {
    name: "Twinkling Constellations",
    description:
      "At 10th level, the constellations of your Starry Form improve. The 1d8 of the Archer and the Chalice becomes 2d8, and while the Dragon is active, you have a flying speed of 20 feet and can hover.\n\nMoreover, at the start of each of your turns while in your Starry Form, you can change which constellation glimmers on your body.",
    subClassId: ids.stars,
    levels: [10],
  },
  {
    name: "Full of Stars",
    description:
      "At 14th level, while in your Starry Form, you become partially incorporeal, giving you resistance to bludgeoning, piercing, and slashing damage.",
    subClassId: ids.stars,
    levels: [14],
  },
  //wildfire
  {
    name: "Circle Spells",
    description:
      "When you join this circle at 2nd level, you have formed a bond with a wildfire spirit, a primal being of creation and destruction. Your link with this spirit grants you access to some spells when you reach certain levels in this class, as shown on the Circle of Wildfire Spells table.\n\nOnce you gain access to one of these spells, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the Druid Spell List, the spell is nonetheless a druid spell for you.",
    levels: [2, 3, 5, 7, 9],
    subClassId: ids.wildfire,
    extendedTable: [
      {
        "": {
          headers: ["Druid Level", "Circle Spells"],
          data: [
            {
              "Druid Level": "2nd",
              "Circle Spells": "Burning Hands, Cure Wounds",
            },
            {
              "Druid Level": "3rd",
              "Circle Spells": "Flaming Sphere, Scorching Ray",
            },
            {
              "Druid Level": "5th",
              "Circle Spells": "Revivify, Plant Growth",
            },
            {
              "Druid Level": "7th",
              "Circle Spells": "Aura of Life, Fire Shield",
            },
            {
              "Druid Level": "9th",
              "Circle Spells": "Flame Strike, Mass Cure Wounds",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Summon Wildfire Spirit",
    description:
      "At 2nd level, You can summon the primal spirit bound to your soul. As an action, you can expend one use of your Wild Shape feature to summon your wildfire spirit, rather than assuming a beast form.\n\nThe spirit appears in an unoccupied space of your choice that you can see within 30 feet of you. Each creature within 10 feet of the spirit (other than you) when it appears must succeed on a Dexterity saving throw against your spell save DC or take 2d6 fire damage.\n\nThe spirit is friendly to you and your companions and obeys your commands. See this creature's game statistics in the Wildfire Spirit stat block, which uses your proficiency bonus (PB) in several places. You determine the spirit's appearance. Some spirits take the form of a humanoid figure made of gnarled branches covered in flame, while others look like beasts wreathed in fire.\n\nIn combat, the spirit shares your initiative count, but it takes its turn immediately after yours. The only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the spirit can take any action of its choice, not just Dodge.\n\nThe spirit manifests for 1 hour, until it is reduced to 0 hit points, until you use this feature to summon the spirit again, or until you die.",
    subClassId: ids.wildfire,
    levels: [2],
    extendedTable: [
      {
        "Wild Fire Spirit": {
          headers: ["STR", "DEX", "CON", "INT", "WIS", "CHA"],
          data: [
            {
              STR: "10 (+0)",
              DEX: "14 (+2)",
              CON: "14 (+2)",
              INT: "13 (+1)",
              WIS: "15 (+2)",
              CHA: "11 (+0)",
            },
          ],
        },
      },
      {
        "": {
          headers: ["Stat", "Value"],
          data: [
            {
              Stat: "Creature Type",
              Value: "Small Elemental",
            },
            {
              Stat: "Armor Class",
              Value: "13 (natural armor)",
            },
            {
              Stat: "Hit Points",
              Value: "5 + five times your druid level",
            },
            {
              Stat: "Speed",
              Value: "30 ft., fly 30 ft. (hover)",
            },
            {
              Stat: "Damage Immunities",
              Value: "fire",
            },
            {
              Stat: "Condition Immunities",
              Value: "charmed, frightened, grappled, prone, restrained",
            },
            {
              Stat: "Senses",
              Value: "darkvision 60 ft., passive Perception 12",
            },
            {
              Stat: "Languages",
              Value: "understands the languages you speak",
            },
            {
              Stat: "Challenge",
              Value: "-",
            },
            {
              Stat: "Proficiency Bonus",
              Value: "equal to your own",
            },
          ],
        },
      },
      {
        Actions: {
          headers: ["Name", "Action"],
          data: [
            {
              Name: "Flame Seed",
              Action:
                "Ranged Weapon Attack: your spell attack modifier to hit, range 60 ft., one target you can see. Hit: 1d6 + PB fire damage.",
            },
            {
              Name: "Fiery Teleportation",
              Action:
                "The spirit and each willing creature of your choice within 5 feet of it teleport up to 15 feet to unoccupied spaces you can see. Then each creature within 5 feet of the space that the spirit left must succeed on a Dexterity saving throw against your spell save DC or take 1d6 + PB fire damage.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Enhanced Bond",
    description:
      "At 6th level, the bond with your wildfire spirit enhances your destructive and restorative spells. Whenever you cast a spell that deals fire damage or restores hit points while your wildfire spirit is summoned, roll a d8, and you gain a bonus equal to the number rolled to one damage or healing roll of the spell.\n\nIn addition, when you cast a spell with a range other than self, the spell can originate from you or your wildfire spirit.",
    subClassId: ids.wildfire,
    levels: [6],
  },
  {
    name: "Cauterizing Flames",
    description:
      "At 10th level, you gain the ability to turn death into magical flames that can heal or incinerate. When a Small or larger creature dies within 30 feet of you or your wildfire spirit, a harmless spectral flame springs forth in the dead creature's space and flickers there for 1 minute. When a creature you can see enters that space, you can use your reaction to extinguish the spectral flame there and either heal the creature or deal fire damage to it. The healing or damage equals 2d10 + your Wisdom modifier.\n\nYou can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    subClassId: ids.wildfire,
    levels: [10],
  },
  {
    name: "Blazing Revival",
    description:
      "At 14th level, the bond with your wildfire spirit can save you from death. If the spirit is within 120 feet of you when you are reduced to 0 hit points and thereby fall unconscious, you can cause the spirit to drop to 0 hit points. You then regain half your hit points and immediately rise to your feet.\n\nOnce you use this feature, you can't use it again until you finish a long rest.",
    subClassId: ids.wildfire,
    levels: [14],
  },
];

export default druidSubclassFeatures;
