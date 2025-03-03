/*
  Warnings:

  - The values [DAMAGE] on the enum `SpellScaleResultType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SpellScaleResultType_new" AS ENUM ('DAMAGE_OR_HEALING', 'TARGETS', 'DURATION', 'NONE');
ALTER TABLE "Spell" ALTER COLUMN "spellScaleResultType" DROP DEFAULT;
ALTER TABLE "Spell" ALTER COLUMN "spellScaleResultType" TYPE "SpellScaleResultType_new" USING ("spellScaleResultType"::text::"SpellScaleResultType_new");
ALTER TYPE "SpellScaleResultType" RENAME TO "SpellScaleResultType_old";
ALTER TYPE "SpellScaleResultType_new" RENAME TO "SpellScaleResultType";
DROP TYPE "SpellScaleResultType_old";
ALTER TABLE "Spell" ALTER COLUMN "spellScaleResultType" SET DEFAULT 'NONE';
COMMIT;

-- AlterTable
ALTER TABLE "Spell" ALTER COLUMN "spellTargetMaxAmount" SET DEFAULT 1;
