/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Character` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAtIsoString" TEXT;
