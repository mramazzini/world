/*
  Warnings:

  - You are about to drop the column `multiclassing` on the `ClassMultiClassing` table. All the data in the column will be lost.
  - Added the required column `prerequisite` to the `ClassMultiClassing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClassMultiClassing" DROP COLUMN "multiclassing",
ADD COLUMN     "prerequisite" JSONB NOT NULL;
