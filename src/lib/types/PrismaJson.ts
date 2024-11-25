import {
  Ability,
  Currency,
  DamageTypes,
  Skill,
  Unit,
  WorkshopProtocol,
} from '@prisma/client';
import {
  ArmorID,
  BackgroundID,
  ClassID,
  FeatID,
  ItemID,
  Level,
  SpeciesID,
  SpellID,
  SpellLevel,
  SubClassID,
  SubSpeciesID,
  ToolID,
  WeaponID,
  WeaponPropertyNames,
  Time,
} from './types';
import { WorkshopItemEditorData } from './workshop';
import { ChoiceOutput, ChoiceParams } from './protocols';

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

    type TableColumn = {
      [K in Level]: string | number;
    };
    interface TableColumnData {
      title: string;
      col: TableColumn;
    }
    type SpellLevels = {
      [K in Level]?: SpellSlots;
    };
    type SpellSlots = {
      [K in SpellLevel]?: number;
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
    interface AbilityScoreValue {
      ability: Ability;
      value: number;
    }
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

    interface CustomResource {
      name: string;
      description: string;
      max: number; //amount of resource
      current: number; //current amount of resource
      resetType: QuantityTime;
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

    interface AbilityScoreTrigger {
      abilities: Ability[];
      lessThan?: number;
      greaterThan?: number;
    }

    interface QuantityTime {
      quantity: number;
      unit: Time;
    }
    interface AttackRollBonus extends RollBonus {
      rangedOnly?: boolean;
      meleeOnly?: boolean;
    }

    interface RollBonus {
      bonus: number;
      situation: string;
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

    interface ModelLink {
      model:
        | 'SubClass'
        | 'Class'
        | 'Feat'
        | 'Species'
        | 'Background'
        | 'Spell'
        | 'Item'
        | 'Weapon'
        | 'Armor'
        | 'Tool';

      id: string;
    }

    interface DiceAmount {
      quantity: number;
      dice: number;
    }

    interface SpellSlot {
      level: SpellLevel;
      max: number;
      current: number;
    }

    type ChoiceFetchParams = ChoiceParams;

    type ChoiceFetchOutput = ChoiceOutput;

    interface RollDetail {
      diceType: number;
      rolled: number[];
    }

    interface LogEntry {
      id: string;
      log: string;
      type: 'info' | 'error' | 'success' | 'dice';
      timestamp: string;
      from: string;
      diceRollResult?: {
        formula: string;
        rolls: RollDetail[];
      };
    }

    interface Note {
      id: string;
      content: string;
      title: string;
    }
  }
}
