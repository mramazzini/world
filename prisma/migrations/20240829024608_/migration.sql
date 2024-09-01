-- CreateEnum
CREATE TYPE "Ability" AS ENUM ('STR', 'CON', 'DEX', 'INT', 'WIS', 'CHA');

-- CreateEnum
CREATE TYPE "ArmorType" AS ENUM ('LIGHT', 'MEDIUM', 'HEAVY', 'SHIELDS');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('TINY', 'SMALL', 'MEDIUM', 'LARGE', 'HUGE', 'GARGANTUAN', 'NULL');

-- CreateEnum
CREATE TYPE "SpellSchool" AS ENUM ('ABJURATION', 'CONJURATION', 'DIVINATION', 'ENCHANTMENT', 'EVOCATION', 'ILLUSION', 'NECROMANCY', 'TRANSMUTATION', 'NULL');

-- CreateEnum
CREATE TYPE "Skill" AS ENUM ('ACROBATICS', 'ANIMAL_HANDLING', 'ARCANA', 'ATHLETICS', 'DECEPTION', 'HISTORY', 'INSIGHT', 'INTIMIDATION', 'INVESTIGATION', 'MEDICINE', 'NATURE', 'PERCEPTION', 'PERFORMANCE', 'PERSUASION', 'RELIGION', 'SLEIGHT_OF_HAND', 'STEALTH', 'SURVIVAL', 'NULL');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('COMMON', 'DWARVISH', 'ELVISH', 'GIANT', 'GNOMISH', 'GOBLIN', 'HALFLING', 'ORC', 'ABYSSAL', 'CELESTIAL', 'DRACONIC', 'DEEP_SPEECH', 'INFERNAL', 'PRIMORDIAL', 'SYLVAN', 'UNDERCOMMON', 'NULL');

-- CreateEnum
CREATE TYPE "DamageTypes" AS ENUM ('ACID', 'BLUDGEONING', 'COLD', 'FIRE', 'FORCE', 'LIGHTNING', 'NECROTIC', 'PIERCING', 'POISON', 'PSYCHIC', 'RADIANT', 'SLASHING', 'THUNDER', 'NONE', 'NULL', 'OTHER');

-- CreateEnum
CREATE TYPE "CreatureType" AS ENUM ('ABERRATION', 'BEAST', 'CELESTIAL', 'CONSTRUCT', 'DRAGON', 'ELEMENTAL', 'FEY', 'FIEND', 'GIANT', 'HUMANOID', 'MONSTROSITY', 'OOZE', 'PLANT', 'UNDEAD', 'NULL');

-- CreateEnum
CREATE TYPE "ItemTypes" AS ENUM ('COMMON', 'MAGIC', 'CLOTHES', 'ARCANE_FOCUS', 'DRUIDIC_FOCUS', 'HOLY_SYMBOL', 'CONTAINER', 'WEAPON', 'ARMOR', 'AMMUNITION', 'COMPONENT_POUCH', 'SPELL_BOOK', 'EXPLOSIVE', 'EQUIPMENT_PACK', 'MISC', 'TOOL');

-- CreateEnum
CREATE TYPE "Unit" AS ENUM ('gp', 'sp', 'cp', 'lb', 'oz', 'pint', 'quart', 'gal');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "gameMasterId" INTEGER NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "srd" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "flavorText" VARCHAR(200) NOT NULL,
    "multiclassing" JSONB NOT NULL,
    "multiclassingDescription" TEXT NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'Player''s Handbook',
    "hitDie" INTEGER NOT NULL,
    "savingThrows" JSONB NOT NULL,
    "skills" JSONB NOT NULL,
    "skillChoiceDescription" TEXT NOT NULL,
    "subClassName" TEXT NOT NULL,
    "subClassDescription" TEXT NOT NULL,
    "subClassFeatureLevels" INTEGER[],
    "features" JSONB[],
    "tools" JSONB NOT NULL,
    "toolsDescription" TEXT NOT NULL,
    "armor" JSONB NOT NULL,
    "armorDescription" TEXT NOT NULL,
    "weapons" JSONB NOT NULL,
    "weaponDescription" TEXT NOT NULL,
    "abilityScoreLevels" INTEGER[],
    "equipment" JSONB NOT NULL,
    "isSpellCaster" BOOLEAN NOT NULL DEFAULT false,
    "spellCastingInfo" JSONB,
    "spellListId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spell" (
    "id" SERIAL NOT NULL,
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Spell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpellList" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SpellList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubClass" (
    "id" SERIAL NOT NULL,
    "srd" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "flavorText" VARCHAR(200) NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'Player''s Handbook',
    "features" JSONB[],
    "isSpellCaster" BOOLEAN NOT NULL DEFAULT false,
    "spellCastingInfo" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "classId" INTEGER,
    "userId" INTEGER,

    CONSTRAINT "SubClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Race" (
    "id" SERIAL NOT NULL,
    "srd" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "flavorText" VARCHAR(200) NOT NULL,
    "source" TEXT NOT NULL,
    "abilityScores" JSONB NOT NULL,
    "abilityScoreDescription" TEXT NOT NULL,
    "creatureType" "CreatureType" NOT NULL,
    "size" "Size" NOT NULL,
    "sizeDescription" TEXT,
    "age" TEXT NOT NULL,
    "alignment" TEXT NOT NULL,
    "skillProficiencies" "Skill"[],
    "toolProficiencies" JSONB,
    "weaponProficiencies" INTEGER[],
    "speed" INTEGER NOT NULL,
    "flightSpeed" INTEGER,
    "swimSpeed" INTEGER,
    "climbSpeed" INTEGER,
    "speedDescription" TEXT NOT NULL,
    "flightDescription" TEXT,
    "swimDescription" TEXT,
    "climbDescription" TEXT,
    "darkvision" INTEGER,
    "darkvisionDescription" TEXT,
    "resistanceTo" "DamageTypes"[],
    "immuneTo" "DamageTypes"[],
    "vulnerableTo" "DamageTypes"[],
    "originLanguages" JSONB NOT NULL,
    "languageDescription" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Race_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RaceVariant" (
    "id" SERIAL NOT NULL,
    "srd" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "flavorText" VARCHAR(200) NOT NULL,
    "source" TEXT NOT NULL,
    "abilityScores" JSONB,
    "abilityScoreDescription" TEXT,
    "removedTraits" TEXT[],
    "creatureType" "CreatureType",
    "size" "Size",
    "sizeDescription" TEXT,
    "age" TEXT,
    "alignment" TEXT,
    "skillProficiencies" "Skill"[],
    "toolProficiencies" JSONB,
    "weaponProficiencies" INTEGER[],
    "speed" INTEGER,
    "flightSpeed" INTEGER,
    "swimSpeed" INTEGER,
    "climbSpeed" INTEGER,
    "speedDescription" TEXT,
    "flightDescription" TEXT,
    "swimDescription" TEXT,
    "climbDescription" TEXT,
    "darkvision" INTEGER,
    "darkvisionDescription" TEXT,
    "resistanceTo" "DamageTypes"[],
    "immuneTo" "DamageTypes"[],
    "vulnerableTo" "DamageTypes"[],
    "originLanguages" JSONB,
    "languageDescription" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,
    "baseRaceId" INTEGER NOT NULL,

    CONSTRAINT "RaceVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RacialTraits" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "extendedTable" JSONB[],
    "options" TEXT[],
    "postTableData" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "raceId" INTEGER,
    "raceVariantId" INTEGER,

    CONSTRAINT "RacialTraits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Background" (
    "id" SERIAL NOT NULL,
    "srd" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'Player''s Handbook',
    "flavorText" VARCHAR(200) NOT NULL,
    "skillProficiencies" "Skill"[],
    "skillChoiceCount" INTEGER NOT NULL,
    "toolProficiencies" TEXT[],
    "languages" "Language"[],
    "languageChoiceCount" INTEGER NOT NULL,
    "equipment" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Background_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BackgroundFeature" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "extendedTable" JSONB[],
    "options" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "backgroundId" INTEGER,

    CONSTRAINT "BackgroundFeature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feat" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "email" TEXT,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tool" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "skills" JSONB[],
    "components" TEXT[],
    "componentsDescription" TEXT,
    "features" JSONB[],
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EquipmentPack" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "itemsQuantity" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EquipmentPack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "flavorText" VARCHAR(200) NOT NULL,
    "cost" JSONB,
    "weight" JSONB,
    "capacity" JSONB,
    "customItemCapacity" JSONB[],
    "features" JSONB[],
    "types" "ItemTypes"[],
    "equipmentPackId" INTEGER,
    "toolId" INTEGER,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "weaponId" INTEGER,
    "armorId" INTEGER,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Weapon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isSimple" BOOLEAN NOT NULL,
    "damage" JSONB[],
    "properties" JSONB[],
    "ammunitionId" INTEGER,

    CONSTRAINT "Weapon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Armor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "armorClass" INTEGER NOT NULL,
    "armorType" "ArmorType" NOT NULL,
    "features" JSONB[],

    CONSTRAINT "Armor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PlayerCampaigns" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ToolClass" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_WeaponClass" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ItemClass" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_SpellToSpellList" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EquipmentPackParent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_PlayerCampaigns_AB_unique" ON "_PlayerCampaigns"("A", "B");

-- CreateIndex
CREATE INDEX "_PlayerCampaigns_B_index" ON "_PlayerCampaigns"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ToolClass_AB_unique" ON "_ToolClass"("A", "B");

-- CreateIndex
CREATE INDEX "_ToolClass_B_index" ON "_ToolClass"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_WeaponClass_AB_unique" ON "_WeaponClass"("A", "B");

-- CreateIndex
CREATE INDEX "_WeaponClass_B_index" ON "_WeaponClass"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ItemClass_AB_unique" ON "_ItemClass"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemClass_B_index" ON "_ItemClass"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SpellToSpellList_AB_unique" ON "_SpellToSpellList"("A", "B");

-- CreateIndex
CREATE INDEX "_SpellToSpellList_B_index" ON "_SpellToSpellList"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EquipmentPackParent_AB_unique" ON "_EquipmentPackParent"("A", "B");

-- CreateIndex
CREATE INDEX "_EquipmentPackParent_B_index" ON "_EquipmentPackParent"("B");

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_gameMasterId_fkey" FOREIGN KEY ("gameMasterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_spellListId_fkey" FOREIGN KEY ("spellListId") REFERENCES "SpellList"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubClass" ADD CONSTRAINT "SubClass_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubClass" ADD CONSTRAINT "SubClass_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Race" ADD CONSTRAINT "Race_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceVariant" ADD CONSTRAINT "RaceVariant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceVariant" ADD CONSTRAINT "RaceVariant_baseRaceId_fkey" FOREIGN KEY ("baseRaceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RacialTraits" ADD CONSTRAINT "RacialTraits_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RacialTraits" ADD CONSTRAINT "RacialTraits_raceVariantId_fkey" FOREIGN KEY ("raceVariantId") REFERENCES "RaceVariant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Background" ADD CONSTRAINT "Background_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BackgroundFeature" ADD CONSTRAINT "BackgroundFeature_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "Item" ADD CONSTRAINT "Item_weaponId_fkey" FOREIGN KEY ("weaponId") REFERENCES "Weapon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_armorId_fkey" FOREIGN KEY ("armorId") REFERENCES "Armor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weapon" ADD CONSTRAINT "Weapon_ammunitionId_fkey" FOREIGN KEY ("ammunitionId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlayerCampaigns" ADD CONSTRAINT "_PlayerCampaigns_A_fkey" FOREIGN KEY ("A") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlayerCampaigns" ADD CONSTRAINT "_PlayerCampaigns_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ToolClass" ADD CONSTRAINT "_ToolClass_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ToolClass" ADD CONSTRAINT "_ToolClass_B_fkey" FOREIGN KEY ("B") REFERENCES "Tool"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WeaponClass" ADD CONSTRAINT "_WeaponClass_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WeaponClass" ADD CONSTRAINT "_WeaponClass_B_fkey" FOREIGN KEY ("B") REFERENCES "Weapon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemClass" ADD CONSTRAINT "_ItemClass_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemClass" ADD CONSTRAINT "_ItemClass_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SpellToSpellList" ADD CONSTRAINT "_SpellToSpellList_A_fkey" FOREIGN KEY ("A") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SpellToSpellList" ADD CONSTRAINT "_SpellToSpellList_B_fkey" FOREIGN KEY ("B") REFERENCES "SpellList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipmentPackParent" ADD CONSTRAINT "_EquipmentPackParent_A_fkey" FOREIGN KEY ("A") REFERENCES "EquipmentPack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipmentPackParent" ADD CONSTRAINT "_EquipmentPackParent_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
