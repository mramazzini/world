import { Language, Skill } from "@prisma/client";
import { src } from "./types";

export const QUERY_LIMIT = 20;
export const NAVBAR_HEIGHT_REM = 4;

export const officialSources: string[] = [
  src.tasha,
  src.xanathar,
  src.volo,
  src.sword,
  src.Bigby,
  src.mordenkainen,
  src.eberron,
  src.theros,
  src.ravnica,
  src.wildemount,
  src.phb,
  src.vanRichten,
  src.dmg,
];

export const DISCORD_INVITE = "https://discord.gg/gNmJU7ZZqs";

export const skills: Skill[] = [
  Skill.ACROBATICS,
  Skill.ANIMAL_HANDLING,
  Skill.ARCANA,
  Skill.ATHLETICS,
  Skill.DECEPTION,
  Skill.HISTORY,
  Skill.INSIGHT,
  Skill.INTIMIDATION,
  Skill.INVESTIGATION,
  Skill.MEDICINE,
  Skill.NATURE,
  Skill.PERCEPTION,
  Skill.PERFORMANCE,
  Skill.PERSUASION,
  Skill.RELIGION,
  Skill.SLEIGHT_OF_HAND,
  Skill.STEALTH,
  Skill.SURVIVAL,
];

export const languages = [
  Language.ABYSSAL,
  Language.CELESTIAL,
  Language.DEEP_SPEECH,

  Language.DRACONIC,
  Language.INFERNAL,
  Language.PRIMORDIAL,
  Language.SYLVAN,
  Language.UNDERCOMMON,
  Language.COMMON,
  Language.DWARVISH,
  Language.ELVISH,
  Language.GIANT,
  Language.GNOMISH,
  Language.GOBLIN,
  Language.HALFLING,
  Language.ORC,
];
