/*
  Warnings:

  - Added the required column `creatureType` to the `Race` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Race` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speed` to the `Race` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "abilityScores" "Ability"[],
ADD COLUMN     "climbDescription" TEXT,
ADD COLUMN     "climbSpeed" INTEGER,
ADD COLUMN     "creatureType" "CreatureType" NOT NULL,
ADD COLUMN     "flightDescription" TEXT,
ADD COLUMN     "flightSpeed" INTEGER,
ADD COLUMN     "languageDescription" TEXT,
ADD COLUMN     "originLanguages" "Language"[],
ADD COLUMN     "size" "Size" NOT NULL,
ADD COLUMN     "speed" INTEGER NOT NULL,
ADD COLUMN     "swimDescription" TEXT,
ADD COLUMN     "swimSpeed" INTEGER;

-- AlterTable
ALTER TABLE "RaceVariant" ADD COLUMN     "baseRaceId" INTEGER,
ADD COLUMN     "removedTraits" TEXT[],
ALTER COLUMN "creatureType" DROP NOT NULL,
ALTER COLUMN "size" DROP NOT NULL,
ALTER COLUMN "speed" DROP NOT NULL;

-- AlterTable
ALTER TABLE "RacialTraits" ADD COLUMN     "raceId" INTEGER,
ADD COLUMN     "raceVariantId" INTEGER;

-- AddForeignKey
ALTER TABLE "RaceVariant" ADD CONSTRAINT "RaceVariant_baseRaceId_fkey" FOREIGN KEY ("baseRaceId") REFERENCES "Race"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RacialTraits" ADD CONSTRAINT "RacialTraits_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RacialTraits" ADD CONSTRAINT "RacialTraits_raceVariantId_fkey" FOREIGN KEY ("raceVariantId") REFERENCES "RaceVariant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
