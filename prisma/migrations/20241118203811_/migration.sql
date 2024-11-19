/*
  Warnings:

  - You are about to drop the column `pendingChoices` on the `Character` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "pendingChoices",
ADD COLUMN     "itemsInitialized" BOOLEAN NOT NULL DEFAULT false;
