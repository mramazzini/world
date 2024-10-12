-- AlterTable
ALTER TABLE "Creature" ALTER COLUMN "armorClassDescription" DROP NOT NULL,
ALTER COLUMN "hitpointsDescription" DROP NOT NULL,
ALTER COLUMN "speedDescription" DROP NOT NULL,
ALTER COLUMN "size" DROP NOT NULL,
ALTER COLUMN "hitPointsFormula" DROP NOT NULL;
