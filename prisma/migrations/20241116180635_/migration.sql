-- CreateEnum
CREATE TYPE "WeaponGroup" AS ENUM ('ALL_SIMPLE', 'ALL_MARTIAL', 'ALL_RANGED', 'ALL_MELEE', 'SIMPLE_MELEE', 'SIMPLE_RANGED', 'MARTIAL_MELEE', 'MARTIAL_RANGED', 'ALL_WEAPONS');

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "freeWeaponProficiencyGroups" "WeaponGroup"[];
