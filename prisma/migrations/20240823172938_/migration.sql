/*
  Warnings:

  - Added the required column `age` to the `Race` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "age" TEXT NOT NULL;
