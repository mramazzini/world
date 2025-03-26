/*
  Warnings:

  - The `levelScalingFormulas` column on the `Spell` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Spell" DROP COLUMN "levelScalingFormulas",
ADD COLUMN     "levelScalingFormulas" JSONB[];
