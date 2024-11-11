import { Prisma } from '@prisma/client';
import { classIds } from '../Classes/ClassIds';
import { src } from '@/lib/types/types';
import { spellIds } from '../Spells/spells.seed';
import generateId from '../_helpers/generateId';

let count = 1;

const homebrewSubclassesId = {
  oathOfTheGravekeeper: '1001',
  arcaneSalvager: '1002',
};

const subclasses: Prisma.SubClassCreateManyInput[] = [
  {
    id: homebrewSubclassesId.oathOfTheGravekeeper,
    name: 'Oath of the Gravekeeper',
    description:
      'You swear this oath to become a vigilant guardian of the boundary between the living and the dead. Your sacred duty is to protect the realms of the living from the encroachment of the undead and to wield the power of the spirits themselves.',
    flavorText:
      'The Oath of the Gravekeeper is sworn by paladins who dedicate themselves to tbecome a vigilant guardian of the dead. ',
    classId: classIds.paladin,
  },
  {
    id: homebrewSubclassesId.arcaneSalvager,
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

export const HomebrewSubclassFeaturesSeed = [
  {
    subClassId: homebrewSubclassesId.oathOfTheGravekeeper,
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
    levels: [3, 5, 9, 13, 17],
  },
  {
    subClassId: homebrewSubclassesId.oathOfTheGravekeeper,
    name: 'Combine Artifice',
    description:
      'As an action, you can combine two magical items you possess. Choose one primary item and one secondary item. The primary item retains its base properties, and you can transfer one passive ability from the secondary item to the primary item. The secondary item is destroyed in this process. A combined item is considered infused and counts towards your total infused item count.',
    levels: [3],
  },
  {
    subClassId: homebrewSubclassesId.oathOfTheGravekeeper,
    name: "Salvager's Eye",
    description: 'You gain an additional infusion known at 3rd level.',
    levels: [3],
  },
  {
    subClassId: homebrewSubclassesId.oathOfTheGravekeeper,
    name: 'Artifact Expertise',
    description:
      "You have expertise in Arcana checks related to magical items and artifacts. You also gain proficiency in the Arcana skill if you don't already have it.",
    levels: [5],
  },
  {
    subClassId: homebrewSubclassesId.oathOfTheGravekeeper,
    name: 'Scrapper',
    description:
      'You are adept at finding the hidden value in certain items. Twice per long rest, you may attempt to scrap an item to automatically receive its value in gold. You must roll an arcana check that is greater than or equal to the gold amount / 50. Regardless if you succeed or fail the roll, the item is destroyed. ',
    levels: [5],
  },
  {
    subClassId: homebrewSubclassesId.oathOfTheGravekeeper,
    name: 'Advanced Combinations',
    description:
      'You can now combine an active ability from a secondary item with a primary item. The primary item gains this active ability, and the secondary item is destroyed. You can only have one item with an additional active ability at a time.',
    levels: [9],
  },
  {
    subClassId: homebrewSubclassesId.oathOfTheGravekeeper,
    name: 'Sturdy Workmanship',
    description:
      'Combined items have their durability increased. If an active ability has limited uses, it is improved in the following manner.',
    options: [
      'Once per long rest -> Once per short rest',
      'Once per short rest -> Twice per short rest',
      'N charges -> N+1 charges',
    ],
    levels: [9],
  },
  {
    subClassId: homebrewSubclassesId.oathOfTheGravekeeper,
    name: 'Masterpiece',
    description:
      'You can choose to combine up to three items into one poerful artifact. This artifact can have up to three passive abilities and one active ability from the secondary items. This artifact cannot be destroyed, and the wielder cannot be disarmed against their will. If wielded by its creator, it automatically gains +3 to its damage and attack rolls.',
    levels: [9],
  },
  {
    subClassId: homebrewSubclassesId.oathOfTheGravekeeper,
    name: 'Arcane Redistribution',
    description:
      'You may attempt to delicately remove abilities from magic items, preserving the original. The original item loses the ability that was extracted. In order to successfully extract the ability, you must have a non-magical item that will absorb the ability.',
    levels: [15],
  },
  {
    subClassId: homebrewSubclassesId.oathOfTheGravekeeper,
    name: 'Legendary Workmanship',
    description:
      'You can now combine five items into a single legendary artifact. This artifact can have up to five passive abilities and two active abilities from the secondary items. ',
    levels: [18],
  },
  // gravekeeper
  {
    subClassId: homebrewSubclassesId.arcaneSalvager,
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
    levels: [3, 5, 9, 13, 17],
  },
  {
    subClassId: homebrewSubclassesId.arcaneSalvager,
    name: 'Channel Divinity: Mark for Death',
    description:
      'As a bonus action, you can use your Channel Divinity to mark a creature within 30 feet of you that you can see for death. Until the end of your next turn, if the creature does not move outside of your melee attack range, a spectral spirit will appear at the location where you used this ability, and attempt to attack the marked creature using your melee attack roll and damage. Any passives and conditions you have do not apply to this attack.',
    levels: [3],
  },
  {
    subClassId: homebrewSubclassesId.arcaneSalvager,
    name: 'Channel Divinity: Spectral Drag',
    description:
      "As an action, you can use your Channel Divinity  to summon spectral hands to reach from the ground and tug at a creature's feet within 30 feet of you. If the target attempts to move, they must succeed on a Strength saving throw (DC = 8 + your proficiency bonus + your Constitution modifier) or move as if they are in difficult terrain. If they are already in difficult terrain, they fall prone on a failed save. Creatures that are levitating or flying are immune to this ability.",
    levels: [3],
  },
  {
    subClassId: homebrewSubclassesId.arcaneSalvager,
    name: 'Spiritual Companion',
    description:
      'You are assisted by a former friend, lover, pet or other similar creature who was bonded to you in their life. Your companion can inspire you in moments of need, allowing you to reroll one d20 per long rest. \n\nYou also learn the spell “Find Familiar”, which can be cast once per long rest. Your familiar is controlled by your spiritual companion. The familiar that is summoned is an undead version of the creature summoned.',
    levels: [3],
  },
  {
    subClassId: homebrewSubclassesId.arcaneSalvager,
    name: 'Ghost Rider',
    description:
      'The spirits you command guide you safely through combat. Your base move speed increases by 15 feet. Whenever you take the Dash action, you cannot be hit by opportunity attacks. You may choose to forgo this protection to instead automatically apply the Mark for Death on anyone who attempts to make an opportunity attack against you.',
    levels: [7],
  },
  {
    subClassId: homebrewSubclassesId.arcaneSalvager,
    name: 'Upgraded Death Mark',
    description:
      'Whenever a creature affected by marked for death attempts to teleport, you can use a reaction to guide the spirit, sensing this magic and using it to fuel an attack. It will teleport to wherever the creature is casting the spell, and make a melee attack. If the attack lands, you may roll double the dice for the damage roll. Using this ability consumes the mark for death on that creature. If the creature survives, It may still teleport.',
    levels: [7],
  },
  {
    subClassId: homebrewSubclassesId.arcaneSalvager,
    name: 'Marked for Obliteration',
    description:
      'Your Mark for Death ability upgrades to Marked for Obliteration. The attack triggered by Marked for Obliteration now benefits from any passives you have, and will critically hit on a roll of 15 or higher (base roll without modifiers). If you kill a creature marked for Obliteration, you may channel their dying spirit to use this ability again this turn without expending a bonus action or Channel Divinity Charge.',
    levels: [15],
  },
  {
    subClassId: homebrewSubclassesId.arcaneSalvager,
    name: 'Conjure Horde',
    description:
      'Once per long rest, you can use your action to summon a horde of spectral spirits to strike at all enemies within a 30-foot radius around you. Each enemy must make a Dexterity saving throw (DC = 8 + your proficiency bonus + your Constitution modifier). On a failed save, they take damage equal to your melee attack damage and are stunned until the end of their next turn. On a successful save, they take half damage and are not stunned.',
    levels: [20],
  },
].map((feature, index, arr) => {
  const featureParent = HomebrewSubclassesSeed.find(
    (subClass) => subClass.id === feature.subClassId
  );
  if (!featureParent?.name) throw new Error('Feature must have a name');
  const id = generateId('subclass', feature.name, featureParent.name, count);
  count++;
  const nextSubclassFeature = arr[index + 1];
  if (!nextSubclassFeature) return { ...feature, id };
  if (nextSubclassFeature.subClassId !== feature.subClassId) {
    count = 1;
  }
  return { ...feature, id };
}) as Prisma.FeatureCreateManyInput[];

export default HomebrewSubclassesSeed;
