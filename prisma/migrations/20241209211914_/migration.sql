-- AlterTable
ALTER TABLE "Effect" ADD COLUMN     "damageModifierType" "DamageTypes";

-- AlterTable
ALTER TABLE "Feature" ADD COLUMN     "effectGrantsGroupEffectId" TEXT,
ADD COLUMN     "effectGrantsGroupGroupId" TEXT;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_effectGrantsGroupEffectId_effectGrantsGroupGroupId_fkey" FOREIGN KEY ("effectGrantsGroupEffectId", "effectGrantsGroupGroupId") REFERENCES "EffectGrantsGroup"("effectId", "groupId") ON DELETE SET NULL ON UPDATE CASCADE;
