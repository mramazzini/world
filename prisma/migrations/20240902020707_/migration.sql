/*
  Warnings:

  - The values [COMMON] on the enum `ItemTypes` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `rarity` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ItemTypes_new" AS ENUM ('MAGIC', 'CLOTHES', 'ARCANE_FOCUS', 'DRUIDIC_FOCUS', 'HOLY_SYMBOL', 'CONTAINER', 'WEAPON', 'ARMOR', 'AMMUNITION', 'COMPONENT_POUCH', 'SPELL_BOOK', 'EXPLOSIVE', 'EQUIPMENT_PACK', 'MISC', 'TOOL', 'CURRENCY', 'SPELL_SCROLL');
ALTER TABLE "Item" ALTER COLUMN "types" TYPE "ItemTypes_new"[] USING ("types"::text::"ItemTypes_new"[]);
ALTER TYPE "ItemTypes" RENAME TO "ItemTypes_old";
ALTER TYPE "ItemTypes_new" RENAME TO "ItemTypes";
DROP TYPE "ItemTypes_old";
COMMIT;

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "rarity" "Rarity" NOT NULL;
