import { Prisma } from "@prisma/client";
import { headers } from "next/headers";

const ids = {
  ancients: 72,
  conquest: 73,
  crown: 74,
  devotion: 75,
  glory: 76,
  redemption: 77,
  vengeance: 78,
  watchers: 79,
  oathbreaker: 80,
};

const PaladinSubclassFeatures: Prisma.SubClassFeatureCreateManyInput[] = [
  //ancients
  {
    name: "Tenets of the Ancients",
    description:
      "The tenets of the Oath of the Ancients have been preserved for uncounted centuries. This oath emphasizes the principles of good above any concerns of law or chaos. Its four central principles are simple.",
    extendedTable: [
      {
        "": {
          headers: ["Tenet", "Description"],
          data: [
            {
              Tenet: "Kindle the Light",
              Description:
                "Through your acts of mercy, kindness, and forgiveness, kindle the light of hope in the world, beating back despair.",
            },
            {
              Tenet: "Shelter the Light",
              Description:
                "Where there is good, beauty, love, and laughter in the world, stand against the wickedness that would swallow it. Where life flourishes, stand against the forces that would render it barren.",
            },
            {
              Tenet: "Preserve Your Own Light",
              Description:
                "Delight in song and laughter, in beauty and art. If you allow the light to die in your own heart, you can't preserve it in the world.",
            },
            {
              Tenet: "Be the Light",
              Description:
                "Be a glorious beacon for all who live in despair. Let the light of your joy and courage shine forth in all your deeds.",
            },
          ],
        },
      },
    ],
    levels: [3],
    subClassId: ids.ancients,
  },
  {
    name: "Oath Spells",
    description: "You gain oath spells at the paladin levels listed.",
    levels: [3, 5, 9, 13, 17],
    subClassId: ids.ancients,
    extendedTable: [
      {
        "Oath of the Ancients Spells": {
          headers: ["Paladin Level", "Spells"],
          data: [
            {
              "Paladin Level": "3rd",
              Spells: "Ensnaring Strike, Speak with Animals",
            },
            {
              "Paladin Level": "5th",
              Spells: "Moonbeam, Misty Step",
            },
            {
              "Paladin Level": "9th",
              Spells: "Plant Growth, Protection from Energy",
            },
            {
              "Paladin Level": "13th",
              Spells: "Ice Storm, Stoneskin",
            },
            {
              "Paladin Level": "17th",
              Spells: "Commune with Nature, Tree Stride",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Channel Divinity: Nature's Wrath",
    description:
      "When you take the oath at 3rd level, you can use your Channel Divinity to invoke primeval forces to ensnare a foe. As an action, you can cause spectral vines to spring up and reach for a creature within 10 feet of you that you can see. The creature must succeed on a Strength or Dexterity saving throw (its choice) or be restrained. While restrained by the vines, the creature repeats the saving throw at the end of each of its turns. On a success, it frees itself and the vines vanish.",
    levels: [3],
    subClassId: ids.ancients,
  },
  {
    name: "Channel Divinity: Turn the Faithless",
    description:
      "When you take the oath at 3rd level, you can use your Channel Divinity to utter ancient words that are painful for fey and fiends to hear. As an action, you present your holy symbol, and each fey or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.\n\nA turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.\n\nIf the creature's true form is concealed by an illusion, shapeshifting, or other effect, that form is revealed while it is turned.",
    levels: [3],
    subClassId: ids.ancients,
  },
  {
    name: "Aura of Warding",
    description:
      "Beginning at 7th level, ancient magic lies so heavily upon you that it forms an eldritch ward. You and friendly creatures within 10 feet of you have resistance to damage from spells.\n\nAt 18th level, the range of this aura increases to 30 feet.",
    levels: [7, 18],
    subClassId: ids.ancients,
  },
  {
    name: "Undying Sentinel",
    description:
      "Starting at 15th level, when you are reduced to 0 hit points and are not killed outright, you can choose to drop to 1 hit point instead. Once you use this ability, you can't use it again until you finish a long rest.\n\nAdditionally, you suffer none of the drawbacks of old age, and you can't be aged magically.",
    levels: [15],
    subClassId: ids.ancients,
  },
  {
    name: "Elder Champion",
    description:
      "At 20th level, you can assume the form of an ancient force of nature, taking on an appearance you choose. For example, your skin might turn green or take on a bark-like texture, your hair might become leafy or moss-like, or you might sprout antlers or a lion-like mane.\n\nUsing your action, you undergo a transformation. For 1 minute, you gain the benefits listed below. \n\nOnce you use this feature, you can't use it again until you finish a long rest.",
    options: [
      "At the start of each of your turns, you regain 10 hit points.",
      "Whenever you cast a paladin spell that has a casting time of 1 action, you can cast it using a bonus action instead.",
      "Enemy creatures within 10 feet of you have disadvantage on saving throws against your paladin spells and Channel Divinity options.",
    ],
    levels: [20],
    subClassId: ids.ancients,
  },
  //conquest
  {
    name: "Tenets of Conquest",
    description:
      "A paladin who takes this oath has the tenets of conquest seared on the upper arm.",
    extendedTable: [
      {
        "": {
          headers: ["Tenet", "Description"],
          data: [
            {
              Tenet: "Douse the Flame of Hope",
              Description:
                "It is not enough to merely defeat an enemy in battle. Your victory must be so overwhelming that your enemies’ will to fight is shattered forever. A blade can end a life. Fear can end an empire.",
            },
            {
              Tenet: "Rule with an Iron Fist",
              Description:
                "Once you have conquered, tolerate no dissent. Your word is law. Those who obey it shall be favored. Those who defy it shall be punished as an example to all who might follow.",
            },
            {
              Tenet: "Strength Above All",
              Description:
                "You shall rule until a stronger one arises. Then you must grow mightier and meet the challenge, or fall to your own ruin.",
            },
          ],
        },
      },
    ],
    levels: [3],
    subClassId: ids.conquest,
  },
  {
    name: "Oath Spells",
    description: "You gain oath spells at the paladin levels listed.",
    levels: [3, 5, 9, 13, 17],
    subClassId: ids.conquest,
    extendedTable: [
      {
        "Oath of Conquest Spells": {
          headers: ["Paladin Level", "Spells"],
          data: [
            {
              "Paladin Level": "3rd",
              Spells: "Armor of Agathys, Command",
            },
            {
              "Paladin Level": "5th",
              Spells: "Hold Person, Spiritual Weapon",
            },
            {
              "Paladin Level": "9th",
              Spells: "Bestow Curse, Fear",
            },
            {
              "Paladin Level": "13th",
              Spells: "Dominate Beast, Stoneskin",
            },
            {
              "Paladin Level": "17th",
              Spells: "Cloudkill, Dominate Person",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Channel Divinity: Conquering Presence",
    description:
      "You can use your Channel Divinity to exude a terrifying presence. As an action, you force each creature of your choice that you can see within 30 feet of you to make a Wisdom saving throw. On a failed save, a creature becomes frightened of you for 1 minute. The frightened creature can repeat this saving throw at the end of each of its turns, ending the effect on itself on a success.",
    levels: [3],
    subClassId: ids.conquest,
  },
  {
    name: "Channel Divinity: Guided Strike",
    description:
      "You can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.",
    levels: [3],
    subClassId: ids.conquest,
  },
  {
    name: "Aura of Conquest",
    description:
      "Starting at 7th level, you constantly emanate a menacing aura while you're not incapacitated. The aura extends 10 feet from you in every direction, but not through total cover.\n\nIf a creature is frightened of you, its speed is reduced to 0 while in the aura, and that creature takes psychic damage equal to half your paladin level if it starts its turn there.\n\nAt 18th level, the range of this aura increases to 30 feet.",
    levels: [7, 18],
    subClassId: ids.conquest,
  },
  {
    name: "Scornful Rebuke",
    description:
      "Starting at 15th level, those who dare to strike you are psychically punished for their audacity. Whenever a creature hits you with an attack, that creature takes psychic damage equal to your Charisma modifier (minimum of 1) if you’re not incapacitated.",
    levels: [15],
    subClassId: ids.conquest,
  },
  {
    name: "Invincible Conqueror",
    description:
      "At 20th level, you gain the ability to harness extraordinary martial prowess. As an action, you can magically become an avatar of conquest, gaining the benefits listed below.\n\nOnce you use this feature, you can’t use it again until you finish a long rest.",
    options: [
      "You have resistance to all damage.",
      "When you take the Attack action on your turn, you can make one additional attack as part of that action.",
      "Your melee weapon attacks score a critical hit on a roll of 19 or 20 on the d20.",
    ],
    levels: [20],
    subClassId: ids.conquest,
  },
  //crown
  {
    name: "Tenets of the Crown",
    description:
      "The tenets of the Oath of the Crown are often set by the sovereign to which their oath is sworn, but generally emphasize the following tenets.",
    extendedTable: [
      {
        "": {
          headers: ["Tenet", "Description"],
          data: [
            {
              Tenet: "Law",
              Description:
                "The law is paramount. It is the mortar that holds the stones of civilization together, and it must be respected.",
            },
            {
              Tenet: "Loyalty",
              Description:
                "Your word is your bond. Without loyalty, oaths and laws are meaningless.",
            },
            {
              Tenet: "Courage",
              Description:
                "You must be willing to do what needs to be done for the sake of order, even in the face of overwhelming odds. If you don't act, then who will?",
            },
            {
              Tenet: "Responsibility",
              Description:
                "You must deal with the consequences of your actions, and you are responsible for fulfilling your duties and obligations.",
            },
          ],
        },
      },
    ],
    levels: [3],
    subClassId: ids.crown,
  },
  {
    name: "Oath Spells",
    description: "You gain oath spells at the paladin levels listed.",
    levels: [3, 5, 9, 13, 17],
    subClassId: ids.crown,
    extendedTable: [
      {
        "Oath of the Crown Spells": {
          headers: ["Paladin Level", "Spells"],
          data: [
            {
              "Paladin Level": "3rd",
              Spells: "Compelled Duel, Command",
            },
            {
              "Paladin Level": "5th",
              Spells: "Warding Bond, Zone of Truth",
            },
            {
              "Paladin Level": "9th",
              Spells: "Aura of Vitality, Spirit Guardians",
            },
            {
              "Paladin Level": "13th",
              Spells: "Banishment, Guardian of Faith",
            },
            {
              "Paladin Level": "17th",
              Spells: "Circle of Power, Geas",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Channel Divinity: Champion Challenge",
    description:
      "As a bonus action, you issue a challenge that compels other creatures to do battle with you. Each creature of your choice that you can see within 30 feet of you must make a Wisdom saving throw. On a failed save, a creature can't willingly move more than 30 feet away from you. This effect ends on the creature if you are incapacitated or die or if the creature is more than 30 feet away from you.",
    levels: [3],
    subClassId: ids.crown,
  },
  {
    name: "Channel Divinity: Turn the Tide",
    description:
      "As a bonus action, you can bolster injured creatures with your Channel Divinity. Each creature of your choice that can hear you within 30 feet of you regains hit points equal to 1d6 + your Charisma modifier (minimum of 1) if it has no more than half of its hit points.",
    levels: [3],
    subClassId: ids.crown,
  },
  {
    name: "Divine Allegiance",
    description:
      "Starting at 7th level, when a creature within 5 feet of you takes damage, you can use your reaction to magically substitute your own health for that of the target creature, causing that creature not to take the damage. Instead, you take the damage. This damage to you can't be reduced or prevented in any way.",
    levels: [7],
    subClassId: ids.crown,
  },
  {
    name: "Unyielding Spirit",
    description:
      "Starting at 15th level, you have advantage on saving throws to avoid becoming paralyzed or stunned.",
    levels: [15],
    subClassId: ids.crown,
  },
  {
    name: "Exalted Champion",
    description:
      "At 20th level, you can assume the exalted form of an angelic being. Using your action, you undergo a transformation. For 1 hour, you gain the benfits listed below.\n\nThis effect ends early if you are incapacitated or die. Once you use this feature, you can't use it again until you finish a long rest.",
    options: [
      "You have resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.",
      "Your allies have advantage on death saving throws while within 30 feet of you.",
      "You have advantage on Wisdom saving throws, as do your allies within 30 feet of you.",
    ],
    levels: [20],
    subClassId: ids.crown,
  },
  //devotion
  {
    name: "Tenets of Devotion",
    description:
      "Though the exact words and strictures of the Oath of Devotion vary, paladins of this oath share these tenets.",
    extendedTable: [
      {
        "": {
          headers: ["Tenet", "Description"],
          data: [
            {
              Tenet: "Honesty",
              Description: "Don't lie or cheat. Let your word be your promise.",
            },
            {
              Tenet: "Courage",
              Description: "Never fear to act, though caution is wise.",
            },
            {
              Tenet: "Compassion",
              Description:
                " Aid others, protect the weak, and punish those who threaten them. Show mercy to your foes, but temper it with wisdom.",
            },
            {
              Tenet: "Honor",
              Description:
                "Treat others with fairness, and let your honorable deeds be an example to them. Do as much good as possible while causing the least amount of harm.",
            },
            {
              Tenet: "Duty",
              Description:
                "Be responsible for your actions and their consequences, protect those entrusted to your care, and obey those who have just authority over you.",
            },
          ],
        },
      },
    ],
    levels: [3],
    subClassId: ids.devotion,
  },
  {
    name: "Oath Spells",
    description: "You gain oath spells at the paladin levels listed.",
    levels: [3, 5, 9, 13, 17],
    subClassId: ids.devotion,
    extendedTable: [
      {
        "Oath of Devotion Spells": {
          headers: ["Paladin Level", "Spells"],
          data: [
            {
              "Paladin Level": "3rd",
              Spells: "Protection from Evil and Good, Sanctuary",
            },
            {
              "Paladin Level": "5th",
              Spells: "Lesser Restoration, Zone of Truth",
            },
            {
              "Paladin Level": "9th",
              Spells: "Beacon of Hope, Dispel Magic",
            },
            {
              "Paladin Level": "13th",
              Spells: "Freedom of Movement, Guardian of Faith",
            },
            {
              "Paladin Level": "17th",
              Spells: "Commune, Flame Strike",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Channel Divinity: Sacred Weapon",
    description:
      "When you take this oath at third level, you gain access to Channel Divinity: Sacred Weapon.\n\n As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration.\n\nYou can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends.",
    levels: [3],
    subClassId: ids.devotion,
  },
  {
    name: "Channel Divinity: Turn the Unholy",
    description:
      "When you take this oath at third level, you gain access to Channel Divinity: Turn the Unholy.\n\n As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.\n\nA turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.",
    levels: [3],
    subClassId: ids.devotion,
  },
  {
    name: "Aura of Devotion",
    description:
      "Starting at 7th level, you and friendly creatures within 10 feet of you can't be charmed while you are conscious.\n\nAt 18th level, the range of this aura increases to 30 feet.",
    levels: [7, 18],
    subClassId: ids.devotion,
  },
  {
    name: "Purity of Spirit",
    description:
      "Beginning at 15th level, you are always under the effects of a protection from evil and good spell.",
    levels: [15],
    subClassId: ids.devotion,
  },
  {
    name: "Holy Nimbus",
    description:
      "At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that.\n\nWhenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage.\n\nIn addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead.\n\nOnce you use this feature, you can't use it again until you finish a long rest.",
    levels: [20],
    subClassId: ids.devotion,
  },
  // glory
  {
    name: "Tenets of Glory",
    description:
      "The tenets of the Oath of Glory drive a paladin to attempt heroics that might one day shine in legend.",
    extendedTable: [
      {
        "": {
          headers: ["Tenet", "Description"],
          data: [
            {
              Tenet: "Actions over Words",
              Description: "Strive to be known by glorious deeds, not words.",
            },
            {
              Tenet: "Challenges Are but Tests",
              Description:
                "Face hardships with courage, and encourage your allies to face them with you.",
            },
            {
              Tenet: "Hone the Body",
              Description:
                "Like raw stone, your body must be worked so its potential can be realized.",
            },
            {
              Tenet: "Discipline the Soul",
              Description:
                "You must marshal the discipline to overcome failings within yourself that threaten to dim the glory of you and your friends.",
            },
          ],
        },
      },
    ],
    levels: [3],
    subClassId: ids.glory,
  },
  {
    name: "Oath Spells",
    description: "You gain oath spells at the paladin levels listed.",
    levels: [3, 5, 9, 13, 17],
    subClassId: ids.glory,
    extendedTable: [
      {
        "Oath of Glory Spells": {
          headers: ["Paladin Level", "Spells"],
          data: [
            {
              "Paladin Level": "3rd",
              Spells: "Guiding Bolt, Heroism",
            },
            {
              "Paladin Level": "5th",
              Spells: "Enhance Ability, Magic Weapon",
            },
            {
              "Paladin Level": "9th",
              Spells: "Haste, Protection from Energy",
            },
            {
              "Paladin Level": "13th",
              Spells: "Freedom of Movement, Compulsion",
            },
            {
              "Paladin Level": "17th",
              Spells: "Commune, Flame Strike",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Channel Divinity: Peerless Athlete",
    description:
      "When you take this oath at 3rd level, you gain the ability to augment your athleticism with divine favor. As a bonus action, you can use your Channel Divinity to augment your athleticism. For the next 10 minutes, you have advantage on Strength (Athletics) and Dexterity (Acrobatics) checks; you can carry, push, drag, and lift twice as much weight as normal; and the distance of your long and high jumps increases by 10 feet (this extra distance costs movement as normal).",
    levels: [3],
    subClassId: ids.glory,
  },
  {
    name: "Channel Divinity: Inspiring Smite",
    description:
      "When you take this oath at 3rd level, you gain the ability to inspire your allies with your weapon attacks. Immediately after you deal damage to a creature with your Divine Smite feature, you can use your Channel Divinity as a bonus action and distribute temporary hit points to creatures of your choice within 30 feet of you, which can include you. The total number of temporary hit points equals 2d8 + your level in this class, divided among the chosen creatures however you like.",
    levels: [3],
    subClassId: ids.glory,
  },
  {
    name: "Aura of Alacrity",
    description:
      "At 7th level, you emanate an aura that fills you and your companions with supernatural speed, allowing you to race across a battlefield in formation. Your walking speed increases by 10 feet. In addition, if you aren't incapacitated, the walking speed of any ally who starts their turn within 5 feet of you increases by 10 feet until the end of that turn.\n\nAt 18th level, the range of this aura increases to 10 feet.",
    levels: [7, 18],
    subClassId: ids.glory,
  },
  {
    name: "Glorious Defense",
    description:
      "When you reach 15th level, you can turn defense into a sudden strike. When you or another creature you can see within 10 feet of you is hit by an attack roll, you can use your reaction to grant a bonus to the target's AC against that attack, potentially causing it to miss. The bonus equals your Charisma modifier (minimum of +1). If the attack misses, you can make one weapon attack against the attacker as part of this reaction, provided the attacker is within your weapon's range.\n\nYou can use this feature a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a long rest.",
    levels: [15],
    subClassId: ids.glory,
  },
  {
    name: "Living Legend",
    description:
      "At 20th level, you can empower yourself with the legends — whether true or exaggerated — of your great deeds. As a bonus action, you gain the benefits below for 1 minute.\n\nOnce you use this feature, you can't use it again until you finish a long rest, unless you expend a spell slot of 5th level or higher to use it again.",
    options: [
      "You are blessed with an otherworldly presence, gaining advantage on all Charisma checks.",
      "Once on each of your turns when you make a weapon attack and miss, you can cause that attack to hit instead.",
      "If you fail a saving throw, you can use your reaction to reroll it. You must use this new roll.",
    ],
    levels: [20],
    subClassId: ids.glory,
  },
  //redemption
  {
    name: "Tenets of Redemption",
    description:
      "The tenets of the Oath of Redemption hold a paladin to a high standard of peace and justice.",
    extendedTable: [
      {
        "": {
          headers: ["Tenet", "Description"],
          data: [
            {
              Tenet: "Peace",
              Description:
                "Violence is a weapon of last resort. Diplomacy and understanding are the paths to long-lasting peace.",
            },
            {
              Tenet: "Innocence",
              Description:
                "All people begin life in an innocent state, and it is their environment or the influence of dark forces that drives them to evil. By setting the proper example, and working to heal the wounds of a deeply flawed world, you can set anyone on a righteous path.",
            },
            {
              Tenet: "Patience",
              Description:
                "Change takes time. Those who have walked the path of the wicked must be given reminders to keep them honest and true. Once you have planted the seed of righteousness in a creature, you must work day after day to allow it to survive and then flourish.",
            },
            {
              Tenet: "Wisdom",
              Description:
                "Your heart and mind must stay clear, for eventually you will be forced to admit defeat. While every creature can be redeemed, some are so far along the path of evil that you have no choice but to end their lives for the greater good. Any such action must be carefully weighed and the consequences fully understood, but once you have made the decision, follow through with it knowing your path is just.",
            },
          ],
        },
      },
    ],
    levels: [3],
    subClassId: ids.redemption,
  },
  {
    name: "Oath Spells",
    description: "You gain oath spells at the paladin levels listed.",
    levels: [3, 5, 9, 13, 17],
    subClassId: ids.redemption,
    extendedTable: [
      {
        "Oath of Redemption Spells": {
          headers: ["Paladin Level", "Spells"],
          data: [
            {
              "Paladin Level": "3rd",
              Spells: "Sanctuary, Sleep",
            },
            {
              "Paladin Level": "5th",
              Spells: "Hold Person, Calm Emotions",
            },
            {
              "Paladin Level": "9th",
              Spells: "Counterspell, Hypnotic Pattern",
            },
            {
              "Paladin Level": "13th",
              Spells: "Otiluke's Resilient Sphere, Stoneskin",
            },
            {
              "Paladin Level": "17th",
              Spells: "Hold Monster, Wall of Force",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Channel Divinity: Emissary of Peace",
    description:
      "When you take this oath at 3rd level, you can use your Channel Divinity to augment your presence with divine power. As a bonus action, you grant yourself a +5 bonus to Charisma (Persuasion) checks for the next 10 minutes.",
    levels: [3],
    subClassId: ids.redemption,
  },
  {
    name: "Channel Divinity: Rebuke the Violent",
    description:
      "When you take this oath at 3rd level, you can use your Channel Divinity to rebuke those who use violence. Immediately after an attacker within 30 feet of you deals damage with an attack against a creature other than you, you can use your reaction to force the attacker to make a Wisdom saving throw. On a failed save, the attacker takes radiant damage equal to the damage it just dealt. On a successful save, it takes half as much damage.",
    levels: [3],
    subClassId: ids.redemption,
  },
  {
    name: "Aura of the Guardian",
    description:
      "Starting at 7th level, you can shield your allies from harm at the cost of your own health. When a creature within 10 feet of you takes damage, you can use your reaction to magically take that damage, instead of that creature taking it. This feature doesn't transfer any other effects that might accompany the damage, and this damage can't be reduced in any way.\n\nAt 18th level, the range of this aura increases to 30 feet.",
    levels: [7],
    subClassId: ids.redemption,
  },

  {
    name: "Protective Spirit",
    description:
      "Starting at 15th level, a holy presence mends your wounds in combat. You regain hit points equal to 1d6 + half your paladin level if you end your turn in combat with fewer than half of your hit points remaining and you aren’t incapacitated.",

    levels: [15],
    subClassId: ids.redemption,
  },
  {
    name: "Emissary of Redemption",
    description:
      "At 20th level, you become an avatar of peace, which gives you the benefits listed below.\n\nIf you attack a creature, cast a spell on it, or deal damage to it by any means but this feature, neither benefit works against that creature until you finish a long rest.",
    options: [
      "You have resistance to all damage dealt by other creatures (their attacks, spells, and other effects).",
      "Whenever a creature hits you with an attack, it takes radiant damage equal to half the damage you take from the attack.",
    ],
    levels: [20],
    subClassId: ids.redemption,
  },
  //vengeance
  {
    name: "Tenets of Vengeance",
    description:
      "The tenets of the Oath of Vengeance vary by paladin, but all the tenets revolve around punishing wrongdoers by any means necessary.",
    extendedTable: [
      {
        "": {
          headers: ["Tenet", "Description"],
          data: [
            {
              Tenet: "Fight the Greater Evil",
              Description:
                "Faced with a choice of fighting my sworn foes or combating a lesser evil, I choose the greater evil.",
            },
            {
              Tenet: "No Mercy for the Wicked",
              Description:
                "Ordinary foes might win my mercy, but my sworn enemies do not.",
            },
            {
              Tenet: "By Any Means Necessary",
              Description:
                "My qualms can't get in the way of exterminating my foes.",
            },
            {
              Tenet: "Restitution",
              Description:
                "If my foes wreak ruin on the world, it is because I failed to stop them. I must help those harmed by their misdeeds.",
            },
          ],
        },
      },
    ],
    levels: [3],
    subClassId: ids.vengeance,
  },
  {
    name: "Oath Spells",
    description: "You gain oath spells at the paladin levels listed.",
    levels: [3, 5, 9, 13, 17],
    subClassId: ids.vengeance,
    extendedTable: [
      {
        "Oath of Vengeance Spells": {
          headers: ["Paladin Level", "Spells"],
          data: [
            {
              "Paladin Level": "3rd",
              Spells: "Bane, Hunter's Mark",
            },
            {
              "Paladin Level": "5th",
              Spells: "Hold Person, Misty Step",
            },
            {
              "Paladin Level": "9th",
              Spells: "Haste, Protection from Energy",
            },
            {
              "Paladin Level": "13th",
              Spells: "Banishment, Dimension Door",
            },
            {
              "Paladin Level": "17th",
              Spells: "Hold Monster, Scrying",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Channel Divinity: Abjure Enemy",
    description:
      "When you take this oath at 3rd level, you may use your Channel Divinity to cast Abjure Enemy.\n\nAs an action, you present your holy symbol and speak a prayer of denunciation, using your Channel Divinity. Choose one creature within 60 feet of you that you can see. That creature must make a Wisdom saving throw, unless it is immune to being frightened. Fiends and undead have disadvantage on this saving throw.\n\nOn a failed save, the creature is frightened for 1 minute or until it takes any damage. While frightened, the creature's speed is reduced to 0, and it can't benefit from any bonus to its speed.\n\nOn a successful save, the creature's speed is halved for 1 minute or until the creature takes any damage.",
    levels: [3],
    subClassId: ids.vengeance,
  },
  {
    name: "Channel Divinity: Vow of Enmity",
    description:
      "As a bonus action, you can utter a vow of enmity against a creature you can see within 10 feet of you, using your Channel Divinity. You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls unconscious.",
    levels: [3],
    subClassId: ids.vengeance,
  },
  {
    name: "Relentless Avenger",
    description:
      "By 7th level, your supernatural focus helps you close off a foe's retreat. When you hit a creature with an opportunity attack, you can move up to half your speed immediately after the attack and as part of the same reaction. This movement doesn't provoke opportunity attacks.",
    levels: [7],
    subClassId: ids.vengeance,
  },
  {
    name: "Soul of Vengeance",
    description:
      "Starting at 15th level, the authority with which you speak your Vow of Enmity gives you greater power over your foe. When a creature under the effect of your Vow of Enmity makes an attack, you can use your reaction to make a melee weapon attack against that creature if it is within range.",
    levels: [15],
    subClassId: ids.vengeance,
  },
  {
    name: "Avenging Angel",
    description:
      "At 20th level, you can assume the form of an angelic avenger. Using your action, you undergo a transformation. For 1 hour, you gain the following benefits:\n\nOnce you use this feature, you can't use it again until you finish a long rest.",
    options: [
      "Wings sprout from your back and grant you a flying speed of 60 feet.",
      "You emanate an aura of menace in a 30-foot radius. The first time any enemy creature enters the aura or starts its turn there during a battle, the creature must succeed on a Wisdom saving throw or become frightened of you for 1 minute or until it takes any damage. Attack rolls against the frightened creature have advantage.",
    ],
    levels: [20],
    subClassId: ids.vengeance,
  },
  //watcher
  {
    name: "Tenets of the Watchers",
    description:
      "A paladin who assumes the Oath of the Watchers swears to safeguard mortal realms from otherwordly threats.",
    extendedTable: [
      {
        "": {
          headers: ["Tenet", "Description"],
          data: [
            {
              Tenet: "Vigilance",
              Description:
                "The threats you face are cunning, powerful, and subversive. Be ever alert for their corruption.",
            },
            {
              Tenet: "Loyalty",
              Description:
                "Never accept gifts or favors from fiends or those who truck with them. Stay true to your order, your comrades, and your duty.",
            },
            {
              Tenet: "Discipline",
              Description:
                "You are the shield against the endless terrors that lie beyond the stars. Your blade must be forever sharp and your mind keen to survive what lies beyond.",
            },
          ],
        },
      },
    ],
    levels: [3],
    subClassId: ids.watchers,
  },
  {
    name: "Oath Spells",
    description: "You gain oath spells at the paladin levels listed.",
    levels: [3, 5, 9, 13, 17],
    subClassId: ids.watchers,
    extendedTable: [
      {
        "Oath of the Watchers Spells": {
          headers: ["Paladin Level", "Spells"],
          data: [
            {
              "Paladin Level": "3rd",
              Spells: "Alarm, Detect Magic",
            },
            {
              "Paladin Level": "5th",
              Spells: "Moonbeam, See Invisibility",
            },
            {
              "Paladin Level": "9th",
              Spells: "Counterspell, Nondetection",
            },
            {
              "Paladin Level": "13th",
              Spells: "Aura of Purity, Banishment",
            },
            {
              "Paladin Level": "17th",
              Spells: "Hold Monster, Scrying",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Channel Divinity: Watcher's Will",
    description:
      "When you take this oath at 3rd level, you can use your Channel Divinity to invest your presence with the warding power of your faith. As an action, you can choose a number of creatures you can see within 30 feet of you, up to a number equal to your Charisma modifier (minimum of one creature). For 1 minute, you and the chosen creatures have advantage on Intelligence, Wisdom, and Charisma saving throws.",
    levels: [3],
    subClassId: ids.watchers,
  },
  {
    name: "Channel Divinity: Abjure the Extraplanar",
    description:
      "When you take this oath at 3rd level, you can use your Channel Divinity to castigate unworldly beings. As an action, you present your holy symbol and each aberration, celestial, elemental, fey, or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.\n\nA turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly end its move in a space within 30 feet of you. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can take the Dodge action.",
    levels: [3],
    subClassId: ids.watchers,
  },
  {
    name: "Aura of the Sentinel",
    description:
      "At 7th level, you emit an aura of alertness while you aren't incapacitated. When you and any creatures of your choice within 10 feet of you roll initiative, you all gain a bonus to initiative equal to your proficiency bonus.\n\nAt 18th level, the range of this aura increases to 30 feet.",
    levels: [7, 18],
    subClassId: ids.watchers,
  },
  {
    name: "Vigilant Rebuke",
    description:
      "At 15th level, you've learned how to chastise anyone who dares wield beguilements against you and your wards. Whenever you or a creature you can see within 30 feet of you succeeds on an Intelligence, a Wisdom, or a Charisma saving throw, you can use your reaction to deal 2d8 + your Charisma modifier force damage to the creature that forced the saving throw.",
    levels: [15],
    subClassId: ids.watchers,
  },
  {
    name: "Mortal Bulwark",
    description:
      "At 20th level, you manifest a spark of divine power in defense of the mortal realms. As a bonus action, you gain the benefits listed below for 1 minute.\n\nOnce you use this bonus action, you can't use it again until you finish a long rest, unless you expend a 5th-level spell slot to use it again.",
    options: [
      "You gain truesight with a range of 120 feet.",
      "You have advantage on attack rolls against aberrations, celestials, elementals, fey, and fiends.",
      "When you hit a creature with an attack roll and deal damage to it, you can also force it to make a Charisma saving throw against your spell save DC. On a failed save, the creature is magically banished to its native plane of existence if it's currently not there. On a successful save, the creature can't be banished by this feature for 24 hours.",
    ],
    levels: [20],
    subClassId: ids.watchers,
  },
  // oathbreaker
  {
    name: "Oathbreaker Spells",
    description: "You gain oath spells at the paladin levels listed.",
    levels: [3, 5, 9, 13, 17],
    subClassId: ids.oathbreaker,
    extendedTable: [
      {
        "Oathbreaker Spells": {
          headers: ["Paladin Level", "Spells"],
          data: [
            {
              "Paladin Level": "3rd",
              Spells: "Hellish Rebuke, Inflict Wounds",
            },
            {
              "Paladin Level": "5th",
              Spells: "Crown of Madness, Darkness",
            },
            {
              "Paladin Level": "9th",
              Spells: "Bestow Curse, Animated Dead",
            },
            {
              "Paladin Level": "13th",
              Spells: "Blight, Confusion",
            },
            {
              "Paladin Level": "17th",
              Spells: "Contagion, Dominate Person",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Channel Divinity: Control Undead",
    description:
      "Starting at 3rd level, you can use your Channel Divinity to control undead creatures.  As an action, you target one undead creature you can see within 30 feet of you. The target must make a Wisdom saving throw. On a failed save, the target must obey your commands for the next 24 hours, or until you use this Channel Divinity option again. An undead whose challenge rating is equal to or greater than your paladin level is immune to this effect.",
    levels: [3],
    subClassId: ids.oathbreaker,
  },
  {
    name: "Channel Divinity: Dreadful Aspect",
    description:
      "Starting at 3rd level, you can use your Channel Divinity to strike terror into your enemies. As an action, you channel the darkest emotions and focus them into a burst of magical menace. Each creature of your choice within 30 feet of you must make a Wisdom saving throw if it can see you. On a failed save, the target is frightened of you for 1 minute. If a creature frightened by this effect ends its turn more than 30 feet away from you, it can attempt another Wisdom saving throw to end the effect on it.",
    levels: [3],
    subClassId: ids.oathbreaker,
  },
  {
    name: "Aura of Hate",
    description:
      "Starting at 7th level you, as well any fiends and undead within 10 feet of you, gain a bonus to melee weapon damage rolls equal to your Charisma modifier (minimum of +1). A creature can benefit from this feature from only one paladin at a time.\n\nAt 18th level, the range of this aura increases to 30 feet.",
    levels: [7, 18],
    subClassId: ids.oathbreaker,
  },
  {
    name: "Supernatural Resistance",
    description:
      "At 15th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.",
    levels: [15],
    subClassId: ids.oathbreaker,
  },
  {
    name: "Dread Lord",
    description:
      "At 20th level, you can, as an action, surround yourself with an aura of gloom that lasts for 1 minute. The aura reduces any bright light in a 30-foot radius around you to dim light. Whenever an enemy that is frightened by you starts its turn in the aura, it takes 4d10 psychic damage. Additionally, you and any creatures of your choosing in the aura are draped in deeper shadow. Creatures that rely on sight have disadvantage on attack rolls against creatures draped in this shadow.\n\nWhile the aura lasts, you can use a bonus action on your turn to cause the shadows in the aura to attack one creature. Make a melee spell attack against the target. If the attack hits, the target takes necrotic damage equal to 3d10 + your Charisma modifier.\n\nAfter activating this feature, you can't do so again until you finish a long rest.",
    levels: [20],
    subClassId: ids.oathbreaker,
  },
];

export default PaladinSubclassFeatures;
