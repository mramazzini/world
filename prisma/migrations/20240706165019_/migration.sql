/*
  Warnings:

  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "prepareSpellInfo" TEXT,
ADD COLUMN     "spellSlotInfo" TEXT;

-- DropTable
DROP TABLE "Item";
