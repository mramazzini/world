/*
  Warnings:

  - You are about to drop the column `abilityScores` on the `Species` table. All the data in the column will be lost.
  - You are about to drop the column `immuneTo` on the `Species` table. All the data in the column will be lost.
  - You are about to drop the column `originLanguages` on the `Species` table. All the data in the column will be lost.
  - You are about to drop the column `resistanceTo` on the `Species` table. All the data in the column will be lost.
  - You are about to drop the column `skillProficiencies` on the `Species` table. All the data in the column will be lost.
  - You are about to drop the column `toolProficiencies` on the `Species` table. All the data in the column will be lost.
  - You are about to drop the column `vulnerableTo` on the `Species` table. All the data in the column will be lost.
  - You are about to drop the column `weaponProficiencies` on the `Species` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Choice" ADD COLUMN     "speciesId" TEXT;

-- AlterTable
ALTER TABLE "Species" DROP COLUMN "abilityScores",
DROP COLUMN "immuneTo",
DROP COLUMN "originLanguages",
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
ADD COLUMN     "toolProficiencyDescription" TEXT,
ADD COLUMN     "tremorSense" INTEGER,
ADD COLUMN     "tremorSenseDescription" TEXT,
ADD COLUMN     "trueSight" INTEGER,
ADD COLUMN     "trueSightDescription" TEXT;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE SET NULL ON UPDATE CASCADE;
