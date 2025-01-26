/*
  Warnings:

  - You are about to drop the column `acBonus` on the `Effect` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Effect" DROP COLUMN "acBonus",
ADD COLUMN     "acBonusFormula" TEXT;
