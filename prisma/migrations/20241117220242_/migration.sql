/*
  Warnings:

  - You are about to drop the column `speciesId` on the `Choice` table. All the data in the column will be lost.
  - You are about to drop the column `subSpeciesId` on the `Choice` table. All the data in the column will be lost.
  - You are about to drop the column `freeSkillProficiencies` on the `Species` table. All the data in the column will be lost.
  - You are about to drop the column `freeToolProficiencyGroups` on the `Species` table. All the data in the column will be lost.
  - You are about to drop the column `freeToolProficiencyIds` on the `Species` table. All the data in the column will be lost.
  - You are about to drop the column `freeWeaponProficiencyGroups` on the `Species` table. All the data in the column will be lost.
  - You are about to drop the column `freeWeaponProficiencyIds` on the `Species` table. All the data in the column will be lost.
  - You are about to drop the column `skillProficiencyDescription` on the `Species` table. All the data in the column will be lost.
  - You are about to drop the column `toolProficiencyDescription` on the `Species` table. All the data in the column will be lost.
  - You are about to drop the column `weaponProficiencyDescription` on the `Species` table. All the data in the column will be lost.
  - You are about to drop the column `freeSkillProficiencies` on the `SubSpecies` table. All the data in the column will be lost.
  - You are about to drop the column `freeToolProficiencyGroups` on the `SubSpecies` table. All the data in the column will be lost.
  - You are about to drop the column `freeToolProficiencyIds` on the `SubSpecies` table. All the data in the column will be lost.
  - You are about to drop the column `freeWeaponProficiencyGroups` on the `SubSpecies` table. All the data in the column will be lost.
  - You are about to drop the column `freeWeaponProficiencyIds` on the `SubSpecies` table. All the data in the column will be lost.
  - You are about to drop the column `skillProficiencyDescription` on the `SubSpecies` table. All the data in the column will be lost.
  - You are about to drop the column `toolProficiencyDescription` on the `SubSpecies` table. All the data in the column will be lost.
  - You are about to drop the column `weaponProficiencyDescription` on the `SubSpecies` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Choice" DROP CONSTRAINT "Choice_speciesId_fkey";

-- DropForeignKey
ALTER TABLE "Choice" DROP CONSTRAINT "Choice_subSpeciesId_fkey";

-- AlterTable
ALTER TABLE "Choice" DROP COLUMN "speciesId",
DROP COLUMN "subSpeciesId";

-- AlterTable
ALTER TABLE "Species" DROP COLUMN "freeSkillProficiencies",
DROP COLUMN "freeToolProficiencyGroups",
DROP COLUMN "freeToolProficiencyIds",
DROP COLUMN "freeWeaponProficiencyGroups",
DROP COLUMN "freeWeaponProficiencyIds",
DROP COLUMN "skillProficiencyDescription",
DROP COLUMN "toolProficiencyDescription",
DROP COLUMN "weaponProficiencyDescription";

-- AlterTable
ALTER TABLE "SubSpecies" DROP COLUMN "freeSkillProficiencies",
DROP COLUMN "freeToolProficiencyGroups",
DROP COLUMN "freeToolProficiencyIds",
DROP COLUMN "freeWeaponProficiencyGroups",
DROP COLUMN "freeWeaponProficiencyIds",
DROP COLUMN "skillProficiencyDescription",
DROP COLUMN "toolProficiencyDescription",
DROP COLUMN "weaponProficiencyDescription";
