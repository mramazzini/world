-- AlterTable
ALTER TABLE "SubClass" ADD COLUMN     "spells" TEXT[];

-- CreateTable
CREATE TABLE "SubClassFeature" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "levels" INTEGER[],
    "options" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "subClassId" INTEGER NOT NULL,

    CONSTRAINT "SubClassFeature_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubClassFeature" ADD CONSTRAINT "SubClassFeature_subClassId_fkey" FOREIGN KEY ("subClassId") REFERENCES "SubClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
