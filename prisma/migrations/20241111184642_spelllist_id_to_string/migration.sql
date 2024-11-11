/*
  Warnings:

  - The primary key for the `SpellList` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_spellListId_fkey";

-- DropForeignKey
ALTER TABLE "SubClass" DROP CONSTRAINT "SubClass_spellListId_fkey";

-- DropForeignKey
ALTER TABLE "_SpellToSpellList" DROP CONSTRAINT "_SpellToSpellList_B_fkey";

-- AlterTable
ALTER TABLE "Class" ALTER COLUMN "spellListId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "SpellList" DROP CONSTRAINT "SpellList_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "SpellList_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "SpellList_id_seq";

-- AlterTable
ALTER TABLE "SubClass" ALTER COLUMN "spellListId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_SpellToSpellList" ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_spellListId_fkey" FOREIGN KEY ("spellListId") REFERENCES "SpellList"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubClass" ADD CONSTRAINT "SubClass_spellListId_fkey" FOREIGN KEY ("spellListId") REFERENCES "SpellList"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SpellToSpellList" ADD CONSTRAINT "_SpellToSpellList_B_fkey" FOREIGN KEY ("B") REFERENCES "SpellList"("id") ON DELETE CASCADE ON UPDATE CASCADE;
