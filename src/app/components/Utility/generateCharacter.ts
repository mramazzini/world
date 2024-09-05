import { Ability, AbilityScores, CharacterInfo } from "@/lib/types";
import { AbilityToModifier } from "./AbilityToModifier";
import "@/lib/string.extensions";
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
      { reason: "Base Armor for all Characters", effect: 10 },
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
      skills: [],
      skillExpertise: [],
      tools: [],
      weapons: [],
      armor: [],
      savingThrows: [],
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
    pendingChoices: [],
    spellSlots: classObj.spellCastingInfo?.spellLevels[1],
  };
  return state;
};
