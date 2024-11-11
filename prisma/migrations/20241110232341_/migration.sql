/*
  Warnings:

  - The primary key for the `Feat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[A,B]` on the table `_CharacterToFeat` will be added. If there are existing duplicate values, this will fail.
  - Made the column `B` on table `_CharacterToFeat` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_featId_fkey";

-- DropForeignKey
ALTER TABLE "_CharacterToFeat" DROP CONSTRAINT "_CharacterToFeat_B_fkey";

-- AlterTable
ALTER TABLE "Feat" DROP CONSTRAINT "Feat_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Feat_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Feature" ALTER COLUMN "featId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_CharacterToFeat" ALTER COLUMN "B" SET NOT NULL,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToFeat_AB_unique" ON "_CharacterToFeat"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToFeat_B_index" ON "_CharacterToFeat"("B");

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_featId_fkey" FOREIGN KEY ("featId") REFERENCES "Feat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToFeat" ADD CONSTRAINT "_CharacterToFeat_B_fkey" FOREIGN KEY ("B") REFERENCES "Feat"("id") ON DELETE CASCADE ON UPDATE CASCADE;
