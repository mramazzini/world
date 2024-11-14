/*
  Warnings:

  - The primary key for the `Armor` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_armorId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_armorId_fkey";

-- AlterTable
ALTER TABLE "Armor" DROP CONSTRAINT "Armor_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Armor_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Armor_id_seq";

-- AlterTable
ALTER TABLE "Feature" ALTER COLUMN "armorId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "armorId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_armorId_fkey" FOREIGN KEY ("armorId") REFERENCES "Armor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_armorId_fkey" FOREIGN KEY ("armorId") REFERENCES "Armor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
