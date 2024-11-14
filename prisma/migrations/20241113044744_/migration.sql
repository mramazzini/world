/*
  Warnings:

  - A unique constraint covering the columns `[workshopId]` on the table `Item` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "workshopId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Item_workshopId_key" ON "Item"("workshopId");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_workshopId_fkey" FOREIGN KEY ("workshopId") REFERENCES "WorkshopItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
