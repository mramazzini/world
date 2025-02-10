/*
  Warnings:

  - You are about to drop the column `toolProficienciesGroup` on the `Effect` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Effect" DROP COLUMN "toolProficienciesGroup",
ADD COLUMN     "weaponGroupProficiencies" "WeaponGroup"[];
