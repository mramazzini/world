/*
  Warnings:

  - The primary key for the `Species` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_speciesId_fkey";

-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_speciesId_fkey";

-- DropForeignKey
ALTER TABLE "SubSpecies" DROP CONSTRAINT "SubSpecies_speciesId_fkey";

-- AlterTable
ALTER TABLE "Character" ALTER COLUMN "speciesId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Feature" ALTER COLUMN "speciesId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Species" DROP CONSTRAINT "Species_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Species_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Race_id_seq";

-- AlterTable
ALTER TABLE "SubSpecies" ALTER COLUMN "speciesId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubSpecies" ADD CONSTRAINT "SubSpecies_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
