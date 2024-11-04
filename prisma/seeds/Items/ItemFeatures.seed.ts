import { Prisma } from '@prisma/client';
import { spellIds } from '../Spells/spells.seed';
import { itemIds } from './ItemIds';
import { ItemsSeed } from './Items.seed';
import generateId from '../_helpers/generateId';
let count = 1;
const ItemFeatureSeed: Prisma.FeatureCreateManyInput[] = [
  {
    id: 1,
    name: 'Block and Tackle',
    description:
      'Set and use your block and tackle to hoist up to four times the weight you can normally lift. Work with your DM to determine how you set up and use the block and tackle to lift a specific weight.',
    itemId: itemIds.blockAndTackle,
  },
  {
    id: 2,
    name: 'Light Candle',
    description:
      'For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for another 5 feet.',
    itemId: itemIds.candle,
  },
  {
    id: 3,
    name: 'Component Storage',
    description:
      "The pouch has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell's description). \n\nWhile the pouch is not a spellcasting focus, it can be used in place of a spellcasting focus for the purpose of casting spells with material components.",
    itemId: itemIds.componentPouch,
  },
  {
    id: 4,
    name: 'Pick Lock',
    description:
      "Without the key, a creature proficient with thieves' tools can pick your lock with a successful DC 15 Dexterity check. Your DM may decide that better locks are available for higher prices.",
    itemId: itemIds.lock,
  },
  {
    id: 5,
    name: 'Light Fire',
    description:
      'Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite. A magnifying glass grants advantage on any ability check made to appraise or inspect an item that is small or highly detailed.',
    itemId: itemIds.magnifyingGlass,
  },
  {
    id: 6,
    name: 'Bind',
    description:
      'These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check. Each set of manacles comes with one key. Without the key, a creature proficient with thieves’ tools can pick the manacles’ lock with a successful DC 15 Dexterity check.',
    itemId: itemIds.manacles,
  },
  {
    id: 7,
    name: 'Ram',
    description:
      'You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check.',
    itemId: itemIds.ramPortable,
  },
  {
    id: 8,
    name: 'Use Acid',
    description:
      'As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon.\n\n On a hit, the target takes 2d6 acid damage.',
    itemId: itemIds.acidVial,
  },
  {
    id: 9,
    name: "Use Alchemist's Fire",
    description:
      "As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon.\n\nOn a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames.",
    itemId: itemIds.alchemistsFireFlask,
  },
  {
    id: 10,
    name: 'Use Antitoxin',
    description:
      'A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefits to undead or constructs.',
    itemId: itemIds.antitoxinVial,
  },
  {
    id: 11,
    name: 'Scatter Ball Bearings',
    description:
      "As an action, you can spill these tiny balls from their pouch to cover a level area 10 feet square. A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone. A creature moving through the area at half speed doesn't need to make the saving throw.",
    itemId: itemIds.ballBearingsBag,
  },
  {
    id: 12,
    name: 'Scatter Caltrops',
    description:
      "As an action, you can spread a single bag of caltrops to cover a 5-foot-square area. Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving and take 1 piercing damage. Until the creature regains at least 1 hit point, its walking speed is reduced by 10 feet. A creature moving through the area at half speed doesn't need to make the saving throw.",
    itemId: itemIds.caltropsBag,
  },
  {
    id: 13,
    name: 'Climbing Kit',
    description:
      "A climber's kit includes special pitons, boot tips, gloves, and a harness. You can use the climber's kit as an action to anchor yourself; when you do, you can't fall more than 25 feet from the point where you anchored yourself, and you can't climb more than 25 feet away from that point without undoing the anchor.",
    itemId: itemIds.climbingKit,
  },
  {
    id: 14,
    name: 'Pry Open',
    description:
      "Using a crowbar grants advantage to Strength checks where the crowbar's leverage can be applied.",
    itemId: itemIds.crowbar,
  },
  {
    id: 15,
    name: 'Stabilize',
    description:
      "As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check. Once you use the kit 10 times, it is exhausted and can't be used again.",
    itemId: itemIds.healerKit,
  },
  {
    id: 16,
    name: 'Use Holy Water',
    description:
      ' As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon. If the target is a fiend or undead, it takes 2d6 radiant damage.',
    itemId: itemIds.holyWaterFlask,
  },
  {
    id: 17,
    name: 'Create Holy Water',
    description:
      'A cleric or paladin may create holy water by performing a special ritual. The ritual takes 1 hour to perform, uses 25 gp worth of powdered silver, and requires the caster to expend a 1st-level spell slot.',
    itemId: itemIds.holyWaterFlask,
  },
  {
    id: 18,
    name: 'Set Trap',
    description:
      'When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground.\n\n A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of chain (typically 3 feet long).\n\n A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature.',
    itemId: itemIds.huntingTrap,
  },
  {
    id: 19,
    name: 'Light Lamp',
    description:
      'A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.',
    itemId: itemIds.lamp,
  },
  {
    id: 20,
    name: 'Light Lantern',
    description:
      'A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.',
    itemId: itemIds.lanternBullseye,
  },
  {
    id: 21,
    name: 'Light Lantern',
    description:
      'A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.',
    itemId: itemIds.lanternHooded,
  },
  {
    id: 22,
    name: 'Use Oil',
    description:
      'As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a target creature or object, treating the oil as an improvised weapon.\n\n On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil. ',
    itemId: itemIds.oilFlask,
  },
  {
    id: 23,
    name: 'Spill Oil',
    description:
      'As an action you can pour a flask of oil on the ground to cover a 5-foot-square area, provided that the surface is level. If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends its turn in the area. A creature can take this damage only once per turn.',
    itemId: itemIds.oilFlask,
  },
  {
    id: 24,
    name: 'Apply Poison',
    description:
      'A creature that takes piercing or slashing damage from a weapon coated with the poison is exposed to its effects. A creature must succeed on a DC 10 Constitution saving throw or take 1d4 poison damage. Once applied, the poison retains potency for 1 minute before drying.',
    itemId: itemIds.basicPoisonVial,
  },
  {
    id: 25,
    name: 'Drink Potion',
    description:
      'A creature can drink this potion as an action to regain 2d4 + 2 hit points.',
    itemId: itemIds.potionOfHealingCommon,
  },
  {
    id: 26,
    name: 'Start Fire',
    description:
      'Using your tinderbox to light a torch — or anything else with abundant, exposed fuel — takes an action. Lighting any other fire takes 1 minutes.',
    itemId: itemIds.tinderBox,
  },
  {
    id: 27,
    name: 'Light Torch',
    description:
      'A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet.',
    itemId: itemIds.torch,
  },
  {
    id: 28,
    name: 'Melee Weapon',
    description:
      'If you make a melee attack with a burning torch and hit, it deals 1 fire damage.',
    itemId: itemIds.torch,
  },
  {
    id: 29,
    name: 'Use Fargab',
    description:
      "While wearing a fargab, you can use an action to speak into the device's mouthpiece and send a short message of twenty-five words or less to another creature wearing the matched fargab while it is within 18 miles of you. The message emits from the speakers of the device and can be heard up to 10 feet awayfrom the device.\n\n If no creature is wearing the fargab, the speakers make static noises instead.",
    itemId: itemIds.fargab,
  },
  {
    id: 30,
    name: 'Use Narycrash',
    description:
      'If you fall while wearing this device, you can use your reaction to deploy the parachute. Once deployed, the parachute rapidly inflates, and you descend 60 feet per round and take no damage from falling. When you are 10 feet away from the ground, roll a d20. If you roll a 5 or less, the parachute gives out, and you begin to fall normally.',
    itemId: itemIds.narycrash,
  },
  {
    id: 31,
    name: 'Throw Bomb',
    description:
      'As an action, a character can light this bomb and throw it at a point up to 60 feet away. Each creature within 5 feet of that point must succeed on a DC 12 Dexterity saving throw or take 3d6 fire damage.',
    itemId: itemIds.bomb,
  },
  {
    id: 32,
    name: 'Detonate Gunpowder',
    description:
      'Setting fire to a container full of gunpowder can cause it to explode, dealing 7d6 fire damage to creatures within 10 feet of it. A successful DC 12 Dexterity saving throw halves the damage. Setting fire to an ounce of gunpowder causes it to flare for 1 round, shedding bright light in a 30-foot radius and dim light for an additional 30 feet.',
    itemId: itemIds.gunpowderKeg,
  },
  {
    id: 33,
    name: 'Detonate Gunpowder',
    description:
      'Setting fire to a container full of gunpowder can cause it to explode, dealing 3d6 fire damage to creatures within 10 feet of it. A successful DC 12 Dexterity saving throw halves the damage. Setting fire to an ounce of gunpowder causes it to flare for 1 round, shedding bright light in a 30-foot radius and dim light for an additional 30 feet.',
    itemId: itemIds.gunpowderHorn,
  },
  {
    id: 34,
    name: 'Use Dynamite',
    description:
      'As an action, a creature can light a stick of dynamite and throw it at a point up to 60 feet away. Each creature within 5 feet of that point must make a DC 12 Dexterity saving throw, taking 3d6 bludgeoning damage on a failed save, or half as much damage on a successful one.\n\nA character can bind sticks of dynamite together so they explode at the same time. Each additional stick increases the damage by 1d6 (to a maximum of 10d6) and the burst radius by 5 feet (to a maximum of 20 feet).\n\nDynamite can be rigged with a longer fuse to explode after a set amount of time, usually 1 to 6 rounds. Roll initiative for the dynamite. After the set number of rounds goes by, the dynamite explodes on that initiative.',
    itemId: itemIds.dynamite,
  },
  {
    id: 35,
    name: 'Throw Frag Grenade',
    description:
      'As an action, a character can throw a grenade at a point up to 60 feet away.\n\nEach creature within 20 feet of an exploding fragmentation grenade must make a DC 15 Dexterity saving throw, taking 5d6 piercing damage on a failed save, or half as much damage on a successful one.',
    itemId: itemIds.grenadeFragmentation,
  },
  {
    id: 36,
    name: 'Throw Smoke Grenade',
    description:
      'As an action, a character can throw a grenade at a point up to 60 feet away.\n\nOne round after a smoke grenade lands, it emits a cloud of smoke that creates a heavily obscured area in a 20-foot radius. A moderate wind (at least 10 miles per hour) disperses the smoke in 4 rounds; a strong wind (20 or more miles per hour) disperses it in 1 round.',
    itemId: itemIds.grenadeSmoke,
  },
  {
    id: 37,
    name: 'Amulet of Health',
    description:
      'Your Constitution score is 19 while you wear this amulet. It has no effect on you if your Constitution is already 19 or higher.',
    itemId: itemIds.amuletOfHealth,
  },
  {
    id: 38,
    name: 'Proof Against Detection and Location',
    description:
      "While wearing this amulet, you are hidden from divination magic. You can't be targeted by such magic or perceived through magical scrying sensors.",
    itemId: itemIds.amuletOfProofAgainstDetectionAndLocation,
  },
  {
    id: 39,
    name: 'Amulet of the Planes',
    description:
      'While wearing this amulet, you can use an action to name a location that you are familiar with on another plane of existence. Then make a DC 15 Intelligence check. On a successful check, you cast the plane shift spell. On a failure, you and each creature and object within 15 feet of you travel to a random destination. Roll a d100. On a 1–60, you travel to a random location on the plane you named. On a 61–100, you travel to a randomly determined plane of existence.',
    itemId: itemIds.amuletOfThePlanes,
  },
  {
    id: 40,
    name: 'Invulnerability',
    description:
      'You have resistance to nonmagical damage while you wear this armor. Additionally, you can use an action to make yourself immune to nonmagical damage for 10 minutes or until you are no longer wearing the armor. Once this special action is used, it can’t be used again until the next dawn.',
    itemId: itemIds.armorOfInvulnerability,
  },
  {
    id: 41,
    name: 'Arrow-Catching',
    description:
      'You gain a +2 bonus to AC against ranged attacks while you wield this shield. This bonus is in addition to the shield’s normal bonus to AC. In addition, whenever an attacker makes a ranged attack against a target within 5 feet of you, you can use your reaction to become the target of the attack instead.',
    itemId: itemIds.arrowCatchingShield,
  },
  {
    id: 42,
    name: 'Bag of Beans',
    description:
      'Inside this heavy cloth bag are 3d4 dry beans. Thebag weighs 1/2 pound plus 1/4 pound for each bean it contains.\n\n If you dump the bag’s contents out on the ground, they explode in a 10-foot radius, extending from the beans. Each creature in the area, including you, must make a DC 15 Dexterity saving throw, taking 5d4 fire damage on a failed save, or half as much damage on a successful one. The fire ignites flammable objects in the area that aren’t being worn or carried.\n\n If you remove a bean from the bag, plant it in dirt or sand, and then water it, the bean produces an effect 1 minute later from the ground where it was planted. The GM can choose an effect from the following table, determine it randomly, or create an effect.',
    extendedTable: [
      {
        '': {
          headers: ['d100', 'Effect'],
          data: [
            {
              d100: '01',
              Effect:
                '5d4 toadstools sprout. If a creature eats a toadstool, roll any die. On an odd roll, the eater must succeed on a DC 15 Constitution saving throw or take 5d6 poison damage and become poisoned for 1 hour. On an even roll, the eater gains 5d6 temporary hit points for 1 hour.',
            },
            {
              d100: '02 - 10',
              Effect:
                '5d4 toadstools sprout. If a creature eats a toadstool, roll any die. On an odd roll, the eater must succeed on a DC 15 Constitution saving throw or take 5d6 poison damage and become poisoned for 1 hour. On an even roll, the eater gains 5d6 temporary hit points for 1 hour.',
            },
            {
              d100: '11 - 20',
              Effect:
                'A treant sprouts. There’s a 50 percent chance that the treant is chaotic evil and attacks.',
            },
            {
              d100: '21 - 30',
              Effect:
                'An animate, immobile stone statue in your likeness rises. It makes verbal threats against you. If you leave it and others come near, it describes you as the most heinous of villains and directs the newcomers to find and attack you. If you are on the same plane of existence as the statue, it knows where you are. The statue becomes inanimate after 24 hours.',
            },
            {
              d100: '31 - 40',
              Effect:
                'A campfire with blue flames springs forth and burns for 24 hours (or until it is extinguished).',
            },
            {
              d100: '41 - 50',
              Effect: '1d6 + 6 shriekers sprout.',
            },
            {
              d100: '51 - 60',
              Effect:
                '1d4 + 8 bright pink toads crawl forth. Whenever a toad is touched, it transforms into a Large or smaller monster of the GM’s choice. The monster remains for 1 minute, then disappears in a puff of bright pink smoke',
            },
            {
              d100: '61 - 70',
              Effect: 'A hungry bulette burrows up and attacks',
            },
            {
              d100: '71 - 80',
              Effect:
                'A fruit tree grows. It has 1d10 + 20 fruit, 1d8 of which act as randomly determined magic potions, while one acts as an ingested poison of the GM’s choice. The tree vanishes after 1 hour. Picked fruit remains, retaining any magic for 30 days.',
            },
            {
              d100: '81 - 90',
              Effect:
                'A nest of 1d4 + 3 eggs springs up. Any creature that eats an egg must make a DC 20 Constitution saving throw. On a successful save, a creature permanently increases its lowest ability score by 1, randomly choosing among equally low scores. On a failed save, the creature takes 10d6 force damage from an internal magical explosion.',
            },
            {
              d100: '91 - 99',
              Effect:
                'A pyramid with a 60-­‐foot-­‐square base bursts upward. Inside is a sarcophagus containing a mummy lord. The pyramid is treated as the mummy lord’s lair, and its sarcophagus contains treasure of the GM’s choic',
            },
            {
              d100: '00',
              Effect:
                'A giant beanstalk sprouts, growing to a height of the GM’s choice. The top leads where the GM chooses, such as to a great view, a cloud giant’s castle, or a different plane of existence.',
            },
          ],
        },
      },
    ],
    itemId: itemIds.bagOfBeans,
  },
  {
    id: 43,
    name: 'Devouring',
    description:
      'This bag superficially resembles a bag of holding but is a feeding orifice for a gigantic extradimensional creature. Turning the bag inside out closes the orifice.\n\nThe extradimensional creature attached to the bag can sense whatever is placed inside the bag. Animal or vegetable matter placed wholly in the bag is devoured and lost forever. When part of a living creature is placed in the bag, as happens when someone reaches inside it, there is a 50 percent chance that the creature is pulled inside the bag. A creature inside the bag can use its action to try to escape with a successful DC 15 Strength check. Another creature can use its action to reach into the bag to pull a creature out, doing so with a successful DC 20 Strength check (provided it isn’t pulled inside the bag first). Any creature that starts its turn inside the bag is devoured, its body destroyed.\n\nInanimate objects can be stored in the bag, which can hold a cubic foot of such material. However, once each day, the bag swallows any objects inside it and spits them out into another plane of existence. The GM determines the time and plane.\n\nIf the bag is pierced or torn, it is destroyed, and anything contained within it is transported to a random location on the Astral Plane.',
    itemId: itemIds.bagOfDevouring,
  },
  {
    id: 44,
    name: 'Holding',
    description:
      'This bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action.\n\nIf the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate.\n\nPlacing a bag of holding inside an extradimensional space created by a handy haversack, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can’t be reopened.',
    itemId: itemIds.bagOfHolding,
  },
  {
    id: 45,
    name: 'Bead of Force',
    description:
      'This small black sphere measures 3/4 of an inch in diameter and weighs an ounce. Typically, 1d4 + 4 beads of force are found together.\n\nYou can use an action to throw the bead up to 60 feet. The bead explodes on impact and is destroyed. Each creature within a 10-foot radius of where the bead landed must succeed on a DC 15 Dexterity saving throw or take 5d4 force damage. A sphere of transparent force then encloses the area for 1 minute. Any creature that failed the save and is completely within the area is trapped inside this sphere. Creatures that succeeded on the save, or are partially within the area, are pushed away from the center of the sphere until they are no longer inside it. Only breathable air can pass through the sphere’s wall. No attack or other effect can.\n\nAn enclosed creature can use its action to push against the sphere’s wall, moving the sphere up to half the creature’s walking speed. The sphere can be picked up, and its magic causes it to weigh only 1 pound, regardless of the weight of creatures inside.',
    itemId: itemIds.beadOfForce,
  },
  {
    id: 46,
    name: 'Dwarvenkind',
    description:
      'While wearing this belt, you gain the following benefits:\n\n- Your Constitution score increases by 2, to a maximum of 20.\n- You have advantage on Charisma (Persuasion) checks made to interact with dwarves.\n- You can speak, read, and write Dwarvish.\n\nIn addition, while attuned to the belt, you have a 50 percent chance each day at dawn of growing a full beard if you’re capable of growing one, or a visibly thicker beard if you already have one.\nIf you aren’t a dwarf, you gain the following additional benefits while wearing the belt:\n\n- You have advantage on saving throws against poison, and you have resistance against poison damage.\n- You have darkvision out to a range of 60 feet.\n- You can speak, read, and write Dwarvish.',
    itemId: itemIds.beltOfDwarvenkind,
  },
  {
    id: 47,
    name: 'Hill Giant Strength',
    description:
      'While wearing this belt, your Strength score changes to 21. If your Strength is already equal to or greater than 21, the item has no effect on you.',
    itemId: itemIds.beltOfHillGiantStrength,
  },
  {
    id: 48,
    name: 'Storm Giant Strength',
    description:
      'While wearing this belt, your Strength score changes to 29. If your Strength is already equal to or greater than 29, the item has no effect on you.',
    itemId: itemIds.beltOfStormGiantStrength,
  },
  {
    id: 49,
    name: 'Stone Giant Strength',
    description:
      'While wearing this belt, your Strength score changes to 23. If your Strength is already equal to or greater than 23, the item has no effect on you.',
    itemId: itemIds.beltOfStoneGiantStrength,
  },
  {
    id: 50,
    name: 'Fire Giant Strength',
    description:
      'While wearing this belt, your Strength score changes to 25. If your Strength is already equal to or greater than 25, the item has no effect on you.',
    itemId: itemIds.beltOfFireGiantStrength,
  },
  {
    id: 51,
    name: 'Frost Giant Strength',
    description:
      'While wearing this belt, your Strength score changes to 23. If your Strength is already equal to or greater than 23, the item has no effect on you.',
    itemId: itemIds.beltOfFrostGiantStrength,
  },
  {
    id: 52,
    name: 'Cloud Giant Strength',
    description:
      'While wearing this belt, your Strength score changes to 27. If your Strength is already equal to or greater than 27, the item has no effect on you.',
    itemId: itemIds.beltOfCloudGiantStrength,
  },
  {
    id: 53,
    name: 'Elvenkind',
    description:
      'While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity (Stealth) checks that rely on moving silently.',
    itemId: itemIds.bootsOfElvenkind,
  },
  {
    id: 54,
    name: 'Levitation',
    description:
      'While you wear these boots, you can use an action to cast the levitate spell on yourself at will.',
    itemId: itemIds.bootsOfLevitation,
  },
  {
    id: 55,
    name: 'Speed',
    description:
      'While you wear these boots, you can use a bonus action and click the boots’ heels together. If you do, the boots double your walking speed, and any creature that makes an opportunity attack against you has disadvantage on the attack roll. If you click your heels together again, you end the effect.\n\nWhen the boots’ property has been used for a total of 10 minutes, the magic ceases to function until you finish a long rest.',
    itemId: itemIds.bootsOfSpeed,
  },
  {
    id: 56,
    name: 'Striding and Springing',
    description:
      'While you wear these boots, your walking speed becomes 30 feet, unless your walking speed is higher, and your speed isn’t reduced if you are encumbered or wearing heavy armor. In addition, you can jump three times the normal distance, though you can’t jump farther than your remaining movement would allow.',
    itemId: itemIds.bootsOfStridingAndSpringing,
  },
  {
    id: 57,
    name: 'Winterlands',
    description:
      'These furred boots are snug and feel quite warm. While you wear them, you gain the following benefits:' +
      '\n- You have resistance to cold damage.' +
      '\n- You ignore difficult terrain created by ice or snow.' +
      '\n- You can tolerate temperatures as low as -50 degrees Fahrenheit without any additional protection. If you wear heavy clothes, you can tolerate temperatures as low as -100 degrees Fahrenheit.',
    itemId: itemIds.bootsOfTheWinterlands,
  },
  {
    id: 58,
    name: 'Commanding Water Elementals',
    description:
      'While this bowl is filled with water, you can use an action to speak the bowl’s command word and summon a water elemental, as if you had cast the conjure elemental spell. The bowl can’t be used this way again until the next dawn.\n\nThe bowl is about 1 foot in diameter and half as deep. It weighs 3 pounds and holds about 3 gallons.',
    itemId: itemIds.bowlOfCommandingWaterElementals,
  },
  {
    id: 59,
    name: 'Archery',
    description:
      'While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons.',
    itemId: itemIds.bracersOfArchery,
  },
  {
    id: 60,
    name: 'Defense',
    description:
      'While wearing these bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield.',
    itemId: itemIds.bracersOfDefense,
  },
  {
    id: 61,
    name: 'Commanding Fire Elementals',
    description:
      'While a fire burns in this brass brazier, you can use an action to speak the brazier’s command word and summon a fire elemental, as if you had cast the conjure elemental spell. The brazier can’t be used this way again until the next dawn.',
    itemId: itemIds.brazierOfCommandingFireElementals,
  },
  {
    id: 62,
    name: 'Shielding',
    description:
      'While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the magic missile spell.',
    itemId: itemIds.broochOfShielding,
  },
  {
    id: 63,
    name: 'Flying',
    description:
      'This wooden broom, which weighs 3 pounds, functions like a mundane broom until you stand astride it and speak its command word. It then hovers beneath you and can be ridden in the air. It has a flying speed of 50 feet. It can carry up to 400 pounds, but its flying speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land.\n\nYou can send the broom to travel alone to a destination within 1 mile of you if you speak the command word, name the location, and are familiar with that place. The broom comes back to you when you speak another command word, provided that the broom is still within 1 mile of you.',
    itemId: itemIds.broomOfFlying,
  },
  {
    id: 64,
    name: 'Candle of Invocation',
    description:
      'This slender taper is dedicated to a deity and shares that deity’s alignment. The candle’s alignment can be detected with the detect evil and good spell. The GM chooses the god and associated alignment or determines the alignment randomly.\n\nThe candle’s magic is activated when the candle is lit, which requires an action. After burning for 4 hours, the candle is destroyed. You can snuff it out early for use at a later time. Deduct the time it burned in increments of 1 minute from the candle’s total burn time.\n\nWhile lit, the candle sheds dim light in a 30-foot radius. Any creature within that light whose alignment matches that of the candle makes attack rolls, saving throws, and ability checks with advantage. In addition, a cleric or druid in the light whose alignment matches the candle’s can cast 1st- level spells he or she has prepared without expending spell slots, though the spell’s effect is as if cast with a 1st-level slot.',
    itemId: itemIds.candleOfInvocation,
    extendedTable: [
      {
        '': {
          headers: ['d20', 'Alignment'],
          data: [
            {
              d20: '01 - 02',
              Alignment: 'Chaotic evil',
            },
            {
              d20: '03 - 04',
              Alignment: 'Chaotic neutral',
            },
            {
              d20: '05 - 07',
              Alignment: 'Chaotic good',
            },
            {
              d20: '08 - 09',
              Alignment: 'Neutral evil',
            },
            {
              d20: '10 - 11',
              Alignment: 'True neutral',
            },
            {
              d20: '12 - 13',
              Alignment: 'Neutral good',
            },
            {
              d20: '14 - 15',
              Alignment: 'Lawful evil',
            },
            {
              d20: '16 - 17',
              Alignment: 'Lawful neutral',
            },
            {
              d20: '18 - 20',
              Alignment: 'Lawful good',
            },
          ],
        },
      },
    ],
  },
  {
    id: 65,
    name: 'Mountebank',
    description:
      'This cape smells faintly of brimstone. While wearing it, you can use it to cast the dimension door spell as an action. This property of the cape can’t be used again until the next dawn.\n\nWhen you disappear, you leave behind a cloud of smoke, and you appear in a similar cloud of smoke at your destination. The smoke lightly obscures the space you left and the space you appear in, and it dissipates at the end of your next turn. A light or stronger wind disperses the smoke',
    itemId: itemIds.capeOfTheMountebank,
  },
  {
    id: 66,
    name: 'Controlling Air Elementals',
    description:
      'While incense is burning in this censer, you can use an action to speak the censer’s command word and summon an air elemental, as if you had cast the conjure elemental spell. The censer can’t be used this way again until the next dawn.\n\nThe censer is about 6 inches high and weighs 1 pound.',
    itemId: itemIds.censerOfControllingAirElementals,
  },
  {
    id: 67,
    name: 'Opening',
    description:
      'This hollow metal tube measures about 1 foot long and weighs 1 pound. You can strike it as an action, pointing it at an object within 120 feet of you that can be opened, such as a door, lid, or lock. The chime issues a clear tone, and one lock or latch on the object opens unless the sound can’t reach the object. If no locks are present, the object simply opens.',
    itemId: itemIds.chimeOfOpening,
  },
  {
    id: 68,
    name: 'Blasting',
    description: `While wearing this circlet, you can use an action to cast the %${spellIds.scorchingRay}{scorching ray}% spell with it. When you make the spell’s attacks, you do so with an attack bonus of +5. The circlet can’t be used this way again until the next dawn.`,
    itemId: itemIds.circletOfBlasting,
  },
  {
    id: 69,
    name: 'Arachnida',
    description:
      'This fine garment is made of black silk interwoven with faint silvery threads. While wearing it, you gain the following benefits.',
    options: [
      'You have resistance to poison damage.',
      'You have a climbing speed equal to your walking speed.',
      'You can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free.',
      'You can’t be caught in webs of any sort and can move through webs as if they were difficult terrain.',
      `You can use an action to cast the ${spellIds.web} spell (save DC 13). The web created by the spell fills twice its normal area. Once used, this property of the cloak can’t be used again until the next dawn.`,
    ],
    itemId: itemIds.cloakOfArachnida,
  },
  {
    id: 70,
    name: 'Displacement',
    description:
      'While you wear this cloak, it projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn. This property is suppressed while you are incapacitated, restrained, or otherwise unable to move',
    itemId: itemIds.cloakOfDisplacement,
  },
  {
    id: 71,
    name: 'Elvenkind',
    description:
      'While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak’s color shifts to camouflage you. Pulling the hood up or down requires an action.',
    itemId: itemIds.cloakOfElvenkind,
  },
  {
    id: 72,
    name: 'Bat',
    description:
      'While wearing this cloak, you have advantage on Dexterity (Stealth) checks. In an area of dim light or darkness, you can grip the edges of the cloak with both hands and use it to fly at a speed of 40 feet. If you ever fail to grip the cloak’s edges while flying in this way, or if you are no longer in dim light or darkness, you lose this flying speed.\n\nWhile wearing the cloak in an area of dim light or darkness, you can use your action to cast polymorph on yourself, transforming into a bat. While you are in the form of the bat, you retain your Intelligence, Wisdom, and Charisma scores. The cloak can’t be used this way again until the next dawn.',
    itemId: itemIds.cloakOfTheBat,
  },
  {
    id: 73,
    name: 'Manta Ray',
    description:
      'While wearing this cloak with its hood up, you can breathe underwater, and you have a swimming speed of 60 feet. Pulling the hood up or down requires an action.',
    itemId: itemIds.cloakOfTheMantaRay,
  },
  {
    id: 74,
    name: 'Force',
    description:
      'This cube is about an inch across. Each face has a distinct marking on it that can be pressed. The cube starts with 36 charges, and it regains 1d20 expended charges daily at dawn.\n\nYou can use an action to press one of the cube’s faces, expending a number of charges based on the chosen face, as shown in the Cube of Force Faces table. Each face has a different effect. If the cube has insufficient charges remaining, nothing happens. Otherwise, a barrier of invisible force springs into existence, forming a cube 15 feet on a side. The barrier is centered on you, moves with you, and lasts for 1 minute, until you use an action to press the cube’s sixth face, or the cube runs out of charges. You can change the barrier’s effect by pressing a different face of the cube and expending the requisite number of charges, resetting the duration.\n\nIf your movement causes the barrier to come into contact with a solid object that can’t pass through the cube, you can’t move any closer to that object as long as the barrier remains',
    itemId: itemIds.cubeOfForce,
    extendedTable: [
      {
        'Cube of Force Faces': {
          headers: ['Face', 'Charges', 'Effect'],
          data: [
            {
              Face: '1',
              Charges: '1',
              Effect: 'Gases, wind, and fog can’t pass through the barrier.',
            },
            {
              Face: '2',
              Charges: '2',
              Effect:
                'Nonliving matter can’t pass through the barrier. Walls, floors, and ceilings can pass through at your discretion',
            },
            {
              Face: '3',
              Charges: '3',
              Effect: 'Living matter can’t pass through the barrier.',
            },
            {
              Face: '4',
              Charges: '4',
              Effect: 'Spell effects can’t pass through the barrier',
            },
            {
              Face: '5',
              Charges: '5',
              Effect:
                'Nothing can pass through the barrier. Walls, floors, and ceilings can pass through at your discretion.',
            },
            {
              Face: '6',
              Charges: '0',
              Effect: 'The barrier deactivates.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 75,
    name: 'Barrier Deactivation',
    description:
      'The cube loses charges when the barrier is targeted by certain spells or comes into contact with certain spell or magic item effects, as shown in the table below.',
    itemId: itemIds.cubeOfForce,
    extendedTable: [
      {
        '': {
          headers: ['Spell or item', 'Charges Lost'],
          data: [
            {
              'Spell or item': `%${spellIds.disintegrate}{Disintegrate}%`,
              'Charges Lost': '1d12',
            },
            {
              'Spell or item': `^${itemIds.hornOfBlasting}{Horn of blasting}^`,
              'Charges Lost': '1d10',
            },
            {
              'Spell or item': `%${spellIds.passwall}{Passwall}%`,
              'Charges Lost': '1d6',
            },
            {
              'Spell or item': `%${spellIds.prismaticSpray}{Prismatic spray}%`,
              'Charges Lost': '1d20',
            },
            {
              'Spell or item': `%${spellIds.wallOfFire}{Wall of fire}%`,
              'Charges Lost': '1d4',
            },
          ],
        },
      },
    ],
  },
  {
    id: 76,
    name: 'Gate',
    description: `This cube is 3 inches across and radiates palpable magical energy. The six sides of the cube are each keyed to a different plane of existence, one of which is the Material Plane. The other sides are linked to planes determined by the GM.\n\nou can use an action to press one side of the cube to cast the %${spellIds.gate}{gate}% spell with it, opening a portal to the plane keyed to that side. Alternatively, if you use an action to press one side twice, you can cast the %${spellIds.planeShift}{plane shift}% spell (save DC 17) with the cube and transport the targets to the plane keyed to that side.`,
    itemId: itemIds.cubicGate,
  },
  {
    id: 77,
    name: '+1 Dagger',
    description: 'This weapon has a +1 bonus to attack and damage rolls.',
    itemId: itemIds.daggerOfVenom,
  },
  {
    id: 78,
    name: 'Venom',
    description:
      'You can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 poison damage and become poisoned for 1 minute. The dagger can’t be used this way again until the next dawn',
    itemId: itemIds.daggerOfVenom,
  },
  {
    id: 79,
    name: 'Endless Water',
    description:
      'This stoppered flask sloshes when shaken, as if it contains water. The decanter weighs 2 pounds.\n\nYou can use an action to remove the stopper and speak one of three command words, whereupon an amount of fresh water or salt water (your choice) pours out of the flask. The water stops pouring out at the start of your next turn. Choose from the following options:',
    options: [
      '**Stream.** The decanter produces 1 gallon of water.',
      '**Fountain.** The decanter produces 5 gallons of water.',
      '**Geyser.** produces 30 gallons of water that gushes forth in a geyser 30 feet long and 1 foot wide. As a bonus action while holding the decanter, you can aim the geyser at a creature you can see within 30 feet of you. The target must succeed on a DC 13 Strength saving throw or take 1d4 bludgeoning damage and fall prone. Instead of a creature, you can target an object that isn’t being worn or carried and that weighs no more than 200 pounds. The object is either knocked over or pushed up to 15 feet away from you.',
    ],
    itemId: itemIds.decanterOfEndlessWater,
  },
  {
    id: 80,
    name: 'Create Illusions',
    description:
      'The magic of the deck functions only if cards are drawn at random (you can use an altered deck of playing cards to simulate the deck). You can use an action to draw a card at random from the deck and throw it to the ground at a point within 30 feet of you.\n\nAn illusion of one or more creatures forms over the thrown card and remains until dispelled. An illusory creature appears real, of the appropriate size, and behaves as if it were a real creature except that it can do no harm. While you are within 120 feet of the illusory creature and can see it, you can use an action to move it magically anywhere within 30 feet of its card. Any physical interaction with the illusory creature reveals it to be an illusion, because objects pass through it. Someone who uses an action to visually inspect the creature identifies it as illusory with a successful DC 15 Intelligence (Investigation) check. The creature then appears translucent. The illusion lasts until its card is moved or the illusion is dispelled. When the illusion ends, the image on its card disappears, and that card can’t be used again.',
    itemId: itemIds.deckOfIllusions,
    extendedTable: [
      {
        '': {
          headers: ['Playing Card', 'Creature'],
          data: [
            { 'Playing Card': 'Ace of hearts', Creature: 'Red dragon' },
            {
              'Playing Card': 'King of hearts',
              Creature: 'Knight and four guards',
            },
            {
              'Playing Card': 'Queen of hearts',
              Creature: 'Succubus or incubus',
            },
            { 'Playing Card': 'Jack of hearts', Creature: 'Druid' },
            { 'Playing Card': 'Ten of hearts', Creature: 'Cloud giant' },
            { 'Playing Card': 'Nine of hearts', Creature: 'Ettin' },
            { 'Playing Card': 'Eight of hearts', Creature: 'Bugbear' },
            { 'Playing Card': 'Two of hearts', Creature: 'Goblin' },
            { 'Playing Card': 'Ace of diamonds', Creature: 'Beholder' },
            {
              'Playing Card': 'King of diamonds',
              Creature: 'Archmage and mage apprentice',
            },
            { 'Playing Card': 'Queen of diamonds', Creature: 'Night hag' },
            { 'Playing Card': 'Jack of diamonds', Creature: 'Assassin' },
            { 'Playing Card': 'Ten of diamonds', Creature: 'Fire giant' },
            { 'Playing Card': 'Nine of diamonds', Creature: 'Ogre mage' },
            { 'Playing Card': 'Eight of diamonds', Creature: 'Gnoll' },
            { 'Playing Card': 'Two of diamonds', Creature: 'Kobold' },
            { 'Playing Card': 'Ace of spades', Creature: 'Lich' },
            {
              'Playing Card': 'King of spades',
              Creature: 'Priest and two acolytes',
            },
            { 'Playing Card': 'Queen of spades', Creature: 'Medusa' },
            { 'Playing Card': 'Jack of spades', Creature: 'Veteran' },
            { 'Playing Card': 'Ten of spades', Creature: 'Frost giant' },
            { 'Playing Card': 'Nine of spades', Creature: 'Troll' },
            { 'Playing Card': 'Eight of spades', Creature: 'Hobgoblin' },
            { 'Playing Card': 'Two of spades', Creature: 'Goblin' },
            { 'Playing Card': 'Ace of clubs', Creature: 'Iron golem' },
            {
              'Playing Card': 'King of clubs',
              Creature: 'Bandit captain and three bandits',
            },
            { 'Playing Card': 'Queen of clubs', Creature: 'Erinyes' },
            { 'Playing Card': 'Jack of clubs', Creature: 'Berserker' },
            { 'Playing Card': 'Ten of clubs', Creature: 'Hill giant' },
            { 'Playing Card': 'Nine of clubs', Creature: 'Ogre' },
            { 'Playing Card': 'Eight of clubs', Creature: 'Orc' },
            { 'Playing Card': 'Two of clubs', Creature: 'Kobold' },
            {
              'Playing Card': 'Jokers (2)',
              Creature: 'You (the deck’s owner)',
            },
          ],
        },
      },
    ],
  },
  {
    id: 81,
    name: 'Draw Cards',
    description:
      'Before you draw a card, you must declare how many cards you intend to draw and then draw them randomly (you can use an altered deck of playing cards to simulate the deck). Any cards drawn in excess of this number have no effect. Otherwise, as soon as you draw a card from the deck, its magic takes effect. You must draw each card no more than 1 hour after the previous draw. If you fail to draw the chosen number, the remaining number of cards fly from the deck on their own and take effect all at once. Once a card is drawn, it fades from existence. Unless the card is the Fool or the Jester, the card reappears in the deck, making it possible to draw the same card twice.',
    itemId: itemIds.deckOfManyThings,
  },
  {
    id: 82,
    name: 'Demon Armor',
    description:
      'While wearing this armor, you gain a +1 bonus to AC, and you can understand and speak Abyssal. In addition, the armor’s clawed gauntlets turn unarmed strikes with your hands into magic weapons that deal slashing damage, with a +1 bonus to attack rolls and damage rolls and a damage die of 1d8.',
    itemId: itemIds.demonArmor,
  },
  {
    id: 83,
    name: 'Cursed',
    description:
      'Once you don this cursed armor, you can’t doff it unless you are targeted by the remove curse spell or similar magic. While wearing the armor, you have disadvantage on attack rolls against demons and on saving throws against their spells and special abilities.',
    itemId: itemIds.demonArmor,
  },
].map((feature, index, arr) => {
  const featureParent = ItemsSeed.find((item) => item.id === feature.itemId);
  if (!featureParent)
    throw new Error(
      'Feature of itemid ' + feature.itemId + ' has no item with that id'
    );
  const id = generateId('item', feature.name, featureParent.name, count);
  count++;
  const nextItemFeature = arr[index + 1];
  if (!nextItemFeature) return { ...feature, id };
  if (nextItemFeature.itemId !== feature.itemId) {
    count = 1;
  }
  return { ...feature, id };
});
export default ItemFeatureSeed;
