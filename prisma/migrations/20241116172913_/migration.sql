/*
  Warnings:

  - You are about to drop the column `armorDescription` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `itemDescription` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `toolsDescription` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `weaponDescription` on the `Class` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Class" DROP COLUMN "armorDescription",
DROP COLUMN "itemDescription",
DROP COLUMN "toolsDescription",
DROP COLUMN "weaponDescription",
ADD COLUMN     "freeArmorProfiencies" "ArmorType"[];

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "classId" TEXT;

-- AlterTable
ALTER TABLE "Tool" ADD COLUMN     "classId" TEXT;

-- AlterTable
ALTER TABLE "Weapon" ADD COLUMN     "classId" TEXT;

-- AddForeignKey
ALTER TABLE "Tool" ADD CONSTRAINT "Tool_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weapon" ADD CONSTRAINT "Weapon_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;
