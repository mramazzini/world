/*
  Warnings:

  - You are about to drop the `BackgroundFeature` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BackgroundFeature" DROP CONSTRAINT "BackgroundFeature_backgroundId_fkey";

-- AlterTable
ALTER TABLE "Background" ADD COLUMN     "features" JSONB[];

-- DropTable
DROP TABLE "BackgroundFeature";
