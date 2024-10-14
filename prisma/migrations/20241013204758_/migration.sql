/*
  Warnings:

  - You are about to drop the column `spellAttackBonus` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `spellSaveDC` on the `Creature` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Creature" DROP COLUMN "spellAttackBonus",
DROP COLUMN "spellSaveDC";
