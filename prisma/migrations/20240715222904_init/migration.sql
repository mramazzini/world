/*
  Warnings:

  - Added the required column `source` to the `Feat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `Spell` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Background" ADD COLUMN     "source" TEXT NOT NULL DEFAULT 'Player''s Handbook';

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "source" TEXT NOT NULL DEFAULT 'Player''s Handbook';

-- AlterTable
ALTER TABLE "Feat" ADD COLUMN     "source" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "source" TEXT NOT NULL DEFAULT 'Player''s Handbook';

-- AlterTable
ALTER TABLE "Spell" ADD COLUMN     "source" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SubClass" ADD COLUMN     "source" TEXT NOT NULL DEFAULT 'Player''s Handbook';

-- AlterTable
ALTER TABLE "SubRace" ADD COLUMN     "source" TEXT NOT NULL DEFAULT 'Player''s Handbook';
