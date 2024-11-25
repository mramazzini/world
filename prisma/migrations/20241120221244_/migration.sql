/*
  Warnings:

  - You are about to drop the column `alignment` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `armorEquippedId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `baseCHA` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `baseCON` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `baseDEX` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `baseINT` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `baseSTR` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `baseWIS` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `biography` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `bonds` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `conditions` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `currentHp` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `deathSavesFail` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `deathSavesSuccess` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `exhaustion` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `flaws` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `hitDieUsedSinceLastRest` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `ideals` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `imageURL` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `inspirationRolls` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `inventory` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `itemsInitialized` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `pendingLinks` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `personalityTraits` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `tempHp` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAtIsoString` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `weaponEquippedIds` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the `_CharacterToSpell` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[stateId]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `stateId` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CharacterToSpell" DROP CONSTRAINT "_CharacterToSpell_A_fkey";

-- DropForeignKey
ALTER TABLE "_CharacterToSpell" DROP CONSTRAINT "_CharacterToSpell_B_fkey";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "alignment",
DROP COLUMN "armorEquippedId",
DROP COLUMN "baseCHA",
DROP COLUMN "baseCON",
DROP COLUMN "baseDEX",
DROP COLUMN "baseINT",
DROP COLUMN "baseSTR",
DROP COLUMN "baseWIS",
DROP COLUMN "biography",
DROP COLUMN "bonds",
DROP COLUMN "conditions",
DROP COLUMN "currentHp",
DROP COLUMN "deathSavesFail",
DROP COLUMN "deathSavesSuccess",
DROP COLUMN "exhaustion",
DROP COLUMN "flaws",
DROP COLUMN "hitDieUsedSinceLastRest",
DROP COLUMN "ideals",
DROP COLUMN "imageURL",
DROP COLUMN "inspirationRolls",
DROP COLUMN "inventory",
DROP COLUMN "itemsInitialized",
DROP COLUMN "name",
DROP COLUMN "notes",
DROP COLUMN "pendingLinks",
DROP COLUMN "personalityTraits",
DROP COLUMN "tempHp",
DROP COLUMN "updatedAtIsoString",
DROP COLUMN "weaponEquippedIds",
ADD COLUMN     "spellId" TEXT,
ADD COLUMN     "stateId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_CharacterToSpell";

-- CreateTable
CREATE TABLE "CharacterState" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "alignment" "Alignment" NOT NULL,
    "hitDieUsedSinceLastRest" JSONB[],
    "inventory" JSONB[],
    "inspirationRolls" INTEGER NOT NULL,
    "armorEquippedId" TEXT,
    "weaponEquippedIds" TEXT[],
    "deathSavesSuccess" INTEGER NOT NULL,
    "deathSavesFail" INTEGER NOT NULL,
    "exhaustion" INTEGER NOT NULL,
    "conditions" "Condition"[],
    "preparedSpellsIds" TEXT[],
    "pendingLinks" JSONB[],
    "currentHp" INTEGER NOT NULL,
    "tempHp" INTEGER NOT NULL,
    "lastSavedIsoString" TEXT NOT NULL,
    "notes" TEXT[],
    "ideals" TEXT[],
    "bonds" TEXT[],
    "flaws" TEXT[],
    "personalityTraits" TEXT[],
    "biography" TEXT NOT NULL,
    "imageURL" TEXT,
    "baseSTR" INTEGER NOT NULL,
    "baseDEX" INTEGER NOT NULL,
    "baseCON" INTEGER NOT NULL,
    "baseINT" INTEGER NOT NULL,
    "baseWIS" INTEGER NOT NULL,
    "baseCHA" INTEGER NOT NULL,

    CONSTRAINT "CharacterState_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Character_stateId_key" ON "Character"("stateId");

-- AddForeignKey
ALTER TABLE "CharacterState" ADD CONSTRAINT "CharacterState_id_fkey" FOREIGN KEY ("id") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE SET NULL ON UPDATE CASCADE;
