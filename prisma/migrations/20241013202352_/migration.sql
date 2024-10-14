/*
  Warnings:

  - Changed the type of `conditions` on the `Enums` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('BLINDED', 'CHARMED', 'DEAFENED', 'FATIGUED', 'FRIGHTENED', 'GRAPPLED', 'INCAPACITATED', 'INVISIBLE', 'PARALYZED', 'PETRIFIED', 'POISONED', 'PRONE', 'RESTRAINED', 'STUNNED', 'UNCONSCIOUS', 'EXHAUSTION');

-- AlterTable
ALTER TABLE "Enums" DROP COLUMN "conditions",
ADD COLUMN     "conditions" "Condition" NOT NULL;

-- DropEnum
DROP TYPE "Conditions";
