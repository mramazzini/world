/*
  Warnings:

  - You are about to drop the `RacialTraits` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RacialTraits" DROP CONSTRAINT "RacialTraits_raceId_fkey";

-- DropForeignKey
ALTER TABLE "RacialTraits" DROP CONSTRAINT "RacialTraits_raceVariantId_fkey";

-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "features" JSONB[];

-- AlterTable
ALTER TABLE "RaceVariant" ADD COLUMN     "features" JSONB[];

-- DropTable
DROP TABLE "RacialTraits";
