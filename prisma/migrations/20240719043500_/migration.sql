/*
  Warnings:

  - Added the required column `flavorText` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flavorText` to the `SubClass` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "flavorText" VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE "SubClass" ADD COLUMN     "flavorText" VARCHAR(100) NOT NULL;
