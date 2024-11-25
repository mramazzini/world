/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `FeatureGroup` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `FeatureGroup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FeatureGroup" ADD COLUMN     "slug" VARCHAR(200) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "FeatureGroup_slug_key" ON "FeatureGroup"("slug");
