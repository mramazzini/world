/*
  Warnings:

  - The `skillProficiencies` column on the `Race` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "skillProficiencyDescription" TEXT,
DROP COLUMN "skillProficiencies",
ADD COLUMN     "skillProficiencies" JSONB;
