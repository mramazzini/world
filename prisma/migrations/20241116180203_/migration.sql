/*
  Warnings:

  - Added the required column `armorProficiencyDescription` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `savingThrowDescription` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillDescription` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toolProficiencyDescription` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weaponProficiencyDescription` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "armorProficiencyDescription" TEXT NOT NULL,
ADD COLUMN     "itemDescription" TEXT[],
ADD COLUMN     "savingThrowDescription" TEXT NOT NULL,
ADD COLUMN     "skillDescription" TEXT NOT NULL,
ADD COLUMN     "toolProficiencyDescription" TEXT NOT NULL,
ADD COLUMN     "weaponProficiencyDescription" TEXT NOT NULL;
