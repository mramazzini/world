/*
  Warnings:

  - You are about to drop the column `skillProf` on the `Background` table. All the data in the column will be lost.
  - You are about to drop the column `toolProf` on the `Background` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Background" DROP COLUMN "skillProf",
DROP COLUMN "toolProf",
ADD COLUMN     "skillProficiencies" "Skill"[],
ADD COLUMN     "toolProficiencies" TEXT[];
