/*
  Warnings:

  - You are about to drop the column `postTableContent` on the `Spell` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Spell" DROP COLUMN "postTableContent",
ADD COLUMN     "postTableData" TEXT;
