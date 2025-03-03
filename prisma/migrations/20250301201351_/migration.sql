/*
  Warnings:

  - You are about to drop the column `aoe` on the `Spell` table. All the data in the column will be lost.
  - You are about to drop the column `conditions` on the `Spell` table. All the data in the column will be lost.
  - The `tags` column on the `Spell` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "SpellTags" AS ENUM ('RITUAL', 'CONCENTRATION', 'AOE', 'DAMAGE', 'HEALING', 'BUFF', 'DEBUFF', 'CONTROL', 'SUMMON', 'UTILITY', 'EXPLORATION', 'SOCIAL', 'COMBAT');

-- CreateEnum
CREATE TYPE "SpellTargetType" AS ENUM ('SELF', 'TOUCH', 'RANGE', 'AREA', 'LINE', 'CONE', 'SPHERE', 'CUBE', 'CYLINDER', 'WALL', 'OTHER');

-- AlterTable
ALTER TABLE "Spell" DROP COLUMN "aoe",
DROP COLUMN "conditions",
ADD COLUMN     "spellTargetMaxAmount" INTEGER,
ADD COLUMN     "spellTargetType" "SpellTargetType" NOT NULL DEFAULT 'SELF',
DROP COLUMN "tags",
ADD COLUMN     "tags" "SpellTags"[];
