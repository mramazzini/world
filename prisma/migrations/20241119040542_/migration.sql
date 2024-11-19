/*
  Warnings:

  - Changed the type of `values` on the `CharacterChoiceStatus` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CharacterChoiceStatus" DROP COLUMN "values",
ADD COLUMN     "values" JSONB NOT NULL;
