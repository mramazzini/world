/*
  Warnings:

  - You are about to drop the column `isSpellCaster` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `spellCastingInfo` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `spellListDescription` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `spellListId` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `spellCastingInfo` on the `SubClass` table. All the data in the column will be lost.
  - You are about to drop the column `spellListId` on the `SubClass` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "SpellFocus" AS ENUM ('ARCANE_FOCUS', 'DRUIDIC_FOCUS', 'HOLY_SYMBOL', 'COMPONENT_POUCH', 'MUSICAL_INSTRUMENT');

-- CreateEnum
CREATE TYPE "CasterType" AS ENUM ('FULL', 'HALF_ROUNDED_UP', 'HALF_ROUNDED_DOWN', 'THIRD_ROUNDED_UP', 'THIRD_ROUNDED_DOWN', 'CUSTOM');

-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_spellListId_fkey";

-- DropForeignKey
ALTER TABLE "SubClass" DROP CONSTRAINT "SubClass_spellListId_fkey";

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "isSpellCaster",
DROP COLUMN "spellCastingInfo",
DROP COLUMN "spellListDescription",
DROP COLUMN "spellListId";

-- AlterTable
ALTER TABLE "SubClass" DROP COLUMN "spellCastingInfo",
DROP COLUMN "spellListId";

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
    "casterType" "CasterType" NOT NULL,
    "customCasterSpellLevels" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SpellCasting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SpellCasting_classId_key" ON "SpellCasting"("classId");

-- CreateIndex
CREATE UNIQUE INDEX "SpellCasting_subclassId_key" ON "SpellCasting"("subclassId");

-- AddForeignKey
ALTER TABLE "SpellCasting" ADD CONSTRAINT "SpellCasting_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellCasting" ADD CONSTRAINT "SpellCasting_subclassId_fkey" FOREIGN KEY ("subclassId") REFERENCES "SubClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellCasting" ADD CONSTRAINT "SpellCasting_spellListId_fkey" FOREIGN KEY ("spellListId") REFERENCES "SpellList"("id") ON DELETE SET NULL ON UPDATE CASCADE;
