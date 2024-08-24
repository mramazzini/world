-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "immuneTo" "DamageTypes"[],
ADD COLUMN     "resistanceTo" "DamageTypes"[],
ADD COLUMN     "toolProficiencies" TEXT[],
ADD COLUMN     "vulnerableTo" "DamageTypes"[];
