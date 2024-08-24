/*
  Warnings:

  - Changed the type of `abilityScores` on the `Race` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `abilityScores` on the `RaceVariant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Race" DROP COLUMN "abilityScores",
ADD COLUMN     "abilityScores" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "RaceVariant" DROP COLUMN "abilityScores",
ADD COLUMN     "abilityScores" JSONB NOT NULL;
