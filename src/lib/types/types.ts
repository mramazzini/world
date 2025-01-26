import {
  Spell,
  SubClass,
  CreatureLimitedSpell,
  CustomResource,
  RefreshEvent,
} from '@prisma/client';
import { FeatureInfo } from './modelInfo';

export enum Pages {
  Class = 'Class',
  SubClass = 'SubClass',
  Species = 'Species',
  SubSpecies = 'SubSpecies',
  Background = 'Background',
  Feat = 'Feat',
  Spell = 'Spell',
  Item = 'Item',
}
export interface WeaponAttack {
  name: string;
  description: string;
  attackDiceFormula: string;
  damageDiceFormula: string;
}
export interface Badge {
  text: string;
  color: 'badge-primary' | 'badge-secondary' | 'badge-accent' | 'badge-neutral';
}

export interface CreatureLimitedSpellWithSpell extends CreatureLimitedSpell {
  Spell: Spell;
}

export enum ASIorFeat {
  ASI = 'ASI',
  Feat = 'Feat',
}

export type ClassID = string;
export type SubClassID = string;
export type SpeciesID = string;
export type SubSpeciesID = string;
export type BackgroundID = string;
export type FeatID = string;
export enum Unit {
  lb = 'lb',
  oz = 'oz',
  pint = 'pint',
  quart = 'quart',
  gal = 'gal',
  hour = 'hour',
  day = 'day',
  week = 'week',
  month = 'month',
  year = 'year',
  minute = 'minute',
  second = 'second',
  cp = 'cp',
  sp = 'sp',
  ep = 'ep',
  gp = 'gp',
  pp = 'pp',
}
export enum Distance {
  ft = 'ft',
  mi = 'mi',
  m = 'm',
  km = 'km',
  inch = 'inch',
  mile = 'mile',
}
export enum Time {
  hour = 'hour',
  day = 'day',
  week = 'week',
  month = 'month',
  year = 'year',
  minute = 'minute',
  second = 'second',
  longRest = 'long rest',
  shortRest = 'short rest',
  rest = 'short or long rest',
}
export interface SubclassSearchResults extends SubClass {
  Class: {
    name: string | null;
  } | null;
}
export enum Currency {
  cp = 'cp',
  sp = 'sp',
  ep = 'ep',
  gp = 'gp',
  pp = 'pp',
}
export type Level =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;
export type SpellLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export enum WeaponPropertyNames {
  Ammunition = 'Ammunition',
  Finesse = 'Finesse',
  Heavy = 'Heavy',
  Light = 'Light',
  Loading = 'Loading',
  Range = 'Range',
  Reach = 'Reach',
  Special = 'Special',
  Thrown = 'Thrown',
  TwoHanded = 'Two-Handed',
  Versatile = 'Versatile',
}

export type ArmorID = string;
export type WeaponID = string;
export type ItemID = string;
export type ToolID = string;
export type SpellID = string;

export type MarkdownItem = string;

export interface Roll {
  rolls: {
    diceType: number;
    rolled: number;
  }[];
  plus: number;
  total: number;
}

export interface Log {
  logType: 'roll' | 'info' | 'spell';
  roll?: Roll;
  info?: string;
  from?: string;
  spellLevel?: number;
}

export interface AbilityScores {
  STR: number;
  DEX: number;
  CON: number;
  INT: number;
  WIS: number;
  CHA: number;
}
export enum src {
  hillsfar = 'State of Hillsfar',
  mulmaster = 'Mulmaster Bonds and Backgrounds',
  awMD = 'Adventures with Muk: Dankwood',
  kaladesh = 'Plane Shift: Kaladesh',
  ixalan = 'Plane Shift: Ixalan',
  grung = 'One Grung Above',
  planescape = 'Planescape - Adventures in the Multiverse',
  zendikar = 'Plane Shift: Zendikar',
  amonkhet = 'Plane Shift: Amonkhet',
  homebrew = 'Homebrew',
  tasha = "Tasha's Cauldron of Everything",
  xanathar = "Xanathar's Guide to Everything",
  volo = "Volo's Guide to Monsters",
  sword = "Sword Coast Adventurer's Guide",
  Bigby = 'Bigby Presents: The Glory of the Giants',
  mordenkainenFoes = "Mordenkainen's Tome of Foes",
  mordenkainenMonsters = 'Mordenkainen Presents: Monsters of the Multiverse',
  eberron = 'Eberron: Rising from the Last War',
  theros = 'Mythic Odysseys of Theros',
  ravnica = "Guildmaster's Guide to Ravnica",
  wildemount = "Explorer's Guide to Wildemount",
  phb = "Player's Handbook",
  dmg = "Dungeon Master's Guide",
  fizban = "Fizban's Treasury of Dragons",
  dragonQueen = 'Dragonlance: Shadow of the Dragon Queen',
  tomb = 'Tomb of Annihilation',
  descent = 'Descent into Avernus',
  witchlight = 'The Wild Beyond the Witchlight',
  eepc = "Elemental Evil Player's Companion",
  locathah = 'Locathah Rising',
  strixhaven = 'Strixhaven: A Curriculum of Chaos',
  tortle = 'The Tortle Package',
  aquisitions = 'Acquisitions Incorporated',
  saltmarsh = 'Ghosts of Saltmarsh',
  strahd = 'Curse of Strahd',
  ravenloft = "Van Richten's Guide to Ravenloft",
  manyThings = 'Book of Many Things',
}

export enum AuthResult {
  InvalidCredentials = 'Invalid Credentials',
  UserNotFound = 'User Not Found',
  UserAlreadyExists = 'User Already Exists',
  EmailAlreadyExists = 'Email Already Exists',
  EmailNotValid = 'Email Not Valid',
  PasswordsDoNotMatch = 'Passwords Do Not Match',
  PasswordTooShort = 'Password Too Short, Must Be At Least 8 Characters',
  TokenExpired = 'Token Expired',
  Success = 'Success',
  FailedToCreateUser = 'Failed To Create User, Please Try Again',
}

export interface QueryOptions {
  index: number;
  query: string;
  searchFields: SearchFieldOption[];
}

export interface SearchFieldOptions {
  key: string | number;
  data: string[] | number[];
  enum: boolean;
  numeric: boolean;
}

export interface QueryParams {
  page: number;
  query: string;
  searchFields: SearchFieldOption[];
  relationalFields: RelationFieldOptions[];
}

export interface SearchFieldOption {
  key: string | number;
  data: string | number;
  enum: boolean;
}

export interface RelationFieldOptions {
  model: string;
  key: string;
  data: string;
}

export interface CombinedData {
  name: string;
  description: string;
  flavorText: string;
  type: string;
  other: string | null;
  lastUpdated: Date;
  slug: string;
}

export interface QuantityDistance {
  quantity: number;
  unit: Distance;
}

export type SidebarDisplayData = Array<{
  name: string;
  description?: string;
  id: string;
  slug?: string;
}>;

export interface CharacterFeatures {
  classes: {
    id: string;
    features: FeatureInfo[];
    name: string;
  }[];
  species: {
    id: string;
    features: FeatureInfo[];
    name: string;
  };
  background: {
    id: string;
    features: FeatureInfo[];
    name: string;
  };
  subclasses: {
    id: string;
    features: FeatureInfo[];
    name: string;
    classId: string;
  }[];
  subSpecies: {
    id: string;
    features: FeatureInfo[];
    name: string;
  };
}

export interface ResourceData {
  resource: CustomResource;
  max: number;
  current: number;
  refreshOn: RefreshEvent;
}
