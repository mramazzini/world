/*
  Warnings:

  - Made the column `casterTypeId` on table `Class` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_casterTypeId_fkey";

-- AlterTable
ALTER TABLE "Class" ALTER COLUMN "casterTypeId" SET NOT NULL,
ALTER COLUMN "casterTypeId" SET DEFAULT 1;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_casterTypeId_fkey" FOREIGN KEY ("casterTypeId") REFERENCES "CasterType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
