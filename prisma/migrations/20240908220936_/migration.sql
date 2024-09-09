/*
  Warnings:

  - The `skillProficiencies` column on the `RaceVariant` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "RaceVariant" ADD COLUMN     "skillProficiencyDescription" TEXT,
DROP COLUMN "skillProficiencies",
ADD COLUMN     "skillProficiencies" JSONB;
