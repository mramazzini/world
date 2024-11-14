/*
  Warnings:

  - The primary key for the `WorkshopItem` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "WorkshopItem" DROP CONSTRAINT "WorkshopItem_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "WorkshopItem_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "WorkshopItem_id_seq";
