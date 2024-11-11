/*
  Warnings:

  - The primary key for the `Background` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `backgroundId` on table `Character` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_backgroundId_fkey";

-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_backgroundId_fkey";

-- AlterTable
ALTER TABLE "Background" DROP CONSTRAINT "Background_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Background_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Character" ALTER COLUMN "backgroundId" SET NOT NULL,
ALTER COLUMN "backgroundId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Feature" ALTER COLUMN "backgroundId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "WorkshopItem" ADD COLUMN     "backgroundId" TEXT;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkshopItem" ADD CONSTRAINT "WorkshopItem_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE SET NULL ON UPDATE CASCADE;
