/*
  Warnings:

  - The primary key for the `ColumnedFeature` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ColumnedFeature" DROP CONSTRAINT "ColumnedFeature_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ColumnedFeature_pkey" PRIMARY KEY ("id");
