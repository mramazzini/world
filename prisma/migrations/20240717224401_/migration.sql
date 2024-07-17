-- DropForeignKey
ALTER TABLE "SubClass" DROP CONSTRAINT "SubClass_userId_fkey";

-- AlterTable
ALTER TABLE "SubClass" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "SubClass" ADD CONSTRAINT "SubClass_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
