/*
  Warnings:

  - You are about to drop the column `hitPointsFormula` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `hitpointsDescription` on the `Creature` table. All the data in the column will be lost.
  - Added the required column `hitDiceAmount` to the `Creature` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Creature" DROP COLUMN "hitPointsFormula",
DROP COLUMN "hitpointsDescription",
ADD COLUMN     "hitDiceAmount" INTEGER NOT NULL;
