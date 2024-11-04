-- CreateTable
CREATE TABLE "ColumnedFeature" (
    "classId" INTEGER NOT NULL,
    "featureId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rows" TEXT[],

    CONSTRAINT "ColumnedFeature_pkey" PRIMARY KEY ("featureId")
);

-- AddForeignKey
ALTER TABLE "ColumnedFeature" ADD CONSTRAINT "ColumnedFeature_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColumnedFeature" ADD CONSTRAINT "ColumnedFeature_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "Feature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
