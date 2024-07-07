-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_casterTypeId_fkey";

-- AlterTable
ALTER TABLE "Class" ALTER COLUMN "casterTypeId" DROP NOT NULL,
ALTER COLUMN "casterTypeId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_casterTypeId_fkey" FOREIGN KEY ("casterTypeId") REFERENCES "CasterType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
