import { Prisma } from "@prisma/client";

const ids = {
  ancestralGuardian: 11,
  battlerager: 12,
  beast: 13,
  berserker: 14,
  giant: 15,
  stormHerald: 16,
  totamWarrior: 17,
  wildMagic: 18,
  zealot: 19,
};
interface SubclassFeature extends PrismaJson.Feature {
  subClassId: number;
}

const BarbarianSubclassFeatures: SubclassFeature[] = [
  // ancestral guardian
  {
    name: "Ancestral Protectors",
    description:
      "Starting when you choose this path at 3rd level, spectral warriors appear when you enter your rage. While you're raging, the first creature you hit with an attack on your turn becomes the target of the warriors, which hinder its attacks. Until the start of your next turn, that target has disadvantage on any attack roll that isn't against you, and when the target hits a creature other than you with an attack, that creature has resistance to the damage dealt by the attack. The effect on the target ends early if your rage ends.",
    subClassId: ids.ancestralGuardian,
    levels: [3],
  },
  {
    name: "Spirit Shield",
    description:
      "Beginning at 6th level, the guardian spirits that aid you can provide supernatural protection to those you defend. If you are raging and another creature you can see within 30 feet of you takes damage, you can use your reaction to reduce that damage by 2d6.\n\nWhen you reach certain levels in this class, you can reduce the damage by more: by 3d6 at 10th level and by 4d6 at 14th level.",
    subClassId: ids.ancestralGuardian,
    levels: [6, 10, 14],
  },
  {
    name: "Consult the Spirits",
    description:
      "At 10th level, you gain the ability to consult with your ancestral spirits. When you do so, you cast the Augury or Clairvoyance spell, without using a spell slot or material components. Rather than creating a spherical sensor, this use of clairvoyance invisibly summons one of your ancestral spirits to the chosen location. Wisdom is your spellcasting ability for these spells.\n\nAfter you cast either spell in this way, you can't use this feature again until you finish a short or long rest.",
    subClassId: ids.ancestralGuardian,
    levels: [10],
  },
  {
    name: "Vengeful Ancestors",
    description:
      "At 14th level, your ancestral spirits grow powerful enough to retaliate. When you use your Spirit Shield to reduce the damage of an attack, the attacker takes an amount of force damage that your Spirit Shield prevents.",
    subClassId: ids.ancestralGuardian,
    levels: [14],
  },
  //Path of the Battlerager
  {
    name: "Battlerager Armor",
    description:
      "When you choose this path at 3rd level, you gain the ability to use spiked armor as a weapon.\n\nWhile you are wearing spiked armor and are raging, you can use a bonus action to make one melee weapon attack with your armor spikes against a target within 5 feet of you. If the attack hits, the spikes deal 1d4 piercing damage. You use your Strength modifier for the attack and damage rolls.\n\nAdditionally, when you use the Attack action to grapple a creature, the target takes 3 piercing damage if your grapple check succeeds.",
    subClassId: ids.battlerager,
    levels: [3],
  },
  {
    name: "Reckless Abandon",
    description:
      "Starting at 6th level, when you use Reckless Attack while raging, you also gain temporary hit points equal to your Constitution modifier (minimum of 1). They vanish when your rage ends.",
    subClassId: ids.battlerager,
    levels: [6],
  },
  {
    name: "Battlerager Charge",
    description:
      "Beginning at 10th level, you can take the Dash action as a bonus action while you're raging.",
    subClassId: ids.battlerager,
    levels: [10],
  },
  {
    name: "Spiked Retribution",
    description:
      "At 14th level, when a creature within 5 feet of you hits you with a melee attack, the attacker takes 3 piercing damage if you are raging, aren't incapacitated, and are wearing spiked armor.",
    subClassId: ids.battlerager,
    levels: [14],
  },
  //Path of the Beast
  {
    name: "Form of the Beast",
    description:
      "Starting when you choose this path at 3rd level, when you enter your rage, you can transform, revealing the bestial power within you. Until the rage ends, you manifest a natural weapon. It counts as a simple melee weapon for you, and you add your Strength modifier to the attack and damage rolls when you attack with it, as normal.\n\nYou choose the weapon’s form each time you rage:",
    extendedTable: [
      {
        "": {
          headers: ["Form", "Description"],
          data: [
            {
              Form: "Bite",
              Description:
                "Your mouth transforms into a bestial muzzle or great mandibles (your choice). It deals 1d8 piercing damage on a hit. Once on each of your turns when you damage a creature with this bite, you regain a number of hit points equal to your proficiency bonus, provided you have less than half your hit points when you hit.",
            },
            {
              Form: "Claws",
              Description:
                "Each of your hands transforms into a claw, which you can use as a weapon if it’s empty. It deals 1d6 slashing damage on a hit. Once on each of your turns when you attack with a claw using the Attack action, you can make one additional claw attack as part of the same action.",
            },
            {
              Form: "Tail",
              Description:
                "You grow a lashing, spiny tail, which deals 1d8 piercing damage on a hit and has the reach property. If a creature you can see within 10 feet of you hits you with an attack roll, you can use your reaction to swipe your tail and roll a d8, applying a bonus to your AC equal to the number rolled, potentially causing the attack to miss you.",
            },
          ],
        },
      },
    ],
    subClassId: ids.beast,
    levels: [3],
  },
  {
    name: "Bestial Soul",
    description:
      "Beginning at 6th level, the feral power within you increases, causing the natural weapons of your Form of the Beast to count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.\n\nYou can also alter your form to help you adapt to your surroundings. When you finish a short or long rest, choose one of the following benefits, which lasts until you finish a short or long rest:",
    options: [
      "You gain a swimming speed equal to your walking speed, and you can breathe underwater.",
      "You gain a climbing speed equal to your walking speed, and you can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
      "When you jump, you can make a Strength (Athletics) check and extend your jump by a number of feet equal to the check’s total. You can make this special check only once per turn.",
    ],
    subClassId: ids.beast,
    levels: [6],
  },
  {
    name: "Infectious Fury",
    description:
      "At 10th level, your bestial form can unleash a rabid fury. When you hit a creature with your natural weapons while you’re raging, the spirit within you can curse your target with rabid fury.\n\nYou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n\n The target must succeed on a Wisdom saving throw (DC 8 + your proficiency bonus + your Constitution modifier) or suffer one of the following effects (your choice):",
    options: [
      "The target must use its reaction to make a melee attack against another creature of your choice that you can see.",
      "The target takes psychic damage equal to your Constitution modifier.",
      "The target must make a Wisdom saving throw. On a failed save, it is frightened of you until the start of your next turn.",
    ],
    subClassId: ids.beast,
    levels: [10],
  },
  {
    name: "Call the Hunt",
    description:
      "At 14th level, the beast within you grows so powerful that you can spread its ferocity to others and gain resilience from them joining your hunt. When you enter your rage, you can choose a number of other willing creatures you can see within 30 feet of you equal to your Constitution modifier (minimum of one creature). You gain 5 temporary hit points for each creature that accepts this feature. Until the rage ends, the chosen creatures can use the following benefit once on each of their turns: when the creature hits a target with an attack roll and deals damage to it, the creature can roll a d6 and gain a bonus to the damage equal to the number rolled.\n\nYou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    subClassId: ids.beast,
    levels: [14],
  },
  //Path of the Berserker
  {
    name: "Frenzy",
    description:
      "Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.",
    subClassId: ids.berserker,
    levels: [3],
  },
  {
    name: "Mindless Rage",
    description:
      "Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.",
    subClassId: ids.berserker,
    levels: [6],
  },
  {
    name: "Intimidating Presence",
    description:
      "Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.\n\n If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours.",
    subClassId: ids.berserker,
    levels: [10],
  },
  {
    name: "Retaliation",
    description:
      "Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature.",
    subClassId: ids.berserker,
    levels: [14],
  },
  //Path of the Giant
  {
    name: "Giant's Power",
    description:
      "When you choose this path, you learn to speak, read, and write Giant or one other language of your choice if you already know Giant. Additionally, you learn a cantrip of your choice: either druidcraft or thaumaturgy. Wisdom is your spellcasting ability for this spell.",
    subClassId: ids.giant,
    levels: [3],
  },
  {
    name: "Giant's Havoc",
    description:
      "Your rages pull strength from the primal might of giants, transforming you into a hulking force of destruction. While raging, you gain the following benefits:",
    options: [
      "**Crushing Throw.** When you make a successful ranged attack with a thrown weapon using Strength, you can add your Rage Damage bonus to the attack’s damage roll.",
      "**Giant Stature.** Your reach increases by 5 feet, and if you are smaller than Large, you become Large, along with anything you are wearing. If there isn’t enough room for you to increase your size, your size doesn’t change.",
    ],
    subClassId: ids.giant,
    levels: [3],
  },
  {
    name: "Elemental Cleaver",
    description:
      "Your bond with the elemental might of giants grows, and you learn to infuse weapons with primordial energy.\n\nWhen you enter your rage, you can choose one weapon that you are holding and infuse it with one of the following damage types: acid, cold, fire, thunder, or lightning. While you wield the infused weapon during your rage, the weapon’s damage type changes to the chosen type, it deals an extra 1d6 damage of the chosen type when it hits, and it gains the thrown property, with a normal range of 20 feet and a long range of 60 feet. If you throw the weapon, it reappears in your hand the instant after it hits or misses a target. The infused weapon’s benefits are suppressed while a creature other than you wields it.\n\nWhile raging and holding the infused weapon, you can use a bonus action to change the infused weapon’s current damage type to another one from the damage type options above.\n\nIn addition, the extra damage dealt by your Elemental Cleaver feature increases to 2d6 at level 14.",
    subClassId: ids.giant,
    levels: [6, 14],
  },
  {
    name: "Mighty Impel",
    description:
      "Your connection to giant strength allows you to hurl both allies and enemies on the battlefield. As a bonus action while raging, you can choose one Medium or smaller creature within your reach and move it to an unoccupied space you can see within 30 feet of yourself. An unwilling creature must succeed on a Strength saving throw (DC equals 8 + your proficiency bonus + your Strength modifier) to avoid the effect.\n\nIf, at the end of this movement, the thrown creature isn’t on a surface or liquid that can support it, the creature falls, taking damage as normal and landing prone.",
    subClassId: ids.giant,
    levels: [10],
  },
  {
    name: "Demiugic Colossus",
    description:
      "The primordial power of your rage intensifies. When you rage, your reach increases by 10 feet, your size can increase to Large or Huge (your choice), and you can use your Mighty Impel to move creatures that are Large or smaller",
    subClassId: ids.giant,
    levels: [14],
  },
  // Path of the Storm Herald
  {
    name: "Storm Aura",
    description:
      "When you select this path at 3rd level, you emanate a stormy, magical aura while you rage. The aura extends 10 feet from you in every direction, but not through total cover.\n\nYour aura has an effect that activates when you enter your rage, and you can activate the effect again on each of your turns as a bonus action. Choose desert, sea, or tundra. Your aura's effect depends on that chosen environment, as detailed below. You can change your environment choice whenever you gain a level in this class.\n\nIf your aura's effects require a saving throw, the DC equals 8 + your proficiency bonus + your Constitution modifier.",
    extendedTable: [
      {
        "": {
          headers: ["Environment", "Effect"],
          data: [
            {
              Environment: "Desert",
              Effect:
                "At the start of each of your turns, each creature of your choice in your aura takes fire damage equal to half your Barbarian level, and you gain a bonus to the damage roll equal to your Constitution modifier.",
            },
            {
              Environment: "Sea",
              Effect:
                "At the start of each of your turns, you can choose one creature in your aura (including you, if you so desire). That creature gains temporary hit points equal to your Constitution modifier (minimum of 1).",
            },
            {
              Environment: "Tundra",
              Effect:
                "When you enter your rage, you can choose one creature you can see in your aura. That creature gains temporary hit points equal to your level in this class.",
            },
          ],
        },
      },
    ],
    subClassId: ids.stormHerald,
    levels: [3],
  },
  {
    name: "Storm Soul",
    description:
      "At 6th level, the storm grants you benefits even when your aura isn't active. The benefits are based on the environment you chose for your Storm Aura.",

    extendedTable: [
      {
        "": {
          headers: ["Environment", "Benefits"],
          data: [
            {
              Environment: "Desert",
              Benefits:
                "You gain resistance to fire damage, and you don’t suffer the effects of extreme heat, as described in the Dungeon Master's Guide. Moreover, as an action, you can touch a flammable object that isn't being worn or carried by anyone else and set it on fire.",
            },
            {
              Environment: "Sea",
              Benefits:
                "You gain resistance to lightning damage, and you can breathe underwater. You also gain a swimming speed of 30 feet.",
            },
            {
              Environment: "Tundra",
              Benefits:
                "You gain resistance to cold damage, and you don’t suffer the effects of extreme cold, as described in the Dungeon Master's Guide. Moreover, as an action, you can touch water and turn a 5-foot cube of it into ice, which melts after 1 minute. This action fails if a creature is in the cube.",
            },
          ],
        },
      },
    ],
    subClassId: ids.stormHerald,
    levels: [6],
  },
  {
    name: "Shielding Storm",
    description:
      "At 10th level, you learn to use your mastery of the storm to protect others. Each creature of your choice has the damage resistance you gained from the Storm Soul feature while the creature is in your Storm Aura.",
    subClassId: ids.stormHerald,
    levels: [10],
  },
  {
    name: "Raging Storm",
    description:
      "At 14th level, the power of the storm you channel grows mightier, lashing out at your foes. The effect is based on the environment you chose for your Storm Aura.",

    extendedTable: [
      {
        "": {
          headers: ["Environment", "Effect"],
          data: [
            {
              Environment: "Desert",
              Effect:
                "Immediately after a creature in your aura hits you with an attack, you can use your reaction to force that creature to make a Dexterity saving throw. On a failed save, the creature takes fire damage equal to half your Barbarian level.",
            },
            {
              Environment: "Sea",
              Effect:
                "When you hit a creature in your aura with an attack, you can use your reaction to force that creature to make a Strength saving throw. On a failed save, the creature is knocked prone, as if struck by a wave.",
            },
            {
              Environment: "Tundra",
              Effect:
                "Whenever the effect of your Storm Aura is activated, you can choose one creature you can see in the aura. That creature must succeed on a Strength saving throw, or its speed is reduced to 0 until the start of your next turn, as magical frost covers it.",
            },
          ],
        },
      },
    ],
    subClassId: ids.stormHerald,
    levels: [14],
  },
  // Path of the Totem Warrior
  {
    name: "Spirit Seeker",
    description:
      "Yours is a path that seeks attunement with the natural world, giving you a kinship with beasts. At 3rd level when you adopt this path, you gain the ability to cast the Beast Sense and Speak with Animals spells, but only as rituals.",
    subClassId: ids.totamWarrior,
    levels: [3],
  },
  {
    name: "Totem Spirit",
    description:
      "At 3rd level, when you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object – an amulet or similar adornment – that incorporates fur or feathers, claws, teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit. For example, if you have a bear totem spirit, you might be unusually hairy and thick-skinned, or if your totem is the eagle, your eyes turn bright yellow.\n\nYour totem animal might be an animal related to those listed here but more appropriate to your homeland. For example, you could choose a hawk or vulture in place of an eagle.",

    extendedTable: [
      {
        "": {
          headers: ["Totem Spirit", "Feature"],
          data: [
            {
              "Totem Spirit": "Bear",
              Feature:
                "While raging, you have resistance to all damage except psychic damage. The spirit of the bear makes you tough enough to stand up to any punishment.",
            },
            {
              "Totem Spirit": "Eagle",
              Feature:
                "While you're raging and aren't wearing heavy armor, other creatures have disadvantage on opportunity attack rolls against you, and you can use the Dash action as a bonus action on your turn. The spirit of the eagle makes you into a predator who can weave through the fray with ease.",
            },
            {
              "Totem Spirit": "Elk",
              Feature:
                "While you're raging and aren't wearing heavy armor, your walking speed increases by 15 feet. The spirit of the elk makes you extraordinarily swift.",
            },
            {
              "Totem Spirit": "Tiger",
              Feature:
                "While raging, you can add 10 feet to your long jump distance and 3 feet to your high jump distance. The spirit of the tiger empowers your leaps.",
            },
            {
              "Totem Spirit": "Wolf",
              Feature:
                "While you're raging, your friends have advantage on melee attack rolls against any creature within 5 feet of you that is hostile to you. The spirit of the wolf makes you a leader of hunters.",
            },
          ],
        },
      },
    ],
    subClassId: ids.totamWarrior,
    levels: [3],
  },
  {
    name: "Aspect of the Beast",
    description:
      "At 6th level, you gain a magical benefit based on the totem animal of your choice. You can choose the same animal you selected at 3rd level or a different one.",
    extendedTable: [
      {
        "": {
          headers: ["Totem Spirit", "Feature"],
          data: [
            {
              "Totem Spirit": "Bear",
              Feature:
                "You gain the might of a bear. Your carrying capacity (including maximum load and maximum lift) is doubled, and you have advantage on Strength checks made to push, pull, lift, or break objects.",
            },
            {
              "Totem Spirit": "Eagle",
              Feature:
                "You gain the eyesight of an eagle. You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100 feet away from you. Additionally, dim light doesn't impose disadvantage on your Wisdom (Perception) checks.",
            },
            {
              "Totem Spirit": "Elk",
              Feature:
                "Whether mounted or on foot, your travel pace is doubled, as is the pace of up to ten companions while they're within 60 feet of you and you're not incapacitated. The elk spirit helps you roam far and fast.",
            },
            {
              "Totem Spirit": "Tiger",
              Feature:
                "You gain proficiency in two skills from the following list: Athletics, Acrobatics, Stealth, and Survival. The cat spirit hones your survival instincts.",
            },
            {
              "Totem Spirit": "Wolf",
              Feature:
                "You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace.",
            },
          ],
        },
      },
    ],
    subClassId: ids.totamWarrior,
    levels: [6],
  },
  {
    name: "Spirit Walker",
    description:
      "At 10th level, you can cast the Commune with Nature spell, but only as a ritual. When you do so, a spiritual version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek.",
    subClassId: ids.totamWarrior,
    levels: [10],
  },
  {
    name: "Totemic Attunement",
    description:
      "At 14th level, you gain a magical benefit based on a totem animal of your choice. You can choose the same animal you selected previously or a different one.",

    extendedTable: [
      {
        "": {
          headers: ["Totem Spirit", "Feature"],
          data: [
            {
              "Totem Spirit": "Bear",
              Feature:
                "While you're raging, any creature within 5 feet of you that's hostile to you has disadvantage on attack rolls against targets other than you or another character with this feature. An enemy is immune to this effect if it can't see or hear you or if it can't be frightened.",
            },
            {
              "Totem Spirit": "Eagle",
              Feature:
                "While you're raging, you have a flying speed equal to your current walking speed. This benefit works only in short bursts; you fall if you end your turn in the air and nothing else is holding you aloft.",
            },
            {
              "Totem Spirit": "Elk",
              Feature:
                "While you're raging, you can use a bonus action during your move to pass through the space of a Large or smaller creature. That creature must succeed on a Strength saving throw (DC 8 + your Strength bonus + your proficiency bonus) or be knocked prone and take bludgeoning damage equal to 1d12 + your Strength modifier.",
            },
            {
              "Totem Spirit": "Tiger",
              Feature:
                "While you're raging, if you move at least 20 feet in a straight line toward a Large or smaller target right before making a melee weapon attack against it, you can use a bonus action to make an additional melee weapon attack against it.",
            },
            {
              "Totem Spirit": "Wolf",
              Feature:
                "While you're raging, you can use a bonus action on your turn to knock a Large or smaller creature prone when you hit it with melee weapon attack.",
            },
          ],
        },
      },
    ],
    subClassId: ids.totamWarrior,
    levels: [14],
  },
  // Path of the Wild Magic
  {
    name: "Magic Awareness",
    description:
      "When you choose this path at 3rd level, as an action, you can open your awareness to the presence of concentrated magic. Until the end of your next turn, you know the location of any spell or magic item within 60 feet of you that isn’t behind total cover. When you sense a spell, you learn which school of magic it belongs to.\n\nYou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    subClassId: ids.wildMagic,
    levels: [3],
  },
  {
    name: "Wild Surge",
    description:
      "Also at 3rd level, the magical energy roiling inside you sometimes erupts from you. When you enter your rage, roll 1d8 to determine the magical effect produced based on the options below.\n\nIf the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Constitution modifier.",

    extendedTable: [
      {
        "": {
          headers: ["Roll", "Effect"],
          data: [
            {
              Roll: "1",
              Effect:
                "Each creature of your choice that you can see within 30 feet of you must succeed on a Constitution saving throw or take 1d12 necrotic damage. You also gain 1d12 temporary hit points.",
            },
            {
              Roll: "2",
              Effect:
                "You teleport up to 30 feet to an unoccupied space you can see. Until your rage ends, you can use this effect again on each of your turns as a bonus action.",
            },
            {
              Roll: "3",
              Effect:
                "An intangible spirit, which looks like a flumph or a pixie (your choice), appears within 5 feet of one creature of your choice that you can see within 30 feet of you. At the end of the current turn, the spirit explodes, and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 1d6 force damage. Until your rage ends, you can use this effect again, summoning another spirit, on each of your turns as a bonus action.",
            },
            {
              Roll: "4",
              Effect:
                "Magic infuses one weapon of your choice that you are holding. Until your rage ends, the weapon's damage type changes to force, and it gains the light and thrown properties, with a normal range of 20 feet and a long range of 60 feet. If the weapon leaves your hand, the weapon reappears in your hand at the end of the current turn.",
            },
            {
              Roll: "5",
              Effect:
                "Whenever a creature hits you with an attack roll before your rage ends, that creature takes 1d6 force damage, as magic lashes out in retribution.",
            },
            {
              Roll: "6",
              Effect:
                "Until your rage ends, you are surrounded by multicolored, protective lights; you gain a +1 bonus to AC, and while within 10 feet of you, your allies gain the same bonus.",
            },
            {
              Roll: "7",
              Effect:
                "Flowers and vines temporarily grow around you; until your rage ends, the ground within 15 feet of you is difficult terrain for your enemies.",
            },
            {
              Roll: "8",
              Effect:
                "A bolt of light shoots from your chest. Another creature of your choice that you can see within 30 feet of you must succeed on a Constitution saving throw or take 1d6 radiant damage and be blinded until the start of your next turn. Until your rage ends, you can use this effect again on each of your turns as a bonus action",
            },
          ],
        },
      },
    ],
    subClassId: ids.wildMagic,
    levels: [3],
  },
  {
    name: "Bolstering Magic",
    description:
      "Beginning at 6th level, you can harness your wild magic to bolster yourself or a companion. As an action, you can touch one creature (which can be yourself) and confer one of the benfits below of your choice to that creature.\n\nYou can take this action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    options: [
      "For 10 minutes, the creature can roll a d3 whenever making an attack roll or an ability check and add the number rolled to the d20 roll.",
      "Roll a d3. The creature regains one expended spell slot, the level of which equals the number rolled or lower (the creature’s choice). Once a creature receives this benefit, that creature can’t receive it again until after a long rest.",
    ],
    subClassId: ids.wildMagic,
    levels: [6],
  },
  {
    name: "Unstable Backlash",
    description:
      "At 10th level, when you are imperiled during your rage, the magic within you can lash out; immediately after you take damage or fail a saving throw while raging, you can use your reaction to roll on the Wild Magic table and immediately produce the effect rolled. This effect replaces your current Wild Magic effect.",
    subClassId: ids.wildMagic,
    levels: [10],
  },
  {
    name: "Controlled Surge",
    description:
      "At 14th level, whenever you roll on the Wild Magic table, you can roll the die twice and choose which of the two effects to unleash. If you roll the same number on both dice, you can ignore the number and choose any effect on the table.",
    subClassId: ids.wildMagic,
    levels: [14],
  },
  // Path of the Zealot
  {
    name: "Divine Fury",
    description:
      "Starting when you choose this path at 3rd level, you can channel divine fury into your weapon strikes. While you're raging, the first creature you hit on each of your turns with a weapon attack takes extra damage equal to 1d6 + half your Barbarian level. The extra damage is necrotic or radiant; you choose the type of damage when you gain this feature.",
    subClassId: ids.zealot,
    levels: [3],
  },
  {
    name: "Warrior of the Gods",
    description:
      "At 3rd level, your soul is marked for endless battle. If a spell, such as Raise Dead, has the sole effect of restoring you to life (but not undeath), the caster doesn't need material components to cast the spell on you.",
    subClassId: ids.zealot,
    levels: [3],
  },
  {
    name: "Fanatical Focus",
    description:
      "Beginning at 6th level, the divine power that fuels your rage can protect you. If you fail a saving throw while you're raging, you can reroll it, and you must use the new roll. You can use this ability only once per rage.",
    subClassId: ids.zealot,
    levels: [6],
  },
  {
    name: "Zealous Presence",
    description:
      "At 10th level, you learn to channel divine power to inspire zealotry in others. As a bonus action, you unleash a battle cry infused with divine energy. Up to ten other creatures of your choice within 60 feet of you that can hear you gain advantage on attack rolls and saving throws until the start of your next turn.\n\nOnce you use this feature, you can’t use it again until you finish a long rest.",
    subClassId: ids.zealot,
    levels: [10],
  },
  {
    name: "Rage Beyond Death",
    description:
      "Beginning at 14th level, the divine power that fuels your rage allows you to shrug off fatal blows.\n\nWhile you're raging, having 0 hit points doesn’t knock you unconscious. You still must make death saving throws, and you suffer the normal effects of taking damage while at 0 hit points. However, if you would die due to failing death saving throws, you don’t die until your rage ends, and you die then only if you still have 0 hit points.",
    subClassId: ids.zealot,
    levels: [14],
  },
];

export default BarbarianSubclassFeatures;
