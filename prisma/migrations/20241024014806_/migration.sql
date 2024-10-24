-- CreateTable
CREATE TABLE "_CharacterToFeat" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToFeat_AB_unique" ON "_CharacterToFeat"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToFeat_B_index" ON "_CharacterToFeat"("B");

-- AddForeignKey
ALTER TABLE "_CharacterToFeat" ADD CONSTRAINT "_CharacterToFeat_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToFeat" ADD CONSTRAINT "_CharacterToFeat_B_fkey" FOREIGN KEY ("B") REFERENCES "Feat"("id") ON DELETE CASCADE ON UPDATE CASCADE;
