import {
  Armor,
  Background,
  Character,
  CharacterChoiceStatus,
  CharacterState,
  CharacterToClass,
  Choice,
  Class,
  ColumnedFeature,
  Comment,
  Creature,
  CustomResource,
  Effect,
  EffectGrantsGroup,
  EffectToResource,
  EffectToSpell,
  EquipmentPack,
  Feat,
  Feature,
  FeatureGroup,
  Item,
  ItemWeaponData,
  Message,
  MultiClassingInfo,
  Species,
  Spell,
  SpellCasting,
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
  Features: FeatureInfo[];
  Variants: SubSpecies[];
}

interface SpeciesWithFeaturesAndChoices extends Species {
  Choices: Choice[];
  Features: FeatureInfo[];
}
export interface SubSpeciesInfo extends SubSpecies {
  species: SpeciesWithFeaturesAndChoices;
  Features: FeatureInfo[];
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
  Features: FeatureInfo[];
  Tool: ToolInfo | null;
  AmmunitionFor: Weapon[] | null;
  EquipmentPack: EquipmentPack | null;
  Spell: Spell | null;
}

export interface WeaponPropertyInstanceInfo extends WeaponPropertyInstance {
  Property: WeaponProperty;
}
export interface WeaponInfo extends Weapon {
  SpecialProperties: FeatureInfo[];
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

export interface FeatureWithClassColumn extends Feature {
  columnedFeatures: ColumnedFeature[];
  Effects: EffectInfo[];
}

export interface FeatInfo extends Feat {
  Features: FeatureInfo[];
  User: {
    username: string | null;
  } | null;
}

export interface SpellCastingInfo extends SpellCasting {
  SpellList: SpellList | null;
}

export interface CharacterInfo extends Omit<Character, 'createdAt'> {
  User: {
    id: string;
    username: string | null;
  } | null;
  Background: BackgroundWithFeaturesAndChoices | null;
  CharacterToClass: CharacterToClassInfo[];
  SubClasses: SubClassWithFeatures[] | null;
  Feats: FeatWithFeatures[] | null;
  CharacterChoiceStatus: CharacterChoiceStatus[];
  Species: SpeciesWithFeaturesAndChoices | null;
  SubSpecies: SubSpeciesWithFeaturesAndChoices | null;
  CharacterState: CharacterState | null;
}
export interface BackgroundWithFeaturesAndChoices extends Background {
  Features: FeatureInfo[];
  Choices: Choice[];
}
export interface ClassWithFeatures extends Class {
  Features: FeatureInfo[];
  SpellcastingFeatures: FeatureInfo[];
}
export interface SubClassWithFeatures extends SubClass {
  Features: FeatureInfo[];
}
export interface FeatWithFeatures extends Feat {
  Features: FeatureInfo[];
}
export interface ItemWithFeatures extends Item {
  Features: FeatureInfo[];
}
export interface SubSpeciesWithFeaturesAndChoices extends SubSpecies {
  Features: FeatureInfo[];
  Choices: Choice[];
}

interface CharacterSheetClassInfo extends Class {
  SpellCasting: SpellCastingInfo | null;
  Features: FeatureInfo[];
  Choices: Choice[];
  SpellcastingFeatures: FeatureInfo[];
  MultiClassing: ExtendedMulticlassInfo | null;
}
export interface ExtendedMulticlassInfo extends MultiClassingInfo {
  Choices: Choice[];
}

export interface ClassInfo extends Class {
  SubClasses: SubClass[];
  MultiClassing: ExtendedMulticlassInfo | null;
  SpellcastingFeatures: FeatureWithClassColumn[];
  SpellCasting: SpellCastingInfo | null;
  Choices: Choice[];
  Features: FeatureWithClassColumn[];
  User: {
    username: string | null;
  } | null;
}
export interface CharacterToClassInfo extends CharacterToClass {
  Class: CharacterSheetClassInfo;
}

export interface CreatureInfo extends Creature {
  User: {
    username: string | null;
  } | null;
  Features: FeatureInfo[];
  wieldingItems: ItemInfo[];
  armorEquipped: ItemInfo | null;
  shieldEquipped: ItemInfo | null;
  spellsPrepared: Spell[];
  freeSpells: Spell[];
  CreatureLimitedSpells: CreatureLimitedSpellWithSpell[];
}
export interface ArmorInfo extends Armor {
  Features: FeatureInfo[];
}
export interface ToolInfo extends Tool {
  Features: FeatureInfo[];
}
export interface BackgroundInfo extends Background {
  User: {
    username: string | null;
  } | null;

  Features: FeatureInfo[];
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

export interface FeatureInfo extends Feature {
  Effects: EffectInfo[];
}
export interface EffectInfoNoGroup extends Effect {
  Choices: Choice[];
  EffectToResource: EffectToResourceInfo[];
  EffectToSpell: EffectToSpellInfo[];
}

export interface EffectInfo extends EffectInfoNoGroup {
  EffectGrantsGroup: EffectGrantsGroupInfo[];
}

export interface FeatureInfo extends Feature {
  Effects: EffectInfo[];
}

export interface EffectToSpellInfo extends EffectToSpell {
  Spell: Spell;
}

export interface EffectToResourceInfo extends EffectToResource {
  Resource: CustomResource;
}
export interface EffectGrantsGroupInfo extends EffectGrantsGroup {
  FeatureGroup: FeatureGroupInfo;
  FeaturesToChooseFrom: FeatureInGroupInfo[];
}

export interface FeatureInGroupInfo extends Feature {
  Effects: EffectInfoNoGroup[];
}

export interface FeatureGroupInfo extends FeatureGroup {
  FeaturesInGroup: FeatureInGroupInfo[];
}
