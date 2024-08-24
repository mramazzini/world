-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "skillProficiencies" "Skill"[],
ALTER COLUMN "sizeDescription" DROP NOT NULL;
