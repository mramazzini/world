/*
  Warnings:

  - Made the column `size` on table `Creature` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Creature" ALTER COLUMN "size" SET NOT NULL;
