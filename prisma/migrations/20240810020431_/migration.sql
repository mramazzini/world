/*
  Warnings:

  - The values [NONE] on the enum `DamageTypes` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
ALTER TYPE "Ability" ADD VALUE 'NULL';

-- AlterEnum
ALTER TYPE "ArmorTypes" ADD VALUE 'NULL';

-- AlterEnum
BEGIN;
CREATE TYPE "DamageTypes_new" AS ENUM ('ACID', 'BLUDGEONING', 'COLD', 'FIRE', 'FORCE', 'LIGHTNING', 'NECROTIC', 'PIERCING', 'POISON', 'PSYCHIC', 'RADIANT', 'SLASHING', 'THUNDER', 'NULL', 'OTHER');
ALTER TABLE "Spell" ALTER COLUMN "damageType" TYPE "DamageTypes_new" USING ("damageType"::text::"DamageTypes_new");
ALTER TABLE "Weapon" ALTER COLUMN "damageType" TYPE "DamageTypes_new" USING ("damageType"::text::"DamageTypes_new");
ALTER TYPE "DamageTypes" RENAME TO "DamageTypes_old";
ALTER TYPE "DamageTypes_new" RENAME TO "DamageTypes";
DROP TYPE "DamageTypes_old";
COMMIT;

-- AlterEnum
ALTER TYPE "Language" ADD VALUE 'NULL';

-- AlterEnum
ALTER TYPE "Size" ADD VALUE 'NULL';

-- AlterEnum
ALTER TYPE "Skill" ADD VALUE 'NULL';

-- AlterEnum
ALTER TYPE "SpellSchool" ADD VALUE 'NULL';
