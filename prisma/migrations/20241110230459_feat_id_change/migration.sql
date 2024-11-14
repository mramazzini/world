-- 1. Add a new temporary String ID column to "Feat"
ALTER TABLE "Feat" ADD COLUMN "id_temp" VARCHAR(255);

-- 2. Populate "id_temp" with the stringified version of "id"
UPDATE "Feat" SET "id_temp" = CAST("id" AS VARCHAR(255));

-- 3. Add a temporary column "B_temp" in "_CharacterToFeat" for the updated foreign key reference
ALTER TABLE "_CharacterToFeat" ADD COLUMN "B_temp" VARCHAR(255);

-- 4. Populate "B_temp" in "_CharacterToFeat" by matching "B" with "Feat.id"
UPDATE "_CharacterToFeat" SET "B_temp" = (SELECT "id_temp" FROM "Feat" WHERE "Feat"."id" = "_CharacterToFeat"."B");

-- 5. Add a temporary column "featId_temp" in "Feature" for the updated foreign key reference
ALTER TABLE "Feature" ADD COLUMN "featId_temp" VARCHAR(255);

-- 6. Populate "featId_temp" in "Feature" by matching "featId" with "Feat.id"
UPDATE "Feature" SET "featId_temp" = (SELECT "id_temp" FROM "Feat" WHERE "Feat"."id" = "Feature"."featId");

-- 7. Drop existing foreign key constraints
ALTER TABLE "_CharacterToFeat" DROP CONSTRAINT "_CharacterToFeat_B_fkey";
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_featId_fkey";

-- 8. Drop the original "id" column in "Feat", "B" column in "_CharacterToFeat", and "featId" in "Feature"
ALTER TABLE "Feat" DROP COLUMN "id";
ALTER TABLE "_CharacterToFeat" DROP COLUMN "B";
ALTER TABLE "Feature" DROP COLUMN "featId";

-- 9. Rename "id_temp" to "id" in "Feat", "B_temp" to "B" in "_CharacterToFeat", and "featId_temp" to "featId" in "Feature"
ALTER TABLE "Feat" RENAME COLUMN "id_temp" TO "id";
ALTER TABLE "_CharacterToFeat" RENAME COLUMN "B_temp" TO "B";
ALTER TABLE "Feature" RENAME COLUMN "featId_temp" TO "featId";

ALTER TABLE "Feat" ADD PRIMARY KEY ("id");

-- 10. Add the new foreign key constraints referencing the updated "id" column in "Feat"
ALTER TABLE "_CharacterToFeat" ADD CONSTRAINT "_CharacterToFeat_B_fkey" FOREIGN KEY ("B") REFERENCES "Feat"("id");
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_featId_fkey" FOREIGN KEY ("featId") REFERENCES "Feat"("id");
