import {
  AbilityScores,
  AbilityScoreValue,
  CharacterInfo,
  SubClassID,
  Time,
  ToolID,
  WeaponID,
} from "@/lib/utils/types/types";
import { Ability } from "@prisma/client";
import { AbilityToModifier } from "../calc/AbilityToModifier";
import "@/lib/string.extensions";
import { bulkAddToInventory } from "../../ChoiceFunctions/Inventory";
import { ArmorType, Language, Skill } from "@prisma/client";
import { generateSubclassChoice } from "../calc/generateSubclassChoice";
import { updateAbilityScores } from "./updateAbilityScores";
import { v4 } from "uuid";
import { refreshAC } from "./updateAC";
import { refreshHp } from "./refreshHp";
import { refreshPassivePerception } from "./refreshPassivePerception";

const introMarkdown = `# Write your notes here
      
Write your notes here. Use markdown to format your notes.

Some examples of markdown formatting:
- **Bold Text**
- *Italic Text*
- [Link Text](https://www.markdownguide.org/basic-syntax/)
- # Header 1
- ## Header 2
- ### Header 3

### Table
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Row 1    | Row 1    |
| Row 2    | Row 2    | Row 2    |
| Row 3    | Row 3    | Row 3    |
`;

const bio = `> Bob is a cool adventurer.

> He likes Pizza and long walks on the beach.
     
> Also incredibly lazy.`;

const abilityScores: AbilityScores = {
  STR: 10,
  DEX: 10,
  CON: 10,
  INT: 10,
  WIS: 10,
  CHA: 10,
};

export const generateCharacter = async (
  char: CharacterInfo
): Promise<PrismaJson.CharacterState> => {
  if (!char.Classes || char.Classes.length == 0)
    throw new Error("Character has no classes");
  const classObj = char.Classes[0];
  if (!char.Race) throw new Error("Character has no Race");
  const species = char.Race;
  if (!char.Background) throw new Error("Character has no Background");
  const background = char.Background;
  if (!char.SubRace) console.warn("Character has no SubRace");
  const subSpecies = char.SubRace;
  const state: PrismaJson.CharacterState = {
    pendingLinks: {
      subClass: [],
      Class: [],
    },

    notes: [introMarkdown],
    ideals: [],
    bonds: [],
    flaws: [],
    biography: bio,
    personalityTraits: [],
    classLevels: [{ classId: classObj.id, level: 1 }],
    inspirationRolls: 0,
    armorClass: 10 + AbilityToModifier(abilityScores.DEX),
    armorClassReasons: [
      { reason: "Base AC for all Characters", effect: 10 },
      { reason: "Dex Modifier", effect: AbilityToModifier(abilityScores.DEX) },
    ],
    experience: 0,
    experienceLog: [],
    hp: {
      max: classObj.hitDie + AbilityToModifier(abilityScores.CON),
      maxReasons: [
        {
          reason: "Level 1 HP = Hitdie + Con Modifier",
          effect: classObj.hitDie + AbilityToModifier(abilityScores.CON),
        },
      ],
      current: classObj.hitDie + AbilityToModifier(abilityScores.CON),
      damageLog: [],
      temporary: 0,
      hitDieAvailable: {
        [classObj.hitDie as 4 | 6 | 8 | 10 | 12 | 20]: 1,
      },
    },
    preparedCantrips: [],
    alwaysPreparedSpells: [],
    preparedSpells: [],
    userSubmittedSpells: [],
    abilityScores: abilityScores,
    abilityScoreReasons: {},
    inventory: [],
    speed: {
      base: species.speed,
      bonuses: [
        {
          reason: `${species.name}: ${species.speedDescription}`,
          effect: species.speed,
        },
      ],
      running: species.speed * 2,
      runningReasons: [
        { reason: "Walking speed x 2", effect: species.speed * 2 },
      ],
      flying: species.flightSpeed || 0,
      swimming: species.swimSpeed || Math.floor((species.speed * 2) / 3),
      climbing: species.climbSpeed || Math.floor((species.speed * 2) / 3),
      flyingReasons: [
        species.flightSpeed
          ? { reason: "Flight Speed", effect: species.flightSpeed }
          : { reason: "Default Flight Speed", effect: 0 },
      ],
      swimmingReasons: [
        species.swimSpeed
          ? { reason: "Swim Speed", effect: species.swimSpeed }
          : {
              reason: "Walking speed * 2 / 3",
              effect: Math.floor((species.speed * 2) / 3),
            },
      ],
      climbingReasons: [
        species.climbSpeed
          ? { reason: "Climb Speed", effect: species.climbSpeed }
          : {
              reason: "Walking speed * 2 / 3",
              effect: Math.floor((species.speed * 2) / 3),
            },
      ],
    },
    initiative: AbilityToModifier(abilityScores.DEX),
    initiativeReasons: [
      { reason: "Dex Modifier", effect: AbilityToModifier(abilityScores.DEX) },
    ],
    proficiencies: {
      languages: [],
      languageReasons: [],
      skills: [],
      skillReasons: [],
      skillExpertise: [],
      skillExpertiseReasons: [],
      tools: [],
      toolReasons: [],
      weapons: [],
      weaponReasons: [],
      armor: [],
      armorReasons: [],
      savingThrows: [],
      savingThrowsReasons: [],
    },
    customResources: [
      {
        name: "Hit Dice",
        max: 1,
        current: 1,
        description:
          "Hit Dice are used to regain health during a short rest. Your max increases by 1 per level. When you short rest, consume as many hitdie as you want, and roll their value. You heal that amount.",
        resetType: { quantity: 1, unit: Time.longRest },
      },
    ],
    passivePerception: 10 + AbilityToModifier(abilityScores.WIS),
    passivePerceptionReasons: [
      { reason: "Base Passive Perception", effect: 10 },
      { reason: "Wis Modifier", effect: AbilityToModifier(abilityScores.WIS) },
    ],
    features: [
      ...classObj.features.map((f) => ({
        feature: f,
        source: classObj.name.toCapitalCase(),
      })),
      ...(classObj.spellCastingInfo?.features.map((f) => ({
        feature: f,
        source: classObj.name.toCapitalCase(),
      })) || []),
      ...background.features.map((f) => ({
        feature: f,
        source: background.name,
      })),
      ...species.features.map((f) => ({ feature: f, source: species.name })),
      ...(subSpecies?.features.map((f) => ({
        feature: f,
        source: subSpecies.name,
      })) || []),
    ],
    equipped: {
      hands: {
        numberOfHands: 2,
        numberOfHandsReasons: [{ reason: "Default Hands", effect: 2 }],
      },
    },
    deathSaves: {
      successes: 0,
      failures: 0,
    },
    exhaustion: 0,
    exhaustionReasons: [],
    conditions: [],
    conditionsReasons: [],
    spellSlots: classObj.spellCastingInfo?.spellLevels[1],
    carryingCapacity: abilityScores.STR * 15,
    carryingCapacityReasons: [
      {
        reason: "Strength Modifier * 15",
        effect: abilityScores.STR * 15,
      },
    ],
    pendingChoices: [],
  };

  //This does not get calculated traditionally, the AbilityScoreValue[] is generated from the user's choice entirely.
  state.pendingChoices.push({
    id: v4(),
    choice: {
      default: [],
      choices: [],
    },
    model: "CharacterAbilityScoreSelection" as PrismaJson.ChoiceModel,
    from: "Character",
    description: "Choose your character's Ability Scores",
    callback: async (s, c) => {
      const scores = c as AbilityScoreValue[];
      const abilityScoresFromChoice: AbilityScores = {
        STR: scores.find((a) => a.ability === "STR")?.value || 10,
        DEX: scores.find((a) => a.ability === "DEX")?.value || 10,
        CON: scores.find((a) => a.ability === "CON")?.value || 10,
        INT: scores.find((a) => a.ability === "INT")?.value || 10,
        WIS: scores.find((a) => a.ability === "WIS")?.value || 10,
        CHA: scores.find((a) => a.ability === "CHA")?.value || 10,
      };
      const res = await updateAbilityScores(char, s, abilityScoresFromChoice);

      if (subSpecies?.abilityScores) {
        return {
          ...res,
          pendingChoices: [
            ...res.pendingChoices,
            {
              id: v4(),
              choice: subSpecies.abilityScores,
              model: "AbilityScore" as PrismaJson.ChoiceModel,
              from: subSpecies.name,
              description: "Choose your character's ability score bonuses.",
              callback: async (s, c) => {
                const bonuses = c as AbilityScoreValue[];
                const newState = { ...s };
                for (const bonus of bonuses) {
                  newState.abilityScores[bonus.ability] += bonus.value;
                  newState.abilityScoreReasons[bonus.ability] = [
                    ...(newState.abilityScoreReasons[bonus.ability] || []),
                    {
                      reason: subSpecies.name,
                      effect: `+ ${bonus.value}`,
                    },
                  ];
                }
                const refreshedAC = await refreshAC(newState);
                const refreshedHp = await refreshHp(char, refreshedAC);
                const refreshedPP = await refreshPassivePerception(refreshedHp);

                return {
                  ...refreshedPP,
                  abilityScores: {
                    ...refreshedPP.abilityScores,
                  },
                  abilityScoreReasons: {
                    ...refreshedPP.abilityScoreReasons,
                  },
                };
              },
            } as PrismaJson.Choice,
          ],
        };
      }
      const base = {
        ...res,
        pendingChoices: [
          ...res.pendingChoices,
          {
            id: v4(),
            choice: species.abilityScores,
            model: "AbilityScore" as PrismaJson.ChoiceModel,
            from: species.name,
            description: "Choose your character's ability score bonuses.",
            callback: async (s, c) => {
              const bonuses = c as AbilityScoreValue[];
              const newState = { ...s };
              for (const bonus of bonuses) {
                newState.abilityScores[bonus.ability] += bonus.value;
                newState.abilityScoreReasons[bonus.ability] = [
                  ...(newState.abilityScoreReasons[bonus.ability] || []),
                  {
                    reason: species.name,
                    effect: `+ ${bonus.value}`,
                  },
                ];
              }
              const refreshedAC = await refreshAC(newState);
              const refreshedHp = await refreshHp(char, refreshedAC);
              const refreshedPP = await refreshPassivePerception(refreshedHp);

              return {
                ...refreshedPP,
                abilityScores: {
                  ...refreshedPP.abilityScores,
                },
                abilityScoreReasons: {
                  ...refreshedPP.abilityScoreReasons,
                },
              };
            },
          } as PrismaJson.Choice,
        ],
      };
      const refreshedAC = await refreshAC(base);
      const refreshedHp = await refreshHp(char, refreshedAC);
      const refreshedPP = await refreshPassivePerception(refreshedHp);
      return { ...refreshedPP };
    },
  });

  //conditionally add class choices
  if (classObj.equipment) {
    state.pendingChoices.push({
      id: v4(),
      choice: classObj.equipment,
      model: "Item" as PrismaJson.ChoiceModel,
      from: classObj.name.toCapitalCase(),
      description: "Choose your starting equipment.",
      callback: (s, c) => {
        const items = c as PrismaJson.QuantityItem[][];
        return bulkAddToInventory(s, items);
      },
    });
  }
  if (classObj.skills) {
    state.pendingChoices.push({
      id: v4(),
      choice: classObj.skills,
      model: "Skill" as PrismaJson.ChoiceModel,
      from: classObj.name.toCapitalCase(),
      description: "Choose your character's skill proficiencies.",
      callback: (s, c) => {
        const skills = c as Skill[];
        return {
          ...s,
          proficiencies: {
            ...s.proficiencies,
            skills: skills,
            skillReasons: skills.map((skill) => ({
              reason: "Class Skills",
              effect: "Proficient",
            })),
          },
        };
      },
    });
  }
  if (classObj.armor) {
    state.pendingChoices.push({
      id: v4(),
      choice: classObj.armor,
      model: "Armor" as PrismaJson.ChoiceModel,
      from: classObj.name.toCapitalCase(),
      description: "Choose your character's armor proficiencies.",
      callback: (s, c) => {
        const armor = c as ArmorType[];
        return {
          ...s,
          proficiencies: {
            ...s.proficiencies,
            armor: armor,
            armorReasons: armor.map((a) => ({
              reason: "Class Armor Proficiency",
              effect: "Proficient",
            })),
          },
        };
      },
    });
  }
  if (classObj.tools) {
    state.pendingChoices.push({
      id: v4(),
      choice: classObj.tools,
      model: "Tool" as PrismaJson.ChoiceModel,
      from: classObj.name.toCapitalCase(),
      description: "Choose your character's tool proficiencies.",
      callback: (s, c) => {
        const tools = c as ToolID[];
        return {
          ...s,
          proficiencies: {
            ...s.proficiencies,
            tools: tools,
            toolReasons: tools.map((tool) => ({
              reason: "Class Tool Proficiency",
              effect: "Proficient",
            })),
          },
        };
      },
    });
  }
  if (classObj.weapons) {
    state.pendingChoices.push({
      id: v4(),
      choice: classObj.weapons,
      model: "Weapon" as PrismaJson.ChoiceModel,
      from: classObj.name.toCapitalCase(),
      description: "Choose your character's weapon proficiencies.",
      callback: (s, c) => {
        const weapons = c as WeaponID[];
        return {
          ...s,
          proficiencies: {
            ...s.proficiencies,
            weapons: weapons,
            weaponReasons: weapons.map((weapon) => ({
              reason: "Class Weapon Proficiency",
              effect: "Proficient",
            })),
          },
        };
      },
    });
  }
  if (classObj.savingThrows) {
    state.pendingChoices.push({
      id: v4(),
      choice: classObj.savingThrows,
      model: "Ability" as PrismaJson.ChoiceModel,
      from: classObj.name.toCapitalCase(),
      description: "Choose your character's saving throw proficiencies.",
      callback: (s, c) => {
        const savingThrows = c as Ability[];
        return {
          ...s,
          proficiencies: {
            ...s.proficiencies,
            savingThrows: savingThrows,
            savingThrowsReasons: savingThrows.map((ability) => ({
              reason: "Class Saving Throw Proficiency",
              effect: "Proficient",
            })),
          },
        };
      },
    });
  }
  //conditionally add background choices
  if (background.equipment) {
    state.pendingChoices.push({
      id: v4(),
      choice: background.equipment,
      model: "Item" as PrismaJson.ChoiceModel,
      from: background.name,
      description: "Choose your starting equipment.",
      callback: (s, c) => {
        const items = c as PrismaJson.QuantityItem[][];
        return bulkAddToInventory(s, items);
      },
    });
  }
  if (background.skillProficiencies) {
    state.pendingChoices.push({
      id: v4(),
      choice: background.skillProficiencies,
      model: "Skill" as PrismaJson.ChoiceModel,
      from: background.name,
      description: "Choose your character's skill proficiencies.",
      callback: (s, c) => {
        const skills = c as Skill[];
        return {
          ...s,
          proficiencies: {
            ...s.proficiencies,
            skills: skills,
            skillReasons: skills.map((skill) => ({
              reason: "Background Skills",
              effect: "Proficient",
            })),
          },
        };
      },
    });
  }
  if (background.toolProficiencies) {
    state.pendingChoices.push({
      id: v4(),
      choice: background.toolProficiencies,
      model: "Tool" as PrismaJson.ChoiceModel,
      from: background.name,
      description: "Choose your character's tool proficiencies.",
      callback: (s, c) => {
        const tools = c as ToolID[];
        return {
          ...s,
          proficiencies: {
            ...s.proficiencies,
            tools: tools,
            toolReasons: tools.map((tool) => ({
              reason: "Background Tool Proficiency",
              effect: "Proficient",
            })),
          },
        };
      },
    });
  }

  if (background.languageProficiencies) {
    state.pendingChoices.push({
      id: v4(),
      choice: background.languageProficiencies,
      model: "Language" as PrismaJson.ChoiceModel,
      from: background.name,
      description: "Choose your character's language proficiencies.",
      callback: (s, c) => {
        const languages = c as Language[];
        return {
          ...s,
          proficiencies: {
            ...s.proficiencies,
            languages: languages,
            languageReasons: languages.map((language) => ({
              reason: "Background Language Proficiency",
              effect: "Proficient",
            })),
          },
        };
      },
    });
  }
  // abilityscore bonuses

  //skill choice
  if (subSpecies?.skillProficiencies) {
    state.pendingChoices.push({
      id: v4(),
      choice: subSpecies.skillProficiencies,
      model: "Skill" as PrismaJson.ChoiceModel,
      from: subSpecies.name,
      description: "Choose your character's skill proficiencies.",
      callback: (s, c) => {
        const skills = c as Skill[];
        return {
          ...s,
          proficiencies: {
            ...s.proficiencies,
            skills: skills,
            skillReasons: skills.map((skill) => ({
              reason: subSpecies.name,
              effect: "Proficient",
            })),
          },
        };
      },
    });
  } else if (species.skillProficiencies) {
    state.pendingChoices.push({
      id: v4(),
      choice: species.skillProficiencies,
      model: "Skill" as PrismaJson.ChoiceModel,
      from: species.name,
      description: "Choose your character's skill proficiencies.",
      callback: (s, c) => {
        const skills = c as Skill[];
        return {
          ...s,
          proficiencies: {
            ...s.proficiencies,
            skills: skills,
            skillReasons: skills.map((skill) => ({
              reason: species.name,
              effect: "Proficient",
            })),
          },
        };
      },
    });
  }
  //tool

  if (subSpecies?.toolProficiencies) {
    state.pendingChoices.push({
      id: v4(),
      choice: subSpecies.toolProficiencies,
      model: "Tool" as PrismaJson.ChoiceModel,
      from: subSpecies.name,
      description: "Choose your character's tool proficiencies.",
      callback: (s, c) => {
        const tools = c as ToolID[];
        return {
          ...s,
          proficiencies: {
            ...s.proficiencies,
            tools: tools,
            toolReasons: tools.map((tool) => ({
              reason: subSpecies.name,
              effect: "Proficient",
            })),
          },
        };
      },
    });
  } else if (species.toolProficiencies) {
    state.pendingChoices.push({
      id: v4(),
      choice: species.toolProficiencies,
      model: "Tool" as PrismaJson.ChoiceModel,
      from: species.name,
      description: "Choose your character's tool proficiencies.",
      callback: (s, c) => {
        const tools = c as ToolID[];
        return {
          ...s,
          proficiencies: {
            ...s.proficiencies,
            tools: tools,
            toolReasons: tools.map((tool) => ({
              reason: species.name,
              effect: "Proficient",
            })),
          },
        };
      },
    });
  }
  //languages
  if (subSpecies?.originLanguages) {
    state.pendingChoices.push({
      id: v4(),
      choice: subSpecies.originLanguages,
      model: "Language" as PrismaJson.ChoiceModel,
      from: subSpecies.name,
      description: "Choose your character's language proficiencies.",
      callback: (s, c) => {
        const languages = c as Language[];
        return {
          ...s,
          proficiencies: {
            ...s.proficiencies,
            languages: languages,
            languageReasons: languages.map((language) => ({
              reason: subSpecies.name,
              effect: "Proficient",
            })),
          },
        };
      },
    });
  } else if (species.originLanguages) {
    state.pendingChoices.push({
      id: v4(),
      choice: species.originLanguages,
      model: "Language" as PrismaJson.ChoiceModel,
      from: species.name,
      description: "Choose your character's language proficiencies.",
      callback: (s, c) => {
        const languages = c as Language[];
        return {
          ...s,
          proficiencies: {
            ...s.proficiencies,
            languages: languages,
            languageReasons: languages.map((language) => ({
              reason: species.name,
              effect: "Proficient",
            })),
          },
        };
      },
    });
  }

  if (subSpecies?.weaponProficiencies) {
    state.pendingChoices.push({
      id: v4(),
      choice: subSpecies.weaponProficiencies,
      model: "Weapon" as PrismaJson.ChoiceModel,
      from: subSpecies.name,
      description: "Choose your character's weapon proficiencies.",
      callback: (s, c) => {
        const weapons = c as WeaponID[];
        return {
          ...s,
          proficiencies: {
            ...s.proficiencies,
            weapons: weapons,
            weaponReasons: weapons.map((weapon) => ({
              reason: subSpecies.name,
              effect: "Proficient",
            })),
          },
        };
      },
    });
  } else if (species.weaponProficiencies) {
    state.pendingChoices.push({
      id: v4(),
      choice: species.weaponProficiencies,
      model: "Weapon" as PrismaJson.ChoiceModel,
      from: species.name,
      description: "Choose your character's weapon proficiencies.",
      callback: (s, c) => {
        const weapons = c as WeaponID[];
        return {
          ...s,
          proficiencies: {
            ...s.proficiencies,
            weapons: weapons,
            weaponReasons: weapons.map((weapon) => ({
              reason: species.name,
              effect: "Proficient",
            })),
          },
        };
      },
    });
  }

  // choose subclass
  if (classObj.subClassFeatureLevels.includes(1)) {
    state.pendingChoices.push({
      id: v4(),
      choice: await generateSubclassChoice(classObj.id),
      model: "Subclass" as PrismaJson.ChoiceModel,
      from: `${classObj.subClassName}`,
      description: `Choose your ${classObj.name.toCapitalCase()} subclass (${
        classObj.subClassName
      }).`,
      callback: (s, c) => {
        const subClass = c as SubClassID[];
        return {
          ...s,
          pendingLinks: {
            ...s.pendingLinks,
            subClass: [...s.pendingLinks.subClass, ...subClass],
          },
        };
      },
    });
  }

  return state;
};
