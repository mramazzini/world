/*
  Warnings:

  - You are about to drop the column `savingThrows` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `skillChoiceDescription` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `skills` on the `Class` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Choice" ADD COLUMN     "savingThrowChoiceClassId" TEXT,
ADD COLUMN     "skillChoiceClassId" TEXT;

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "savingThrows",
DROP COLUMN "skillChoiceDescription",
DROP COLUMN "skills",
ADD COLUMN     "freeSavingThrowProficiencies" "Ability"[],
ADD COLUMN     "freeSkills" "Skill"[];

-- CreateTable
CREATE TABLE "CharacterChoiceStatus" (
    "characterId" TEXT NOT NULL,
    "choiceId" TEXT NOT NULL,
    "fufilled" BOOLEAN NOT NULL,
    "values" JSONB[],

    CONSTRAINT "CharacterChoiceStatus_pkey" PRIMARY KEY ("characterId","choiceId")
);

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_skillChoiceClassId_fkey" FOREIGN KEY ("skillChoiceClassId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_savingThrowChoiceClassId_fkey" FOREIGN KEY ("savingThrowChoiceClassId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterChoiceStatus" ADD CONSTRAINT "CharacterChoiceStatus_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterChoiceStatus" ADD CONSTRAINT "CharacterChoiceStatus_choiceId_fkey" FOREIGN KEY ("choiceId") REFERENCES "Choice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
