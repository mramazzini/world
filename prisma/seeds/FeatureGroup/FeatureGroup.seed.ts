import { Prisma } from '@prisma/client';

const FeaturesFromFeatureGroupSeed: Prisma.FeatureCreateManyInput[] = [
  {
    id: 'archery-fighting-style',
    name: 'Archery',
    description:
      'You gain a +2 bonus to attack rolls you make with ranged weapons.',
    FeatureGroupId: 'fighting-style',
  },
  {
    id: 'blind-fighting-fighting-style',
    name: 'Blind Fighting',
    description:
      "You have blind sight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.",
    FeatureGroupId: 'fighting-style',
  },
  {
    id: 'defense-fighting-style',
    name: 'Defense',
    description: 'While you are wearing armor, you gain a +1 bonus to AC.',
    FeatureGroupId: 'fighting-style',
  },
  {
    id: 'dueling-fighting-style',
    name: 'Dueling',
    description:
      'When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.',
    FeatureGroupId: 'fighting-style',
  },
  {
    id: 'great-weapon-fighting-fighting-style',
    name: 'Great Weapon Fighting',
    description:
      'When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.',
    FeatureGroupId: 'fighting-style',
  },
  {
    id: 'interception-fighting-style',
    name: 'Interception',
    description:
      'When a creature you can see hits a target, other than you, within 5 feet of you with an attack, you can use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to a minimum of 0 damage). You must be wielding a shield or a simple or martial weapon to use this reaction.',
    FeatureGroupId: 'fighting-style',
  },
  {
    id: 'protection-fighting-style',
    name: 'Protection',
    description:
      'When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.',
    FeatureGroupId: 'fighting-style',
  },
  {
    id: 'superior-technique-fighting-style',
    name: 'Superior Technique',
    description: `You learn one maneuver of your choice from among those available to the Battle Master archetype. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).\n\nYou gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest.`,
    FeatureGroupId: 'fighting-style',
  },
  {
    id: 'thrown-weapon-fighting-style',
    name: 'Thrown Weapon Fighting',
    description:
      'You can draw a weapon that has the thrown property as part of the attack you make with the weapon. In addition, when you hit with a ranged attack using a thrown weapon, you gain a +2 bonus to the damage roll.',
    FeatureGroupId: 'fighting-style',
  },
  {
    id: 'two-weapon-fighting-fighting-style',
    name: 'Two-Weapon Fighting',
    description:
      'When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.',
    FeatureGroupId: 'fighting-style',
  },
  {
    id: 'unarmed-fighting-fighting-style',
    name: 'Unarmed Fighting',
    description:
      'Your unarmed strikes can deal bludgeoning damage equal to 1d6 + your Strength modifier. If you strike with two free hands, the d6 becomes a d8.',
    FeatureGroupId: 'fighting-style',
  },
  {
    id: 'druidic-warrior-fighting-style',
    name: 'Druidic Warrior',
    description:
      'You learn two cantrips of your choice from the Druid spell list. They count as ranger spells for you, and Wisdom is your spellcasting ability for them. Whenever you gain a level in this class, you can replace one of these cantrips with another cantrip from the Druid spell list.',
    FeatureGroupId: 'fighting-style',
  },
  {
    id: 'blessed-warrior-fighting-style',
    name: 'Blessed Warrior',
    description:
      'You learn two cantrips of your choice from the cleric spell list. They count as paladin spells for you, and Charisma is your spellcasting ability for them. Whenever you gain a level in this class, you can replace one of these cantrips with another cantrip from the cleric spell list.',
    FeatureGroupId: 'fighting-style',
  },
  {
    id: 'metamagic-careful-spell-metamagic',
    name: 'Careful Spell',
    description:
      "When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell.",
    FeatureGroupId: 'metamagic',
  },
  {
    id: 'metamagic-distant-spell-metamagic',
    name: 'Distant Spell',
    description:
      'When you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell. When you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet.',
    FeatureGroupId: 'metamagic',
  },
  {
    id: 'metamagic-empowered-spell-metamagic',
    name: 'Empowered Spell',
    description:
      'When you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls. You can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell.',
    FeatureGroupId: 'metamagic',
  },
  {
    id: 'metamagic-extended-spell-metamagic',
    name: 'Extended Spell',
    description:
      'When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours.',
    FeatureGroupId: 'metamagic',
  },
  {
    id: 'metamagic-heightened-spell-metamagic',
    name: 'Heightened Spell',
    description:
      '	When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell.',
    FeatureGroupId: 'metamagic',
  },
  {
    id: 'metamagic-quickened-spell-metamagic',
    name: 'Quickened Spell',
    description:
      'When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting.',
    FeatureGroupId: 'metamagic',
  },
  {
    id: 'metamagic-seeking-spell-metamagic',
    name: 'Seeking Spell',
    description:
      'If you make an attack roll for a spell and miss, you can spend 2 sorcerer points to reroll the d20, and you must use the new roll. You can use Seeking Spell even if you have already used a different Metamagic option during the casting of the spell.',
    FeatureGroupId: 'metamagic',
  },
  {
    id: 'metamagic-subtle-spell-metamagic',
    name: 'Subtle Spell',
    description:
      'When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components.',
    FeatureGroupId: 'metamagic',
  },
  {
    id: 'metamagic-transmuted-spell-metamagic',
    name: 'Transmuted Spell',
    description:
      'When you cast a spell that deals a type of damage from the following list, you can spend 1 sorcery point to change that damage type to one of the other listed types: acid, cold, fire, lightning, poison, thunder.',
    FeatureGroupId: 'metamagic',
  },
  {
    id: 'metamagic-twin-spell-metamagic',
    name: 'Twin Spell',
    description:
      "When you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip). To be eligible, a spell must be incapable of targeting more than one creature at the spell's current level.",
    FeatureGroupId: 'metamagic',
  },
  {
    id: 'agonizing-blast-eldritch-invocations',
    name: 'Agonizing Blast',
    description:
      'When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit.',
  },
  {
    id: 'armor-of-shadows-eldritch-invocations',
    name: 'Armor of Shadows',
    description:
      'You can cast mage armor on yourself at will, without expending a spell slot or material components.',
  },
  {
    id: 'ascendant-step-eldritch-invocations',
    name: 'Ascendant Step',
    description:
      'You can cast levitate on yourself at will, without expending a spell slot or material components. ',
  },
  {
    id: 'beast-speech-eldritch-invocations',
    name: 'Beast Speech',
    description:
      'You can cast speak with animals at will, without expending a spell slot.',
  },
  {
    id: 'beguiling-influence-eldritch-invocations',
    name: 'Beguiling Influence',
    description: 'You gain proficiency in the Deception and Persuasion skills.',
  },
  {
    id: 'bewitching-whispers-eldritch-invocations',
    name: 'Bewitching Whispers',
    description:
      'You can cast compulsion once using a warlock spell slot. You can’t do so again until you finish a long rest.',
  },
  {
    id: 'book-of-ancient-secrets-eldritch-invocations',
    name: 'Book of Ancient Secrets',
    description:
      'You can now inscribe magical rituals in your Book of Shadows. Choose two 1st-­‐‑level spells that have the ritual tag from any class’s spell list (the two needn’t be from the same list). The spells appear in the book and don’t count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can’t cast the spells except as rituals, unless you’ve learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag. On your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell’s level is equal to or less than half your warlock level (rounded up) and if you can spare the time to System Reference Document 5.1 49 transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it.',
  },
  {
    id: 'chains-of-carceri-eldritch-invocations',
    name: 'Chains of Carceri',
    description:
      'You can cast hold monster at will—targeting a celestial, fiend, or elemental—without expending a spell slot or material components. You must finish a long rest before you can use this invocation on the same creature again.',
  },
  {
    id: 'devils-sight-eldritch-invocations',
    name: "Devil's Sight",
    description:
      'You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.',
  },
  {
    id: 'dreadful-word-eldritch-invocations',
    name: 'Dreadful Word',
    description:
      'You can cast confusion once using a warlock spell slot. You can’t do so again until you finish a long rest.',
  },
  {
    id: 'eldritch-sight-eldritch-invocations',
    name: 'Eldritch Sight',
    description:
      'You can cast detect magic at will, without expending a spell slot.',
  },
  {
    id: 'eldritch-spears-eldritch-invocations',
    name: 'Eldritch Spear',
    description: 'When you cast eldritch blast, its range is 300 feet.',
  },
  {
    id: 'eyes-of-the-rune-keeper-eldritch-invocations',
    name: 'Eyes of the Rune Keeper',
    description: 'You can read all writing.',
  },
  {
    id: 'fiendish-vigor-eldritch-invocations',
    name: 'Fiendish Vigor',
    description:
      'You can cast false life on yourself at will as a 1st-­‐‑level spell, without expending a spell slot or material components.',
  },
  {
    id: 'gaze-of-two-minds-eldritch-invocations',
    name: 'Gaze of Two Minds',
    description:
      'You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature’s senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings',
  },
];

const FeatureGroupSeed: Prisma.FeatureGroupCreateManyInput[] = [
  {
    id: 'fighting-style',
    name: 'Fighting Style',
    slug: 'fighting-style',
    description:
      "Fighting styles are special techniques used by certain features to enhance a character's combat abilities.",
    flavorText:
      "Fighting styles are special techniques used by certain features to enhance a character's combat abilities.",
  },
  {
    id: 'metamagic',
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
];

export { FeaturesFromFeatureGroupSeed, FeatureGroupSeed };
