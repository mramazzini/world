/*
  Warnings:

  - The `cantripsKnown` column on the `Class` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `spellsKnown` column on the `Class` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Class" DROP COLUMN "cantripsKnown",
ADD COLUMN     "cantripsKnown" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "spellsKnown",
ADD COLUMN     "spellsKnown" INTEGER NOT NULL DEFAULT 0;
