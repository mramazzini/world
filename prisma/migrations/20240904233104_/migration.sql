/*
  Warnings:

  - The values [NULL] on the enum `Alignment` will be removed. If these variants are still used in the database, this will fail.
  - The values [NULL] on the enum `Language` will be removed. If these variants are still used in the database, this will fail.
  - The values [NULL] on the enum `Size` will be removed. If these variants are still used in the database, this will fail.
  - The values [NULL] on the enum `Skill` will be removed. If these variants are still used in the database, this will fail.
  - The values [NULL] on the enum `SpellSchool` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Alignment_new" AS ENUM ('LAWFUL_GOOD', 'NEUTRAL_GOOD', 'CHAOTIC_GOOD', 'LAWFUL_NEUTRAL', 'TRUE_NEUTRAL', 'CHAOTIC_NEUTRAL', 'LAWFUL_EVIL', 'NEUTRAL_EVIL', 'CHAOTIC_EVIL');
ALTER TABLE "Character" ALTER COLUMN "alignment" TYPE "Alignment_new" USING ("alignment"::text::"Alignment_new");
ALTER TYPE "Alignment" RENAME TO "Alignment_old";
ALTER TYPE "Alignment_new" RENAME TO "Alignment";
DROP TYPE "Alignment_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Language_new" AS ENUM ('COMMON', 'DWARVISH', 'ELVISH', 'GIANT', 'GNOMISH', 'GOBLIN', 'HALFLING', 'ORC', 'ABYSSAL', 'CELESTIAL', 'DRACONIC', 'DEEP_SPEECH', 'INFERNAL', 'PRIMORDIAL', 'SYLVAN', 'UNDERCOMMON');
ALTER TABLE "Background" ALTER COLUMN "languages" TYPE "Language_new"[] USING ("languages"::text::"Language_new"[]);
ALTER TYPE "Language" RENAME TO "Language_old";
ALTER TYPE "Language_new" RENAME TO "Language";
DROP TYPE "Language_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Size_new" AS ENUM ('TINY', 'SMALL', 'MEDIUM', 'LARGE', 'HUGE', 'GARGANTUAN');
ALTER TABLE "Race" ALTER COLUMN "size" TYPE "Size_new" USING ("size"::text::"Size_new");
ALTER TABLE "RaceVariant" ALTER COLUMN "size" TYPE "Size_new" USING ("size"::text::"Size_new");
ALTER TYPE "Size" RENAME TO "Size_old";
ALTER TYPE "Size_new" RENAME TO "Size";
DROP TYPE "Size_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Skill_new" AS ENUM ('ACROBATICS', 'ANIMAL_HANDLING', 'ARCANA', 'ATHLETICS', 'DECEPTION', 'HISTORY', 'INSIGHT', 'INTIMIDATION', 'INVESTIGATION', 'MEDICINE', 'NATURE', 'PERCEPTION', 'PERFORMANCE', 'PERSUASION', 'RELIGION', 'SLEIGHT_OF_HAND', 'STEALTH', 'SURVIVAL');
ALTER TABLE "Race" ALTER COLUMN "skillProficiencies" TYPE "Skill_new"[] USING ("skillProficiencies"::text::"Skill_new"[]);
ALTER TABLE "RaceVariant" ALTER COLUMN "skillProficiencies" TYPE "Skill_new"[] USING ("skillProficiencies"::text::"Skill_new"[]);
ALTER TABLE "Background" ALTER COLUMN "skillProficiencies" TYPE "Skill_new"[] USING ("skillProficiencies"::text::"Skill_new"[]);
ALTER TYPE "Skill" RENAME TO "Skill_old";
ALTER TYPE "Skill_new" RENAME TO "Skill";
DROP TYPE "Skill_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "SpellSchool_new" AS ENUM ('ABJURATION', 'CONJURATION', 'DIVINATION', 'ENCHANTMENT', 'EVOCATION', 'ILLUSION', 'NECROMANCY', 'TRANSMUTATION');
ALTER TABLE "Spell" ALTER COLUMN "school" TYPE "SpellSchool_new" USING ("school"::text::"SpellSchool_new");
ALTER TYPE "SpellSchool" RENAME TO "SpellSchool_old";
ALTER TYPE "SpellSchool_new" RENAME TO "SpellSchool";
DROP TYPE "SpellSchool_old";
COMMIT;
