import {
  Ability,
  ArmorType,
  ItemTypes,
  Language,
  Skill,
  ToolGroup,
  WeaponGroup,
} from '@prisma/client';
import { SpellID, SpellLevel, ToolID, WeaponID } from './types';

export type SetToolProficiencyParams = ToolID[];
export type SetToolProficiencyOutput = ToolID[];

export type SetToolProficiencyGroupedParams = {
  type: 'group' | 'id';
  group?: ToolGroup;
  id?: ToolID;
}[];

export type SetSkillProficiencyParams = Skill[];
export type SetSkillProficiencyOutput = Skill[];

export type SetSkillExpertiseParams = Skill[];
export type SetSkillExpertiseOutput = Skill[];

export type UpgradeSkillProficiencyToExpertiseParams = null;
export type UpgradeSkillProficiencyToExpertiseOutput = Skill[];

export type SetSavingThrowProficiencyParams = Ability[];
export type SetSavingThrowProficiencyOutput = Ability[];

export type SetArmorProficiencyParams = ArmorType[];
export type SetArmorProficiencyOutput = ArmorType[];

export type SetWeaponProficiencyParams = WeaponID[];
export type SetWeaponProficiencyOutput = WeaponID[];

export type AddToInventoryParams = PrismaJson.QuantityItem[][];
export type AddToInventoryOutput = PrismaJson.QuantityItem[];

export type ItemGroupQuantity = {
  items?: PrismaJson.QuantityItem[];
  weaponGroup?: {
    group: WeaponGroup;
    quantity: number;
  };
  itemType?: {
    type: ItemTypes;
    quantity: number;
  };
  toolGroup?: {
    group: ToolGroup;
    quantity: number;
  };
};

export type AddToInventoryGroupedParams = ItemGroupQuantity[];
export type AddToInventoryGroupedOutput = PrismaJson.QuantityItem[];

export type SetLanguageProficiencyParams = Language[];
export type SetLanguageProficiencyOutput = Language[];

export type SetAbilityScoreParams = {
  ability: Ability;
  score: number;
}[];
export type SetAbilityScoreOutput = {
  ability: Ability;
  score: number;
}[];

export type ImproveAbilityScoreParams = {
  increaseValues: number[];
  abilitiesToIncrease: Ability[];
}[];
export type SpellLevelsWithCantrip = SpellLevel | 0;

export type AddFreeSpellParams = {
  fromGroup?: {
    spellListIds?: string[];
    levels?: SpellLevelsWithCantrip[];
  };
  spellIds?: SpellID[];
};

export type AddFreeSpellOutput = SpellID[];
export type AddPreparedSpellParams = {
  fromGroup?: {
    spellListIds?: string[];
    levels?: SpellLevelsWithCantrip[];
  };
  fromIds?: SpellID[];
};

export type AddPreparedSpellOutput = SpellID[];

export type ChoiceModelId =
  | 'speciesId'
  | 'subSpeciesId'
  | 'classId'
  | 'backgroundId'
  | 'multiClassId'
  | 'effectId';

export type ImproveAbilityScoreOutput = PrismaJson.AbilityScoreValue[];

export type ChoiceParams =
  | SetToolProficiencyParams
  | SetToolProficiencyGroupedParams
  | SetSkillProficiencyParams
  | SetSkillExpertiseParams
  | SetSavingThrowProficiencyParams
  | SetArmorProficiencyParams
  | SetWeaponProficiencyParams
  | AddToInventoryParams
  | AddToInventoryGroupedParams
  | SetLanguageProficiencyParams
  | SetAbilityScoreParams
  | ImproveAbilityScoreParams
  | AddFreeSpellParams
  | AddPreparedSpellParams
  | UpgradeSkillProficiencyToExpertiseParams;

export type ChoiceOutput =
  | SetToolProficiencyOutput
  | SetSkillProficiencyOutput
  | SetSkillExpertiseOutput
  | SetSavingThrowProficiencyOutput
  | SetArmorProficiencyOutput
  | SetWeaponProficiencyOutput
  | AddToInventoryOutput
  | AddToInventoryGroupedOutput
  | SetLanguageProficiencyOutput
  | SetAbilityScoreOutput
  | ImproveAbilityScoreOutput
  | AddFreeSpellOutput
  | AddPreparedSpellOutput
  | UpgradeSkillProficiencyToExpertiseOutput;

export type ResolverFunction = (result: {
  selections: ChoiceOutput;
  characterId: string;
  choiceId: string;
}) => Promise<'success' | 'failure'>;
