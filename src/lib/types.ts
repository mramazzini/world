import {
  Armor,
  ArmorType,
  Background,
  Character,
  Class,
  DamageTypes,
  EquipmentPack,
  Feat,
  Item,
  Language,
  Message,
  Prisma,
  Race,
  RaceVariant,
  Skill,
  Spell,
  SpellList,
  SubClass,
  Tool,
  Weapon,
} from "@prisma/client";

export enum Pages {
  Class = "Class",
  SubClass = "SubClass",
  Race = "Race",
  SubRace = "SubRace",
  Background = "Background",
  Feat = "Feat",
  Spell = "Spell",
  Item = "Item",
}
export interface Badge {
  text: string;
  color: "badge-primary" | "badge-secondary" | "badge-accent" | "badge-neutral";
}
export interface ClassInfo extends Class {
  SubClasses: SubClass[];
  potentialTools: Tool[];
  potentialEquipment: Item[];
  SpellList: SpellList | null;
  potentialWeapons: Weapon[];
  User: {
    username: string | null;
  } | null;
}
export interface FeatInfo extends Feat {}
interface ClassWithSpellList extends Class {
  SpellList: SpellListInfo | null;
}
export interface CharacterInfo extends Character {
  User: {
    username: string | null;
  } | null;
  Background: Background | null;
  Classes: ClassWithSpellList[] | null;
  Race: Race | null;
  SubRace: RaceVariant | null;

  // Inventory: any;
}

export interface BackgroundInfo extends Background {
  User: {
    username: string | null;
  } | null;
}
export interface ArmorInfo extends Armor {}
export interface ToolInfo extends Tool {}

export interface SubClassInfo extends SubClass {
  Class: {
    name: string | null;
  } | null;

  User: {
    username: string | null;
  } | null;
}
export type CallbackOptions =
  | Skill[]
  | Ability[]
  | Language[]
  | ArmorType[]
  | WeaponID[]
  | ToolID[]
  | ItemID[]
  | ArmorID[]
  | AbilityScoreValue[]
  | PrismaJson.QuantityItem[][];
export interface SpellInfo extends Spell {
  SpellLists: SpellList[];
  User: {
    username: string | null;
  } | null;
}
export enum Unit {
  lb = "lb",
  oz = "oz",
  pint = "pint",
  quart = "quart",
  gal = "gal",
  hour = "hour",
  day = "day",
  week = "week",
  month = "month",
  year = "year",
  minute = "minute",
  second = "second",
  cp = "cp",
  sp = "sp",
  ep = "ep",
  gp = "gp",
  pp = "pp",
}
export enum Distance {
  ft = "ft",
  mi = "mi",
  m = "m",
  km = "km",
  inch = "inch",
  mile = "mile",
}
export enum Time {
  hour = "hour",
  day = "day",
  week = "week",
  month = "month",
  year = "year",
  minute = "minute",
  second = "second",
  longRest = "long rest",
  shortRest = "short rest",
  rest = "short or long rest",
}
export interface SubclassSearchResults extends SubClass {
  Class: {
    name: string | null;
  } | null;
}
export enum Currency {
  cp = "cp",
  sp = "sp",
  ep = "ep",
  gp = "gp",
  pp = "pp",
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
  Ammunition = "Ammunition",
  Finesse = "Finesse",
  Heavy = "Heavy",
  Light = "Light",
  Loading = "Loading",
  Range = "Range",
  Reach = "Reach",
  Special = "Special",
  Thrown = "Thrown",
  TwoHanded = "Two-Handed",
  Versatile = "Versatile",
}
export enum SpellFocus {
  ARCANE_FOCUS = "arcane focus",
  HOLY_SYMBOL = "holy symbol",
  DRUIDIC_FOCUS = "druidic focus",
  MUSICAL_INSTRUMENT = "musical instrument",
  ARTISAN_TOOLS = "artisan tools",
  NONE = "none",
}
export interface SpellListInfo extends SpellList {
  Spells: Spell[];
}
export type ArmorID = number;
export type WeaponID = number;
export type ItemID = number;
export type ToolID = number;
export type SpellID = number;

declare global {
  namespace PrismaJson {
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
        options: {
          numberOfChoices: number; // Number of different abilities to increase (e.g., 1, 2, or 3)
          options: number[]; // Array of values for each increase, e.g., [2, 1] or [1, 1, 1]
        }[];
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

    interface Feature {
      name: string;
      description: string;
      options?: string[];
      extendedTable?: Table[];
      postTableData?: string;
      tableColumns?: TableColumnData[];
      levels?: number[]; //levels that the feature is gained
      itemsRequired?: ItemChoice[]; //required to have in inventory to use this feature. This is different from item cost. This is more like a key to unlock the feature, while cost gets spent. No need to put items here if they are in cost.
      abilityScoreTriggers?: AbilityScoreTrigger;
      effect?: FeatureEffect;
      leveledFeatures?: {
        [K in Level]?: FeatureEffect;
      };
      hideInSheet?: boolean; //if true, this feature will not be displayed in the character sheet. Active features will still be useable.
      // You choose a number of options from the options array equal to numberOfChoices. Each option is a FeatureEffect.
      choices?: FeatureEffectChoice;
    }
    interface Trigger {
      onDamage?: {
        all?: boolean;
        rolledA: number[]; // damage rolled a specific num
      };
      onRoll: {
        allowChaining?: boolean; // if true, the trigger can be used multiple times in a single roll (e.g., rerolling 1s and 2s, over and over)
        attack?: {
          all?: boolean;
          rolledA: number[]; // attack roll rolled a specific num
        };

        damage?: {
          all?: boolean;
          rolledA: number[]; // damage roll rolled a specific num
        };
        savingThrow?: {
          all?: boolean;
          rolledA: number[]; // saving throw rolled a specific num
        };

        abilityCheck?: {
          all?: boolean;
          rolledA: number[]; // ability check rolled a specific num
        };
        skillCheck?: {
          all?: boolean;
          rolledA: number[]; // skill check rolled a specific num
        };
        initiative?: {
          all?: boolean;
          rolledA: number[]; // initiative rolled a specific num
        };
        d4?: {
          all?: boolean;
          rolledA: number[]; // d4 rolled a specific num
        };
        d6?: {
          all?: boolean;
          rolledA: number[]; // d6 rolled a specific num
        };
        d8?: {
          all?: boolean;
          rolledA: number[]; // d8 rolled a specific num
        };
        d10?: {
          all?: boolean;
          rolledA: number[]; // d10 rolled a specific num
        };
        d12?: {
          all?: boolean;
          rolledA: number[]; // d12 rolled a specific num
        };
        d20?: {
          all?: boolean;
          rolledA: number[]; // d20 rolled a specific num
        };
      };
    }
    interface FeatureEffect {
      reroll?: {
        damageDie?: Trigger;
      };

      ASI?: AbilityScoreChoice;
      //Adds languages to the player's language proficiencies
      languageChoices?: LanguageChoice;
      //adds armor to the player's armor proficiencies
      armorChoices?: ArmorChoice;
      //adds weapons to the player's weapon proficiencies
      weaponChoices?: WeaponChoice;
      //adds tools to the player's tool proficiencies
      toolChoices?: ToolChoice;
      //adds skills to the player's skill proficiencies
      skillChoices?: SkillChoice;
      //i DONT REMEMBER TBH
      abilityChoices?: AbilityChoice;
      //Sets the metadata for the feature specific resource.
      setResourceData?: CustomResource[];
      ACBonus?: number; //Increases the player's AC
      //Increases the player's resource amount
      resourceAmountIncrease?: { resourceName: string; amount: number }[]; //cant go past max or below 0
      //Adds certain spells to the player's prepared spells (like a cleric's domain spells)
      preparedSpellChoices?: {
        gain?: SpellChoice;
        lose?: SpellChoice;
      };
      //adds certain spells to the player's available spells (like a wizard's spellbook)
      availableSpellChoices?: {
        gain?: SpellChoice;
        lose?: SpellChoice;
      };
      customSpells?: CustomizedSpell[]; //custom spells need to be set, and are unique to the feature. They cannot be added or removed.
      //regains spell slots
      spellSlotRegained?: SpellSlots;
      //grants advantage on certain skill checks
      skillRollAdvantages?: SkillRollAdvantage[];
      //grants advantage on certain ability checks
      abilityRollAdvantages?: AbilityRollAdvantage[];
      //grants bonuses to certain skill checks
      skillRollBonuses?: SkillRollBonus[];
      //grants bonuses to certain ability checks
      abilityRollBonuses?: AbilityRollBonus[];
      //grants bonuses to attack rolls
      attackRollAdvantages?: AttackRollAdvantage[];
      //grants bonuses to damage rolls
      attackRollBonuses?: AttackRollBonus[];
      //grants bonuses to saving throws
      damageRollBonuses?: DamageRollBonus[];
      //grants advantage to saving throws
      savingThrowAdvantages?: AbilityRollAdvantage[];
      //grants bonuses to saving throws
      savingThrowBonuses?: AbilityRollBonus[];
      //grants bonuses to speed
      speedBonus?: number;
      //grants the character the ability to ritual cast certain spells
      ritualCasting?: {
        spellPrepared: boolean;
        spells?: SpellChoice;
        fromSpellList?: true; //defaults to current spellList
      };

      blindSight?: QuantityDistance;
      //grants the player items
      itemsGranted?: ItemChoice;
      //if the feature is active, you only gain the benefits when the feature is activated. Otherwise, the benefits are always active.
      active?: {
        levelRequired?: number;
        cost?: Cost;
        uses?: QuantityTime; //3 per day, 1 per short rest, etc. If not present, it is assumed to be at-will
      };
      //if you need to be equipped with certain items to use the feature
      mustEquip?: EquipmentSetup[]; //or array
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

    interface FeatureEffectChoice {
      numberOfChoices: number;
      options: {
        name: string;
        description: string;
        effect: FeatureEffect;
      }[];
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
      | "Action"
      | "Bonus Action"
      | "Reaction"
      | "Free Action"
      | "Movement"
      | "Other";

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
        item: number; // item id
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
      | "Item"
      | "Language"
      | "Skill"
      | "Ability"
      | "AbilityScore"
      | "Weapon"
      | "Armor"
      | "Tool";
    type ChoiceType =
      | ItemChoice
      | LanguageChoice
      | SkillChoice
      | AbilityChoice
      | AbilityScoreChoice
      | WeaponChoice
      | ArmorChoice
      | ToolChoice;

    interface Choice {
      model: ChoiceModel;
      choice: ChoiceType;

      from: string;
      description?: string;
      callback: (
        state: CharacterState,
        selections: CallbackOptions
      ) => CharacterState;
    }

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
      type: "Tool" | "Weapon" | "Armor" | "Misc";
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
      item: number; // item id
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
      features: Feature[];
      displaySpellLevels: boolean; // If true, display the spell levels in the class description
      spellLevels: SpellLevels;
    }

    interface SpellRoll {
      type: DamageTypes | "healing";
      dice: 4 | 6 | 8 | 10 | 12 | 20 | 100;
      numberOfDice: number;
    }

    interface Damage {
      // ex. 1d6 fire damage
      type: DamageTypes; // type of damage ex. slashing, fire, etc.
      dice: number; // type of dice ex. 6 for d6 or 8 for d8
      numberOfDice: number; // number of dice rolled
    }
    interface WeaponProperty {
      property: Property;
      versatileDamage?: Damage; // versatile damage
      range?: number; // range in feet
      maxRange?: number; // max range in feet
      special?: Feature[]; // special properties
    }
    interface Reason {
      reason: string;
      effect: string | number;
    }
    interface CharacterState {
      notes: MarkdownItem[];
      ideals: MarkdownItem[];
      bonds: MarkdownItem[];
      flaws: MarkdownItem[];
      biography: MarkdownItem;
      personalityTraits: MarkdownItem[];
      classLevels: { classId: number; level: number }[];
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
        armor?: number;
        hands: {
          numberOfHands: number;
          numberOfHandsReasons: Reason[];
          items?: ItemID[]; // item id
        };
      };
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
        tools: ToolID[]; // tool id
        toolReasons: Reason[];
        weapons: WeaponID[]; // weapon id
        weaponReasons: Reason[];
        armor: ArmorType[];
        armorReasons: Reason[];
        savingThrows: Ability[];
        savingThrowsReasons: Reason[];
      };
      features: { feature: Feature; source: string }[];
      pendingChoices: Choice[];
    }
  }
}

export type MarkdownItem = string;

export interface Property {
  name: string;
  description: string;
}
export enum Ability {
  STR = "STR",
  CON = "CON",
  DEX = "DEX",
  INT = "INT",
  WIS = "WIS",
  CHA = "CHA",
}

export interface Roll {
  rolls: {
    diceType: number;
    rolled: number;
  }[];
  plus: number;
  total: number;
}

export interface Log {
  logType: "roll" | "info" | "spell";
  roll?: Roll;
  info?: string;
  from?: string;
  spellLevel?: number;
}
export interface AbilityScoreValue {
  ability: Ability;
  amount: number;
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
  kaladesh = "Plane Shift: Kaladesh",
  homebrew = "Homebrew",
  tasha = "Tasha's Cauldron of Everything",
  xanathar = "Xanathar's Guide to Everything",
  volo = "Volo's Guide to Monsters",
  sword = "Sword Coast Adventurer's Guide",
  Bigby = "Bigby Presents: The Glory of the Giants",
  mordenkainenFoes = "Mordenkainen's Tome of Foes",
  mordenkainenMonsters = "Mordenkainen Presents: Monsters of the Multiverse",
  eberron = "Eberron: Rising from the Last War",
  theros = "Mythic Odysseys of Theros",
  ravnica = "Guildmaster's Guide to Ravnica",
  wildemount = "Explorer's Guide to Wildemount",
  phb = "Player's Handbook",
  vanRichten = "Van Richten's Guide to Ravenloft",
  dmg = "Dungeon Master's Guide",
  fizban = "Fizban's Treasury of Dragons",
  dragonQueen = "Dragonlance: Shadow of the Dragon Queen",
  tomb = "Tomb of Annihilation",
  descent = "Descent into Avernus",
  witchlight = "The Wild Beyond the Witchlight",
  eepc = "Elemental Evil Player's Companion",
  locathah = "Locathah Rising",
  strixhaven = "Strixhaven: A Curriculum of Chaos",
  tortle = "The Tortle Package",
  aquisitions = "Acquisitions Incorporated",
  saltmarsh = "Ghosts of Saltmarsh",
  strahd = "Curse of Strahd",
  ravenloft = "Van Richten's Guide to Ravenloft",
  manyThings = "Book of Many Things",
}

export enum AuthResult {
  InvalidCredentials = "Invalid Credentials",
  UserNotFound = "User Not Found",
  UserAlreadyExists = "User Already Exists",
  EmailAlreadyExists = "Email Already Exists",
  EmailNotValid = "Email Not Valid",
  PasswordsDoNotMatch = "Passwords Do Not Match",
  PasswordTooShort = "Password Too Short, Must Be At Least 8 Characters",
  TokenExpired = "Token Expired",
  Success = "Success",
  FailedToCreateUser = "Failed To Create User",
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

export interface MessageInfo extends Message {
  User: {
    id: number;
    email: string | null;
    username: string | null;
  } | null;
}

export interface RaceInfo extends Race {
  User: {
    username: string | null;
  } | null;
  Variants: RaceVariant[];
}

export interface SubRaceInfo extends RaceVariant {
  BaseRace: Race;
  User: {
    username: string | null;
  } | null;
}
export interface ItemInfo extends Item {
  User: {
    username: string | null;
  } | null;
  Weapon: WeaponInfo | null;
  Armor: Armor | null;
  Tool: Tool | null;
  AmmunitionFor: Weapon[] | null;
  EquipmentPack: EquipmentPack | null;
  Spell: Spell | null;
}
export interface WeaponInfo extends Weapon {
  ammunition: Item | null;
}

export interface CombinedData {
  name: string;
  description: string;
  flavorText: string;
  type: string;
  other: string | null;
  lastUpdated: Date;
}

export interface QuantityDistance {
  quantity: number;
  unit: Distance;
}
