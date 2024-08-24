/*
  Warnings:

  - Added the required column `sizeDescription` to the `Race` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "sizeDescription" TEXT NOT NULL;
