-- AlterTable
ALTER TABLE "Feature" ADD COLUMN     "weaponId" INTEGER;

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
CREATE TABLE "WeaponPropertyInstance" (
    "weaponId" INTEGER NOT NULL,
    "propertyId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "range" TEXT,
    "versatileDamage" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WeaponPropertyInstance_pkey" PRIMARY KEY ("weaponId","propertyId")
);

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_weaponId_fkey" FOREIGN KEY ("weaponId") REFERENCES "Weapon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeaponPropertyInstance" ADD CONSTRAINT "WeaponPropertyInstance_weaponId_fkey" FOREIGN KEY ("weaponId") REFERENCES "Weapon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeaponPropertyInstance" ADD CONSTRAINT "WeaponPropertyInstance_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "WeaponProperty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
