import {
  ArmorInfo,
  CharacterInfo,
  CharacterToClassInfo,
  EffectGrantsGroupInfo,
  EffectInfo,
  FeatureInfo,
  ItemInfo,
  ItemWeaponDataInfo,
  SpellCastingInfo,
  SubSpeciesWithFeaturesAndChoices,
  ToolInfo,
} from '@/lib/types/modelInfo';
import {
  AddFreeSpellOutput,
  AddPreparedSpellOutput,
} from '@/lib/types/protocols';
import {
  CharacterFeatures,
  ResourceData,
  ToolID,
  WeaponID,
} from '@/lib/types/types';
import {
  Ability,
  ArmorType,
  CharacterState,
  Choice,
  Language,
  Skill,
  ToolGroup,
  WeaponGroup,
} from '@prisma/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SheetState {
  rawCharacter: CharacterInfo | null;
  state: CharacterState | null;
  diceLog: string[];
  activeChoiceId: string | null;
  refreshPending: boolean;
  activeSpellCastingClassId: string | null;
  activeFeaturesFromGroups: FeatureInfo[];
  level: number;
  abilityScores: {
    [key in Ability]: number;
  };
  primaryClass: CharacterToClassInfo | null;
  multiClasses: CharacterToClassInfo[];
  combinedSpecies:
    | Omit<SubSpeciesWithFeaturesAndChoices, 'createdAt' | 'updatedAt'>
    | Partial<Omit<SubSpeciesWithFeaturesAndChoices, 'createdAt' | 'updatedAt'>>
    | null;
  levelsByClass: Record<string, number>;
  features: CharacterFeatures;
  activeEffects: EffectInfo[];
  choices: Choice[];
  proficiencyBonus: number;
  proficientToolIds: ToolID[];
  proficientToolGroups: ToolGroup[];
  skillHalfProficiencies: Skill[];
  skillProficiencies: Skill[];
  skillExpertises: Skill[];
  savingThrowProficiencies: Ability[];
  proficientArmorTypes: ArmorType[];
  proficientWeaponIds: WeaponID[];
  proficientWeaponGroups: WeaponGroup[];
  proficientLanguages: Language[];
  toolsInInventory: ToolInfo[];
  weaponsInInventory: ItemWeaponDataInfo[];
  itemsInInventory: ItemInfo[];
  equippedWeapons: ItemWeaponDataInfo[];
  equippedArmor: ItemInfo | null;
  equippedShield: ItemInfo | null;
  isVersatile: boolean;
  weightCarried: number;
  armorInInventory: ArmorInfo[];
  itemAmounts: Record<string, number>;
  armorClass: number;
  initiative: number;
  maxHP: number;
  resources: ResourceData[];
  hitDie: Record<number, number>;
  usedHitDie: Record<number, number>;
  unarmedDamage: string;
  spellSlots: PrismaJson.SpellSlots;
  currentSpellSlots: PrismaJson.SpellSlots;
  spellCastingAbility: Ability;
  spellCastingAbilityModifier: number;
  spellSaveDC: number;
  spellAttackBonus: number;
  isSpellcaster: boolean;
  spellcastingClasses: CharacterToClassInfo[];
  activeSpellCastingClass: SpellCastingInfo | null;
  preparedSpells: AddPreparedSpellOutput;
  freeSpells: AddFreeSpellOutput;
  featureGroups: EffectGrantsGroupInfo[];
  blindsight: number;
  darkvision: number;
  tremorsense: number;
  truesight: number;
  passivePerception: number;
}

const initialState: SheetState = {
  rawCharacter: null,
  diceLog: [],
  activeChoiceId: null,
  refreshPending: true,
  state: null,
  activeSpellCastingClassId: null,
  activeFeaturesFromGroups: [],
  level: 0,
  abilityScores: {
    [Ability.STR]: 10,
    [Ability.DEX]: 10,
    [Ability.CON]: 10,
    [Ability.INT]: 10,
    [Ability.WIS]: 10,
    [Ability.CHA]: 10,
  },
  primaryClass: null,
  multiClasses: [],
  combinedSpecies: null,
  levelsByClass: {},
  features: {
    classes: [],
    subclasses: [],
    species: {
      id: '',
      name: '',
      features: [],
    },
    background: {
      id: '',
      name: '',
      features: [],
    },
    subSpecies: {
      id: '',
      name: '',
      features: [],
    },
  },
  activeEffects: [],
  choices: [],
  proficiencyBonus: 0,
  proficientToolIds: [],
  proficientToolGroups: [],
  skillHalfProficiencies: [],
  skillProficiencies: [],
  skillExpertises: [],
  savingThrowProficiencies: [],
  proficientArmorTypes: [],
  proficientWeaponIds: [],
  proficientWeaponGroups: [],
  proficientLanguages: [],
  toolsInInventory: [],
  weaponsInInventory: [],
  itemsInInventory: [],
  equippedWeapons: [],
  equippedArmor: null,
  equippedShield: null,
  isVersatile: false,
  weightCarried: 0,
  armorInInventory: [],
  itemAmounts: {},
  armorClass: 0,
  initiative: 0,
  maxHP: 0,
  resources: [],
  hitDie: {},
  usedHitDie: {},
  unarmedDamage: '1',
  spellSlots: {},
  currentSpellSlots: {},
  spellCastingAbility: Ability.INT,
  spellCastingAbilityModifier: 0,
  spellSaveDC: 0,
  spellAttackBonus: 0,
  isSpellcaster: false,
  spellcastingClasses: [],
  activeSpellCastingClass: null,
  preparedSpells: [],
  freeSpells: [],
  featureGroups: [],
  blindsight: 0,
  darkvision: 0,
  tremorsense: 0,
  truesight: 0,
  passivePerception: 0,
};

const sheetSlice = createSlice({
  name: 'sheet',
  initialState,
  reducers: {
    setRawCharacter(state, action: PayloadAction<CharacterInfo>) {
      state.rawCharacter = action.payload;
    },
    setActiveChoiceId(state, action: PayloadAction<string | null>) {
      state.activeChoiceId = action.payload;
    },
    setRefreshSheet(state, action: PayloadAction<boolean>) {
      state.refreshPending = action.payload;
    },
    setCharacterState(state, action: PayloadAction<CharacterState>) {
      state.state = action.payload;
    },
    setActiveSpellCastingClassId(state, action: PayloadAction<string | null>) {
      state.activeSpellCastingClassId = action.payload;
    },
    setActiveFeatureFromGroups(state, action: PayloadAction<FeatureInfo[]>) {
      state.activeFeaturesFromGroups = action.payload;
    },
    setLevel(state, action: PayloadAction<number>) {
      state.level = action.payload;
    },
    setAbilityScores(
      state,
      action: PayloadAction<{ [key in Ability]: number }>
    ) {
      state.abilityScores = action.payload;
    },
    setPrimaryClass(state, action: PayloadAction<CharacterToClassInfo>) {
      state.primaryClass = action.payload;
    },
    setMultiClasses(state, action: PayloadAction<CharacterToClassInfo[]>) {
      state.multiClasses = action.payload;
    },
    setCombinedSpecies(
      state,
      action: PayloadAction<
        | Omit<SubSpeciesWithFeaturesAndChoices, 'createdAt' | 'updatedAt'>
        | Partial<
            Omit<SubSpeciesWithFeaturesAndChoices, 'createdAt' | 'updatedAt'>
          >
        | null
      >
    ) {
      state.combinedSpecies = action.payload;
    },
    setLevelsByClass(state, action: PayloadAction<Record<string, number>>) {
      state.levelsByClass = action.payload;
    },
    setFeatures(state, action: PayloadAction<CharacterFeatures>) {
      state.features = action.payload;
    },
    setActiveEffects(state, action: PayloadAction<EffectInfo[]>) {
      state.activeEffects = action.payload;
    },
    setCharacterChoices(state, action: PayloadAction<Choice[]>) {
      state.choices = action.payload;
    },
    setProficiencyBonus(state, action: PayloadAction<number>) {
      state.proficiencyBonus = action.payload;
    },
    setProficientToolIds(state, action: PayloadAction<ToolID[]>) {
      state.proficientToolIds = action.payload;
    },
    setProficientToolGroups(state, action: PayloadAction<ToolGroup[]>) {
      state.proficientToolGroups = action.payload;
    },
    setSkillHalfProficiencies(state, action: PayloadAction<Skill[]>) {
      state.skillHalfProficiencies = action.payload;
    },
    setSkillProficiencies(state, action: PayloadAction<Skill[]>) {
      state.skillProficiencies = action.payload;
    },
    setSkillExpertises(state, action: PayloadAction<Skill[]>) {
      state.skillExpertises = action.payload;
    },
    setSavingThrowProficiencies(state, action: PayloadAction<Ability[]>) {
      state.savingThrowProficiencies = action.payload;
    },
    setProficientArmorTypes(state, action: PayloadAction<ArmorType[]>) {
      state.proficientArmorTypes = action.payload;
    },
    setProficientWeaponIds(state, action: PayloadAction<WeaponID[]>) {
      state.proficientWeaponIds = action.payload;
    },
    setProficientWeaponGroups(state, action: PayloadAction<WeaponGroup[]>) {
      state.proficientWeaponGroups = action.payload;
    },
    setProficientLanguages(state, action: PayloadAction<Language[]>) {
      state.proficientLanguages = action.payload;
    },
    setToolsInInventory(state, action: PayloadAction<ToolInfo[]>) {
      state.toolsInInventory = action.payload;
    },
    setWeaponsInInventory(state, action: PayloadAction<ItemWeaponDataInfo[]>) {
      state.weaponsInInventory = action.payload;
    },
    setItemsInInventory(state, action: PayloadAction<ItemInfo[]>) {
      state.itemsInInventory = action.payload;
    },
    setEquippedWeapons(state, action: PayloadAction<ItemWeaponDataInfo[]>) {
      state.equippedWeapons = action.payload;
    },
    setEquippedArmor(state, action: PayloadAction<ItemInfo | null>) {
      state.equippedArmor = action.payload;
    },
    setEquippedShield(state, action: PayloadAction<ItemInfo | null>) {
      state.equippedShield = action.payload;
    },
    setIsVersatile(state, action: PayloadAction<boolean>) {
      state.isVersatile = action.payload;
    },
    setWeightCarried(state, action: PayloadAction<number>) {
      state.weightCarried = action.payload;
    },
    setArmorInInventory(state, action: PayloadAction<ArmorInfo[]>) {
      state.armorInInventory = action.payload;
    },
    setItemAmounts(state, action: PayloadAction<Record<string, number>>) {
      state.itemAmounts = action.payload;
    },
    setArmorClass(state, action: PayloadAction<number>) {
      state.armorClass = action.payload;
    },
    setInitiative(state, action: PayloadAction<number>) {
      state.initiative = action.payload;
    },
    setMaxHp(state, action: PayloadAction<number>) {
      state.maxHP = action.payload;
    },
    setPassivePerception(state, action: PayloadAction<number>) {
      state.passivePerception = action.payload;
    },
    setResources(state, action: PayloadAction<ResourceData[]>) {
      state.resources = action.payload;
    },
    setHitDie(state, action: PayloadAction<Record<number, number>>) {
      state.hitDie = action.payload;
    },
    setUsedHitDie(state, action: PayloadAction<Record<number, number>>) {
      state.usedHitDie = action.payload;
    },
    setUnarmedDamage(state, action: PayloadAction<string>) {
      state.unarmedDamage = action.payload;
    },
    setSpellSlots(state, action: PayloadAction<PrismaJson.SpellSlots>) {
      state.spellSlots = action.payload;
    },
    setCurrentSpellSlots(state, action: PayloadAction<PrismaJson.SpellSlots>) {
      state.currentSpellSlots = action.payload;
    },
    setSpellCastingAbility(state, action: PayloadAction<Ability>) {
      state.spellCastingAbility = action.payload;
    },
    setSpellCastingAbilityModifier(state, action: PayloadAction<number>) {
      state.spellCastingAbilityModifier = action.payload;
    },
    setSpellSaveDC(state, action: PayloadAction<number>) {
      state.spellSaveDC = action.payload;
    },
    setSpellAttackBonus(state, action: PayloadAction<number>) {
      state.spellAttackBonus = action.payload;
    },
    setIsSpellcaster(state, action: PayloadAction<boolean>) {
      state.isSpellcaster = action.payload;
    },
    setSpellcastingClasses(
      state,
      action: PayloadAction<CharacterToClassInfo[]>
    ) {
      state.spellcastingClasses = action.payload;
    },
    setActiveSpellCastingClass(
      state,
      action: PayloadAction<SpellCastingInfo | null>
    ) {
      state.activeSpellCastingClass = action.payload;
    },
    setPreparedSpells(state, action: PayloadAction<AddPreparedSpellOutput>) {
      state.preparedSpells = action.payload;
    },
    setFreeSpells(state, action: PayloadAction<AddFreeSpellOutput>) {
      state.freeSpells = action.payload;
    },
    setFeatureGroups(state, action: PayloadAction<EffectGrantsGroupInfo[]>) {
      state.featureGroups = action.payload;
    },
    setBlindsight(state, action: PayloadAction<number>) {
      state.blindsight = action.payload;
    },
    setDarkvision(state, action: PayloadAction<number>) {
      state.darkvision = action.payload;
    },
    setTremorsense(state, action: PayloadAction<number>) {
      state.tremorsense = action.payload;
    },
    setTruesight(state, action: PayloadAction<number>) {
      state.truesight = action.payload;
    },
    clearSheetState(state) {
      state = initialState;
    },
  },
});

export const {
  setRawCharacter,
  setActiveChoiceId,
  setRefreshSheet,
  setCharacterState,
  setActiveSpellCastingClassId,
  setActiveFeatureFromGroups,
  setLevel,
  setAbilityScores,
  setPrimaryClass,
  setMultiClasses,
  setCombinedSpecies,
  setLevelsByClass,
  setFeatures,
  setActiveEffects,
  setCharacterChoices,
  setProficiencyBonus,
  setProficientToolIds,
  setProficientToolGroups,
  setSkillHalfProficiencies,
  setSkillProficiencies,
  setSkillExpertises,
  setSavingThrowProficiencies,
  setProficientArmorTypes,
  setProficientWeaponIds,
  setProficientWeaponGroups,
  setProficientLanguages,
  setToolsInInventory,
  setWeaponsInInventory,
  setItemsInInventory,
  setEquippedWeapons,
  setEquippedArmor,
  setEquippedShield,
  setIsVersatile,
  setWeightCarried,
  setArmorInInventory,
  setItemAmounts,
  setArmorClass,
  setInitiative,
  setMaxHp,
  setPassivePerception,
  setResources,
  setHitDie,
  setUsedHitDie,
  setUnarmedDamage,
  setSpellSlots,
  setCurrentSpellSlots,
  setSpellCastingAbility,
  setSpellCastingAbilityModifier,
  setSpellSaveDC,
  setSpellAttackBonus,
  setIsSpellcaster,
  setSpellcastingClasses,
  setActiveSpellCastingClass,
  setPreparedSpells,
  setFreeSpells,
  setFeatureGroups,
  setBlindsight,
  setDarkvision,
  setTremorsense,
  setTruesight,
  clearSheetState,
} = sheetSlice.actions;

export default sheetSlice.reducer;
