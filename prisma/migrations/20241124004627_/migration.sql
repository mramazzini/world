/*
  Warnings:

  - The values [FULL,HALF_ROUNDED_UP,HALF_ROUNDED_DOWN,THIRD_ROUNDED_UP,THIRD_ROUNDED_DOWN,CUSTOM] on the enum `CasterType` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `casterPower` to the `SpellCasting` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CasterPower" AS ENUM ('FULL', 'HALF_ROUNDED_UP', 'HALF_ROUNDED_DOWN', 'THIRD_ROUNDED_UP', 'THIRD_ROUNDED_DOWN', 'CUSTOM');

-- AlterEnum
BEGIN;
CREATE TYPE "CasterType_new" AS ENUM ('PREPARED', 'KNOWN');
ALTER TABLE "SpellCasting" ALTER COLUMN "casterType" TYPE "CasterType_new" USING ("casterType"::text::"CasterType_new");
ALTER TYPE "CasterType" RENAME TO "CasterType_old";
ALTER TYPE "CasterType_new" RENAME TO "CasterType";
DROP TYPE "CasterType_old";
COMMIT;

-- AlterTable
ALTER TABLE "SpellCasting" ADD COLUMN     "casterPower" "CasterPower" NOT NULL;
