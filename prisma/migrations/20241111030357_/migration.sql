/*
  Warnings:

  - The primary key for the `Class` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "ColumnedFeature" DROP CONSTRAINT "ColumnedFeature_classId_fkey";

-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_classId_fkey";

-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_spellCastingClassId_fkey";

-- DropForeignKey
ALTER TABLE "SubClass" DROP CONSTRAINT "SubClass_classId_fkey";

-- DropForeignKey
ALTER TABLE "_Character classes" DROP CONSTRAINT "_Character classes_B_fkey";

-- AlterTable
ALTER TABLE "Class" DROP CONSTRAINT "Class_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Class_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Class_id_seq";

-- AlterTable
ALTER TABLE "ColumnedFeature" ALTER COLUMN "classId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Feature" ALTER COLUMN "classId" SET DATA TYPE TEXT,
ALTER COLUMN "spellCastingClassId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "SubClass" ALTER COLUMN "classId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_Character classes" ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_spellCastingClassId_fkey" FOREIGN KEY ("spellCastingClassId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColumnedFeature" ADD CONSTRAINT "ColumnedFeature_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubClass" ADD CONSTRAINT "SubClass_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Character classes" ADD CONSTRAINT "_Character classes_B_fkey" FOREIGN KEY ("B") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;
