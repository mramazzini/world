/*
  Warnings:

  - Added the required column `meta` to the `BlogPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BlogPost" ADD COLUMN     "meta" VARCHAR(200) NOT NULL,
ALTER COLUMN "flavorText" SET DATA TYPE VARCHAR(400);
