/*
  Warnings:

  - You are about to drop the column `description` on the `WeaponPropertyInstance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WeaponPropertyInstance" DROP COLUMN "description",
ADD COLUMN     "magical" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "silvered" BOOLEAN NOT NULL DEFAULT false;
