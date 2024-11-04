-- AlterTable
ALTER TABLE "Feature" ADD COLUMN     "spellCastingSubclassId" INTEGER;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_spellCastingSubclassId_fkey" FOREIGN KEY ("spellCastingSubclassId") REFERENCES "SubClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;
