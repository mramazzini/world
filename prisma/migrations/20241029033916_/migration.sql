/*
  Warnings:

  - You are about to drop the column `features` on the `Armor` table. All the data in the column will be lost.
  - You are about to drop the column `features` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `features` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `features` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `features` on the `Species` table. All the data in the column will be lost.
  - You are about to drop the column `features` on the `SubClass` table. All the data in the column will be lost.
  - You are about to drop the column `features` on the `Tool` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Armor" DROP COLUMN "features";

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "features";

-- AlterTable
ALTER TABLE "Creature" DROP COLUMN "features";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "features";

-- AlterTable
ALTER TABLE "Species" DROP COLUMN "features";

-- AlterTable
ALTER TABLE "SubClass" DROP COLUMN "features";

-- AlterTable
ALTER TABLE "Tool" DROP COLUMN "features";
