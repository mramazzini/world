-- 1. Add a new temporary String ID column to "SubSpecies"
ALTER TABLE "SubSpecies" ADD COLUMN "id_temp" VARCHAR(255);

-- 2. Populate "id_temp" with the stringified version of "id"
UPDATE "SubSpecies" SET "id_temp" = CAST("id" AS VARCHAR(255));

-- 3. Add temporary columns "subSpeciesId_temp" in "Character" and "Feature" for the updated foreign key reference
ALTER TABLE "Character" ADD COLUMN "subSpeciesId_temp" VARCHAR(255);
ALTER TABLE "Feature" ADD COLUMN "subSpeciesId_temp" VARCHAR(255);

-- 4. Populate "subSpeciesId_temp" in "Character" and "Feature" by matching with "SubSpecies.id"
UPDATE "Character" SET "subSpeciesId_temp" = (SELECT "id_temp" FROM "SubSpecies" WHERE "SubSpecies"."id" = "Character"."subSpeciesId");
UPDATE "Feature" SET "subSpeciesId_temp" = (SELECT "id_temp" FROM "SubSpecies" WHERE "SubSpecies"."id" = "Feature"."subSpeciesId");

-- 5. Drop the existing foreign key constraints on "Character.subSpeciesId" and "Feature.subSpeciesId"
ALTER TABLE "Character" DROP CONSTRAINT "Character_subSpeciesId_fkey";
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_subSpeciesId_fkey";

-- 6. Drop the original "id" column in "SubSpecies" and "subSpeciesId" in "Character" and "Feature"
ALTER TABLE "SubSpecies" DROP COLUMN "id";
ALTER TABLE "Character" DROP COLUMN "subSpeciesId";
ALTER TABLE "Feature" DROP COLUMN "subSpeciesId";

-- 7. Rename "id_temp" to "id" in "SubSpecies", and "subSpeciesId_temp" to "subSpeciesId" in "Character" and "Feature"
ALTER TABLE "SubSpecies" RENAME COLUMN "id_temp" TO "id";
ALTER TABLE "Character" RENAME COLUMN "subSpeciesId_temp" TO "subSpeciesId";
ALTER TABLE "Feature" RENAME COLUMN "subSpeciesId_temp" TO "subSpeciesId";

-- 8. Add the primary key constraint to "SubSpecies.id"
ALTER TABLE "SubSpecies" ADD PRIMARY KEY ("id");

-- 9. Add the new foreign key constraints on "Character.subSpeciesId" and "Feature.subSpeciesId" referencing "SubSpecies.id"
ALTER TABLE "Character" ADD CONSTRAINT "Character_subSpeciesId_fkey" FOREIGN KEY ("subSpeciesId") REFERENCES "SubSpecies"("id");
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_subSpeciesId_fkey" FOREIGN KEY ("subSpeciesId") REFERENCES "SubSpecies"("id");
