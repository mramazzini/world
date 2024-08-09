/*
  Warnings:

  - You are about to drop the column `description` on the `Class` table. All the data in the column will be lost.
  - Added the required column `desc` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Class" DROP COLUMN "description",
ADD COLUMN     "desc" TEXT NOT NULL;
