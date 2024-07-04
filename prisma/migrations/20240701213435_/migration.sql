/*
  Warnings:

  - The `savingThrows` column on the `Class` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `abilityScores` column on the `Race` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Ability" AS ENUM ('STR', 'CON', 'DEX', 'INT', 'WIS', 'CHA');

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "savingThrows",
ADD COLUMN     "savingThrows" "Ability"[];

-- AlterTable
ALTER TABLE "Race" DROP COLUMN "abilityScores",
ADD COLUMN     "abilityScores" "Ability"[];

-- DropEnum
DROP TYPE "AbilityScore";
