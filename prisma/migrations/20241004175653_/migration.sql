/*
  Warnings:

  - Added the required column `prereqDescription` to the `Feat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feat" ADD COLUMN     "prereqDescription" TEXT NOT NULL;
