/*
  Warnings:

  - You are about to drop the `SpellScroll` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SpellScroll" DROP CONSTRAINT "SpellScroll_itemId_fkey";

-- DropForeignKey
ALTER TABLE "SpellScroll" DROP CONSTRAINT "SpellScroll_spellId_fkey";

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "spellId" INTEGER;

-- DropTable
DROP TABLE "SpellScroll";

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE SET NULL ON UPDATE CASCADE;
