-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('COMMON', 'UNCOMMON', 'RARE', 'VERY_RARE', 'LEGENDARY', 'ARTIFACT');

-- CreateTable
CREATE TABLE "SpellScroll" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rarity" "Rarity" NOT NULL,
    "level" INTEGER NOT NULL,
    "saveDC" INTEGER NOT NULL,
    "attackBonus" INTEGER NOT NULL,
    "spellId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "itemId" INTEGER,

    CONSTRAINT "SpellScroll_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SpellScroll" ADD CONSTRAINT "SpellScroll_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellScroll" ADD CONSTRAINT "SpellScroll_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;
