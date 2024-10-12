/*
  Warnings:

  - Added the required column `size` to the `Creature` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Creature" ADD COLUMN     "alignment" "Alignment",
ADD COLUMN     "size" "Size" NOT NULL;
