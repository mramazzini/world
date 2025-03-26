-- AlterTable
ALTER TABLE "Spell" ADD COLUMN     "damageFormula" TEXT,
ADD COLUMN     "savingThrow" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "savingThrowAbility" "Ability",
ADD COLUMN     "spellAttackRoll" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "upcastBonusFormulaBase" TEXT,
ADD COLUMN     "upcastBonusFormulaMult" INTEGER;
