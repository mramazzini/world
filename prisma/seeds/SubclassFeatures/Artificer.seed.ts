import { Prisma } from "@prisma/client";

const ids = {
  alchemist: 106,
  armorer: 107,
  artillerist: 108,
  battleSmith: 109,
};

interface SubclassFeature extends PrismaJson.Feature {
  subClassId: number;
}

const ArtificerSubclassFeatures: SubclassFeature[] = [
  // Alchemist
  {
    name: "Tool Proficiency",
    description:
      "When you adopt this specialization at 3rd level, you gain proficiency with alchemist's supplies. If you already have this proficiency, you gain proficiency with one other type of artisan's tools of your choice.",
    levels: [3],
    subClassId: ids.alchemist,
  },
  {
    name: "Alchemist Spells",
    description:
      "Starting at 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Alchemist Spells table. These spells count as artificer spells for you, but they don’t count against the number of artificer spells you prepare.",
    levels: [3],
    subClassId: ids.alchemist,
    extendedTable: [
      {
        "": {
          headers: ["Artificer Level", "Spells"],
          data: [
            {
              "Artificer Level": "3rd",
              Spells: "Healing Word, Ray of Sickness",
            },
            {
              "Artificer Level": "5th",
              Spells: "Flaming Sphere, Melf's Acid Arrow",
            },
            {
              "Artificer Level": "9th",
              Spells: "Gaseous Form, Mass Healing Word",
            },
            {
              "Artificer Level": "13th",
              Spells: "Blight, Death Ward",
            },
            {
              "Artificer Level": "17th",
              Spells: "Cloudkill, Raise Dead",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Experimental Elixirs",
    description:
      "Beginning at 3rd level, whenever you finish a long rest, you can magically produce an experimental elixir in an empty flask you touch. Roll on the Experimental Elixir table for the elixir's effect, which is triggered when someone drinks the elixir. As an action, a creature can drink the elixir or administer it to an incapacitated creature.\n\nYou can create additional experimental elixirs by expending a spell slot of 1st level or higher for each one. When you do so, you use your action to create the elixir in an empty flask you touch, and you choose the elixir's effect from the Experimental Elixir table.\n\nCreating an experimental elixir requires you to have alchemist supplies on your person, and any elixir you create with this feature lasts until it is drunk or until the end of your next long rest.\n\nWhen you reach certain levels in this class, you can make more elixirs at the end of a long rest: two at 6th level and three at 15th level. Roll for each elixir's effect separately. Each elixir requires its own flask.",
    levels: [3],
    subClassId: ids.alchemist,
    extendedTable: [
      {
        "Expiremental Elixirs": {
          headers: ["d6", "Effect"],
          data: [
            {
              d6: "1",
              Effect:
                "The drinker regains a number of hit points equal to 2d4 + your Intelligence Modifier",
            },
            {
              d6: "2",
              Effect:
                "The drinker's walking speed increases by 10 feet for 1 hour.",
            },
            {
              d6: "3",
              Effect: "The drinker gains a +1 bonus to AC for 10 minutes.",
            },
            {
              d6: "4",
              Effect:
                "The drinker can roll a d4 and add the number rolled to every attack roll and saving throw they make for the next minute.",
            },
            {
              d6: "5",
              Effect:
                "The drinker gains a flying speed of 10 feet for 10 minutes.",
            },
            {
              d6: "6",
              Effect:
                "The drinker's body is transformed as if by the Alter Self spell. The drinker determines the transformation caused by the spell, the effects of which last for 10 minutes.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Alchemical Savant",
    description:
      "At 5th level, you've developed masterful command of magical chemicals, enhancing the healing and damage you create through them. Whenever you cast a spell using your alchemist's supplies as the spellcasting focus, you gain a bonus to one roll of the spell. That roll must restore hit points or be a damage roll that deals acid, fire, necrotic, or poison damage, and the bonus equals your Intelligence modifier (minimum of +1).",
    levels: [5],
    subClassId: ids.alchemist,
  },
  {
    name: "Restorative Reagents",
    description:
      "Starting at 9th level, you can incorporate restorative reagents into some of your works:",
    levels: [9],
    subClassId: ids.alchemist,
    options: [
      "Whenever a creature drinks an experimental elixir you created, the creature gains temporary hit points equal to 2d6 + your Intelligence modifier (minimum of 1 temporary hit point).",
      "You can cast Lesser Restoration without expending a spell slot and without preparing the spell, provided you use alchemist's supplies as the spellcasting focus. You can do so a number of times equal to your Intelligence modifier (minimum of once), and you regain all expended uses when you finish a long rest.",
    ],
  },
  {
    name: "Chemical Mastery",
    description:
      "By 15th level, you have been exposed to so many chemicals that they pose little risk to you, and you can use them to quickly end certain ailments:\n\nYou gain resistance to acid damage and poison damage, and you are now immune to the poisoned condition.\n\nYou can cast Greater Restoration and Heal without expending a spell slot, without preparing the spell, and without providing the material component, provided you use alchemist’s supplies as the spellcasting focus. Once you cast either spell with this feature, you can't cast that spell with it again until you finish a long rest.",
    levels: [15],
    subClassId: ids.alchemist,
  },
  // Armorer
  {
    name: "Tools of the Trade",
    description:
      "When you adopt this specialization at 3rd level, you gain proficiency with heavy armor. You also gain proficiency with smith's tools. If you already have this tool proficiency, you gain proficiency with one other type of artisan's tools of your choice.",
    levels: [3],
    subClassId: ids.armorer,
  },
  {
    name: "Armorer Spells",
    description:
      "Starting at 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Armorer Spells table. These spells count as artificer spells for you, but they don't count against the number of artificer spells you prepare.",
    levels: [3],
    subClassId: ids.armorer,
    extendedTable: [
      {
        "": {
          headers: ["Artificer Level", "Spells"],
          data: [
            {
              "Artificer Level": "3rd",
              Spells: "Magic Missile, Thunderwave",
            },
            {
              "Artificer Level": "5th",
              Spells: "Mirror Image, Shatter",
            },
            {
              "Artificer Level": "9th",
              Spells: "Hypnotic Pattern, Lightning Bolt",
            },
            {
              "Artificer Level": "13th",
              Spells: "Fire Shield, Greater Invisibility",
            },
            {
              "Artificer Level": "17th",
              Spells: "Passwall, Wall of Force",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Arcane Armor",
    description:
      "Beginning at 3rd level, your metallurgical pursuits have led to you making armor a conduit for your magic. As an action, you can turn a suit of armor you are wearing into Arcane Armor, provided you have smith's tools in hand.\n\nThe armor continues to be Arcane Armor until you don another suit of armor or you die.\n\nYou gain the following benefits while wearing this armor:",
    options: [
      "If the armor normally has a Strength requirement, the arcane armor lacks this requirement for you.",
      "You can use the arcane armor as a spellcasting focus for your artificer spells.",
      "The armor attaches to you and can’t be removed against your will. It also expands to cover your entire body, although you can retract or deploy the helmet as a bonus action. The armor replaces any missing limbs, functioning identically to a body part it is replacing.",
      "You can doff or don the armor as an action.",
    ],
    levels: [3],
    subClassId: ids.armorer,
  },
  {
    name: "Armor Model",
    description:
      "Beginning at 3rd level, you can customize your Arcane Armor. When you do so, choose one of the following armor models: Guardian or Infiltrator. The model you choose gives you special benefits while you wear it.\n\nEach model includes a special weapon. When you attack with that weapon, you can add your Intelligence modifier, instead of Strength or Dexterity, to the attack and damage rolls.\n\nYou can change the armor's model whenever you finish a short or long rest, provided you have smith's tools in hand.",
    levels: [3],
    subClassId: ids.armorer,
    extendedTable: [
      {
        "Guardian Armor Model": {
          headers: ["Effect", "Description"],
          data: [
            {
              Effect: "Thunder Gauntlets",
              Description:
                "Each of the armor's gauntlets counts as a simple melee weapon while you aren't holding anything in it, and it deals 1d8 thunder damage on a hit. A creature hit by the gauntlet has disadvantage on attack rolls against targets other than you until the start of your next turn, as the armor magically emits a distracting pulse when the creature attacks someone else.",
            },
            {
              Effect: "Defensive Field",
              Description:
                "As a bonus action, you can gain temporary hit points equal to your level in this class, replacing any temporary hit points you already have. You lose these temporary hit points if you doff the armor. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
            },
          ],
        },
      },
      {
        "Infiltrator Armor Model": {
          headers: ["Effect", "Description"],
          data: [
            {
              Effect: "Lightning Launcher",
              Description:
                "A gemlike node appears on one of your armored fists or on the chest (your choice). It counts as a simple ranged weapon, with a normal range of 90 feet and a long range of 300 feet, and it deals 1d6 lightning damage on a hit. Once on each of your turns when you hit a creature with it, you can deal an extra 1d6 lightning damage to that target.",
            },
            {
              Effect: "Powered Steps",
              Description: "Your walking speed increases by 5 feet.",
            },
            {
              Effect: "Dampening Field",
              Description:
                "You have advantage on Dexterity (Stealth) checks. If the armor normally imposes disadvantage on such checks, the advantage and disadvantage cancel each other, as normal.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Extra Attack",
    description:
      "Starting at 5th level, you can attack twice, rather than once, whenever you take the Attack action on your turn.",
    levels: [5],
    subClassId: ids.armorer,
  },
  {
    name: "Armor Modifications",
    description:
      "At 9th level, you learn how to use your artificer infusions to specially modify your Arcane Armor. That armor now counts as separate items for the purposes of your Infuse Items feature: armor (the chest piece), boots, helmet, and the armor's special weapon. Each of those items can bear one of your infusions, and the infusions transfer over if you change your armor's model with the Armor Model feature. In addition, the maximum number of items you can infuse at once increases by 2, but those extra items must be part of your Arcane Armor.",
    levels: [9],
    subClassId: ids.armorer,
  },
  {
    name: "Perfected Armor",
    description:
      "At 15th level, your Arcane Armor gains additional benefits based on its model, as shown below.",
    levels: [15],
    subClassId: ids.armorer,
    extendedTable: [
      {
        "": {
          headers: ["Armor Model", "Effect"],
          data: [
            {
              "Armor Model": "Guardian",
              Effect:
                "When a Huge or smaller creature you can see ends its turn within 30 feet of you, you can use your reaction to magically force it to make a Strength saving throw against your spell save DC. On a failed save, you pull the creature up to 25 feet directly to an unoccupied space. If you pull the target to a space within 5 feet of you, you can make a melee weapon attack against it as part of this reaction.\n\nYou can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest.",
            },
            {
              "Armor Model": "Infiltrator",
              Effect:
                "Any creature that takes lightning damage from your Lightning Launcher glimmers with magical light until the start of your next turn. The glimmering creature sheds dim light in a 5-foot radius, and it has disadvantage on attack rolls against you, as the light jolts it if it attacks you. In addition, the next attack roll against it has advantage, and if that attack hits, the target takes an extra 1d6 lightning damage.",
            },
          ],
        },
      },
    ],
  },
  // Artillerist
  {
    name: "Tool Proficiency",
    description:
      "When you adopt this specialization at 3rd level, you gain proficiency with woodcarver's tools. If you already have this proficiency, you gain proficiency with one other type of artisan's tools of your choice.",
    levels: [3],
    subClassId: ids.artillerist,
  },
  {
    name: "Artillerist Spells",
    description:
      "Starting at 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Artillerist Spells table. These spells count as artificer spells for you, but they don’t count against the number of artificer spells you prepare.",
    levels: [3],
    subClassId: ids.artillerist,
    extendedTable: [
      {
        "": {
          headers: ["Artificer Level", "Spells"],
          data: [
            {
              "Artificer Level": "3rd",
              Spells: "Shield, Thunderwave",
            },
            {
              "Artificer Level": "5th",
              Spells: "Scorching Ray, Shatter",
            },
            {
              "Artificer Level": "9th",
              Spells: "Fireball, Wind Wall",
            },
            {
              "Artificer Level": "13th",
              Spells: "Ice Storm, Wall of Fire",
            },
            {
              "Artificer Level": "17th",
              Spells: "Cone of Cold, Wall of Force",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Eldritch Cannon",
    description:
      "Also at 3rd level, you've learned how to create a magical cannon. Using woodcarver's tools or smith's tools, you can take an action to magically create a Small or Tiny eldritch cannon in an unoccupied space on a horizontal surface within 5 feet of you. A Small eldritch cannon occupies its space, and a Tiny one can be held in one hand. Once you create a cannon, you can't do so again until you finish a long rest or until you expend a spell slot to create one. You can have only one cannon at a time and can't create one while your cannon is present.\n\nThe cannon is a magical object. Regardless of size, the cannon has an AC of 18 and a number of hit points equal to five times your artificer level. It is immune to poison damage and psychic damage. If it is forced to make an ability check or a saving throw, treat all its ability scores as 10 (+0). If the mending spell is cast on it, it regains 2d6 hit points. It disappears if it is reduced to 0 hit points or after 1 hour. You can dismiss it early as an action.\n\nWhen you create the cannon, you determine its appearance and whether it has legs. You also decide which type it is, choosing from the options on the Eldritch Cannons table. On each of your turns, you can take a bonus action to cause the cannon to activate if you are within 60 feet of it. As part of the same bonus action, you can direct the cannon to walk or climb up to 15 feet to an unoccupied space, provided it has legs.",
    extendedTable: [
      {
        "Eldritch Cannons": {
          headers: ["Cannon", "Activation"],
          data: [
            {
              Cannon: "Flamethrower",
              Activation:
                "The cannon exhales fire in an adjacent 15-foot cone that you designate. Each creature in that area must make a Dexterity saving throw against your spell save DC, taking 2d8 fire damage on a failed save or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried.",
            },
            {
              Cannon: "Force Ballista",
              Activation:
                "Make a ranged spell attack, originating from the cannon, at one creature or object within 120 feet of it. On a hit, the target takes 2d8 force damage, and if the target is a creature, it is pushed up to 5 feet away from the cannon.",
            },
            {
              Cannon: "Protector",
              Activation:
                "The cannon emits a burst of positive energy that grants itself and each creature of your choice within 10 feet of it a number of temporary hit points equal to 1d8 + your Intelligence modifier (minimum of +1).",
            },
          ],
        },
      },
    ],
    levels: [3],
    subClassId: ids.artillerist,
  },
  {
    name: "Arcane Firearm",
    description:
      "At 5th level, You know how to turn a wand, staff, or rod into an arcane firearm, a conduit for your destructive spells. When you finish a long rest, you can use woodcarver's tools to carve special sigils into a wand, staff, or rod and thereby turn it into your arcane firearm. The sigils disappear from the object if you later carve them on a different item. The sigils otherwise last indefinitely.\n\nYou can use your arcane firearm as a spellcasting focus for your artificer spells. When you cast an artificer spell through the firearm, roll a d8, and you gain a bonus to one of the spell's damage rolls equal to the number rolled.",
    levels: [5],
    subClassId: ids.artillerist,
  },
  {
    name: "Explosive Cannon",
    description:
      "Starting at 9th level, every eldritch cannon you create is more destructive:",
    levels: [9],
    subClassId: ids.artillerist,
    options: [
      "The cannon's damage rolls all increase by 1d8.",
      "As an action, you can command the cannon to detonate if you are within 60 feet of it. Doing so destroys the cannon and forces each creature within 20 feet of it to make a Dexterity saving throw against your spell save DC, taking 3d8 force damage on a failed save or half as much damage on a successful one.",
    ],
  },
  {
    name: "Fortified Position",
    description:
      "By 15th level, you’re a master at forming well-defended emplacements using Eldritch Cannon:",
    levels: [15],
    subClassId: ids.artillerist,
    options: [
      "You and your allies have half cover while within 10 feet of a cannon you create with Eldritch Cannon, as a result of a shimmering field of magical protection that the cannon emits.",
      "You can now have two cannons at the same time. You can create two with the same action (but not the same spell slot), and you can activate both of them with the same bonus action. You determine whether the cannons are identical to each other or different. You can't create a third cannon while you have two.",
    ],
  },
  // Battle Smith
  {
    name: "Tool Proficiency",
    description:
      "When you adopt this specialization at 3rd level, you gain proficiency with smith's tools. If you already have this proficiency, you gain proficiency with one other type of artisan's tools of your choice.",
    levels: [3],
    subClassId: ids.battleSmith,
  },
  {
    name: "Battle Smith Spells",
    description:
      "Starting at 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Battle Smith Spells table. These spells count as artificer spells for you, but they don’t count against the number of artificer spells you prepare.",
    levels: [3],
    subClassId: ids.battleSmith,
    extendedTable: [
      {
        "": {
          headers: ["Artificer Level", "Spells"],
          data: [
            {
              "Artificer Level": "3rd",
              Spells: "Heroism, Shield",
            },
            {
              "Artificer Level": "5th",
              Spells: "Branding Smite, Warding Bond",
            },
            {
              "Artificer Level": "9th",
              Spells: "Aura of Vitality, Conjure Barrage",
            },
            {
              "Artificer Level": "13th",
              Spells: "Aura of Purity, Fire Shield",
            },
            {
              "Artificer Level": "17th",
              Spells: "Banishing Smite, Mass Cure Wounds",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Battle Ready",
    description:
      "When you reach 3rd level, your combat training and your experiments with magic have paid off in two ways:",
    levels: [3],
    subClassId: ids.battleSmith,
    options: [
      "You gain proficiency with martial weapons.",
      "When you attack with a magic weapon, you can use your Intelligence modifier, instead of Strength or Dexterity modifier, for the attack and damage rolls.",
    ],
  },
  {
    name: "Steel Defender",
    description:
      "y 3rd level, your tinkering has borne you a faithful companion, a steel defender. It's friendly to you and your companions, and it obeys your commands. See its game statistics in the Steel Defender stat block, which uses your proficiency bonus (PB) in several places. You determine the creature's appearance and whether it has two legs or four; your choice has no effect on its game statistics.\n\nn combat, the defender shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the defender can take any action of its choice, not just Dodge.\n\nIf the Mending spell is cast on it, it regains 2d6 hit points. If it has died within the last hour, you can use your smith's tools as an action to revive it, provided you are within 5 feet of it and you expend a spell slot of 1st level or higher. The steel defender returns to life after 1 minute with all its hit points restored.\n\nAt the end of a long rest, you can create a new steel defender if you have smith's tools with you. If you already have a defender from this feature, the first one immediately perishes. The defender also perishes if you die.",
    levels: [3],
    subClassId: ids.battleSmith,
    extendedTable: [
      {
        "Steel Defender": {
          headers: ["STR", "DEX", "CON", "INT", "WIS", "CHA"],
          data: [
            {
              STR: "14 (+2)",
              DEX: "12 (+1)",
              CON: "14 (+2)",
              INT: "4 (-3)",
              WIS: "10 (+0)",
              CHA: "6 (-2)",
            },
          ],
        },
      },
      {
        "": {
          headers: ["Stat", "Value"],
          data: [
            {
              Stat: "Creature Type",
              Value: "Medium Construct",
            },
            {
              Stat: "Armor Class",
              Value: "15 (natural armor)",
            },
            {
              Stat: "Hit Points",
              Value:
                "2 + your Intelligence modifier + 5 times your artificer level (the defender has a number of Hit Dice [d8s] equal to your artificer level)",
            },
            {
              Stat: "Speed",
              Value: "40 ft.",
            },
            {
              Stat: "Saving Throws",
              Value: "Dex +1 plus PB, Con +2 plus PB",
            },
            {
              Stat: "Skills",
              Value: "Athletics +2 plus PB, Perception +0 plus PB x 2",
            },
            {
              Stat: "Damage Immunities",
              Value: "Poison",
            },
            {
              Stat: "Condition Immunities",
              Value: "Charmed, Exhaustion, Poisoned",
            },
            {
              Stat: "Senses",
              Value: "Darkvision 60 ft., Passive Perception 10 + (PB x 2)",
            },
            {
              Stat: "Languages",
              Value: "Understands the languages you speak",
            },
            {
              Stat: "Proficiency Bonus (PB)",
              Value: "equals your bonus",
            },
            {
              Stat: "Vigilant",
              Value: "The defender can't be surprised",
            },
          ],
        },
      },
      {
        "": {
          headers: ["Action", "Description"],
          data: [
            {
              Action: "Force-Empowered Rend",
              Description:
                "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft., one target you can see. Hit: 1d8 + PB force damage.",
            },
            {
              Action: "Repair (3/Day)",
              Description:
                "The magical mechanisms inside the defender restore 2d8 + PB hit points to itself or to one construct or object within 5 feet of it.",
            },
          ],
        },
      },
      {
        "": {
          headers: ["Reaction", "Description"],
          data: [
            {
              Reaction: "Deflect Attack",
              Description:
                "The defender imposes disadvantage on the attack roll of one creature it can see that is within 5 feet of it, provided the attack roll is against a creature other than the defender.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Extra Attack",
    description:
      "Starting at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
    levels: [5],
    subClassId: ids.battleSmith,
  },
  {
    name: "Arcane Jolt",
    description:
      "At 9th level, you've learn new ways to channel arcane energy to harm or heal. When either you hit a target with a magic weapon attack or your steel defender hits a target, you can channel magical energy through the strike to create one of the effects listed below.\n\nYou can use this energy a number of times equal to your Intelligence modifier (minimum of once), but you can do so no more than once on a turn. You regain all expended uses when you finish a long rest.",
    levels: [9],
    subClassId: ids.battleSmith,
    extendedTable: [
      {
        "": {
          headers: ["Effect"],
          data: [
            {
              Effect: "The target takes an extra 2d6 force damage.",
            },
            {
              Effect:
                "Choose one creature or object you can see within 30 feet of the target. Healing energy flows into the chosen recipient, restoring 2d6 hit points to it.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Improved Defender",
    description:
      "At 15th level, your Arcane Jolt and steel defender become more powerful:",
    levels: [15],
    subClassId: ids.battleSmith,
    options: [
      "The extra damage and the healing of your Arcane Jolt both increase to 4d6.",
      "Your steel defender gains a +2 bonus to Armor Class.",
      "Whenever your steel defender uses its Deflect Attack, the attacker takes force damage equal to 1d4 + your Intelligence modifier.",
    ],
  },
];

export default ArtificerSubclassFeatures;
