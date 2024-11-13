/*
  Warnings:

  - Made the column `slug` on table `SpellList` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "SpellList" ALTER COLUMN "slug" SET NOT NULL;
