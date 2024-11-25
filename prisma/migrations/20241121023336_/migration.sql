/*
  Warnings:

  - The `characterLog` column on the `CharacterState` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "CharacterState" DROP COLUMN "characterLog",
ADD COLUMN     "characterLog" JSONB[];
