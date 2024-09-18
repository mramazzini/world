-- AlterTable
ALTER TABLE "Feat" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "Feat" ADD CONSTRAINT "Feat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
