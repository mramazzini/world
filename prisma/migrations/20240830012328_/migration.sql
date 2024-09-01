/*
  Warnings:

  - The values [gp,sp,cp] on the enum `Unit` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('cp', 'sp', 'ep', 'gp', 'pp');

-- AlterEnum
BEGIN;
CREATE TYPE "Unit_new" AS ENUM ('lb', 'oz', 'pint', 'quart', 'gal');
ALTER TYPE "Unit" RENAME TO "Unit_old";
ALTER TYPE "Unit_new" RENAME TO "Unit";
DROP TYPE "Unit_old";
COMMIT;
