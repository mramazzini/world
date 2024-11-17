/*
  Warnings:

  - You are about to drop the column `armor` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `equipment` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `equipmentDescription` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `tools` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `weapons` on the `Class` table. All the data in the column will be lost.
  - Added the required column `itemDescription` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Class" DROP COLUMN "armor",
DROP COLUMN "equipment",
DROP COLUMN "tools",
DROP COLUMN "weapons",
ADD COLUMN     "itemDescription" TEXT;

UPDATE "Class" SET "itemDescription" = 'equipmentDescription';

-- make not null
ALTER TABLE "Class" ALTER COLUMN "itemDescription" SET NOT NULL;

-- drop equipmentDescription
ALTER TABLE "Class" DROP COLUMN "equipmentDescription";




-- CreateTable
CREATE TABLE "Choice" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "options" JSONB[],
    "numberOfChoices" INTEGER NOT NULL,
    "toolChoiceClassId" TEXT,
    "weaponChoiceClassId" TEXT,
    "armorChoiceClassId" TEXT,
    "itemChoiceClassId" TEXT,

    CONSTRAINT "Choice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_toolChoiceClassId_fkey" FOREIGN KEY ("toolChoiceClassId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_weaponChoiceClassId_fkey" FOREIGN KEY ("weaponChoiceClassId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_armorChoiceClassId_fkey" FOREIGN KEY ("armorChoiceClassId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_itemChoiceClassId_fkey" FOREIGN KEY ("itemChoiceClassId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;
