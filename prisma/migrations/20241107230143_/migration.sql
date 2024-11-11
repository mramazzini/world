/*
  Warnings:

  - Added the required column `protocol` to the `Enums` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Enums" ADD COLUMN     "protocol" "WorkshopProtocol" NOT NULL;
