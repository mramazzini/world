import {
  Armor,
  Background,
  Character,
  CharacterToClass,
  Choice,
  Class,
  ColumnedFeature,
  Comment,
  Creature,
  EquipmentPack,
  Feat,
  Feature,
  Item,
  ItemWeaponData,
  Message,
  Species,
  Spell,
  SpellList,
  SubClass,
  SubClassColumnedFeature,
  SubSpecies,
  Tool,
  Weapon,
  WeaponProperty,
  WeaponPropertyInstance,
} from '@prisma/client';
import { CreatureLimitedSpellWithSpell } from './types';

export interface MessageInfo extends Message {
  User: {
    id: string;
    email: string | null;
    username: string | null;
  } | null;
}

export interface SpeciesInfo extends Species {
  User: {
    username: string | null;
  } | null;
  Features: FeatureNoDate[];
  Variants: SubSpecies[];
}

interface SpeciesWithFeaturesAndChoices extends Species {
  Choices: Choice[];
  Features: FeatureNoDate[];
}
export interface SubSpeciesInfo extends SubSpecies {
  species: SpeciesWithFeaturesAndChoices;
  Features: FeatureNoDate[];
  User: {
    username: string | null;
  } | null;
}

export interface ItemWeaponDataInfo extends ItemWeaponData {
  Weapon: WeaponInfo;
}

export interface ItemInfo extends Item {
  User: {
    username: string | null;
  } | null;
  ItemWeaponData: ItemWeaponDataInfo | null;
  Armor: ArmorInfo | null;
  Features: FeatureNoDate[];
  Tool: ToolInfo | null;
  AmmunitionFor: Weapon[] | null;
  EquipmentPack: EquipmentPack | null;
  Spell: Spell | null;
}

export interface WeaponPropertyInstanceInfo extends WeaponPropertyInstance {
  Property: WeaponProperty;
}
export interface WeaponInfo extends Weapon {
  SpecialProperties: FeatureNoDate[];
  ammunition: Item | null;
  WeaponPropertyInstance: WeaponPropertyInstanceInfo[];
}
export interface CommentInfo extends Comment {
  User: {
    id: string;
    username: string | null;
  } | null;
  replies: Comment[];
}

export interface ClassInfo extends Class {
  SubClasses: SubClass[];
  SpellcastingFeatures: FeatureWithClassColumn[];
  SpellList: SpellList | null;
  Choices: Choice[];
  Features: FeatureWithClassColumn[];
  User: {
    username: string | null;
  } | null;
}
export interface FeatureWithClassColumn extends Feature {
  columnedFeatures: ColumnedFeature[];
}

export interface FeatInfo extends Feat {
  Features: FeatureNoDate[];
  User: {
    username: string | null;
  } | null;
}

export interface CharacterInfo extends Omit<Character, 'createdAt'> {
  User: {
    id: string;
    username: string | null;
  } | null;
  Background: Omit<
    BackgroundWithFeaturesAndChoices,
    'createdAt' | 'updatedAt'
  > | null;
  CharacterToClass: CharacterToClassInfo[];
  SubClasses: Omit<SubClassWithFeatures, 'createdAt' | 'updatedAt'>[] | null;
  Feats: Omit<FeatWithFeatures, 'createdAt' | 'updatedAt'>[] | null;
  Species: Omit<
    SpeciesWithFeaturesAndChoices,
    'createdAt' | 'updatedAt'
  > | null;
  SubSpecies: Omit<
    SubSpeciesWithFeaturesAndChoices,
    'createdAt' | 'updatedAt'
  > | null;

  // Inventory: any;
}
export interface BackgroundWithFeaturesAndChoices extends Background {
  Features: FeatureNoDate[];
  Choices: Choice[];
}
export interface ClassWithFeatures extends Class {
  Features: FeatureNoDate[];
  SpellcastingFeatures: FeatureNoDate[];
}
export interface SubClassWithFeatures extends SubClass {
  Features: FeatureNoDate[];
}
export interface FeatWithFeatures extends Feat {
  Features: FeatureNoDate[];
}
export interface ItemWithFeatures extends Item {
  Features: FeatureNoDate[];
}
export interface SubSpeciesWithFeaturesAndChoices extends SubSpecies {
  Features: FeatureNoDate[];
  Choices: Choice[];
}

interface ClassWithSpellListAndFeaturesAndChoices extends Class {
  SpellList: SpellListInfo | null;
  Features: FeatureNoDate[];
  Choices: Choice[];
  SpellcastingFeatures: FeatureNoDate[];
}

interface CharacterToClassInfo extends CharacterToClass {
  Class: Omit<
    ClassWithSpellListAndFeaturesAndChoices,
    'createdAt' | 'updatedAt'
  >;
}

export interface CreatureInfo extends Creature {
  User: {
    username: string | null;
  } | null;
  Features: FeatureNoDate[];
  wieldingItems: ItemInfo[];
  armorEquipped: ItemInfo | null;
  shieldEquipped: ItemInfo | null;
  spellsPrepared: Spell[];
  freeSpells: Spell[];
  CreatureLimitedSpells: CreatureLimitedSpellWithSpell[];
}
export interface ArmorInfo extends Armor {
  Features: FeatureNoDate[];
}
export interface ToolInfo extends Tool {
  Features: FeatureNoDate[];
}
export interface BackgroundInfo extends Background {
  User: {
    username: string | null;
  } | null;

  Features: FeatureNoDate[];
}

export interface SubClassInfo extends SubClass {
  Class: {
    name: string;
    slug: string;
  } | null;
  Features: FeatureWithSubClassColumn[];
  SpellCastingFeatures: FeatureWithSubClassColumn[];
  User: {
    username: string | null;
  } | null;
}
export interface FeatureWithSubClassColumn extends Feature {
  SubClassColumnedFeature: SubClassColumnedFeature[];
}
export interface SpellInfo extends Spell {
  SpellLists: SpellList[];
  User: {
    username: string | null;
  } | null;
}
export interface SpellListInfo extends SpellList {
  Spells: Spell[];
}

export type FeatureNoDate = Omit<Feature, 'createdAt | updatedAt'>;
