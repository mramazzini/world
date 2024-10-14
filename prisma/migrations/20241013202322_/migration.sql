/*
  Warnings:

  - Added the required column `armorClassProtocol` to the `Enums` table without a default value. This is not possible if the table is not empty.
  - Added the required column `associatedModel` to the `Enums` table without a default value. This is not possible if the table is not empty.
  - Added the required column `commentType` to the `Enums` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conditions` to the `Enums` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Conditions" AS ENUM ('BLINDED', 'CHARMED', 'DEAFENED', 'FATIGUED', 'FRIGHTENED', 'GRAPPLED', 'INCAPACITATED', 'INVISIBLE', 'PARALYZED', 'PETRIFIED', 'POISONED', 'PRONE', 'RESTRAINED', 'STUNNED', 'UNCONSCIOUS', 'EXHAUSTION');

-- AlterTable
ALTER TABLE "Enums" ADD COLUMN     "armorClassProtocol" "ArmorClassProtocol" NOT NULL,
ADD COLUMN     "associatedModel" "AssociatedModel" NOT NULL,
ADD COLUMN     "commentType" "CommentType" NOT NULL,
ADD COLUMN     "conditions" "Conditions" NOT NULL;
