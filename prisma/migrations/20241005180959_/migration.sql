/*
  Warnings:

  - The values [AVAN] on the enum `Language` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Language_new" AS ENUM ('COMMON', 'DWARVISH', 'ELVISH', 'GIANT', 'GNOMISH', 'GRUNG', 'GOBLIN', 'HALFLING', 'ORC', 'ABYSSAL', 'CELESTIAL', 'DRACONIC', 'DEEP_SPEECH', 'INFERNAL', 'PRIMORDIAL', 'SYLVAN', 'UNDERCOMMON', 'AURAN', 'AARAKOCRA', 'GITH', 'MINOTAUR', 'AQUAN', 'NETHERESE', 'AVEN', 'QUORI');
ALTER TABLE "Enums" ALTER COLUMN "language" TYPE "Language_new" USING ("language"::text::"Language_new");
ALTER TYPE "Language" RENAME TO "Language_old";
ALTER TYPE "Language_new" RENAME TO "Language";
DROP TYPE "Language_old";
COMMIT;
