/*
  Warnings:

  - You are about to drop the `_Character classes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `armorClass` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseCHA` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseCON` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseDEX` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseINT` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseSTR` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseWIS` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `biography` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentHp` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deathSavesFail` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deathSavesSuccess` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exhaustion` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inspirationRolls` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxHp` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spellSlots` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tempHp` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_Character classes" DROP CONSTRAINT "_Character classes_A_fkey";

-- DropForeignKey
ALTER TABLE "_Character classes" DROP CONSTRAINT "_Character classes_B_fkey";

-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "armorClass" INTEGER NOT NULL,
ADD COLUMN     "armorClassReasons" JSONB[],
ADD COLUMN     "armorEquippedId" TEXT,
ADD COLUMN     "baseCHA" INTEGER NOT NULL,
ADD COLUMN     "baseCON" INTEGER NOT NULL,
ADD COLUMN     "baseDEX" INTEGER NOT NULL,
ADD COLUMN     "baseINT" INTEGER NOT NULL,
ADD COLUMN     "baseSTR" INTEGER NOT NULL,
ADD COLUMN     "baseWIS" INTEGER NOT NULL,
ADD COLUMN     "biography" TEXT NOT NULL,
ADD COLUMN     "bonds" TEXT[],
ADD COLUMN     "conditions" "Condition"[],
ADD COLUMN     "currentHp" INTEGER NOT NULL,
ADD COLUMN     "deathSavesFail" INTEGER NOT NULL,
ADD COLUMN     "deathSavesSuccess" INTEGER NOT NULL,
ADD COLUMN     "exhaustion" INTEGER NOT NULL,
ADD COLUMN     "flaws" TEXT[],
ADD COLUMN     "hitDieUsedSinceLastRest" JSONB[],
ADD COLUMN     "ideals" TEXT[],
ADD COLUMN     "inspirationRolls" INTEGER NOT NULL,
ADD COLUMN     "inventory" JSONB[],
ADD COLUMN     "maxHp" INTEGER NOT NULL,
ADD COLUMN     "notes" TEXT[],
ADD COLUMN     "pendingChoices" JSONB[],
ADD COLUMN     "pendingLinks" JSONB[],
ADD COLUMN     "personalityTraits" TEXT[],
ADD COLUMN     "spellSlots" JSONB NOT NULL,
ADD COLUMN     "tempHp" INTEGER NOT NULL,
ADD COLUMN     "weaponEquippedIds" TEXT[];

-- AlterTable
ALTER TABLE "Spell" ADD COLUMN     "characterId" TEXT;

-- DropTable
DROP TABLE "_Character classes";

-- CreateTable
CREATE TABLE "CharacterToClass" (
    "characterId" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    "levelsInClass" INTEGER NOT NULL,

    CONSTRAINT "CharacterToClass_pkey" PRIMARY KEY ("characterId","classId")
);

-- CreateTable
CREATE TABLE "_CharacterToSpell" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToSpell_AB_unique" ON "_CharacterToSpell"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToSpell_B_index" ON "_CharacterToSpell"("B");

-- AddForeignKey
ALTER TABLE "CharacterToClass" ADD CONSTRAINT "CharacterToClass_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterToClass" ADD CONSTRAINT "CharacterToClass_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToSpell" ADD CONSTRAINT "_CharacterToSpell_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToSpell" ADD CONSTRAINT "_CharacterToSpell_B_fkey" FOREIGN KEY ("B") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;
