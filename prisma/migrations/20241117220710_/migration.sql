-- AlterTable
ALTER TABLE "Choice" ADD COLUMN     "speciesId" TEXT,
ADD COLUMN     "subSpeciesId" TEXT;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_subSpeciesId_fkey" FOREIGN KEY ("subSpeciesId") REFERENCES "SubSpecies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
