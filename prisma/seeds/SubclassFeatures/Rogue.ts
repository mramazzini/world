import { Prisma } from "@prisma/client";

const ids = {
  arcane: 89,
  assassin: 90,
  inquisitive: 91,
  mastermind: 92,
  phantom: 93,
  scout: 94,
  soulknife: 95,
  swashbuckler: 96,
  thief: 97,
};

const RogueSubclassFeatures: Prisma.SubClassFeatureCreateManyInput[] = [
  // Arcane Trickster
  {
    subClassId: ids.arcane,
    name: "Arcane Trickster Spellcasting",
    levels: [3],
    description:
      "When you reach 3rd level, you augment your martial prowess with the ability to cast spells.\n\n**Cantrips**\n\nYou learn three cantrips: Mage Hand and two other cantrips of your choice from the wizard spell list. You learn another wizard cantrip of your choice at 10th level.\n\n**Spell Slots**\n\nThe Arcane Trickster Spellcasting table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.\n\n**Spells Known**\n\nYou know three 1st-level wizard spells of your choice, two of which you must choose from the enchantment and illusion spells on the wizard spell list.\n\nThe Spells Known column of the Arcane Trickster Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an enchantment or illusion spell of your choice, and must be of a level for which you have spell slots. For instance, when you reach 7th level in this class, you can learn one new spell of 1st or 2nd level.\n\nThe spells you learn at 8th, 14th, and 20th level can come from any school of magic.\n\nWhenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an enchantment or illusion spell, unless you're replacing the spell you gained at 3rd, 8th, 14th, or 20th level from any school of magic.\n\n**SpellCasting Ability**\n\nIntelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.\n\n**Spell save DC** = 8 + your proficiency bonus + your Intelligence modifier\n\n**Spell attack modifier** = your proficiency bonus + your Intelligence modifier",
    extendedTable: [
      {
        "": {
          headers: [
            "Level",
            "Cantrips Known",
            "Spells Known",
            "1st",
            "2nd",
            "3rd",
            "4th",
          ],
          data: [
            {
              Level: "3rd",
              "Cantrips Known": "2",
              "Spells Known": "3",
              "1st": "2",
              "2nd": "-",
              "3rd": "-",
              "4th": "-",
            },
          ],
        },
      },
    ],
  },
];

export default RogueSubclassFeatures;
