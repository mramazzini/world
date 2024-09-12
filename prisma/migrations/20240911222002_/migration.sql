/*
  Warnings:

  - The `weaponProficiencies` column on the `Race` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "weaponProficiencyDescription" TEXT,
DROP COLUMN "weaponProficiencies",
ADD COLUMN     "weaponProficiencies" JSONB;
