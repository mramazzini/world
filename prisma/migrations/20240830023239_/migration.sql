/*
  Warnings:

  - You are about to drop the column `spellScrollId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `attackBonus` on the `SpellScroll` table. All the data in the column will be lost.
  - You are about to drop the column `rarity` on the `SpellScroll` table. All the data in the column will be lost.
  - You are about to drop the column `saveDC` on the `SpellScroll` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[itemId]` on the table `SpellScroll` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `itemId` to the `SpellScroll` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_spellScrollId_fkey";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "spellScrollId";

-- AlterTable
ALTER TABLE "SpellScroll" DROP COLUMN "attackBonus",
DROP COLUMN "rarity",
DROP COLUMN "saveDC",
ADD COLUMN     "itemId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "SpellScroll_itemId_key" ON "SpellScroll"("itemId");

-- AddForeignKey
ALTER TABLE "SpellScroll" ADD CONSTRAINT "SpellScroll_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
