/*
  Warnings:

  - You are about to drop the column `raceId` on the `Weapon` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Weapon" DROP CONSTRAINT "Weapon_raceId_fkey";

-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "weaponProficiencies" INTEGER[];

-- AlterTable
ALTER TABLE "Weapon" DROP COLUMN "raceId";
