import { Prisma } from "@prisma/client";

import { ClassicVariantsIds } from "./ClassicVariants";

interface RaceFeature extends PrismaJson.Feature {
  raceVariantId: number;
}

const ClassicTraits: RaceFeature[] = [
  //black dragonborn
  {
    name: "Acid Breath",
    description:
      "You can use your action to exhale destructive energy. It deals acid damage in an area. When you use your breath weapon, all creatures in the area must make a Dexterity saving throw. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus.\n\n A creature takes 2d6 acid damage on a failed save, and half as much damage on a successful one. \n\nThe damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. \n\nAfter using your breath weapon, you cannot use it again until you complete a short or long rest.",
    raceVariantId: ClassicVariantsIds.blackDragonborn,
  },
  {
    name: "Damage Resistance",
    description: "You have resistance to acid damage.",
    raceVariantId: ClassicVariantsIds.blackDragonborn,
  },
  //blue
  {
    name: "Lightning Breath",
    description:
      "You can use your action to exhale destructive energy. It deals lightning damage in an area. When you use your breath weapon, all creatures in the area must make a Dexterity saving throw. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus.\n\n A creature takes 2d6 lightning damage on a failed save, and half as much damage on a successful one. \n\nThe damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. \n\nAfter using your breath weapon, you cannot use it again until you complete a short or long rest.",
    raceVariantId: ClassicVariantsIds.blueDragonborn,
  },
  {
    name: "Damage Resistance",
    description: "You have resistance to lightning damage.",
    raceVariantId: ClassicVariantsIds.blueDragonborn,
  },
  //brass
  {
    name: "Fire Breath",
    description:
      "You can use your action to exhale destructive energy. It deals fire damage in an area. When you use your breath weapon, all creatures in the area must make a Dexterity saving throw. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus.\n\n A creature takes 2d6 fire damage on a failed save, and half as much damage on a successful one. \n\nThe damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. \n\nAfter using your breath weapon, you cannot use it again until you complete a short or long rest.",
    raceVariantId: ClassicVariantsIds.brassDragonborn,
  },
  {
    name: "Damage Resistance",
    description: "You have resistance to fire damage.",
    raceVariantId: ClassicVariantsIds.brassDragonborn,
  },
  //bronze
  {
    name: "Lightning Breath",
    description:
      "You can use your action to exhale destructive energy. It deals lightning damage in an area. When you use your breath weapon, all creatures in the area must make a Dexterity saving throw. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus.\n\n A creature takes 2d6 lightning damage on a failed save, and half as much damage on a successful one. \n\nThe damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. \n\nAfter using your breath weapon, you cannot use it again until you complete a short or long rest.",
    raceVariantId: ClassicVariantsIds.bronzeDragonborn,
  },
  {
    name: "Damage Resistance",
    description: "You have resistance to lightning damage.",
    raceVariantId: ClassicVariantsIds.bronzeDragonborn,
  },
  //copper
  {
    name: "Acid Breath",
    description:
      "You can use your action to exhale destructive energy. It deals acid damage in an area. When you use your breath weapon, all creatures in the area must make a Dexterity saving throw. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus.\n\n A creature takes 2d6 acid damage on a failed save, and half as much damage on a successful one. \n\nThe damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. \n\nAfter using your breath weapon, you cannot use it again until you complete a short or long rest.",
    raceVariantId: ClassicVariantsIds.copperDragonborn,
  },
  {
    name: "Damage Resistance",
    description: "You have resistance to acid damage.",
    raceVariantId: ClassicVariantsIds.copperDragonborn,
  },
  //gold
  {
    name: "Fire Breath",
    description:
      "You can use your action to exhale destructive energy. It deals fire damage in an area. When you use your breath weapon, all creatures in the area must make a Dexterity saving throw. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus.\n\n A creature takes 2d6 fire damage on a failed save, and half as much damage on a successful one. \n\nThe damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. \n\nAfter using your breath weapon, you cannot use it again until you complete a short or long rest.",
    raceVariantId: ClassicVariantsIds.goldDragonborn,
  },
  {
    name: "Damage Resistance",
    description: "You have resistance to fire damage.",
    raceVariantId: ClassicVariantsIds.goldDragonborn,
  },
  //green
  {
    name: "Poison Breath",
    description:
      "You can use your action to exhale destructive energy. It deals poison damage in an area. When you use your breath weapon, all creatures in the area must make a Dexterity saving throw. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus.\n\n A creature takes 2d6 poison damage on a failed save, and half as much damage on a successful one. \n\nThe damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. \n\nAfter using your breath weapon, you cannot use it again until you complete a short or long rest.",
    raceVariantId: ClassicVariantsIds.greenDragonborn,
  },
  {
    name: "Damage Resistance",
    description: "You have resistance to poison damage.",
    raceVariantId: ClassicVariantsIds.greenDragonborn,
  },
  //red
  {
    name: "Fire Breath",
    description:
      "You can use your action to exhale destructive energy. It deals fire damage in an area. When you use your breath weapon, all creatures in the area must make a Dexterity saving throw. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus.\n\n A creature takes 2d6 fire damage on a failed save, and half as much damage on a successful one. \n\nThe damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. \n\nAfter using your breath weapon, you cannot use it again until you complete a short or long rest.",
    raceVariantId: ClassicVariantsIds.redDragonborn,
  },
  {
    name: "Damage Resistance",
    description: "You have resistance to fire damage.",
    raceVariantId: ClassicVariantsIds.redDragonborn,
  },
  //silver
  {
    name: "Cold Breath",
    description:
      "You can use your action to exhale destructive energy. It deals cold damage in an area. When you use your breath weapon, all creatures in the area must make a Dexterity saving throw. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus.\n\n A creature takes 2d6 cold damage on a failed save, and half as much damage on a successful one. \n\nThe damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. \n\nAfter using your breath weapon, you cannot use it again until you complete a short or long rest.",
    raceVariantId: ClassicVariantsIds.silverDragonborn,
  },
  {
    name: "Damage Resistance",
    description: "You have resistance to cold damage.",
    raceVariantId: ClassicVariantsIds.silverDragonborn,
  },
  //white
  {
    name: "Cold Breath",
    description:
      "You can use your action to exhale destructive energy. It deals cold damage in an area. When you use your breath weapon, all creatures in the area must make a Dexterity saving throw. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus.\n\n A creature takes 2d6 cold damage on a failed save, and half as much damage on a successful one. \n\nThe damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. \n\nAfter using your breath weapon, you cannot use it again until you complete a short or long rest.",
    raceVariantId: ClassicVariantsIds.whiteDragonborn,
  },
  {
    name: "Damage Resistance",
    description: "You have resistance to cold damage.",
    raceVariantId: ClassicVariantsIds.whiteDragonborn,
  },
  //dwarves
  //hill
  {
    name: "Dwarven Toughness",
    description:
      "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.",
    raceVariantId: ClassicVariantsIds.hillDwarf,
  },
  //mountain
  {
    name: "Dwarven Armor Training",
    description: "You have proficiency with light and medium armor.",
    raceVariantId: ClassicVariantsIds.mountainDwarf,
  },
  //mark of warading
  {
    name: "Warder's Intuition",
    description:
      "Whenever you make an Intelligence (Investigation) check or an Ability Check involving Thieves' Tools, you can roll a d4 and add the number rolled to the total ability check.",
    raceVariantId: ClassicVariantsIds.markOfWarding,
  },
  {
    name: "Wards and Seals",
    description:
      "You can cast the Alarm and Mage Armor spells with this trait. Starting at 3rd level, you can also cast the Arcane Lock spell with it. Once you cast either spell with this trait, you can't cast that spell again until you finish a Long Rest. Intelligence is your Spellcasting Ability for these spells, and you don't require material components when you cast them with this trait.",
    raceVariantId: ClassicVariantsIds.markOfWarding,
  },
  {
    name: "Spells of the Mark",
    description:
      "If you have the Spellcasting or Pact Magic class feature, the spells on the Mark of Warding Spells table are added to the spell list of your Spellcasting class.",
    raceVariantId: ClassicVariantsIds.markOfWarding,
    extendedTable: [
      {
        "": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Alarm, Armor of Agathys",
            },
            {
              "Spell Level": "2nd",
              Spells: "Arcane Lock, Knock",
            },
            {
              "Spell Level": "3rd",
              Spells: "Glyph of Warding, Magic Circle",
            },
            {
              "Spell Level": "4th",
              Spells: " 	Leomund's Secret Chest, Mordenkainen's Faithful Hound",
            },
            {
              "Spell Level": "5th",
              Spells: " 	Antilife Shell",
            },
          ],
        },
      },
    ],
  },
  //dark elf
  {
    name: "Drow Magic",
    description:
      "You know the Dancing Lights cantrip. When you reach 3rd level, you can cast the Faerie Fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the Darkness spell once and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
    raceVariantId: ClassicVariantsIds.darkElf,
  },
  {
    name: "Superior Darkvision",
    description: "Your darkvision has a range of 120 feet, instead of 60.",
    raceVariantId: ClassicVariantsIds.darkElf,
  },
  {
    name: "Sunlight Sensitivity",
    description:
      "You have disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when you, the target of the attack, or whatever you are trying to perceive is in direct sunlight.",
    raceVariantId: ClassicVariantsIds.darkElf,
  },
  {
    name: "Drow Weapon Training",
    description:
      "You have proficiency with rapiers, shortswords, and hand crossbows.",
    raceVariantId: ClassicVariantsIds.darkElf,
  },
  //high elf
  {
    name: "Elf Weapon Training",
    description:
      "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
    raceVariantId: ClassicVariantsIds.highElf,
  },
  {
    name: "Cantrip",
    description:
      "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.",
    raceVariantId: ClassicVariantsIds.highElf,
  },
  {
    name: "Extra Language",
    description:
      "You can speak, read, and write one extra language of your choice.",
    raceVariantId: ClassicVariantsIds.highElf,
  },
  //wood elf
  {
    name: "Elf Weapon Training",
    description:
      "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
    raceVariantId: ClassicVariantsIds.woodElf,
  },
  {
    name: "Fleet of Foot",
    description: "Your base walking speed increases to 35 feet.",
    raceVariantId: ClassicVariantsIds.woodElf,
  },
  {
    name: "Mask of the Wild",
    description:
      "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
    raceVariantId: ClassicVariantsIds.woodElf,
  },
  //pallid elf
  {
    name: "Incisive Sense",
    description: "You have advantage on Investigation and Insight checks.",
    raceVariantId: ClassicVariantsIds.pallidElf,
  },
  {
    name: "Blesing of the Moonweaver",
    description:
      "You know the Light cantrip. When you reach 3rd level, you can cast Sleep once, and it recharges after a long rest. When you reach 5th level, you can cast Invisibility (Self Only) once, and it recharges after a long rest. You do not need the material components required of the spells. Wisdom is your spellcasting ability for these spells.",
    raceVariantId: ClassicVariantsIds.pallidElf,
  },
  //mark of shadow
  {
    name: "Cunning Intuition",
    description:
      "Whenever you roll a Dexterity (Stealth) check or a Charisma (Performance) check, roll a d4 and add the number rolled to the total ability check.",
    raceVariantId: ClassicVariantsIds.markOfShadow,
  },
  {
    name: "Shape Shadows",
    description:
      "You know the Minor Illusion cantrip. Starting at 3rd level, you can also cast the Invisibility spell with this trait. Once you cast either spell with this trait, you can't cast that spell again until you finish a long rest. Charisma is your Spellcasting Ability for these spells.",
    raceVariantId: ClassicVariantsIds.markOfShadow,
  },
  {
    name: "Spells of the Mark",
    description:
      "if you have the Spellcasting or Pact Magic class features, the spells on the Mark of Shadow Spells table are added to the spell list of your spellcasting class.",
    raceVariantId: ClassicVariantsIds.markOfShadow,
    extendedTable: [
      {
        "": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Disguise Self, Silent Image",
            },
            {
              "Spell Level": "2nd",
              Spells: "Darkness, Pass Without Trace",
            },
            {
              "Spell Level": "3rd",
              Spells: "Clairvoyance, Major Image",
            },
            {
              "Spell Level": "4th",
              Spells: "Greater Invisibility, Hallucinatory Terrain",
            },
            {
              "Spell Level": "5th",
              Spells: "Mislead",
            },
          ],
        },
      },
    ],
  },
  //bishtahar
  {
    name: "Elf Weapon Training",
    description:
      "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
    raceVariantId: ClassicVariantsIds.bishtahar,
  },
  {
    name: "Fleet of Foot",
    description: "Your base walking speed increases to 35 feet.",
    raceVariantId: ClassicVariantsIds.bishtahar,
  },
  {
    name: "Mask of the Wild",
    description:
      "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
    raceVariantId: ClassicVariantsIds.bishtahar,
  },
  //tirahar
  {
    name: "Elf Weapon Training",
    description:
      "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
    raceVariantId: ClassicVariantsIds.tirahar,
  },
  {
    name: "Fleet of Foot",
    description: "Your base walking speed increases to 35 feet.",
    raceVariantId: ClassicVariantsIds.tirahar,
  },
  {
    name: "Mask of the Wild",
    description:
      "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
    raceVariantId: ClassicVariantsIds.tirahar,
  },
  //vahadar
  {
    name: "Elf Weapon Training",
    description:
      "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
    raceVariantId: ClassicVariantsIds.vahadarElf,
  },
  {
    name: "Cantrip",
    description:
      "You know one cantrip of your choice from the druid spell list. Wisdom is your spellcasting ability for it.",
    raceVariantId: ClassicVariantsIds.vahadarElf,
  },
  {
    name: "Extra Language",
    description:
      "You can speak, read, and write one extra language of your choice.",
    raceVariantId: ClassicVariantsIds.vahadarElf,
  },
  //gnome
  //forest
  {
    name: "Natural Illusionist",
    description:
      "You know the Minor Illusion cantrip. Intelligence is your spellcasting ability for it.",
    raceVariantId: ClassicVariantsIds.forestGnome,
  },
  {
    name: "Speak with Small Beasts",
    description:
      "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts.",
    raceVariantId: ClassicVariantsIds.forestGnome,
  },
  // rock
  {
    name: "Artificer's Lore",
    description:
      "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.",
    raceVariantId: ClassicVariantsIds.rockGnome,
  },
  {
    name: "Tinker",
    description:
      "You have proficiency with artisan tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options: ",
    extendedTable: [
      {
        "": {
          headers: ["Device", "Effect"],
          data: [
            {
              Device: "Clockwork Toy",
              Effect:
                "This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.",
            },
            {
              Device: "Fire Starter",
              Effect:
                "The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.",
            },
            {
              Device: "Music Box",
              Effect:
                "When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed.",
            },
          ],
        },
      },
    ],
    raceVariantId: ClassicVariantsIds.rockGnome,
  },
  //mark of scribing
  {
    name: "Gifted Scribe",
    description:
      "Whenever you make an Intelligence (History) or an Ability Check involving Calligrapher's Supplies, you can roll a d4 and add the number rolled to the total ability check.",
    raceVariantId: ClassicVariantsIds.markOfScribing,
  },
  {
    name: "Scribe's Insight",
    description:
      "You know the Message cantrip. You can also cast the Comprehend Languages spell with this trait. Starting at 3rd level, you can also cast the Magic Mouth spell with it. Once you cast either spell with this trait, you can't cast that spell again until you finish a Long Rest. Intelligence is your Spellcasting Ability for these spells.",
    raceVariantId: ClassicVariantsIds.markOfScribing,
  },
  {
    name: "Spells of the Mark",
    description:
      "If you have the Spellcasting or Pact Magic class feature, the spells on the Mark of Scribing Spells table are added to the spell list of your Spellcasting class.",
    raceVariantId: ClassicVariantsIds.markOfScribing,
    extendedTable: [
      {
        "": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Comprehend Languages, Illusory Script",
            },
            {
              "Spell Level": "2nd",
              Spells: "Animal Messenger, Silence",
            },
            {
              "Spell Level": "3rd",
              Spells: "Sending, Tongues",
            },
            {
              "Spell Level": "4th",
              Spells: "Arcane Eye, Divination",
            },
            {
              "Spell Level": "5th",
              Spells: "Dream",
            },
          ],
        },
      },
    ],
  },
  //half elf
  //General
  {
    name: "Skill Versatility",
    description: "You gain proficiency in two skills of your choice.",
    raceVariantId: ClassicVariantsIds.generalElvenHeritage,
  },
  //high or wood elf
  {
    name: "Elf Weapon Training",
    description:
      "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
    raceVariantId: ClassicVariantsIds.highOrWoodElfDescent,
  },
  //high elf
  {
    name: "Cantrip",
    description:
      "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.",
    raceVariantId: ClassicVariantsIds.highElfDescent,
  },
  //wood elf
  {
    name: "Fleet of Foot",
    description: "Your base walking speed increases to 35 feet.",
    raceVariantId: ClassicVariantsIds.woodElfDescent,
  },
  //wood elf alternate
  {
    name: "Mask of the Wild",
    description:
      "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
    raceVariantId: ClassicVariantsIds.woodElfDescentAlternate,
  },
  //dark elf
  {
    name: "Drow Magic",
    description:
      "You know the Dancing Lights cantrip. When you reach 3rd level, you can cast Faerie Fire once, and it recharges after a long rest. When you reach 5th level, you can cast Darkness once, and it recharges after a long rest. Charisma is your spellcasting ability for these spells.",
    raceVariantId: ClassicVariantsIds.darkElfDescent,
  },
  //Aquatic elf
  {
    name: "Swim Speed",
    description: "You have a swim speed of 30 feet.",
    raceVariantId: ClassicVariantsIds.aquaticHeritage,
  },

  //mark of detection
  {
    name: "Deductive Inuition",
    description:
      "Whenever you make a Intelligence (Investigation) or a Wisdom (Insight) check, you can roll a d4 and add the number rolled to the total ability check.",
    raceVariantId: ClassicVariantsIds.markOfDetection,
  },
  {
    name: "Magical Detection",
    description:
      "You can cast the Detect Magic and the Detect Poison and Disease spells with this trait. Starting at 3rd level, you can also cast the See Invisibility spell with it. Once you cast either spell with this trait, you can't cast that spell again until you finish a Long Rest. Intelligence is your Spellcasting Ability for these spells, and you don't require material components for them.",
    raceVariantId: ClassicVariantsIds.markOfDetection,
  },
  {
    name: "Spells of the Mark",
    description:
      "If you have the Spellcasting or Pact Magic class feature, the spells on the Mark of Detection Spells table are added to the spell list of your Spellcasting class.",
    raceVariantId: ClassicVariantsIds.markOfDetection,
    extendedTable: [
      {
        "": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Detect Magic, Detect Poison and Disease",
            },
            {
              "Spell Level": "2nd",
              Spells: "Detect Thoughts, Find Traps",
            },
            {
              "Spell Level": "3rd",
              Spells: "Clairvoyance, Nondetection",
            },
            {
              "Spell Level": "4th",
              Spells: " 	Arcane Eye,Divination",
            },
            {
              "Spell Level": "5th",
              Spells: "Legend Lore",
            },
          ],
        },
      },
    ],
  },
  //mark of storm
  {
    name: "Windwright's Intuition",
    description:
      "Whenever you make a Dexterity (Acrobatics) check or any Ability Check involving Navigator's Tools, you can roll a d4 and add the number rolled to the total ability check.",
    raceVariantId: ClassicVariantsIds.markOfStorm,
  },
  {
    name: "Storm's Boon",
    description: "You have resistance to lightning damage.",
    raceVariantId: ClassicVariantsIds.markOfStorm,
  },
  {
    name: "Headwinds",
    description:
      "You know the Gust cantrip. Starting at 3rd level, you can also cast the Gust of Wind spell with it. Once you cast this spell with this trait, you can't cast that spell again until you finish a Long Rest. Charisma is your Spellcasting Ability for this spell.",
    raceVariantId: ClassicVariantsIds.markOfStorm,
  },
  {
    name: "Spells of the Mark",
    description:
      "If you have the Spellcasting or Pact Magic class feature, the spells on the Mark of Storm Spells table are added to the spell list of your Spellcasting class.",
    raceVariantId: ClassicVariantsIds.markOfStorm,
    extendedTable: [
      {
        "": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Thunderwave, Fog Cloud",
            },
            {
              "Spell Level": "2nd",
              Spells: "Gust of Wind, Shatter",
            },
            {
              "Spell Level": "3rd",
              Spells: "Call Lightning, Sleet Storm",
            },
            {
              "Spell Level": "4th",
              Spells: "Storm Sphere, Control Water",
            },
            {
              "Spell Level": "5th",
              Spells: "Control Winds",
            },
          ],
        },
      },
    ],
  },
  //half orc
  //mark of finding
  {
    name: "Hunter's Intuition",
    description:
      "Whenever you make a Wisdom (Perception) or a Wisdom (Survival) check, you can roll a d4 and add the number rolled to the total ability check.",
    raceVariantId: ClassicVariantsIds.markOfFindingOrk,
  },
  {
    name: "Finder's Magic",
    description:
      "You can cast the Hunter's Mark spell with this trait. Starting at 3rd level, you can also cast the Locate Object spell with it. Once you cast either spell with this trait, you can't cast that spell again until you finish a Long Rest. Wisdom is your Spellcasting Ability for these spells.",
    raceVariantId: ClassicVariantsIds.markOfFindingOrk,
  },
  {
    name: "Spells of the Mark",
    description:
      "If you have the Spellcasting or Pact Magic class feature, the spells on the Mark of Finding Spells table are added to the spell list of your Spellcasting class.",
    raceVariantId: ClassicVariantsIds.markOfFindingOrk,
    extendedTable: [
      {
        "": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Faerie Fire, Longstrider",
            },
            {
              "Spell Level": "2nd",
              Spells: "Locate Animals or Plants, Locate Object",
            },
            {
              "Spell Level": "3rd",
              Spells: "Clairvoyance, Speak With Plants",
            },
            {
              "Spell Level": "4th",
              Spells: "Locate Creature, Divination",
            },
            {
              "Spell Level": "5th",
              Spells: "Commune with Nature",
            },
          ],
        },
      },
    ],
  },
  //halfling
  //lightfoot
  {
    name: "Naturally Stealthy",
    description:
      "You can attempt to hide even when you are only obscured by a creature that is at least one size larger than you.",
    raceVariantId: ClassicVariantsIds.lightfootHalfling,
  },
  //stout
  {
    name: "Stout Resilience",
    description:
      "You have advantage on saving throws against poison, and you have resistance to poison damage.",
    raceVariantId: ClassicVariantsIds.stoutHalfling,
  },
  //ghostwise
  {
    name: "Silent Speech",
    description:
      "You can speak telepathically to any creature within 30 feet of you. The creature understands you only if the two of you share a language. You can speak telepathically in this way to one creature at a time.",
    raceVariantId: ClassicVariantsIds.ghostwise,
  },
  //lotusden
  {
    name: "Children of the Woods",
    description:
      "You know the Druidcraft Cantrip. At 3rd level, you can cast the Entangle spell once per long rest. At 5th level, you can cast Spike Growth spell once per long rest. These spells don't require the material components normally required. Wisdom is your spellcasting ability for these spells.",
    raceVariantId: ClassicVariantsIds.lotusden,
  },
  {
    name: "Timberwalk",
    description:
      "Ability checks made to track you are at disadvantage and you can move through difficult terrain made of non-magical plants and overgrowth without expending extra movement.",
    raceVariantId: ClassicVariantsIds.lotusden,
  },
  //mark of hospitality
  {
    name: "Ever Hospitable",
    description:
      "Whenever you roll a Charisma (Persuasion) check or an ability check involving Brewer's Tools or Cook's Utensils, roll a d4 and add the number rolled to the total ability check.",
    raceVariantId: ClassicVariantsIds.markOfHospitality,
  },
  {
    name: "Innkeeper's Magic",
    description:
      "You know the Prestidigitation cantrip. You can also cast Purify Food and Drink and Unseen Servant with this trait. Once you cast either spell with this trait, you can't cast that spell again until you finish a long rest. Charisma is your Spellcasting Ability for these spells.",
    raceVariantId: ClassicVariantsIds.markOfHospitality,
  },
  {
    name: "Spells of the Mark",
    description:
      "If you have the Spellcasting or Pact Magic class feature, the spells on the Mark of Hospitality Spells table are added to the spell list of your Spellcasting class.",
    raceVariantId: ClassicVariantsIds.markOfHospitality,
    extendedTable: [
      {
        "": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Goodberry, Sleep",
            },
            {
              "Spell Level": "2nd",
              Spells: "Aid, Calm Emotions",
            },
            {
              "Spell Level": "3rd",
              Spells: "Create Food and Water, Leomund's Tiny Hut",
            },
            {
              "Spell Level": "4th",
              Spells: "Aura of Purity, Mordenkainen's Private Sanctum",
            },
            {
              "Spell Level": "5th",
              Spells: "Hallow",
            },
          ],
        },
      },
    ],
  },
  //mark of healing
  {
    name: "Medical Intuition",
    description:
      "Whenever you roll a Wisdom (Medicine) check or an ability check involving an Herbalism Kit, roll a d4 and add the number rolled to the total ability check.",
    raceVariantId: ClassicVariantsIds.markOfHealing,
  },
  {
    name: "Healing Touch",
    description:
      "You can cast the Cure Wounds spell with this trait. Beginning at 3rd level, you can also cast the Lesser Restoration spell with this trait. Once you cast either spell with this trait, you can't cast that spell again until you finish a long rest. Wisdom is your Spellcasting Ability for these spells.",
    raceVariantId: ClassicVariantsIds.markOfHealing,
  },
  {
    name: "Spells of the Mark",
    description:
      "If you have the Spellcasting or Pact Magic class feature, the spells on the Mark of Healing Spells table are added to the spell list of your Spellcasting class.",
    raceVariantId: ClassicVariantsIds.markOfHealing,
    extendedTable: [
      {
        "": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Cure Wounds, Healing Word",
            },
            {
              "Spell Level": "2nd",
              Spells: "Lesser Restoration, Prayer of Healing",
            },
            {
              "Spell Level": "3rd",
              Spells: "Aura of Vitality, Mass Healing Word",
            },
            {
              "Spell Level": "4th",
              Spells: "Aura of Purity, Aura of Life",
            },
            {
              "Spell Level": "5th",
              Spells: "Greater Restoration",
            },
          ],
        },
      },
    ],
  },
  //human
  //mark of finding
  {
    name: "Darkvision",
    description:
      "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    raceVariantId: ClassicVariantsIds.markOfFindingHuman,
  },
  {
    name: "Hunter's Intuition",
    description:
      "Whenever you make a Wisdom (Perception) or a Wisdom (Survival) check, you can roll a d4 and add the number rolled to the total ability check.",
    raceVariantId: ClassicVariantsIds.markOfFindingHuman,
  },
  {
    name: "Finder's Magic",
    description:
      "You can cast the Hunter's Mark spell with this trait. Starting at 3rd level, you can also cast the Locate Object spell with it. Once you cast either spell with this trait, you can't cast that spell again until you finish a Long Rest. Wisdom is your Spellcasting Ability for these spells.",
    raceVariantId: ClassicVariantsIds.markOfFindingHuman,
  },
  {
    name: "Spells of the Mark",
    description:
      "If you have the Spellcasting or Pact Magic class feature, the spells on the Mark of Finding Spells table are added to the spell list of your Spellcasting class.",
    raceVariantId: ClassicVariantsIds.markOfFindingHuman,
    extendedTable: [
      {
        "": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Faerie Fire, Longstrider",
            },
            {
              "Spell Level": "2nd",
              Spells: "Locate Animals or Plants, Locate Object",
            },
            {
              "Spell Level": "3rd",
              Spells: "Clairvoyance, Speak With Plants",
            },
            {
              "Spell Level": "4th",
              Spells: "Locate Creature, Divination",
            },
            {
              "Spell Level": "5th",
              Spells: "Commune with Nature",
            },
          ],
        },
      },
    ],
  },
  //mark of handling
  {
    name: "Wild Intuition",
    description:
      "Whenever you make a Wisdom (Animal Handling) or a Intelligence (Nature) check, you can roll a d4 and add the number rolled to the total ability check.",
    raceVariantId: ClassicVariantsIds.markOfHandling,
  },
  {
    name: "Primal Connection",
    description:
      "You can cast the Animal Friendship spell and the Speak With Animals with this trait, requiring no material components. Once you cast either spell with this trait, you can't cast that spell again until you finish a Long Rest. Wisdom is your Spellcasting Ability for these spells.",
    raceVariantId: ClassicVariantsIds.markOfHandling,
  },
  {
    name: "The Bigger They Are",
    description:
      "Starting at 3rd level, you can target a Beast or a Monstrosity when you cast Animal Friendship or Speak With Animals, provided that the creature's intelligence is 3 or lower.",
    raceVariantId: ClassicVariantsIds.markOfHandling,
  },

  {
    name: "Spells of the Mark",
    description:
      "If you have the Spellcasting or Pact Magic class feature, the spells on the Mark of Handling Spells table are added to the spell list of your Spellcasting class.",
    raceVariantId: ClassicVariantsIds.markOfHandling,
    extendedTable: [
      {
        "": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Animal Friendship, Speak with Animals",
            },
            {
              "Spell Level": "2nd",
              Spells: "Beast Sense, Locate Animals or Plants",
            },
            {
              "Spell Level": "3rd",
              Spells: "Conjure Animals, Speak with Plants",
            },
            {
              "Spell Level": "4th",
              Spells: "Dominate Beast, Giant Insect",
            },
            {
              "Spell Level": "5th",
              Spells: "Awaken",
            },
          ],
        },
      },
    ],
  },

  //mark of making
  {
    name: "Artisan's Intuition",
    description:
      "Whenever you make an Intelligence (Arcana) or an Ability Check involving Artisan's Tools, you can roll a d4 and add the number rolled to the total ability check.",
    raceVariantId: ClassicVariantsIds.markOfMaking,
  },
  {
    name: "Artisan's Gift",
    description:
      "You gain proficiency in one type of Artisan's Tools of your choice.",
    raceVariantId: ClassicVariantsIds.markOfMaking,
  },
  {
    name: "Spellsmith",
    description:
      "You learn the Mending cantrip. You can also cast the Magic Weapon spell with this trait. When you do so, the spell lasts for 1 hour and doesn't require concentration. Once you cast this spell with this trait, you can't cast that spell again until you finish a Long Rest. Intelligence is your Spellcasting Ability for these spells.",
    raceVariantId: ClassicVariantsIds.markOfMaking,
  },
  {
    name: "Spells of the Mark",
    description:
      "If you have the Spellcasting or Pact Magic class feature, the spells on the Mark of Making Spells table are added to the spell list of your Spellcasting class.",
    raceVariantId: ClassicVariantsIds.markOfMaking,
    extendedTable: [
      {
        "": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Identify, Tenser's Floating Disk",
            },
            {
              "Spell Level": "2nd",
              Spells: "Continual Flame, Magic Weapon",
            },
            {
              "Spell Level": "3rd",
              Spells: "Conjure Barrage, Elemental Weapon",
            },
            {
              "Spell Level": "4th",
              Spells: "Fabricate, Stone Shape",
            },
            {
              "Spell Level": "5th",
              Spells: "Creation",
            },
          ],
        },
      },
    ],
  },
  //mark of passage
  {
    name: "Courier's Speed",
    description: "Your base walking speed increases to 35 feet.",
    raceVariantId: ClassicVariantsIds.markOfPassage,
  },
  {
    name: "Intuitive Motion",
    description:
      "Whenever you make an Dexterity (Acrobatics) or an Ability Check involving operating or maintaining a Land Vehicle, you can roll a d4 and add the number rolled to the total ability check.",
    raceVariantId: ClassicVariantsIds.markOfPassage,
  },
  {
    name: "Magical Passage",
    description:
      "You can cast the Misty Step spell with this trait. Once you cast this spell with this trait, you can't cast that spell again until you finish a Long Rest. Dexterity is your Spellcasting Ability for these spells.",
    raceVariantId: ClassicVariantsIds.markOfPassage,
  },
  {
    name: "Spells of the Mark",
    description:
      "If you have the Spellcasting or Pact Magic class feature, the spells on the Mark of Passage Spells table are added to the spell list of your Spellcasting class.",
    raceVariantId: ClassicVariantsIds.markOfPassage,
    extendedTable: [
      {
        "": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Expeditious Retreat, Jump",
            },
            {
              "Spell Level": "2nd",
              Spells: "Misty Step, Pass Without Trace",
            },
            {
              "Spell Level": "3rd",
              Spells: "Blink, Phantom Steed",
            },
            {
              "Spell Level": "4th",
              Spells: "Dimension Door, Freedom of Movement",
            },
            {
              "Spell Level": "5th",
              Spells: "Teleportation Circle",
            },
          ],
        },
      },
    ],
  },
  //mark of sentinel
  {
    name: "Sentinel's Intuition",
    description:
      "Whenever you make a Wisdom (Insight) or a Wisdom (Perception) check, you can roll a d4 and add the number rolled to the total ability check.",
    raceVariantId: ClassicVariantsIds.markOfSentinel,
  },
  {
    name: "Guardian's Shield",
    description:
      "You can cast the Shield spell with this trait. Once you cast this spell with this trait, you can't cast that spell again until you finish a Long Rest. Wisdom is your Spellcasting Ability for these spells.",
    raceVariantId: ClassicVariantsIds.markOfSentinel,
  },
  {
    name: "Vigilant Guardian",
    description:
      "Once a creature that you can see within 5ft of you is hit with an attack roll, you can use your reaction to swap places with the creature, and you are hit by the attack instead. Once you use this trait, you can't do so again until you finish a long rest.",
    raceVariantId: ClassicVariantsIds.markOfSentinel,
  },
  {
    name: "Spells of the Mark",
    description:
      "If you have the Spellcasting or Pact Magic class feature, the spells on the Mark of Sentinel Spells table are added to the spell list of your Spellcasting class.",
    raceVariantId: ClassicVariantsIds.markOfSentinel,
    extendedTable: [
      {
        "": {
          headers: ["Spell Level", "Spells"],
          data: [
            {
              "Spell Level": "1st",
              Spells: "Compelled Duel, Shield of Faith",
            },
            {
              "Spell Level": "2nd",
              Spells: "Warding Bond, Zone of Truth",
            },
            {
              "Spell Level": "3rd",
              Spells: "Counterspell, Protection From Energy",
            },
            {
              "Spell Level": "4th",
              Spells: "Death Ward, Guardian of Faith",
            },
            {
              "Spell Level": "5th",
              Spells: "Bigby's Hand",
            },
          ],
        },
      },
    ],
  },

  //tiefling
  //asmodeus
  {
    name: "Infernal Legacy",
    description:
      "You know the Thaumaturgy cantrip. Once you reach 3rd level, you can cast the Hellish Rebuke spell once as a 2nd-level spell. Once you reach 5th level, you can also cast the Darkness spell once. You must finish a long rest to cast these spells again with this trait. Charisma is your spellcasting ability for these spells.",
    raceVariantId: ClassicVariantsIds.asmodeus,
  },
  //baalzebul
  {
    name: "Legacy of Maladomini",
    description:
      "You know the Thaumaturgy cantrip. Once you reach 3rd level, you can cast the Ray of Sickness spell once as a 2nd-level spell. Once you reach 5th level, you can also cast the Crown of Madness spell once. You must finish a long rest to cast these spells again with this trait. Charisma is your spellcasting ability for these spells.",
    raceVariantId: ClassicVariantsIds.baalzebul,
  },
  //dispater
  {
    name: "Legacy of Dis",
    description:
      "You know the Thaumaturgy cantrip. Once you reach 3rd level, you can cast the Disguise Self spell once as a 2nd-level spell. Once you reach 5th level, you can also cast the Detect Thoughts spell once. You must finish a long rest to cast these spells again with this trait. Charisma is your spellcasting ability for these spells.",
    raceVariantId: ClassicVariantsIds.dispater,
  },
  //fierna
  {
    name: "Legacy of Phlegethos",
    description:
      "You know the Friends cantrip. Once you reach 3rd level, you can cast the Charm Person spell once as a 2nd-level spell. Once you reach 5th level, you can also cast the Suggestion spell once. You must finish a long rest to cast these spells again with this trait. Charisma is your spellcasting ability for these spells.",
    raceVariantId: ClassicVariantsIds.fierna,
  },
  //glasya
  {
    name: "Legacy of Malbolge",
    description:
      "You know the Minor Illusion cantrip. Once you reach 3rd level, you can cast the Disguise Self spell once as a 2nd-level spell. Once you reach 5th level, you can also cast the Invisibility spell once. You must finish a long rest to cast these spells again with this trait. Charisma is your spellcasting ability for these spells.",
    raceVariantId: ClassicVariantsIds.glasya,
  },
  //levistus
  {
    name: "Legacy of Stygia",
    description:
      "You know the Ray of Frost cantrip. Once you reach 3rd level, you can cast the Armor of Agathys spell once as a 2nd-level spell. Once you reach 5th level, you can also cast the Darkness spell once. You must finish a long rest to cast these spells again with this trait. Charisma is your spellcasting ability for these spells.",
    raceVariantId: ClassicVariantsIds.levistus,
  },
  //mammon
  {
    name: "Legacy of Minauros",
    description:
      "You know the Mage Hand cantrip. Once you reach 3rd level, you can cast the Tenser's Floating Disk spell once as a 2nd-level spell. Once you reach 5th level, you can also cast the Arcane Lock spell once. You must finish a long rest to cast these spells again with this trait. Charisma is your spellcasting ability for these spells.",
    raceVariantId: ClassicVariantsIds.mammon,
  },
  //mephistopheles
  {
    name: "Legacy of Cania",
    description:
      "You know the Mage Hand cantrip. Once you reach 3rd level, you can cast the Burning Hands spell once as a 2nd-level spell. Once you reach 5th level, you can also cast the Flame Blade spell once. You must finish a long rest to cast these spells again with this trait. Charisma is your spellcasting ability for these spells.",
    raceVariantId: ClassicVariantsIds.mephistopheles,
  },
  //zariel
  {
    name: "Legacy of Avernus",
    description:
      "You know the Thaumaturgy cantrip. Once you reach 3rd level, you can cast the Searing Smite spell once as a 2nd-level spell. Once you reach 5th level, you can also cast the Branding Smite spell once. You must finish a long rest to cast these spells again with this trait. Charisma is your spellcasting ability for these spells.",
    raceVariantId: ClassicVariantsIds.zariel,
  },

  //   //chromatic
  //   {
  //     name: "Chromatic Ancestry",
  //     description:
  //       "You trace your ancestry to a chromatic dragon, granting you a special magical affinity. Choose one type of dragon from the Chromatic Ancestry table. This determines the damage type for your other traits as shown in the table.",
  //     extendedTable: [
  //       {
  //         "": {
  //           headers: ["Dragon", "Damage Type"],
  //           data: [
  //             {
  //               Dragon: "Black",
  //               "Damage Type": "Acid",
  //             },
  //             {
  //               Dragon: "Blue",
  //               "Damage Type": "Lightning",
  //             },
  //             {
  //               Dragon: "Green",
  //               "Damage Type": "Poison",
  //             },
  //             {
  //               Dragon: "Red",
  //               "Damage Type": "Fire",
  //             },
  //             {
  //               Dragon: "White",
  //               "Damage Type": "Cold",
  //             },
  //           ],
  //         },
  //       },
  //     ],
  //     raceVariantId: ClassicVariantsIds.chromaticDragonborn,
  //   },
  //   {
  //     name: "Breath Weapon",
  //     description:
  //       "When you take the Attack action on your turn, you can replace one of your attacks with an exhalation of magical energy in a 30-foot line that is 5 feet wide. Each creature in that area must make a Dexterity saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). \n\nOn a failed save, the creature takes 1d10 damage of the type associated with your Chromatic Ancestry. On a successful save, it takes half as much damage.\n\n This damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).\n\n You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
  //     raceVariantId: ClassicVariantsIds.chromaticDragonborn,
  //   },
  //   {
  //     name: "Damage Resistance",
  //     description:
  //       "You have resistance to the damage type associated with your Chromatic Ancestry.",
  //     raceVariantId: ClassicVariantsIds.chromaticDragonborn,
  //   },
  //   {
  //     name: "Chromatic Warding",
  //     description:
  //       "Starting at 5th level, as an action, you can channel your draconic energy to protect yourself. For 1 minute, you become immune to the damage type associated with your Chromatic Ancestry. Once you use this trait, you can’t do so again until you finish a long rest.",
  //     raceVariantId: ClassicVariantsIds.chromaticDragonborn,
  //   },
  //   //metallic
  //   {
  //     name: "Metallic Ancestry",
  //     description:
  //       "You trace your ancestry to a metallic dragon, granting you a special magical affinity. Choose one type of dragon from the Metallic Ancestry table. This determines the damage type for your other traits as shown in the table.",
  //     extendedTable: [
  //       {
  //         "": {
  //           headers: ["Dragon", "Damage Type"],
  //           data: [
  //             {
  //               Dragon: "Brass",
  //               "Damage Type": "Fire",
  //             },
  //             {
  //               Dragon: "Bronze",
  //               "Damage Type": "Lightning",
  //             },
  //             {
  //               Dragon: "Copper",
  //               "Damage Type": "Acid",
  //             },
  //             {
  //               Dragon: "Gold",
  //               "Damage Type": "Fire",
  //             },
  //             {
  //               Dragon: "Silver",
  //               "Damage Type": "Cold",
  //             },
  //           ],
  //         },
  //       },
  //     ],
  //     raceVariantId: ClassicVariantsIds.metallicDragonborn,
  //   },
  //   {
  //     name: "Breath Weapon",
  //     description:
  //       "When you take the Attack action on your turn, you can replace one of your attacks with an exhalation of magical energy in a 30-foot line that is 5 feet wide. Each creature in that area must make a Dexterity saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). \n\nOn a failed save, the creature takes 1d10 damage of the type associated with your Metallic Ancestry. On a successful save, it takes half as much damage.\n\n This damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).\n\n You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
  //     raceVariantId: ClassicVariantsIds.metallicDragonborn,
  //   },
  //   {
  //     name: "Damage Resistance",
  //     description:
  //       "You have resistance to the damage type associated with your Metallic Ancestry.",
  //     raceVariantId: ClassicVariantsIds.metallicDragonborn,
  //   },
  //   {
  //     name: "Metallic Breath Weapon",
  //     description:
  //       "At 5th level, you gain a second breath weapon. When you take the Attack action on your turn, you can replace one of your attacks with an exhalation in a 15-foot cone. The save DC for this breath is 8 + your Constitution modifier + your proficiency bonus. Whenever you use this trait, choose one: ",
  //     raceVariantId: ClassicVariantsIds.metallicDragonborn,
  //     extendedTable: [
  //       {
  //         "": {
  //           headers: ["Name", "Description"],
  //           data: [
  //             {
  //               Name: "Enervating Breath",
  //               Description:
  //                 "Each creature in the cone must succeed on a Constitution saving throw or become incapacitated until the start of your next turn.",
  //             },
  //             {
  //               Name: "Repulsion Breath",
  //               Description:
  //                 "Each creature in the cone must succeed on a Strength saving throw or be pushed 20 feet away from you and be knocked prone.",
  //             },
  //           ],
  //         },
  //       },
  //     ],
  //     postTableData:
  //       "Once you use your Metallic Breath Weapon, you can’t do so again until you finish a long rest.",
  //   },
  //   //gem
  //   {
  //     raceVariantId: ClassicVariantsIds.gemDragonborn,
  //     name: "Gem Ancestry",
  //     description:
  //       "You trace your ancestry to a Gem dragon, granting you a special magical affinity. Choose one type of dragon from the Gem Ancestry table. This determines the damage type for your other traits as shown in the table.",
  //     extendedTable: [
  //       {
  //         "": {
  //           headers: ["Dragon", "Damage Type"],
  //           data: [
  //             {
  //               Dragon: "Amethyst",
  //               "Damage Type": "Force",
  //             },
  //             {
  //               Dragon: "Crystal",
  //               "Damage Type": "Radiant",
  //             },
  //             {
  //               Dragon: "Emerald",
  //               "Damage Type": "Psychic",
  //             },
  //             {
  //               Dragon: "Sapphire",
  //               "Damage Type": "Thunder",
  //             },
  //             {
  //               Dragon: "Topaz",
  //               "Damage Type": "Necrotic",
  //             },
  //           ],
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     raceVariantId: ClassicVariantsIds.gemDragonborn,
  //     name: "Breath Weapon",
  //     description:
  //       "When you take the Attack action on your turn, you can replace one of your attacks with an exhalation of magical energy in a 30-foot line that is 5 feet wide. Each creature in that area must make a Dexterity saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). \n\nOn a failed save, the creature takes 1d10 damage of the type associated with your Gem Ancestry. On a successful save, it takes half as much damage.\n\n This damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).\n\n You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
  //   },
  //   {
  //     name: "Draconic Resistance",
  //     description:
  //       "You have resistance to the damage type associated with your Gem Ancestry.",
  //     raceVariantId: ClassicVariantsIds.gemDragonborn,
  //   },
  //   {
  //     name: "Psionic Mind",
  //     description:
  //       "You can telepathically speak to any creature you can see within 30 feet of you. You don’t need to share a language with the creature, but the creature must be able to understand at least one language.",
  //     raceVariantId: ClassicVariantsIds.gemDragonborn,
  //   },
  //   {
  //     name: "Gem Flight",
  //     description:
  //       "Starting at 5th level, you can use a bonus action to manifest spectral wings on your body. These wings last for 1 minute. For the duration, you gain a flying speed equal to your walking speed and can hover. Once you use this trait, you can’t do so again until you finish a long rest.",
  //     raceVariantId: ClassicVariantsIds.gemDragonborn,
  //   },
  //hill dwarf
];

export default ClassicTraits;
