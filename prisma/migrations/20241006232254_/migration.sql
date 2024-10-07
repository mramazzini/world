/*
  Warnings:

  - You are about to drop the column `email` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `replyingToId` on the `Comment` table. All the data in the column will be lost.
  - Changed the type of `model` on the `Comment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "AssociatedModel" AS ENUM ('ITEM', 'FEAT', 'CLASS', 'SUBCLASS', 'SPECIES', 'SUBSPECIES', 'BACKGROUND', 'SPELL', 'SPELL_LIST');

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_replyingToId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "email",
DROP COLUMN "replyingToId",
ADD COLUMN     "parentCommentId" INTEGER,
DROP COLUMN "model",
ADD COLUMN     "model" "AssociatedModel" NOT NULL;

-- DropEnum
DROP TYPE "CommentModel";

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_parentCommentId_fkey" FOREIGN KEY ("parentCommentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
