/*
  Warnings:

  - You are about to drop the column `multiClassingId` on the `Choice` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Choice" DROP CONSTRAINT "Choice_multiClassingId_fkey";

-- AlterTable
ALTER TABLE "Choice" DROP COLUMN "multiClassingId",
ADD COLUMN     "multiClassId" TEXT;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_multiClassId_fkey" FOREIGN KEY ("multiClassId") REFERENCES "MultiClassingInfo"("classId") ON DELETE SET NULL ON UPDATE CASCADE;
