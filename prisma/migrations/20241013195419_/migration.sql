-- AlterTable
ALTER TABLE "Creature" ADD COLUMN     "legendaryActionAmount" INTEGER,
ADD COLUMN     "legendaryActions" JSONB[];
