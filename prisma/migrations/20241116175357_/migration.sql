/*
  Warnings:

  - You are about to drop the column `armorClassReasons` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `pendingLinks` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `armorChoiceClassId` on the `Choice` table. All the data in the column will be lost.
  - You are about to drop the column `itemChoiceClassId` on the `Choice` table. All the data in the column will be lost.
  - You are about to drop the column `numberOfChoices` on the `Choice` table. All the data in the column will be lost.
  - You are about to drop the column `savingThrowChoiceClassId` on the `Choice` table. All the data in the column will be lost.
  - You are about to drop the column `skillChoiceClassId` on the `Choice` table. All the data in the column will be lost.
  - You are about to drop the column `toolChoiceClassId` on the `Choice` table. All the data in the column will be lost.
  - You are about to drop the column `weaponChoiceClassId` on the `Choice` table. All the data in the column will be lost.
  - Added the required column `amountOfOptionToChoose` to the `Choice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `callbackProtocol` to the `Choice` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `Choice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ChoiceReturnType" AS ENUM ('ABILITY_SCORE', 'ABILITY_SCORE_VALUE', 'SKILL', 'TOOL_ID', 'WEAPON_ID', 'ARMORTYPE', 'ITEM_ID', 'SPELL_ID', 'SAVING_THROW');

-- CreateEnum
CREATE TYPE "CallbackProtocol" AS ENUM ('setToolProficiency', 'setWeaponProficiency', 'setArmorProficiency', 'addToInventory', 'setSkillProficiency', 'setSkillExpertise', 'setLanguageProficiency', 'setSavingThrowProficiency', 'setAbilityScore');

-- DropForeignKey
ALTER TABLE "Choice" DROP CONSTRAINT "Choice_armorChoiceClassId_fkey";

-- DropForeignKey
ALTER TABLE "Choice" DROP CONSTRAINT "Choice_itemChoiceClassId_fkey";

-- DropForeignKey
ALTER TABLE "Choice" DROP CONSTRAINT "Choice_savingThrowChoiceClassId_fkey";

-- DropForeignKey
ALTER TABLE "Choice" DROP CONSTRAINT "Choice_skillChoiceClassId_fkey";

-- DropForeignKey
ALTER TABLE "Choice" DROP CONSTRAINT "Choice_toolChoiceClassId_fkey";

-- DropForeignKey
ALTER TABLE "Choice" DROP CONSTRAINT "Choice_weaponChoiceClassId_fkey";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "armorClassReasons",
DROP COLUMN "pendingLinks";

-- AlterTable
ALTER TABLE "Choice" DROP COLUMN "armorChoiceClassId",
DROP COLUMN "itemChoiceClassId",
DROP COLUMN "numberOfChoices",
DROP COLUMN "savingThrowChoiceClassId",
DROP COLUMN "skillChoiceClassId",
DROP COLUMN "toolChoiceClassId",
DROP COLUMN "weaponChoiceClassId",
ADD COLUMN     "amountOfOptionToChoose" INTEGER NOT NULL,
ADD COLUMN     "callbackProtocol" "WorkshopProtocol" NOT NULL,
ADD COLUMN     "classId" TEXT,
DROP COLUMN "type",
ADD COLUMN     "type" "ChoiceReturnType" NOT NULL;

-- DropEnum
DROP TYPE "ChoiceType";

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;
