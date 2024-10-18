/*
  Warnings:

  - The values [MAGICAL_BLUDGEONING,MAGICAL_PIERCING,MAGICAL_SLASHING] on the enum `DamageTypes` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DamageTypes_new" AS ENUM ('ACID', 'BLUDGEONING', 'COLD', 'FIRE', 'FORCE', 'LIGHTNING', 'NECROTIC', 'PIERCING', 'POISON', 'PSYCHIC', 'RADIANT', 'SLASHING', 'THUNDER', 'NON_MAGICAL_BLUDGEONING', 'NON_MAGICAL_PIERCING', 'NON_MAGICAL_SLASHING', 'NONE', 'OTHER');
ALTER TABLE "Spell" ALTER COLUMN "damageType" TYPE "DamageTypes_new" USING ("damageType"::text::"DamageTypes_new");
ALTER TABLE "Species" ALTER COLUMN "resistanceTo" TYPE "DamageTypes_new"[] USING ("resistanceTo"::text::"DamageTypes_new"[]);
ALTER TABLE "Species" ALTER COLUMN "immuneTo" TYPE "DamageTypes_new"[] USING ("immuneTo"::text::"DamageTypes_new"[]);
ALTER TABLE "Species" ALTER COLUMN "vulnerableTo" TYPE "DamageTypes_new"[] USING ("vulnerableTo"::text::"DamageTypes_new"[]);
ALTER TABLE "SubSpecies" ALTER COLUMN "resistanceTo" TYPE "DamageTypes_new"[] USING ("resistanceTo"::text::"DamageTypes_new"[]);
ALTER TABLE "SubSpecies" ALTER COLUMN "immuneTo" TYPE "DamageTypes_new"[] USING ("immuneTo"::text::"DamageTypes_new"[]);
ALTER TABLE "SubSpecies" ALTER COLUMN "vulnerableTo" TYPE "DamageTypes_new"[] USING ("vulnerableTo"::text::"DamageTypes_new"[]);
ALTER TABLE "Creature" ALTER COLUMN "damageImmunities" TYPE "DamageTypes_new"[] USING ("damageImmunities"::text::"DamageTypes_new"[]);
ALTER TABLE "Creature" ALTER COLUMN "damageResistances" TYPE "DamageTypes_new"[] USING ("damageResistances"::text::"DamageTypes_new"[]);
ALTER TABLE "Creature" ALTER COLUMN "damageVulnerabilities" TYPE "DamageTypes_new"[] USING ("damageVulnerabilities"::text::"DamageTypes_new"[]);
ALTER TABLE "Enums" ALTER COLUMN "damageTypes" TYPE "DamageTypes_new" USING ("damageTypes"::text::"DamageTypes_new");
ALTER TYPE "DamageTypes" RENAME TO "DamageTypes_old";
ALTER TYPE "DamageTypes_new" RENAME TO "DamageTypes";
DROP TYPE "DamageTypes_old";
COMMIT;
