/*
  Warnings:

  - The primary key for the `Item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ItemWeaponData` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Creature" DROP CONSTRAINT "Creature_armorEquippedId_fkey";

-- DropForeignKey
ALTER TABLE "Creature" DROP CONSTRAINT "Creature_shieldEquippedId_fkey";

-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_itemId_fkey";

-- DropForeignKey
ALTER TABLE "ItemWeaponData" DROP CONSTRAINT "ItemWeaponData_itemId_fkey";

-- DropForeignKey
ALTER TABLE "Weapon" DROP CONSTRAINT "Weapon_ammunitionId_fkey";

-- DropForeignKey
ALTER TABLE "_CreatureWields" DROP CONSTRAINT "_CreatureWields_B_fkey";

-- DropForeignKey
ALTER TABLE "_EquipmentPackParent" DROP CONSTRAINT "_EquipmentPackParent_B_fkey";

-- AlterTable
ALTER TABLE "Creature" ALTER COLUMN "armorEquippedId" SET DATA TYPE TEXT,
ALTER COLUMN "shieldEquippedId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Feature" ALTER COLUMN "itemId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Item" DROP CONSTRAINT "Item_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Item_id_seq";

-- AlterTable
ALTER TABLE "ItemWeaponData" DROP CONSTRAINT "ItemWeaponData_pkey",
ALTER COLUMN "itemId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ItemWeaponData_pkey" PRIMARY KEY ("itemId", "weaponId");

-- AlterTable
ALTER TABLE "Weapon" ALTER COLUMN "ammunitionId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_CreatureWields" ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_EquipmentPackParent" ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemWeaponData" ADD CONSTRAINT "ItemWeaponData_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weapon" ADD CONSTRAINT "Weapon_ammunitionId_fkey" FOREIGN KEY ("ammunitionId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Creature" ADD CONSTRAINT "Creature_armorEquippedId_fkey" FOREIGN KEY ("armorEquippedId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Creature" ADD CONSTRAINT "Creature_shieldEquippedId_fkey" FOREIGN KEY ("shieldEquippedId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipmentPackParent" ADD CONSTRAINT "_EquipmentPackParent_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreatureWields" ADD CONSTRAINT "_CreatureWields_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
