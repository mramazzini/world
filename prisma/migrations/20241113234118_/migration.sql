/*
  Warnings:

  - You are about to drop the column `backgroundId` on the `WorkshopItem` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[workshopItemId]` on the table `Background` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[workshopId]` on the table `SubClass` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "WorkshopItem" DROP CONSTRAINT "WorkshopItem_backgroundId_fkey";

-- AlterTable
ALTER TABLE "Background" ADD COLUMN     "workshopItemId" TEXT;

-- AlterTable
ALTER TABLE "SubClass" ADD COLUMN     "workshopId" TEXT;

-- AlterTable
ALTER TABLE "WorkshopItem" DROP COLUMN "backgroundId";

-- CreateIndex
CREATE UNIQUE INDEX "Background_workshopItemId_key" ON "Background"("workshopItemId");

-- CreateIndex
CREATE UNIQUE INDEX "SubClass_workshopId_key" ON "SubClass"("workshopId");

-- AddForeignKey
ALTER TABLE "SubClass" ADD CONSTRAINT "SubClass_workshopId_fkey" FOREIGN KEY ("workshopId") REFERENCES "WorkshopItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Background" ADD CONSTRAINT "Background_workshopItemId_fkey" FOREIGN KEY ("workshopItemId") REFERENCES "WorkshopItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
