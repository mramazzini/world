/*
  Warnings:

  - A unique constraint covering the columns `[itemId]` on the table `ItemWeaponData` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ItemWeaponData_itemId_key" ON "ItemWeaponData"("itemId");
