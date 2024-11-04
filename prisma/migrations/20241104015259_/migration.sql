-- CreateTable
CREATE TABLE "SubClassColumnedFeature" (
    "id" SERIAL NOT NULL,
    "subClassId" INTEGER NOT NULL,
    "featureId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rows" TEXT[],

    CONSTRAINT "SubClassColumnedFeature_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubClassColumnedFeature" ADD CONSTRAINT "SubClassColumnedFeature_subClassId_fkey" FOREIGN KEY ("subClassId") REFERENCES "SubClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubClassColumnedFeature" ADD CONSTRAINT "SubClassColumnedFeature_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "Feature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
