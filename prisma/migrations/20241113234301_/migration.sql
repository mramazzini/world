/*
  Warnings:

  - Made the column `classId` on table `SubClass` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "SubClass" DROP CONSTRAINT "SubClass_classId_fkey";

-- AlterTable
ALTER TABLE "SubClass" ALTER COLUMN "classId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "SubClass" ADD CONSTRAINT "SubClass_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
