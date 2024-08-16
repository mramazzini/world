/*
  Warnings:

  - You are about to drop the column `backgroundId` on the `Feature` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_backgroundId_fkey";

-- AlterTable
ALTER TABLE "Feature" DROP COLUMN "backgroundId";

-- CreateTable
CREATE TABLE "BackgroundFeature" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "extendedTable" JSONB[],
    "options" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "backgroundId" INTEGER,

    CONSTRAINT "BackgroundFeature_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BackgroundFeature" ADD CONSTRAINT "BackgroundFeature_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE SET NULL ON UPDATE CASCADE;
