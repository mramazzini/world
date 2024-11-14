-- 1. Add the `"slug"` column to the `"Spell"` table with a unique constraint
ALTER TABLE "Spell" ADD COLUMN "slug" VARCHAR(200) UNIQUE;

-- 2. Populate the `slug` column using URL-friendly formatting based on the `name` column
-- Convert `name` to lowercase, replace spaces and special characters with hyphens
UPDATE "Spell"
SET "slug" = LOWER(REGEXP_REPLACE(name, '[^a-zA-Z0-9]+', '-', 'g'))
WHERE "slug" IS NULL;