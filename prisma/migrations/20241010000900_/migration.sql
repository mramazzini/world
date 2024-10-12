/*
  Warnings:

  - You are about to drop the `_Creature spells` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Creature spells" DROP CONSTRAINT "_Creature spells_A_fkey";

-- DropForeignKey
ALTER TABLE "_Creature spells" DROP CONSTRAINT "_Creature spells_B_fkey";

-- DropTable
DROP TABLE "_Creature spells";

-- CreateTable
CREATE TABLE "_CreaturePrepares" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CreatureFreelyCasts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CreaturePrepares_AB_unique" ON "_CreaturePrepares"("A", "B");

-- CreateIndex
CREATE INDEX "_CreaturePrepares_B_index" ON "_CreaturePrepares"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CreatureFreelyCasts_AB_unique" ON "_CreatureFreelyCasts"("A", "B");

-- CreateIndex
CREATE INDEX "_CreatureFreelyCasts_B_index" ON "_CreatureFreelyCasts"("B");

-- AddForeignKey
ALTER TABLE "_CreaturePrepares" ADD CONSTRAINT "_CreaturePrepares_A_fkey" FOREIGN KEY ("A") REFERENCES "Creature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreaturePrepares" ADD CONSTRAINT "_CreaturePrepares_B_fkey" FOREIGN KEY ("B") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreatureFreelyCasts" ADD CONSTRAINT "_CreatureFreelyCasts_A_fkey" FOREIGN KEY ("A") REFERENCES "Creature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreatureFreelyCasts" ADD CONSTRAINT "_CreatureFreelyCasts_B_fkey" FOREIGN KEY ("B") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;
