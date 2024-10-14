/*
  Warnings:

  - You are about to drop the column `alignment` on the `Creature` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "Alignment" ADD VALUE 'UNALIGNED';

-- AlterTable
ALTER TABLE "Creature" DROP COLUMN "alignment",
ADD COLUMN     "alignmentDescription" TEXT,
ADD COLUMN     "alignmentOptions" "Alignment"[];
