/*
  Warnings:

  - The `spellAttackRoll` column on the `Spell` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "SpellAttackRollType" AS ENUM ('RANGED', 'MELEE');

-- AlterTable
ALTER TABLE "Spell" DROP COLUMN "spellAttackRoll",
ADD COLUMN     "spellAttackRoll" "SpellAttackRollType";
