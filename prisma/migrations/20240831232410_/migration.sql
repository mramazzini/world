/*
  Warnings:

  - Added the required column `description` to the `SpellList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flavorText` to the `SpellList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "spellListDescription" TEXT;

-- AlterTable
ALTER TABLE "SpellList" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "flavorText" VARCHAR(200) NOT NULL;
