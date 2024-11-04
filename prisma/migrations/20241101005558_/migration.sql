-- AlterTable
ALTER TABLE "Feature" ADD COLUMN     "spellCastingClassId" INTEGER;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_spellCastingClassId_fkey" FOREIGN KEY ("spellCastingClassId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;
