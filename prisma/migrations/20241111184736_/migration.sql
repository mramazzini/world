/*
  Warnings:

  - The primary key for the `Tool` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_toolId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_toolId_fkey";

-- AlterTable
ALTER TABLE "Feature" ALTER COLUMN "toolId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "toolId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Tool" DROP CONSTRAINT "Tool_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tool_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Tool_id_seq";

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE SET NULL ON UPDATE CASCADE;
