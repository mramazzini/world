-- AlterTable
ALTER TABLE "Effect" ADD COLUMN     "toolProficienciesGroup" "ToolGroup"[];

-- CreateTable
CREATE TABLE "EffectToolProficiency" (
    "effectId" TEXT NOT NULL,
    "toolId" TEXT NOT NULL,
    "isExpertise" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "EffectToolProficiency_pkey" PRIMARY KEY ("effectId","toolId")
);

-- AddForeignKey
ALTER TABLE "EffectToolProficiency" ADD CONSTRAINT "EffectToolProficiency_effectId_fkey" FOREIGN KEY ("effectId") REFERENCES "Effect"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EffectToolProficiency" ADD CONSTRAINT "EffectToolProficiency_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
