/*
  Warnings:

  - You are about to drop the `Proficiency` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ClassToProficiency` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Proficiency" DROP CONSTRAINT "Proficiency_raceId_fkey";

-- DropForeignKey
ALTER TABLE "_ClassToProficiency" DROP CONSTRAINT "_ClassToProficiency_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClassToProficiency" DROP CONSTRAINT "_ClassToProficiency_B_fkey";

-- DropTable
DROP TABLE "Proficiency";

-- DropTable
DROP TABLE "_ClassToProficiency";
