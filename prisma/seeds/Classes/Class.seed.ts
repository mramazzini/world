import { ArmorType, Prisma, Ability, WeaponGroup } from '@prisma/client';
import { weaponIds } from '../Items/Weapons/Weapons.seed';
import { itemIds } from '../Items/ItemIds';

import { toolIds } from '../Items/Tools/Tool.seed';
import { classIds } from './ClassIds';

const Classes: Prisma.ClassCreateManyInput[] = [
  {
    id: classIds.fighter,
    srd: true,
    slug: 'fighter',
    name: 'Fighter',
    hitDie: 10,
    flavorText:
      'Fighters are the warriors of the realm. They are the masters of weapons and armor, and they are well acquainted with death, both meting it out and staring it defiantly in the face.',
    description:
      'Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. They are well acquainted with death, both meting it out and staring it defiantly in the face.',

    freeSavingThrowProficiencies: [Ability.STR, Ability.CON],
    savingThrowDescription:
      'Fighters are proficient in Strength and Constitution saving throws',
    freeWeaponProficiencyGroups: [WeaponGroup.ALL_WEAPONS],
    weaponProficiencyDescription:
      'Fighters are proficient in all simple and martial weapons',

    freeArmorProficiencies: [
      ArmorType.LIGHT,
      ArmorType.MEDIUM,
      ArmorType.HEAVY,
      ArmorType.SHIELDS,
    ],
    skillDescription:
      'Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival.',

    armorProficiencyDescription:
      'Fighters are proficient with all armor and shields',
    toolProficiencyDescription: 'Fighters are not proficient with any tools',

    itemDescription: [
      `(a) ^${itemIds.chainMail}{chain mail}^ or (b) ^${itemIds.leatherArmor}{leather}^, ^${itemIds.longbow}{longbow}^, and 20 ^${itemIds.arrow}{arrows}^`,
      `(a) a martial weapon and a ^${itemIds.shield}{shield}^ or (b) two martial weapons`,
      `(a) a ^${itemIds.crossbowLight}{light crossbow}^ and 20 ^${itemIds.crossbowBolt}{bolts}^ or (b) two ^${itemIds.handaxe}{handaxes}^`,
      `(a) a ^${itemIds.dungeoneersPack}{dungeoneer's pack}^ or (b) an ^${itemIds.explorersPack}{explorer's pack}^`,
    ],
    abilityScoreLevels: [4, 6, 8, 12, 14, 16, 19],
    subClassName: 'Martial Archetype',
    subClassDescription:
      'At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.',
    subClassFeatureLevels: [3, 7, 10, 15, 18],
  },

  {
    id: classIds.wizard,

    name: 'Wizard',
    slug: 'wizard',
    srd: true,
    description:
      'Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute force mind control. Their magic conjures monsters from other planes of existence, glimpses the future, or turns slain foes into zombies. Their mightiest spells change one substance into another, call meteors down from the sky, or open portals to other worlds.',
    flavorText:
      'Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute-force mind control.',

    hitDie: 6,
    savingThrowDescription:
      'Wizards are proficient in Intelligence and Wisdom saving throws',
    freeSavingThrowProficiencies: [Ability.INT, Ability.WIS],
    skillDescription:
      'Choose two skills from Arcana, History, Insight, Investigation, Medicine, and Religion.',
    armorProficiencyDescription: 'Wizards are not proficient with any armor.',

    weaponProficiencyDescription:
      'Wizards are proficient with daggers, darts, slings, quarterstaffs, and light crossbows.',

    toolProficiencyDescription: 'Wizards are not proficient with any tools.',
    freeWeaponProficiencyIds: [
      weaponIds.dagger,
      weaponIds.quarterstaff,
      weaponIds.crossbowLight,
      weaponIds.dart,
      weaponIds.sling,
    ],

    freeItemIds: [{ item: itemIds.spellBook, quantity: 1 }],

    itemDescription: [
      `(a) a ^${itemIds.quarterstaff}{quarterstaff}^ or (b) a ^${itemIds.dagger}{dagger}^`,
      `(a) a ^${itemIds.componentPouch}{component pouch}^ or (b) an arcane focus`,
      `(a) a ^${itemIds.scholarsPack}{scholar's pack}^ or (b) an ^${itemIds.explorersPack}{explorer's pack}^`,
      `A ^${itemIds.spellBook}{spellbook}^`,
    ],
    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: 'Arcane Tradition',
    subClassDescription:
      'When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of the following schools. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.',
    subClassFeatureLevels: [2, 6, 10, 14],
  },
  {
    id: classIds.cleric,
    name: 'Cleric',
    slug: 'cleric',
    srd: true,
    hitDie: 8,
    description:
      'Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.',
    savingThrowDescription:
      'Clerics are proficient in Wisdom and Charisma saving throws',
    freeSavingThrowProficiencies: [Ability.WIS, Ability.CHA],

    skillDescription:
      'Choose two skills from History, Insight, Medicine, Persuasion, and Religion.',
    freeWeaponProficiencyGroups: [WeaponGroup.ALL_SIMPLE],
    weaponProficiencyDescription:
      'Clerics are proficient with all simple weapons.',

    freeArmorProficiencies: [
      ArmorType.LIGHT,
      ArmorType.MEDIUM,
      ArmorType.SHIELDS,
    ],
    armorProficiencyDescription:
      'Clerics are proficient with Light Armor, Medium Armor, and shields.',
    toolProficiencyDescription: 'Clerics are not proficient with any tools.',
    freeItemIds: [{ item: itemIds.shield, quantity: 1 }],

    itemDescription: [
      `(a) a ^${itemIds.scaleMail}{scale mail}^, (b) a ^${itemIds.leatherArmor}{leather armor}^, or (c) a ^${itemIds.chainMail}{chain mail}^`,
      `(a) a ^${itemIds.warhammer}{warhammer}^ or (b) a ^${itemIds.mace}{mace}^`,
      `(a) a ^${itemIds.crossbowLight}{light crossbow}^ and 20 ^${itemIds.crossbowBolt}{bolts}^ or (b) any simple weapon`,
      `(a) a ^${itemIds.priestsPack}{priest's pack}^ or (b) an ^${itemIds.explorersPack}{explorer's pack}^`,
      `A ^${itemIds.shield}{shield}^ and a holy symbol`,
    ],

    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: 'Divine Domain',
    subClassDescription:
      "At 1st level, you choose a domain shaped by your choice of Deity and the gifts they grant you. Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.\n\nEach domain has a list of spells-its domain spells that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.\n\nIf you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you.",
    subClassFeatureLevels: [1, 2, 6, 8, 17],

    flavorText:
      'Clerics are intermediaries between the mortal world and the distant planes of the gods, using their divine magic to heal the wounded, bless the righteous, and smite the wicked.',
  },
  {
    id: classIds.rogue,
    name: 'Rogue',
    slug: 'rogue',
    hitDie: 8,
    srd: true,
    description:
      "Rogues rely on skill, stealth, and their foes' vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.",
    freeSavingThrowProficiencies: [Ability.DEX, Ability.INT],
    savingThrowDescription:
      'Rogues are proficient in Dexterity and Intelligence saving throws',

    skillDescription:
      'Choose four skills from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth.',

    freeWeaponProficiencyIds: [
      weaponIds.rapier,
      weaponIds.shortsword,
      weaponIds.longsword,
      weaponIds.crossbowHand,
    ],
    freeWeaponProficiencyGroups: [WeaponGroup.ALL_SIMPLE],
    weaponProficiencyDescription: `Rogues are proficient with all simple weapons, ^${itemIds.rapier}{rapiers}^, ^${itemIds.shortsword}{shortswords}^, ^${itemIds.longsword}{longswords}^, and ^${itemIds.crossbowHand}{hand crossbows}^`,
    freeArmorProficiencies: [ArmorType.LIGHT],
    armorProficiencyDescription: 'Rogues are proficient with light armor.',
    freeToolProficiencyIds: [toolIds.thievesTools],
    toolProficiencyDescription: `Rogues are proficient with ^${itemIds.thievesTools}{thieves' tools}^.`,
    freeItemIds: [
      { item: itemIds.dagger, quantity: 2 },
      { item: itemIds.thievesTools, quantity: 1 },
      { item: itemIds.leatherArmor, quantity: 1 },
    ],

    itemDescription: [
      `(a) a ^${itemIds.rapier}{rapier}^ or (b) a ^${itemIds.shortsword}{shortsword}^`,
      `(a) a ^${itemIds.burglarsPack}{burglar's pack}^, (b) a ^${itemIds.dungeoneersPack}{dungeoneer's pack}^, or (c) an ^${itemIds.explorersPack}{explorer's pack}^`,
      `(a) a ^${itemIds.shortbow}{shortbow}^ and a ^${itemIds.quiver}{quiver}^ of 20 ^${itemIds.arrow}{arrows}^ or (b) a ^${itemIds.shortsword}{shortsword}^`,
      `^${itemIds.leatherArmor}{Leather armor}^, two ^${itemIds.dagger}{daggers}^, and ^${itemIds.thievesTools}{thieves' tools}^`,
    ],

    abilityScoreLevels: [4, 8, 10, 12, 16, 19],
    subClassName: 'Roguish Archetype',
    subClassDescription:
      'At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level. ',
    subClassFeatureLevels: [3, 9, 13, 17],
    flavorText:
      'Rogues are cunning and elusive adversaries. Using their wits and agility, they excel in stealth and deception.',
  },
  {
    id: classIds.barbarian,
    name: 'Barbarian',
    slug: 'barbarian',
    srd: true,
    description:
      'For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.',

    hitDie: 12,
    freeSavingThrowProficiencies: [Ability.STR, Ability.CON],
    savingThrowDescription:
      'Barbarians are proficient in Strength and Constitution saving throws',

    skillDescription: `Choose two skills from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival.`,
    freeWeaponProficiencyGroups: [WeaponGroup.ALL_WEAPONS],
    weaponProficiencyDescription:
      'Barbarians are proficient with all simple and martial weapons.',
    freeArmorProficiencies: [
      ArmorType.LIGHT,
      ArmorType.MEDIUM,
      ArmorType.SHIELDS,
    ],
    armorProficiencyDescription:
      'Barbarians are proficient with Light Armor, Medium Armor, Shields',
    toolProficiencyDescription: 'Barbarians are not proficient with any tools.',
    freeItemIds: [
      { item: itemIds.explorersPack, quantity: 1 },
      { item: itemIds.javelin, quantity: 4 },
    ],
    itemDescription: [
      `(a) a ^${itemIds.greataxe}{greataxe}^ or (b) any martial melee weapon`,
      `(a) two ^${itemIds.handaxe}{handaxes}^ or (b) any simple weapon`,
      `^${itemIds.explorersPack}{Explorer's pack}^ and four ^${itemIds.javelin}{javelins}^`,
    ],

    abilityScoreLevels: [4, 6, 8, 12, 14, 16, 19],
    subClassName: 'Primal Path',
    subClassDescription:
      'At 3rd level, you choose a path that shapes the nature of your rage. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.',
    subClassFeatureLevels: [3, 6, 10, 14],
    flavorText:
      'Barbarians are fierce warriors who draw their power from a primal connection to the spirits of nature and the world around them to fuel an unquenchable rage.',
  },
  {
    id: classIds.bard,
    name: 'Bard',
    slug: 'bard',
    srd: true,
    hitDie: 8,
    description:
      'Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds. The bard is a master of song, speech, and the magic they contain.',
    freeSavingThrowProficiencies: [Ability.DEX, Ability.CHA],
    savingThrowDescription:
      'Bards are proficient in Dexterity and Charisma saving throws',
    skillDescription:
      'Rogues are proficient in any three skills of their choice.',
    freeWeaponProficiencyIds: [
      weaponIds.longsword,
      weaponIds.rapier,
      weaponIds.shortsword,
      weaponIds.crossbowHand,
    ],
    freeWeaponProficiencyGroups: [WeaponGroup.ALL_SIMPLE],
    weaponProficiencyDescription: `Bards are proficient with all simple weapons, plus the ^${itemIds.longsword}{longsword}^, ^${itemIds.rapier}{rapier}^, ^${itemIds.shortsword}{shortsword}^, and ^${itemIds.crossbowHand}{hand crossbow}^`,
    freeArmorProficiencies: [ArmorType.LIGHT],
    armorProficiencyDescription: 'Bards are proficient with light armor.',

    toolProficiencyDescription:
      'Bards are proficient with three musical instruments of their choice.',
    freeItemIds: [
      { item: itemIds.leatherArmor, quantity: 1 },
      { item: itemIds.dagger, quantity: 1 },
    ],
    itemDescription: [
      `(a) a ^${itemIds.rapier}{rapier}^ or (b) a ^${itemIds.longsword}{longsword}^ or (c) any simple weapon`,
      `(a) a ^${itemIds.diplomatsPack}{diplomat's pack}^ or (b) an ^${itemIds.entertainersPack}{entertainer's pack}^`,
      `^${itemIds.leatherArmor}{Leather armor}^ a ^${itemIds.dagger}{dagger}^, and a musical instrument`,
    ],
    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassFeatureLevels: [3, 6, 14],
    subClassName: 'Bardic College',
    subClassDescription:
      'At 3rd level, you delve into the advanced techniques of a bard college of your choice. Your choice grants you features at 3rd level and again at 6th and 14th level.',

    flavorText:
      'Bards are the masters of song, speech, and the magic they contain. They use their talents to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds.',
  },
  {
    id: classIds.druid,
    name: 'Druid',
    slug: 'druid',
    srd: true,
    hitDie: 8,
    description:
      "Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment of nature's resilience, cunning, and fury. They claim no mastery over nature, but see themselves as extensions of nature's indomitable will.",
    savingThrowDescription:
      'Druids are proficient in Intelligence and Wisdom saving throws',
    skillDescription: `Choose two skills from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival.`,
    freeWeaponProficiencyIds: [
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
    weaponProficiencyDescription: `Druids are proficient with  ^${itemIds.club}{club}^ , ^${itemIds.dagger}{dagger}^, ^${itemIds.dart}{dart}^, ^${itemIds.javelin}{javelin}^, ^${itemIds.mace}{mace}^, ^${itemIds.quarterstaff}{quarterstaff}^, ^${itemIds.scimitar}{scimitar}^, ^${itemIds.sickle}{sickle}^, ^${itemIds.sling}{sling}^, and ^${itemIds.spear}{spear}^`,
    freeArmorProficiencies: [
      ArmorType.LIGHT,
      ArmorType.MEDIUM,
      ArmorType.SHIELDS,
    ],
    armorProficiencyDescription:
      'Druids are proficient with Light Armor, Medium Armor, and Shields. However, a druid will not wear armor or use shields made of metal.',
    freeToolProficiencyIds: [toolIds.herbalismKit],
    toolProficiencyDescription: `Druids are proficient with ^${itemIds.herbalismKit}{herbalism kits}^.`,
    freeItemIds: [
      { item: itemIds.leatherArmor, quantity: 1 },
      { item: itemIds.explorersPack, quantity: 1 },
    ],
    itemDescription: [
      `(a) a ^${itemIds.scimitar}{scimitar}^ or (b) any simple melee weapon`,
      `(a) a ^${itemIds.shield}{shield}^ or (b) any simple melee weapon`,
      `^${itemIds.leatherArmor}{Leather armor}^, an ^${itemIds.explorersPack}{explorer's pack}^, and a druidic focus`,
    ],

    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: 'Druidic Circle',
    subClassDescription:
      'At 2nd level, you choose to identify with a circle of druids. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.',
    subClassFeatureLevels: [2, 6, 10, 14],

    flavorText:
      "Druids are the embodiment of nature's resilience, cunning, and fury. They claim no mastery over nature, but see themselves as extensions of nature's indomitable will.",
  },
  {
    id: classIds.monk,
    name: 'Monk',
    slug: 'monk',
    srd: true,
    hitDie: 8,
    description:
      'Monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.',
    freeSavingThrowProficiencies: [Ability.STR, Ability.DEX],
    savingThrowDescription:
      'Monks are proficient in Strength and Dexterity saving throws',
    skillDescription: `Choose two skills from Acrobatics, Athletics, History, Insight, Religion, and Stealth.`,
    freeWeaponProficiencyGroups: [WeaponGroup.ALL_SIMPLE],
    freeWeaponProficiencyIds: [weaponIds.shortsword],
    weaponProficiencyDescription: `Monks are proficient with all simple melee weapons and ^${itemIds.shortsword}{shortswords}^`,
    armorProficiencyDescription:
      'Monks are not proficient with armor or shields.',
    toolProficiencyDescription:
      "Choose one type of artisan's tools or one musical instrument.",
    freeItemIds: [{ item: itemIds.dart, quantity: 10 }],
    itemDescription: [
      `(a) a ^${itemIds.shortsword}{shortsword}^ or (b) any simple weapon`,
      `(a) a ^${itemIds.dungeoneersPack}{dungeoneer's pack}^ or (b) an ^${itemIds.explorersPack}{explorer's pack}^`,
      `^${itemIds.dart}{10 darts}^`,
    ],

    abilityScoreLevels: [4, 6, 8, 10, 12, 14, 16, 19],
    subClassName: 'Monastic Tradition',
    subClassDescription:
      'When you reach 3rd level, you commit yourself to a monastic tradition. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.',

    subClassFeatureLevels: [3, 6, 11, 17],
    flavorText:
      'Monks are martial artists who use ki to perform amazing feats. They are masters of unarmed combat, and they are known for their ability to catch arrows, dodge blows, and move with extraordinary speed.',
  },
  {
    id: classIds.paladin,
    name: 'Paladin',
    slug: 'paladin',
    srd: true,
    hitDie: 10,
    description:
      "Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond.",
    savingThrowDescription:
      'Paladins are proficient in Wisdom and Charisma saving throws',
    skillDescription:
      'Choose two skills from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion.',
    freeWeaponProficiencyGroups: [WeaponGroup.ALL_WEAPONS],
    weaponProficiencyDescription:
      'Paladins are proficient with all simple and martial weapons.',
    freeArmorProficiencies: [
      ArmorType.LIGHT,
      ArmorType.MEDIUM,
      ArmorType.HEAVY,
    ],
    armorProficiencyDescription: `Paladins are proficient with all armor and ^${itemIds.shield}{shields}^.`,
    toolProficiencyDescription: 'Paladins are not proficient with any tools.',
    freeItemIds: [{ item: itemIds.chainMail, quantity: 1 }],
    itemDescription: [
      `^${itemIds.chainMail}{Chain mail}^ and a holy symbol.`,
      `(a) a martial weapon and a ^${itemIds.shield}{shield}^ or (b) two martial weapons`,
      `(a) five ^${itemIds.javelin}{javelins}^ or (b) any simple melee weapon`,
      `(a) a ^${itemIds.priestsPack}{priest's pack}^ or (b) an ^${itemIds.explorersPack}{explorer's pack}^`,
    ],
    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: 'Sacred Oath',
    subClassDescription:
      'When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature.',
    subClassFeatureLevels: [3, 7, 15, 20],

    flavorText:
      'Paladins are holy warriors bound to a sacred oath, using their divine magic to heal the wounded, bless the righteous, and smite the wicked.',
  },
  {
    id: classIds.ranger,
    name: 'Ranger',
    slug: 'ranger',
    srd: true,
    hitDie: 10,
    description:
      'Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.',
    savingThrowDescription:
      'Rangers are proficient in Strength and Dexterity saving throws',
    freeSavingThrowProficiencies: [Ability.STR, Ability.DEX],
    skillDescription: `Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival`,
    freeWeaponProficiencyGroups: [WeaponGroup.ALL_WEAPONS],
    weaponProficiencyDescription:
      'Rangers are proficient with all simple and martial weapons.',
    freeArmorProficiencies: [
      ArmorType.LIGHT,
      ArmorType.MEDIUM,
      ArmorType.SHIELDS,
    ],
    armorProficiencyDescription:
      'Rangers are proficient with Light Armor and Medium Armor.',
    toolProficiencyDescription: 'Rangers are not proficient with any tools.',
    freeItemIds: [
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

    itemDescription: [
      `(a) ^${itemIds.scaleMail}{scale mail}^ or (b) ^${itemIds.leatherArmor}{leather armor}^`,
      `(a) Two ^${itemIds.shortsword}{shortswords}^ or (b) any two simple melee weapon`,
      `(a) a ^${itemIds.dungeoneersPack}{dungeoneer's pack}^ or (b) an ^${itemIds.explorersPack}{explorer's pack}^`,
      `^${itemIds.longbow}{A longbow}^ and a ^${itemIds.quiver}{quiver}^ of 20 ^${itemIds.arrow}{arrows}^`,
    ],

    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: 'Ranger Conclave',
    subClassDescription:
      'At 3rd level, you choose to emulate the ideals and training of a ranger conclave. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level.',
    subClassFeatureLevels: [3, 7, 11, 15, 18],

    flavorText:
      'Rangers are hunters and wilderness warriors who use their knowledge of the land and their fighting skills to protect the wild places of the world.',
  },
  {
    id: classIds.sorcerer,
    name: 'Sorcerer',
    slug: 'sorcerer',
    srd: true,
    description:
      'Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. No one chooses sorcery; the power chooses the sorcerer.',
    hitDie: 6,
    freeSavingThrowProficiencies: [Ability.CON, Ability.CHA],
    skillDescription:
      'Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion',
    savingThrowDescription:
      'Sorcerers are proficient in Constitution and Charisma saving throws',
    freeWeaponProficiencyIds: [
      weaponIds.dagger,
      weaponIds.dart,
      weaponIds.sling,
      weaponIds.quarterstaff,
      weaponIds.crossbowLight,
    ],
    weaponProficiencyDescription: `Sorcerers are proficient with ^${itemIds.dagger}{daggers}^, ^${itemIds.dart}{darts}^, ^${itemIds.sling}{slings}^, ^${itemIds.quarterstaff}{quarterstaffs}^, and ^${itemIds.crossbowLight}{light crossbows}^`,
    armorProficiencyDescription: 'Sorcerers are not proficient with armor.',
    toolProficiencyDescription: 'Sorcerers are not proficient with any tools.',
    freeItemIds: [{ item: itemIds.dagger, quantity: 2 }],
    itemDescription: [
      `(a) a ^${itemIds.crossbowLight}{light crossbow}^ and 20 ^${itemIds.crossbowBolt}{bolts}^ or (b) any simple weapon`,
      `(a) a ^${itemIds.componentPouch}{component pouch}^ or (b) an arcane focus`,
      `(a) a ^${itemIds.dungeoneersPack}{dungeoneer's pack}^ or (b) an ^${itemIds.explorersPack}{explorer's pack}^`,
      `Two ^${itemIds.dagger}{daggers}^`,
    ],

    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: 'Sorcerous Origin',
    subClassDescription:
      'Choose a sorcerous origin, which describes the source of your innate magical power. Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.',
    subClassFeatureLevels: [1, 6, 14, 18],
    flavorText:
      'Sorcerers are spellcasters who draw on innate magic. They are the masters of the arcane, using their knowledge and power to cast spells that can change the world around them.',
  },
  {
    id: classIds.warlock,
    name: 'Warlock',
    slug: 'warlock',
    srd: true,
    hitDie: 8,
    description:
      'Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular.',
    savingThrowDescription:
      'Warlocks are proficient in Wisdom and Charisma saving throws',
    freeSavingThrowProficiencies: [Ability.WIS, Ability.CHA],

    skillDescription:
      'Choose two from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion',
    freeWeaponProficiencyGroups: [WeaponGroup.ALL_SIMPLE],
    weaponProficiencyDescription:
      'Warlocks are proficient with all simple weapons.',
    freeArmorProficiencies: [ArmorType.LIGHT],
    armorProficiencyDescription: 'Warlocks are proficient with Light Armor.',
    toolProficiencyDescription: 'Warlocks are not proficient with any tools.',
    freeItemIds: [
      { item: itemIds.dagger, quantity: 2 },
      { item: itemIds.leatherArmor, quantity: 1 },
    ],
    itemDescription: [
      `(a) a ^${itemIds.crossbowLight}{light crossbow}^ and 20 ^${itemIds.crossbowBolt}{bolts}^ or (b) any simple weapon`,
      `(a) a ^${itemIds.componentPouch}{component pouch}^ or (b) an arcane focus`,
      `(a) a ^${itemIds.dungeoneersPack}{dungeoneer's pack}^ or (b) a ^${itemIds.scholarsPack}{scholar's pack}^`,
      `Two ^${itemIds.dagger}{daggers}^, ^${itemIds.leatherArmor}{leather armor}^, and an arcane focus`,
    ],

    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: 'Otherworldly Patron',
    subClassDescription:
      'At 1st level, you have struck a bargain with an otherworldly being of your choice. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.',
    subClassFeatureLevels: [1, 6, 10, 14],

    flavorText:
      "Warlocks are wielders of magic who have forged a pact with an otherworldly being. Whether it's a demon, a devil, a fey, or some other powerful entity, warlocks draw their power from their patron.",
  },
  //artificer
  {
    id: classIds.artificer,
    name: 'Artificer',
    slug: 'artificer',
    source: 'Wayfinder’s Guide to Eberron',
    flavorText:
      'Masters of invention, artificers use ingenuity and magic to unlock extraordinary capabilities in objects.',
    description:
      "Masters of invention, artificers use ingenuity and magic to unlock extraordinary capabilities in objects. They see magic as a complex system waiting to be decoded and then harnessed in their spells and inventions. You can find everything you need to play one of these inventors in the next few sections.\n\nArtificers use a variety of tools to channel their arcane power. To cast a spell, an artificer might use alchemist's supplies to create a potent elixir, calligrapher's supplies to inscribe a sigil of power, or tinker's tools to craft a temporary charm. The magic of artificers is tied to their tools and their talents, and few other characters can produce the right tool for a job as well as an artificer.",

    hitDie: 8,
    freeArmorProficiencies: [
      ArmorType.LIGHT,
      ArmorType.MEDIUM,
      ArmorType.SHIELDS,
    ],
    armorProficiencyDescription:
      'Artificers are proficient with Light Armor, Medium Armor, and Shields.',
    savingThrowDescription:
      'Artificers are proficient in Constitution and Intelligence saving throws',
    freeSavingThrowProficiencies: [Ability.CON, Ability.INT],
    toolProficiencyDescription: `Artificers are proficient with a variety of tools. All artificers are proficient with ^${itemIds.thievesTools}{Thieves' Tools}^ and ^${itemIds.thievesTools}{Tinker's Tools}^. Additionally, you can choose one additional artisan's tool of your choice.`,
    freeToolProficiencyIds: [toolIds.thievesTools, toolIds.tinkersTools],
    skillDescription:
      'Choose two from Arcana, History, Investigation, Medicine, Nature, Perception, Sleight of Hand, and Insight.',
    weaponProficiencyDescription:
      'Artificers are proficient with simple weapons.',
    freeWeaponProficiencyGroups: [WeaponGroup.ALL_SIMPLE],
    freeItemIds: [
      { item: itemIds.dagger, quantity: 1 },
      { item: itemIds.crossbowLight, quantity: 1 },
      { item: itemIds.crossbowBolt, quantity: 20 },
      { item: itemIds.leatherArmor, quantity: 1 },
      { item: itemIds.thievesTools, quantity: 1 },
      { item: itemIds.dungeoneersPack, quantity: 1 },
    ],

    itemDescription: [
      `(a) ^${itemIds.scaleMail}{Scale mail}^ or (b) ^${itemIds.studdedLeatherArmor}{studded leather armor}^`,
      `Any two simple weapons`,
      `^${itemIds.thievesTools}{thieves' tools}^, and a ^${itemIds.dungeoneersPack}{dungeoneer's pack}^`,
      `^${itemIds.crossbowLight}{A light crossbow}^ and 20 ^${itemIds.crossbowBolt}{bolts}^`,
    ],

    abilityScoreLevels: [4, 8, 12, 16, 19],
    subClassName: 'Artficer Specialist',
    subClassDescription:
      'At 3rd level, you choose the type of specialist you are. Your choice grants you features at 5th level and again at 9th and 15th level.',
    subClassFeatureLevels: [3, 5, 9, 15],
  },
];

export default Classes;
