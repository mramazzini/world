-- AlterTable
ALTER TABLE "Background" ADD COLUMN     "srd" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "srd" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "srd" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Spell" ADD COLUMN     "srd" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "SubClass" ADD COLUMN     "srd" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "SubRace" ADD COLUMN     "srd" BOOLEAN NOT NULL DEFAULT false;
