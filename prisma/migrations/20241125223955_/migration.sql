/*
  Warnings:

  - You are about to drop the column `prerequisites` on the `Effect` table. All the data in the column will be lost.
  - You are about to drop the column `exclusiveFeatureGroupId` on the `Feature` table. All the data in the column will be lost.
  - You are about to drop the column `featureCollectionId` on the `Feature` table. All the data in the column will be lost.
  - You are about to drop the `ExclusiveFeatureGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FeatureCollection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_exclusiveFeatureGroupId_fkey";

-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_featureCollectionId_fkey";

-- AlterTable
ALTER TABLE "Effect" DROP COLUMN "prerequisites";

-- AlterTable
ALTER TABLE "Feature" DROP COLUMN "exclusiveFeatureGroupId",
DROP COLUMN "featureCollectionId",
ADD COLUMN     "FeatureGroupId" TEXT;

-- DropTable
DROP TABLE "ExclusiveFeatureGroup";

-- DropTable
DROP TABLE "FeatureCollection";

-- CreateTable
CREATE TABLE "FeatureGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "flavorText" VARCHAR(200) NOT NULL,

    CONSTRAINT "FeatureGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EffectGrantsGroup" (
    "effectId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "EffectGrantsGroup_pkey" PRIMARY KEY ("effectId","groupId")
);

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_FeatureGroupId_fkey" FOREIGN KEY ("FeatureGroupId") REFERENCES "FeatureGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EffectGrantsGroup" ADD CONSTRAINT "EffectGrantsGroup_effectId_fkey" FOREIGN KEY ("effectId") REFERENCES "Effect"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EffectGrantsGroup" ADD CONSTRAINT "EffectGrantsGroup_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "FeatureGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
