/*
  Warnings:

  - You are about to drop the column `creatureId` on the `Spell` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Spell" DROP CONSTRAINT "Spell_creatureId_fkey";

-- AlterTable
ALTER TABLE "Spell" DROP COLUMN "creatureId";

-- CreateTable
CREATE TABLE "_Creature spells" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Creature spells_AB_unique" ON "_Creature spells"("A", "B");

-- CreateIndex
CREATE INDEX "_Creature spells_B_index" ON "_Creature spells"("B");

-- AddForeignKey
ALTER TABLE "_Creature spells" ADD CONSTRAINT "_Creature spells_A_fkey" FOREIGN KEY ("A") REFERENCES "Creature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Creature spells" ADD CONSTRAINT "_Creature spells_B_fkey" FOREIGN KEY ("B") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;
