/*
  Warnings:

  - Added the required column `hitPointsFormula` to the `Creature` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Creature" ADD COLUMN     "hitPointsFormula" TEXT NOT NULL;
