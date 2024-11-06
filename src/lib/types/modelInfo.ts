import {
  Armor,
  Background,
  Character,
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
    id: number;
    email: string | null;
    username: string | null;
  } | null;
}

export interface SpeciesInfo extends Species {
  User: {
    username: string | null;
  } | null;
  Features: Feature[];
  Variants: SubSpecies[];
}

interface SpeciesWithFeatures extends Species {
  Features: Feature[];
}
export interface SubSpeciesInfo extends SubSpecies {
  species: SpeciesWithFeatures;
  Features: Feature[];
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
  Features: Feature[];
  Tool: ToolInfo | null;
  AmmunitionFor: Weapon[] | null;
  EquipmentPack: EquipmentPack | null;
  Spell: Spell | null;
}

export interface WeaponPropertyInstanceInfo extends WeaponPropertyInstance {
  Property: WeaponProperty;
}
export interface WeaponInfo extends Weapon {
  SpecialProperties: Feature[];
  ammunition: Item | null;
  WeaponPropertyInstance: WeaponPropertyInstanceInfo[];
}
export interface CommentInfo extends Comment {
  User: {
    id: number;
    username: string | null;
  } | null;
  replies: Comment[];
}
export interface ClassInfo extends Class {
  SubClasses: SubClass[];
  SpellcastingFeatures: FeatureWithClassColumn[];
  SpellList: SpellList | null;
  Features: FeatureWithClassColumn[];
  User: {
    username: string | null;
  } | null;
}
export interface FeatureWithClassColumn extends Feature {
  columnedFeatures: ColumnedFeature[];
}

export interface FeatInfo extends Feat {
  Features: Feature[];
  User: {
    username: string | null;
  } | null;
}
export interface CharacterInfo
  extends Omit<Character, 'createdAt' | 'updatedAt'> {
  User: {
    id: number;
    username: string | null;
  } | null;
  Background: Omit<BackgroundWithFeatures, 'createdAt' | 'updatedAt'> | null;
  Classes: Omit<
    ClassWithSpellListAndFeatures[],
    'createdAt' | 'updatedAt'
  > | null;
  SubClasses: Omit<SubClassWithFeatures[], 'createdAt' | 'updatedAt'> | null;
  Feats: Omit<FeatWithFeatures[], 'createdAt' | 'updatedAt'> | null;
  Species: Omit<SpeciesWithFeatures, 'createdAt' | 'updatedAt'> | null;
  SubSpecies: Omit<SubSpeciesWithFeatures, 'createdAt' | 'updatedAt'> | null;

  // Inventory: any;
}
export interface BackgroundWithFeatures extends Background {
  Features: Feature[];
}
export interface ClassWithFeatures extends Class {
  Features: Feature[];
  SpellcastingFeatures: Feature[];
}
export interface SubClassWithFeatures extends SubClass {
  Features: Feature[];
}
export interface FeatWithFeatures extends Feat {
  Features: Feature[];
}
export interface ItemWithFeatures extends Item {
  Features: Feature[];
}
export interface SubSpeciesWithFeatures extends SubSpecies {
  Features: Feature[];
}

interface ClassWithSpellListAndFeatures extends Class {
  SpellList: SpellListInfo | null;
  Features: Feature[];
  SpellcastingFeatures: Feature[];
}

export interface CreatureInfo extends Creature {
  User: {
    username: string | null;
  } | null;
  Features: Feature[];
  wieldingItems: ItemInfo[];
  armorEquipped: ItemInfo | null;
  shieldEquipped: ItemInfo | null;
  spellsPrepared: Spell[];
  freeSpells: Spell[];
  CreatureLimitedSpells: CreatureLimitedSpellWithSpell[];
}
export interface ArmorInfo extends Armor {
  Features: Feature[];
}
export interface ToolInfo extends Tool {
  Features: Feature[];
}
export interface BackgroundInfo extends Background {
  User: {
    username: string | null;
  } | null;

  Features: Feature[];
}

export interface SubClassInfo extends SubClass {
  Class: {
    name: string | null;
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
