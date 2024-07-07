/*
  Warnings:

  - Made the column `ritualCaster` on table `Class` required. This step will fail if there are existing NULL values in that column.
  - Made the column `spellFocus` on table `Class` required. This step will fail if there are existing NULL values in that column.
  - Made the column `casterTypeId` on table `Class` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_casterTypeId_fkey";

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "ritualSpellPrepared" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "spellCaster" SET DEFAULT false,
ALTER COLUMN "ritualCaster" SET NOT NULL,
ALTER COLUMN "ritualCaster" SET DEFAULT false,
ALTER COLUMN "spellFocus" SET NOT NULL,
ALTER COLUMN "spellFocus" SET DEFAULT 'None',
ALTER COLUMN "casterTypeId" SET NOT NULL,
ALTER COLUMN "casterTypeId" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "Feature" ADD COLUMN     "spellCastingFeature" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "CustomField" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "data" TEXT[],
    "isNumber" BOOLEAN NOT NULL,
    "consumable" BOOLEAN NOT NULL,
    "rechargeData" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "classId" INTEGER NOT NULL,

    CONSTRAINT "CustomField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Weapon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "damage" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "versatileDmg" TEXT,
    "range" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Weapon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeaponProperties" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WeaponProperties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeaponToProperties" (
    "weaponId" INTEGER NOT NULL,
    "weaponPropertyId" INTEGER NOT NULL,

    CONSTRAINT "WeaponToProperties_pkey" PRIMARY KEY ("weaponId","weaponPropertyId")
);

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_casterTypeId_fkey" FOREIGN KEY ("casterTypeId") REFERENCES "CasterType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomField" ADD CONSTRAINT "CustomField_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeaponToProperties" ADD CONSTRAINT "WeaponToProperties_weaponId_fkey" FOREIGN KEY ("weaponId") REFERENCES "Weapon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeaponToProperties" ADD CONSTRAINT "WeaponToProperties_weaponPropertyId_fkey" FOREIGN KEY ("weaponPropertyId") REFERENCES "WeaponProperties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
