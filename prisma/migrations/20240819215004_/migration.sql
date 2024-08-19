/*
  Warnings:

  - You are about to drop the column `abilityScores` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `customLanguages` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `originLanguages` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `speed` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the `SubRace` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Race` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flavortext` to the `Race` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CreatureType" AS ENUM ('ABERRATION', 'BEAST', 'CELESTIAL', 'CONSTRUCT', 'DRAGON', 'ELEMENTAL', 'FEY', 'FIEND', 'GIANT', 'HUMANOID', 'MONSTROSITY', 'OOZE', 'PLANT', 'UNDEAD', 'NULL');

-- DropForeignKey
ALTER TABLE "SubRace" DROP CONSTRAINT "SubRace_raceId_fkey";

-- DropForeignKey
ALTER TABLE "SubRace" DROP CONSTRAINT "SubRace_userId_fkey";

-- AlterTable
ALTER TABLE "Race" DROP COLUMN "abilityScores",
DROP COLUMN "customLanguages",
DROP COLUMN "originLanguages",
DROP COLUMN "size",
DROP COLUMN "speed",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "flavortext" VARCHAR(200) NOT NULL,
ALTER COLUMN "source" DROP DEFAULT;

-- DropTable
DROP TABLE "SubRace";

-- CreateTable
CREATE TABLE "RaceVariant" (
    "id" SERIAL NOT NULL,
    "srd" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "flavortext" VARCHAR(200) NOT NULL,
    "source" TEXT NOT NULL,
    "abilityScores" "Ability"[],
    "creatureType" "CreatureType" NOT NULL,
    "size" "Size" NOT NULL,
    "speed" INTEGER NOT NULL,
    "flightSpeed" INTEGER,
    "swimSpeed" INTEGER,
    "climbSpeed" INTEGER,
    "flightDescription" TEXT,
    "swimDescription" TEXT,
    "climbDescription" TEXT,
    "originLanguages" "Language"[],
    "languageDescription" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RaceVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RacialTraits" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "extendedTable" JSONB[],
    "options" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RacialTraits_pkey" PRIMARY KEY ("id")
);
