/*
  Warnings:

  - Added the required column `spellSlotsUsedSinceLastRefresh` to the `CharacterState` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CharacterState" ADD COLUMN     "spellSlotsUsedSinceLastRefresh" JSONB NOT NULL;
