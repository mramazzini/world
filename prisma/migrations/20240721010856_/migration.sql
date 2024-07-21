/*
  Warnings:

  - You are about to drop the column `spells` on the `SubClass` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Feature" ADD COLUMN     "backgroundId" INTEGER;

-- AlterTable
ALTER TABLE "SubClass" DROP COLUMN "spells";

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE SET NULL ON UPDATE CASCADE;
