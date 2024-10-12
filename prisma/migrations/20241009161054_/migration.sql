/*
  Warnings:

  - Added the required column `creatureType` to the `Creature` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Creature" ADD COLUMN     "creatureType" "CreatureType" NOT NULL;
