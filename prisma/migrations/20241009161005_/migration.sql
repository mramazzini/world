/*
  Warnings:

  - You are about to drop the column `proficiencyBonus` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `proficiencyBonusDescription` on the `Creature` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Creature" DROP COLUMN "proficiencyBonus",
DROP COLUMN "proficiencyBonusDescription";
