/*
  Warnings:

  - The primary key for the `EquipmentPack` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_equipmentPackId_fkey";

-- DropForeignKey
ALTER TABLE "_EquipmentPackParent" DROP CONSTRAINT "_EquipmentPackParent_A_fkey";

-- AlterTable
ALTER TABLE "EquipmentPack" DROP CONSTRAINT "EquipmentPack_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "EquipmentPack_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "EquipmentPack_id_seq";

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "equipmentPackId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_EquipmentPackParent" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_equipmentPackId_fkey" FOREIGN KEY ("equipmentPackId") REFERENCES "EquipmentPack"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipmentPackParent" ADD CONSTRAINT "_EquipmentPackParent_A_fkey" FOREIGN KEY ("A") REFERENCES "EquipmentPack"("id") ON DELETE CASCADE ON UPDATE CASCADE;
