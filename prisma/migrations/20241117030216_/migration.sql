/*
  Warnings:

  - The `freeItemIds` column on the `Class` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Class" DROP COLUMN "freeItemIds",
ADD COLUMN     "freeItemIds" JSONB[];
