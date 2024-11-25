/*
  Warnings:

  - You are about to drop the column `rolls` on the `Feature` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[effectId]` on the table `Feature` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "ChainType" AS ENUM ('REPLACE', 'ADD', 'NONE');

-- CreateEnum
CREATE TYPE "RefreshEvent" AS ENUM ('SHORT_REST', 'LONG_REST', 'TURN', 'ROUND', 'OTHER');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ChoiceProtocol" ADD VALUE 'SET_COMPREHENSIVE_HALF_PROFICIENCY';
ALTER TYPE "ChoiceProtocol" ADD VALUE 'SET_COMPREHENSIVE_PROFICIENCY';
ALTER TYPE "ChoiceProtocol" ADD VALUE 'SET_COMPREHENSIVE_EXPERTISE';
ALTER TYPE "ChoiceProtocol" ADD VALUE 'SET_SKILL_HALF_PROFICIENCY';
ALTER TYPE "ChoiceProtocol" ADD VALUE 'ADD_FREE_SPELL';
ALTER TYPE "ChoiceProtocol" ADD VALUE 'ADD_KNOWN_SPELL';

-- AlterTable
ALTER TABLE "Choice" ADD COLUMN     "effectId" TEXT;

-- AlterTable
ALTER TABLE "Feature" DROP COLUMN "rolls",
ADD COLUMN     "effectId" TEXT,
ADD COLUMN     "exclusiveFeatureGroupId" TEXT;

-- CreateTable
CREATE TABLE "ExclusiveFeatureGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ExclusiveFeatureGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Effect" (
    "id" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "prerequisites" JSONB NOT NULL,
    "rollFormulas" TEXT[],
    "chainedEffectId" TEXT,
    "childChainType" "ChainType" NOT NULL DEFAULT 'NONE',
    "multiAttackAmount" INTEGER,

    CONSTRAINT "Effect_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EffectToResource" (
    "effectId" TEXT NOT NULL,
    "resourceId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "refreshOn" "RefreshEvent" NOT NULL,

    CONSTRAINT "EffectToResource_pkey" PRIMARY KEY ("effectId","resourceId")
);

-- CreateTable
CREATE TABLE "CustomResource" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "CustomResource_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Effect_chainedEffectId_key" ON "Effect"("chainedEffectId");

-- CreateIndex
CREATE UNIQUE INDEX "Feature_effectId_key" ON "Feature"("effectId");

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_effectId_fkey" FOREIGN KEY ("effectId") REFERENCES "Effect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_effectId_fkey" FOREIGN KEY ("effectId") REFERENCES "Effect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_exclusiveFeatureGroupId_fkey" FOREIGN KEY ("exclusiveFeatureGroupId") REFERENCES "ExclusiveFeatureGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Effect" ADD CONSTRAINT "Effect_chainedEffectId_fkey" FOREIGN KEY ("chainedEffectId") REFERENCES "Effect"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EffectToResource" ADD CONSTRAINT "EffectToResource_effectId_fkey" FOREIGN KEY ("effectId") REFERENCES "Effect"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EffectToResource" ADD CONSTRAINT "EffectToResource_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "CustomResource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
