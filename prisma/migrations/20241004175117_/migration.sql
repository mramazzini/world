/*
  Warnings:

  - Added the required column `prerequisites` to the `Feat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feat" ADD COLUMN     "prerequisites" JSONB NOT NULL;
