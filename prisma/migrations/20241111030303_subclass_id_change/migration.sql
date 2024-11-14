/*
  Warnings:

  - The primary key for the `SubClass` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_spellCastingSubclassId_fkey";

-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_subClassId_fkey";

-- DropForeignKey
ALTER TABLE "SubClassColumnedFeature" DROP CONSTRAINT "SubClassColumnedFeature_subClassId_fkey";

-- DropForeignKey
ALTER TABLE "_Character subClasses" DROP CONSTRAINT "_Character subClasses_B_fkey";

-- AlterTable
ALTER TABLE "Feature" ALTER COLUMN "subClassId" SET DATA TYPE TEXT,
ALTER COLUMN "spellCastingSubclassId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "SubClass" DROP CONSTRAINT "SubClass_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "SubClass_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "SubClass_id_seq";

-- AlterTable
ALTER TABLE "SubClassColumnedFeature" ALTER COLUMN "subClassId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_Character subClasses" ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_subClassId_fkey" FOREIGN KEY ("subClassId") REFERENCES "SubClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_spellCastingSubclassId_fkey" FOREIGN KEY ("spellCastingSubclassId") REFERENCES "SubClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubClassColumnedFeature" ADD CONSTRAINT "SubClassColumnedFeature_subClassId_fkey" FOREIGN KEY ("subClassId") REFERENCES "SubClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Character subClasses" ADD CONSTRAINT "_Character subClasses_B_fkey" FOREIGN KEY ("B") REFERENCES "SubClass"("id") ON DELETE CASCADE ON UPDATE CASCADE;
