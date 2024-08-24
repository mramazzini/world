/*
  Warnings:

  - The `originLanguages` column on the `RaceVariant` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `speedDescription` to the `Race` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "speedDescription" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RaceVariant" ADD COLUMN     "age" TEXT,
ADD COLUMN     "alignment" TEXT,
ADD COLUMN     "darkvision" INTEGER,
ADD COLUMN     "darkvisionDescription" TEXT,
ADD COLUMN     "immuneTo" "DamageTypes"[],
ADD COLUMN     "resistanceTo" "DamageTypes"[],
ADD COLUMN     "sizeDescription" TEXT,
ADD COLUMN     "skillProficiencies" "Skill"[],
ADD COLUMN     "speedDescription" TEXT,
ADD COLUMN     "toolProficiencies" JSONB,
ADD COLUMN     "vulnerableTo" "DamageTypes"[],
ADD COLUMN     "weaponProficiencies" INTEGER[],
DROP COLUMN "originLanguages",
ADD COLUMN     "originLanguages" JSONB;
