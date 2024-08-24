-- AlterTable
ALTER TABLE "Weapon" ADD COLUMN     "raceId" INTEGER;

-- AddForeignKey
ALTER TABLE "Weapon" ADD CONSTRAINT "Weapon_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE SET NULL ON UPDATE CASCADE;
