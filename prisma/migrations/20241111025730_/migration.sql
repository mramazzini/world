/*
  Warnings:

  - The primary key for the `SubSpecies` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_subSpeciesId_fkey";

-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_subSpeciesId_fkey";

-- AlterTable
ALTER TABLE "Character" ALTER COLUMN "subSpeciesId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Feature" ALTER COLUMN "subSpeciesId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "SubSpecies" DROP CONSTRAINT "SubSpecies_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "SubSpecies_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_subSpeciesId_fkey" FOREIGN KEY ("subSpeciesId") REFERENCES "SubSpecies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_subSpeciesId_fkey" FOREIGN KEY ("subSpeciesId") REFERENCES "SubSpecies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
