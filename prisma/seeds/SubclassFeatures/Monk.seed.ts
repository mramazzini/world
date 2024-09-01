import { Prisma } from "@prisma/client";

const ids = {
  astral: 62,
  dragon: 63,
  drunken: 64,
  fourElements: 65,
  kensei: 66,
  longDeath: 67,
  mercy: 68,
  openHand: 69,
  shadow: 70,
  sunSoul: 71,
};
interface SubclassFeature extends PrismaJson.Feature {
  subClassId: number;
}

const MonkSubclassFeatures: SubclassFeature[] = [
  //astral self
  {
    name: "Arms of the Astral Self",
    description:
      "At 3rd level, your mastery of your ki allows you to summon a portion of your astral self. As a bonus action, you can spend 1 ki point to summon the arms of your astral self. When you do so, each creature of your choice that you can see within 10 feet of you must succeed on a Dexterity saving throw or take force damage equal to two rolls of your Martial Arts die.\n\nFor 10 minutes, these spectral arms hover near your shoulders or surround your arms (your choice). You determine the arms' appearance, and they vanish early if you are incapacitated or die.\n\nWhile the spectral arms are present, you gain the following benefits:",
    options: [
      "You can use your Wisdom modifier in place of your Strength modifier when making Strength checks and Strength saving throws",
      "You can use the spectral arms to make unarmed strikes.",
      "When you make an unarmed strike with the arms on your turn, your reach for it is 5 feet greater than normal.",
      "The unarmed strikes you make with the arms can use your Wisdom modifier in place of your Strength or Dexterity modifier for the attack and damage rolls, and their damage type is force.",
    ],
    subClassId: ids.astral,
    levels: [3],
  },
  {
    name: "Visage of the Astral Self",
    description:
      "When you reach 6th level, you can summon the visage of your astral self. As a bonus action, or as part of the bonus action you take to activate Arms of the Astral Self, you can spend 1 ki point to summon this visage for 10 minutes. It vanishes early if you are incapacitated or die.\n\nThe spectral visage covers your face like a helmet or mask. You determine its appearance.\n\nWhile the spectral visage is present, you gain the following benefits.",

    extendedTable: [
      {
        "": {
          headers: ["Benefit", "Description"],
          data: [
            {
              Benefit: "Astral Sight",
              Description:
                "You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.",
            },
            {
              Benefit: "Wisdom of the Spirit",
              Description:
                "You have advantage on Wisdom (Insight) and Charisma (Intimidation) checks.",
            },
            {
              Benefit: "Word of the Spirit",
              Description:
                "When you speak, you can direct your words to a creature of your choice that you can see within 60 feet of you, making it so only that creature can hear you. Alternatively, you can amplify your voice so that all creatures within 600 feet can hear you.",
            },
          ],
        },
      },
    ],
    subClassId: ids.astral,
    levels: [6],
  },
  {
    name: "Body of the Astral Self",
    description:
      "Starting at 11th level, when you have both your astral arms and visage summoned, you can cause the body of your astral self to appear (no action required). This spectral body covers your physical form like a suit of armor, connecting with the arms and visage. You determine its appearance.\n\nWhile the spectral body is present, you gain the following benefits.",

    extendedTable: [
      {
        "": {
          headers: ["Benefit", "Description"],
          data: [
            {
              Benefit: "Deflect Energy",
              Description:
                "When you take acid, cold, fire, force, lightning, or thunder damage, you can use your reaction to deflect it. When you do so, the damage you take is reduced by 1d10 + your Wisdom modifier (minimum reduction of 1).",
            },
            {
              Benefit: "Empowered Arms",
              Description:
                "Once on each of your turns when you hit a target with the Arms of the Astral Self, you can deal extra damage to the target equal to your Martial Arts die.",
            },
          ],
        },
      },
    ],
    subClassId: ids.astral,
    levels: [11],
  },
  {
    name: "Awakened Astral Self",
    description:
      "Starting at 17th level, your connection to your astral self is complete, allowing you to unleash its full potential. As a bonus action, you can spend 5 ki points to summon the arms, visage, and body of your astral self and awaken it for 10 minutes. This awakening ends early if you are incapacitated or die.\n\nWhile your astral self is awakened, you gain the following benefits.",

    extendedTable: [
      {
        "": {
          headers: ["Benefit", "Description"],
          data: [
            {
              Benefit: "Astral Sight",
              Description:
                "You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.",
            },
            {
              Benefit: "Astral Barrage",
              Description:
                "Whenever you use the Extra Attack feature to attack twice, you can instead attack three times if all the attacks are made with your astral arms.",
            },
          ],
        },
      },
    ],
    subClassId: ids.astral,
    levels: [17],
  },
  //way of the ascendent dragon
  {
    name: "Ascendent Dragon Origin",
    description:
      "As a follower of this Monastic Tradition, you decide how you unlocked the power of dragons through your ki. The Ascendant Dragon Origin table offers some possibilities.",
    subClassId: ids.dragon,
    levels: [3],
    extendedTable: [
      {
        "Ascendant Dragon Origin": {
          headers: ["d6", "Origin"],
          data: [
            {
              d6: "1",
              Origin:
                "You honed your abilities by observing a dragon and aligning your ki with their world altering power.",
            },
            {
              d6: "2",
              Origin:
                "A dragon personally took an active role in shaping your inner energy.",
            },
            {
              d6: "3",
              Origin:
                "You studied at a monastery that traces its teachings back centuries or more to a single dragon’s instruction.",
            },
            {
              d6: "4",
              Origin:
                "You spent long stretches meditating in the region of influence of an ancient dragon’s lair, absorbing its ambient magic.",
            },
            {
              d6: "5",
              Origin:
                "You found a scroll written in Draconic that contained inspiring new techniques.",
            },
            {
              d6: "6",
              Origin:
                "After a dream that featured a five-handed dragonborn you awoke with altered ki, reflecting the breaths of dragons.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Dracoic Disciple",
    description:
      "At 3rd level, you can channel draconic power to magnify your presence and imbue your unarmed strikes with the essence of a dragon’s breath. You gain the following benefits:",
    extendedTable: [
      {
        "": {
          headers: ["Benefit", "Description"],
          data: [
            {
              Benefit: "Draconic Presence",
              Description:
                "If you fail a Charisma (Intimidation) or Charisma (Persuasion) check, you can use your reaction to reroll the check, as you tap into the mighty presence of dragons. Once this feature turns a failure into a success, you can’t use it again until you finish a long rest.",
            },
            {
              Benefit: "Draconic Strike",
              Description:
                "When you damage a target with an unarmed strike, you can change the damage type to acid, cold, fire, lightning, or poison.",
            },
            {
              Benefit: "Tongue of Dragons",
              Description:
                "You learn to speak, read, and write Draconic or one other language of your choice.",
            },
          ],
        },
      },
    ],
    subClassId: ids.dragon,
    levels: [3],
  },
  {
    name: "Breath of the Dragon",
    description:
      "At 3rd level you can channel destructive waves of energy, like those created by the dragons you emulate. When you take the Attack action on your turn, you can replace one of the attacks with an exhalation of draconic energy in either a 20-foot cone or a 30-foot line that is 5 feet wide (your choice). Choose a damage type: acid, cold, fire, lightning, or poison. Each creature in that area must make a Dexterity saving throw against your ki save DC, taking damage of the chosen type equal to two rolls of your Martial Arts die on a failed save, or half as much damage on a successful one.\n\nAt 11th level, the damage of this feature increases to three rolls of your Martial Arts die.\n\nYou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest. While you have no uses available, you can spend 2 ki points to use this feature again.",
    subClassId: ids.dragon,
    levels: [3, 11],
  },
  {
    name: "Wings Unfurled",
    description:
      "At 6th level when you use your Step of the Wind, you can unfurl spectral draconic wings from your back that vanish at the end of your turn. While the wings exist, you have a flying speed equal to your walking speed.\n\nYou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    subClassId: ids.dragon,
    levels: [6],
  },
  {
    name: "Aspect of the Wyrm",
    description:
      "At 11th level the power of your draconic spirit now radiates from you, warding your allies or inspiring fear in your enemies. As a bonus action, you can create an aura of draconic power that radiates 10 feet from you for 1 minute. For the duration, you gain one of the effects in the table below.\n\nOnce you create this aura, you can’t create it again until you finish a long rest, unless you expend 3 ki points to create it again.",
    subClassId: ids.dragon,
    levels: [11],
    extendedTable: [
      {
        "": {
          headers: ["Effect", "Description"],
          data: [
            {
              Effect: "Frightful Presence",
              Description:
                "When you create this aura, and as a bonus action on subsequent turns, you can choose a creature within the aura. The target must succeed on a Wisdom saving throw against your ki save DC or become frightened of you for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful save.",
            },
            {
              Effect: "Resistance",
              Description:
                "Choose a damage type when you activate this aura: acid, cold, fire, lightning, or poison. You and your allies within the aura have resistance to that damage.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Ascendant Aspect",
    description:
      "At 17th level, your draconic spirit reaches its peak. You gain the following benefits:",
    subClassId: ids.dragon,
    levels: [17],
    extendedTable: [
      {
        "": {
          headers: ["Benefit", "Description"],
          data: [
            {
              Benefit: "Augment Breath",
              Description:
                "When you use your Breath of the Dragon, you can spend 1 ki point to augment its shape and power. The exhalation of draconic energy becomes either a 60-foot cone or a 90-foot line that is 5 feet wide (your choice), and each creature in that area takes damage equal to four rolls of your Martial Arts die on a failed save, or half as much damage on a successful one.",
            },
            {
              Benefit: "Blindsight",
              Description:
                "You gain blindsight out to 10 feet. Within that range, you can effectively see anything that isn’t behind total cover, even if you’re blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.",
            },
            {
              Benefit: "Explosive Fury",
              Description:
                "When you activate your Aspect of the Wyrm, draconic fury explodes from you. Choose any number of creatures you can see in your aura. Each of those creatures must succeed on a Dexterity saving throw against your ki save DC or take 3d10 acid, cold, fire, lightning, or poison damage (your choice).",
            },
          ],
        },
      },
    ],
  },
  //way of the drunken master
  {
    name: "Bonus Proficiencies",
    description:
      "When you choose this tradition at 3rd level, you gain proficiency in the Performance skill if you don't already have it. Your martial arts technique mixes combat training with the precision of a dancer and the antics of a jester. You also gain proficiency with brewer's supplies if you don't already have it.",
    subClassId: ids.drunken,
    levels: [3],
  },
  {
    name: "Drunken Technique",
    description:
      "At 3rd level, you learn how to twist and turn quickly as part of your Flurry of Blows. Whenever you use Flurry of Blows, you gain the benefit of the Disengage action, and your walking speed increases by 10 feet until the end of the current turn.",
    subClassId: ids.drunken,
    levels: [3],
  },
  {
    name: "Tipsy Sway",
    description:
      "Starting at 6th level, you can move in sudden, swaying ways. You gain the following benefits.",
    subClassId: ids.drunken,
    levels: [6],
    extendedTable: [
      {
        "": {
          headers: ["Benefit", "Description"],
          data: [
            {
              Benefit: "Redirect Attack",
              Description:
                "When a creature misses you with a melee attack roll, you can spend 1 ki point as a reaction to cause that attack to hit one creature of your choice, other than the attacker, that you can see within 5 feet of you.",
            },
            {
              Benefit: "Leap to Your Feet",
              Description:
                "When you're prone, you can stand up by spending 5 feet of movement, rather than half your speed.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Drunkard's Luck",
    description:
      "Starting at 11th level, you always seem to get a lucky bounce at the right moment. When you make an ability check, an attack roll, or a saving throw and have disadvantage, you can spend 2 ki points to cancel the disadvantage for that roll.",
    subClassId: ids.drunken,
    levels: [11],
  },
  {
    name: "Intoxicated Frenzy",
    description:
      "At 17th level, you gain the ability to make an overwhelming number of attacks against a group of enemies. When you use your Flurry of Blows, you can make up to three additional attacks with it (up to a total of five Flurry of Blows attacks), provided that each Flurry of Blows attack targets a different creature this turn.",
    subClassId: ids.drunken,
    levels: [17],
  },
  {
    name: "Disciple of the Elements",
    description:
      "When you choose this tradition at 3rd level, you learn magical disciplines that harness the power of the four elements. A discipline requires you to spend ki points each time you use it.\n\nYou know the Elemental Attunement discipline and one other elemental discipline of your choice, chosen from the table below. You learn one additional elemental discipline of your choice at 6th, 11th, and 17th level.\n\nWhenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline.",
    levels: [3, 6, 11, 17],
    subClassId: ids.fourElements,
    extendedTable: [
      {
        "Elemental Discipline Table": {
          headers: ["Discipline", "Description", "Ki Cost", "Prerequisite"],
          headersLength: [15, 70, 5, 10],
          data: [
            {
              Discipline: "Breath of Winter",
              Description: "You can spend 6 ki points to cast Cone of Cold.",
              "Ki Cost": "6",
              Prerequisite: "17th level",
            },
            {
              Discipline: "Clench of the North Wind",
              Description: "You can spend 3 ki points to cast Hold Person.",
              "Ki Cost": "3",
              Prerequisite: "6th level",
            },
            {
              Discipline: "Elemental Attunement",
              Description:
                "You can use your action to briefly control elemental forces within 30 feet of you, causing one of the following effects of your choice:\n\n- Create a harmless, instantaneous sensory effect related to air, earth, fire, or water, such as a shower of sparks, a puff of wind, a spray of light mist, or a gentle rumbling of stone.\n\n- Instantaneously light or snuff out a candle, a torch, or a small campfire.\n\n- Chill or warm up to 1 pound of nonliving material for up to 1 hour.\n\n- Cause earth, fire, water, or mist that can fit within a 1-foot cube to shape itself into a crude form you designate for 1 minute.",
              "Ki Cost": "-",
              Prerequisite: "-",
            },
            {
              Discipline: "Eternal Mountain Defense",
              Description:
                "You can spend 5 ki points to cast Stoneskin, targeting yourself.",
              "Ki Cost": "5",
              Prerequisite: "17th level",
            },
            {
              Discipline: "Fangs of the Fire Snake",
              Description:
                "When you use the Attack action on your turn, you can spend 1 ki point to cause tendrils of flame to stretch out from your fists and feet. Your reach with your unarmed strikes increases by 10 feet for that action, as well as the rest of the turn. A hit with such an attack deals fire damage instead of bludgeoning damage, and if you spend 1 ki point when the attack hits, it also deals an extra 1d10 fire damage..",
              "Ki Cost": "1 - 2",
              Prerequisite: "-",
            },
            {
              Discipline: "Fist of Four Thunders",
              Description: "You can spend 2 ki points to cast Thunderwave.",
              "Ki Cost": "2",
              Prerequisite: "-",
            },
            {
              Discipline: "Fist of Unbroken Air",
              Description:
                "You can create a blast of compressed air that strikes like a mighty fist. As an action, you can spend 2 ki points and choose a creature within 30 feet of you. That creature must make a Strength saving throw. On a failed save, the creature takes 3d10 bludgeoning damage, plus an extra 1d10 bludgeoning damage for each additional ki point you spend, and you can push the creature up to 20 feet away from you and knock it prone. On a successful save, the creature takes half as much damage, and you don't push it or knock it prone.",
              "Ki Cost": "2",
              Prerequisite: "-",
            },
            {
              Discipline: "Flames of the Phoenix",
              Description: "You can spend 4 ki points to cast Fireball.",
              "Ki Cost": "4",
              Prerequisite: "11th level",
            },
            {
              Discipline: "Gong of the Summit",
              Description: "You can spend 3 ki points to cast Shatter.",
              "Ki Cost": "3",
              Prerequisite: "6th level",
            },
            {
              Discipline: "Mist Stance",
              Description:
                "You can spend 4 ki points to cast Gaseous Form, targeting yourself.",
              "Ki Cost": "4",
              Prerequisite: "11th level",
            },
            {
              Discipline: "Ride the Wind",
              Description:
                "You can spend 4 ki points to cast Fly, targeting yourself.",
              "Ki Cost": "4",
              Prerequisite: "11th level",
            },
            {
              Discipline: "River of Hungry Flame",
              Description: "You can spend 5 ki points to cast Wall of Fire.",
              "Ki Cost": "5",
              Prerequisite: "17th level",
            },
            {
              Discipline: "Rush of the Gale Spirits",
              Description: "You can spend 2 ki points to cast Gust of Wind.",
              "Ki Cost": "2",
              Prerequisite: "-",
            },
            {
              Discipline: "Shape the Flowing River",
              Description:
                "As an action, you can spend 1 ki point to choose an area of ice or water no larger than 30 feet on a side within 120 feet of you. You can change water to ice within the area and vice versa, and you can reshape ice in the area in any manner you choose. You can raise or lower the ice's elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can't exceed half the area's largest dimension. For example, if you affect a 30-foot square, you can create a pillar up to 15 feet high, raise or lower the square's elevation by up to 15 feet, dig a trench up to 15 feet deep, and so on. You can't shape the ice to trap or injure a creature in the area.",
              "Ki Cost": "1",
              Prerequisite: "-",
            },
            {
              Discipline: "Sweeping Cinder Strike",
              Description: "You can spend 2 ki points to cast Burning Hands.",
              "Ki Cost": "2",
              Prerequisite: "-",
            },
            {
              Discipline: "Water Whip",
              Description:
                "You can spend 2 ki points as an action to create a whip of water that shoves and pulls a creature to unbalance it. A creature that you can see that is within 30 feet of you must make a Dexterity saving throw. On a failed save, the creature takes 3d10 bludgeoning damage, plus an extra 1d10 bludgeoning damage for each additional ki point you spend, and you can either knock it prone or pull it up to 25 feet closer to you. On a successful save, the creature takes half as much damage, and you don't pull it or knock it prone.",
              "Ki Cost": "2+",
              Prerequisite: "-",
            },
            {
              Discipline: "Wave of Rolling Earth",
              Description: "You can spend 6 ki points to cast Wall of Stone.",
              "Ki Cost": "6",
              Prerequisite: "17th level",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Casting Elemental Spells",
    description:
      "Some elemental disciplines allow you to cast spells. See chapter 10 for the general rules of spellcasting. To cast one of these spells, you use its casting time and other rules, but you don't need to provide material components for it.\n\nOnce you reach 5th level in this class, you can spend additional ki points to increase the level of an elemental discipline spell that you cast, provided that the spell has an enhanced effect at a higher level, as Burning Hands does. The spell's level increases by 1 for each additional ki point you spend. For example, if you are a 5th-level monk and use Sweeping Cinder Strike to cast Burning Hands, you can spend 3 ki points to cast it as a 2nd-level spell (the discipline's base cost of 2 ki points plus 1).\n\nThe maximum number of ki points you can spend to cast a spell in this way (including its base ki point cost and any additional ki points you spend to increase its level) is determined by your monk level, as shown in the Spells and Ki Points table.",
    subClassId: ids.fourElements,
    levels: [5],
    extendedTable: [
      {
        "Spells and Ki Points": {
          headers: ["Monk Level", "Maximum Ki Points for a Spell"],
          data: [
            {
              "Monk Level": "5th - 8th",
              "Maximum Ki Points for a Spell": "3",
            },
            {
              "Monk Level": "9th - 12th",
              "Maximum Ki Points for a Spell": "4",
            },
            {
              "Monk Level": "13th - 16th",
              "Maximum Ki Points for a Spell": "5",
            },
            {
              "Monk Level": "17th - 20th",
              "Maximum Ki Points for a Spell": "6",
            },
          ],
        },
      },
    ],
  },
  //way of the kensei
  {
    name: "Path of the Kensei",
    description:
      "When you choose this tradition at 3rd level, your special martial arts training leads you to master the use of certain weapons. This path also includes instruction in the deft strokes of calligraphy or painting. You gain the following benefits:",
    extendedTable: [
      {
        "": {
          headers: ["Benefit", "Description"],
          data: [
            {
              Benefit: "Kensei Weapons",
              Description:
                "Choose two types of weapons to be your kensei weapons: one melee weapon and one ranged weapon. Each of these weapons can be any simple or martial weapon that lacks the heavy and special properties. The longbow is also a valid choice. You gain proficiency with these weapons if you don't already have it. Weapons of the chosen types are monk weapons for you. Many of this tradition's features work only with your kensei weapons. When you reach 6th, 11th, and 17th level in this class, you can choose another type of weapon – either melee or ranged – to be a kensei weapon for you, following the criteria above.",
            },
            {
              Benefit: "Kensei's Shot",
              Description:
                "You can use a bonus action on your turn to make your ranged attacks with a kensei weapon more deadly. When you do so, any target you hit with a ranged attack using a kensei weapon takes an extra 1d4 damage of the weapon’s type. You retain this benefit until the end of the current turn.",
            },
            {
              Benefit: "Agile Parry",
              Description:
                "If you make an unarmed strike as part of the Attack action on your turn and are holding a kensei weapon, you can use it to defend yourself if it is a melee weapon. You gain a +2 bonus to AC until the start of your next turn, while the weapon is in your hand and you aren’t incapacitated.",
            },
            {
              Benefit: "Way of the Brush",
              Description:
                "You gain proficiency with your choice of calligrapher's supplies or painter's supplies.",
            },
          ],
        },
      },
    ],
    subClassId: ids.kensei,
    levels: [3],
  },
  {
    name: "One with the Blade",
    description: "At 6th level, you extend your ki into your kensei weapons.",
    subClassId: ids.kensei,
    levels: [6],
    extendedTable: [
      {
        "": {
          headers: ["Benefit", "Description"],
          data: [
            {
              Benefit: "Magic Kensei Weapons",
              Description:
                "Your attacks with your kensei weapons count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
            },
            {
              Benefit: "Deft Strike",
              Description:
                "When you hit a target with a kensei weapon, you can spend 1 ki point to cause the weapon to deal extra damage to the target equal to your Martial Arts die. You can use this feature only once on each of your turns.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Sharpen the Blade",
    description:
      "At 11th level, you gain the ability to augment your weapons further with your ki. As a bonus action, you can expend up to 3 ki points to grant one kensei weapon you touch a bonus to attack and damage rolls when you attack with it. The bonus equals the number of ki points you spent. This bonus lasts for 1 minute or until you use this feature again. This feature has no effect on a magic weapon that already has a bonus to attack and damage rolls.",
    subClassId: ids.kensei,
    levels: [11],
  },
  {
    name: "Unerring Accuracy",
    description:
      "At 17th level, your mastery of weapons grants you extraordinary accuracy. If you miss with an attack roll using a monk weapon on your turn, you can reroll it. You can use this feature only once on each of your turns.",
    subClassId: ids.kensei,
    levels: [17],
  },
  // long death
  {
    name: "Touch of Death",
    description:
      "Starting when you choose this tradition at 3rd level, your study of death allows you to extract vitality from another creature as it nears its demise. When you reduce a creature within 5 feet of you to 0 hit points, you gain temporary hit points equal to your Wisdom modifier + your monk level (minimum of 1 temporary hit point).",
    subClassId: ids.longDeath,
    levels: [3],
  },
  {
    name: "Hour of Reaping",
    description:
      "At 6th level, you gain the ability to unsettle or terrify those around you as an action, for your soul has been touched by the shadow of death. When you take this action, each creature within 30 feet of you that can see you must succeed on a Wisdom saving throw or be frightened of you until the end of your next turn.",
    subClassId: ids.longDeath,
    levels: [6],
  },
  {
    name: "Mastery of Death",
    description:
      "Beginning at 11th level, you use your familiarity with death to escape its grasp. When you are reduced to 0 hit points, you can expend 1 ki point (no action required) to have 1 hit point instead.",
    subClassId: ids.longDeath,
    levels: [11],
  },
  {
    name: "Touch of the Long Death",
    description:
      "Starting at 17th level, your touch can channel the energy of death into a creature. As an action, you touch one creature within 5 feet of you, and you expend 1 to 10 ki points. The target must make a Constitution saving throw, and it takes 2d10 necrotic damage per ki point spent on a failed save, or half as much damage on a successful one.",
    subClassId: ids.longDeath,
    levels: [17],
  },
  // Way of mercy
  {
    name: "Implements of Mercy",
    description:
      "When you choose this tradition at 3rd level, you gain proficiency in the Insight and Medicine skills, and you gain proficiency with the herbalism kit.\n\nYou also gain a special mask, which you often wear when using the features of this subclass. You determine its appearance, or generate it randomly by rolling on the Merciful Mask table.",
    subClassId: ids.mercy,
    levels: [3],
    extendedTable: [
      {
        "Merciful Mask": {
          headers: ["d6", "Mask Appearance"],
          data: [
            {
              d6: "1",
              "Mask Appearance": "Raven",
            },
            {
              d6: "2",
              "Mask Appearance": "Blank and white",
            },
            {
              d6: "3",
              "Mask Appearance": "Crying visage",
            },
            {
              d6: "4",
              "Mask Appearance": "Laughing visage",
            },
            {
              d6: "5",
              "Mask Appearance": "Skull",
            },
            {
              d6: "6",
              "Mask Appearance": "Butterfly",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Hands of Healing",
    description:
      "At 3rd level, your mystical touch can mend wounds. As an action, you can spend 1 ki point to touch a creature and restore a number of hit points equal to a roll of your Martial Arts die + your Wisdom modifier.\n\nWhen you use your Flurry of Blows, you can replace one of the unarmed strikes with a use of this feature without spending a ki point for the healing.",
    subClassId: ids.mercy,
    levels: [3],
  },
  {
    name: "Hands of Harm",
    description:
      "At 3rd level, you use your ki to inflict wounds. When you hit a creature with an unarmed strike, you can spend 1 ki point to deal extra necrotic damage equal to one roll of your Martial Arts die + your Wisdom modifier. You can use this feature only once per turn.",
    subClassId: ids.mercy,
    levels: [3],
  },
  {
    name: "Physician's Touch",
    description:
      "Starting at 6th level, you can administer even greater cures with a touch, and if you feel it's necessary, you can use your knowledge to cause harm.\n\nWhen you use Hands of Healing on a creature, you can also end one disease or one of the following conditions affecting the creature: blinded, deafened, paralyzed, poisoned, or stunned.\n\nWhen you use Hands of Harm on a creature, you can subject that creature to the poisoned condition until the end of your next turn.",
    subClassId: ids.mercy,
    levels: [6],
  },
  {
    name: "Flurry of Healing and Harm",
    description:
      "Starting at 11th level, you can now mete out a flurry of comfort and hurt. When you use Flurry of Blows, you can now replace each of the unarmed strikes with a use of your Hands of Healing, without spending ki points for the healing.\n\nIn addition, when you make an unarmed strike with Flurry of Blows, you can use Hand of Harm with that strike without spending the ki point for Hands of Harm. You can still use Hands of Harm only once per turn.",
    subClassId: ids.mercy,
    levels: [11],
  },
  {
    name: "Hand of Ultimate Mercy",
    description:
      "By 17th level, your mastery of life energy opens the door to the ultimate mercy. As an action, you can touch the corpse of a creature that died within the past 24 hours and expend 5 ki points. The creature then returns to life, regaining a number of hit points equal to 4d10 + your Wisdom modifier. If the creature died while subject to any of the following conditions, it revives with them removed: blinded, deafened, paralyzed, poisoned, and stunned.\n\nOnce you use this feature, you can't use it again until you finish a long rest.",
    subClassId: ids.mercy,
    levels: [17],
  },
  // way of the open hand
  {
    name: "Open Hand Technique",
    description:
      "Starting when you choose this tradition at 3rd level, you can manipulate your enemy's ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target:",
    options: [
      "It must succeed on a Dexterity saving throw or be knocked prone.",
      "It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.",
      "It can't take reactions until the end of your next turn.",
    ],
    subClassId: ids.openHand,
    levels: [3],
  },
  {
    name: "Wholeness of Body",
    description:
      "At 6th level, you gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again.",
    subClassId: ids.openHand,
    levels: [6],
  },
  {
    name: "Tranquility",
    description:
      "Beginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a Sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus.",
    subClassId: ids.openHand,
    levels: [11],
  },
  {
    name: "Quivering Palm",
    description:
      "At 17th level, you gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage.\n\nYou can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action.",
    subClassId: ids.openHand,
    levels: [17],
  },
  {
    name: "Shadow Arts",
    description:
      "Starting when you choose this tradition at 3rd level, you can use your ki to duplicate the effects of certain spells. As an action, you can spend 2 ki points to cast darkness, darkvision, pass without trace, or silence, without providing material components. Additionally, you gain the minor illusion cantrip if you don't already know it.",
    subClassId: ids.shadow,
    levels: [3],
  },
  {
    name: "Shadow Step",
    description:
      "At 6th level, you gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action you can teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness. You then have advantage on the first melee attack you make before the end of the turn.",
    subClassId: ids.shadow,
    levels: [6],
  },
  {
    name: "Cloak of Shadows",
    description:
      "By 11th level, you have learned to become one with the shadows. When you are in an area of dim light or darkness, you can use your action to become invisible. You remain invisible until you make an attack, cast a spell, or are in an area of bright light.",
    subClassId: ids.shadow,
    levels: [11],
  },
  {
    name: "Opportunist",
    description:
      "At 17th level, you can exploit a creature's momentary distraction when it is hit by an attack. Whenever a creature within 5 feet of you is hit by an attack made by a creature other than you, you can use your reaction to make a melee attack against that creature.",
    subClassId: ids.shadow,
    levels: [17],
  },
  // sun soul
  {
    name: "Radiant Sun Bolt",
    description:
      "Starting when you choose this tradition at 3rd level, you can hurl searing bolts of magical radiance.\n\nYou gain a new attack option that you can use with the Attack action. This special attack is a ranged spell attack with a range of 30 feet. You are proficient with it, and you add your Dexterity modifier to its attack and damage rolls. Its damage is radiant, and its damage die is a d4. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.\n\nWhen you take the Attack action on your turn and use this special attack as part of it, you can spend 1 ki point to make the special attack twice as a bonus action.\n\nWhen you gain the Extra Attack feature, this special attack can be used for any of the attacks you make as part of the Attack action.",
    subClassId: ids.sunSoul,
    levels: [3],
  },
  {
    name: "Searing Arc Strike",
    description:
      "At 6th level, you gain the ability to channel your ki into searing waves of energy. Immediately after you take the Attack action on your turn, you can spend 2 ki points to cast the Burning Hands spell as a bonus action.\n\nYou can spend additional ki points to cast Burning Hands as a higher level spell. Each additional ki point you spend increases the spell's level by 1. The maximum number of ki points (2 plus any additional points) that you can spend on the spell equals half your monk level.",
    subClassId: ids.sunSoul,
    levels: [6],
  },
  {
    name: "Searing Sunburst",
    description:
      "At 11th level, you gain the ability to create an orb of light that erupts into a devastating explosion. As an action, you magically create an orb and hurl it at a point you choose within 150 feet, where it erupts into a sphere of radiant light for a brief but deadly instant.\n\nEach creature in that 20-foot-radius sphere must succeed on a Constitution saving throw or take 2d6 radiant damage. A creature doesn't need to make the save if the creature is behind total cover that is opaque.\n\nYou can increase the sphere's damage by spending ki points. Each point you spend, up to a maximum of 3, increases the damage by 2d6.",
    subClassId: ids.sunSoul,
    levels: [11],
  },
  {
    name: "Sun Shield",
    description:
      "At 17th level, you become wreathed in a luminous, magical aura. You shed bright light in a 30-foot radius and dim light for an additional 30 feet. You can extinguish or restore the light as a bonus action.\n\nIf a creature hits you with a melee attack while this light shines, you can use your reaction to deal radiant damage to the creature. The radiant damage equals 5 + your Wisdom modifier.",
    subClassId: ids.sunSoul,
    levels: [17],
  },
];

export default MonkSubclassFeatures;
