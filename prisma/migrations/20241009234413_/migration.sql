-- AlterTable
ALTER TABLE "Creature" ADD COLUMN     "spellAttackBonus" INTEGER,
ADD COLUMN     "spellSaveDC" INTEGER,
ADD COLUMN     "spellSlots" JSONB[],
ADD COLUMN     "spellcastingAbility" "Ability";

-- AlterTable
ALTER TABLE "Spell" ADD COLUMN     "creatureId" INTEGER;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_creatureId_fkey" FOREIGN KEY ("creatureId") REFERENCES "Creature"("id") ON DELETE SET NULL ON UPDATE CASCADE;
