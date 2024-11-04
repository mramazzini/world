/*
  Warnings:

  - You are about to drop the column `magical` on the `WeaponPropertyInstance` table. All the data in the column will be lost.
  - You are about to drop the column `silvered` on the `WeaponPropertyInstance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WeaponPropertyInstance" DROP COLUMN "magical",
DROP COLUMN "silvered";
