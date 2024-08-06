/*
  Warnings:

  - You are about to drop the column `lvl` on the `Spell` table. All the data in the column will be lost.
  - Added the required column `level` to the `Spell` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Spell" DROP COLUMN "lvl",
ADD COLUMN     "level" INTEGER NOT NULL;
