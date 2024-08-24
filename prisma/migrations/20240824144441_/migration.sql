-- AlterTable
ALTER TABLE "RaceVariant" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "RaceVariant" ADD CONSTRAINT "RaceVariant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
