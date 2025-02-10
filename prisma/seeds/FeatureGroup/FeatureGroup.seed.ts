import { ChainType, Prisma } from '@prisma/client';
import { spellIds } from '../Spells/spells.seed';

export const FeatureGroupIds = {
  fightingStyle: 'fighting-style',
  metamagic: 'metamagic',
  eldritchInvocations: 'eldritch-invocations',
  clericStrike: 'cleric-strike',
  rangerFavored: 'ranger-favored',
  rangerExplorer: 'ranger-explorer',
  rangerAwareness: 'ranger-awareness',
  rangerDisguise: 'ranger-disguise',
  elementalDisciplines: 'elemental-disciplines',
};

export const FeaturesFromFeatureGroupIds = {
  archeryFightingStyle: 'archery-fighting-style',
  blindFightingFightingStyle: 'blind-fighting-fighting-style',
  defenseFightingStyle: 'defense-fighting-style',
  duelingFightingStyle: 'dueling-fighting-style',
  greatWeaponFightingFightingStyle: 'great-weapon-fighting-fighting-style',
  interceptionFightingStyle: 'interception-fighting-style',
  protectionFightingStyle: 'protection-fighting-style',
  superiorTechniqueFightingStyle: 'superior-technique-fighting-style',
  thrownWeaponFightingStyle: 'thrown-weapon-fighting-style',
  twoWeaponFightingFightingStyle: 'two-weapon-fighting-fighting-style',
  unarmedFightingFightingStyle: 'unarmed-fighting-fighting-style',
  druidicWarriorFightingStyle: 'druidic-warrior-fighting-style',
  blessedWarriorFightingStyle: 'blessed-warrior-fighting-style',
  metamagicCarefulSpellMetamagic: 'metamagic-careful-spell-metamagic',
  metamagicDistantSpellMetamagic: 'metamagic-distant-spell-metamagic',
  metamagicEmpoweredSpellMetamagic: 'metamagic-empowered-spell-metamagic',
  metamagicExtendedSpellMetamagic: 'metamagic-extended-spell-metamagic',
  metamagicHeightenedSpellMetamagic: 'metamagic-heightened-spell-metamagic',
  metamagicQuickenedSpellMetamagic: 'metamagic-quickened-spell-metamagic',
  metamagicSeekingSpellMetamagic: 'metamagic-seeking-spell-metamagic',
  metamagicSubtleSpellMetamagic: 'metamagic-subtle-spell-metamagic',
  metamagicTransmutedSpellMetamagic: 'metamagic-transmuted-spell-metamagic',
  metamagicTwinSpellMetamagic: 'metamagic-twin-spell-metamagic',
  agonizingBlastEldritchInvocations: 'agonizing-blast-eldritch-invocations',
  armorOfShadowsEldritchInvocations: 'armor-of-shadows-eldritch-invocations',
  ascendantStepEldritchInvocations: 'ascendant-step-eldritch-invocations',
  beastSpeechEldritchInvocations: 'beast-speech-eldritch-invocations',
  beguilingInfluenceEldritchInvocations:
    'beguiling-influence-eldritch-invocations',
  bewitchingWhispersEldritchInvocations:
    'bewitching-whispers-eldritch-invocations',
  bookOfAncientSecretsEldritchInvocations:
    'book-of-ancient-secrets-eldritch-invocations',
  chainsOfCarceriEldritchInvocations: 'chains-of-carceri-eldritch-invocations',
  devilsSightEldritchInvocations: 'devils-sight-eldritch-invocations',
  dreadfulWordEldritchInvocations: 'dreadful-word-eldritch-invocations',
  eldritchSightEldritchInvocations: 'eldritch-sight-eldritch-invocations',
  eldritchSpearsEldritchInvocations: 'eldritch-spears-eldritch-invocations',
  eyesOfTheRuneKeeperEldritchInvocations:
    'eyes-of-the-rune-keeper-eldritch-invocations',
  fiendishVigorEldritchInvocations: 'fiendish-vigor-eldritch-invocations',
  gazeOfTwoMindsEldritchInvocations: 'gaze-of-two-minds-eldritch-invocations',
  lifedrinkerEldritchInvocations: 'lifedrinker-eldritch-invocations',
  maskOfManyFacesEldritchInvocations: 'mask-of-many-faces-eldritch-invocations',
  masterOfMyriadFormsEldritchInvocations:
    'master-of-myriad-forms-eldritch-invocations',
  minionsOfChaosEldritchInvocations: 'minions-of-chaos-eldritch-invocations',
  mireTheMindEldritchInvocations: 'mire-the-mind-eldritch-invocations',
  mistyVisionsEldritchInvocations: 'misty-visions-eldritch-invocations',
  oneWithShadowsEldritchInvocations: 'one-with-shadows-eldritch-invocations',
  otherworldlyLeapEldritchInvocations: 'otherworldly-leap-eldritch-invocations',
  repellingBlastEldritchInvocations: 'repelling-blast-eldritch-invocations',
  sculptorOfFleshEldritchInvocations: 'sculptor-of-flesh-eldritch-invocations',
  signOfIllOmenEldritchInvocations: 'sign-of-ill-omen-eldritch-invocations',
  thiefOfFiveFatesEldritchInvocations:
    'thief-of-five-fates-eldritch-invocations',
  thirstingBladeEldritchInvocations: 'thirsting-blade-eldritch-invocations',
  visionsOfDistantRealmsEldritchInvocations:
    'visions-of-distant-realms-eldritch-invocations',
  voiceOfTheChainMasterEldritchInvocations:
    'voice-of-the-chain-master-eldritch-invocations',
  whispersOfTheGraveEldritchInvocations:
    'whispers-of-the-grave-eldritch-invocations',
  witchSightEldritchInvocations: 'witch-sight-eldritch-invocations',
  blessedStrikesClericStrike: 'blessed-strikes-cleric-strike',
  favoredEnemyRangerFavored: 'favored-enemy-ranger-favored',
  favoredFoeRangerFavored: 'favored-foe-ranger-favored',
  naturalExplorerRangerExplorer: 'natural-explorer-ranger-explorer',
  deftExplorerRangerExplorer: 'deft-explorer-ranger-explorer',
  primalAwarenessRangerAwareness: 'primal-awareness-ranger-awareness',
  primevalAwarenessRangerAwareness: 'primeval-awareness-ranger-awareness',
  hideinPlainSightRangerDisguise: 'hide-in-plain-sight-ranger-disguise',
  naturesVeilRangerDisguise: 'natures-veil-ranger-disguise',
  breathOfWinterDiscipleElements: 'breath-of-winter-disciple-elements',
  clenchOfNorthWindDiscipleElements: 'clench-of-north-wind-disciple-elements',
  elementalAtunementDiscipleElements: 'elemental-atunement-disciple-elements',
  eternalMountainDefenseDiscipleElements:
    'eternal-mountain-defense-disciple-elements',
  fangsOfTheFireSnakeDiscipleElements:
    'fangs-of-the-fire-snake-disciple-elements',
  fistOfFourThundersDiscipleElements: 'fist-of-four-thunders-disciple-elements',
  firstOfUnbrokenAirDiscipleElements: 'first-of-unbroken-air-disciple-elements',
  flamesOfThePheonixDiscipleElements: 'flames-of-the-pheonix-disciple-elements',
  gongOfTheSummitDiscipleElements: 'gong-of-the-summit-disciple-elements',
  mistStanceDiscipleElements: 'mist-stance-disciple-elements',
  rideTheWindDiscipleElements: 'ride-the-wind-disciple-elements',
  riverOfHungryFlameDiscipleElements: 'river-of-hungry-flame-disciple-elements',
  rushOfTheGaleSpiritsDiscipleElements:
    'rush-of-the-gale-spirits-disciple-elements',
  shapeOfTheFlowingRiverDiscipleElements:
    'shape-of-the-flowing-river-disciple-elements',
  sweepingCinderStrikeDiscipleElements:
    'sweeping-cinder-strike-disciple-elements',
  waterWhipDiscipleElements: 'water-whip-disciple-elements',
  waveOfRollingEarthDiscipleElements: 'wave-of-rolling-earth-disciple-elements',
};

const FeaturesFromFeatureGroupSeed: Prisma.FeatureCreateManyInput[] = [
  {
    id: FeaturesFromFeatureGroupIds.archeryFightingStyle,
    name: 'Archery',
    description:
      'You gain a +2 bonus to attack rolls you make with ranged weapons.',
    FeatureGroupId: FeatureGroupIds.fightingStyle,
    effectChainType: ChainType.NONE,
  },
  {
    id: FeaturesFromFeatureGroupIds.blindFightingFightingStyle,
    name: 'Blind Fighting',
    description:
      "You have blind sight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.",
    FeatureGroupId: FeatureGroupIds.fightingStyle,
    effectChainType: ChainType.NONE,
  },
  {
    id: FeaturesFromFeatureGroupIds.defenseFightingStyle,
    name: 'Defense',
    description: 'While you are wearing armor, you gain a +1 bonus to AC.',
    FeatureGroupId: FeatureGroupIds.fightingStyle,
    effectChainType: ChainType.NONE,
  },
  {
    id: FeaturesFromFeatureGroupIds.duelingFightingStyle,
    name: 'Dueling',
    description:
      'When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.',
    FeatureGroupId: FeatureGroupIds.fightingStyle,
    effectChainType: ChainType.NONE,
  },
  {
    id: FeaturesFromFeatureGroupIds.greatWeaponFightingFightingStyle,
    name: 'Great Weapon Fighting',
    description:
      'When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.',
    FeatureGroupId: FeatureGroupIds.fightingStyle,
    effectChainType: ChainType.NONE,
  },
  {
    id: FeaturesFromFeatureGroupIds.interceptionFightingStyle,
    name: 'Interception',
    description:
      'When a creature you can see hits a target, other than you, within 5 feet of you with an attack, you can use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to a minimum of 0 damage). You must be wielding a shield or a simple or martial weapon to use this reaction.',
    FeatureGroupId: FeatureGroupIds.fightingStyle,
    effectChainType: ChainType.NONE,
  },
  {
    id: FeaturesFromFeatureGroupIds.protectionFightingStyle,
    name: 'Protection',
    description:
      'When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.',
    FeatureGroupId: FeatureGroupIds.fightingStyle,
    effectChainType: ChainType.NONE,
  },
  {
    id: FeaturesFromFeatureGroupIds.superiorTechniqueFightingStyle,
    name: 'Superior Technique',
    description: `You learn one maneuver of your choice from among those available to the Battle Master archetype. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).\n\nYou gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest.`,
    FeatureGroupId: FeatureGroupIds.fightingStyle,
    effectChainType: ChainType.NONE,
    unimplemented: true,
  },
  {
    id: FeaturesFromFeatureGroupIds.thrownWeaponFightingStyle,
    name: 'Thrown Weapon Fighting',
    description:
      'You can draw a weapon that has the thrown property as part of the attack you make with the weapon. In addition, when you hit with a ranged attack using a thrown weapon, you gain a +2 bonus to the damage roll.',
    FeatureGroupId: FeatureGroupIds.fightingStyle,
    effectChainType: ChainType.NONE,
    unimplemented: true,
  },
  {
    id: FeaturesFromFeatureGroupIds.twoWeaponFightingFightingStyle,
    name: 'Two-Weapon Fighting',
    description:
      'When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.',
    FeatureGroupId: FeatureGroupIds.fightingStyle,
    effectChainType: ChainType.NONE,
    unimplemented: true,
  },
  {
    id: FeaturesFromFeatureGroupIds.unarmedFightingFightingStyle,
    name: 'Unarmed Fighting',
    description:
      'Your unarmed strikes can deal bludgeoning damage equal to 1d6 + your Strength modifier. If you strike with two free hands, the d6 becomes a d8.',
    FeatureGroupId: FeatureGroupIds.fightingStyle,
    effectChainType: ChainType.NONE,
  },
  {
    id: FeaturesFromFeatureGroupIds.druidicWarriorFightingStyle,
    name: 'Druidic Warrior',
    description:
      'You learn two cantrips of your choice from the Druid spell list. They count as ranger spells for you, and Wisdom is your spellcasting ability for them. Whenever you gain a level in this class, you can replace one of these cantrips with another cantrip from the Druid spell list.',
    FeatureGroupId: FeatureGroupIds.fightingStyle,
    effectChainType: ChainType.NONE,
  },
  {
    id: FeaturesFromFeatureGroupIds.blessedWarriorFightingStyle,
    name: 'Blessed Warrior',
    description:
      'You learn two cantrips of your choice from the cleric spell list. They count as paladin spells for you, and Charisma is your spellcasting ability for them. Whenever you gain a level in this class, you can replace one of these cantrips with another cantrip from the cleric spell list.',
    FeatureGroupId: FeatureGroupIds.fightingStyle,
    effectChainType: ChainType.NONE,
  },
  {
    id: FeaturesFromFeatureGroupIds.metamagicCarefulSpellMetamagic,
    name: 'Careful Spell',
    description:
      "When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell.",
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.metamagic,
  },
  {
    id: FeaturesFromFeatureGroupIds.metamagicDistantSpellMetamagic,
    name: 'Distant Spell',
    description:
      'When you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell. When you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.metamagic,
  },
  {
    id: FeaturesFromFeatureGroupIds.metamagicEmpoweredSpellMetamagic,
    name: 'Empowered Spell',
    description:
      'When you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls. You can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.metamagic,
  },
  {
    id: FeaturesFromFeatureGroupIds.metamagicExtendedSpellMetamagic,
    name: 'Extended Spell',
    description:
      'When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.metamagic,
  },
  {
    id: FeaturesFromFeatureGroupIds.metamagicHeightenedSpellMetamagic,
    name: 'Heightened Spell',
    description:
      '	When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.metamagic,
  },
  {
    id: FeaturesFromFeatureGroupIds.metamagicQuickenedSpellMetamagic,
    name: 'Quickened Spell',
    description:
      'When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.metamagic,
  },
  {
    id: FeaturesFromFeatureGroupIds.metamagicSeekingSpellMetamagic,
    name: 'Seeking Spell',
    description:
      'If you make an attack roll for a spell and miss, you can spend 2 sorcerer points to reroll the d20, and you must use the new roll. You can use Seeking Spell even if you have already used a different Metamagic option during the casting of the spell.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.metamagic,
  },
  {
    id: FeaturesFromFeatureGroupIds.metamagicSubtleSpellMetamagic,
    name: 'Subtle Spell',
    description:
      'When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.metamagic,
  },
  {
    id: FeaturesFromFeatureGroupIds.metamagicTransmutedSpellMetamagic,
    name: 'Transmuted Spell',
    description:
      'When you cast a spell that deals a type of damage from the following list, you can spend 1 sorcery point to change that damage type to one of the other listed types: acid, cold, fire, lightning, poison, thunder.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.metamagic,
  },
  {
    id: FeaturesFromFeatureGroupIds.metamagicTwinSpellMetamagic,
    name: 'Twin Spell',
    description:
      "When you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip). To be eligible, a spell must be incapable of targeting more than one creature at the spell's current level.",
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.metamagic,
  },
  {
    id: FeaturesFromFeatureGroupIds.agonizingBlastEldritchInvocations,
    name: 'Agonizing Blast',
    description:
      'When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.armorOfShadowsEldritchInvocations,
    name: 'Armor of Shadows',
    description:
      'You can cast mage armor on yourself at will, without expending a spell slot or material components.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.ascendantStepEldritchInvocations,
    name: 'Ascendant Step',
    description:
      'You can cast levitate on yourself at will, without expending a spell slot or material components. ',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.beastSpeechEldritchInvocations,
    name: 'Beast Speech',
    description:
      'You can cast speak with animals at will, without expending a spell slot.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.beguilingInfluenceEldritchInvocations,
    name: 'Beguiling Influence',
    description: 'You gain proficiency in the Deception and Persuasion skills.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.bewitchingWhispersEldritchInvocations,
    name: 'Bewitching Whispers',
    description:
      'You can cast compulsion once using a warlock spell slot. You can’t do so again until you finish a long rest.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.bookOfAncientSecretsEldritchInvocations,
    name: 'Book of Ancient Secrets',
    description:
      'You can now inscribe magical rituals in your Book of Shadows. Choose two 1st-­‐‑level spells that have the ritual tag from any class’s spell list (the two needn’t be from the same list). The spells appear in the book and don’t count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can’t cast the spells except as rituals, unless you’ve learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag. On your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell’s level is equal to or less than half your warlock level (rounded up) and if you can spare the time to System Reference Document 5.1 49 transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.chainsOfCarceriEldritchInvocations,
    name: 'Chains of Carceri',
    description:
      'You can cast hold monster at will—targeting a celestial, fiend, or elemental—without expending a spell slot or material components. You must finish a long rest before you can use this invocation on the same creature again.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.devilsSightEldritchInvocations,
    name: "Devil's Sight",
    description:
      'You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.dreadfulWordEldritchInvocations,
    name: 'Dreadful Word',
    description:
      'You can cast confusion once using a warlock spell slot. You can’t do so again until you finish a long rest.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.eldritchSightEldritchInvocations,
    name: 'Eldritch Sight',
    description:
      'You can cast detect magic at will, without expending a spell slot.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.eldritchSpearsEldritchInvocations,
    name: 'Eldritch Spear',
    description: 'When you cast eldritch blast, its range is 300 feet.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.eyesOfTheRuneKeeperEldritchInvocations,
    name: 'Eyes of the Rune Keeper',
    description: 'You can read all writing.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.fiendishVigorEldritchInvocations,
    name: 'Fiendish Vigor',
    description:
      'You can cast false life on yourself at will as a 1st-­‐‑level spell, without expending a spell slot or material components.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.gazeOfTwoMindsEldritchInvocations,
    name: 'Gaze of Two Minds',
    description:
      'You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature’s senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.lifedrinkerEldritchInvocations,
    name: 'Lifedrinker',
    description:
      'When you hit a creature with your pact weapon, the creature takes extra necrotic damage equal to your Charisma modifier (minimum 1).',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.maskOfManyFacesEldritchInvocations,
    name: 'Mask of Many Faces',
    description:
      'You can cast disguise self at will, without expending a spell slot.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.masterOfMyriadFormsEldritchInvocations,
    name: 'Master of Myriad Forms',
    description:
      'You can cast alter self at will, without expending a spell slot.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.minionsOfChaosEldritchInvocations,
    name: 'Minions of Chaos',
    description:
      'You can cast conjure elemental once using a warlock spell slot. You can’t do so again until you finish a long rest.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.mireTheMindEldritchInvocations,
    name: 'Mire the Mind',
    description:
      'You can cast slow once using a warlock spell slot. You can’t do so again until you finish a long rest.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.mistyVisionsEldritchInvocations,
    name: 'Misty Visions',
    description:
      'You can cast silent image at will, without expending a spell slot or material components.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.oneWithShadowsEldritchInvocations,
    name: 'One with Shadows',
    description:
      'When you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or a reaction.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.otherworldlyLeapEldritchInvocations,
    name: 'Otherworldly Leap',
    description:
      'You can cast jump on yourself at will, without expending a spell slot or material components.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },

  {
    id: FeaturesFromFeatureGroupIds.repellingBlastEldritchInvocations,

    name: 'Repelling Blast',
    description:
      'When you hit a creature with eldritch blast, you can push the creature up to 10 feet away from you in a straight line.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.sculptorOfFleshEldritchInvocations,
    name: 'Sculptor of Flesh',
    description:
      'You can cast polymorph once using a warlock spell slot. You can’t do so again until you finish a long rest.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.signOfIllOmenEldritchInvocations,
    name: 'Sign of Ill Omen',
    description:
      'You can cast bestow curse once using a warlock spell slot. You can’t do so again until you finish a long rest.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.thiefOfFiveFatesEldritchInvocations,
    name: 'Thief of Five Fates',
    description:
      'You can cast bane once using a warlock spell slot. You can’t do so again until you finish a long rest.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.thirstingBladeEldritchInvocations,
    name: 'Thirsting Blade',
    description:
      'You can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.visionsOfDistantRealmsEldritchInvocations,
    name: 'Visions of Distant Realms',
    description:
      'You can cast arcane eye at will, without expending a spell slot.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.voiceOfTheChainMasterEldritchInvocations,
    name: 'Voice of the Chain Master',
    description:
      'You can communicate telepathically with your familiar and perceive through your familiar’s senses as long as you are on the same plane of existence. Additionally, while perceiving through your familiar’s senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.whispersOfTheGraveEldritchInvocations,
    name: 'Whispers of the Grave',
    description:
      'You can cast speak with dead at will, without expending a spell slot.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.witchSightEldritchInvocations,
    name: 'Witch Sight',
    description:
      'You can see the true form of any shapechanger or creature concealed by illusion or transmutation magic while the creature is within 30 feet of you and within line of sight.',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.eldritchInvocations,
  },
  {
    id: FeaturesFromFeatureGroupIds.blessedStrikesClericStrike,
    name: 'Blessed Strikes',
    description:
      'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.',
    FeatureGroupId: FeatureGroupIds.clericStrike,
  },
  {
    id: FeaturesFromFeatureGroupIds.favoredEnemyRangerFavored,
    name: 'Favored Enemy',
    description:
      'Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.\n\nChoose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.\n\nYou have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.\n\nWhen you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.\n\nYou choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.',
    FeatureGroupId: FeatureGroupIds.rangerFavored,
  },
  {
    id: FeaturesFromFeatureGroupIds.favoredFoeRangerFavored,
    name: 'Favored Foe',
    description:
      "When you hit a creature with an attack roll, you can call on your mystical bond with nature to mark the target as your favored enemy for 1 minute or until you lose your concentration (as if you were concentrating on a spell).\n\nThe first time on each of your turns that you hit the favored enemy and deal damage to it, including when you mark it, you increase that damage by 1d4.\n\nYou can use this feature to mark a favored enemy a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n\nThis feature's extra damage increases when you reach certain levels in this class: to 1d6 at 6th level and to 1d8 at 14th level.",
    FeatureGroupId: FeatureGroupIds.rangerFavored,
  },
  {
    id: FeaturesFromFeatureGroupIds.naturalExplorerRangerExplorer,
    name: 'Natural Explorer',
    description:
      "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.\n\nWhile traveling for an hour or more in your favored terrain, you gain the benefits listed below.You choose additional favored terrain types at 6th and 10th level.",
    options: [
      "Difficult terrain doesn't slow your group's travel.",
      "Your group can't become lost except by magical means.",
      'Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.',
      'If you are traveling alone, you can move stealthily at a normal pace.',
      'When you forage, you find twice as much food as you normally would.',
      'While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.',
    ],
    FeatureGroupId: FeatureGroupIds.rangerExplorer,
  },
  {
    id: FeaturesFromFeatureGroupIds.deftExplorerRangerExplorer,
    name: 'Deft Explorer',
    description:
      "This 1st-level feature replaces the Natural Explorer feature. You gain no benefit from the replaced feature and don't qualify for anything in the game that requires it.\n\nIf you take the Deft Explorer Feature, you gain the following benefits at the specified levels:",
    FeatureGroupId: FeatureGroupIds.rangerExplorer,
  },
  {
    id: FeaturesFromFeatureGroupIds.primalAwarenessRangerAwareness,
    name: 'Primal Awareness',
    description:
      "This 3rd-level feature replaces the Primeval Awareness feature. You gain no benefit from the replaced feature and don't qualify for anything in the game that requires it. You can focus your awareness through the interconnections of nature: you learn additional spells when you reach certain levels in this class if you don't already know them, as shown in the Primal Awareness Spells table. These spells don't count against the number of ranger spells you know. You can cast each of these spells once without expending a spell slot. Once you cast a spell in this way, you can't do so again until you finish a long rest.",
    extendedTable: [
      {
        'Primal Awareness Spells': {
          headers: ['Ranger Level', 'Spell'],

          data: [
            {
              'Ranger Level': '3rd',
              Spell: `%${spellIds.speakWithAnimals}{Speak With Animals}%`,
            },
            {
              'Ranger Level': '5th',
              Spell: `%${spellIds.beastSense}{Beast Sense}%`,
            },
            {
              'Ranger Level': '9th',
              Spell: `%${spellIds.speakWithPlants}{Speak With Plants}%`,
            },
            {
              'Ranger Level': '13th',
              Spell: `%${spellIds.locateCreature}{Locate Creature}%`,
            },
            {
              'Ranger Level': '17th',
              Spell: `%${spellIds.communeWithNature}{Commune With Nature}%`,
            },
          ],
        },
      },
    ],
    FeatureGroupId: FeatureGroupIds.rangerAwareness,
  },
  {
    id: FeaturesFromFeatureGroupIds.primevalAwarenessRangerAwareness,
    name: 'Primeval Awareness',
    description:
      'Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn’t reveal the creatures’ location or number.',
    FeatureGroupId: FeatureGroupIds.rangerAwareness,
  },
  {
    id: FeaturesFromFeatureGroupIds.hideinPlainSightRangerDisguise,
    name: 'Hide in Plain Sight',
    description:
      'Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.\n\n Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.',
    FeatureGroupId: FeatureGroupIds.rangerDisguise,
  },
  {
    id: FeaturesFromFeatureGroupIds.naturesVeilRangerDisguise,
    name: "Nature's Veil",
    description:
      "This 10th-level feature replaces the Hide in Plain Sight feature. You gain no benefit from the replaced feature and don't qualify for anything in the game that requires it. \n\nYou draw on the powers of nature to hide yourself from view briefly. As a bonus action, you can magically become invisible, along with any equipment you are wearing or carrying, until the start of your next turn.\n\n You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    FeatureGroupId: FeatureGroupIds.rangerDisguise,
  },
  {
    id: FeaturesFromFeatureGroupIds.breathOfWinterDiscipleElements,
    name: 'Breath of Winter',
    description: 'You can spend 6 ki points to cast Cone of Cold.',
    FeatureGroupId: FeatureGroupIds.elementalDisciplines,
  },
  {
    id: FeaturesFromFeatureGroupIds.clenchOfNorthWindDiscipleElements,
    name: 'Clench of the North Wind',
    description: 'You can spend 3 ki points to cast Hold Person.',
    FeatureGroupId: FeatureGroupIds.elementalDisciplines,
  },
  {
    id: FeaturesFromFeatureGroupIds.elementalAtunementDiscipleElements,
    description:
      'You can use your action to briefly control elemental forces within 30 feet of you, causing one of the following effects of your choice:\n\n- Create a harmless, instantaneous sensory effect related to air, earth, fire, or water, such as a shower of sparks, a puff of wind, a spray of light mist, or a gentle rumbling of stone.\n\n- Instantaneously light or snuff out a candle, a torch, or a small campfire.\n\n- Chill or warm up to 1 pound of nonliving material for up to 1 hour.\n\n- Cause earth, fire, water, or mist that can fit within a 1-foot cube to shape itself into a crude form you designate for 1 minute.',
    name: 'Elemental Attunement',
    FeatureGroupId: FeatureGroupIds.elementalDisciplines,
  },
  {
    id: FeaturesFromFeatureGroupIds.eternalMountainDefenseDiscipleElements,
    name: 'Eternal Mountain Defense',
    description:
      'You can spend 5 ki points to cast Stoneskin, targeting yourself',
    FeatureGroupId: FeatureGroupIds.elementalDisciplines,
  },
  {
    id: FeaturesFromFeatureGroupIds.fangsOfTheFireSnakeDiscipleElements,
    name: 'Fangs of the Fire Snake',
    unimplemented: true,
    description:
      'When you use the Attack action on your turn, you can spend 1 ki point to cause tendrils of flame to stretch out from your fists and feet. Your reach with your unarmed strikes increases by 10 feet for that action, as well as the rest of the turn. A hit with such an attack deals fire damage instead of bludgeoning damage, and if you spend 1 ki point when the attack hits, it also deals an extra 1d10 fire damage.',
    FeatureGroupId: FeatureGroupIds.elementalDisciplines,
  },
  {
    id: FeaturesFromFeatureGroupIds.fistOfFourThundersDiscipleElements,
    name: 'Fist of Four Thunders',
    description: 'You can spend 2 ki points to cast Thunderwave.',
    FeatureGroupId: FeatureGroupIds.elementalDisciplines,
  },
  {
    id: FeaturesFromFeatureGroupIds.firstOfUnbrokenAirDiscipleElements,
    name: 'Fist of Unbroken Air',
    description:
      "You can create a blast of compressed air that strikes like a mighty fist. As an action, you can spend 2 ki points and choose a creature within 30 feet of you. That creature must make a Strength saving throw. On a failed save, the creature takes 3d10 bludgeoning damage, plus an extra 1d10 bludgeoning damage for each additional ki point you spend, and you can push the creature up to 20 feet away from you and knock it prone. On a successful save, the creature takes half as much damage, and you don't push it or knock it prone.",
    FeatureGroupId: FeatureGroupIds.elementalDisciplines,
    unimplemented: true,
  },
  {
    id: FeaturesFromFeatureGroupIds.flamesOfThePheonixDiscipleElements,
    name: 'Flames of the Phoenix',
    description: 'You can spend 4 ki points to cast Fireball.',
    FeatureGroupId: FeatureGroupIds.elementalDisciplines,
  },
  {
    id: FeaturesFromFeatureGroupIds.gongOfTheSummitDiscipleElements,
    name: 'Gong of the Summit',
    description: 'You can spend 3 ki points to cast Shatter.',
    FeatureGroupId: FeatureGroupIds.elementalDisciplines,
  },
  {
    id: FeaturesFromFeatureGroupIds.mistStanceDiscipleElements,
    name: 'Mist Stance',
    description:
      'You can spend 2 ki points to cast Gaseous Form, targeting yourself.',
    FeatureGroupId: FeatureGroupIds.elementalDisciplines,
  },
  {
    id: FeaturesFromFeatureGroupIds.rideTheWindDiscipleElements,
    name: 'Ride the Wind',
    description: 'You can spend 4 ki points to cast Fly, targeting yourself.',
    FeatureGroupId: FeatureGroupIds.elementalDisciplines,
  },
  {
    id: FeaturesFromFeatureGroupIds.riverOfHungryFlameDiscipleElements,
    name: 'River of Hungry Flame',
    description:
      'You can spend 5 ki points to cast Wall of Fire, targeting yourself.',
    FeatureGroupId: FeatureGroupIds.elementalDisciplines,
  },
  {
    id: FeaturesFromFeatureGroupIds.rushOfTheGaleSpiritsDiscipleElements,
    name: 'Rush of the Gale Spirits',
    description: 'You can spend 2 ki points to cast Gust of Wind.',
    FeatureGroupId: FeatureGroupIds.elementalDisciplines,
  },
  {
    id: FeaturesFromFeatureGroupIds.shapeOfTheFlowingRiverDiscipleElements,
    name: 'Shape of the Flowing River',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.elementalDisciplines,
    description:
      "As an action, you can spend 1 ki point to choose an area of ice or water no larger than 30 feet on a side within 120 feet of you. You can change water to ice within the area and vice versa, and you can reshape ice in the area in any manner you choose. You can raise or lower the ice's elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can't exceed half the area's largest dimension. For example, if you affect a 30-foot square, you can create a pillar up to 15 feet high, raise or lower the square's elevation by up to 15 feet, dig a trench up to 15 feet deep, and so on. You can't shape the ice to trap or injure a creature in the area.",
  },
  {
    id: FeaturesFromFeatureGroupIds.sweepingCinderStrikeDiscipleElements,
    name: 'Sweeping Cinder Strike',
    description: 'You can spend 2 ki points to cast Burning Hands.',
    FeatureGroupId: FeatureGroupIds.elementalDisciplines,
  },
  {
    id: FeaturesFromFeatureGroupIds.waterWhipDiscipleElements,
    description:
      "You can spend 2 ki points as an action to create a whip of water that shoves and pulls a creature to unbalance it. A creature that you can see that is within 30 feet of you must make a Dexterity saving throw. On a failed save, the creature takes 3d10 bludgeoning damage, plus an extra 1d10 bludgeoning damage for each additional ki point you spend, and you can either knock it prone or pull it up to 25 feet closer to you. On a successful save, the creature takes half as much damage, and you don't pull it or knock it prone.",
    name: 'Water Whip',
    unimplemented: true,
    FeatureGroupId: FeatureGroupIds.elementalDisciplines,
  },
  {
    id: FeaturesFromFeatureGroupIds.waveOfRollingEarthDiscipleElements,
    name: 'Wave of Rolling Earth',
    description: 'You can spend 6 ki points to cast Wall of Stone.',
    FeatureGroupId: FeatureGroupIds.elementalDisciplines,
  },
];

const FeatureGroupSeed: Prisma.FeatureGroupCreateManyInput[] = [
  {
    id: FeatureGroupIds.fightingStyle,
    name: 'Fighting Style',
    slug: 'fighting-style',
    description:
      "Fighting styles are special techniques used by certain features to enhance a character's combat abilities.",
    flavorText:
      "Fighting styles are special techniques used by certain features to enhance a character's combat abilities.",
  },
  {
    id: FeatureGroupIds.metamagic,
    name: 'Metamagic',
    slug: 'metamagic',
    description:
      'Metamagic is a class feature that allows a metamagic user to change the properties of their spells using sorcery points.',
    flavorText:
      'Metamagic is a class feature that allows a metamagic user to change the properties of their spells using sorcery points.',
  },
  {
    id: 'eldritch-invocations',
    name: 'Eldritch Invocations',
    slug: 'eldritch-invocations',
    description:
      'Eldritch Invocations are special abilities granted to warlocks by their patrons.',
    flavorText:
      'Eldritch Invocations are special abilities granted to warlocks by their patrons.',
  },
  {
    id: FeatureGroupIds.clericStrike,
    name: 'Cleric Strikes/Spellcasting',
    description:
      "Cleric's must choose between claiming the Blessed Strikes feature from their class, or Divine Strike/Potent Spellcasting from their Subclass.",
    flavorText: "Cleric's Strikes/Spellcasting",
    slug: 'cleric-strike',
  },
  {
    id: FeatureGroupIds.rangerFavored,
    name: 'Favored Enemy/Favored Foe',
    description:
      'Rangers must choose between claiming the Favored Enemy or Favored Feature',
    flavorText:
      'Rangers must choose between claiming the Favored Enemy or Favored Feature',
    slug: 'ranger-favored',
  },
  {
    id: FeatureGroupIds.rangerExplorer,
    name: 'Natural Explorer/Deft Explorer',
    description:
      'Rangers must choose between claiming the Natural Explorer or Deft Explorer feature',
    flavorText:
      'Rangers must choose between claiming the Natural Explorer or Deft Explorer feature',

    slug: 'ranger-explorer',
  },
  {
    id: FeatureGroupIds.rangerAwareness,
    name: 'Primal Awareness/Primeval Awareness',
    description:
      'Rangers must choose between claiming the Primal Awareness or Primeval Awareness feature',
    flavorText:
      "Ranger's must choose between Primal Awareness or Primeval Awareness",
    slug: 'ranger-awareness',
  },
  {
    id: FeatureGroupIds.rangerDisguise,
    name: 'Ranger Disguise',
    flavorText:
      "Ranger's must choose between Hide in Plain Sight or Nature's Veil.",
    description:
      'Rangers must choose between Hide in Plain Sight or Nature’s Veil',
    slug: 'ranger-disguise',
  },
  {
    id: FeatureGroupIds.elementalDisciplines,
    name: 'Elemental Disciplines',
    flavorText:
      "Monk's with the Way of the Four Elements subclass can choose from a list of Elemental Disciplines.",
    description:
      "Monk's with the Way of the Four Elements subclass can choose from a list of Elemental Disciplines.",
    slug: 'elemental-disciplines',
  },
];

export { FeaturesFromFeatureGroupSeed, FeatureGroupSeed };
