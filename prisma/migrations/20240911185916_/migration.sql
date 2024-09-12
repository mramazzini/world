/*
  Warnings:

  - Added the required column `suggestedCharacteristics` to the `Background` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Background" ADD COLUMN     "bonds" TEXT[],
ADD COLUMN     "flaws" TEXT[],
ADD COLUMN     "ideals" TEXT[],
ADD COLUMN     "suggestedCharacteristics" TEXT NOT NULL,
ADD COLUMN     "traits" TEXT[];
