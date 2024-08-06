/*
  Warnings:

  - Added the required column `castingTime` to the `Spell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `concentration` to the `Spell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Spell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `material` to the `Spell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `range` to the `Spell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ritual` to the `Spell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `somatic` to the `Spell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verbal` to the `Spell` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "spellListId" INTEGER;

-- AlterTable
ALTER TABLE "Spell" ADD COLUMN     "castingTime" TEXT NOT NULL,
ADD COLUMN     "concentration" BOOLEAN NOT NULL,
ADD COLUMN     "duration" TEXT NOT NULL,
ADD COLUMN     "extendedTable" JSONB[],
ADD COLUMN     "material" BOOLEAN NOT NULL,
ADD COLUMN     "materialCost" TEXT,
ADD COLUMN     "range" TEXT NOT NULL,
ADD COLUMN     "ritual" BOOLEAN NOT NULL,
ADD COLUMN     "somatic" BOOLEAN NOT NULL,
ADD COLUMN     "verbal" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "SpellListToSpell" (
    "spellListId" INTEGER NOT NULL,
    "spellId" INTEGER NOT NULL,

    CONSTRAINT "SpellListToSpell_pkey" PRIMARY KEY ("spellListId","spellId")
);

-- CreateTable
CREATE TABLE "SpellList" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SpellList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_spellListId_fkey" FOREIGN KEY ("spellListId") REFERENCES "SpellList"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellListToSpell" ADD CONSTRAINT "SpellListToSpell_spellListId_fkey" FOREIGN KEY ("spellListId") REFERENCES "SpellList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellListToSpell" ADD CONSTRAINT "SpellListToSpell_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
