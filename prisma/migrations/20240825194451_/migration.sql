/*
  Warnings:

  - You are about to drop the `ToolFeature` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Tool" ADD COLUMN     "features" JSONB[];

-- DropTable
DROP TABLE "ToolFeature";
