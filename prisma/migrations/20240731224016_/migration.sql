-- AlterTable
ALTER TABLE "CustomField" ADD COLUMN     "subClassId" INTEGER;

-- AddForeignKey
ALTER TABLE "CustomField" ADD CONSTRAINT "CustomField_subClassId_fkey" FOREIGN KEY ("subClassId") REFERENCES "SubClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;
