import { Currency } from "@/lib/utils/types/types";
import { Ability, ItemTypes, Prisma, Rarity } from "@prisma/client";
import { Unit } from "@/lib/utils/types/types";
import { itemIds } from "../Items/ItemIds";

import { weaponIds } from "./Weapons/Weapons.seed";
import { armorIds } from "./Armor/Armor.seed";
import { toolIds } from "./Tools/tools.seed";
import { equipmentPackIds } from "./EquipmentPack/EquipmentPack.seed";
import { spellIds, SpellSeed } from "../Spells/spells.seed";
import numberArray from "@/lib/utils/numberArray";
const { lb, oz, pint, quart, gal } = Unit;
const { gp, sp, cp, pp, ep } = Currency;

export const ItemsSeed: Prisma.ItemCreateManyInput[] = [
  {
    id: 1,
    name: "Abacus",
    cost: { quantity: 2, unit: gp },
    weight: { quantity: 2, unit: lb },
    flavorText:
      "An abacus is a counting tool that consists of beads strung on wires set in a frame. It is used to perform arithmetic.",
    description:
      "An abacus is a counting tool that consists of beads strung on wires set in a frame. It is used to perform arithmetic.",
    rarity: Rarity.COMMON,
  },
  {
    id: 2,
    name: "Bedroll",
    cost: { quantity: 1, unit: gp },
    weight: { quantity: 2, unit: lb },
    flavorText:
      "A bedroll consists of a cloth sack stuffed with cloth padding that serves as a simple sleeping surface.",
    description:
      "A bedroll consists of a cloth sack stuffed with cloth padding that serves as a simple sleeping surface.",
    rarity: Rarity.COMMON,
  },
  {
    id: 3,
    name: "Bell",
    cost: { quantity: 1, unit: gp },

    flavorText:
      "A bell is a hollow metal object that makes a ringing sound when struck.",
    description:
      "A bell is a hollow metal object that makes a ringing sound when struck.",
    rarity: Rarity.COMMON,
  },
  {
    id: 4,
    name: "Blanket",
    cost: { quantity: 5, unit: sp },
    weight: { quantity: 5, unit: lb },
    flavorText:
      "A blanket is a large piece of cloth that is used to keep warm.",
    description:
      "A blanket is a large piece of cloth that is used to keep warm.",
    rarity: Rarity.COMMON,
  },
  {
    id: 5,
    name: "Block and Tackle",
    cost: { quantity: 1, unit: gp },
    weight: { quantity: 5, unit: lb },
    flavorText:
      "A block and tackle is a set of pulleys and ropes used to lift heavy objects.",
    description:
      "A set of pulleys with a cable threaded through them and a hook to attach to objects, a block and tackle allows you to hoist up to four times the weight you can normally lift.",
    features: [
      {
        name: "Block and Tackle",
        description:
          "Set and use your block and tackle to hoist up to four times the weight you can normally lift. Work with your DM to determine how you set up and use the block and tackle to lift a specific weight.",
      },
    ],

    rarity: Rarity.COMMON,
  },
  {
    id: 6,
    name: "Book",
    cost: { quantity: 25, unit: gp },
    weight: { quantity: 5, unit: lb },
    flavorText:
      "A book is a collection of written or printed pages bound together.",
    description:
      "A book might contain poetry, historical accounts, information pertaining to a particular field of lore, diagrams and notes on gnomish contraptions, or just about anything else that can be represented sing text or pictures. A book of spells is a spellbook.",
    rarity: Rarity.COMMON,
  },
  {
    id: 7,
    name: "Candle",
    cost: { quantity: 1, unit: cp },
    description:
      "For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for another 5 feet.",
    flavorText:
      "For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for another 5 feet.",
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Light Candle",
        description:
          "For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for another 5 feet.",
      },
    ],
  },
  {
    id: 8,
    name: "Chain (10 feet)",
    cost: { quantity: 5, unit: gp },
    weight: { quantity: 10, unit: lb },
    flavorText:
      "A chain has 10 hit points. It can be burst with a successful DC 20 Strength check.",
    description:
      "A chain has 10 hit points. It can be burst with a successful DC 20 Strength check.",
    rarity: Rarity.COMMON,
  },
  {
    id: 9,
    name: "Chalk (1 piece)",
    cost: { quantity: 1, unit: cp },
    description:
      "A piece of chalk can be used to write on most surfaces, including stone, metal, and wood.",
    flavorText: "A piece of chalk can be used to write on most surfaces.",
    rarity: Rarity.COMMON,
  },
  {
    id: 10,
    name: "Component Pouch",
    cost: { quantity: 25, unit: gp },
    weight: { quantity: 2, unit: lb },
    flavorText:
      "A component pouch is a small, watertight leather belt pouch that has compartments to hold all the material components and other special items you need to cast your spells.",
    description:
      "A component pouch is a small, watertight leather belt pouch that has compartments to hold all the material components and other special items you need to cast your spells.",
    types: [ItemTypes.COMPONENT_POUCH],
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Component Storage",
        description:
          "The pouch has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell's description). \n\nWhile the pouch is not a spellcasting focus, it can be used in place of a spellcasting focus for the purpose of casting spells with material components.",
      },
    ],
  },
  {
    id: 11,
    name: "Fishing Tackle",
    description:
      "This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting.",
    cost: { quantity: 1, unit: gp },
    weight: { quantity: 4, unit: lb },
    flavorText:
      "This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting.",
    rarity: Rarity.COMMON,
  },
  {
    id: 12,
    name: "Grappling Hook",
    description: "Useful for climbing up or down walls.",
    cost: { quantity: 2, unit: gp },
    weight: { quantity: 4, unit: lb },
    flavorText: "Useful for climbing up or down walls.",
    rarity: Rarity.COMMON,
  },
  {
    id: 13,
    name: "Hammer",
    description:
      "A hammer is a tool used to drive nails into wood or other materials.",
    cost: { quantity: 1, unit: gp },
    weight: { quantity: 3, unit: lb },
    flavorText:
      "A hammer is a tool used to drive nails into wood or other materials.",
    rarity: Rarity.COMMON,
  },
  {
    id: 14,
    name: "Hourglass",
    description: "An hourglass is a device used to measure time.",
    cost: { quantity: 25, unit: gp },
    weight: { quantity: 1, unit: lb },
    flavorText: "An hourglass is a device used to measure time.",
    rarity: Rarity.COMMON,
  },
  {
    id: 15,
    name: "Ink (1 ounce bottle)",
    description:
      "Ink is used to write on paper or parchment with a quill or pen.",
    cost: { quantity: 10, unit: gp },
    flavorText:
      "Ink is used to write on paper or parchment with a quill or pen.",
    rarity: Rarity.COMMON,
  },
  {
    id: 16,
    name: "Ink Pen",
    description:
      "An ink pen is a writing instrument used to write on paper or parchment.",
    cost: { quantity: 2, unit: cp },
    flavorText:
      "An ink pen is a writing instrument used to write on paper or parchment.",
    rarity: Rarity.COMMON,
  },
  {
    id: 17,
    name: "Ladder (10 foot)",
    description: "A ladder is used to climb up or down walls.",
    cost: { quantity: 1, unit: sp },
    weight: { quantity: 25, unit: lb },
    flavorText: "A ladder is used to climb up or down walls.",
    rarity: Rarity.COMMON,
  },
  {
    id: 18,
    name: "Lock",
    description:
      "A lock is a mechanical device that secures a door, chest, or other object.\n\nA key is provided with the lock.",
    cost: { quantity: 10, unit: gp },
    weight: { quantity: 1, unit: lb },
    flavorText:
      "A lock is a mechanical device that secures a door, chest, or other object.",
    features: [
      {
        name: "Pick Lock",
        description:
          "Without the key, a creature proficient with thieves' tools can pick your lock with a successful DC 15 Dexterity check. Your DM may decide that better locks are available for higher prices.",
      },
    ],
    rarity: Rarity.COMMON,
  },
  {
    id: 19,
    name: "Magnifying Glass",
    description:
      "This lens allows a closer look at small objects. It is also useful as a substitute or flint and steel when starting fires.",
    cost: { quantity: 100, unit: gp },
    flavorText:
      "This lens allows a closer look at small objects. It is also useful as a substitute or flint and steel when starting fires.",
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Light Fire",
        description:
          "Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite. A magnifying glass grants advantage on any ability check made to appraise or inspect an item that is small or highly detailed.",
        effect: {
          abilityRollAdvantages: [
            {
              ability: {
                default: Object.values(Ability) as Ability[],
              },
              situation:
                "Appraise or inspect an item that is small or highly detailed.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 20,
    name: "Manacles",
    description:
      "Iron Manacles that can bind a Small or Medium creature. Manacles have 15 hit points.",
    cost: { quantity: 2, unit: gp },
    weight: { quantity: 6, unit: lb },
    flavorText: "Iron Manacles that can bind a Small or Medium creature.",
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Bind",
        description:
          "These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check. Each set of manacles comes with one key. Without the key, a creature proficient with thieves’ tools can pick the manacles’ lock with a successful DC 15 Dexterity check.",
      },
    ],
  },
  {
    id: 21,
    name: "Mess Kit",
    description:
      "This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl.",
    cost: { quantity: 2, unit: sp },
    weight: { quantity: 1, unit: lb },
    flavorText:
      "This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl.",
    rarity: Rarity.COMMON,
  },
  {
    id: 22,
    name: "Miner's Pick",
    description:
      "A miner's pick is a tool used to break up rock or other hard materials.",
    cost: { quantity: 2, unit: gp },
    weight: { quantity: 10, unit: lb },
    flavorText:
      "A miner's pick is a tool used to break up rock or other hard materials.",
    rarity: Rarity.COMMON,
  },
  {
    id: 23,
    name: "Paper",
    description: "Paper is a thin material that is used to write on.",
    cost: { quantity: 2, unit: sp },
    flavorText: "Paper is a thin material  that is used to write on.",
    rarity: Rarity.COMMON,
  },
  {
    id: 24,
    name: "Parchment",
    description: "Parchment is a thin material that is used to write on.",
    cost: { quantity: 1, unit: gp },
    flavorText: "Parchment is a thin material that is used to write on.",
    rarity: Rarity.COMMON,
  },
  {
    id: 25,
    name: "Perfume (vial)",
    description:
      "Perfume is a fragrant liquid made from essential oils and alcohol.",
    cost: { quantity: 5, unit: gp },
    flavorText:
      "Perfume is a fragrant liquid made from essential oils and alcohol.",
    rarity: Rarity.COMMON,
  },
  {
    id: 26,
    name: "Piton",
    description: "A piton is a metal spike used to secure ropes.",
    cost: { quantity: 5, unit: cp },
    weight: { quantity: 0.25, unit: lb },
    flavorText: "A piton is a metal spike used to secure ropes.",
    rarity: Rarity.COMMON,
  },
  {
    id: 27,
    name: "Pole (10 foot)",
    description: "A pole is a long, slender piece of wood or metal.",
    cost: { quantity: 5, unit: cp },
    weight: { quantity: 7, unit: lb },
    flavorText: "A pole is a long, slender piece of wood or metal.",
    rarity: Rarity.COMMON,
  },
  {
    id: 28,
    name: "Portable Ram",
    description: "You can use a portable ram to break down doors. ",
    cost: { quantity: 4, unit: gp },
    weight: { quantity: 35, unit: lb },
    flavorText: "You can use a portable ram to break down doors.",
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Ram",
        description:
          "You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check.",
        effect: {
          abilityRollAdvantages: [
            {
              ability: {
                default: [Ability.STR],
              },
              situation:
                "Using Portable Ram to break down doors and another character is helping you.",
            },
          ],
          abilityRollBonuses: [
            {
              ability: {
                default: [Ability.STR],
              },
              bonus: 4,
              situation: "Using Portable Ram to break down doors.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 29,
    name: "Rations (1 day)",
    description:
      "Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts.",
    cost: { quantity: 5, unit: sp },
    weight: { quantity: 2, unit: lb },
    flavorText:
      "Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts.",
    rarity: Rarity.COMMON,
  },
  {
    id: 30,
    name: "Hempen Rope (50 feet)",
    description:
      "Rope has 2 hit points and can be burst with a DC 17 Strength check.",
    cost: { quantity: 1, unit: gp },
    weight: { quantity: 10, unit: lb },
    flavorText:
      "Rope has 2 hit points and can be burst with a DC 17 Strength check.",
    rarity: Rarity.COMMON,
  },
  {
    id: 31,
    name: "Silken Rope (50 feet)",
    description:
      "Rope has 2 hit points and can be burst with a DC 17 Strength check.",
    cost: { quantity: 10, unit: gp },
    weight: { quantity: 5, unit: lb },
    flavorText:
      "Rope has 2 hit points and can be burst with a DC 17 Strength check.",
    rarity: Rarity.COMMON,
  },

  {
    id: 33,
    name: "Shovel",
    description:
      "A shovel is a tool used to dig holes or move dirt or other materials.",
    cost: { quantity: 2, unit: gp },
    weight: { quantity: 5, unit: lb },
    flavorText:
      "A shovel is a tool used to dig holes or move dirt or other materials.",
    rarity: Rarity.COMMON,
  },
  {
    id: 34,
    name: "Signal Whistle",
    description: "A signal whistle is a small metal whistle.",
    cost: { quantity: 5, unit: cp },
    flavorText: "A signal whistle is a small metal whistle.",
    rarity: Rarity.COMMON,
  },
  {
    id: 35,
    name: "Sealing Wax",
    description: "Sealing wax is used to seal letters and other documents.",
    cost: { quantity: 5, unit: sp },
    flavorText: "Sealing wax is used to seal letters and other documents.",
    rarity: Rarity.COMMON,
  },
  {
    id: 36,
    name: "Signet Ring",
    description:
      "A signet ring is a ring bearing a family crest or other symbol.",
    cost: { quantity: 5, unit: gp },
    flavorText:
      "A signet ring is a ring bearing a family crest or other symbol.",
    rarity: Rarity.COMMON,
  },
  {
    id: 37,
    name: "Sledgehammer",
    description: "A sledgehammer is a large, heavy hammer.",
    cost: { quantity: 2, unit: gp },
    weight: { quantity: 10, unit: lb },
    flavorText: "A sledgehammer is a large, heavy hammer.",
    rarity: Rarity.COMMON,
  },
  {
    id: 38,
    name: "Spellbook",
    description:
      "Essential for wizards, a spellbook is a leather-bound tome with 100 blank vellum pages suitable for recording spells.",
    cost: { quantity: 50, unit: gp },
    weight: { quantity: 3, unit: lb },
    flavorText:
      "Essential for wizards, a spellbook is a leather-bound tome with 100 blank vellum pages suitable for recording spells.",
    rarity: Rarity.COMMON,
  },
  {
    id: 39,
    name: "Iron Spikes (10)",
    description:
      "Iron spikes are driven into wood or other materials with a hammer.",
    cost: { quantity: 1, unit: gp },
    weight: { quantity: 5, unit: lb },
    flavorText:
      "Iron spikes are driven into wood or other materials with a hammer.",
    rarity: Rarity.COMMON,
  },
  {
    id: 40,
    name: "Spyglass",
    description:
      "A spyglass is a small, handheld telescope. Objects viewed through a spyglass are magnified to twice their size.",
    cost: { quantity: 1000, unit: gp },
    weight: { quantity: 1, unit: lb },
    flavorText:
      "A spyglass is a small, handheld telescope. Objects viewed through a spyglass are magnified to twice their size.",
    rarity: Rarity.COMMON,
  },
  {
    id: 41,
    name: "Two Person Tent",
    description: "A small tent that can accommodate two people.",
    cost: { quantity: 2, unit: gp },
    weight: { quantity: 20, unit: lb },
    flavorText: "A small tent that can accommodate two people.",
    rarity: Rarity.COMMON,
  },
  {
    id: 42,
    name: "Whetstone",
    description: "A whetstone is a stone used to sharpen blades.",
    cost: { quantity: 1, unit: cp },
    weight: { quantity: 1, unit: lb },
    flavorText: "A whetstone is a stone used to sharpen blades.",
    rarity: Rarity.COMMON,
  },
  {
    id: 43,
    name: "Acid (vial)",
    description:
      "Acid is a corrosive substance that can dissolve materials and used offensively.",
    cost: { quantity: 25, unit: gp },
    weight: { quantity: 1, unit: lb },
    flavorText:
      "Acid is a corrosive substance that can dissolve materials and used offensively.",
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Use Acid",
        description:
          "As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon.\n\n On a hit, the target takes 2d6 acid damage.",
      },
    ],
  },
  {
    id: 44,
    name: "Alchemist's Fire (flask)",
    description:
      "Alchemist's fire is a sticky, adhesive substance that ignites when exposed to air.",
    cost: { quantity: 25, unit: gp },
    weight: { quantity: 1, unit: lb },
    flavorText:
      "Alchemist's fire is a sticky, adhesive substance that ignites when exposed to air.",
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Use Alchemist's Fire",
        description:
          "As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon.\n\nOn a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames.",
      },
    ],
  },
  {
    id: 45,
    name: "Antitoxin (vial)",
    description:
      "Antitoxin is a substance that can counteract a poison's effects.",
    cost: { quantity: 50, unit: gp },
    flavorText:
      "Antitoxin is a substance that can counteract a poison's effects.",
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Use Antitoxin",
        description:
          "A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefits to undead or constructs.",
      },
    ],
  },
  {
    id: 46,
    name: "Ball Bearings (bag of 1000)",
    description:
      "Ball bearings are small, metal spheres that can be scattered on the ground to make an area difficult to traverse.",
    cost: { quantity: 1, unit: gp },
    weight: { quantity: 2, unit: lb },
    flavorText:
      "Ball bearings are small, metal spheres that can be scattered on the ground to make an area difficult to traverse.",
    features: [
      {
        name: "Scatter Ball Bearings",
        description:
          "As an action, you can spill these tiny balls from their pouch to cover a level area 10 feet square. A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone. A creature moving through the area at half speed doesn't need to make the saving throw.",
      },
    ],
    rarity: Rarity.COMMON,
  },
  {
    id: 47,
    name: "Caltrops (bag of 20)",
    description:
      "Caltrops are small, metal spikes that can be scattered on the ground to make an area difficult to traverse.",
    cost: { quantity: 1, unit: gp },
    weight: { quantity: 2, unit: lb },
    flavorText:
      "Caltrops are small, metal spikes that can be scattered on the ground to make an area difficult to traverse.",
    features: [
      {
        name: "Scatter Caltrops",
        description:
          "As an action, you can spread a single bag of caltrops to cover a 5-foot-square area. Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving and take 1 piercing damage. Until the creature regains at least 1 hit point, its walking speed is reduced by 10 feet. A creature moving through the area at half speed doesn't need to make the saving throw.",
      },
    ],
    rarity: Rarity.COMMON,
  },
  {
    id: 48,
    name: "Climbing Kit",
    description:
      "A climbing kit includes special pitons, boot tips, gloves, and a harness.",
    cost: { quantity: 25, unit: gp },
    weight: { quantity: 12, unit: lb },
    flavorText:
      "A climbing kit includes special pitons, boot tips, gloves, and a harness.",
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Climbing Kit",
        description:
          "A climber's kit includes special pitons, boot tips, gloves, and a harness. You can use the climber's kit as an action to anchor yourself; when you do, you can't fall more than 25 feet from the point where you anchored yourself, and you can't climb more than 25 feet away from that point without undoing the anchor.",
      },
    ],
  },
  {
    id: 49,
    name: "Crowbar",
    description: "A crowbar is a metal bar used to pry things open.",
    cost: { quantity: 2, unit: gp },
    weight: { quantity: 5, unit: lb },
    flavorText: "A crowbar is a metal bar used to pry things open.",
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Pry Open",
        description:
          "Using a crowbar grants advantage to Strength checks where the crowbar's leverage can be applied.",
        effect: {
          abilityRollAdvantages: [
            {
              ability: {
                default: [Ability.STR],
              },
              situation:
                "Strength checks where the crowbar's leverage can be applied.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 50,
    name: "Healer's Kit",
    description:
      "This kit is a leather pouch containing bandages, salves, and splints. ",
    cost: { quantity: 5, unit: gp },
    weight: { quantity: 3, unit: lb },
    flavorText:
      "A healer's kit is a collection of bandages and salves that can be used to stabilize a dying creature.",
    features: [
      {
        name: "Stabilize",
        description:
          "As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check. Once you use the kit 10 times, it is exhausted and can't be used again.",
      },
    ],
    rarity: Rarity.COMMON,
  },
  {
    id: 51,
    name: "Holy Water (flask)",
    description:
      "Holy water is water that has been blessed in some way. It is used to purify or ward off evil.",
    cost: { quantity: 25, unit: gp },
    weight: { quantity: 1, unit: lb },
    flavorText:
      "Holy water is water that has been blessed in some way. It is used to purify or ward off evil.",
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Use Holy Water",
        description:
          " As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon. If the target is a fiend or undead, it takes 2d6 radiant damage.",
      },
      {
        name: "Create Holy Water",
        description:
          "A cleric or paladin may create holy water by performing a special ritual. The ritual takes 1 hour to perform, uses 25 gp worth of powdered silver, and requires the caster to expend a 1st-level spell slot.",
      },
    ],
  },
  {
    id: 52,
    name: "Hunting Trap",
    description: "A hunting trap is a mechanical device used to catch prey.",
    cost: { quantity: 5, unit: gp },
    weight: { quantity: 25, unit: lb },
    flavorText: "A hunting trap is a mechanical device used to catch prey.",
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Set Trap",
        description:
          "When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground.\n\n A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of chain (typically 3 feet long).\n\n A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature.",
      },
    ],
  },
  {
    id: 53,
    name: "Lamp",
    description:
      "A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet.",
    cost: { quantity: 5, unit: sp },
    weight: { quantity: 1, unit: lb },
    flavorText:
      "A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet.",
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Light Lamp",
        description:
          "A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.",
      },
    ],
  },
  {
    id: 54,
    name: "Nullseye Lantern",
    description:
      "A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet.",
    cost: { quantity: 10, unit: gp },
    weight: { quantity: 2, unit: lb },
    flavorText:
      "A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet.",
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Light Lantern",
        description:
          "A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.",
      },
    ],
  },
  {
    id: 55,
    name: "Hooded Lantern",
    description:
      "A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet.",
    cost: { quantity: 5, unit: gp },
    weight: { quantity: 2, unit: lb },
    flavorText:
      "A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet.",
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Light Lantern",
        description:
          "A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.",
      },
    ],
  },
  {
    id: 56,
    name: "Oil (flask)",
    description:
      "Oil can be poured on the ground to create a slick surface. Oil usually comes in a clay flask that holds 1 pint",
    cost: { quantity: 1, unit: sp },
    weight: { quantity: 1, unit: lb },
    flavorText: "Oil can be poured on the ground to create a slick surface.",
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Use Oil",
        description:
          "As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a target creature or object, treating the oil as an improvised weapon.\n\n On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil. ",
      },
      {
        name: "Spill Oil",
        description:
          "As an action you can pour a flask of oil on the ground to cover a 5-foot-square area, provided that the surface is level. If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends its turn in the area. A creature can take this damage only once per turn.",
      },
    ],
  },
  {
    id: 57,
    name: "Basic Poison vial",
    description:
      "Basic poison is a toxic substance that can be applied to weapons.",
    cost: { quantity: 100, unit: gp },
    flavorText:
      "Basic poison is a toxic substance that can be applied to weapons.",
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Apply Poison",
        description:
          "A creature that takes piercing or slashing damage from a weapon coated with the poison is exposed to its effects. A creature must succeed on a DC 10 Constitution saving throw or take 1d4 poison damage. Once applied, the poison retains potency for 1 minute before drying.",
      },
    ],
  },
  {
    id: 58,
    name: "Potion of Healing (Common)",
    description:
      "A potion of healing is a vial of liquid that restores hit points.",
    cost: { quantity: 50, unit: gp },
    weight: { quantity: 0.5, unit: lb },
    flavorText:
      "A potion of healing is a vial of liquid that restores hit points.",
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Drink Potion",
        description:
          "A creature can drink this potion as an action to regain 2d4 + 2 hit points.",
      },
    ],
  },
  {
    id: 59,
    name: "Tinderbox",
    description:
      "This small container holds flint, fire steel, an tinder (usually dry cloth soaked in light oil) used to kindle a fire. ",
    cost: { quantity: 5, unit: sp },
    weight: { quantity: 1, unit: lb },
    flavorText:
      "This small container holds flint, fire steel, an tinder (usually dry cloth soaked in light oil) used to kindle a fire. ",
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Start Fire",
        description:
          "Using your tinderbox to light a torch — or anything else with abundant, exposed fuel — takes an action. Lighting any other fire takes 1 minutes.",
      },
    ],
  },
  {
    id: 60,
    name: "Torch",
    description: "A torch  can be used to provide light.",
    cost: { quantity: 1, unit: cp },
    weight: { quantity: 1, unit: lb },
    flavorText: "A torch can be used to provide light.",
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Light Torch",
        description:
          "A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet.",
      },
      {
        name: "Melee Weapon",
        description:
          "If you make a melee attack with a burning torch and hit, it deals 1 fire damage.",
      },
    ],
  },
  {
    id: 61,
    name: "Common Clothes",
    description:
      "Common clothes include a shirt, pants, shoes, and possibly a cloak or hat.",
    cost: { quantity: 5, unit: sp },
    weight: { quantity: 3, unit: lb },
    flavorText:
      "Common clothes include a shirt, pants, shoes, and possibly a cloak or hat.",
    types: [ItemTypes.CLOTHES],
    rarity: Rarity.COMMON,
  },
  {
    id: 62,
    name: "Costume Clothes",
    description:
      "Costume clothes include fancy, ornate clothes suitable for a masquerade or other fancy event.",
    cost: { quantity: 5, unit: gp },
    weight: { quantity: 4, unit: lb },
    flavorText:
      "Costume clothes include fancy, ornate clothes suitable for a masquerade or other fancy event.",
    types: [ItemTypes.CLOTHES],
    rarity: Rarity.COMMON,
  },
  {
    id: 63,
    name: "Fine Clothes",
    description:
      "Fine clothes include a set of fine clothes, a tabard, or a vest.",
    cost: { quantity: 15, unit: gp },
    weight: { quantity: 6, unit: lb },
    flavorText:
      "Fine clothes include a set of fine clothes, a tabard, or a vest.",
    types: [ItemTypes.CLOTHES],
    rarity: Rarity.COMMON,
  },
  {
    id: 64,
    name: "Robes",
    description: "Robes are long, flowing garments.",
    cost: { quantity: 1, unit: gp },
    weight: { quantity: 4, unit: lb },
    flavorText: "Robes are long, flowing garments.",
    types: [ItemTypes.CLOTHES],
    rarity: Rarity.COMMON,
  },
  {
    id: 65,
    name: "Traveler's Clothes",
    description:
      "Traveler's clothes include a shirt, pants, boots, and a cloak.",
    cost: { quantity: 2, unit: gp },
    weight: { quantity: 4, unit: lb },
    flavorText:
      "Traveler's clothes include a shirt, pants, boots, and a cloak.",
    types: [ItemTypes.CLOTHES],
    rarity: Rarity.COMMON,
  },
  {
    id: 66,
    name: "Crystal",
    description:
      "A crystal is a small, polished stone that can be used as a Arcane Focus.",
    cost: { quantity: 10, unit: gp },
    weight: { quantity: 1, unit: lb },
    flavorText:
      "A crystal is a small, polished stone that can be used as a Arcane Focus.",
    types: [ItemTypes.ARCANE_FOCUS],
    rarity: Rarity.COMMON,
  },
  {
    id: 67,
    name: "Orb",
    description:
      "An orb is a crystal ball that can be used as an Arcane Focus.",
    cost: { quantity: 20, unit: gp },
    weight: { quantity: 3, unit: lb },
    flavorText: "An orb is a crystal ball that can be used as an Arcane Focus.",
    types: [ItemTypes.ARCANE_FOCUS],
    rarity: Rarity.COMMON,
  },
  {
    id: 68,
    name: "Rod",
    description:
      "A rod is a straight, slender stick that can be used as an Arcane Focus.",
    cost: { quantity: 10, unit: gp },
    weight: { quantity: 2, unit: lb },
    flavorText:
      "A rod is a straight, slender stick that can be used as an Arcane Focus.",
    types: [ItemTypes.ARCANE_FOCUS],
    rarity: Rarity.COMMON,
  },
  {
    id: 69,
    name: "Staff",
    description:
      "A staff is a long, slender pole that can be used as an Arcane Focus.",
    cost: { quantity: 5, unit: gp },
    weight: { quantity: 4, unit: lb },
    flavorText:
      "A staff is a long, slender pole that can be used as an Arcane Focus.",
    types: [ItemTypes.ARCANE_FOCUS],
    rarity: Rarity.COMMON,
  },
  {
    id: 70,
    name: "Wand",
    description:
      "A wand is a thin, straight stick that can be used as an Arcane Focus.",
    cost: { quantity: 10, unit: gp },
    weight: { quantity: 1, unit: lb },
    flavorText:
      "A wand is a thin, straight stick that can be used as an Arcane Focus.",
    types: [ItemTypes.ARCANE_FOCUS],
    rarity: Rarity.COMMON,
  },
  {
    id: 71,
    name: "Sprig of Mistletoe",
    description:
      "A sprig of mistletoe is a sacred plant used as a Druidic Focus.",
    cost: { quantity: 1, unit: gp },
    flavorText:
      "A sprig of mistletoe is a sacred plant used as a Druidic Focus.",
    types: [ItemTypes.DRUIDIC_FOCUS],
    rarity: Rarity.COMMON,
  },
  {
    id: 72,
    name: "Totem",
    description:
      "A totem is a small, wooden or metal object that can be used as a Druidic Focus.",
    cost: { quantity: 1, unit: gp },
    flavorText:
      "A totem is a small, wooden or metal object that can be used as a Druidic Focus.",
    types: [ItemTypes.DRUIDIC_FOCUS],
    rarity: Rarity.COMMON,
  },
  {
    id: 73,
    name: "Wooden Staff",
    description:
      "A wooden staff is a long, slender pole that can be used as a Druidic Focus.",
    cost: { quantity: 5, unit: gp },
    weight: { quantity: 4, unit: lb },
    flavorText:
      "A wooden staff is a long, slender pole that can be used as a Druidic Focus.",
    types: [ItemTypes.DRUIDIC_FOCUS],
    rarity: Rarity.COMMON,
  },
  {
    id: 74,
    name: "Yew Wand",
    description:
      "A yew wand is a thin, straight stick that can be used as a Druidic Focus.",
    cost: { quantity: 10, unit: gp },
    weight: { quantity: 1, unit: lb },
    flavorText:
      "A yew wand is a thin, straight stick that can be used as a Druidic Focus.",
    types: [ItemTypes.DRUIDIC_FOCUS],
    rarity: Rarity.COMMON,
  },
  {
    id: 75,
    name: "Amulet",
    description:
      "An amulet is a magical pendant that can be used as a Holy Symbol.",
    cost: { quantity: 5, unit: gp },
    weight: { quantity: 1, unit: lb },
    flavorText:
      "An amulet is a magical pendant that can be used as a Holy Symbol.",
    types: [ItemTypes.HOLY_SYMBOL],
    rarity: Rarity.COMMON,
  },
  {
    id: 76,
    name: "Emblem",
    description:
      "An emblem is a magical badge that can be used as a Holy Symbol.",
    cost: { quantity: 5, unit: gp },
    flavorText:
      "An emblem is a magical badge that can be used as a Holy Symbol.",
    types: [ItemTypes.HOLY_SYMBOL],
    rarity: Rarity.COMMON,
  },
  {
    id: 77,
    name: "Reliquary",
    description:
      "A reliquary is a container for holy relics that can be used as a Holy Symbol.",
    cost: { quantity: 5, unit: gp },
    weight: { quantity: 2, unit: lb },
    flavorText:
      "A reliquary is a container for holy relics that can be used as a Holy Symbol.",
    types: [ItemTypes.HOLY_SYMBOL],
    rarity: Rarity.COMMON,
  },
  {
    id: 78,
    name: "Backpack",
    description:
      "Usually made of canvas or leather, a backpack can hold 30 pounds of gear.",
    cost: { quantity: 2, unit: gp },
    flavorText:
      "Usually made of canvas or leather, a backpack can hold 30 pounds of gear.",
    weight: { quantity: 5, unit: lb },
    capacity: { quantity: 30, unit: lb },
    types: [ItemTypes.CONTAINER],
    rarity: Rarity.COMMON,
  },
  {
    id: 79,
    name: "Barrel",
    description:
      "A barrel is a large, cylindrical container made of wood staves bound by metal hoops.",
    cost: { quantity: 2, unit: gp },
    weight: { quantity: 70, unit: lb },
    capacity: { quantity: 40, unit: gal },
    flavorText:
      "A barrel is a large, cylindrical container made of wood staves bound by metal hoops.",
    types: [ItemTypes.CONTAINER],
    rarity: Rarity.COMMON,
  },
  {
    id: 80,
    name: "Basket",
    description:
      "A basket is a woven container made of reeds, wicker, or other materials.",
    cost: { quantity: 4, unit: sp },
    weight: { quantity: 2, unit: lb },
    capacity: { quantity: 40, unit: lb },
    flavorText:
      "A basket is a woven container made of reeds, wicker, or other materials.",
    types: [ItemTypes.CONTAINER],
    rarity: Rarity.COMMON,
  },
  {
    id: 81,
    name: "Case (Crossbow Bolt)",
    description: "A crossbow bolt case can hold up to 20 crossbow bolts.",
    cost: { quantity: 1, unit: gp },
    weight: { quantity: 1, unit: lb },
    customItemCapacity: { quantity: 20, item: itemIds.crossbowBolt },
    flavorText: "A crossbow bolt case can hold up to 20 crossbow bolts.",
    types: [ItemTypes.CONTAINER],
    rarity: Rarity.COMMON,
  },
  {
    id: 82,
    name: "Case (Map or Scroll)",
    description:
      "A map or scroll case is a cylindrical tube with a cap on each end.",
    cost: { quantity: 1, unit: gp },
    weight: { quantity: 1, unit: lb },
    customItemCapacity: { quantity: 10, item: itemIds.paper },
    flavorText:
      "A map or scroll case is a cylindrical tube with a cap on each end.",
    rarity: Rarity.COMMON,
  },
  {
    id: 83,
    name: "Chest",
    description:
      "A chest is a large, wooden container with a hinged lid and a lock.",
    cost: { quantity: 5, unit: gp },

    weight: { quantity: 25, unit: lb },
    capacity: { quantity: 300, unit: lb },
    flavorText:
      "A chest is a large, wooden container with a hinged lid and a lock.",
    types: [ItemTypes.CONTAINER],
    rarity: Rarity.COMMON,
  },
  {
    id: 84,
    name: "Flask",
    description: "A flask is a small, metal container for holding liquids.",
    cost: { quantity: 2, unit: cp },
    weight: { quantity: 1, unit: lb },
    capacity: { quantity: 1, unit: pint },
    flavorText: "A flask is a small, metal container for holding liquids.",
    types: [ItemTypes.CONTAINER],
    rarity: Rarity.COMMON,
  },
  {
    id: 85,
    name: "Glass Bottle",
    description:
      "A glass bottle is a small, glass container for holding liquids.",
    cost: { quantity: 2, unit: gp },
    weight: { quantity: 2, unit: lb },
    capacity: { quantity: 1.5, unit: pint },
    flavorText:
      "A glass bottle is a small, glass container for holding liquids.",
    types: [ItemTypes.CONTAINER],
    rarity: Rarity.COMMON,
  },
  {
    id: 86,
    name: "Jug",
    description: "A jug is a large, ceramic container for holding liquids.",
    cost: { quantity: 2, unit: cp },
    weight: { quantity: 4, unit: lb },
    capacity: { quantity: 1, unit: gal },
    flavorText: "A jug is a large, ceramic container for holding liquids.",
    types: [ItemTypes.CONTAINER],
    rarity: Rarity.COMMON,
  },
  {
    id: 87,
    name: "Pot (Iron)",
    description: "An iron pot is a large, metal container for cooking.",
    cost: { quantity: 2, unit: gp },
    weight: { quantity: 10, unit: lb },
    capacity: { quantity: 1, unit: gal },
    flavorText: "An iron pot is a large, metal container for cooking.",
    types: [ItemTypes.CONTAINER],
    rarity: Rarity.COMMON,
  },
  {
    id: 88,
    name: "Pouch",
    description:
      "A pouch is a small, leather container for holding various items.",
    cost: { quantity: 5, unit: sp },
    weight: { quantity: 1, unit: lb },
    capacity: { quantity: 6, unit: lb },
    flavorText:
      "A pouch is a small, leather container for holding various items.",
    types: [ItemTypes.CONTAINER],
    rarity: Rarity.COMMON,
  },
  {
    id: 89,
    name: "Sack",
    description:
      "A sack is a large, cloth container for holding various items.",
    cost: { quantity: 1, unit: cp },
    weight: { quantity: 0.5, unit: lb },
    capacity: { quantity: 30, unit: lb },
    customItemCapacity: { quantity: 1, item: itemIds.commonClothes },
    flavorText: "A sack is a large, cloth container for holding various items.",
    types: [ItemTypes.CONTAINER],
    rarity: Rarity.COMMON,
  },
  {
    id: 90,
    name: "Quiver",
    description: "A quiver is a container for holding arrows.",
    cost: { quantity: 1, unit: gp },
    weight: { quantity: 1, unit: lb },
    customItemCapacity: { quantity: 20, item: itemIds.arrow },
    flavorText: "A quiver is a container for holding arrows.",
    types: [ItemTypes.CONTAINER],
    rarity: Rarity.COMMON,
  },
  {
    id: 91,
    name: "Vial",
    description: "A vial is a small, glass container for holding liquids.",
    cost: { quantity: 1, unit: gp },
    capacity: { quantity: 4, unit: oz },
    flavorText: "A vial is a small, glass container for holding liquids.",
    types: [ItemTypes.CONTAINER],
    rarity: Rarity.COMMON,
  },
  {
    id: 92,
    name: "Waterskin",
    description:
      "A waterskin is a container for holding water or other liquids.",
    cost: { quantity: 2, unit: sp },
    weight: { quantity: 5, unit: lb },
    capacity: { quantity: 4, unit: pint },
    flavorText:
      "A waterskin is a container for holding water or other liquids.",
    types: [ItemTypes.CONTAINER],
    rarity: Rarity.COMMON,
  },
  {
    id: 93,
    name: "Fargab",
    description:
      "These backpack-sized devices are created in pairs, with matching numbers engraved on them, and allow communication over a long distance using radio frequencies.",
    flavorText:
      "These backpack-sized devices are created in pairs, with matching numbers engraved on them, and allow communication over a long distance using radio frequencies.",

    types: [ItemTypes.MAGIC],
    rarity: Rarity.COMMON,

    features: [
      {
        name: "Use Fargab",
        description:
          "While wearing a fargab, you can use an action to speak into the device's mouthpiece and send a short message of twenty-five words or less to another creature wearing the matched fargab while it is within 18 miles of you. The message emits from the speakers of the device and can be heard up to 10 feet awayfrom the device.\n\n If no creature is wearing the fargab, the speakers make static noises instead.",
      },
    ],
  },
  {
    id: 94,
    name: "Narycrash",
    description: "This backpack-sized device holds a balloon-based parachute",
    flavorText: "This backpack-sized device holds a balloon-based parachute",
    types: [ItemTypes.MAGIC],
    features: [
      {
        name: "Use Narycrash",
        description:
          "If you fall while wearing this device, you can use your reaction to deploy the parachute. Once deployed, the parachute rapidly inflates, and you descend 60 feet per round and take no damage from falling. When you are 10 feet away from the ground, roll a d20. If you roll a 5 or less, the parachute gives out, and you begin to fall normally.",
      },
    ],
    rarity: Rarity.COMMON,
  },
  {
    id: 95,
    name: "Club",
    description:
      "A club is a simple weapon that is essentially a short, stout stick.",
    cost: { quantity: 1, unit: sp },
    weight: { quantity: 2, unit: lb },

    flavorText:
      "A club is a simple weapon that is essentially a short, stout stick.",
    weaponId: weaponIds.club,
    types: [ItemTypes.WEAPON],
    rarity: Rarity.COMMON,
  },
  {
    id: 96,
    name: "Dagger",
    description:
      "A dagger is a small, easily concealed weapon that can be used for stabbing or slashing.",
    cost: { quantity: 2, unit: gp },
    weight: { quantity: 1, unit: lb },
    flavorText:
      "A dagger is a small, easily concealed weapon that can be used for stabbing or slashing.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.dagger,
    rarity: Rarity.COMMON,
  },
  {
    id: 97,
    name: "Greatclub",
    description:
      "A greatclub is a large, heavy stick that can be used as a weapon.",
    cost: { quantity: 2, unit: sp },
    weight: { quantity: 10, unit: lb },
    flavorText:
      "A greatclub is a large, heavy stick that can be used as a weapon.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.greatclub,
    rarity: Rarity.COMMON,
  },
  {
    id: 98,
    name: "Handaxe",
    description:
      "A handaxe is a small, light axe that can be used for chopping or throwing.",
    cost: { quantity: 5, unit: gp },
    weight: { quantity: 2, unit: lb },
    flavorText:
      "A handaxe is a small, light axe that can be used for chopping or throwing.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.handaxe,
    rarity: Rarity.COMMON,
  },
  {
    id: 99,
    name: "Javelin",
    description: "A javelin is a light, spear-like weapon that can be thrown.",
    cost: { quantity: 5, unit: sp },
    weight: { quantity: 2, unit: lb },
    flavorText: "A javelin is a light, spear-like weapon that can be thrown.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.javelin,
    rarity: Rarity.COMMON,
  },
  {
    id: 100,
    name: "Light Hammer",
    description:
      "A light hammer is a small, light hammer that can be used for bludgeoning or throwing.",
    cost: { quantity: 2, unit: gp },
    weight: { quantity: 2, unit: lb },
    flavorText:
      "A light hammer is a small, light hammer that can be used for bludgeoning or throwing.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.lightHammer,
    rarity: Rarity.COMMON,
  },
  {
    id: 101,
    name: "Mace",
    description:
      "A mace is a simple weapon that is essentially a heavy, metal club.",
    cost: { quantity: 5, unit: gp },
    weight: { quantity: 4, unit: lb },
    flavorText:
      "A mace is a simple weapon that is essentially a heavy, metal club.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.mace,
    rarity: Rarity.COMMON,
  },
  {
    id: 102,
    name: "Quarterstaff",
    description:
      "A quarterstaff is a simple weapon that is essentially a long, wooden stick.",
    cost: { quantity: 2, unit: sp },
    weight: { quantity: 4, unit: lb },
    flavorText:
      "A quarterstaff is a simple weapon that is essentially a long, wooden stick.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.quarterstaff,
    rarity: Rarity.COMMON,
  },
  {
    id: 103,
    name: "Sickle",
    description:
      "A sickle is a simple weapon that is essentially a curved, metal blade attached to a short handle.",
    cost: { quantity: 1, unit: gp },
    weight: { quantity: 2, unit: lb },
    flavorText:
      "A sickle is a simple weapon that is essentially a curved, metal blade attached to a short handle.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.sickle,
    rarity: Rarity.COMMON,
  },
  {
    id: 104,
    name: "Spear",
    description:
      "A spear is a simple weapon that is essentially a long, pointed stick.",
    cost: { quantity: 1, unit: gp },
    weight: { quantity: 3, unit: lb },
    flavorText:
      "A spear is a simple weapon that is essentially a long, pointed stick.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.spear,
    rarity: Rarity.COMMON,
  },
  {
    id: 105,
    name: "Crossbow (Light)",
    description:
      "A light crossbow is a simple weapon that is essentially a small, hand-held crossbow.",
    cost: { quantity: 25, unit: gp },
    weight: { quantity: 5, unit: lb },
    flavorText:
      "A light crossbow is a simple weapon that is essentially a small, hand-held crossbow.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.crossbowLight,
    rarity: Rarity.COMMON,
  },
  {
    id: 106,
    name: "Dart",
    description:
      "A dart is a simple weapon that is essentially a small, pointed projectile.",
    cost: { quantity: 5, unit: cp },
    weight: { quantity: 0.25, unit: lb },
    flavorText:
      "A dart is a simple weapon that is essentially a small, pointed projectile.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.dart,
    rarity: Rarity.COMMON,
  },
  {
    id: 107,
    name: "Shortbow",
    description:
      "A shortbow is a simple weapon that is essentially a small, hand-held bow.",
    cost: { quantity: 25, unit: gp },
    weight: { quantity: 2, unit: lb },
    flavorText:
      "A shortbow is a simple weapon that is essentially a small, hand-held bow.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.shortbow,
    rarity: Rarity.COMMON,
  },
  {
    id: 108,
    name: "Sling",
    description:
      "A sling is a simple weapon that is essentially a small, leather strap used to hurl stones.",
    cost: { quantity: 1, unit: sp },
    flavorText:
      "A sling is a simple weapon that is essentially a small, leather strap used to hurl stones.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.sling,
    rarity: Rarity.COMMON,
  },
  {
    id: 109,
    name: "Battleaxe",
    description:
      "A battleaxe is a martial weapon that is essentially a large, double-headed axe.",
    cost: { quantity: 10, unit: gp },
    weight: { quantity: 4, unit: lb },
    flavorText:
      "A battleaxe is a martial weapon that is essentially a large, double-headed axe.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.battleaxe,
    rarity: Rarity.COMMON,
  },
  {
    id: 110,
    name: "Flail",
    description:
      "A flail is a martial weapon that is essentially a spiked ball attached to a handle by a chain.",
    cost: { quantity: 10, unit: gp },
    weight: { quantity: 2, unit: lb },
    flavorText:
      "A flail is a martial weapon that is essentially a spiked ball attached to a handle by a chain.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.flail,
    rarity: Rarity.COMMON,
  },
  {
    id: 111,
    name: "Glaive",
    description:
      "A glaive is a martial weapon that is essentially a large, bladed polearm.",
    cost: { quantity: 20, unit: gp },
    weight: { quantity: 6, unit: lb },
    flavorText:
      "A glaive is a martial weapon that is essentially a large, bladed polearm.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.glaive,
    rarity: Rarity.COMMON,
  },
  {
    id: 112,
    name: "Greataxe",
    description:
      "A greataxe is a martial weapon that is essentially a large, single-headed axe.",
    cost: { quantity: 30, unit: gp },
    weight: { quantity: 7, unit: lb },
    flavorText:
      "A greataxe is a martial weapon that is essentially a large, single-headed axe.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.greataxe,
    rarity: Rarity.COMMON,
  },
  {
    id: 113,
    name: "Greatsword",
    description:
      "A greatsword is a martial weapon that is essentially a large, two-handed sword.",
    cost: { quantity: 50, unit: gp },
    weight: { quantity: 6, unit: lb },
    flavorText:
      "A greatsword is a martial weapon that is essentially a large, two-handed sword.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.greatsword,
    rarity: Rarity.COMMON,
  },
  {
    id: 114,
    name: "Halberd",
    description:
      "A halberd is a martial weapon that is essentially a large, bladed polearm.",
    cost: { quantity: 20, unit: gp },
    weight: { quantity: 6, unit: lb },
    flavorText:
      "A halberd is a martial weapon that is essentially a large, bladed polearm.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.halberd,
    rarity: Rarity.COMMON,
  },
  {
    id: 115,
    name: "Lance",
    description:
      "A lance is a martial weapon that is essentially a long, wooden pole with a metal tip.",
    cost: { quantity: 10, unit: gp },
    weight: { quantity: 6, unit: lb },
    flavorText:
      "A lance is a martial weapon that is essentially a long, wooden pole with a metal tip.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.lance,
    rarity: Rarity.COMMON,
  },
  {
    id: 116,
    name: "Longsword",
    description:
      "A longsword is a martial weapon that is essentially a long, one-handed sword.",
    cost: { quantity: 15, unit: gp },
    weight: { quantity: 3, unit: lb },
    flavorText:
      "A longsword is a martial weapon that is essentially a long, one-handed sword.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.longsword,
    rarity: Rarity.COMMON,
  },
  {
    id: 117,
    name: "Maul",
    description:
      "A maul is a martial weapon that is essentially a large, heavy hammer.",
    cost: { quantity: 10, unit: gp },
    weight: { quantity: 10, unit: lb },
    flavorText:
      "A maul is a martial weapon that is essentially a large, heavy hammer.",
    weaponId: weaponIds.maul,
    rarity: Rarity.COMMON,
  },
  {
    id: 118,
    name: "Morningstar",
    description:
      "A morningstar is a martial weapon that is essentially a spiked ball attached to a handle.",
    cost: { quantity: 15, unit: gp },
    weight: { quantity: 4, unit: lb },
    flavorText:
      "A morningstar is a martial weapon that is essentially a spiked ball attached to a handle.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.morningstar,
    rarity: Rarity.COMMON,
  },
  {
    id: 119,
    name: "Pike",
    description:
      "A pike is a martial weapon that is essentially a long, pointed polearm.",
    cost: { quantity: 5, unit: gp },
    weight: { quantity: 18, unit: lb },
    flavorText:
      "A pike is a martial weapon that is essentially a long, pointed polearm.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.pike,
    rarity: Rarity.COMMON,
  },
  {
    id: 120,
    name: "Rapier",
    description:
      "A rapier is a martial weapon that is essentially a thin, pointed sword.",
    cost: { quantity: 25, unit: gp },
    weight: { quantity: 2, unit: lb },
    flavorText:
      "A rapier is a martial weapon that is essentially a thin, pointed sword.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.rapier,
    rarity: Rarity.COMMON,
  },
  {
    id: 121,
    name: "Scimitar",
    description:
      "A scimitar is a martial weapon that is essentially a curved, slashing sword.",
    cost: { quantity: 25, unit: gp },
    weight: { quantity: 3, unit: lb },
    flavorText:
      "A scimitar is a martial weapon that is essentially a curved, slashing sword.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.scimitar,
    rarity: Rarity.COMMON,
  },
  {
    id: 122,
    name: "Shortsword",
    description:
      "A shortsword is a martial weapon that is essentially a short, one-handed sword.",
    cost: { quantity: 10, unit: gp },
    weight: { quantity: 2, unit: lb },
    flavorText:
      "A shortsword is a martial weapon that is essentially a short, one-handed sword.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.shortsword,
    rarity: Rarity.COMMON,
  },
  {
    id: 123,
    name: "Trident",
    description:
      "A trident is a martial weapon that is essentially a three-pronged spear.",
    cost: { quantity: 5, unit: gp },
    weight: { quantity: 4, unit: lb },
    types: [ItemTypes.WEAPON],
    flavorText:
      "A trident is a martial weapon that is essentially a three-pronged spear.",
    weaponId: weaponIds.trident,
    rarity: Rarity.COMMON,
  },
  {
    id: 124,
    name: "War Pick",
    description:
      "A war pick is a martial weapon that is essentially a heavy, metal pick.",
    cost: { quantity: 5, unit: gp },
    weight: { quantity: 2, unit: lb },
    flavorText:
      "A war pick is a martial weapon that is essentially a heavy, metal pick.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.warPick,
    rarity: Rarity.COMMON,
  },
  {
    id: 125,
    name: "Warhammer",
    description:
      "A warhammer is a martial weapon that is essentially a heavy, metal hammer.",
    cost: { quantity: 15, unit: gp },
    weight: { quantity: 2, unit: lb },
    flavorText:
      "A warhammer is a martial weapon that is essentially a heavy, metal hammer.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.warhammer,
    rarity: Rarity.COMMON,
  },
  {
    id: 126,
    name: "Whip",
    description:
      "A whip is a martial weapon that is essentially a long, flexible cord with a handle.",
    cost: { quantity: 2, unit: gp },
    weight: { quantity: 3, unit: lb },
    flavorText:
      "A whip is a martial weapon that is essentially a long, flexible cord with a handle.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.whip,
    rarity: Rarity.COMMON,
  },
  {
    id: 127,
    name: "Blowgun",
    description:
      "A blowgun is a ranged weapon that is essentially a long, hollow tube used to fire darts.",
    cost: { quantity: 10, unit: gp },
    weight: { quantity: 1, unit: lb },
    flavorText:
      "A blowgun is a ranged weapon that is essentially a long, hollow tube used to fire darts.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.blowgun,
    rarity: Rarity.COMMON,
  },
  {
    id: 128,
    name: "Crossbow (Hand)",
    description:
      "A hand crossbow is a ranged weapon that is essentially a small, hand-held crossbow.",
    cost: { quantity: 75, unit: gp },
    weight: { quantity: 3, unit: lb },
    flavorText:
      "A hand crossbow is a ranged weapon that is essentially a small, hand-held crossbow.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.crossbowHand,
    rarity: Rarity.COMMON,
  },
  {
    id: 129,
    name: "Crossbow (Heavy)",
    description:
      "A heavy crossbow is a ranged weapon that is essentially a large, hand-held crossbow.",
    cost: { quantity: 50, unit: gp },
    weight: { quantity: 18, unit: lb },
    flavorText:
      "A heavy crossbow is a ranged weapon that is essentially a large, hand-held crossbow.",
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.crossbowHeavy,
    rarity: Rarity.COMMON,
  },
  {
    id: 130,
    name: "Longbow",
    description:
      "A longbow is a ranged weapon that is essentially a large, hand-held bow.",
    cost: { quantity: 50, unit: gp },
    weight: { quantity: 2, unit: lb },
    types: [ItemTypes.WEAPON],
    flavorText:
      "A longbow is a ranged weapon that is essentially a large, hand-held bow.",
    weaponId: weaponIds.longbow,
    rarity: Rarity.COMMON,
  },
  {
    id: 131,
    name: "Net",
    description:
      "A net is a ranged weapon that is essentially a large, weighted mesh used to entangle creatures.",
    cost: { quantity: 1, unit: gp },
    weight: { quantity: 3, unit: lb },
    types: [ItemTypes.WEAPON],
    flavorText:
      "A net is a ranged weapon that is essentially a large, weighted mesh used to entangle creatures.",
    weaponId: weaponIds.net,
    rarity: Rarity.COMMON,
  },
  {
    id: 132,
    name: "Arrow",
    description:
      "An arrow is a small, pointed projectile that is fired from a bow.",
    cost: { quantity: 5, unit: cp },
    weight: { quantity: 0.05, unit: lb },
    flavorText:
      "An arrow is a small, pointed projectile that is fired from a bow.",
    types: [ItemTypes.AMMUNITION],
    rarity: Rarity.COMMON,
  },
  {
    id: 133,
    name: "Blowgun Needle",
    description:
      "A blowgun needle is a small, pointed projectile that is fired from a blowgun.",
    cost: { quantity: 2, unit: cp },
    weight: { quantity: 0.02, unit: lb },
    types: [ItemTypes.AMMUNITION],
    flavorText:
      "A blowgun needle is a small, pointed projectile that is fired from a blowgun.",
    rarity: Rarity.COMMON,
  },
  {
    id: 134,
    name: "Crossbow Bolt",
    description:
      "A crossbow bolt is a small, pointed projectile that is fired from a crossbow.",
    cost: { quantity: 5, unit: cp },
    weight: { quantity: 0.075, unit: lb },
    types: [ItemTypes.AMMUNITION],
    flavorText:
      "A crossbow bolt is a small, pointed projectile that is fired from a crossbow.",
    rarity: Rarity.COMMON,
  },
  {
    id: 135,
    name: "Sling Bullet",
    description:
      "A sling bullet is a small, rounded projectile that is fired from a sling.",
    cost: { quantity: 4, unit: cp },
    weight: { quantity: 0.075, unit: lb },
    types: [ItemTypes.AMMUNITION],
    flavorText:
      "A sling bullet is a small, rounded projectile that is fired from a sling.",
    rarity: Rarity.COMMON,
  },
  {
    id: 136,
    name: "Padded Armor",
    description: "Padded armor is made of quilted layers of cloth.",
    cost: { quantity: 5, unit: gp },
    weight: { quantity: 8, unit: lb },
    types: [ItemTypes.ARMOR],
    flavorText: "Padded armor is made of quilted layers of cloth.",
    armorId: armorIds.paddedArmor,
    rarity: Rarity.COMMON,
  },
  {
    id: 137,
    name: "Leather Armor",
    description: "Leather armor is made of stiffened leather.",
    cost: { quantity: 10, unit: gp },
    weight: { quantity: 10, unit: lb },
    types: [ItemTypes.ARMOR],
    flavorText: "Leather armor is made of stiffened leather.",
    armorId: armorIds.leatherArmor,
    rarity: Rarity.COMMON,
  },
  {
    id: 138,
    name: "Studded Leather Armor",
    description:
      "Studded leather armor is made of leather with metal studs sewn into it.",
    cost: { quantity: 45, unit: gp },
    weight: { quantity: 13, unit: lb },
    types: [ItemTypes.ARMOR],
    flavorText:
      "Studded leather armor is made of leather with metal studs sewn into it.",
    armorId: armorIds.studdedLeatherArmor,
    rarity: Rarity.COMMON,
  },
  {
    id: 139,
    name: "Hide Armor",
    description: "Hide armor is made of thick animal hides.",
    cost: { quantity: 10, unit: gp },
    weight: { quantity: 12, unit: lb },
    types: [ItemTypes.ARMOR],
    flavorText: "Hide armor is made of thick animal hides.",
    rarity: Rarity.COMMON,
    armorId: armorIds.hideArmor,
  },
  {
    id: 140,
    name: "Chain Shirt",
    description: "A chain shirt is made of interlocking metal rings.",
    cost: { quantity: 50, unit: gp },

    weight: { quantity: 20, unit: lb },
    types: [ItemTypes.ARMOR],
    flavorText: "A chain shirt is made of interlocking metal rings.",
    armorId: armorIds.chainShirt,
    rarity: Rarity.COMMON,
  },
  {
    id: 141,
    name: "Scale Mail",
    description:
      "Scale mail is made of overlapping metal scales sewn onto a leather backing.",
    cost: { quantity: 50, unit: gp },
    weight: { quantity: 45, unit: lb },
    types: [ItemTypes.ARMOR],

    flavorText:
      "Scale mail is made of overlapping metal scales sewn onto a leather backing.",
    armorId: armorIds.scaleMail,
    rarity: Rarity.COMMON,
  },
  {
    id: 142,
    name: "Spiked Armor",
    description:
      "Spiked armor is made of leather with metal spikes sewn into it.",
    cost: { quantity: 75, unit: gp },
    weight: { quantity: 45, unit: lb },
    types: [ItemTypes.ARMOR],
    flavorText:
      "Spiked armor is made of leather with metal spikes sewn into it.",
    armorId: armorIds.spikedArmor,
    rarity: Rarity.COMMON,
  },
  {
    id: 143,
    name: "Breastplate",
    description: "A breastplate is made of a single piece of metal.",
    cost: { quantity: 400, unit: gp },
    weight: { quantity: 20, unit: lb },
    types: [ItemTypes.ARMOR],
    flavorText: "A breastplate is made of a single piece of metal.",
    armorId: armorIds.breastplate,
    rarity: Rarity.COMMON,
  },
  {
    id: 144,
    name: "Half Plate",
    description:
      "Half plate is made of metal plates that cover most of the body.",
    cost: { quantity: 750, unit: gp },
    weight: { quantity: 40, unit: lb },
    types: [ItemTypes.ARMOR],
    flavorText:
      "Half plate is made of metal plates that cover most of the body.",
    armorId: armorIds.halfPlate,
    rarity: Rarity.COMMON,
  },
  {
    id: 145,
    name: "Ring Mail",
    description: "Ring mail is made of interlocking metal rings.",
    cost: { quantity: 30, unit: gp },
    weight: { quantity: 40, unit: lb },
    types: [ItemTypes.ARMOR],
    flavorText: "Ring mail is made of interlocking metal rings.",
    armorId: armorIds.ringMail,
    rarity: Rarity.COMMON,
  },
  {
    id: 146,
    name: "Chain Mail",

    description: "Chain mail is made of interlocking metal rings.",
    cost: { quantity: 75, unit: gp },
    weight: { quantity: 55, unit: lb },
    types: [ItemTypes.ARMOR],
    flavorText: "Chain mail is made of interlocking metal rings.",
    armorId: armorIds.chainMail,
    rarity: Rarity.COMMON,
  },
  {
    id: 147,
    name: "Splint Armor",
    description: "Splint armor is made of narrow vertical strips of metal.",
    cost: { quantity: 200, unit: gp },
    weight: { quantity: 60, unit: lb },
    types: [ItemTypes.ARMOR],
    flavorText: "Splint armor is made of narrow vertical strips of metal.",
    armorId: armorIds.splintArmor,
    rarity: Rarity.COMMON,
  },
  {
    id: 148,
    name: "Plate Armor",
    description: "Plate armor is made of interlocking metal plates.",
    cost: { quantity: 1500, unit: gp },
    weight: { quantity: 65, unit: lb },
    types: [ItemTypes.ARMOR],
    flavorText: "Plate armor is made of interlocking metal plates.",
    armorId: armorIds.plateArmor,
    rarity: Rarity.COMMON,
  },
  {
    id: 149,
    name: "Shield",
    description:
      "A shield is a piece of wood or metal that is carried in one hand.",
    cost: { quantity: 10, unit: gp },
    weight: { quantity: 6, unit: lb },
    types: [ItemTypes.ARMOR],
    flavorText:
      "A shield is a piece of wood or metal that is carried in one hand.",
    armorId: armorIds.shield,
    rarity: Rarity.COMMON,
  },
  {
    id: 150,
    name: "Bomb",
    description: "A bomb is an explosive device that can be thrown at enemies.",
    cost: { quantity: 150, unit: gp },
    weight: { quantity: 1, unit: lb },
    types: [ItemTypes.EXPLOSIVE],
    flavorText: "A bomb is an explosive device that can be thrown at enemies.",
    features: [
      {
        name: "Throw Bomb",
        description:
          "As an action, a character can light this bomb and throw it at a point up to 60 feet away. Each creature within 5 feet of that point must succeed on a DC 12 Dexterity saving throw or take 3d6 fire damage.",
      },
    ],
    rarity: Rarity.COMMON,
  },
  {
    id: 151,
    name: "Gunpowder (keg)",
    description: "A keg of gunpowder is a highly explosive substance.",
    cost: { quantity: 250, unit: gp },
    weight: { quantity: 20, unit: lb },
    types: [ItemTypes.EXPLOSIVE],
    flavorText: "A keg of gunpowder is a highly explosive substance.",
    features: [
      {
        name: "Detonate Gunpowder",
        description:
          "Setting fire to a container full of gunpowder can cause it to explode, dealing 7d6 fire damage to creatures within 10 feet of it. A successful DC 12 Dexterity saving throw halves the damage. Setting fire to an ounce of gunpowder causes it to flare for 1 round, shedding bright light in a 30-foot radius and dim light for an additional 30 feet.",
      },
    ],
    rarity: Rarity.COMMON,
  },
  {
    id: 152,
    name: "Gunpowder (horn)",
    description: "A powder horn is a container for holding gunpowder.",
    cost: { quantity: 35, unit: gp },
    weight: { quantity: 2, unit: lb },
    types: [ItemTypes.EXPLOSIVE],
    flavorText: "A powder horn is a container for holding gunpowder.",
    features: [
      {
        name: "Detonate Gunpowder",
        description:
          "Setting fire to a container full of gunpowder can cause it to explode, dealing 3d6 fire damage to creatures within 10 feet of it. A successful DC 12 Dexterity saving throw halves the damage. Setting fire to an ounce of gunpowder causes it to flare for 1 round, shedding bright light in a 30-foot radius and dim light for an additional 30 feet.",
      },
    ],
    rarity: Rarity.COMMON,
  },
  {
    id: 153,
    name: "Dynamite",
    description: "Dynamite is a highly explosive substance.",
    weight: { quantity: 1, unit: lb },
    types: [ItemTypes.EXPLOSIVE],
    flavorText: "Dynamite is a highly explosive substance.",
    features: [
      {
        name: "Use Dynamite",
        description:
          "As an action, a creature can light a stick of dynamite and throw it at a point up to 60 feet away. Each creature within 5 feet of that point must make a DC 12 Dexterity saving throw, taking 3d6 bludgeoning damage on a failed save, or half as much damage on a successful one.\n\nA character can bind sticks of dynamite together so they explode at the same time. Each additional stick increases the damage by 1d6 (to a maximum of 10d6) and the burst radius by 5 feet (to a maximum of 20 feet).\n\nDynamite can be rigged with a longer fuse to explode after a set amount of time, usually 1 to 6 rounds. Roll initiative for the dynamite. After the set number of rounds goes by, the dynamite explodes on that initiative.",
      },
    ],
    rarity: Rarity.COMMON,
  },
  {
    id: 154,
    name: "Grenade (Fragmentation)",
    description:
      "A fragmentation grenade is an explosive device filled with shrapnel that can injure creatures in the blast radius.",
    weight: { quantity: 1, unit: lb },
    types: [ItemTypes.EXPLOSIVE],
    flavorText:
      "A fragmentation grenade is an explosive device filled with shrapnel that can injure creatures in the blast radius.",
    features: [
      {
        name: "Throw Frag Grenade",
        description:
          "As an action, a character can throw a grenade at a point up to 60 feet away.\n\nEach creature within 20 feet of an exploding fragmentation grenade must make a DC 15 Dexterity saving throw, taking 5d6 piercing damage on a failed save, or half as much damage on a successful one.",
      },
    ],
    rarity: Rarity.COMMON,
  },
  {
    id: 155,
    name: "Grenade (Smoke)",
    description:
      "A smoke grenade is an explosive device that creates a cloud of smoke when it detonates.",
    weight: { quantity: 1, unit: lb },
    types: [ItemTypes.EXPLOSIVE],
    flavorText:
      "A smoke grenade is an explosive device that creates a cloud of smoke when it detonates.",
    features: [
      {
        name: "Throw Smoke Grenade",
        description:
          "As an action, a character can throw a grenade at a point up to 60 feet away.\n\nOne round after a smoke grenade lands, it emits a cloud of smoke that creates a heavily obscured area in a 20-foot radius. A moderate wind (at least 10 miles per hour) disperses the smoke in 4 rounds; a strong wind (20 or more miles per hour) disperses it in 1 round.",
      },
    ],
    rarity: Rarity.COMMON,
  },
  {
    id: 156,
    name: "String (10 feet)",
    description: "A piece of string is a thin, flexible cord.",
    cost: { quantity: 1, unit: cp },
    weight: { quantity: 0.01, unit: lb },
    types: [ItemTypes.MISC],
    flavorText: "A piece of string is a thin, flexible cord.",
    rarity: Rarity.COMMON,
  },
  {
    id: 157,
    name: "Soap",
    description: "Soap is a cleaning agent used for washing.",
    cost: { quantity: 2, unit: cp },
    flavorText: "Soap is a cleaning agent used for washing.",
    types: [ItemTypes.MISC],
    rarity: Rarity.COMMON,
  },
  {
    id: 158,
    name: "Bag of Sand",
    description: "A small bag of sand, typically found in a scholar's pack.",
    flavorText: "A small bag of sand, typically found in a scholar's pack.",
    types: [ItemTypes.MISC],
    rarity: Rarity.COMMON,
  },
  {
    id: 159,
    name: "Alms Box",
    description: "A small box for alms, typically found in a priest's pack.",
    flavorText: "A small box for alms, typically found in a priest's pack.",
    rarity: Rarity.COMMON,
  },
  {
    id: 160,
    name: "Block of Incense",
    description: "A block of incense, typically found in a priest's pack.",
    flavorText: "A block of incense, typically found in a priest's pack.",
    rarity: Rarity.COMMON,
  },
  {
    id: 161,
    name: "Small Knife",
    description: "A small knife, typically found in a priest's pack.",
    flavorText: "A small knife, typically found in a priest's pack.",
    rarity: Rarity.COMMON,
  },
  {
    id: 162,
    name: "Vestments",
    description: "A set of vestments, typically found in a priest's pack.",
    flavorText: "A set of vestments, typically found in a priest's pack.",
    rarity: Rarity.COMMON,
  },
  {
    id: 163,
    name: "Alchemist's Supplies",
    description:
      "Alchemist's supplies allow you to produce useful concoctions, such as acid or alchemist's fire.",
    weight: { quantity: 8, unit: lb },
    flavorText:
      "Alchemist's supplies allow you to produce useful concoctions, such as acid or alchemist's fire.",
    cost: { quantity: 50, unit: gp },
    types: [ItemTypes.TOOL],
    toolId: toolIds.alchemistSupplies,
    rarity: Rarity.COMMON,
  },
  {
    id: 164,
    name: "Brewer's Supplies",
    description:
      "Brewing is the art of producing beer. Not only does beer serve as an alcoholic beverage, but the process of brewing purifies water. Crafting beer takes weeks of fermentation, but only a few hours of work.",
    weight: { quantity: 9, unit: lb },
    flavorText:
      "Brewer's supplies allow you to create a variety of alcoholic beverages.",
    cost: { quantity: 20, unit: gp },
    types: [ItemTypes.TOOL],
    toolId: toolIds.brewerSupplies,
    rarity: Rarity.COMMON,
  },
  {
    id: 165,
    name: "Calligrapher's Supplies",
    description:
      "Calligraphy treats writing as a delicate, beautiful art. Calligraphers produce text that is pleasing to the eye, using a style that is difficult to forge. Their supplies also give them some ability to examine scripts and determine if they are legitimate, since a calligrapher's training involves long hours of studying writing and attempting to replicate its style and design.",
    weight: { quantity: 5, unit: lb },
    flavorText:
      "Calligrapher's supplies allow you to create beautiful, ornate writing.",
    cost: { quantity: 10, unit: gp },
    types: [ItemTypes.TOOL],
    rarity: Rarity.COMMON,
  },
  {
    id: 166,
    name: "Carpenter's Tools",
    description:
      "Carpenter's tools allow you to craft wooden items, including furniture and weapons. They also allow you to repair wooden structures.",
    weight: { quantity: 6, unit: lb },
    flavorText:
      "Carpenter's tools allow you to craft wooden items, including furniture and weapons.",
    cost: { quantity: 8, unit: gp },
    types: [ItemTypes.TOOL],
    toolId: toolIds.carpenterTools,
    rarity: Rarity.COMMON,
  },
  {
    id: 167,
    name: "Cartographer's Tools",
    description:
      "Using cartographer's tools, you can create accurate maps to make travel easier for yourself and those who come after you. These maps can range from large-scale depictions of mountain ranges to diagrams that show the layout of a dungeon level.",
    weight: { quantity: 6, unit: lb },
    flavorText:
      "Cartographer's tools allow you to create accurate maps to make travel easier for yourself and those who come after you.",
    cost: { quantity: 15, unit: gp },
    types: [ItemTypes.TOOL],
    toolId: toolIds.cartographerTools,
    rarity: Rarity.COMMON,
  },
  {
    id: 168,
    name: "Cobbler's Tools",
    description:
      "Although the cobbler's trade might seem too humble for an adventurer, a good pair of boots will see a character across rugged wilderness and through deadly dungeons.",
    weight: { quantity: 5, unit: lb },
    cost: { quantity: 5, unit: gp },
    types: [ItemTypes.TOOL],
    flavorText: "Cobbler's tools allow you to repair and create footwear.",
    toolId: toolIds.cobblerTools,
    rarity: Rarity.COMMON,
  },
  {
    id: 169,
    name: "Cook's Utensils",
    description:
      "Adventuring is a hard life. With a cook along on the journey, your meals will be much better than the typical mix of hardtack and dried fruit.",
    weight: { quantity: 8, unit: lb },
    flavorText: "Cook's utensils allow you to prepare and cook food.",
    cost: { quantity: 1, unit: gp },
    types: [ItemTypes.TOOL],
    toolId: toolIds.cookUtensils,
    rarity: Rarity.COMMON,
  },
  {
    id: 170,
    name: "Disguise Kit",
    description:
      "The perfect tool for anyone who wants to engage in trickery, a disguise kit enables its owner to adopt a false identity.",
    weight: { quantity: 3, unit: lb },
    flavorText: "A disguise kit allows you to create a new identity.",
    cost: { quantity: 25, unit: gp },
    types: [ItemTypes.TOOL],
    toolId: toolIds.disguiseKit,
    rarity: Rarity.COMMON,
  },
  {
    id: 171,
    name: "Forgery Kit",
    description:
      "A forgery kit is designed to duplicate documents and to make it easier to copy a person's seal or signature.",
    weight: { quantity: 5, unit: lb },
    flavorText: "A forgery kit allows you to create false documents.",
    cost: { quantity: 15, unit: gp },
    types: [ItemTypes.TOOL],
    toolId: toolIds.forgeryKit,
    rarity: Rarity.COMMON,
  },
  {
    id: 172,
    name: "Gaming Kit",
    flavorText: "A gaming set allows you to play a specific game.",
    description:
      "A gaming set represents a collection of game pieces and the rules for playing a game of skill or chance.",
    weight: { quantity: 5, unit: lb },
    cost: { quantity: 5, unit: gp },
    types: [ItemTypes.TOOL],
    toolId: toolIds.gamingKit,
    rarity: Rarity.COMMON,
  },
  {
    id: 173,
    name: "Glassblower's Tools",
    description:
      "Someone who is proficient with glassblower's tools has not only the ability to shape glass, but also specialized knowledge of the methods used to produce glass objects.",
    weight: { quantity: 5, unit: lb },
    cost: { quantity: 30, unit: gp },
    types: [ItemTypes.TOOL],
    flavorText: "Glassblower's tools allow you to shape glass.",
    toolId: toolIds.glassblowerTools,
    rarity: Rarity.COMMON,
  },
  {
    id: 174,
    name: "Herbalism Kit",
    description:
      "Proficiency with an herbalism kit allows you to identify plants and safely collect their useful elements.",
    weight: { quantity: 3, unit: lb },
    cost: { quantity: 5, unit: gp },
    types: [ItemTypes.TOOL],
    flavorText: "An herbalism kit allows you to create potions and salves.",
    toolId: toolIds.herbalismKit,
    rarity: Rarity.COMMON,
  },
  {
    id: 175,
    name: "Jeweler's Tools",
    description:
      "Training with jeweler's tools includes the basic techniques needed to beautify gems. It also gives you expertise in identifying precious stones.",
    weight: { quantity: 2, unit: lb },
    flavorText: "Jeweler's tools allow you to create and repair jewelry.",
    cost: { quantity: 25, unit: gp },
    types: [ItemTypes.TOOL],
    toolId: toolIds.jewelerTools,
    rarity: Rarity.COMMON,
  },

  {
    id: 177,
    name: "Leatherworker's Tools",
    description:
      "Knowledge of leatherworking extends to lore concerning animal hides and their properties. It also confers knowledge of leather armor and similar goods.",
    weight: { quantity: 5, unit: lb },
    cost: { quantity: 5, unit: gp },
    types: [ItemTypes.TOOL],
    flavorText:
      "Leatherworker's tools allow you to create and repair leather goods.",
    toolId: toolIds.leatherworkerTools,
    rarity: Rarity.COMMON,
  },
  {
    id: 178,
    name: "Mason's Tools",
    description:
      "Mason's tools allow you to craft stone structures, including walls and buildings crafted from brick.",
    weight: { quantity: 8, unit: lb },
    cost: { quantity: 10, unit: gp },
    flavorText: "Mason's tools allow you to craft stone structures.",
    types: [ItemTypes.TOOL],
    toolId: toolIds.masonTools,
    rarity: Rarity.COMMON,
  },
  {
    id: 179,
    name: "Musical Instrument",
    description:
      "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument.",
    types: [ItemTypes.TOOL],
    flavorText: "A musical instrument allows you to create music.",
    toolId: toolIds.musicalInstrument,
    rarity: Rarity.COMMON,
  },
  {
    id: 180,
    name: "Navigator's Tools",
    description:
      "Proficiency with navigator's tools helps you determine a true course based on observing the stars. It also grants you insight into charts and maps while developing your sense of direction.",
    weight: { quantity: 2, unit: lb },
    cost: { quantity: 25, unit: gp },
    flavorText: "Navigator's tools allow you to determine your location.",
    types: [ItemTypes.TOOL],
    toolId: toolIds.navigatorsTools,
    rarity: Rarity.COMMON,
  },
  {
    id: 181,
    name: "Painter's Supplies",
    description:
      "Proficiency with painter's supplies represents your ability to paint and draw. You also acquire an understanding of art history, which can aid you in examining works of art.",
    weight: { quantity: 5, unit: lb },
    cost: { quantity: 10, unit: gp },
    flavorText: "Painter's supplies allow you to create art.",
    types: [ItemTypes.TOOL],
    toolId: toolIds.paintersSupplies,
    rarity: Rarity.COMMON,
  },
  {
    id: 182,
    name: "Poisoner's Kit",
    description:
      "A poisoner's kit is a favored resource for thieves, assassins, and others who engage in skulduggery. It allows you to apply poisons and create them from various materials. Your knowledge of poisons also helps you treat them.",
    weight: { quantity: 2, unit: lb },
    cost: { quantity: 50, unit: gp },
    flavorText: "A poisoner's kit allows you to create and apply poisons.",
    types: [ItemTypes.TOOL],
    toolId: toolIds.poisonersKit,
    rarity: Rarity.COMMON,
  },
  {
    id: 183,
    name: "Potter's Tools",
    description:
      "Potter's tools are used to create a variety of ceramic objects, most typically pots and similar vessels.",
    weight: { quantity: 3, unit: lb },
    flavorText: "Potter's tools allow you to create ceramic objects.",
    cost: { quantity: 10, unit: gp },
    types: [ItemTypes.TOOL],
    toolId: toolIds.pottersTools,
    rarity: Rarity.COMMON,
  },
  {
    id: 184,
    name: "Smith's Tools",
    description:
      "Smith's tools allow you to work metal, beating it to alter its shape, repair damage, or work raw ingots into useful items.",
    weight: { quantity: 8, unit: lb },
    cost: { quantity: 20, unit: gp },
    flavorText: "Smith's tools allow you to work metal.",
    types: [ItemTypes.TOOL],
    rarity: Rarity.COMMON,
    toolId: toolIds.smithTools,
  },
  {
    id: 185,
    name: "Thieves' Tools",
    description:
      "Perhaps the most common tools used by adventurers, thieves' tools are designed for picking locks and foiling traps. Proficiency with the tools also grants you a general knowledge of traps and locks.",
    weight: { quantity: 1, unit: lb },
    cost: { quantity: 25, unit: gp },
    flavorText: "Thieves' tools allow you to pick locks and disarm traps.",
    types: [ItemTypes.TOOL],
    rarity: Rarity.COMMON,
    toolId: toolIds.thievesTools,
  },
  {
    id: 186,
    name: "Tinker's Tools",
    description:
      "A set of tinker's tools is designed to enable you to repair many mundane objects. Though you can't manufacture much with tinker's tools, you can mend torn clothes, sharpen a worn sword, and patch a tattered suit of chain mail.",
    weight: { quantity: 10, unit: lb },
    cost: { quantity: 50, unit: gp },
    types: [ItemTypes.TOOL],
    flavorText: "Tinker's tools allow you to repair objects.",
    rarity: Rarity.COMMON,
    toolId: toolIds.tinkersTools,
  },
  {
    id: 187,
    name: "Weaver's Tools",
    description:
      "Weaver's tools allow you to create cloth and tailor it into articles of clothing.",
    weight: { quantity: 5, unit: lb },
    cost: { quantity: 1, unit: gp },
    flavorText: "Weaver's tools allow you to create and repair clothing.",
    types: [ItemTypes.TOOL],
    rarity: Rarity.COMMON,
    toolId: toolIds.weaversTools,
  },
  {
    id: 188,
    name: "Woodcarver's Tools",
    description:
      "Woodcarver's tools allow you to craft intricate objects from wood, such as wooden tokens or arrows.",
    weight: { quantity: 5, unit: lb },
    cost: { quantity: 1, unit: gp },
    flavorText: "Woodcarver's tools allow you to create wooden objects.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.TOOL],
    toolId: toolIds.woodcarversTools,
  },
  {
    id: 189,
    name: "Dice Set",
    description:
      "A dice set is a collection of dice used to play a variety of games.",
    weight: { quantity: 0, unit: lb },
    flavorText: "A dice set allows you to play games that require dice.",
    cost: { quantity: 1, unit: sp },
    rarity: Rarity.COMMON,
    types: [ItemTypes.TOOL],
    toolId: toolIds.diceSet,
  },
  {
    id: 190,
    name: "Dragonchess Set",
    description:
      "Dragonchess is a game of strategy and cunning that pits two players against each other in a battle of wits.",
    weight: { quantity: 0.5, unit: lb },
    flavorText:
      "Dragonchess is a game of strategy and cunning that pits two players against each other in a battle of wits.",
    cost: { quantity: 1, unit: gp },
    rarity: Rarity.COMMON,
    types: [ItemTypes.TOOL],
    toolId: toolIds.dragonchessSet,
  },
  {
    id: 191,
    name: "Playing Card Set",
    description:
      "A playing card set is a collection of cards used to play a variety of games.",
    cost: { quantity: 5, unit: sp },
    rarity: Rarity.COMMON,
    flavorText:
      "A playing card set allows you to play games that require cards.",
    types: [ItemTypes.TOOL],
    toolId: toolIds.playingCardSet,
  },
  {
    id: 192,
    name: "Three Dragon Ante Set",
    description:
      "Three-Dragon Ante is a game of chance and skill that pits two or more players against each other in a battle of wits.",
    rarity: Rarity.COMMON,
    flavorText:
      "Three-Dragon Ante is a game of chance and skill that pits two or more players against each other in a battle of wits.",
    cost: { quantity: 1, unit: gp },
    types: [ItemTypes.TOOL],
    toolId: toolIds.threeDragonAnteSet,
  },
  {
    id: 193,
    name: "Bagpipes",
    description:
      "Bagpipes are a musical instrument that consists of a bag, a chanter, and one or more drones.",
    rarity: Rarity.COMMON,

    weight: { quantity: 6, unit: lb },
    flavorText:
      "Bagpipes are a musical instrument that consists of a bag, a chanter, and one or more drones.",
    cost: { quantity: 30, unit: gp },
    types: [ItemTypes.TOOL],
    toolId: toolIds.bagpipes,
  },
  {
    id: 194,
    name: "Drum",
    description:
      "A drum is a musical instrument that produces sound by being struck with a stick or the hand.",
    weight: { quantity: 3, unit: lb },
    flavorText:
      "A drum is a musical instrument that produces sound by being struck with a stick or the hand.",
    rarity: Rarity.COMMON,
    cost: { quantity: 6, unit: gp },
    types: [ItemTypes.TOOL],
    toolId: toolIds.drum,
  },
  {
    id: 195,
    name: "Dulcimer",
    description:
      "A dulcimer is a musical instrument that produces sound by being struck with hammers.",
    weight: { quantity: 10, unit: lb },
    cost: { quantity: 25, unit: gp },
    flavorText:
      "A dulcimer is a musical instrument that produces sound by being struck with hammers.",
    types: [ItemTypes.TOOL],
    rarity: Rarity.COMMON,
    toolId: toolIds.dulcimer,
  },
  {
    id: 196,
    name: "Flute",
    description:
      "A flute is a musical instrument that produces sound by blowing air across an opening.",
    weight: { quantity: 1, unit: lb },
    cost: { quantity: 2, unit: gp },
    flavorText: "A flute allows you to create music.",
    types: [ItemTypes.TOOL],
    rarity: Rarity.COMMON,
    toolId: toolIds.flute,
  },
  {
    id: 197,
    name: "Lute",
    description:
      "A lute is a musical instrument that produces sound by plucking strings.",
    weight: { quantity: 2, unit: lb },
    cost: { quantity: 35, unit: gp },
    flavorText:
      "A lute is a musical instrument that produces sound by plucking strings.",
    types: [ItemTypes.TOOL],
    rarity: Rarity.COMMON,
    toolId: toolIds.lute,
  },
  {
    id: 198,
    name: "Lyre",
    description:
      "A lyre is a musical instrument that produces sound by plucking strings.",
    weight: { quantity: 2, unit: lb },
    cost: { quantity: 30, unit: gp },
    rarity: Rarity.COMMON,

    flavorText:
      "A lyre is a musical instrument that produces sound by plucking strings.",
    types: [ItemTypes.TOOL],
    toolId: toolIds.lyre,
  },
  {
    id: 199,
    name: "Horn",
    description:
      "A horn is a musical instrument that produces sound by being blown into.",
    weight: { quantity: 2, unit: lb },
    rarity: Rarity.COMMON,
    cost: { quantity: 3, unit: gp },
    flavorText:
      "A horn is a musical instrument that produces sound by being blown into.",
    types: [ItemTypes.TOOL],
    toolId: toolIds.horn,
  },
  {
    id: 200,
    name: "Pan Flute",
    description:
      "A pan flute is a musical instrument that produces sound by blowing air across an opening.",
    weight: { quantity: 2, unit: lb },
    cost: { quantity: 12, unit: gp },
    rarity: Rarity.COMMON,
    flavorText:
      "A pan flute is a musical instrument that produces sound by blowing air across an opening.",
    types: [ItemTypes.TOOL],
    toolId: toolIds.panFlute,
  },
  {
    id: 201,
    name: "Shawm",
    description:
      "A shawm is a musical instrument that produces sound by being blown into.",
    weight: { quantity: 1, unit: lb },
    cost: { quantity: 2, unit: gp },
    rarity: Rarity.COMMON,
    flavorText:
      "A shawm is a musical instrument that produces sound by being blown into.",
    types: [ItemTypes.TOOL],
    toolId: toolIds.shawm,
  },
  {
    id: 202,
    name: "Viol",
    description:
      "A viol is a musical instrument that produces sound by being bowed or plucked.",
    weight: { quantity: 1, unit: lb },
    cost: { quantity: 30, unit: gp },
    rarity: Rarity.COMMON,
    flavorText:
      "A viol is a musical instrument that produces sound by being bowed or plucked.",
    types: [ItemTypes.TOOL],
    toolId: toolIds.viol,
  },
  {
    id: 203,
    name: "Burglar's Pack",
    description:
      "A burglar's pack is a collection of items that are useful for breaking and entering.",
    cost: { quantity: 16, unit: gp },
    rarity: Rarity.COMMON,
    types: [ItemTypes.EQUIPMENT_PACK],
    flavorText:
      "A burglar's pack is a collection of items that are useful for breaking and entering.",
    equipmentPackId: equipmentPackIds.burglar,
  },
  {
    id: 204,
    name: "Diplomat's Pack",
    description:
      "A diplomat's pack is a collection of items that are useful for negotiating with others.",
    cost: { quantity: 39, unit: gp },
    rarity: Rarity.COMMON,
    types: [ItemTypes.EQUIPMENT_PACK],
    flavorText:
      "A diplomat's pack is a collection of items that are useful for negotiating with others.",
    equipmentPackId: equipmentPackIds.diplomat,
  },
  {
    id: 205,
    name: "Dungeoneer's Pack",
    description:
      "A dungeoneer's pack is a collection of items that are useful for exploring dungeons.",
    cost: { quantity: 12, unit: gp },
    rarity: Rarity.COMMON,
    types: [ItemTypes.EQUIPMENT_PACK],
    flavorText:
      "A dungeoneer's pack is a collection of items that are useful for exploring dungeons.",
    equipmentPackId: equipmentPackIds.dungeoneer,
  },
  {
    id: 206,
    name: "Entertainer's Pack",
    description:
      "An entertainer's pack is a collection of items that are useful for performing.",
    cost: { quantity: 40, unit: gp },
    rarity: Rarity.COMMON,
    types: [ItemTypes.EQUIPMENT_PACK],
    flavorText:
      "An entertainer's pack is a collection of items that are useful for performing.",
    equipmentPackId: equipmentPackIds.entertainer,
  },
  {
    id: 207,
    name: "Explorer's Pack",
    description:
      "An explorer's pack is a collection of items that are useful for traveling.",
    cost: { quantity: 10, unit: gp },
    rarity: Rarity.COMMON,
    types: [ItemTypes.EQUIPMENT_PACK],
    flavorText:
      "An explorer's pack is a collection of items that are useful for traveling.",
    equipmentPackId: equipmentPackIds.explorer,
  },
  {
    id: 208,
    name: "Priest's Pack",
    description:
      "A priest's pack is a collection of items that are useful for performing religious rites.",
    cost: { quantity: 19, unit: gp },
    rarity: Rarity.COMMON,
    types: [ItemTypes.EQUIPMENT_PACK],
    flavorText:
      "A priest's pack is a collection of items that are useful for performing religious rites.",
    equipmentPackId: equipmentPackIds.priest,
  },
  {
    id: 209,
    name: "Scholar's Pack",
    description:
      "A scholar's pack is a collection of items that are useful for studying.",
    rarity: Rarity.COMMON,
    cost: { quantity: 40, unit: gp },
    types: [ItemTypes.EQUIPMENT_PACK],
    flavorText:
      "A scholar's pack is a collection of items that are useful for studying.",
    equipmentPackId: equipmentPackIds.scholar,
  },
  {
    id: 210,
    name: "Gold Piece",
    description: "A gold piece is a coin made of gold.",
    cost: { quantity: 1, unit: gp },
    weight: { quantity: 1 / 50, unit: lb },
    rarity: Rarity.COMMON,
    types: [ItemTypes.CURRENCY],
    flavorText: "A gold piece is a coin made of gold.",
  },
  {
    id: 211,
    name: "Platinum Piece",
    description: "A platinum piece is a coin made of platinum.",
    cost: { quantity: 1, unit: pp },
    weight: { quantity: 1 / 50, unit: lb },
    rarity: Rarity.COMMON,
    types: [ItemTypes.CURRENCY],
    flavorText: "A platinum piece is a coin made of platinum.",
  },
  {
    id: 212,
    name: "Silver Piece",
    description: "A silver piece is a coin made of silver.",
    cost: { quantity: 1, unit: sp },
    weight: { quantity: 1 / 50, unit: lb },
    rarity: Rarity.COMMON,
    types: [ItemTypes.CURRENCY],
    flavorText: "A silver piece is a coin made of silver.",
  },
  {
    id: 213,
    name: "Copper Piece",
    description: "A copper piece is a coin made of copper.",
    cost: { quantity: 1, unit: cp },
    weight: { quantity: 1 / 50, unit: lb },
    rarity: Rarity.COMMON,
    types: [ItemTypes.CURRENCY],
    flavorText: "A copper piece is a coin made of copper.",
  },
  {
    id: 214,
    name: "Electrum Piece",
    description: "An electrum piece is a coin made of electrum.",
    cost: { quantity: 1, unit: ep },
    weight: { quantity: 1 / 50, unit: lb },
    rarity: Rarity.COMMON,
    types: [ItemTypes.CURRENCY],
    flavorText: "An electrum piece is a coin made of electrum.",
  },
  {
    id: 215,
    name: "Prayer Book",
    description:
      "A prayer book is presumably a book containing prayers and religious texts.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.MISC],
    flavorText:
      "A prayer book is presumably a book containing prayers and religious texts.",
  },
  {
    id: 216,
    name: "Prayer Wheel",
    description:
      "A prayer wheel is presumably a cylindrical wheel on a spindle made from metal, wood, stone, leather, or coarse cotton.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.MISC],
    flavorText:
      "A prayer wheel is presumably a cylindrical wheel on a spindle made from metal, wood, stone, leather, or coarse cotton.",
  },
  {
    id: 217,
    name: "Incense Stick",
    description:
      "An incense stick is a thin piece of wood or bamboo coated with incense.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.MISC],
    flavorText:
      "An incense stick is a thin piece of wood or bamboo coated with incense.",
  },
  {
    id: 218,
    name: "Trinket",
    description:
      "A trinket is a small item of little value, such as a piece of jewelry or a small toy.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.MISC],
    flavorText:
      "A trinket is a small item of little value, such as a piece of jewelry or a small toy.",
  },
  {
    id: 219,
    name: "Bronze Discus",
    description: "A bronze discus is a heavy, circular throwing disc.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.MISC],
    flavorText: "A bronze discus is a heavy, circular throwing disc.",
  },
  {
    id: 220,
    name: "Leather Ball",
    description: "A leather ball is a round object used in games.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.MISC],
    flavorText: "A leather ball is a round object used in games.",
  },
  {
    id: 221,
    name: "Uniform",
    description:
      "A uniform is a set of standard clothing worn by members of an organization.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.CLOTHES],
    flavorText:
      "A uniform is a set of standard clothing worn by members of an organization.",
  },
  {
    id: 222,
    name: "Chisel",
    description: "A chisel is a tool with a sharp edge used for cutting.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.MISC],
    flavorText: "A chisel is a tool with a sharp edge used for cutting.",
  },
  //gemstones
  {
    id: 223,
    name: "Azurite",
    description: "Azurite is an opaque mottled deep blue gemstone.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    flavorText: "Azurite is an opaque mottled deep blue gemstone.",
    cost: { quantity: 10, unit: gp },
  },
  {
    id: 224,
    name: "Banded Agate",
    description: "Banded agate is a translucent striped gemstone.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    flavorText: "Banded agate is a translucent striped gemstone.",
    cost: { quantity: 10, unit: gp },
  },
  {
    id: 225,
    name: "Blue Quartz",
    description: "Blue quartz is a transparent pale blue gemstone.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    flavorText: "Blue quartz is a transparent pale blue gemstone.",
    cost: { quantity: 10, unit: gp },
  },
  {
    id: 226,
    name: "Eye Agate",
    description:
      "Eye agate is a gemstone made of translucent circles of gray, white, brown, blue, or green",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    flavorText:
      "Eye agate is a gemstone made of translucent circles of gray, white, brown, blue, or green",
    cost: { quantity: 10, unit: gp },
  },
  {
    id: 227,
    name: "Hematite",
    description: "Hematite is an opaque gray-black gemstone.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    flavorText: "Hematite is an opaque gray-black gemstone.",
    cost: { quantity: 10, unit: gp },
  },
  {
    id: 228,
    name: "Lapis Lazuli",
    description:
      "Lapis lazuli is an opaque light and dark blue gemstone with yellow flecks.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    flavorText:
      "Lapis lazuli is an opaque light and dark blue gemstone with yellow flecks.",
    cost: { quantity: 10, unit: gp },
  },
  {
    id: 229,
    name: "Malachite",
    description:
      "Malachite is an opaque striated light and dark green gemstone.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    flavorText:
      "Malachite is an opaque striated light and dark green gemstone.",
    cost: { quantity: 10, unit: gp },
  },
  {
    id: 230,
    name: "Moss Agate",
    description:
      "Moss agate is a translucent pink or yellow-white gemstone with mossy gray or green markings.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    flavorText:
      "Moss agate is a translucent pink or yellow-white gemstone with mossy gray or green markings.",
    cost: { quantity: 10, unit: gp },
  },
  {
    id: 231,
    name: "Obsidian",
    description: "Obsidian is an opaque black gemstone.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    flavorText: "Obsidian is an opaque black gemstone.",
    cost: { quantity: 10, unit: gp },
  },
  {
    id: 232,
    name: "Rhodochrosite",
    description: "Rhodochrosite is an opaque light pink gemstone.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    flavorText: "Rhodochrosite is an opaque light pink gemstone.",
    cost: { quantity: 10, unit: gp },
  },
  {
    id: 233,
    name: "Tiger Eye",
    description:
      "Tiger eye is a translucent brown gemstone with golden center.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    flavorText: "Tiger eye is a translucent brown gemstone with golden center.",
    cost: { quantity: 10, unit: gp },
  },
  {
    id: 234,
    name: "Turquoise",
    description: "Turquoise is an opaque light blue-green gemstone.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    flavorText: "Turquoise is an opaque light blue-green gemstone.",
    cost: { quantity: 10, unit: gp },
  },
  {
    id: 235,
    name: "Bloodstone",
    description: "Bloodstone is an opaque dark gray with red flecks gemstone.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    flavorText: "Bloodstone is an opaque dark gray with red flecks gemstone.",
    cost: { quantity: 50, unit: gp },
  },
  {
    id: 236,
    name: "Carnelian",
    description: "Carnelian is a translucent orange to red-brown gemstone.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    flavorText: "Carnelian is a translucent orange to red-brown gemstone.",
    cost: { quantity: 50, unit: gp },
  },
  {
    id: 237,
    name: "Chalcedony",
    description: "Chalcedony is an opaque white gemstone.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    flavorText: "Chalcedony is an opaque white gemstone.",
    cost: { quantity: 50, unit: gp },
  },
  {
    id: 238,
    name: "Chrysoprase",
    description: "Chrysoprase is a translucent apple green gemstone.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    cost: { quantity: 50, unit: gp },
    flavorText: "Chrysoprase is a translucent apple green gemstone.",
  },
  {
    id: 239,
    name: "Citrine",
    description: "Citrine is a translucent pale yellow to brown gemstone.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    cost: { quantity: 50, unit: gp },
    flavorText: "Citrine is a translucent pale yellow to brown gemstone.",
  },
  {
    id: 240,
    name: "Jasper",
    description: "Jasper is an opaque blue, black, or brown gemstone.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    cost: { quantity: 50, unit: gp },
    flavorText: "Jasper is an opaque blue, black, or brown gemstone.",
  },
  {
    id: 241,
    name: "Moonstone",
    description:
      "Moonstone is a translucent white with pale blue glow gemstone.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    cost: { quantity: 50, unit: gp },
    flavorText:
      "Moonstone is a translucent white with pale blue glow gemstone.",
  },
  {
    id: 242,
    name: "Onyx",
    description: "Onyx is an opaque black and white banded gemstone.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    cost: { quantity: 50, unit: gp },
    flavorText: "Onyx is an opaque black and white banded gemstone.",
  },
  {
    id: 243,
    name: "Quartz",
    description: "Quartz is a transparent white gemstone.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    cost: { quantity: 50, unit: gp },
    flavorText: "Quartz is a transparent white gemstone.",
  },
  {
    id: 244,
    name: "Sardonyx",
    description: "Sardonyx is an opaque red and white banded gemstone.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    cost: { quantity: 50, unit: gp },
    flavorText: "Sardonyx is an opaque red and white banded gemstone.",
  },
  {
    id: 245,
    name: "Star Rose Quartz",
    description:
      "Star rose quartz is a translucent rosy gemstone with white star.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.GEMSTONE],
    cost: { quantity: 50, unit: gp },
    flavorText:
      "Star rose quartz is a translucent rosy gemstone with white star.",
  },
  {
    id: 246,
    name: "Zircon",
    description: "Zircon is a transparent pale blue-green gemstone.",
    rarity: Rarity.COMMON,
    cost: { quantity: 50, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Zircon is a transparent pale blue-green gemstone.",
  },
  {
    id: 247,
    name: "Amber",
    description: "Amber is a transparent watery gold to rich gold",
    rarity: Rarity.COMMON,
    cost: { quantity: 100, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Amber is a transparent watery gold to rich gold",
  },
  {
    id: 248,
    name: "Amethyst",
    description: "Amethyst is a transparent deep purple gemstone.",
    rarity: Rarity.COMMON,
    cost: { quantity: 100, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Amethyst is a transparent deep purple gemstone.",
  },
  {
    id: 249,
    name: "Chrysoberyl",
    description: "Chrysoberyl is a transparent yellow-green gemstone.",
    rarity: Rarity.COMMON,
    cost: { quantity: 100, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Chrysoberyl is a transparent yellow-green gemstone.",
  },
  {
    id: 250,
    name: "Coral",
    description: "Coral is a opaque pink to red gemstone.",
    rarity: Rarity.COMMON,
    cost: { quantity: 100, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Coral is a opaque pink to red gemstone.",
  },
  {
    id: 251,
    name: "Garnet",
    description: "Garnet is an Opaque Crimson Gemstone.",
    rarity: Rarity.COMMON,

    cost: { quantity: 100, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Garnet is an Opaque Crimson Gemstone.",
  },
  {
    id: 252,
    name: "Jade",
    description:
      "Jade is a translucent translucent light green, deep green, or white gemstone.",
    rarity: Rarity.COMMON,
    cost: { quantity: 100, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText:
      "Jade is a translucent translucent light green, deep green, or white gemstone.",
  },
  {
    id: 253,
    name: "Jet",
    description: "Jet is an opaque deep black gemstone.",
    rarity: Rarity.COMMON,
    cost: { quantity: 100, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Jet is an opaque deep black gemstone.",
  },
  {
    id: 254,
    name: "Pearl",
    description: "Pearl is an opaque lustrous white gemstone.",
    rarity: Rarity.COMMON,
    cost: { quantity: 100, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Pearl is an opaque lustrous white gemstone.",
  },
  {
    id: 255,
    name: "Spinel",
    description:
      "Spinel is a transparent red, red-brown, or deep green gemstone.",
    rarity: Rarity.COMMON,
    cost: { quantity: 100, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText:
      "Spinel is a transparent red, red-brown, or deep green gemstone.",
  },
  {
    id: 256,
    name: "Tourmaline",
    description:
      "Tourmaline is a transparent pale green, blue, brown, or red gemstone.",
    rarity: Rarity.COMMON,
    cost: { quantity: 100, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText:
      "Tourmaline is a transparent pale green, blue, brown, or red gemstone.",
  },
  {
    id: 257,
    name: "Alexandrite",
    description: "Alexandrite is a transparent dark green gemstone.",
    rarity: Rarity.UNCOMMON,
    cost: { quantity: 500, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Alexandrite is a transparent dark green gemstone.",
  },
  {
    id: 258,
    name: "Aquamarine",
    description: "Aquamarine is a transparent pale blue-green gemstone.",
    rarity: Rarity.UNCOMMON,
    cost: { quantity: 500, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Aquamarine is a transparent pale blue-green gemstone.",
  },
  {
    id: 259,
    name: "Black Pearl",
    description: "Black pearl is an opaque pure black gemstone.",
    rarity: Rarity.UNCOMMON,
    cost: { quantity: 500, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Black pearl is an opaque pure black gemstone.",
  },
  {
    id: 260,
    name: "Blue Spinel",
    description: "Blue spinel is a transparent deep blue gemstone.",
    rarity: Rarity.UNCOMMON,
    cost: { quantity: 500, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Blue spinel is a transparent deep blue gemstone.",
  },
  {
    id: 261,
    name: "Peridot",
    description: "Peridot is a transparent rich olive green gemstone.",
    rarity: Rarity.UNCOMMON,
    cost: { quantity: 500, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Peridot is a transparent rich olive green gemstone.",
  },
  {
    id: 262,
    name: "Topaz",
    description: "Topaz is a transparent golden yellow gemstone.",
    rarity: Rarity.UNCOMMON,
    cost: { quantity: 500, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Topaz is a transparent golden yellow gemstone.",
  },
  {
    id: 263,
    name: "Black Opal",
    description:
      "Black opal is a translucent dark green with black mottling gemstone.",
    rarity: Rarity.RARE,
    cost: { quantity: 1000, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText:
      "Black opal is a translucent dark green with black mottling gemstone.",
  },
  {
    id: 264,
    name: "Blue Sapphire",
    description:
      "Blue sapphire is a transparent blue-white to medium blue gemstone.",
    rarity: Rarity.RARE,
    cost: { quantity: 1000, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText:
      "Blue sapphire is a transparent blue-white to medium blue gemstone.",
  },
  {
    id: 265,
    name: "Emerald",
    description: "Emerald is a transparent deep bright green gemstone.",
    rarity: Rarity.RARE,
    cost: { quantity: 1000, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Emerald is a transparent deep bright green gemstone.",
  },
  {
    id: 266,
    name: "Fire Opal",
    description: "Fire opal is a translucent fiery red gemstone.",
    rarity: Rarity.RARE,
    cost: { quantity: 1000, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Fire opal is a translucent fiery red gemstone.",
  },
  {
    id: 267,
    name: "Opal",
    description:
      "Opal is a translucent pale blue with green and gold mottling gemstone.",

    rarity: Rarity.RARE,
    cost: { quantity: 1000, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText:
      "Opal is a translucent pale blue with green and gold mottling gemstone.",
  },
  {
    id: 268,
    name: "Star Ruby",
    description: "Star ruby is a translucent ruby with white star gemstone.",
    rarity: Rarity.RARE,
    cost: { quantity: 1000, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Star ruby is a translucent ruby with white star gemstone.",
  },
  {
    id: 269,
    name: "Star Sapphire",
    description:
      "Star sapphire is a translucent sapphire with white star gemstone.",
    rarity: Rarity.RARE,
    cost: { quantity: 1000, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText:
      "Star sapphire is a translucent sapphire with white star gemstone.",
  },
  {
    id: 270,
    name: "Yellow Sapphire",
    description: "Yellow sapphire is a transparent fiery yellow gemstone.",
    rarity: Rarity.RARE,
    cost: { quantity: 1000, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Yellow sapphire is a transparent fiery yellow gemstone.",
  },
  {
    id: 271,
    name: "Black Sapphire",
    description: "Black sapphire is a transparent lustrous black gemstone.",
    rarity: Rarity.RARE,
    cost: { quantity: 5000, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Black sapphire is a transparent lustrous black gemstone.",
  },
  {
    id: 272,
    name: "Diamond",
    description:
      "Diamond is a transparent blue-white, canary, pink, brown or blue gemstone.",
    rarity: Rarity.RARE,
    cost: { quantity: 5000, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText:
      "Diamond is a transparent blue-white, canary, pink, brown or blue gemstone.",
  },
  {
    id: 273,
    name: "Jacinth",
    description: "Jacinth is a transparent fiery orange gemstone.",
    rarity: Rarity.RARE,
    cost: { quantity: 5000, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Jacinth is a transparent fiery orange gemstone.",
  },
  {
    id: 274,
    name: "Ruby",
    description: "Ruby is a transparent deep crimson gemstone.",
    rarity: Rarity.RARE,
    cost: { quantity: 5000, unit: gp },
    types: [ItemTypes.GEMSTONE],
    flavorText: "Ruby is a transparent deep crimson gemstone.",
  },
  {
    id: 275,
    name: "Quill",
    description: "A quill is a pen made from a bird's feather.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.MISC],
    flavorText: "A quill is a pen made from a bird's feather.",
    cost: { quantity: 2, unit: cp },
  },
  {
    id: 276,
    name: "Penknife",
    description: "A penknife is a small knife used for cutting quills.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.MISC],
    flavorText: "A penknife is a small knife used for cutting quills.",
  },
  {
    id: 277,
    name: "Badge",
    description:
      "A badge is a small piece of metal worn on clothing. It typically displays a symbol or logo.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.MISC],
    flavorText:
      "A badge is a small piece of metal worn on clothing. It typically displays a symbol or logo.",
  },
  {
    id: 278,
    name: "Jewelry",
    description: "Jewelry is a decorative item worn for personal adornment.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.MISC],
    flavorText: "Jewelry is a decorative item worn for personal adornment.",
    cost: { quantity: 10, unit: gp },
  },
  {
    id: 279,
    name: "Fishing Lure",
    description:
      "A fishing lure is an artificial fishing bait used to attract fish.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.MISC],
    flavorText:
      "A fishing lure is an artificial fishing bait used to attract fish.",
  },
  {
    id: 280,
    name: "Leather Boots",
    description: "Leather boots are shoes made from leather.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.CLOTHES],
    flavorText: "Leather boots are shoes made from leather.",
  },
  {
    id: 281,
    name: "Stone",
    description: "A stone is a small rock.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.MISC],
    flavorText: "A stone is a small rock.",
  },
  {
    id: 282,
    name: "Twig",
    description: "A twig is a small thin branch.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.MISC],
    flavorText: "A twig is a small thin branch.",
  },
  {
    id: 283,
    name: "Monster Hunter Pack",
    description:
      "A monster hunter's pack is a collection of items that are useful for hunting monsters.",
    flavorText:
      "A monster hunter's pack is a collection of items that are useful for hunting monsters.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.EQUIPMENT_PACK],
    equipmentPackId: equipmentPackIds.monster,
  },
  {
    id: 284,
    name: "Wooden Stake",
    description: "A wooden stake is a pointed stick made of wood.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.MISC],
    flavorText: "A wooden stake is a pointed stick made of wood.",
  },
  {
    id: 285,
    name: "Steel Mirror",
    description: "A steel mirror is a mirror made of steel.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.MISC],
    flavorText: "A steel mirror is a mirror made of steel.",
  },
  {
    id: 286,
    name: "Leather vest",
    description: "A leather vest is a piece of clothing made from leather.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.CLOTHES],
    flavorText: "A leather vest is a piece of clothing made from leather.",
  },
  {
    id: 287,
    name: "Merchant's Scale",
    description: "A merchant's scale is a scale used for weighing items.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.MISC],
    flavorText: "A merchant's scale is a scale used for weighing items.",
    weight: { quantity: 3, unit: lb },
    cost: { quantity: 5, unit: gp },
  },
  {
    id: 288,
    name: "Pack Saddle",
    description: "A pack saddle is a saddle used for carrying loads.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.MISC],
    flavorText: "A pack saddle is a saddle used for carrying loads.",
    weight: { quantity: 15, unit: lb },
    cost: { quantity: 5, unit: gp },
  },
  {
    id: 289,
    name: "Rowboat",
    description: "A rowboat is a small boat propelled by oars.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.MISC],
    flavorText: "A rowboat is a small boat propelled by oars.",
    weight: { quantity: 100, unit: lb },
    cost: { quantity: 50, unit: gp },
  },
  {
    id: 290,
    name: "Cloak",
    description: "A cloak is a long, loose outer garment.",
    rarity: Rarity.COMMON,
    types: [ItemTypes.CLOTHES],
    flavorText: "A cloak is a long, loose outer garment.",
  },
  //adamantine armor missing for now
  {
    id: itemIds.amuletOfHealth,
    name: "Amulet of Health",
    description:
      "An amulet of health is a magical amulet that grants the wearer an enhancement bonus to Constitution.",
    rarity: Rarity.RARE,
    types: [ItemTypes.AMULET, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "An amulet of health is a magical amulet that grants the wearer an enhancement bonus to Constitution.",
    features: [
      {
        name: "Amulet of Health",
        description:
          "Your Constitution score is 19 while you wear this amulet. It has no effect on you if your Constitution is already 19 or higher.",
      },
    ],
  },
  {
    id: itemIds.amuletOfProofAgainstDetectionAndLocation,
    name: "Amulet of Proof Against Detection and Location",
    description:
      "An amulet of proof against detection and location is a magical amulet that grants the wearer protection from divination magic.",
    rarity: Rarity.UNCOMMON,
    types: [ItemTypes.AMULET, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "An amulet of proof against detection and location is a magical amulet that grants the wearer protection from divination magic.",
    features: [
      {
        name: "Proof Against Detection and Location",
        description:
          "While wearing this amulet, you are hidden from divination magic. You can't be targeted by such magic or perceived through magical scrying sensors.",
      },
    ],
  },
  {
    id: itemIds.amuletOfThePlanes,
    name: "Amulet of the Planes",
    description:
      "An amulet of the planes is a magical amulet that grants the wearer the ability to cast the plane shift spell.",
    rarity: Rarity.VERY_RARE,
    types: [ItemTypes.AMULET, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "An amulet of the planes is a magical amulet that grants the wearer the ability to cast the plane shift spell.",
    features: [
      {
        name: "Amulet of the Planes",
        description:
          "While wearing this amulet, you can use an action to name a location that you are familiar with on another plane of existence. Then make a DC 15 Intelligence check. On a successful check, you cast the plane shift spell. On a failure, you and each creature and object within 15 feet of you travel to a random destination. Roll a d100. On a 1–60, you travel to a random location on the plane you named. On a 61–100, you travel to a randomly determined plane of existence.",
      },
    ],
  },
  {
    id: itemIds.animatedShield,
    description:
      "An animated shield is a magical shield that can defend itself.",
    name: "Animated Shield",
    rarity: Rarity.VERY_RARE,
    types: [ItemTypes.ARMOR, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "An animated shield is a magical shield that can defend itself.",
    armorId: armorIds.shield,
  },
  //make statblock
  // {
  //   id: itemIds.apparatusOfTheCrab,
  //   name: "Apparatus of the Crab",
  //   description:
  //     "An apparatus of the crab is a magical item that is a large, lobster-like mechanical construct.",
  //   rarity: Rarity.LEGENDARY,
  //   types: [ItemTypes.WONDROUS_ITEM],
  //   flavorText:
  //     "An apparatus of the crab is a magical item that is a large, lobster-like mechanical construct.",
  //     features: [
  //       {
  //         name:
  //       }
  //     ]
  // },
  {
    id: itemIds.armorOfInvulnerability,
    name: "Armor of Invulnerability",
    description:
      "Armor of invulnerability is a magical armor that grants the wearer resistance to nonmagical weapons.",
    rarity: Rarity.LEGENDARY,
    types: [ItemTypes.ARMOR],
    armorId: armorIds.plateArmor,
    requiresAttunement: true,
    flavorText:
      "Armor of invulnerability is a magical armor that grants the wearer resistance to nonmagical weapons.",
    features: [
      {
        name: "Invulnerability",
        description:
          "You have resistance to nonmagical damage while you wear this armor. Additionally, you can use an action to make yourself immune to nonmagical damage for 10 minutes or until you are no longer wearing the armor. Once this special action is used, it can’t be used again until the next dawn.",
      },
    ],
  },
  //armor of resistance
  // armor of vulnerability
  {
    id: itemIds.arrowCatchingShield,
    name: "Arrow-Catching Shield",
    description:
      "An arrow-catching shield is a magical shield that can catch arrows.",
    rarity: Rarity.RARE,
    types: [ItemTypes.ARMOR],
    armorId: armorIds.shield,
    requiresAttunement: true,
    flavorText:
      "An arrow-catching shield is a magical shield that can catch arrows.",
    features: [
      {
        name: "Arrow-Catching",
        description:
          "You gain a +2 bonus to AC against ranged attacks while you wield this shield. This bonus is in addition to the shield’s normal bonus to AC. In addition, whenever an attacker makes a ranged attack against a target within 5 feet of you, you can use your reaction to become the target of the attack instead.",
      },
    ],
  },
  {
    id: itemIds.bagOfBeans,
    name: "Bag of Beans",
    description:
      "A bag of beans is a magical bag that contains a number of beans that do different effects.",
    rarity: Rarity.RARE,
    types: [ItemTypes.WONDROUS_ITEM],
    weight: { quantity: 0.5, unit: lb },
    flavorText:
      "A bag of beans is a magical bag that contains a number of beans that do different effects.",
    features: [
      {
        name: "Bag of Beans",
        description:
          "Inside this heavy cloth bag are 3d4 dry beans. Thebag weighs 1/2 pound plus 1/4 pound for each bean it contains.\n\n If you dump the bag’s contents out on the ground, they explode in a 10-foot radius, extending from the beans. Each creature in the area, including you, must make a DC 15 Dexterity saving throw, taking 5d4 fire damage on a failed save, or half as much damage on a successful one. The fire ignites flammable objects in the area that aren’t being worn or carried.\n\n If you remove a bean from the bag, plant it in dirt or sand, and then water it, the bean produces an effect 1 minute later from the ground where it was planted. The GM can choose an effect from the following table, determine it randomly, or create an effect.",
        extendedTable: [
          {
            "": {
              headers: ["d100", "Effect"],
              data: [
                {
                  d100: "01",
                  Effect:
                    "5d4 toadstools sprout. If a creature eats a toadstool, roll any die. On an odd roll, the eater must succeed on a DC 15 Constitution saving throw or take 5d6 poison damage and become poisoned for 1 hour. On an even roll, the eater gains 5d6 temporary hit points for 1 hour.",
                },
                {
                  d100: "02 - 10",
                  Effect:
                    "5d4 toadstools sprout. If a creature eats a toadstool, roll any die. On an odd roll, the eater must succeed on a DC 15 Constitution saving throw or take 5d6 poison damage and become poisoned for 1 hour. On an even roll, the eater gains 5d6 temporary hit points for 1 hour.",
                },
                {
                  d100: "11 - 20",
                  Effect:
                    "A treant sprouts. There’s a 50 percent chance that the treant is chaotic evil and attacks.",
                },
                {
                  d100: "21 - 30",
                  Effect:
                    "An animate, immobile stone statue in your likeness rises. It makes verbal threats against you. If you leave it and others come near, it describes you as the most heinous of villains and directs the newcomers to find and attack you. If you are on the same plane of existence as the statue, it knows where you are. The statue becomes inanimate after 24 hours.",
                },
                {
                  d100: "31 - 40",
                  Effect:
                    "A campfire with blue flames springs forth and burns for 24 hours (or until it is extinguished).",
                },
                {
                  d100: "41 - 50",
                  Effect: "1d6 + 6 shriekers sprout.",
                },
                {
                  d100: "51 - 60",
                  Effect:
                    "1d4 + 8 bright pink toads crawl forth. Whenever a toad is touched, it transforms into a Large or smaller monster of the GM’s choice. The monster remains for 1 minute, then disappears in a puff of bright pink smoke",
                },
                {
                  d100: "61 - 70",
                  Effect: "A hungry bulette burrows up and attacks",
                },
                {
                  d100: "71 - 80",
                  Effect:
                    "A fruit tree grows. It has 1d10 + 20 fruit, 1d8 of which act as randomly determined magic potions, while one acts as an ingested poison of the GM’s choice. The tree vanishes after 1 hour. Picked fruit remains, retaining any magic for 30 days.",
                },
                {
                  d100: "81 - 90",
                  Effect:
                    "A nest of 1d4 + 3 eggs springs up. Any creature that eats an egg must make a DC 20 Constitution saving throw. On a successful save, a creature permanently increases its lowest ability score by 1, randomly choosing among equally low scores. On a failed save, the creature takes 10d6 force damage from an internal magical explosion.",
                },
                {
                  d100: "91 - 99",
                  Effect:
                    "A pyramid with a 60-­‐foot-­‐square base bursts upward. Inside is a sarcophagus containing a mummy lord. The pyramid is treated as the mummy lord’s lair, and its sarcophagus contains treasure of the GM’s choic",
                },
                {
                  d100: "00",
                  Effect:
                    "A giant beanstalk sprouts, growing to a height of the GM’s choice. The top leads where the GM chooses, such as to a great view, a cloud giant’s castle, or a different plane of existence.",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: itemIds.bagOfDevouring,
    name: "Bag of Devouring",
    description:
      "A bag of devouring is a magical bag that can consume objects and creatures.",
    rarity: Rarity.VERY_RARE,
    types: [ItemTypes.WONDROUS_ITEM],
    flavorText:
      "A bag of devouring is a magical bag that can consume objects and creatures.",
    features: [
      {
        name: "Devouring",
        description:
          "This bag superficially resembles a bag of holding but is a feeding orifice for a gigantic extradimensional creature. Turning the bag inside out closes the orifice.\n\nThe extradimensional creature attached to the bag can sense whatever is placed inside the bag. Animal or vegetable matter placed wholly in the bag is devoured and lost forever. When part of a living creature is placed in the bag, as happens when someone reaches inside it, there is a 50 percent chance that the creature is pulled inside the bag. A creature inside the bag can use its action to try to escape with a successful DC 15 Strength check. Another creature can use its action to reach into the bag to pull a creature out, doing so with a successful DC 20 Strength check (provided it isn’t pulled inside the bag first). Any creature that starts its turn inside the bag is devoured, its body destroyed.\n\nInanimate objects can be stored in the bag, which can hold a cubic foot of such material. However, once each day, the bag swallows any objects inside it and spits them out into another plane of existence. The GM determines the time and plane.\n\nIf the bag is pierced or torn, it is destroyed, and anything contained within it is transported to a random location on the Astral Plane.",
      },
    ],
  },
  {
    id: itemIds.bagOfHolding,
    name: "Bag of Holding",
    description:
      "A bag of holding is a magical bag that can store a large amount of items.",
    rarity: Rarity.UNCOMMON,
    types: [ItemTypes.WONDROUS_ITEM],
    weight: { quantity: 15, unit: lb },
    flavorText:
      "A bag of holding is a magical bag that can store a large amount of items.",
    features: [
      {
        name: "Holding",
        description:
          "This bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action.\n\nIf the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate.\n\nPlacing a bag of holding inside an extradimensional space created by a handy haversack, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can’t be reopened.",
      },
    ],
  },
  {
    id: itemIds.beadOfForce,
    name: "Bead of Force",
    description:
      "A bead of force is a magical bead that can create a force field around a target.",
    rarity: Rarity.RARE,
    types: [ItemTypes.WONDROUS_ITEM],
    weight: { quantity: 1, unit: oz },
    flavorText:
      "A bead of force is a magical bead that can create a force field around a target.",
    features: [
      {
        name: "Bead of Force",
        description:
          "This small black sphere measures 3/4 of an inch in diameter and weighs an ounce. Typically, 1d4 + 4 beads of force are found together.\n\nYou can use an action to throw the bead up to 60 feet. The bead explodes on impact and is destroyed. Each creature within a 10-foot radius of where the bead landed must succeed on a DC 15 Dexterity saving throw or take 5d4 force damage. A sphere of transparent force then encloses the area for 1 minute. Any creature that failed the save and is completely within the area is trapped inside this sphere. Creatures that succeeded on the save, or are partially within the area, are pushed away from the center of the sphere until they are no longer inside it. Only breathable air can pass through the sphere’s wall. No attack or other effect can.\n\nAn enclosed creature can use its action to push against the sphere’s wall, moving the sphere up to half the creature’s walking speed. The sphere can be picked up, and its magic causes it to weigh only 1 pound, regardless of the weight of creatures inside.",
      },
    ],
  },
  {
    id: itemIds.beltOfDwarvenkind,
    name: "Belt of Dwarvenkind",
    description:
      "A belt of dwarvenkind is a magical belt that grants the wearer dwarven-like abilities.",
    rarity: Rarity.RARE,
    types: [ItemTypes.BELT, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "A belt of dwarvenkind is a magical belt that grants the wearer dwarven-like abilities.",
    features: [
      {
        name: "Dwarvenkind",
        description:
          "While wearing this belt, you gain the following benefits:\n\n- Your Constitution score increases by 2, to a maximum of 20.\n- You have advantage on Charisma (Persuasion) checks made to interact with dwarves.\n- You can speak, read, and write Dwarvish.\n\nIn addition, while attuned to the belt, you have a 50 percent chance each day at dawn of growing a full beard if you’re capable of growing one, or a visibly thicker beard if you already have one.\nIf you aren’t a dwarf, you gain the following additional benefits while wearing the belt:\n\n- You have advantage on saving throws against poison, and you have resistance against poison damage.\n- You have darkvision out to a range of 60 feet.\n- You can speak, read, and write Dwarvish.",
      },
    ],
  },
  {
    id: itemIds.beltOfHillGiantStrength,
    name: "Belt of Hill Giant Strength",
    description:
      "A belt of Hill Giant Strength is a magical belt that grants the wearer an enhancement bonus to Strength.",
    rarity: Rarity.RARE,
    types: [ItemTypes.BELT, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "A belt of Hill Giant Strength is a magical belt that grants the wearer an enhancement bonus to Strength.",
    features: [
      {
        name: "Hill Giant Strength",
        description:
          "While wearing this belt, your Strength score changes to 21. If your Strength is already equal to or greater than 21, the item has no effect on you.",
      },
    ],
  },
  {
    id: itemIds.beltOfStormGiantStrength,
    name: "Belt of Storm Giant Strength",
    description:
      "A belt of Storm Giant Strength is a magical belt that grants the wearer an enhancement bonus to Strength.",
    rarity: Rarity.LEGENDARY,
    types: [ItemTypes.BELT, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "A belt of Storm Giant Strength is a magical belt that grants the wearer an enhancement bonus to Strength.",
    features: [
      {
        name: "Storm Giant Strength",
        description:
          "While wearing this belt, your Strength score changes to 29. If your Strength is already equal to or greater than 29, the item has no effect on you.",
      },
    ],
  },
  {
    id: itemIds.beltOfStoneGiantStrength,
    name: "Belt of Stone Giant Strength",
    description:
      "A belt of Stone Giant Strength is a magical belt that grants the wearer an enhancement bonus to Strength.",
    rarity: Rarity.VERY_RARE,
    types: [ItemTypes.BELT, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "A belt of Stone Giant Strength is a magical belt that grants the wearer an enhancement bonus to Strength.",
    features: [
      {
        name: "Stone Giant Strength",
        description:
          "While wearing this belt, your Strength score changes to 23. If your Strength is already equal to or greater than 23, the item has no effect on you.",
      },
    ],
  },
  {
    id: itemIds.beltOfFireGiantStrength,
    name: "Belt of Fire Giant Strength",
    description:
      "A belt of Fire Giant Strength is a magical belt that grants the wearer an enhancement bonus to Strength.",
    rarity: Rarity.VERY_RARE,
    types: [ItemTypes.BELT, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "A belt of Fire Giant Strength is a magical belt that grants the wearer an enhancement bonus to Strength.",
    features: [
      {
        name: "Fire Giant Strength",
        description:
          "While wearing this belt, your Strength score changes to 25. If your Strength is already equal to or greater than 25, the item has no effect on you.",
      },
    ],
  },
  {
    id: itemIds.beltOfFrostGiantStrength,
    name: "Belt of Frost Giant Strength",
    description:
      "A belt of Frost Giant Strength is a magical belt that grants the wearer an enhancement bonus to Strength.",
    rarity: Rarity.VERY_RARE,
    types: [ItemTypes.BELT, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "A belt of Frost Giant Strength is a magical belt that grants the wearer an enhancement bonus to Strength.",
    features: [
      {
        name: "Frost Giant Strength",
        description:
          "While wearing this belt, your Strength score changes to 23. If your Strength is already equal to or greater than 23, the item has no effect on you.",
      },
    ],
  },
  {
    id: itemIds.beltOfCloudGiantStrength,
    name: "Belt of Cloud Giant Strength",
    description:
      "A belt of Cloud Giant Strength is a magical belt that grants the wearer an enhancement bonus to Strength.",
    rarity: Rarity.LEGENDARY,
    types: [ItemTypes.BELT, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "A belt of Cloud Giant Strength is a magical belt that grants the wearer an enhancement bonus to Strength.",
    features: [
      {
        name: "Cloud Giant Strength",
        description:
          "While wearing this belt, your Strength score changes to 27. If your Strength is already equal to or greater than 27, the item has no effect on you.",
      },
    ],
  },
  //berserker axe
  {
    id: itemIds.bootsOfElvenkind,
    name: "Boots of Elvenkind",
    description:
      "Boots of elvenkind are magical boots that grant the wearer the ability to move silently.",
    rarity: Rarity.UNCOMMON,
    types: [ItemTypes.BOOTS, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "Boots of elvenkind are magical boots that grant the wearer the ability to move silently.",
    features: [
      {
        name: "Elvenkind",
        description:
          "While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity (Stealth) checks that rely on moving silently.",
      },
    ],
  },
  {
    id: itemIds.bootsOfLevitation,
    name: "Boots of Levitation",
    description:
      "Boots of levitation are magical boots that grant the wearer the ability to levitate.",
    rarity: Rarity.RARE,
    types: [ItemTypes.BOOTS, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "Boots of levitation are magical boots that grant the wearer the ability to levitate.",
    features: [
      {
        name: "Levitation",
        description:
          "While you wear these boots, you can use an action to cast the levitate spell on yourself at will.",
      },
    ],
  },
  {
    id: itemIds.bootsOfSpeed,
    name: "Boots of Speed",
    description:
      "Boots of speed are magical boots that grant the wearer increased speed.",
    rarity: Rarity.RARE,
    types: [ItemTypes.BOOTS, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "Boots of speed are magical boots that grant the wearer increased speed.",
    features: [
      {
        name: "Speed",
        description:
          "While you wear these boots, you can use a bonus action and click the boots’ heels together. If you do, the boots double your walking speed, and any creature that makes an opportunity attack against you has disadvantage on the attack roll. If you click your heels together again, you end the effect.\n\nWhen the boots’ property has been used for a total of 10 minutes, the magic ceases to function until you finish a long rest.",
      },
    ],
  },
  {
    id: itemIds.bootsOfStridingAndSpringing,
    name: "Boots of Striding and Springing",
    description:
      "Boots of striding and springing are magical boots that grant the wearer increased speed and jumping ability.",
    rarity: Rarity.UNCOMMON,
    types: [ItemTypes.BOOTS, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "Boots of striding and springing are magical boots that grant the wearer increased speed and jumping ability.",
    features: [
      {
        name: "Striding and Springing",
        description:
          "While you wear these boots, your walking speed becomes 30 feet, unless your walking speed is higher, and your speed isn’t reduced if you are encumbered or wearing heavy armor. In addition, you can jump three times the normal distance, though you can’t jump farther than your remaining movement would allow.",
      },
    ],
  },
  {
    id: itemIds.bootsOfTheWinterlands,
    name: "Boots of the Winterlands",
    description:
      "Boots of the Winterlands are magical boots that grant the wearer the ability to travel across icy terrain.",
    rarity: Rarity.UNCOMMON,
    types: [ItemTypes.BOOTS, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "Boots of the Winterlands are magical boots that grant the wearer the ability to travel across icy terrain.",
    features: [
      {
        name: "Winterlands",
        description:
          "These furred boots are snug and feel quite warm. While you wear them, you gain the following benefits:" +
          "\n- You have resistance to cold damage." +
          "\n- You ignore difficult terrain created by ice or snow." +
          "\n- You can tolerate temperatures as low as -50 degrees Fahrenheit without any additional protection. If you wear heavy clothes, you can tolerate temperatures as low as -100 degrees Fahrenheit.",
      },
    ],
  },
  {
    id: itemIds.bowlOfCommandingWaterElementals,
    name: "Bowl of Commanding Water Elementals",
    description:
      "A bowl of commanding water elementals is a magical bowl that can summon water elementals.",
    flavorText:
      "A bowl of commanding water elementals is a magical bowl that can summon water elementals.",
    rarity: Rarity.RARE,
    types: [ItemTypes.WONDROUS_ITEM],
    weight: { quantity: 3, unit: lb },
    features: [
      {
        name: "Commanding Water Elementals",
        description:
          "While this bowl is filled with water, you can use an action to speak the bowl’s command word and summon a water elemental, as if you had cast the conjure elemental spell. The bowl can’t be used this way again until the next dawn.\n\nThe bowl is about 1 foot in diameter and half as deep. It weighs 3 pounds and holds about 3 gallons.",
      },
    ],
  },
  {
    id: itemIds.bracersOfArchery,
    name: "Bracers of Archery",
    description: "Bracers of archery are magical bracers that improve archery.",
    rarity: Rarity.UNCOMMON,
    flavorText: "Bracers of archery are magical bracers that improve archery.",
    types: [ItemTypes.BRACERS, ItemTypes.WONDROUS_ITEM],
    features: [
      {
        name: "Archery",
        description:
          "While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons.",
      },
    ],
  },
  {
    id: itemIds.bracersOfDefense,
    name: "Bracers of Defense",
    description:
      "Bracers of defense are magical bracers that grant the wearer an enhancement bonus to AC.",
    rarity: Rarity.RARE,
    types: [ItemTypes.BRACERS, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "Bracers of defense are magical bracers that grant the wearer an enhancement bonus to AC.",
    features: [
      {
        name: "Defense",
        description:
          "While wearing these bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield.",
      },
    ],
  },
  {
    id: itemIds.brazierOfCommandingFireElementals,
    name: "Brazier of Commanding Fire Elementals",
    description:
      "A brazier of commanding fire elementals is a magical brazier that can summon fire elementals.",
    rarity: Rarity.RARE,
    types: [ItemTypes.WONDROUS_ITEM],
    weight: { quantity: 5, unit: lb },
    flavorText:
      "A brazier of commanding fire elementals is a magical brazier that can summon fire elementals.",
    features: [
      {
        name: "Commanding Fire Elementals",
        description:
          "While a fire burns in this brass brazier, you can use an action to speak the brazier’s command word and summon a fire elemental, as if you had cast the conjure elemental spell. The brazier can’t be used this way again until the next dawn.",
      },
    ],
  },
  {
    id: itemIds.broochOfShielding,
    name: "Brooch of Shielding",
    description:
      "A brooch of shielding is a magical brooch that grants the wearer protection from magic missiles.",
    rarity: Rarity.UNCOMMON,
    types: [ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "A brooch of shielding is a magical brooch that grants the wearer protection from magic missiles.",
    features: [
      {
        name: "Shielding",
        description:
          "While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the magic missile spell.",
      },
    ],
  },
  {
    id: itemIds.broomOfFlying,
    name: "Broom of Flying",
    description: "A broom of flying is a magical broom that can fly.",
    rarity: Rarity.UNCOMMON,
    types: [ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText: "A broom of flying is a magical broom that can fly.",
    weight: { quantity: 3, unit: lb },
    features: [
      {
        name: "Flying",
        description:
          "This wooden broom, which weighs 3 pounds, functions like a mundane broom until you stand astride it and speak its command word. It then hovers beneath you and can be ridden in the air. It has a flying speed of 50 feet. It can carry up to 400 pounds, but its flying speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land.\n\nYou can send the broom to travel alone to a destination within 1 mile of you if you speak the command word, name the location, and are familiar with that place. The broom comes back to you when you speak another command word, provided that the broom is still within 1 mile of you.",
      },
    ],
  },
  {
    id: itemIds.candleOfInvocation,
    name: "Candle of Invocation",
    description:
      "A candle of invocation is a magical candle that improves the abilities of creatures around it based on their alignment.",
    rarity: Rarity.VERY_RARE,
    types: [ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "A candle of invocation is a magical candle that improves the abilities of creatures around it based on their alignment.",
    features: [
      {
        name: "Candle of Invocation",
        description:
          "This slender taper is dedicated to a deity and shares that deity’s alignment. The candle’s alignment can be detected with the detect evil and good spell. The GM chooses the god and associated alignment or determines the alignment randomly.\n\nThe candle’s magic is activated when the candle is lit, which requires an action. After burning for 4 hours, the candle is destroyed. You can snuff it out early for use at a later time. Deduct the time it burned in increments of 1 minute from the candle’s total burn time.\n\nWhile lit, the candle sheds dim light in a 30-foot radius. Any creature within that light whose alignment matches that of the candle makes attack rolls, saving throws, and ability checks with advantage. In addition, a cleric or druid in the light whose alignment matches the candle’s can cast 1st- level spells he or she has prepared without expending spell slots, though the spell’s effect is as if cast with a 1st-level slot.",
        extendedTable: [
          {
            "": {
              headers: ["d20", "Alignment"],
              data: [
                {
                  d20: "01 - 02",
                  Alignment: "Chaotic evil",
                },
                {
                  d20: "03 - 04",
                  Alignment: "Chaotic neutral",
                },
                {
                  d20: "05 - 07",
                  Alignment: "Chaotic good",
                },
                {
                  d20: "08 - 09",
                  Alignment: "Neutral evil",
                },
                {
                  d20: "10 - 11",
                  Alignment: "True neutral",
                },
                {
                  d20: "12 - 13",
                  Alignment: "Neutral good",
                },
                {
                  d20: "14 - 15",
                  Alignment: "Lawful evil",
                },
                {
                  d20: "16 - 17",
                  Alignment: "Lawful neutral",
                },
                {
                  d20: "18 - 20",
                  Alignment: "Lawful good",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: itemIds.capeOfTheMountebank,
    name: "Cape of the Mountebank",
    description:
      "A cape of the mountebank is a magical cape that grants the wearer the ability to teleport.",
    rarity: Rarity.RARE,
    types: [ItemTypes.WONDROUS_ITEM],
    flavorText:
      "A cape of the mountebank is a magical cape that grants the wearer the ability to teleport.",
    features: [
      {
        name: "Mountebank",
        description:
          "This cape smells faintly of brimstone. While wearing it, you can use it to cast the dimension door spell as an action. This property of the cape can’t be used again until the next dawn.\n\nWhen you disappear, you leave behind a cloud of smoke, and you appear in a similar cloud of smoke at your destination. The smoke lightly obscures the space you left and the space you appear in, and it dissipates at the end of your next turn. A light or stronger wind disperses the smoke",
      },
    ],
  },
  //carpet of flying
  {
    id: itemIds.censerOfControllingAirElementals,
    name: "Censer of Controlling Air Elementals",
    description:
      "A censer of controlling air elementals is a magical censer that can summon air elementals.",
    rarity: Rarity.RARE,

    types: [ItemTypes.WONDROUS_ITEM],
    flavorText:
      "A censer of controlling air elementals is a magical censer that can summon air elementals.",
    weight: { quantity: 1, unit: lb },
    features: [
      {
        name: "Controlling Air Elementals",
        description:
          "While incense is burning in this censer, you can use an action to speak the censer’s command word and summon an air elemental, as if you had cast the conjure elemental spell. The censer can’t be used this way again until the next dawn.\n\nThe censer is about 6 inches high and weighs 1 pound.",
      },
    ],
  },
  {
    id: itemIds.chimeOfOpening,
    name: "Chime of Opening",
    description:
      "A chime of opening is a magical chime that can open locked doors.",
    rarity: Rarity.RARE,
    types: [ItemTypes.WONDROUS_ITEM],
    flavorText:
      "A chime of opening is a magical chime that can open locked doors.",
    weight: { quantity: 1, unit: lb },
    features: [
      {
        name: "Opening",
        description:
          "This hollow metal tube measures about 1 foot long and weighs 1 pound. You can strike it as an action, pointing it at an object within 120 feet of you that can be opened, such as a door, lid, or lock. The chime issues a clear tone, and one lock or latch on the object opens unless the sound can’t reach the object. If no locks are present, the object simply opens.",
      },
    ],
  },
  {
    id: itemIds.circletOfBlasting,
    name: "Circlet of Blasting",
    description:
      "A circlet of blasting is a magical circlet that can cast the scorching ray spell.",
    rarity: Rarity.UNCOMMON,
    types: [ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "A circlet of blasting is a magical circlet that can cast the scorching ray spell.",
    features: [
      {
        name: "Blasting",
        description: `While wearing this circlet, you can use an action to cast the %${spellIds.scorchingRay}{scorching ray}% spell with it. When you make the spell’s attacks, you do so with an attack bonus of +5. The circlet can’t be used this way again until the next dawn.`,
      },
    ],
  },
  {
    id: itemIds.cloakOfArachnida,
    name: "Cloak of Arachnida",
    description:
      "A cloak of arachnida is a magical cloak that grants the wearer spider-like abilities.",
    rarity: Rarity.VERY_RARE,
    types: [ItemTypes.CLOAK, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "A cloak of arachnida is a magical cloak that grants the wearer spider-like abilities.",
    features: [
      {
        name: "Arachnida",
        description:
          "This fine garment is made of black silk interwoven with faint silvery threads. While wearing it, you gain the following benefits.",
        options: [
          "You have resistance to poison damage.",
          "You have a climbing speed equal to your walking speed.",
          "You can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free.",
          "You can’t be caught in webs of any sort and can move through webs as if they were difficult terrain.",
          `You can use an action to cast the ${spellIds.web} spell (save DC 13). The web created by the spell fills twice its normal area. Once used, this property of the cloak can’t be used again until the next dawn.`,
        ],
      },
    ],
  },
  {
    id: itemIds.cloakOfDisplacement,
    name: "Cloak of Displacement",
    description:
      "A cloak of displacement is a magical cloak that grants the wearer the ability to create an illusion of themselves.",
    rarity: Rarity.RARE,
    types: [ItemTypes.CLOAK, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "A cloak of displacement is a magical cloak that grants the wearer the ability to create an illusion of themselves.",
    features: [
      {
        name: "Displacement",
        description:
          "While you wear this cloak, it projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn. This property is suppressed while you are incapacitated, restrained, or otherwise unable to move",
      },
    ],
  },
  {
    id: itemIds.cloakOfElvenkind,
    name: "Cloak of Elvenkind",
    description:
      "A cloak of elvenkind is a magical cloak that grants the wearer the ability to move stealthy.",
    rarity: Rarity.UNCOMMON,
    types: [ItemTypes.CLOAK, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "A cloak of elvenkind is a magical cloak that grants the wearer the ability to move stealthy.",
    features: [
      {
        name: "Elvenkind",
        description:
          "While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak’s color shifts to camouflage you. Pulling the hood up or down requires an action.",
      },
    ],
  },
  {
    id: itemIds.cloakOfProtection,
    name: "Cloak of Protection",
    description:
      "A cloak of protection is a magical cloak that grants the wearer an enhancement bonus to AC and saving throws.",
    rarity: Rarity.UNCOMMON,
    types: [ItemTypes.CLOAK, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "A cloak of protection is a magical cloak that grants the wearer an enhancement bonus to AC and saving throws.",
  },
  {
    id: itemIds.cloakOfTheBat,
    name: "Cloak of the Bat",
    description:
      "A cloak of the bat is a magical cloak that grants the wearer the ability to fly and transform into a bat.",
    rarity: Rarity.RARE,
    types: [ItemTypes.CLOAK, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "A cloak of the bat is a magical cloak that grants the wearer the ability to fly and transform into a bat.",
    features: [
      {
        name: "Bat",
        description:
          "While wearing this cloak, you have advantage on Dexterity (Stealth) checks. In an area of dim light or darkness, you can grip the edges of the cloak with both hands and use it to fly at a speed of 40 feet. If you ever fail to grip the cloak’s edges while flying in this way, or if you are no longer in dim light or darkness, you lose this flying speed.\n\nWhile wearing the cloak in an area of dim light or darkness, you can use your action to cast polymorph on yourself, transforming into a bat. While you are in the form of the bat, you retain your Intelligence, Wisdom, and Charisma scores. The cloak can’t be used this way again until the next dawn.",
      },
    ],
  },
  {
    id: itemIds.cloakOfTheMantaRay,
    name: "Cloak of the Manta Ray",
    description:
      "A cloak of the manta ray is a magical cloak that grants the wearer the ability to breathe underwater and swim.",
    rarity: Rarity.UNCOMMON,
    types: [ItemTypes.CLOAK, ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "A cloak of the manta ray is a magical cloak that grants the wearer the ability to breathe underwater and swim.",
    features: [
      {
        name: "Manta Ray",
        description:
          "While wearing this cloak with its hood up, you can breathe underwater, and you have a swimming speed of 60 feet. Pulling the hood up or down requires an action.",
      },
    ],
  },
  // the crystal balls
  {
    id: itemIds.cubeOfForce,
    name: "Cube of Force",
    description:
      "A cube of force is a magical cube that can create a force field around the user.",
    rarity: Rarity.RARE,
    types: [ItemTypes.WONDROUS_ITEM],
    requiresAttunement: true,
    flavorText:
      "A cube of force is a magical cube that can create a force field around the user.",
    features: [
      {
        name: "Force",
        description:
          "This cube is about an inch across. Each face has a distinct marking on it that can be pressed. The cube starts with 36 charges, and it regains 1d20 expended charges daily at dawn.\n\nYou can use an action to press one of the cube’s faces, expending a number of charges based on the chosen face, as shown in the Cube of Force Faces table. Each face has a different effect. If the cube has insufficient charges remaining, nothing happens. Otherwise, a barrier of invisible force springs into existence, forming a cube 15 feet on a side. The barrier is centered on you, moves with you, and lasts for 1 minute, until you use an action to press the cube’s sixth face, or the cube runs out of charges. You can change the barrier’s effect by pressing a different face of the cube and expending the requisite number of charges, resetting the duration.\n\nIf your movement causes the barrier to come into contact with a solid object that can’t pass through the cube, you can’t move any closer to that object as long as the barrier remains",
        extendedTable: [
          {
            "Cube of Force Faces": {
              headers: ["Face", "Charges", "Effect"],
              data: [
                {
                  Face: "1",
                  Charges: "1",
                  Effect:
                    "Gases, wind, and fog can’t pass through the barrier.",
                },
                {
                  Face: "2",
                  Charges: "2",
                  Effect:
                    "Nonliving matter can’t pass through the barrier. Walls, floors, and ceilings can pass through at your discretion",
                },
                {
                  Face: "3",
                  Charges: "3",
                  Effect: "Living matter can’t pass through the barrier.",
                },
                {
                  Face: "4",
                  Charges: "4",
                  Effect: "Spell effects can’t pass through the barrier",
                },
                {
                  Face: "5",
                  Charges: "5",
                  Effect:
                    "Nothing can pass through the barrier. Walls, floors, and ceilings can pass through at your discretion.",
                },
                {
                  Face: "6",
                  Charges: "0",
                  Effect: "The barrier deactivates.",
                },
              ],
            },
          },
        ],
      },
      {
        name: "Barrier Deactivation",
        description:
          "The cube loses charges when the barrier is targeted by certain spells or comes into contact with certain spell or magic item effects, as shown in the table below.",
        extendedTable: [
          {
            "": {
              headers: ["Spell or item", "Charges Lost"],
              data: [
                {
                  Effect: `%${spellIds.disintegrate}{Disintegrate}%`,
                  "Charges Lost": "1d12",
                },
                {
                  Effect: `^${itemIds.hornOfBlasting}{Horn of blasting}^`,
                  "Charges Lost": "1d10",
                },
                {
                  Effect: `%${spellIds.passwall}{Passwall}%`,
                  "Charges Lost": "1d6",
                },
                {
                  Effect: `%${spellIds.prismaticSpray}{Prismatic spray}%`,
                  "Charges Lost": "1d20",
                },
                {
                  Effect: `%${spellIds.wallOfFire}{Wall of fire}%`,
                  "Charges Lost": "1d4",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: itemIds.cubicGate,
    name: "Cubic Gate",
    description: "A cubic gate is a magical cube that can create portals.",
    rarity: Rarity.LEGENDARY,
    types: [ItemTypes.WONDROUS_ITEM],
    flavorText: "A cubic gate is a magical cube that can create portals.",
    features: [
      {
        name: "Gate",
        description: `This cube is 3 inches across and radiates palpable magical energy. The six sides of the cube are each keyed to a different plane of existence, one of which is the Material Plane. The other sides are linked to planes determined by the GM.\n\nou can use an action to press one side of the cube to cast the %${spellIds.gate}{gate}% spell with it, opening a portal to the plane keyed to that side. Alternatively, if you use an action to press one side twice, you can cast the %${spellIds.planeShift}{plane shift}% spell (save DC 17) with the cube and transport the targets to the plane keyed to that side.`,
      },
    ],
  },
  {
    id: itemIds.daggerOfVenom,
    name: "Dagger of Venom",
    description:
      "A dagger of venom is a magical dagger that can poison its target.",
    rarity: Rarity.RARE,
    types: [ItemTypes.WEAPON],
    weaponId: weaponIds.dagger,
    flavorText:
      "A dagger of venom is a magical dagger that can poison its target.",
    features: [
      {
        name: "+1 Dagger",
        description: "This weapon has a +1 bonus to attack and damage rolls.",
      },
      {
        name: "Venom",
        description:
          "You can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 poison damage and become poisoned for 1 minute. The dagger can’t be used this way again until the next dawn",
      },
    ],
  },
  {
    id: itemIds.decanterOfEndlessWater,
    name: "Decanter of Endless Water",
    description:
      "A decanter of endless water is a magical decanter that can produce water.",
    rarity: Rarity.UNCOMMON,
    types: [ItemTypes.WONDROUS_ITEM],
    flavorText:
      "A decanter of endless water is a magical decanter that can produce water.",
    weight: { quantity: 2, unit: lb },
    features: [
      {
        name: "Endless Water",
        description:
          "This stoppered flask sloshes when shaken, as if it contains water. The decanter weighs 2 pounds.\n\nYou can use an action to remove the stopper and speak one of three command words, whereupon an amount of fresh water or salt water (your choice) pours out of the flask. The water stops pouring out at the start of your next turn. Choose from the following options:",
        options: [
          "**Stream.** The decanter produces 1 gallon of water.",
          "**Fountain.** The decanter produces 5 gallons of water.",
          "**Geyser.** produces 30 gallons of water that gushes forth in a geyser 30 feet long and 1 foot wide. As a bonus action while holding the decanter, you can aim the geyser at a creature you can see within 30 feet of you. The target must succeed on a DC 13 Strength saving throw or take 1d4 bludgeoning damage and fall prone. Instead of a creature, you can target an object that isn’t being worn or carried and that weighs no more than 200 pounds. The object is either knocked over or pushed up to 15 feet away from you.",
        ],
      },
    ],
  },
  {
    id: itemIds.deckOfIllusions,
    name: "Deck of Illusions",
    description:
      "A deck of illusions is a magical deck of cards that can create illusions. This box contains a set of parchment cards. A full deck has 34 cards. A deck found as treasure is usually missing 1d20 − 1 cards.",
    rarity: Rarity.UNCOMMON,
    types: [ItemTypes.WONDROUS_ITEM],
    flavorText:
      "A deck of illusions is a magical deck of cards that can create illusions.",
    features: [
      {
        name: "Create Illusions",
        description:
          "The magic of the deck functions only if cards are drawn at random (you can use an altered deck of playing cards to simulate the deck). You can use an action to draw a card at random from the deck and throw it to the ground at a point within 30 feet of you.\n\nAn illusion of one or more creatures forms over the thrown card and remains until dispelled. An illusory creature appears real, of the appropriate size, and behaves as if it were a real creature except that it can do no harm. While you are within 120 feet of the illusory creature and can see it, you can use an action to move it magically anywhere within 30 feet of its card. Any physical interaction with the illusory creature reveals it to be an illusion, because objects pass through it. Someone who uses an action to visually inspect the creature identifies it as illusory with a successful DC 15 Intelligence (Investigation) check. The creature then appears translucent. The illusion lasts until its card is moved or the illusion is dispelled. When the illusion ends, the image on its card disappears, and that card can’t be used again.",
        extendedTable: [
          {
            "": {
              headers: ["Playing Card", "Creature"],
              data: [
                { "Playing Card": "Ace of hearts", Creature: "Red dragon" },
                {
                  "Playing Card": "King of hearts",
                  Creature: "Knight and four guards",
                },
                {
                  "Playing Card": "Queen of hearts",
                  Creature: "Succubus or incubus",
                },
                { "Playing Card": "Jack of hearts", Creature: "Druid" },
                { "Playing Card": "Ten of hearts", Creature: "Cloud giant" },
                { "Playing Card": "Nine of hearts", Creature: "Ettin" },
                { "Playing Card": "Eight of hearts", Creature: "Bugbear" },
                { "Playing Card": "Two of hearts", Creature: "Goblin" },
                { "Playing Card": "Ace of diamonds", Creature: "Beholder" },
                {
                  "Playing Card": "King of diamonds",
                  Creature: "Archmage and mage apprentice",
                },
                { "Playing Card": "Queen of diamonds", Creature: "Night hag" },
                { "Playing Card": "Jack of diamonds", Creature: "Assassin" },
                { "Playing Card": "Ten of diamonds", Creature: "Fire giant" },
                { "Playing Card": "Nine of diamonds", Creature: "Ogre mage" },
                { "Playing Card": "Eight of diamonds", Creature: "Gnoll" },
                { "Playing Card": "Two of diamonds", Creature: "Kobold" },
                { "Playing Card": "Ace of spades", Creature: "Lich" },
                {
                  "Playing Card": "King of spades",
                  Creature: "Priest and two acolytes",
                },
                { "Playing Card": "Queen of spades", Creature: "Medusa" },
                { "Playing Card": "Jack of spades", Creature: "Veteran" },
                { "Playing Card": "Ten of spades", Creature: "Frost giant" },
                { "Playing Card": "Nine of spades", Creature: "Troll" },
                { "Playing Card": "Eight of spades", Creature: "Hobgoblin" },
                { "Playing Card": "Two of spades", Creature: "Goblin" },
                { "Playing Card": "Ace of clubs", Creature: "Iron golem" },
                {
                  "Playing Card": "King of clubs",
                  Creature: "Bandit captain and three bandits",
                },
                { "Playing Card": "Queen of clubs", Creature: "Erinyes" },
                { "Playing Card": "Jack of clubs", Creature: "Berserker" },
                { "Playing Card": "Ten of clubs", Creature: "Hill giant" },
                { "Playing Card": "Nine of clubs", Creature: "Ogre" },
                { "Playing Card": "Eight of clubs", Creature: "Orc" },
                { "Playing Card": "Two of clubs", Creature: "Kobold" },
                {
                  "Playing Card": "Jokers (2)",
                  Creature: "You (the deck’s owner)",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: itemIds.deckOfManyThings,
    name: "Deck of Many Things",
    description:
      "A deck of many things is a magical deck of cards with a variety of effects that can alter reality. Usually found in a box or pouch, this deck contains anumber of cards made of ivory or vellum. Most (75 percent) of these decks have only thirteen cards, but the rest have twenty-­two",
    rarity: Rarity.LEGENDARY,
    types: [ItemTypes.WONDROUS_ITEM],
    flavorText:
      "A deck of many things is a magical deck of cards with a variety of effects that can alter reality.",
    features: [
      {
        name: "Draw Cards",
        description:
          "Before you draw a card, you must declare how many cards you intend to draw and then draw them randomly (you can use an altered deck of playing cards to simulate the deck). Any cards drawn in excess of this number have no effect. Otherwise, as soon as you draw a card from the deck, its magic takes effect. You must draw each card no more than 1 hour after the previous draw. If you fail to draw the chosen number, the remaining number of cards fly from the deck on their own and take effect all at once. Once a card is drawn, it fades from existence. Unless the card is the Fool or the Jester, the card reappears in the deck, making it possible to draw the same card twice.",
      },
    ],
  },
  {
    id: itemIds.demonArmor,
    name: "Demon Armor",
    description:
      "Demon armor is a cursed magical suit of armor of demonic armor.",
    rarity: Rarity.VERY_RARE,
    types: [ItemTypes.ARMOR],
    armorId: armorIds.plateArmor,
    requiresAttunement: true,
    flavorText:
      "Demon armor is a cursed magical suit of armor of demonic armor.",
    features: [
      {
        name: "Demon Armor",
        description:
          "While wearing this armor, you gain a +1 bonus to AC, and you can understand and speak Abyssal. In addition, the armor’s clawed gauntlets turn unarmed strikes with your hands into magic weapons that deal slashing damage, with a +1 bonus to attack rolls and damage rolls and a damage die of 1d8.",
      },
      {
        name: "Cursed",
        description:
          "Once you don this cursed armor, you can’t doff it unless you are targeted by the remove curse spell or similar magic. While wearing the armor, you have disadvantage on attack rolls against demons and on saving throws against their spells and special abilities.",
      },
    ],
  },

  ...SpellSeed.map((spell) => ({
    id: spell.id && 10000 + spell.id,
    name: `Scroll of ${spell.name}`,
    description: `This is a spell scroll for the spell ${spell.name}.`,
    types: [ItemTypes.SPELL_SCROLL],
    rarity:
      spell.level == 9
        ? Rarity.LEGENDARY
        : spell.level >= 6 && spell.level <= 8
        ? Rarity.VERY_RARE
        : spell.level >= 4 && spell.level <= 5
        ? Rarity.RARE
        : spell.level >= 2 && spell.level <= 3
        ? Rarity.UNCOMMON
        : Rarity.COMMON,
    flavorText: `This is a spell scroll for the spell ${spell.name}.`,
    spellId: spell.id,
  })),
];

export const spellScrollIds = numberArray(10000, SpellSeed.length - 1);
export const getSpellScrollIdsOfLevel = (level: number) => {
  return spellScrollIds.filter((id) => SpellSeed[id - 10000].level === level);
};

export const instrumentItemIds = [
  itemIds.bagpipes,
  itemIds.drum,
  itemIds.dulcimer,
  itemIds.flute,
  itemIds.lute,
  itemIds.lyre,
  itemIds.horn,
  itemIds.panFlute,
  itemIds.shawm,
  itemIds.viol,
];

export const simpleMeleeItemIds = [
  itemIds.club,
  itemIds.dagger,
  itemIds.greatclub,
  itemIds.handaxe,
  itemIds.javelin,
  itemIds.lightHammer,
  itemIds.mace,
  itemIds.quarterstaff,
  itemIds.sickle,
  itemIds.spear,
];

export const simpleRangedItemIds = [
  itemIds.crossbowLight,
  itemIds.dart,
  itemIds.shortbow,
  itemIds.sling,
];
export const currencyItemIds = [
  itemIds.copperPiece,
  itemIds.silverPiece,
  itemIds.electrumPiece,
  itemIds.goldPiece,
  itemIds.platinumPiece,
];

export const martialMeleeItemIds = [
  itemIds.battleaxe,
  itemIds.flail,
  itemIds.glaive,
  itemIds.greataxe,
  itemIds.greatsword,
  itemIds.halberd,
  itemIds.lance,
  itemIds.longsword,
  itemIds.maul,
  itemIds.morningstar,
  itemIds.pike,
  itemIds.rapier,
  itemIds.scimitar,
  itemIds.shortsword,
  itemIds.trident,
  itemIds.warPick,
  itemIds.warhammer,
  itemIds.whip,
];

export const martialRangedItemIds = [
  itemIds.blowgun,
  itemIds.crossbowHand,
  itemIds.crossbowHeavy,
  itemIds.longbow,
  itemIds.net,
];

export const gemstoneIds = {
  azurite: 223,
  bandedAgate: 224,
  blueQuartz: 225,
  eyeAgate: 226,
  hematite: 227,
  lapisLazuli: 228,
  malachite: 229,
  mossAgate: 230,
  obsidian: 231,
  rhodochrosite: 232,
  tigerEye: 233,
  turquoise: 234,
  bloodstone: 235,
  carnelian: 236,
  chalcedony: 237,
  chrysoprase: 238,
  citrine: 239,
  jasper: 240,
  moonstone: 241,
  onyx: 242,
  quartz: 243,
  sardonyx: 244,
  starRoseQuartz: 245,
  zircon: 246,
  amber: 247,
  amethyst: 248,
  chrysoberyl: 249,
  coral: 250,
  garnet: 251,
  jade: 252,
  jet: 253,
  pearl: 254,
  spinel: 255,
  tourmaline: 256,
  alexandrite: 257,
  aquamarine: 258,
  blackPearl: 259,
  blueSpinel: 260,
  peridot: 261,
  topaz: 262,
  blackOpal: 263,
  blueSapphire: 264,
  emerald: 265,
  fireOpal: 266,
  opal: 267,
  starRuby: 268,
  starSapphire: 269,
  yellowSapphire: 270,
  blackSapphire: 271,
  diamond: 272,
  jacinth: 273,
  ruby: 274,
  leatherVest: 275,
};
export const artisanToolItemIds = [
  itemIds.alchemistsSupplies,
  itemIds.brewersSupplies,
  itemIds.calligraphersSupplies,
  itemIds.carpentersTools,
  itemIds.cartographersTools,
  itemIds.cobblersTools,
  itemIds.cooksUtensils,
  itemIds.glassblowersTools,
  itemIds.jewelersTools,
  itemIds.leatherworkersTools,
  itemIds.masonsTools,
  itemIds.paintersSupplies,
  itemIds.pottersTools,
  itemIds.smithsTools,

  itemIds.tinkersTools,
  itemIds.weaversTools,
  itemIds.woodcarversTools,
];

export const gamingKitItemIds = [itemIds.diceSet, itemIds.playingCardSet];

export const getGemstoneIdsOfMinValue = (value: number) => {
  return Object.values(gemstoneIds).filter((id) => {
    const item = ItemsSeed.find((item) => item.id === id);
    if (!item || !item.cost) return false;
    const cost = item.cost as PrismaJson.CurrencyAmount;
    return cost.quantity >= value;
  });
};
export const getGemstoneIdsOfValue = (value: number) => {
  return Object.values(gemstoneIds).filter((id) => {
    const item = ItemsSeed.find((item) => item.id === id);
    if (!item || !item.cost) return false;
    const cost = item.cost as PrismaJson.CurrencyAmount;
    return cost.quantity === value;
  });
};

export const getGemstoneIdsOfMaxValue = (value: number) => {
  return Object.values(gemstoneIds).filter((id) => {
    const item = ItemsSeed.find((item) => item.id === id);
    if (!item || !item.cost) return false;
    const cost = item.cost as PrismaJson.CurrencyAmount;
    return cost.quantity <= value;
  });
};
