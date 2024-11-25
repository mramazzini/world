/*
  Warnings:

  - You are about to drop the column `classMultiClassingClassId` on the `Choice` table. All the data in the column will be lost.
  - You are about to drop the `ClassMultiClassing` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Choice" DROP CONSTRAINT "Choice_classMultiClassingClassId_fkey";

-- DropForeignKey
ALTER TABLE "ClassMultiClassing" DROP CONSTRAINT "ClassMultiClassing_classId_fkey";

-- AlterTable
ALTER TABLE "Choice" DROP COLUMN "classMultiClassingClassId",
ADD COLUMN     "multiClassingId" TEXT;

-- DropTable
DROP TABLE "ClassMultiClassing";

-- CreateTable
CREATE TABLE "MultiClassingInfo" (
    "classId" TEXT NOT NULL,
    "multiclassingDescription" TEXT NOT NULL,
    "prerequisite" JSONB NOT NULL,
    "freeSkillProficiencies" "Skill"[],
    "freeToolIdProficiencies" TEXT[],
    "freeToolGroupProficiencies" "ToolGroup"[],
    "freeLanguages" "Language"[],
    "freeArmorProficiencies" "ArmorType"[],
    "freeWeaponGroupProficiencies" "WeaponGroup"[],
    "freeWeaponIdProficiencies" TEXT[],
    "freeSavingThrowProficiencies" "Ability"[],

    CONSTRAINT "MultiClassingInfo_pkey" PRIMARY KEY ("classId")
);

-- AddForeignKey
ALTER TABLE "MultiClassingInfo" ADD CONSTRAINT "MultiClassingInfo_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_multiClassingId_fkey" FOREIGN KEY ("multiClassingId") REFERENCES "MultiClassingInfo"("classId") ON DELETE SET NULL ON UPDATE CASCADE;
