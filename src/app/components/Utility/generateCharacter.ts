import {
  Ability,
  AbilityScores,
  ArmorID,
  CharacterInfo,
  ToolID,
  WeaponID,
} from "@/lib/types";
import { AbilityToModifier } from "./AbilityToModifier";
import "@/lib/string.extensions";
import {
  addToInventory,
  bulkAddToInventory,
} from "./ChoiceFunctions/Inventory";
import { ArmorType, Skill } from "@prisma/client";
export const generateCharacter = (
  char: CharacterInfo,
  abilityScores: AbilityScores
): PrismaJson.CharacterState => {
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
    abilityScores: abilityScores,
    abilityScoreReasons: {
      STR: [{ reason: "Base Ability Score", effect: abilityScores.STR }],
      DEX: [{ reason: "Base Ability Score", effect: abilityScores.DEX }],
      CON: [{ reason: "Base Ability Score", effect: abilityScores.CON }],
      INT: [{ reason: "Base Ability Score", effect: abilityScores.INT }],
      WIS: [{ reason: "Base Ability Score", effect: abilityScores.WIS }],
      CHA: [{ reason: "Base Ability Score", effect: abilityScores.CHA }],
    },
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
    pendingChoices: [
      // class
      {
        choice: classObj.equipment,
        model: "Item" as PrismaJson.ChoiceModel,
        from: classObj.name.toCapitalCase(),
        description: "Choose your starting equipment.",
        callback: (s, c) => {
          const items = c as PrismaJson.QuantityItem[][];
          return bulkAddToInventory(s, items);
        },
      },
      {
        choice: classObj.skills,
        model: "Skill" as PrismaJson.ChoiceModel,
        from: classObj.name.toCapitalCase(),
        description: "Choose your character's skill proficiencies.",
        callback: (s, c) => {
          const skills = c as Skill[];
          console.log("skills", skills);
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
    ],
  };
  return state;
};
