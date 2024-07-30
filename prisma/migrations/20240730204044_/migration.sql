-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "cantripsKnown" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "spellsKnown" BOOLEAN NOT NULL DEFAULT false;
