import {
  CasterType,
  Class,
  CustomField,
  Feature,
  Prisma,
  Spell,
  SubClass,
  SubClassFeature,
} from "@prisma/client";
import { StyledString } from "next/dist/build/swc";
import { Input } from "postcss";

export enum Pages {
  Class = "Class",
  SubClass = "SubClass",
  Race = "Race",
  SubRace = "SubRace",
  Background = "Background",
  Feat = "Feat",
  Spell = "Spell",
  Item = "Item",
}

export interface ClassInfo extends Class {
  Features: Feature[];
  SubClasses: SubClass[];
  casterType: CasterType | null;
  customFields: CustomField[];
  User: {
    username: string | null;
  } | null;
}

export interface SubClassInfo extends SubClass {
  SubClassFeatures: SubClassFeature[];
  casterType: CasterType | null;
  customFields: CustomField[];
  User: {
    username: string | null;
  } | null;
}

export interface SpellInfo extends Spell {
  User: {
    username: string | null;
  } | null;
}

export interface SubclassSearchResults extends SubClass {
  Class: {
    name: string | null;
  } | null;
}

declare global {
  namespace PrismaJson {
    // you can use classes, interfaces, types, etc.
    interface Table {
      [key: string]: TableData;
    }
    interface TableData {
      headers: string[];
      headersLength?: number[];
      data: { [key: string | number]: string }[];
    }
  }
}

export enum src {
  homebrew = "Homebrew",
  tasha = "Tasha's Cauldron of Everything",
  xanathar = "Xanathar's Guide to Everything",
  volo = "Volo's Guide to Monsters",
  sword = "Sword Coast Adventurer's Guide",
  Bigby = "Bigby Presents: The Glory of the Giants",
  mordenkainen = "Mordenkainen's Tome of Foes",
  eberron = "Eberron: Rising from the Last War",
  theros = "Theros",
  ravnica = "Guildmaster's Guide to Ravnica",
  wildemount = "Explorer's Guide to Wildemount",
  phb = "Player's Handbook",
  vanRichten = "Van Richten's Guide to Ravenloft",
  dmg = "Dungeon Master's Guide",
  fizban = "Fizban's Treasury of Dragons",
  dragonQueen = "Dragonlance: Shadow of the Dragon Queen",
}

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

// type where options are "level1" , "level2" all the way to level20
export type SpellLevels =
  | "level1"
  | "level2"
  | "level3"
  | "level4"
  | "level5"
  | "level6"
  | "level7"
  | "level8"
  | "level9";

export type Levels =
  | "level1"
  | "level2"
  | "level3"
  | "level4"
  | "level5"
  | "level6"
  | "level7"
  | "level8"
  | "level9"
  | "level10"
  | "level11"
  | "level12"
  | "level13"
  | "level14"
  | "level15"
  | "level16"
  | "level17"
  | "level18"
  | "level19"
  | "level20";

export enum AuthResult {
  InvalidCredentials = "Invalid Credentials",
  UserNotFound = "User Not Found",
  UserAlreadyExists = "User Already Exists",
  EmailAlreadyExists = "Email Already Exists",
  EmailNotValid = "Email Not Valid",
  PasswordsDoNotMatch = "Passwords Do Not Match",
  PasswordTooShort = "Password Too Short, Must Be At Least 8 Characters",
  TokenExpired = "Token Expired",
  Success = "Success",
  FailedToCreateUser = "Failed To Create User",
}
