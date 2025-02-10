import { ChainType, Prisma, RefreshEvent, Skill } from '@prisma/client';
import { classIds } from '../Classes/ClassIds';
import { src } from '@/lib/types/types';
import { spellIds } from '../Spells/spells.seed';
import { CustomResourceIds } from '../CustomResource/CustomResource.seed';

const homebrewSubclassesId = {
  oathOfTheGravekeeper: '1001',
  arcaneSalvager: '1002',
};

const subclasses: Prisma.SubClassCreateManyInput[] = [
  {
    id: homebrewSubclassesId.oathOfTheGravekeeper,
    slug: 'oath-of-the-gravekeeper',
    name: 'Oath of the Gravekeeper',
    description:
      'You swear this oath to become a vigilant guardian of the boundary between the living and the dead. Your sacred duty is to protect the realms of the living from the encroachment of the undead and to wield the power of the spirits themselves.',
    flavorText:
      'The Oath of the Gravekeeper is sworn by paladins who dedicate themselves to tbecome a vigilant guardian of the dead. ',
    classId: classIds.paladin,
  },
  {
    id: homebrewSubclassesId.arcaneSalvager,
    slug: 'arcane-salvager',
    name: 'Arcane Salvager',
    classId: classIds.artificer,
    description:
      'Arcane Salvagers are artificers who specialize in the recovery and repurposing of magical items. They are able to combine and extract abilities from magical items to create powerful artifacts.',
    flavorText:
      'Arcane Salvagers are artificers who specialize in the recovery and repurposing of magical items. ',
  },
];

const HomebrewSubclassesSeed = subclasses.map((subclass) => {
  return {
    ...subclass,
    source: src.homebrew,
  };
});

const fids = {
  arcaneSalvagerSpells: 'arcanesalvagerspells',
  combineArtifice: 'combineartifice',
  salvagersEye: 'salvagerseye',
  artifactExpertise: 'artifactexpertise',
  scrapper: 'scrapper',
  advancedCombinations: 'advancedcombinations',
  masterpiece: 'masterpiece',
  arcaneRedistribution: 'arcaneredistribution',
  legendaryWorkmanship: 'legendaryworkmanship',
  gravekeeperSpells: 'gravekeeperspells',
  markForDeath: 'markfordeath',
  spectralDrag: 'spectraldrag',
  spiritualCompanion: 'spiritualcompanion',
  ghostRider: 'ghostrider',
  upgradedDeathMark: 'upgradeddeathmark',
  markedForObliteration: 'markedforobliteration',
  conjureHorde: 'conjurehorde',
};

export const HomebrewSubclassFeaturesSeed: Prisma.FeatureCreateManyInput[] = [
  {
    effectChainType: ChainType.ADD,
    id: fids.arcaneSalvagerSpells,
    subClassId: homebrewSubclassesId.arcaneSalvager,
    name: 'Arcane Salvager Spells',
    description:
      'You gain the following spells when you reach the specified levels. These spells do not count against the number of spells you can prepare.',
    extendedTable: [
      {
        '': {
          headers: ['Level', 'Spells'],
          data: [
            {
              Level: '3rd',
              Spells: `%${spellIds.identify}{Identify}%, %${spellIds.mageHand}{Mage Hand}%`,
            },
            {
              Level: '5th',
              Spells: `%${spellIds.arcaneLock}{Arcane Lock}%, %${spellIds.detectMagic}{Detect Magic}%`,
            },
            {
              Level: '9th',
              Spells: `%${spellIds.dispelMagic}{Dispel Magic}%, %${spellIds.elementalWeapon}{Elemental Weapon}%`,
            },
            {
              Level: '13th',
              Spells: `%${spellIds.arcaneEye}{Arcane Eye}%, %${spellIds.fabricate}{Fabricate}%`,
            },
            {
              Level: '17th',
              Spells: `%${spellIds.creation}{Creation}%, %${spellIds.animateObjects}{Animate Objects}%`,
            },
          ],
        },
      },
    ],
    // levels: [3, 5, 9, 13, 17],
  },
  {
    id: fids.combineArtifice,
    subClassId: homebrewSubclassesId.arcaneSalvager,
    name: 'Combine Artifice',
    description:
      'As an action, you can combine two magical items you possess. Choose one primary item and one secondary item. The primary item retains its base properties, and you can transfer one passive ability from the secondary item to the primary item. The secondary item is destroyed in this process. A combined item is considered infused and counts towards your total infused item count.',
    // levels: [3],
    unimplemented: true,
  },
  {
    id: fids.salvagersEye,
    subClassId: homebrewSubclassesId.arcaneSalvager,
    name: "Salvager's Eye",
    description:
      'One infused item does not count against your total amount of infusions. This item still retains the benefits of being infused.',
    // levels: [3],
  },
  {
    id: fids.artifactExpertise,
    subClassId: homebrewSubclassesId.arcaneSalvager,
    name: 'Artifact Expertise',
    description:
      "You have expertise in Arcana checks. You also gain proficiency in the Arcana skill if you don't already have it.",
    // levels: [5],
  },
  {
    id: fids.scrapper,
    subClassId: homebrewSubclassesId.arcaneSalvager,
    name: 'Scrapper',
    unimplemented: true,
    description:
      'You can destroy a magical item to gain a temporary bonus to your attack and damage rolls. This bonus lasts for 1 minute.',
    extendedTable: [
      {
        'Scrapper Bonus': {
          headers: ['Item Rarity', 'Bonus'],
          data: [
            {
              'Item Rarity': 'Common',
              Bonus: '+1',
            },
            {
              'Item Rarity': 'Uncommon',
              Bonus: '+2',
            },
            {
              'Item Rarity': 'Rare',
              Bonus: '+3',
            },
            {
              'Item Rarity': 'Very Rare',
              Bonus: '+4',
            },
            {
              'Item Rarity': 'Legendary',
              Bonus: '+5',
            },
          ],
        },
      },
    ],
    // levels: [5],
  },
  {
    id: fids.advancedCombinations,
    unimplemented: true,
    subClassId: homebrewSubclassesId.arcaneSalvager,
    name: 'Advanced Combinations',
    description:
      'You can now combine an active ability from a secondary item with a primary item. The primary item gains this active ability, and the secondary item is destroyed. You can only have one item with an additional active ability at a time.',
    // levels: [9],
  },
  {
    id: fids.masterpiece,
    subClassId: homebrewSubclassesId.arcaneSalvager,
    name: 'Masterpiece',
    description:
      'You can choose to combine up to three items into one powerful artifact. This artifact can have up to three passive abilities and one active ability from the secondary items. This artifact cannot be destroyed, and the wielder cannot be disarmed against their will. If wielded by its creator, it automatically gains +3 to its damage and attack rolls.',
    // levels: [9],
  },
  {
    id: fids.arcaneRedistribution,
    subClassId: homebrewSubclassesId.arcaneSalvager,
    name: 'Arcane Redistribution',
    unimplemented: true,
    description:
      'You may attempt to delicately remove abilities from magic items, preserving the original. The original item loses the ability that was extracted. In order to successfully extract the ability, you must have a non-magical item that will absorb the ability.',
    // levels: [15],
  },
  {
    id: fids.legendaryWorkmanship,
    subClassId: homebrewSubclassesId.arcaneSalvager,
    name: 'Legendary Workmanship',
    description:
      'You can now combine five items into a single legendary artifact. This artifact can have up to five passive abilities and two active abilities from the secondary items. ',
    unimplemented: true,
    // levels: [18],
  },
  // gravekeeper
  {
    effectChainType: ChainType.ADD,
    id: fids.gravekeeperSpells,
    subClassId: homebrewSubclassesId.oathOfTheGravekeeper,
    name: 'Gravekeeper Spells',
    description:
      'You learn the following spells when you reach the specified levels.',
    extendedTable: [
      {
        '': {
          headers: ['Level', 'Spells'],
          data: [
            {
              Level: '3rd',
              Spells: `%${spellIds.tollTheDead}{Toll the Dead}%, %${spellIds.detectEvilAndGood}{Detect Evil and Good}%`,
            },
            {
              Level: '5th',
              Spells: `%${spellIds.gentleRepose}{Gentle Repose}%, %${spellIds.rayOfEnfeeblement}{Ray of Enfeeblement}%`,
            },
            {
              Level: '9th',
              Spells: `%${spellIds.speakWithDead}{Speak with Dead}%, %${spellIds.spiritGuardians}{Spirit Guardians}%`,
            },
            {
              Level: '13th',
              Spells: `%${spellIds.blight}{Blight}%, %${spellIds.phantasmalKiller}{Phantasmal Killer}%`,
            },
            {
              Level: '17th',
              Spells: `%${spellIds.wallOfForce}{Wall of Force}%, %${spellIds.cloudkill}{Cloudkill}%`,
            },
          ],
        },
      },
    ],
    // levels: [3, 5, 9, 13, 17],
  },
  {
    id: fids.markForDeath,
    subClassId: homebrewSubclassesId.oathOfTheGravekeeper,
    name: 'Channel Divinity: Mark for Death',
    description:
      'As a bonus action, you can mark a creature within 30 feet of you that you can see for death. Until the end of your next turn, if the creature does not move outside of your melee attack range, a spectral spirit will appear at the location where you used this ability, and attempt to attack the marked creature using your melee attack roll and damage. Any passives and conditions you have do not apply to this attack. You may use this ability a number of times equal to your 2 + Charisma modifier. You regain all expended uses after a short rest.',
    // levels: [3],
  },
  {
    id: fids.spectralDrag,
    subClassId: homebrewSubclassesId.oathOfTheGravekeeper,
    name: 'Channel Divinity: Spectral Drag',
    description:
      "As an action, you can use your Channel Divinity to summon spectral hands to reach from the ground and tug at a creature's feet within 30 feet of you. If the target attempts to move, they must succeed on a Strength saving throw (DC = 8 + your proficiency bonus + your Constitution modifier) or move as if they are in difficult terrain. If they are already in difficult terrain, they fall prone on a failed save. Creatures that are levitating or flying are immune to this ability.",
    // levels: [3],
  },
  {
    id: fids.spiritualCompanion,
    subClassId: homebrewSubclassesId.oathOfTheGravekeeper,
    name: 'Spiritual Companion',
    description:
      'You are assisted by a former friend, lover, pet or other similar creature who was bonded to you in their life. Your companion can inspire you in moments of need, allowing you to reroll one d20 per long rest. \n\nYou also learn the spell “Find Familiar”, which can be cast once per long rest. Your familiar is controlled by your spiritual companion. The familiar that is summoned is an undead version of the creature summoned.',
    // levels: [3],
  },
  {
    id: fids.ghostRider,
    subClassId: homebrewSubclassesId.oathOfTheGravekeeper,
    name: 'Ghost Rider',
    description:
      'The spirits you command guide you safely through combat. Your base move speed increases by 15 feet. Whenever you take the Dash action, you cannot be hit by opportunity attacks. You may choose to forgo this protection to instead automatically apply the Mark for Death on anyone who attempts to make an opportunity attack against you.',
    // levels: [7],
  },
  {
    id: fids.upgradedDeathMark,
    subClassId: homebrewSubclassesId.oathOfTheGravekeeper,
    name: 'Anti Magic Strike',
    description:
      'Whenever a creature attempts to cast a spell, you can use a reaction to guide the spirit, sensing this magic and using it to fuel an attack. It will teleport to wherever the creature is casting the spell, and make a melee attack. If the creature is marked for death, the attack is automatically a critical hit. Using this ability in this way consumes the mark for death on that creature. If the creature survives, It may still teleport.',
    // levels: [7],
  },
  {
    id: fids.markedForObliteration,
    subClassId: homebrewSubclassesId.oathOfTheGravekeeper,
    name: 'Marked for Obliteration',
    description:
      'The attack triggered by Marked for Death now benefits from any passives you have, and will critically hit on a roll of 18 or higher. If you kill a creature marked for Death, you may channel their dying spirit to use this ability again this turn without expending a bonus action or Mark for Death Charge.',
    // levels: [15],
  },
  {
    id: fids.conjureHorde,
    subClassId: homebrewSubclassesId.oathOfTheGravekeeper,
    name: 'Conjure Horde',
    description:
      'Once per long rest, you can use your action to summon a horde of spectral spirits to strike at all enemies within a 30-foot radius around you. Each enemy must make a Dexterity saving throw (DC = 8 + your proficiency bonus + your Constitution modifier). On a failed save, they take damage equal to your melee attack damage and are stunned until the end of their next turn. On a successful save, they take half damage and are not stunned.',
    // levels: [20],
  },
];

const HomebrewFeatureEffectIds = {
  arcaneSalvagerSpells3: 'arcanesalvagerspells3',
  arcaneSalvagerSpells5: 'arcanesalvagerspells5',
  arcaneSalvagerSpells9: 'arcanesalvagerspells9',
  arcaneSalvagerSpells13: 'arcanesalvagerspells13',
  arcaneSalvagerSpells17: 'arcanesalvagerspells17',
  combineArtifice: 'combineartifice',
  salvagersEye: 'salvagerseye',
  artifactExpertise: 'artifactexpertise',
  scrapper: 'scrapper',
  advancedCombinations: 'advancedcombinations',
  sturdyWorkmanship: 'sturdyworkmanship',
  masterpiece: 'masterpiece',
  legendaryWorkmanship: 'legendaryworkmanship',
  arcaneRedistribution: 'arcaneredistribution',
  gravekeeperSpells3: 'gravekeeperspells3',
  graveKeeperSpells5: 'gravekeeperspells5',
  graveKeeperSpells9: 'gravekeeperspells9',
  graveKeeperSpells13: 'gravekeeperspells13',
  graveKeeperSpells17: 'gravekeeperspells17',
  markForDeath: 'markfordeath',
  spectralDrag: 'spectraldrag',
  spiritualCompanion: 'spiritualcompanion',
  ghostRider: 'ghostrider',
  upgradedDeathMark: 'upgradeddeathmark',
  markedForObliteration: 'markedforobliteration',
  conjureHorde: 'conjurehorde',
};

export const HomebrewFeatureEffectSeed: Prisma.EffectCreateInput[] = [
  {
    id: HomebrewFeatureEffectIds.arcaneSalvagerSpells3,
    level: 3,
    Feature: {
      connect: {
        id: fids.arcaneSalvagerSpells,
      },
    },
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: HomebrewFeatureEffectIds.arcaneSalvagerSpells3,
              spellId: spellIds.identify,
            },
          },
          create: {
            spellId: spellIds.identify,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: HomebrewFeatureEffectIds.arcaneSalvagerSpells3,
              spellId: spellIds.mageHand,
            },
          },
          create: {
            spellId: spellIds.mageHand,
          },
        },
      ],
    },
  },
  {
    id: HomebrewFeatureEffectIds.arcaneSalvagerSpells5,
    Feature: {
      connect: {
        id: fids.arcaneSalvagerSpells,
      },
    },
    level: 5,
    parentEffect: {
      connect: {
        id: HomebrewFeatureEffectIds.arcaneSalvagerSpells3,
      },
    },
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: HomebrewFeatureEffectIds.arcaneSalvagerSpells5,
              spellId: spellIds.arcaneLock,
            },
          },
          create: {
            spellId: spellIds.arcaneLock,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: HomebrewFeatureEffectIds.arcaneSalvagerSpells5,
              spellId: spellIds.detectMagic,
            },
          },
          create: {
            spellId: spellIds.detectMagic,
          },
        },
      ],
    },
  },
  {
    id: HomebrewFeatureEffectIds.arcaneSalvagerSpells9,
    Feature: {
      connect: {
        id: fids.arcaneSalvagerSpells,
      },
    },
    level: 9,
    parentEffect: {
      connect: {
        id: HomebrewFeatureEffectIds.arcaneSalvagerSpells5,
      },
    },
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: HomebrewFeatureEffectIds.arcaneSalvagerSpells9,
              spellId: spellIds.dispelMagic,
            },
          },
          create: {
            spellId: spellIds.dispelMagic,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: HomebrewFeatureEffectIds.arcaneSalvagerSpells9,
              spellId: spellIds.elementalWeapon,
            },
          },
          create: {
            spellId: spellIds.elementalWeapon,
          },
        },
      ],
    },
  },
  {
    id: HomebrewFeatureEffectIds.arcaneSalvagerSpells13,
    Feature: {
      connect: {
        id: fids.arcaneSalvagerSpells,
      },
    },
    level: 13,
    parentEffect: {
      connect: {
        id: HomebrewFeatureEffectIds.arcaneSalvagerSpells9,
      },
    },
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: HomebrewFeatureEffectIds.arcaneSalvagerSpells13,
              spellId: spellIds.arcaneEye,
            },
          },
          create: {
            spellId: spellIds.arcaneEye,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: HomebrewFeatureEffectIds.arcaneSalvagerSpells13,
              spellId: spellIds.fabricate,
            },
          },
          create: {
            spellId: spellIds.fabricate,
          },
        },
      ],
    },
  },
  {
    id: HomebrewFeatureEffectIds.arcaneSalvagerSpells17,
    Feature: {
      connect: {
        id: fids.arcaneSalvagerSpells,
      },
    },
    level: 17,
    parentEffect: {
      connect: {
        id: HomebrewFeatureEffectIds.arcaneSalvagerSpells13,
      },
    },
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: HomebrewFeatureEffectIds.arcaneSalvagerSpells17,
              spellId: spellIds.creation,
            },
          },
          create: {
            spellId: spellIds.creation,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: HomebrewFeatureEffectIds.arcaneSalvagerSpells17,
              spellId: spellIds.animateObjects,
            },
          },
          create: {
            spellId: spellIds.animateObjects,
          },
        },
      ],
    },
  },
  {
    id: HomebrewFeatureEffectIds.combineArtifice,
    Feature: {
      connect: {
        id: fids.combineArtifice,
      },
    },
    level: 3,
  },
  {
    id: HomebrewFeatureEffectIds.salvagersEye,
    Feature: {
      connect: {
        id: fids.salvagersEye,
      },
    },
    level: 3,
  },
  {
    id: HomebrewFeatureEffectIds.artifactExpertise,
    Feature: {
      connect: {
        id: fids.artifactExpertise,
      },
    },
    fullSkillProficiencies: [Skill.ARCANA],
    expertiseSkillProficiencies: [Skill.ARCANA],
    level: 5,
  },
  {
    id: HomebrewFeatureEffectIds.scrapper,
    Feature: {
      connect: {
        id: fids.scrapper,
      },
    },
    level: 5,
  },
  {
    id: HomebrewFeatureEffectIds.advancedCombinations,
    Feature: {
      connect: {
        id: fids.advancedCombinations,
      },
    },
    level: 9,
  },

  {
    id: HomebrewFeatureEffectIds.masterpiece,
    Feature: {
      connect: {
        id: fids.masterpiece,
      },
    },
    level: 9,
  },
  {
    id: HomebrewFeatureEffectIds.arcaneRedistribution,
    Feature: {
      connect: {
        id: fids.arcaneRedistribution,
      },
    },
    level: 15,
  },
  {
    id: HomebrewFeatureEffectIds.legendaryWorkmanship,
    Feature: {
      connect: {
        id: fids.legendaryWorkmanship,
      },
    },
    level: 18,
  },
  {
    id: HomebrewFeatureEffectIds.gravekeeperSpells3,
    Feature: {
      connect: {
        id: fids.gravekeeperSpells,
      },
    },
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              spellId: spellIds.tollTheDead,
              effectId: HomebrewFeatureEffectIds.gravekeeperSpells3,
            },
          },
          create: {
            spellId: spellIds.tollTheDead,
          },
        },
        {
          where: {
            effectId_spellId: {
              spellId: spellIds.detectEvilAndGood,
              effectId: HomebrewFeatureEffectIds.gravekeeperSpells3,
            },
          },
          create: {
            spellId: spellIds.detectEvilAndGood,
          },
        },
      ],
    },
    level: 3,
  },
  {
    id: HomebrewFeatureEffectIds.graveKeeperSpells5,
    level: 5,
    Feature: {
      connect: {
        id: fids.gravekeeperSpells,
      },
    },
    parentEffect: {
      connect: {
        id: HomebrewFeatureEffectIds.gravekeeperSpells3,
      },
    },
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: HomebrewFeatureEffectIds.graveKeeperSpells5,
              spellId: spellIds.gentleRepose,
            },
          },
          create: {
            spellId: spellIds.gentleRepose,
          },
        },
      ],
    },
  },
  {
    id: HomebrewFeatureEffectIds.graveKeeperSpells9,
    level: 9,
    Feature: {
      connect: {
        id: fids.gravekeeperSpells,
      },
    },
    parentEffect: {
      connect: {
        id: HomebrewFeatureEffectIds.graveKeeperSpells5,
      },
    },
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: HomebrewFeatureEffectIds.graveKeeperSpells9,
              spellId: spellIds.speakWithDead,
            },
          },
          create: {
            spellId: spellIds.speakWithDead,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: HomebrewFeatureEffectIds.graveKeeperSpells9,
              spellId: spellIds.spiritGuardians,
            },
          },
          create: {
            spellId: spellIds.spiritGuardians,
          },
        },
      ],
    },
  },
  {
    id: HomebrewFeatureEffectIds.graveKeeperSpells13,
    level: 13,
    Feature: {
      connect: {
        id: fids.gravekeeperSpells,
      },
    },
    parentEffect: {
      connect: {
        id: HomebrewFeatureEffectIds.graveKeeperSpells9,
      },
    },
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: HomebrewFeatureEffectIds.graveKeeperSpells13,
              spellId: spellIds.blight,
            },
          },
          create: {
            spellId: spellIds.blight,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: HomebrewFeatureEffectIds.graveKeeperSpells13,
              spellId: spellIds.phantasmalKiller,
            },
          },
          create: {
            spellId: spellIds.phantasmalKiller,
          },
        },
      ],
    },
  },
  {
    id: HomebrewFeatureEffectIds.graveKeeperSpells17,
    level: 17,
    Feature: {
      connect: {
        id: fids.gravekeeperSpells,
      },
    },
    parentEffect: {
      connect: {
        id: HomebrewFeatureEffectIds.graveKeeperSpells13,
      },
    },
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: HomebrewFeatureEffectIds.graveKeeperSpells17,
              spellId: spellIds.wallOfForce,
            },
          },
          create: {
            spellId: spellIds.wallOfForce,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: HomebrewFeatureEffectIds.graveKeeperSpells17,
              spellId: spellIds.cloudkill,
            },
          },
          create: {
            spellId: spellIds.cloudkill,
          },
        },
      ],
    },
  },
  {
    id: HomebrewFeatureEffectIds.markForDeath,
    level: 3,
    Feature: {
      connect: {
        id: fids.markForDeath,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: HomebrewFeatureEffectIds.markForDeath,
            resourceId: CustomResourceIds.markForDeath,
          },
        },
        create: {
          scalingFormula: '2 + CHA',
          refreshOn: RefreshEvent.SHORT_REST,
          resourceId: CustomResourceIds.markForDeath,
        },
      },
    },
  },
  {
    id: HomebrewFeatureEffectIds.spectralDrag,
    level: 3,
    Feature: {
      connect: {
        id: fids.spectralDrag,
      },
    },
  },
  {
    id: HomebrewFeatureEffectIds.spiritualCompanion,
    level: 3,
    Feature: {
      connect: {
        id: fids.spiritualCompanion,
      },
    },
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: HomebrewFeatureEffectIds.spiritualCompanion,
            spellId: spellIds.findFamiliar,
          },
        },
        create: {
          spellId: spellIds.findFamiliar,
        },
      },
    },
  },
  {
    id: HomebrewFeatureEffectIds.ghostRider,
    level: 7,
    Feature: {
      connect: {
        id: fids.ghostRider,
      },
    },
    speedBonusFormula: '15',
  },
  {
    id: HomebrewFeatureEffectIds.upgradedDeathMark,
    level: 7,
    Feature: {
      connect: {
        id: fids.upgradedDeathMark,
      },
    },
  },
  {
    id: HomebrewFeatureEffectIds.markedForObliteration,
    level: 15,
    Feature: {
      connect: {
        id: fids.markedForObliteration,
      },
    },
  },
  {
    id: HomebrewFeatureEffectIds.conjureHorde,
    level: 20,
    Feature: {
      connect: {
        id: fids.conjureHorde,
      },
    },
  },
];

export default HomebrewSubclassesSeed;
