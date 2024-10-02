/*
  Warnings:

  - You are about to drop the column `raceId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `subRaceId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the `Race` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RaceVariant` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `speciesId` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
ALTER TABLE "Race" RENAME TO "Species";

-- DropTable
ALTER TABLE "RaceVariant" RENAME TO "SubSpecies";

ALTER TABLE "SubSpecies" RENAME COLUMN "baseRaceId" TO "speciesId";

-- AlterTable
ALTER TABLE "Character" RENAME COLUMN "raceId" TO "speciesId";
ALTER TABLE "Character" RENAME COLUMN "subRaceId" TO "subSpeciesId";



