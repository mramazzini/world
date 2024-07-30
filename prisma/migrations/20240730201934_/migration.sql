/*
  Warnings:

  - You are about to drop the column `cantripsKnown` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `spellsKnown` on the `Class` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Class" DROP COLUMN "cantripsKnown",
DROP COLUMN "spellsKnown";

-- AlterTable
ALTER TABLE "SubClass" ADD COLUMN     "casterTypeId" INTEGER NOT NULL DEFAULT 3,
ADD COLUMN     "prepareSpellInfo" TEXT,
ADD COLUMN     "spellCaster" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "spellCastingAbility" "Ability",
ADD COLUMN     "spellCastingInfo" TEXT;

-- AddForeignKey
ALTER TABLE "SubClass" ADD CONSTRAINT "SubClass_casterTypeId_fkey" FOREIGN KEY ("casterTypeId") REFERENCES "CasterType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
