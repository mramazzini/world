-- DropForeignKey
ALTER TABLE "CreatureLimitedSpell" DROP CONSTRAINT "CreatureLimitedSpell_creatureId_fkey";

-- DropForeignKey
ALTER TABLE "CreatureLimitedSpell" DROP CONSTRAINT "CreatureLimitedSpell_spellId_fkey";

-- AddForeignKey
ALTER TABLE "CreatureLimitedSpell" ADD CONSTRAINT "CreatureLimitedSpell_creatureId_fkey" FOREIGN KEY ("creatureId") REFERENCES "Creature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreatureLimitedSpell" ADD CONSTRAINT "CreatureLimitedSpell_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;
