/*
  Warnings:

  - You are about to drop the column `Acrobatics` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `AnimalHandling` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `Arcana` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `Athletics` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `Deception` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `History` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `Insight` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `Intimidation` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `Investigation` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `Medicine` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `Nature` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `Perception` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `Performance` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `Persuasion` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `Religion` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `SleightOfHand` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `Stealth` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `Survival` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `armorClass` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `chaSave` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `conSave` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `dexSave` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `intSave` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `strSave` on the `Creature` table. All the data in the column will be lost.
  - You are about to drop the column `wisSave` on the `Creature` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ArmorClassProtocol" AS ENUM ('REGULAR', 'NATURAL_ARMOR');

-- AlterTable
ALTER TABLE "Creature" DROP COLUMN "Acrobatics",
DROP COLUMN "AnimalHandling",
DROP COLUMN "Arcana",
DROP COLUMN "Athletics",
DROP COLUMN "Deception",
DROP COLUMN "History",
DROP COLUMN "Insight",
DROP COLUMN "Intimidation",
DROP COLUMN "Investigation",
DROP COLUMN "Medicine",
DROP COLUMN "Nature",
DROP COLUMN "Perception",
DROP COLUMN "Performance",
DROP COLUMN "Persuasion",
DROP COLUMN "Religion",
DROP COLUMN "SleightOfHand",
DROP COLUMN "Stealth",
DROP COLUMN "Survival",
DROP COLUMN "armorClass",
DROP COLUMN "chaSave",
DROP COLUMN "conSave",
DROP COLUMN "dexSave",
DROP COLUMN "intSave",
DROP COLUMN "strSave",
DROP COLUMN "wisSave",
ADD COLUMN     "armorClassProtocol" "ArmorClassProtocol" NOT NULL DEFAULT 'REGULAR',
ADD COLUMN     "armorEquippedId" INTEGER,
ADD COLUMN     "naturalArmorBonus" INTEGER,
ADD COLUMN     "saveExpertise" "Ability"[],
ADD COLUMN     "saveProficiencies" "Ability"[],
ADD COLUMN     "shield" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "shieldEquippedId" INTEGER,
ADD COLUMN     "skillExpertise" "Skill"[],
ADD COLUMN     "skillProficiencies" "Skill"[];

-- CreateTable
CREATE TABLE "_CreatureWields" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CreatureWields_AB_unique" ON "_CreatureWields"("A", "B");

-- CreateIndex
CREATE INDEX "_CreatureWields_B_index" ON "_CreatureWields"("B");

-- AddForeignKey
ALTER TABLE "Creature" ADD CONSTRAINT "Creature_armorEquippedId_fkey" FOREIGN KEY ("armorEquippedId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Creature" ADD CONSTRAINT "Creature_shieldEquippedId_fkey" FOREIGN KEY ("shieldEquippedId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreatureWields" ADD CONSTRAINT "_CreatureWields_A_fkey" FOREIGN KEY ("A") REFERENCES "Creature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreatureWields" ADD CONSTRAINT "_CreatureWields_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
