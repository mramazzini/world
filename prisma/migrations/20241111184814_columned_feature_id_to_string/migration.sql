/*
  Warnings:

  - The primary key for the `ColumnedFeature` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SubClassColumnedFeature` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ColumnedFeature" DROP CONSTRAINT "ColumnedFeature_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ColumnedFeature_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ColumnedFeature_id_seq";

-- AlterTable
ALTER TABLE "SubClassColumnedFeature" DROP CONSTRAINT "SubClassColumnedFeature_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "SubClassColumnedFeature_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "SubClassColumnedFeature_id_seq";
