/*
  Warnings:

  - You are about to drop the column `Inventory` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `abilityScores` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `armorClass` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `currentHitPoints` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `equippedArmor` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `equippedWeapons` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `experience` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `features` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `hitDice` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `languages` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `maxHitPoints` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `skillExpertise` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `skillProficiencies` on the `Character` table. All the data in the column will be lost.
  - Added the required column `state` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "Inventory",
DROP COLUMN "abilityScores",
DROP COLUMN "armorClass",
DROP COLUMN "currentHitPoints",
DROP COLUMN "equippedArmor",
DROP COLUMN "equippedWeapons",
DROP COLUMN "experience",
DROP COLUMN "features",
DROP COLUMN "hitDice",
DROP COLUMN "languages",
DROP COLUMN "maxHitPoints",
DROP COLUMN "skillExpertise",
DROP COLUMN "skillProficiencies",
ADD COLUMN     "state" JSONB NOT NULL;
