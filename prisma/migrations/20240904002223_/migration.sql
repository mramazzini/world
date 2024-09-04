-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "subRaceId" INTEGER;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_subRaceId_fkey" FOREIGN KEY ("subRaceId") REFERENCES "RaceVariant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
