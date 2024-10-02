-- AlterTable
ALTER TABLE "Species" RENAME CONSTRAINT "Race_pkey" TO "Species_pkey";

-- AlterTable
ALTER TABLE "SubSpecies" RENAME CONSTRAINT "RaceVariant_pkey" TO "SubSpecies_pkey";

-- RenameForeignKey
ALTER TABLE "Character" RENAME CONSTRAINT "Character_raceId_fkey" TO "Character_speciesId_fkey";

-- RenameForeignKey
ALTER TABLE "Character" RENAME CONSTRAINT "Character_subRaceId_fkey" TO "Character_subSpeciesId_fkey";

-- RenameForeignKey
ALTER TABLE "Species" RENAME CONSTRAINT "Race_userId_fkey" TO "Species_userId_fkey";

-- RenameForeignKey
ALTER TABLE "SubSpecies" RENAME CONSTRAINT "RaceVariant_baseRaceId_fkey" TO "SubSpecies_speciesId_fkey";

-- RenameForeignKey
ALTER TABLE "SubSpecies" RENAME CONSTRAINT "RaceVariant_userId_fkey" TO "SubSpecies_userId_fkey";
