-- DropForeignKey
ALTER TABLE "Race" DROP CONSTRAINT "Race_userId_fkey";

-- AlterTable
ALTER TABLE "Race" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Race" ADD CONSTRAINT "Race_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
