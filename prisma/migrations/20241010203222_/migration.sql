/*
  Warnings:

  - You are about to drop the column `spellSlots` on the `Creature` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Creature" DROP COLUMN "spellSlots",
ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "Creature" ADD CONSTRAINT "Creature_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
