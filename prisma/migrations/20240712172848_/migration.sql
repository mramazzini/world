-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "displaySpellList" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "CustomField" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level1" TEXT[],
    "level2" TEXT[],
    "level3" TEXT[],
    "level4" TEXT[],
    "level5" TEXT[],
    "level6" TEXT[],
    "level7" TEXT[],
    "level8" TEXT[],
    "level9" TEXT[],
    "level10" TEXT[],
    "level11" TEXT[],
    "level12" TEXT[],
    "level13" TEXT[],
    "level14" TEXT[],
    "level15" TEXT[],
    "level16" TEXT[],
    "level17" TEXT[],
    "level18" TEXT[],
    "level19" TEXT[],
    "level20" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "classId" INTEGER,

    CONSTRAINT "CustomField_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CustomField" ADD CONSTRAINT "CustomField_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;
