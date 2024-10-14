/*
  Warnings:

  - The values [UNALIGNED] on the enum `Alignment` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Alignment_new" AS ENUM ('LAWFUL_GOOD', 'NEUTRAL_GOOD', 'CHAOTIC_GOOD', 'LAWFUL_NEUTRAL', 'TRUE_NEUTRAL', 'CHAOTIC_NEUTRAL', 'LAWFUL_EVIL', 'NEUTRAL_EVIL', 'CHAOTIC_EVIL');
ALTER TABLE "Character" ALTER COLUMN "alignment" TYPE "Alignment_new" USING ("alignment"::text::"Alignment_new");
ALTER TABLE "Creature" ALTER COLUMN "alignmentOptions" TYPE "Alignment_new"[] USING ("alignmentOptions"::text::"Alignment_new"[]);
ALTER TABLE "Enums" ALTER COLUMN "alignment" TYPE "Alignment_new" USING ("alignment"::text::"Alignment_new");
ALTER TYPE "Alignment" RENAME TO "Alignment_old";
ALTER TYPE "Alignment_new" RENAME TO "Alignment";
DROP TYPE "Alignment_old";
COMMIT;
