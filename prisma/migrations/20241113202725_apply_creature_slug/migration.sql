/*
  Warnings:

  - Made the column `slug` on table `Creature` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Creature" ALTER COLUMN "slug" SET NOT NULL;
