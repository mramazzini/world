/*
  Warnings:

  - Made the column `challengeRating` on table `Creature` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Creature" ALTER COLUMN "challengeRating" SET NOT NULL;
