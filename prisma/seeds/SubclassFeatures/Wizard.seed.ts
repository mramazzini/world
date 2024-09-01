import { Prisma } from "@prisma/client";

const ids = {
  abjuration: 28,
  bladesinging: 29,
  chronurgy: 30,
  conjuration: 31,
  divination: 32,
  enchantment: 33,
  evocation: 34,
  graviturgy: 35,
  illusion: 36,
  necromancy: 37,
  scribes: 38,
  transmutation: 39,
  warMagic: 40,
};
interface SubclassFeature extends PrismaJson.Feature {
  subClassId: number;
}

const WizardSubclassFeatures: SubclassFeature[] = [
  //abjuration
  {
    name: "Abjuration Savant",
    description:
      "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an abjuration spell into your spellbook is halved.",
    levels: [2],
    subClassId: ids.abjuration,
  },
  {
    name: "Arcane Ward",
    description:
      "Starting at 2nd level, you can weave magic around yourself for protection. When you cast an abjuration spell of 1st level or higher, you can simultaneously use a strand of the spell's magic to create a magical ward on yourself that lasts until you finish a long rest. The ward has hit points equal to twice your wizard level + your Intelligence modifier. Whenever you take damage, the ward takes the damage instead. If this damage reduces the ward to 0 hit points, you take any remaining damage.\n\nWhile the ward has 0 hit points, it can't absorb damage, but its magic remains. Whenever you cast an abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell.\n\nOnce you create the ward, you can't create it again until you finish a long rest.",
    levels: [2],
    subClassId: ids.abjuration,
  },
  {
    name: "Projected Ward",
    description:
      "Starting at 6th level, when a creature that you can see within 30 feet of you takes damage, you can use your reaction to cause your Arcane Ward to absorb that damage. If this damage reduces the ward to 0 hit points, the warded creature takes any remaining damage.",
    levels: [6],
    subClassId: ids.abjuration,
  },
  {
    name: "Improved Abjuration",
    description:
      "Beginning at 10th level, when you cast an abjuration spell that requires you to make an ability check as a part of casting that spell (as in counterspell and dispel magic), you add your proficiency bonus to that ability check.",
    levels: [10],
    subClassId: ids.abjuration,
  },
  {
    name: "Spell Resistance",
    description:
      "Starting at 14th level, you have advantage on saving throws against spells.\n\nFurthermore, you have resistance against the damage of spells.",
    levels: [14],
    subClassId: ids.abjuration,
  },
  //bladesinging
  {
    name: "Training in War and Song",
    description:
      "When you adopt this tradition at 2nd level, you gain proficiency with light armor, and you gain proficiency with one type of one-handed melee weapon of your choice. You also gain proficiency in the Performance skill if you don't already have it.",
    levels: [2],
    subClassId: ids.bladesinging,
  },
  {
    name: "Bladesong",
    description:
      "Starting at 2nd level, you can invoke an elven magic called the Bladesong, provided that you aren't wearing medium or heavy armor or using a shield. It graces you with supernatural speed, agility, and focus.\n\n You can use a bonus action to start the Bladesong, which lasts for 1 minute. It ends early if you are incapacitated, if you don medium or heavy armor or a shield, or if you use two hands to make an attack with a weapon. You can also dismiss the Bladesong at any time (no action required).\n\nWhile your Bladesong is active, you gain the following benefits:",
    options: [
      "You gain a bonus to your AC equal to your Intelligence modifier (minimum of +1).",
      "Your walking speed increases by 10 feet.",
      "You have advantage on Dexterity (Acrobatics) checks.",
      "You gain a bonus to any Constitution saving throw you make to maintain your concentration on a spell. The bonus equals your Intelligence modifier.",
    ],
    levels: [2],
    subClassId: ids.bladesinging,
  },
  {
    name: "Extra Attack",
    description:
      "Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. Furthermore, you can cast one of your cantrips in place of one of those attacks.",
    levels: [6],
    subClassId: ids.bladesinging,
  },
  {
    name: "Song of Defense",
    description:
      "Beginning at 10th level, you can direct your magic to absorb damage while your Bladesong is active. When you take damage, you can use your reaction to expend one spell slot and reduce that damage to you by an amount equal to five times the spell slot's level.",
    levels: [10],
    subClassId: ids.bladesinging,
  },
  {
    name: "Song of Victory",
    description:
      "Starting at 14th level, you add your Intelligence modifier to the damage of your melee weapon attacks while your Bladesong is active.",
    levels: [14],
    subClassId: ids.bladesinging,
  },
  //chronurgy
  {
    name: "Chronal Shift",
    description:
      "At 2nd level, you can magically exert limited control over the flow of time around a creature. As a reaction, after you or a creature you can see within 30 feet of you makes an attack roll, an ability check, or a saving throw, you can force the creature to reroll. You make this decision after you see whether the roll succeeds or fails. The target must use the result of the second roll.\n\nYou can use this ability twice, and you regain any expended uses when you finish a long rest.",
    levels: [2],
    subClassId: ids.chronurgy,
  },
  {
    name: "Temporal Awareness",
    description:
      "Starting at 2nd level, you can add your Intelligence modifiers to your initiative rolls.",
    levels: [2],
    subClassId: ids.chronurgy,
  },
  {
    name: "Momentary Stasis",
    description:
      "When you reach 6th level, as an action, you can magically force a Large or smaller creature you can see within 60 feet of you to make a Constitution saving throw against your spell save DC. Unless the saving throw is a success, the creature is encased in a field of magical energy until the end of your next turn or until the creature takes any damage. While encased in this way, the creature is incapacitated and has a speed of 0.\n\nYou can use this feature a number of times equal to your Intelligence modifier (minimum of once), and you regain all expended uses when you finish a long rest.",
    levels: [6],
    subClassId: ids.chronurgy,
  },
  {
    name: "Arcane Abeyance",
    description:
      "At 10th level, when you cast a spell using a spell slot of 4th level or lower, you can condense the spell's magic into a mote. The spell is frozen in time at the moment of casting and held within a gray bead for 1 hour. This bead is a Tiny object with AC 15 and 1 hit point, and it is immune to poison and psychic damage. When the duration ends, or if the bead is destroyed, it vanishes in aflash of light, and the spell is lost.\n\nA creature holding the bead can use its action to release the spell within, whereupon the bead disappears. The spell uses your spell attack bonus and save DC, and the spell treats the creature who released it as the caster for all other purposes\n\nOnce you create a bead with this feature, you can't do so again until you finish a short or long rest.",
    levels: [10],
    subClassId: ids.chronurgy,
  },
  {
    name: "Convergent Future",
    description:
      "Starting at 14th level, you can peer through possible futures and magically pull one of them into events around you, ensuring a particular outcome. When you or a creature you can see within 60 feet of you makes an attack roll, an ability check, or a saving throw, you can use your reaction to ignore the die roll and decide whether the number rolled is the minimum needed to succeed or one less than that number (your choice).\n\nWhen you use this feature, you gain one level of exhaustion. Only by finishing a long rest can you remove a level of exhaustion gained in this way.",
    levels: [14],
    subClassId: ids.chronurgy,
  },
  // conjuration
  {
    name: "Conjuration Savant",
    description:
      "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a conjuration spell into your spellbook is halved.",
    levels: [2],
    subClassId: ids.conjuration,
  },
  {
    name: "Minor Conjuration",
    description:
      "Starting at 2nd level when you select this school, you can use your action to conjure up an inanimate object in your hand or on the ground in an unoccupied space that you can see within 10 feet of you. This object can be no larger than 3 feet on a side and weigh no more than 10 pounds, and its form must be that of a nonmagical object that you have seen. The object is visibly magical, radiating dim light out to 5 feet.\n\nThe object disappears after 1 hour, when you use this feature again, or if it takes or deals any damage.",
    levels: [2],
    subClassId: ids.conjuration,
  },
  {
    name: "Benign Transportation",
    description:
      "Starting at 6th level, you can use your action to teleport up to 30 feet to an unoccupied space that you can see. Alternatively, you can choose a space within range that is occupied by a Small or Medium creature. If that creature is willing, you both teleport, swapping places.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest.",
    levels: [6],
    subClassId: ids.conjuration,
  },
  {
    name: "Focused Conjuration",
    description:
      "Beginning at 10th level, while you are concentrating on a conjuration spell, your concentration can't be broken as a result of taking damage.",
    levels: [10],
    subClassId: ids.conjuration,
  },
  {
    name: "Durable Summons",
    description:
      "Starting at 14th level, any creature that you summon or create with a conjuration spell has 30 temporary hit points.",
    levels: [14],
    subClassId: ids.conjuration,
  },
  // divination
  {
    name: "Divination Savant",
    description:
      "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a divination spell into your spellbook is halved.",
    levels: [2],
    subClassId: ids.divination,
  },
  {
    name: "Portent",
    description:
      "Starting at 2nd level when you choose this school, glimpses of the future begin to press in on your awareness. When you finish a long rest, roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn.\n\nEach foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls.",
    levels: [2],
    subClassId: ids.divination,
  },
  {
    name: "Expert Divination",
    description:
      "Beginning at 6th level, casting divination spells comes so easily to you that it expends only a fraction of your spellcasting efforts. When you cast a divination spell of 2nd level or higher using a spell slot, you regain one expended spell slot. The slot you regain must be of a level lower than the spell you cast and can't be higher than 5th level.",
    levels: [6],
    subClassId: ids.divination,
  },
  {
    name: "The Third Eye",
    description:
      "Starting at 10th level, you can use your action to increase your powers of perception. When you do so, choose one of the following benefits, which lasts until you are incapacitated or you take a short or long rest. You can't use the feature again until you finish a short or long rest.",
    options: [
      "You gain darkvision out to a range of 60 feet.",
      "You can see into the Ethereal Plane within 60 feet of you.",
      "You can read any language",
      "You can see invisible creatures and objects within 10 feet of you that are within line of sight.",
    ],
    levels: [10],
    subClassId: ids.divination,
  },
  {
    name: "Greater Portent",
    description:
      "Starting at 14th level, the visions in your dreams intensify and paint a more accurate picture of the future. You roll three d20s for your Portent feature, rather than two.",
    levels: [14],
    subClassId: ids.divination,
  },
  // enchantment
  {
    name: "Enchantment Savant",
    description:
      "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an enchantment spell into your spellbook is halved.",
    levels: [2],
    subClassId: ids.enchantment,
  },
  {
    name: "Hypnotic Gaze",
    description:
      "Starting at 2nd level when you choose this school, your soft words and enchanting gaze can magically enthrall another creature. As an action, choose one creature that you can see within 5 feet of you. If the target can see or hear you, it must succeed on a Wisdom saving throw against your wizard spell save DC or be charmed by you until the end of your next turn. The charmed creature's speed drops to 0, and the creature is incapacitated and visibly dazed.\n\nOn subsequent turns, you can use your action to maintain this effect, extending its duration until the end of your next turn. However, the effect ends if you move more than 5 feet away from the creature, if the creature can neither see nor hear you, or if the creature takes damage.\n\nOnce the effect ends, or if the creature succeeds on its initial saving throw against this effect, you can't use this feature on that creature again until you finish a long rest.",
    levels: [2],
    subClassId: ids.enchantment,
  },
  {
    name: "Instinctive Charm",
    description:
      "Beginning at 6th level, when a creature you can see within 30 feet of you makes an attack roll against you, you can use your reaction to divert the attack, provided that another creature is within the attack's range. The attacker must make a Wisdom saving throw against your wizard spell save DC. On a failed save, the attacker must target the creature that is closest to it, not including you or itself. If multiple creatures are closest, the attacker chooses which one to target.\n\nOn a successful save, you can't use this feature on the attacker again until you finish a long rest.\n\nYou must choose to use this feature before knowing whether the attack hits or misses. Creatures that can't be charmed are immune to this effect.",
    levels: [6],
    subClassId: ids.enchantment,
  },
  {
    name: "Split Enchantment",
    description:
      "Starting at 10th level, when you cast an enchantment spell of 1st level or higher that targets only one creature, you can have it target a second creature.",
    levels: [10],
    subClassId: ids.enchantment,
  },
  {
    name: "Alter Memories",
    description:
      "At 14th level, you gain the ability to make a creature unaware of your magical influence on it. When you cast an enchantment spell to charm one or more creatures, you can alter one creature's understanding so that it remains unaware of being charmed.\n\nAdditionally, once before the spell expires, you can use your action to try to make the chosen creature forget some of the time it spent charmed. The creature must succeed on an Intelligence saving throw against your wizard spell save DC or lose a number of hours of its memories equal to 1 + your Charisma modifier (minimum 1). You can make the creature forget less time, and the amount of time can't exceed the duration of your enchantment spell.",
    levels: [14],
    subClassId: ids.enchantment,
  },
  // evocation
  {
    name: "Evocation Savant",
    description:
      "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an evocation spell into your spellbook is halved.",
    levels: [2],
    subClassId: ids.evocation,
  },
  {
    name: "Sculpt Spells",
    description:
      "Beginning at 2nd level, you can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save.",
    levels: [2],
    subClassId: ids.evocation,
  },
  {
    name: "Potent Cantrip",
    description:
      "Starting at 6th level, your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip.",
    levels: [6],
    subClassId: ids.evocation,
  },
  {
    name: "Empowered Evocation",
    description:
      "Beginning at 10th level, you can add your Intelligence modifier (minimum of +1) to one damage roll of any wizard evocation spell that you cast.",
    levels: [10],
    subClassId: ids.evocation,
  },
  {
    name: "Overchannel",
    description:
      "Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 5th level or lower that deals damage, you can deal maximum damage with that spell.The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity.",
    levels: [14],
    subClassId: ids.evocation,
  },
  // graviturgy
  {
    name: "Adjust Density",
    description:
      "At 2nd level, as an action, you can magically alter the weight of one object or creature you can see within 30 feet of you. The object or creature must be Large or smaller. The target's weight is halved or doubled for up to 1 minute or until your concentration ends (as if you were concentrating on a spell).\n\nWhile the weight of a creature is halved by this effect, the creature's speed increases by 10 feet, it can jump twice as far as normal, and it has disadvantage on Strength checks and Strength saving throws.\n\nWhile the weight of a creature is doubled by this effect, the creature's speed is reduced by 10 feet, and it has advantage on Strength checks and Strength saving throws.\n\nUpon reaching 10th level in this class, you can target an object or a creature that is Huge or smaller.",
    levels: [2, 10],
    subClassId: ids.graviturgy,
  },
  {
    name: "Gravity Well",
    description:
      "When you reach 6th level, whenever you cast a spell on a creature, you can move the target 5 feet to an unoccupied space of your choice if the target is willing to move, the spell hits it with an attack, or it fails a saving throw against the spell.",
    levels: [6],
    subClassId: ids.graviturgy,
  },
  {
    name: "Violent Attraction",
    description:
      "At 10th level, when another creature that you can see within 60 feet of you hits with a weapon attack, you can use your reaction to increase the attack's velocity, causing the attack's target to take an extra 1d10 damage of the weapon's type.\n\nAlternatively, if a creature within 60 feet of you takes damage from a fall, you can use your reaction to increase the fall's damage by 2d10.\n\nYou can use this feature a number of times equal to your Intelligence modifier (a minimum of once). You regain all expended uses when you finish a long rest.",
    levels: [10],
    subClassId: ids.graviturgy,
  },
  {
    name: "Event Horizon",
    description:
      "Starting at 14th level, as an action, you can magically emit a powerful field of gravitational energy that tugs at other creatures for up to 1 minute or until your concentration ends (as if you were concentrating on a spell). For the duration, whenever a creature hostile to you starts its turn within 30 feet of you, it must make a Strength saving throw against your spell save DC. On a failed save, it takes 2d10 force damage, and its speed is reduced to 0 until the start of its next turn. On a successful save, it takes half as much damage, and every foot it moves this turn costs 2 extra feet of movement.\n\nOnce you use this feature, you can't do so again until you finish a long rest or until you expend a spell slot of 3rd level or higher on it.",
    levels: [14],
    subClassId: ids.graviturgy,
  },
  // illusion
  {
    name: "Illusion Savant",
    description:
      "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an illusion spell into your spellbook is halved.",
    levels: [2],
    subClassId: ids.illusion,
  },
  {
    name: "Improved Minor Illusion",
    description:
      "When you choose this school at 2nd level, you learn the Minor Illusion cantrip. If you already know this cantrip, you learn a different wizard cantrip of your choice. The cantrip doesn't count against your number of cantrips known.\n\nWhen you cast Minor Illusion, you can create both a sound and an image with a single casting of the spell.",
    levels: [2],
    subClassId: ids.illusion,
  },
  {
    name: "Malleable Illusions",
    description:
      "Starting at 6th level, when you cast an illusion spell that has a duration of 1 minute or longer, you can use your action to change the nature of that illusion (using the spell's normal parameters for the illusion), provided that you can see the illusion.",
    levels: [6],
    subClassId: ids.illusion,
  },
  {
    name: "Illusory Self",
    description:
      "Beginning at 10th level, you can create an illusory duplicate of yourself as an instant, almost instinctual reaction to danger. When a creature makes an attack roll against you, you can use your reaction to interpose the illusory duplicate between the attacker and yourself. The attack automatically misses you, then the illusion dissipates.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest.",
    levels: [10],
    subClassId: ids.illusion,
  },
  {
    name: "Illusory Reality",
    description:
      "By 14th level, you have learned the secret of weaving shadow magic into your illusions to give them a semi-reality. When you cast an illusion spell of 1st level or higher, you can choose one inanimate, nonmagical object that is part of the illusion and make that object real. You can do this on your turn as a bonus action while the spell is ongoing. The object remains real for 1 minute. For example, you can create an illusion of a bridge over a chasm and then make it real long enough for your allies to cross.\n\nThe object can't deal damage or otherwise directly harm anyone.",
    levels: [14],
    subClassId: ids.illusion,
  },
  // necromancy
  {
    name: "Necromancy Savant",
    description:
      "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a necromancy spell into your spellbook is halved.",
    levels: [2],
    subClassId: ids.necromancy,
  },
  {
    name: "Grim Harvest",
    description:
      "At 2nd level, you gain the ability to reap life energy from creatures you kill with your spells. Once per turn when you kill one or more creatures with a spell of 1st level or higher, you regain hit points equal to twice the spell's level, or three times its level if the spell belongs to the School of Necromancy. You don't gain this benefit for killing constructs or undead.",
    levels: [2],
    subClassId: ids.necromancy,
  },
  {
    name: "Undead Thralls",
    description:
      "At 6th level, you add the Animate Dead spell to your spellbook if it is not there already. When you cast Animate Dead, you can target one additional corpse or pile of bones, creating another zombie or skeleton, as appropriate.\n\nWhenever you create an undead using a necromancy spell, it has additional benefits:",
    options: [
      "The creature's hit point maximum is increased by an amount equal to your wizard level.",
      "The creature adds your proficiency bonus to its weapon damage rolls.",
    ],
    levels: [6],
    subClassId: ids.necromancy,
  },
  {
    name: "Inured to Undeath",
    description:
      "Beginning at 10th level, you have resistance to necrotic damage, and your hit point maximum can't be reduced. You have spent so much time dealing with undead and the forces that animate them that you have become inured to some of their worst effects.",
    levels: [10],
    subClassId: ids.necromancy,
  },
  {
    name: "Command Undead",
    description:
      "Starting at 14th level, you can use magic to bring undead under your control, even those created by other wizards. As an action, you can choose one undead that you can see within 60 feet of you. That creature must make a Charisma saving throw against your wizard spell save DC. If it succeeds, you can't use this feature on it again. If it fails, it becomes friendly to you and obeys your commands until you use this feature again.\n\nIntelligent undead are harder to control in this way. If the target has an Intelligence of 8 or higher, it has advantage on the saving throw. If it fails the saving throw and has an Intelligence of 12 or higher, it can repeat the saving throw at the end of every hour until it succeeds and breaks free.",
    levels: [14],
    subClassId: ids.necromancy,
  },
  // scribes
  {
    name: "Wizardly Quill",
    description:
      "At 2nd level, as a bonus action, you can magically create a Tiny quill in your free hand.This quill disappears if you create another one or if you die. The magic quill has the following properties:",
    options: [
      "The quill doesn't require ink. When you write with it, it produces ink in a color of your choice on the writing surface.",
      "The time you must spend to copy a spell into your spell book equals 2 minutes per spell level if you use the quill for the transcription.",
      "You can erase anything you write with the quill if you wave the feather over the text as a bonus action, provided the text is within 5 feet of you.",
    ],
    levels: [2],
    subClassId: ids.scribes,
  },
  {
    name: "Awakened Spellbook",
    description:
      "Using specially prepared inks and ancient incantations passed down by your wizardly order, you have awakened an arcane sentience within your spellbook.\n\nAt 2nd level, while you are holding the book, it gain the benefits shown in the list below.\n\nFurthermore, if necessary, you can replace the book over the course of a short rest by using your Wizardly Quill to write arcane sigils in a blank book or a magic spellbook to which you're attuned. At the end of the rest, your spellbook's consciousness is summoned into the new book, which the consciousness transforms into your spellbook, along with all its spells. If the previous book still existed somewhere, all the spells vanish from its pages.",
    options: [
      "You can use the book as a spellcasting focus for your wizard spells.",
      "When you cast a wizard spell with a spell slot, you can temporarily replace its damage type with a type that appears in another spell in your spellbook, which magically alters the spell's formula for this casting only. The latter spell must be of the same level as the spell slot you expend.",
      "When you cast a wizard spell as a ritual, you can use the spell's normal casting time, rather than adding 10 minutes to it. Once you use this benefit, you can't do so again until you finish a long rest.",
    ],
    levels: [2],
    subClassId: ids.scribes,
  },
  {
    name: "Manifest Mind",
    description:
      "At 6th level, you can conjure forth the mind of your Awakened Spellbook. As a bonus action while the book is on your person, you can cause the mind to manifest as a Tiny spectral object, hovering in an unoccupied space of your choice within 60 feet of you. The spectral mind is intangible and doesn't occupy its space, and it sheds dim light in a 10-foot radius. It looks like a ghostly tome, a cascade of text, or a scholar from the past (your choice).\n\nWhile manifested, the spectral mind can hear and see, and it has darkvision with a range of 60 feet. The mind can telepathically share with you what it sees and hears (no action required).\n\nWhenever you cast a wizard spell on your turn, you can cast it as if you were in the spectral mind's space, instead of your own, using its senses. You can do so a number of times per day equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n\nAs a bonus action, you can cause the spectral mind to hover up to 30 feet to an unoccupied space that you or it can see. It can pass through creatures but not objects.\n\nThe spectral mind stops manifesting if it is ever more than 300 feet away from you, if someone casts Dispel Magic on it, if the Awakened Spellbook is destroyed, if you die, or if you dismiss the spectral mind as a bonus action.\n\nOnce you conjure the mind, you can't do so again until you finish a long rest, unless you expend a spell slot of any level to conjure it again.",
    levels: [6],
    subClassId: ids.scribes,
  },
  {
    name: "Master Scrivener",
    description:
      "At 10th level, whenever you finish a long rest, you can create one magic scroll by touching your Wizardly Quill to a blank piece of paper or parchment and causing one spell from your Awakened Spellbook to be copied onto the scroll. The spellbook must be within 5 feet of you when you make the scroll.\n\nThe chosen spell must be of 1st or 2nd level and must have a casting time of 1 action. Once in the scroll, the spell's power is enhanced, counting as one level higher than normal. You can cast the spell from the scroll by reading it as an action. The scroll is unintelligible to anyone else, and the spell vanishes from the scroll when you cast it or when you finish your next long rest.\n\nYou are also adept at crafting spell scrolls, which are described in the treasure chapter of the Dungeon Master's Guide. The gold and time you must spend to make such a scroll are halved if you use your Wizardly Quill.",
    levels: [10],
    subClassId: ids.scribes,
  },
  {
    name: "One with the Word",
    description:
      "At 14th level, your connection to your Awakened Spellbook has become so profound that your soul has become entwined with it. While the book is on your person, you have advantage on all Intelligence (Arcana) checks, as the spellbook helps you remember magical lore.\n\nMoreover, if you take damage while your spellbook's mind is manifested, you can prevent all of that damage to you by using your reaction to dismiss the spectral mind, using its magic to save yourself. Then roll 3d6. The spellbook temporarily loses spells of your choice that have a combined spell level equal to that roll or higher. For example, if the roll's total is 9, spells vanish from the book that have a combined level of at least 9, which could mean one 9th-level spell, three 3rd-level spells, or some other combination. If there aren't enough spells in the book to cover this cost, you drop to 0 hit points.\n\nUntil you finish 1d6 long rests, you are incapable of casting the lost spells, even if you find them on a scroll or in another spellbook. After you finish the required number of rests, the spells reappear in the spell book.\n\nOnce you use this feature, you can't do so again until you finish a long rest.",
    levels: [14],
    subClassId: ids.scribes,
  },
  {
    name: "Transmutation Savant",
    description:
      "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a transmutation spell into your spellbook is halved.",
    levels: [2],
    subClassId: ids.transmutation,
  },
  {
    name: "Minor Alchemy",
    description:
      "Starting at 2nd level when you select this school, you can temporarily alter the physical properties of one nonmagical object, changing it from one substance into another. You perform a special alchemical procedure on one object composed entirely of wood, stone (but not a gemstone), iron, copper, or silver, transforming it into a different one of those materials. For each 10 minutes you spend performing the procedure, you can transform up to 1 cubic foot of material. After 1 hour, or until you lose your concentration (as if you were concentrating on a spell), the material reverts to its original substance.",
    levels: [2],
    subClassId: ids.transmutation,
  },
  {
    name: "Transmuter's Stone",
    description:
      "Starting at 6th level, you can spend 8 hours creating a transmuter's stone that stores transmutation magic. You can benefit from the stone yourself or give it to another creature. A creature gains a benefit of your choice as long as the stone is in the creature's possession. When you create the stone, choose the benefit from one of the options below.\n\n Each time you cast a transmutation spell of 1st level or higher, you can change the effect of your stone if the stone is on your person.\n\n If you create a new transmuter's stone, the previous one ceases to function.",
    options: [
      "Darkvision out to a range of 60 feet, as described in chapter 8",
      "An increase to speed of 10 feet while the creature is unencumbered",
      "Proficiency in Constitution saving throws",
      "Resistance to acid, cold, fire, lightning, or thunder damage (your choice whenever you choose this benefit)",
    ],
    levels: [6],
    subClassId: ids.transmutation,
  },
  {
    name: "Shapechanger",
    description:
      "At 10th level, you add the Polymorph spell to your spellbook, if it is not there already. You can cast Polymorph without expending a spell slot. When you do so, you can target only yourself and transform into a beast whose challenge rating is 1 or lower.\n\nOnce you cast Polymorph in this way, you can't do so again until you finish a short or long rest, though you can still cast it normally using an available spell slot.",
    levels: [10],
    subClassId: ids.transmutation,
  },
  {
    name: "Master Transmuter",
    description:
      "Starting at 14th level, you can use your action to consume the reserve of transmutation magic stored within your transmuter's stone in a single burst. When you do so, choose one of the following effects. Your transmuter's stone is destroyed and can't be remade until you finish a long rest.",
    options: [
      "**Major Transformation.**You can transmute one nonmagical object – no larger than a 5-foot cube – into another nonmagical object of similar size and mass and of equal or lesser value. You must spend 10 minutes handling the object to transform it.",
      "**Panacea.**You remove all curses, diseases, and poisons affecting a creature that you touch with the transmuter's stone. The creature also regains all its hit points.",
      "**Restore Life.**You cast the Raise Dead spell on a creature you touch with the transmuter's stone, without expending a spell slot or needing to have the spell in your spellbook.",
      "**Restore Youth.** You touch the transmuter's stone to a willing creature, and that creature's apparent age is reduced by 3d10 years, to a minimum of 13 years. This effect doesn't extend the creature's lifespan.",
    ],
    levels: [14],
    subClassId: ids.transmutation,
  },
  // war magic
  {
    name: "Arcane Deflection",
    description:
      "At 2nd level, you have learned to weave your magic to fortify yourself against harm. When you are hit by an attack or you fail a saving throw, you can use your reaction to gain a +2 bonus to your AC against that attack or a +4 bonus to that saving throw.\n\nWhen you use this feature, you can't cast spells other than cantrips until the end of your next turn.",
    levels: [2],
    subClassId: ids.warMagic,
  },
  {
    name: "Tactical Wit",
    description:
      "Starting at 2nd level, your keen ability to assess tactical situations allows you to act quickly in battle. You can give yourself a bonus to your initiative rolls equal to your Intelligence modifier.",
    levels: [2],
    subClassId: ids.warMagic,
  },
  {
    name: "Power Surge",
    description:
      "Starting at 6th level, you can store magical energy within yourself to later empower your damaging spells.\n\nYou can store a maximum number of power surges equal to your Intelligence modifier (minimum of one). Whenever you finish a long rest, your number of power surges resets to one. Whenever you successfully end a spell with Dispel Magic or Counterspell, you gain one power surge, as you steal magic from the spell you foiled. If you end a short rest with no power surges, you gain one power surge.\n\nOnce per turn when you deal damage to a creature or object with a wizard spell, you can spend one power surge to deal extra force damage to that target. The extra damage equals half your wizard level.",
    levels: [6],
    subClassId: ids.warMagic,
  },
  {
    name: "Durable Magic",
    description:
      "Beginning at 10th level, the magic you channel helps ward off harm. While you maintain concentration on a spell, you have a +2 bonus to AC and all saving throws.",
    levels: [10],
    subClassId: ids.warMagic,
  },
  {
    name: "Deflecting Shroud",
    description:
      "At 14th level, your Arcane Deflection becomes infused with deadly magic. When you use your Arcane Deflection feature, you can cause magical energy to arc from you. Up to three creatures of your choice within 60 feet of you each take force damage equal to half your wizard level.",
    levels: [14],
    subClassId: ids.warMagic,
  },
];

export default WizardSubclassFeatures;
