import {
  CasterType,
  Class,
  CustomField,
  Feature,
  Prisma,
  SubClass,
} from "@prisma/client";

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

export interface DBInfo {
  id: number;
  name: string;
}

export interface ClassInfo extends Class {
  Features: Feature[];
  SubClasses: SubClass[];
  casterType: CasterType | null;
  customFields: CustomField[];
}

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
