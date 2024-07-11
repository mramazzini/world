/*
  Warnings:

  - You are about to drop the `CustomField` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CustomField" DROP CONSTRAINT "CustomField_classId_fkey";

-- AlterTable
ALTER TABLE "Feature" ADD COLUMN     "options" TEXT[],
ADD COLUMN     "table" TEXT[];

-- DropTable
DROP TABLE "CustomField";
