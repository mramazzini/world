import { Prisma } from '@prisma/client';

const SpellNinthLevelSeed: Prisma.SpellCreateManyInput[] = [
  {
    id: '471',
    name: 'Astral Projection',
    slug: 'astral-projection',
    description:
      'You and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell fails and the casting is wasted if you are already on that plane). The material body you leave behind is unconscious and in a state of suspended animation; it doesn’t need food or air and doesn’t age.\n\nYour astral body resembles your mortal form in almost every way, replicating your game statistics and possessions. The principal difference is the addition of a silvery cord that extends from between your shoulder blades and trails behind you, fading to invisibility after 1 foot. This cord is your tether to your material body. As long as the tether remains intact, you can find your way home. If the cord is cut—something that can happen only when an effect specifically states that it does—your soul and body are separated, killing you instantly.\n\nYour astral form can freely travel through the Astral Plane and can pass through portals there leading to any other plane. If you enter a new plane or return to the plane you were on when casting this spell, your body and possessions are transported along the silver cord, allowing you to re-enter your body as you enter the new plane. Your astral form is a separate incarnation. Any damage or other effects that apply to it have no effect on your physical body, nor do they persist when you return to it. The spell ends for you and your companions when you use your action to dismiss it. When the spell ends, the affected creature returns to its physical body, and it awakens.\n\n',
    level: 9,
    school: 'NECROMANCY',
    castingTime: '1 hour',
    range: '10 feet',
    verbal: true,
    somatic: true,
    material: true,
    materialCost:
      '(for each creature you affect with this spell, you must provide one jacinth worth at least 1,000 gp and one ornately carved bar of silver worth at least 100 gp, all of which the spell consumes)',
    duration: 'Special',
    source: "Player's Handbook",
  },
  {
    id: '473',
    name: 'Foresight',
    slug: 'foresight',
    description:
      'You touch a willing creature and bestow a limited ability to see into the immediate future. For the duration, the target can’t be surprised and has advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against the target for the duration. This spell immediately ends if you cast it again before its duration ends.\n\n',
    level: 9,
    school: 'DIVINATION',
    castingTime: '1 minute',
    range: 'Touch',
    verbal: true,
    somatic: true,
    material: true,
    materialCost: '(a hummingbird feather)',
    duration: '8 hours',
    source: "Player's Handbook",
  },
  {
    id: '474',
    name: 'Gate',
    slug: 'gate',
    description:
      'You conjure a portal linking an unoccupied space you can see within range to a precise location on a different plane of existence. The portal is a circular opening, which you can make 5 to 20 feet in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration.\n\nThe portal has a front and a back on each plane where it appears. Travel through the portal is possible only by moving through its front. Anything that does so is instantly transported to the other plane, appearing in the unoccupied space nearest to the portal.\n\nDeities and other planar rulers can prevent portals created by this spell from opening in their presence or anywhere within their domains.\n\nWhen you cast this spell, you can speak the name of a specific creature (a pseudonym, title, or nickname doesn’t work). If that creature is on a plane other than the one you are on, the portal opens in the named creature’s immediate vicinity and draws the creature through it to the nearest unoccupied space on your side of the portal. You gain no special power over the creature, and it is free to act as the DM deems appropriate. It might leave, attack you, or help you.\n\n',
    level: 9,
    school: 'CONJURATION',
    castingTime: '1 action',
    range: '60 feet',
    verbal: true,
    somatic: true,
    material: true,
    materialCost: '(a diamond worth at least 5,000 gp)',
    duration: 'Concentration, up to 1 minute',
    source: "Player's Handbook",
  },
  {
    id: '478',
    name: 'Meteor Swarm',
    slug: 'meteor-swarm',
    description:
      'Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creature takes 20d6 fire damage and 20d6 bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery burst is affected only once.\n\nThe spell damages objects in the area and ignites flammable objects that aren’t being worn or carried.\n\n',
    level: 9,
    school: 'EVOCATION',
    castingTime: '1 action',
    range: '1 mile',
    verbal: true,
    somatic: true,
    material: false,
    duration: 'Instantaneous',
    source: "Player's Handbook",
  },
  {
    id: '480',
    name: 'Power Word Kill',
    slug: 'power-word-kill',
    description:
      'You utter a word of power that can compel one creature you can see within range to die instantly. If the creature you chose has 100 hit points or fewer, it dies. Otherwise, the spell has no effect.\n\n',
    level: 9,
    school: 'ENCHANTMENT',
    castingTime: '1 action',
    range: '60 feet',
    verbal: true,
    somatic: false,
    material: false,
    duration: 'Instantaneous',
    source: "Player's Handbook",
  },
  {
    id: '481',
    name: 'Prismatic Wall',
    slug: 'prismatic-wall',
    description:
      'A shimmering, multicolored plane of light forms a vertical opaque wall –&nbsp;up to 90 feet long, 30 feet high, and 1 inch thick –&nbsp;centered on a point you can see within range. Alternatively, you can shape the wall into a sphere up to 30 feet in diameter centered on a point you choose within range. The wall remains in place for the duration. If you position the wall so that it passes through a space occupied by a creature, the spell fails, and your action and the spell slot are wasted.\n\nThe wall sheds bright light out to a range of 100 feet and dim light for an additional 100 feet. You and creatures you designate at the time you cast the spell can pass through and remain near the wall without harm. If another creature that can see the wall moves to within 20 feet of it or starts its turn there, the creature must succeed on a Constitution saving throw or become blinded for 1 minute.\n\nThe wall consists of seven layers, each with a different color. When a creature attempts to reach into or pass through the wall, it does so one layer at a time through all the wall’s layers. As it passes or reaches through each layer, the creature must make a Dexterity saving throw or be affected by that layer’s properties as described below.\n\nThe wall can be destroyed, also one layer at a time, in order from red to violet, by means specific to each layer. Once a layer is destroyed, it remains so for the duration of the spell. An Antimagic Field has no effect on it.\n\n',
    level: 9,
    school: 'ABJURATION',
    castingTime: '1 action',
    range: '60 feet',
    verbal: true,
    somatic: true,
    material: false,
    duration: '10 minutes',
    source: "Player's Handbook",
    extendedTable: [
      {
        '': {
          headers: ['Color', 'Effect'],
          data: [
            {
              Color: 'Red',
              Effect:
                'The creature takes 10d6 fire damage on a failed save, or half as much damage on a successful one. While this layer is in place, nonmagical ranged attacks can’t pass through the wall. The layer can be destroyed by dealing at least 25 cold damage to it.',
            },
            {
              Color: 'Orange',
              Effect:
                'The creature takes 10d6 acid damage on a failed save, or half as much damage on a successful one. While this layer is in place, magical ranged attacks can’t pass through the wall. The layer is destroyed by a strong wind.',
            },
            {
              Color: 'Yellow',
              Effect:
                'The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 60 force damage to it.',
            },
            {
              Color: 'Green',
              Effect:
                'The creature takes 10d6 poison damage on a failed save, or half as much damage on a successful one. A Passwall spell, or another spell of equal or greater level that can open a portal on a solid surface, destroys this layer.',
            },
            {
              Color: 'Blue',
              Effect:
                'The creature takes 10d6 cold damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 25 fire damage to it.',
            },
            {
              Color: 'Indigo',
              Effect:
                'On a failed save, the creature is restrained. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures don’t need to be consecutive; keep track of both until the creature collects three of a kind. While this layer is in place, spells can’t be cast through the wall. The layer is destroyed by bright light shed by a Daylight spell or a similar spell of equal or higher level.',
            },
            {
              Color: 'Violet',
              Effect:
                'On a failed save, the creature is blinded. It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of the DM’s choosing and is no longer blinded. (Typically, a creature that is on a plane that isn’t its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.) This layer is destroyed by a Dispel Magic spell or similar spell of equal or higher level that can end spells and magical effects.',
            },
          ],
        },
      },
    ],
  },
  {
    id: '484',
    name: 'Shapechange',
    slug: 'shapechange',
    description:
      "You assume the form of a different creature for the duration. The new form can be any creature with a challenge rating equal to your level or lower. The creature can't be a construct or an undead, and you must have seen the sort of creature at least once. You transform into an average example of that creature, one without any class levels or the Spellcasting trait.\n\nYour game statistics are replaced by the statistics of the chosen creature, though you retain your alignment and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature, If the creature has the same proficiency as you, and the bonus listed in its statistics is higher than yours, use the creature's bonus in place of yours. You can't use any legendary actions or lair actions of the new form.\n\nYou assume the hit points and Hit Dice of the new form. When you revert to your normal, you return to the number of hit points you had before you transformed. If you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. As long as the excess damage doesn't reduce your normal form to 0 hitpoints, you aren't knocked unconscious.\n\nYou retain the benefit of any features from your class, species, or other source and can use them, provided that your new form is physically capable of doing so. You can't use any special senses you have (for example, darkvision) unless your new form also has that sense. You can only speak if the creature can normally speak.\n\nWhen you transform, you choose whether your equipment falls to the ground, merges into the new form, or is worn by it. Worn equipment functions as normal. The DM determines whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change shape or size to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge into your new form. Equipment that merges has no effect in that state.\n\nDuring this spell's duration, you can use your action to assume a different form following the same restrictions and rules for the original form, with one exception: if your new form has more hit points than your current one, your hit points remain at their current value.\n\n",
    level: 9,
    school: 'TRANSMUTATION',
    castingTime: '1 action',
    range: 'Self',
    verbal: true,
    somatic: true,
    material: true,
    materialCost:
      '(a jade circlet worth at least 1,500 gp, which you must place on your head before you cast the spell)',
    duration: 'Concentration, up to 1 hour',
    source: "Player's Handbook",
  },
  {
    id: '486',
    name: 'Time Stop',
    slug: 'time-stop',
    description:
      'You briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take 1d4 + 1 turns in a row, during which you can use actions and move as normal.\n\nThis spell ends if one of the actions you use during this period, or any effects that you create during this period, affects a creature other than you or an object being worn or carried by someone other than you. In addition, the spell ends if you move to a place more than 1,000 feet from the location where you cast it.\n\n',
    level: 9,
    school: 'TRANSMUTATION',
    castingTime: '1 action',
    range: 'Self',
    verbal: true,
    somatic: false,
    material: false,
    duration: 'Instantaneous',
    source: "Player's Handbook",
  },
  {
    id: '487',
    name: 'True Resurrection',
    slug: 'true-resurrection',
    description:
      'You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. If the creature’s soul is free and willing, the creature is restored to life with all its hit points.\n\nThis spell closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses affecting the creature when it died. The spell replaces damaged or missing organs or limbs. If the creature was undead, it is restored to its non-undead form.\n\nThe spell can even provide a new body if the original no longer exists, in which case you must speak the creature’s name. The creature then appears in an unoccupied space you choose within 10 feet of you.\n\n',
    level: 9,
    school: 'NECROMANCY',
    castingTime: '1 hour',
    range: 'Touch',
    verbal: true,
    somatic: true,
    material: true,
    materialCost:
      '(a sprinkle of holy water and diamonds worth at least 25,000 gp, which the spell consumes)',
    duration: 'Instantaneous',
    source: "Player's Handbook",
  },

  {
    id: '488',
    name: 'Weird',
    slug: 'weird',
    description:
      'Drawing on the deepest fears of a group of creatures, you create illusory creatures in their minds, visible only to them.\n\nEach creature in a 30-foot-radius sphere centered on a point of your choice within range must make a Wisdom saving throw. On a failed save, a creature becomes frightened for the duration.\n\nThe illusion calls on the creature’s deepest fears, manifesting its worst nightmares as an implacable threat. At the end of each of the frightened creature’s turns, it must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends for that creature.',
    level: 9,
    school: 'ILLUSION',
    castingTime: '1 action',
    range: '120 feet',
    verbal: true,
    somatic: true,
    material: false,
    duration: 'Concentration, up to 1 minute',
    source: "Player's Handbook",
  },
  {
    id: '489',
    name: 'Wish',
    slug: 'wish',
    description:
      'Wish is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality in accord with your desires.\n\nThe basic use of this spell is to duplicate any other spell of 8th level or lower. You don’t need to meet any requirements in that spell, including costly components. The spell simply takes effect.\n\nAlternatively, you can create one of the following effects of your choice:\n\n',
    level: 9,
    school: 'CONJURATION',
    castingTime: '1 action',
    range: 'Self',
    verbal: true,
    somatic: false,
    material: false,
    duration: 'Instantaneous',
    source: "Player's Handbook",
    postTableData:
      'You might be able to achieve something beyond the scope of the above examples. State your wish to the DM as precisely as possible. The DM has great latitude in ruling what occurs in such an instance; the greater the wish, the greater the likelihood that something goes wrong. This spell might simply fail, the effect you desire might only be partly achieved, or you might suffer some unforeseen consequence as a result of how you worded the wish. For example, wishing that a villain were dead might propel you forward in time to a period when that villain is no longer alive, effectively removing you from the game. Similarly, wishing for a legendary magic item or artifact might instantly transport you to the presence of the item’s current owner.\n\nThe stress of casting this spell to produce any effect other than duplicating another spell weakens you. After enduring that stress, each time you cast a spell until you finish a long rest, you take 1d10 necrotic damage per level of that spell. This damage can’t be reduced or prevented in any way. In addition, your Strength drops to 3, if it isn’t 3 or lower already, for 2d4 days. For each of those days that you spend resting and doing nothing more than light activity, your remaining recovery time decreases by 2 days. Finally, there is a 33 percent chance that you are unable to cast wish ever again if you suffer this stress.\n\n',
    options: [
      'You create one object of up to 25,000 gp in value that isn’t a magic item. The object can be no more than 300 feet in any dimension, and it appears in an unoccupied space you can see on the ground.',
      'You allow up to twenty creatures that you can see to regain all hit points, and you end all effects on them described in the greater restoration spell.',
      'You grant up to ten creatures that you can see resistance to a damage type you choose.',
      'You grant up to ten creatures you can see immunity to a single spell or other magical effect for 8 hours. For instance, you could make yourself and all your companions immune to a lich’s life drain attack.',
      'You undo a single recent event by forcing a reroll of any roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a wish spell could undo an opponent’s successful save, a foe’s critical hit, or a friend’s failed save. You can force the reroll to be made with advantage or disadvantage, and you can choose whether to use the reroll or the original roll.',
    ],
  },
];

export default SpellNinthLevelSeed;
