/*
  Warnings:

  - You are about to drop the column `features` on the `Background` table. All the data in the column will be lost.
  - You are about to drop the column `features` on the `Feat` table. All the data in the column will be lost.
  - You are about to drop the column `features` on the `SubSpecies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Background" DROP COLUMN "features";

-- AlterTable
ALTER TABLE "Feat" DROP COLUMN "features";

-- AlterTable
ALTER TABLE "SubSpecies" DROP COLUMN "features";
