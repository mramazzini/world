/*
  Warnings:

  - You are about to drop the `_ItemClass` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ToolClass` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_WeaponClass` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ItemClass" DROP CONSTRAINT "_ItemClass_A_fkey";

-- DropForeignKey
ALTER TABLE "_ItemClass" DROP CONSTRAINT "_ItemClass_B_fkey";

-- DropForeignKey
ALTER TABLE "_ToolClass" DROP CONSTRAINT "_ToolClass_A_fkey";

-- DropForeignKey
ALTER TABLE "_ToolClass" DROP CONSTRAINT "_ToolClass_B_fkey";

-- DropForeignKey
ALTER TABLE "_WeaponClass" DROP CONSTRAINT "_WeaponClass_A_fkey";

-- DropForeignKey
ALTER TABLE "_WeaponClass" DROP CONSTRAINT "_WeaponClass_B_fkey";

-- DropTable
DROP TABLE "_ItemClass";

-- DropTable
DROP TABLE "_ToolClass";

-- DropTable
DROP TABLE "_WeaponClass";
