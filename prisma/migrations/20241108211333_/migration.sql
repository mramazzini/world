/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `WorkshopItem` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "WorkshopProtocol" ADD VALUE 'FEATURE';

-- AlterTable
ALTER TABLE "WorkshopItem" DROP COLUMN "updatedAt",
ADD COLUMN     "lastEditIsoString" TEXT;
