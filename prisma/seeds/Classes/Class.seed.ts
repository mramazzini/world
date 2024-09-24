import { ArmorType, Class, Prisma, Skill, Ability } from "@prisma/client";
import {
  Distance,
  SpellFocus,
  Time,
  Unit,
  WeaponPropertyNames,
} from "@/lib/types";
import {
  martialIds,
  martialMeleeIds,
  simpleIds,
  simpleMeleeIds,
  weaponIds,
} from "../Items/Weapons/Weapons.seed";
import { itemIds } from "../Items/ItemIds";
import {
  currencyItemIds,
  getSpellScrollIdsOfLevel,
  instrumentItemIds,
  martialMeleeItemIds,
  martialRangedItemIds,
  simpleMeleeItemIds,
  simpleRangedItemIds,
  spellScrollIds,
} from "../Items/Items.seed";
import { artisanIds, instrumentIds, toolIds } from "../Items/Tools/tools.seed";
import { skills, WeaponProperties } from "@/lib/globalVars";
import {
  cantripIds,
  getSpellIdsEqualToOrLessThanLevel,
  getSpellIdsOfLevel,
  ritualIds,
  spellIds,
} from "../Spells/spells.seed";
import { spellListIds } from "../Spells/SpellLists/SpellLists.seed";
import numberArray, { numberObj } from "@/lib/utils/numberArray";
import { fullCaster, halfCaster, warlockSpellSlots } from "./SpellSlotsUtil";
import Features from "./Features.seed";
const allLevels = numberArray(1, 20);
const Classes: Prisma.ClassCreateManyInput[] = [
  {
    id: 1,
    srd: true,
    name: "fighter",
    hitDie: 10,
    flavorText:
      "Fighters are the warriors of the realm. They are the masters of weapons and armor, and they are well acquainted with death, both meting it out and staring it defiantly in the face.",
    description:
      "Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. They are well acquainted with death, both meting it out and staring it defiantly in the face.",
    multiclassing: {
      abilities: [Ability.STR, Ability.DEX],
      greaterThan: 12,
    },
    multiclassingDescription:
      "You must have a Dexterity or Strength score of 13 or higher in order to multiclass in or out of this class.",
    savingThrows: {
      default: [Ability.STR, Ability.CON],
    },

    skills: {
      choices: [
        {
          options: [
            Skill.ACROBATICS,
            Skill.ANIMAL_HANDLING,
            Skill.ATHLETICS,
            Skill.HISTORY,
            Skill.INSIGHT,
            Skill.INTIMIDATION,
            Skill.PERCEPTION,
            Skill.SURVIVAL,
          ],
          numberOfChoices: 2,
        },
      ],
    },
    skillChoiceDescription:
      "Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival.",
    weapons: {
      default: Object.values(weaponIds),
    },
    weaponDescription:
      "Fighters are proficient in all simple and martial weapons",
    armor: {
      default: [
        ArmorType.LIGHT,
        ArmorType.MEDIUM,
        ArmorType.HEAVY,
        ArmorType.SHIELDS,
      ],
    },
    armorDescription: "Fighters are proficient with all armor and shields",
    tools: {},
    toolsDescription: "Fighters are not proficient with any tools",

    equipment: {
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.chainMail, quantity: 1 }],
            [
              { item: itemIds.leatherArmor, quantity: 1 },
              { item: itemIds.longbow, quantity: 1 },
              { item: itemIds.arrow, quantity: 20 },
            ],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            ...martialMeleeItemIds.map((id) => [{ item: id, quantity: 1 }]),
            ...martialRangedItemIds.map((id) => [{ item: id, quantity: 1 }]),
            [{ item: itemIds.shield, quantity: 1 }],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            ...martialMeleeItemIds.map((id) => [{ item: id, quantity: 1 }]),
            ...martialRangedItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [
              { item: itemIds.crossbowLight, quantity: 1 },
              { item: itemIds.crossbowBolt, quantity: 20 },
            ],
            [{ item: itemIds.handaxe, quantity: 2 }],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.dungeoneersPack, quantity: 1 }],
            [{ item: itemIds.explorersPack, quantity: 1 }],
          ],
        },
      ],
    },
    equipmentDescription: [
      `(a) ^${itemIds.chainMail}{chain mail}^ or (b) ^${itemIds.leatherArmor}{leather}^, ^${itemIds.longbow}{longbow}^, and 20 ^${itemIds.arrow}{arrows}^`,
      `(a) a martial weapon and a ^${itemIds.shield}{shield}^ or (b) two martial weapons`,
      `(a) a ^${itemIds.crossbowLight}{light crossbow}^ and 20 ^${itemIds.crossbowBolt}{bolts}^ or (b) two ^${itemIds.handaxe}{handaxes}^`,
      `(a) a ^${itemIds.dungeoneersPack}{dungeoneer's pack}^ or (b) an ^${itemIds.explorersPack}{explorer's pack}^`,
    ],
    abilityScoreLevels: [4, 6, 8, 12, 14, 16, 19],
    subClassName: "Martial Archetype",
    subClassDescription:
      "At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.",
    subClassFeatureLevels: [3, 7, 10, 15, 18],
    features: Features.filter((feature) => feature.classId === 1),
  },

  {
    id: 2,
    name: "wizard",
    srd: true,
    description:
      "Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute force mind control. Their magic conjures monsters from other planes of existence, glimpses the future, or turns slain foes into zombies. Their mightiest spells change one substance into another, call meteors down from the sky, or open portals to other worlds.",
    flavorText:
      "Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute-force mind control.",
    multiclassing: {
      abilities: [Ability.INT],
      greaterThan: 12,
    },
    multiclassingDescription:
      "You must have an Intelligence score of 13 or higher in order to multiclass in or out of this class.",
    hitDie: 6,
    savingThrows: {
      default: [Ability.INT, Ability.WIS],
    },
    skills: {
      choices: [
        {
          options: [
            Skill.ARCANA,
            Skill.HISTORY,
            Skill.INSIGHT,
            Skill.INVESTIGATION,
            Skill.MEDICINE,
            Skill.RELIGION,
          ],
          numberOfChoices: 2,
        },
      ],
    },
    skillChoiceDescription:
      "Choose two skills from Arcana, History, Insight, Investigation, Medicine, and Religion.",
    armor: {},
    armorDescription: "Wizards are not proficient with any armor.",
    weapons: {
      default: [
        weaponIds.dagger,
        weaponIds.quarterstaff,
        weaponIds.crossbowLight,
        weaponIds.dart,
        weaponIds.sling,
      ],
    },

    weaponDescription:
      "Wizards are proficient with daggers, darts, slings, quarterstaffs, and light crossbows.",

    tools: {},
    toolsDescription: "Wizards are not proficient with any tools.",
    equipment: {
      default: [{ item: itemIds.spellBook, quantity: 1 }],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.quarterstaff, quantity: 1 }],
            [{ item: itemIds.dagger, quantity: 1 }],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.componentPouch, quantity: 1 }],
            [{ item: itemIds.crystal, quantity: 1 }],
            [{ item: itemIds.orb, quantity: 1 }],
            [{ item: itemIds.rod, quantity: 1 }],
            [{ item: itemIds.staff, quantity: 1 }],
            [{ item: itemIds.wand, quantity: 1 }],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.scholarsPack, quantity: 1 }],
            [{ item: itemIds.explorersPack, quantity: 1 }],
          ],
        },
      ],
    },
    equipmentDescription: [
      `(a) ^${itemIds.quarterstaff}{quarterstaff}^ or (b) a ^${itemIds.dagger}{dagger}^`,
      `(a) a ^${itemIds.componentPouch}{component pouch}^ or (b) an arcane focus`,
      `(a) a ^${itemIds.scholarsPack}{scholar's pack}^ or (b) an ^${itemIds.explorersPack}{explorer's pack}^`,
      `A ^${itemIds.spellBook}{spellbook}^`,
    ],
    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: "Arcane Tradition",
    subClassDescription:
      "When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of the following schools. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.",
    subClassFeatureLevels: [2, 6, 10, 14],
    isSpellCaster: true,
    spellCastingInfo: {
      levelAquired: 1,
      displaySpellLevels: true,
      description: `As a student of arcane magic, you have a ^${itemIds.spellBook}{spellbook}^ containing spells that show the first glimmerings of your true power.`,
      preparingSpellsDescription: `You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your ^${itemIds.spellBook}{spellbook}^ equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.\n\nFor example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your ^${itemIds.spellBook}{spellbook}^. If you prepare the 1st-level spell %${spellIds.magicMissile}{magic missile}%, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.\n\nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your ^${itemIds.spellBook}{spellbook}^ and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.`,
      spellCastingAbilityDescription:
        "Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.",
      castingSpellsDescription:
        "The Wizard table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
      ability: Ability.INT,
      spellFocus: SpellFocus.ARCANE_FOCUS,
      spellLevels: fullCaster,
      features: Features.filter(
        (feature) => feature.classId === 2 && feature.spellCasting
      ),
    },
    spellListId: spellListIds.wizard,
    features: Features.filter(
      (feature) => feature.classId === 2 && !feature.spellCasting
    ),
  },
  {
    id: 3,
    name: "cleric",
    srd: true,
    hitDie: 8,
    description:
      "Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.",
    multiclassingDescription:
      "You must have a Wisdom score of 13 or higher in order to multiclass in or out of this class.",
    multiclassing: {
      abilities: [Ability.WIS],
      greaterThan: 12,
    },
    savingThrows: {
      default: [Ability.WIS, Ability.CHA],
    },
    skills: {
      choices: [
        {
          options: [
            Skill.HISTORY,
            Skill.INSIGHT,
            Skill.MEDICINE,
            Skill.PERSUASION,
            Skill.RELIGION,
          ],
          numberOfChoices: 2,
        },
      ],
    },
    skillChoiceDescription:
      "Choose two skills from History, Insight, Medicine, Persuasion, and Religion.",

    weapons: {
      default: simpleIds,
    },
    weaponDescription: "Clerics are proficient with all simple weapons.",
    armor: {
      default: [ArmorType.LIGHT, ArmorType.MEDIUM, ArmorType.SHIELDS],
    },
    armorDescription:
      "Clerics are proficient with Light Armor, Medium Armor, and shields.",
    tools: {},
    toolsDescription: "Clerics are not proficient with any tools.",
    equipment: {
      default: [{ item: itemIds.shield, quantity: 1 }],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.amulet, quantity: 1 }],
            [{ item: itemIds.reliquary, quantity: 1 }],
            [{ item: itemIds.emblem, quantity: 1 }],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.warhammer, quantity: 1 }],
            [{ item: itemIds.mace, quantity: 1 }],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.scaleMail, quantity: 1 }],
            [{ item: itemIds.leatherArmor, quantity: 1 }],
            [{ item: itemIds.chainMail, quantity: 1 }],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [
              { item: itemIds.crossbowLight, quantity: 1 },
              { item: itemIds.crossbowBolt, quantity: 20 },
            ],
            ...simpleMeleeItemIds.map((id) => [{ item: id, quantity: 1 }]),
            ...simpleRangedItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },

        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.priestsPack, quantity: 1 }],
            [{ item: itemIds.explorersPack, quantity: 1 }],
          ],
        },
      ],
    },
    equipmentDescription: [
      `(a) a ^${itemIds.scaleMail}{scale mail}^, (b) a ^${itemIds.leatherArmor}{leather armor}^, or (c) a ^${itemIds.chainMail}{chain mail}^`,
      `(a) a ^${itemIds.warhammer}{warhammer}^ or (b) a ^${itemIds.mace}{mace}^`,
      `(a) a ^${itemIds.crossbowLight}{light crossbow}^ and 20 ^${itemIds.crossbowBolt}{bolts}^ or (b) any simple weapon`,
      `(a) a ^${itemIds.priestsPack}{priest's pack}^ or (b) an ^${itemIds.explorersPack}{explorer's pack}^`,
      `A ^${itemIds.shield}{shield}^ and a holy symbol`,
    ],

    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: "Divine Domain",
    subClassDescription:
      "At 1st level, you choose a domain shaped by your choice of Deity and the gifts they grant you. Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.\n\nEach domain has a list of spells-its domain spells that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.\n\nIf you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you.",
    subClassFeatureLevels: [1, 2, 6, 8, 17],

    flavorText:
      "Clerics are intermediaries between the mortal world and the distant planes of the gods, using their divine magic to heal the wounded, bless the righteous, and smite the wicked.",
    features: Features.filter(
      (feature) => feature.classId === 3 && !feature.spellCasting
    ),
    spellListId: spellListIds.cleric,
    isSpellCaster: true,
    spellCastingInfo: {
      levelAquired: 1,
      displaySpellLevels: true,
      description: `As a conduit for divine power, you can cast cleric spells.`,
      preparingSpellsDescription: `You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.\n\nFor example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell %${spellIds.cureWounds}{Cure Wounds}%, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.\n\nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.`,
      castingSpellsDescription: `The Cleric table shows how many spell slots you have to cast your cleric spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.`,
      spellCastingAbilityDescription:
        "Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.",
      ability: Ability.WIS,
      spellFocus: SpellFocus.HOLY_SYMBOL,
      spellLevels: fullCaster,
      features: Features.filter(
        (feature) => feature.classId === 3 && feature.spellCasting
      ),
    },
  },
  {
    id: 4,
    name: "rogue",
    hitDie: 8,
    srd: true,
    description:
      "Rogues rely on skill, stealth, and their foes' vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.",
    multiclassing: {
      abilities: [Ability.DEX],
      greaterThan: 12,
    },
    multiclassingDescription:
      "You must have a Dexterity score of 13 or higher in order to multiclass in or out of this class.",
    savingThrows: {
      default: [Ability.DEX, Ability.INT],
    },
    skills: {
      choices: [
        {
          options: [
            Skill.ACROBATICS,
            Skill.ATHLETICS,
            Skill.DECEPTION,
            Skill.INSIGHT,
            Skill.INTIMIDATION,
            Skill.INVESTIGATION,
            Skill.PERCEPTION,
            Skill.PERFORMANCE,
            Skill.PERSUASION,
            Skill.SLEIGHT_OF_HAND,
            Skill.STEALTH,
          ],
          numberOfChoices: 4,
        },
      ],
    },
    skillChoiceDescription:
      "Choose four skills from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth.",

    weapons: {
      default: simpleIds.concat([
        weaponIds.rapier,
        weaponIds.shortsword,
        weaponIds.longsword,
        weaponIds.crossbowHand,
      ]),
    },
    weaponDescription: `Rogues are proficient with all simple weapons, ^${itemIds.rapier}{rapiers}^, ^${itemIds.shortsword}{shortswords}^, ^${itemIds.longsword}{longswords}^, and ^${itemIds.crossbowHand}{hand crossbows}^`,
    armor: {
      default: [ArmorType.LIGHT],
    },
    armorDescription: "Rogues are proficient with light armor.",
    tools: {
      default: [toolIds.thievesTools],
    },
    toolsDescription: `Rogues are proficient with ^${itemIds.thievesTools}{thieves' tools}^.`,
    equipment: {
      default: [
        { item: itemIds.dagger, quantity: 2 },
        { item: itemIds.thievesTools, quantity: 1 },
        { item: itemIds.leatherArmor, quantity: 1 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.rapier, quantity: 1 }],
            [{ item: itemIds.shortsword, quantity: 1 }],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.burglarsPack, quantity: 1 }],
            [{ item: itemIds.dungeoneersPack, quantity: 1 }],
            [{ item: itemIds.explorersPack, quantity: 1 }],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [
              { item: itemIds.shortbow, quantity: 1 },
              { item: itemIds.arrow, quantity: 20 },
            ],
            [{ item: itemIds.shortsword, quantity: 1 }],
          ],
        },
      ],
    },
    equipmentDescription: [
      `(a) a ^${itemIds.rapier}{rapier}^ or (b) a ^${itemIds.shortsword}{shortsword}^`,
      `(a) a ^${itemIds.burglarsPack}{burglar's pack}^, (b) a ^${itemIds.dungeoneersPack}{dungeoneer's pack}^, or (c) an ^${itemIds.explorersPack}{explorer's pack}^`,
      `(a) a ^${itemIds.shortbow}{shortbow}^ and a ^${itemIds.quiver}{quiver}^ of 20 ^${itemIds.arrow}{arrows}^ or (b) a ^${itemIds.shortsword}{shortsword}^`,
      `^${itemIds.leatherArmor}{Leather armor}^, two ^${itemIds.dagger}{daggers}^, and ^${itemIds.thievesTools}{thieves' tools}^`,
    ],

    abilityScoreLevels: [4, 8, 10, 12, 16, 19],
    subClassName: "Roguish Archetype",
    subClassDescription:
      "At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level. ",
    subClassFeatureLevels: [3, 9, 13, 17],
    flavorText:
      "Rogues are cunning and elusive adversaries. Using their wits and agility, they excel in stealth and deception.",
    features: Features.filter((feature) => feature.classId === 4),
  },
  {
    id: 5,
    name: "barbarian",
    srd: true,
    description:
      "For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.",
    multiclassing: {
      abilities: [Ability.STR],
      greaterThan: 12,
    },
    multiclassingDescription:
      "You must have a Strength score of 13 or higher in order to multiclass in or out of this class.",
    hitDie: 12,
    savingThrows: {
      default: [Ability.STR, Ability.CON],
    },
    skills: {
      choices: [
        {
          options: [
            Skill.ANIMAL_HANDLING,
            Skill.ATHLETICS,
            Skill.INTIMIDATION,
            Skill.NATURE,
            Skill.PERCEPTION,
            Skill.SURVIVAL,
          ],
          numberOfChoices: 2,
        },
      ],
    },
    skillChoiceDescription: `Choose two skills from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival.`,
    weapons: {
      default: Object.values(weaponIds),
    },
    weaponDescription:
      "Barbarians are proficient with all simple and martial weapons.",
    armor: {
      default: [ArmorType.LIGHT, ArmorType.MEDIUM, ArmorType.SHIELDS],
    },
    armorDescription:
      "Barbarians are proficient with Light Armor, Medium Armor, Shields",
    tools: {},
    toolsDescription: "Barbarians are not proficient with any tools.",
    equipment: {
      default: [
        { item: itemIds.explorersPack, quantity: 1 },
        { item: itemIds.javelin, quantity: 4 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.greataxe, quantity: 1 }],
            ...martialMeleeItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.handaxe, quantity: 2 }],
            ...simpleMeleeItemIds.map((id) => [{ item: id, quantity: 1 }]),
            ...simpleRangedItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },
    equipmentDescription: [
      `(a) a ^${itemIds.greataxe}{greataxe}^ or (b) any martial melee weapon`,
      `(a) two ^${itemIds.handaxe}{handaxes}^ or (b) any simple weapon`,
      `^${itemIds.explorersPack}{Explorer's pack}^ and four ^${itemIds.javelin}{javelins}^`,
    ],

    abilityScoreLevels: [4, 6, 8, 12, 14, 16, 19],
    subClassName: "Primal Path",
    subClassDescription:
      "At 3rd level, you choose a path that shapes the nature of your rage. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.",
    subClassFeatureLevels: [3, 6, 10, 14],
    flavorText:
      "Barbarians are fierce warriors who draw their power from a primal connection to the spirits of nature and the world around them to fuel an unquenchable rage.",
    features: Features.filter((feature) => feature.classId === 5),
  },
  {
    id: 6,
    name: "bard",
    srd: true,
    hitDie: 8,
    description:
      "Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds. The bard is a master of song, speech, and the magic they contain.",
    multiclassing: {
      abilities: [Ability.CHA],
      greaterThan: 12,
    },
    multiclassingDescription:
      "You must have a Charisma score of 13 or higher in order to multiclass in or out of this class.",
    savingThrows: {
      default: [Ability.DEX, Ability.CHA],
    },
    skills: {
      choices: [
        {
          options: Object.values(Skill),
          numberOfChoices: 3,
        },
      ],
    },
    skillChoiceDescription:
      "Rogues are proficient in any three skills of their choice.",
    weapons: {
      default: simpleIds.concat([
        weaponIds.longsword,
        weaponIds.rapier,
        weaponIds.shortsword,
        weaponIds.crossbowHand,
      ]),
    },
    weaponDescription: `Bards are proficient with all simple weapons, plus the ^${itemIds.longsword}{longsword}^, ^${itemIds.rapier}{rapier}^, ^${itemIds.shortsword}{shortsword}^, and ^${itemIds.crossbowHand}{hand crossbow}^`,
    armor: {
      default: [ArmorType.LIGHT],
    },
    armorDescription: "Bards are proficient with light armor.",

    tools: {
      choices: [
        {
          numberOfChoices: 3,
          options: instrumentIds,
        },
      ],
    },
    toolsDescription:
      "Bards are proficient with three musical instruments of their choice.",
    equipment: {
      default: [
        { item: itemIds.leatherArmor, quantity: 1 },
        { item: itemIds.dagger, quantity: 1 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.rapier, quantity: 1 }],
            [{ item: itemIds.longsword, quantity: 1 }],
            ...simpleIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.diplomatsPack, quantity: 1 }],
            [{ item: itemIds.entertainersPack, quantity: 1 }],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            ...instrumentItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },
    equipmentDescription: [
      `(a) a ^${itemIds.rapier}{rapier}^ or (b) a ^${itemIds.longsword}{longsword}^ or (c) any simple weapon`,
      `(a) a ^${itemIds.diplomatsPack}{diplomat's pack}^ or (b) an ^${itemIds.entertainersPack}{entertainer's pack}^`,
      `^${itemIds.leatherArmor}{Leather armor}^ a ^${itemIds.dagger}{dagger}^, and a musical instrument`,
    ],
    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassFeatureLevels: [3, 6, 14],
    subClassName: "Bardic College",
    subClassDescription:
      "At 3rd level, you delve into the advanced techniques of a bard college of your choice. Your choice grants you features at 3rd level and again at 6th and 14th level.",

    flavorText:
      "Bards are the masters of song, speech, and the magic they contain. They use their talents to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds.",
    features: Features.filter(
      (feature) => feature.classId === 6 && !feature.spellCasting
    ),
    spellListId: spellListIds.bard,
    spellCastingInfo: {
      ability: Ability.CHA,
      spellCastingAbilityDescription:
        "Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.",
      castingSpellsDescription: `The Bard table shows how many spell slots you have to cast your bard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. For example, if you know the 1st-level spell %${spellIds.cureWounds}{Cure Wounds}% and have a 1st-level and a 2nd-level spell slot available, you can cast %${spellIds.cureWounds}{Cure Wounds}% using either slot.`,
      description:
        "You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations.",
      levelAquired: 1,
      displaySpellLevels: true,
      spellLevels: fullCaster,
      features: Features.filter(
        (feature) => feature.classId === 6 && feature.spellCasting
      ),
      spellFocus: SpellFocus.MUSICAL_INSTRUMENT,
    },
  },
  {
    id: 7,
    name: "druid",
    srd: true,
    hitDie: 8,
    description:
      "Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment of nature's resilience, cunning, and fury. They claim no mastery over nature, but see themselves as extensions of nature's indomitable will.",
    multiclassing: {
      abilities: [Ability.WIS],
      greaterThan: 12,
    },
    multiclassingDescription:
      "You must have a Wisdom score of 13 or higher in order to multiclass in or out of this class.",
    savingThrows: {
      default: [Ability.INT, Ability.WIS],
    },
    skills: {
      choices: [
        {
          options: [
            Skill.ARCANA,
            Skill.ANIMAL_HANDLING,
            Skill.INSIGHT,
            Skill.MEDICINE,
            Skill.NATURE,
            Skill.PERCEPTION,
            Skill.RELIGION,
            Skill.SURVIVAL,
          ],
          numberOfChoices: 2,
        },
      ],
    },
    skillChoiceDescription: `Choose two skills from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival.`,
    weapons: {
      default: [
        weaponIds.club,
        weaponIds.dagger,
        weaponIds.dart,
        weaponIds.javelin,
        weaponIds.mace,
        weaponIds.quarterstaff,
        weaponIds.scimitar,
        weaponIds.sickle,
        weaponIds.sling,
        weaponIds.spear,
      ],
    },
    weaponDescription: `Druids are proficient with  ^${itemIds.club}{club}^ , ^${itemIds.dagger}{dagger}^, ^${itemIds.dart}{dart}^, ^${itemIds.javelin}{javelin}^, ^${itemIds.mace}{mace}^, ^${itemIds.quarterstaff}{quarterstaff}^, ^${itemIds.scimitar}{scimitar}^, ^${itemIds.sickle}{sickle}^, ^${itemIds.sling}{sling}^, and ^${itemIds.spear}{spear}^`,
    armor: {
      default: [ArmorType.LIGHT, ArmorType.MEDIUM, ArmorType.SHIELDS],
    },
    armorDescription:
      "Druids are proficient with Light Armor, Medium Armor, and Shields. However, a druid will not wear armor or use shields made of metal.",
    tools: {
      default: [toolIds.herbalismKit],
    },
    toolsDescription: `Druids are proficient with ^${itemIds.herbalismKit}{herbalism kits}^.`,
    equipment: {
      default: [
        { item: itemIds.leatherArmor, quantity: 1 },
        { item: itemIds.explorersPack, quantity: 1 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.scimitar, quantity: 1 }],
            ...simpleMeleeItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.sprigOfMistletoe, quantity: 1 }],
            [{ item: itemIds.totem, quantity: 1 }],
            [{ item: itemIds.woodenStaff, quantity: 1 }],
            [{ item: itemIds.yewWand, quantity: 1 }],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.shield, quantity: 1 }],
            ...simpleMeleeItemIds.map((id) => [{ item: id, quantity: 1 }]),
            ...simpleRangedItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },
    equipmentDescription: [
      `(a) a ^${itemIds.scimitar}{scimitar}^ or (b) any simple melee weapon`,
      `(a) a ^${itemIds.shield}{shield}^ or (b) any simple melee weapon`,
      `^${itemIds.leatherArmor}{Leather armor}^, an ^${itemIds.explorersPack}{explorer's pack}^, and a druidic focus`,
    ],

    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: "Druidic Circle",
    subClassDescription:
      "At 2nd level, you choose to identify with a circle of druids. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.",
    subClassFeatureLevels: [2, 6, 10, 14],

    flavorText:
      "Druids are the embodiment of nature's resilience, cunning, and fury. They claim no mastery over nature, but see themselves as extensions of nature's indomitable will.",
    features: Features.filter(
      (feature) => feature.classId === 7 && !feature.spellCasting
    ),
    spellListId: spellListIds.druid,
    isSpellCaster: true,
    spellCastingInfo: {
      ability: Ability.WIS,
      spellCastingAbilityDescription:
        "Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.",
      castingSpellsDescription: `The Druid table shows how many spell slots you have to cast your druid spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.`,
      preparingSpellsDescription: `You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your Druid level (minimum of one spell). The spells must be of a level for which you have spell slots.\n\nFor example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell Cure Wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.\n\nYou can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.`,
      description:
        "Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will.",
      levelAquired: 1,
      displaySpellLevels: true,
      spellLevels: fullCaster,
      features: Features.filter(
        (feature) => feature.classId === 7 && feature.spellCasting
      ),
      spellFocus: SpellFocus.DRUIDIC_FOCUS,
    },
  },
  {
    id: 8,
    name: "monk",
    srd: true,
    hitDie: 8,
    description:
      "Monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.",
    multiclassing: {
      abilities: [Ability.DEX, Ability.WIS],
      greaterThan: 12,
    },
    multiclassingDescription:
      "You must have a Dexterity score and a Wisdom score of 13 or higher in order to multiclass in or out of this class.",
    savingThrows: {
      default: [Ability.STR, Ability.DEX],
    },
    skills: {
      choices: [
        {
          options: [
            Skill.ACROBATICS,
            Skill.ATHLETICS,
            Skill.HISTORY,
            Skill.INSIGHT,
            Skill.RELIGION,
            Skill.STEALTH,
          ],
          numberOfChoices: 2,
        },
      ],
    },
    skillChoiceDescription: `Choose two skills from Acrobatics, Athletics, History, Insight, Religion, and Stealth.`,
    weapons: {
      default: simpleIds.concat([weaponIds.shortsword]),
    },
    weaponDescription: `Monks are proficient with all simple melee weapons and ^${itemIds.shortsword}{shortswords}^`,
    armor: {},
    armorDescription: "Monks are not proficient with armor or shields.",
    tools: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...instrumentIds, ...artisanIds],
        },
      ],
    },
    toolsDescription:
      "Choose one type of artisan's tools or one musical instrument.",
    equipment: {
      default: [{ item: itemIds.dart, quantity: 10 }],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.shortsword, quantity: 1 }],
            ...simpleMeleeItemIds.map((id) => [{ item: id, quantity: 1 }]),
            ...simpleRangedItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.dungeoneersPack, quantity: 1 }],
            [{ item: itemIds.explorersPack, quantity: 1 }],
          ],
        },
      ],
    },
    equipmentDescription: [
      `(a) a ^${itemIds.shortsword}{shortsword}^ or (b) any simple weapon`,
      `(a) a ^${itemIds.dungeoneersPack}{dungeoneer's pack}^ or (b) an ^${itemIds.explorersPack}{explorer's pack}^`,
      `^${itemIds.dart}{10 darts}^`,
    ],

    abilityScoreLevels: [4, 6, 8, 10, 12, 14, 16, 19],
    subClassName: "Monastic Tradition",
    subClassDescription:
      "When you reach 3rd level, you commit yourself to a monastic tradition. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.",

    subClassFeatureLevels: [3, 6, 11, 17],
    flavorText:
      "Monks are martial artists who use ki to perform amazing feats. They are masters of unarmed combat, and they are known for their ability to catch arrows, dodge blows, and move with extraordinary speed.",
    features: Features.filter((feature) => feature.classId === 8),
  },
  {
    id: 9,
    name: "paladin",
    srd: true,
    hitDie: 10,
    description:
      "Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond.",
    multiclassing: {
      abilities: [Ability.STR, Ability.CHA],
      greaterThan: 12,
    },
    multiclassingDescription:
      "You must have a Strength and Charisma score of 13 or higher in order to multiclass in or out of this class",
    savingThrows: {
      default: [Ability.WIS, Ability.CHA],
    },
    skills: {
      choices: [
        {
          options: [
            Skill.ATHLETICS,
            Skill.INSIGHT,
            Skill.INTIMIDATION,
            Skill.MEDICINE,
            Skill.PERSUASION,
            Skill.RELIGION,
          ],
          numberOfChoices: 2,
        },
      ],
    },
    skillChoiceDescription:
      "Choose two skills from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion.",
    weapons: {
      default: Object.values(weaponIds),
    },
    weaponDescription:
      "Paladins are proficient with all simple and martial weapons.",
    armor: {
      default: [ArmorType.LIGHT, ArmorType.MEDIUM, ArmorType.HEAVY],
    },
    armorDescription: `Paladins are proficient with all armor and ^${itemIds.shield}{shields}^.`,
    tools: {},
    toolsDescription: "Paladins are not proficient with any tools.",
    equipment: {
      default: [{ item: itemIds.chainMail, quantity: 1 }],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            ...martialMeleeItemIds.map((id) => [{ item: id, quantity: 1 }]),
            ...martialRangedItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            ...martialMeleeItemIds.map((id) => [{ item: id, quantity: 1 }]),
            ...martialRangedItemIds.map((id) => [{ item: id, quantity: 1 }]),
            [{ item: itemIds.shield, quantity: 1 }],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.javelin, quantity: 5 }],
            ...simpleMeleeItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.priestsPack, quantity: 1 }],
            [{ item: itemIds.explorersPack, quantity: 1 }],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.amulet, quantity: 1 }],
            [{ item: itemIds.reliquary, quantity: 1 }],
            [{ item: itemIds.emblem, quantity: 1 }],
          ],
        },
      ],
    },
    equipmentDescription: [
      `^${itemIds.chainMail}{Chain mail}^ and a holy symbol.`,
      `(a) a martial weapon and a ^${itemIds.shield}{shield}^ or (b) two martial weapons`,
      `(a) five ^${itemIds.javelin}{javelins}^ or (b) any simple melee weapon`,
      `(a) a ^${itemIds.priestsPack}{priest's pack}^ or (b) an ^${itemIds.explorersPack}{explorer's pack}^`,
    ],
    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: "Sacred Oath",
    subClassDescription:
      "When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature.",
    subClassFeatureLevels: [3, 7, 15, 20],

    flavorText:
      "Paladins are holy warriors bound to a sacred oath, using their divine magic to heal the wounded, bless the righteous, and smite the wicked.",
    features: Features.filter(
      (feature) => feature.classId === 9 && !feature.spellCasting
    ),
    spellListId: spellListIds.paladin,
    spellCastingInfo: {
      ability: Ability.CHA,
      description:
        "By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does.",
      spellCastingAbilityDescription:
        "Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.",
      spellFocus: SpellFocus.HOLY_SYMBOL,
      castingSpellsDescription:
        "The Paladin table shows how many spell slots you have to cast your paladin spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
      preparingSpellsDescription: `You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.\n\nFor example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell %${spellIds.cureWounds}{Cure Wounds}%, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.\n\nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.`,
      levelAquired: 2,
      spellLevels: halfCaster,
      displaySpellLevels: true,
      features: Features.filter(
        (feature) => feature.classId === 9 && feature.spellCasting
      ),
    },
  },
  {
    id: 10,
    name: "ranger",
    srd: true,
    hitDie: 10,
    description:
      "Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.",
    multiclassingDescription:
      "You must have a Dexterity and Wisdom score of 13 or higher in order to multiclass in or out of this class.",
    multiclassing: {
      abilities: [Ability.DEX, Ability.WIS],
      greaterThan: 12,
    },
    savingThrows: {
      default: [Ability.STR, Ability.DEX],
    },
    skills: {
      choices: [
        {
          options: [
            Skill.ANIMAL_HANDLING,
            Skill.ATHLETICS,
            Skill.INSIGHT,
            Skill.INVESTIGATION,
            Skill.NATURE,
            Skill.PERCEPTION,
            Skill.STEALTH,
            Skill.SURVIVAL,
          ],
          numberOfChoices: 3,
        },
      ],
    },
    skillChoiceDescription: `Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival`,
    weapons: {
      default: Object.values(weaponIds),
    },
    weaponDescription:
      "Rangers are proficient with all simple and martial weapons.",
    armor: {
      default: [ArmorType.LIGHT, ArmorType.MEDIUM, ArmorType.SHIELDS],
    },
    armorDescription:
      "Rangers are proficient with Light Armor and Medium Armor.",
    tools: {},
    toolsDescription: "Rangers are not proficient with any tools.",

    equipment: {
      default: [
        { item: itemIds.arrow, quantity: 20 },
        {
          item: itemIds.quiver,
          quantity: 1,
        },
        {
          item: itemIds.longbow,
          quantity: 1,
        },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.scaleMail, quantity: 1 }],
            [{ item: itemIds.leatherArmor, quantity: 1 }],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.shortsword, quantity: 1 }],
            ...simpleMeleeItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.shortsword, quantity: 1 }],
            ...simpleMeleeItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.dungeoneersPack, quantity: 1 }],
            [{ item: itemIds.explorersPack, quantity: 1 }],
          ],
        },
      ],
    },
    equipmentDescription: [
      `(a) ^${itemIds.scaleMail}{scale mail}^ or (b) ^${itemIds.leatherArmor}{leather armor}^`,
      `(a) Two ^${itemIds.shortsword}{shortswords}^ or (b) any two simple melee weapon`,
      `(a) a ^${itemIds.dungeoneersPack}{dungeoneer's pack}^ or (b) an ^${itemIds.explorersPack}{explorer's pack}^`,
      `^${itemIds.longbow}{A longbow}^ and a ^${itemIds.quiver}{quiver}^ of 20 ^${itemIds.arrow}{arrows}^`,
    ],

    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: "Ranger Conclave",
    subClassDescription:
      "At 3rd level, you choose to emulate the ideals and training of a ranger conclave. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level.",
    subClassFeatureLevels: [3, 7, 11, 15, 18],

    flavorText:
      "Rangers are hunters and wilderness warriors who use their knowledge of the land and their fighting skills to protect the wild places of the world.",
    features: Features.filter(
      (feature) => feature.classId === 10 && !feature.spellCasting
    ),
    spellListId: spellListIds.ranger,
    spellCastingInfo: {
      ability: Ability.WIS,
      spellCastingAbilityDescription:
        "Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.",
      castingSpellsDescription:
        "The Ranger table shows how many spell slots you have to cast your ranger spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
      levelAquired: 2,
      displaySpellLevels: true,
      spellLevels: halfCaster,
      features: Features.filter(
        (feature) => feature.classId === 10 && feature.spellCasting
      ),
      spellFocus: SpellFocus.DRUIDIC_FOCUS,
      description:
        "By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does.",
    },
  },
  {
    id: 11,
    name: "sorcerer",
    srd: true,
    description:
      "Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. No one chooses sorcery; the power chooses the sorcerer.",
    multiclassing: {
      abilities: [Ability.CHA],
      greaterThan: 12,
    },
    multiclassingDescription:
      "You must have a Charisma score of 13 or higher in order to multiclass in or out of this class.",
    hitDie: 6,
    savingThrows: {
      default: [Ability.CON, Ability.CHA],
    },
    skillChoiceDescription:
      "Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion",
    skills: {
      choices: [
        {
          options: [
            Skill.ARCANA,
            Skill.DECEPTION,
            Skill.INSIGHT,
            Skill.INTIMIDATION,
            Skill.PERSUASION,
            Skill.RELIGION,
          ],
          numberOfChoices: 2,
        },
      ],
    },

    weapons: {
      default: [
        weaponIds.dagger,
        weaponIds.dart,
        weaponIds.sling,
        weaponIds.quarterstaff,
        weaponIds.crossbowLight,
      ],
    },
    weaponDescription: `Sorcerers are proficient with ^${itemIds.dagger}{daggers}^, ^${itemIds.dart}{darts}^, ^${itemIds.sling}{slings}^, ^${itemIds.quarterstaff}{quarterstaffs}^, and ^${itemIds.crossbowLight}{light crossbows}^`,
    armor: {},
    armorDescription: "Sorcerers are not proficient with armor.",
    tools: {},
    toolsDescription: "Sorcerers are not proficient with any tools.",
    equipment: {
      default: [{ item: itemIds.dagger, quantity: 2 }],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [
              { item: itemIds.crossbowLight, quantity: 1 },
              { item: itemIds.crossbowBolt, quantity: 20 },
            ],
            ...simpleMeleeItemIds.map((id) => [{ item: id, quantity: 1 }]),
            ...simpleRangedItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.dungeoneersPack, quantity: 1 }],
            [{ item: itemIds.explorersPack, quantity: 1 }],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.componentPouch, quantity: 1 }],
            [{ item: itemIds.staff, quantity: 1 }],
            [{ item: itemIds.wand, quantity: 1 }],
            [{ item: itemIds.crystal, quantity: 1 }],
            [{ item: itemIds.rod, quantity: 1 }],
            [{ item: itemIds.orb, quantity: 1 }],
          ],
        },
      ],
    },
    equipmentDescription: [
      `(a) a ^${itemIds.crossbowLight}{light crossbow}^ and 20 ^${itemIds.crossbowBolt}{bolts}^ or (b) any simple weapon`,
      `(a) a ^${itemIds.componentPouch}{component pouch}^ or (b) an arcane focus`,
      `(a) a ^${itemIds.dungeoneersPack}{dungeoneer's pack}^ or (b) an ^${itemIds.explorersPack}{explorer's pack}^`,
      `Two ^${itemIds.dagger}{daggers}^`,
    ],

    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: "Sorcerous Origin",
    subClassDescription:
      "Choose a sorcerous origin, which describes the source of your innate magical power. Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.",
    subClassFeatureLevels: [1, 6, 14, 18],
    flavorText:
      "Sorcerers are spellcasters who draw on innate magic. They are the masters of the arcane, using their knowledge and power to cast spells that can change the world around them.",
    features: Features.filter(
      (feature) => feature.classId === 11 && !feature.spellCasting
    ),
    spellListId: spellListIds.sorcerer,
    spellCastingInfo: {
      ability: Ability.CHA,
      description:
        "An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells.",
      spellCastingAbilityDescription:
        "Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.",
      castingSpellsDescription:
        "The Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
      levelAquired: 1,
      displaySpellLevels: true,
      spellLevels: fullCaster,
      features: Features.filter(
        (feature) => feature.classId === 11 && feature.spellCasting
      ),
      spellFocus: SpellFocus.ARCANE_FOCUS,
    },
  },
  {
    id: 12,
    name: "warlock",
    srd: true,
    hitDie: 8,
    description:
      "Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular.",
    multiclassing: {
      abilities: [Ability.CHA],
      greaterThan: 12,
    },
    multiclassingDescription:
      "You must have a Charisma score of 13 or higher in order to multiclass in or out of this class.",
    savingThrows: {
      default: [Ability.WIS, Ability.CHA],
    },
    skills: {
      choices: [
        {
          options: [
            Skill.ARCANA,
            Skill.DECEPTION,
            Skill.HISTORY,
            Skill.INTIMIDATION,
            Skill.INVESTIGATION,
            Skill.NATURE,
            Skill.RELIGION,
          ],
          numberOfChoices: 2,
        },
      ],
    },
    skillChoiceDescription:
      "Choose two from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion",
    weapons: {
      default: simpleIds,
    },
    weaponDescription: "Warlocks are proficient with all simple weapons.",
    armor: {
      default: [ArmorType.LIGHT],
    },
    armorDescription: "Warlocks are proficient with Light Armor.",
    tools: {},
    toolsDescription: "Warlocks are not proficient with any tools.",

    equipment: {
      default: [
        { item: itemIds.dagger, quantity: 2 },
        { item: itemIds.leatherArmor, quantity: 1 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [
              { item: itemIds.crossbowLight, quantity: 1 },
              { item: itemIds.crossbowBolt, quantity: 20 },
            ],
            ...simpleMeleeItemIds.map((id) => [{ item: id, quantity: 1 }]),
            ...simpleRangedItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.componentPouch, quantity: 1 }],
            [{ item: itemIds.staff, quantity: 1 }],
            [{ item: itemIds.wand, quantity: 1 }],
            [{ item: itemIds.crystal, quantity: 1 }],
            [{ item: itemIds.rod, quantity: 1 }],
            [{ item: itemIds.orb, quantity: 1 }],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.dungeoneersPack, quantity: 1 }],
            [{ item: itemIds.scholarsPack, quantity: 1 }],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            ...simpleMeleeItemIds.map((id) => [{ item: id, quantity: 1 }]),
            ...simpleRangedItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },
    equipmentDescription: [
      `(a) a ^${itemIds.crossbowLight}{light crossbow}^ and 20 ^${itemIds.crossbowBolt}{bolts}^ or (b) any simple weapon`,
      `(a) a ^${itemIds.componentPouch}{component pouch}^ or (b) an arcane focus`,
      `(a) a ^${itemIds.dungeoneersPack}{dungeoneer's pack}^ or (b) a ^${itemIds.scholarsPack}{scholar's pack}^`,
      `Two ^${itemIds.dagger}{daggers}^, ^${itemIds.leatherArmor}{leather armor}^, and an arcane focus`,
    ],

    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: "Otherworldly Patron",
    subClassDescription:
      "At 1st level, you have struck a bargain with an otherworldly being of your choice. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.",
    subClassFeatureLevels: [1, 6, 10, 14],

    flavorText:
      "Warlocks are wielders of magic who have forged a pact with an otherworldly being. Whether it's a demon, a devil, a fey, or some other powerful entity, warlocks draw their power from their patron.",
    features: Features.filter(
      (feature) => feature.classId === 12 && !feature.spellCasting
    ),
    spellListId: spellListIds.warlock,
    spellCastingInfo: {
      ability: Ability.CHA,
      description:
        "Your arcane research and the magic bestowed on you by your patron have given you facility with spells.",
      spellCastingAbilityDescription:
        "Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.",
      castingSpellsDescription:
        "The Warlock table shows how many spell slots you have to cast your warlock spells of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.",
      levelAquired: 1,
      displaySpellLevels: false,
      spellLevels: warlockSpellSlots,
      features: Features.filter(
        (feature) => feature.classId === 12 && feature.spellCasting
      ),
      spellFocus: SpellFocus.ARCANE_FOCUS,
    },
  },
  //artificer
  {
    id: 13,
    name: "artificer",
    source: "Wayfinder’s Guide to Eberron",
    flavorText:
      "Masters of invention, artificers use ingenuity and magic to unlock extraordinary capabilities in objects.",
    description:
      "Masters of invention, artificers use ingenuity and magic to unlock extraordinary capabilities in objects. They see magic as a complex system waiting to be decoded and then harnessed in their spells and inventions. You can find everything you need to play one of these inventors in the next few sections.\n\nArtificers use a variety of tools to channel their arcane power. To cast a spell, an artificer might use alchemist's supplies to create a potent elixir, calligrapher's supplies to inscribe a sigil of power, or tinker's tools to craft a temporary charm. The magic of artificers is tied to their tools and their talents, and few other characters can produce the right tool for a job as well as an artificer.",
    multiclassing: {
      abilities: [Ability.INT],
      greaterThan: 12,
    },
    multiclassingDescription:
      "You must have an Intelligence score of 13 or higher in order to multiclass in or out of this class.",
    hitDie: 8,
    armor: {
      default: [ArmorType.LIGHT, ArmorType.MEDIUM, ArmorType.SHIELDS],
    },
    armorDescription:
      "Artificers are proficient with Light Armor, Medium Armor, and Shields.",
    savingThrows: {
      default: [Ability.CON, Ability.INT],
    },
    toolsDescription: `Artificers are proficient with a variety of tools. All artificers are proficient with ^${itemIds.thievesTools}{Thieves' Tools}^ and ^${itemIds.thievesTools}{Tinker's Tools}^. Additionally, you can choose one additional artisan's tool of your choice.`,
    tools: {
      default: [toolIds.thievesTools, toolIds.tinkersTools],
      choices: [
        {
          numberOfChoices: 1,
          options: artisanIds,
        },
      ],
    },
    skills: {
      choices: [
        {
          options: [
            Skill.ARCANA,
            Skill.HISTORY,
            Skill.INVESTIGATION,
            Skill.MEDICINE,
            Skill.NATURE,
            Skill.PERCEPTION,
            Skill.SLEIGHT_OF_HAND,
            Skill.INSIGHT,
          ],
          numberOfChoices: 2,
        },
      ],
    },
    skillChoiceDescription:
      "Choose two from Arcana, History, Investigation, Medicine, Nature, Perception, Sleight of Hand, and Insight.",
    weaponDescription: "Artificers are proficient with simple weapons.",
    weapons: {
      default: simpleIds,
    },

    equipment: {
      default: [
        { item: itemIds.dagger, quantity: 1 },
        { item: itemIds.crossbowLight, quantity: 1 },
        { item: itemIds.crossbowBolt, quantity: 20 },
        { item: itemIds.leatherArmor, quantity: 1 },
        { item: itemIds.thievesTools, quantity: 1 },
        { item: itemIds.dungeoneersPack, quantity: 1 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.scaleMail, quantity: 1 }],
            [{ item: itemIds.studdedLeatherArmor, quantity: 1 }],
          ],
        },
        {
          numberOfChoices: 2,
          options: [
            ...simpleMeleeItemIds.map((id) => [{ item: id, quantity: 1 }]),
            ...simpleRangedItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },
    equipmentDescription: [
      `(a) ^${itemIds.scaleMail}{Scale mail}^ or (b) ^${itemIds.studdedLeatherArmor}{studded leather armor}^`,
      `Any two simple weapons`,
      `^${itemIds.thievesTools}{thieves' tools}^, and a ^${itemIds.dungeoneersPack}{dungeoneer's pack}^`,
      `^${itemIds.crossbowLight}{A light crossbow}^ and 20 ^${itemIds.crossbowBolt}{bolts}^`,
    ],

    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: "Artficer Specialist",
    subClassDescription:
      "At 3rd level, you choose the type of specialist you are. Your choice grants you features at 5th level and again at 9th and 15th level.",
    subClassFeatureLevels: [3, 5, 9, 15],
    features: Features.filter(
      (feature) => feature.classId === 13 && !feature.spellCasting
    ),
    spellListId: spellListIds.artificer,
    spellCastingInfo: {
      displaySpellLevels: true,
      ability: Ability.INT,
      levelAquired: 1,
      spellLevels: {
        1: {
          1: 2,
        },
        ...halfCaster,
      },
      spellCastingAbilityDescription:
        "Intelligence is your spellcasting ability for your artificer spells; your understanding of the theory behind magic allows you to wield these spells with superior skill. You use your Intelligence whenever an artificer spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for an artificer spell you cast and when making an attack roll with one.",
      description:
        "You've studied the workings of magic and how to cast spells, channeling the magic through objects. To observers, you don't appear to be casting spells in a conventional way; you appear to produce wonders from mundane items and outlandish inventions.",
      spellFocus: SpellFocus.ARTISAN_TOOLS,
      spellFocusDescription: `You produce your artificer spell effects through your tools. You must have a spellcasting focus - specifically ^${itemIds.thievesTools}{thieves' tools}^ or some kind of artisan's tool - in hand when you cast any spell with this Spellcasting feature (meaning the spell has an "M" component when you cast it). You must be proficient with the tool to use it in this way. See chapter 5, "Equipment," in the Player's Handbook for descriptions of these tools.\n\nAfter you gain the Infuse Item feature at 2nd level, you can also use any item bearing one of your infusions as a spellcasting focus.`,
      castingSpellsDescription:
        "The Artificer table shows how many spell slots you have to cast your artificer spells. To cast one of your artificer spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
      preparingSpellsDescription: `You prepare the list of artificer spells that are available for you to cast, choosing from the artificer spell list. When you do so, choose a number of artificer spells equal to your Intelligence modifier + half your artificer level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.\n\nFor example, if you are a 5th-level artificer, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell %${spellIds.cureWounds}{Cure Wounds}%, you can cast it using a lst-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.\n\nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of artificer spells requires time spent tinkering with your spellcasting focuses: at least 1 minute per spell level for each spell on your list.`,
      features: Features.filter(
        (feature) => feature.classId === 13 && feature.spellCasting
      ),
    },
  },
];
export default Classes;
