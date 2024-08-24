/*
  Warnings:

  - The `toolProficiencies` column on the `Race` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Race" DROP COLUMN "toolProficiencies",
ADD COLUMN     "toolProficiencies" JSONB;
