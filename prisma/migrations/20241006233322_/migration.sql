/*
  Warnings:

  - You are about to drop the column `backgroundId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `blogPostId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `classId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `featId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `itemId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `speciesId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `spellId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `spellListId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `subClassId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `subSpeciesId` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `modelId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_backgroundId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_blogPostId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_classId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_featId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_itemId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_speciesId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_spellId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_spellListId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_subClassId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_subSpeciesId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "backgroundId",
DROP COLUMN "blogPostId",
DROP COLUMN "classId",
DROP COLUMN "featId",
DROP COLUMN "itemId",
DROP COLUMN "speciesId",
DROP COLUMN "spellId",
DROP COLUMN "spellListId",
DROP COLUMN "subClassId",
DROP COLUMN "subSpeciesId",
ADD COLUMN     "modelId" INTEGER NOT NULL;
