/*
  Warnings:

  - You are about to alter the column `flavorText` on the `SubClass` table. The data in that column could be lost. The data in that column will be cast from `VarChar(300)` to `VarChar(200)`.

*/
-- AlterTable
ALTER TABLE "Class" ALTER COLUMN "flavorText" SET DATA TYPE VARCHAR(200);

-- AlterTable
ALTER TABLE "SubClass" ALTER COLUMN "flavorText" SET DATA TYPE VARCHAR(200);
