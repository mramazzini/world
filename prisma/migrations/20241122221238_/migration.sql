/*
  Warnings:

  - You are about to drop the column `freeMulticlassingArmorProficiencies` on the `ClassMultiClassing` table. All the data in the column will be lost.
  - You are about to drop the column `freeMulticlassingLanguages` on the `ClassMultiClassing` table. All the data in the column will be lost.
  - You are about to drop the column `freeMulticlassingSavingThrowProficiencies` on the `ClassMultiClassing` table. All the data in the column will be lost.
  - You are about to drop the column `freeMulticlassingSkillProficiencies` on the `ClassMultiClassing` table. All the data in the column will be lost.
  - You are about to drop the column `freeMulticlassingToolGroupProficiencies` on the `ClassMultiClassing` table. All the data in the column will be lost.
  - You are about to drop the column `freeMulticlassingToolIdProficiencies` on the `ClassMultiClassing` table. All the data in the column will be lost.
  - You are about to drop the column `freeMulticlassingWeaponGroupProficiencies` on the `ClassMultiClassing` table. All the data in the column will be lost.
  - You are about to drop the column `freeMulticlassingWeaponIdProficiencies` on the `ClassMultiClassing` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ClassMultiClassing" DROP COLUMN "freeMulticlassingArmorProficiencies",
DROP COLUMN "freeMulticlassingLanguages",
DROP COLUMN "freeMulticlassingSavingThrowProficiencies",
DROP COLUMN "freeMulticlassingSkillProficiencies",
DROP COLUMN "freeMulticlassingToolGroupProficiencies",
DROP COLUMN "freeMulticlassingToolIdProficiencies",
DROP COLUMN "freeMulticlassingWeaponGroupProficiencies",
DROP COLUMN "freeMulticlassingWeaponIdProficiencies",
ADD COLUMN     "freeArmorProficiencies" "ArmorType"[],
ADD COLUMN     "freeLanguages" "Language"[],
ADD COLUMN     "freeSavingThrowProficiencies" "Ability"[],
ADD COLUMN     "freeSkillProficiencies" "Skill"[],
ADD COLUMN     "freeToolGroupProficiencies" "ToolGroup"[],
ADD COLUMN     "freeToolIdProficiencies" TEXT[],
ADD COLUMN     "freeWeaponGroupProficiencies" "WeaponGroup"[],
ADD COLUMN     "freeWeaponIdProficiencies" TEXT[];
