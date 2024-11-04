/*
  Warnings:

  - You are about to drop the column `weaponId` on the `Item` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_weaponId_fkey";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "weaponId";

-- CreateTable
CREATE TABLE "ItemWeaponData" (
    "itemId" INTEGER NOT NULL,
    "weaponId" INTEGER NOT NULL,
    "silvered" BOOLEAN NOT NULL DEFAULT false,
    "magical" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ItemWeaponData_pkey" PRIMARY KEY ("itemId","weaponId")
);

-- AddForeignKey
ALTER TABLE "ItemWeaponData" ADD CONSTRAINT "ItemWeaponData_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemWeaponData" ADD CONSTRAINT "ItemWeaponData_weaponId_fkey" FOREIGN KEY ("weaponId") REFERENCES "Weapon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
