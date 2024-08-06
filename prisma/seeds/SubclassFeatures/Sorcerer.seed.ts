import { Prisma } from "@prisma/client";

const ids = {
  aberrant: 98,
  clockwork: 99,
  draconic: 100,
  divine: 101,
  lunar: 102,
  shadow: 103,
  storm: 104,
  wild: 105,
};

const sorcererSubclassFeatures: Prisma.SubClassFeatureCreateManyInput[] = [
  //aberant
  {
    name: "Aberrant Origin",
    description:
      "As an Aberrant Mind sorcerer, you decide how you acquired your powers. Were you born with them? Or did an event later in life leave you shining with psionic awareness? Consult the Aberrant Origins table for a possible origin of your power.",
    levels: [1],
    subClassId: ids.aberrant,

    extendedTable: [
      {
        Origins: {
          headers: ["d6", "Origin"],
          data: [
            {
              d6: "1",
              Origin:
                "You were exposed to the Far Realm's warping influence. You are convinced that a tentacle is now growing on you, but no one else can see it.",
            },
            {
              d6: "2",
              Origin:
                "A psychic wind from the Astral Plane carried psionic energy to you. When you use your powers, faint motes of light sparkle around you.",
            },
            {
              d6: "3",
              Origin:
                "You once suffered the dominating powers of an aboleth, leaving a psychic splinter in your mind.",
            },
            {
              d6: "4",
              Origin:
                "You were implanted with a mind flayer tadpole, but the ceremorphosis never completed. And now its psionic power is yours. When you use it, your flesh shines with a strange mucus.",
            },
            {
              d6: "5",
              Origin:
                "As a child, you had an imaginary friend that looked like a flumph or a strange platypus-like creature. One day, it gifted you with psionic powers, which have ended up being not so imaginary.",
            },
            {
              d6: "6",
              Origin:
                "Your nightmares whisper the truth to you: your psionic powers are not your own. You draw them from your parasitic twin!",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Psionic Spells",
    description:
      "Starting at 1st level, you learn additional spells when you reach certain levels in this class, as shown on the Psionic Spells table. Each of these spells counts as a sorcerer spell for you, but it doesn't count against the number of sorcerer spells you know.\n\nWhenever you gain a sorcerer level, you can replace one spell you gained from this feature with another spell of the same level. The new spell must be a divination or an enchantment spell from the sorcerer, warlock, or wizard spell list.",
    levels: [1, 3, 5, 7, 9],
    subClassId: ids.aberrant,
    extendedTable: [
      {
        "": {
          headers: ["Sorcerer Level", "Spells"],
          data: [
            {
              "Sorcerer Level": "1st",
              Spells: "Arms of Hadat, Dissonant Whispers, Mind Sliver",
            },
            {
              "Sorcerer Level": "3rd",
              Spells: "Calm Emotions, Detect Thoughts",
            },
            {
              "Sorcerer Level": "5th",
              Spells: "Hunger of Hadar, Sending",
            },
            {
              "Sorcerer Level": "7th",
              Spells: "Evard's Black Tentacles, Summon Aberration",
            },
            {
              "Sorcerer Level": "9th",
              Spells: "Rary's Telepathic Bond, Telekinesis",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Telepathic Speech",
    description:
      "Starting at 1st level, you can form a telepathic connection between your mind and the mind of another. As a bonus action, choose one creature you can see within 30 feet of you. You and the chosen creature can speak telepathically with each other while the two of you are within a number of miles of each other equal to your Charisma modifier (minimum of 1 mile). To understand each other, you each must speak mentally in a language the other knows.\n\nThe telepathic connection lasts for a number of minutes equal to your sorcerer level. It ends early if you are incapacitated or die or if you use this ability to form a connection with a different creature.",
    levels: [1],
    subClassId: ids.aberrant,
  },
  {
    name: "Psionic Sorcery",
    description:
      "Beginning at 6th level, when you cast any spell of 1st level or higher from your Psionic Spells feature, you can cast it by expending a spell slot as normal or by spending a number of sorcery points equal to the spell's level. If you cast the spell using sorcery points, it requires no verbal or somatic components, and it requires no material components, unless they are consumed by the spell.",
    levels: [6],
    subClassId: ids.aberrant,
  },
  {
    name: "Psychic Defenses",
    description:
      "At 6th level, you gain resistance to psychic damage, and you have advantage on saving throws against being charmed or frightened.",
    levels: [6],
    subClassId: ids.aberrant,
  },
  {
    name: "Revelation in Flesh",
    description:
      "Beginning at 14th level, you can unleash the aberrant truth hidden within yourself. As a bonus action, you can spend 1 or more sorcery points to magically transform your body for 10 minutes. For each sorcery point you spend, you can gain one of the following benefits of your choice, the effects of which last until the transformation ends:",
    levels: [14],
    subClassId: ids.aberrant,
    options: [
      "You can see any invisible creature within 60 feet of you, provided it isn't behind total cover. Your eyes also turn black or become writhing sensory tendrils.",
      "You gain a flying speed equal to your walking speed and can hover. As you fly, your skin glistens with mucus or shines with an otherworldly light.",
      "You gain a swimming speed equal to twice your walking speed, and you can breathe underwater. Moreover, gills grow from your neck or fan out from behind your ears, your fingers become webbed, or you grow writhing cilia that extend through your clothing.",
      "Your body, along with any equipment you are wearing or carrying, becomes slimy and pliable. You can move through any space as narrow as 1 inch without squeezing, and you can spend 5 feet of movement to escape from nonmagical restraints or being grappled.",
    ],
  },
  {
    name: "Warping Implosion",
    description:
      "At 18th level, you can unleash your aberrant power as a space-warping anomaly. As an action, you can teleport to an unoccupied space you can see within 120 feet of you. Immediately after you disappear, each creature within 30 feet of the space you left must make a Strength saving throw against your spell save DC. On a failed save, a creature takes 3d10 force damage and is pulled straight toward the space you left, ending in an unoccupied space as close to your former space as possible. On a successful save, the creature takes half as much damage and isn't pulled.\n\nOnce you use this feature, you can't do so again until you finish a long rest, unless you spend 5 sorcery points to use it again.",
    levels: [18],
    subClassId: ids.aberrant,
  },
  // clockwork
  {
    name: "Manifestation of Order",
    description:
      "You consult the Manifestations of Order table and choose or randomly determine a way your connection to order manifests while you are casting any of your sorcerer spells.",
    levels: [1],
    subClassId: ids.clockwork,
    extendedTable: [
      {
        "": {
          headers: ["d6", "Manifestation"],
          data: [
            {
              d6: "1",
              Manifestation: "Spectral cogwheels hover behind you.",
            },
            {
              d6: "2",
              Manifestation: "The hands of a clock spin in your eyes.",
            },
            {
              d6: "3",
              Manifestation: "Your skin glows with a brassy sheen.",
            },
            {
              d6: "4",
              Manifestation:
                "Floating equations and geometric objects overlay your body.",
            },
            {
              d6: "5",
              Manifestation:
                "Your spellcasting focus temporarily takes the form of a Tiny clockwork mechanism.",
            },
            {
              d6: "6",
              Manifestation:
                "The ticking of gears or ringing of a clock can be heard by you and those affected by your magic.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Clockwork Magic",
    description:
      "You learn additional spells when you reach certain levels in this class, as shown on the Clockwork Spells table. Each spell counts as a sorcerer spell for you, but it doesn’t count against the number of sorcerer spells you know. These spells can’t be replaced when you gain a level in this class.\n\nWhenever you gain a sorcerer level, you can replace one spell you gained from this feature with another spell of the same level. The new spell must be an abjuration or a transmutation spell from the sorcerer, warlock, or wizard spell list.",
    levels: [1, 3, 5, 7, 9],
    subClassId: ids.clockwork,
    extendedTable: [
      {
        "Clockwork Spells": {
          headers: ["Sorcerer Level", "Spells"],
          data: [
            {
              "Sorcerer Level": "1st",
              Spells: "Alarm, Protection from Evil and Good",
            },
            {
              "Sorcerer Level": "3rd",
              Spells: "Aid, Lesser Restoration",
            },
            {
              "Sorcerer Level": "5th",
              Spells: "Dispel Magic, Protection from Energy",
            },
            {
              "Sorcerer Level": "7th",
              Spells: "Freedom of Movement, Summon Construct",
            },
            {
              "Sorcerer Level": "9th",
              Spells: "Greater Restoration, Wall of Force",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Restore Balance",
    description:
      "Starting at 1st level, your connection to the plane of absolute order allows you to equalize chaotic moments. When a creature you can see within 60 feet of you is about to roll a d20 with advantage or disadvantage, you can use your reaction to prevent the roll from being affected by advantage and disadvantage.\n\nYou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    levels: [1],
    subClassId: ids.clockwork,
  },
  {
    name: "Bastion of Law",
    description:
      "Starting at 6th level, you can tap into the grand equation of existence to imbue a creature with a shimmering shield of order. As an action, you can expend 1 to 5 sorcery points to create a magical ward around yourself or another creature you can see within 30 feet of you. The ward lasts until you finish a long rest or until you use this feature again.\n\nThe ward is represented by a number of d8s equal to the number of sorcery points spent to create it. When the warded creature takes damage, it can expend a number of those dice, roll them, and reduce the damage taken by the total rolled on those dice.",
    levels: [6],
    subClassId: ids.clockwork,
  },
  {
    name: "Trance of Order",
    description:
      "Starting at 14th level, you gain the ability to align your consciousness to the endless calculations of Mechanus. As a bonus action, you can enter this state for 1 minute. For the duration, attack rolls against you can't benefit from advantage, and whenever you make an attack roll, an ability check, or a saving throw, you can treat a roll of 9 or lower on the d20 as a 10.\n\nOnce you use this bonus action, you can't use it again until you finish a long rest, unless you spend 5 sorcery points to use it again.",
    levels: [14],
    subClassId: ids.clockwork,
  },
  {
    subClassId: ids.clockwork,
    name: "Clockwork Cavalcade",
    levels: [18],
    description:
      "At 18th level, you summon spirits of order to expunge disorder around you. As an action, you summon the spirits in a 30-foot cube originating from you. The spirits look like modrons or other constructs of your choice. The spirits are intangible and invulnerable, and they create the effects listed below before vanishing. \n\nOnce you use this action, you can’t use it again until you finish a long rest, unless you spend 7 sorcery points to use it again.",
    options: [
      "The spirits restore up to 100 hit points, divided as you choose among any number of creatures of your choice in the cube.",
      "Any damaged objects entirely in the cube are repaired instantly.",
      "Every spell of 6th level or lower ends on creatures and objects of your choice in the cube.",
    ],
  },
  // draconic
  {
    name: "Draconic Ancestry",
    description:
      "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.\n\nAdditionally, you can speak, read, and write Draconic. Whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.",
    levels: [1],
    subClassId: ids.draconic,
    extendedTable: [
      {
        "": {
          headers: ["Dragon Color", "Damage Type"],
          data: [
            {
              "Dragon Color": "Black",
              "Damage Type": "Acid",
            },
            {
              "Dragon Color": "Blue",
              "Damage Type": "Lightning",
            },
            {
              "Dragon Color": "Brass",
              "Damage Type": "Fire",
            },
            {
              "Dragon Color": "Bronze",
              "Damage Type": "Lightning",
            },
            {
              "Dragon Color": "Copper",
              "Damage Type": "Acid",
            },
            {
              "Dragon Color": "Gold",
              "Damage Type": "Fire",
            },
            {
              "Dragon Color": "Green",
              "Damage Type": "Poison",
            },
            {
              "Dragon Color": "Red",
              "Damage Type": "Fire",
            },
            {
              "Dragon Color": "Silver",
              "Damage Type": "Cold",
            },
            {
              "Dragon Color": "White",
              "Damage Type": "Cold",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Draconic Resilience",
    description:
      "As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class.\n\nAdditionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier.",
    levels: [1],
    subClassId: ids.draconic,
  },
  {
    name: "Elemental Affinity",
    description:
      "Starting at 6th level, when you cast a spell that deals damage of the type associated with your draconic ancestry, add your Charisma modifier to one damage roll of that spell. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour.",
    levels: [6],
    subClassId: ids.draconic,
  },
  {
    name: "Dragon Wings",
    description:
      "At 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn.\n\nYou can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them.",
    levels: [14],
    subClassId: ids.draconic,
  },
  {
    name: "Draconic Presence",
    description:
      "Beginning at 18th level, you can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your concentration (as if you were casting a concentration spell), each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be charmed (if you chose awe) or frightened (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours.",
    levels: [18],
    subClassId: ids.draconic,
  },
  //divine soul
  {
    name: "Divine Magic",
    description:
      "Your link to the divine allows you to learn spells normally associated with the cleric class. When your Spellcasting feature lets you learn a sorcerer cantrip or a sorcerer spell of 1st level or higher, you can choose the new spell from the cleric spell list or the sorcerer spell list. You must otherwise obey all the restrictions for selecting the spell, and it becomes a sorcerer spell for you.\n\nIn addition, choose an affinity for the source of your divine power: good, evil, law, chaos, or neutrality. You learn an additional spell based on that affinity, as shown below. It is a sorcerer spell for you, but it doesn't count against your number of sorcerer spells known. If you later replace this spell, you must replace it with a spell from the cleric spell list.",
    levels: [1],
    subClassId: ids.divine,
    extendedTable: [
      {
        "": {
          headers: ["Affinity", "Spell"],
          data: [
            {
              Affinity: "Good",
              Spell: "Cure Wounds",
            },
            {
              Affinity: "Evil",
              Spell: "Inflict Wounds",
            },
            {
              Affinity: "Law",
              Spell: "Bless",
            },
            {
              Affinity: "Chaos",
              Spell: "Bane",
            },
            {
              Affinity: "Neutrality",
              Spell: "Protection from Evil and Good",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Favored by the Gods",
    description:
      "Starting at 1st level, divine power guards your destiny. If you fail a saving throw or miss with an attack roll, you can roll 2d4 and add it to the total, possibly changing the outcome.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest.",
    levels: [1],
    subClassId: ids.divine,
  },
  {
    name: "Empowered Healing",
    description:
      "Starting at 6th level, the divine energy coursing through you can empower healing spells. Whenever you or an ally within 5 feet of you rolls dice to determine the number of hit points a spell restores, you can spend 1 sorcery point to reroll any number of those dice once, provided you aren't incapacitated. You can use this feature only once per turn.",
    levels: [6],
    subClassId: ids.divine,
  },
  {
    name: "Angelic Form",
    description:
      "Starting at 14th level, you can use a bonus action to manifest a pair of spectral wings from your back. While the wings are present, you have a flying speed of 30 feet. The wings last until you're incapacitated, you die, or you dismiss them as a bonus action.\n\nThe affinity you chose for your Divine Magic feature determines the appearance of the spectral wings: eagle wings for good or law, bat wings for evil or chaos, and dragonfly wings for neutrality.",
    levels: [14],
    subClassId: ids.divine,
  },
  {
    name: "Unearthly Recovery",
    description:
      "At 18th level, you gain the ability to overcome grievous injuries. As a bonus action when you have fewer than half of your hit points remaining, you can regain a number of hit points equal to half your hit point maximum.\n\nOnce you use this feature, you can't use it again until you finish a long rest.",
    levels: [18],
    subClassId: ids.divine,
  },
  //lunar sorcery
  {
    name: "Lunar Embodiment",
    description:
      "You learn additional spells when you reach certain levels in this class, as shown on the Lunar Spells table. Each of these spells counts as a sorcerer spell for you, but it doesn’t count against the number of sorcerer spells you know.\n\nWhenever you finish a long rest, you can choose what lunar phase manifests its power through your magic: Full Moon, New Moon, or Crescent Moon. While in the chosen phase, you can cast one 1st-level spell of the associated phase in the Lunar Spells table once without expending a spell slot. Once you cast a spell in this way, you can’t do so again until you finish a long rest.",
    levels: [1, 3, 5, 7, 9],
    subClassId: ids.lunar,
    extendedTable: [
      {
        "Lunar Spells": {
          headers: [
            "Sorcerer Level",
            "Full Moon Spells",
            "New Moon Spells",
            "Crescent Moon Spells",
          ],
          data: [
            {
              "Sorcerer Level": "1st",
              "Full Moon Spells": "Shield",
              "New Moon Spells": "Ray of Sickness",
              "Crescent Moon Spells": "Color Spray",
            },
            {
              "Sorcerer Level": "3rd",
              "Full Moon Spells": "Lesser Restoration",
              "New Moon Spells": "Blindness/Deafness",
              "Crescent Moon Spells": "Alter Self",
            },
            {
              "Sorcerer Level": "5th",
              "Full Moon Spells": "Dispel Magic",
              "New Moon Spells": "Vampiric Touch",
              "Crescent Moon Spells": "Phantom Steed",
            },
            {
              "Sorcerer Level": "7th",
              "Full Moon Spells": "Death Ward",
              "New Moon Spells": "Confusion",
              "Crescent Moon Spells": "Hallucinatory Terrain",
            },
            {
              "Sorcerer Level": "9th",
              "Full Moon Spells": "Rary's Telepathic Bond",
              "New Moon Spells": "Hold Monster",
              "Crescent Moon Spells": "Mislead",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Moon Fire",
    description:
      "Starting at 1st level, you can call down the radiant light of the moon on command. You learn the Sacred Flame spell, which doesn’t count against the number of sorcerer cantrips you know. When you cast the spell, you can target one creature as normal or target two creatures within range that are within 5 feet of each other.",
    levels: [1],
    subClassId: ids.lunar,
  },
  {
    name: "Lunar Boons",
    description:
      "Starting at 6th level, the current phase of your Lunar Embodiment can affect your Metamagic feature. Each Lunar Embodiment phase is associated with certain schools of magic, as shown in the Boons Table. \n\nWhenever you use Metamagic on a spell of a school of magic associated with your current Lunar Embodiment phase, you can reduce the sorcery points spent by 1 (minimum 0). You can reduce the sorcery points spent for your Metamagic a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest",
    levels: [6],
    subClassId: ids.lunar,
    extendedTable: [
      {
        "Boons Table": {
          headers: ["Lunar Phase", "Schools of Magic"],
          data: [
            {
              "Lunar Phase": "Full Moon",
              "Schools of Magic": "Abjuration, Divination",
            },
            {
              "Lunar Phase": "New Moon",
              "Schools of Magic": "Enchantment, Necromancy",
            },
            {
              "Lunar Phase": "Crescent Moon",
              "Schools of Magic": "Illusion, Transmutation",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Waxing and Waning",
    description:
      "Starting at 6th level, you gain greater control over the phases of your lunar magic. As a bonus action, you can spend 1 sorcery point to change your current Lunar Embodiment phase for a different one.\n\nYou can now cast one 1st-level spell from each lunar phase of the Lunar Spells table once without expending a spell slot, provided your current phase is the same as the lunar phase spell. Once you cast a lunar phase spell in this way, you can't do so again until you finish a long rest.",
    levels: [6],
    subClassId: ids.lunar,
  },
  {
    name: "Lunar Empowerment",
    description:
      "Starting at 14th level, the power of a lunar phase saturates your being. While you are in a Lunar Embodiment phase, you also gain the following benefit associated with that phase:",
    levels: [14],
    subClassId: ids.lunar,
    extendedTable: [
      {
        "": {
          headers: ["Lunar Phase", "Benefit"],
          data: [
            {
              "Lunar Phase": "Full Moon",
              Benefit:
                "You can use a bonus action to shed bright light in a 10-foot radius and dim light for an additional 10 feet or to douse the light. In addition, you and creatures of your choice have advantage on Intelligence (Investigation) and Wisdom (Perception) checks while within the bright light you shed.",
            },
            {
              "Lunar Phase": "New Moon",
              Benefit:
                "You have advantage on Dexterity (Stealth) checks. In addition, while you are entirely in darkness, attack rolls have disadvantage against you.",
            },
            {
              "Lunar Phase": "Crescent Moon",
              Benefit: "You have resistance to necrotic and radiant damage.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Lunar Phenomenon",
    description:
      "At 18th level, as a bonus action, you can tap into a special power of your current Lunar Embodiment phase. Alternatively, as part of the bonus action you take to change your lunar phase using the Waxing and Waning feature, you can immediately use the power of the lunar phase you are entering, as shown in the table below.\n\nOnce you use one of these bonus action benefits, you can’t use that benefit again until you finish a long rest, unless you spend 5 sorcery points to use it again.",
    levels: [18],
    subClassId: ids.lunar,
    extendedTable: [
      {
        "": {
          headers: ["Lunar Phase", "Benefit"],
          data: [
            {
              "Lunar Phase": "Full Moon",
              Benefit:
                "You radiate moonlight for a moment. Each creature of your choice within 30 feet of you must succeed on a Constitution saving throw against your spell save DC or be blinded until the end of its next turn. In addition, one creature of your choice in that area regains 3d8 hit points.",
            },
            {
              "Lunar Phase": "New Moon",
              Benefit:
                "You momentarily emanate gloom. Each creature of your choice within 30 feet of you must succeed on a Dexterity saving throw against your spell save DC or take 3d10 necrotic damage and have its speed reduced to 0 until the end of its next turn. In addition, you become invisible until the end of your next turn, or until immediately after you make an attack or cast a spell.",
            },
            {
              "Lunar Phase": "Crescent Moon",
              Benefit:
                "u can magically teleport to an unoccupied space you can see within 60 feet of yourself. You can bring along one willing creature you can see within 5 feet of yourself. That creature teleports to an unoccupied space of your choice that you can see within 5 feet of your destination space. In addition, you and that creature gain resistance to all damage until the start of your next turn.",
            },
          ],
        },
      },
    ],
  },
  //shadow magic
  {
    name: "Shadow Sorcerer Quirks",
    description:
      "At your option, you can pick from or roll on the Shadow Sorcerer Quirks table to create a quirk for your character.",
    levels: [1],
    subClassId: ids.shadow,
    extendedTable: [
      {
        "": {
          headers: ["d6", "Quirk"],
          data: [
            {
              d6: "1",
              Quirk: "You are always icy cold to the touch.",
            },
            {
              d6: "2",
              Quirk:
                "When you are asleep, you don't appear to breathe (though you must still breathe to survive).",
            },
            {
              d6: "3",
              Quirk: "You barely bleed, even when badly injured.",
            },
            {
              d6: "4",
              Quirk:
                "Your heart beats once per minute. This event sometimes surprises you.",
            },
            {
              d6: "5",
              Quirk:
                "You have trouble remembering that living creatures and corpses should be treated differently.",
            },
            {
              d6: "6",
              Quirk: "You blinked. Once. Last week.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Eyes of the Dark",
    description:
      "From 1st level, you have darkvision with a range of 120 feet.\n\nWhen you reach 3rd level in this class, you learn the darkness spell, which doesn't count against your number of sorcerer spells known. In addition, you can cast it by spending 2 sorcery points or by expending a spell slot. If you cast it with sorcery points, you can see through the darkness created by the spell.",
    levels: [1, 3],
    subClassId: ids.shadow,
  },
  {
    name: "Strength of the Grave",
    description:
      "Starting at 1st level, your existence in a twilight state between life and death makes you difficult to defeat. When damage reduces you to 0 hit points, you can make a Charisma saving throw (DC 5 + the damage taken). On a success, you instead drop to 1 hit point. You can't use this feature if you are reduced to 0 hit points by radiant damage or by a critical hit.\n\nAfter the saving throw succeeds, you can't use this feature again until you finish a long rest.",
    levels: [1],
    subClassId: ids.shadow,
  },
  {
    name: "Hound of Ill Omen",
    description:
      "At 6th level, you gain the ability to call forth a howling creature of darkness to harass your foes. As a bonus action, you can spend 3 sorcery points to summon a hound of ill omen to target one creature you can see within 120 feet of you.\n\nThe hound appears in an unoccupied space of your choice within 30 feet of the target. Roll initiative for the hound. On its turn, it can move only toward its target by the most direct route, and it can use its action only to attack its target. The hound can make opportunity attacks, but only against its target. Additionally, while the hound is within 5 feet of the target, the target has disadvantage on saving throws against any spell you cast. The hound disappears if it is reduced to 0 hit points, if its target is reduced to 0 hit points, or after 5 minutes.",
    levels: [6],
    subClassId: ids.shadow,
    extendedTable: [
      {
        "Hound Of Ill Omen Stats": {
          headers: ["STR", "DEX", "CON", "INT", "WIS", "CHA"],
          data: [
            {
              STR: "17 (+3)",
              DEX: "15 (+2)",
              CON: "15 (+2)",
              INT: "3 (-4)",
              WIS: "12 (+1)",
              CHA: "7 (-2)",
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
              Value: "Large Monstrosity",
            },
            {
              Stat: "Armor Class",
              Value: "14 (Natural Armor)",
            },
            {
              Stat: "Hit Points",
              Value: "37 (5d10 + 10)",
            },
            {
              Stat: "Speed",
              Value: "50 ft.",
            },
            {
              Stat: "Skills",
              Value: "Perception +3, Stealth +4",
            },
            {
              Stat: "Senses",
              Value: "Passive Perception 13",
            },
            {
              Stat: "Languages",
              Value: "-",
            },
            {
              Stat: "Challenge",
              Value: "1 (200 XP)",
            },
            {
              Stat: "Temporary Hit Points",
              Value:
                "The hound appears with temporary hit points equal to half your sorcerer level.",
            },
            {
              Stat: "Phase",
              Value:
                "The hound can move through other creatures and objects as if they were difficult terrain. The hound takes 5 force damage if it ends its turn inside an object.",
            },
            {
              Stat: "Keen Senses",
              Value:
                "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell. Additionally, at the start of its turn, the hound automatically knows its target's location. If the target was hidden, it is no longer hidden from the hound.",
            },
          ],
        },
      },
      {
        "": {
          headers: ["Action", "Description"],
          data: [
            {
              Action: "Bite",
              Description:
                "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Shadow Walk",
    description:
      "At 14th level, you gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action, you can teleport up to 120 feet to an unoccupied space you can see that is also in dim light or darkness.",
    levels: [14],
    subClassId: ids.shadow,
  },
  {
    name: "Umbral Form",
    description:
      "Starting at 18th level, you can spend 6 sorcery points as a bonus action to transform yourself into a shadowy form. In this form, you have resistance to all damage except force and radiant damage, and you can move through other creatures and objects as if they were difficult terrain. You take 5 force damage if you end your turn inside an object.\n\nYou remain in this form for 1 minute. It ends early if you are incapacitated, if you die, or if you dismiss it as a bonus action.",
    levels: [18],
    subClassId: ids.shadow,
  },
  // storm sorcery
  {
    name: "Wind Speaker",
    description:
      "The arcane magic you command is infused with elemental air. You can speak, read, and write Primordial. Knowing this language allows you to understand and be understood by those who speak its dialects: Aquan, Auran, Ignan, and Terran.",
    levels: [1],
    subClassId: ids.storm,
  },
  {
    name: "Tempestuous Magic",
    description:
      "Starting at 1st level, you can use a bonus action on your turn to cause whirling gusts of elemental air to briefly surround you, immediately before or after you cast a spell of 1st level or higher. Doing so allows you to fly up to 10 feet without provoking opportunity attacks.",
    levels: [1],
    subClassId: ids.storm,
  },
  {
    name: "Heart of the Storm",
    description:
      "At 6th level, you gain resistance to lightning and thunder damage. In addition, whenever you start casting a spell of 1st level or higher that deals lightning or thunder damage, stormy magic erupts from you. This eruption causes creatures of your choice that you can see within 10 feet of you to take lightning or thunder damage (choose each time this ability activates) equal to half your sorcerer level.",
    levels: [6],
    subClassId: ids.storm,
  },
  {
    name: "Storm Guide",
    description:
      "At 6th level, you gain the ability to subtly control the weather around you.\n\nIf it is raining, you can use an action to cause the rain to stop falling in a 20-foot-radius sphere centered on you. You can end this effect as a bonus action.\n\nIf it is windy, you can use a bonus action each round to choose the direction that the wind blows in a 100-foot-radius sphere centered on you. The wind blows in that direction until the end of your next turn. This feature doesn't alter the speed of the wind.",
    levels: [6],
    subClassId: ids.storm,
  },
  {
    name: "Storm's Fury",
    description:
      "Starting at 14th level, when you are hit by a melee attack, you can use your reaction to deal lightning damage to the attacker. The damage equals your sorcerer level. The attacker must also make a Strength saving throw against your sorcerer spell save DC. On a failed save, the attacker is pushed in a straight line up to 20 feet away from you.",
    levels: [14],
    subClassId: ids.storm,
  },
  {
    name: "Wind Soul",
    description:
      "At 18th level, you gain immunity to lightning and thunder damage.\n\nYou also gain a magical flying speed of 60 feet. As an action, you can reduce your flying speed to 30 feet for 1 hour and choose a number of creatures within 30 feet of you equal to 3 + your Charisma modifier. The chosen creatures gain a magical flying speed of 30 feet for 1 hour. Once you reduce your flying speed in this way, you can't do so again until you finish a short or long rest.",
    levels: [18],
    subClassId: ids.storm,
  },
  //Wild Magic
  {
    name: "Wild Magic Surge",
    description:
      "Starting when you choose this origin at 1st level, your spellcasting can unleash surges of untamed magic. Once per turn, the DM can have you roll a d20 immediately after you cast a sorcerer spell of 1st level or higher. If you roll a 1, roll on the Wild Magic Surge table to create a magical effect. If that effect is a spell, it is too wild to be affected by your Metamagic, and if it normally requires concentration, it doesn't require concentration in this case; the spell lasts for its full duration.",
    levels: [1],
    subClassId: ids.wild,
    extendedTable: [
      {
        "Wild Magic Surge Table": {
          headers: ["d100", "Effect"],
          data: [
            {
              d100: "01-02",
              Effect:
                "Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls.",
            },
            {
              d100: "03-04",
              Effect:
                "For the next minute, you can see any invisible creature if you have line of sight to it.",
            },
            {
              d100: "05-06",
              Effect:
                "A modron chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears I minute later.",
            },
            {
              d100: "07-08",
              Effect:
                "You cast Fireball as a 3rd-level spell centered on yourself.",
            },
            {
              d100: "09-10",
              Effect: "You cast Magic Missile as a 5th-level spell.",
            },
            {
              d100: "11-12",
              Effect:
                "Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow.",
            },
            {
              d100: "13-14",
              Effect: "You cast Confusion centered on yourself.",
            },
            {
              d100: "15-16",
              Effect:
                "For the next minute, you regain 5 hit points at the start of each of your turns.",
            },
            {
              d100: "17-18",
              Effect:
                "You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face.",
            },
            {
              d100: "19-20",
              Effect: "You cast Grease centered on yourself.",
            },
            {
              d100: "21-22",
              Effect:
                "Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw.",
            },
            {
              d100: "23-24",
              Effect:
                "Your skin turns a vibrant shade of blue. A Remove Curse spell can end this effect.",
            },
            {
              d100: "25-26",
              Effect:
                "An eye appears on your forehead for the next minute. During that time, you have advantage on Wisdom (Perception) checks that rely on sight.",
            },
            {
              d100: "27-28",
              Effect:
                "For the next minute, all your spells with a casting time of 1 action have a casting time of 1 bonus action.",
            },
            {
              d100: "29-30",
              Effect:
                "You teleport up to 60 feet to an unoccupied space of your choice that you can see.",
            },
            {
              d100: "31-32",
              Effect:
                "You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied.",
            },
            {
              d100: "33-34",
              Effect:
                "Maximize the damage of the next damaging spell you cast within the next minute.",
            },
            {
              d100: "35-36",
              Effect:
                "Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older.",
            },
            {
              d100: "37-38",
              Effect:
                "1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 feet of you and are frightened of you. They vanish after 1 minute.",
            },
            {
              d100: "39-40",
              Effect: "You regain 2d10 hit points.",
            },
            {
              d100: "41-42",
              Effect:
                "You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts.",
            },
            {
              d100: "43-44",
              Effect:
                "For the next minute, you can teleport up to 20 feet as a bonus action on each of your turns.",
            },
            {
              d100: "45-46",
              Effect: "You cast Levitate on yourself",
            },
            {
              d100: "47-48",
              Effect:
                "A unicorn controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later.",
            },
            {
              d100: "49-50",
              Effect:
                "You can't speak for the next minute. Whenever you try, pink bubbles float out of your mouth.",
            },
            {
              d100: "51-52",
              Effect:
                "A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to Magic Missile.",
            },
            {
              d100: "53-54",
              Effect:
                "You are immune to being intoxicated by alcohol for the next 5d6 days.",
            },
            {
              d100: "55-56",
              Effect: "Your hair falls out but grows back within 24 hours.",
            },
            {
              d100: "57-58",
              Effect:
                "For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame.",
            },
            {
              d100: "59-60",
              Effect: "You regain your lowest-level expended spell slot.",
            },
            {
              d100: "61-62",
              Effect: "For the next minute, you must shout when you speak.",
            },
            {
              d100: "63-64",
              Effect: "You cast Fog Cloud centered on yourself.",
            },
            {
              d100: "65-66",
              Effect:
                "Up to three creatures you choose within 30 feet of you take 4d10 lightning damage.",
            },
            {
              d100: "67-68",
              Effect:
                "You are frightened by the nearest creature until the end of your next turn.",
            },
            {
              d100: "69-70",
              Effect:
                "Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell.",
            },
            {
              d100: "71-72",
              Effect: "You gain resistance to all damage for the next minute.",
            },
            {
              d100: "73-74",
              Effect:
                "A random creature within 60 feet of you becomes poisoned for 1d4 hours.",
            },
            {
              d100: "75-76",
              Effect:
                "You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is blinded until the end of its next turn.",
            },
            {
              d100: "77-78",
              Effect:
                "You cast Polymorph on yourself. If you fail the saving throw, you turn into a sheep for the spell's duration.",
            },
            {
              d100: "79-80",
              Effect:
                "Illusory butterflies and flower petals flutter in the air within 10 feet of you for the next minute.",
            },
            {
              d100: "81-82",
              Effect: "You can take one additional action immediately.",
            },
            {
              d100: "83-84",
              Effect:
                "Each creature within 30 feet of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt.",
            },
            {
              d100: "85-86",
              Effect: "You cast Mirror Image. ",
            },
            {
              d100: "87-88",
              Effect:
                "You cast Fly on a random creature within 60 feet of you.",
            },
            {
              d100: "89-90",
              Effect:
                "You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell.",
            },
            {
              d100: "91-92",
              Effect:
                "If you die within the next minute, you immediately come back to life as if by the Reincarnate spell.",
            },
            {
              d100: "93-94",
              Effect:
                "Your size increases by one size category for the next minute.",
            },
            {
              d100: "95-96",
              Effect:
                "You and all creatures within 30 feet of you gain vulnerability to piercing damage for the next minute.",
            },
            {
              d100: "97-98",
              Effect:
                "You are surrounded by faint, ethereal music for the next minute.",
            },
            {
              d100: "99-00",
              Effect: "You regain all expended sorcery points. ",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Tides of Chaos",
    description:
      "Starting at 1st level, you can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. Once you do so, you must finish a long rest before you can use this feature again.\n\nAny time before you regain the use of this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature.",
    levels: [1],
    subClassId: ids.wild,
  },
  {
    name: "Bend Luck",
    description:
      "Starting at 6th level, you have the ability to twist fate using your wild magic. When another creature you can see makes an attack roll, an ability check, or a saving throw, you can use your reaction and spend 2 sorcery points to roll 1d4 and apply the number rolled as a bonus or penalty (your choice) to the creature's roll. You can do so after the creature rolls but before any effects of the roll occur.",
    levels: [6],
    subClassId: ids.wild,
  },
  {
    name: "Controlled Chaos",
    description:
      "At 14th level, you gain a modicum of control over the surges of your wild magic. Whenever you roll on the Wild Magic Surge table, you can roll twice and use either number.",
    levels: [14],
    subClassId: ids.wild,
  },
  {
    name: "Spell Bombardment",
    description:
      "Beginning at 18th level, the harmful energy of your spells intensifies. When you roll damage for a spell and roll the highest number possible on any of the dice, choose one of those dice, roll it again and add that roll to the damage. You can use the feature only once per turn.",
    levels: [18],
    subClassId: ids.wild,
  },
];

export default sorcererSubclassFeatures;
