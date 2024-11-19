/*
  Warnings:

  - You are about to drop the column `equipment` on the `Background` table. All the data in the column will be lost.
  - You are about to drop the column `languageProficiencies` on the `Background` table. All the data in the column will be lost.
  - You are about to drop the column `skillProficiencies` on the `Background` table. All the data in the column will be lost.
  - You are about to drop the column `toolProficiencies` on the `Background` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Background" DROP COLUMN "equipment",
DROP COLUMN "languageProficiencies",
DROP COLUMN "skillProficiencies",
DROP COLUMN "toolProficiencies",
ADD COLUMN     "freeEquipment" JSONB[],
ADD COLUMN     "freeLanguageProficiencies" "Language"[],
ADD COLUMN     "freeSkillProficiencies" "Skill"[],
ADD COLUMN     "freeToolProficiencyGroups" "ToolGroup"[],
ADD COLUMN     "freeToolProficiencyIds" TEXT[];

-- AlterTable
ALTER TABLE "Choice" ADD COLUMN     "backgroundId" TEXT;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE SET NULL ON UPDATE CASCADE;
