/*
  Warnings:

  - You are about to drop the column `itemId` on the `SpellScroll` table. All the data in the column will be lost.
  - Added the required column `spellScrollId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SpellScroll" DROP CONSTRAINT "SpellScroll_itemId_fkey";

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "spellScrollId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SpellScroll" DROP COLUMN "itemId";

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_spellScrollId_fkey" FOREIGN KEY ("spellScrollId") REFERENCES "SpellScroll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
