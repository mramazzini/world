-- CreateEnum
CREATE TYPE "Time" AS ENUM ('ACTION', 'BONUS_ACTION', 'REACTION', 'ROUND', 'MINUTE', 'HOUR', 'DAY', 'WEEK', 'MONTH', 'YEAR');

-- CreateTable
CREATE TABLE "CreatureLimitedSpell" (
    "id" SERIAL NOT NULL,
    "creatureId" INTEGER NOT NULL,
    "spellId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "time" "Time" NOT NULL,

    CONSTRAINT "CreatureLimitedSpell_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CreatureLimitedSpell" ADD CONSTRAINT "CreatureLimitedSpell_creatureId_fkey" FOREIGN KEY ("creatureId") REFERENCES "Creature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreatureLimitedSpell" ADD CONSTRAINT "CreatureLimitedSpell_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
