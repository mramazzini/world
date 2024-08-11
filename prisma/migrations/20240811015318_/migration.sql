/*
  Warnings:

  - Added the required column `languageChoiceCount` to the `Background` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillChoiceCount` to the `Background` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Background" ADD COLUMN     "languageChoiceCount" INTEGER NOT NULL,
ADD COLUMN     "skillChoiceCount" INTEGER NOT NULL;
