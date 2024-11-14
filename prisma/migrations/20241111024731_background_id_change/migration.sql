-- 1. Add a new temporary String ID column to "Background"
ALTER TABLE "Background" ADD COLUMN "id_temp" VARCHAR(255);

-- 2. Populate "id_temp" with the stringified version of "id"
UPDATE "Background" SET "id_temp" = CAST("id" AS VARCHAR(255));

-- 3. Add temporary columns "backgroundId_temp" in "Character" and "Feature" for the updated foreign key reference
ALTER TABLE "Character" ADD COLUMN "backgroundId_temp" VARCHAR(255);
ALTER TABLE "Feature" ADD COLUMN "backgroundId_temp" VARCHAR(255);

-- 4. Populate "backgroundId_temp" in "Character" and "Feature" by matching with "Background.id"
UPDATE "Character" SET "backgroundId_temp" = (SELECT "id_temp" FROM "Background" WHERE "Background"."id" = "Character"."backgroundId");
UPDATE "Feature" SET "backgroundId_temp" = (SELECT "id_temp" FROM "Background" WHERE "Background"."id" = "Feature"."backgroundId");

-- 5. Drop existing foreign key constraints on "Character.backgroundId" and "Feature.backgroundId"
ALTER TABLE "Character" DROP CONSTRAINT "Character_backgroundId_fkey";
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_backgroundId_fkey";

-- 6. Drop the original "id" column in "Background" and "backgroundId" in "Character" and "Feature"
ALTER TABLE "Background" DROP COLUMN "id";
ALTER TABLE "Character" DROP COLUMN "backgroundId";
ALTER TABLE "Feature" DROP COLUMN "backgroundId";

-- 7. Rename "id_temp" to "id" in "Background", and "backgroundId_temp" to "backgroundId" in "Character" and "Feature"
ALTER TABLE "Background" RENAME COLUMN "id_temp" TO "id";
ALTER TABLE "Character" RENAME COLUMN "backgroundId_temp" TO "backgroundId";
ALTER TABLE "Feature" RENAME COLUMN "backgroundId_temp" TO "backgroundId";

-- 8. Add the primary key constraint to "Background.id"
ALTER TABLE "Background" ADD PRIMARY KEY ("id");

-- 9. Add new foreign key constraints on "Character.backgroundId" and "Feature.backgroundId" referencing "Background.id"
ALTER TABLE "Character" ADD CONSTRAINT "Character_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id");
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id");
