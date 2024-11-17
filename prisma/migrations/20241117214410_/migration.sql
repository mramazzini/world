/*
  Warnings:

  - You are about to drop the column `abilityScores` on the `SubSpecies` table. All the data in the column will be lost.
  - You are about to drop the column `immuneTo` on the `SubSpecies` table. All the data in the column will be lost.
  - You are about to drop the column `originLanguages` on the `SubSpecies` table. All the data in the column will be lost.
  - You are about to drop the column `removedTraits` on the `SubSpecies` table. All the data in the column will be lost.
  - You are about to drop the column `resistanceTo` on the `SubSpecies` table. All the data in the column will be lost.
  - You are about to drop the column `skillProficiencies` on the `SubSpecies` table. All the data in the column will be lost.
  - You are about to drop the column `toolProficiencies` on the `SubSpecies` table. All the data in the column will be lost.
  - You are about to drop the column `vulnerableTo` on the `SubSpecies` table. All the data in the column will be lost.
  - You are about to drop the column `weaponProficiencies` on the `SubSpecies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Choice" ADD COLUMN     "subSpeciesId" TEXT;

-- AlterTable
ALTER TABLE "SubSpecies" DROP COLUMN "abilityScores",
DROP COLUMN "immuneTo",
DROP COLUMN "originLanguages",
DROP COLUMN "removedTraits",
DROP COLUMN "resistanceTo",
DROP COLUMN "skillProficiencies",
DROP COLUMN "toolProficiencies",
DROP COLUMN "vulnerableTo",
DROP COLUMN "weaponProficiencies",
ADD COLUMN     "blindSight" INTEGER,
ADD COLUMN     "blindSightDescription" TEXT,
ADD COLUMN     "burrowSpeed" INTEGER,
ADD COLUMN     "burrowSpeedDescription" TEXT,
ADD COLUMN     "freeAbilityScoreImprovements" JSONB[],
ADD COLUMN     "freeLanguages" "Language"[],
ADD COLUMN     "freeSkillProficiencies" "Skill"[],
ADD COLUMN     "freeToolProficiencyGroups" "ToolGroup"[],
ADD COLUMN     "freeToolProficiencyIds" TEXT[],
ADD COLUMN     "freeWeaponProficiencyGroups" "WeaponGroup"[],
ADD COLUMN     "freeWeaponProficiencyIds" TEXT[],
ADD COLUMN     "tremorSense" INTEGER,
ADD COLUMN     "tremorSenseDescription" TEXT,
ADD COLUMN     "trueSight" INTEGER,
ADD COLUMN     "trueSightDescription" TEXT;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_subSpeciesId_fkey" FOREIGN KEY ("subSpeciesId") REFERENCES "SubSpecies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
