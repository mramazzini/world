import { ChainType, Prisma } from '@prisma/client';
import { speciesIds } from './Species.seed';

export const speciesFeaturesIds = {
  aasimarMMOMCelestialResistance: 'aasimarMMOMCelestialResistance',
  aasimarMMOMHealingHands: 'aasimarMMOMHealingHands',
  aasimarMMOMLightBearer: 'aasimarMMOMLightBearer',
  aasimarMMOMCelestialRevelation: 'aasimarMMOMCelestialRevelation',
  aasimarVGMCelestialResistance: 'aasimarVGMCelestialResistance',
  aasimarVGMHealingHands: 'aasimarVGMHealingHands',
  aasimarVGMLightBearer: 'aasimarVGMLightBearer',
  airGenasiMMOMUnendingBreath: 'airGenasiMMOMUnendingBreath',
  airGenasiMMOMLightningResistance: 'airGenasiMMOMLightningResistance',
  airGenasiMMOMMingleWithTheWind: 'airGenasiMMOMMingleWithTheWind',
  airGenasiEEPCUnendingBreath: 'airGenasiEEPCUnendingBreath',
  airGenasiEEPCMingleWithTheWind: 'airGenasiEEPCMingleWithTheWind',
  airGenasiEEPCLightningResistance: 'airGenasiEEPCLightningResistance',
  waterGenasiMMOMAmphibious: 'waterGenasiMMOMAmphibious',
  waterGenasiMMOMAcidResistance: 'waterGenasiMMOMAcidResistance',
  waterGenasiMMOMCallToTheWave: 'waterGenasiMMOMCallToTheWave',
  stonesEnduranceGolaithEEPC: 'stonesEnduranceGolaithEEPC',
  powerfulBuildGolaithEEPC: 'powerfulBuildGolaithEEPC',
  mountainBornGolaithEEPC: 'mountainBornGolaithEEPC',
  luckyFootworkHarengonMMOM: 'luckyFootworkHarengonMMOM',
  rabbitHopHarengonMMOM: 'rabbitHopHarengonMMOM',
  hareTriggerHarengonMMOM: 'hareTriggerHarengonMMOM',
  leoprineSensesHarengonMMOM: 'leoprineSensesHarengonMMOM',
  constructedResilienceWarforgedMMOM: 'constructedResilienceWarforgedMMOM',
  sentrysRestWarforgedMMOM: 'sentrysRestWarforgedMMOM',
  integratedProtectionWarforgedMMOM: 'IntegratedProtectionWarforgedMMOM',
  specializedDesignWarforgedMMOM: 'specializedDesignWarforgedMMOM',
  draconicAncestryDragonborn: 'draconicAncestryDragonborn',
  dwarvenResilienceDwarf: 'dwarvenResilienceDwarf',
  dwarvenCombatTrainingDwarf: 'dwarvenCombatTrainingDwarf',
  dwarfToolProficiencyDwarf: 'dwarfToolProficiencyDwarf',
  dwarfStonecunningDwarf: 'dwarfStonecunningDwarf',
  feyAncestryElf: 'feyAncestryElf',
  tranceElf: 'tranceElf',
  keenSensesElf: 'keenSensesElf',
  gnomeCunning: 'gnomeCunning',
  halfElfFeyAncestry: 'halfElfFeyAncestry',
  halfOrcRelentlessEndurance: 'halfOrcRelentlessEndurance',
  halfOrcSavageAttacks: 'halfOrcSavageAttacks',
  halfOrcMenacing: 'halfOrcMenacing',
  halflingLucky: 'halflingLucky',
  halflingBrave: 'halflingBrave',
  halflingNimbleness: 'halflingNimbleness',
  hellishResistanceTiefling: 'hellishResistanceTiefling',
};

const SpeciesFeaturesSeed: Prisma.FeatureCreateManyInput[] = [
  // {
  //   name: 'Talons',
  //   description:
  //     'You have talons that you can use to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.',
  //   speciesId: speciesIds.aarakocraMMOM,
  // },
  // {
  //   name: 'Wind Caller',
  //   description:
  //     'Starting at 3rd level, you can cast the Gust of Wind spell with this trait, without requiring a material component. Once you cast the spell with this trait, you can’t do so again until you finish a long rest. You can also cast the spell using any spell slots you have of 2nd level or higher. \n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for it when you cast Gust of Wind with this trait (choose when you select this species).',
  //   speciesId: speciesIds.aarakocraMMOM,
  // },
  {
    id: speciesFeaturesIds.aasimarMMOMCelestialResistance,
    name: 'Celestial Resistance',
    description: 'You have resistance to necrotic and radiant damage.',
    speciesId: speciesIds.aasimarMMOM,
    unimplemented: true,
  },
  {
    id: speciesFeaturesIds.aasimarMMOMHealingHands,
    name: 'Healing Hands',
    speciesId: speciesIds.aasimarMMOM,
    effectChainType: ChainType.ADD,
    description:
      'As an action, you can touch a creature and roll a number of d4s equal to your proficiency bonus. The creature regains a number of hit points equal to the total rolled. Once you use this trait, you can’t use it again until you finish a long rest.',
  },
  {
    id: speciesFeaturesIds.aasimarMMOMLightBearer,
    name: 'Light Bearer',
    effectChainType: ChainType.ADD,
    speciesId: speciesIds.aasimarMMOM,
    description:
      'You know the Light cantrip. Charisma is your spellcasting ability for it.',
  },
  {
    id: speciesFeaturesIds.aasimarMMOMCelestialRevelation,
    name: 'Celestial Revelation',
    unimplemented: true,
    speciesId: speciesIds.aasimarMMOM,
    description:
      'When you reach 3rd level, choose one of the revelation options below. Thereafter, you can use a bonus action to unleash the celestial energy within yourself, gaining the benefits of that revelation. Your transformation lasts for 1 minute or until you end it as a bonus action. Once you transform using your revelation below, you can’t use it again until you finish a long rest: ',
    extendedTable: [
      {
        '': {
          headers: ['Revelation', 'Description'],
          data: [
            {
              Revelation: 'Necrotic Shroud',
              Description:
                'Your eyes briefly become pools of darkness, and ghostly, flightless wings sprout from your back temporarily. Creatures other than your allies within 10 feet of you that can see you must succeed on a Charisma saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or become frightened of you until the end of your next turn. Until the transformation ends, once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus.',
            },
            {
              Revelation: 'Radiant Consumption',
              Description:
                'Searing light temporarily radiates from your eyes and mouth. For the duration, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, each creature within 10 feet of you takes radiant damage equal to your proficiency bonus. Until the transformation ends, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus.',
            },
            {
              Revelation: 'Radiant Soul',
              Description:
                'Two luminous, spectral wings sprout from your back temporarily. Until the transformation ends, you have a flying speed equal to your walking speed, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus.',
            },
          ],
        },
      },
    ],
  },
  {
    id: speciesFeaturesIds.aasimarVGMCelestialResistance,
    name: 'Celestial Resistance',
    description: 'You have resistance to necrotic and radiant damage.',
    speciesId: speciesIds.aasimarVGM,
    unimplemented: true,
  },
  {
    id: speciesFeaturesIds.aasimarVGMHealingHands,
    name: 'Healing Hands',
    speciesId: speciesIds.aasimarVGM,
    effectChainType: ChainType.ADD,
    description:
      "As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you can't use it again until you finish a long rest.",
  },
  {
    id: speciesFeaturesIds.aasimarVGMLightBearer,
    effectChainType: ChainType.ADD,
    name: 'Light Bearer',
    speciesId: speciesIds.aasimarVGM,
    description:
      'You know the Light cantrip. Charisma is your spellcasting ability for it.',
  },
  // {
  //   name: 'Shapechanger',
  //   speciesId: speciesIds.changelingMMOM,
  //   description:
  //     'As an action, you can change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height and weight and can change your size between Medium and Small. You can make yourself appear as a member of another species, though none of your game statistics change. You can’t duplicate the appearance of an individual you’ve never seen, and you must adopt a form that has the same basic arrangement of limbs that you have. Your clothing and equipment aren’t changed by this trait.\n\nYou stay in the new form until you use an action to revert to your true form or until you die.',
  // },
  // {
  //   speciesId: speciesIds.changelingEberron,
  //   name: 'Shapechanger',
  //   description:
  //     "As an action, you can change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height and weight, but not so much that your size changes. You can make yourself appear as a member of another species, though none of your game statistics change. You can't duplicate the appearance of a creature you've never seen, and you must adopt a form that has the same basic arrangement of limbs that you have. Your clothing and equipment aren't changed by this trait. ",
  // },
  // {
  //   name: 'Changeling Instincts',
  //   speciesId: speciesIds.changelingEberron,
  //   description:
  //     'You gain proficiency in two of the following skills of your choice: Deception, Insight, Intimidation, and Persuasion.',
  // },
  // {
  //   speciesId: speciesIds.deepGnomeMMOM,
  //   name: 'Gift of the Svirfneblin',
  //   description:
  //     'Starting at 3rd level, you can cast the Disguise Self spell with this trait. Starting at 5th level, you can also cast the Nondetection spell with it, without requiring a material component. Once you cast either of these spells with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. \n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this species).',
  // },
  // {
  //   speciesId: speciesIds.deepGnomeMMOM,
  //   name: 'Gnomish Magic Resistance',
  //   description:
  //     ' You have advantage on Intelligence, Wisdom, and Charisma saving throws against spells.',
  // },
  // {
  //   speciesId: speciesIds.deepGnomeMMOM,
  //   name: 'Svirfneblin Camouflage',
  //   description:
  //     'When you make a Dexterity (Stealth) check, you can make the check with advantage. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   speciesId: speciesIds.deepGnomeEEPC,
  //   name: 'Superior Darkvision',
  //   description: 'Your darkvision has a radius of 120 feet.',
  // },
  // {
  //   speciesId: speciesIds.deepGnomeEEPC,
  //   name: 'Stone Camouflage',
  //   description:
  //     'You have advantage on Dexterity (Stealth) checks to hide in rocky terrain.',
  // },
  // {
  //   speciesId: speciesIds.deepGnomeEEPC,
  //   name: 'Gnome Cunning',
  //   description:
  //     'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.',
  // },
  // {
  //   speciesId: speciesIds.duergarMMOM,
  //   name: 'Duergar Magic',
  //   description:
  //     'Starting at 3rd level, you can cast the Enlarge/Reduce spell with this trait, without requiring a material component. Starting at 5th level, you can also cast the Invisibility spell with it, without requiring a material component. Once you cast either of these spells with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. \n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this species).',
  // },
  // {
  //   speciesId: speciesIds.duergarMMOM,
  //   name: 'Dwarven Resilience',
  //   description:
  //     'You have advantage on saving throws you make to avoid or end the poisoned condition on yourself. You also have resistance to poison damage.',
  // },
  // {
  //   speciesId: speciesIds.duergarMMOM,
  //   name: 'Psionic Fortitude',
  //   description:
  //     'You have advantage on saving throws you make to avoid or end the charmed or stunned condition on yourself.',
  // },
  // {
  //   speciesId: speciesIds.duergarSCAG,
  //   name: 'Dwarven Resilience',
  //   description:
  //     'You have advantage on saving throws against poison, and you have resistance against poison damage.',
  // },
  // {
  //   speciesId: speciesIds.duergarSCAG,
  //   name: 'Duergar Resilience',
  //   description:
  //     'You have advantage on saving throws against illusions and against being charmed or paralyzed.',
  // },
  // {
  //   speciesId: speciesIds.duergarSCAG,
  //   name: 'Dwarven Combat Training',
  //   description:
  //     'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.',
  // },
  // {
  //   speciesId: speciesIds.duergarSCAG,
  //   name: 'Tool Proficiency',
  //   description:
  //     "You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools.",
  // },
  // {
  //   speciesId: speciesIds.duergarSCAG,
  //   name: 'Duergar Magic',
  //   description:
  //     "When you reach 3rd level, you can cast the Enlarge/Reduce spell on yourself once with this trait, using only the spell's enlarge option. When you reach 5th level, you can cast the Invisibility spell on yourself once with this trait. You don't need material components for either spell, and you can't cast them while you're in direct sunlight, although sunlight has no effect on them once cast. You regain the ability to cast these spells with this trait when you finish a long rest.",
  // },
  // {
  //   speciesId: speciesIds.duergarSCAG,
  //   name: 'Stonecunning',
  //   description:
  //     'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.',
  // },
  // {
  //   speciesId: speciesIds.duergarSCAG,
  //   name: 'Superior Darkvision',
  //   description:
  //     "You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
  // },
  // {
  //   speciesId: speciesIds.duergarSCAG,
  //   name: 'Sunlight Sensitivity',
  //   description:
  //     'You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.',
  // },
  // {
  //   speciesId: speciesIds.eladrinMMOM,
  //   name: 'Fey Ancestry',
  //   description:
  //     'You have advantage on saving throws you make to avoid or end the charmed condition on yourself.',
  // },
  // {
  //   speciesId: speciesIds.eladrinMMOM,
  //   name: 'Fey Step',
  //   description:
  //     'As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n\n When you reach 3rd level, your Fey Step gains an additional effect based on your season; if the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Intelligence, Wisdom, or Charisma modifier (choose when you select this species): ',
  //   extendedTable: [
  //     {
  //       '': {
  //         headers: ['Season', 'Effect'],
  //         data: [
  //           {
  //             Season: 'Autumn',
  //             Effect:
  //               'Immediately after you use your Fey Step, up to two creatures of your choice that you can see within 10 feet of you must succeed on a Wisdom saving throw or be charmed by you for 1 minute, or until you or your companions deal any damage to the creatures.',
  //           },
  //           {
  //             Season: 'Winter',
  //             Effect:
  //               'When you use your Fey Step, one creature of your choice that you can see within 5 feet of you before you teleport must succeed on a Wisdom saving throw or be frightened of you until the end of your next turn.',
  //           },
  //           {
  //             Season: 'Spring',
  //             Effect:
  //               'When you use your Fey Step, you can touch one willing creature within 5 feet of you. That creature then teleports instead of you, appearing in an unoccupied space of your choice that you can see within 30 feet of you.',
  //           },
  //           {
  //             Season: 'Summer',
  //             Effect:
  //               'Immediately after you use your Fey Step, each creature of your choice that you can see within 5 feet of you takes fire damage equal to your proficiency bonus.',
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   speciesId: speciesIds.eladrinMMOM,
  //   name: 'Keen Senses',
  //   description: 'You have proficiency in the Perception skill.',
  // },
  // {
  //   speciesId: speciesIds.eladrinMMOM,
  //   name: 'Trance',
  //   description:
  //     'You don’t need to sleep, and magic can’t put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness. \n\nWhenever you finish this trance, you can change your season, and you can gain two proficiencies that you don’t have, each one with a weapon or a tool of your choice selected from the Player’s Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest. Choose your season or roll on the Eladrin Seasons table to determine it randomly.',
  //   extendedTable: [
  //     {
  //       'Eladrin Seasons': {
  //         headers: ['d4', 'Season'],
  //         data: [
  //           {
  //             d4: '1',
  //             Season:
  //               "**Autumn:** peace and goodwill, when summer's harvest is shared with all",
  //           },
  //           {
  //             d4: '2',
  //             Season:
  //               '**Winter:** contemplation and dolor, when the vibrant energy of the world slumbers',
  //           },
  //           {
  //             d4: '3',
  //             Season:
  //               "**Spring:** cheerfulness and celebration, marked by merriment and hope as winter's sorrow passes",
  //           },
  //           {
  //             d4: '4',
  //             Season:
  //               '**Summer:** boldness and aggression, a time of unfettered energy and calls to action',
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   speciesId: speciesIds.edladrinMTOF,
  //   name: 'Fey Ancestry',
  //   description:
  //     "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
  // },
  // {
  //   speciesId: speciesIds.edladrinMTOF,
  //   name: 'Trance',
  //   description: `Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is "trance." While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.`,
  // },
  // {
  //   speciesId: speciesIds.edladrinMTOF,
  //   name: 'Keen Senses',
  //   description: 'You have proficiency in the Perception skill.',
  // },
  // {
  //   speciesId: speciesIds.edladrinMTOF,
  //   name: 'Fey Step',
  //   description:
  //     "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a short or long rest. When you reach 3rd level, your Fey Step gains an additional effect based on your season; if the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Charisma modifier. The effects are as follows: ",
  //   extendedTable: [
  //     {
  //       '': {
  //         headers: ['Season', 'Effect'],
  //         data: [
  //           {
  //             Season: 'Autumn',
  //             Effect:
  //               ' Immediately after you use your Fey Step, up to two creatures of your choice that you can see within 10 feet of you must succeed on a Wisdom saving throw or be charmed by you for 1 minute, or until you or your companions deal any damage to it.',
  //           },
  //           {
  //             Season: 'Winter',
  //             Effect:
  //               'When you use your Fey Step, one creature of your choice that you can see within 5 feet of you before you teleport must succeed on a Wisdom saving throw or be frightened of you until the end of your next turn.',
  //           },
  //           {
  //             Season: 'Spring',
  //             Effect:
  //               'When you use your Fey Step, you can touch one willing creature within 5 feet of you. That creature then teleports instead of you, appearing in an unoccupied space of your choice that you can see within 30 feet of you.',
  //           },
  //           {
  //             Season: 'Summer',
  //             Effect:
  //               'Immediately after you use your Fey Step, each creature of your choice that you can see within 5 feet of you takes fire damage equal to your Charisma modifier (minimum of 1 damage).',
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   speciesId: speciesIds.fairyMMOM,
  //   name: 'Fey Characteristics',
  //   description:
  //     'Infused with the magic of the Feywild, most fairies look like Small elves with insectile wings, but each fairy has a special physical characteristic that sets the fairy apart. For your fairy, roll on the Fey Characteristics table or choose an option from it. You’re also free to come up with your own characteristic if none of the suggestions below fit your character.',
  //   extendedTable: [
  //     {
  //       '': {
  //         headers: ['d8', 'Characteristic'],
  //         data: [
  //           {
  //             d8: '1',
  //             Characteristic: 'Your wings are like those of a bird.',
  //           },
  //           {
  //             d8: '2',
  //             Characteristic: 'You have shimmering, multicolored skin.',
  //           },
  //           {
  //             d8: '3',
  //             Characteristic: 'You have exceptionally large ears.',
  //           },
  //           {
  //             d8: '4',
  //             Characteristic: 'A glittering mist constantly surrounds you.',
  //           },
  //           {
  //             d8: '5',
  //             Characteristic:
  //               'You have a small spectral horn on your forehead, like a little unicorn horn.',
  //           },
  //           {
  //             d8: '6',
  //             Characteristic: 'Your legs are insectile.',
  //           },
  //           {
  //             d8: '7',
  //             Characteristic: 'You smell like fresh brownies.',
  //           },
  //           {
  //             d8: '8',
  //             Characteristic: 'A noticeable, harmless chill surrounds you.',
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   speciesId: speciesIds.fairyMMOM,
  //   name: 'Fairy Magic',
  //   description:
  //     'You know the Druidcraft cantrip. \n\nStarting at 3rd level, you can cast the Faerie Fire spell with this trait. Starting at 5th level, you can also cast the Enlarge/Reduce spell with this trait. Once you cast Faerie Fire or Enlarge/Reduce with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this species).',
  // },
  // {
  //   speciesId: speciesIds.fairyTWBTW,
  //   name: 'Fey Characteristics',
  //   description:
  //     "Infused with the magic of the Feywild, most fairies look like Small elves with insectile wings, but each fairy has a special physical characteristic that sets the fairy apart. For your fairy, roll on the Fey Characteristics table or choose an option from it. You're also free to come up with your own characteristic if none of the suggestions below fit your character.",
  //   extendedTable: [
  //     {
  //       '': {
  //         headers: ['d8', 'Characteristic'],
  //         data: [
  //           {
  //             d8: '1',
  //             Characteristic: 'Your wings are like those of a bird.',
  //           },
  //           {
  //             d8: '2',
  //             Characteristic: 'You have shimmering, multicolored skin.',
  //           },
  //           {
  //             d8: '3',
  //             Characteristic: 'You have exceptionally large ears.',
  //           },
  //           {
  //             d8: '4',
  //             Characteristic: 'A glittering mist constantly surrounds you.',
  //           },
  //           {
  //             d8: '5',
  //             Characteristic:
  //               'You have a small spectral horn on your forehead, like a little unicorn horn.',
  //           },
  //           {
  //             d8: '6',
  //             Characteristic: 'Your legs are insectile.',
  //           },
  //           {
  //             d8: '7',
  //             Characteristic: 'You smell like fresh brownies.',
  //           },
  //           {
  //             d8: '8',
  //             Characteristic: 'A noticeable, harmless chill surrounds you.',
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   speciesId: speciesIds.fairyTWBTW,
  //   name: 'Fairy Magic',
  //   description:
  //     "You know the Druidcraft cantrip. Starting at 3rd level, you can cast the Faerie Fire spell with this trait. Starting at 5th level, you can also cast the Enlarge/Reduce spell with this trait. Once you cast Faerie Fire or Enlarge/Reduce with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level. Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this species).",
  // },
  // {
  //   speciesId: speciesIds.firbolgMMOM,
  //   name: 'Firbolg Magic',
  //   description:
  //     'You can cast the Detect Magic and Disguise Self spells with this trait. When you use this version of Disguise Self, you can seem up to 3 feet shorter or taller. Once you cast either of these spells with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have.\n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this species).',
  // },
  // {
  //   speciesId: speciesIds.firbolgMMOM,
  //   name: 'Hidden Step',
  //   description:
  //     'As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   speciesId: speciesIds.firbolgMMOM,
  //   name: 'Powerful Build',
  //   description:
  //     'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
  // },
  // {
  //   speciesId: speciesIds.firbolgMMOM,
  //   name: 'Speech of Beast and Leaf',
  //   description:
  //     'You have the ability to communicate in a limited manner with Beasts, Plants, and vegetation. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them.',
  // },
  // {
  //   speciesId: speciesIds.firbolgVGTM,
  //   name: 'Firbolg Magic',
  //   description:
  //     "You can cast Detect Magic and Disguise Self with this trait, using Wisdom as your spellcasting ability for them. Once you cast either spell, you can't cast it again with this trait until you finish a short or long rest. When you use this version of disguise self, you can seem up to 3 feet shorter than normal, allowing you to more easily blend in with humans and elves.",
  // },
  // {
  //   speciesId: speciesIds.firbolgVGTM,
  //   name: 'Hidden Step',
  //   description:
  //     "As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. Once you use this trait, you can't use it again until you finish a short or long rest.",
  // },
  // {
  //   speciesId: speciesIds.firbolgVGTM,
  //   name: 'Powerful Build',
  //   description:
  //     'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
  // },
  // {
  //   speciesId: speciesIds.firbolgVGTM,
  //   name: 'Speech of Beast and Leaf',
  //   description:
  //     'You have the ability to communicate in a limited manner with beasts and plants. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them.',
  // },
  {
    id: speciesFeaturesIds.airGenasiMMOMUnendingBreath,
    speciesId: speciesIds.airGenasiMMOM,
    name: 'Unending Breath',
    description:
      'You can hold your breath indefinitely while you’re not incapacitated.',
  },
  {
    id: speciesFeaturesIds.airGenasiMMOMLightningResistance,
    speciesId: speciesIds.airGenasiMMOM,
    name: 'Lightning Resistance',
    description: 'You have resistance to lightning damage.',
    unimplemented: true,
  },
  {
    id: speciesFeaturesIds.airGenasiMMOMMingleWithTheWind,
    speciesId: speciesIds.airGenasiMMOM,
    name: 'Mingle with the Wind',
    description:
      'You know the Shocking Grasp cantrip. Starting at 3rd level, you can cast the Feather Fall spell with this trait, without requiring a material component. Starting at 5th level, you can also cast the Levitate spell with this trait, without requiring a material component. Once you cast Feather Fall or Levitate with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level. \n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this species).',
    effectChainType: ChainType.ADD,
  },
  {
    id: speciesFeaturesIds.airGenasiEEPCUnendingBreath,
    speciesId: speciesIds.airGenasiEEPC,
    name: 'Unending Breath',
    description:
      'You can hold your breath indefinitely while you’re not incapacitated.',
  },
  {
    id: speciesFeaturesIds.airGenasiEEPCMingleWithTheWind,
    speciesId: speciesIds.airGenasiEEPC,
    name: 'Mingle with the Wind',
    description:
      'You can cast the Levitate spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell.',
  },
  {
    id: speciesFeaturesIds.airGenasiEEPCLightningResistance,
    speciesId: speciesIds.airGenasiEEPC,
    name: 'Lightning Resistance',
    description: 'You have resistance to lightning damage.',
    unimplemented: true,
  },
  // {
  //   speciesId: speciesIds.earthGenasiMMOM,
  //   name: 'Earth Walk',
  //   description:
  //     'You can move across difficult terrain without expending extra movement if you are using your walking speed on the ground or a floor.',
  // },
  // {
  //   speciesId: speciesIds.earthGenasiMMOM,
  //   name: 'Merge with Stone',
  //   description: `You know the %${spellIds.bladeWard}{Blade Ward}% cantrip. You can cast it as normal, and you can also cast it as a bonus action a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest. \n\nStarting at 5th level, you can cast the %${spellIds.passWithoutTrace}{Pass Without Trace}% spell with this trait, without requiring a material component. Once you cast that spell with this trait, you can’t do so again until you finish a long rest. You can also cast it using any spell slots you have of 2nd level or higher.\n\nntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).`,
  // },
  // {
  //   speciesId: speciesIds.earthGenasiEEPC,
  //   name: 'Earth Walk',
  //   description:
  //     'You can move across difficult terrain made of earth or stone without expending extra movement.',
  // },
  // {
  //   speciesId: speciesIds.earthGenasiEEPC,
  //   name: 'Merge with Stone',
  //   description:
  //     'You can cast the Pass without Tspecies spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell.',
  // },
  // {
  //   speciesId: speciesIds.fireGenasiMMOM,
  //   name: 'Reach to the Blaze',
  //   description:
  //     'You know the Produce Flame cantrip. Starting at 3rd level, you can cast the Burning Hands spell with this trait. Starting at 5th level, you can also cast the Flame Blade spell with this trait, without requiring a material component. Once you cast Burning Hands or Flame Blade with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this species).',
  // },
  // {
  //   speciesId: speciesIds.fireGenasiMMOM,
  //   name: 'Fire Resistance',
  //   description: 'You have resistance to fire damage.',
  // },
  // {
  //   speciesId: speciesIds.fireGenasiEEPC,
  //   name: 'Fire Resistance',
  //   description: 'You have resistance to fire damage.',
  // },
  // {
  //   speciesId: speciesIds.fireGenasiEEPC,
  //   name: 'Reach to the Blaze',
  //   description:
  //     'You know the Produce Flame cantrip. Once you reach 3rd level, you can cast the Burning Hands spell once with this trait as a 1st-level spell, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells.',
  // },
  // {
  //   speciesId: speciesIds.fireGenasiEEPC,
  //   name: 'Languages',
  //   description:
  //     'You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.',
  // },
  {
    id: speciesFeaturesIds.waterGenasiMMOMAmphibious,
    speciesId: speciesIds.waterGenasiMMOM,
    name: 'Amphibious',
    description: 'You can breathe air and water.',
  },
  {
    id: speciesFeaturesIds.waterGenasiMMOMAcidResistance,
    speciesId: speciesIds.waterGenasiMMOM,
    name: 'Acid Resistance',
    description: 'You have resistance to acid damage.',
    unimplemented: true,
  },
  {
    id: speciesFeaturesIds.waterGenasiMMOMCallToTheWave,
    speciesId: speciesIds.waterGenasiMMOM,
    name: 'Call to the Wave',
    description:
      'You know the Acid Splash cantrip. Starting at 3rd level, you can cast the Create or Destroy Water spell with this trait. Starting at 5th level, you can also cast the Water Walk spell with this trait, without requiring a material component. Once you cast Create or Destroy Water or Water Walk with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level. \n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this species).',
    unimplemented: true,
  },
  // {
  //   speciesId: speciesIds.waterGenasiEEPC,
  //   name: 'Acid Resistance',
  //   description: 'You have resistance to acid damage.',
  // },
  // {
  //   speciesId: speciesIds.waterGenasiEEPC,
  //   name: 'Amphibious',
  //   description: 'You can breathe air and water.',
  // },
  // {
  //   speciesId: speciesIds.waterGenasiEEPC,
  //   name: 'Call to the Wave',
  //   description:
  //     'You know the Shape Water cantrip. When you reach 3rd level, you can cast the Create or Destroy Water spell as a 2nd-level spell once with this trait, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells.',
  // },
  // {
  //   speciesId: speciesIds.githyankiMMOM,
  //   name: 'Githyanki Psionics',
  //   description:
  //     'You know the Mage Hand cantrip, and the hand is invisible when you cast the cantrip with this trait. \n\nStarting at 3rd level, you can cast the Jump spell with this trait. Starting at 5th level, you can also cast the Misty Step spell with it. Once you cast Jump or Misty Step with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this species). None of these spells require spell components when you cast them with this trait.',
  // },
  // {
  //   speciesId: speciesIds.githyankiMMOM,
  //   name: 'Psychic Resilience',
  //   description: 'You have resistance to psychic damage.',
  // },
  // {
  //   speciesId: speciesIds.githyankiMMOM,
  //   name: 'Astral Knowledge',
  //   description:
  //     'You can mystically access a reservoir of experiences of entities connected to the Astral Plane. Whenever you finish a long rest, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the Player’s Handbook, as you momentarily project your consciousness into the Astral Plane. These proficiencies last until the end of your next long rest.',
  // },
  // {
  //   speciesId: speciesIds.githyankiMTOF,
  //   name: 'Decadant Mastery',
  //   description:
  //     "You learn one language of your choice, and you are proficient with one skill or tool of your choice. In the timeless city of Tu'narath, githyanki have bountiful time to master odd bits of knowledge.",
  // },
  // {
  //   speciesId: speciesIds.githyankiMTOF,
  //   name: 'Martial Prodigy',
  //   description:
  //     'You are proficient with light and medium armor and with shortswords, longswords, and greatswords.',
  // },
  // {
  //   speciesId: speciesIds.githyankiMTOF,
  //   name: 'Githyanki Psionics',
  //   description:
  //     "You know the Mage Hand cantrip, and the hand is invisible when you cast the cantrip with this trait.\n\nWhen you reach 3rd level, you can cast the Jump spell once with this trait, and you regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the Misty Step spell once with this trait, and you regain the ability to do so when you finish a long rest.\n\nIntelligence is your spellcasting ability for these spells. When you cast them with this trait, they don't require components.",
  // },
  // {
  //   speciesId: speciesIds.githzeraiMMOM,
  //   name: 'Githzerai Psionics',
  //   description:
  //     'You know the Mage Hand cantrip, and the hand is invisible when you cast the cantrip with this trait.\n\nStarting at 3rd level, you can cast the Shield spell with this trait. Starting at 5th level, you can also cast the Detect Thoughts spell with it. Once you cast Shield or Detect Thoughts with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.\n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this species). None of these spells require spell components when you cast them with this trait.',
  // },
  // {
  //   speciesId: speciesIds.githzeraiMMOM,
  //   name: 'Psychic Resilience',
  //   description: 'You have resistance to psychic damage.',
  // },
  // {
  //   speciesId: speciesIds.githzeraiMMOM,
  //   name: 'Mental Discipline',
  //   description:
  //     'Your innate psychic defenses grant you advantage on saving throws you make to avoid or end the charmed and frightened conditions on yourself.',
  // },
  // {
  //   speciesId: speciesIds.githzeraiMTOF,
  //   name: 'Mental Discipline',
  //   description:
  //     'You have advantage on saving throws against the charmed and frightened conditions. Under the tutelage of monastic masters, githzerai learn to govern their own minds.',
  // },
  // {
  //   speciesId: speciesIds.githzeraiMTOF,
  //   name: 'Githzerai Psionics',
  //   description:
  //     "You know the Mage Hand cantrip, and the hand is invisible when you cast the cantrip with this trait. \n\nWhen you reach 3rd level, you can cast the Shield spell once with this trait, and you regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the Detect Thoughts spell once with this trait, and you regain the ability to do so when you finish a long rest.\n\nWisdom is your spellcasting ability for these spells. When you cast them with this trait, they don't require components.",
  // },
  // {
  //   speciesId: speciesIds.goliathMMOM,
  //   name: 'Little Giant',
  //   description:
  //     'You have proficiency in the Athletics skill, and you count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
  // },
  // {
  //   speciesId: speciesIds.goliathMMOM,
  //   name: 'Mountain Born',
  //   description:
  //     'You have resistance to cold damage. You also naturally acclimate to high altitudes, even if you’ve never been to one. This includes elevations above 20,000 feet.',
  // },
  // {
  //   speciesId: speciesIds.goliathMMOM,
  //   name: "Stone's Endurance",
  //   description:
  //     'You can supernaturally draw on unyielding stone to shrug off harm. When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled and reduce the damage by that total. \n\nYou can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   speciesId: speciesIds.goliathEEPC,
  //   name: 'Natural Athlete',
  //   description: 'You have proficiency in the Athletics skill.',
  // },
  {
    id: speciesFeaturesIds.stonesEnduranceGolaithEEPC,
    speciesId: speciesIds.goliathEEPC,
    name: "Stone's Endurance",
    description:
      'You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled, and reduce the damage by that total. After you use this trait, you can’t use it again until you finish a short or long rest.',
    unimplemented: true,
  },
  {
    id: speciesFeaturesIds.powerfulBuildGolaithEEPC,
    speciesId: speciesIds.goliathEEPC,
    name: 'Powerful Build',
    description:
      'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
    unimplemented: true,
  },
  {
    id: speciesFeaturesIds.mountainBornGolaithEEPC,
    speciesId: speciesIds.goliathEEPC,
    name: 'Mountain Born',
    description:
      'You have resistance to cold damage. You’re also acclimated to high altitude, including elevations above 20,000 feet.',
    unimplemented: true,
  },
  {
    id: speciesFeaturesIds.luckyFootworkHarengonMMOM,
    speciesId: speciesIds.harengonMMOM,
    effectChainType: ChainType.ADD,
    name: 'Lucky Footwork',
    description:
      "When you fail a Dexterity saving throw, you can use your reaction to roll a d4 and add it to the save, potentially turning the failure into a success. You can't use this reaction if you're prone or your speed is 0.",
  },
  {
    id: speciesFeaturesIds.rabbitHopHarengonMMOM,
    speciesId: speciesIds.harengonMMOM,
    effectChainType: ChainType.ADD,
    name: 'Rabbit Hop',
    description:
      'As a bonus action, you can jump a number of feet equal to five times your proficiency bonus, without provoking opportunity attacks. You can use this trait only if your speed is greater than 0. You can use it a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  },
  {
    id: speciesFeaturesIds.hareTriggerHarengonMMOM,
    effectChainType: ChainType.ADD,
    speciesId: speciesIds.harengonMMOM,
    name: 'Hare Trigger',
    description: 'You can add your proficiency bonus to your initiative rolls.',
  },
  {
    id: speciesFeaturesIds.leoprineSensesHarengonMMOM,
    speciesId: speciesIds.harengonMMOM,
    effectChainType: ChainType.ADD,
    name: 'Leoprine Senses',
    description: 'You have proficiency in the Perception skill.',
  },
  // {
  //   speciesId: speciesIds.harengonTWBTW,
  //   name: 'Lucky Footwork',
  //   description:
  //     "When you fail a Dexterity saving throw, you can use your reaction to roll a d4 and add it to the save, potentially turning the failure into a success. You can't use this reaction if you're prone or your speed is 0.",
  // },
  // {
  //   speciesId: speciesIds.harengonTWBTW,
  //   name: 'Rabbit Hop',
  //   description:
  //     'As a bonus action, you can jump a number of feet equal to five times your proficiency bonus, without provoking opportunity attacks. You can use this trait only if your speed is greater than 0. You can use it a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   speciesId: speciesIds.harengonTWBTW,
  //   name: 'Hare Trigger',
  //   description: 'You can add your proficiency bonus to your initiative rolls.',
  // },
  // {
  //   speciesId: speciesIds.harengonTWBTW,
  //   name: 'Leoprine Senses',
  //   description: 'You have proficiency in the Perception skill.',
  // },
  // {
  //   speciesId: speciesIds.kenkuMMOM,
  //   name: 'Expert Duplication',
  //   description:
  //     'When you copy writing or craftwork produced by yourself or someone else, you have advantage on any ability checks you make to produce an exact duplicate.',
  // },
  // {
  //   speciesId: speciesIds.kenkuMMOM,
  //   name: 'Kenku Recall',
  //   description:
  //     'Thanks to your supernaturally good memory, you have proficiency in two skills of your choice. \n\nMoreover, when you make an ability check using any skill in which you have proficiency, you can give yourself advantage on the check before rolling the d20. You can give yourself advantage in this way a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   speciesId: speciesIds.kenkuMMOM,
  //   name: 'Mimicry',
  //   description:
  //     'You can accurately mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations only with a successful Wisdom (Insight) check against a DC of 8 + your proficiency bonus + your Charisma modifier.',
  // },
  // {
  //   speciesId: speciesIds.kenkuVGM,
  //   name: 'Expert Forgery',
  //   description:
  //     "You can duplicate other creatures' handwriting and craftwork. You have advantage on all checks made to produce forgeries or duplicates of existing objects.",
  // },
  // {
  //   speciesId: speciesIds.kenkuVGM,
  //   name: 'Kenku Training',
  //   description:
  //     'You are proficient in your choice of two of the following skills: Acrobatics, Deception, Stealth, and Sleight of Hand.',
  // },
  // {
  //   speciesId: speciesIds.kenkuVGM,
  //   name: 'Mimicry',
  //   description:
  //     'You can mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations with a successful Wisdom (Insight) check opposed by your Charisma (Deception) check.',
  // },
  // {
  //   speciesId: speciesIds.locathah,
  //   name: 'Natural Armor',
  //   description:
  //     'You have tough, scaly skin. When you aren’t wearing armor, your AC is 12 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield’s benefits apply as normal while you use your natural armor.',
  // },
  // {
  //   speciesId: speciesIds.locathah,
  //   name: 'Observant and Athletic',
  //   description: 'You have proficiency in the Athletics and Perception skills.',
  // },
  // {
  //   speciesId: speciesIds.locathah,
  //   name: 'Leviathan Will',
  //   description:
  //     'You have advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep.',
  // },
  // {
  //   speciesId: speciesIds.locathah,
  //   name: 'Limited Amphibiousness',
  //   description:
  //     'You can breathe air and water, but you need to be submerged at least once every 4 hours to avoid suffocating.',
  // },
  // {
  //   speciesId: speciesIds.owlin,
  //   name: 'Flight',
  //   description:
  //     "Thanks to your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.",
  // },
  // {
  //   speciesId: speciesIds.owlin,
  //   name: 'Silent Feathers',
  //   description: 'You have proficiency in the Stealth skill.',
  // },
  // {
  //   speciesId: speciesIds.satyr,
  //   name: 'Ram',
  //   description:
  //     'You can use your head and horns to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier bludgeoning damage, instead of the bludgeoning damage normal for an unarmed strike.',
  // },
  // {
  //   speciesId: speciesIds.satyr,
  //   name: 'Magic Resistance',
  //   description: 'You have advantage on saving throws against spells.',
  // },
  // {
  //   speciesId: speciesIds.satyr,
  //   name: 'Mirthful Leaps',
  //   description:
  //     'Whenever you make a long jump or a high jump, you can roll a d8 and add the number rolled to the number of feet you cover, even when making a standing jump. This extra distance costs movement as normal.',
  // },
  // {
  //   speciesId: speciesIds.satyr,
  //   name: 'Reveler',
  //   description:
  //     'As an embodiment of revelry, you have proficiency in the Performance and Persuasion skills, and you have proficiency with one musical instrument of your choice.',
  // },
  // {
  //   speciesId: speciesIds.satyrMOOT,
  //   name: 'Magic Resistance',
  //   description: 'You have advantage on saving throws against spells.',
  // },
  // {
  //   speciesId: speciesIds.satyrMOOT,
  //   name: 'Mirthful Leaps',
  //   description:
  //     'Whenever you make a long or high jump, you can roll a d8 and add the number to the number of feet you cover, even when making a standing jump. This extra distance costs movement as normal.',
  // },
  // {
  //   speciesId: speciesIds.satyrMOOT,
  //   name: 'Revelry',
  //   description:
  //     'You have proficiency in the Performance and Persuasion skills, and you have proficiency with one musical instrument of your choice.',
  // },
  // {
  //   speciesId: speciesIds.seaElfMMOM,
  //   name: 'Child of the Sea',
  //   description:
  //     'You can breathe air and water, and you have resistance to cold damage.',
  // },

  // {
  //   speciesId: speciesIds.seaElfMMOM,
  //   name: 'Superior Darkvision',
  //   description:
  //     'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.',
  // },
  // {
  //   speciesId: speciesIds.seaElfMMOM,
  //   name: 'Friend of the Sea',
  //   description:
  //     '    Aquatic animals have an extraordinary affinity with your people. You can communicate simple ideas to any Beast that has a swimming speed. It can understand your words, though you have no special ability to understand it in return.',
  // },
  // {
  //   speciesId: speciesIds.seaElfMMOM,
  //   name: 'Keen Senses',
  //   description: 'You have proficiency in the Perception skill.',
  // },
  // {
  //   speciesId: speciesIds.seaElfMMOM,
  //   name: 'Trance',
  //   description:
  //     'You don’t need to sleep, and magic can’t put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness. \n\nWhenever you finish this trance, you can gain two proficiencies that you don’t have, each one with a weapon or a tool of your choice selected from the Player’s Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest.',
  // },
  // {
  //   speciesId: speciesIds.seaElfMTOF,
  //   name: 'Child of the Sea',
  //   description:
  //     'You can breathe air and water, and you have a swimming speed of 30 feet.',
  // },
  // {
  //   speciesId: speciesIds.seaElfMTOF,
  //   name: 'Friend of the Sea',
  //   description:
  //     'Using gestures and sounds, you can communicate simple ideas with any beast that has an innate swimming speed.',
  // },
  // {
  //   speciesId: speciesIds.seaElfMTOF,
  //   name: 'Sea Elf Training',
  //   description:
  //     'You have proficiency with the spear, trident, light crossbow, and net.',
  // },
  // {
  //   speciesId: speciesIds.seaElfMTOF,
  //   name: 'Keen Senses',
  //   description: 'You have proficiency in the Perception skill.',
  // },
  // {
  //   speciesId: speciesIds.seaElfMTOF,
  //   name: 'Trance',
  //   description: `Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is "trance." While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.`,
  // },
  // {
  //   speciesId: speciesIds.seaElfMTOF,
  //   name: 'Fey Ancestry',
  //   description:
  //     "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
  // },
  // {
  //   speciesId: speciesIds.shadarKai,
  //   name: 'Blessing of the Raven Queen',
  //   description:
  //     'As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest. \n\nStarting at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent.',
  // },
  // {
  //   speciesId: speciesIds.shadarKai,
  //   name: 'Necrotic Resistance',
  //   description: 'You have resistance to necrotic damage.',
  // },
  // {
  //   speciesId: speciesIds.shadarKai,
  //   name: 'Trance',
  //   description:
  //     'You don’t need to sleep, and magic can’t put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness. \n\nWhenever you finish this trance, you can gain two proficiencies that you don’t have, each one with a weapon or a tool of your choice selected from the Player’s Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest.',
  // },
  // {
  //   speciesId: speciesIds.shadarKai,
  //   name: 'Fey Ancestry',
  //   description:
  //     'You have advantage on saving throws you make to avoid or end the charmed condition on yourself.',
  // },
  // {
  //   speciesId: speciesIds.shadarKaiMTOF,
  //   name: 'Fey Ancestry',
  //   description:
  //     "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
  // },
  // {
  //   speciesId: speciesIds.shadarKaiMTOF,
  //   name: 'Trance',
  //   description: `Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is "trance." While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.`,
  // },
  // {
  //   speciesId: speciesIds.shadarKaiMTOF,
  //   name: 'Blessing of the Raven Queen',
  //   description:
  //     "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a long rest. Starting at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent.",
  // },
  // {
  //   speciesId: speciesIds.shadarKaiMTOF,
  //   name: 'Keen Senses',
  //   description: 'You have proficiency in the Perception skill.',
  // },
  // {
  //   speciesId: speciesIds.tabaxiMMOM,
  //   name: "Cat's Claws",
  //   description:
  //     'You can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.',
  // },
  // {
  //   speciesId: speciesIds.tabaxiMMOM,
  //   name: "Cat's Talent",
  //   description: 'You have proficiency in the Perception and Stealth skills.',
  // },
  // {
  //   speciesId: speciesIds.tabaxiMMOM,
  //   name: 'Feline Agility',
  //   description:
  //     'Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can’t use it again until you move 0 feet on one of your turns.',
  // },
  // {
  //   speciesId: speciesIds.tabaxiVGTM,
  //   name: "Cat's Claws",
  //   description:
  //     'Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
  // },
  // {
  //   speciesId: speciesIds.tabaxiVGTM,
  //   name: "Cat's Talent",
  //   description: 'You have proficiency in the Perception and Stealth skills.',
  // },
  // {
  //   speciesId: speciesIds.tabaxiVGTM,
  //   name: 'Feline Agility',
  //   description:
  //     "Your reflexes and agility allow you to move with a burst of speed. When you move on your tum in combat, you can double your speed until the end of the tum. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.",
  // },
  // {
  //   speciesId: speciesIds.tortleMMOM,
  //   name: 'Claws',
  //   description:
  //     'You have claws that you can use to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.',
  // },
  // {
  //   speciesId: speciesIds.tortleMMOM,
  //   name: 'Hold Breath',
  //   description: 'You can hold your breath for up to 1 hour.',
  // },
  // {
  //   speciesId: speciesIds.tortleMMOM,
  //   name: 'Natural Armor',
  //   description:
  //     'Your shell provides you a base AC of 17 (your Dexterity modifier doesn’t affect this number). You can’t wear light, medium, or heavy armor, but if you are using a shield, you can apply the shield’s bonus as normal.',
  // },
  // {
  //   speciesId: speciesIds.tortleMMOM,
  //   name: "Nature's Intuition",
  //   description:
  //     'Thanks to your mystical connection to nature, you gain proficiency with one of the following skills of your choice: Animal Handling, Medicine, Nature, Perception, Stealth, or Survival.',
  // },
  // {
  //   speciesId: speciesIds.tortleMMOM,
  //   name: 'Shell Defense',
  //   description:
  //     'You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to your AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are prone, your speed is 0 and can’t increase, you have disadvantage on Dexterity saving throws, you can’t take reactions, and the only action you can take is a bonus action to emerge from your shell.',
  // },
  // {
  //   speciesId: speciesIds.tortleTP,
  //   name: 'Claws',
  //   description:
  //     'Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
  // },
  // {
  //   speciesId: speciesIds.tortleTP,
  //   name: 'Hold Breath',
  //   description:
  //     "You can hold your breath for up to 1 hour at a time. Tortles aren't natural swimmers, but they can remain underwater for some time before needing to come up for air.",
  // },
  // {
  //   speciesId: speciesIds.tortleTP,
  //   name: 'Natural Armor',
  //   description:
  //     "Due to your shell and the shape of your body, you are ill-suited to wearing armor. Your shell provides ample protection, however; it gives you a base AC of 17 (your Dexterity modifier doesn't affect this number). You gain no benefit from wearing armor, but if you are using a shield, you can apply the shield's bonus as normal.",
  // },
  // {
  //   speciesId: speciesIds.tortleTP,
  //   name: 'Shell Defense',
  //   description:
  //     "You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are prone, your speed is 0 and can't increase, you have disadvantage on Dexterity saving throws, you can't take reactions, and the only action you can take is a bonus action to emerge from your shell.",
  // },
  // {
  //   speciesId: speciesIds.tortleTP,
  //   name: 'Survival Instinct',
  //   description:
  //     'You gain proficiency in the Survival skill. Tortles have finely honed survival instincts.',
  // },
  // {
  //   speciesId: speciesIds.tritonMMOM,
  //   name: 'Control Air and Water',
  //   description:
  //     'You can cast Fog Cloud with this trait. Starting at 3rd level, you can cast the Gust of Wind spell with this trait. Starting at 5th level, you can also cast the Water Walk spell with it. Once you cast any of these spells with this trait, you can’t cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have of the appropriate level. \n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this species).',
  // },
  // {
  //   speciesId: speciesIds.tritonMMOM,
  //   name: 'Amphibious',
  //   description: 'You can breathe air and water.',
  // },
  // {
  //   speciesId: speciesIds.tritonMMOM,
  //   name: 'Emissary of the Sea',
  //   description:
  //     'You can communicate simple ideas to any Beast, Elemental, or Monstrosity that has a swimming speed. It can understand your words, though you have no special ability to understand it in return.',
  // },
  // {
  //   speciesId: speciesIds.tritonMMOM,
  //   name: 'Guardians of the Depths',
  //   description:
  //     'Adapted to the frigid ocean depths, you have resistance to cold damage.',
  // },
  // {
  //   speciesId: speciesIds.tritonVGTM,
  //   name: 'Amphibious',
  //   description: 'You can breathe air and water.',
  // },
  // {
  //   speciesId: speciesIds.tritonVGTM,
  //   name: 'Control Air and Water',
  //   description:
  //     'A child of the sea, you can call on the magic of elemental air and water. You can cast Fog Cloud with this trait. Starting at 3rd level, you can cast Gust of Wind with it, and starting at 5th level, you can also cast Wall of Water with it. Once you cast a spell with this trait, you can’t cast that spell with it again until you finish a long rest. Charisma is your spellcasting ability for these spells.',
  // },
  // {
  //   speciesId: speciesIds.tritonVGTM,
  //   name: 'Emissary of the Sea',
  //   description:
  //     'Aquatic beasts have an extraordinary affinity with your people. You can communicate simple ideas with beasts that can breathe water. They can understand the meaning of your words, though you have no special ability to understand them in return.',
  // },
  // {
  //   speciesId: speciesIds.tritonVGTM,
  //   name: 'Guardians of the Depths',
  //   description:
  //     'Adapted to even the most extreme ocean depths, you have resistance to cold damage.',
  // },
  // {
  //   speciesId: speciesIds.verdan,
  //   name: 'Black Blood Healing',
  //   description:
  //     'When you roll either 1 or 2 on any Hit Die, you can instantly re-roll the die and take the new roll.',
  // },
  // {
  //   speciesId: speciesIds.verdan,
  //   name: 'Limited Telepathy',
  //   description:
  //     'You can telepathically speak to any creature within 30 feet. You do not have to share a language to speak, however, they must be able to speak a language. You can only communicate simple ideas.',
  // },
  // {
  //   speciesId: speciesIds.verdan,
  //   name: 'Persuasive',
  //   description:
  //     "Your people's lack of history makes you trustworthy and humble. You have proficiency in the Persuasion skill.",
  // },
  // {
  //   speciesId: speciesIds.verdan,
  //   name: 'Telepathic Insight',
  //   description: 'You have advantage on all Wisdom and Charisma saving throws.',
  // },
  // {
  //   speciesId: speciesIds.kender,
  //   name: 'Fearless',
  //   description:
  //     "You have advantage on saving throws you make to avoid or end the frightened condition on yourself. When you fail a saving throw to avoid or end the frighted condition on yourself, you can choose to succeed instead. Once you succeed on a saving throw in this way, you can't do so again until you finish a long rest.",
  // },
  // {
  //   speciesId: speciesIds.kender,
  //   name: 'Kender Aptitude',
  //   description:
  //     'Thanks to the mystical origin of your people, you gain proficiency with one of the following skills of your choice: Insight, Investigation, Sleight of Hand, Stealth, or Survival.',
  // },
  // {
  //   speciesId: speciesIds.kender,
  //   name: 'Taunt',
  //   description:
  //     'You have an extraordinary ability to fluster creatures. As a bonus action, you can unleash a string of provoking words at a creature within 60 feet of yourself that can hear and understand you. The target must succeed on a Wisdom saving throw or it has disadvantage on attack rolls against targets other than you until the start of your next turn. The DC equals 8 + your proficiency bonus + your Intelligence, Wisdom, or Charisma modifier (choose when you select this species). You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   speciesId: speciesIds.kalashtar,
  //   name: 'Dual Mind',
  //   description: 'You have advantage on all Wisdom saving throws.',
  // },
  // {
  //   speciesId: speciesIds.kalashtar,
  //   name: 'Mental Discipline',
  //   description: 'You have resistance to psychic damage.',
  // },
  // {
  //   speciesId: speciesIds.kalashtar,
  //   name: 'Mind Link',
  //   description:
  //     "You can speak telepathically to any creature you can see, provided the creature is within a number of feet of you equal to 10 times your level. You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language. \n\nWhen you're using this trait to speak telepathically to a creature, you can use your action to give that creature the ability to speak telepathically with you for 1 hour or until you end this effect as an action. To use this ability, the creature must be able to see you and must be within this trait's range. You can give this ability to only one creature at a time; giving it to a creature takes it away from another creature who has it.",
  // },
  // {
  //   speciesId: speciesIds.kalashtar,
  //   name: 'Severed from Dreams',
  //   description:
  //     'Kalashtar sleep, but they don’t connect to the plane of dreams as other creatures do. Instead, their minds draw from the memories of their otherworldly spirit while they sleep. As such, you are immune to magical spells and effects that require you to dream, like the Dream spell, but not to spells and effects that put you to sleep, like the Sleep spell.',
  // },
  {
    id: speciesFeaturesIds.constructedResilienceWarforgedMMOM,
    effectChainType: ChainType.ADD,
    speciesId: speciesIds.warforged,
    name: 'Constructed Resilience',
    description:
      'You were created to have remarkable fortitude, represented by the following benefits: ',
    options: [
      'You have advantage on saving throws against being poisoned, and you have resistance to poison damage.',
      'You are immune to disease.',
      'You don’t need to eat, drink, or breathe.',
      "You don't need to sleep, and magic can't put you to sleep.",
    ],
    unimplemented: true,
  },
  {
    id: speciesFeaturesIds.sentrysRestWarforgedMMOM,
    speciesId: speciesIds.warforged,
    effectChainType: ChainType.ADD,
    name: "Sentry's Rest",
    description:
      'When you take a long rest, you must spend at least six hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn’t render you unconscious, and you can see and hear as normal.',
  },
  {
    id: speciesFeaturesIds.integratedProtectionWarforgedMMOM,
    speciesId: speciesIds.warforged,
    effectChainType: ChainType.ADD,
    name: 'Integrated Protection',
    description:
      'Your body has built-in defensive layers, which can be enhanced with armor.',
    options: [
      'You gain a +1 bonus to Armor Class.',
      'You can don only armor with which you have proficiency. To don armor, you must incorporate it into your body over the course of 1 hour, during which you must remain in contact with the armor. To doff armor, you must spend 1 hour removing it. You can rest while donning or doffing armor in this way.',
      "While you live, your armor can't be removed from your body against your will.",
    ],
  },
  {
    id: speciesFeaturesIds.specializedDesignWarforgedMMOM,
    speciesId: speciesIds.warforged,
    effectChainType: ChainType.ADD,
    name: 'Specialized Design',
    description:
      'You gain one skill proficiency and one tool proficiency of your choice.',
  },
  // {
  //   speciesId: speciesIds.bugbearMMOM,
  //   name: 'Fey Ancestry',
  //   description:
  //     'You have advantage on saving throws you make to avoid or end the charmed condition on yourself.',
  // },
  // {
  //   speciesId: speciesIds.bugbearMMOM,
  //   name: 'Long-Limbed',
  //   description:
  //     'When you make a melee attack on your turn, your reach for it is 5 feet greater than normal.',
  // },
  // {
  //   speciesId: speciesIds.bugbearMMOM,
  //   name: 'Powerful Build',
  //   description:
  //     'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
  // },
  // {
  //   speciesId: speciesIds.bugbearMMOM,
  //   name: 'Sneaky',
  //   description:
  //     'You are proficient in the Stealth skill. In addition, without squeezing, you can move through and stop in a space large enough for a Small creature.',
  // },
  // {
  //   speciesId: speciesIds.bugbearMMOM,
  //   name: 'Surprise Attack',
  //   description:
  //     'If you hit a creature with an attack roll, the creature takes an extra 2d6 damage if it hasn’t taken a turn yet in the current combat.',
  // },
  // {
  //   speciesId: speciesIds.bugbearVGTM,
  //   name: 'Long-Limbed',
  //   description:
  //     'When you make a melee attack on your turn, your reach for it is 5 feet greater than normal.',
  // },
  // {
  //   speciesId: speciesIds.bugbearVGTM,
  //   name: 'Sneaky',
  //   description: 'You are proficient in the Stealth skill.',
  // },
  // {
  //   speciesId: speciesIds.bugbearVGTM,
  //   name: 'Powerful Build',
  //   description:
  //     'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
  // },
  // {
  //   speciesId: speciesIds.bugbearVGTM,
  //   name: 'Surprise Attack',
  //   description:
  //     'If you surprise a creature and hit it with an attack on your first turn in combat, the attack deals an extra 2d6 damage to it. You can use this trait only once per combat.',
  // },
  // {
  //   speciesId: speciesIds.centaurMMOM,
  //   name: 'Charge',
  //   description:
  //     'If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack on the same turn, you can immediately follow that attack with a bonus action, making one attack against the target with your hooves.',
  // },
  // {
  //   speciesId: speciesIds.centaurMMOM,
  //   name: 'Equine Build',
  //   description:
  //     'You count as one size larger when determining your carrying capacity and the weight you can push or drag. \n\nIn addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet instead of the normal 1 extra foot.',
  // },
  // {
  //   speciesId: speciesIds.centaurMMOM,
  //   name: 'Hooves',
  //   description:
  //     'You have hooves that you can use to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier bludgeoning damage, instead of the bludgeoning damage normal for an unarmed strike.',
  // },
  // {
  //   speciesId: speciesIds.centaurMMOM,
  //   name: 'Natural Affinity',
  //   description:
  //     'Your fey connection to nature gives you an intuitive connection to the natural world and the animals within it. You therefore have proficiency in one of the following skills of your choice: Animal Handling, Medicine, Nature, or Survival.',
  // },
  // {
  //   speciesId: speciesIds.centaurGGR,
  //   name: 'Charge',
  //   description:
  //     ' If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack on the same turn, you can immediately follow that attack with a bonus action, making one attack against the target with your hooves.',
  // },
  // {
  //   speciesId: speciesIds.centaurGGR,
  //   name: 'Equine Build',
  //   description:
  //     'You count as one size larger when determining your carrying capacity and the weight you can push or drag. In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet, instead of the normal 1 extra foot.',
  // },
  // {
  //   speciesId: speciesIds.centaurGGR,
  //   name: 'Hooves',
  //   description:
  //     'Your hooves are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to 1d4 + your Strength modifier.',
  // },
  // {
  //   speciesId: speciesIds.centaurGGR,
  //   name: 'Survivor',
  //   description:
  //     'You have proficiency in one of the following skills: Animal Handling, Medicine, Nature, or Survival',
  // },
  // {
  //   speciesId: speciesIds.centaurMOOT,
  //   name: 'Charge',
  //   description:
  //     'If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack on the same turn, you can immediately follow that attack with a bonus action, making one attack against the target with your hooves.',
  // },
  // {
  //   speciesId: speciesIds.centaurMOOT,
  //   name: 'Hooves',
  //   description:
  //     'Your hooves are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
  // },
  // {
  //   speciesId: speciesIds.centaurMOOT,
  //   name: 'Equine Build',
  //   description:
  //     'You count as one size larger when determining your carrying capacity and the weight you can push or drag. In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet, instead of the normal 1 extra foot.',
  // },
  // {
  //   speciesId: speciesIds.centaurMOOT,
  //   name: 'Survivor',
  //   description:
  //     'You have proficiency in one of the following skills: Animal Handling, Medicine, Nature, or Survival.',
  // },
  // {
  //   speciesId: speciesIds.golbinMMOM,
  //   name: 'Fury of the Small',
  //   description:
  //     'When you damage a creature with an attack or a spell and the creature’s size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your proficiency bonus. ',
  // },
  // {
  //   speciesId: speciesIds.golbinMMOM,
  //   name: 'Nimble Escape',
  //   description:
  //     'You can use this trait a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest, and you can use it no more than once per turn.',
  // },
  // {
  //   speciesId: speciesIds.golbinMMOM,
  //   name: 'Fey Ancestry',
  //   description:
  //     'You have advantage on saving throws you make to avoid or end the charmed condition on yourself.',
  // },
  // {
  //   speciesId: speciesIds.goblinVGM,
  //   name: 'Fury of the Small',
  //   description:
  //     "When you damage a creature with an attack or a spell and the creature's size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your level. Once you use this trait, you can't use it again until you finish a short or long rest.",
  // },
  // {
  //   speciesId: speciesIds.goblinVGM,
  //   name: 'Nimble Escape',
  //   description:
  //     'You can take the Disengage or Hide action as a bonus action on each of your turns.',
  // },
  // {
  //   speciesId: speciesIds.golbinAwMD,
  //   name: 'Speak with Small Beasts',
  //   description:
  //     'Through sounds nad gestures you can communicate simple ideas with Small of smaller beasts. Dankwood goblins love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.',
  // },
  // {
  //   speciesId: speciesIds.golbinAwMD,
  //   name: 'Nimble Escape',
  //   description:
  //     'You can take the Disengage or Hide action as a bonus action on each of your turns.',
  // },
  // {
  //   speciesId: speciesIds.golbinPSI,
  //   name: 'Agile Climber',
  //   description:
  //     "You have a climbing speed of 25 feet. You can't use your climbing speed while you wear medium or heavy armor. ",
  // },
  // {
  //   speciesId: speciesIds.golbinPSZ,
  //   name: 'Grit',
  //   description:
  //     'You have resistance to fire damage and psychic damage. In addition, when you are wearing no armor, your AC is equal to 11 + your Dexterity modifier.',
  // },
  // {
  //   name: 'Tribe',
  //   speciesId: speciesIds.golbinPSZ,
  //   description:
  //     'Most goblins on Zendikar belong to one of three tribes: the Grotag, the Lavastep, and the Tuktuk. Choose one of these tribes. ',
  //   extendedTable: [
  //     {
  //       'Goblin Tribes': {
  //         headersLength: [15, 60, 25],
  //         headers: ['Tribe', 'Description', 'Feature'],
  //         data: [
  //           {
  //             Tribe: 'Grotag',
  //             Description:
  //               'Smaller and weaker than their cousins, and with larger hands and feet, goblins of the Grotag tribe attempt to live by their wits-though seldom with much success. When a Grotag goblin has the bright idea of trying to tame fleshpiercer mites, at least a few others will be willing to follow that goblin into a nest-usually to predictably horrible results. But though the Grotag seem to have a never-ending supply of bad ideas, and a horrible ratio of bad ideas to good, the Grotag likewise seem to have a never-ending supply of Grotag. As such, by trial and error (and more error), these goblins have stumbled across a great deal of knowledge useful for surviving the deep places of Zendikar, and for dealing with the creatures that live there. The Grotag imagine themselves to have a sort of empathy with beasts, and they lose hundreds of goblins each year to ill-advised attempts at monster taming. But, every now and again, one of these efforts is successful.',
  //             Feature:
  //               '**Grotag Tamer:** You have proficiency in the Animal Handling skill.',
  //           },
  //           {
  //             Tribe: 'Lavastep',
  //             Description:
  //               'The Lavastep tribe is the most industrious of the goblin tribes, and possesses much hard-won knowledge of the geothermal activity in Akoum. More so than members of the other tribes, the Lavastep goblins build surprisingly effective equipment out of the crystal shards and veins of strange metals that occasionally boil up to the surface. The most warlike of their kind, Lavastep goblins frequently harass the kor, elves, and humans of Akoum.',
  //             Feature:
  //               '**Lavastep Grit:** You have advantage on Dexterity (Stealth) checks made to hide in rocky or subterranean environments.',
  //           },
  //           {
  //             Tribe: 'Tuktuk',
  //             Description:
  //               'Among the goblins, the Tuktuk are most likely to hire themselves out as ruin guides to other races. Of course, their usual plan is to help find something of value, steal it, trigger a trap intentionally, and then run.',
  //             Feature:
  //               "**Tuktuk Cunning.** You have proficiency with thieves' tools.",
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   speciesId: speciesIds.grung,
  //   name: 'Arboreal Alertness',
  //   description: 'You have proficiency in the Perception skill.',
  // },
  // {
  //   speciesId: speciesIds.grung,
  //   name: 'Poisonous Skin',
  //   description:
  //     'Any creature that grapples you or otherwise comes into direct contact with your skin must succeed on a DC 12 Constitution saving throw or become poisoned for 1 minute. A poisoned creature no longer in direct contact with you can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\nYou can also apply this poison to any piercing weapon as part of an attack with that weapon, though when you hit the poison reacts differently. The target must succeed on a DC 12 Constitution saving throw or take 2d4 poison damage. ',
  // },
  // {
  //   speciesId: speciesIds.grung,
  //   name: 'Standing Leap',
  //   description:
  //     'Your long jump is up to 25 feet and your high jump is up to 15 feet, with or without a running start.',
  // },
  // {
  //   speciesId: speciesIds.grung,
  //   name: 'Poison Immunity',
  //   description: 'You are immune to poison damage and the poisoned condition.',
  // },
  // {
  //   speciesId: speciesIds.grung,
  //   name: 'Water Dependency',
  //   description:
  //     'If you fail to immerse yourself in water for at least 1 hour during a day, you suffer 1 level of exhaustion at the end of that day. You can recover from this exhaustion only through magic or by immersing yourself in water for at least 1 hour.',
  // },
  // {
  //   speciesId: speciesIds.hobgoblinMMOM,
  //   name: 'Fey Ancestry',
  //   description:
  //     'You have advantage on saving throws you make to avoid or end the charmed condition on yourself.',
  // },
  // {
  //   speciesId: speciesIds.hobgoblinMMOM,
  //   name: 'Fey Gift',
  //   description:
  //     'You can use this trait to take the Help action as a bonus action, and you can do so a number of times equal to your proficiency bonus. You regain all expended uses when you finish a long rest.\n\nStarting at 3rd level, choose one of the options below each time you take the Help action with this trait: ',
  //   extendedTable: [
  //     {
  //       '': {
  //         headers: ['Option', 'Effect'],
  //         data: [
  //           {
  //             Option: 'Hospitality',
  //             Effect:
  //               'You and the creature you help each gain a number of temporary hit points equal to 1d6 plus your proficiency bonus.',
  //           },
  //           {
  //             Option: 'Passage',
  //             Effect:
  //               'You and the creature you help each increase your walking speeds by 10 feet until the start of your next turn.',
  //           },
  //           {
  //             Option: 'Spite',
  //             Effect:
  //               'Until the start of your next turn, the first time the creature you help hits a target with an attack roll, that target has disadvantage on the next attack roll it makes within the next minute.',
  //           },
  //         ],
  //       },
  //     },
  //   ],
  //   levels: [1, 3],
  // },
  // {
  //   speciesId: speciesIds.hobgoblinMMOM,
  //   name: 'Fortune from the Many',
  //   description:
  //     'If you miss with an attack roll or fail an ability check or a saving throw, you can draw on your bonds of reciprocity to gain a bonus to the roll equal to the number of allies you can see within 30 feet of you (maximum bonus of +3). You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   speciesId: speciesIds.hobgoblinVGTM,
  //   name: 'Martial Training',
  //   description:
  //     'You are proficient with two martial weapons of your choice and with light armor.',
  // },
  // {
  //   speciesId: speciesIds.hobgoblinVGTM,
  //   name: 'Saving Face',
  //   description:
  //     "Hobgoblins are careful not to show weakness in front of their allies, for fear of losing status. If you miss with an attack roll or fail an ability check or a saving throw, you can gain a bonus to the roll equal to the number of allies you can see within 30 feet of you (maximum bonus of +5). Once you use this trait, you can't use it again until you finish a short or long rest.",
  // },
  // {
  //   speciesId: speciesIds.koboldMMOM,
  //   name: 'Draconic Cry',
  //   description:
  //     'As a bonus action, you let out a cry at your enemies within 10 feet of you. Until the start of your next turn, you and your allies have advantage on attack rolls against any of those enemies who could hear you. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   speciesId: speciesIds.koboldMMOM,
  //   name: 'Kobold Legacy',
  //   description:
  //     'Kobolds’ connection to dragons can manifest in unpredictable ways in an individual kobold. Choose one of the following legacy options for your kobold: ',
  //   extendedTable: [
  //     {
  //       '': {
  //         headers: ['Legacy', 'Effect'],
  //         data: [
  //           {
  //             Legacy: 'Craftiness',
  //             Effect:
  //               'You have proficiency in one of the following skills of your choice: Arcana, Investigation, Medicine, Sleight of Hand, or Survival.',
  //           },
  //           {
  //             Legacy: 'Defiance',
  //             Effect:
  //               'You have advantage on saving throws to avoid or end the frightened condition on yourself.',
  //           },
  //           {
  //             Legacy: 'Draconic Sorcery',
  //             Effect:
  //               'You know one cantrip of your choice from the sorcerer spell list. Intelligence, Wisdom, or Charisma is your spellcasting ability for that cantrip (choose when you select this race).',
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   speciesId: speciesIds.koboldVGTM,
  //   name: 'Pack Tactics',
  //   description:
  //     "You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn't incapacitated.",
  // },
  // {
  //   speciesId: speciesIds.koboldVGTM,
  //   name: 'Sunlight Sensitivity',
  //   description:
  //     'You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.',
  // },
  // {
  //   speciesId: speciesIds.koboldVGTM,
  //   name: 'Grovel, Cower, and Beg',
  //   description:
  //     "As an action on your turn, you can cower pathetically to distract nearby foes. Until the end of your next turn, your allies gain advantage on attack rolls against enemies within 10 feet of you that can see you. Once you use this trait, you can't use it again until you finish a short or long rest.",
  // },
  // {
  //   speciesId: speciesIds.lizardfolkMMOM,
  //   name: 'Bite',
  //   description:
  //     'You have a fanged maw that you can use to make unarmed strikes. When you hit with it, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.',
  // },
  // {
  //   speciesId: speciesIds.lizardfolkMMOM,
  //   name: 'Hold Breath',
  //   description: 'You can hold your breath for up to 15 minutes at a time.',
  // },
  // {
  //   speciesId: speciesIds.lizardfolkMMOM,
  //   name: 'Hungry Jaws',
  //   description:
  //     ' You can throw yourself into a feeding frenzy. As a bonus action, you can make a special attack with your Bite. If the attack hits, it deals its normal damage, and you gain temporary hit points equal to your proficiency bonus. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
  // },
  // {
  //   speciesId: speciesIds.lizardfolkMMOM,
  //   name: 'Natural Armor',
  //   description:
  //     'You have tough, scaly skin. When you aren’t wearing armor, your base AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield’s benefits apply as normal while you use your natural armor.',
  // },
  // {
  //   speciesId: speciesIds.lizardfolkMMOM,
  //   name: "Nature's Intuition",
  //   description:
  //     'Thanks to your mystical connection to nature, you gain proficiency with two of the following skills of your choice: Animal Handling, Medicine, Nature, Perception, Stealth, or Survival.',
  // },
  // {
  //   speciesId: speciesIds.lizardfolkVGTM,
  //   name: 'Bite',
  //   description:
  //     'Your fanged maw is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
  // },
  // {
  //   speciesId: speciesIds.lizardfolkVGTM,
  //   name: 'Cunning Artisan',
  //   description:
  //     "As part of a short rest, you can harvest bone and hide from a slain beast, construct, dragon, monstrosity, or plant creature of size Small or larger to create one of the following items: a shield, a club, a javelin, or 1d4 darts or blowgun needles. To use this trait, you need a blade, such as a dagger, or appropriate artisan's tools, such as leatherworker's tools.",
  // },
  // {
  //   speciesId: speciesIds.lizardfolkVGTM,
  //   name: 'Hold Breath',
  //   description: 'You can hold your breath for up to 15 minutes at a time.',
  // },
  // {
  //   speciesId: speciesIds.lizardfolkVGTM,
  //   name: "Hunter's Lore",
  //   description:
  //     'You gain proficiency with two of the following skills of your choice: Animal Handling, Nature, Perception, Stealth, and Survival.',
  // },
  // {
  //   speciesId: speciesIds.lizardfolkVGTM,
  //   name: 'Natural Armor',
  //   description:
  //     "You have tough, scaly skin. When you aren't wearing armor, your AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.",
  // },
  // {
  //   speciesId: speciesIds.lizardfolkVGTM,
  //   name: 'Hungry Jaws',
  //   description:
  //     "In battle, you can throw yourself into a vicious feeding frenzy. As a bonus action, you can make a special attack with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points (minimum of 1) equal to your Constitution modifier, and you can't use this trait again until you finish a short or long rest.",
  // },
  // {
  //   speciesId: speciesIds.minotaurMMOM,
  //   name: 'Horns',
  //   description:
  //     'You have horns that you can use to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier piercing damage, instead of the bludgeoning damage normal for an unarmed strike.',
  // },
  // {
  //   speciesId: speciesIds.minotaurMMOM,
  //   name: 'Goring Rush',
  //   description:
  //     'Immediately after you take the Dash action on your turn and move at least 20 feet, you can make one melee attack with your Horns as a bonus action.',
  // },
  // {
  //   speciesId: speciesIds.minotaurMMOM,
  //   name: 'Hammering Horns',
  //   description:
  //     'Immediately after you hit a creature with a melee attack as part of the Attack action on your turn, you can use a bonus action to attempt to push that target with your horns. The target must be within 5 feet of you and no more than one size larger than you. Unless it succeeds on a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Strength modifier, you push it up to 10 feet away from you.',
  // },
  // {
  //   speciesId: speciesIds.minotaurMMOM,
  //   name: 'Labyrinthine Recall',
  //   description:
  //     'You always know which direction is north, and you have advantage on any Wisdom (Survival) check you make to navigate or track.',
  // },
  // {
  //   speciesId: speciesIds.minotaurGGTR,
  //   name: 'Horns',
  //   description:
  //     'Your horns are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
  // },
  // {
  //   speciesId: speciesIds.minotaurGGTR,
  //   name: 'Goring Rush',
  //   description:
  //     'Immediately after you use the Dash action on your turn and move at least 20 feet, you can make one melee attack with your horns as a bonus action.',
  // },
  // {
  //   speciesId: speciesIds.minotaurGGTR,
  //   name: 'Hammering Horns',
  //   description:
  //     'Immediately after you hit a creature with a melee attack as a part of the Attack action on your turn, you can use a bonus action to attempt to shove that target with your horns. The target must be within 5 feet of you and no more than one size larger than you. Unless it succeeds on a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Strength modifier, you push it up to 10 feet away from you.',
  // },
  // {
  //   speciesId: speciesIds.minotaurGGTR,
  //   name: 'Imposing Presence',
  //   description:
  //     'You have proficiency in one of the following skills of your choice: Intimidation or Persuasion.',
  // },
  // {
  //   speciesId: speciesIds.minotaurMOOT,
  //   name: 'Horns',
  //   description:
  //     'Your horns are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
  // },
  // {
  //   speciesId: speciesIds.minotaurMOOT,
  //   name: 'Goring Rush',
  //   description:
  //     'Immediately after you use the Dash action on your turn and move at least 20 feet, you can make one melee attack with your horns as a bonus action.',
  // },
  // {
  //   speciesId: speciesIds.minotaurMOOT,
  //   name: 'Hammering Horns',
  //   description:
  //     'Immediately after you hit a creature with a melee attack as a part of the Attack action on your turn, you can use a bonus action to attempt to shove that target with your horns. The target must be within 5 feet of you and no more than one size larger than you. Unless it succeeds on a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Strength modifier, you push it up to 10 feet away from you.',
  // },
  // {
  //   speciesId: speciesIds.minotaurMOOT,
  //   name: 'Imposing Presence',
  //   description:
  //     'You have proficiency in one of the following skills of your choice: Intimidation or Persuasion.',
  // },
  // {
  //   speciesId: speciesIds.minotaurPSA,
  //   name: 'Natural Weapon',
  //   description:
  //     'You can use your horns as a natural weapon to make unarmed strikes. If you hit with your horns, you deal bludgeoning damage equal to 1d6 + your Strength modifier.',
  // },
  // {
  //   speciesId: speciesIds.minotaurPSA,
  //   name: 'Menacing',
  //   description: 'You gain proficiency in the Intimidation skill.',
  // },
  // {
  //   speciesId: speciesIds.minotaurPSA,
  //   name: 'Relentless Endurance',
  //   description:
  //     'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.',
  // },
  // {
  //   speciesId: speciesIds.minotaurPSA,
  //   name: 'Savage Attacks',
  //   description:
  //     'When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.',
  // },
  // {
  //   speciesId: speciesIds.orcMMOM,
  //   name: 'Adrenaline Rush',
  //   description:
  //     'You can take the Dash action as a bonus action. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n\n Whenever you use this trait, you gain a number of temporary hit points equal to your proficiency bonus.',
  // },
  // {
  //   speciesId: speciesIds.orcMMOM,
  //   name: 'Powerful Build',
  //   description:
  //     'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
  // },
  // {
  //   speciesId: speciesIds.orcMMOM,
  //   name: 'Relentless Endurance',
  //   description:
  //     'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. Once you use this trait, you can’t do so again until you finish a long rest.',
  // },
  // {
  //   speciesId: speciesIds.orcVGTM,
  //   name: 'Aggressive',
  //   description:
  //     'As a bonus action, you can move up to your speed toward an enemy of your choice that you can see or hear. You must end this move closer to the enemy than you started.',
  // },
  // {
  //   speciesId: speciesIds.orcVGTM,
  //   name: 'Primal Intuition',
  //   description:
  //     'You have proficiency in two of the following skills of your choice: Animal Handling, Insight, Intimidation, Medicine, Nature, Perception, and Survival.',
  // },
  // {
  //   speciesId: speciesIds.orcVGTM,
  //   name: 'Powerful Build',
  //   description:
  //     'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
  // },
  // {
  //   speciesId: speciesIds.orcERLW,
  //   name: 'Aggressive',
  //   description:
  //     "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
  // },
  // {
  //   speciesId: speciesIds.orcERLW,
  //   name: 'Powerful Build',
  //   description:
  //     'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
  // },
  // {
  //   speciesId: speciesIds.orcERLW,
  //   name: 'Primal Intuition',
  //   description:
  //     'You have proficiency in two of the following skills of your choice: Animal Handling, Insight, Intimidation, Medicine, Nature, Perception, and Survival.',
  // },
  // {
  //   speciesId: speciesIds.orcEGTW,
  //   name: 'Aggressive',
  //   description:
  //     'As a bonus action, you can move up to your speed toward an enemy of your choice that you can see or hear. You must end this move closer to the enemy than you started.',
  // },
  // {
  //   speciesId: speciesIds.orcEGTW,
  //   name: 'Powerful Build',
  //   description:
  //     'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
  // },
  // {
  //   speciesId: speciesIds.orcEGTW,
  //   name: 'Primal Intuition',
  //   description:
  //     'You have proficiency in two of the following skills of your choice: Animal Handling, Insight, Intimidation, Medicine, Nature, Perception, and Survival.',
  // },
  // {
  //   speciesId: speciesIds.orcPSI,
  //   name: 'Menacing',
  //   description: 'You gain proficiency in the Intimidation skill.',
  // },
  // {
  //   speciesId: speciesIds.orcPSI,
  //   name: 'Relentless Endurance',
  //   description:
  //     'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.',
  // },
  // {
  //   speciesId: speciesIds.orcPSI,
  //   name: 'Savage Attacks',
  //   description:
  //     'When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.',
  // },
  // {
  //   speciesId: speciesIds.shifterMMOM,
  //   name: 'Lycnathrope',
  //   description:
  //     'Most shifters resemble a particular kind of lycanthrope. You can choose the kind of lycanthrope in your past, or you can determine it randomly by rolling on the Lycanthrope Ancestor table. The table also provides a suggestion for the Shifting option you might have as a result of your ancestry.',
  //   extendedTable: [
  //     {
  //       'Lycanthrope Ancestor': {
  //         headers: ['d6', 'Ancestor', 'Shifting Option'],
  //         data: [
  //           {
  //             d6: '1',
  //             Ancestor: 'Werebear',
  //             'Shifting Option': 'Beasthide',
  //           },
  //           {
  //             d6: '2',
  //             Ancestor: 'Wereboar',
  //             'Shifting Option': 'Beasthide',
  //           },
  //           {
  //             d6: '3',
  //             Ancestor: 'Weretiger',
  //             'Shifting Option': 'Swiftstride',
  //           },
  //           {
  //             d6: '4',
  //             Ancestor: 'Werewolf (wolflike)',
  //             'Shifting Option': 'Longtooth',
  //           },
  //           {
  //             d6: '5',
  //             Ancestor: 'Werewolf (doglike)',
  //             'Shifting Option': 'Wildhunt',
  //           },
  //           {
  //             d6: '6',
  //             Ancestor: 'Wererat',
  //             'Shifting Option': 'Swiftstride',
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   speciesId: speciesIds.shifterMMOM,
  //   name: 'Shifting',
  //   description:
  //     'As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to 2 x your proficiency bonus. You can shift a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n\nWhenever you shift, you gain an additional benefit based on one of the following options (choose when you select this race): ',
  //   extendedTable: [
  //     {
  //       '': {
  //         headers: ['Option', 'Benefit'],
  //         data: [
  //           {
  //             Option: 'Beasthide',
  //             Benefit:
  //               'You gain 1d6 additional temporary hit points. While shifted, you have a +1 bonus to your Armor Class.',
  //           },
  //           {
  //             Option: 'Longtooth',
  //             Benefit:
  //               'When you shift and as a bonus action on your other turns while shifted, you can use your elongated fangs to make an unarmed strike. If you hit with your fangs, you can deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
  //           },
  //           {
  //             Option: 'Swiftstride',
  //             Benefit:
  //               'While shifted, your walking speed increases by 10 feet. Additionally, you can move up to 10 feet as a reaction when a creature ends its turn within 5 feet of you. This reactive movement doesn’t provoke opportunity attacks.',
  //           },
  //           {
  //             Option: 'Wildhunt',
  //             Benefit:
  //               'While shifted, you have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you unless you’re incapacitated.',
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   speciesId: speciesIds.shifterERLW,
  //   name: 'Shifting',
  //   description:
  //     'As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to your level + your Constitution modifier (minimum of 1 temporary hit point). You also gain benefits that depend on your shifter subrace. Once you shift, you can’t do so again until you finish a short or long rest.',
  // },
  // {
  //   speciesId: speciesIds.shifterERLW,
  //   name: 'Keen Senses',
  //   description: 'You have proficiency in the Perception skill.',
  // },
  // {
  //   speciesId: speciesIds.yuanTiMMOM,
  //   name: 'Magic Resistance',
  //   description: 'You have advantage on saving throws against spells',
  // },
  // {
  //   speciesId: speciesIds.yuanTiMMOM,
  //   name: 'Poison Resistance',
  //   description:
  //     'You have advantage on saving throws you make to avoid or end the poisoned condition on yourself. You also have resistance to poison damage.',
  // },
  // {
  //   speciesId: speciesIds.yuanTiMMOM,
  //   name: 'Serpentine Spellcasting',
  //   description:
  //     'You know the Poison Spray cantrip. You can cast Animal Friendship an unlimited number of times with this trait, but you can target only snakes with it. Starting at 3rd level, you can also cast Suggestion with this trait. Once you cast it, you can’t do so again until you finish a long rest. You can also cast it using any spell slots you have of 2nd level or higher. \n\nIntelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).',
  // },
  // {
  //   speciesId: speciesIds.yuanTiVGTM,
  //   name: 'Innate Spellcasting',
  //   description:
  //     "You know the Poison Spray cantrip. You can cast Animal Friendship an unlimited number of times with this trait, but you can target only snakes with it. Starting at 3rd level, you can also cast Suggestion with this trait. Once you cast it, you can't do so again until you finish a long rest. Charisma is your spellcasting ability for these spells.",
  // },
  // {
  //   speciesId: speciesIds.yuanTiVGTM,
  //   name: 'Magic Resistance',
  //   description:
  //     'You have advantage on saving throws against spells and other magical effects.',
  // },
  // {
  //   speciesId: speciesIds.aetherborn,
  //   name: 'Born of Aether',
  //   description: 'You have resistance to necrotic damage.',
  // },
  // {
  //   speciesId: speciesIds.aetherborn,
  //   name: 'Menacing',
  //   description: 'You gain proficiency in the Intimidation skill.',
  // },
  // {
  //   speciesId: speciesIds.aven,
  //   name: 'Khenra Weapon Training',
  //   description: 'You have proficiency with the khopesh, spear, and javelin.',
  // },
  // {
  //   speciesId: speciesIds.aven,
  //   name: 'Khenra Twins',
  //   description:
  //     'If your twin is alive and you can see your twin, whenever you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll. If your twin is dead (or if you were born without a twin), you can’t be frightened.',
  // },
  // {
  //   speciesId: speciesIds.kor,
  //   name: 'Kor Climbing',
  //   description: 'You have proficiency in the Athletics and Acrobatics skills.',
  // },
  // {
  //   speciesId: speciesIds.kor,
  //   name: 'Lucky',
  //   description:
  //     'When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.',
  // },
  // {
  //   speciesId: speciesIds.kor,
  //   name: 'Brave',
  //   description:
  //     'You have advantage on saving throws against being frightened.',
  // },
  // {
  //   speciesId: speciesIds.naga,
  //   name: 'Speed Burst',
  //   description:
  //     'By lowering your body to the ground and propelling yourself with your arms, you can move more quickly for a time. As a bonus action on your turn, if you have both hands free, you can increase your walking speed by 5 feet until the end of your turn.',
  // },
  // {
  //   speciesId: speciesIds.naga,
  //   name: 'Natural Weapons',
  //   description:
  //     'Your fanged maw and constricting serpentine body are natural weapons, which you can use to make unarmed strikes. If you hit with your bite, you deal piercing damage equal to 1d4 + your Strength modifier, and your target must make a Constitution saving throw (DC 8 + your proficiency bonus + your Constitution modifier). On a failed save, the target takes 1d4 poison damage. \n\nIf you hit with your constrict attack, you deal bludgeoning damage equal to 1d6 + your Strength modifier, and the target is grappled (escape DC 8 + your proficiency bonus + your Strength modifier). Until this grapple ends, the target is restrained, and you can’t constrict another target.',
  // },
  // {
  //   speciesId: speciesIds.naga,
  //   name: 'Poison Immunity',
  //   description: 'You are immune to poison damage and the poisoned condition.',
  // },
  // {
  //   speciesId: speciesIds.naga,
  //   name: 'Poison Affinity',
  //   description: 'You gain proficiency with the poisoner’s kit.',
  // },
  // {
  //   speciesId: speciesIds.siren,
  //   name: 'Siren Song',
  //   description:
  //     'You know the Friends cantrip and can cast it without material components.',
  // },
  // {
  //   speciesId: speciesIds.vampireIxalan,
  //   name: 'Bloodthirst',
  //   description:
  //     'You can drain blood and life energy from a willing creature, or one that is grappled by you, incapacitated, or restrained. Make a melee attack against the target. If you hit, you deal 1 piercing damage and 1d6 necrotic damage. The target’s hit point maximum is reduced by an amount equal to the necrotic damage taken, and you regain hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.',
  // },
  // {
  //   speciesId: speciesIds.vampireIxalan,
  //   name: 'Feast of Blood',
  //   description:
  //     'When you drain blood with your Bloodthirst ability, you experience a surge of vitality. Your speed increases by 10 feet, and you gain advantage on Strength and Dexterity checks and saving throws for 1 minute.',
  // },
  // {
  //   speciesId: speciesIds.vampirePSZ,
  //   name: 'Dark Thirst',
  //   description:
  //     ' You can drain blood and life energy from a willing creature, or one that is grappled by you, incapacitated, or restrained. Make a melee attack against the target, using either Strength or Dexterity for your attack roll. If you hit, you deal 1 piercing damage and 1d6 necrotic damage. The target’s hit point maximum is reduced by an amount equal to the necrotic damage taken, and you regain hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid killed in this way becomes a null.',
  // },
  // {
  //   speciesId: speciesIds.vampirePSZ,
  //   name: 'Vampiric Resistance',
  //   description: 'You have resistance to necrotic damage.',
  // }, //Dragonborn
  {
    id: speciesFeaturesIds.draconicAncestryDragonborn,
    name: 'Draconic Ancestry',
    effectChainType: ChainType.ADD,
    description:
      'You are distantly related to a particular kind of dragon. Your subspecies determines the damage type and shape of the breath weapon you have.',
    speciesId: speciesIds.dragonborn,
  },
  //dwarf

  {
    id: speciesFeaturesIds.dwarvenResilienceDwarf,
    name: 'Dwarven Resilience',
    description:
      'You have advantage on saving throws against poison, and you have resistance against poison damage.',
    speciesId: speciesIds.dwarf,
    unimplemented: true,
  },
  {
    id: speciesFeaturesIds.dwarvenCombatTrainingDwarf,
    name: 'Dwarven Combat Training',
    description:
      'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.',
    speciesId: speciesIds.dwarf,
    unimplemented: true,
  },
  {
    id: speciesFeaturesIds.dwarfToolProficiencyDwarf,
    name: 'Tool Proficiency',
    description:
      "You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools.",
    speciesId: speciesIds.dwarf,
    unimplemented: true,
  },
  {
    id: speciesFeaturesIds.dwarfStonecunningDwarf,
    name: 'Stonecunning',
    description:
      'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.',
    speciesId: speciesIds.dwarf,
    unimplemented: true,
  },
  //elf
  {
    id: speciesFeaturesIds.feyAncestryElf,
    name: 'Fey Ancestry',
    description:
      "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
    speciesId: speciesIds.elf,
    unimplemented: true,
  },
  {
    id: speciesFeaturesIds.tranceElf,
    effectChainType: ChainType.ADD,
    name: 'Trance',
    description: `Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is "trance." While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.`,
    speciesId: speciesIds.elf,
  },
  {
    id: speciesFeaturesIds.keenSensesElf,
    effectChainType: ChainType.ADD,
    name: 'Keen Senses',
    description: 'You have proficiency in the Perception skill.',
    speciesId: speciesIds.elf,
  },
  //gnome
  {
    id: speciesFeaturesIds.gnomeCunning,
    name: 'Gnome Cunning',
    effectChainType: ChainType.ADD,
    description:
      'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.',
    speciesId: speciesIds.gnome,
    unimplemented: true,
  },
  //halfElf
  {
    id: speciesFeaturesIds.halfElfFeyAncestry,
    effectChainType: ChainType.ADD,
    name: 'Fey Ancestry',
    description:
      "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
    speciesId: speciesIds.halfElf,
  },
  //halfOrc
  {
    effectChainType: ChainType.ADD,
    id: speciesFeaturesIds.halfOrcMenacing,
    name: 'Menacing',
    description: 'You gain proficiency in the Intimidation skill.',
    speciesId: speciesIds.halfOrc,
  },
  {
    id: speciesFeaturesIds.halfOrcRelentlessEndurance,
    name: 'Relentless Endurance',
    description:
      "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
    speciesId: speciesIds.halfOrc,
    unimplemented: true,
  },
  {
    id: speciesFeaturesIds.halfOrcSavageAttacks,
    name: 'Savage Attacks',
    description:
      "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
    speciesId: speciesIds.halfOrc,
    unimplemented: true,
  },
  //halfling
  {
    id: speciesFeaturesIds.halflingLucky,
    name: 'Lucky',
    effectChainType: ChainType.ADD,
    description:
      'When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.',
    speciesId: speciesIds.halfling,
  },
  {
    id: speciesFeaturesIds.halflingBrave,
    name: 'Brave',
    effectChainType: ChainType.ADD,
    description:
      'You have advantage on saving throws against being frightened.',
    speciesId: speciesIds.halfling,
  },
  {
    id: speciesFeaturesIds.halflingNimbleness,
    effectChainType: ChainType.ADD,
    name: 'Halfling Nimbleness',
    description:
      'You can move through the space of any creature that is of a size larger than yours.',
    speciesId: speciesIds.halfling,
  },
  //human
  //tiefling
  {
    id: speciesFeaturesIds.hellishResistanceTiefling,
    name: 'Hellish Resistance',
    description: 'You have resistance to fire damage.',
    speciesId: speciesIds.tiefling,
    unimplemented: true,
  },
];
export default SpeciesFeaturesSeed;
