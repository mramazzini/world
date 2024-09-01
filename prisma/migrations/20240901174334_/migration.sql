/*
  Warnings:

  - You are about to drop the column `isSpellCaster` on the `SubClass` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SubClass" DROP COLUMN "isSpellCaster",
ADD COLUMN     "spellListId" INTEGER;

-- AddForeignKey
ALTER TABLE "SubClass" ADD CONSTRAINT "SubClass_spellListId_fkey" FOREIGN KEY ("spellListId") REFERENCES "SpellList"("id") ON DELETE SET NULL ON UPDATE CASCADE;
