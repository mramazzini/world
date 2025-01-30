import { src } from '@/lib/types/types';
import { Prisma } from '@prisma/client';

const FeatSeed: Prisma.FeatCreateManyInput[] = [
  // {
  //   id: '1',
  //   name: 'Aberrant Dragonmark',
  //   slug: '',
  //   flavorText: 'You have manifested an aberrant dragonmark.',
  //   prereqDescription: 'No other dragonmark',
  //   source: src.eberron,
  //   // prerequisites: {
  //   //   protocol: 'AND',
  //   //   data: [
  //   //     {
  //   //       blackList: true,
  //   //       SubSpecies: subSpeciesIds.markOfDetection, // mark of detection half elf
  //   //     },
  //   //     {
  //   //       blackList: true,
  //   //       SubSpecies: subSpeciesIds.markOfFindingOrk, // mark of finding half orc
  //   //     },
  //   //     {
  //   //       blackList: true,
  //   //       SubSpecies: subSpeciesIds.markOfFindingHuman, // mark of finding human
  //   //     },
  //   //     {
  //   //       blackList: true,
  //   //       SubSpecies: subSpeciesIds.markOfHandling, // mark of handling human
  //   //     },
  //   //     {
  //   //       blackList: true,
  //   //       SubSpecies: subSpeciesIds.markOfHealing, // mark of healing halfling
  //   //     },
  //   //     {
  //   //       blackList: true,
  //   //       SubSpecies: subSpeciesIds.markOfHospitality, // mark of hospitality halfling
  //   //     },
  //   //     {
  //   //       blackList: true,
  //   //       SubSpecies: subSpeciesIds.markOfMaking, // mark of making human
  //   //     },
  //   //     {
  //   //       blackList: true,
  //   //       SubSpecies: subSpeciesIds.markOfPassage, // mark of passage human
  //   //     },
  //   //     {
  //   //       blackList: true,
  //   //       SubSpecies: subSpeciesIds.markOfScribing, // mark of scribing gnome
  //   //     },
  //   //     {
  //   //       blackList: true,
  //   //       SubSpecies: subSpeciesIds.markOfSentinel, // mark of sentinel human
  //   //     },
  //   //     {
  //   //       blackList: true,
  //   //       SubSpecies: subSpeciesIds.markOfShadow, // mark of shadow elf
  //   //     },
  //   //     {
  //   //       blackList: true,
  //   //       SubSpecies: subSpeciesIds.markOfStorm, // mark of storm half-elf
  //   //     },
  //   //     {
  //   //       blackList: true,
  //   //       SubSpecies: subSpeciesIds.markOfWarding, // mark of warding dwarf
  //   //     },
  //   //   ],
  //   // },
  // },
  // {
  //   id: '2',
  //   name: 'Actor',
  //   slug: '',
  //   flavorText: 'You are skilled at mimicry and dramatics.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '3',
  //   name: 'Alert',
  //   slug: '',
  //   flavorText: 'You are always on the lookout for danger.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '4',
  //   name: 'Artificer Initiate',
  //   slug: '',
  //   flavorText: "You have learned some of an artificer's inventiveness.",
  //   source: src.tasha,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '5',
  //   name: 'Athlete',
  //   slug: '',
  //   flavorText: 'You have undergone extensive physical training.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '6',
  //   name: 'Cartomancer',
  //   slug: '',
  //   flavorText:
  //     'You have learned to channel your magic through a deck of cards.',
  //   source: src.manyThings,
  //   prereqDescription: '4th Level, Spellcaster',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Spellcaster: true,
  //       },
  //       {
  //         minLevel: 4,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '7',
  //   name: 'Charger',
  //   slug: '',
  //   flavorText: 'You are trained in mounted combat.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '8',
  //   name: 'Chef',
  //   slug: '',
  //   flavorText:
  //     'Time and effort spent mastering the culinary arts has paid off.',
  //   source: src.tasha,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '9',
  //   name: 'Crossbow Expert',
  //   slug: '',
  //   flavorText: 'You have extensive practice with the crossbow.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '10',
  //   name: 'Crusher',
  //   slug: '',
  //   flavorText: 'You are practiced in the art of crushing your enemies.',
  //   source: src.tasha,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '11',
  //   name: 'Defensive Duelist',
  //   slug: '',
  //   flavorText: 'You excel at defending yourself while dueling.',
  //   source: src.phb,
  //   prereqDescription: 'Dexterity 13 or higher',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         minAbilityScore: { ability: Ability.DEX, value: 13 },
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '12',
  //   name: 'Dual Wielder',
  //   slug: '',
  //   flavorText: 'You master fighting with two weapons.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '13',
  //   name: 'Dungeon Delver',
  //   slug: '',
  //   flavorText:
  //     'You are alert to the hidden traps and secret doors found in many dungeons.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '14',
  //   name: 'Durable',
  //   slug: '',
  //   flavorText: 'You are hardy and resiliant.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '15',
  //   name: 'Eldritch Adept',
  //   slug: '',
  //   flavorText: 'Studying occult lore, you learn one eldritch invocation.',
  //   source: src.tasha,
  //   prereqDescription: 'Spellcaster',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Spellcaster: true,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '16',
  //   name: 'Elemental Adept',
  //   slug: '',
  //   flavorText: 'You have mastered the elements.',
  //   source: src.phb,
  //   prereqDescription: 'The ability to cast at least one spell',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Spellcaster: true,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '17',
  //   name: 'Fey Touched',
  //   slug: '',
  //   flavorText: 'Your exposure to the Feywild has changed you.',
  //   source: src.tasha,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '18',
  //   name: 'Fighting Initiate',
  //   slug: '',
  //   flavorText:
  //     'Your martial training has helped you develop a particular style of fighting.',
  //   source: src.tasha,
  //   prereqDescription: 'Proficiency with a martial weapon',
  //   prerequisites: {
  //     protocol: 'OR',
  //     data: [
  //       {
  //         martialWeaponProficiency: true,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '19',
  //   name: 'Gift of the Chromatic Dragon',
  //   slug: '',
  //   flavorText: 'You have inherited the power of a chromatic dragon.',
  //   source: src.fizban,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '20',
  //   name: 'Gift of the Gem Dragon',
  //   slug: '',
  //   flavorText: 'You have inherited the power of a gem dragon.',
  //   source: src.fizban,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '21',
  //   name: 'Gift of the Metallic Dragon',
  //   slug: '',
  //   flavorText: 'You’ve manifested some of the power of metallic dragons.',
  //   source: src.fizban,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '22',
  //   name: 'Grappler',
  //   slug: '',
  //   flavorText:
  //     "You've developed the skills necessary to hold your own in close-quarters grappling.",
  //   source: src.phb,
  //   prereqDescription: 'Strength 13 or higher',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         minAbilityScore: { ability: Ability.STR, value: 13 },
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '23',
  //   name: 'Great Weapon Master',
  //   slug: '',
  //   flavorText:
  //     "You've learned to put the weight of a weapon to your advantage.",
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '24',
  //   name: 'Gunner',
  //   slug: '',
  //   flavorText: 'You have a quick hand and keen eye when employing firearms.',
  //   source: src.tasha,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '25',
  //   name: 'Healer',
  //   slug: '',
  //   flavorText:
  //     'You are an able physician, allowing you to mend wounds quickly.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '26',
  //   name: 'Heavily Armored',
  //   slug: '',
  //   flavorText: 'You have trained to master the use of heavy armor.',
  //   source: src.phb,
  //   prereqDescription: 'Proficiency with medium armor',
  //   prerequisites: {
  //     protocol: 'OR',
  //     data: [
  //       {
  //         mediumArmorProficiency: true,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '27',
  //   name: 'Heavy Armor Master',
  //   slug: '',
  //   flavorText:
  //     'You can use your armor to deflect strikes that would kill others.',
  //   source: src.phb,
  //   prereqDescription: 'Proficiency with heavy armor',
  //   prerequisites: {
  //     protocol: 'OR',
  //     data: [
  //       {
  //         heavyArmorProficiency: true,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '28',
  //   name: 'Inspiring Leader',
  //   slug: '',
  //   flavorText: 'You can spend time to inspire your companions.',
  //   source: src.phb,
  //   prereqDescription: 'Charisma 13 or higher',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         minAbilityScore: { ability: Ability.CHA, value: 13 },
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '29',
  //   name: 'Keen Mind',
  //   slug: '',
  //   flavorText: 'You have a mind that can track time, direction, and detail.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '30',
  //   name: 'Lightly Armored',
  //   slug: '',
  //   flavorText: 'You have trained to master the use of light armor.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '31',
  //   name: 'Linguist',
  //   slug: '',
  //   flavorText: 'You have studied languages and codes.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '32',
  //   name: 'Lucky',
  //   slug: '',
  //   flavorText:
  //     'You have inexplicable luck that seems to kick in at just the right moment.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '33',
  //   name: 'Mage Slayer',
  //   slug: '',
  //   flavorText:
  //     'You have practiced techniques useful in melee combat against spellcasters.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '34',
  //   name: 'Magic Initiate',
  //   slug: '',
  //   flavorText: 'You learn a few spells of your choice from a specific class.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '35',
  //   name: 'Martial Adept',
  //   slug: '',
  //   flavorText:
  //     'You have martial training that allows you to perform special combat maneuvers.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '36',
  //   name: 'Medium Armor Master',
  //   slug: '',
  //   flavorText: 'You have learned to master the use of medium armor.',
  //   source: src.phb,
  //   prereqDescription: 'Proficiency with medium armor',
  //   prerequisites: {
  //     protocol: 'OR',
  //     data: [
  //       {
  //         mediumArmorProficiency: true,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '37',
  //   name: 'Metamagic Adept',
  //   slug: '',
  //   flavorText:
  //     "You've learned how to exert your will on your spells to alter how they function.",
  //   source: src.tasha,
  //   prereqDescription: 'Spellcaster',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Spellcaster: true,
  //       },
  //     ],
  //   },
  // },
  {
    id: '38',
    name: 'Mobile',
    slug: 'mobile',
    flavorText: 'You are exceptionally speedy and agile.',
    source: src.phb,
    prereqDescription: 'None',
  },
  // {
  //   id: '39',
  //   name: 'Moderately Armored',
  //   slug: '',
  //   flavorText:
  //     'You have trained to master the use of medium armor and shileds.',
  //   source: src.phb,
  //   prereqDescription: 'Proficiency with light armor',
  //   prerequisites: {
  //     protocol: 'OR',
  //     data: [
  //       {
  //         lightArmorProficiency: true,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '40',
  //   name: 'Mounted Combatant',
  //   slug: '',
  //   flavorText: 'You are a dangerous foe to face while mounted.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '41',
  //   name: 'Observant',
  //   slug: '',
  //   flavorText: 'You are quick to notice details of your environment.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '42',
  //   name: 'Piercer',
  //   slug: '',
  //   flavorText: 'You have achieved a penetrating precision in combat.',
  //   source: src.tasha,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '43',
  //   name: 'Poisoner',
  //   slug: '',
  //   flavorText: 'You can prepare and deliver deadly poisons.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '44',
  //   name: 'Polearm Master',
  //   slug: '',
  //   flavorText: 'You can keep your enemies at bay with reach weapons.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  {
    id: '45',
    name: 'Resilient',
    slug: 'resilient',
    flavorText: 'You gain some bonuses in a chosen ability score.',
    source: src.phb,
    prereqDescription: 'None',
  },
  // {
  //   id: '46',
  //   name: 'Ritual Caster',
  //   slug: '',
  //   flavorText: 'You can cast a small number of spells as rituals.',
  //   source: src.phb,
  //   prereqDescription: 'Intelligence or Wisdom 13 or higher',
  //   prerequisites: {
  //     protocol: 'OR',
  //     data: [
  //       {
  //         minAbilityScore: { ability: Ability.INT, value: 13 },
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '47',
  //   name: 'Rune Shaper',
  //   slug: '',
  //   flavorText: 'You’ve studied the magic of Giant runes.',
  //   source: src.Bigby,
  //   prereqDescription: 'Spellcasting Feature or Rune Carver Background',
  //   prerequisites: {
  //     protocol: 'OR',
  //     data: [
  //       {
  //         Spellcaster: true,
  //       },
  //       {
  //         Background: backgroundIds.runeCarver,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '48',
  //   name: 'Savage Attacker',
  //   slug: '',
  //   flavorText: 'You are a ferocious combatant.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '49',
  //   name: 'Sentinel',
  //   slug: '',
  //   flavorText:
  //     "You have mastered techniques to take advantage of every drop in any enemy's guard.",
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '50',
  //   name: 'Shadow Touched',
  //   slug: '',
  //   flavorText: "Your exposure to the Shadowfell's magic has changed you.",
  //   source: src.tasha,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '51',
  //   name: 'Sharpshooter',
  //   slug: '',
  //   flavorText:
  //     'You have mastered ranged weapons and can make shots that others find impossible.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '52',
  //   name: 'Shield Master',
  //   slug: '',
  //   flavorText: 'You use shields not just for protection but also for offense.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  {
    id: '53',
    name: 'Skill Expert',
    slug: 'skill-expert',
    flavorText: 'You have honed your proficiency with particular skills.',
    source: src.tasha,
    prereqDescription: 'None',
  },
  // {
  //   id: '54',
  //   name: 'Skilled',
  //   slug: '',
  //   flavorText: 'You are skilled.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '55',
  //   name: 'Skulker',
  //   slug: '',
  //   flavorText: 'You are expert at slinking through shadows.',
  //   source: src.phb,
  //   prereqDescription: 'Dexterity 13 or higher',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         minAbilityScore: { ability: Ability.DEX, value: 13 },
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '56',
  //   name: 'Slasher',
  //   slug: '',
  //   flavorText: "You've learned where to cut to have the greatest results.",
  //   source: src.tasha,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '57',
  //   name: 'Spell Sniper',
  //   slug: '',
  //   flavorText:
  //     'You have learned techniques to enhance your attacks with certain kinds of spells, gaining the following benefits:',
  //   source: src.phb,
  //   prereqDescription: 'The ability to cast at least one spell',
  //   prerequisites: {
  //     protocol: 'OR',
  //     data: [
  //       {
  //         hasASpell: true,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '58',
  //   name: 'Strike of the Giants',
  //   slug: '',
  //   flavorText:
  //     'You have absorbed primeval magic that gives you an echo of the might of giants.',
  //   source: src.Bigby,
  //   prereqDescription:
  //     'Martial Weapon Proficiency or Giant Foundling Background',
  //   // prerequisites: {
  //   //   protocol: 'OR',
  //   //   data: [
  //   //     {
  //   //       martialWeaponProficiency: true,
  //   //     },
  //   //     {
  //   //       Background: backgroundIds.giantFoundling,
  //   //     },
  //   //   ],
  //   // },
  // },
  // {
  //   id: '59',
  //   name: 'Ember of the Fire Giant',
  //   slug: '',
  //   flavorText: 'You’ve manifested the fiery combat emblematic of fire giants.',
  //   source: src.Bigby,
  //   prereqDescription: 'Strike of the Giants feat, 4th Level',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Feat: '58',
  //       },
  //       {
  //         minLevel: 4,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '60',
  //   name: 'Fury of the Frost Giant',
  //   slug: '',
  //   flavorText: 'You’ve manifested the icy might emblematic of frost giants',
  //   source: src.Bigby,
  //   prereqDescription: 'Strike of the Giants feat, 4th Level',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Feat: '58',
  //       },
  //       {
  //         minLevel: 4,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '61',
  //   name: 'Guile of the Cloud Giant',
  //   slug: '',
  //   flavorText:
  //     'You’ve manifested the confounding magic emblematic of cloud giants.',
  //   source: src.Bigby,
  //   prereqDescription: 'Strike of the Giants feat, 4th Level',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Feat: '58',
  //       },
  //       {
  //         minLevel: 4,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '62',
  //   name: 'Keenness of the Stone Giant',
  //   slug: '',
  //   flavorText:
  //     'You’ve manifested the physical talents emblematic of stone giants.',
  //   source: src.Bigby,
  //   prereqDescription: 'Strike of the Giants feat, 4th Level',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Feat: '58',
  //       },
  //       {
  //         minLevel: 4,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '63',
  //   name: 'Soul of the Storm Giant',
  //   slug: '',
  //   flavorText:
  //     'You’ve manifested the tempest magic emblematic of storm giants.',
  //   source: src.Bigby,
  //   prereqDescription: 'Strike of the Giants feat, 4th Level',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Feat: '58',
  //       },
  //       {
  //         minLevel: 4,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '64',
  //   name: 'Tavern Brawler',
  //   slug: '',
  //   flavorText:
  //     'You are accustomed to the rough-and-tumble fighting using whatever weapons happen to be at hand.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '65',
  //   name: 'Telekinetic',
  //   slug: '',
  //   flavorText: 'You learn to move things with your mind.',
  //   source: src.tasha,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '66',
  //   name: 'Telepathic',
  //   slug: '',
  //   flavorText: 'You awaken the ability to mentally connect with others.',
  //   source: src.tasha,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '67',
  //   name: 'Tough',
  //   slug: '',
  //   flavorText: 'You are Tough.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '68',
  //   name: 'Vigor of the Hill Giant',
  //   slug: '',
  //   flavorText: 'You’ve manifested the resilience emblematic of hill giants.',
  //   source: src.Bigby,
  //   prereqDescription: 'Strike of the Giants feat, 4th Level',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Feat: '58',
  //       },
  //       {
  //         minLevel: 4,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '69',
  //   name: 'War Caster',
  //   slug: '',
  //   flavorText: 'You have practiced casting spells in the midst of combat.',
  //   source: src.phb,
  //   prereqDescription: 'The ability to cast at least one spell',
  //   prerequisites: {
  //     protocol: 'OR',
  //     data: [
  //       {
  //         hasASpell: true,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '70',
  //   name: 'Weapon Master',
  //   slug: '',
  //   flavorText: 'You have practiced extensively with a variety of weapons.',
  //   source: src.phb,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '71',
  //   name: 'Scion of the Outer Planes',
  //   slug: '',
  //   flavorText:
  //     'Your connection to an Outer Plane infuses you with the energy there.',
  //   source: src.planescape,
  //   prereqDescription: 'Planescape Campaign',
  // },
  // {
  //   id: '72',
  //   name: 'Agent of Order',
  //   slug: '',
  //   flavorText: 'You can channel cosmic forces of order.',
  //   source: src.planescape,
  //   prereqDescription:
  //     'Planescape Campaign, 4th Level, Scion of the Outer Planes Feat',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         minLevel: 4,
  //       },
  //       {
  //         Feat: '71',
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '73',
  //   name: 'Baleful Scion',
  //   slug: '',
  //   flavorText: 'You can channel cosmic forces of evil.',
  //   source: src.planescape,
  //   prereqDescription:
  //     'Planescape Campaign, 4th Level, Scion of the Outer Planes Feat',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         minLevel: 4,
  //       },
  //       {
  //         Feat: '71',
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '74',
  //   name: 'Cohort of Chaos',
  //   slug: '',
  //   flavorText: 'You can channel cosmic forces of chaos.',
  //   source: src.planescape,
  //   prereqDescription:
  //     'Planescape Campaign, 4th Level, Scion of the Outer Planes Feat',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         minLevel: 4,
  //       },
  //       {
  //         Feat: '71',
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '75',
  //   name: 'Outlands Envoy',
  //   slug: '',
  //   flavorText:
  //     'You have spent significant time in Sigil or the Outlands, the crossroads of the multiverse. Being steeped in converging planar energies grants you some benefits.',
  //   source: src.planescape,
  //   prereqDescription: '4th Level, Scion of the Outer Planes',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         minLevel: 4,
  //       },
  //       {
  //         Feat: '71',
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '76',
  //   name: 'Planar Wanderer',
  //   slug: '',
  //   flavorText:
  //     'You can draw upon the forces of the multiverse to survive cosmic extremes and to traverse its infinite realms.',
  //   prereqDescription:
  //     'Planescape Campaign, 4th Level, Scion of the Outer Planes',
  //   source: src.planescape,
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         minLevel: 4,
  //       },
  //       {
  //         Feat: '71',
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '77',
  //   name: 'Righteous Heritor',
  //   slug: '',
  //   flavorText: 'You can channel cosmic forces of good.',
  //   source: src.planescape,
  //   prereqDescription:
  //     'Planescape Campaign, 4th Level, Scion of the Outer Planes Feat',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         minLevel: 4,
  //       },
  //       {
  //         Feat: '71',
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '78',
  //   name: 'Strixhaven Initiate',
  //   slug: '',
  //   flavorText:
  //     'You have studied some magical theory and have learned a few spells associated with Strixhaven University.',
  //   source: src.strixhaven,
  //   prereqDescription: 'None',
  // },
  // {
  //   id: '79',
  //   name: 'Strixhaven Mascot',
  //   slug: '',
  //   flavorText:
  //     'You have learned how to summon a Strixhaven mascot to assist you.',
  //   source: src.strixhaven,
  //   prereqDescription: 'Strixhaven Initiate Feat, 4th Level',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Feat: '78',
  //       },
  //       {
  //         minLevel: 4,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '80',
  //   name: 'Bountiful Luck',
  //   slug: '',
  //   flavorText: 'Your people have extraordinary luck.',
  //   source: src.tasha,
  //   prereqDescription: 'Halfling',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Species: speciesIds.halfling,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '81',
  //   name: 'Dragon Fear',
  //   slug: '',
  //   flavorText: 'When angered, you radiate menace.',
  //   source: src.tasha,
  //   prereqDescription: 'Dragonborn',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Species: speciesIds.dragonborn,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '82',
  //   name: 'Dragon Hide',
  //   slug: '',
  //   flavorText:
  //     'You manifest scales and claws reminiscent of your draconic ancestors. ',
  //   source: src.tasha,
  //   prereqDescription: 'Dragonborn',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Species: speciesIds.dragonborn,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '83',
  //   name: 'Dwarven Fortitude',
  //   slug: '',
  //   flavorText:
  //     'You have the blood of dwarf heroes flowing through your veins.',
  //   source: src.tasha,
  //   prereqDescription: 'Dwarf',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Species: speciesIds.dwarf,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '84',
  //   name: 'Drow High Magic',
  //   slug: '',
  //   flavorText: 'You learn more of the magic typical of dark elves.',
  //   source: src.tasha,
  //   prereqDescription: 'Drow',
  //   // prerequisites: {
  //   //   protocol: 'AND',
  //   //   data: [
  //   //     {
  //   //       SubSpecies: subSpeciesIds.darkElf,
  //   //     },
  //   //   ],
  //   // },
  // },
  // {
  //   id: '85',
  //   name: 'Elven Accuracy',
  //   slug: '',
  //   flavorText:
  //     'You have uncanny aim with attacks that rely on precision rather than brute force.',
  //   source: src.tasha,
  //   prereqDescription: 'Elf or Half-Elf',
  //   prerequisites: {
  //     protocol: 'OR',
  //     data: [
  //       {
  //         Species: speciesIds.elf,
  //       },
  //       {
  //         Species: speciesIds.halfElf,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '86',
  //   name: 'Fade Away',
  //   slug: '',
  //   flavorText:
  //     'You have learned a magical trick for fading away when you suffer harm. ',
  //   source: src.tasha,
  //   prereqDescription: 'Gnome',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Species: speciesIds.gnome,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '87',
  //   name: 'Fey Teleportation',
  //   slug: '',
  //   flavorText:
  //     'You can momentarily stride through the Feywild to shorten your path from one place to another. ',
  //   source: src.tasha,
  //   prereqDescription: 'High Elf',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         SubSpecies: subSpeciesIds.highElf,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '88',
  //   name: 'Flames of Phlegethos',
  //   slug: '',
  //   flavorText: 'You learn to call on hellfire to serve your commands.',
  //   source: src.tasha,
  //   prereqDescription: 'Tiefling',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Species: speciesIds.tiefling,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '89',
  //   name: 'Infernal Constitution',
  //   slug: '',
  //   flavorText: 'Fiendish blood runs strong in you.',
  //   source: src.tasha,
  //   prereqDescription: 'Tiefling',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Species: speciesIds.tiefling,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '90',
  //   name: 'Orcish Fury',
  //   slug: '',
  //   flavorText: 'Your fury burns tirelessly.',
  //   source: src.tasha,
  //   prereqDescription: 'Half-Orc',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Species: speciesIds.halfOrc,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '91',
  //   name: 'Prodigy',
  //   slug: '',
  //   flavorText: 'You have a knack for learning new things.',
  //   source: src.tasha,
  //   prereqDescription: 'Half-Elf, Half-Orc, or Human',
  //   prerequisites: {
  //     protocol: 'OR',
  //     data: [
  //       {
  //         Species: speciesIds.halfElf,
  //       },
  //       {
  //         Species: speciesIds.halfOrc,
  //       },
  //       {
  //         Species: speciesIds.human,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '92',
  //   name: 'Revenant Blade',
  //   slug: '',
  //   flavorText:
  //     'You are descended from a master of the double-bladed scimitar.',
  //   source: src.tasha,
  //   prereqDescription: 'Elf',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Species: speciesIds.elf,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '93',
  //   name: 'Second Chance',
  //   slug: '',
  //   flavorText: 'Fortune favors you when someone tries to strike you.',
  //   source: src.tasha,
  //   prereqDescription: 'Halfling',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Species: speciesIds.halfling,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '94',
  //   name: 'Squat Nimbleness',
  //   slug: '',
  //   flavorText: 'You are uncommonly nimble for your race.',
  //   source: src.tasha,
  //   prereqDescription: 'Dwarf or a Small Race',
  //   prerequisites: {
  //     protocol: 'OR',
  //     data: [
  //       {
  //         Species: speciesIds.dwarf,
  //       },
  //       {
  //         Species: speciesIds.gnome,
  //       },
  //       {
  //         Species: speciesIds.halfling,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '95',
  //   name: 'Svirfneblin Magic',
  //   slug: '',
  //   flavorText:
  //     'You have inherited the innate spellcasting ability of your ancestors.',
  //   source: src.tasha,
  //   prereqDescription: 'Deep Gnome',
  //   // prerequisites: {
  //   //   protocol: 'AND',
  //   //   data: [
  //   //     {
  //   //       Species: speciesIds.deepGnomeMMOM,
  //   //     },
  //   //   ],
  //   // },
  // },
  // {
  //   id: '96',
  //   name: 'Wood Elf Magic',
  //   slug: '',
  //   flavorText: 'You learn the magic of the primeval woods.',
  //   source: src.tasha,
  //   prereqDescription: 'Wood Elf',
  //   // prerequisites: {
  //   //   protocol: 'AND',
  //   //   data: [
  //   //     {
  //   //       SubSpecies: subSpeciesIds.woodElf,
  //   //     },
  //   //   ],
  //   // },
  // },
  // {
  //   id: '97',
  //   name: 'Servo Crafting',
  //   slug: '',
  //   flavorText:
  //     'You are skilled in the creation of servos—tiny constructs that function as personal assistants.',
  //   source: src.kaladesh,
  //   prereqDescription: 'Intelligence 13 or higher',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         minAbilityScore: { ability: Ability.INT, value: 13 },
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '98',
  //   name: 'Quicksmithing',
  //   slug: '',
  //   flavorText:
  //     'You can use your talents to create immediate, short-term magical effects similar to spells.',
  //   source: src.kaladesh,
  //   prereqDescription: 'Intelligence 13 or higher',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         minAbilityScore: { ability: Ability.INT, value: 13 },
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '99',
  //   name: 'Initiate of High Sorcery',
  //   slug: '',
  //   flavorText:
  //     "You've received training from magic-users affiliated with the Mages of High Sorcery.",
  //   source: src.dragonQueen,
  //   prereqDescription:
  //     'Dragonlance Campaign, Sorcerer or Wizard Class or Mage of High Sorcery Background',
  //   // prerequisites: {
  //   //   protocol: 'OR',
  //   //   data: [
  //   //     {
  //   //       Class: classIds.sorcerer,
  //   //     },
  //   //     {
  //   //       Class: classIds.wizard,
  //   //     },
  //   //     {
  //   //       Background: backgroundIds.mageOfHighSorcery,
  //   //     },
  //   //   ],
  //   // },
  // },
  // {
  //   id: '100',
  //   name: 'Adept of the Black Robes',
  //   slug: '',
  //   flavorText:
  //     'You chose the moon Nuitari to influence your magic, and your ambition and loyalty to the Order of the Black Robes has been recognized.',
  //   source: src.dragonQueen,
  //   prereqDescription: 'Initiate of High Sorcery Feat, 4th Level',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Feat: '99',
  //       },
  //       {
  //         minLevel: 4,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '101',
  //   name: 'Adept of the Red Robes',
  //   slug: '',
  //   flavorText:
  //     'You chose the moon Lunitari to influence your magic, and your dedication to maintaining the balance between all things has been recognized by the Order of the Red Robes.',
  //   source: src.dragonQueen,
  //   prereqDescription: 'Initiate of High Sorcery Feat, 4th Level',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Feat: '99',
  //       },
  //       {
  //         minLevel: 4,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '102',
  //   name: 'Adept of the White Robes',
  //   slug: '',
  //   flavorText:
  //     'You chose the moon Solinari to influence your magic, and your oath to use magic to make the world a better place has been recognized by the Order of the White Robes.',
  //   source: src.dragonQueen,
  //   prereqDescription: 'Initiate of High Sorcery Feat, 4th Level',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Feat: '99',
  //       },
  //       {
  //         minLevel: 4,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '103',
  //   name: 'Divinely Favored',
  //   slug: '',
  //   flavorText: 'A god chose you to carry a spark of their power.',
  //   source: src.dragonQueen,
  //   prereqDescription: 'Dragonlance Campaign, 4th Level',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         minLevel: 4,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '104',
  //   name: 'Squire of Solamnia',
  //   slug: '',
  //   flavorText: 'You have trained in the ways of the Knights of Solamnia.',
  //   source: src.dragonQueen,
  //   prereqDescription:
  //     'Dragonlance Campaign, Fighter or Paladin Class or Knight of Solamnia Background',
  //   // prerequisites: {
  //   //   protocol: 'OR',
  //   //   data: [
  //   //     {
  //   //       Class: classIds.fighter,
  //   //     },
  //   //     {
  //   //       Class: classIds.paladin,
  //   //     },
  //   //     {
  //   //       Background: backgroundIds.knightOfSolamnia,
  //   //     },
  //   //   ],
  //   // },
  // },
  // {
  //   id: '105',
  //   name: 'Knight of the Crown',
  //   slug: '',
  //   flavorText:
  //     'You are a Knight of Solamnia aligned with the Order of the Crown, a group that extols the virtues of cooperation, loyalty, and obedience. You excel in group combat.',
  //   source: src.dragonQueen,
  //   prereqDescription: 'Squire of Solamnia Feat, 4th Level',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Feat: '104',
  //       },
  //       {
  //         minLevel: 4,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '106',
  //   name: 'Knight of the Rose',
  //   slug: '',
  //   flavorText:
  //     'You are a Knight of Solamnia aligned with the Order of the Rose, a group known for leadership, justice, and wisdom.',
  //   source: src.dragonQueen,
  //   prereqDescription: 'Squire of Solamnia Feat, 4th Level',
  //   prerequisites: {
  //     protocol: 'AND',
  //     data: [
  //       {
  //         Feat: '104',
  //       },
  //       {
  //         minLevel: 4,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: '107',
  //   name: 'Knight of the Sword',
  //   slug: '',
  //   flavorText:
  //     'You are a Knight of Solamnia aligned with the Order of the Sword, a group devoted to heroism and courage. Bravery steels your spirit.',
  //   source: src.dragonQueen,
  //   prereqDescription: 'Squire of Solamnia Feat, 4th Level',
  // },
  // {
  //   id: '108',
  //   name: 'Vampiric Exultation',
  //   slug: '',
  //   flavorText:
  //     'You can transform the lower half of your body into an inky black vapor',
  //   prereqDescription: 'Vampire',
  //   source: src.ixalan,
  //   // prerequisites: {
  //   //   protocol: 'AND',
  //   //   data: [
  //   //     {
  //   //       Species: speciesIds.vampireIxalan,
  //   //     },
  //   //   ],
  //   // },
  // },
];
export const FeatIds = {
  aberrantDragonmark: '1',
  actor: '2',
  alert: '3',
  artificerInitiate: '4',
  athlete: '5',
  cartomancer: '6',
  charger: '7',
  chef: '8',
  crossbowExpert: '9',
  crusher: '10',
  defensiveDuelist: '11',
  dualWielder: '12',
  dungeonDelver: '13',
  durable: '14',
  eldritchAdept: '15',
  elementalAdept: '16',
  feyTouched: '17',
  fightingInitiate: '18',
  giftOfTheChromaticDragon: '19',
  giftOfTheGemDragon: '20',
  giftOfTheMetallicDragon: '21',
  grappler: '22',
  greatWeaponMaster: '23',
  gunner: '24',
  healer: '25',
  heavilyArmored: '26',
  heavyArmorMaster: '27',
  inspiringLeader: '28',
  keenMind: '29',
  lightlyArmored: '30',
  linguist: '31',
  lucky: '32',
  mageSlayer: '33',
  magicInitiate: '34',
  martialAdept: '35',
  mediumArmorMaster: '36',
  metaMagicAdept: '37',
  mobile: '38',
  moderatelyArmored: '39',
  mountedCombatant: '40',
  observant: '41',
  piercer: '42',
  poisoner: '43',
  polearmMaster: '44',
  resilient: '45',
  ritualCaster: '46',
  runeShaper: '47',
  savageAttacker: '48',
  sentinel: '49',
  shadowTouched: '50',
  sharpshooter: '51',
  shieldMaster: '52',
  skillExpert: '53',
  skilled: '54',
  skulker: '55',
  slasher: '56',
  spellSniper: '57',
  strikeOfTheGiants: '58',
  emberOfTheFireGiant: '59',
  furyOfTheFrostGiant: '60',
  guileOfTheCloudGiant: '61',
  keennessOfTheStoneGiant: '62',
  soulOfTheStormGiant: '63',
  tavernBrawler: '64',
  telekinetic: '65',
  telepathic: '66',
  tough: '67',
  vigorOfTheHillGiant: '68',
  warCaster: '69',
  weaponMaster: '70',
  scionOfTheOuterPlanes: '71',
  agentOfOrder: '72',
  balefulScion: '73',
  cohortOfChaos: '74',
  outlandsEnvoy: '75',
  planarWanderer: '76',
  righteousHeritor: '77',
  strixhavenInitiate: '78',
  strixhavenMascot: '79',
  bountifulLuck: '80',
  dragonFear: '81',
  dragonHide: '82',
  dwarvenFortitude: '83',
  drowHighMagic: '84',
  elvenAccuracy: '85',
  fadeAway: '86',
  feyTeleportation: '87',
  flamesOfPhlegethos: '88',
  infernalConstitution: '89',
  orcishFury: '90',
  prodigy: '91',
  revenantBlade: '92',
  secondChance: '93',
  squatNimbleness: '94',
  svirfneblinMagic: '95',
  woodElfMagic: '96',
  servoCrafting: '97',
  quicksmithing: '98',
  initiateOfHighSorcery: '99',
  adeptOfTheBlackRobes: '100',
  adeptOfTheRedRobes: '101',
  adeptOfTheWhiteRobes: '102',
  divinelyFavored: '103',
  squireOfSolamnia: '104',
  knightOfTheCrown: '105',
  knightOfTheRose: '106',
  knightOfTheSword: '107',
  vampiricExultation: '108',
};

export default FeatSeed;
