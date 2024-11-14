/*
  Warnings:

  - The primary key for the `WeaponProperty` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `WeaponPropertyInstance` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "WeaponPropertyInstance" DROP CONSTRAINT "WeaponPropertyInstance_propertyId_fkey";

-- AlterTable
ALTER TABLE "WeaponProperty" DROP CONSTRAINT "WeaponProperty_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "WeaponProperty_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "WeaponProperty_id_seq";

-- AlterTable
ALTER TABLE "WeaponPropertyInstance" DROP CONSTRAINT "WeaponPropertyInstance_pkey",
ALTER COLUMN "propertyId" SET DATA TYPE TEXT,
ADD CONSTRAINT "WeaponPropertyInstance_pkey" PRIMARY KEY ("weaponId", "propertyId");

-- AddForeignKey
ALTER TABLE "WeaponPropertyInstance" ADD CONSTRAINT "WeaponPropertyInstance_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "WeaponProperty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
