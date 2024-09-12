/*
  Warnings:

  - The `equipmentDescription` column on the `Background` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Background" DROP COLUMN "equipmentDescription",
ADD COLUMN     "equipmentDescription" TEXT[];
