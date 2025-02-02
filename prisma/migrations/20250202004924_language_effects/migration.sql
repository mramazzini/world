-- AlterEnum
ALTER TYPE "Language" ADD VALUE 'DRUIDIC';

-- AlterTable
ALTER TABLE "Effect" ADD COLUMN     "languageProficiencies" "Language"[];
