/*
  Warnings:

  - The primary key for the `CreatureLimitedSpell` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `CreatureLimitedSpell` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CreatureLimitedSpell" DROP CONSTRAINT "CreatureLimitedSpell_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "CreatureLimitedSpell_pkey" PRIMARY KEY ("creatureId", "spellId");
