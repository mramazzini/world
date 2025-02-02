import {
  Ability,
  CasterPower,
  CasterType,
  Prisma,
  SpellFocus,
} from '@prisma/client';
import { classIds as ids } from './ClassIds';
import { itemIds } from '../Items/ItemIds';
import { spellIds } from '../Spells/spells.seed';
import { spellListIds } from '../Spells/SpellLists/SpellLists.seed';
import { warlockSpellSlots } from '../../../src/lib/utils/SpellSlotsUtil';

const SpellCasterInfoIds = {
  wizard: 'wizard',
  cleric: 'cleric',
  bard: 'bard',
  druid: 'druid',
  paladin: 'paladin',
  ranger: 'ranger',
  sorcerer: 'sorcerer',
  warlock: 'warlock',
  artificer: 'artificer',
};

const SpellCasterSeed: Prisma.SpellCastingCreateManyInput[] = [
  {
    id: SpellCasterInfoIds.wizard,
    classId: ids.wizard,
    description: `As a student of arcane magic, you have a ^${itemIds.spellBook}{spellbook}^ containing spells that show the first glimmerings of your true power.`,
    preparingSpellsDescription: `You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your ^${itemIds.spellBook}{spellbook}^ equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.\n\nFor example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your ^${itemIds.spellBook}{spellbook}^. If you prepare the 1st-level spell %${spellIds.magicMissile}{magic missile}%, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.\n\nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your ^${itemIds.spellBook}{spellbook}^ and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.`,
    spellCastingAbilityDescription:
      'Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. ',

    ability: Ability.INT,
    spellFocus: SpellFocus.ARCANE_FOCUS,
    casterPower: CasterPower.FULL,
    spellListId: spellListIds.wizard,
    casterType: CasterType.PREPARED,
  },
  {
    spellListId: spellListIds.cleric,
    id: SpellCasterInfoIds.cleric,
    classId: ids.cleric,
    description: `As a conduit for divine power, you can cast cleric spells.`,
    preparingSpellsDescription: `You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.\n\nFor example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell %${spellIds.cureWounds}{Cure Wounds}%, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.\n\nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.`,

    spellCastingAbilityDescription:
      'Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.',
    ability: Ability.WIS,
    spellFocus: SpellFocus.HOLY_SYMBOL,
    casterPower: CasterPower.FULL,
    casterType: CasterType.PREPARED,
  },
  {
    spellListId: spellListIds.bard,
    id: SpellCasterInfoIds.bard,
    classId: ids.bard,
    ability: Ability.CHA,
    spellCastingAbilityDescription:
      'Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. ',

    description:
      'You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations.',
    casterPower: CasterPower.FULL,

    spellFocus: SpellFocus.MUSICAL_INSTRUMENT,
    casterType: CasterType.KNOWN,
  },
  {
    id: SpellCasterInfoIds.druid,
    spellListId: spellListIds.druid,
    classId: ids.druid,
    ability: Ability.WIS,
    spellCastingAbilityDescription:
      'Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. ',

    description:
      'Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will.',
    casterPower: CasterPower.FULL,
    spellFocus: SpellFocus.DRUIDIC_FOCUS,
    casterType: CasterType.PREPARED,
  },
  {
    id: 'paladin',
    spellListId: spellListIds.paladin,
    classId: ids.paladin,
    ability: Ability.CHA,
    description:
      'By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does.',
    spellCastingAbilityDescription:
      'Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.',
    spellFocus: SpellFocus.HOLY_SYMBOL,

    casterPower: CasterPower.HALF_ROUNDED_DOWN,
    casterType: CasterType.PREPARED,
  },
  {
    id: SpellCasterInfoIds.ranger,
    spellListId: spellListIds.ranger,
    classId: ids.ranger,
    ability: Ability.WIS,
    spellCastingAbilityDescription:
      'Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. ',

    spellFocus: SpellFocus.DRUIDIC_FOCUS,
    description:
      'By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does.',
    casterPower: CasterPower.HALF_ROUNDED_DOWN,
    casterType: CasterType.KNOWN,
  },
  {
    id: SpellCasterInfoIds.sorcerer,
    spellListId: spellListIds.sorcerer,
    ability: Ability.CHA,
    classId: ids.sorcerer,
    description:
      'An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells.',
    spellCastingAbilityDescription:
      'Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. ',

    spellFocus: SpellFocus.ARCANE_FOCUS,
    casterPower: CasterPower.FULL,
    casterType: CasterType.KNOWN,
  },
  {
    id: SpellCasterInfoIds.warlock,
    spellListId: spellListIds.warlock,
    classId: ids.warlock,
    ability: Ability.CHA,
    description:
      'Your arcane research and the magic bestowed on you by your patron have given you facility with spells.',

    spellFocus: SpellFocus.ARCANE_FOCUS,
    casterPower: CasterPower.CUSTOM,
    customCasterSpellLevels: warlockSpellSlots,
    casterType: CasterType.KNOWN,
  },
  {
    id: SpellCasterInfoIds.artificer,
    spellListId: spellListIds.artificer,
    classId: ids.artificer,
    ability: Ability.INT,
    spellCastingAbilityDescription:
      'Intelligence is your spellcasting ability for your artificer spells; your understanding of the theory behind magic allows you to wield these spells with superior skill. ',
    description:
      "You've studied the workings of magic and how to cast spells, channeling the magic through objects. To observers, you don't appear to be casting spells in a conventional way; you appear to produce wonders from mundane items and outlandish inventions.",
    spellFocus: SpellFocus.ARTISANS_TOOLS,
    spellFocusDescription: `You produce your artificer spell effects through your tools. You must have a spellcasting focus - specifically ^${itemIds.thievesTools}{thieves' tools}^ or some kind of artisan's tool - in hand when you cast any spell with this Spellcasting feature (meaning the spell has an "M" component when you cast it). You must be proficient with the tool to use it in this way. See chapter 5, "Equipment," in the Player's Handbook for descriptions of these tools.\n\nAfter you gain the Infuse Item feature at 2nd level, you can also use any item bearing one of your infusions as a spellcasting focus.`,

    casterPower: CasterPower.HALF_ROUNDED_UP,
    casterType: CasterType.PREPARED,
  },
];

export { SpellCasterInfoIds };

export default SpellCasterSeed;
