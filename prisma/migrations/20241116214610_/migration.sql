/*
  Warnings:

  - You are about to drop the column `options` on the `Choice` table. All the data in the column will be lost.
  - Added the required column `fetchParams` to the `Choice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fetchProtocol` to the `Choice` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ChoiceFetchProtocol" AS ENUM ('ABILITY_SCORE', 'SKILL', 'TOOL_ID', 'WEAPON_ID', 'WEAPON_GROUP', 'ARMORTYPE', 'ARMOR_ID', 'ITEM_ID', 'SPELL_ID', 'SAVING_THROW');

-- AlterTable
ALTER TABLE "Choice" DROP COLUMN "options",
ADD COLUMN     "fetchParams" JSONB NOT NULL,
ADD COLUMN     "fetchProtocol" "ChoiceFetchProtocol" NOT NULL;
