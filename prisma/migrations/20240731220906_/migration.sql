-- AlterTable
ALTER TABLE "SubClass" ADD COLUMN     "ritualCaster" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "ritualSpellPrepared" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "spellFocus" TEXT;
