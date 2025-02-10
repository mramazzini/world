/*
  Warnings:

  - You are about to drop the column `weaponGroupProficiencies` on the `Effect` table. All the data in the column will be lost.
  - You are about to drop the `EffectToolProficiency` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EffectToolProficiency" DROP CONSTRAINT "EffectToolProficiency_effectId_fkey";

-- DropForeignKey
ALTER TABLE "EffectToolProficiency" DROP CONSTRAINT "EffectToolProficiency_toolId_fkey";

-- AlterTable
ALTER TABLE "Effect" DROP COLUMN "weaponGroupProficiencies",
ADD COLUMN     "toolProficienciesIds" TEXT[];

-- DropTable
DROP TABLE "EffectToolProficiency";
