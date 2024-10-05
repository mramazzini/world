/*
  Warnings:

  - Added the required column `flavorText` to the `Feat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feat" ADD COLUMN     "flavorText" VARCHAR(200) NOT NULL;
