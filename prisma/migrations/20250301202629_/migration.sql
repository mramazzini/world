/*
  Warnings:

  - You are about to drop the column `tags` on the `Spell` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "SpellScaleResultType" AS ENUM ('DAMAGE', 'TARGETS', 'DURATION', 'NONE');

-- AlterTable
ALTER TABLE "Spell" DROP COLUMN "tags",
ADD COLUMN     "spellScaleResultType" "SpellScaleResultType" NOT NULL DEFAULT 'NONE';
