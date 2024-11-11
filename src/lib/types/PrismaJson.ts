import {
  Ability,
  ArmorType,
  Currency,
  DamageTypes,
  Language,
  Skill,
  Unit,
  WorkshopProtocol,
} from '@prisma/client';
import {
  AbilityScores,
  AbilityScoreValue,
  ArmorID,
  ASIorFeat,
  BackgroundID,
  CallbackOptions,
  ClassID,
  FeatID,
  ItemID,
  Level,
  MarkdownItem,
  SpeciesID,
  SpellFocus,
  SpellID,
  SpellLevel,
  SubClassID,
  SubSpeciesID,
  ToolID,
  WeaponID,
  WeaponPropertyNames,
  Time,
} from './types';
import { CharacterInfo } from './modelInfo';
import { WorkshopItemEditorData } from './workshop';

declare global {
  namespace PrismaJson {
    interface WorkshopItemData<
      T extends WorkshopItemEditorData = WorkshopItemEditorData,
    > {
      id: string;
      name: string;
      protocol: WorkshopProtocol;
      data?: T;
      parentId?: string;
      lastEditISOString: string;
      lastSyncedISOString?: string;
    }

    interface RollRequest {
      name: string;
      formula: string;
    }
    interface LegendaryAction {
      name: string;
      description: string;
      rolls?: RollRequest[];
      cost: number;
    }

    interface CreatureAction {
      name: string;
      description: string;
      actionType: 'action' | 'bonus action' | 'reaction';
      rolls?: RollRequest[];
    }
    // you can use classes, interfaces, types, etc.
    interface Table {
      [key: string]: TableData;
    }
    interface TableData {
      headers: string[];
      headersLength?: number[];
      links?: string[];
      data: { [key: string | number]: string }[];
    }

    interface AbilityScoreChoice {
      default?: { ability: Ability; value: number }[]; // Fixed increases like Strength +2, Charisma +1
      choices?: {
        abilities: Ability[]; // Array of abilities that can be chosen
        options: number[]; // Array of numbers that can be chosen
      }[];
    }

    interface FeatChoice {
      default?: FeatID[];
      choices?: {
        options: FeatID[];
        numberOfChoices: number;
      }[];
    }

    interface LanguageChoice {
      default?: Language[];
      choices?: {
        options: Language[];
        numberOfChoices: number;
      }[];
    }

    type TableColumn = {
      [K in Level]: string | number;
    };
    interface TableColumnData {
      title: string;
      col: TableColumn;
    }
    type SpellLevels = {
      [K in Level]?: {
        [K in SpellLevel]?: number;
      };
    };

    interface SheetSpell {
      name: string;
      notes: string;
      linkedSpell?: SpellID;
      prepared: boolean;
      alwaysPrepared: boolean;
      spellRoll?: SpellRoll[];
      range?: string;
      castingTime?: string;
      radius?: string;
      duration?: string;
      concentration?: boolean;
      ritual?: boolean;
      upcastBonus?: SpellRoll;
      baseLevel: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
      addSpellcastingModifier?: boolean;
      components?: string;
    }
    type StateCallback = (
      character: CharacterInfo,
      selections: CallbackOptions,
      from: string
    ) => Promise<PrismaJson.CharacterState> | PrismaJson.CharacterState;

    interface Prerequisite {
      protocol: 'AND' | 'OR';
      data:
        | {
            blackList?: boolean; //if true, the player must not have the listed items
            minLevel?: number;
            Class?: ClassID;
            SubClass?: SubClassID;
            Species?: SpeciesID;
            SubSpecies?: SubSpeciesID;
            Background?: BackgroundID;
            Feat?: FeatID;
            minAbilityScore?: AbilityScoreValue;
            Spellcaster?: boolean;
            hasASpell?: boolean;
            Spell?: SpellID;
            weaponProficiency?: WeaponID;
            martialWeaponProficiency?: boolean;
            simpleWeaponProficiency?: boolean;

            armorProficiency?: ArmorID;
            lightArmorProficiency?: boolean;
            mediumArmorProficiency?: boolean;
            heavyArmorProficiency?: boolean;
            toolProficiency?: ToolID;
            skillProficiency?: Skill;
          }[]
        | Prerequisite[];
    }

    interface WeaponPropertyChoice {
      default?: WeaponPropertyNames[];
      choices?: {
        options: WeaponPropertyNames[];
        numberOfChoices: number;
      }[];
    }

    interface EquipmentSetup {
      armorTypes?: ArmorType[];
      armor?: ArmorID[]; // armor id
      weapons?: {
        martialOnly?: boolean;
        simpleOnly?: boolean;
        rangedOnly?: boolean;
        meleeOnly?: boolean;
        weaponIds?: WeaponID[]; // weapon id
        properties?: WeaponPropertyNames[];
      };

      shield?: boolean;
      items?: ItemID[]; // If a specific item needs to be equipped.
      emptyHands?: { amount: 1 | 2 }; // If the player needs to have empty hands to use the feature. If shield is true, the player can have a shield equipped.
      armorless?: boolean; // If the player needs to be unarmored to use the feature.
      weaponless?: boolean; // If the player needs to be unarmed to use the feature.
      shieldless?: boolean; // If the player needs to be unshielded to use the feature.
    }

    interface CustomizedSpell {
      spells: SpellChoice;
      noSpellSlot?: boolean;
      customLevel?: number;
      alwaysPrepared?: boolean;
      //add more as needed
    }
    interface CustomResource {
      name: string;
      description: string;
      max: number; //amount of resource
      current: number; //current amount of resource
      resetType: QuantityTime;
    }
    interface Cost {
      items?: ItemChoice;
      spellSlots?: SpellSlots;
      combatTime?: CombatTime;
      time?: QuantityTime;
      customResources?: QuantityCustomResource;
    }
    interface QuantityCustomResource {
      quantity: number;
      resource: string; //resource name
    }

    type CombatTime =
      | 'Action'
      | 'Bonus Action'
      | 'Reaction'
      | 'Free Action'
      | 'Movement'
      | 'Other';

    type SpellSlots = {
      [K in SpellLevel]?: number;
    };

    interface SpellChoice {
      //Spell Ids
      default?: SpellID[];
      choices?: {
        options: SpellID[];
        numberOfChoices: number;
      }[];
    }

    interface AbilityScoreTrigger {
      abilities: Ability[];
      lessThan?: number;
      greaterThan?: number;
    }

    interface ArmorChoice {
      default?: ArmorType[];
      choices?: {
        options: ArmorType[];
        numberOfChoices: number;
      }[];
    }

    interface WeaponChoice {
      default?: WeaponID[]; // weapon id
      choices?: {
        options: WeaponID[]; // weapon id
        numberOfChoices: number;
      }[];
    }

    interface ToolChoice {
      default?: ToolID[]; // tool id
      choices?: {
        options: ToolID[]; // tool id
        numberOfChoices: number;
      }[];
    }

    interface SkillChoice {
      default?: Skill[];
      choices?: {
        options: Skill[];
        numberOfChoices: number;
      }[];
    }
    interface ItemChoice {
      default?: {
        item: ItemID; // item id
        quantity: number;
      }[];
      choices?: {
        options: QuantityItem[][]; // 2d arr to allow variations in quantity
        numberOfChoices: number;
      }[];
    }

    interface QuantityTime {
      quantity: number;
      unit: Time;
    }
    interface AttackRollBonus extends RollBonus {
      rangedOnly?: boolean;
      meleeOnly?: boolean;
    }
    type ChoiceModel =
      | 'Item'
      | 'Language'
      | 'Skill'
      | 'Ability'
      | 'AbilityScore'
      | 'CharacterAbilityScoreSelection'
      | 'Weapon'
      | 'Armor'
      | 'Tool'
      | 'Subclass'
      | 'Feat'
      | 'ASI or Feat';
    type ChoiceType =
      | ItemChoice
      | LanguageChoice
      | SkillChoice
      | AbilityChoice
      | AbilityScoreChoice
      | WeaponChoice
      | ArmorChoice
      | ToolChoice
      | SubclassChoice
      | FeatChoice
      | ASIorFeatChoice;
    interface SubclassChoice {
      default?: SubClassID[];
      choices?: {
        options: SubClassID[];
        numberOfChoices: number;
      }[];
    }
    interface ASIorFeatChoice {
      default?: ASIorFeat[];
      choices?: {
        options: ASIorFeat[];
        numberOfChoices: number;
      }[];
    }

    interface Choice {
      id: string;
      model: ChoiceModel;
      choice: ChoiceType;

      from: string;
      description?: string;
      callbackProtocol: CallbackProtocol;
    }
    type CallbackProtocol =
      | 'addLanguageProficiencies'
      | 'addSkillProficiencies'
      | 'addToolProficiencies'
      | 'addArmorProficiencies'
      | 'addWeaponProficiencies'
      | 'addSavingThrowProficiencies'
      | 'ItemToInventory'
      | 'SetAbilityScore'
      | 'AbilityScoreIncrease'
      | 'SpeciesAbilityScoreIncrease'
      | 'SubclassSelection'
      | 'ASIOrFeatSelection'
      | 'FeatSelection';
    interface AbilityChoice {
      default?: Ability[];
      choices?: {
        options: Ability[];
        numberOfChoices: number;
      }[];
    }

    interface RollBonus {
      bonus: number;
      situation: string;
    }

    interface Advantage {
      always?: boolean;
      situation: string;
      disadvantage?: boolean;
    }

    interface AttackRollAdvantage extends Advantage {
      rangedOnly?: boolean;
      meleeOnly?: boolean;
    }

    interface DamageRollBonus {
      bonus: Damage[] | number; // number will be damage type of weapon.
      situation: string;
      rangedOnly?: boolean;
      meleeOnly?: boolean;
    }

    interface SkillRollAdvantage extends Advantage {
      skill: SkillChoice;
    }

    interface SkillRollBonus extends RollBonus {
      skill: SkillChoice;
    }

    interface AbilityRollBonus extends RollBonus {
      ability: AbilityChoice;
    }

    interface AbilityRollAdvantage extends Advantage {
      ability: AbilityChoice;
    }

    interface Equipment {
      name: string;
      description?: string;
      type: 'Tool' | 'Weapon' | 'Armor' | 'Misc';
    }
    interface CurrencyAmount {
      quantity: number;
      unit: Currency;
    }
    interface QuantityUnit {
      quantity: number;
      unit: Unit;
    }
    interface QuantityItem {
      quantity: number;
      item: ItemID; // item id
    }

    interface ToolSkill {
      skill: Skill;
      description: string;
    }

    interface SpellCastingInfo {
      levelAquired: number;
      description: string;
      preparingSpellsDescription?: string;
      castingSpellsDescription?: string;
      spellCastingAbilityDescription: string;
      ability: Ability;
      spellFocus: SpellFocus;
      spellFocusDescription?: string;
      displaySpellLevels: boolean; // If true, display the spell levels in the class description
      spellLevels: SpellLevels;
    }
    interface CustomWeapon {
      name: string;
      damage: PrismaJson.Damage[];
      isProficient: boolean;
    }
    interface SpellRoll {
      type: DamageTypes | 'healing';
      dice: 4 | 6 | 8 | 10 | 12 | 20 | 100;
      numberOfDice: number;
    }

    interface Damage {
      type: DamageTypes; // type of damage ex. slashing, fire, etc.
      formula: string; // damage formula ex. 1d6
    }

    interface Reason {
      reason: string;
      effect: string | number;
    }
    interface TableOfContentItem {
      title: string;
      link: string;
    }
    interface CharacterState {
      //will be used to link a model to a character
      pendingLinks: {
        subClass: SubClassID[];
        Class: ClassID[];
        feats: FeatID[];
      };
      notes: MarkdownItem[];
      ideals: MarkdownItem[];
      bonds: MarkdownItem[];
      flaws: MarkdownItem[];
      biography: MarkdownItem;
      personalityTraits: MarkdownItem[];
      classLevels: { classId: ClassID; level: number }[];
      inspirationRolls: number;

      armorClass: number;
      armorClassReasons: Reason[];

      experience: number;
      experienceLog: { date: Date; amount: number; event: string }[];
      hp: {
        max: number;
        maxReasons: Reason[];
        current: number;
        damageLog: Reason[];
        temporary: number;
        temporaryReason?: Reason; //Can only have one source of temphp
        hitDieAvailable: {
          4?: number;
          6?: number;
          8?: number;
          10?: number;
          12?: number;
          20?: number;
        };
      };
      inventory: QuantityItem[];
      speed: {
        base: number;
        bonuses: Reason[];
        running: number;
        swimming: number;
        climbing: number;
        flying: number;
        runningReasons: Reason[];
        swimmingReasons: Reason[];
        climbingReasons: Reason[];
        flyingReasons: Reason[];
      };
      initiative: number;
      initiativeReasons: Reason[];
      darkvision?: QuantityUnit;
      darkvisionReasons?: Reason[];
      blindsight?: QuantityUnit;
      blindsightReasons?: Reason[];
      abilityScores: AbilityScores;
      abilityScoreReasons: {
        [K in Ability]?: Reason[];
      };
      passivePerception: number;
      passivePerceptionReasons?: Reason[];
      equipped: {
        armor?: ItemID;
        hands: {
          numberOfHands: number;
          numberOfHandsReasons: Reason[];
          items?: ItemID[];
        };
      };
      customAttacks?: CustomWeapon[];
      customResources?: CustomResource[];
      deathSaves: {
        successes: number;
        failures: number;
      };
      exhaustion: number;
      exhaustionReasons: string[];
      conditions: string[];
      conditionsReasons: string[];

      carryingCapacity: number;
      carryingCapacityReasons: Reason[];

      preparedSpells: SpellID[];
      alwaysPreparedSpells: SpellID[];
      preparedCantrips: SpellID[];
      //for now, we only allow user submitted spells to be added to the character sheet
      userSubmittedSpells: SheetSpell[];

      spellSlots?: {
        [K in SpellLevel]?: number;
      };
      proficiencies: {
        languages: Language[];
        languageReasons: Reason[];
        skills: Skill[];
        skillReasons: Reason[];
        skillExpertise: Skill[];
        skillExpertiseReasons: Reason[];
        tools: ToolID[];
        toolReasons: Reason[];
        weapons: WeaponID[];
        weaponReasons: Reason[];
        armor: ArmorType[];
        armorReasons: Reason[];
        savingThrows: Ability[];
        savingThrowsReasons: Reason[];
      };
      pendingChoices: Choice[];
    }
  }
}
