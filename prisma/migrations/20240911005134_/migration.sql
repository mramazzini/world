/*
  Warnings:

  - You are about to drop the column `languageChoiceCount` on the `Background` table. All the data in the column will be lost.
  - You are about to drop the column `languages` on the `Background` table. All the data in the column will be lost.
  - You are about to drop the column `skillChoiceCount` on the `Background` table. All the data in the column will be lost.
  - The `weaponProficiencies` column on the `RaceVariant` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `languageProficiencies` to the `Background` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `skillProficiencies` on the `Background` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `toolProficiencies` on the `Background` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `equipment` on the `Background` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Background" DROP COLUMN "languageChoiceCount",
DROP COLUMN "languages",
DROP COLUMN "skillChoiceCount",
ADD COLUMN     "languageProficiencies" JSONB NOT NULL,
DROP COLUMN "skillProficiencies",
ADD COLUMN     "skillProficiencies" JSONB NOT NULL,
DROP COLUMN "toolProficiencies",
ADD COLUMN     "toolProficiencies" JSONB NOT NULL,
DROP COLUMN "equipment",
ADD COLUMN     "equipment" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "RaceVariant" ADD COLUMN     "toolProficiencyDescription" TEXT,
ADD COLUMN     "weaponProficiencyDescription" TEXT,
DROP COLUMN "weaponProficiencies",
ADD COLUMN     "weaponProficiencies" JSONB;
