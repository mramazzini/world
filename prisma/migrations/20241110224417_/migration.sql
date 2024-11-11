/*
  Warnings:

  - A unique constraint covering the columns `[workshopId]` on the table `Feat` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Feat" ADD COLUMN     "workshopId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Feat_workshopId_key" ON "Feat"("workshopId");
