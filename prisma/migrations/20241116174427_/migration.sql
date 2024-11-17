/*
  Warnings:

  - Changed the type of `type` on the `Choice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ChoiceType" AS ENUM ('ABILITY_SCORE', 'SKILL', 'TOOL', 'WEAPON', 'ARMOR', 'ITEM', 'SPELL', 'SAVING_THROW');

-- AlterTable
ALTER TABLE "Choice" DROP COLUMN "type",
ADD COLUMN     "type" "ChoiceType" NOT NULL;
