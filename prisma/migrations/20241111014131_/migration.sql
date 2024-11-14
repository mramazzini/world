/*
  Warnings:

  - A unique constraint covering the columns `[workshopId]` on the table `Feature` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Feature" ADD COLUMN     "workshopId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Feature_workshopId_key" ON "Feature"("workshopId");

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_workshopId_fkey" FOREIGN KEY ("workshopId") REFERENCES "WorkshopItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feat" ADD CONSTRAINT "Feat_workshopId_fkey" FOREIGN KEY ("workshopId") REFERENCES "WorkshopItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
