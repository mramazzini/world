-- CreateTable
CREATE TABLE "EffectGrantsFeat" (
    "effectId" TEXT NOT NULL,
    "featId" TEXT NOT NULL,

    CONSTRAINT "EffectGrantsFeat_pkey" PRIMARY KEY ("effectId","featId")
);

-- AddForeignKey
ALTER TABLE "EffectGrantsFeat" ADD CONSTRAINT "EffectGrantsFeat_effectId_fkey" FOREIGN KEY ("effectId") REFERENCES "Effect"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EffectGrantsFeat" ADD CONSTRAINT "EffectGrantsFeat_featId_fkey" FOREIGN KEY ("featId") REFERENCES "Feat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
