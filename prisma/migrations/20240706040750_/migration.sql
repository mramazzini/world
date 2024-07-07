/*
  Warnings:

  - You are about to drop the `WeaponProperties` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WeaponToProperties` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "WeaponToProperties" DROP CONSTRAINT "WeaponToProperties_weaponId_fkey";

-- DropForeignKey
ALTER TABLE "WeaponToProperties" DROP CONSTRAINT "WeaponToProperties_weaponPropertyId_fkey";

-- DropTable
DROP TABLE "WeaponProperties";

-- DropTable
DROP TABLE "WeaponToProperties";

-- CreateTable
CREATE TABLE "WeaponProperty" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WeaponProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeaponToProperty" (
    "weaponId" INTEGER NOT NULL,
    "weaponPropertyId" INTEGER NOT NULL,

    CONSTRAINT "WeaponToProperty_pkey" PRIMARY KEY ("weaponId","weaponPropertyId")
);

-- AddForeignKey
ALTER TABLE "WeaponToProperty" ADD CONSTRAINT "WeaponToProperty_weaponId_fkey" FOREIGN KEY ("weaponId") REFERENCES "Weapon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeaponToProperty" ADD CONSTRAINT "WeaponToProperty_weaponPropertyId_fkey" FOREIGN KEY ("weaponPropertyId") REFERENCES "WeaponProperty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
