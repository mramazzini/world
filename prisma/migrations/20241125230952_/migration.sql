/*
  Warnings:

  - The primary key for the `ColumnedFeature` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ColumnedFeature` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ColumnedFeature" DROP CONSTRAINT "ColumnedFeature_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "ColumnedFeature_pkey" PRIMARY KEY ("classId", "featureId");
