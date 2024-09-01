/*
  Warnings:

  - You are about to drop the column `equipmentPackId` on the `Item` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_equipmentPackId_fkey";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "equipmentPackId";
