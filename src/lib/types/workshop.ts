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
export interface SubclassEditorData {}
export interface FeatureEditorData {
  description: string;
  options?: string[];
  extendedTable: PrismaJson.Table[];
  postTableData: string;
  levels: number[];
  rolls: PrismaJson.RollRequest[];
}
export interface SpellEditorData {}
export interface ItemEditorData {}
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
