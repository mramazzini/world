/*
  Warnings:

  - Added the required column `flavorText` to the `FeatureCollection` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CommentType" AS ENUM ('COMMENT', 'REPLY');

-- CreateEnum
CREATE TYPE "CommentModel" AS ENUM ('ITEM', 'FEAT', 'CLASS', 'SUBCLASS', 'SPECIES', 'SUBSPECIES', 'BACKGROUND', 'SPELL', 'SPELL_LIST');

-- AlterTable
ALTER TABLE "FeatureCollection" ADD COLUMN     "flavorText" VARCHAR(200) NOT NULL;

-- CreateTable
CREATE TABLE "BlogPost" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "flavorText" VARCHAR(200) NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ImageURL" TEXT NOT NULL,
    "ImageAlt" TEXT NOT NULL,

    CONSTRAINT "BlogPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "email" TEXT,
    "comment" TEXT NOT NULL,
    "replyingToId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "CommentType" "CommentType" NOT NULL,
    "model" "CommentModel" NOT NULL,
    "speciesId" INTEGER,
    "subSpeciesId" INTEGER,
    "classId" INTEGER,
    "subClassId" INTEGER,
    "backgroundId" INTEGER,
    "featId" INTEGER,
    "itemId" INTEGER,
    "spellId" INTEGER,
    "blogPostId" INTEGER,
    "spellListId" INTEGER,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LikedComments" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LikedComments_AB_unique" ON "_LikedComments"("A", "B");

-- CreateIndex
CREATE INDEX "_LikedComments_B_index" ON "_LikedComments"("B");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_replyingToId_fkey" FOREIGN KEY ("replyingToId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_subSpeciesId_fkey" FOREIGN KEY ("subSpeciesId") REFERENCES "SubSpecies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_subClassId_fkey" FOREIGN KEY ("subClassId") REFERENCES "SubClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_featId_fkey" FOREIGN KEY ("featId") REFERENCES "Feat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_blogPostId_fkey" FOREIGN KEY ("blogPostId") REFERENCES "BlogPost"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_spellListId_fkey" FOREIGN KEY ("spellListId") REFERENCES "SpellList"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LikedComments" ADD CONSTRAINT "_LikedComments_A_fkey" FOREIGN KEY ("A") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LikedComments" ADD CONSTRAINT "_LikedComments_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
