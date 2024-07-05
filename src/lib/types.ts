import { Class, Feature, Prisma, SubClass } from "@prisma/client";

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
}
export interface SpellLevel {
  0?: number; //Cantrips
  1?: number;
  2?: number;
  3?: number;
  4?: number;
  5?: number;
  6?: number;
  7?: number;
  8?: number;
  9?: number;
}
