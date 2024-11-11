/*
  Warnings:

  - The primary key for the `CreatureLimitedSpell` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Spell` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "CreatureLimitedSpell" DROP CONSTRAINT "CreatureLimitedSpell_spellId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_spellId_fkey";

-- DropForeignKey
ALTER TABLE "_CreatureFreelyCasts" DROP CONSTRAINT "_CreatureFreelyCasts_B_fkey";

-- DropForeignKey
ALTER TABLE "_CreaturePrepares" DROP CONSTRAINT "_CreaturePrepares_B_fkey";

-- DropForeignKey
ALTER TABLE "_SpellToSpellList" DROP CONSTRAINT "_SpellToSpellList_A_fkey";

-- AlterTable
ALTER TABLE "CreatureLimitedSpell" DROP CONSTRAINT "CreatureLimitedSpell_pkey",
ALTER COLUMN "spellId" SET DATA TYPE TEXT,
ADD CONSTRAINT "CreatureLimitedSpell_pkey" PRIMARY KEY ("creatureId", "spellId");

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "spellId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Spell" DROP CONSTRAINT "Spell_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Spell_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Spell_id_seq";

-- AlterTable
ALTER TABLE "_CreatureFreelyCasts" ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_CreaturePrepares" ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_SpellToSpellList" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreatureLimitedSpell" ADD CONSTRAINT "CreatureLimitedSpell_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SpellToSpellList" ADD CONSTRAINT "_SpellToSpellList_A_fkey" FOREIGN KEY ("A") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreaturePrepares" ADD CONSTRAINT "_CreaturePrepares_B_fkey" FOREIGN KEY ("B") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreatureFreelyCasts" ADD CONSTRAINT "_CreatureFreelyCasts_B_fkey" FOREIGN KEY ("B") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;
