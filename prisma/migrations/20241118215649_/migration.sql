/*
  Warnings:

  - You are about to drop the column `maxHp` on the `Character` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "maxHp",
ADD COLUMN     "pendingLinks" JSONB[];
