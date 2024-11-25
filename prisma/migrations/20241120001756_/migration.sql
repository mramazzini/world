/*
  Warnings:

  - You are about to drop the column `fufilled` on the `CharacterChoiceStatus` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CharacterChoiceStatus" DROP COLUMN "fufilled",
ADD COLUMN     "processed" BOOLEAN NOT NULL DEFAULT false;
