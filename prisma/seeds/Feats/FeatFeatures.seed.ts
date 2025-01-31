import { Prisma } from '@prisma/client';
import { FeatIds } from './Feats.seed';

export const FeatFeatureIds = {
  mobile: 'mobile',
  resilient: 'resilient',
  skillExpert: 'skillExpert',
  speedingRage: 'speedingRage',
};

const FeatFeaturesSeed: Prisma.FeatureCreateManyInput[] = [
  // {
  //   featId: FeatIds.aberrantDragonmark,
  //   name: 'Aberrant Dragonmark',
  //   description: 'You have manifested an aberrant dragonmark.',
  //   options: [
  //     'Increase your Constitution score by 1, to a maximum of 20.',
  //     'You learn a cantrip of your choice from the sorcerer spell list. In addition, choose a 1st-level spell from the sorcerer spell list. You learn that spell and can cast it through your mark. Once you cast it, you must finish a short or long rest before you can cast it again through the mark. Constitution is your spellcasting ability for these spells.',
  //     'When you cast the 1st-level spell through your mark, you can expend one of your Hit Dice and roll it. If you roll an even number, you gain a number of temporary hit points equal to the number rolled. If you roll an odd number, one random creature within 30 feet of you (not including you) takes force damage equal to the number rolled. If no other creatures are in range, you take the damage.',
  //   ],
  // },
  // {
  //   featId: FeatIds.aberrantDragonmark,
  //   name: 'Dragonmark Flaw and Appearance',
  //   description:
  //     'You have manifested an aberrant dragonmark. Determine the appearance of the mark and the flaw associated with it.',
  //   extendedTable: [
  //     {
  //       'Aberrant Dragonmark Flaws': {
  //         headers: ['d8', 'Flaw'],
  //         data: [
  //           {
  //             d8: '1',
  //             Flaw: 'Your mark is a source of constant physical pain.',
  //           },
  //           {
  //             d8: '2',
  //             Flaw: 'Your mark whispers to you. Its meaning can be unclear.',
  //           },
  //           {
  //             d8: '3',
  //             Flaw: "When you're stressed, the mark hisses audibly.",
  //           },
  //           {
  //             d8: '4',
  //             Flaw: 'The skin around the mark is burned, scaly, or withered.',
  //           },
  //           {
  //             d8: '5',
  //             Flaw: 'Animals are uneasy around you.',
  //           },
  //           {
  //             d8: '6',
  //             Flaw: 'You have a mood swing any time you use your mark.',
  //           },
  //           {
  //             d8: '7',
  //             Flaw: 'Your looks change slightly whenever you use the mark.',
  //           },
  //           {
  //             d8: '8',
  //             Flaw: 'You have horrific nightmares after you use your mark.',
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   featId: FeatIds.aberrantDragonmark,
  //   name: '(Optional) Greater Aberrant Powers',
  //   description:
  //     "At the DM's option, a character who has the Aberrant Dragonmark feat has a chance of manifesting greater power. Upon reaching 10th level, such a character has a 10 percent chance of gaining an epic boon from among the options in chapter 7 of the Dungeon Master's Guide. If the character fails to gain a boon, they have a 10 percent chance the next time they gain a level.\n\nIf the character gains a boon, the DM chooses it or determines it randomly. The character also permanently loses one of their Hit Dice, and their hit point maximum is reduced by an amount equal to a roll of that die plus their Constitution modifier (minimum reduction of 1). This reduction can't be reversed by any means.",
  // },
  // {
  //   featId: FeatIds.actor,
  //   name: 'Actor',
  //   description:
  //     'Skilled at mimicry and dramatics, you gain the following benefits:',
  //   options: [
  //     'Increase your Charisma score by 1, to a maximum of 20.',
  //     'You have advantage on Charisma (Deception) and Charisma (Performance) checks when trying to pass yourself off as a different person.',
  //     'You can mimic the speech of another person or the sounds made by other creatures. You must have heard the person speaking or heard the creature make the sound for at least 1 minute. A successful Wisdom (Insight) check contested by your Charisma (Deception) check allows a listener to determine that the effect is faked.',
  //   ],
  // },
  // {
  //   featId: FeatIds.alert,
  //   name: 'Alert',
  //   description:
  //     'Always on the lookout for danger, you gain the following benefits:',
  //   options: [
  //     'You gain a +5 bonus to initiative.',
  //     "You can't be surprised while you are conscious.",
  //     "Other creatures don't gain advantage on attack rolls against you as a result of being hidden from you.",
  //   ],
  // },
  // {
  //   featId: FeatIds.artificerInitiate,
  //   name: 'Artificer Initiate',
  //   description:
  //     "You have learned some of an artificer's inventiveness. You gain the following benefits:",
  //   options: [
  //     'You learn one cantrip of your choice from the Artificer spell list, and you learn one 1st-level spell of your choice from that list. Intelligence is your spellcasting ability for these spells.',
  //     "You can cast this feat's 1st-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have.",
  //     "You gain proficiency with one type of artisan's tools of your choice, and you can use that type of tool as a spellcasting focus for any spell you cast that uses Intelligence as its spellcasting ability.",
  //   ],
  // },
  // {
  //   featId: FeatIds.athlete,
  //   name: 'Athlete',
  //   description:
  //     'You have undergone extensive physical training to gain the following benefits:',
  //   options: [
  //     'Increase your Strength or Dexterity score by 1, to a maximum of 20.',
  //     'When you are prone, standing up uses only 5 feet of your movement.',
  //     "Climbing doesn't cost you extra movement.",
  //     'You can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet.',
  //   ],
  // },
  // {
  //   featId: FeatIds.cartomancer,
  //   name: 'Cartomancer',
  //   description:
  //     'You have learned to channel your magic through a deck of cards. You can use a card deck as your spellcasting focus, and you gain the following benefits:',
  //   extendedTable: [
  //     {
  //       '': {
  //         headers: ['Benefit', 'Description'],
  //         data: [
  //           {
  //             Benefit: 'Card Tricks',
  //             Description: `You learn the %${spellIds.prestidigitation}{Prestidigitation}% cantrip and can use it to create illusions that duplicate the effects of stage magic. When you use %${spellIds.prestidigitation}{Prestidigitation}% in this way, you can conceal the verbal and somatic components of the spell as ordinary conversation and card handling.`,
  //           },
  //           {
  //             Benefit: 'Hidden Ace',
  //             Description:
  //               'When you finish a long rest, you can choose one spell from your class’s spell list and imbue that spell into a card. The chosen spell must have a casting time of 1 action, and it must be a level for which you have spell slots. The card remains imbued with this spell for 8 hours. While the card is imbued with the spell, you can use a bonus action to flourish the card and cast the spell within. The card then immediately loses its magic.',
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   featId: FeatIds.charger,
  //   name: 'Charger',
  //   description:
  //     'When you use your action to Dash, you can use a bonus action to make one melee weapon attack or to shove a creature. If you move at least 10 feet in a straight line immediately before taking this bonus action, you either gain a +5 bonus to the attack’s damage roll (if you chose to make a melee attack and hit) or push the target up to 10 feet away from you (if you chose to shove and you succeed).',
  // },
  // {
  //   featId: FeatIds.chef,
  //   name: 'Chef',
  //   description:
  //     'Time and effort spent mastering the culinary arts has paid off. You gain the following benefits:',
  //   options: [
  //     'Increase your Constitution or Wisdom score by 1, to a maximum of 20.',
  //     'You gain proficiency with cook’s utensils if you don’t already have it.',
  //     "As part of a short rest, you can cook special food, provided you have ingredients and cook's utensils on hand. You can prepare enough of this food for a number of creatures equal to 4 + your proficiency bonus. At the end of the short rest, any creature who eats the food and spends one or more Hit Dice to regain hit points regains an extra 1d8 hit points.",
  //     'With one hour of work or when you finish a long rest, you can cook a number of treats equal to your proficiency bonus. These special treats last 8 hours after being made. A creature can use a bonus action to eat one of those treats to gain temporary hit points equal to your proficiency bonus.',
  //   ],
  // },
  // {
  //   featId: FeatIds.crossbowExpert,
  //   name: 'Crossbow Expert',
  //   description:
  //     'Thanks to extensive practice with the crossbow, you gain the following benefits:',
  //   options: [
  //     'You ignore the loading property of crossbows with which you are proficient.',
  //     "Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.",
  //     'When you use the Attack action and attack with a one-handed weapon, you can use a bonus action to attack with a hand crossbow you are holding.',
  //   ],
  // },
  // {
  //   featId: FeatIds.crusher,
  //   name: 'Crusher',
  //   description:
  //     'You are practiced in the art of crushing your enemies, granting you the following benefits:',
  //   options: [
  //     'Increase your Strength or Constitution score by 1, to a maximum of 20.',
  //     'Once per turn, when you hit a creature with an attack that deals bludgeoning damage, you can move it 5 feet to an unoccupied space, provided the target is no more than one size larger than you.',
  //     'When you score a critical hit that deals bludgeoning damage to a creature, attack rolls against that creature are made with advantage until the start of your next turn.',
  //   ],
  // },
  // {
  //   featId: FeatIds.defensiveDuelist,
  //   name: 'Defensive Duelist',
  //   description:
  //     'When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you.',
  // },
  // {
  //   featId: FeatIds.dualWielder,
  //   name: 'Dual Wielder',
  //   description:
  //     'You master fighting with two weapons, gaining the following benefits:',
  //   options: [
  //     'You gain a +1 bonus to AC while you are wielding a separate melee weapon in each hand.',
  //     'You can use two-weapon fighting even when the one-handed melee weapons you are wielding aren’t light.',
  //     'You can draw or stow two one-handed weapons when you would normally be able to draw or stow only one.',
  //   ],
  // },
  // {
  //   featId: FeatIds.dungeonDelver,
  //   name: 'Dungeon Delver',
  //   description:
  //     'Alert to the hidden traps and secret doors found in many dungeons, you gain the following benefits:',
  //   options: [
  //     'You have advantage on Wisdom (Perception) and Intelligence (Investigation) checks made to detect the presence of secret doors.',
  //     'You have advantage on saving throws made to avoid or resist traps.',
  //     'You have resistance to the damage dealt by traps.',
  //     "Travelling at a fast pace doesn't impose the normal -5 penalty on your passive Wisdom (Perception) score.",
  //   ],
  // },
  // {
  //   featId: FeatIds.durable,
  //   name: 'Durable',
  //   description: 'Hardy and resilient, you gain the following benefits:',
  //   options: [
  //     'Increase your Constitution score by 1, to a maximum of 20.',
  //     'When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2).',
  //   ],
  // },
  // {
  //   featId: FeatIds.eldritchAdept,
  //   name: 'Eldritch Adept',
  //   description:
  //     "Studying occult lore, you have unlocked eldritch power within yourself: you learn one eldritch invocation option of your choice from the warlock class. If the invocation has a prerequisite, you can choose that invocation only if you're a warlock and only if you meet the prerequisite.\n\nWhenever you gain a level, you can replace the invocation with another one from the warlock class.",
  // },
  // {
  //   featId: FeatIds.elementalAdept,
  //   name: 'Elemental Adept',
  //   description:
  //     'When you gain this feat, choose one of the following damage types: acid, cold, fire, lightning, or thunder.\n\nSpells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2.\n\nYou can select this feat multiple times. Each time you do so, you must choose a different damage type.',
  // },
  // {
  //   featId: FeatIds.feyTouched,
  //   name: 'Fey Touched',
  //   description:
  //     "Your exposure to the Feywild's magic has changed you, granting you the following benefits:",
  //   options: [
  //     'Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.',
  //     `You learn the %${spellIds.mistyStep}{Misty Step}% spell and one 1st-level spell of your choice. The 1st-level spell must be from the Divination or Enchantment school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.`,
  //   ],
  // },
  // {
  //   featId: FeatIds.fightingInitiate,
  //   name: 'Fighting Initiate',
  //   description:
  //     "Your martial training has helped you develop a particular style of fighting. As a result, you learn one Fighting Style option of your choice from the fighter class. If you already have a style, the one you choose must be different.\n\nWhenever you reach a level that grants the Ability Score Improvement feature, you can replace this feat's fighting style with another one from the fighter class that you don't have.",
  // },
  // {
  //   featId: FeatIds.giftOfTheChromaticDragon,
  //   name: 'Gift of the Chromatic Dragon',
  //   description:
  //     'You’ve manifested some of the power of chromatic dragons, granting you the following benefits:',
  //   extendedTable: [
  //     {
  //       '': {
  //         headers: ['Benefit', 'Description'],
  //         data: [
  //           {
  //             Benefit: 'Chromatic Infusion',
  //             Description: `As a bonus action, you can touch a simple or martial weapon and infuse it with one of the following damage types: acid, cold, fire, lightning, or poison. For the next minute, the weapon deals an extra 1d4 damage of the chosen type when it hits. After you use this bonus action, you can’t do so again until you finish a long rest.`,
  //           },
  //           {
  //             Benefit: 'Reactive Resistance',
  //             Description: `When you take acid, cold, fire, lightning, or poison damage, you can use your reaction to give yourself resistance to that instance of damage. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   featId: FeatIds.giftOfTheGemDragon,
  //   name: 'Gift of the Gem Dragon',
  //   description:
  //     'You’ve manifested some of the power of gem dragons, granting you the following benefits:',
  //   extendedTable: [
  //     {
  //       '': {
  //         headers: ['Benefit', 'Description'],
  //         data: [
  //           {
  //             Benefit: 'Ability Score Increase',
  //             Description: `Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.`,
  //           },
  //           {
  //             Benefit: 'Telekinetic Reprisal',
  //             Description: `When you take damage from a creature that is within 10 feet of you, you can use your reaction to emanate telekinetic energy. The creature that dealt damage to you must make a Strength saving throw (DC equals 8 + your proficiency bonus + the ability modifier of the score increased by this feat). On a failed save, the creature takes 2d8 force damage and is pushed up to 10 feet away from you. On a successful save, the creature takes half as much damage and isn’t pushed. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   featId: FeatIds.giftOfTheMetallicDragon,
  //   name: 'Gift of the Metallic Dragon',
  //   description:
  //     'You’ve manifested some of the power of metallic dragons, granting you the following benefits:',
  //   extendedTable: [
  //     {
  //       '': {
  //         headers: ['Benefit', 'Description'],
  //         data: [
  //           {
  //             Benefit: 'Draconic Healing',
  //             Description: `You learn the %${spellIds.cureWounds}{Cure Wounds}% spell. You can cast this spell without expending a spell slot. Once you cast this spell in this way, you can’t do so again until you finish a long rest. You can also cast this spell using spell slots you have. The spell’s spellcasting ability is Intelligence, Wisdom, or Charisma when you cast it with this feat (choose when you gain the feat).`,
  //           },
  //           {
  //             Benefit: 'Protective Wings',
  //             Description: `You can manifest protective wings that can shield you or others. When you or another creature you can see within 5 feet of you is hit by an attack roll, you can use your reaction to manifest spectral wings from your back for a moment. You grant a bonus to the target’s AC equal to your proficiency bonus against that attack roll, potentially causing it to miss. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   featId: FeatIds.grappler,
  //   name: 'Grappler',
  //   description:
  //     'You’ve developed the skills necessary to hold your own in close-quarters grappling. You gain the following benefits:',
  //   options: [
  //     'You have advantage on attack rolls against a creature you are grappling.',
  //     'You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both restrained until the grapple ends.',
  //   ],
  // },
  // {
  //   featId: FeatIds.greatWeaponMaster,
  //   name: 'Great Weapon Master',
  //   description:
  //     "You've learned to put the weight of a weapon to your advantage, letting its momentum empower your strikes. You gain the following benefits:",
  //   options: [
  //     'On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action.',
  //     'Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack’s damage.',
  //   ],
  // },
  // {
  //   featId: FeatIds.gunner,
  //   name: 'Gunner',
  //   description:
  //     'You have a quick hand and keen eye when employing firearms, granting you the following benefits:',
  //   options: [
  //     'Increase your Dexterity score by 1, to a maximum of 20.',
  //     'You gain proficiency with firearms.',
  //     'You ignore the loading property of firearms.',
  //     "Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.",
  //   ],
  // },
  // {
  //   featId: FeatIds.healer,
  //   name: 'Healer',
  //   description:
  //     'You are an able physician, allowing you to mend wounds quickly and get your allies back in the fight. You gain the following benefits:',
  //   options: [
  //     "When you use a healer's kit to stabilize a dying creature, that creature also regains 1 hit point.",
  //     "As an action. you can spend one use of a healer's kit to tend to a creature and restore 1d6 + 4 hit points to it, plus additional hit points equal to the creature's maximum number of Hit Dice. The creature can't regain hit points from this feat again until it finishes a short or long rest.",
  //   ],
  // },
  // {
  //   featId: FeatIds.heavilyArmored,
  //   name: 'Heavily Armored',
  //   description:
  //     'You have trained to master the use of heavy armor, gaining the following benefits:',
  //   options: [
  //     'Increase your Strength score by 1, to a maximum of 20.',
  //     'You gain proficiency with heavy armor.',
  //   ],
  // },
  // {
  //   featId: FeatIds.heavyArmorMaster,
  //   name: 'Heavy Armor Master',
  //   description:
  //     'You can use your armor to deflect strikes that would kill others. You gain the following benefits:',
  //   options: [
  //     'Increase your Strength score by 1, to a maximum of 20.',
  //     'While you are wearing heavy armor, bludgeoning, piercing, and slashing damage that you take from nonmagical weapons is reduced by 3.',
  //   ],
  // },
  // {
  //   featId: FeatIds.inspiringLeader,
  //   name: 'Inspiring Leader',
  //   description:
  //     "You can spend 10 minutes inspiring your companions, shoring up their resolve to fight. When you do so, choose up to six friendly creatures (which can include yourself) within 30 feet of you who can see or hear you and who can understand you. Each creature can gain temporary hit points equal to your level + your Charisma modifier. A creature can't gain temporary hit points from this feat again until it has finished a short or long rest.",
  // },
  // {
  //   featId: FeatIds.keenMind,
  //   name: 'Keen Mind',
  //   description:
  //     'You have a mind that can track time, direction, and detail with uncanny precision. You gain the following benefits:',
  //   options: [
  //     'Increase your Intelligence score by 1, to a maximum of 20.',
  //     'You always know which way is north.',
  //     'You always know the number of hours left before the next sunrise or sunset.',
  //     'You can accurately recall anything you have seen or heard within the past month.',
  //   ],
  // },
  // {
  //   featId: FeatIds.lightlyArmored,
  //   name: 'Lightly Armored',
  //   description:
  //     'You have trained to master the use of light armor, gaining the following benefits:',
  //   options: [
  //     'Increase your Strength or Dexterity score by 1, to a maximum of 20.',
  //     'You gain proficiency with light armor.',
  //   ],
  // },
  // {
  //   featId: FeatIds.linguist,
  //   name: 'Linguist',
  //   description:
  //     'You have studied languages and codes, gaining the following benefits:',
  //   options: [
  //     'Increase your Intelligence score by 1, to a maximum of 20.',
  //     'You learn three languages of your choice.',
  //     "You can ably create written ciphers. Others can't decipher a code you create unless you teach them, they succeed on an Intelligence check (DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it.",
  //   ],
  // },
  // {
  //   featId: FeatIds.lucky,
  //   name: 'Lucky',
  //   description:
  //     "You have inexplicable luck that seems to kick in at just the right moment.\n\n You have 3 luck points. Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional d20. You can choose to spend one of your luck points after you roll the die, but before the outcome is determined. You choose which of the d20s is used for the attack roll, ability check, or saving throw.\n\nYou can also spend one luck point when an attack roll is made against you. Roll a d20, and then choose whether the attack uses the attacker's roll or yours.\n\nIf more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out; no additional dice are rolled.\n\nYou regain your expended luck points when you finish a long rest.",
  // },
  // {
  //   featId: FeatIds.mageSlayer,
  //   name: 'Mage Slayer',
  //   description:
  //     'You have practiced techniques useful in melee combat against spellcasters, gaining the following benefits:',
  //   options: [
  //     'When a creature within 5 feet of you casts a spell, you can use your reaction to make a melee weapon attack against that creature.',
  //     'When you damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw it makes to maintain its concentration.',
  //     'You have advantage on saving throws against spells cast by creatures within 5 feet of you.',
  //   ],
  // },
  // {
  //   featId: FeatIds.magicInitiate,
  //   name: 'Magic Initiate',
  //   description:
  //     "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. You learn two cantrips of your choice from that class's spell list.\n\nIn addition, choose one 1st-level spell from that same list. You learn that spell and can cast it at its lowest level. Once you cast it, you must finish a long rest before you can cast it again using this feat.\n\nYour spellcasting ability for these spells depends on the class you chose: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard.",
  // },
  // {
  //   featId: FeatIds.martialAdept,
  //   name: 'Martial Adept',
  //   description:
  //     'You have martial training that allows you to perform special combat maneuvers. You gain the following benefits:',
  //   options: [
  //     "You learn two maneuvers of your choice from among those available to the Battle Master archetype in the fighter class. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).",
  //     'You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest.',
  //   ],
  // },
  // {
  //   featId: FeatIds.mediumArmorMaster,
  //   name: 'Medium Armor Master',
  //   description:
  //     'You have practiced moving in medium armor to gain the following benefits:',
  //   options: [
  //     "Wearing medium armor doesn't impose disadvantage on your Dexterity (Stealth) checks.",
  //     'When you wear medium armor, you can add 3, rather than 2, to your AC if you have a Dexterity of 16 or higher.',
  //   ],
  // },
  // {
  //   featId: FeatIds.metaMagicAdept,
  //   name: 'Metamagic Adept',
  //   description:
  //     "You've learned how to exert your will on your spells to alter how they function:",
  //   options: [
  //     'You learn two Metamagic options of your choice from the sorcerer class. You can use only one Metamagic option on a spell when you cast it, unless the option says otherwise. Whenever you reach a level that grants the Ability Score Improvement feature, you can replace one of these Metamagic options with another one from the sorcerer class.',
  //     'You gain 2 sorcery points to spend on Metamagic (these points are added to any sorcery points you have from another source but can be used only on Metamagic). You regain all spent sorcery points when you finish a long rest.',
  //   ],
  // },
  {
    id: FeatFeatureIds.mobile,
    featId: FeatIds.mobile,
    name: 'Mobile',
    description:
      'You are exceptionally speedy and agile. You gain the following benefits:',
    options: [
      'Your speed increases by 10 feet.',
      "When you use the Dash action, difficult terrain doesn't cost you extra movement on that turn.",
      "When you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not.",
    ],
    unimplemented: false,
  },
  // {
  //   featId: FeatIds.moderatelyArmored,
  //   name: 'Moderately Armored',
  //   description:
  //     'You have trained to master the use of medium armor and shields, gaining the following benefits:',
  //   options: [
  //     'Increase your Strength or Dexterity score by 1, to a maximum of 20.',
  //     'You gain proficiency with medium armor and shields.',
  //   ],
  // },
  // {
  //   featId: FeatIds.mountedCombatant,
  //   name: 'Mounted Combatant',
  //   description:
  //     "You are a dangerous foe to face while mounted. While you are mounted and aren't incapacitated, you gain the following benefits:",
  //   options: [
  //     'You have advantage on melee attack rolls against any unmounted creature that is smaller than your mount.',
  //     'You can force an attack targeted at your mount to target you instead.',
  //     'If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.',
  //   ],
  // },
  // {
  //   featId: FeatIds.observant,
  //   name: 'Observant',
  //   description:
  //     'Quick to notice details of your environment, you gain the following benefits:',
  //   options: [
  //     'Increase your Intelligence or Wisdom score by 1, to a maximum of 20.',
  //     "If you can see a creature's mouth while it is speaking a language you understand, you can interpret what it's saying by reading its lips.",
  //     'You have a +5 bonus to your passive Wisdom (Perception) and passive Intelligence (Investigation) scores.',
  //   ],
  // },
  // {
  //   featId: FeatIds.piercer,
  //   name: 'Piercer',
  //   description:
  //     'You have achieved a penetrating precision in combat, granting you the following benefits:',
  //   options: [
  //     'Increase your Strength or Dexterity score by 1, to a maximum of 20.',
  //     "Once per turn, when you hit a creature with an attack that deals piercing damage, you can reroll one of the attack's damage dice, and you must use the new roll.",
  //     'When you score a critical hit that deals piercing damage to a creature, you can roll one additional damage die when determining the extra piercing damage the target takes.',
  //   ],
  // },
  // {
  //   featId: FeatIds.poisoner,
  //   name: 'Poisoner',
  //   description:
  //     'You can prepare and deliver deadly poisons, gaining the following benefits:',
  //   options: [
  //     'When you make a damage roll, you ignore resistance to poison damage.',
  //     "You gain proficiency with the poisoner's kit if you don't already have it. With one hour of work using a poisoner's kit and expending 50 gp worth of materials, you can create a number of doses of potent poison equal to your proficiency bonus. Once applied to a weapon or piece of ammunition, the poison retains its potency for 1 minute or until you hit with the weapon or ammunition. When a creature takes damage from the coated weapon or ammunition, that creature must succeed on a DC 14 Constitution saving throw or take 2d8 poison damage and become poisoned until the end of your next turn.",
  //   ],
  // },
  // {
  //   featId: FeatIds.polearmMaster,
  //   name: 'Polearm Master',
  //   description:
  //     'You can keep your enemies at bay with reach weapons. You gain the following benefits:',
  //   options: [
  //     "When you take the Attack action and attack with only a glaive, halberd, quarterstaff, or spear, you can use a bonus action to make a melee attack with the opposite end of the weapon. The weapon's damage die for this attack is a d4, and the attack deals bludgeoning damage.",
  //     'While you are wielding a glaive, halberd, pike, or quarterstaff, other creatures provoke an opportunity attack from you when they enter your reach.',
  //   ],
  // },
  {
    id: FeatFeatureIds.resilient,
    featId: FeatIds.resilient,
    name: 'Resilient',
    description: 'Choose one ability score. You gain the following benefits:',
    options: [
      'Increase the chosen ability score by 1, to a maximum of 20.',
      'You gain proficiency in saving throws using the chosen ability.',
    ],
    unimplemented: true,
  },
  // {
  //   featId: FeatIds.ritualCaster,
  //   name: 'Ritual Caster',
  //   description:
  //     "You have learned a number of spells that you can cast as rituals. These spells are written in a ritual book, which you must have in hand while casting one of them.\n\nWhen you choose this feat, you acquire a ritual book holding two 1st-level spells of your choice. Choose one of the following classes: bard, cleric, druid, sorcerer, warlock, or wizard. You must choose your spells from that class's spell list, and the spells you choose must have the ritual tag. The class you choose also must have the ritual tag. The class you choose also determines your spellcasting ability for these spells: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard.\n\nIf you come across a spell in written form, such as a magical spell scroll or a wizard's spellbook, you might be able to add it to your ritual book. The spell must be on the spell list for the class you chose, the spell's level can be no higher than half your level (rounded up), and it must have the ritual tag. The process of copying the spell into your ritual book takes 2 hours per level of the spell, and costs 50 gp per level. The cost represents the material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it.",
  // },
  // {
  //   featId: FeatIds.runeShaper,
  //   name: 'Comprehend Languages',
  //   description:
  //     'You learn the comprehend languages spell. You can cast this spell without expending a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using any spell slots you have.',
  // },
  // {
  //   featId: FeatIds.runeShaper,
  //   name: 'Rune Magic',
  //   description:
  //     'You know a number of runes equal to half your proficiency bonus (rounded down), chosen from the Rune Spells table. Whenever you finish a long rest, you can inscribe each rune you know onto one nonmagical weapon, armor, piece of clothing, or other object you touch. You temporarily learn the 1st-level spells that correspond to the runes you inscribed, as specified on the Rune Spells table, and you know those spells until you finish a long rest, when the runes fade. While you are wearing or carrying any rune-marked object, you can cast the spells associated with those runes using any spell slots you have.\n\nYou can also invoke a rune inscribed on an object you are wearing or carrying and cast its associated spell without expending a spell slot or using material components. Once you cast the spell in this way, you can’t do so again until you finish a long rest. Your spellcasting ability for this feat is Intelligence, Wisdom, or Charisma (choose when you select this feat).\n\nEach time you gain a level, you can replace one of the runes you know with another one from the Rune Spells table.',
  //   extendedTable: [
  //     {
  //       'Rune Spells': {
  //         headers: ['Rune', 'Spell'],
  //         data: [
  //           {
  //             Rune: 'Cloud',
  //             Spell: `%${spellIds.fogCloud}{Fog Cloud}%`,
  //           },
  //           {
  //             Rune: 'Death',
  //             Spell: `%${spellIds.inflictWounds}{Inflict Wounds}%`,
  //           },
  //           {
  //             Rune: 'Dragon',
  //             Spell: `%${spellIds.chromaticOrb}{Chromatic Orb}%`,
  //           },
  //           {
  //             Rune: 'Enemy',
  //             Spell: `%${spellIds.disguiseSelf}{Disguise Self}%`,
  //           },
  //           {
  //             Rune: 'Fire',
  //             Spell: `%${spellIds.burningHands}{Burning Hands}%`,
  //           },
  //           {
  //             Rune: 'Friend',
  //             Spell: `%${spellIds.speakWithAnimals}{Speak with animals}%`,
  //           },
  //           {
  //             Rune: 'Frost',
  //             Spell: `%${spellIds.armorOfAgathys}{Armor of Agathys}%`,
  //           },
  //           {
  //             Rune: 'Hill',
  //             Spell: `%${spellIds.goodberry}{Goodberry}%`,
  //           },
  //           {
  //             Rune: 'Journey',
  //             Spell: `%${spellIds.longstrider}{Longstrider}%`,
  //           },
  //           {
  //             Rune: 'King',
  //             Spell: `%${spellIds.command}{Command}%`,
  //           },
  //           {
  //             Rune: 'Mountain',
  //             Spell: `%${spellIds.entangle}{Entangle}%`,
  //           },
  //           {
  //             Rune: 'Stone',
  //             Spell: `%${spellIds.sanctuary}{Sanctuary}%`,
  //           },
  //           {
  //             Rune: 'Storm',
  //             Spell: `%${spellIds.thunderwave}{Thunderwave}%`,
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   featId: FeatIds.savageAttacker,
  //   name: 'Savage Attacker',
  //   description:
  //     "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon's damage dice and use either total.",
  // },
  // {
  //   featId: FeatIds.sentinel,
  //   name: 'Sentinel',
  //   description:
  //     "You have mastered techniques to take advantage of every drop in any enemy's guard, gaining the following benefits:",
  //   options: [
  //     "When you hit a creature with an opportunity attack, the creature's speed becomes 0 for the rest of the turn.",
  //     'Creatures provoke opportunity attacks from you even if they take the Disengage action before leaving your reach.',
  //     "When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn't have this feat), you can use your reaction to make a melee weapon attack against the attacking creature.",
  //   ],
  // },
  // {
  //   featId: FeatIds.shadowTouched,
  //   name: 'Shadow Touched',
  //   description:
  //     "Your exposure to the Shadowfell's magic has changed you, granting you the following benefits:",
  //   options: [
  //     'Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.',
  //     `You learn the %${spellIds.invisibility}{Invisibility}% spell and one 1st-level spell of your choice. The 1st-level spell must be from the Illusion or Necromancy school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.`,
  //   ],
  // },
  // {
  //   featId: FeatIds.sharpshooter,
  //   name: 'Sharpshooter',
  //   description:
  //     'You have mastered ranged weapons and can make shots that others find impossible. You gain the following benefits:',
  //   options: [
  //     "Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls.",
  //     'Your ranged weapon attacks ignore half cover and three-quarters cover.',
  //     "Before you make an attack with a ranged weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage.",
  //   ],
  // },
  // {
  //   featId: FeatIds.shieldMaster,
  //   name: 'Shield Master',
  //   description:
  //     'You use shields not just for protection but also for offense. You gain the following benefits:',
  //   options: [
  //     'If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your shield.',
  //     "If you aren't incapacitated, you can add your shield's AC bonus to any Dexterity saving throw you make against a spell or other harmful effect that targets only you.",
  //     'If you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can use your reaction to take no damage if you succeed on the saving throw, interposing your shield between yourself and the source of the effect.',
  //   ],
  // },
  {
    id: FeatFeatureIds.skillExpert,
    featId: FeatIds.skillExpert,
    name: 'Skill Expert',
    description:
      'You have honed your proficiency with particular skills, gaining the following benefits:',
    options: [
      'Increase one ability score of your choice by 1, to a maximum of 20.',
      'You gain proficiency in one skill of your choice.',
      "Choose one skill in which you have proficiency. You gain expertise with that skill, which means your proficiency bonus is doubled for any ability check you make with it. The skill you choose must be one that isn't already benefiting from a feature, such as Expertise, that doubles your proficiency bonus.",
    ],
    unimplemented: true,
  },
  // {
  //   featId: FeatIds.skilled,
  //   name: 'Skilled',
  //   description:
  //     'You gain proficiency in any combination of three skills or tools of your choice.',
  // },
  // {
  //   featId: FeatIds.skulker,
  //   name: 'Skulker',
  //   description:
  //     'You are expert at slinking through shadows. You gain the following benefits:',
  //   options: [
  //     'You can try to hide when you are lightly obscured from the creature from which you are hiding.',
  //     "When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn't reveal your position.",
  //     "Dim light doesn't impose disadvantage on your Wisdom (Perception) checks relying on sight.",
  //   ],
  // },
  // {
  //   featId: FeatIds.slasher,
  //   name: 'Slasher',
  //   description:
  //     "You've learned where to cut to have the greatest results, gaining the following benefits:",
  //   options: [
  //     'Increase your Strength or Dexterity score by 1, to a maximum of 20.',
  //     "Once per turn when you hit a creature with an attack that deals slashing damage, you can reduce that creature's speed by 10 feet until the start of your next turn.",
  //     'When you score a critical hit that deals slashing damage to a creature, you grievously wound it. Until the start of your next turn, the target has disadvantage on all attack rolls.',
  //   ],
  // },
  // {
  //   featId: FeatIds.spellSniper,
  //   name: 'Spell Sniper',
  //   description:
  //     'You have learned techniques to enhance your attacks with certain kinds of spells, gaining the following benefits:',
  //   options: [
  //     "When you cast a spell that requires you to make an attack roll, the spell's range is doubled.",
  //     'Your ranged spell attacks ignore half cover and three-quarters cover.',
  //     'You learn one cantrip that requires an attack roll. Choose the cantrip from the bard, cleric, druid, sorcerer, warlock, or wizard spell list. Your spellcasting ability for this cantrip depends on the spell list you chose from: Charisma for bard, sorcerer, and warlock; Wisdom for cleric or druid; or Intelligence for wizard.',
  //   ],
  // },
  // {
  //   featId: FeatIds.strikeOfTheGiants,
  //   name: "Giant's Might",
  //   description:
  //     'You have absorbed primeval magic that gives you an echo of the might of giants. When you take this feat, choose one of the benefits listed below. Once per turn, when you hit a target with a melee weapon attack or a ranged weapon attack using a thrown weapon, you can imbue the attack with an additional effect depending on the benefit you chose:',
  //   extendedTable: [
  //     {
  //       '': {
  //         headers: ['Strike', 'Effect'],
  //         data: [
  //           {
  //             Strike: 'Cloud Strike',
  //             Effect: `The target takes an extra 1d4 thunder damage. If the target is a creature, it must succeed on a Wisdom saving throw, or you become invisible to it until the start of your next turn or until immediately after you make an attack roll or cast a spell.`,
  //           },
  //           {
  //             Strike: 'Fire Strike',
  //             Effect: `The target takes an extra 1d10 fire damage.`,
  //           },
  //           {
  //             Strike: 'Frost Strike',
  //             Effect: `The target takes an extra 1d6 cold damage. If the target is a creature, it must succeed on a Constitution saving throw, or its speed is reduced to 0 until the start of your next turn.`,
  //           },
  //           {
  //             Strike: 'Frost Strike',
  //             Effect: `The target's speed is reduced by 10 feet until the start of your next turn.`,
  //           },
  //           {
  //             Strike: 'Hill Strike',
  //             Effect: `The target takes an extra 1d6 damage of the weapon’s type. If the target is a creature, it must succeed on a Strength saving throw or have the prone condition.`,
  //           },
  //           {
  //             Strike: 'Stone Strike',
  //             Effect: `The target takes an extra 1d6 force damage. If the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet from you in a straight line.`,
  //           },
  //           {
  //             Strike: 'Storm Strike',
  //             Effect: `The target takes an extra 1d6 lightning damage. If the target is a creature, it must succeed on a Constitution saving throw, or it has disadvantage on attack rolls until the start of your next turn.`,
  //           },
  //         ],
  //       },
  //     },
  //   ],
  //   postTableData:
  //     'The saving throw DC for these effects equals 8 + your proficiency bonus + your Strength or Constitution modifier.\n\nYou can use this feat a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   featId: FeatIds.emberOfTheFireGiant,
  //   name: 'Ability Score Improvement',
  //   description:
  //     'Increase your Strength, Constitution, or Wisdom score by 1, to a maximum of 20.',
  // },
  // {
  //   featId: FeatIds.emberOfTheFireGiant,
  //   name: 'Born of Flame',
  //   description: 'You have resistance to fire damage.',
  // },
  // {
  //   featId: FeatIds.emberOfTheFireGiant,
  //   name: 'Searing Ignition',
  //   description:
  //     'When you take the Attack action on your turn, you can replace a single attack with a magical burst of flame. Each creature of your choice in a 15-foot-radius sphere centered on you must make a Dexterity saving throw (DC equals 8 + your proficiency bonus + the modifier of the ability increased by this feat). \n\nOn a failed save, a creature takes fire damage equal to 1d8 + your proficiency bonus, and it has the blinded condition until the start of your next turn. On a successful save, the creature takes half as much damage only.\n\n You can use your Searing Ignition a number of times equal to your proficiency bonus (but no more than once per turn), and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   featId: FeatIds.furyOfTheFrostGiant,
  //   name: 'Ability Score Improvement',
  //   description:
  //     'Increase your Strength, Constitution, or Wisdom score by 1, to a maximum of 20.',
  // },
  // {
  //   featId: FeatIds.furyOfTheFrostGiant,
  //   name: 'Born of Ice',
  //   description: 'You have resistance to cold damage.',
  // },
  // {
  //   featId: FeatIds.furyOfTheFrostGiant,
  //   name: 'Frigid Retaliation',
  //   description:
  //     'Immediately after a creature you can see within 30 feet of you hits you with an attack roll and deals damage, you can use your reaction to retaliate with a conjured blast of ice. The creature must make a Constitution saving throw (DC equals 8 + your proficiency bonus + the modifier of the ability increased by this feat). On a failed save, the creature takes cold damage equal to 1d8 + your proficiency bonus, and its speed is reduced to 0 until the end of its next turn. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   featId: FeatIds.guileOfTheCloudGiant,
  //   name: 'Ability Score Improvement',
  //   description:
  //     'Increase your Strength, Constitution, or Wisdom score by 1, to a maximum of 20.',
  // },
  // {
  //   featId: FeatIds.guileOfTheCloudGiant,
  //   name: 'Cloudy Escape',
  //   description:
  //     'When a creature you can see hits you with an attack roll, you can use your reaction to give yourself resistance to that attack’s damage. You then teleport to an unoccupied space that you can see within 30 feet of yourself. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   featId: FeatIds.keennessOfTheStoneGiant,
  //   name: 'Ability Score Improvement',
  //   description:
  //     'Increase your Strength, Constitution, or Wisdom score by 1, to a maximum of 20.',
  // },
  // {
  //   featId: FeatIds.keennessOfTheStoneGiant,
  //   name: 'Cavernous Sight',
  //   description:
  //     'You have darkvision with a range of 60 feet. If you already have darkvision, its range increases by 30 feet.',
  // },
  // {
  //   featId: FeatIds.keennessOfTheStoneGiant,
  //   name: 'Stone Throw',
  //   description:
  //     'As a bonus action, you can take a rock and make a magical attack with it. The attack is a ranged spell attack with a range of 60 feet that uses the ability score you increased with this feat as the spellcasting ability. On a hit, the rock deals 1d10 force damage, and the target must succeed on a Strength saving throw (DC equals 8 + your proficiency bonus + the spellcasting ability modifier) or have the prone condition. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   featId: FeatIds.soulOfTheStormGiant,
  //   name: 'Ability Score Improvement',
  //   description:
  //     'Increase your Strength, Wisdom, or Charisma score by 1, to a maximum of 20.',
  // },

  // {
  //   featId: FeatIds.soulOfTheStormGiant,
  //   name: 'Maelstrom Aura',
  //   description:
  //     'As a bonus action, you surround yourself with an aura of magical wind and lightning that extends 10 feet from you in every direction but not through total cover. The aura lasts until the start of your next turn or until you are incapacitated.\n\n While the aura is active, you have resistance to lightning and thunder damage. In addition, attack rolls against you have disadvantage, and whenever another creature starts its turn within the aura, you can force the creature to make a Strength saving throw (DC equals 8 + your proficiency bonus + the ability modifier of the score increased by this feat). On a failed save, the creature’s speed is halved until the start of its next turn.\n\n You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   featId: FeatIds.tavernBrawler,
  //   name: 'Tavern Brawler',
  //   description:
  //     'Accustomed to rough-and-tumble fighting using whatever weapons happen to be at hand, you gain the following benefits:',
  //   options: [
  //     'Increase your Strength or Constitution score by 1, to a maximum of 20.',
  //     'You are proficient with improvised weapons.',
  //     'Your unarmed strike uses a d4 for damage.',
  //     'When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target.',
  //   ],
  // },
  // {
  //   featId: FeatIds.telekinetic,
  //   name: 'Telekinetic',
  //   description:
  //     'You learn to move things with your mind, granting you the following benefits:',
  //   options: [
  //     'Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.',
  //     `You learn the %${spellIds.mageHand}{mage hand}% cantrip. You can cast it without verbal or somatic components, and you can make the spectral hand invisible. If you already know this spell, its range increases by 30 feet when you cast it. Its spellcasting ability is the ability increased by this feat.`,
  //     'As a bonus action, you can try to telekinetically shove one creature you can see within 30 feet of you. When you do so, the target must succeed on a Strength saving throw (DC equals 8 + your proficiency bonus + the ability modifier of the score increased by this feat) or be moved 5 feet toward or away from you. A creature can willingly fail this save.',
  //   ],
  // },
  // {
  //   featId: FeatIds.telepathic,
  //   name: 'Telepathic',
  //   description:
  //     'You awaken the ability to mentally connect with others, granting you the following benefits:',
  //   options: [
  //     'Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.',
  //     "You can speak telepathically to any creature you can see within 60 feet of you. Your telepathic utterances are in a language you know, and the creature understands you only if it knows that language. Your communication doesn't give the creature the ability to respond to you telepathically.",
  //     `You can cast the %${spellIds.detectThoughts}{detect thoughts}% spell, requiring no components, and you must finish a long rest before you can cast it in this way again. Your spellcasting ability for this spell is the ability increased by this feat. If you have spell slots of 2nd level or higher, you can cast this spell with them.`,
  //   ],
  // },
  // {
  //   featId: FeatIds.tough,
  //   name: 'Tough',
  //   description:
  //     'Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points.',
  // },
  // {
  //   featId: FeatIds.vigorOfTheHillGiant,
  //   name: 'Ability Score Improvement',
  //   description:
  //     'Increase your Strength, Constitution, or Wisdom score by 1, to a maximum of 20.',
  // },
  // {
  //   featId: FeatIds.vigorOfTheHillGiant,
  //   name: 'Bulwark',
  //   description:
  //     'When you are subjected to an effect that would move you at least 5 feet or give you the prone condition, you can use your reaction to steady yourself. You aren’t moved and don’t have the prone condition.',
  // },
  // {
  //   featId: FeatIds.vigorOfTheHillGiant,
  //   name: 'Iron Stomach',
  //   description:
  //     'Whenever you eat food as part of a short rest and spend one or more Hit Dice to regain hit points, you regain additional hit points equal to your Constitution modifier + your proficiency bonus.',
  // },
  // {
  //   featId: FeatIds.warCaster,
  //   name: 'War Caster',
  //   description:
  //     'You have practiced casting spells in the midst of combat, learning techniques that grant you the following benefits:',
  //   options: [
  //     'You have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you take damage.',
  //     'You can perform the somatic components of spells even when you have weapons or a shield in one or both hands.',
  //     "When a hostile creature's movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature.",
  //   ],
  // },
  // {
  //   featId: FeatIds.weaponMaster,
  //   name: 'Weapon Master',
  //   description:
  //     'You have practiced extensively with a variety of weapons, gaining the following benefits:',
  //   options: [
  //     'Increase your Strength or Dexterity score by 1, to a maximum of 20.',
  //     'You gain proficiency with four weapons of your choice. Each one must be a simple or a martial weapon.',
  //   ],
  // },
  // {
  //   featId: FeatIds.scionOfTheOuterPlanes,
  //   name: 'Scion of the Outer Planes',
  //   description:
  //     'Choose a type of plane listed in the Planar Infusion Table. Your choice gives you a resistance to a damage type and the ability to cast a cantrip, as specified in the table. You can cast this cantrip without material components, and your spellcasting ability for it is Intelligence, Wisdom or Charisma (choose when you select this feat).',
  //   extendedTable: [
  //     {
  //       'Planar Infusion': {
  //         headers: ['Plane', 'Damage Type', 'Cantrip'],
  //         data: [
  //           {
  //             Plane: 'Chaotic Outer Plane',
  //             'Damage Type': 'Poison',
  //             Cantrip: `%${spellIds.minorIllusion}{Mind Sliver}%`,
  //           },
  //           {
  //             Plane: 'Evil Outer Plane',
  //             'Damage Type': 'Necrotic',
  //             Cantrip: `%${spellIds.chillTouch}{Chill Touch}%`,
  //           },
  //           {
  //             Plane: 'Good Outer Plane',
  //             'Damage Type': 'Radiant',
  //             Cantrip: `%${spellIds.sacredFlame}{Sacred Flame}%`,
  //           },
  //           {
  //             Plane: 'Lawful Outer Plane',
  //             'Damage Type': 'Force',
  //             Cantrip: `%${spellIds.guidance}{Guidance}%`,
  //           },
  //           {
  //             Plane: 'The noutlands',
  //             'Damage Type': 'Psychic',
  //             Cantrip: `%${spellIds.mageHand}{Mage Hand}%`,
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   featId: FeatIds.agentOfOrder,
  //   name: 'Ability Score Improvement',
  //   description:
  //     'Increase an ability score of your choice by 1, to a maximum of 20.',
  // },
  // {
  //   featId: FeatIds.agentOfOrder,
  //   name: 'Stasis Strike',
  //   description:
  //     'Once per turn when you damage a creature you can see within 60 feet of yourself, you can deal an extra 1d8 force damage to the target, and it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + the modifier of the spellcasting ability you chose for the Scion of the Outer Planes feat) as spectral bindings try to ensnare it. On a successful save, the target escapes. On a failed save, the target has the restrained condition until the start of your next turn. These bindings manifest as chains or some other symbol of stasis.\n\n You can use this benefit a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   featId: FeatIds.balefulScion,
  //   name: 'Ability Score Improvement',
  //   description:
  //     'Increase an ability score of your choice by 1, to a maximum of 20.',
  // },
  // {
  //   featId: FeatIds.balefulScion,
  //   name: 'Grasp of Avarice',
  //   description:
  //     'Once per turn, when you damage a creature you can see within 60 feet of yourself, you can also deal necrotic damage to it. The necrotic damage equals 1d6 + your proficiency bonus, and you regain a number of hit points equal to this necrotic damage dealt.\n\n You can use this benefit a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   featId: FeatIds.cohortOfChaos,
  //   name: 'Ability Score Improvement',
  //   description:
  //     'Increase an ability score of your choice by 1, to a maximum of 20.',
  // },
  // {
  //   featId: FeatIds.cohortOfChaos,
  //   name: 'Chaotic Flare',
  //   description:
  //     "When you roll a 1 or a 20 on an attack roll or a saving throw, the magic of chaos flows through you. Roll a d4 and consult the Chaotic Flares table to determine what happens. A flare lasts until the end of your next turn, and a new flare can't occur until after the first flare ends.",
  //   extendedTable: [
  //     {
  //       'Chaotic Flares': {
  //         headers: ['d4', 'Flare', 'Effect'],
  //         data: [
  //           {
  //             d4: '1',
  //             Flare: 'Battle Fury',
  //             Effect:
  //               'A creature of your choice that you can see is filled with reckless fury. It has advantage on attack rolls and disadvantage on ability checks.',
  //           },
  //           {
  //             d4: '2',
  //             Flare: 'Disruption Field',
  //             Effect:
  //               'Waves of energy ripple around you. Every creature that starts its turn within 5 feet of you, or that moves into that area for the first time on a turn, takes 1d8 force damage.',
  //           },
  //           {
  //             d4: '3',
  //             Flare: 'Unbound',
  //             Effect:
  //               "When you move, you can use some or all of your walking speed to teleport yourself once, along with any equipment you're wearing or carrying, up to the distance used to an unoccupied space that you can see.",
  //           },
  //           {
  //             d4: '4',
  //             Flare: 'Wailing Winds',
  //             Effect:
  //               'Winds swirl in a 15-foot-radius sphere centered on you. You and any other creatures in that area have disadvantage on Wisdom saving throws.',
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   featId: FeatIds.outlandsEnvoy,
  //   name: 'Ability Score Improvement',
  //   description:
  //     'Increase an ability score of your choice by 1, to a maximum of 20.',
  // },
  // {
  //   featId: FeatIds.outlandsEnvoy,
  //   name: 'Crossroads Emissary',
  //   description: `You learn the %${spellIds.mistyStep}{misty step}% and %${spellIds.tongues}{tongues}% spells. You can cast each spell once using this feat without a spell slot, and you must finish a long rest before you can cast that spell in this way again. When you cast tongues using this feat, you require no material components. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the one chosen when you gained the Scion of the Outer Planes feat.`,
  // },
  // {
  //   featId: FeatIds.planarWanderer,
  //   name: 'Planar Adaption',
  //   description:
  //     'When you finish a long rest, you gain resistance to either acid, cold or fire damage (your choice) until you finish your next long rest.',
  // },
  // {
  //   featId: FeatIds.planarWanderer,
  //   name: 'Portal Cracker',
  //   description:
  //     "Your experience with portals allows you to open them without a portal key. As an action, you can concentrate on a portal you're aware of within 5 feet of yourself and make a DC 20 Intelligence (Arcana) check. On a failed check, you take 3d8 psychic damage and can't use this benefit on that portal again until you finish a long rest. On a successful check, you can force the portal open or closed for 1 hour. For that duration, the portal doesn't respond to its portal key unless a creature employing the key succeeds on a DC 20 Intelligence (Arcana) check as an action.",
  // },
  // {
  //   featId: FeatIds.planarWanderer,
  //   name: 'Portal Sense',
  //   description:
  //     "You know the direction to the last planar portal you used while you and the portal are on the same plane of existence. Moreover, as an action, you can detect the location of any portals within 30 feet of you that aren't behind total cover. Once you detect a portal with this action, you can't use the action again until you finish a long rest.",
  // },
  // {
  //   featId: FeatIds.righteousHeritor,
  //   name: 'Ability Score Improvement',
  //   description:
  //     'Increase an ability score of your choice by 1, to a maximum of 20.',
  // },
  // {
  //   featId: FeatIds.righteousHeritor,
  //   name: 'Soothe Pain',
  //   description:
  //     'When you or a creature within 30 feet of you takes damage, you can use your reaction to reduce that damage by 1d10 + your proficiency bonus. You can use this benefit a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   featId: FeatIds.strixhavenInitiate,
  //   name: 'Strixhaven Initiate',
  //   description:
  //     "Choose one of Strixhaven's colleges: Lorehold, Prismari. Quandrix, Silverquill, or Witherbloom. You learn two cantrips and one 1st-level spell based on the college you choose, as specified in the Strixhaven Spells table.\n\nYou can cast the chosen 1st-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have.\n\nYour spellcasting ability for this feat's spells is Intelligence, Wisdom, or Charisma (choose when you select this feat).",
  //   extendedTable: [
  //     {
  //       'Strixhaven Spells': {
  //         headers: ['College', 'Cantrips', '1st-level Spell'],
  //         data: [
  //           {
  //             College: 'Lorehold',
  //             Cantrips: `Choose two from %${spellIds.light}{Light}%, %${spellIds.sacredFlame}{Sacred Flame}%, and %${spellIds.thaumaturgy}{Thaumaturgy}%`,
  //             '1st-level Spell': `Choose one 1st-level Cleric or Wizard spell`,
  //           },
  //           {
  //             College: 'Prismari',
  //             Cantrips: `Choose two from %${spellIds.firebolt}{Fire Bolt}%, %${spellIds.prestidigitation}{Prestidigitation}%, and %${spellIds.rayOfFrost}{Ray of Frost}%`,
  //             '1st-level Spell': `Choose one 1st-level Sorcerer or Bard spell`,
  //           },
  //           {
  //             College: 'Quandrix',
  //             Cantrips: `Choose two from %${spellIds.druidcraft}{Druidcraft}%, %${spellIds.guidance}{Guidance}%, and %${spellIds.mageHand}{Mage Hand}%`,
  //             '1st-level Spell': `Choose one 1st-level Druid or Wizard spell`,
  //           },
  //           {
  //             College: 'Silverquill',
  //             Cantrips: `Choose two from %${spellIds.sacredFlame}{Sacred Flame}%, %${spellIds.thaumaturgy}{Thaumaturgy}%, and %${spellIds.viciousMockery}{Vicious Mockery}%`,
  //             '1st-level Spell': `Choose one 1st-level Bard or Cleric spell`,
  //           },
  //           {
  //             College: 'Witherbloom',
  //             Cantrips: `Choose two from %${spellIds.chillTouch}{Chill Touch}%, %${spellIds.druidcraft}{Druidcraft}%, and %${spellIds.spareTheDying}{Spare the Dying}%`,
  //             '1st-level Spell': `Choose one 1st-level Druid or Warlock spell`,
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   featId: FeatIds.strixhavenMascot,
  //   name: 'Strixhaven Mascot',
  //   description:
  //     'You have learned how to summon a Strixhaven mascot to assist you, granting you these benefits:',
  //   options: [
  //     `You can cast the %${spellIds.findFamiliar}{Find Familiar}% spell as a ritual. Your familiar can take the form of the mascot associated with the college you chose for the Strixhaven Initiate feat: a spirit statue mascot (Lorehold), an art elemental mascot (Prismari), a fractal mascot (Quandrix), an inkling mascot (Silverquill), or a pest mascot (Witherbloom).`,
  //     'When you take the Attack action on your turn, you can forgo one attack to allow your mascot familiar to make one attack of its own with its reaction.',
  //     "If your mascot familiar is within 60 feet of you, you can be teleported as an action, swapping places with the familiar. If your destination space is too small for you to occupy, the teleportation fails and is wasted. Once you teleport this way, you can't do so again until you finish a long rest, unless you expend a spell slot of 2nd level or higher to do it again..",
  //   ],
  // },
  // {
  //   featId: FeatIds.bountifulLuck,
  //   name: 'Bountiful Luck',
  //   description:
  //     "Your people have extraordinary luck, which you have learned to mystically lend to your companions whenever you see them falter. You're not sure how you do it, you just wish it, and it happens. Surely a sign of fortune's favor!",
  //   options: [
  //     'When an ally you can see within 30 feet of you rolls a 1 on the d20 for an attack roll, an ability check, or a saving throw, you can use your reaction to let the ally reroll the die. The ally must use the new roll.',
  //     "When you use this ability, you can't use your Lucky racial trait before the end of your next turn",
  //   ],
  // },
  // {
  //   featId: FeatIds.dragonFear,
  //   name: 'Dragon Fear',
  //   description:
  //     'When angered, you radiate menace. You gain the following benefits:',
  //   options: [
  //     'Increase your Strength, Constitution, or Charisma score by 1, to a maximum of 20.',
  //     'Instead of exhaling destructive energy, you can expend a use of your Breath Weapon trait to roar, forcing each creature of your choice within 30 feet of you to make a Wisdom saving throw (DC 8 + your proficiency bonus + your Charisma modifier). A target automatically succeeds on the save if it can’t hear or see you. On a failed save, a target becomes frightened for 1 minute. If the frightened target takes any damage, it can repeat the saving throw, ending the effect on itself on a success.',
  //   ],
  // },
  // {
  //   featId: FeatIds.dragonHide,
  //   name: 'Dragon Hide',
  //   description:
  //     'You manifest scales and claws reminiscent of your draconic ancestors. You gain the following benefits:',
  //   options: [
  //     'Increase your Strength, Constitution, or Charisma score by 1, to a maximum of 20.',
  //     "Your scales harden. While you aren't wearing armor, you can calculate your AC as 13 + your Dexterity modifier. You can use a shield and still gain this benefit.",
  //     'You can grow retractable claws from the tips of your fingers. Extending or retracting the claws requires no action. The claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the normal bludgeoning damage for an unarmed strike.',
  //   ],
  // },
  // {
  //   featId: FeatIds.dwarvenFortitude,
  //   name: 'Dwarven Fortitude',
  //   description:
  //     'You have the blood of dwarf heroes flowing through your veins. You gain the following benefits:',
  //   options: [
  //     'Increase your Constitution score by 1, to a maximum of 20.',
  //     'Whenever you take the Dodge action in combat, you can spend one Hit Die to heal yourself. Roll the die, add your Constitution modifier, and regain a number of hit points equal to the total (minimum of 1).',
  //   ],
  // },
  // {
  //   featId: FeatIds.drowHighMagic,
  //   name: 'Drow High Magic',
  //   description: `You learn more of the magic typical of dark elves. You learn the %${spellIds.detectMagic}{Detect Magic}% spell and can cast it at will, without expending a spell slot. You also learn %${spellIds.levitate}{Levitate}% and %${spellIds.dispelMagic}{Dispel Magic}%, each of which you can cast once without expending a spell slot. You regain the ability to cast the spell in this way when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
  // },
  // {
  //   featId: FeatIds.elvenAccuracy,
  //   name: 'Elven Accuracy',
  //   description:
  //     'The accuracy of elves is legendary, especially that of elf archers and spellcasters. You have uncanny aim with attacks that rely on precision rather than brute force. You gain the following benefits:',
  //   options: [
  //     'Increase your Dexterity, Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.',
  //     'Whenever you have advantage on an attack roll using Dexterity, Intelligence, Wisdom, or Charisma, you can reroll one of the dice once.',
  //   ],
  // },
  // {
  //   featId: FeatIds.fadeAway,
  //   name: 'Fade Away',
  //   description:
  //     'Your people are clever, with a knack for illusion magic. You have learned a magical trick for fading away when you suffer harm. You gain the following benefits:',
  //   options: [
  //     'Increase your Dexterity or Intelligence score by 1, to a maximum of 20.',
  //     "Immediately after you take damage, you can use a reaction to magically become invisible until the end of your next turn or until you attack, deal damage, or force someone to make a saving throw. Once you use this ability, you can't do so again until you finish a short or long rest.",
  //   ],
  // },
  // {
  //   featId: FeatIds.feyTeleportation,
  //   name: 'Fey Teleportation',
  //   description:
  //     'Your study of high elven lore has unlocked fey power that few other elves possess, except your eladrin cousins. Drawing on your fey ancestry, you can momentarily stride through the Feywild to shorten your path from one place to another. You gain the following benefits:',
  //   options: [
  //     'Increase your Intelligence or Charisma score by 1, to a maximum of 20.',
  //     'You learn to speak, read, and write Sylvan',
  //     `You learn the %${spellIds.mistyStep}{Misty Step}% spell and can cast it once without expending a spell slot. You regain the ability to cast it in this way when you finish a short or long rest. Intelligence is your spellcasting ability for this spell.`,
  //   ],
  // },
  // {
  //   featId: FeatIds.flamesOfPhlegethos,
  //   name: 'Flames of Phlegethos',
  //   description:
  //     'You learn to call on hellfire to serve your commands. You gain the following benefits:',
  //   options: [
  //     'Increase your Intelligence or Charisma score by 1, to a maximum of 20.',
  //     'When you roll fire damage for a spell you cast, you can reroll any roll of 1 on the fire damage dice, but you must use the new roll, even if it is another 1.',
  //     'Whenever you cast a spell that deals fire damage, you can cause flames to wreathe you until the end of your next turn. The flames don’t harm you or your possessions, and they shed bright light out to 30 feet and dim light for an additional 30 feet. While the flames are present, any creature within 5 feet of you that hits you with a melee attack takes 1d4 fire damage.',
  //   ],
  // },
  // {
  //   featId: FeatIds.infernalConstitution,
  //   name: 'Infernal Constitution',
  //   description:
  //     'Fiendish blood runs strong in you, unlocking a resilience akin to that possessed by some fiends. You gain the following benefits:',
  //   options: [
  //     'Increase your Constitution score by 1, to a maximum of 20.',
  //     'You have resistance to cold and poison damage.',
  //     'You have advantage on saving throws against being poisoned.',
  //   ],
  // },
  // {
  //   featId: FeatIds.orcishFury,
  //   name: 'Orcish Fury',
  //   description: 'Your fury burns tirelessly. You gain the following benefits:',
  //   options: [
  //     'Increase your Strength or Constitution score by 1, to a maximum of 20.',
  //     'When you hit with an attack made with a simple or martial weapon, you can roll one of the weapon’s damage dice an additional time and add it as extra damage of the weapon’s damage type. Once you use this ability, you can’t use it again until you finish a short or long rest.',
  //     'Immediately after you use your Relentless Endurance trait, you can use your reaction to make one weapon attack.',
  //   ],
  // },
  // {
  //   featId: FeatIds.prodigy,
  //   name: 'Prodigy',
  //   description:
  //     'You have a knack for learning new things. You gain the following benefits:',
  //   options: [
  //     'You gain one skill proficiency of your choice, one tool proficiency of your choice, and fluency in one language of your choice.',
  //     "Choose one skill in which you have proficiency. You gain expertise with that skill, which means your proficiency bonus is doubled for any ability check you make with it. The skill you choose must be one that isn't already benefiting from a feature, such as Expertise, that doubles your proficiency bonus",
  //   ],
  // },
  // {
  //   featId: FeatIds.revenantBlade,
  //   name: 'Revenant Blade',
  //   description:
  //     'You are descended from a master of the double-bladed scimitar, and some of that mastery has passed on to you. You gain the following benefits:',
  //   options: [
  //     'Increase your Dexterity or Strength score by 1, to a maximum of 20.',
  //     'While you are holding a double-bladed scimitar with two hands, you gain a +1 bonus to Armor Class.',
  //     'A double-bladed scimitar has the finesse property when you wield it.',
  //   ],
  // },
  // {
  //   featId: FeatIds.secondChance,
  //   name: 'Second Chance',
  //   description:
  //     'Fortune favors you when someone tries to strike you. You gain the following benefits:',
  //   options: [
  //     'Increase your Dexterity, Constitution, or Charisma score by 1, to a maximum of 20.',
  //     'When a creature you can see hits you with an attack roll, you can use your reaction to force that creature to reroll. Once you use this ability, you can’t use it again until you roll initiative at the start of combat or until you finish a short or long rest.',
  //   ],
  // },
  // {
  //   featId: FeatIds.squatNimbleness,
  //   name: 'Squat Nimbleness',
  //   description:
  //     'You are uncommonly nimble for your race. You gain the following benefits:',
  //   options: [
  //     'Increase your Strength or Dexterity score by 1, to a maximum of 20.',
  //     'Increase your walking speed by 5 feet.',
  //     'You gain proficiency in the Acrobatics or Athletics skill (your choice).',
  //     'You have advantage on any Strength (Athletics) or Dexterity (Acrobatics) check you make to escape from being grappled.',
  //   ],
  // },
  // {
  //   featId: FeatIds.svirfneblinMagic,
  //   name: 'Svirfneblin Magic',
  //   description: `You have inherited the innate spellcasting ability of your ancestors. This ability allows you to cast %${spellIds.nondetection}{Nondetection}% on yourself at will, without needing a material component.\n\nYou can also cast each of the following spells once with this ability: %${spellIds.blindnessDeafness}{Blindness/Deafness}%, %${spellIds.blur}{Blur}%, and %${spellIds.disguiseSelf}{Disguise Self}%. You regain the ability to cast these spells when you finish a long rest. Intelligence is your spellcasting ability for these spells`,
  // },
  // {
  //   featId: FeatIds.woodElfMagic,
  //   name: 'Wood Elf Magic',
  //   description: `You learn the magic of the primeval woods, which are revered and protected by your people.You learn one Druid cantrip of your choice. You also learn the %${spellIds.longstrider}{Longstrider}% and %${spellIds.passWithoutTrace}{Pass without Trace}% spells, which you can cast once without expending a spell slot. You regain the ability to cast these spells in this way when you finish a long rest. Wisdom is your spellcasting ability for these spells.`,
  // },
  // {
  //   featId: FeatIds.servoCrafting,
  //   name: 'Servo Crafting',
  //   description:
  //     'You are skilled in the creation of servos—tiny constructs that function as personal assistants. You can cast the Find Familiar spell as a ritual, creating a servo to serve as your familiar instead of an animal. It uses the Servo stat block, but in every other way, a servo familiar functions as described in the find familiar spell.\n\nYou can communicate telepathically with your servo familiar and perceive through its senses as long as you are on the same plane of existence. You can speak through your servo in your own voice.\n\nAdditionally, when you take the Attack action, you can forgo one of your own attacks to allow your servo familiar to make one attack of its own.',
  //   extendedTable: [
  //     {
  //       Servo: {
  //         headers: ['Stat', 'Value'],
  //         data: [
  //           {
  //             Stat: 'Armor Class',
  //             Value: '11 (natural armor)',
  //           },
  //           {
  //             Stat: 'Hit Points',
  //             Value: '10 (3d4 + 3)',
  //           },
  //           {
  //             Stat: 'Speed',
  //             Value: '20 ft.',
  //           },
  //           {
  //             Stat: 'Damage Immunities',
  //             Value: 'poison',
  //           },
  //           {
  //             Stat: 'Condition Immunities',
  //             Value: 'charmed, poisoned',
  //           },
  //           {
  //             Stat: 'Senses',
  //             Value: 'passive Perception 10',
  //           },
  //           {
  //             Stat: 'Languages',
  //             Value: ' - ',
  //           },
  //           {
  //             Stat: 'Challenge',
  //             Value: '0 (10 XP)',
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       '': {
  //         headers: ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'],
  //         data: [
  //           {
  //             STR: '4 (-3)',
  //             DEX: '11 (+0)',
  //             CON: '12 (+1)',
  //             INT: '3 (-4)',
  //             WIS: '10 (+0)',
  //             CHA: '7 (-2)',
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       Actions: {
  //         headers: ['Name', 'Description'],
  //         data: [
  //           {
  //             Name: 'Claw',
  //             Description:
  //               'Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing damage.',
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   featId: FeatIds.quicksmithing,
  //   name: 'Quicksmithing',
  //   description:
  //     'You have mastered the art of on-the-fly invention, improvement, and jury-rigging. You can use your talents to create immediate, short-term magical effects similar to spells, given time and an adequate supply of aether.\n\nWhen you choose this feat, you master two magical effects, each of which recreates the effect of a 1st-level spell that has the ritual tag. These spells can come from any class list, but Intelligence is your spellcasting ability for them.\n\nIf you come across a schematic geared toward quicksmithing or study with another quicksmith, you might be able to add another spell to the effects you have mastered. The spell’s level can be no higher than half your level (rounded up), and it must have the ritual tag. The process of mastering the spell takes 2 hours per level of the spell, and costs 50 gp per level. The cost represents aether you use as you experiment with the spell effect to master it. In addition, you have proficiency with artisan’s tools (quicksmith’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours unless you spend 1 hour repairing it to keep it functioning. You can use your action to dismantle the device, at which point you can reclaim the materials used to create it. You can have up to three such devices active at a time.\n\nWhen you create a device, choose one of the following options:',
  //   extendedTable: [
  //     {
  //       '': {
  //         headers: ['Device', 'Effect'],
  //         data: [
  //           {
  //             Device: 'Clockwork Toy',
  //             Effect:
  //               'This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.',
  //           },
  //           {
  //             Device: 'Fire Starter',
  //             Effect:
  //               'This device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.',
  //           },
  //           {
  //             Device: 'Music Box',
  //             Effect:
  //               'When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed.',
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   featId: FeatIds.initiateOfHighSorcery,
  //   name: 'Initiate of High Sorcery',
  //   description:
  //     "You've received training from magic-users affiliated with the Mages of High Sorcery. \n\nChoose one of the three moons of Krynn to influence your magic: the black moon, Nuitari; the red moon, Lunitari; or the white moon Solinari. You learn one cantrip of your choice from the Wizard spell list and two 1st-level spells based on the moon you choose, as specified in the Lunar Spells table.",
  //   extendedTable: [
  //     {
  //       'Lunar Spells Table': {
  //         headers: ['Moon', '1st-level Spells'],
  //         data: [
  //           {
  //             Moon: 'Nuitari',
  //             //Choose two from Dissonant Whispers, False Life, Hex, and Ray of Sickness
  //             '1st-level Spells': `Choose two from %${spellIds.dissonantWhispers}{Dissonant Whispers}%, %${spellIds.falseLife}{False Life}%, %${spellIds.hex}{Hex}%, and %${spellIds.rayOfSickness}{Ray of Sickness}%`,
  //           },
  //           {
  //             Moon: 'Lunitari',
  //             //Choose two from Color Spray, Disguise Self, Feather Fall, and Longstrider
  //             '1st-level Spells': `Choose two from %${spellIds.colorSpray}{Color Spray}%, %${spellIds.disguiseSelf}{Disguise Self}%, %${spellIds.featherFall}{Feather Fall}%, and %${spellIds.longstrider}{Longstrider}%`,
  //           },
  //           {
  //             Moon: 'Solinari',
  //             //Choose two from Comprehend Languages, Detect Evil and Good, Protection from Evil and Good, and Shield
  //             '1st-level Spells': `Choose two from %${spellIds.comprehendLanguages}{Comprehend Languages}%, %${spellIds.detectEvilAndGood}{Detect Evil and Good}%, %${spellIds.protectionFromEvilAndGood}{Protection from Evil and Good}%, and %${spellIds.shield}{Shield}%`,
  //           },
  //         ],
  //       },
  //     },
  //   ],
  //   postTableData:
  //     'You can cast each of the chosen 1st-level spells without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spells using any spell slots you have.\n\nYour spellcasting ability for this feat’s spells is Intelligence, Wisdom, or Charisma (choose when you select this feat).',
  // },
  // {
  //   featId: FeatIds.adeptOfTheBlackRobes,
  //   name: 'Ambitious Magic',
  //   description: `You learn one 2nd-level spell of your choice. The 2nd-level spell must be from the Enchantment or Necromancy school of magic. You can cast this feat’s 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell’s spellcasting ability is the one chosen when you gained the Initiate of High Sorcery feat.`,
  // },
  // {
  //   featId: FeatIds.adeptOfTheBlackRobes,
  //   name: 'Life Channel',
  //   description:
  //     'You can channel your life force into the power of your magic. When a creature you can see within 60 feet of you fails a saving throw against a spell that deals damage that you cast, you can expend a number of Hit Dice equal to the level of the spell. Roll the expended Hit Dice and add them together. The damage that the creature takes increases by an amount equal to that total.',
  // },
  // {
  //   featId: FeatIds.adeptOfTheRedRobes,
  //   name: 'Insightful Magic',
  //   description:
  //     'You learn one 2nd-level spell of your choice. The 2nd-level spell must be from the Illusion or Transmutation school of magic. You can cast this feat’s 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell’s spellcasting ability is the one chosen when you gained the Initiate of High Sorcery feat.',
  // },
  // {
  //   featId: FeatIds.adeptOfTheRedRobes,
  //   name: 'Magical Balance',
  //   description:
  //     'When you make an attack roll or an ability check and roll a 9 or lower on the d20, you can balance fate and treat the roll as a 10. You can balance fate in this way a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   featId: FeatIds.adeptOfTheWhiteRobes,
  //   name: 'Protective Magic',
  //   description:
  //     'You learn one 2nd-level spell of your choice. The 2nd-level spell must be from the Abjuration or Divination school of magic. You can cast this feat’s 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell’s spellcasting ability is the one chosen when you gained the Initiate of High Sorcery feat.',
  // },
  // {
  //   featId: FeatIds.adeptOfTheWhiteRobes,
  //   name: 'Protective Ward',
  //   description:
  //     'When you or a creature you can see within 30 feet of you takes damage, you can use your reaction to expend a spell slot and weave protective magic around the target. Roll a number of d6s equal to the level of the spell slot expended and reduce the damage the target takes by the total rolled on those dice + your spellcasting ability modifier.',
  // },
  // {
  //   featId: FeatIds.divinelyFavored,
  //   name: 'Divinely Favored',
  //   description: `You learn one cantrip of your choice from the Cleric spell list and one 1st-level spell based on the alignment of your character, as specified in the Alignment Spells table below. You also learn the %${spellIds.augury}{Augury}% spell.`,
  //   extendedTable: [
  //     {
  //       'Alignment Spells': {
  //         headers: ['Alignment', '1st-level Spell'],
  //         data: [
  //           {
  //             Alignment: 'Evil',
  //             '1st-level Spell': `Choose one 1st-level Warlock spell`,
  //           },
  //           {
  //             Alignment: 'Good',
  //             '1st-level Spell': `Choose one 1st-level Cleric spell.`,
  //           },
  //           {
  //             Alignment: 'Neutral',
  //             '1st-level Spell': `Choose one 1st-level Druid spell`,
  //           },
  //         ],
  //       },
  //     },
  //   ],
  //   postTableData:
  //     'You can cast the chosen 1st-level spell and the Augury spell without a spell slot, and you must finish a long rest before you can cast either of these spells in this way again. You can also cast these spells using spell slots you have of the appropriate level.\n\nYour spellcasting ability for this feat’s spells is Intelligence, Wisdom, or Charisma (choose when you select this feat).\n\nIn addition, you can use a holy symbol as a spellcasting focus for any spell you cast that uses the spellcasting ability you choose when you select this feat.',
  // },
  // {
  //   featId: FeatIds.squireOfSolamnia,
  //   name: 'Mount Up',
  //   description: 'Mounting or dismounting costs you only 5 feet of movement.',
  // },
  // {
  //   featId: FeatIds.squireOfSolamnia,
  //   name: 'Precise Strike',
  //   description:
  //     "Once per turn, when you make a weapon attack roll against a creature, you can cause the attack roll to have advantage. If the attack hits, you roll a d8 and add the number rolled as a bonus to the attack's damage roll. You can use this benefit a number of times equal to your proficiency bonus, but a use is expended only if the attack hits. You regain all expended uses when you finish a long rest.",
  // },
  // {
  //   featId: FeatIds.knightOfTheCrown,
  //   name: 'Ability Score Improvement',
  //   description:
  //     'Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20.',
  // },
  // {
  //   featId: FeatIds.knightOfTheCrown,
  //   name: 'Commanding Rally',
  //   description:
  //     "As a bonus action, you can command one ally within 30 feet of yourself to attack. If that ally can see or hear you, they can immediately make one weapon attack as a reaction. If the attack hits, the ally can roll a d8 and add the number rolled as a bonus to the attack's damage roll. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
  // },
  // {
  //   featId: FeatIds.knightOfTheRose,
  //   name: 'Ability Score Improvement',
  //   description:
  //     'Increase your Constitution, Wisdom, or Charisma score by 1, to a maximum of 20.',
  // },
  // {
  //   featId: FeatIds.knightOfTheRose,
  //   name: 'Bolstering Rally',
  //   description:
  //     'As a bonus action, you can encourage one creature you can see within 30 feet of yourself (you can choose yourself). If the target can see or hear you, the target gains temporary hit points equal to 1d8 + your proficiency bonus + the ability modifier of the ability score increased by this feat. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   featId: FeatIds.knightOfTheSword,
  //   name: 'Ability Score Improvement',
  //   description:
  //     'Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.',
  // },
  // {
  //   featId: FeatIds.knightOfTheSword,
  //   name: 'Demoralizing Strike',
  //   description:
  //     'Once per turn, when you hit a creature with a weapon attack roll, you can attempt to frighten that target. The target must make a Wisdom saving throw (DC equals 8 + your proficiency bonus + the ability modifier of the score increased by this feat). On a failed save, the target is frightened of you until the end of your next turn. On a successful save, the target has disadvantage on the next attack roll it makes before the end of its next turn. You can use this benefit a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  {
    featId: FeatIds.speedingRage,
    id: FeatFeatureIds.speedingRage,
    name: 'Speeding Rage',
    description:
      'You can move with incredible speed while raging. When you enter a rage, you gain bonus movement equal to 5 * your proficiency bonus. This bonus movement lasts until your rage ends.',
  },
];

export default FeatFeaturesSeed;
