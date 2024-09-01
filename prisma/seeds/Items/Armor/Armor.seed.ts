import { Ability } from "@/lib/types";
import { ArmorType, Prisma, Skill } from "@prisma/client";

const ArmorSeed: Prisma.ArmorCreateManyInput[] = [
  {
    id: 1,
    name: "Padded Armor",
    armorClass: 11,
    armorType: ArmorType.LIGHT,
    features: [
      {
        name: "Stealth Disadvantage",
        description: "Padded Armor imposes disadvantage on Stealth checks.",
        effect: {
          skillRollAdvantages: [
            {
              skill: {
                defaultSkills: [Skill.STEALTH],
              },
              always: true,
              situation: "Padded Armor imposes disadvantage on Stealth checks.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    name: "Leather Armor",
    armorClass: 11,
    armorType: ArmorType.LIGHT,
  },
  {
    id: 3,
    name: "Studded Leather Armor",
    armorClass: 12,
    armorType: ArmorType.LIGHT,
  },
  {
    id: 4,
    name: "Hide Armor",
    armorClass: 12,
    armorType: ArmorType.MEDIUM,
  },
  {
    id: 5,
    name: "Chain Shirt",
    armorClass: 13,
    armorType: ArmorType.MEDIUM,
  },
  {
    id: 6,
    name: "Scale Mail",
    armorClass: 14,
    armorType: ArmorType.MEDIUM,
    features: [
      {
        name: "Stealth Disadvantage",
        description: "Scale Mail Armor imposes disadvantage on Stealth checks.",
        effect: {
          skillRollAdvantages: [
            {
              skill: {
                defaultSkills: [Skill.STEALTH],
              },
              always: true,
              situation:
                "Scale Mail Armor imposes disadvantage on Stealth checks.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 7,
    name: "Spiked Armor",
    armorClass: 14,
    armorType: ArmorType.MEDIUM,
    features: [
      {
        name: "Stealth Disadvantage",
        description: "Spiked Armor imposes disadvantage on Stealth checks.",
        effect: {
          skillRollAdvantages: [
            {
              skill: {
                defaultSkills: [Skill.STEALTH],
              },
              always: true,
              situation: "Spiked Armor imposes disadvantage on Stealth checks.",
            },
          ],
        },
      },
    ],
  },

  {
    id: 8,
    name: "Breastplate",
    armorClass: 14,
    armorType: ArmorType.MEDIUM,
  },
  {
    id: 9,
    name: "Half Plate",
    armorClass: 15,
    armorType: ArmorType.MEDIUM,
    features: [
      {
        name: "Stealth Disadvantage",
        description:
          "BreastPlate Armor imposes disadvantage on Stealth checks.",
        effect: {
          skillRollAdvantages: [
            {
              skill: {
                defaultSkills: [Skill.STEALTH],
              },
              always: true,
              situation:
                "BreastPlate Armor imposes advantage on Stealth checks.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 10,
    name: "Ring Mail",
    armorClass: 14,
    armorType: ArmorType.HEAVY,
    features: [
      {
        name: "Stealth Disadvantage",
        description: "Ring Mail Armor imposes disadvantage on Stealth checks.",
        effect: {
          skillRollAdvantages: [
            {
              skill: {
                defaultSkills: [Skill.STEALTH],
              },
              always: true,
              situation:
                "Scale Mail Armor imposes disadvantage on Stealth checks.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 11,
    name: "Chain Mail",
    armorClass: 16,
    armorType: ArmorType.HEAVY,
    features: [
      {
        name: "Stealth Disadvantage",
        description: "Chain Mail Armor imposes disadvantage on Stealth checks.",
        effect: {
          skillRollAdvantages: [
            {
              skill: {
                defaultSkills: [Skill.STEALTH],
              },
              always: true,
              situation:
                "Chain Mail Armor imposes disadvantage on Stealth checks.",
            },
          ],
        },
      },
      {
        name: "Chain Mail Strength Requirement",
        description:
          "Chain Mail requires a Strength of 13 to wear. Otherwise, you have a -10 penalty to your speed.",
        abilityScoreTriggers: {
          abilities: [Ability.STR],
          lessThan: 13,
        },
        effect: {
          speedBonus: -10,
        },
      },
    ],
  },
  {
    id: 12,
    name: "Splint Armor",
    armorClass: 17,
    armorType: ArmorType.HEAVY,
    features: [
      {
        name: "Stealth Disadvantage",
        description: "Splint Armor imposes disadvantage on Stealth checks.",
        effect: {
          skillRollAdvantages: [
            {
              skill: {
                defaultSkills: [Skill.STEALTH],
              },
              always: true,
              situation: "Splint Armor imposes disadvantage on Stealth checks.",
            },
          ],
        },
      },
      {
        name: "Splint Armor Strength Requirement",
        description:
          "Splint Armor requires a Strength of 15 to wear. Otherwise, you have a -10 penalty to your speed.",
        abilityScoreTriggers: {
          abilities: [Ability.STR],
          lessThan: 15,
        },
        effect: {
          speedBonus: -10,
        },
      },
    ],
  },
  {
    id: 13,
    name: "Plate Armor",
    armorClass: 18,
    armorType: ArmorType.HEAVY,
    features: [
      {
        name: "Stealth Disadvantage",
        description: "Splint Armor imposes disadvantage on Stealth checks.",
        effect: {
          skillRollAdvantages: [
            {
              skill: {
                defaultSkills: [Skill.STEALTH],
              },
              always: true,
              situation: "Splint Armor imposes disadvantage on Stealth checks.",
            },
          ],
        },
      },
      {
        name: "Plate Armor Strength Requirement",
        description:
          "Plate Armor requires a Strength of 15 to wear. Otherwise, you have a -10 penalty to your speed.",
        abilityScoreTriggers: {
          abilities: [Ability.STR],
          lessThan: 15,
        },
        effect: {
          speedBonus: -10,
        },
      },
    ],
  },
  {
    id: 14,
    name: "Shield",
    armorClass: 2,
    armorType: ArmorType.SHIELDS,
  },
];

const armorIds = {
  paddedArmor: 1,
  leatherArmor: 2,
  studdedLeatherArmor: 3,
  hideArmor: 4,
  chainShirt: 5,
  scaleMail: 6,
  spikedArmor: 7,
  breastplate: 8,
  halfPlate: 9,
  ringMail: 10,
  chainMail: 11,
  splintArmor: 12,
  plateArmor: 13,
  shield: 14,
};

export { ArmorSeed, armorIds };
