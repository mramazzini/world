/*
  Warnings:

  - Added the required column `damageType` to the `Weapon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRanged` to the `Weapon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isSimple` to the `Weapon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Weapon" ADD COLUMN     "damageType" "DamageTypes" NOT NULL,
ADD COLUMN     "isRanged" BOOLEAN NOT NULL,
ADD COLUMN     "isSimple" BOOLEAN NOT NULL;
