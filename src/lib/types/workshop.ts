import { ItemTypes, Rarity } from '@prisma/client';
import { ArmorID, ClassID, ToolID, WeaponID } from './types';

export type WorkshopItemEditorData =
  | ClassEditorData
  | SubclassEditorData
  | FeatureEditorData
  | SpellEditorData
  | ItemEditorData
  | CreatureEditorData
  | BackgroundEditorData
  | SpeciesEditorData
  | SubSpeciesEditorData
  | FeatEditorData;
export interface ClassEditorData {}
export interface SubclassEditorData {
  flavorText: string;
  description: string;
  classData: {
    id: ClassID;
    name: string;
    subClassLevels: number[];
  } | null;
}
export interface FeatureEditorData {
  description: string;
  options?: string[];
  extendedTable: PrismaJson.Table[];
  postTableData: string;
  levels: number[];
  rolls: PrismaJson.RollRequest[];
}
export interface SpellEditorData {}
export interface ItemEditorData {
  flavorText: string;
  description: string;
  requiresAttunement: boolean;
  rarity: Rarity;
  cost: PrismaJson.CurrencyAmount;
  types: ItemTypes[];

  weaponData: {
    silvered: boolean;
    magical: boolean;
    weaponId?: WeaponID;
    weaponName?: string;
  };

  toolData: {
    toolId?: ToolID;
    toolName?: string;
  };

  armorData: {
    armorId?: ArmorID;
    armorName?: string;
  };
}
export interface CreatureEditorData {}
export interface BackgroundEditorData {}
export interface SpeciesEditorData {}
export interface SubSpeciesEditorData {}
export interface FeatEditorData {
  flavorText: string;
  description: string;
  prerequisites?: PrismaJson.Prerequisite;
  prereqDescription: string;
}
//  id   Int    @id @default(autoincrement())
//   name String

//   Features          Feature[]
//   flavorText        String    @db.VarChar(200)
//   source            String
//   /// [Prerequisite]
//   prerequisites     Json?
//   prereqDescription String

//   createdAt  DateTime    @default(now())
//   updatedAt  DateTime    @updatedAt
//   User       User?       @relation(fields: [userId], references: [id])
//   userId     Int?
//   Characters Character[]
