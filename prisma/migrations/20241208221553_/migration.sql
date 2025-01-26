-- CreateEnum
CREATE TYPE "Ability" AS ENUM ('STR', 'CON', 'DEX', 'INT', 'WIS', 'CHA');

-- CreateEnum
CREATE TYPE "ArmorType" AS ENUM ('LIGHT', 'MEDIUM', 'HEAVY', 'SHIELDS');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('TINY', 'SMALL', 'MEDIUM', 'LARGE', 'HUGE', 'GARGANTUAN');

-- CreateEnum
CREATE TYPE "SpellSchool" AS ENUM ('ABJURATION', 'CONJURATION', 'DIVINATION', 'ENCHANTMENT', 'EVOCATION', 'ILLUSION', 'NECROMANCY', 'TRANSMUTATION');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('cp', 'sp', 'ep', 'gp', 'pp');

-- CreateEnum
CREATE TYPE "Skill" AS ENUM ('ACROBATICS', 'ANIMAL_HANDLING', 'ARCANA', 'ATHLETICS', 'DECEPTION', 'HISTORY', 'INSIGHT', 'INTIMIDATION', 'INVESTIGATION', 'MEDICINE', 'NATURE', 'PERCEPTION', 'PERFORMANCE', 'PERSUASION', 'RELIGION', 'SLEIGHT_OF_HAND', 'STEALTH', 'SURVIVAL');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('COMMON', 'DWARVISH', 'ELVISH', 'GIANT', 'GNOMISH', 'GRUNG', 'GOBLIN', 'HALFLING', 'ORC', 'ABYSSAL', 'CELESTIAL', 'DRACONIC', 'WORG', 'DEEP_SPEECH', 'INFERNAL', 'PRIMORDIAL', 'SYLVAN', 'UNDERCOMMON', 'AURAN', 'AARAKOCRA', 'GITH', 'MINOTAUR', 'KHENRA', 'AQUAN', 'NETHERESE', 'AVEN', 'QUORI', 'KOR', 'VAMPIRE', 'NAGA', 'MERFOLK', 'SIREN');

-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('BLINDED', 'CHARMED', 'DEAFENED', 'FATIGUED', 'FRIGHTENED', 'GRAPPLED', 'INCAPACITATED', 'INVISIBLE', 'PARALYZED', 'PETRIFIED', 'POISONED', 'PRONE', 'RESTRAINED', 'STUNNED', 'UNCONSCIOUS', 'EXHAUSTION');

-- CreateEnum
CREATE TYPE "DamageTypes" AS ENUM ('ACID', 'BLUDGEONING', 'COLD', 'FIRE', 'FORCE', 'LIGHTNING', 'NECROTIC', 'PIERCING', 'POISON', 'PSYCHIC', 'RADIANT', 'SLASHING', 'THUNDER', 'NON_MAGICAL_BLUDGEONING', 'NON_MAGICAL_PIERCING', 'NON_MAGICAL_SLASHING', 'NON_SILVERED_BLUDGEONING', 'NON_SILVERED_PIERCING', 'NON_SILVERED_SLASHING', 'NONE', 'OTHER');

-- CreateEnum
CREATE TYPE "CreatureType" AS ENUM ('ABERRATION', 'BEAST', 'CELESTIAL', 'CONSTRUCT', 'DRAGON', 'ELEMENTAL', 'FEY', 'FIEND', 'GIANT', 'HUMANOID', 'MONSTROSITY', 'OOZE', 'PLANT', 'UNDEAD', 'NULL');

-- CreateEnum
CREATE TYPE "Alignment" AS ENUM ('LAWFUL_GOOD', 'NEUTRAL_GOOD', 'CHAOTIC_GOOD', 'LAWFUL_NEUTRAL', 'TRUE_NEUTRAL', 'CHAOTIC_NEUTRAL', 'LAWFUL_EVIL', 'NEUTRAL_EVIL', 'CHAOTIC_EVIL');

-- CreateEnum
CREATE TYPE "WeaponGroup" AS ENUM ('ALL_SIMPLE', 'ALL_MARTIAL', 'ALL_RANGED', 'ALL_MELEE', 'SIMPLE_MELEE', 'SIMPLE_RANGED', 'MARTIAL_MELEE', 'MARTIAL_RANGED', 'ALL_WEAPONS');

-- CreateEnum
CREATE TYPE "ToolGroup" AS ENUM ('ARTISANS_TOOLS', 'GAMING_SETS', 'INSTRUMENTS', 'VEHICLES');

-- CreateEnum
CREATE TYPE "SpellFocus" AS ENUM ('ARCANE_FOCUS', 'DRUIDIC_FOCUS', 'HOLY_SYMBOL', 'COMPONENT_POUCH', 'MUSICAL_INSTRUMENT', 'ARTISANS_TOOLS');

-- CreateEnum
CREATE TYPE "CasterPower" AS ENUM ('FULL', 'HALF_ROUNDED_UP', 'HALF_ROUNDED_DOWN', 'THIRD_ROUNDED_UP', 'THIRD_ROUNDED_DOWN', 'CUSTOM');

-- CreateEnum
CREATE TYPE "CasterType" AS ENUM ('PREPARED', 'KNOWN');

-- CreateEnum
CREATE TYPE "ChoiceProtocol" AS ENUM ('SET_COMPREHENSIVE_HALF_PROFICIENCY', 'SET_COMPREHENSIVE_PROFICIENCY', 'SET_COMPREHENSIVE_EXPERTISE', 'SET_SKILL_HALF_PROFICIENCY', 'SET_SKILL_PROFICIENCY', 'SET_SKILL_EXPERTISE', 'UPGRADE_SKILL_PROFICIENCY_TO_EXPERTISE', 'SET_TOOL_PROFICIENCY', 'SET_TOOL_PROFICIENCY_GROUPED', 'SET_SAVING_THROW_PROFICIENCY', 'SET_ARMOR_PROFICIENCY', 'SET_WEAPON_PROFICIENCY', 'SET_WEAPON_PROFICIENCY_GROUPED', 'ADD_TO_INVENTORY', 'ADD_TO_INVENTORY_GROUPED', 'SET_LANGUAGE_PROFICIENCY', 'SET_ABILITY_SCORE', 'IMPROVE_ABILITY_SCORE', 'ADD_FREE_SPELL', 'ADD_KNOWN_SPELL');

-- CreateEnum
CREATE TYPE "ChainType" AS ENUM ('REPLACE', 'ADD', 'NONE');

-- CreateEnum
CREATE TYPE "RitualCasterType" AS ENUM ('ALL', 'PREPARED', 'KNOWN');

-- CreateEnum
CREATE TYPE "RefreshEvent" AS ENUM ('SHORT_REST', 'LONG_REST', 'TURN', 'ROUND', 'OTHER');

-- CreateEnum
CREATE TYPE "ItemTypes" AS ENUM ('MAGIC', 'CLOTHES', 'ARCANE_FOCUS', 'DRUIDIC_FOCUS', 'HOLY_SYMBOL', 'CONTAINER', 'WEAPON', 'ARMOR', 'AMMUNITION', 'COMPONENT_POUCH', 'SPELL_BOOK', 'EXPLOSIVE', 'EQUIPMENT_PACK', 'MISC', 'TOOL', 'CURRENCY', 'SPELL_SCROLL', 'GEMSTONE', 'WONDROUS_ITEM', 'AMULET', 'BELT', 'BOOTS', 'BRACERS', 'CLOAK', 'WORKSHOP');

-- CreateEnum
CREATE TYPE "Unit" AS ENUM ('lb', 'oz', 'pint', 'quart', 'gal');

-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('COMMON', 'UNCOMMON', 'RARE', 'VERY_RARE', 'LEGENDARY', 'ARTIFACT');

-- CreateEnum
CREATE TYPE "CommentType" AS ENUM ('COMMENT', 'REPLY');

-- CreateEnum
CREATE TYPE "AssociatedModel" AS ENUM ('ITEM', 'FEAT', 'CLASS', 'SUBCLASS', 'SPECIES', 'SUBSPECIES', 'BACKGROUND', 'SPELL', 'SPELL_LIST', 'CREATURE');

-- CreateEnum
CREATE TYPE "ArmorClassProtocol" AS ENUM ('REGULAR', 'NATURAL_ARMOR');

-- CreateEnum
CREATE TYPE "Time" AS ENUM ('ACTION', 'BONUS_ACTION', 'REACTION', 'ROUND', 'MINUTE', 'HOUR', 'DAY', 'WEEK', 'MONTH', 'YEAR');

-- CreateEnum
CREATE TYPE "WorkshopProtocol" AS ENUM ('SPELL', 'ITEM', 'CREATURE', 'CLASS', 'SUBCLASS', 'SPECIES', 'SUBSPECIES', 'BACKGROUND', 'FEAT', 'FEATURE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterState" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "alignment" "Alignment" NOT NULL,
    "resourcesUsed" JSONB NOT NULL,
    "characterLog" JSONB[],
    "hitDieUsedSinceLastRest" JSONB[],
    "inventory" JSONB[],
    "inspirationRolls" INTEGER NOT NULL,
    "armorEquippedId" TEXT,
    "weaponEquippedIds" TEXT[],
    "shieldEquippedId" TEXT,
    "deathSavesSuccess" INTEGER NOT NULL,
    "deathSavesFail" INTEGER NOT NULL,
    "exhaustion" INTEGER NOT NULL,
    "abilitiesInitialized" BOOLEAN NOT NULL DEFAULT false,
    "conditions" "Condition"[],
    "spellSlotsUsedSinceLastRefresh" JSONB NOT NULL,
    "preparedSpellsIds" TEXT[],
    "pendingLinks" JSONB[],
    "currentHp" INTEGER NOT NULL,
    "tempHp" INTEGER NOT NULL,
    "lastSavedIsoString" TEXT NOT NULL,
    "activeFeatureFromGroupsIds" TEXT[],
    "notes" JSONB[],
    "ideals" TEXT[],
    "bonds" TEXT[],
    "flaws" TEXT[],
    "personalityTraits" TEXT[],
    "biography" TEXT NOT NULL,
    "imageURL" TEXT,
    "baseSTR" INTEGER NOT NULL,
    "baseDEX" INTEGER NOT NULL,
    "baseCON" INTEGER NOT NULL,
    "baseINT" INTEGER NOT NULL,
    "baseWIS" INTEGER NOT NULL,
    "baseCHA" INTEGER NOT NULL,

    CONSTRAINT "CharacterState_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL,
    "backgroundId" TEXT NOT NULL,
    "speciesId" TEXT NOT NULL,
    "subSpeciesId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    "campaignId" TEXT,
    "spellId" TEXT,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterToClass" (
    "characterId" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    "levelsInClass" INTEGER NOT NULL,
    "primaryClass" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CharacterToClass_pkey" PRIMARY KEY ("characterId","classId")
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "gameMasterId" TEXT NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" TEXT NOT NULL,
    "srd" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "flavorText" VARCHAR(200) NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'Player''s Handbook',
    "hitDie" INTEGER NOT NULL,
    "subClassName" TEXT NOT NULL,
    "subClassDescription" TEXT NOT NULL,
    "subClassFeatureLevels" INTEGER[],
    "savingThrowDescription" TEXT NOT NULL,
    "freeSavingThrowProficiencies" "Ability"[],
    "skillDescription" TEXT NOT NULL,
    "freeSkills" "Skill"[],
    "toolProficiencyDescription" TEXT NOT NULL,
    "freeToolProficiencyGroups" "ToolGroup"[],
    "freeToolProficiencyIds" TEXT[],
    "armorProficiencyDescription" TEXT NOT NULL,
    "freeArmorProficiencies" "ArmorType"[],
    "weaponProficiencyDescription" TEXT NOT NULL,
    "freeWeaponProficiencyIds" TEXT[],
    "freeWeaponProficiencyGroups" "WeaponGroup"[],
    "itemDescription" TEXT[],
    "freeItemIds" JSONB[],
    "abilityScoreLevels" INTEGER[],
    "userId" TEXT,
    "slug" VARCHAR(200) NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpellCasting" (
    "id" TEXT NOT NULL,
    "classId" TEXT,
    "subclassId" TEXT,
    "spellListId" TEXT,
    "spellListDescription" TEXT,
    "description" TEXT NOT NULL,
    "preparingSpellsDescription" TEXT,
    "castingSpellsDescription" TEXT,
    "spellCastingAbilityDescription" TEXT,
    "ability" "Ability" NOT NULL,
    "spellFocus" "SpellFocus",
    "spellFocusDescription" TEXT,
    "casterPower" "CasterPower" NOT NULL,
    "casterType" "CasterType" NOT NULL,
    "customCasterSpellLevels" JSONB,

    CONSTRAINT "SpellCasting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MultiClassingInfo" (
    "classId" TEXT NOT NULL,
    "multiclassingDescription" TEXT NOT NULL,
    "prerequisite" JSONB NOT NULL,
    "freeSkillProficiencies" "Skill"[],
    "freeToolIdProficiencies" TEXT[],
    "freeToolGroupProficiencies" "ToolGroup"[],
    "freeLanguages" "Language"[],
    "freeArmorProficiencies" "ArmorType"[],
    "freeWeaponGroupProficiencies" "WeaponGroup"[],
    "freeWeaponIdProficiencies" TEXT[],
    "freeSavingThrowProficiencies" "Ability"[],

    CONSTRAINT "MultiClassingInfo_pkey" PRIMARY KEY ("classId")
);

-- CreateTable
CREATE TABLE "Choice" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amountOfOptionToChoose" INTEGER NOT NULL,
    "protocol" "ChoiceProtocol" NOT NULL,
    "fetchParams" JSONB NOT NULL,
    "classId" TEXT,
    "speciesId" TEXT,
    "subSpeciesId" TEXT,
    "backgroundId" TEXT,
    "multiClassId" TEXT,
    "effectId" TEXT,

    CONSTRAINT "Choice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterChoiceStatus" (
    "characterId" TEXT NOT NULL,
    "choiceId" TEXT NOT NULL,
    "values" JSONB NOT NULL,

    CONSTRAINT "CharacterChoiceStatus_pkey" PRIMARY KEY ("characterId","choiceId")
);

-- CreateTable
CREATE TABLE "Spell" (
    "id" TEXT NOT NULL,
    "srd" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "range" TEXT NOT NULL,
    "castingTime" TEXT NOT NULL,
    "verbal" BOOLEAN NOT NULL DEFAULT false,
    "somatic" BOOLEAN NOT NULL DEFAULT false,
    "material" BOOLEAN NOT NULL DEFAULT false,
    "materialCost" TEXT,
    "concentration" BOOLEAN NOT NULL DEFAULT false,
    "ritual" BOOLEAN NOT NULL DEFAULT false,
    "rolls" TEXT[],
    "upcastInfo" TEXT,
    "tags" TEXT[],
    "saveRequired" BOOLEAN NOT NULL DEFAULT false,
    "damageType" "DamageTypes",
    "aoe" BOOLEAN NOT NULL DEFAULT false,
    "conditions" TEXT[],
    "options" TEXT[],
    "extendedTable" JSONB[],
    "postTableData" TEXT,
    "school" "SpellSchool" NOT NULL,
    "level" INTEGER NOT NULL,
    "source" TEXT NOT NULL,
    "userId" TEXT,
    "slug" VARCHAR(200) NOT NULL,
    "characterId" TEXT,

    CONSTRAINT "Spell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpellList" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "flavorText" VARCHAR(200) NOT NULL,
    "description" TEXT NOT NULL,
    "slug" VARCHAR(200) NOT NULL,

    CONSTRAINT "SpellList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feature" (
    "id" TEXT NOT NULL,
    "workshopId" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "options" TEXT[],
    "extendedTable" JSONB[],
    "postTableData" TEXT,
    "unimplemented" BOOLEAN NOT NULL DEFAULT false,
    "subClassId" TEXT,
    "spellCastingSubclassId" TEXT,
    "speciesId" TEXT,
    "classId" TEXT,
    "spellCastingClassId" TEXT,
    "featId" TEXT,
    "toolId" TEXT,
    "itemId" TEXT,
    "armorId" TEXT,
    "creatureId" TEXT,
    "subSpeciesId" TEXT,
    "backgroundId" TEXT,
    "weaponId" TEXT,
    "FeatureGroupId" TEXT,
    "effectChainType" "ChainType" NOT NULL DEFAULT 'NONE',

    CONSTRAINT "Feature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeatureGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "flavorText" VARCHAR(200) NOT NULL,
    "slug" VARCHAR(200) NOT NULL,

    CONSTRAINT "FeatureGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EffectGrantsGroup" (
    "effectId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "EffectGrantsGroup_pkey" PRIMARY KEY ("effectId","groupId")
);

-- CreateTable
CREATE TABLE "Effect" (
    "id" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "rollFormulas" TEXT[],
    "preRequisite" JSONB,
    "chainedEffectId" TEXT,
    "multiAttackAmount" INTEGER,
    "ritualCasterType" "RitualCasterType",
    "halfSkillProficiencies" "Skill"[],
    "fullSkillProficiencies" "Skill"[],
    "expertiseSkillProficiencies" "Skill"[],
    "weaponGroupRef" "WeaponGroup" NOT NULL,
    "attackModifier" TEXT,
    "damageModifier" TEXT,
    "blindsight" INTEGER,
    "darkvision" INTEGER,
    "tremorsense" INTEGER,
    "truesight" INTEGER,
    "acBonus" INTEGER,
    "featureId" TEXT NOT NULL,

    CONSTRAINT "Effect_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EffectToSpell" (
    "effectId" TEXT NOT NULL,
    "spellId" TEXT NOT NULL,
    "requireMaterial" BOOLEAN NOT NULL DEFAULT true,
    "requireSpellSlot" BOOLEAN NOT NULL DEFAULT true,
    "amountBeforeRest" INTEGER,
    "restType" "RefreshEvent",

    CONSTRAINT "EffectToSpell_pkey" PRIMARY KEY ("effectId","spellId")
);

-- CreateTable
CREATE TABLE "EffectToResource" (
    "effectId" TEXT NOT NULL,
    "resourceId" TEXT NOT NULL,
    "scalingFormula" TEXT NOT NULL,
    "refreshOn" "RefreshEvent" NOT NULL,

    CONSTRAINT "EffectToResource_pkey" PRIMARY KEY ("effectId","resourceId")
);

-- CreateTable
CREATE TABLE "CustomResource" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" VARCHAR(200) NOT NULL,

    CONSTRAINT "CustomResource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ColumnedFeature" (
    "classId" TEXT NOT NULL,
    "featureId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rows" TEXT[],

    CONSTRAINT "ColumnedFeature_pkey" PRIMARY KEY ("classId","featureId")
);

-- CreateTable
CREATE TABLE "SubClassColumnedFeature" (
    "id" TEXT NOT NULL,
    "subClassId" TEXT NOT NULL,
    "featureId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rows" TEXT[],

    CONSTRAINT "SubClassColumnedFeature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubClass" (
    "id" TEXT NOT NULL,
    "srd" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "flavorText" VARCHAR(200) NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'Player''s Handbook',
    "classId" TEXT NOT NULL,
    "userId" TEXT,
    "workshopId" TEXT,
    "slug" VARCHAR(200) NOT NULL,

    CONSTRAINT "SubClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Species" (
    "id" TEXT NOT NULL,
    "srd" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "flavorText" VARCHAR(200) NOT NULL,
    "source" TEXT NOT NULL,
    "freeAbilityScoreImprovements" JSONB[],
    "abilityScoreDescription" TEXT NOT NULL,
    "creatureType" "CreatureType" NOT NULL,
    "size" "Size" NOT NULL,
    "sizeDescription" TEXT,
    "age" TEXT NOT NULL,
    "alignment" TEXT NOT NULL,
    "speed" INTEGER NOT NULL,
    "flightSpeed" INTEGER,
    "swimSpeed" INTEGER,
    "climbSpeed" INTEGER,
    "burrowSpeed" INTEGER,
    "speedDescription" TEXT NOT NULL,
    "flightDescription" TEXT,
    "swimDescription" TEXT,
    "climbDescription" TEXT,
    "burrowSpeedDescription" TEXT,
    "darkvision" INTEGER,
    "darkvisionDescription" TEXT,
    "blindSight" INTEGER,
    "blindSightDescription" TEXT,
    "trueSight" INTEGER,
    "trueSightDescription" TEXT,
    "tremorSense" INTEGER,
    "tremorSenseDescription" TEXT,
    "freeLanguages" "Language"[],
    "languageDescription" TEXT,
    "userId" TEXT,
    "slug" VARCHAR(200) NOT NULL,

    CONSTRAINT "Species_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubSpecies" (
    "id" TEXT NOT NULL,
    "srd" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "flavorText" VARCHAR(200) NOT NULL,
    "source" TEXT NOT NULL,
    "freeAbilityScoreImprovements" JSONB[],
    "abilityScoreDescription" TEXT,
    "creatureType" "CreatureType",
    "size" "Size",
    "sizeDescription" TEXT,
    "age" TEXT,
    "alignment" TEXT,
    "speed" INTEGER,
    "flightSpeed" INTEGER,
    "swimSpeed" INTEGER,
    "climbSpeed" INTEGER,
    "burrowSpeed" INTEGER,
    "speedDescription" TEXT,
    "flightDescription" TEXT,
    "swimDescription" TEXT,
    "climbDescription" TEXT,
    "burrowSpeedDescription" TEXT,
    "darkvision" INTEGER,
    "darkvisionDescription" TEXT,
    "blindSight" INTEGER,
    "blindSightDescription" TEXT,
    "trueSight" INTEGER,
    "trueSightDescription" TEXT,
    "tremorSense" INTEGER,
    "tremorSenseDescription" TEXT,
    "freeLanguages" "Language"[],
    "languageDescription" TEXT,
    "userId" TEXT,
    "speciesId" TEXT NOT NULL,
    "slug" VARCHAR(200) NOT NULL,

    CONSTRAINT "SubSpecies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Background" (
    "id" TEXT NOT NULL,
    "srd" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'Player''s Handbook',
    "flavorText" VARCHAR(200) NOT NULL,
    "freeSkillProficiencies" "Skill"[],
    "skillProficiencyDescription" TEXT,
    "freeToolProficiencyGroups" "ToolGroup"[],
    "freeToolProficiencyIds" TEXT[],
    "toolProficiencyDescription" TEXT,
    "freeLanguageProficiencies" "Language"[],
    "languageProficiencyDescription" TEXT,
    "freeEquipment" JSONB[],
    "equipmentDescription" TEXT[],
    "suggestedCharacteristics" TEXT,
    "traits" TEXT[],
    "ideals" TEXT[],
    "bonds" TEXT[],
    "flaws" TEXT[],
    "userId" TEXT,
    "workshopItemId" TEXT,
    "slug" VARCHAR(200) NOT NULL,

    CONSTRAINT "Background_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feat" (
    "id" TEXT NOT NULL,
    "workshopId" TEXT,
    "name" TEXT NOT NULL,
    "flavorText" VARCHAR(200) NOT NULL,
    "source" TEXT NOT NULL,
    "prerequisites" JSONB,
    "prereqDescription" TEXT NOT NULL,
    "userId" TEXT,
    "slug" VARCHAR(200) NOT NULL,

    CONSTRAINT "Feat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "email" TEXT,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tool" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "skills" JSONB[],
    "components" TEXT[],
    "componentsDescription" TEXT,
    "ToolGroup" "ToolGroup",
    "userId" TEXT,

    CONSTRAINT "Tool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EquipmentPack" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "itemsQuantity" JSONB[],

    CONSTRAINT "EquipmentPack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" VARCHAR(200) NOT NULL,
    "flavorText" VARCHAR(200) NOT NULL,
    "requiresAttunement" BOOLEAN NOT NULL DEFAULT false,
    "rarity" "Rarity" NOT NULL,
    "cost" JSONB,
    "weight" JSONB,
    "capacity" JSONB,
    "customItemCapacity" JSONB,
    "types" "ItemTypes"[],
    "equipmentPackId" TEXT,
    "toolId" TEXT,
    "userId" TEXT,
    "spellId" TEXT,
    "armorId" TEXT,
    "workshopId" TEXT,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemWeaponData" (
    "itemId" TEXT NOT NULL,
    "weaponId" TEXT NOT NULL,
    "silvered" BOOLEAN NOT NULL DEFAULT false,
    "magical" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ItemWeaponData_pkey" PRIMARY KEY ("itemId","weaponId")
);

-- CreateTable
CREATE TABLE "WeaponProperty" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "WeaponProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeaponPropertyInstance" (
    "weaponId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "range" TEXT,
    "versatileDamage" TEXT,

    CONSTRAINT "WeaponPropertyInstance_pkey" PRIMARY KEY ("weaponId","propertyId")
);

-- CreateTable
CREATE TABLE "Weapon" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isSimple" BOOLEAN NOT NULL,
    "isRanged" BOOLEAN,
    "damage" TEXT NOT NULL,
    "damageType" "DamageTypes" NOT NULL,
    "ammunitionId" TEXT,

    CONSTRAINT "Weapon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Armor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "armorClass" INTEGER NOT NULL,
    "armorType" "ArmorType" NOT NULL,

    CONSTRAINT "Armor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogPost" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "meta" VARCHAR(200) NOT NULL,
    "flavorText" VARCHAR(400) NOT NULL,
    "content" TEXT NOT NULL,
    "tableOfContents" JSONB[],
    "ImageURL" TEXT NOT NULL,
    "ImageAlt" TEXT NOT NULL,

    CONSTRAINT "BlogPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "parentCommentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "CommentType" "CommentType" NOT NULL,
    "model" "AssociatedModel" NOT NULL,
    "modelId" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Creature" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "flavorText" VARCHAR(200) NOT NULL,
    "STR" INTEGER NOT NULL,
    "DEX" INTEGER NOT NULL,
    "CON" INTEGER NOT NULL,
    "INT" INTEGER NOT NULL,
    "WIS" INTEGER NOT NULL,
    "CHA" INTEGER NOT NULL,
    "languageDescription" TEXT,
    "armorClassDescription" TEXT,
    "armorClassProtocol" "ArmorClassProtocol" NOT NULL DEFAULT 'REGULAR',
    "shield" BOOLEAN NOT NULL DEFAULT false,
    "naturalArmorBonus" INTEGER,
    "hitDiceAmount" INTEGER NOT NULL,
    "creatureType" "CreatureType" NOT NULL,
    "size" "Size" NOT NULL,
    "alignmentDescription" TEXT,
    "alignmentOptions" "Alignment"[],
    "spellcastingAbility" "Ability",
    "casterLevel" INTEGER,
    "saveProficiencies" "Ability"[],
    "skillProficiencies" "Skill"[],
    "skillExpertise" "Skill"[],
    "armorEquippedId" TEXT,
    "shieldEquippedId" TEXT,
    "speed" INTEGER NOT NULL,
    "speedDescription" TEXT,
    "climbingSpeed" INTEGER,
    "climbingSpeedDescription" TEXT,
    "flyingSpeed" INTEGER,
    "flyingSpeedDescription" TEXT,
    "swimmingSpeed" INTEGER,
    "swimmingSpeedDescription" TEXT,
    "burrowingSpeed" INTEGER,
    "burrowingSpeedDescription" TEXT,
    "darkvision" INTEGER,
    "darkvisionDescription" TEXT,
    "blindsight" INTEGER,
    "blindsightDescription" TEXT,
    "trueSight" INTEGER,
    "trueSightDescription" TEXT,
    "tremorsense" INTEGER,
    "tremorsenseDescription" TEXT,
    "challengeRating" DOUBLE PRECISION NOT NULL,
    "damageImmunities" "DamageTypes"[],
    "damageResistances" "DamageTypes"[],
    "damageVulnerabilities" "DamageTypes"[],
    "conditionImmunities" TEXT[],
    "legendaryActionAmount" INTEGER,
    "legendaryActions" JSONB[],
    "actions" JSONB[],
    "userId" TEXT,
    "slug" VARCHAR(200) NOT NULL,

    CONSTRAINT "Creature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreatureLimitedSpell" (
    "creatureId" TEXT NOT NULL,
    "spellId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "time" "Time" NOT NULL,

    CONSTRAINT "CreatureLimitedSpell_pkey" PRIMARY KEY ("creatureId","spellId")
);

-- CreateTable
CREATE TABLE "WorkshopItem" (
    "id" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorkshopItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enums" (
    "id" SERIAL NOT NULL,
    "protocol" "WorkshopProtocol" NOT NULL,
    "skill" "Skill" NOT NULL,
    "ability" "Ability" NOT NULL,
    "armorType" "ArmorType" NOT NULL,
    "size" "Size" NOT NULL,
    "spellSchool" "SpellSchool" NOT NULL,
    "currency" "Currency" NOT NULL,
    "damageTypes" "DamageTypes" NOT NULL,
    "creatureType" "CreatureType" NOT NULL,
    "alignment" "Alignment" NOT NULL,
    "language" "Language" NOT NULL,
    "rarity" "Rarity" NOT NULL,
    "itemTypes" "ItemTypes" NOT NULL,
    "unit" "Unit" NOT NULL,
    "commentType" "CommentType" NOT NULL,
    "associatedModel" "AssociatedModel" NOT NULL,
    "armorClassProtocol" "ArmorClassProtocol" NOT NULL,
    "conditions" "Condition" NOT NULL,

    CONSTRAINT "Enums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Character subClasses" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterToFeat" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlayerCampaigns" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_SpellToSpellList" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EquipmentPackParent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_LikedComments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CreatureWields" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CreaturePrepares" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CreatureFreelyCasts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Class_slug_key" ON "Class"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "SpellCasting_classId_key" ON "SpellCasting"("classId");

-- CreateIndex
CREATE UNIQUE INDEX "SpellCasting_subclassId_key" ON "SpellCasting"("subclassId");

-- CreateIndex
CREATE UNIQUE INDEX "Spell_slug_key" ON "Spell"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "SpellList_slug_key" ON "SpellList"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Feature_workshopId_key" ON "Feature"("workshopId");

-- CreateIndex
CREATE UNIQUE INDEX "FeatureGroup_slug_key" ON "FeatureGroup"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Effect_chainedEffectId_key" ON "Effect"("chainedEffectId");

-- CreateIndex
CREATE UNIQUE INDEX "CustomResource_slug_key" ON "CustomResource"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "SubClass_workshopId_key" ON "SubClass"("workshopId");

-- CreateIndex
CREATE UNIQUE INDEX "SubClass_slug_key" ON "SubClass"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Species_slug_key" ON "Species"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "SubSpecies_slug_key" ON "SubSpecies"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Background_workshopItemId_key" ON "Background"("workshopItemId");

-- CreateIndex
CREATE UNIQUE INDEX "Background_slug_key" ON "Background"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Feat_workshopId_key" ON "Feat"("workshopId");

-- CreateIndex
CREATE UNIQUE INDEX "Feat_slug_key" ON "Feat"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Item_slug_key" ON "Item"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Item_workshopId_key" ON "Item"("workshopId");

-- CreateIndex
CREATE UNIQUE INDEX "ItemWeaponData_itemId_key" ON "ItemWeaponData"("itemId");

-- CreateIndex
CREATE UNIQUE INDEX "BlogPost_route_key" ON "BlogPost"("route");

-- CreateIndex
CREATE UNIQUE INDEX "Creature_slug_key" ON "Creature"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_Character subClasses_AB_unique" ON "_Character subClasses"("A", "B");

-- CreateIndex
CREATE INDEX "_Character subClasses_B_index" ON "_Character subClasses"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToFeat_AB_unique" ON "_CharacterToFeat"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToFeat_B_index" ON "_CharacterToFeat"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlayerCampaigns_AB_unique" ON "_PlayerCampaigns"("A", "B");

-- CreateIndex
CREATE INDEX "_PlayerCampaigns_B_index" ON "_PlayerCampaigns"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SpellToSpellList_AB_unique" ON "_SpellToSpellList"("A", "B");

-- CreateIndex
CREATE INDEX "_SpellToSpellList_B_index" ON "_SpellToSpellList"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EquipmentPackParent_AB_unique" ON "_EquipmentPackParent"("A", "B");

-- CreateIndex
CREATE INDEX "_EquipmentPackParent_B_index" ON "_EquipmentPackParent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LikedComments_AB_unique" ON "_LikedComments"("A", "B");

-- CreateIndex
CREATE INDEX "_LikedComments_B_index" ON "_LikedComments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CreatureWields_AB_unique" ON "_CreatureWields"("A", "B");

-- CreateIndex
CREATE INDEX "_CreatureWields_B_index" ON "_CreatureWields"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CreaturePrepares_AB_unique" ON "_CreaturePrepares"("A", "B");

-- CreateIndex
CREATE INDEX "_CreaturePrepares_B_index" ON "_CreaturePrepares"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CreatureFreelyCasts_AB_unique" ON "_CreatureFreelyCasts"("A", "B");

-- CreateIndex
CREATE INDEX "_CreatureFreelyCasts_B_index" ON "_CreatureFreelyCasts"("B");

-- AddForeignKey
ALTER TABLE "CharacterState" ADD CONSTRAINT "CharacterState_id_fkey" FOREIGN KEY ("id") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_subSpeciesId_fkey" FOREIGN KEY ("subSpeciesId") REFERENCES "SubSpecies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterToClass" ADD CONSTRAINT "CharacterToClass_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterToClass" ADD CONSTRAINT "CharacterToClass_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_gameMasterId_fkey" FOREIGN KEY ("gameMasterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellCasting" ADD CONSTRAINT "SpellCasting_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellCasting" ADD CONSTRAINT "SpellCasting_subclassId_fkey" FOREIGN KEY ("subclassId") REFERENCES "SubClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellCasting" ADD CONSTRAINT "SpellCasting_spellListId_fkey" FOREIGN KEY ("spellListId") REFERENCES "SpellList"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MultiClassingInfo" ADD CONSTRAINT "MultiClassingInfo_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_subSpeciesId_fkey" FOREIGN KEY ("subSpeciesId") REFERENCES "SubSpecies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_multiClassId_fkey" FOREIGN KEY ("multiClassId") REFERENCES "MultiClassingInfo"("classId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_effectId_fkey" FOREIGN KEY ("effectId") REFERENCES "Effect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterChoiceStatus" ADD CONSTRAINT "CharacterChoiceStatus_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterChoiceStatus" ADD CONSTRAINT "CharacterChoiceStatus_choiceId_fkey" FOREIGN KEY ("choiceId") REFERENCES "Choice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_workshopId_fkey" FOREIGN KEY ("workshopId") REFERENCES "WorkshopItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_subClassId_fkey" FOREIGN KEY ("subClassId") REFERENCES "SubClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_spellCastingSubclassId_fkey" FOREIGN KEY ("spellCastingSubclassId") REFERENCES "SubClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_spellCastingClassId_fkey" FOREIGN KEY ("spellCastingClassId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_featId_fkey" FOREIGN KEY ("featId") REFERENCES "Feat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_armorId_fkey" FOREIGN KEY ("armorId") REFERENCES "Armor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_creatureId_fkey" FOREIGN KEY ("creatureId") REFERENCES "Creature"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_subSpeciesId_fkey" FOREIGN KEY ("subSpeciesId") REFERENCES "SubSpecies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_weaponId_fkey" FOREIGN KEY ("weaponId") REFERENCES "Weapon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_FeatureGroupId_fkey" FOREIGN KEY ("FeatureGroupId") REFERENCES "FeatureGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EffectGrantsGroup" ADD CONSTRAINT "EffectGrantsGroup_effectId_fkey" FOREIGN KEY ("effectId") REFERENCES "Effect"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EffectGrantsGroup" ADD CONSTRAINT "EffectGrantsGroup_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "FeatureGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Effect" ADD CONSTRAINT "Effect_chainedEffectId_fkey" FOREIGN KEY ("chainedEffectId") REFERENCES "Effect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Effect" ADD CONSTRAINT "Effect_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "Feature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EffectToSpell" ADD CONSTRAINT "EffectToSpell_effectId_fkey" FOREIGN KEY ("effectId") REFERENCES "Effect"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EffectToSpell" ADD CONSTRAINT "EffectToSpell_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EffectToResource" ADD CONSTRAINT "EffectToResource_effectId_fkey" FOREIGN KEY ("effectId") REFERENCES "Effect"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EffectToResource" ADD CONSTRAINT "EffectToResource_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "CustomResource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColumnedFeature" ADD CONSTRAINT "ColumnedFeature_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColumnedFeature" ADD CONSTRAINT "ColumnedFeature_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "Feature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubClassColumnedFeature" ADD CONSTRAINT "SubClassColumnedFeature_subClassId_fkey" FOREIGN KEY ("subClassId") REFERENCES "SubClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubClassColumnedFeature" ADD CONSTRAINT "SubClassColumnedFeature_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "Feature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubClass" ADD CONSTRAINT "SubClass_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubClass" ADD CONSTRAINT "SubClass_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubClass" ADD CONSTRAINT "SubClass_workshopId_fkey" FOREIGN KEY ("workshopId") REFERENCES "WorkshopItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Species" ADD CONSTRAINT "Species_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubSpecies" ADD CONSTRAINT "SubSpecies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubSpecies" ADD CONSTRAINT "SubSpecies_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Background" ADD CONSTRAINT "Background_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Background" ADD CONSTRAINT "Background_workshopItemId_fkey" FOREIGN KEY ("workshopItemId") REFERENCES "WorkshopItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feat" ADD CONSTRAINT "Feat_workshopId_fkey" FOREIGN KEY ("workshopId") REFERENCES "WorkshopItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feat" ADD CONSTRAINT "Feat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tool" ADD CONSTRAINT "Tool_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_equipmentPackId_fkey" FOREIGN KEY ("equipmentPackId") REFERENCES "EquipmentPack"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_armorId_fkey" FOREIGN KEY ("armorId") REFERENCES "Armor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_workshopId_fkey" FOREIGN KEY ("workshopId") REFERENCES "WorkshopItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemWeaponData" ADD CONSTRAINT "ItemWeaponData_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemWeaponData" ADD CONSTRAINT "ItemWeaponData_weaponId_fkey" FOREIGN KEY ("weaponId") REFERENCES "Weapon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeaponPropertyInstance" ADD CONSTRAINT "WeaponPropertyInstance_weaponId_fkey" FOREIGN KEY ("weaponId") REFERENCES "Weapon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeaponPropertyInstance" ADD CONSTRAINT "WeaponPropertyInstance_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "WeaponProperty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weapon" ADD CONSTRAINT "Weapon_ammunitionId_fkey" FOREIGN KEY ("ammunitionId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_parentCommentId_fkey" FOREIGN KEY ("parentCommentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Creature" ADD CONSTRAINT "Creature_armorEquippedId_fkey" FOREIGN KEY ("armorEquippedId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Creature" ADD CONSTRAINT "Creature_shieldEquippedId_fkey" FOREIGN KEY ("shieldEquippedId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Creature" ADD CONSTRAINT "Creature_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreatureLimitedSpell" ADD CONSTRAINT "CreatureLimitedSpell_creatureId_fkey" FOREIGN KEY ("creatureId") REFERENCES "Creature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreatureLimitedSpell" ADD CONSTRAINT "CreatureLimitedSpell_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkshopItem" ADD CONSTRAINT "WorkshopItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Character subClasses" ADD CONSTRAINT "_Character subClasses_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Character subClasses" ADD CONSTRAINT "_Character subClasses_B_fkey" FOREIGN KEY ("B") REFERENCES "SubClass"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToFeat" ADD CONSTRAINT "_CharacterToFeat_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToFeat" ADD CONSTRAINT "_CharacterToFeat_B_fkey" FOREIGN KEY ("B") REFERENCES "Feat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlayerCampaigns" ADD CONSTRAINT "_PlayerCampaigns_A_fkey" FOREIGN KEY ("A") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlayerCampaigns" ADD CONSTRAINT "_PlayerCampaigns_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SpellToSpellList" ADD CONSTRAINT "_SpellToSpellList_A_fkey" FOREIGN KEY ("A") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SpellToSpellList" ADD CONSTRAINT "_SpellToSpellList_B_fkey" FOREIGN KEY ("B") REFERENCES "SpellList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipmentPackParent" ADD CONSTRAINT "_EquipmentPackParent_A_fkey" FOREIGN KEY ("A") REFERENCES "EquipmentPack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipmentPackParent" ADD CONSTRAINT "_EquipmentPackParent_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LikedComments" ADD CONSTRAINT "_LikedComments_A_fkey" FOREIGN KEY ("A") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LikedComments" ADD CONSTRAINT "_LikedComments_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreatureWields" ADD CONSTRAINT "_CreatureWields_A_fkey" FOREIGN KEY ("A") REFERENCES "Creature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreatureWields" ADD CONSTRAINT "_CreatureWields_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreaturePrepares" ADD CONSTRAINT "_CreaturePrepares_A_fkey" FOREIGN KEY ("A") REFERENCES "Creature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreaturePrepares" ADD CONSTRAINT "_CreaturePrepares_B_fkey" FOREIGN KEY ("B") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreatureFreelyCasts" ADD CONSTRAINT "_CreatureFreelyCasts_A_fkey" FOREIGN KEY ("A") REFERENCES "Creature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreatureFreelyCasts" ADD CONSTRAINT "_CreatureFreelyCasts_B_fkey" FOREIGN KEY ("B") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;
