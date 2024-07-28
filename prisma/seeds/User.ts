import {
  Ability,
  ArmorTypes,
  Prisma,
  PrismaClient,
  Skill,
} from "@prisma/client";

// Create Maxy User
const createMaxyUser = async (prisma: PrismaClient) => {
  await prisma.user.create({
    data: {
      id: 1,
      email: "maxyboboy@gmail.com",
      username: "Maxy",
      password: "password",
    },
  });

  // Create Custom Classes
  await prisma.class.create({
    data: {
      id: 13,
      name: "Alchemist",
      description:
        "In battle, the Alchemist is a force of nature, wielding potent elixirs that can heal allies, unleash fiery explosions, or transform enemies into harmless creatures. They carry an array of tinctures and potions, each crafted with precision and care, ready to be unleashed in the heat of the moment. Whether they are healing the wounded, bolstering the strength of their companions, or laying waste to their foes with a well-placed flask, their versatility makes them invaluable.",
      hitDie: 8,
      savingThrows: [Ability.CON, Ability.INT],
      skills: [
        Skill.ARCANA,
        Skill.HISTORY,
        Skill.MEDICINE,
        Skill.NATURE,
        Skill.PERCEPTION,
        Skill.SLEIGHT_OF_HAND,
      ],
      skillChoiceCount: 2,
      subClassName: "Alchemical Specialty",
      subClassDesc:
        "you choose a specialty that you emulate in the crafting of your alchemical items.",
      subfeatLevels: [3, 6, 12, 15, 19],
      multiclassing:
        "You must have a minimum Intelligence of 13 to multiclass in or out of this class.",
      tools: ["Alchemist's Supplies"],
      abilityScoreLevels: [4, 8, 12, 16, 19],
      equipment: [
        "• (a) a light crossbow and 20 bolts or (b) any simple weapon",
        "• (a) a scholar's pack or (b) an explorer's pack",
        "• An Alchemist's Supplies",
        "• Leather armor, any simple weapon, and two daggers",
      ],
      armor: [ArmorTypes.LIGHT],
      weapons: ["Simple"],
      spellCaster: true,
      spellCastingAbility: Ability.INT,
      ritualCaster: true,
      spellFocus: "Alchemist's Supplies",
      spellCastingInfo:
        "**Alchemical Solutions.** Alchemists do not cast spells in the traditional manner. Instead of weaving your spells during combat, Alchemists plan ahead and craft their spells in alchemical solutions. In order to cast a spefic spell, you must expend an Alchemical solution with that spell having been brewed within it.\n\n**Unstable Solutions.** Your Alchemical solutions are inherently unstable, and vary with power. Whenever you utilize an Alchemical solution, you must roll a die equal to the amount shown on the Solution Die column in the alchemist table. The number you roll is the spell level of your Alchemical Solution.\n\nIf you roll a number lower than the spell level of which you are attempting to cast, the Alchemical Solution is destroyed and automatically fails. \n\nIntelligence is your spellcasting ability for your Alchemist spells. The power of your spells comes from your mastery of the alchemical arts. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for an Alchemist spell you cast and when making an attack roll with one.",
      prepareSpellInfo:
        "The Alchemist table shows how many Alchemical Solutions you can create. You can refresh your Alchemical Solutions after a long rest. You can prepare a number of Alchemical Solutions equal to your Intelligence modifier + your Alchemist level.",
      source: "Maxy",
      userId: 1,
      displaySpellList: false,
      flavorText:
        "The Alchemist is a master of the alchemical arts, using their knowledge to create powerful solutions that can heal, harm, or transform.",
    },
  });
  //custom fields
  await prisma.customField.create({
    data: {
      classId: 13,
      name: "Alchemical Solutions",
      description:
        "Alchemical Solutions are the key to the Alchemist's spellcasting. ",
      level1: "2",
      level2: "2",
      level3: "3",
      level4: "3",
      level5: "3",
      level6: "4",
      level7: "4",
      level8: "4",
      level9: "4",
      level10: "5",
      level11: "5",
      level12: "5",
      level13: "5",
      level14: "5",
      level15: "6",
      level16: "6",
      level17: "6",
      level18: "6",
      level19: "6",
      level20: "7",
    },
  });
  await prisma.customField.create({
    data: {
      classId: 13,
      name: "Solution Die",
      description:
        "Alchemical Solutions are inherently unstable, and vary with power.",
      level1: "1d4-2",
      level2: "1d4-2",
      level3: "1d4-1",
      level4: "1d4-1",
      level5: "1d4-1",
      level6: "1d4-1",
      level7: "1d4-1",
      level8: "1d4-1",
      level9: "1d4",
      level10: "1d4",
      level11: "1d4",
      level12: "1d4",
      level13: "1d4+1",
      level14: "1d4+1",
      level15: "1d4+1",
      level16: "1d4+1",
      level17: "1d4+1",
      level18: "1d4+1",
      level19: "1d4+1",
      level20: "1d4+2",
    },
  });
  // Features

  const features: Prisma.FeatureCreateManyInput[] = [
    {
      name: "Alchemical Savant",
      description:
        "Starting at 1st level, you are an expert in the use of alchemical items. Whenever you make an ability check that uses your proficiency with Alchemist's Supplies, you can add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
      levels: [1],
      classId: 13,
    },
    {
      name: "Fast Learner",
      description:
        "Starting at 2nd level, whenever you succesfully create an Alchemical Solution, you may add 1 to the Solution Die roll in all future creations of that solution.\n\nAdditionally, this value increases by 1 at 5th, and 15th level, granted that you create another successfull Alchemical Solution.",
      levels: [2, 5, 15],
      classId: 13,
    },
    {
      name: "Alchemical Mastery",
      description: "",
    },
  ];

  await prisma.feature.createMany({
    data: features,
  });
};

export default createMaxyUser;
