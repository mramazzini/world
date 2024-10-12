/*
  Warnings:

  - You are about to drop the column `passivePerception` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `passivePerceptionDescription` on the `Creature` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Creature" DROP COLUMN "passivePerception",
DROP COLUMN "passivePerceptionDescription";
