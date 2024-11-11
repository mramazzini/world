/*
  Warnings:

  - The primary key for the `Creature` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CreatureLimitedSpell` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "CreatureLimitedSpell" DROP CONSTRAINT "CreatureLimitedSpell_creatureId_fkey";

-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_creatureId_fkey";

-- DropForeignKey
ALTER TABLE "_CreatureFreelyCasts" DROP CONSTRAINT "_CreatureFreelyCasts_A_fkey";

-- DropForeignKey
ALTER TABLE "_CreaturePrepares" DROP CONSTRAINT "_CreaturePrepares_A_fkey";

-- DropForeignKey
ALTER TABLE "_CreatureWields" DROP CONSTRAINT "_CreatureWields_A_fkey";

-- AlterTable
ALTER TABLE "Creature" DROP CONSTRAINT "Creature_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Creature_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Creature_id_seq";

-- AlterTable
ALTER TABLE "CreatureLimitedSpell" DROP CONSTRAINT "CreatureLimitedSpell_pkey",
ALTER COLUMN "creatureId" SET DATA TYPE TEXT,
ADD CONSTRAINT "CreatureLimitedSpell_pkey" PRIMARY KEY ("creatureId", "spellId");

-- AlterTable
ALTER TABLE "Feature" ALTER COLUMN "creatureId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_CreatureFreelyCasts" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_CreaturePrepares" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_CreatureWields" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_creatureId_fkey" FOREIGN KEY ("creatureId") REFERENCES "Creature"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreatureLimitedSpell" ADD CONSTRAINT "CreatureLimitedSpell_creatureId_fkey" FOREIGN KEY ("creatureId") REFERENCES "Creature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreatureWields" ADD CONSTRAINT "_CreatureWields_A_fkey" FOREIGN KEY ("A") REFERENCES "Creature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreaturePrepares" ADD CONSTRAINT "_CreaturePrepares_A_fkey" FOREIGN KEY ("A") REFERENCES "Creature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreatureFreelyCasts" ADD CONSTRAINT "_CreatureFreelyCasts_A_fkey" FOREIGN KEY ("A") REFERENCES "Creature"("id") ON DELETE CASCADE ON UPDATE CASCADE;
