/*
  Warnings:

  - Added the required column `damageType` to the `Spell` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Spell" ADD COLUMN     "aoe" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "conditions" TEXT[],
ADD COLUMN     "damageType" "DamageTypes" NOT NULL,
ADD COLUMN     "saveRequired" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tags" TEXT[];
