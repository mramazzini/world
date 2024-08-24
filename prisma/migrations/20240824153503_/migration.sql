/*
  Warnings:

  - Made the column `baseRaceId` on table `RaceVariant` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "RaceVariant" DROP CONSTRAINT "RaceVariant_baseRaceId_fkey";

-- AlterTable
ALTER TABLE "RaceVariant" ALTER COLUMN "baseRaceId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "RaceVariant" ADD CONSTRAINT "RaceVariant_baseRaceId_fkey" FOREIGN KEY ("baseRaceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
