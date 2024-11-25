import { Prisma } from '@prisma/client';
import CreatureSeed, { creatureIds } from './Creature.seed';
import generateId from '../_helpers/generateId';
let count = 1;
const CreatureFeaturesSeed: Prisma.FeatureCreateManyInput[] = [
  {
    creatureId: creatureIds.awakenedShrub,
    name: 'False Appearance',
    description:
      'While the shrub remains motionless, it is indistinguishable from a normal shrub.',
  },
  {
    creatureId: creatureIds.awakenedTree,
    name: 'False Appearance',
    description:
      'While the tree remains motionless, it is indistinguishable from a normal tree.',
  },
  {
    creatureId: creatureIds.baboon,
    name: 'Pack Tactics',
    description:
      'The baboon has advantage on an attack roll against a creature if at least one of the baboon’s allies is within 5 feet of the creature and the ally isn’t incapacitated. ',
  },
  {
    creatureId: creatureIds.badger,
    name: 'Keen Smell',
    description:
      'The badger has advantage on Wisdom (Perception) checks that rely on smell.',
  },
  {
    creatureId: creatureIds.bat,
    name: 'Echolocation',
    description: "The bat can't use its blindsight while deafened.",
  },
  {
    creatureId: creatureIds.bat,
    name: 'Keen Hearing',
    description:
      'The bat has advantage on Wisdom (Perception) checks that rely on hearing.',
  },
  {
    creatureId: creatureIds.blackBear,
    name: 'Keen Smell',
    description:
      'The bear has advantage on Wisdom (Perception) checks that rely on smell.',
  },
  {
    creatureId: creatureIds.blinkDog,
    name: 'Keen Hearing and Smell',
    description:
      'The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell.',
  },
  {
    creatureId: creatureIds.bloodHawk,
    name: 'Keen Sight',
    description:
      'The hawk has advantage on Wisdom (Perception) checks that rely on sight.',
  },
  {
    creatureId: creatureIds.bloodHawk,
    name: 'Pack Tactics',
    description:
      'The hawk has advantage on an attack roll against a creature if at least one of the hawk’s allies is within 5 feet of the creature and the ally isn’t incapacitated.',
  },
  {
    creatureId: creatureIds.boar,
    name: 'Charge',
    description:
      'If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.',
  },
  {
    creatureId: creatureIds.boar,
    name: 'Relentless (Recharges after a Short or Long Rest)',
    description:
      'If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.',
  },
  {
    creatureId: creatureIds.brownBear,
    name: 'Keen Smell',
    description:
      'The bear has advantage on Wisdom (Perception) checks that rely on smell.',
  },
  {
    creatureId: creatureIds.cat,
    name: 'Keen Smell',
    description:
      'The cat has advantage on Wisdom (Perception) checks that rely on smell.',
  },
  {
    creatureId: creatureIds.crab,
    name: 'Amphibious',
    description: 'The crab can breathe air and water.',
  },
  {
    creatureId: creatureIds.crocodile,
    name: 'Hold Breath',
    description: 'The crocodile can hold its breath for 15 minutes.',
  },
  {
    creatureId: creatureIds.deathDog,
    name: 'Two-Headed',
    description:
      'The dog has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious.',
  },
  {
    creatureId: creatureIds.direWolf,
    name: 'Keen Hearing and Smell',
    description:
      'The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.',
  },
  {
    creatureId: creatureIds.direWolf,
    name: 'Pack Tactics',
    description:
      'The wolf has advantage on an attack roll against a creature if at least one of the wolf’s allies is within 5 feet of the creature and the ally isn’t incapacitated.',
  },
  {
    creatureId: creatureIds.eagle,
    name: 'Keen Sight',
    description:
      'The eagle has advantage on Wisdom (Perception) checks that rely on sight.',
  },
  {
    creatureId: creatureIds.elephant,
    name: 'Trampling Charge',
    description:
      'If the elephant moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action.',
  },
  {
    creatureId: creatureIds.elk,
    name: 'Charge',
    description:
      'If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.',
  },
  {
    creatureId: creatureIds.flyingSnake,
    name: 'Flyby',
    description:
      "The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
  },
  {
    creatureId: creatureIds.frog,
    name: 'Amphibious',
    description: 'The frog can breathe air and water.',
  },
  {
    creatureId: creatureIds.frog,
    name: 'Standing Leap',
    description:
      "The frog's long jump is up to 10 feet and its high jump is up to 5 feet, with or without a running start.",
  },
  {
    creatureId: creatureIds.giantBadger,
    name: 'Keen Smell',
    description:
      'The badger has advantage on Wisdom (Perception) checks that rely on smell.',
  },
  {
    creatureId: creatureIds.giantBat,
    name: 'Echolocation',
    description: "The bat can't use its blindsight while deafened.",
  },
  {
    creatureId: creatureIds.giantBat,
    name: 'Keen Hearing',
    description:
      'The bat has advantage on Wisdom (Perception) checks that rely on hearing.',
  },
  {
    creatureId: creatureIds.giantBoar,
    name: 'Charge',
    description:
      'If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.',
  },
  {
    creatureId: creatureIds.giantBoar,
    name: 'Relentless (Recharges after a Short or Long Rest)',
    description:
      'If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.',
  },
  {
    creatureId: creatureIds.giantCrab,
    name: 'Amphibious',
    description: 'The crab can breathe air and water.',
  },
  {
    creatureId: creatureIds.giantCrocodile,
    name: 'Hold Breath',
    description: 'The crocodile can hold its breath for 30 minutes.',
  },
  {
    creatureId: creatureIds.giantEagle,
    name: 'Keen Sight',
    description:
      'The eagle has advantage on Wisdom (Perception) checks that rely on sight.',
  },
  {
    creatureId: creatureIds.giantElk,
    name: 'Charge',
    description:
      'If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.',
  },
  {
    creatureId: creatureIds.giantFireBeetle,
    name: 'Illumination',
    description:
      'The beetle sheds bright light in a 10-­‐‑foot radius and dim light for an additional 10 feet.',
  },
  {
    creatureId: creatureIds.giantGoat,
    name: 'Charge',
    description:
      'If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.',
  },
  {
    creatureId: creatureIds.giantGoat,
    name: 'Sure-Footed',
    description:
      'The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.',
  },
  {
    creatureId: creatureIds.giantHyena,
    name: 'Rampage',
    description:
      'When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack.',
  },
  {
    creatureId: creatureIds.giantOctopus,
    name: 'Hold Breath',
    description:
      'While out of water, the octopus can hold its breath for 1 hour.',
  },
  {
    creatureId: creatureIds.giantOctopus,
    name: 'Underwater Camouflage',
    description:
      'The octopus has advantage on Dexterity (Stealth) checks made while underwater.',
  },
  {
    creatureId: creatureIds.giantOctopus,
    name: 'Water Breathing',
    description: 'The octopus can breathe only underwater.',
  },
  {
    creatureId: creatureIds.giantOwl,
    name: 'Keen Hearing and Sight',
    description:
      'The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight.',
  },
  {
    creatureId: creatureIds.giantOwl,
    name: 'Flyby',
    description:
      "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
  },
  {
    creatureId: creatureIds.giantRat,
    name: 'Keen Smell',
    description:
      'The rat has advantage on Wisdom (Perception) checks that rely on smell.',
  },
  {
    creatureId: creatureIds.giantRat,
    name: 'Pack Tactics',
    description:
      'The rat has advantage on an attack roll against a creature if at least one of the rat’s allies is within 5 feet of the creature and the ally isn’t incapacitated.',
  },
  {
    creatureId: creatureIds.diseasedGiantRat,
    name: 'Keen Smell',
    description:
      'The rat has advantage on Wisdom (Perception) checks that rely on smell.',
  },
  {
    creatureId: creatureIds.diseasedGiantRat,
    name: 'Pack Tactics',
    description:
      'The rat has advantage on an attack roll against a creature if at least one of the rat’s allies is within 5 feet of the creature and the ally isn’t incapacitated.',
  },
  {
    creatureId: creatureIds.giantSeaHorse,
    name: 'Water Breathing',
    description: 'The sea horse can breathe only underwater.',
  },
  {
    creatureId: creatureIds.giantSeaHorse,
    name: 'Charge',
    description:
      'If the sea horse moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. It the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.',
  },
  {
    creatureId: creatureIds.giantShark,
    name: 'Blood Frenzy',
    description:
      'The shark has advantage on melee attack rolls against any creature that doesn’t have all its hit points.',
  },
  {
    creatureId: creatureIds.giantShark,
    name: 'Water Breathing',
    description: 'The shark can breathe only underwater.',
  },
  {
    creatureId: creatureIds.giantSpider,
    name: 'Spider Climb',
    description:
      'The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.',
  },
  {
    creatureId: creatureIds.giantSpider,
    name: 'Web Sense',
    description:
      'While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.',
  },
  {
    creatureId: creatureIds.giantSpider,
    name: 'Web Walker',
    description: 'The spider ignores movement restrictions caused by webbing.',
  },
  {
    creatureId: creatureIds.giantToad,
    name: 'Amphibious',
    description: 'The toad can breathe air and water.',
  },
  {
    creatureId: creatureIds.giantToad,
    name: 'Standing Leap',
    description:
      'The toad’s long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start.',
  },
  {
    creatureId: creatureIds.giantVulture,
    name: 'Keen Sight',
    description:
      'The vulture has advantage on Wisdom (Perception) checks that rely on sight.',
  },
  {
    creatureId: creatureIds.giantVulture,
    name: 'Pack Tactics',
    description:
      'The vulture has advantage on an attack roll against a creature if at least one of the vulture’s allies is within 5 feet of the creature and the ally isn’t incapacitated.',
  },
  {
    creatureId: creatureIds.giantWeasel,
    name: 'Keen Hearing and Smell',
    description:
      'The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell.',
  },
  {
    creatureId: creatureIds.giantWolfSpider,
    name: 'Spider Climb',
    description:
      'The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.',
  },
  {
    creatureId: creatureIds.giantWolfSpider,
    name: 'Web Sense',
    description:
      'While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.',
  },
  {
    creatureId: creatureIds.giantWolfSpider,
    name: 'Web Walker',
    description: 'The spider ignores movement restrictions caused by webbing.',
  },
  {
    creatureId: creatureIds.goat,
    name: 'Sure-Footed',
    description:
      'The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.',
  },
  {
    creatureId: creatureIds.goat,
    name: 'Charge',
    description:
      'If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone.',
  },
  {
    creatureId: creatureIds.hunterShark,
    name: 'Blood Frenzy',
    description:
      'The shark has advantage on melee attack rolls against any creature that doesn’t have all its hit points.',
  },
  {
    creatureId: creatureIds.hunterShark,
    name: 'Water Breathing',
    description: 'The shark can breathe only underwater.',
  },
  {
    creatureId: creatureIds.hyena,
    name: 'Pack Tactics',
    description:
      'The hyena has advantage on an attack roll against a creature if at least one of the hyena’s allies is within 5 feet of the creature and the ally isn’t incapacitated.',
  },
  {
    creatureId: creatureIds.jackal,
    name: 'Pack Tactics',
    description:
      'The jackal has advantage on an attack roll against a creature if at least one of the jackal’s allies is within 5 feet of the creature and the ally isn’t incapacitated.',
  },
  {
    creatureId: creatureIds.jackal,
    name: 'Keen Hearing and Smell',
    description:
      'The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell.',
  },
  {
    creatureId: creatureIds.killerWhale,
    name: 'Echolocation',
    description: 'The whale can’t use its blindsight while deafened.',
  },
  {
    creatureId: creatureIds.killerWhale,
    name: 'Hold Breath',
    description: 'The whale can hold its breath for 30 minutes.',
  },
  {
    creatureId: creatureIds.killerWhale,
    name: 'Keen Hearing',
    description:
      'The whale has advantage on Wisdom (Perception) checks that rely on hearing.',
  },
  {
    creatureId: creatureIds.lion,
    name: 'Keen Smell',
    description:
      'The lion has advantage on Wisdom (Perception) checks that rely on smell.',
  },
  {
    creatureId: creatureIds.lion,
    name: 'Pack Tactics',
    description:
      'The lion has advantage on an attack roll against a creature if at least one of the lion’s allies is within 5 feet of the creature and the ally isn’t incapacitated.',
  },
  {
    creatureId: creatureIds.lion,
    name: 'Pounce',
    description:
      'If the lion moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action.',
  },
  {
    creatureId: creatureIds.lion,
    name: 'Running Leap',
    description:
      'With a 10-foot running start, the lion can long jump up to 25 feet.',
  },
  {
    creatureId: creatureIds.mammoth,
    name: 'Trampling Charge',
    description:
      'If the mammoth moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action',
  },
  {
    creatureId: creatureIds.mastiff,
    name: 'Keen Hearing and Smell',
    description:
      'The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell.',
  },
  {
    creatureId: creatureIds.mule,
    name: 'Sure-Footed',
    description:
      'The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.',
  },
  {
    creatureId: creatureIds.mule,
    name: 'Beast of Burden',
    description:
      'The mule is considered to be a Large animal for the purpose of determining its carrying capacity.',
  },
  {
    creatureId: creatureIds.octopus,
    name: 'Hold Breath',
    description: 'The octopus can hold its breath for 30 minutes.',
  },
  {
    creatureId: creatureIds.octopus,
    name: 'Underwater Camouflage',
    description:
      'The octopus has advantage on Dexterity (Stealth) checks made while underwater.',
  },
  {
    creatureId: creatureIds.octopus,
    name: 'Water Breathing',
    description: 'The octopus can breathe only underwater.',
  },
  {
    creatureId: creatureIds.owl,
    name: 'Flyby',
    description:
      'The owl doesn’t provoke opportunity attacks when it flies out of an enemy’s reach.',
  },
  {
    creatureId: creatureIds.owl,
    name: 'Keen Hearing and Sight',
    description:
      'The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight.',
  },
  {
    creatureId: creatureIds.panther,
    name: 'Keen Smell',
    description:
      'The panther has advantage on Wisdom (Perception) checks that rely on smell.',
  },
  {
    creatureId: creatureIds.panther,
    name: 'Pounce',
    description:
      'If the panther moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action.',
  },
  {
    creatureId: creatureIds.phaseSpider,
    name: 'Spider Climb',
    description:
      'The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.',
  },
  {
    creatureId: creatureIds.phaseSpider,
    name: 'Web Walker',
    description: 'The spider ignores movement restrictions caused by webbing.',
  },
  {
    creatureId: creatureIds.polarBear,
    name: 'Keen Smell',
    description:
      'The bear has advantage on Wisdom (Perception) checks that rely on smell.',
  },
  {
    creatureId: creatureIds.quipper,
    name: 'Blood Frenzy',
    description:
      'The quipper has advantage on melee attack rolls against any creature that doesn’t have all its hit points.',
  },
  {
    creatureId: creatureIds.quipper,
    name: 'Water Breathing',
    description: 'The quipper can breathe only underwater.',
  },
  {
    creatureId: creatureIds.rat,
    name: 'Keen Smell',
    description:
      'The rat has advantage on Wisdom (Perception) checks that rely on smell.',
  },
  {
    creatureId: creatureIds.raven,
    name: 'Mimicry',
    description:
      'The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check.',
  },
  {
    creatureId: creatureIds.reefShark,
    name: 'Pack Tactics',
    description:
      'The shark has advantage on an attack roll against a creature if at least one of the shark’s allies is within 5 feet of the creature and the ally isn’t incapacitated.',
  },
  {
    creatureId: creatureIds.reefShark,
    name: 'Water Breathing',
    description: 'The shark can breathe only underwater.',
  },
  {
    creatureId: creatureIds.rhinoceros,
    name: 'Charge',
    description:
      'If the rhinoceros moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.',
  },
  {
    creatureId: creatureIds.saberToothedTiger,
    name: 'Keen Smell',
    description:
      'The tiger has advantage on Wisdom (Perception) checks that rely on smell.',
  },
  {
    creatureId: creatureIds.saberToothedTiger,
    name: 'Pounce',
    description:
      'If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action.',
  },
  {
    creatureId: creatureIds.seaHorse,
    name: 'Water Breathing',
    description: 'The sea horse can breathe only underwater.',
  },
  {
    creatureId: creatureIds.spider,
    name: 'Web Sense',
    description:
      'While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.',
  },
  {
    creatureId: creatureIds.spider,
    name: 'Web Walker',
    description: 'The spider ignores movement restrictions caused by webbing.',
  },
  {
    creatureId: creatureIds.spider,
    name: 'Spider Climb',
    description:
      'The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.',
  },
  {
    creatureId: creatureIds.tiger,
    name: 'Keen Smell',
    description:
      'The tiger has advantage on Wisdom (Perception) checks that rely on smell.',
  },
  {
    creatureId: creatureIds.tiger,
    name: 'Pounce',
    description:
      'If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action.',
  },
  {
    creatureId: creatureIds.warhorse,
    name: 'Trampling Charge',
    description:
      'If the horse moves at least 20 feet straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action.',
  },
  {
    creatureId: creatureIds.weasel,
    name: 'Keen Hearing and Smell',
    description:
      'The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell.',
  },
  {
    creatureId: creatureIds.winterWolf,
    name: 'Keen Hearing and Smell',
    description:
      'The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.',
  },
  {
    creatureId: creatureIds.winterWolf,
    name: 'Pack Tactics',
    description:
      'The wolf has advantage on an attack roll against a creature if at least one of the wolf’s allies is within 5 feet of the creature and the ally isn’t incapacitated.',
  },
  {
    creatureId: creatureIds.winterWolf,
    name: 'Snow Camouflage',
    description:
      'The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain.',
  },
  {
    creatureId: creatureIds.wolf,
    name: 'Keen Hearing and Smell',
    description:
      'The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.',
  },
  {
    creatureId: creatureIds.wolf,
    name: 'Pack Tactics',
    description:
      'The wolf has advantage on an attack roll against a creature if at least one of the wolf’s allies is within 5 feet of the creature and the ally isn’t incapacitated.',
  },
  {
    creatureId: creatureIds.worg,
    name: 'Keen Hearing and Smell',
    description:
      'The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell.',
  },
  {
    creatureId: creatureIds.archmage,
    name: 'Magic Resistance',
    description:
      'The archmage has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.archmage,
    name: 'Spell Damage Resistance',
    description: 'The archmage has resistance to damage from spells.',
  },
  {
    creatureId: creatureIds.assassin,
    name: 'Assassinate',
    description:
      "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit.",
  },
  {
    creatureId: creatureIds.assassin,
    name: 'Evasion',
    description:
      'When subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.',
  },
  {
    creatureId: creatureIds.assassin,
    name: 'Sneak Attack',
    description:
      "Once per turn, the assassin deals an extra 14 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll.",
    // rolls: [
    //   {
    //     name: 'Sneak Attack Damage',
    //     formula: '4d6',
    //   },
    // ],
  },
  {
    creatureId: creatureIds.assassin,
    name: 'Poison',
    description:
      'When an Assassin lands an attack, targets must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.',
  },
  {
    creatureId: creatureIds.berserker,
    name: 'Reckless',
    description:
      'At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn.',
  },
  {
    creatureId: creatureIds.cultist,
    name: 'Dark Devotion',
    description:
      'The cultist has advantage on saving throws against being charmed or frightened.',
  },
  {
    creatureId: creatureIds.cultFanatic,
    name: 'Dark Devotion',
    description:
      'The fanatic has advantage on saving throws against being charmed or frightened.',
  },
  {
    creatureId: creatureIds.gladiator,
    name: 'Brave',
    description:
      'The gladiator has advantage on saving throws against being frightened.',
  },
  {
    creatureId: creatureIds.gladiator,
    name: 'Brute',
    description:
      'A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack).',
  },
  {
    creatureId: creatureIds.knight,
    name: 'Brave',
    description:
      'The knight has advantage on saving throws against being frightened.',
  },
  {
    creatureId: creatureIds.scout,
    name: 'Keen Hearing and Sight',
    description:
      'The scout has advantage on Wisdom (Perception) checks that rely on hearing or sight.',
  },
  {
    creatureId: creatureIds.spy,
    name: 'Cunning Action',
    description:
      'On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action.',
  },
  {
    creatureId: creatureIds.spy,
    name: 'Sneak Attack (1/Turn)',
    description:
      'Once per turn, the spy can deal an extra 7 (2d6) damage to one creature it hits with an attack if it has advantage on the attack roll. The spy doesn’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and the spy doesn’t have disadvantage on the attack roll.',
    // rolls: [
    //   {
    //     name: 'Damage',
    //     formula: '2d6',
    //   },
    // ],
  },
  {
    creatureId: creatureIds.thug,
    name: 'Pack Tactics',
    description:
      'The thug has advantage on an attack roll against a creature if at least one of the thug’s allies is within 5 feet of the creature and the ally isn’t incapacitated.',
  },
  {
    creatureId: creatureIds.tribalWarrior,
    name: 'Pack Tactics',
    description:
      'The warrior has advantage on an attack roll against a creature if at least one of the warrior’s allies is within 5 feet of the creature and the ally isn’t incapacitated.',
  },
  {
    creatureId: creatureIds.aboleth,
    name: 'Amphibious',
    description: 'The aboleth can breathe air and water.',
  },
  {
    creatureId: creatureIds.aboleth,
    name: 'Mucous Cloud',
    description:
      'While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.',
  },
  {
    creatureId: creatureIds.aboleth,
    name: 'Probing Telepathy',
    description:
      'If a creature communicates telepathically with the aboleth, the aboleth learns the creature’s greatest desires if the aboleth can see the creature.',
  },
  {
    creatureId: creatureIds.deva,
    name: 'Angelic Weapons',
    description:
      'The deva’s weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage.',
    // rolls: [
    //   {
    //     name: 'Angelic Weapon Damage',
    //     formula: '4d8',
    //   },
    // ],
  },
  {
    creatureId: creatureIds.deva,
    name: 'Magic Resistance',
    description:
      'The deva has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.planetar,
    name: 'Angelic Weapons',
    description:
      'The planetar’s weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage.',
    // rolls: [
    //   {
    //     name: 'Angelic Weapon Damage',
    //     formula: '5d8',
    //   },
    // ],
  },
  {
    creatureId: creatureIds.planetar,
    name: 'Divine Awareness',
    description: 'The planetar knows if it hears a lie.',
  },
  {
    creatureId: creatureIds.planetar,
    name: 'Magic Resistance',
    description:
      'The planetar has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.solar,
    name: 'Angelic Weapons',
    description:
      'The solar’s weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack).',
    // rolls: [
    //   {
    //     name: 'Angelic Weapon Damage',
    //     formula: '6d8',
    //   },
    // ],
  },
  {
    creatureId: creatureIds.solar,
    name: 'Divine Awareness',
    description: 'The solar knows if it hears a lie.',
  },
  {
    creatureId: creatureIds.solar,
    name: 'Magic Resistance',
    description:
      'The solar has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.solar,
    name: 'Slaying Longbow',
    description:
      'Whenever the solar lands a hit with its longbow, if the target has less than 100 hit points, it must succeed on a DC 15 Constitution saving throw or die.',
  },
  {
    creatureId: creatureIds.animatedArmor,
    name: 'Antimagic Susceptibility',
    description:
      'The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster’s spell save DC or fall unconscious for 1 minute.',
  },
  {
    creatureId: creatureIds.animatedArmor,
    name: 'False Appearance',
    description:
      'While the armor remains motionless, it is indistinguishable from a normal suit of armor.',
  },
  {
    creatureId: creatureIds.flyingSword,
    name: 'Antimagic Susceptibility',
    description:
      'The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster’s spell save DC or fall unconscious for 1 minute.',
  },
  {
    creatureId: creatureIds.flyingSword,
    name: 'False Appearance',
    description:
      'While the sword remains motionless and isn’t flying, it is indistinguishable from a normal sword.',
  },
  {
    creatureId: creatureIds.rugOfSmothering,
    name: 'False Appearance',
    description:
      'While the rug remains motionless, it is indistinguishable from a normal rug.',
  },
  {
    creatureId: creatureIds.rugOfSmothering,
    name: 'Anti-Magic Susceptibility',
    description:
      'The rug is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster’s spell save DC or fall unconscious for 1 minute.',
  },
  {
    creatureId: creatureIds.rugOfSmothering,
    name: 'Damage Transfer',
    description:
      'While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half.',
  },
  {
    creatureId: creatureIds.ankheg,
    name: 'Prone AC',
    description: 'While prone, the ankheg’s AC is 11.',
  },
  {
    creatureId: creatureIds.azer,
    name: 'Heated Body',
    description:
      'A creature that touches the azer or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage.',
    // rolls: [
    //   {
    //     name: 'Damage',
    //     formula: '1d10',
    //   },
    // ],
  },
  {
    creatureId: creatureIds.azer,
    name: 'Heated Weapons',
    description:
      'When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack).',
    // rolls: [
    //   {
    //     name: 'Fire Damage',
    //     formula: '1d6',
    //   },
    // ],
  },
  {
    creatureId: creatureIds.azer,
    name: 'Illumination',
    description:
      'The azer sheds bright light in a 10-foot radius and dim light for an additional 10 feet.',
  },
  {
    creatureId: creatureIds.basilisk,
    name: 'Petrifying Gaze',
    description:
      'If a creature starts its turn within 30 feet of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn’t incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.\n\nA creature that isn’t surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can’t see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save.\n\nIf the basilisk sees its reflection within 30 feet of it in bright light, it mistakes itself for a rival and targets itself with its gaze.',
  },
  {
    creatureId: creatureIds.bugbear,
    name: 'Brute',
    description:
      'A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).',
  },
  {
    creatureId: creatureIds.bugbear,
    name: 'Surprise Attack',
    description:
      'If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack.',
    // rolls: [
    //   {
    //     name: 'Damage',
    //     formula: '2d6',
    //   },
    // ],
  },
  {
    creatureId: creatureIds.bulette,
    name: 'Standing Leap',
    description:
      'The bulette can long jump up to 30 feet and high jump up to 15 feet, with or without a running start.',
  },
  {
    creatureId: creatureIds.chuul,
    name: 'Amphibious',
    description: 'The chuul can breathe air and water.',
  },
  {
    creatureId: creatureIds.chuul,
    name: 'Sense Magic',
    description:
      'The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn’t itself magical.',
  },
  {
    creatureId: creatureIds.cloaker,
    name: 'Damage Transfer',
    description:
      'While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down), and that creature takes the other half.',
  },
  {
    creatureId: creatureIds.cloaker,
    name: 'False Appearance',
    description:
      'While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak.',
  },
  {
    creatureId: creatureIds.cloaker,
    name: 'Light Sensitivity',
    description:
      'While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight.',
  },
  {
    creatureId: creatureIds.couatl,
    name: 'Magic Weapons',
    description: 'The couatl’s weapon attacks are magical.',
  },
  {
    creatureId: creatureIds.couatl,
    name: 'Shielded Mind',
    description:
      'The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location.',
  },
  {
    creatureId: creatureIds.darkmantle,
    name: 'Echolocation',
    description: 'The darkmantle can’t use its blindsight while deafened.',
  },
  {
    creatureId: creatureIds.darkmantle,
    name: 'False Appearance',
    description:
      'While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite.',
  },
  {
    creatureId: creatureIds.balor,
    name: 'Death Throes',
    description:
      'When the balor dies, it explodes, and each creature within 30 feet of it must make a DC 20 Dexterity saving throw, taking 70 (20d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren’t being worn or carried, and it destroys the balor’s weapons.',
    // rolls: [
    //   {
    //     name: 'Damage',
    //     formula: '20d6',
    //   },
    // ],
  },
  {
    creatureId: creatureIds.balor,
    name: 'Fire Aura',
    description:
      'At the start of each of the balor’s turns, each creature within 5 feet of it takes 10 (3d6) fire damage, and flammable objects in the aura that aren’t being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage.',
    // rolls: [
    //   {
    //     name: 'Damage',
    //     formula: '3d6',
    //   },
    // ],
  },
  {
    creatureId: creatureIds.balor,
    name: 'Magic Resistance',
    description:
      'The balor has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.balor,
    name: 'Magic Weapons',
    description: 'The balor’s weapon attacks are magical.',
  },
  {
    creatureId: creatureIds.balor,
    name: 'Improved Longsword Attack',
    description:
      'The balor’s longsword deals an extra 13 (3d8) lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice.',
    // rolls: [
    //   {
    //     name: 'Lightning Damage',
    //     formula: '3d8',
    //   },
    // ],
  },
  {
    creatureId: creatureIds.glabrezu,
    name: 'Magic Resistance',
    description:
      'The glabrezu has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.hezrou,
    name: 'Magic Resistance',
    description:
      'The hezrou has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.hezrou,
    name: 'Stench',
    description:
      'Any creature that starts its turn within 10 feet of the hezrou must succeed on a DC 14 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou’s stench for 24 hours.',
  },
  {
    creatureId: creatureIds.marilith,
    name: 'Magic Resistance',
    description:
      'The marilith has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.marilith,
    name: 'Magic Weapons',
    description: 'The marilith’s weapon attacks are magical.',
  },
  {
    creatureId: creatureIds.marilith,
    name: 'Reactive',
    description: 'The marilith can take one reaction on every turn in combat.',
  },
  {
    creatureId: creatureIds.nalfeshnee,
    name: 'Magic Resistance',
    description:
      'The nalfeshnee has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.quasit,
    name: 'Shapechanger',
    description:
      'The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft., fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn’t transformed. It reverts to its true form if it dies.',
  },
  {
    creatureId: creatureIds.quasit,
    name: 'Magic Resistance',
    description:
      'The quasit has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.vrock,
    name: 'Magic Resistance',
    description:
      'The vrock has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.barbedDevil,
    name: 'Devil’s Sight',
    description:
      'Magical darkness doesn’t impede the barbed devil’s darkvision.',
  },
  {
    creatureId: creatureIds.barbedDevil,
    name: 'Magic Resistance',
    description:
      'The barbed devil has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.barbedDevil,
    name: 'Barbed Hide',
    description:
      'At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature grappling it.',
    // rolls: [
    //   {
    //     name: 'Damage',
    //     formula: '1d10',
    //   },
    // ],
  },
  {
    creatureId: creatureIds.beardedDevil,
    name: 'Devil’s Sight',
    description:
      'Magical darkness doesn’t impede the bearded devil’s darkvision.',
  },
  {
    creatureId: creatureIds.beardedDevil,
    name: 'Magic Resistance',
    description:
      'The bearded devil has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.beardedDevil,
    name: 'Steadfast',
    description:
      'The bearded devil can’t be frightened while it can see an allied creature within 30 feet of it.',
  },
  {
    creatureId: creatureIds.beardedDevil,
    name: 'Glaive Weapon Attack',
    description:
      'Whenever the bearded devil hits a creature with its glaive, if the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.',
    // rolls: [
    //   {
    //     name: 'Attack',
    //     formula: '1d20 + 5',
    //   },
    //   {
    //     name: 'Damage',
    //     formula: '1d10 + 3',
    //   },
    // ],
  },
  {
    creatureId: creatureIds.boneDevil,
    name: 'Devil’s Sight',
    description: 'Magical darkness doesn’t impede the bone devil’s darkvision.',
  },
  {
    creatureId: creatureIds.boneDevil,
    name: 'Magic Resistance',
    description:
      'The bone devil has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.chainDevil,
    name: 'Devil’s Sight',
    description:
      'Magical darkness doesn’t impede the chain devil’s darkvision.',
  },
  {
    creatureId: creatureIds.chainDevil,
    name: 'Magic Resistance',
    description:
      'The chain devil has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.erinyes,
    name: 'Hellish Weapons',
    description:
      'The erinyes’s weapon attacks are magical and deal an extra 13 (3d8) poison damage on a hit.',
    // rolls: [
    //   {
    //     name: 'Damage',
    //     formula: '3d8',
    //   },
    // ],
  },
  {
    creatureId: creatureIds.erinyes,
    name: 'Magic Resistance',
    description:
      'The erinyes has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.erinyes,
    name: 'Longbow Poison',
    description:
      'When the erinyes lands an attack with its longbow, the target must succeed on a DC 14 Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic.',
  },
  {
    creatureId: creatureIds.erinyes,
    name: 'Parry',
    description:
      'The erinyes adds 4 to its AC against one melee attack that would hit it. To do so, the erinyes must see the attacker and be wielding a melee weapon.',
  },
  {
    creatureId: creatureIds.hornedDevil,
    name: 'Devil’s Sight',
    description:
      'Magical darkness doesn’t impede the horned devil’s darkvision.',
  },
  {
    creatureId: creatureIds.hornedDevil,
    name: 'Magic Resistance',
    description:
      'The horned devil has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.iceDevil,
    name: 'Devil’s Sight',
    description: 'Magical darkness doesn’t impede the ice devil’s darkvision.',
  },
  {
    creatureId: creatureIds.iceDevil,
    name: 'Magic Resistance',
    description:
      'The ice devil has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.imp,
    name: 'Shapechanger',
    description:
      'The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistic sare the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn’t transformed. It reverts to its true form if it dies.',
  },
  {
    creatureId: creatureIds.imp,
    name: "Devil's Sight",
    description: 'Magical darkness doesn’t impede the imp’s darkvision.',
  },
  {
    creatureId: creatureIds.imp,
    name: 'Magic Resistance',
    description:
      'The imp has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.lemure,
    name: "Devil's Sight",
    description: 'Magical darkness doesn’t impede the lemure’s darkvision.',
  },
  {
    creatureId: creatureIds.lemure,
    name: 'Hellish Rejuvenation',
    description:
      'A lemure that dies in the Nine Hells comes back to life with all its hit points in 1d10 days unless it is killed by a good-aligned creature with a bless spell cast on it or its body is sprinkled with holy water.',
  },
  {
    creatureId: creatureIds.pitFiend,
    name: 'Fear Aura',
    description:
      'Any creature hostile to the pit fiend thatstarts its turn within 20 feet of the pit fiend must make a DC 21 Wisdom saving throw, unless the pit fiend is incapacitated. On a failed save, the creature is frightened until the start of its next turn. If a creature’s saving throw is successful, the creature is immune to the pit fiend’s Fear Aura for the next 24 hours',
  },
  {
    creatureId: creatureIds.pitFiend,
    name: 'Magic Resistance',
    description:
      'The pit fiend has advantage on saving throws against spells and other magical effects.',
  },
  {
    creatureId: creatureIds.pitFiend,
    name: 'Magic Weapons',
    description: "The pit fiend's weapon attacks are magical.",
  },
  {
    creatureId: creatureIds.plesiosaurus,
    name: 'Hold Breath',
    description: 'The plesiosaurus can hold its breath for 1 hour.',
  },
  {
    creatureId: creatureIds.triceratops,
    name: 'Trampling Charge',
    description:
      'If the triceratops moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone.\n\nIf the target is prone, the triceratops can make one attack with its horns against it as a bonus action.',
  },
  {
    creatureId: creatureIds.doppelganger,
    name: 'Shapechanger',
    description:
      'The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn’t transformed. It reverts to its true form if it dies.',
  },
  {
    creatureId: creatureIds.doppelganger,
    name: 'Ambusher',
    description:
      'In the first round of a combat, the doppelganger has advantage on attack rolls against any creature it has surprised.',
  },
  {
    creatureId: creatureIds.doppelganger,
    name: 'Surprise Attack',
    description:
      'If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage from the attack',
    // rolls: [
    //   {
    //     name: 'Damage',
    //     formula: '3d6',
    //   },
    // ],
  },
  {
    creatureId: creatureIds.ancientBlackDragon,
    name: 'Amphibious',
    description: 'The dragon can breathe air and water.',
  },
  {
    creatureId: creatureIds.ancientBlackDragon,
    name: 'Legendary Resistance (3/Day)',
    description:
      'If the dragon fails a saving throw, it can choose to succeed instead.',
  },
  {
    creatureId: creatureIds.adultBlackDragon,
    name: 'Amphibious',
    description: 'The dragon can breathe air and water.',
  },
  {
    creatureId: creatureIds.adultBlackDragon,
    name: 'Legendary Resistance (3/Day)',
    description:
      'If the dragon fails a saving throw, it can choose to succeed instead.',
  },
  {
    creatureId: creatureIds.youngBlackDragon,
    name: 'Amphibious',
    description: 'The dragon can breathe air and water.',
  },
  {
    creatureId: creatureIds.wyrmlingBlackDragon,
    name: 'Amphibious',
    description: 'The dragon can breathe air and water.',
  },
  {
    creatureId: creatureIds.ancientBlueDragon,
    name: 'Legendary Resistance (3/Day)',
    description:
      'If the dragon fails a saving throw, it can choose to succeed instead.',
  },
  {
    creatureId: creatureIds.adultBlueDragon,
    name: 'Legendary Resistance (3/Day)',
    description:
      'If the dragon fails a saving throw, it can choose to succeed instead.',
  },
  {
    creatureId: creatureIds.ancientGreenDragon,
    name: 'Legendary Resistance (3/Day)',
    description:
      'If the dragon fails a saving throw, it can choose to succeed instead.',
  },
  {
    creatureId: creatureIds.ancientGreenDragon,
    name: 'Amphibious',
    description: 'The dragon can breathe air and water.',
  },
  {
    creatureId: creatureIds.adultGreenDragon,
    name: 'Amphibious',
    description: 'The dragon can breathe air and water.',
  },
  {
    creatureId: creatureIds.adultGreenDragon,
    name: 'Legendary Resistance (3/Day)',
    description:
      'If the dragon fails a saving throw, it can choose to succeed instead.',
  },
  {
    creatureId: creatureIds.youngGreenDragon,
    name: 'Amphibious',
    description: 'The dragon can breathe air and water.',
  },
  {
    creatureId: creatureIds.ancientRedDragon,
    name: 'Legendary Resistance (3/Day)',
    description:
      'If the dragon fails a saving throw, it can choose to succeed instead.',
  },
  {
    creatureId: creatureIds.adultRedDragon,
    name: 'Legendary Resistance (3/Day)',
    description:
      'If the dragon fails a saving throw, it can choose to succeed instead.',
  },
  {
    creatureId: creatureIds.ancientWhiteDragon,
    name: 'Ice Walk',
    description:
      'The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn’t cost it extra moment.',
  },
  {
    creatureId: creatureIds.ancientWhiteDragon,
    name: 'Legendary Resistance (3/Day)',
    description:
      'If the dragon fails a saving throw, it can choose to succeed instead.',
  },
  {
    creatureId: creatureIds.adultWhiteDragon,
    name: 'Ice Walk',
    description:
      'The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn’t cost it extra moment.',
  },
  {
    creatureId: creatureIds.adultWhiteDragon,
    name: 'Legendary Resistance (3/Day)',
    description:
      'If the dragon fails a saving throw, it can choose to succeed instead.',
  },
  {
    creatureId: creatureIds.youngWhiteDragon,
    name: 'Ice Walk',
    description:
      'The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn’t cost it extra moment.',
  },
  {
    creatureId: creatureIds.ancientBrassDragon,
    name: 'Legendary Resistance (3/Day)',
    description:
      'If the dragon fails a saving throw, it can choose to succeed instead.',
  },
  {
    creatureId: creatureIds.adultBrassDragon,
    name: 'Legendary Resistance (3/Day)',
    description:
      'If the dragon fails a saving throw, it can choose to succeed instead.',
  },
].map((feature, index, arr) => {
  const featureParent = CreatureSeed.find(
    (creature) => creature.id === feature.creatureId
  );
  if (!featureParent?.name) throw new Error('Feature must have a name');
  const id = generateId('creature', feature.name, featureParent.name, count);
  count++;
  const nextCreatureFeature = arr[index + 1];
  if (!nextCreatureFeature) return { ...feature, id };
  if (nextCreatureFeature.creatureId !== feature.creatureId) {
    count = 1;
  }
  return { ...feature, id };
});

export default CreatureFeaturesSeed;
