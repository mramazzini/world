/*
  Warnings:

  - The primary key for the `ItemWeaponData` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Weapon` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `WeaponPropertyInstance` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_weaponId_fkey";

-- DropForeignKey
ALTER TABLE "ItemWeaponData" DROP CONSTRAINT "ItemWeaponData_weaponId_fkey";

-- DropForeignKey
ALTER TABLE "WeaponPropertyInstance" DROP CONSTRAINT "WeaponPropertyInstance_weaponId_fkey";

-- AlterTable
ALTER TABLE "Feature" ALTER COLUMN "weaponId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ItemWeaponData" DROP CONSTRAINT "ItemWeaponData_pkey",
ALTER COLUMN "weaponId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ItemWeaponData_pkey" PRIMARY KEY ("itemId", "weaponId");

-- AlterTable
ALTER TABLE "Weapon" DROP CONSTRAINT "Weapon_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Weapon_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Weapon_id_seq";

-- AlterTable
ALTER TABLE "WeaponPropertyInstance" DROP CONSTRAINT "WeaponPropertyInstance_pkey",
ALTER COLUMN "weaponId" SET DATA TYPE TEXT,
ADD CONSTRAINT "WeaponPropertyInstance_pkey" PRIMARY KEY ("weaponId", "propertyId");

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_weaponId_fkey" FOREIGN KEY ("weaponId") REFERENCES "Weapon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemWeaponData" ADD CONSTRAINT "ItemWeaponData_weaponId_fkey" FOREIGN KEY ("weaponId") REFERENCES "Weapon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeaponPropertyInstance" ADD CONSTRAINT "WeaponPropertyInstance_weaponId_fkey" FOREIGN KEY ("weaponId") REFERENCES "Weapon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
