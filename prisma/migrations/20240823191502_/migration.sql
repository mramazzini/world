/*
  Warnings:

  - You are about to drop the column `flavortext` on the `Race` table. All the data in the column will be lost.
  - Added the required column `flavorText` to the `Race` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Race" DROP COLUMN "flavortext",
ADD COLUMN     "flavorText" VARCHAR(200) NOT NULL;
