import { Language, Skill } from "@prisma/client";
import { src } from "./types";

export const QUERY_LIMIT = 20;
export const NAVBAR_HEIGHT_REM = 4;

export const officialSources: string[] = Object.values(src).filter(
  (s) => s !== src.homebrew
);

export const DISCORD_INVITE = "https://discord.gg/gNmJU7ZZqs";

export const skills: Skill[] = Object.values(Skill);

export const languages = Object.values(Language);
