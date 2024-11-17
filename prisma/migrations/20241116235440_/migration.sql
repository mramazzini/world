/*
  Warnings:

  - You are about to drop the column `freeArmorProfiencies` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `classId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `classId` on the `Tool` table. All the data in the column will be lost.
  - You are about to drop the column `classId` on the `Weapon` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_classId_fkey";

-- DropForeignKey
ALTER TABLE "Tool" DROP CONSTRAINT "Tool_classId_fkey";

-- DropForeignKey
ALTER TABLE "Weapon" DROP CONSTRAINT "Weapon_classId_fkey";

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "freeArmorProfiencies",
ADD COLUMN     "freeArmorProficiencies" "ArmorType"[],
ADD COLUMN     "freeItemIds" TEXT[],
ADD COLUMN     "freeToolProficiencyIds" TEXT[],
ADD COLUMN     "freeWeaponProficiencyIds" TEXT[];

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "classId";

-- AlterTable
ALTER TABLE "Tool" DROP COLUMN "classId";

-- AlterTable
ALTER TABLE "Weapon" DROP COLUMN "classId";
