/*
  Warnings:

  - Changed the type of `originLanguages` on the `Race` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Race" DROP COLUMN "originLanguages",
ADD COLUMN     "originLanguages" JSONB NOT NULL;
