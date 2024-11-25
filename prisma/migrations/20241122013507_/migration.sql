/*
  Warnings:

  - You are about to drop the column `multiclassing` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `multiclassingDescription` on the `Class` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Choice" ADD COLUMN     "classMultiClassingClassId" TEXT;

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "multiclassing",
DROP COLUMN "multiclassingDescription";

-- CreateTable
CREATE TABLE "ClassMultiClassing" (
    "classId" TEXT NOT NULL,
    "multiclassingDescription" TEXT NOT NULL,
    "multiclassing" JSONB NOT NULL,
    "freeMulticlassingSkillProficiencies" "Skill"[],
    "freeMulticlassingToolIdProficiencies" TEXT[],
    "freeMulticlassingToolGroupProficiencies" "ToolGroup"[],
    "freeMulticlassingLanguages" "Language"[],
    "freeMulticlassingArmorProficiencies" "ArmorType"[],
    "freeMulticlassingWeaponGroupProficiencies" "WeaponGroup"[],
    "freeMulticlassingWeaponIdProficiencies" TEXT[],
    "freeMulticlassingSavingThrowProficiencies" "Ability"[],

    CONSTRAINT "ClassMultiClassing_pkey" PRIMARY KEY ("classId")
);

-- AddForeignKey
ALTER TABLE "ClassMultiClassing" ADD CONSTRAINT "ClassMultiClassing_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_classMultiClassingClassId_fkey" FOREIGN KEY ("classMultiClassingClassId") REFERENCES "ClassMultiClassing"("classId") ON DELETE SET NULL ON UPDATE CASCADE;
