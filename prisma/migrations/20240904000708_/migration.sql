-- CreateEnum
CREATE TYPE "Alignment" AS ENUM ('LAWFUL_GOOD', 'NEUTRAL_GOOD', 'CHAOTIC_GOOD', 'LAWFUL_NEUTRAL', 'TRUE_NEUTRAL', 'CHAOTIC_NEUTRAL', 'LAWFUL_EVIL', 'NEUTRAL_EVIL', 'CHAOTIC_EVIL', 'NULL');

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "backgroundId" INTEGER NOT NULL,
    "raceId" INTEGER NOT NULL,
    "alignment" "Alignment" NOT NULL,
    "skillProficiencies" "Skill"[],
    "skillExpertise" "Skill"[],
    "languages" "Language"[],
    "inventory" JSONB[],
    "armorClass" INTEGER NOT NULL,
    "equippedArmor" INTEGER[],
    "equippedWeapons" INTEGER[],
    "currentHitPoints" INTEGER NOT NULL,
    "maxHitPoints" INTEGER NOT NULL,
    "hitDice" INTEGER NOT NULL,
    "abilityScores" JSONB NOT NULL,
    "features" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Character classes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Character subClasses" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Character classes_AB_unique" ON "_Character classes"("A", "B");

-- CreateIndex
CREATE INDEX "_Character classes_B_index" ON "_Character classes"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Character subClasses_AB_unique" ON "_Character subClasses"("A", "B");

-- CreateIndex
CREATE INDEX "_Character subClasses_B_index" ON "_Character subClasses"("B");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Character classes" ADD CONSTRAINT "_Character classes_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Character classes" ADD CONSTRAINT "_Character classes_B_fkey" FOREIGN KEY ("B") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Character subClasses" ADD CONSTRAINT "_Character subClasses_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Character subClasses" ADD CONSTRAINT "_Character subClasses_B_fkey" FOREIGN KEY ("B") REFERENCES "SubClass"("id") ON DELETE CASCADE ON UPDATE CASCADE;
