/*
  Warnings:

  - You are about to drop the column `damageFormula` on the `Spell` table. All the data in the column will be lost.
  - You are about to drop the column `upcastBonusFormulaBase` on the `Spell` table. All the data in the column will be lost.
  - You are about to drop the column `upcastBonusFormulaMult` on the `Spell` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "SpellScaleType" AS ENUM ('CHARACTER_LEVEL', 'SPELL_LEVEL', 'NONE');

-- AlterTable
ALTER TABLE "Spell" DROP COLUMN "damageFormula",
DROP COLUMN "upcastBonusFormulaBase",
DROP COLUMN "upcastBonusFormulaMult",
ADD COLUMN     "levelScalingFormulas" TEXT[],
ADD COLUMN     "levelScalingLevels" INTEGER[],
ADD COLUMN     "spellScaleType" "SpellScaleType" NOT NULL DEFAULT 'NONE';
