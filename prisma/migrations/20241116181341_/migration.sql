/*
  Warnings:

  - The values [ITEM_ID] on the enum `ChoiceReturnType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ChoiceReturnType_new" AS ENUM ('ABILITY_SCORE', 'ABILITY_SCORE_VALUE', 'SKILL', 'TOOL_ID', 'WEAPON_ID', 'ARMORTYPE', 'ITEM_QUANTITY', 'SPELL_ID', 'SAVING_THROW');
ALTER TABLE "Choice" ALTER COLUMN "type" TYPE "ChoiceReturnType_new" USING ("type"::text::"ChoiceReturnType_new");
ALTER TYPE "ChoiceReturnType" RENAME TO "ChoiceReturnType_old";
ALTER TYPE "ChoiceReturnType_new" RENAME TO "ChoiceReturnType";
DROP TYPE "ChoiceReturnType_old";
COMMIT;
