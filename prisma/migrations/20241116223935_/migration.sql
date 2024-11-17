/*
  Warnings:

  - You are about to drop the column `callbackProtocol` on the `Choice` table. All the data in the column will be lost.
  - You are about to drop the column `fetchProtocol` on the `Choice` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Choice` table. All the data in the column will be lost.
  - Added the required column `protocol` to the `Choice` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ChoiceProtocol" AS ENUM ('SET_TOOL_PROFICIENCY', 'SET_WEAPON_PROFICIENCY', 'SET_ARMOR_PROFICIENCY', 'ADD_TO_INVENTORY', 'SET_SKILL_PROFICIENCY', 'SET_SKILL_EXPERTISE', 'SET_LANGUAGE_PROFICIENCY', 'SET_SAVING_THROW_PROFICIENCY', 'SET_ABILITY_SCORE');

-- AlterTable
ALTER TABLE "Choice" DROP COLUMN "callbackProtocol",
DROP COLUMN "fetchProtocol",
DROP COLUMN "type",
ADD COLUMN     "protocol" "ChoiceProtocol" NOT NULL;

-- DropEnum
DROP TYPE "CallbackProtocol";

-- DropEnum
DROP TYPE "ChoiceFetchProtocol";

-- DropEnum
DROP TYPE "ChoiceReturnType";
