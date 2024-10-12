/*
  Warnings:

  - You are about to drop the `Statblock` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Statblock";

-- CreateTable
CREATE TABLE "Creature" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "flavorText" VARCHAR(200) NOT NULL,
    "STR" INTEGER NOT NULL,
    "DEX" INTEGER NOT NULL,
    "CON" INTEGER NOT NULL,
    "INT" INTEGER NOT NULL,
    "WIS" INTEGER NOT NULL,
    "CHA" INTEGER NOT NULL,
    "armorClass" INTEGER NOT NULL,
    "armorClassDescription" TEXT NOT NULL,
    "hitpoints" INTEGER NOT NULL,
    "hitpointsDescription" TEXT NOT NULL,
    "speed" INTEGER NOT NULL,
    "speedDescription" TEXT NOT NULL,
    "climbingSpeed" INTEGER,
    "climbingSpeedDescription" TEXT,
    "flyingSpeed" INTEGER,
    "flyingSpeedDescription" TEXT,
    "swimmingSpeed" INTEGER,
    "swimmingSpeedDescription" TEXT,
    "burrowingSpeed" INTEGER,
    "burrowingSpeedDescription" TEXT,
    "darkvision" INTEGER,
    "darkvisionDescription" TEXT,
    "passivePerception" INTEGER,
    "passivePerceptionDescription" TEXT,
    "blindsight" INTEGER,
    "blindsightDescription" TEXT,
    "challengeRating" DOUBLE PRECISION,
    "proficiencyBonus" INTEGER NOT NULL,
    "proficiencyBonusDescription" TEXT NOT NULL,
    "damageImmunities" "DamageTypes"[],
    "damageResistances" "DamageTypes"[],
    "conditionImmunities" TEXT[],
    "features" JSONB[],
    "actions" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Creature_pkey" PRIMARY KEY ("id")
);
