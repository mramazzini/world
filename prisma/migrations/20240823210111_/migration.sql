/*
  Warnings:

  - Made the column `abilityScoreDescription` on table `Race` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Race" ALTER COLUMN "abilityScoreDescription" SET NOT NULL;
