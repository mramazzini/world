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
