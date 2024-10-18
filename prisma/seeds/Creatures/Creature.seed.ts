import P from "@/app/components/Utility/FormatAndSanitize";
import {
  Ability,
  Alignment,
  ArmorClassProtocol,
  Condition,
  CreatureType,
  DamageTypes,
  Language,
  Prisma,
  Size,
  Skill,
} from "@prisma/client";
import { itemIds } from "../Items/ItemIds";

const CreatureSeed: Prisma.CreatureCreateManyInput[] = [
  {
    id: 1,
    name: "Ape",
    description: "An ape is a large, intelligent, and strong primate.",
    flavorText: "An ape is a large, intelligent, and strong primate.",
    creatureType: CreatureType.BEAST,
    size: Size.MEDIUM,

    hitDiceAmount: 3,
    speed: 30,
    climbingSpeed: 30,
    STR: 16,
    DEX: 14,
    CON: 14,
    INT: 6,
    WIS: 12,
    CHA: 7,
    skillProficiencies: [Skill.ATHLETICS, Skill.PERCEPTION],
    challengeRating: 0.5,
    actions: [
      {
        name: "Multiattack",
        description: "The ape makes two fist attacks.",
        actionType: "action",
      },
      {
        actionType: "action",
        name: "Fist",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "1d6 + 4",
          },
        ],
      },
      {
        actionType: "action",
        name: "Rock",
        description:
          "Ranged Weapon Attack: +5 to hit, range 25/50 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "1d6 + 4",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Awakened Shrub",
    description:
      "An awakened shrub is an ordinary shrub given sentience and mobility by the awaken spell or similar magic.",
    flavorText:
      "An awakened shrub is an ordinary shrub given sentience and mobility by the awaken spell or similar magic.",
    size: Size.SMALL,
    creatureType: CreatureType.PLANT,
    challengeRating: 0,
    languageDescription:
      "Understands One language from its creator but can't speak.",

    hitDiceAmount: 3,
    speed: 20,
    STR: 3,
    DEX: 8,
    CON: 11,
    INT: 10,
    WIS: 10,
    CHA: 6,
    damageVulnerabilities: [DamageTypes.FIRE],
    damageResistances: [DamageTypes.PIERCING],
    features: [
      {
        name: "False Appearance",
        description:
          "While the shrub remains motionless, it is indistinguishable from a normal shrub.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Rake",
        description:
          "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) slashing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 1",
          },
          {
            name: "Damage",
            formula: "1d4 - 1",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Awakened Tree",
    description:
      "An awakened tree is an ordinary tree given sentience and mobility by the awaken spell or similar magic.",
    flavorText:
      "An awakened tree is an ordinary tree given sentience and mobility by the awaken spell or similar magic.",
    size: Size.HUGE,
    creatureType: CreatureType.PLANT,
    challengeRating: 2,
    languageDescription:
      "Understands One language from its creator but can't speak.",
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    naturalArmorBonus: 5,

    hitDiceAmount: 7,
    speed: 20,
    STR: 19,
    DEX: 6,
    CON: 15,
    INT: 10,
    WIS: 10,
    CHA: 7,
    damageVulnerabilities: [DamageTypes.FIRE],
    damageResistances: [DamageTypes.PIERCING, DamageTypes.BLUDGEONING],
    features: [
      {
        name: "False Appearance",
        description:
          "While the tree remains motionless, it is indistinguishable from a normal tree.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Slam",
        description:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "2d8 + 5",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Axe Beak",
    creatureType: CreatureType.BEAST,
    size: Size.LARGE,

    hitDiceAmount: 3,
    speed: 50,
    STR: 14,
    DEX: 12,
    CON: 12,
    INT: 2,
    WIS: 10,
    CHA: 5,
    challengeRating: 0.25,
    actions: [
      {
        actionType: "action",
        name: "Beak",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) salshing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d8 + 2",
          },
        ],
      },
    ],
    description:
      "An axe beak is a tall flightless bird with strong legs and a heavy, wedge-­‐‑shaped beak. It has a nasty disposition and tends to attack any unfamiliar creature that wanders too close.",
    flavorText:
      "An axe beak is a tall flightless bird with strong legs and a heavy, wedge-­‐‑shaped beak.",
  },
  {
    id: 5,
    name: "Baboon",
    creatureType: CreatureType.BEAST,
    size: Size.SMALL,

    hitDiceAmount: 1,
    speed: 30,
    climbingSpeed: 30,
    STR: 8,
    DEX: 14,

    CON: 11,
    INT: 4,
    WIS: 12,
    CHA: 6,
    challengeRating: 0,
    features: [
      {
        name: "Pack Tactics",
        description:
          "The baboon has advantage on an attack roll against a creature if at least one of the baboon’s allies is within 5 feet of the creature and the ally isn’t incapacitated. ",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Bite",
        description:
          "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 1",
          },
          {
            name: "Damage",
            formula: "1d4 - 1",
          },
        ],
      },
    ],
    description: "A Baboon is a small, intelligent, and strong primate.",
    flavorText: "A Baboon is a small, intelligent, and strong primate.",
  },
  {
    id: 6,
    name: "Badger",
    description:
      "A badger is a furry animal with a strong, stocky body and powerful jaws.",
    flavorText:
      "A badger is a furry animal with a strong, stocky body and powerful jaws.",
    size: Size.TINY,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,

    speed: 20,
    hitDiceAmount: 1,
    burrowingSpeed: 5,
    STR: 4,
    DEX: 11,
    CON: 12,
    INT: 2,
    WIS: 12,
    CHA: 5,
    darkvision: 30,
    features: [
      {
        name: "Keen Smell",
        description:
          "The badger has advantage on Wisdom (Perception) checks that rely on smell.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Bite",
        description:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 2",
          },
          {
            name: "Damage",
            formula: "1",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Bat",
    description:
      "Bats are nocturnal flying mammals that roost in dark caves and ruins.",
    flavorText: "Bats are nocturnal flying mammals that roost in dark caves.",
    size: Size.TINY,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,

    hitDiceAmount: 1,
    speed: 5,
    flyingSpeed: 30,
    STR: 2,
    DEX: 15,
    CON: 8,
    INT: 2,
    WIS: 12,
    CHA: 4,
    blindsight: 60,
    features: [
      {
        name: "Echolocation",
        description: "The bat can't use its blindsight while deafened.",
      },
      {
        name: "Keen Hearing",
        description:
          "The bat has advantage on Wisdom (Perception) checks that rely on hearing.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Bite",
        description:
          "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20",
          },
          {
            name: "Damage",
            formula: "1",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Black Bear",
    description:
      "Black bears are omnivorous, and their diet can include honey, berries, and fish.",
    flavorText:
      "Black bears are omnivorous, and their diet can include honey, berries, and fish.",
    size: Size.MEDIUM,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.5,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    naturalArmorBonus: 1,

    hitDiceAmount: 3,
    speed: 40,
    skillProficiencies: [Skill.PERCEPTION],
    climbingSpeed: 30,
    STR: 15,
    DEX: 10,
    CON: 14,
    INT: 2,
    WIS: 12,
    CHA: 7,
    features: [
      {
        name: "Keen Smell",
        description:
          "The bear has advantage on Wisdom (Perception) checks that rely on smell.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Multiattack",
        description:
          "The bear makes two attacks: one with its bite and one with its  claws.",
      },
      {
        actionType: "action",
        name: "Bite",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 3",
          },
          {
            name: "Damage",
            formula: "1d6 + 2",
          },
        ],
      },
      {
        actionType: "action",
        name: "Claws",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 3",
          },
          {
            name: "Damage",
            formula: "2d4 + 2",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: "Blink Dog",
    description:
      "A blink dog takes its name from its ability to blink in and out of existence, a talent it uses to aid its attacks and to avoid harm.",
    flavorText:
      "A blink dog takes its name from its ability to blink in and out of existence.",
    size: Size.MEDIUM,
    creatureType: CreatureType.FEY,
    alignmentOptions: [Alignment.LAWFUL_GOOD],
    challengeRating: 0.25,

    hitDiceAmount: 4,
    speed: 40,
    STR: 12,
    DEX: 17,
    CON: 12,
    INT: 10,
    WIS: 13,
    CHA: 11,
    skillProficiencies: [Skill.PERCEPTION, Skill.STEALTH],
    languageDescription: "Understands Sylvan but can't speak it.",
    features: [
      {
        name: "Keen Hearing and Smell",
        description:
          "The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Bite",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 3",
          },
          {
            name: "Damage",
            formula: "1d6 + 1",
          },
        ],
      },
      {
        actionType: "action",
        name: "Teleport (Recharge 4-6)",
        description:
          "The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 feet to an unoccupied space it can see.",
        rolls: [
          {
            name: "Recharge",
            formula: "1d6",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    name: "Blood Hawk",
    description:
      "Taking its name from its crimson feathers and aggressive nature, the blood hawk fearlessly attacks almost any animal, stabbing it with its daggerlike beak. Blood hawks flock together in large numbers, attacking as a pack to take down prey.",
    flavorText:
      "Taking its name from its crimson feathers and aggressive nature.",
    size: Size.SMALL,
    creatureType: CreatureType.BEAST,

    hitDiceAmount: 2,
    speed: 10,
    flyingSpeed: 60,
    STR: 6,
    DEX: 14,
    CON: 10,
    INT: 3,
    WIS: 14,
    CHA: 5,
    skillProficiencies: [Skill.PERCEPTION],
    challengeRating: 0.125,
    features: [
      {
        name: "Keen Sight",
        description:
          "The hawk has advantage on Wisdom (Perception) checks that rely on sight.",
      },
      {
        name: "Pack Tactics",
        description:
          "The hawk has advantage on an attack roll against a creature if at least one of the hawk’s allies is within 5 feet of the creature and the ally isn’t incapacitated.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Beak",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d4 + 2",
          },
        ],
      },
    ],
  },
  {
    id: 11,
    name: "Boar",
    description: "A boar is a wild pig.",
    flavorText: "A boar is a wild pig.",
    size: Size.MEDIUM,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.25,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    naturalArmorBonus: 1,

    hitDiceAmount: 2,
    speed: 40,
    STR: 13,
    DEX: 11,
    CON: 12,
    INT: 2,
    WIS: 9,
    CHA: 5,
    features: [
      {
        name: "Charge",
        description:
          "If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
      },
      {
        name: "Relentless (Recharges after a Short or Long Rest)",
        description:
          "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Tusk",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 3",
          },
          {
            name: "Damage",
            formula: "1d6 + 1",
          },
          {
            name: "Charge Damage",
            formula: "1d6",
          },
        ],
      },
    ],
  },
  {
    id: 12,
    name: "Brown Bear",
    description:
      "Brown bears are powerful predators found in many forests and caves.",
    flavorText: "Brown bears are powerful predators found in many forests.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 1,
    naturalArmorBonus: 1,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    hitDiceAmount: 4,
    speed: 40,
    climbingSpeed: 30,
    STR: 19,
    DEX: 10,
    CON: 16,
    INT: 2,
    WIS: 13,
    CHA: 7,
    skillProficiencies: [Skill.PERCEPTION],
    features: [
      {
        name: "Keen Smell",
        description:
          "The bear has advantage on Wisdom (Perception) checks that rely on smell.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Multiattack",
        description:
          "The bear makes two attacks: one with its bite and one with its claws.",
      },
      {
        actionType: "action",
        name: "Bite",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "1d8 + 4",
          },
        ],
      },
      {
        actionType: "action",
        name: "Claws",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "2d6 + 4",
          },
        ],
      },
    ],
  },
  {
    id: 13,
    name: "Camel",
    description:
      "Camels are pack animals known for their ability to travel long distances without water.",
    flavorText:
      "Camels are pack animals known for their ability to travel long distances without water.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.125,

    hitDiceAmount: 2,
    speed: 50,
    STR: 16,
    DEX: 8,
    CON: 14,
    INT: 2,
    WIS: 8,
    CHA: 5,
    actions: [
      {
        actionType: "action",
        name: "Bite",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "1d4",
          },
        ],
      },
    ],
  },
  {
    id: 14,
    name: "Cat",
    description:
      "Cats are small, carnivorous mammals that are often kept as pets.",
    flavorText:
      "Cats are small, carnivorous mammals that are often kept as pets.",
    size: Size.TINY,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,

    hitDiceAmount: 1,
    speed: 40,
    climbingSpeed: 30,
    STR: 3,
    DEX: 15,
    CON: 10,
    INT: 3,
    WIS: 12,
    CHA: 7,
    skillExpertise: [Skill.PERCEPTION, Skill.STEALTH],
    features: [
      {
        name: "Keen Smell",
        description:
          "The cat has advantage on Wisdom (Perception) checks that rely on smell.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Claw",
        description:
          "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20",
          },
          {
            name: "Damage",
            formula: "1",
          },
        ],
      },
    ],
  },
  {
    id: 15,
    name: "Constrictor Snake",
    description: "Constrictor snakes are large, muscular snakes.",
    flavorText: "Constrictor snakes are large, muscular snakes.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.25,

    hitDiceAmount: 2,
    speed: 30,
    swimmingSpeed: 30,
    STR: 15,
    DEX: 14,
    CON: 12,
    INT: 1,
    WIS: 10,
    CHA: 3,
    blindsight: 10,

    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 2) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d6 + 2",
          },
        ],
      },
      {
        actionType: "action",
        name: "Constrict",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d8 + 2",
          },
        ],
      },
    ],
  },
  {
    id: 16,
    name: "Crab",
    description:
      "Crabs are small, hard-­‐‑shelled creatures found along the coast.",
    flavorText:
      "Crabs are small, hard-­‐‑shelled creatures found along the coast.",
    size: Size.TINY,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,
    naturalArmorBonus: 1,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    hitDiceAmount: 1,
    speed: 20,
    swimmingSpeed: 20,
    STR: 2,
    DEX: 11,
    CON: 10,
    INT: 1,
    WIS: 8,
    CHA: 2,
    skillProficiencies: [Skill.STEALTH],
    blindsight: 30,
    features: [
      {
        name: "Amphibious",
        description: "The crab can breathe air and water.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Claw",
        description:
          "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20",
          },
          {
            name: "Damage",
            formula: "1",
          },
        ],
      },
    ],
  },
  {
    id: 17,
    name: "Crocodile",
    description: "Crocodiles are large, aquatic reptiles.",
    flavorText: "Crocodiles are large, aquatic reptiles.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.5,
    naturalArmorBonus: 2,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    hitDiceAmount: 3,
    speed: 20,
    swimmingSpeed: 30,
    STR: 15,
    DEX: 10,
    CON: 13,
    INT: 2,
    WIS: 10,
    CHA: 5,
    skillProficiencies: [Skill.STEALTH],
    features: [
      {
        name: "Hold Breath",
        description: "The crocodile can hold its breath for 15 minutes.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage, and the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the crocodile can't bite another target.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d10 + 2",
          },
        ],
      },
    ],
  },
  {
    id: 18,
    name: "Death Dog",
    description:
      "A death dog is an ugly two-­‐‑headed hound that roams plains, and deserts. Hate burns in a death dog’s heart, and a taste for humanoid flesh drives it to attack travelers and explorers. Death dog saliva carries a foul disease that causes a victim’s flesh to slowly rot off the bone.",
    flavorText: "A death dog is an ugly two-­‐‑headed hound that roams plains.",
    size: Size.MEDIUM,
    creatureType: CreatureType.MONSTROSITY,
    challengeRating: 1,
    alignmentOptions: [Alignment.NEUTRAL_EVIL],
    hitDiceAmount: 6,
    speed: 40,
    STR: 15,
    DEX: 14,
    CON: 14,
    INT: 3,

    WIS: 13,
    CHA: 6,

    darkvision: 120,
    skillProficiencies: [Skill.STEALTH],
    skillExpertise: [Skill.PERCEPTION],
    features: [
      {
        name: "Two-Headed",
        description:
          "The dog has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Multiattack",
        description: "The dog makes two bite attacks.",
      },
      {
        actionType: "action",
        name: "Bite",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d8 + 3",
          },
        ],
      },
    ],
  },
  {
    id: 19,
    name: "Deer",
    description: "Deer are graceful, swift creatures that inhabit forests.",
    flavorText: "Deer are graceful, swift creatures that inhabit forests.",
    size: Size.MEDIUM,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,

    hitDiceAmount: 1,
    speed: 50,
    STR: 11,
    DEX: 16,
    CON: 11,
    INT: 2,
    WIS: 14,
    CHA: 5,
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 2",
          },
          {
            name: "Damage",
            formula: "1d4",
          },
        ],
      },
    ],
  },
  {
    id: 20,
    name: "Dire Wolf",
    description:
      "Dire wolves are large wolves that hunt in packs and are known to attack anything that enters their territory.",
    flavorText:
      "Dire wolves are large wolves that hunt in packs and are known to attack anything that enters their territory.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 1,

    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    naturalArmorBonus: 2,
    hitDiceAmount: 5,
    speed: 50,
    STR: 17,
    DEX: 15,
    CON: 15,
    INT: 3,
    WIS: 12,
    CHA: 7,
    skillProficiencies: [Skill.PERCEPTION, Skill.STEALTH],
    features: [
      {
        name: "Keen Hearing and Smell",
        description:
          "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
      },
      {
        name: "Pack Tactics",
        description:
          "The wolf has advantage on an attack roll against a creature if at least one of the wolf’s allies is within 5 feet of the creature and the ally isn’t incapacitated.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Bite",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "2d6 + 3",
          },
        ],
      },
    ],
  },
  {
    id: 21,
    name: "Draft Horse",
    description: "Draft horses are large, strong horses bred for heavy labor",

    flavorText: "Draft horses are large, strong horses bred for heavy labor.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.25,

    hitDiceAmount: 3,
    speed: 40,
    STR: 18,
    DEX: 10,
    CON: 12,
    INT: 2,
    WIS: 11,
    CHA: 7,

    actions: [
      {
        actionType: "action",
        name: "Hooves",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "2d4 + 4",
          },
        ],
      },
    ],
  },
  {
    id: 22,
    name: "Eagle",
    description:
      "Eagles are large birds of prey known for their keen eyesight.",
    flavorText: "Eagles are large birds of prey known for their keen eyesight.",
    size: Size.SMALL,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,

    hitDiceAmount: 1,
    speed: 10,
    flyingSpeed: 60,
    STR: 6,
    DEX: 15,
    CON: 10,
    INT: 2,
    WIS: 14,
    CHA: 7,
    skillProficiencies: [Skill.PERCEPTION],
    features: [
      {
        name: "Keen Sight",
        description:
          "The eagle has advantage on Wisdom (Perception) checks that rely on sight.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Beak",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d4 + 2",
          },
        ],
      },
    ],
  },
  {
    id: 23,
    name: "Elephant",
    description:
      "Elephants are large, intelligent mammals known for their strength and memory.",
    flavorText:
      "Elephants are large, intelligent mammals known for their strength.",
    size: Size.HUGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 4,
    naturalArmorBonus: 3,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    hitDiceAmount: 8,
    speed: 40,
    STR: 22,
    DEX: 9,
    CON: 17,
    INT: 3,
    WIS: 11,
    CHA: 6,
    features: [
      {
        name: "Trampling Charge",
        description:
          "If the elephant moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Gore",
        description:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 8",
          },
          {
            name: "Damage",
            formula: "3d8 + 6",
          },
        ],
      },
      {
        name: "Stomp",
        actionType: "action",
        description:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 5) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 8",
          },
          {
            name: "Damage",
            formula: "3d10 + 5",
          },
        ],
      },
    ],
  },
  {
    id: 24,
    name: "Elk",
    description:
      "Elk are large herbivores that inhabit forests and grasslands.",
    flavorText: "Elk are large herbivores that inhabit forests and grasslands.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.25,

    hitDiceAmount: 2,
    speed: 50,
    STR: 16,
    DEX: 10,
    CON: 12,
    INT: 2,
    WIS: 10,
    CHA: 6,

    features: [
      {
        name: "Charge",
        description:
          "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
      },
    ],
    actions: [
      {
        name: "Ram",
        actionType: "action",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "1d6 + 3",
          },
          {
            name: "Charge Damage",
            formula: "2d6",
          },
        ],
      },
      {
        name: "Hooves",
        actionType: "action",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one prone creature. Hit: 8 (2d4 + 3) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "2d4 + 3",
          },
        ],
      },
    ],
  },
  {
    id: 25,
    name: "Flying Snake",
    description:
      "A flying snake is a brightly colored, winged serpent found in remote jungles. Tribespeople and cultists sometimes domesticate flying snakes to serve as messengers that deliver scrolls wrapped in their coils.",
    flavorText:
      "A flying snake is a brightly colored, winged serpent found in remote jungles.",
    size: Size.TINY,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.125,

    hitDiceAmount: 2,
    speed: 30,
    flyingSpeed: 60,
    swimmingSpeed: 30,
    STR: 4,
    DEX: 18,
    CON: 11,
    INT: 2,
    WIS: 12,
    CHA: 5,

    blindsight: 10,
    features: [
      {
        name: "Flyby",
        description:
          "The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 1 piercing damage plus 7 (3d4) poison damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "1 + 3d4",
          },
        ],
      },
    ],
  },
  {
    id: 26,
    name: "Frog",
    description:
      "A frog has no effective attacks. It feeds on small insects and typically dwells near water, in trees, or underground. The frog’s statistics can also be used to represent a toad.",
    flavorText:
      "A frog has no effective attacks. It feeds on small insects and typically dwells near water.",
    size: Size.TINY,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,

    hitDiceAmount: 1,
    speed: 20,
    swimmingSpeed: 20,
    STR: 1,
    DEX: 13,
    CON: 8,
    INT: 1,
    WIS: 8,
    CHA: 3,
    skillProficiencies: [Skill.STEALTH, Skill.PERCEPTION],
    darkvision: 30,

    features: [
      {
        name: "Amphibious",
        description: "The frog can breathe air and water.",
      },
      {
        name: "Standing Leap",
        description:
          "The frog's long jump is up to 10 feet and its high jump is up to 5 feet, with or without a running start.",
      },
    ],
  },
  {
    id: 27,
    name: "Giant Ape",
    description:
      "Giant apes are territorial primates that are known for their strength and intelligence.",
    flavorText:
      "Giant apes are territorial primates that are known for their strength.",
    size: Size.HUGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 7,

    hitDiceAmount: 15,
    speed: 40,
    climbingSpeed: 40,
    STR: 23,
    DEX: 14,
    CON: 18,
    INT: 7,
    WIS: 12,
    CHA: 7,
    skillProficiencies: [Skill.PERCEPTION, Skill.ATHLETICS],

    actions: [
      {
        actionType: "action",
        name: "Multiattack",
        description: "The ape makes two fist attacks.",
      },
      {
        name: "Fist",
        actionType: "action",
        description:
          "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 9",
          },
          {
            name: "Damage",
            formula: "3d10 + 6",
          },
        ],
      },
      {
        name: "Rock",
        actionType: "action",
        description:
          "Ranged Weapon Attack: +9 to hit, range 50/100 ft., one target. Hit: 28 (7d6 + 6) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 9",
          },
          {
            name: "Damage",
            formula: "7d6 + 6",
          },
        ],
      },
    ],
  },
  {
    id: 28,
    name: "Giant Badger",
    description: "Giant badgers are large, burrowing mammals.",
    flavorText: "Giant badgers are large, burrowing mammals.",
    size: Size.MEDIUM,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.25,

    hitDiceAmount: 2,
    speed: 30,
    burrowingSpeed: 10,
    STR: 13,
    DEX: 10,
    CON: 15,
    INT: 2,
    WIS: 12,
    CHA: 5,
    darkvision: 30,

    features: [
      {
        name: "Keen Smell",
        description:
          "The badger has advantage on Wisdom (Perception) checks that rely on smell.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Multiattack",
        description:
          "The badger makes two attacks: one with its bite and one with its claws.",
      },
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 3",
          },
          {
            name: "Damage",
            formula: "1d6 + 1",
          },
        ],
      },
      {
        actionType: "action",
        name: "Claws",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 3",
          },
          {
            name: "Damage",
            formula: "2d4 + 1",
          },
        ],
      },
    ],
  },
  {
    id: 29,
    name: "Giant Bat",
    description: "Giant bats are large, flying mammals.",
    flavorText: "Giant bats are large, flying mammals.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.25,

    hitDiceAmount: 4,
    speed: 10,
    flyingSpeed: 60,
    STR: 15,
    DEX: 16,
    CON: 11,
    INT: 2,
    WIS: 12,
    CHA: 6,

    blindsight: 60,
    features: [
      {
        name: "Echolocation",
        description: "The bat can't use its blindsight while deafened.",
      },
      {
        name: "Keen Hearing",
        description:
          "The bat has advantage on Wisdom (Perception) checks that rely on hearing.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d6 + 2",
          },
        ],
      },
    ],
  },
  {
    id: 30,
    name: "Giant Boar",
    description: "Giant boars are large, wild pigs.",
    flavorText: "Giant boars are large, wild pigs.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 2,
    naturalArmorBonus: 2,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    hitDiceAmount: 5,
    speed: 40,
    STR: 17,
    DEX: 10,
    CON: 16,
    INT: 2,
    WIS: 7,
    CHA: 5,
    features: [
      {
        name: "Charge",
        description:
          "If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
      },
      {
        name: "Relentless (Recharges after a Short or Long Rest)",
        description:
          "If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Tusk",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "2d6 + 3",
          },
          {
            name: "Charge Damage",
            formula: "2d6",
          },
        ],
      },
    ],
  },
  {
    id: 31,
    name: "Giant Centipede",
    description: "Giant centipedes are large, venomous arthropods.",
    flavorText: "Giant centipedes are large, venomous arthropods.",
    size: Size.SMALL,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.25,

    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    naturalArmorBonus: 1,

    hitDiceAmount: 1,
    speed: 30,
    climbingSpeed: 30,
    STR: 5,
    DEX: 14,
    CON: 12,

    INT: 1,
    WIS: 7,
    CHA: 3,

    blindsight: 30,
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d4 + 2",
          },
          {
            name: "Poison Damage",
            formula: "3d6",
          },
        ],
      },
    ],
  },
  {
    id: 32,
    name: "Giant Constrictor Snake",
    description: "Giant constrictor snakes are large, muscular snakes.",
    flavorText: "Giant constrictor snakes are large, muscular snakes.",
    size: Size.HUGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 2,

    hitDiceAmount: 8,
    speed: 30,
    swimmingSpeed: 30,
    STR: 19,
    DEX: 14,
    CON: 12,
    INT: 1,
    WIS: 10,
    CHA: 3,

    blindsight: 10,
    skillProficiencies: [Skill.PERCEPTION],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 10 (2d6 + 4) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "2d6 + 4",
          },
        ],
      },
      {
        name: "Constrict",
        actionType: "action",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 13 (2d8 + 4) bludgeoning damage, and the target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "2d8 + 4",
          },
        ],
      },
    ],
  },
  {
    id: 33,
    name: "Giant Crab",
    description:
      "Giant crabs are large, hard-­‐‑shelled creatures found along the coast.",
    flavorText:
      "Giant crabs are large, hard-­‐‑shelled creatures found along the coast.",
    size: Size.MEDIUM,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.125,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    naturalArmorBonus: 3,

    hitDiceAmount: 3,
    speed: 30,
    swimmingSpeed: 30,
    STR: 13,
    DEX: 15,
    CON: 11,
    INT: 1,
    WIS: 9,
    CHA: 3,
    skillProficiencies: [Skill.STEALTH],
    blindsight: 30,
    features: [
      {
        name: "Amphibious",
        description: "The crab can breathe air and water.",
      },
    ],
    actions: [
      {
        name: "Claw",
        actionType: "action",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage, and the target is grappled (escape DC 11). The crab has two claws, each of which can grapple only one target.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 3",
          },
          {
            name: "Damage",
            formula: "1d6 + 1",
          },
        ],
      },
    ],
  },
  {
    id: 34,
    name: "Giant Crocodile",
    description: "Giant crocodiles are large, aquatic reptiles.",
    flavorText: "Giant crocodiles are large, aquatic reptiles.",
    size: Size.HUGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 5,
    naturalArmorBonus: 5,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    hitDiceAmount: 9,
    speed: 30,
    swimmingSpeed: 50,
    STR: 21,
    DEX: 9,
    CON: 17,
    INT: 2,
    WIS: 10,
    CHA: 7,
    skillExpertise: [Skill.STEALTH],

    features: [
      {
        name: "Hold Breath",
        description: "The crocodile can hold its breath for 30 minutes.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10 + 5) piercing damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can’t bite another target.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 8",
          },
          {
            name: "Damage",
            formula: "3d10 + 5",
          },
        ],
      },
      {
        name: "Tail",
        actionType: "action",
        description:
          "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not grappled by the crocodile. Hit: 14 (2d8 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 8",
          },
          {
            name: "Damage",
            formula: "2d8 + 5",
          },
        ],
      },
    ],
  },
  {
    id: 35,
    name: "Giant Eagle",
    description:
      "A giant eagle is a noble creature that speaks its own language and understands speech in the Common tongue. A mated pair of giant eagles typically has up to four eggs or young in their nest (treat the young as normal eagles).",
    flavorText:
      "A giant eagle is a noble creature that speaks its own language.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 1,
    alignmentOptions: [Alignment.NEUTRAL_GOOD],
    hitDiceAmount: 4,
    speed: 10,
    flyingSpeed: 80,
    STR: 16,
    DEX: 17,
    CON: 13,
    INT: 8,
    WIS: 14,
    CHA: 10,
    skillProficiencies: [Skill.PERCEPTION],
    features: [
      {
        name: "Keen Sight",
        description:
          "The eagle has advantage on Wisdom (Perception) checks that rely on sight.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        actionType: "action",
        description:
          "The eagle makes two attacks: one with its beak and one with its talons.",
      },
      {
        name: "Beak",
        actionType: "action",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "1d6 + 3",
          },
        ],
      },
      {
        name: "Talons",
        actionType: "action",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "2d6 + 3",
          },
        ],
      },
    ],
  },
  {
    id: 36,
    name: "Giant Elk",
    description:
      "The majestic giant elk is rare to the point that its appearance is often taken as a foreshadowing of an important event, such as the birth of a king. Legends tell of gods that take the form of giant elk when visiting the Material Plane. Many cultures therefore believe that to hunt these creatures is to invite divine wrath.",
    flavorText:
      "The majestic giant elk is rare to the point that its appearance is often taken as a foreshadowing of an important event.",
    size: Size.HUGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 2,
    naturalArmorBonus: 1,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    hitDiceAmount: 5,
    speed: 60,
    STR: 19,
    DEX: 16,
    CON: 14,
    INT: 7,
    WIS: 14,
    CHA: 10,
    skillProficiencies: [Skill.PERCEPTION],
    languageDescription:
      "Giant Elk, understands Common, Elvish, and Sylvan but can’t speak them",
    features: [
      {
        name: "Charge",
        description:
          "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
      },
    ],
    actions: [
      {
        name: "Ram",
        actionType: "action",
        description:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Charge Damage",
            formula: "2d6",
          },
          {
            name: "Damage",
            formula: "2d6 + 4",
          },
        ],
      },
      {
        name: "Hooves",
        actionType: "action",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one prone creature. Hit: 22 (4d8 + 4) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "4d8 + 4",
          },
        ],
      },
    ],
  },
  {
    id: 37,
    name: "Giant Fire Beetle",
    description:
      "A giant fire beetle is a nocturnal creature that takes its name from a pair of glowing glands that give off light. Miners and adventurers prize these creatures, for a giant fire beetle’s glands continue to shed light for 1d6 days after the beetle dies. Giant fire beetles are most commonly found underground and in dark forests",
    flavorText: "Giant fire beetles are bioluminescent insects.",
    size: Size.SMALL,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,
    naturalArmorBonus: 3,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    hitDiceAmount: 1,
    speed: 30,
    STR: 10,
    DEX: 10,
    CON: 12,
    INT: 1,
    WIS: 7,
    CHA: 3,

    blindsight: 30,
    features: [
      {
        name: "Illumination",
        description:
          "The beetle sheds bright light in a 10-­‐‑foot radius and dim light for an additional 10 feet.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Bite",
        description:
          "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6 - 1) slashing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 2",
          },
          {
            name: "Damage",
            formula: "1d6 - 1",
          },
        ],
      },
    ],
  },
  {
    id: 38,
    name: "Giant Frog",
    description: "Giant frogs are large, carnivorous amphibians.",
    flavorText: "Giant frogs are large, carnivorous amphibians.",
    size: Size.MEDIUM,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.25,

    hitDiceAmount: 4,
    speed: 30,
    swimmingSpeed: 30,
    STR: 12,
    DEX: 13,
    CON: 11,
    INT: 2,
    WIS: 10,
    CHA: 3,

    darkvision: 30,
    actions: [
      {
        actionType: "action",
        name: "Bite",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage, and the target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can’t bite another target",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 3",
          },
          {
            name: "Damage",
            formula: "1d6 + 1",
          },
        ],
      },
      {
        name: "Swallow",
        actionType: "action",
        description:
          " The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog’s turns. The frog can have only one target swallowed at a time.\n If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 3",
          },
          {
            name: "Bite Damage",
            formula: "1d6 + 1",
          },
          {
            name: "Swallow Damage",
            formula: "2d4",
          },
        ],
      },
    ],
  },
  {
    id: 39,
    name: "Giant Goat",
    description: "Giant goats are large, sure-­‐‑footed herbivores.",
    flavorText: "Giant goats are large, sure-­‐‑footed herbivores.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.5,
    naturalArmorBonus: 1,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    hitDiceAmount: 3,
    speed: 40,
    STR: 17,
    DEX: 11,
    CON: 12,
    INT: 3,
    WIS: 12,
    CHA: 6,

    features: [
      {
        name: "Charge",
        description:
          "If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
      },
      {
        name: "Sure-Footed",
        description:
          "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Ram",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "2d4 + 3",
          },
          {
            name: "Charge Damage",
            formula: "2d4",
          },
        ],
      },
    ],
  },
  {
    id: 40,
    name: "Giant Hyena",
    description: "Giant hyenas are large, carnivorous mammals.",
    flavorText: "Giant hyenas are large, carnivorous mammals.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 1,

    hitDiceAmount: 6,
    speed: 50,
    STR: 16,
    DEX: 14,
    CON: 14,
    INT: 2,
    WIS: 12,
    CHA: 7,
    skillProficiencies: [Skill.PERCEPTION],
    darkvision: 60,
    features: [
      {
        name: "Rampage",
        description:
          "When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Bite",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "2d6 + 3",
          },
        ],
      },
    ],
  },
  {
    id: 41,
    name: "Giant Octopus",
    description: "Giant octopuses are large, aquatic creatures.",
    flavorText: "Giant octopuses are large, aquatic creatures.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 1,

    hitDiceAmount: 8,
    speed: 10,
    swimmingSpeed: 60,
    STR: 17,
    DEX: 13,
    CON: 13,
    INT: 3,
    WIS: 10,
    CHA: 4,
    skillExpertise: [Skill.PERCEPTION],
    skillProficiencies: [Skill.STEALTH],
    darkvision: 60,

    features: [
      {
        name: "Hold Breath",
        description:
          "While out of water, the octopus can hold its breath for 1 hour.",
      },
      {
        name: "Underwater Camouflage",
        description:
          "The octopus has advantage on Dexterity (Stealth) checks made while underwater.",
      },
      {
        name: "Water Breathing",
        description: "The octopus can breathe only underwater.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Tentacles",
        description:
          "Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage. If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the octopus can’t use its tentacles on another target.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "2d6 + 3",
          },
        ],
      },
      {
        actionType: "action",
        name: "Ink Cloud (Recharges after a Short or Long Rest)",
        description:
          "A 20-­‐foot-­‐radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.",
      },
    ],
  },
  {
    id: 42,
    name: "Giant Owl",
    description:
      "Giant owls often befriend fey and other sylvan creatures and are guardians of their woodland realms.",
    flavorText: "Giant owls often befriend fey and other sylvan creatures.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.25,
    alignmentOptions: [Alignment.TRUE_NEUTRAL],
    hitDiceAmount: 3,
    speed: 5,
    flyingSpeed: 60,
    STR: 13,
    DEX: 15,
    CON: 12,
    INT: 8,
    WIS: 13,
    CHA: 10,
    skillProficiencies: [Skill.PERCEPTION, Skill.STEALTH],

    darkvision: 120,
    features: [
      {
        name: "Keen Hearing and Sight",
        description:
          "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight.",
      },
      {
        name: "Flyby",
        description:
          "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Talons",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6 + 1) slashing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 3",
          },
          {
            name: "Damage",
            formula: "2d6 + 1",
          },
        ],
      },
    ],
  },
  {
    id: 43,
    name: "Giant Poisonous Snake",
    description: "Giant poisonous snakes are large, venomous serpents.",
    flavorText: "Giant poisonous snakes are large, venomous serpents.",
    size: Size.MEDIUM,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.25,

    hitDiceAmount: 2,
    speed: 30,
    swimmingSpeed: 30,
    STR: 10,
    DEX: 18,
    CON: 13,
    INT: 2,
    WIS: 10,
    CHA: 3,

    blindsight: 10,
    skillProficiencies: [Skill.PERCEPTION],
    actions: [
      {
        actionType: "action",
        name: "Bite",
        description:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d4 + 4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "1d4 + 4",
          },
          {
            name: "Poison Damage",
            formula: "3d6",
          },
        ],
      },
    ],
  },
  {
    id: 44,
    name: "Giant Rat",
    description: "Giant rats are large, disease-­‐‑ridden rodents.",
    flavorText: "Giant rats are large, disease-­‐‑ridden rodents.",
    size: Size.SMALL,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.125,

    hitDiceAmount: 2,
    speed: 30,

    STR: 7,
    DEX: 15,
    CON: 11,
    INT: 2,
    WIS: 10,
    CHA: 4,

    darkvision: 60,
    features: [
      {
        name: "Keen Smell",
        description:
          "The rat has advantage on Wisdom (Perception) checks that rely on smell.",
      },
      {
        name: "Pack Tactics",
        description:
          "The rat has advantage on an attack roll against a creature if at least one of the rat’s allies is within 5 feet of the creature and the ally isn’t incapacitated.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Bite",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d4 + 2",
          },
        ],
      },
    ],
  },
  {
    id: 45,
    name: "Diseased Giant Rat",
    description:
      "Some giant rats carry vile diseases that they spread with their bites.",
    flavorText:
      "Some giant rats carry vile diseases that they spread with their bites.",
    size: Size.SMALL,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.125,

    hitDiceAmount: 2,
    speed: 30,
    STR: 7,
    DEX: 15,
    CON: 11,
    INT: 2,
    WIS: 10,
    CHA: 4,

    darkvision: 60,
    features: [
      {
        name: "Keen Smell",
        description:
          "The rat has advantage on Wisdom (Perception) checks that rely on smell.",
      },
      {
        name: "Pack Tactics",
        description:
          "The rat has advantage on an attack roll against a creature if at least one of the rat’s allies is within 5 feet of the creature and the ally isn’t incapacitated.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Bite",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 10 Constitution saving throw or contract a disease. Until the disease is cured, the target can’t regain hit points except by magical means, and the target’s hit point maximum decreases by 3 (1d6) every 24 hours. If the target’s hit point maximum drops to 0 as a result of this disease, the target dies",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d4 + 2",
          },
        ],
      },
    ],
  },
  {
    id: 46,
    name: "Giant Scorpion",
    description: "Giant scorpions are large, venomous arachnids.",
    flavorText: "Giant scorpions are large, venomous arachnids.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 3,
    naturalArmorBonus: 4,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    speed: 40,
    hitDiceAmount: 7,
    STR: 15,
    DEX: 13,
    CON: 15,
    INT: 1,
    WIS: 9,
    CHA: 3,

    blindsight: 60,
    actions: [
      {
        actionType: "action",
        name: "Multiattack",
        description:
          "The scorpion makes three attacks: two with its claws and one with its sting.",
      },
      {
        name: "Claw",
        actionType: "action",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d8 + 2",
          },
        ],
      },
      {
        name: "Sting",
        actionType: "action",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d10 + 2",
          },
          {
            name: "Poison Damage",
            formula: "4d10",
          },
        ],
      },
    ],
  },
  {
    id: 47,
    name: "Giant Sea Horse",
    description:
      "Like their smaller kin, giant sea horses are shy, colorful fish with elongated bodies and curled tails. Aquatic elves train them as mounts.",
    flavorText:
      "Like their smaller kin, giant sea horses are shy, colorful fish.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.5,
    naturalArmorBonus: 1,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    hitDiceAmount: 3,
    speed: 0,
    swimmingSpeed: 40,
    STR: 12,
    DEX: 15,
    CON: 11,
    INT: 2,
    WIS: 12,
    CHA: 5,

    features: [
      {
        name: "Water Breathing",
        description: "The sea horse can breathe only underwater.",
      },
      {
        name: "Charge",
        description:
          "If the sea horse moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. It the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
      },
    ],
    actions: [
      {
        name: "Ram",
        actionType: "action",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 3",
          },
          {
            name: "Damage",
            formula: "1d6 + 1",
          },
          {
            name: "Charge Damage",
            formula: "2d6",
          },
        ],
      },
    ],
  },
  {
    id: 48,
    name: "Giant Shark",
    description:
      "A giant shark is 30 feet long and normally found in deep oceans. Utterly fearless, it preys on anything that crosses its path, including whales and ships.",
    flavorText:
      "A giant shark is 30 feet long and normally found in deep oceans.",
    size: Size.HUGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 5,

    hitDiceAmount: 11,
    speed: 0,
    swimmingSpeed: 50,
    STR: 23,
    DEX: 11,
    CON: 21,
    INT: 1,
    WIS: 10,
    CHA: 5,
    skillProficiencies: [Skill.PERCEPTION],
    blindsight: 60,
    features: [
      {
        name: "Blood Frenzy",
        description:
          "The shark has advantage on melee attack rolls against any creature that doesn’t have all its hit points.",
      },
      {
        name: "Water Breathing",
        description: "The shark can breathe only underwater.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 22 (3d10 + 6) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 9",
          },
          {
            name: "Damage",
            formula: "3d10 + 6",
          },
        ],
      },
    ],
  },
  {
    id: 49,
    name: "Giant Spider",
    description:
      "To snare its prey, a giant spider spins elaborate webs or shoots sticky strands of webbing from its abdomen. Giant spiders are most commonly found underground, making their lairs on ceilings or in dark, web-­‐‑filled crevices. Such lairs are often festooned with web cocoons holding past victims.",
    flavorText: "Giant spiders are most commonly found underground.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 1,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    naturalArmorBonus: 1,

    hitDiceAmount: 4,
    speed: 30,
    climbingSpeed: 30,
    STR: 14,
    DEX: 16,
    CON: 12,
    INT: 2,
    WIS: 11,
    CHA: 4,
    skillExpertise: [Skill.STEALTH],
    blindsight: 10,
    darkvision: 60,

    features: [
      {
        name: "Spider Climb",
        description:
          "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
      },
      {
        name: "Web Sense",
        description:
          "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.",
      },
      {
        name: "Web Walker",
        description:
          "The spider ignores movement restrictions caused by webbing.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Bite",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "1d8 + 3",
          },
          {
            name: "Poison Damage",
            formula: "2d8",
          },
        ],
      },
      {
        name: "Web (Recharge 5-6)",
        actionType: "action",
        description:
          "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage).",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Recharge",
            formula: "1d6",
          },
        ],
      },
    ],
  },
  {
    id: 50,
    name: "Giant Toad",
    description: "Giant toads are large, carnivorous amphibians.",
    flavorText: "Giant toads are large, carnivorous amphibians.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 1,

    hitDiceAmount: 6,
    speed: 20,
    swimmingSpeed: 40,
    STR: 15,
    DEX: 13,
    CON: 13,
    INT: 2,
    WIS: 10,
    CHA: 3,

    darkvision: 30,
    features: [
      {
        name: "Amphibious",
        description: "The toad can breathe air and water.",
      },
      {
        name: "Standing Leap",
        description:
          "The toad’s long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Bite",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 5 (1d10) poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can’t bite another target.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d10 + 2",
          },
          {
            name: "Poison Damage",
            formula: "1d10",
          },
        ],
      },
      {
        actionType: "action",
        name: "Swallow",
        description:
          "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad’s turns. The toad can have only one target swallowed at a time.\n If the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Bite Damage",
            formula: "1d10 + 2",
          },
          {
            name: "Swallow Damage",
            formula: "3d6",
          },
        ],
      },
    ],
  },
  {
    id: 51,
    name: "Giant Vulture",
    description:
      "A giant vulture has advanced intelligence and a malevolent bent. Unlike its smaller kin, it will attack a wounded creature to hasten its end. Giant vultures have been known to haunt a thirsty, starving creature for days to enjoy its suffering.",
    flavorText:
      "A giant vulture has advanced intelligence and a malevolent bent.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 1,
    alignmentOptions: [Alignment.NEUTRAL_EVIL],
    hitDiceAmount: 3,
    speed: 10,
    flyingSpeed: 60,
    STR: 15,
    DEX: 10,
    CON: 15,
    INT: 6,
    WIS: 12,
    CHA: 7,
    skillProficiencies: [Skill.PERCEPTION],

    features: [
      {
        name: "Keen Sight",
        description:
          "The vulture has advantage on Wisdom (Perception) checks that rely on sight.",
      },
      {
        name: "Pack Tactics",
        description:
          "The vulture has advantage on an attack roll against a creature if at least one of the vulture’s allies is within 5 feet of the creature and the ally isn’t incapacitated.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        actionType: "action",
        description:
          "The vulture makes two attacks: one with its beak and one with its talons.",
      },
      {
        name: "Beak",
        actionType: "action",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 2) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "2d4 + 2",
          },
        ],
      },
      {
        name: "Talons",
        actionType: "action",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "2d6 + 2",
          },
        ],
      },
    ],
  },
  {
    id: 52,
    name: "Giant Wasp",
    description: "Giant wasps are aggressive, carnivorous insects.",
    flavorText: "Giant wasps are aggressive, carnivorous insects.",
    size: Size.MEDIUM,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.5,

    hitDiceAmount: 3,
    speed: 10,
    flyingSpeed: 50,
    STR: 10,
    DEX: 14,
    CON: 10,
    INT: 1,
    WIS: 10,
    CHA: 3,

    actions: [
      {
        actionType: "action",
        name: "Sting",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d6 + 2",
          },
          {
            name: "Poison Damage",
            formula: "3d6",
          },
        ],
      },
    ],
  },
  {
    id: 53,
    name: "Giant Weasel",
    description: "Giant weasels are large, carnivorous mammals.",
    flavorText: "Giant weasels are large, carnivorous mammals.",
    size: Size.MEDIUM,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.125,

    hitDiceAmount: 2,
    speed: 40,
    STR: 11,
    DEX: 16,
    CON: 10,
    INT: 4,
    WIS: 12,
    CHA: 5,

    darkvision: 60,
    skillProficiencies: [Skill.PERCEPTION, Skill.STEALTH],
    features: [
      {
        name: "Keen Hearing and Smell",
        description:
          "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Bite",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 3",
          },
          {
            name: "Damage",
            formula: "1d4 + 3",
          },
        ],
      },
    ],
  },
  {
    id: 54,
    name: "Giant Wolf Spider",
    description:
      "Smaller than a giant spider, a giant wolf spider hunts prey across open ground or hides in a burrow or crevice, or in a hidden cavity beneath debris.",
    flavorText:
      "Smaller than a giant spider, a giant wolf spider hunts prey across open ground or hides in a burrow or crevice, or in a hidden cavity beneath debris.",
    size: Size.MEDIUM,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.25,

    hitDiceAmount: 2,
    speed: 40,
    climbingSpeed: 40,
    STR: 12,
    DEX: 16,
    CON: 13,
    INT: 3,
    WIS: 12,
    CHA: 4,

    darkvision: 60,
    blindsight: 10,
    skillExpertise: [Skill.STEALTH],
    skillProficiencies: [Skill.PERCEPTION],
    features: [
      {
        name: "Spider Climb",
        description:
          "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
      },
      {
        name: "Web Sense",
        description:
          "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.",
      },
      {
        name: "Web Walker",
        description:
          "The spider ignores movement restrictions caused by webbing.",
      },
    ],
    actions: [
      {
        actionType: "action",
        name: "Bite",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 3",
          },
          {
            name: "Damage",
            formula: "1d6 + 1",
          },
          {
            name: "Poison Damage",
            formula: "2d6",
          },
        ],
      },
    ],
  },
  {
    id: 55,
    name: "Goat",
    description: "Goats are domesticated herd animals.",
    flavorText: "Goats are domesticated herd animals.",
    size: Size.MEDIUM,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,

    speed: 40,
    hitDiceAmount: 1,
    STR: 12,
    DEX: 10,
    CON: 11,
    INT: 2,
    WIS: 10,
    CHA: 5,
    features: [
      {
        name: "Sure-Footed",
        description:
          "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.",
      },
      {
        name: "Charge",
        description:
          "If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone.",
      },
    ],
    actions: [
      {
        name: "Ram",
        actionType: "action",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 3",
          },
          {
            name: "Damage",
            formula: "1d4 + 1",
          },
          {
            name: "Charge Damage",
            formula: "1d4",
          },
        ],
      },
    ],
  },
  {
    id: 56,
    name: "Hunter Shark",
    description:
      "Smaller than a giant shark but larger and fiercer than a reef shark, a hunter shark haunts deep waters. It usually hunts alone, but multiple hunter sharks might feed in the same area. A fully grown hunter shark is 15 to 20 feet long",
    flavorText:
      "Smaller than a giant shark but larger and fiercer than a reef shark, a hunter shark haunts deep waters.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 2,

    hitDiceAmount: 6,
    speed: 0,
    swimmingSpeed: 40,
    STR: 18,
    DEX: 13,
    CON: 15,
    INT: 1,
    WIS: 10,
    CHA: 4,

    blindsight: 30,
    skillProficiencies: [Skill.PERCEPTION],
    features: [
      {
        name: "Blood Frenzy",
        description:
          "The shark has advantage on melee attack rolls against any creature that doesn’t have all its hit points.",
      },
      {
        name: "Water Breathing",
        description: "The shark can breathe only underwater.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "2d10 + 4",
          },
        ],
      },
    ],
  },
  {
    id: 57,
    name: "Hyena",
    description:
      "Hyenas are pack hunters known for their cunning and their unnerving vocalizations.",
    flavorText:
      "Hyenas are pack hunters known for their cunning and their unnerving vocalizations.",
    size: Size.MEDIUM,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,

    hitDiceAmount: 1,
    speed: 50,
    STR: 11,
    DEX: 13,
    CON: 12,
    INT: 2,
    WIS: 12,
    CHA: 5,
    skillProficiencies: [Skill.PERCEPTION],
    features: [
      {
        name: "Pack Tactics",
        description:
          "The hyena has advantage on an attack roll against a creature if at least one of the hyena’s allies is within 5 feet of the creature and the ally isn’t incapacitated.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 2",
          },
          {
            name: "Damage",
            formula: "1d6",
          },
        ],
      },
    ],
  },
  {
    id: 58,
    name: "Jackal",
    description: "Jackals are opportunnistic scavengers.",
    flavorText: "Jackals are opportunnistic scavengers.",
    size: Size.SMALL,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,

    hitDiceAmount: 1,
    speed: 40,
    STR: 8,
    DEX: 15,
    CON: 11,
    INT: 3,
    WIS: 12,
    CHA: 6,

    features: [
      {
        name: "Pack Tactics",
        description:
          "The jackal has advantage on an attack roll against a creature if at least one of the jackal’s allies is within 5 feet of the creature and the ally isn’t incapacitated.",
      },
      {
        name: "Keen Hearing and Smell",
        description:
          "The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 1",
          },
          {
            name: "Damage",
            formula: "1d4 - 1",
          },
        ],
      },
    ],
  },
  {
    id: 59,
    name: "Killer Whale",
    description: "Killer whales are powerful ocean predators.",
    flavorText: "Killer whales are powerful ocean predators.",
    size: Size.HUGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 3,
    naturalArmorBonus: 2,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    hitDiceAmount: 12,
    speed: 0,
    swimmingSpeed: 60,
    STR: 19,
    DEX: 10,
    CON: 13,
    INT: 3,
    WIS: 12,
    CHA: 7,
    skillProficiencies: [Skill.PERCEPTION],
    blindsight: 120,
    features: [
      {
        name: "Echolocation",
        description: "The whale can’t use its blindsight while deafened.",
      },
      {
        name: "Hold Breath",
        description: "The whale can hold its breath for 30 minutes.",
      },
      {
        name: "Keen Hearing",
        description:
          "The whale has advantage on Wisdom (Perception) checks that rely on hearing.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 21 (5d6 + 4) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "3d8 + 8",
          },
        ],
      },
    ],
  },
  {
    id: 60,
    name: "Lion",
    description: "Lions are powerful felines.",
    flavorText: "Lions are powerful felines.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 1,

    hitDiceAmount: 4,
    speed: 50,
    STR: 17,
    DEX: 15,
    CON: 13,
    INT: 3,
    WIS: 12,
    CHA: 8,
    skillExpertise: [Skill.STEALTH],
    skillProficiencies: [Skill.PERCEPTION],
    features: [
      {
        name: "Keen Smell",
        description:
          "The lion has advantage on Wisdom (Perception) checks that rely on smell.",
      },
      {
        name: "Pack Tactics",
        description:
          "The lion has advantage on an attack roll against a creature if at least one of the lion’s allies is within 5 feet of the creature and the ally isn’t incapacitated.",
      },
      {
        name: "Pounce",
        description:
          "If the lion moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action.",
      },
      {
        name: "Running Leap",
        description:
          "With a 10-foot running start, the lion can long jump up to 25 feet.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "1d8 + 3",
          },
        ],
      },
      {
        name: "Claw",
        actionType: "action",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "1d6 + 3",
          },
        ],
      },
    ],
  },
  {
    id: 61,
    name: "Lizard",
    description: "Lizards are small reptiles.",
    flavorText: "Lizards are small reptiles.",
    size: Size.TINY,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,

    hitDiceAmount: 1,
    speed: 20,
    climbingSpeed: 20,
    STR: 2,
    DEX: 11,
    CON: 10,
    INT: 1,
    WIS: 8,
    CHA: 3,

    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20",
          },
          {
            name: "Damage",
            formula: "1",
          },
        ],
      },
    ],
  },
  {
    id: 62,
    name: "Mammoth",
    description:
      "A mammoth is an elephantine creature with thick fur and long tusks. Stockier and fiercer than normal elephants, mammoths inhabit a wide range of climes, from subarctic to subtropical.",
    flavorText:
      "A mammoth is an elephantine creature with thick fur and long tusks.",
    size: Size.HUGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 6,
    naturalArmorBonus: 4,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    hitDiceAmount: 11,
    speed: 40,
    STR: 24,
    DEX: 9,
    CON: 21,
    INT: 3,
    WIS: 11,
    CHA: 6,

    features: [
      {
        name: "Trampling Charge",
        description:
          "If the mammoth moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action",
      },
    ],
    actions: [
      {
        name: "Gore",
        actionType: "action",
        description:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8 + 7) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 10",
          },
          {
            name: "Damage",
            formula: "4d8 + 7",
          },
        ],
      },
      {
        name: "Stomp",
        actionType: "action",
        description:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one prone creature. Hit: 29 (4d10 + 7) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 10",
          },
          {
            name: "Damage",
            formula: "4d8 + 8",
          },
        ],
      },
    ],
  },
  {
    id: 63,
    name: "Mastiff",
    description:
      "Mastiffs are impressive hounds prized by humanoids for their loyalty and keen senses. Mastiffs can be trained as guard dogs, hunting dogs, and war dogs. Halflings and other Small humanoids ride them as mounts.",
    flavorText:
      "Mastiffs are impressive hounds prized by humanoids for their loyalty and keen senses.",
    size: Size.MEDIUM,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.125,

    hitDiceAmount: 1,
    speed: 40,
    STR: 13,
    DEX: 14,

    CON: 12,
    INT: 3,
    WIS: 12,
    CHA: 7,
    skillProficiencies: [Skill.PERCEPTION],
    features: [
      {
        name: "Keen Hearing and Smell",
        description:
          "The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 3",
          },
          {
            name: "Damage",
            formula: "1d6 + 1",
          },
        ],
      },
    ],
  },
  {
    id: 64,
    name: "Mule",
    description: "Mules are hybrids of horses and donkeys.",
    flavorText: "Mules are hybrids of horses and donkeys.",
    size: Size.MEDIUM,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.125,

    hitDiceAmount: 2,
    speed: 40,
    STR: 14,
    DEX: 10,
    CON: 13,
    INT: 2,
    WIS: 10,
    CHA: 5,

    features: [
      {
        name: "Sure-Footed",
        description:
          "The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.",
      },
      {
        name: "Beast of Burden",
        description:
          "The mule is considered to be a Large animal for the purpose of determining its carrying capacity.",
      },
    ],
    actions: [
      {
        name: "Hooves",
        actionType: "action",
        description:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 2",
          },
          {
            name: "Damage",
            formula: "1d4 + 2",
          },
        ],
      },
    ],
  },
  {
    id: 65,
    name: "Octopus",
    description: "Octopuses are intelligent, eight-armed mollusks.",
    flavorText: "Octopuses are intelligent, eight-armed mollusks.",
    size: Size.SMALL,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,

    hitDiceAmount: 1,
    speed: 5,
    swimmingSpeed: 30,
    STR: 4,
    DEX: 15,
    CON: 11,
    INT: 3,
    WIS: 10,
    CHA: 4,

    skillProficiencies: [Skill.STEALTH, Skill.PERCEPTION],
    darkvision: 30,
    features: [
      {
        name: "Hold Breath",
        description: "The octopus can hold its breath for 30 minutes.",
      },
      {
        name: "Underwater Camouflage",
        description:
          "The octopus has advantage on Dexterity (Stealth) checks made while underwater.",
      },
      {
        name: "Water Breathing",
        description: "The octopus can breathe only underwater.",
      },
    ],
    actions: [
      {
        name: "Tentacles",
        actionType: "action",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage, and the target is grappled (escape DC 10). Until this grapple ends, the octopus can’t use its tentacles on another target.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1",
          },
        ],
      },
      {
        name: "Ink Cloud (Recharges after a Short or Long Rest)",
        actionType: "action",
        description:
          "A 5-­‐foot-­‐radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.",
      },
    ],
  },
  {
    id: 66,
    name: "Owl",
    description: "Owls are nocturnal birds of prey.",
    flavorText: "Owls are nocturnal birds of prey.",
    size: Size.TINY,
    creatureType: CreatureType.BEAST,

    hitDiceAmount: 1,
    speed: 5,
    flyingSpeed: 60,
    STR: 3,
    DEX: 13,

    CON: 8,
    INT: 2,
    WIS: 12,
    CHA: 7,

    darkvision: 120,
    skillProficiencies: [Skill.PERCEPTION, Skill.STEALTH],
    challengeRating: 0,
    actions: [
      {
        name: "Talons",
        actionType: "action",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 3",
          },
          {
            name: "Damage",
            formula: "1",
          },
        ],
      },
    ],
    features: [
      {
        name: "Flyby",
        description:
          "The owl doesn’t provoke opportunity attacks when it flies out of an enemy’s reach.",
      },
      {
        name: "Keen Hearing and Sight",
        description:
          "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight.",
      },
    ],
  },
  {
    id: 67,
    name: "Panther",
    description: " Panthers are powerful, graceful, and cunning felines.",
    flavorText: " Panthers are powerful, graceful, and cunning felines.",
    size: Size.MEDIUM,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.25,

    hitDiceAmount: 3,
    speed: 50,
    climbingSpeed: 40,
    STR: 14,
    DEX: 15,
    CON: 10,
    INT: 3,

    WIS: 14,
    CHA: 7,

    skillExpertise: [Skill.STEALTH],
    skillProficiencies: [Skill.PERCEPTION],
    features: [
      {
        name: "Keen Smell",
        description:
          "The panther has advantage on Wisdom (Perception) checks that rely on smell.",
      },
      {
        name: "Pounce",
        description:
          "If the panther moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d6 + 2",
          },
        ],
      },
      {
        name: "Claw",
        actionType: "action",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d4 + 2",
          },
        ],
      },
    ],
  },
  {
    id: 68,
    name: "Phase Spider",
    description:
      "A phase spider possesses the magical ability to phase in and out of the Ethereal Plane. It seems to appear out of nowhere and quickly vanishes after attacking. Its movement on the Ethereal Plane before coming back to the Material Plane makes it seem like it can teleport.",
    flavorText:
      "A phase spider possesses the magical ability to phase in and out of the Ethereal Plane.",
    size: Size.LARGE,
    creatureType: CreatureType.MONSTROSITY,
    challengeRating: 3,
    naturalArmorBonus: 1,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    hitDiceAmount: 5,
    speed: 30,
    climbingSpeed: 30,
    STR: 15,
    DEX: 15,
    CON: 12,
    INT: 6,
    WIS: 10,
    CHA: 6,

    darkvision: 60,
    skillExpertise: [Skill.STEALTH],
    features: [
      {
        name: "Spider Climb",
        description:
          "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
      },
      {
        name: "Web Walker",
        description:
          "The spider ignores movement restrictions caused by webbing.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d10 + 2",
          },
          {
            name: "Poison Damage",
            formula: "4d8",
          },
        ],
      },
      {
        name: "Ethereal Jaunt",
        description:
          "As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa",
        actionType: "bonus action",
      },
    ],
  },
  {
    id: 69,
    name: "Poisonous Snake",
    description: "Poisonous snakes are small, aggressive reptiles.",
    flavorText: "Poisonous snakes are small, aggressive reptiles.",
    size: Size.TINY,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.125,

    hitDiceAmount: 1,
    speed: 30,
    swimmingSpeed: 30,
    STR: 2,
    DEX: 16,
    CON: 11,
    INT: 1,
    WIS: 10,
    CHA: 3,

    blindsight: 10,
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage, and the target must make a DC 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "1",
          },
          {
            name: "Poison Damage",
            formula: "2d4",
          },
        ],
      },
    ],
  },
  {
    id: 70,
    name: "Polar Bear",
    description:
      "Polar bears are fearsome predators that live in the most frigid waters of the world.",
    flavorText:
      "Polar bears are fearsome predators that live in the most frigid waters of the world.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 2,
    naturalArmorBonus: 2,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    hitDiceAmount: 5,
    speed: 40,
    swimmingSpeed: 30,
    STR: 20,
    DEX: 10,
    CON: 16,
    INT: 2,
    WIS: 13,
    CHA: 7,
    skillProficiencies: [Skill.PERCEPTION],
    features: [
      {
        name: "Keen Smell",
        description:
          "The bear has advantage on Wisdom (Perception) checks that rely on smell.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        actionType: "action",
        description:
          "The bear makes two attacks: one with its bite and one with its claws.",
      },
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 7",
          },
          {
            name: "Damage",
            formula: "1d8 + 5",
          },
        ],
      },
      {
        name: "Claws",
        actionType: "action",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 7",
          },
          {
            name: "Damage",
            formula: "2d6 + 5",
          },
        ],
      },
    ],
  },
  {
    id: 71,
    name: "Quipper",
    description:
      "A quipper is a carnivorous fish with sharp teeth. Quippers can adapt to any aquatic environment, including cold subterranean lakes. They frequently gather in swarms; the statistics for a swarm of quippers appear later in this appendix.",
    flavorText: "A quipper is a carnivorous fish with sharp teeth.",
    size: Size.TINY,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,

    hitDiceAmount: 1,
    speed: 0,
    swimmingSpeed: 40,
    STR: 2,
    DEX: 16,
    CON: 9,
    INT: 1,
    WIS: 7,
    CHA: 2,

    darkvision: 60,
    features: [
      {
        name: "Blood Frenzy",
        description:
          "The quipper has advantage on melee attack rolls against any creature that doesn’t have all its hit points.",
      },

      {
        name: "Water Breathing",
        description: "The quipper can breathe only underwater.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "1",
          },
        ],
      },
    ],
  },
  {
    id: 72,
    name: "Rat",
    description: "Rats are small, scurrying rodents.",
    flavorText: "Rats are small, scurrying rodents.",
    size: Size.TINY,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,

    hitDiceAmount: 1,
    speed: 20,
    STR: 2,
    DEX: 11,
    CON: 9,
    INT: 2,
    WIS: 10,
    CHA: 4,

    darkvision: 30,
    features: [
      {
        name: "Keen Smell",
        description:
          "The rat has advantage on Wisdom (Perception) checks that rely on smell.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20",
          },
          {
            name: "Damage",
            formula: "1",
          },
        ],
      },
    ],
  },
  {
    id: 73,
    name: "Raven",
    description: "Ravens are small, black birds that can mimic sounds.",
    flavorText: "Ravens are small, black birds that can mimic sounds.",
    size: Size.TINY,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,

    hitDiceAmount: 1,
    speed: 10,
    flyingSpeed: 50,
    STR: 2,
    DEX: 14,
    CON: 8,
    INT: 2,
    WIS: 12,
    CHA: 6,
    skillProficiencies: [Skill.PERCEPTION],
    features: [
      {
        name: "Mimicry",
        description:
          "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check.",
      },
    ],
    actions: [
      {
        name: "Beak",
        actionType: "action",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1",
          },
        ],
      },
    ],
  },
  {
    id: 74,
    name: "Reef Shark",
    description:
      "Smaller than giant sharks and hunter sharks, reef sharks inhabit shallow waters and coral reefs, gathering in small packs to hunt. A full-­‐‑grown specimen measures 6 to 10 feet long.",
    flavorText:
      "Smaller than giant sharks and hunter sharks, reef sharks inhabit shallow waters and coral reefs.",
    size: Size.MEDIUM,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.5,

    hitDiceAmount: 4,
    speed: 0,
    swimmingSpeed: 40,
    STR: 14,
    DEX: 13,
    CON: 13,
    INT: 1,
    WIS: 10,
    CHA: 4,

    blindsight: 30,
    skillProficiencies: [Skill.PERCEPTION],
    features: [
      {
        name: "Pack Tactics",
        description:
          "The shark has advantage on an attack roll against a creature if at least one of the shark’s allies is within 5 feet of the creature and the ally isn’t incapacitated.",
      },
      {
        name: "Water Breathing",
        description: "The shark can breathe only underwater.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d8 + 2",
          },
        ],
      },
    ],
  },
  {
    id: 75,
    name: "Rhinoceros",
    description:
      "Rhinoceroses are large herbivores with one or two horns on their noses.",
    flavorText:
      "Rhinoceroses are large herbivores with one or two horns on their noses.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 2,
    naturalArmorBonus: 2,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    hitDiceAmount: 6,
    speed: 40,
    STR: 21,
    DEX: 8,
    CON: 15,
    INT: 2,
    WIS: 12,
    CHA: 6,

    features: [
      {
        name: "Charge",
        description:
          "If the rhinoceros moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
      },
    ],
    actions: [
      {
        name: "Gore",
        actionType: "action",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 7",
          },
          {
            name: "Damage",
            formula: "2d8 + 5",
          },
          {
            name: "Charge Damage",
            formula: "2d8",
          },
        ],
      },
    ],
  },
  {
    id: 76,
    name: "Riding Horse",
    description: "Riding horses are trained for battle and travel.",
    flavorText: "Riding horses are trained for battle and travel.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.25,

    hitDiceAmount: 2,
    speed: 60,
    STR: 16,
    DEX: 10,
    CON: 12,
    INT: 2,
    WIS: 11,
    CHA: 7,

    actions: [
      {
        name: "Hooves",
        actionType: "action",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "2d4 + 3",
          },
        ],
      },
    ],
  },
  {
    id: 77,
    name: "Saber-Toothed Tiger",
    description: "Saber-toothed tigers are large, prehistoric felines.",
    flavorText: "Saber-toothed tigers are large, prehistoric felines.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 2,

    hitDiceAmount: 7,
    speed: 40,
    STR: 18,
    DEX: 14,
    CON: 15,
    INT: 3,
    WIS: 12,
    CHA: 8,
    skillProficiencies: [Skill.PERCEPTION],
    skillExpertise: [Skill.STEALTH],
    features: [
      {
        name: "Keen Smell",
        description:
          "The tiger has advantage on Wisdom (Perception) checks that rely on smell.",
      },
      {
        name: "Pounce",
        description:
          "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "1d10 + 5",
          },
        ],
      },
      {
        name: "Claw",
        actionType: "action",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "2d6 + 5",
          },
        ],
      },
    ],
  },
  {
    id: 78,
    name: "Scorpion",
    description: "Scorpions are predatory arachnids.",
    flavorText: "Scorpions are predatory arachnids.",
    size: Size.TINY,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "Natural Armor",

    naturalArmorBonus: 1,

    hitDiceAmount: 1,
    speed: 10,
    STR: 2,
    DEX: 11,
    CON: 8,
    INT: 1,
    WIS: 8,
    CHA: 2,

    darkvision: 30,
    actions: [
      {
        name: "Sting",
        actionType: "action",
        description:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 2",
          },
          {
            name: "Damage",
            formula: "1",
          },
          {
            name: "Poison Damage",
            formula: "1d8",
          },
        ],
      },
    ],
  },
  {
    id: 79,
    name: "Sea Horse",
    description: "Sea horses are tiny fish with horse-like heads.",
    flavorText: "Sea horses are tiny fish with horse-like heads.",
    size: Size.TINY,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,

    hitDiceAmount: 1,
    speed: 0,
    swimmingSpeed: 20,
    STR: 1,
    DEX: 12,
    CON: 8,
    INT: 1,
    WIS: 10,
    CHA: 2,

    features: [
      {
        name: "Water Breathing",
        description: "The sea horse can breathe only underwater.",
      },
    ],
  },
  {
    id: 80,
    name: "Spider",
    description: "Spiders are small, eight-legged arachnids.",
    flavorText: "Spiders are small, eight-legged arachnids.",
    size: Size.TINY,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,

    hitDiceAmount: 1,
    speed: 20,
    climbingSpeed: 20,
    STR: 2,
    DEX: 14,
    CON: 8,
    INT: 1,
    WIS: 10,
    CHA: 2,
    skillProficiencies: [Skill.STEALTH],

    darkvision: 30,

    features: [
      {
        name: "Web Sense",
        description:
          "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.",
      },
      {
        name: "Web Walker",
        description:
          "The spider ignores movement restrictions caused by webbing.",
      },
      {
        name: "Spider Climb",
        description:
          "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1",
          },
          {
            name: "Poison Damage",
            formula: "1d4",
          },
        ],
      },
    ],
  },
  {
    id: 81,
    name: "Tiger",
    description: "Tigers are large, predatory cats.",
    flavorText: "Tigers are large, predatory cats.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 1,

    hitDiceAmount: 5,
    speed: 40,
    STR: 17,
    DEX: 15,
    CON: 14,
    INT: 3,
    WIS: 12,
    CHA: 8,
    skillProficiencies: [Skill.PERCEPTION],
    skillExpertise: [Skill.STEALTH],

    darkvision: 60,
    features: [
      {
        name: "Keen Smell",
        description:
          "The tiger has advantage on Wisdom (Perception) checks that rely on smell.",
      },
      {
        name: "Pounce",
        description:
          "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "1d10 + 3",
          },
        ],
      },
      {
        name: "Claw",
        actionType: "action",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "1d8 + 3",
          },
        ],
      },
    ],
  },
  {
    id: 82,
    name: "Vulture",
    description: "Vultures are large birds of prey that feed on carrion.",
    flavorText: "Vultures are large birds of prey that feed on carrion.",
    size: Size.MEDIUM,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,

    hitDiceAmount: 1,
    speed: 10,
    flyingSpeed: 50,
    STR: 7,
    DEX: 10,
    CON: 13,
    INT: 2,
    WIS: 12,
    CHA: 4,
    skillProficiencies: [Skill.PERCEPTION],
    actions: [
      {
        name: "Beak",
        actionType: "action",
        description:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 2",
          },
          {
            name: "Damage",
            formula: "1d4",
          },
        ],
      },
    ],
  },
  {
    id: 83,
    name: "Warhorse",
    description: "Warhorses are trained for battle.",
    flavorText: "Warhorses are trained for battle.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.5,

    hitDiceAmount: 3,
    speed: 60,
    STR: 18,
    DEX: 12,
    CON: 13,
    INT: 2,
    WIS: 12,
    CHA: 7,

    features: [
      {
        name: "Trampling Charge",
        description:
          "If the horse moves at least 20 feet straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action.",
      },
    ],
    actions: [
      {
        name: "Hooves",
        actionType: "action",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "2d6 + 4",
          },
        ],
      },
    ],
  },
  {
    id: 84,
    name: "Weasel",
    description: "Weasels are small, furry mammals.",
    flavorText: "Weasels are small, furry mammals.",
    size: Size.TINY,
    creatureType: CreatureType.BEAST,
    challengeRating: 0,

    hitDiceAmount: 1,
    speed: 30,
    STR: 3,
    DEX: 16,
    CON: 8,
    INT: 2,
    WIS: 12,
    CHA: 3,
    skillProficiencies: [Skill.PERCEPTION, Skill.STEALTH],

    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "1",
          },
        ],
      },
    ],
    features: [
      {
        name: "Keen Hearing and Smell",
        description:
          "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
      },
    ],
  },
  {
    id: 85,
    name: "Winter Wolf",
    description:
      "The arctic-­‐‑dwelling winter wolf is as large as a dire wolf but has snow-­‐‑white fur and pale blue eyes. Frost giants use these evil creatures as guards and hunting companions, putting the wolves’ deadly breath weapon to use against their foes. Winter wolves communicate with one another using growls and barks, but they speak Common and Giant well enough to follow simple conversations.",
    flavorText:
      "The arctic-­‐‑dwelling winter wolf is as large as a dire wolf but has snow-­‐‑white fur and pale blue eyes.",
    size: Size.LARGE,
    creatureType: CreatureType.MONSTROSITY,
    challengeRating: 3,
    alignmentOptions: [Alignment.NEUTRAL_EVIL],
    hitDiceAmount: 10,
    speed: 50,
    STR: 18,
    DEX: 13,
    CON: 14,
    INT: 7,
    WIS: 12,
    CHA: 8,
    skillProficiencies: [Skill.STEALTH],
    skillExpertise: [Skill.PERCEPTION],
    damageImmunities: [DamageTypes.COLD],
    features: [
      {
        name: "Keen Hearing and Smell",
        description:
          "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
      },
      {
        name: "Pack Tactics",
        description:
          "The wolf has advantage on an attack roll against a creature if at least one of the wolf’s allies is within 5 feet of the creature and the ally isn’t incapacitated.",
      },
      {
        name: "Snow Camouflage",
        description:
          "The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "2d6 + 4",
          },
        ],
      },
      {
        name: "Cold Breath (Recharge 5-6)",
        actionType: "action",
        description:
          "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one.",
        rolls: [
          {
            name: "Damage",
            formula: "4d8",
          },
          {
            name: "Recharge",
            formula: "1d6",
          },
        ],
      },
    ],
  },
  {
    id: 86,
    name: "Wolf",
    description:
      "Wolves are pack hunters known for their persistence and cunning.",
    flavorText:
      "Wolves are pack hunters known for their persistence and cunning.",
    size: Size.MEDIUM,
    creatureType: CreatureType.BEAST,
    challengeRating: 0.25,

    hitDiceAmount: 2,
    speed: 40,
    STR: 12,
    DEX: 15,
    CON: 12,
    INT: 3,
    WIS: 12,
    CHA: 6,

    skillProficiencies: [Skill.PERCEPTION, Skill.STEALTH],

    features: [
      {
        name: "Keen Hearing and Smell",
        description:
          "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
      },
      {
        name: "Pack Tactics",
        description:
          "The wolf has advantage on an attack roll against a creature if at least one of the wolf’s allies is within 5 feet of the creature and the ally isn’t incapacitated.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "2d4 + 2",
          },
        ],
      },
    ],
  },
  {
    id: 87,
    name: "Worg",
    description:
      "A worg is an evil predator that delights in hunting and devouring creatures weaker than itself. Cunning and malevolent, worgs roam across the remote wilderness or are raised by goblins and hobgoblins. Those creatures use worgs as mounts, but a worg will turn on its rider if it feels mistreated or malnourished. Worgs speak in their own language and Goblin, and a few learn to speak Common as well.",
    flavorText:
      "A worg is an evil predator that delights in hunting and devouring creatures weaker than itself.",
    size: Size.LARGE,
    creatureType: CreatureType.MONSTROSITY,
    challengeRating: 1,
    alignmentOptions: [Alignment.NEUTRAL_EVIL],

    hitDiceAmount: 4,
    speed: 50,
    STR: 16,
    DEX: 13,
    CON: 13,
    INT: 7,
    WIS: 11,
    CHA: 8,
    skillExpertise: [Skill.PERCEPTION],
    languageDescription: "Goblin, Worg",
    features: [
      {
        name: "Keen Hearing and Smell",
        description:
          "The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
      },
    ],
    actions: [
      {
        name: "Bite",
        actionType: "action",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "2d6 + 3",
          },
        ],
      },
    ],
  },
  {
    id: 88,
    name: "Acolyte",
    alignmentDescription: "Any alignment",
    alignmentOptions: Object.values(Alignment),
    description:
      "Acolytes are junior members of a clergy, usually answerable to a priest. They perform a variety of functions in a temple and are granted minor spellcasting power by their deities.",
    flavorText:
      "Acolytes are junior members of a clergy, usually answerable to a priest.",
    size: Size.MEDIUM,
    creatureType: CreatureType.HUMANOID,
    challengeRating: 0.25,

    hitDiceAmount: 2,
    speed: 30,
    STR: 10,
    DEX: 10,

    CON: 10,
    INT: 10,
    WIS: 14,
    CHA: 11,

    skillProficiencies: [Skill.RELIGION],
    skillExpertise: [Skill.MEDICINE],
    languageDescription: "Any one language (usually Common)",

    spellcastingAbility: Ability.WIS,
    casterLevel: 1,
  },
  {
    id: 89,
    alignmentDescription: "Any alignment",
    alignmentOptions: Object.values(Alignment),
    name: "Archmage",
    description:
      "Archmages are powerful (and usually quite old) spellcasters dedicated to the study of the arcane arts. Benevolent ones counsel kings and queens, while evil ones rule as tyrants and pursue lichdom. Those who are neither good nor evil sequester themselves in remote towers to practice their magic without interruption. \nAn archmage typically has one or more apprentice mages, and an archmage’s abode has numerous magical wards and guardians to discourage interlopers.",
    flavorText:
      "Archmages are powerful (and usually quite old) spellcasters dedicated to the study of the arcane arts.",
    size: Size.MEDIUM,
    creatureType: CreatureType.HUMANOID,
    saveProficiencies: [Ability.INT, Ability.WIS],
    challengeRating: 12,
    armorClassDescription: "15 with mage armor",

    hitDiceAmount: 18,
    speed: 30,
    STR: 10,
    DEX: 14,
    CON: 12,
    INT: 20,
    WIS: 15,
    CHA: 16,
    skillExpertise: [Skill.ARCANA, Skill.HISTORY],

    languageDescription: "Any six languages",

    spellcastingAbility: Ability.INT,
    casterLevel: 18,
    features: [
      {
        name: "Magic Resistance",
        description:
          "The archmage has advantage on saving throws against spells and other magical effects.",
      },
      {
        name: "Spell Damage Resistance",
        description: "The archmage has resistance to damage from spells.",
      },
    ],
  },
  {
    id: 90,
    alignmentDescription: "Any non-good alignment",
    alignmentOptions: [
      Alignment.NEUTRAL_EVIL,
      Alignment.LAWFUL_EVIL,
      Alignment.CHAOTIC_EVIL,
      Alignment.CHAOTIC_NEUTRAL,
      Alignment.LAWFUL_NEUTRAL,
      Alignment.TRUE_NEUTRAL,
    ],
    name: "Assassin",
    description:
      "Trained in the use of poison, assassins are remorseless killers who work for nobles, guildmasters, sovereigns, and anyone else who can afford them.",
    flavorText: "Assassins are killers who eliminate targets for pay.",
    size: Size.MEDIUM,
    creatureType: CreatureType.HUMANOID,
    challengeRating: 8,
    armorClassDescription: "Studded Leather",
    armorEquippedId: itemIds.studdedLeatherArmor,

    hitDiceAmount: 12,
    speed: 30,
    STR: 11,
    DEX: 16,
    CON: 14,
    INT: 13,
    WIS: 11,
    CHA: 10,
    skillProficiencies: [Skill.ACROBATICS, Skill.DECEPTION, Skill.PERCEPTION],
    skillExpertise: [Skill.STEALTH],
    saveProficiencies: [Ability.DEX, Ability.INT],

    damageResistances: [DamageTypes.POISON],
    languageDescription: "Thieves' Cant plus any two languages",
    features: [
      {
        name: "Assassinate",
        description:
          "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit.",
      },
      {
        name: "Evasion",
        description:
          "When subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.",
      },
      {
        name: "Sneak Attack",
        description:
          "Once per turn, the assassin deals an extra 14 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll.",
        rolls: [
          {
            name: "Sneak Attack Damage",
            formula: "4d6",
          },
        ],
      },
      {
        name: "Poison",
        description:
          "When an Assassin lands an attack, targets must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        actionType: "action",
        description: "The assassin makes two shortsword attacks.",
      },
    ],
  },
  {
    id: 91,
    name: "Bandit",
    alignmentDescription: "Any non-lawful alignment",
    alignmentOptions: [
      Alignment.CHAOTIC_EVIL,
      Alignment.CHAOTIC_NEUTRAL,
      Alignment.NEUTRAL_EVIL,
      Alignment.CHAOTIC_GOOD,
      Alignment.NEUTRAL_GOOD,
      Alignment.TRUE_NEUTRAL,
    ],
    description:
      "Bandits rove in gangs and are sometimes led by thugs, veterans, or spellcasters. Not all bandits are evil. Oppression, drought, disease, or famine can often drive otherwise honest folk to a life of banditry.\nPirates are bandits of the high seas. They might be freebooters interested only in treasure and murder, or they might be privateers sanctioned by the crown to attack and plunder an enemy nation’s vessels.",
    flavorText:
      "Bandits rove in gangs and are sometimes led by thugs, veterans, or spellcasters. ",
    size: Size.MEDIUM,
    armorClassDescription: "Leather Armor",
    armorEquippedId: itemIds.leatherArmor,

    hitDiceAmount: 2,
    speed: 30,
    STR: 11,
    DEX: 12,
    CON: 12,
    INT: 10,
    WIS: 10,
    CHA: 10,

    languageDescription: "Any one Language (usually Common)",
    challengeRating: 0.125,
    creatureType: CreatureType.HUMANOID,
  },
  {
    id: 92,
    name: "Bandit Captain",
    alignmentDescription: "Any non-lawful alignment",
    alignmentOptions: [
      Alignment.CHAOTIC_EVIL,
      Alignment.CHAOTIC_NEUTRAL,
      Alignment.NEUTRAL_EVIL,
      Alignment.CHAOTIC_GOOD,
      Alignment.NEUTRAL_GOOD,
      Alignment.TRUE_NEUTRAL,
    ],
    description:
      "It takes a strong personality, ruthless cunning, and a silver tongue to keep a gang of bandits in line. The bandit captain has these qualities in spades\nIn addition to managing a crew of selfish malcontents, the pirate captain is a variation of the bandit captain, with a ship to protect and command. To keep the crew in line, the captain must mete out rewards and punishment on a regular basis.\nMore than treasure, a bandit captain or pirate captain craves infamy. A prisoner who appeals to the captain’s vanity or ego is more likely to be treated fairly than a prisoner who does not or claims not to know anything of the captain’s colorful reputation.",
    flavorText:
      "It takes a strong personality, ruthless cunning, and a silver tongue to keep a gang of bandits in line.",
    size: Size.MEDIUM,
    creatureType: CreatureType.HUMANOID,

    armorClassDescription: "Studded Leather",
    armorEquippedId: itemIds.studdedLeatherArmor,

    hitDiceAmount: 10,
    speed: 30,
    STR: 15,
    DEX: 16,
    CON: 14,
    INT: 14,
    WIS: 11,
    CHA: 14,

    skillProficiencies: [Skill.DECEPTION, Skill.ATHLETICS],
    saveProficiencies: [Ability.STR, Ability.DEX, Ability.WIS],

    languageDescription: "Any two languages",

    challengeRating: 2,
    actions: [
      {
        name: "Multiattack",
        actionType: "action",
        description:
          "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers.",
      },

      {
        name: "Parry",
        actionType: "reaction",
        description:
          "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon",
      },
    ],
  },
  {
    id: 93,
    name: "Berserker",
    alignmentDescription: "Any Chaotic alignment",
    alignmentOptions: [
      Alignment.CHAOTIC_EVIL,
      Alignment.CHAOTIC_NEUTRAL,
      Alignment.CHAOTIC_GOOD,
    ],
    description:
      "Hailing from uncivilized lands, unpredictable berserkers come together in war parties and seek conflict wherever they can find it.",
    flavorText:
      "Hailing from uncivilized lands, unpredictable berserkers come together in war parties.",
    size: Size.MEDIUM,
    creatureType: CreatureType.HUMANOID,

    armorClassDescription: "Hide Armor",
    armorEquippedId: itemIds.hideArmor,

    hitDiceAmount: 9,
    speed: 30,
    STR: 16,
    DEX: 12,
    CON: 16,
    INT: 9,
    WIS: 11,
    CHA: 9,

    challengeRating: 2,
    features: [
      {
        name: "Reckless",
        description:
          "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn.",
      },
    ],
  },
  {
    id: 94,
    name: "Commoner",
    alignmentDescription: "Any alignment",
    alignmentOptions: Object.values(Alignment),
    description:
      "Commoners include peasants, serfs, slaves, servants, pilgrims, merchants, artisans, and hermits.",
    flavorText:
      "Commoners include peasants, serfs, slaves, servants, pilgrims, merchants, artisans, and hermits.",
    size: Size.MEDIUM,
    creatureType: CreatureType.HUMANOID,

    hitDiceAmount: 1,
    speed: 30,
    STR: 10,
    DEX: 10,
    CON: 10,
    INT: 10,
    WIS: 10,
    CHA: 10,

    challengeRating: 0,
    languageDescription: "Any one language (usually Common)",
  },
  {
    id: 95,
    name: "Cultist",
    alignmentDescription: "Any non-good alignment",
    alignmentOptions: [
      Alignment.LAWFUL_EVIL,
      Alignment.NEUTRAL_EVIL,
      Alignment.CHAOTIC_EVIL,
      Alignment.CHAOTIC_NEUTRAL,
      Alignment.LAWFUL_NEUTRAL,
      Alignment.TRUE_NEUTRAL,
    ],
    description:
      "Cultists swear allegiance to dark powers such as elemental princes, demon lords, or archdevils. Most conceal their loyalties to avoid being ostracized, imprisoned, or executed for their beliefs. Unlike evil acolytes, cultists often show signs of madness in their beliefs and practices.",
    flavorText:
      "Cultists are fanatical followers of a dark god or a powerful evil.",
    size: Size.MEDIUM,
    creatureType: CreatureType.HUMANOID,

    armorClassDescription: "Leather Armor",
    armorEquippedId: itemIds.leatherArmor,

    hitDiceAmount: 2,
    speed: 30,
    STR: 11,
    DEX: 12,
    CON: 10,
    INT: 10,
    WIS: 11,
    CHA: 10,
    skillProficiencies: [Skill.DECEPTION, Skill.RELIGION],

    challengeRating: 0.125,
    languageDescription: "Any one language (usually Common)",
    features: [
      {
        name: "Dark Devotion",
        description:
          "The cultist has advantage on saving throws against being charmed or frightened.",
      },
    ],
  },
  {
    id: 96,
    name: "Cult Fanatic",
    alignmentDescription: "Any non-good alignment",
    alignmentOptions: [
      Alignment.LAWFUL_EVIL,
      Alignment.NEUTRAL_EVIL,
      Alignment.CHAOTIC_EVIL,
      Alignment.CHAOTIC_NEUTRAL,
      Alignment.LAWFUL_NEUTRAL,
      Alignment.TRUE_NEUTRAL,
    ],
    description:
      "Fanatics are often part of a cult’s leadership, using their charisma and dogma to influence and prey on those of weak will. Most are interested in personal power above all else.",
    flavorText: "Fanatics are often part of a cult’s leadership.",
    size: Size.MEDIUM,
    creatureType: CreatureType.HUMANOID,

    armorClassDescription: "Leather Armor",
    armorEquippedId: itemIds.leatherArmor,

    hitDiceAmount: 6,
    speed: 30,
    STR: 11,
    DEX: 14,
    CON: 12,
    INT: 10,
    WIS: 14,
    CHA: 14,
    skillProficiencies: [Skill.DECEPTION, Skill.RELIGION, Skill.PERSUASION],

    challengeRating: 2,
    spellcastingAbility: Ability.WIS,
    casterLevel: 4,
    actions: [
      {
        name: "Multiattack",
        actionType: "action",
        description: "The fanatic makes two melee attacks.",
      },
    ],

    features: [
      {
        name: "Dark Devotion",
        description:
          "The fanatic has advantage on saving throws against being charmed or frightened.",
      },
    ],
  },
  {
    id: 97,
    name: "Druid",
    alignmentDescription: "Any alignment",
    alignmentOptions: Object.values(Alignment),
    description:
      "Druids dwell in forests and other secluded wilderness locations, where they protect the natural world from monsters and the encroachment of civilization. Some are tribal shamans who heal the sick, pray to animal spirits, and provide spiritual guidance.",
    flavorText:
      "Druids dwell in forests and other secluded wilderness locations.",

    hitDiceAmount: 5,
    armorClassDescription: "16 with barkskin",
    speed: 30,
    STR: 10,
    DEX: 12,
    CON: 13,
    INT: 12,
    WIS: 15,
    CHA: 11,
    skillProficiencies: [Skill.MEDICINE, Skill.NATURE, Skill.PERCEPTION],

    challengeRating: 2,
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    spellcastingAbility: Ability.WIS,
    casterLevel: 4,
    languageDescription: "Druidic plus any two languages",
  },
  {
    id: 98,
    alignmentDescription: "Any alignment",
    alignmentOptions: Object.values(Alignment),
    name: "Gladiator",
    description:
      "Gladiators battle for the entertainment of raucous crowds. Some gladiators are brutal pit fighters who treat each match as a life-­‐‑or-­‐‑death struggle, while others are professional duelists who command huge fees but rarely fight to the death.",
    flavorText: "Gladiators battle for the entertainment of raucous crowds.",
    size: Size.MEDIUM,
    creatureType: CreatureType.HUMANOID,
    challengeRating: 5,

    armorClassDescription: "Studded Leather, shield",
    armorEquippedId: itemIds.studdedLeatherArmor,
    shieldEquippedId: itemIds.shield,

    hitDiceAmount: 15,
    speed: 30,
    STR: 18,
    DEX: 15,
    CON: 16,
    INT: 10,
    WIS: 12,
    CHA: 15,
    skillProficiencies: [Skill.INTIMIDATION],
    skillExpertise: [Skill.ATHLETICS],
    saveProficiencies: [Ability.STR, Ability.CON, Ability.DEX],
    features: [
      {
        name: "Brave",
        description:
          "The gladiator has advantage on saving throws against being frightened.",
      },
      {
        name: "Brute",
        description:
          "A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack).",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        actionType: "action",
        description:
          "The gladiator makes three melee attacks or two ranged attacks.",
      },

      {
        name: "Shield Bash",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9 (2d4 + 4) bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 7",
          },
          {
            name: "Damage",
            formula: "2d4 + 4",
          },
        ],
        actionType: "action",
      },
      {
        name: "Parry",
        actionType: "reaction",
        description:
          "The gladiator adds 3 to its AC against one melee attack that would hit it. To do so, the gladiator must see the attacker and be wielding a melee weapon.",
      },
    ],
  },
  {
    id: 99,
    name: "Guard",
    alignmentDescription: "Any alignment",
    alignmentOptions: Object.values(Alignment),
    description:
      "Guards include members of a city watch, sentries in a citadel or fortified town, and the bodyguards of merchants and nobles.",
    flavorText:
      "Guards include members of a city watch, sentries in a citadel or fortified town.",
    size: Size.MEDIUM,
    creatureType: CreatureType.HUMANOID,
    challengeRating: 0.125,

    armorClassDescription: "Chain Shirt, shield",
    armorEquippedId: itemIds.chainShirt,
    shieldEquippedId: itemIds.shield,

    hitDiceAmount: 2,
    speed: 30,
    STR: 13,
    DEX: 12,
    CON: 12,
    INT: 10,
    WIS: 11,
    CHA: 10,
    skillProficiencies: [Skill.PERCEPTION],
    languageDescription: "Any one language (usually Common)",
  },
  {
    id: 100,
    name: "Knight",
    alignmentDescription: "Any alignment",
    alignmentOptions: Object.values(Alignment),
    description:
      "Knights are warriors who pledge service to rulers, religious orders, and noble causes. A knight’s alignment determines the extent to which a pledge is honored. Whether undertaking a quest or patrolling a realm, a knight often travels with an entourage that includes squires and hirelings who are commoners.",
    flavorText:
      "Knights are warriors who pledge service to rulers, religious orders, and noble causes.",
    size: Size.MEDIUM,
    creatureType: CreatureType.HUMANOID,
    challengeRating: 3,

    armorClassDescription: "Plate",
    armorEquippedId: itemIds.plateArmor,

    hitDiceAmount: 8,
    speed: 30,
    STR: 16,
    DEX: 11,
    CON: 14,
    INT: 11,
    WIS: 11,
    CHA: 15,
    saveProficiencies: [Ability.WIS, Ability.CON],

    languageDescription: "Any one language (usually Common)",
    features: [
      {
        name: "Brave",
        description:
          "The knight has advantage on saving throws against being frightened.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        actionType: "action",
        description: "The knight makes two melee attacks",
      },

      {
        name: "Leadership (Recharges after a Short or Long Rest)",
        actionType: "action",
        description:
          "For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated.",
      },
      {
        name: "Parry",
        actionType: "reaction",
        description:
          "The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon.",
      },
    ],
  },
  {
    id: 101,
    name: "Mage",
    alignmentDescription: "Any alignment",
    alignmentOptions: Object.values(Alignment),
    description:
      "Mages spend their lives in the study and practice of magic. Good-­‐‑aligned mages offer counsel to nobles and others in power, while evil mages dwell in isolated sites to perform unspeakable experiments without interference.",
    flavorText: "Mages spend their lives in the study and practice of magic.",

    hitDiceAmount: 9,
    armorClassDescription: "15 with mage armor",
    speed: 30,
    STR: 9,
    DEX: 14,
    CON: 11,
    INT: 17,
    WIS: 12,
    CHA: 11,
    skillProficiencies: [Skill.ARCANA, Skill.HISTORY],

    languageDescription: "Any four languages",
    saveProficiencies: [Ability.INT, Ability.WIS],

    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    challengeRating: 6,
    spellcastingAbility: Ability.INT,
  },
  {
    id: 102,
    name: "Noble",
    alignmentDescription: "Any alignment",
    alignmentOptions: Object.values(Alignment),

    description:
      "Nobles wield great authority and influence as members of the upper class, possessing wealth and connections that can make them as powerful as monarchs and generals. A noble often travels in the company of guards, as well as servants who are commoners.\nThe noble’s statistics can also be used to represent courtiers who aren’t of noble birth.",
    flavorText:
      "Nobles wield great authority and influence as members of the upper class.",
    size: Size.MEDIUM,
    creatureType: CreatureType.HUMANOID,
    challengeRating: 0.125,

    armorClassDescription: "Breastplate",
    armorEquippedId: itemIds.breastplate,

    hitDiceAmount: 2,
    speed: 30,
    STR: 11,
    DEX: 12,
    CON: 11,
    INT: 12,
    WIS: 14,
    CHA: 16,
    skillProficiencies: [Skill.DECEPTION, Skill.PERSUASION, Skill.INSIGHT],

    languageDescription: "Any two languages",
    actions: [
      {
        name: "Parry",
        actionType: "reaction",
        description:
          "The noble adds 2 to its AC against one melee attack that would hit it. To do so, the noble must see the attacker and be wielding a melee weapon.",
      },
    ],
  },
  {
    id: 103,
    name: "Priest",
    alignmentDescription: "Any alignment",
    alignmentOptions: Object.values(Alignment),

    description:
      "Priests bring the teachings of their gods to the common folk. They are the spiritual leaders of temples and shrines and often hold positions of influence in their communities. Evil priests might work openly under a tyrant, or they might be the leaders of religious sects hidden in the shadows of good society, overseeing depraved rites. A priest typically has one or more acolytes to help with religious ceremonies and other sacred duties",
    flavorText: "Priests bring the teachings of their gods to the common folk.",
    size: Size.MEDIUM,
    creatureType: CreatureType.HUMANOID,
    challengeRating: 2,

    armorClassDescription: "Chain Mail",
    armorEquippedId: itemIds.chainMail,

    hitDiceAmount: 5,
    speed: 25,
    STR: 10,
    DEX: 10,
    CON: 12,
    INT: 13,
    WIS: 16,
    CHA: 13,

    skillExpertise: [Skill.MEDICINE, Skill.RELIGION],
    skillProficiencies: [Skill.PERSUASION],
    languageDescription: "Any two languages",
    spellcastingAbility: Ability.WIS,
    casterLevel: 5,
    actions: [
      {
        name: "Divine Eminence",
        actionType: "bonus action",
        description:
          "As a bonus action, the priest can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If the priest expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st.",
        rolls: [
          {
            name: "Damage",
            formula: "3d6",
          },
        ],
      },
    ],
  },
  {
    id: 104,
    name: "Scout",
    alignmentDescription: "Any alignment",
    alignmentOptions: Object.values(Alignment),
    description:
      "Scouts are skilled hunters and trackers who offer their services for a fee. Most hunt wild game, but a few work as bounty hunters, serve as guides, or provide military reconnaissance.",
    flavorText:
      "Scouts are skilled hunters and trackers who offer their services for a fee.",

    armorClassDescription: "Leather Armor",
    armorEquippedId: itemIds.leatherArmor,

    hitDiceAmount: 3,
    speed: 30,
    STR: 11,
    DEX: 14,
    CON: 12,
    INT: 11,
    WIS: 13,
    CHA: 11,
    skillExpertise: [
      Skill.PERCEPTION,
      Skill.STEALTH,
      Skill.SURVIVAL,
      Skill.NATURE,
    ],

    languageDescription: "Any one languages (usually Common)",
    challengeRating: 0.5,
    creatureType: CreatureType.HUMANOID,
    size: Size.MEDIUM,
    features: [
      {
        name: "Keen Hearing and Sight",
        description:
          "The scout has advantage on Wisdom (Perception) checks that rely on hearing or sight.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        actionType: "action",
        description: "The scout makes two melee attacks or two ranged attacks.",
      },
    ],
  },
  {
    id: 105,
    name: "Spy",
    alignmentDescription: "Any alignment",
    alignmentOptions: Object.values(Alignment),
    description:
      "Rulers, nobles, merchants, guildmasters, and other wealthy individuals use spies to gain the upper hand in a world of cutthroat politics. A spy is trained to secretly gather information. Loyal spies would rather die than divulge information that could compromise them or their employers.",
    flavorText:
      "Rulers, nobles, merchants, guildmasters, and other wealthy individuals use spies to gain the upper hand in a world of cutthroat politics.",
    size: Size.MEDIUM,
    creatureType: CreatureType.HUMANOID,
    challengeRating: 1,

    hitDiceAmount: 6,
    speed: 30,
    STR: 10,
    DEX: 15,

    CON: 10,
    INT: 12,
    WIS: 14,
    CHA: 16,
    skillProficiencies: [
      Skill.DECEPTION,
      Skill.INSIGHT,
      Skill.PERSUASION,
      Skill.SLEIGHT_OF_HAND,
      Skill.STEALTH,
    ],
    skillExpertise: [Skill.PERCEPTION, Skill.INVESTIGATION],

    languageDescription: "Any two languages",
    features: [
      {
        name: "Cunning Action",
        description:
          "On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action.",
      },
      {
        name: "Sneak Attack (1/Turn)",
        description:
          "Once per turn, the spy can deal an extra 7 (2d6) damage to one creature it hits with an attack if it has advantage on the attack roll. The spy doesn’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and the spy doesn’t have disadvantage on the attack roll.",
        rolls: [
          {
            name: "Damage",
            formula: "2d6",
          },
        ],
      },
    ],
    actions: [
      {
        name: "Multiattack",
        actionType: "action",
        description: "The spy makes two melee attacks.",
      },
    ],
  },
  {
    id: 106,
    name: "Thug",
    alignmentDescription: "Any non-good alignment",
    alignmentOptions: [
      Alignment.LAWFUL_EVIL,
      Alignment.NEUTRAL_EVIL,
      Alignment.CHAOTIC_EVIL,
      Alignment.CHAOTIC_NEUTRAL,
      Alignment.LAWFUL_NEUTRAL,
      Alignment.TRUE_NEUTRAL,
    ],
    description:
      "Thugs are ruthless enforcers skilled at intimidation and violence. They work for money and have few scruples.",
    flavorText:
      "Thugs are ruthless enforcers skilled at intimidation and violence.",
    size: Size.MEDIUM,
    creatureType: CreatureType.HUMANOID,

    armorClassDescription: "Leather Armor",
    armorEquippedId: itemIds.leatherArmor,

    hitDiceAmount: 5,
    speed: 30,
    STR: 15,
    DEX: 11,
    CON: 14,
    INT: 10,
    WIS: 10,
    CHA: 11,
    skillProficiencies: [Skill.INTIMIDATION],

    challengeRating: 0.5,
    features: [
      {
        name: "Pack Tactics",
        description:
          "The thug has advantage on an attack roll against a creature if at least one of the thug’s allies is within 5 feet of the creature and the ally isn’t incapacitated.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        actionType: "action",
        description: "The thug makes two melee attacks.",
      },
    ],
  },
  {
    id: 107,
    name: "Tribal Warrior",
    alignmentDescription: "Any alignment",
    alignmentOptions: Object.values(Alignment),

    description:
      "Tribal warriors live beyond civilization, most oftensubsisting on fishing and hunting. Each tribe acts in accordance with the wishes of its chief, who is the greatest or oldest warrior of the tribe or a tribe member blessed by the gods",
    flavorText:
      "Tribal warriors live beyond civilization, most oftensubsisting on fishing and hunting.",
    size: Size.MEDIUM,
    creatureType: CreatureType.HUMANOID,

    armorClassDescription: "Hide Armor",
    armorEquippedId: itemIds.hideArmor,

    hitDiceAmount: 2,
    speed: 30,
    STR: 13,
    DEX: 11,
    CON: 12,
    INT: 8,
    WIS: 11,
    CHA: 8,

    challengeRating: 0.125,
    languageDescription: "Any one language (usually Common)",
    features: [
      {
        name: "Pack Tactics",
        description:
          "The warrior has advantage on an attack roll against a creature if at least one of the warrior’s allies is within 5 feet of the creature and the ally isn’t incapacitated.",
      },
    ],
  },
  {
    id: 108,
    name: "Veteran",
    alignmentDescription: "Any alignment",
    alignmentOptions: Object.values(Alignment),
    description:
      "Veterans are professional fighters that take up arms for pay or to protect something they believe in or value. Their ranks include soldiers retired from long service and warriors who never served anyone but themselves.",
    flavorText: "Veterans are professional fighters that take up arms for pay.",
    size: Size.MEDIUM,
    creatureType: CreatureType.HUMANOID,
    challengeRating: 3,

    armorClassDescription: "Splint",
    armorEquippedId: itemIds.splintArmor,

    hitDiceAmount: 9,
    speed: 30,
    STR: 16,
    DEX: 13,
    CON: 14,
    INT: 10,
    WIS: 11,
    CHA: 10,
    skillProficiencies: [Skill.ATHLETICS, Skill.PERCEPTION],

    languageDescription: "Any one language (usually Common)",
    actions: [
      {
        name: "Multiattack",
        actionType: "action",
        description:
          "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack.",
      },
    ],
  },
  {
    id: 109,
    name: "Aboleth",
    description:
      "Aboleths are large aberrations that use their psionic powers to enslave other creatures.",
    flavorText:
      "Aboleths are large aberrations that use their psionic powers to enslave other creatures.",
    size: Size.LARGE,
    creatureType: CreatureType.ABERRATION,
    alignmentOptions: [Alignment.LAWFUL_EVIL],
    challengeRating: 10,
    armorClassDescription: "natural armor",
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    naturalArmorBonus: 8,
    hitDiceAmount: 18,
    speed: 10,
    swimmingSpeed: 40,
    STR: 21,
    DEX: 9,
    CON: 15,
    INT: 18,
    WIS: 15,
    CHA: 18,
    skillExpertise: [Skill.HISTORY, Skill.PERCEPTION],
    saveProficiencies: [Ability.CON, Ability.INT, Ability.WIS],
    darkvision: 120,
    languageDescription: "Deep Speech, telepathy 120 ft.",
    features: [
      {
        name: "Amphibious",
        description: "The aboleth can breathe air and water.",
      },
      {
        name: "Mucous Cloud",
        description:
          "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.",
      },
      {
        name: "Probing Telepathy",
        description:
          "If a creature communicates telepathically with the aboleth, the aboleth learns the creature’s greatest desires if the aboleth can see the creature.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description: "The aboleth makes three tentacle attacks.",
        actionType: "action",
      },
      {
        name: "Tentacle",
        actionType: "action",
        description:
          "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature’s skin becomes translucent and slimy, the creature can’t regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-­‐curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 9",
          },
          {
            name: "Damage",
            formula: "2d6 + 5",
          },
          {
            name: "Acid Damage",
            formula: "1d12",
          },
        ],
      },
      {
        name: "Tail",
        actionType: "action",
        description:
          "Melee Weapon Attack: +9 to hit, reach 10 ft. one target. Hit: 15 (3d6 + 5) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 9",
          },
          {
            name: "Damage",
            formula: "3d6 + 5",
          },
        ],
      },
      {
        name: "Enslave (3/Day)",
        actionType: "action",
        description:
          "The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth’s control and can’t take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.",
      },
    ],
    legendaryActionAmount: 3,
    legendaryActions: [
      {
        name: "Detect",
        description: "The aboleth makes a Wisdom (Perception) check.",
        cost: 1,
      },
      {
        name: "Tail Swipe",
        description: "The aboleth makes one tail attack.",
        cost: 1,
      },
      {
        name: "Psychic Drain (Costs 2 Actions)",
        description:
          "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.",
        cost: 2,
        rolls: [
          {
            name: "Damage",
            formula: "3d6",
          },
        ],
      },
    ],
  },
  {
    id: 110,
    name: "Deva",
    description:
      "Devas are shapeshifting celestial beings of great power and lawful good alignment.",
    flavorText:
      "Devas are shapeshifting angelic beings of great power and lawful good alignment.",
    size: Size.MEDIUM,
    creatureType: CreatureType.CELESTIAL,
    alignmentOptions: [Alignment.LAWFUL_GOOD],
    challengeRating: 10,
    naturalArmorBonus: 3,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    armorClassDescription: "natural armor",
    hitDiceAmount: 16,
    speed: 30,
    flyingSpeed: 90,
    STR: 18,
    DEX: 18,
    CON: 18,
    INT: 17,
    WIS: 20,
    CHA: 20,
    saveProficiencies: [Ability.WIS, Ability.CHA],
    skillProficiencies: [Skill.INSIGHT, Skill.PERCEPTION],
    damageResistances: [
      DamageTypes.RADIANT,
      DamageTypes.NON_MAGICAL_BLUDGEONING,
      DamageTypes.NON_MAGICAL_PIERCING,
      DamageTypes.NON_MAGICAL_SLASHING,
    ],
    conditionImmunities: [
      Condition.CHARMED,
      Condition.EXHAUSTION,
      Condition.FRIGHTENED,
    ],
    darkvision: 120,
    languageDescription: "All, telepathy 120 ft.",

    spellcastingAbility: Ability.CHA,

    features: [
      {
        name: "Angelic Weapons",
        description:
          "The deva’s weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage.",
        rolls: [
          {
            name: "Angelic Weapon Damage",
            formula: "4d8",
          },
        ],
      },
      {
        name: "Magic Resistance",
        description:
          "The deva has advantage on saving throws against spells and other magical effects.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description: "The deva makes two melee attacks.",
        actionType: "action",
      },
      {
        name: "Healing Touch (3/Day)",
        actionType: "action",
        description:
          "The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
        rolls: [
          {
            name: "Healing",
            formula: "4d8 + 2",
          },
        ],
      },
      {
        name: "Change Shape",
        actionType: "action",
        description:
          "The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva’s choice).\n\nIn a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks.",
      },
    ],
  },
  {
    id: 111,
    name: "Planetar",
    description: "Planetars are angelic celestial beings of great power.",
    flavorText: "Planetars are angelic celestial beings of great power.",
    size: Size.LARGE,
    creatureType: CreatureType.CELESTIAL,
    alignmentOptions: [Alignment.LAWFUL_GOOD],
    challengeRating: 16,
    armorClassDescription: "natural armor",
    naturalArmorBonus: 4,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    hitDiceAmount: 16,
    speed: 40,
    flyingSpeed: 120,
    STR: 24,
    DEX: 20,
    CON: 24,
    INT: 19,
    WIS: 22,
    CHA: 25,
    saveProficiencies: [Ability.WIS, Ability.CHA, Ability.CON],
    skillProficiencies: [Skill.PERCEPTION],
    damageResistances: [
      DamageTypes.RADIANT,
      DamageTypes.NON_MAGICAL_BLUDGEONING,
      DamageTypes.NON_MAGICAL_PIERCING,
      DamageTypes.NON_MAGICAL_SLASHING,
    ],
    conditionImmunities: [
      Condition.CHARMED,
      Condition.EXHAUSTION,
      Condition.FRIGHTENED,
    ],
    trueSight: 120,
    languageDescription: "All, telepathy 120 ft.",
    spellcastingAbility: Ability.CHA,
    features: [
      {
        name: "Angelic Weapons",
        description:
          "The planetar’s weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage.",
        rolls: [
          {
            name: "Angelic Weapon Damage",
            formula: "5d8",
          },
        ],
      },
      {
        name: "Divine Awareness",
        description: "The planetar knows if it hears a lie.",
      },
      {
        name: "Magic Resistance",
        description:
          "The planetar has advantage on saving throws against spells and other magical effects.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description: "The planetar makes two melee attacks.",
        actionType: "action",
      },

      {
        name: "Healing Touch (4/Day)",
        actionType: "action",
        description:
          "The planetar touches another creature. The target magically regains 30 (6d8 + 3) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
        rolls: [
          {
            name: "Healing",
            formula: "6d8 + 3",
          },
        ],
      },
    ],
  },
  {
    id: 112,
    name: "Solar",
    description: "Solars are extremely powerful angelic beings.",
    flavorText: "Solars are extremely powerful angelic beings.",
    size: Size.LARGE,
    creatureType: CreatureType.CELESTIAL,
    alignmentOptions: [Alignment.LAWFUL_GOOD],
    challengeRating: 21,
    armorClassDescription: "natural armor",
    hitDiceAmount: 18,
    naturalArmorBonus: 5,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    speed: 50,
    flyingSpeed: 150,
    STR: 26,
    DEX: 22,

    CON: 26,
    INT: 25,
    WIS: 25,
    CHA: 30,
    saveProficiencies: [Ability.WIS, Ability.CHA, Ability.INT],
    skillProficiencies: [Skill.PERCEPTION],
    damageResistances: [
      DamageTypes.RADIANT,
      DamageTypes.NON_MAGICAL_BLUDGEONING,
      DamageTypes.NON_MAGICAL_PIERCING,
      DamageTypes.NON_MAGICAL_SLASHING,
    ],
    damageImmunities: [DamageTypes.NECROTIC, DamageTypes.POISON],
    conditionImmunities: [
      Condition.CHARMED,
      Condition.EXHAUSTION,
      Condition.FRIGHTENED,
      Condition.POISONED,
    ],
    trueSight: 120,
    languageDescription: "All, telepathy 120 ft.",
    spellcastingAbility: Ability.CHA,
    features: [
      {
        name: "Angelic Weapons",
        description:
          "The solar’s weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack).",
        rolls: [
          {
            name: "Angelic Weapon Damage",
            formula: "6d8",
          },
        ],
      },
      {
        name: "Divine Awareness",
        description: "The solar knows if it hears a lie.",
      },
      {
        name: "Magic Resistance",
        description:
          "The solar has advantage on saving throws against spells and other magical effects.",
      },
      {
        name: "Slaying Longbow",
        description:
          "Whenever the solar lands a hit with its longbow, if the target has less than 100 hit points, it must succeed on a DC 15 Constitution saving throw or die.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description: "The solar makes two greatsword attacks.",
        actionType: "action",
      },
      {
        name: "Flying Sword",
        description:
          " The solar releases its greatsword to hover magically in an unoccupied space within 5 feet of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 feet and either make one attack against a target or return to the solar’s hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies.",
        actionType: "bonus action",
      },
      {
        name: "Healing Touch (4/Day)",
        actionType: "action",
        description:
          "The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
      },
    ],
    legendaryActionAmount: 3,
    legendaryActions: [
      {
        name: "Teleport",
        description:
          "The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
        cost: 1,
      },
      {
        cost: 2,
        name: "Searing Burst",
        description:
          "The solar emits magical, divine energy. Each creature of its choice in a 10-­‐‑foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one.",
        rolls: [
          {
            name: "Fire Damage",
            formula: "4d6",
          },
          {
            name: "Radiant Damage",
            formula: "4d6",
          },
        ],
      },
      {
        cost: 3,
        name: "Blinding Gaze",
        description:
          "The solar targets one creature it can see within 30 feet of it. If the target can see the solar, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness.",
      },
    ],
  },
  {
    id: 113,
    name: "Animated Armor",
    description: "Animated armor is a suit of armor animated by magic.",
    flavorText: "Animated armor is a suit of armor animated by magic.",
    size: Size.MEDIUM,
    creatureType: CreatureType.CONSTRUCT,

    challengeRating: 1,
    armorClassDescription: "natural armor",
    naturalArmorBonus: 8,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    hitDiceAmount: 6,
    speed: 25,
    STR: 14,
    DEX: 11,
    CON: 13,
    INT: 1,
    WIS: 3,
    CHA: 1,
    damageImmunities: [DamageTypes.POISON, DamageTypes.PSYCHIC],
    conditionImmunities: [
      Condition.CHARMED,
      Condition.EXHAUSTION,
      Condition.FRIGHTENED,
      Condition.PARALYZED,
      Condition.PETRIFIED,
      Condition.BLINDED,
      Condition.DEAFENED,
      Condition.POISONED,
    ],
    blindsight: 60,
    blindsightDescription: "blind beyond this radius",
    features: [
      {
        name: "Antimagic Susceptibility",
        description:
          "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster’s spell save DC or fall unconscious for 1 minute.",
      },
      {
        name: "False Appearance",
        description:
          "While the armor remains motionless, it is indistinguishable from a normal suit of armor.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description: "The armor makes two melee attacks.",
        actionType: "action",
      },
      {
        actionType: "action",
        name: "Slam",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d6 + 2",
          },
        ],
      },
    ],
  },
  {
    id: 114,
    name: "Flying Sword",
    description:
      "A flying sword is a sword enchanted to fly and fight on its own.",
    flavorText:
      "A flying sword is a sword enchanted to fly and fight on its own.",
    size: Size.SMALL,
    creatureType: CreatureType.CONSTRUCT,
    challengeRating: 0.25,
    armorClassDescription: "natural armor",
    naturalArmorBonus: 5,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    hitDiceAmount: 5,
    speed: 0,
    flyingSpeed: 50,
    STR: 12,
    DEX: 15,
    CON: 11,
    INT: 1,
    WIS: 5,
    CHA: 1,
    damageImmunities: [DamageTypes.POISON, DamageTypes.PSYCHIC],
    saveProficiencies: [Ability.DEX],
    conditionImmunities: [
      Condition.CHARMED,
      Condition.EXHAUSTION,
      Condition.FRIGHTENED,
      Condition.PARALYZED,
      Condition.PETRIFIED,
      Condition.BLINDED,
      Condition.DEAFENED,
      Condition.POISONED,
    ],
    blindsight: 60,
    blindsightDescription: "blind beyond this radius",
    features: [
      {
        name: "Antimagic Susceptibility",
        description:
          "The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster’s spell save DC or fall unconscious for 1 minute.",
      },
      {
        name: "False Appearance",
        description:
          "While the sword remains motionless and isn’t flying, it is indistinguishable from a normal sword.",
      },
    ],
  },
  {
    id: 115,
    name: "Rug of Smothering",
    description: "A rug of smothering is a magic rug that attacks creatures.",
    flavorText: "A rug of smothering is a magic rug that attacks creatures.",
    size: Size.LARGE,
    creatureType: CreatureType.CONSTRUCT,
    challengeRating: 2,
    hitDiceAmount: 6,
    speed: 10,
    STR: 17,
    DEX: 14,
    CON: 10,
    INT: 1,
    WIS: 3,
    CHA: 1,
    damageImmunities: [DamageTypes.POISON, DamageTypes.PSYCHIC],
    conditionImmunities: [
      Condition.CHARMED,
      Condition.EXHAUSTION,
      Condition.FRIGHTENED,
      Condition.PARALYZED,
      Condition.PETRIFIED,
      Condition.BLINDED,
      Condition.DEAFENED,
      Condition.POISONED,
    ],
    blindsight: 60,
    blindsightDescription: "blind beyond this radius",
    features: [
      {
        name: "False Appearance",
        description:
          "While the rug remains motionless, it is indistinguishable from a normal rug.",
      },
      {
        name: "Anti-Magic Susceptibility",
        description:
          "The rug is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster’s spell save DC or fall unconscious for 1 minute.",
      },
      {
        name: "Damage Transfer",
        description:
          "While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half.",
      },
    ],
    actions: [
      {
        name: "Smother",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one Medium or smaller creature. Hit: The creature is grappled (escape DC 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can’t smother another target. In addition, at the start of each of the target’s turns, the target takes 10 (2d6 + 3) bludgeoning damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "2d6 + 3",
          },
        ],
      },
    ],
  },
  {
    id: 116,
    name: "Ankheg",
    description: "Ankhegs are acid-spraying insect monstrosities.",
    flavorText: "Ankhegs are acid-spraying insect monstrosities.",
    size: Size.LARGE,
    creatureType: CreatureType.MONSTROSITY,
    armorClassDescription: "natural armor",
    naturalArmorBonus: 4,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    challengeRating: 2,
    hitDiceAmount: 6,
    speed: 30,
    burrowingSpeed: 10,
    STR: 17,
    DEX: 11,
    CON: 13,
    INT: 1,
    WIS: 13,
    CHA: 6,
    darkvision: 60,
    tremorsense: 60,
    features: [
      {
        name: "Prone AC",
        description: "While prone, the ankheg’s AC is 11.",
      },
    ],
    actions: [
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Slashing Damage",
            formula: "2d6 + 3",
          },
          {
            name: "Acid Damage",
            formula: "1d6",
          },
        ],
      },
      {
        name: "Acid Spray (Recharge 6)",
        description:
          "The ankheg spits acid in a line that is 30 feet long and 5 feet wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one.",
        actionType: "action",
        rolls: [
          {
            name: "Damage",
            formula: "3d6",
          },
        ],
      },
    ],
  },
  {
    id: 117,
    name: "Azer",
    description:
      "Azer are dwarf-like creatures from the Elemental Plane of Fire.",
    flavorText:
      "Azer are dwarf-like creatures from the Elemental Plane of Fire.",
    size: Size.MEDIUM,
    creatureType: CreatureType.ELEMENTAL,
    alignmentOptions: [Alignment.LAWFUL_GOOD, Alignment.LAWFUL_NEUTRAL],
    challengeRating: 2,
    armorClassDescription: "natural armor, shield",
    naturalArmorBonus: 4,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    hitDiceAmount: 3,
    shieldEquippedId: itemIds.shield,
    speed: 30,
    STR: 17,
    DEX: 12,
    CON: 15,
    INT: 12,
    WIS: 13,
    CHA: 10,
    saveProficiencies: [Ability.CON],
    damageImmunities: [DamageTypes.FIRE, DamageTypes.POISON],
    conditionImmunities: [Condition.POISONED],
    languageDescription: "Ignan",
    features: [
      {
        name: "Heated Body",
        description:
          "A creature that touches the azer or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage.",
        rolls: [
          {
            name: "Damage",
            formula: "1d10",
          },
        ],
      },
      {
        name: "Heated Weapons",
        description:
          "When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack).",
        rolls: [
          {
            name: "Fire Damage",
            formula: "1d6",
          },
        ],
      },
      {
        name: "Illumination",
        description:
          "The azer sheds bright light in a 10-foot radius and dim light for an additional 10 feet.",
      },
    ],
  },
  {
    id: 118,
    name: "Basilisk",
    description:
      "Basilisiks are reptilian monsters that can turn creatures to stone.",
    flavorText:
      "Basilisiks are reptilian monsters that can turn creatures to stone.",
    size: Size.MEDIUM,
    creatureType: CreatureType.MONSTROSITY,
    armorClassDescription: "natural armor",
    naturalArmorBonus: 6,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    challengeRating: 3,
    hitDiceAmount: 8,
    speed: 20,
    STR: 16,
    DEX: 8,
    CON: 15,
    INT: 2,
    WIS: 8,
    CHA: 7,
    darkvision: 60,
    features: [
      {
        name: "Petrifying Gaze",
        description:
          "If a creature starts its turn within 30 feet of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn’t incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.\n\nA creature that isn’t surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can’t see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save.\n\nIf the basilisk sees its reflection within 30 feet of it in bright light, it mistakes itself for a rival and targets itself with its gaze.",
      },
    ],
    actions: [
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Piercing Damage",
            formula: "2d6 + 3",
          },
          {
            name: "Poison Damage",
            formula: "2d6",
          },
        ],
      },
    ],
  },
  {
    id: 119,
    name: "Behir",
    description: "Behirs are huge serpentine monsters with lightning breath.",
    flavorText: "Behirs are huge serpentine monsters with lightning breath.",
    size: Size.HUGE,
    alignmentOptions: [Alignment.NEUTRAL_EVIL],
    creatureType: CreatureType.MONSTROSITY,
    armorClassDescription: "natural armor",
    naturalArmorBonus: 4,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    challengeRating: 11,
    hitDiceAmount: 16,
    speed: 50,
    climbingSpeed: 40,
    STR: 23,
    DEX: 16,
    CON: 18,
    INT: 7,
    WIS: 14,
    CHA: 12,
    skillProficiencies: [Skill.PERCEPTION, Skill.STEALTH],
    damageImmunities: [DamageTypes.LIGHTNING],
    darkvision: 90,
    languageDescription: "Draconic",
    actions: [
      {
        name: "Multiattack",
        description:
          "The behir makes two attacks: one with its bite and one to constrict.",
        actionType: "action",
      },
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) piercing damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 10",
          },
          {
            name: "Damage",
            formula: "3d10 + 6",
          },
        ],
      },
      {
        name: "Constrict",
        description:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature. Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The target is grappled (escape DC 16) if the behir isn’t already constricting a creature, and the target is restrained until this grapple ends.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 10",
          },
          {
            name: "Bludgeoning Damage",
            formula: "2d10 + 6",
          },
          {
            name: "Slashing Damage",
            formula: "2d10 + 6",
          },
        ],
      },
      {
        name: "Lightning Breath (Recharge 5-6)",
        description:
          "The behir exhales a line of lightning that is 20 feet long and 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.\n\nThe behir must roll a d6 to determine if it can use this action again. On a roll of 5 or 6, the behir can use this action again.",
        actionType: "action",
        rolls: [
          {
            name: "Damage",
            formula: "12d10",
          },
          {
            name: "Recharge",
            formula: "1d6",
          },
        ],
      },
      {
        name: "Swallow",
        description:
          "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir’s turns. A behir can have only one creature swallowed at a time.\n\nIf the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 feet of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 feet of movement, exiting prone.",
        actionType: "action",
        rolls: [
          {
            name: "Acid Damage",
            formula: "6d6",
          },
        ],
      },
    ],
  },
  {
    id: 120,
    name: "Bugbear",
    description: "Bugbears are hairy goblinoids that are skilled at ambushing.",
    flavorText: "Bugbears are hairy goblinoids that are skilled at ambushing.",
    size: Size.MEDIUM,
    creatureType: CreatureType.HUMANOID,
    alignmentOptions: [Alignment.CHAOTIC_EVIL],
    challengeRating: 1,
    armorClassDescription: "hide armor, shield",
    armorEquippedId: itemIds.hideArmor,
    shieldEquippedId: itemIds.shield,
    hitDiceAmount: 5,
    speed: 30,
    STR: 15,
    DEX: 14,
    CON: 13,
    INT: 8,
    WIS: 11,
    CHA: 9,
    skillProficiencies: [Skill.SURVIVAL],
    skillExpertise: [Skill.STEALTH],
    darkvision: 60,
    languageDescription: "Common, Goblin",
    features: [
      {
        name: "Brute",
        description:
          "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).",
      },
      {
        name: "Surprise Attack",
        description:
          "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack.",
        rolls: [
          {
            name: "Damage",
            formula: "2d6",
          },
        ],
      },
    ],
  },
  {
    id: 121,
    name: "Bulette",
    description: "Bulettes are massive, armored, land-shark monsters.",
    flavorText: "Bulettes are massive, armored, land-shark monsters.",
    size: Size.LARGE,
    creatureType: CreatureType.MONSTROSITY,
    challengeRating: 5,
    armorClassDescription: "natural armor",
    naturalArmorBonus: 7,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    hitDiceAmount: 9,
    speed: 40,
    burrowingSpeed: 40,
    STR: 19,
    DEX: 11,
    CON: 21,
    INT: 2,
    WIS: 10,
    CHA: 5,
    skillExpertise: [Skill.PERCEPTION],
    darkvision: 60,
    tremorsense: 60,
    features: [
      {
        name: "Standing Leap",
        description:
          "The bulette can long jump up to 30 feet and high jump up to 15 feet, with or without a running start.",
      },
    ],
    actions: [
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 30 (4d12 + 4) piercing damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 7",
          },
          {
            name: "Damage",
            formula: "4d12 + 4",
          },
        ],
      },
      {
        name: "Deadly Leap",
        description:
          " If the bulette jumps at least 15 feet as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target’s choice) or be knocked prone and take 14 (3d6 + 4) bludgeoning damage plus 14 (3d6 + 4) slashing damage. On a successful save, the creature takes only half the damage, isn’t knocked prone, and is pushed 5 feet out of the bulette’s space into an unoccupied space of the creature’s choice. If no unoccupied space is within range, the creature instead falls prone in the bulette’s space.",
        actionType: "action",
        rolls: [
          {
            name: "Bludgeoning Damage",
            formula: "3d6 + 4",
          },
          {
            name: "Slashing Damage",
            formula: "3d6 + 4",
          },
        ],
      },
    ],
  },
  // CENTAURS ARE MESSED UP AND THE WEAPON CALCS ARE WRONG ON THE SRD
  // {
  //   id:  122,
  //   name: "Centaur",
  //   description:
  // }
  {
    id: 123,
    name: "Chimera",
    description:
      "Chimeras are monstrous beasts with the heads of a lion, a goat, and a dragon.",
    flavorText:
      "Chimeras are monstrous beasts with the heads of a lion, a goat, and a dragon.",
    size: Size.LARGE,
    creatureType: CreatureType.MONSTROSITY,
    challengeRating: 6,
    armorClassDescription: "natural armor",
    naturalArmorBonus: 14,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    hitDiceAmount: 12,
    speed: 30,
    flyingSpeed: 60,
    STR: 19,
    DEX: 11,
    CON: 19,
    INT: 3,
    WIS: 14,
    CHA: 10,
    darkvision: 60,
    skillExpertise: [Skill.PERCEPTION],
    languageDescription: "Understands Draconic but can’t speak it",
    actions: [
      {
        name: "Multiattack",
        description:
          "The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns.",
        actionType: "action",
      },
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 7",
          },
          {
            name: "Damage",
            formula: "2d6 + 4",
          },
        ],
      },
      {
        name: "Horns",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) bludgeoning damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 7",
          },
          {
            name: "Damage",
            formula: "1d12 + 4",
          },
        ],
      },
      {
        name: "Claws",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 4) slashing damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 7",
          },
          {
            name: "Damage",
            formula: "2d6 + 4",
          },
        ],
      },
      {
        name: "Fire Breath (Recharge 5-6)",
        description:
          "The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one.",
        actionType: "action",
        rolls: [
          {
            name: "Damage",
            formula: "7d8",
          },
        ],
      },
    ],
  },
  {
    id: 124,
    name: "Chuul",
    description: "Chuuls are monstrous, lobster-like creatures.",
    flavorText: "Chuuls are monstrous, lobster-like creatures.",
    alignmentOptions: [Alignment.CHAOTIC_EVIL],
    size: Size.LARGE,
    creatureType: CreatureType.ABERRATION,
    challengeRating: 4,
    armorClassDescription: "natural armor",
    naturalArmorBonus: 6,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    hitDiceAmount: 11,
    speed: 30,
    swimmingSpeed: 30,
    STR: 19,
    DEX: 10,
    CON: 16,
    INT: 5,
    WIS: 11,
    CHA: 5,
    darkvision: 60,
    skillExpertise: [Skill.PERCEPTION],
    damageImmunities: [DamageTypes.POISON],
    conditionImmunities: [Condition.POISONED],
    languageDescription: "Understands Deep Speech but can’t speak it",
    features: [
      {
        name: "Amphibious",
        description: "The chuul can breathe air and water.",
      },
      {
        name: "Sense Magic",
        description:
          "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn’t itself magical.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once.",
        actionType: "action",
      },
      {
        name: "Pincer",
        description:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 10 (2d6 + 4) bludgeoning damage. The target is grappled (escape DC 13) if it is a Large or smaller creature and the chuul doesn’t have two other creatures grappled.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "2d6 + 4",
          },
        ],
      },
      {
        name: "Tentacles",
        description:
          "One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        actionType: "action",
      },
    ],
  },
  {
    id: 125,
    name: "Cloaker",
    description: "Cloakers are shadowy, flying, manta-ray-like creatures.",
    flavorText: "Cloakers are shadowy, flying, manta-ray-like creatures.",
    size: Size.LARGE,
    creatureType: CreatureType.ABERRATION,
    alignmentOptions: [Alignment.CHAOTIC_NEUTRAL],
    challengeRating: 8,
    armorClassDescription: "natural armor",
    naturalArmorBonus: 2,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    hitDiceAmount: 12,
    speed: 10,
    flyingSpeed: 40,
    STR: 17,
    DEX: 15,
    CON: 12,
    INT: 13,
    WIS: 12,
    CHA: 14,
    skillProficiencies: [Skill.STEALTH],
    darkvision: 60,
    languageDescription: "Deep Speech, Undercommon",
    features: [
      {
        name: "Damage Transfer",
        description:
          "While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down), and that creature takes the other half.",
      },
      {
        name: "False Appearance",
        description:
          "While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak.",
      },
      {
        name: "Light Sensitivity",
        description:
          "While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The cloaker makes two attacks: one with its bite and one with its tail.",
        actionType: "action",
      },
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) piercing damage, and if the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target’s head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "2d6 + 3",
          },
        ],
      },
      {
        name: "Tail",
        description:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 7 (1d8 + 3) slashing damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "1d8 + 3",
          },
        ],
      },
      {
        name: "Moan",
        description:
          "Each creature within 60 feet of the cloaker that can hear its moan and that isn’t an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker’s next turn. If a creature’s saving throw is successful, the creature is immune to the cloaker’s moan for the next 24 hours",
        actionType: "action",
      },
      {
        name: "Phantasms (Recharge after a Short or Long Rest)",
        description:
          "The cloaker magically creates three illusory duplicates of itself if it isn’t in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear.\n\nWhenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can’t see or if it relies on senses other than sight.\n\nA duplicate has the cloaker’s AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears",
        actionType: "action",
      },
    ],
  },
  {
    id: 126,
    name: "Cockatrice",
    description:
      "Cockatrices are small, bird-like creatures with a petrifying gaze.",
    flavorText:
      "Cockatrices are small, bird-like creatures with a petrifying gaze.",
    size: Size.SMALL,
    hitDiceAmount: 6,
    creatureType: CreatureType.MONSTROSITY,
    challengeRating: 0.5,
    speed: 20,
    flyingSpeed: 40,
    STR: 6,
    DEX: 12,
    CON: 12,
    INT: 2,
    WIS: 13,
    CHA: 5,
    darkvision: 60,
    actions: [
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 3",
          },
          {
            name: "Damage",
            formula: "1d4 + 1",
          },
        ],
      },
    ],
  },
  {
    id: 127,
    name: "Couatl",
    description:
      "Couatls are shapeshifting winged serpents with divine powers.",
    flavorText: "Couatls are shapeshifting winged serpents with divine powers.",
    size: Size.MEDIUM,
    creatureType: CreatureType.CELESTIAL,
    alignmentOptions: [Alignment.LAWFUL_GOOD],
    challengeRating: 4,
    armorClassDescription: "natural armor",
    naturalArmorBonus: 4,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    hitDiceAmount: 13,
    speed: 30,
    flyingSpeed: 90,
    STR: 16,
    DEX: 20,
    CON: 17,
    INT: 18,
    WIS: 20,
    CHA: 18,
    saveProficiencies: [Ability.WIS, Ability.CHA, Ability.CON],
    damageResistances: [DamageTypes.RADIANT],
    damageImmunities: [
      DamageTypes.NON_MAGICAL_BLUDGEONING,
      DamageTypes.NON_MAGICAL_PIERCING,
      DamageTypes.NON_MAGICAL_SLASHING,
      DamageTypes.BLUDGEONING,
    ],
    trueSight: 120,
    languageDescription: "all, telepathy 120 ft.",
    features: [
      {
        name: "Magic Weapons",
        description: "The couatl’s weapon attacks are magical.",
      },
      {
        name: "Shielded Mind",
        description:
          "The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location.",
      },
    ],
    actions: [
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 8 (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "1d6 + 5",
          },
        ],
      },
      {
        name: "Constrict",
        description:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one Medium or smaller creature. Hit: 10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can’t constrict another target.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "2d6 + 3",
          },
        ],
      },
      {
        name: "Change Shape",
        description:
          " The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl’s choice).\n\nIn a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form.",
        actionType: "action",
      },
    ],
  },
  {
    id: 128,
    name: "Darkmantle",
    description: "Darkmantles are small, flying, tentacled creatures.",
    flavorText: "Darkmantles are small, flying, tentacled creatures.",
    size: Size.SMALL,
    creatureType: CreatureType.MONSTROSITY,
    challengeRating: 0.5,
    hitDiceAmount: 5,
    speed: 10,
    flyingSpeed: 30,
    STR: 16,
    DEX: 12,
    CON: 13,
    INT: 2,
    WIS: 10,
    CHA: 5,
    blindsight: 60,
    skillProficiencies: [Skill.STEALTH],
    features: [
      {
        name: "Echolocation",
        description: "The darkmantle can’t use its blindsight while deafened.",
      },
      {
        name: "False Appearance",
        description:
          "While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite.",
      },
    ],
    actions: [
      {
        name: "Crush",
        description:
          "Crush. Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) bludgeoning damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target’s head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way. \n\nWhile attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle’s speed also becomes 0, it can’t benefit from any bonus to its speed, and it moves with the target.\n\n A creature can detach the darkmantle by making a successful DC 13 Strength check as an action. On its turn, the darkmantle can detach itself from the target by using 5 feet of movement.",
        actionType: "action",
      },
      {
        name: "Darkness Aura (1/Day)",
        description:
          " A 15-­‐foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can’t penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled.",
        actionType: "action",
      },
    ],
  },
  {
    id: 129,
    name: "Balor",
    description: "Balors are powerful, demonic, fire-wielding creatures.",
    flavorText: "Balors are powerful, demonic, fire-wielding creatures.",
    size: Size.HUGE,
    creatureType: CreatureType.FIEND,
    alignmentOptions: [Alignment.CHAOTIC_EVIL],
    challengeRating: 19,
    armorClassDescription: "natural armor",
    naturalArmorBonus: 7,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    hitDiceAmount: 21,
    speed: 40,
    flyingSpeed: 80,
    STR: 26,
    DEX: 15,
    CON: 22,
    INT: 20,
    WIS: 16,
    CHA: 22,
    saveProficiencies: [Ability.WIS, Ability.CHA, Ability.CON, Ability.STR],
    damageResistances: [
      DamageTypes.COLD,
      DamageTypes.LIGHTNING,
      DamageTypes.NON_MAGICAL_BLUDGEONING,
      DamageTypes.NON_MAGICAL_PIERCING,
      DamageTypes.NON_MAGICAL_SLASHING,
    ],
    damageImmunities: [DamageTypes.FIRE, DamageTypes.POISON],
    conditionImmunities: [Condition.POISONED],
    trueSight: 120,
    languageDescription: "Abyssal, telepathy 120 ft.",
    features: [
      {
        name: "Death Throes",
        description:
          "When the balor dies, it explodes, and each creature within 30 feet of it must make a DC 20 Dexterity saving throw, taking 70 (20d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren’t being worn or carried, and it destroys the balor’s weapons.",
        rolls: [
          {
            name: "Damage",
            formula: "20d6",
          },
        ],
      },
      {
        name: "Fire Aura",
        description:
          "At the start of each of the balor’s turns, each creature within 5 feet of it takes 10 (3d6) fire damage, and flammable objects in the aura that aren’t being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage.",
        rolls: [
          {
            name: "Damage",
            formula: "3d6",
          },
        ],
      },
      {
        name: "Magic Resistance",
        description:
          "The balor has advantage on saving throws against spells and other magical effects.",
      },
      {
        name: "Magic Weapons",
        description: "The balor’s weapon attacks are magical.",
      },
      {
        name: "Improved Longsword Attack",
        description:
          "The balor’s longsword deals an extra 13 (3d8) lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice.",
        rolls: [
          {
            name: "Lightning Damage",
            formula: "3d8",
          },
        ],
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The balor makes two attacks: one with its longsword and one with its whip.",
        actionType: "action",
      },
      {
        name: "Whip",
        description:
          "Melee Weapon Attack: +14 to hit, reach 30 ft., one target. Hit: 15 (2d6 + 8) slashing damage plus 10 (3d6) fire damage, and the target must succeed on a DC 20 Strength saving throw or be pulled up to 25 feet toward the balor.",

        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 14",
          },
          {
            name: "Slashing Damage",
            formula: "2d6 + 8",
          },
          {
            name: "Fire Damage",
            formula: "3d6",
          },
        ],
      },
      {
        name: "Teleport",
        description:
          "The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
        actionType: "action",
      },
    ],
  },
  {
    id: 130,
    name: "Dretch",
    description: "Dretches are small demons with a foul stench.",
    flavorText: "Dretches are small demons with a foul stench.",
    size: Size.SMALL,
    creatureType: CreatureType.FIEND,
    alignmentOptions: [Alignment.CHAOTIC_EVIL],
    challengeRating: 0.25,
    armorClassDescription: "natural armor",
    naturalArmorBonus: 1,
    damageResistances: [
      DamageTypes.COLD,
      DamageTypes.FIRE,
      DamageTypes.LIGHTNING,
    ],
    damageImmunities: [DamageTypes.POISON],
    conditionImmunities: [Condition.POISONED],
    darkvision: 60,
    languageDescription:
      "Abyssal, telepathy 60 ft. (works only with creatures that understand Abyssal)",
    STR: 11,
    DEX: 11,
    CON: 12,
    INT: 5,
    WIS: 8,
    CHA: 3,
    hitDiceAmount: 4,
    speed: 20,
    actions: [
      {
        name: "Multiattack",
        description:
          "The dretch makes two attacks: one with its bite and one with its claws.",
        actionType: "action",
      },
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 2",
          },
          {
            name: "Damage",
            formula: "1d6",
          },
        ],
      },
      {
        name: "Claws",
        description:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 2",
          },
          {
            name: "Damage",
            formula: "2d4",
          },
        ],
      },
      {
        name: "Fetid Cloud (1/Day)",
        description:
          "A 10-­‐foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can’t take reactions",
        actionType: "action",
      },
    ],
  },
  {
    id: 131,
    name: "Glabrezu",
    description: "Glabrezus are powerful, spellcasting demons.",
    flavorText: "Glabrezus are powerful, spellcasting demons.",
    size: Size.LARGE,
    creatureType: CreatureType.FIEND,
    alignmentOptions: [Alignment.CHAOTIC_EVIL],
    challengeRating: 9,
    armorClassDescription: "natural armor",
    naturalArmorBonus: 5,
    hitDiceAmount: 15,
    speed: 40,
    STR: 20,
    DEX: 15,
    CON: 21,
    INT: 19,
    WIS: 17,
    CHA: 16,
    saveProficiencies: [Ability.STR, Ability.CON, Ability.WIS, Ability.CHA],
    damageResistances: [
      DamageTypes.COLD,
      DamageTypes.FIRE,
      DamageTypes.LIGHTNING,
      DamageTypes.NON_MAGICAL_BLUDGEONING,
      DamageTypes.NON_MAGICAL_PIERCING,
      DamageTypes.NON_MAGICAL_SLASHING,
    ],
    damageImmunities: [DamageTypes.POISON],
    conditionImmunities: [Condition.POISONED],
    trueSight: 120,
    languageDescription: "Abyssal, telepathy 120 ft.",
    spellcastingAbility: Ability.INT,
    features: [
      {
        name: "Magic Resistance",
        description:
          "The glabrezu has advantage on saving throws against spells and other magical effects.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell.",
        actionType: "action",
      },
      {
        name: "Pincer",
        description:
          "Melee Weapon Attack: +9 to hit, reach 10 ft.,one target. Hit: 16 (2d10 + 5) bludgeoning damage. If the target is a Medium or smaller creature, it is grappled (escape DC 15). The glabrezu has two pincers, each of which can grapple only one target.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 9",
          },
          {
            name: "Damage",
            formula: "2d10 + 5",
          },
        ],
        actionType: "action",
      },
      {
        name: "Fist",
        description:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 9",
          },
          {
            name: "Damage",
            formula: "2d4 + 2",
          },
        ],
        actionType: "action",
      },
    ],
  },
  {
    id: 132,
    name: "Hezrou",
    description: "Hezrous are large, foul smelling demons.",
    flavorText: "Hezrous are large, foul smelling demons.",
    size: Size.LARGE,
    creatureType: CreatureType.FIEND,
    alignmentOptions: [Alignment.CHAOTIC_EVIL],
    challengeRating: 8,
    armorClassDescription: "natural armor",
    naturalArmorBonus: 3,
    hitDiceAmount: 13,
    speed: 30,
    STR: 19,
    DEX: 17,
    CON: 20,
    INT: 5,
    WIS: 12,
    CHA: 13,
    saveProficiencies: [Ability.CON, Ability.WIS, Ability.STR],
    damageResistances: [
      DamageTypes.COLD,
      DamageTypes.FIRE,
      DamageTypes.LIGHTNING,
      DamageTypes.NON_MAGICAL_BLUDGEONING,
      DamageTypes.NON_MAGICAL_PIERCING,
      DamageTypes.NON_MAGICAL_SLASHING,
    ],
    damageImmunities: [DamageTypes.POISON],
    conditionImmunities: [Condition.POISONED],
    darkvision: 120,
    languageDescription: "Abyssal, telepathy 120 ft.",
    features: [
      {
        name: "Magic Resistance",
        description:
          "The hezrou has advantage on saving throws against spells and other magical effects.",
      },
      {
        name: "Stench",
        description:
          "Any creature that starts its turn within 10 feet of the hezrou must succeed on a DC 14 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou’s stench for 24 hours.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The hezrou makes three attacks: one with its bite and two with its claws.",
        actionType: "action",
      },
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 7",
          },
          {
            name: "Damage",
            formula: "2d10 + 4",
          },
        ],
      },
      {
        name: "Claw",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 7",
          },
          {
            name: "Damage",
            formula: "2d6 + 4",
          },
        ],
      },
    ],
  },
  {
    id: 133,
    name: "Marilith",
    description: "Mariliths are serpentine, muilti-armed demons.",
    flavorText: "Mariliths are serpentine, muilti-armed demons.",
    size: Size.LARGE,
    creatureType: CreatureType.FIEND,
    alignmentOptions: [Alignment.CHAOTIC_EVIL],
    hitDiceAmount: 18,
    challengeRating: 16,
    armorClassDescription: "natural armor",
    naturalArmorBonus: 3,
    speed: 40,
    STR: 18,
    DEX: 20,
    CON: 20,
    INT: 18,
    WIS: 16,
    CHA: 20,
    saveProficiencies: [Ability.STR, Ability.CON, Ability.WIS, Ability.CHA],

    damageResistances: [
      DamageTypes.COLD,
      DamageTypes.FIRE,
      DamageTypes.LIGHTNING,
      DamageTypes.NON_MAGICAL_BLUDGEONING,
      DamageTypes.NON_MAGICAL_PIERCING,
      DamageTypes.NON_MAGICAL_SLASHING,
    ],

    damageImmunities: [DamageTypes.POISON],
    conditionImmunities: [Condition.POISONED],
    trueSight: 120,
    languageDescription: "Abyssal, telepathy 120 ft.",

    features: [
      {
        name: "Magic Resistance",
        description:
          "The marilith has advantage on saving throws against spells and other magical effects.",
      },
      {
        name: "Magic Weapons",
        description: "The marilith’s weapon attacks are magical.",
      },
      {
        name: "Reactive",
        description:
          "The marilith can take one reaction on every turn in combat.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The marilith can make seven attacks: six with its longswords and one with its tail.",
        actionType: "action",
      },
      {
        name: "Tail",
        description:
          "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 15 (2d10 + 4) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape DC 19). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can’t make tail attacks against other targets.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 9",
          },
          {
            name: "Damage",
            formula: "2d10 + 4",
          },
        ],
      },
      {
        name: "Teleport",
        description:
          "The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
        actionType: "action",
      },
      {
        name: "Parry",
        description:
          "The marilith adds 5 to its AC against one melee attack that would hit it. To do so, the marilith must see the attacker and be wielding a melee weapon.",
        actionType: "reaction",
      },
    ],
  },
  {
    id: 134,
    name: "Nalfeshnee",
    description:
      "Nalfeshnees are large demons that appear like a standing mix of an ape and a boar.",
    flavorText:
      "Nalfeshnees are large demons that appear like a standing mix of an ape and a boar.",
    size: Size.LARGE,
    creatureType: CreatureType.FIEND,
    alignmentOptions: [Alignment.CHAOTIC_EVIL],
    hitDiceAmount: 16,
    challengeRating: 13,
    armorClassDescription: "natural armor",
    naturalArmorBonus: 8,
    speed: 20,
    flyingSpeed: 30,
    STR: 21,
    DEX: 10,
    CON: 22,
    INT: 19,
    WIS: 12,
    CHA: 15,
    saveProficiencies: [Ability.WIS, Ability.CHA, Ability.CON, Ability.INT],
    damageResistances: [
      DamageTypes.COLD,
      DamageTypes.FIRE,
      DamageTypes.LIGHTNING,
      DamageTypes.NON_MAGICAL_BLUDGEONING,
      DamageTypes.NON_MAGICAL_PIERCING,
      DamageTypes.NON_MAGICAL_SLASHING,
    ],
    damageImmunities: [DamageTypes.POISON],
    conditionImmunities: [Condition.POISONED],
    trueSight: 120,
    languageDescription: "Abyssal, telepathy 120 ft.",
    features: [
      {
        name: "Magic Resistance",
        description:
          "The nalfeshnee has advantage on saving throws against spells and other magical effects.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The nalfeshnee uses Horror Nimbus if it can. It then makes three attacks: one with its bite and two with its claws.",
        actionType: "action",
      },
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 32 (5d10 + 5) piercing damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 10",
          },
          {
            name: "Damage",
            formula: "5d10 + 5",
          },
        ],
      },
      {
        name: "Claw",
        description:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (3d6 + 5) slashing damage.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 10",
          },
          {
            name: "Damage",
            formula: "3d6 + 5",
          },
        ],
        actionType: "action",
      },
      {
        name: "Horror Nimbus (Recharge 5-6",
        description:
          "The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature’s saving throw is successful or the effect ends for it, the",
        actionType: "action",
        rolls: [
          {
            name: "Recarge",
            formula: "1d6",
          },
        ],
      },
      {
        name: "Teleport",
        description:
          "The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
        actionType: "action",
      },
    ],
  },
  {
    id: 135,
    name: "Quasit",
    description: "Quasits are tiny demons that can turn invisible.",
    flavorText: "Quasits are tiny demons that can turn invisible.",
    size: Size.TINY,
    creatureType: CreatureType.FIEND,
    alignmentOptions: [Alignment.CHAOTIC_EVIL],
    hitDiceAmount: 3,
    challengeRating: 1,
    speed: 40,
    STR: 5,
    DEX: 17,
    CON: 10,
    INT: 7,
    WIS: 10,
    CHA: 10,
    skillProficiencies: [Skill.STEALTH],
    damageResistances: [
      DamageTypes.COLD,
      DamageTypes.FIRE,
      DamageTypes.LIGHTNING,
      DamageTypes.NON_MAGICAL_BLUDGEONING,
      DamageTypes.NON_MAGICAL_PIERCING,
      DamageTypes.NON_MAGICAL_SLASHING,
    ],
    damageImmunities: [DamageTypes.POISON],
    conditionImmunities: [Condition.POISONED],
    darkvision: 120,
    languageDescription: "Abyssal, Common",
    features: [
      {
        name: "Shapechanger",
        description:
          "The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft., fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn’t transformed. It reverts to its true form if it dies.",
      },
      {
        name: "Magic Resistance",
        description:
          "The quasit has advantage on saving throws against spells and other magical effects.",
      },
    ],
    actions: [
      {
        name: "Claws (Bite in Beast Form)",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 4",
          },
          {
            name: "Damage",
            formula: "1d4 + 3",
          },
        ],
      },
      {
        name: "Scare (1/Day)",
        description:
          "One creature of the quasit’s choice within 20 feet of it must succeed on a DC 10 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success.",
        actionType: "action",
      },
      {
        name: "Invisibility",
        description:
          "The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it.",
        actionType: "action",
      },
    ],
  },
  {
    id: 136,
    name: "Vrock",
    description: "Vrocks are large, demonic, vulture-like creatures.",
    flavorText: "Vrocks are large, demonic, vulture-like creatures.",
    size: Size.LARGE,
    creatureType: CreatureType.FIEND,
    alignmentOptions: [Alignment.CHAOTIC_EVIL],
    hitDiceAmount: 11,
    challengeRating: 6,
    armorClassDescription: "natural armor",
    naturalArmorBonus: 3,
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    speed: 40,
    flyingSpeed: 60,
    STR: 17,
    DEX: 15,
    CON: 18,
    INT: 8,
    WIS: 13,
    CHA: 8,
    saveProficiencies: [Ability.CHA, Ability.DEX, Ability.WIS],
    damageResistances: [
      DamageTypes.COLD,
      DamageTypes.FIRE,
      DamageTypes.LIGHTNING,
      DamageTypes.NON_MAGICAL_BLUDGEONING,
      DamageTypes.NON_MAGICAL_PIERCING,
      DamageTypes.NON_MAGICAL_SLASHING,
    ],
    damageImmunities: [DamageTypes.POISON],
    conditionImmunities: [Condition.POISONED],
    darkvision: 120,
    languageDescription: "Abyssal, telepathy 120 ft.",
    features: [
      {
        name: "Magic Resistance",
        description:
          "The vrock has advantage on saving throws against spells and other magical effects.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The vrock makes two attacks: one with its beak and one with its talons.",
        actionType: "action",
      },
      {
        name: "Beak",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "2d6 + 3",
          },
        ],
      },
      {
        name: "Talons",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d10 + 3) slashing damage",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "2d10 + 3",
          },
        ],
      },
      {
        name: "Spores (Recharge 6)",
        description:
          "A 15-­‐foot-­‐radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned in this way, a target takes 5 (1d10) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it.",
        actionType: "action",
        rolls: [
          {
            name: "Damage",
            formula: "1d10",
          },
        ],
      },
      {
        name: "Stunning Screech (1/Day)",
        description:
          "The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn’t a demon must succeed on a DC 14 Constitution saving throw or be stunned until the end of the vrock’s next turn.",
        actionType: "action",
      },
    ],
  },
  {
    id: 137,
    name: "Barbed Devil",
    description:
      "Barbed devils are fiends that serve as enforcers in the Nine Hells.",
    flavorText:
      "Barbed devils are fiends that serve as enforcers in the Nine Hells.",
    size: Size.MEDIUM,
    creatureType: CreatureType.FIEND,
    alignmentOptions: [Alignment.LAWFUL_EVIL],
    hitDiceAmount: 13,
    speed: 30,
    challengeRating: 5,
    STR: 16,
    DEX: 17,
    CON: 18,
    INT: 12,
    WIS: 14,
    CHA: 14,
    saveProficiencies: [Ability.STR, Ability.CON, Ability.WIS, Ability.CHA],
    skillProficiencies: [Skill.DECEPTION, Skill.DECEPTION],
    skillExpertise: [Skill.PERCEPTION],
    damageResistances: [
      DamageTypes.COLD,
      DamageTypes.NON_SILVERED_BLUDGEONING,
      DamageTypes.NON_SILVERED_PIERCING,
      DamageTypes.NON_SILVERED_SLASHING,
    ],
    damageImmunities: [DamageTypes.FIRE, DamageTypes.POISON],
    conditionImmunities: [Condition.POISONED],
    darkvision: 120,
    languageDescription: "Infernal, telepathy 120 ft.",
    features: [
      {
        name: "Devil’s Sight",
        description:
          "Magical darkness doesn’t impede the barbed devil’s darkvision.",
      },
      {
        name: "Magic Resistance",
        description:
          "The barbed devil has advantage on saving throws against spells and other magical effects.",
      },
      {
        name: "Barbed Hide",
        description:
          "At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature grappling it.",
        rolls: [
          {
            name: "Damage",
            formula: "1d10",
          },
        ],
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The barbed devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice.",
        actionType: "action",
      },
      {
        name: "Claw",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 2) slashing damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "1d6 + 2",
          },
        ],
      },
      {
        name: "Tail",
        description:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 10 (2d6 + 3) piercing damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "2d6 + 3",
          },
        ],
      },
      {
        name: "Hurl Flame",
        description:
          "Ranged Spell Attack: +5 to hit, range 150 ft., one target. Hit: 10 (3d6) fire damage. If the target is a flammable object that isn’t being worn or carried, it also catches fire.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "3d6",
          },
        ],
      },
    ],
  },
  {
    id: 138,
    name: "Bearded Devil",
    description: "Bearded devils are fiends that serve as shock troops.",
    flavorText: "Bearded devils are fiends that serve as shock troops.",
    size: Size.MEDIUM,
    creatureType: CreatureType.FIEND,
    alignmentOptions: [Alignment.LAWFUL_EVIL],
    hitDiceAmount: 8,
    speed: 30,
    challengeRating: 3,
    STR: 16,
    DEX: 15,
    CON: 15,
    INT: 9,
    WIS: 11,
    CHA: 11,
    saveProficiencies: [Ability.STR, Ability.CON, Ability.WIS],
    damageResistances: [
      DamageTypes.COLD,
      DamageTypes.NON_SILVERED_BLUDGEONING,
      DamageTypes.NON_SILVERED_PIERCING,
      DamageTypes.NON_SILVERED_SLASHING,
    ],
    damageImmunities: [DamageTypes.FIRE, DamageTypes.POISON],
    conditionImmunities: [Condition.POISONED],
    darkvision: 120,
    languageDescription: "Infernal, telepathy 120 ft.",
    features: [
      {
        name: "Devil’s Sight",
        description:
          "Magical darkness doesn’t impede the bearded devil’s darkvision.",
      },
      {
        name: "Magic Resistance",
        description:
          "The bearded devil has advantage on saving throws against spells and other magical effects.",
      },
      {
        name: "Steadfast",
        description:
          "The bearded devil can’t be frightened while it can see an allied creature within 30 feet of it.",
      },
      {
        name: "Glaive Weapon Attack",
        description:
          "Whenever the bearded devil hits a creature with its glaive, if the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "1d10 + 3",
          },
        ],
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The devil makes two attacks: one with its beard and one with its glaive",
        actionType: "action",
      },
      {
        name: "Beard",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can’t regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "1d8 + 2",
          },
        ],
      },
    ],
  },
  {
    id: 139,
    name: "Bone Devil",
    description: "Bone devils are fiends that serve as jailers and torturers.",
    flavorText: "Bone devils are fiends that serve as jailers and torturers.",
    size: Size.LARGE,
    creatureType: CreatureType.FIEND,
    alignmentOptions: [Alignment.LAWFUL_EVIL],
    hitDiceAmount: 15,
    speed: 40,
    flyingSpeed: 40,
    challengeRating: 9,
    STR: 18,
    DEX: 16,
    CON: 18,
    INT: 13,
    WIS: 14,
    CHA: 14,
    saveProficiencies: [Ability.WIS, Ability.CHA, Ability.INT],
    damageResistances: [
      DamageTypes.COLD,
      DamageTypes.NON_SILVERED_BLUDGEONING,
      DamageTypes.NON_SILVERED_PIERCING,
      DamageTypes.NON_SILVERED_SLASHING,
    ],
    damageImmunities: [DamageTypes.FIRE, DamageTypes.POISON],
    conditionImmunities: [Condition.POISONED],
    darkvision: 120,
    languageDescription: "Infernal, telepathy 120 ft.",
    features: [
      {
        name: "Devil’s Sight",
        description:
          "Magical darkness doesn’t impede the bone devil’s darkvision.",
      },
      {
        name: "Magic Resistance",
        description:
          "The bone devil has advantage on saving throws against spells and other magical effects.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The devil makes three attacks: two with its claws and one with its sting.",
        actionType: "action",
      },
      {
        name: "Claw",
        description:
          "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 8 (1d8 + 4) slashing damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 8",
          },
          {
            name: "Damage",
            formula: "1d8 + 4",
          },
        ],
      },
      {
        name: "Sting",
        description:
          "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 8",
          },
          {
            name: "Damage",
            formula: "2d8 + 4",
          },
          {
            name: "Poison Damage",
            formula: "5d6",
          },
        ],
      },
    ],
  },
  {
    id: 140,
    name: "Chain Devil",
    description: "Chain devils are fiends that serve as jailers and torturers.",
    flavorText: "Chain devils are fierce and brutal jailers.",
    size: Size.MEDIUM,
    creatureType: CreatureType.FIEND,
    alignmentOptions: [Alignment.LAWFUL_EVIL],
    hitDiceAmount: 10,
    speed: 30,
    challengeRating: 8,
    STR: 18,
    DEX: 15,
    CON: 18,
    INT: 11,
    WIS: 12,
    CHA: 14,
    saveProficiencies: [Ability.CON, Ability.WIS, Ability.CHA],
    damageResistances: [
      DamageTypes.COLD,
      DamageTypes.NON_SILVERED_BLUDGEONING,
      DamageTypes.NON_SILVERED_PIERCING,
      DamageTypes.NON_SILVERED_SLASHING,
    ],
    damageImmunities: [DamageTypes.FIRE, DamageTypes.POISON],
    conditionImmunities: [Condition.POISONED],

    darkvision: 120,
    languageDescription: "Infernal, telepathy 120 ft.",
    features: [
      {
        name: "Devil’s Sight",
        description:
          "Magical darkness doesn’t impede the chain devil’s darkvision.",
      },
      {
        name: "Magic Resistance",
        description:
          "The chain devil has advantage on saving throws against spells and other magical effects.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description: "The devil makes two attacks with its chain.",
        actionType: "action",
      },
      {
        name: "Chain",
        description:
          "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) slashing damage. The target is grappled (escape DC 14) if the devil isn’t already grappling a creature. Until this grapple ends, the target is restrained and takes 7 (2d6) piercing damage at the start of each of its turns.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 8",
          },
          {
            name: "Damage",
            formula: "2d6 + 4",
          },
        ],
      },
      {
        name: "Animate Chains (Recharge after a Short or Long Rest)",
        description:
          "Up to four chains the devil can see within 60 feet of it magically sprout razor-­‐edged barbs and animate under the devil’s control, provided that the chains aren’t being worn or carried.\n\n Each animated chain is an object with AC 20, 20 hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses Multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can’t make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies.",
        actionType: "action",
      },
      {
        name: "Unnerving Mask",
        description:
          "When a creature the devil can see starts its turn within 30 feet of the devil, the devil can create the illusion that it looks like one of the creature’s departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a DC 14 Wisdom saving throw or be frightened until the end of its turn.",
        actionType: "reaction",
      },
    ],
  },
  {
    id: 141,
    name: "Erinyes",
    description: "Erinyes are beautiful humanoids with feathered wings.",
    flavorText: "Erinyes are beautiful humanoids with feathered wings.",
    size: Size.MEDIUM,
    creatureType: CreatureType.FIEND,
    alignmentOptions: [Alignment.LAWFUL_EVIL],
    hitDiceAmount: 18,
    speed: 30,
    flyingSpeed: 60,
    challengeRating: 12,
    STR: 18,
    DEX: 16,
    CON: 18,
    INT: 14,
    WIS: 14,
    CHA: 18,
    saveProficiencies: [Ability.DEX, Ability.CON, Ability.WIS, Ability.CHA],
    damageResistances: [
      DamageTypes.COLD,
      DamageTypes.NON_SILVERED_BLUDGEONING,
      DamageTypes.NON_SILVERED_PIERCING,
      DamageTypes.NON_SILVERED_SLASHING,
    ],
    damageImmunities: [DamageTypes.FIRE, DamageTypes.POISON],
    conditionImmunities: [Condition.POISONED],
    trueSight: 120,
    languageDescription: "Infernal, telepathy 120 ft.",
    armorEquippedId: itemIds.scaleMail,
    features: [
      {
        name: "Hellish Weapons",
        description:
          "The erinyes’s weapon attacks are magical and deal an extra 13 (3d8) poison damage on a hit.",
        rolls: [
          {
            name: "Damage",
            formula: "3d8",
          },
        ],
      },
      {
        name: "Magic Resistance",
        description:
          "The erinyes has advantage on saving throws against spells and other magical effects.",
      },
      {
        name: "Longbow Poison",
        description:
          "When the erinyes lands an attack with its longbow, the target must succeed on a DC 14 Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic.",
      },
      {
        name: "Parry",
        description:
          "The erinyes adds 4 to its AC against one melee attack that would hit it. To do so, the erinyes must see the attacker and be wielding a melee weapon.",
      },
    ],
  },
  {
    id: 142,
    name: "Horned Devil",
    description: "Lazy and cruel, horned devils serve as flying infantry.",
    flavorText: "Lazy and cruel, horned devils serve as flying infantry.",
    size: Size.LARGE,
    creatureType: CreatureType.FIEND,
    alignmentOptions: [Alignment.LAWFUL_EVIL],
    hitDiceAmount: 17,
    speed: 20,
    flyingSpeed: 60,
    challengeRating: 11,
    STR: 22,
    DEX: 17,
    CON: 21,
    INT: 12,
    WIS: 16,
    CHA: 17,
    saveProficiencies: [Ability.STR, Ability.DEX, Ability.WIS, Ability.CHA],
    damageResistances: [
      DamageTypes.COLD,
      DamageTypes.NON_SILVERED_BLUDGEONING,
      DamageTypes.NON_SILVERED_PIERCING,
      DamageTypes.NON_SILVERED_SLASHING,
    ],
    damageImmunities: [DamageTypes.FIRE, DamageTypes.POISON],
    conditionImmunities: [Condition.POISONED],
    darkvision: 120,
    languageDescription: "Infernal, telepathy 120 ft.",
    features: [
      {
        name: "Devil’s Sight",
        description:
          "Magical darkness doesn’t impede the horned devil’s darkvision.",
      },
      {
        name: "Magic Resistance",
        description:
          "The horned devil has advantage on saving throws against spells and other magical effects.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The devil makes three attacks: one with its bite and two with its fork. It can use its Hurl Flame in place of any melee attacks.",
        actionType: "action",
      },
      {
        name: "Fork",
        description:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (2d8 + 6) piercing damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 10",
          },
          {
            name: "Damage",
            formula: "2d8 + 6",
          },
        ],
      },
      {
        name: "Tail",
        description:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 10 (1d8 + 6) piercing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 17 Constitution saving throw or lose 10 (3d6) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10 (3d6). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 10",
          },
          {
            name: "Damage",
            formula: "1d8 + 6",
          },
        ],
      },
      {
        name: "Hurl Flame",
        description:
          "Ranged Spell Attack: +7 to hit, range 150 ft., one target. Hit: 14 (4d6) fire damage. If the target is a flammable object that isn’t being worn or carried, it also catches fire.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 7",
          },
          {
            name: "Damage",
            formula: "4d6",
          },
        ],
      },
    ],
  },
  {
    id: 143,
    name: "Ice Devil",
    description: "Ice devils are giant bipedal insects.",
    flavorText: "Ice devils are giant bipedal insects.",
    size: Size.LARGE,
    creatureType: CreatureType.FIEND,
    alignmentOptions: [Alignment.LAWFUL_EVIL],
    hitDiceAmount: 19,
    speed: 40,
    STR: 21,
    DEX: 14,
    CON: 18,
    INT: 18,
    WIS: 15,
    CHA: 18,
    saveProficiencies: [Ability.DEX, Ability.CON, Ability.WIS, Ability.CHA],
    damageResistances: [
      DamageTypes.COLD,
      DamageTypes.NON_SILVERED_BLUDGEONING,
      DamageTypes.NON_SILVERED_PIERCING,
      DamageTypes.NON_SILVERED_SLASHING,
    ],
    damageImmunities: [DamageTypes.FIRE, DamageTypes.POISON, DamageTypes.COLD],
    conditionImmunities: [Condition.POISONED],
    darkvision: 120,
    challengeRating: 14,
    blindsight: 60,
    languageDescription: "Infernal, telepathy 120 ft.",
    features: [
      {
        name: "Devil’s Sight",
        description:
          "Magical darkness doesn’t impede the ice devil’s darkvision.",
      },
      {
        name: "Magic Resistance",
        description:
          "The ice devil has advantage on saving throws against spells and other magical effects.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The devil makes three attacks: one with its bite, one with its claws, and one with its tail.",
        actionType: "action",
      },
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) piercing damage plus 10 (3d6) cold damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 10",
          },
          {
            name: "Damage",
            formula: "2d6 + 5",
          },
        ],
      },
      {
        name: "Claw",
        description:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 10 (2d4 + 5) slashing damage plus 10 (3d6) cold damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 10",
          },
          {
            name: "Damage",
            formula: "2d4 + 5",
          },
        ],
      },
      {
        name: "Wall of Ice (Recharge 6)",
        description:
          "The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and 10 feet high, or it’s a hemispherical dome up to 20 feet in diameter.\n\n When the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a DC 17 Dexterity saving throw, taking 35 (10d6) cold damage on a failed save, or half as much damage on a succesfully one.\n\nThe wall lasts for 1 minute or until the devil is incapacitated or dies. \n\nThe wall can be damaged and breached; each 10-­‐foot section has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a DC 17 Constitution saving throw, taking 17 (5d6) cold damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes.",
        actionType: "action",
        rolls: [
          {
            name: "Damage",
            formula: "10d6",
          },
          {
            name: "Cold Damage",
            formula: "3d6",
          },
        ],
      },
    ],
  },
  {
    id: 144,
    name: "Imp",
    description: "Imps are minor devils that serve as spies and informants.",
    flavorText: "Imps are minor devils that serve as spies and informants.",
    size: Size.TINY,
    creatureType: CreatureType.FIEND,
    alignmentOptions: [Alignment.LAWFUL_EVIL],
    hitDiceAmount: 3,
    speed: 20,
    challengeRating: 1,
    flyingSpeed: 40,
    STR: 6,
    DEX: 17,
    CON: 13,
    INT: 11,
    WIS: 12,
    CHA: 14,
    skillProficiencies: [
      Skill.DECEPTION,
      Skill.PERSUASION,
      Skill.INSIGHT,
      Skill.STEALTH,
    ],
    damageResistances: [
      DamageTypes.COLD,
      DamageTypes.NON_SILVERED_BLUDGEONING,
      DamageTypes.NON_SILVERED_PIERCING,
      DamageTypes.NON_SILVERED_SLASHING,
    ],
    damageImmunities: [DamageTypes.FIRE, DamageTypes.POISON],
    conditionImmunities: [Condition.POISONED],
    darkvision: 120,
    languageDescription: "Infernal, Common",
    features: [
      {
        name: "Shapechanger",
        description:
          "The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistic sare the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn’t transformed. It reverts to its true form if it dies.",
      },
      {
        name: "Devil's Sight",
        description: "Magical darkness doesn’t impede the imp’s darkvision.",
      },
      {
        name: "Magic Resistance",
        description:
          "The imp has advantage on saving throws against spells and other magical effects.",
      },
    ],
    actions: [
      {
        name: "Sting (Bite in Beast form)",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must make on a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 5",
          },
          {
            name: "Damage",
            formula: "1d4 + 3",
          },
          {
            name: "Poison Damage",
            formula: "3d6",
          },
        ],
      },
      {
        name: "Invisibility",
        description:
          "The imp magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it.",
        actionType: "action",
      },
    ],
  },
  {
    id: 145,
    name: "Lemure",
    description: "Lemures are the shapeless blobs, lowest form of devil.",
    flavorText: "Lemures are the shapeless blobs, lowest form of devil.",
    size: Size.MEDIUM,
    creatureType: CreatureType.FIEND,
    alignmentOptions: [Alignment.LAWFUL_EVIL],
    hitDiceAmount: 3,
    speed: 15,
    challengeRating: 0,
    STR: 10,
    DEX: 5,
    CON: 11,
    INT: 1,
    WIS: 11,
    CHA: 3,
    damageResistances: [DamageTypes.COLD],
    damageImmunities: [DamageTypes.FIRE, DamageTypes.POISON],
    conditionImmunities: [
      Condition.POISONED,
      Condition.CHARMED,
      Condition.FRIGHTENED,
    ],
    darkvision: 120,
    languageDescription:
      "Understands Infernal but can't speak it, telepathy 60 ft.",
    features: [
      {
        name: "Devil's Sight",
        description: "Magical darkness doesn’t impede the lemure’s darkvision.",
      },
      {
        name: "Hellish Rejuvenation",
        description:
          "A lemure that dies in the Nine Hells comes back to life with all its hit points in 1d10 days unless it is killed by a good-aligned creature with a bless spell cast on it or its body is sprinkled with holy water.",
      },
    ],
    actions: [
      {
        name: "Fist",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 3",
          },
          {
            name: "Damage",
            formula: "1d4",
          },
        ],
      },
    ],
  },
  {
    id: 146,
    name: "Pit Fiend",
    description: "Pit Fiend's are the generals of the Nine Hells.",
    flavorText: "Pit Fiend's are the generals of the Nine Hells.",
    size: Size.LARGE,
    creatureType: CreatureType.FIEND,
    alignmentOptions: [Alignment.LAWFUL_EVIL],
    hitDiceAmount: 24,
    naturalArmorBonus: 7,
    speed: 30,
    flyingSpeed: 60,
    challengeRating: 20,
    STR: 26,
    DEX: 14,
    CON: 24,
    INT: 22,
    WIS: 18,
    CHA: 24,
    saveProficiencies: [Ability.CON, Ability.WIS, Ability.DEX],
    damageResistances: [
      DamageTypes.COLD,
      DamageTypes.NON_SILVERED_BLUDGEONING,
      DamageTypes.NON_SILVERED_PIERCING,
      DamageTypes.NON_SILVERED_SLASHING,
    ],
    damageImmunities: [DamageTypes.FIRE, DamageTypes.POISON],
    conditionImmunities: [Condition.POISONED],
    trueSight: 120,
    languageDescription: "Infernal, telepathy 120 ft.",
    features: [
      {
        name: "Fear Aura",
        description:
          "Any creature hostile to the pit fiend thatstarts its turn within 20 feet of the pit fiend must make a DC 21 Wisdom saving throw, unless the pit fiend is incapacitated. On a failed save, the creature is frightened until the start of its next turn. If a creature’s saving throw is successful, the creature is immune to the pit fiend’s Fear Aura for the next 24 hours",
      },
      {
        name: "Magic Resistance",
        description:
          "The pit fiend has advantage on saving throws against spells and other magical effects.",
      },
      {
        name: "Magic Weapons",
        description: "The pit fiend's weapon attacks are magical.",
      },
    ],
    spellcastingAbility: Ability.CHA,

    actions: [
      {
        name: "Multiattack",
        description:
          "The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail.",
        actionType: "action",
      },
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) piercing damage. The target must succeed on a DC 21 Constitution saving throw or become poisoned. While poisoned in this way, the target can’t regain hit points, and it takes 21 (6d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 14",
          },
          {
            name: "Damage",
            formula: "4d6 + 8",
          },
          {
            name: "Poison Damage",
            formula: "6d6",
          },
        ],
      },
      {
        name: "Claw",
        description:
          "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 17 (2d8 + 8) slashing damage",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 14",
          },
          {
            name: "Damage",
            formula: "2d8 + 8",
          },
        ],
      },
    ],
  },
  {
    id: 147,
    name: "Plesiosaurus",
    description: "Plesiosauruses are aquatic dinosaurs.",
    flavorText: "Plesiosauruses are aquatic dinosaurs.",
    size: Size.LARGE,
    creatureType: CreatureType.BEAST,
    hitDiceAmount: 8,
    naturalArmorBonus: 1,
    armorClassDescription: "Natural Armor",
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    speed: 20,
    swimmingSpeed: 40,
    challengeRating: 2,
    STR: 18,
    DEX: 15,
    CON: 16,
    INT: 2,
    WIS: 12,
    CHA: 5,
    skillProficiencies: [Skill.PERCEPTION, Skill.STEALTH],
    features: [
      {
        name: "Hold Breath",
        description: "The plesiosaurus can hold its breath for 1 hour.",
      },
    ],
    actions: [
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) piercing damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "3d6 + 4",
          },
        ],
      },
    ],
  },
  {
    id: 148,
    name: "Triceratops",
    description: "Triceratops are large herbivorous dinosaurs.",
    flavorText: "Triceratops are large herbivorous dinosaurs.",
    size: Size.HUGE,
    creatureType: CreatureType.BEAST,
    hitDiceAmount: 10,
    naturalArmorBonus: 4,
    armorClassDescription: "Natural Armor",
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    speed: 50,
    challengeRating: 5,
    STR: 22,
    DEX: 9,
    CON: 17,
    INT: 2,
    WIS: 11,
    CHA: 5,
    features: [
      {
        name: "Trampling Charge",
        description:
          "If the triceratops moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone.\n\nIf the target is prone, the triceratops can make one attack with its horns against it as a bonus action.",
      },
    ],
    actions: [
      {
        name: "Gore",
        description:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8 + 6) piercing damage",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 9",
          },
          {
            name: "Damage",
            formula: "4d8 + 6",
          },
        ],
      },
      {
        name: "Stomp",
        description:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 9",
          },
          {
            name: "Damage",
            formula: "3d10 + 6",
          },
        ],
      },
    ],
  },
  {
    id: 149,
    name: "Tyrannosaurus Rex",
    description: "Tyrannosaurus Rex are large carnivorous dinosaurs.",
    flavorText: "Tyrannosaurus Rex are large carnivorous dinosaurs.",
    size: Size.HUGE,
    creatureType: CreatureType.BEAST,
    hitDiceAmount: 13,

    naturalArmorBonus: 3,
    armorClassDescription: "Natural Armor",
    armorClassProtocol: ArmorClassProtocol.NATURAL_ARMOR,
    speed: 50,
    challengeRating: 8,
    STR: 25,
    DEX: 10,
    CON: 19,
    INT: 2,
    WIS: 12,
    CHA: 9,
    skillProficiencies: [Skill.PERCEPTION],
    actions: [
      {
        name: "Multiattack",
        description:
          "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can’t make both attacks against the same target.",
        actionType: "action",
      },
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33 (4d12 + 7) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can’t bite another target.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 10",
          },
          {
            name: "Damage",
            formula: "4d12 + 7",
          },
        ],
      },
      {
        name: "Tail",
        description:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target not grappled by the tyrannosaurus. Hit: 20 (3d8 + 7) bludgeoning damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 10",
          },
          {
            name: "Damage",
            formula: "3d8 + 7",
          },
        ],
      },
    ],
  },
  {
    id: 150,
    name: "Doppelganger",
    description: "Doppelgangers are shapeshifting humanoids.",
    flavorText: "Doppelgangers are shapeshifting humanoids.",
    size: Size.MEDIUM,
    creatureType: CreatureType.MONSTROSITY,
    alignmentOptions: [Alignment.TRUE_NEUTRAL],
    hitDiceAmount: 8,
    speed: 30,
    challengeRating: 3,
    STR: 11,
    DEX: 18,
    CON: 14,
    INT: 11,
    WIS: 12,
    CHA: 14,
    skillExpertise: [Skill.DECEPTION],
    skillProficiencies: [Skill.INSIGHT],
    conditionImmunities: [Condition.CHARMED],
    darkvision: 60,
    features: [
      {
        name: "Shapechanger",
        description:
          "The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn’t transformed. It reverts to its true form if it dies.",
      },
      {
        name: "Ambusher",
        description:
          "In the first round of a combat, the doppelganger has advantage on attack rolls against any creature it has surprised.",
      },
      {
        name: "Surprise Attack",
        description:
          "If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage from the attack",
        rolls: [
          {
            name: "Damage",
            formula: "3d6",
          },
        ],
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description: "The doppelganger makes two melee attacks.",
        actionType: "action",
      },
      {
        name: "Slam",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage.",
        actionType: "action",
        rolls: [
          {
            name: "Attack",
            formula: "1d20 + 6",
          },
          {
            name: "Damage",
            formula: "1d6 + 4",
          },
        ],
      },
      {
        name: "Read Thoughts",
        description:
          "The doppelganger magically reads the surface thoughts of one creature within 60 feet of it. The effect can penetrate barriers, but 3 feet of wood or dirt, 2 feet of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger’s concentration isn’t broken (as if concentrating on a spell). While reading the target’s mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target",
        actionType: "action",
      },
    ],
  },
];

export const creatureIds = {
  ape: 1,
  awakenedShrub: 2,
  awakenedTree: 3,
  axeBeak: 4,
  baboon: 5,
  badger: 6,
  bat: 7,
  blackBear: 8,
  blinkDog: 9,
  bloodHawk: 10,
  boar: 11,
  brownBear: 12,
  camel: 13,
  cat: 14,
  constrictorSnake: 15,
  crab: 16,
  crocodile: 17,
  deathDog: 18,
  deer: 19,
  direWolf: 20,
  draftHorse: 21,
  eagle: 22,
  elephant: 23,
  elk: 24,
  flyingSnake: 25,
  frog: 26,
  giantApe: 27,
  giantBadger: 28,
  giantBat: 29,
  giantBoar: 30,
  giantCentipede: 31,
  giantConstrictorSnake: 32,
  giantCrab: 33,
  giantCrocodile: 34,
  giantEagle: 35,
  giantElk: 36,
  giantFireBeetle: 37,
  giantFrog: 38,
  giantGoat: 39,
  giantHyena: 40,
  giantOctopus: 41,
  giantOwl: 42,
  giantPoisonousSnake: 43,
  giantRat: 44,
  diseasedGiantRat: 45,
  giantScorpion: 46,
  giantSeaHorse: 47,
  giantShark: 48,
  giantSpider: 49,
  giantToad: 50,
  giantVulture: 51,
  giantWasp: 52,
  giantWeasel: 53,
  giantWolfSpider: 54,
  goat: 55,
  hunterShark: 56,
  hyena: 57,
  jackal: 58,
  killerWhale: 59,
  lion: 60,
  lizard: 61,
  mammoth: 62,
  mastiff: 63,
  mule: 64,
  octopus: 65,
  owl: 66,
  panther: 67,
  phaseSpider: 68,
  poisonousSnake: 69,
  polarBear: 70,
  quipper: 71,
  rat: 72,
  raven: 73,
  reefShark: 74,
  rhinoceros: 75,

  ridingHorse: 76,
  saberToothedTiger: 77,
  scorpion: 78,
  seaHorse: 79,
  spider: 80,
  tiger: 81,
  vulture: 82,
  warhorse: 83,
  weasel: 84,
  winterWolf: 85,
  wolf: 86,
  worg: 87,
  acolyte: 88,
  archmage: 89,
  assassin: 90,
  bandit: 91,
  banditCaptain: 92,
  berserker: 93,
  commoner: 94,
  cultist: 95,
  cultFanatic: 96,
  druid: 97,
  gladiator: 98,
  guard: 99,
  knight: 100,
  mage: 101,
  noble: 102,
  priest: 103,
  scout: 104,
  spy: 105,
  thug: 106,
  tribalWarrior: 107,
  veteran: 108,
  aboleth: 109,
  deva: 110,
  planetar: 111,
  solar: 112,
  animatedArmor: 113,
  flyingSword: 114,
  rugOfSmothering: 115,
  ankheg: 116,
  azer: 117,
  basilisk: 118,
  behir: 119,
  bugbear: 120,
  bulette: 121,
  // centaur: 122,
  chimera: 123,
  chuul: 124,
  cloaker: 125,
  cockatrice: 126,
  couatl: 127,
  darkmantle: 128,
  balor: 129,
  dretch: 130,
  glabrezu: 131,
  hezrou: 132,
  marilith: 133,
  nalfeshnee: 134,
  quasit: 135,
  vrock: 136,
  barbedDevil: 137,
  beardedDevil: 138,
  boneDevil: 139,
  chainDevil: 140,
  erinyes: 141,
  hornedDevil: 142,
  iceDevil: 143,
  imp: 144,
  lemure: 145,
  pitFiend: 146,
  plesiosaurus: 147,
  triceratops: 148,
  tyrannosaurusRex: 149,
  doppelganger: 150,
  ancientBlackDragon: 151,
  adultBlackDragon: 152,
  youngBlackDragon: 153,
  wyrmlingBlackDragon: 154,
  ancientBlueDragon: 155,
  adultBlueDragon: 156,
  youngBlueDragon: 157,
  wyrmlingBlueDragon: 158,
  ancientGreenDragon: 159,
  adultGreenDragon: 160,
  youngGreenDragon: 161,
  wyrmlingGreenDragon: 162,
  ancientRedDragon: 163,
  adultRedDragon: 164,
  youngRedDragon: 165,
  wyrmlingRedDragon: 166,
  ancientWhiteDragon: 167,
  adultWhiteDragon: 168,
  youngWhiteDragon: 169,
  wyrmlingWhiteDragon: 170,
  ancientBrassDragon: 171,
  adultBrassDragon: 172,
  youngBrassDragon: 173,
  wyrmlingBrassDragon: 174,
  ancientBronzeDragon: 175,
  adultBronzeDragon: 176,
  youngBronzeDragon: 177,
  wyrmlingBronzeDragon: 178,
  ancientCopperDragon: 179,
  adultCopperDragon: 180,
  youngCopperDragon: 181,
  wyrmlingCopperDragon: 182,
  ancientGoldDragon: 183,
  adultGoldDragon: 184,
  youngGoldDragon: 185,
  wyrmlingGoldDragon: 186,
  ancientSilverDragon: 187,
  adultSilverDragon: 188,
  youngSilverDragon: 189,
  wyrmlingSilverDragon: 190,
  dragonTurle: 191,
  drider: 192,
  dryad: 193,
  duergar: 194,
};

export default CreatureSeed;
