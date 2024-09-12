-- AlterTable
ALTER TABLE "Background" ADD COLUMN     "equipmentDescription" TEXT,
ADD COLUMN     "languageProficiencyDescription" TEXT,
ADD COLUMN     "skillProficiencyDescription" TEXT,
ADD COLUMN     "toolProficiencyDescription" TEXT,
ALTER COLUMN "languageProficiencies" DROP NOT NULL,
ALTER COLUMN "skillProficiencies" DROP NOT NULL,
ALTER COLUMN "toolProficiencies" DROP NOT NULL,
ALTER COLUMN "equipment" DROP NOT NULL;
