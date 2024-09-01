-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "equipmentPackId" INTEGER;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_equipmentPackId_fkey" FOREIGN KEY ("equipmentPackId") REFERENCES "EquipmentPack"("id") ON DELETE SET NULL ON UPDATE CASCADE;
