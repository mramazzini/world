/*
  Warnings:

  - You are about to drop the column `stateId` on the `Character` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Character_stateId_key";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "stateId";
